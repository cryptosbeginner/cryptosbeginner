import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 600;

// GET /api/token-safety?address=0x...&chain=1
// Server-side proxy to the GoPlus Security Token Security API (free tier, no key).
// GoPlus is the same scanner embedded in CoinGecko, OKX Wallet, and Trust Wallet.

const GOPLUS_BASE = "https://api.gopluslabs.io/api/v1/token_security";
const TTL_MS = 10 * 60 * 1000;

type ChainKind = "evm" | "solana" | "tron";

const CHAINS: Record<string, { label: string; kind: ChainKind }> = {
  "1": { label: "Ethereum", kind: "evm" },
  "56": { label: "BNB Chain", kind: "evm" },
  "137": { label: "Polygon", kind: "evm" },
  "8453": { label: "Base", kind: "evm" },
  "42161": { label: "Arbitrum", kind: "evm" },
  "10": { label: "Optimism", kind: "evm" },
  "43114": { label: "Avalanche", kind: "evm" },
  "324": { label: "zkSync Era", kind: "evm" },
  "59144": { label: "Linea", kind: "evm" },
  "534352": { label: "Scroll", kind: "evm" },
  "81457": { label: "Blast", kind: "evm" },
  "169": { label: "Manta Pacific", kind: "evm" },
  "146": { label: "Sonic", kind: "evm" },
  "80094": { label: "Berachain", kind: "evm" },
  "480": { label: "World Chain", kind: "evm" },
  "1868": { label: "Soneium", kind: "evm" },
  "130": { label: "Unichain", kind: "evm" },
  "5000": { label: "Mantle", kind: "evm" },
  "204": { label: "opBNB", kind: "evm" },
  "25": { label: "Cronos", kind: "evm" },
  "100": { label: "Gnosis", kind: "evm" },
  "321": { label: "KCC", kind: "evm" },
  "solana": { label: "Solana", kind: "solana" },
  "tron": { label: "Tron", kind: "tron" },
};

const EVM_RE = /^0x[0-9a-fA-F]{40}$/;
const SOL_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const TRON_RE = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;

const EVM_DEAD = new Set([
  "0x0000000000000000000000000000000000000000",
  "0x000000000000000000000000000000000000dead",
]);

type CacheEntry = { expires: number; body: Record<string, unknown> };
const cache = new Map<string, CacheEntry>();

export type TokenSafetyFinding = {
  key: string;
  label: string;
  status: "pass" | "warn" | "fail" | "unknown";
  detail: string;
  explanation: string;
};

export type TokenSafetyResult = {
  address: string;
  chain: string;
  chainLabel: string;
  tokenName: string | null;
  tokenSymbol: string | null;
  verdict: "safe" | "caution" | "high-risk" | "unknown";
  verdictReason: string;
  findings: TokenSafetyFinding[];
  timestamp: string;
  cached: boolean;
  dataSource: string;
};

function bool(v: unknown): boolean {
  return v === "1" || v === 1 || v === true;
}

function taxPct(v: unknown): number | null {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return n * 100;
}

function fmtPct(p: number | null): string {
  if (p === null) return "not reported";
  return p === 0 ? "0%" : `${p.toFixed(p < 1 ? 2 : 1)}%`;
}

function shortAddr(a: string): string {
  return a.length > 14 ? `${a.slice(0, 6)}...${a.slice(-4)}` : a;
}

function buildFindings(r: Record<string, unknown>, kind: ChainKind): TokenSafetyFinding[] {
  const findings: TokenSafetyFinding[] = [];
  const honeypot = bool(r.is_honeypot);
  const cannotBuy = bool(r.cannot_buy);
  const cannotSellAll = bool(r.cannot_sell_all);
  const buyTax = taxPct(r.buy_tax);
  const sellTax = taxPct(r.sell_tax);
  const mintable = bool(r.is_mintable);
  const proxy = bool(r.is_proxy);
  const openSource = bool(r.is_open_source);
  const trusted = bool(r.trust_list);
  const holderCount = Number(r.holder_count);

  const ownerRaw = typeof r.owner_address === "string" ? r.owner_address : "";
  const ownerRenounced =
    kind === "evm"
      ? !ownerRaw || EVM_DEAD.has(ownerRaw.toLowerCase())
      : !ownerRaw;

  findings.push({
    key: "honeypot",
    label: "Honeypot check",
    status: honeypot ? "fail" : "pass",
    detail: honeypot ? "Flagged as a honeypot" : "Not flagged as a honeypot",
    explanation: honeypot
      ? "This contract lets people buy but blocks or punishes selling. Do not buy this token."
      : "The scanner did not detect honeypot logic. This is one check only, not a safety guarantee.",
  });

  findings.push({
    key: "sell",
    label: "Can you sell",
    status: cannotSellAll ? "fail" : cannotBuy ? "warn" : "pass",
    detail: cannotSellAll
      ? "Holders cannot sell all of their tokens"
      : cannotBuy
        ? "Buying may be restricted"
        : "No sell restrictions detected",
    explanation: cannotSellAll
      ? "The contract traps at least part of your balance. This is how most rug pulls keep your money."
      : "Nothing in the contract code stops you from selling what you bought.",
  });

  const highTax = (sellTax !== null && sellTax > 10) || (buyTax !== null && buyTax > 10);
  findings.push({
    key: "tax",
    label: "Buy and sell tax",
    status: highTax ? "warn" : "pass",
    detail: `Buy ${fmtPct(buyTax)}, sell ${fmtPct(sellTax)}`,
    explanation: highTax
      ? "A tax above 10% eats a big chunk of every trade. High sell taxes are a classic slow-rug setup."
      : "Trading taxes look normal. Remember the tax can sometimes be changed by the contract owner.",
  });

  findings.push({
    key: "mint",
    label: "Can more tokens be printed",
    status: mintable ? "warn" : "pass",
    detail: mintable ? "The supply can be increased by the owner" : "No mint function detected",
    explanation: mintable
      ? "Whoever controls this contract can create new tokens out of thin air, diluting your share. Check who that is before trusting it."
      : "The contract has no way to print new tokens, so your share of the supply cannot be diluted this way.",
  });

  findings.push({
    key: "proxy",
    label: "Upgradeable contract",
    status: proxy ? "warn" : "pass",
    detail: proxy ? "This is a proxy: the code behind it can be swapped" : "Not a proxy contract",
    explanation: proxy
      ? "The team can replace the contract logic at any time, including with malicious code. Only acceptable if you deeply trust the team."
      : "What you see is what you get. The contract logic cannot be silently replaced.",
  });

  findings.push({
    key: "owner",
    label: "Ownership",
    status: ownerRenounced ? "pass" : "warn",
    detail: ownerRenounced
      ? "Ownership renounced or no admin owner reported"
      : `Admin owner set: ${shortAddr(ownerRaw)}`,
    explanation: ownerRenounced
      ? "Nobody holds the admin keys, so privileged functions like pausing trading cannot be used against holders."
      : "An admin wallet still controls the contract. If that wallet is compromised or malicious, holders are exposed.",
  });

  findings.push({
    key: "source",
    label: "Contract source code",
    status: openSource ? "pass" : "warn",
    detail: openSource ? "Source code verified and public" : "Source code not verified",
    explanation: openSource
      ? "Anyone can read the contract code and check what it does. Unverified code hides what the contract really does."
      : "The deployed code cannot be matched to public source. Treat everything about this token with extra suspicion.",
  });

  findings.push({
    key: "holders",
    label: "Holder distribution",
    status: Number.isFinite(holderCount) && holderCount > 0 ? "pass" : "unknown",
    detail: Number.isFinite(holderCount) && holderCount > 0
      ? `${holderCount.toLocaleString("en-US")} holders`
      : "Holder data not available",
    explanation: "Very few holders or one wallet holding most of the supply means a single seller can crash the price. Wide distribution is healthier.",
  });

  if (trusted) {
    findings.push({
      key: "trust",
      label: "Trust list",
      status: "pass",
      detail: "On GoPlus trust list",
      explanation: "GoPlus marks this as a widely recognized token. This is a reputation signal, not a safety certificate.",
    });
  }

  return findings;
}

function verdictFor(findings: TokenSafetyFinding[]): { verdict: TokenSafetyResult["verdict"]; reason: string } {
  const byKey = (k: string) => findings.find((f) => f.key === k);
  if (byKey("honeypot")?.status === "fail" || byKey("sell")?.status === "fail") {
    return { verdict: "high-risk", reason: "Critical red flags: honeypot logic or sell restrictions detected." };
  }
  const warns = findings.filter((f) => f.status === "warn").length;
  if (warns > 0) {
    return { verdict: "caution", reason: `${warns} warning${warns > 1 ? "s" : ""} found. Read each one before putting money in.` };
  }
  if (findings.every((f) => f.status === "pass" || f.status === "unknown")) {
    return { verdict: "safe", reason: "No red flags detected in the contract scan." };
  }
  return { verdict: "unknown", reason: "Not enough data to judge this token." };
}

function noDataResult(address: string, chain: string, label: string, timestamp: string): Omit<TokenSafetyResult, "cached"> {
  return {
    address, chain, chainLabel: label,
    tokenName: null, tokenSymbol: null,
    verdict: "unknown",
    verdictReason: `GoPlus could not scan this token on ${label} right now. Try again later.`,
    findings: [], timestamp, dataSource: "GoPlus Security",
  };
}

async function checkToken(address: string, chain: string): Promise<Omit<TokenSafetyResult, "cached">> {
  const { label, kind } = CHAINS[chain];
  const url = `${GOPLUS_BASE}/${chain}?contract_addresses=${encodeURIComponent(address)}`;
  const timestamp = new Date().toISOString();
  const res = await fetch(url, { headers: { "User-Agent": "cryptosbeginner-token-safety/1.0" } });
  if (!res.ok) return noDataResult(address, chain, label, timestamp);
  const payload = (await res.json()) as { code?: number; result?: Record<string, Record<string, unknown>> };
  if (payload?.code !== 1) return noDataResult(address, chain, label, timestamp);
  const raw = payload?.result?.[address] ?? payload?.result?.[address.toLowerCase()];

  if (!raw || typeof raw !== "object" || Object.keys(raw).length === 0) {
    return noDataResult(address, chain, label, timestamp);
  }

  const findings = buildFindings(raw, kind);
  const { verdict, reason } = verdictFor(findings);
  return {
    address, chain, chainLabel: label,
    tokenName: typeof raw.token_name === "string" ? raw.token_name : null,
    tokenSymbol: typeof raw.token_symbol === "string" ? raw.token_symbol : null,
    verdict, verdictReason: reason, findings, timestamp,
    dataSource: "GoPlus Security",
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawAddress = (searchParams.get("address") ?? "").trim();
  const chain = searchParams.get("chain") ?? "1";

  const chainInfo = CHAINS[chain];
  if (!chainInfo) {
    return NextResponse.json({ error: "Unsupported chain." }, { status: 400 });
  }

  const valid =
    chainInfo.kind === "evm" ? EVM_RE.test(rawAddress)
    : chainInfo.kind === "solana" ? SOL_RE.test(rawAddress)
    : TRON_RE.test(rawAddress);
  if (!valid) {
    const hint =
      chainInfo.kind === "evm"
        ? "Enter a valid contract address (0x followed by 40 hex characters)."
        : chainInfo.kind === "solana"
          ? "Enter a valid Solana token address (base58, 32 to 44 characters)."
          : "Enter a valid Tron token address (starts with T, 34 characters).";
    return NextResponse.json({ error: hint }, { status: 400 });
  }

  const key = `${chain}:${rawAddress.toLowerCase()}`;
  const now = Date.now();
  const hit = cache.get(key);
  if (hit && hit.expires > now) {
    return NextResponse.json({ ...(hit.body as object), cached: true, timestamp: new Date().toISOString() }, {
      headers: { "Cache-Control": "s-maxage=600, stale-while-revalidate=600" },
    });
  }

  try {
    const result = await checkToken(rawAddress, chain);
    cache.set(key, { expires: now + TTL_MS, body: result });
    if (cache.size > 500) {
      const oldest = cache.keys().next().value;
      if (oldest) cache.delete(oldest);
    }
    return NextResponse.json({ ...result, cached: false }, {
      headers: { "Cache-Control": "s-maxage=600, stale-while-revalidate=600" },
    });
  } catch {
    return NextResponse.json(
      { error: `Could not reach the security scanner for ${chainInfo.label}. Try again in a moment.` },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
