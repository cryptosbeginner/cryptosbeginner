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

// Codex (the Defined.fi data API) is the primary risk source when
// CODEX_API_KEY is set. The free tier is metered in compute units, so scans
// ride the same 10 minute cache as GoPlus and each fresh scan costs a single
// GraphQL request. When Codex has no data, the GoPlus result stands alone.
const CODEX_ENDPOINT = "https://graph.codex.io/graphql";

const CODEX_NETWORK_IDS: Record<string, number> = {
  solana: 1399811149,
  tron: 728126428,
};

function codexNetworkId(chain: string): number | null {
  if (CODEX_NETWORK_IDS[chain]) return CODEX_NETWORK_IDS[chain];
  const n = Number(chain);
  return Number.isFinite(n) && n > 0 ? n : null;
}

type CodexRisk = {
  verdict: string | null;
  score: number | null;
  coverage: string | null;
  reasons: string[];
  buyTax: number | null;
  sellTax: number | null;
  bundlerServices: string[];
};

type CodexToken = {
  name: string | null;
  symbol: string | null;
  top10HoldersPercent: number | null;
  risk: CodexRisk | null;
};

const CODEX_QUERY = `query TokenSafety($address: String!, $networkId: Int!) {
  token(input: { address: $address, networkId: $networkId }) {
    name
    symbol
    top10HoldersPercent
    risk { verdict score coverage reasons buyTax sellTax bundlerServices }
  }
}`;

async function fetchCodex(address: string, chain: string): Promise<CodexToken | null> {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) return null;
  const networkId = codexNetworkId(chain);
  if (networkId === null) return null;
  try {
    const res = await fetch(CODEX_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: apiKey },
      body: JSON.stringify({ query: CODEX_QUERY, variables: { address, networkId } }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as { data?: { token?: Record<string, unknown> | null } };
    const t = payload?.data?.token;
    if (!t) return null;
    const r = (t.risk ?? null) as Record<string, unknown> | null;
    return {
      name: typeof t.name === "string" ? t.name : null,
      symbol: typeof t.symbol === "string" ? t.symbol : null,
      top10HoldersPercent: typeof t.top10HoldersPercent === "number" ? t.top10HoldersPercent : null,
      risk: r
        ? {
            verdict: typeof r.verdict === "string" ? r.verdict : null,
            score: typeof r.score === "number" ? r.score : null,
            coverage: typeof r.coverage === "string" ? r.coverage : null,
            reasons: Array.isArray(r.reasons) ? (r.reasons as string[]) : [],
            buyTax: typeof r.buyTax === "number" ? r.buyTax : null,
            sellTax: typeof r.sellTax === "number" ? r.sellTax : null,
            bundlerServices: Array.isArray(r.bundlerServices) ? (r.bundlerServices as string[]) : [],
          }
        : null,
    };
  } catch {
    return null;
  }
}

const REASON_LABELS: Record<string, string> = {
  PROOF_HONEYPOT_SIM: "Honeypot proven in a simulated trade",
  PROOF_NON_TRANSFERABLE: "Token cannot be transferred",
  PROOF_TRANSFER_FEE_100: "100% transfer fee",
  PROOF_DEFAULT_FROZEN: "Wallets frozen by default",
  PROOF_POOL_TRAP_SIM: "Pool trap proven in simulation",
  AUTH_MINT: "The owner can mint new tokens",
  AUTH_FREEZE: "The owner can freeze wallets",
  AUTH_PERMANENT_DELEGATE: "A permanent delegate can move holder funds",
  AUTH_TRANSFER_HOOK: "Transfers run through a custom hook contract",
  AUTH_PAUSABLE: "Trading can be paused by the owner",
  AUTH_OWNER_NOT_RENOUNCED: "Contract ownership has not been renounced",
  AUTH_CAN_TRANSFER_OWNERSHIP: "Ownership can be handed to another wallet",
  TAX_BUY_HIGH: "Buy tax of 10% or more",
  TAX_SELL_HIGH: "Sell tax of 10% or more",
  TAX_HONEYPOT_UNCONFIRMED: "Possible honeypot, not yet confirmed",
  TAX_PAUSED: "Trading is currently paused",
  TAX_POOL_TRAP: "Pool trap pattern in the trading setup",
  TAX_POOL_TRAP_HOOK_SHARED: "Pool hook shared with known trap tokens",
  LIQ_MINIMAL: "Liquidity is minimal",
  LIQ_UNKNOWN: "Liquidity could not be verified",
  LIQ_RUG_CLIFF: "Liquidity pattern matches tokens that rugged before",
  LIQ_UNLOCKED: "Liquidity is not locked",
  LIQ_DRAINING: "Liquidity is draining out of the pool",
  HOLD_TOP10_CONCENTRATED: "The top 10 holders control a large share",
  HOLD_DEV_HEAVY: "The developer wallet holds a large share",
  HOLD_SNIPER_HEAVY: "Sniper wallets hold a large share",
  HOLD_BUNDLER_HEAVY: "Bundler wallets hold a large share",
  HOLD_INSIDER_HEAVY: "Insider wallets hold a large share",
  HOLD_INSIDER_DUMPED: "Insiders have already dumped their tokens",
  FLOW_ONE_WAY: "Trading flows almost entirely one way",
  FLOW_WALLET_FARM: "Wallet farm activity detected",
  FLOW_WASH_DOMINATED: "Wash trading dominates the volume",
  FLOW_BUNDLED_LAUNCH: "The launch was bought in bundled transactions",
  FLOW_MECHANICAL_TRADING: "Mechanical bot trading pattern",
  FLOW_RING_DOMINATED: "A coordinated trading ring dominates",
  FLOW_BUNDLER_SERVICE: "A known bundler service was used at launch",
  REP_SERIAL_RUGGER: "The creator has rugged tokens before",
  REP_RISKY_CREATOR: "The creator has a risky track record",
  REP_SCAMMER_FUNDED: "The creator was funded by a known scammer wallet",
  REP_IMITATOR_SYMBOL: "Copycat: uses the symbol of a known token",
  REP_IMITATOR_NAME: "Copycat: uses the name of a known token",
  REP_IMITATOR_IMAGE: "Copycat: uses the image of a known token",
  SOCIAL_COORDINATED_PROMOTION: "Coordinated promotion campaign detected",
  SOCIAL_SCRIPTED_PROMOTION: "Scripted promotion campaign detected",
};

function reasonLabels(codes: string[], prefix: string): string[] {
  return codes.filter((c) => c.startsWith(prefix)).map((c) => REASON_LABELS[c] ?? c);
}

function codexTaxFinding(risk: CodexRisk): TokenSafetyFinding {
  const buy = risk.buyTax !== null ? risk.buyTax * 100 : null;
  const sell = risk.sellTax !== null ? risk.sellTax * 100 : null;
  const high = (buy !== null && buy > 10) || (sell !== null && sell > 10);
  return {
    key: "tax",
    label: "Buy and sell tax",
    status: high ? "warn" : "pass",
    detail: `Buy ${fmtPct(buy)}, sell ${fmtPct(sell)}, measured by simulated trades`,
    explanation: high
      ? "A tax above 10% eats a big chunk of every trade. High sell taxes are a classic slow-rug setup."
      : "Codex measured these taxes with simulated buys and sells, and they look normal. Remember the tax can sometimes be changed by the contract owner.",
  };
}

function buildCodexFindings(token: CodexToken): TokenSafetyFinding[] {
  const findings: TokenSafetyFinding[] = [];
  const risk = token.risk;
  const reasons = risk?.reasons ?? [];

  const proof = reasonLabels(reasons, "PROOF_");
  if (reasons.includes("LABEL_MANUAL_SCAM")) proof.push("Labelled a scam by Codex moderators");
  if (proof.length > 0) {
    findings.push({
      key: "codex-proof",
      label: "Proven scam mechanics",
      status: "fail",
      detail: proof.join(". "),
      explanation:
        "Codex proved this in simulated trades or moderator review, not just pattern matching. Treat this token as a scam and do not buy it.",
    });
  }

  const liq = reasonLabels(reasons, "LIQ_");
  if (liq.length > 0) {
    findings.push({
      key: "codex-liquidity",
      label: "Liquidity risk",
      status: "warn",
      detail: liq.join(". "),
      explanation:
        "Liquidity is what lets you sell. Unlocked, minimal or draining liquidity means the pool can be pulled and late holders left holding unsellable tokens.",
    });
  }

  const hold = reasonLabels(reasons, "HOLD_");
  if (hold.length > 0) {
    findings.push({
      key: "codex-concentration",
      label: "Holder concentration",
      status: "warn",
      detail: hold.join(". "),
      explanation:
        "Codex tracks sniper, bundler and insider wallets from the launch blocks. When those groups or the developer hold a big share, their sells decide the price.",
    });
  }

  const flow = reasonLabels(reasons, "FLOW_");
  if (flow.length > 0) {
    const services = risk?.bundlerServices?.length
      ? ` Bundler service detected: ${risk.bundlerServices.join(", ")}.`
      : "";
    findings.push({
      key: "codex-flow",
      label: "Suspicious trading patterns",
      status: "warn",
      detail: flow.join(". ") + services,
      explanation:
        "Wash trading, wallet farms and bundled buys fake demand. The chart can look alive while real buyers are scarce, and the fake volume disappears the moment insiders exit.",
    });
  }

  const auth = reasonLabels(reasons, "AUTH_");
  if (auth.length > 0) {
    findings.push({
      key: "codex-authority",
      label: "Owner powers",
      status: "warn",
      detail: auth.join(". "),
      explanation:
        "These are live powers over the token and its holders. Each one is a way holders can be hurt if the controlling wallet turns malicious or gets compromised.",
    });
  }

  const rep = reasonLabels(reasons, "REP_");
  if (rep.length > 0) {
    findings.push({
      key: "codex-creator",
      label: "Creator history",
      status: reasons.includes("REP_SERIAL_RUGGER") ? "fail" : "warn",
      detail: rep.join(". "),
      explanation:
        "Codex links this token to its creator wallet and scores that wallet's track record. A creator who has rugged before is the strongest social red flag there is.",
    });
  }

  const social = reasonLabels(reasons, "SOCIAL_");
  if (social.length > 0) {
    findings.push({
      key: "codex-promotion",
      label: "Promotion red flags",
      status: "warn",
      detail: social.join(". "),
      explanation:
        "Coordinated promotion is how manufactured tokens find exit liquidity. If the hype is scripted, the audience is what is being sold to insiders.",
    });
  }

  if (token.top10HoldersPercent !== null) {
    const p = token.top10HoldersPercent;
    findings.push({
      key: "codex-top10",
      label: "Top 10 holders",
      status: p > 50 ? "warn" : "pass",
      detail: `The top 10 wallets hold ${p.toFixed(1)}% of the supply`,
      explanation:
        "If a handful of wallets hold most of the supply, one seller can crash the price. Broad distribution across many holders is healthier.",
    });
  }

  return findings;
}

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
  codex: { verdict: string; score: number | null; coverage: string | null } | null;
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
    verdictReason: `Neither scanner could scan this token on ${label} right now. It may be too new to be indexed yet. Try again in a few minutes.`,
    findings: [], timestamp, dataSource: "Codex and GoPlus Security", codex: null,
  };
}

async function fetchGoPlusRaw(address: string, chain: string): Promise<Record<string, unknown> | null> {
  const url = `${GOPLUS_BASE}/${chain}?contract_addresses=${encodeURIComponent(address)}`;
  const res = await fetch(url, { headers: { "User-Agent": "cryptosbeginner-token-safety/1.0" }, signal: AbortSignal.timeout(8000) });
  if (!res.ok) return null;
  const payload = (await res.json()) as { code?: number; result?: Record<string, Record<string, unknown>> };
  if (payload?.code !== 1) return null;
  const raw = payload?.result?.[address] ?? payload?.result?.[address.toLowerCase()];
  if (!raw || typeof raw !== "object" || Object.keys(raw).length === 0) return null;
  return raw;
}

function combinedVerdict(
  findings: TokenSafetyFinding[],
  codexRisk: CodexRisk | null
): { verdict: TokenSafetyResult["verdict"]; reason: string } {
  if (!codexRisk || !codexRisk.verdict) return verdictFor(findings);
  const fails = findings.filter((f) => f.status === "fail").length;
  const warns = findings.filter((f) => f.status === "warn").length;
  const scoreText = codexRisk.score !== null ? ` (risk score ${Math.round(codexRisk.score)} out of 100)` : "";
  const cv = codexRisk.verdict;

  if (cv === "SCAM") {
    return { verdict: "high-risk", reason: `Codex rates this token a proven scam${scoreText}. Do not buy it, and do not send it any funds.` };
  }
  if (cv === "HIGH_RISK" || fails > 0) {
    return {
      verdict: "high-risk",
      reason: `Codex rates this token high risk${scoreText}${fails > 0 ? `, and the scan found ${fails} critical red flag${fails > 1 ? "s" : ""}` : ""}. Do not buy it.`,
    };
  }
  if (cv === "CAUTION" || cv === "VERIFIED_CONTESTED" || warns > 0) {
    return {
      verdict: "caution",
      reason: `Codex rates this token ${cv === "VERIFIED_CONTESTED" ? "verified but contested" : "caution"}${scoreText}. ${warns} warning${warns === 1 ? "" : "s"} below. Read each one before putting money in.`,
    };
  }
  if ((codexRisk.coverage === "NOT_ANALYZED" || codexRisk.coverage === "INCONCLUSIVE") && fails === 0 && warns === 0) {
    return {
      verdict: "caution",
      reason:
        "No risk signals have fired yet, but Codex has not completed its contract analysis on this token, so an all-clear would be premature. Recheck before buying.",
    };
  }
  return {
    verdict: "safe",
    reason: `No red flags detected. Codex rates this token ${cv === "VERIFIED" ? "verified" : "neutral"}${scoreText}, and the contract scan is clean.${codexRisk.coverage === "STALE" ? " Its contract analysis is being refreshed, so recheck before a large buy." : ""}`,
  };
}

async function checkToken(address: string, chain: string): Promise<Omit<TokenSafetyResult, "cached">> {
  const { label, kind } = CHAINS[chain];
  const timestamp = new Date().toISOString();
  const [raw, codex] = await Promise.all([
    fetchGoPlusRaw(address, chain).catch(() => null),
    fetchCodex(address, chain),
  ]);

  if (!raw && !codex) {
    return noDataResult(address, chain, label, timestamp);
  }

  const codexRisk = codex?.risk ?? null;
  const codexFindings = codex ? buildCodexFindings(codex) : [];
  const codexHasTax = codexRisk !== null && (codexRisk.buyTax !== null || codexRisk.sellTax !== null);

  const merged: TokenSafetyFinding[] = [...codexFindings];
  if (codexHasTax && codexRisk) merged.push(codexTaxFinding(codexRisk));

  if (raw) {
    let gf = buildFindings(raw, kind);
    if (codexHasTax) gf = gf.filter((f) => f.key !== "tax");
    if (codex && codex.top10HoldersPercent !== null) gf = gf.filter((f) => f.key !== "holders");
    if (codexFindings.some((f) => f.key === "codex-proof")) gf = gf.filter((f) => f.key !== "honeypot");
    if (codexFindings.some((f) => f.key === "codex-authority")) gf = gf.filter((f) => f.key !== "mint");
    merged.push(...gf);
  }

  const { verdict, reason } = combinedVerdict(merged, codexRisk);
  const sources: string[] = [];
  if (codex) sources.push("Codex (Defined.fi)");
  if (raw) sources.push("GoPlus Security");

  return {
    address, chain, chainLabel: label,
    tokenName: (typeof raw?.token_name === "string" ? raw.token_name : null) ?? codex?.name ?? null,
    tokenSymbol: (typeof raw?.token_symbol === "string" ? raw.token_symbol : null) ?? codex?.symbol ?? null,
    verdict, verdictReason: reason, findings: merged, timestamp,
    dataSource: sources.join(" and "),
    codex: codexRisk
      ? { verdict: codexRisk.verdict ?? "UNASSESSED", score: codexRisk.score, coverage: codexRisk.coverage }
      : null,
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
