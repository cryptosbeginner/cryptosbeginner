import { NextResponse } from "next/server";

export const runtime = "nodejs";

// GET /api/trending-tokens
// Risk-screened trending board powered by Codex (the Defined.fi data API).
// One GraphQL call pulls the top 48 tokens by 24h trending score with their
// Codex risk verdicts. Tokens rated SCAM or HIGH_RISK, or scoring 40+, are
// screened out server-side. Results ride a 30 minute cache (module + CDN)
// to protect the free tier's compute unit budget.

const CODEX_ENDPOINT = "https://graph.codex.io/graphql";
const TTL_MS = 30 * 60 * 1000;

type TrendingToken = {
  rank: number;
  address: string;
  name: string | null;
  symbol: string | null;
  networkId: number;
  chainId: string | null;
  chainLabel: string;
  marketCap: number | null;
  liquidity: number | null;
  volume24: number | null;
  change24: number | null;
  risk: { verdict: string; score: number | null; coverage: string | null } | null;
};

type BoardPayload = {
  tokens: TrendingToken[];
  screenedOut: number;
  fetched: number;
  updatedAt: string;
};

const NETWORKS: Record<number, { chainId: string | null; label: string }> = {
  1: { chainId: "1", label: "Ethereum" },
  56: { chainId: "56", label: "BNB Chain" },
  137: { chainId: "137", label: "Polygon" },
  8453: { chainId: "8453", label: "Base" },
  42161: { chainId: "42161", label: "Arbitrum" },
  10: { chainId: "10", label: "Optimism" },
  43114: { chainId: "43114", label: "Avalanche" },
  324: { chainId: "324", label: "zkSync Era" },
  59144: { chainId: "59144", label: "Linea" },
  534352: { chainId: "534352", label: "Scroll" },
  81457: { chainId: "81457", label: "Blast" },
  169: { chainId: "169", label: "Manta Pacific" },
  146: { chainId: "146", label: "Sonic" },
  80094: { chainId: "80094", label: "Berachain" },
  480: { chainId: "480", label: "World Chain" },
  1868: { chainId: "1868", label: "Soneium" },
  130: { chainId: "130", label: "Unichain" },
  5000: { chainId: "5000", label: "Mantle" },
  204: { chainId: "204", label: "opBNB" },
  25: { chainId: "25", label: "Cronos" },
  100: { chainId: "100", label: "Gnosis" },
  321: { chainId: "321", label: "KCC" },
  1399811149: { chainId: "solana", label: "Solana" },
  728126428: { chainId: "tron", label: "Tron" },
  101: { chainId: null, label: "Sui" },
  4663: { chainId: null, label: "Robinhood" },
  143: { chainId: null, label: "Monad" },
  999: { chainId: null, label: "HyperEVM" },
};

const QUERY = `{
  filterTokens(rankings: [{ attribute: trendingScore24, direction: DESC }], limit: 48) {
    results {
      token { address networkId name symbol risk { verdict score coverage } }
      marketCap liquidity volume24 change24 trendingScore24
    }
  }
}`;

type CodexRow = {
  token: {
    address: string;
    networkId: number;
    name: string | null;
    symbol: string | null;
    risk: { verdict: string; score: number | null; coverage: string | null } | null;
  };
  marketCap: string | null;
  liquidity: string | null;
  volume24: string | null;
  change24: string | null;
};

let cache: { expires: number; payload: BoardPayload } | null = null;

function num(v: string | null): number | null {
  if (v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function passesScreen(row: CodexRow): boolean {
  const liquidity = num(row.liquidity);
  if (liquidity === null || liquidity < 5000) return false;
  const risk = row.token.risk;
  if (!risk) return true; // unrated tokens pass but are badged "Unrated"
  if (risk.verdict === "SCAM" || risk.verdict === "HIGH_RISK") return false;
  if (risk.score !== null && risk.score >= 40) return false;
  return true;
}

async function fetchBoard(): Promise<BoardPayload> {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) throw new Error("CODEX_API_KEY is not configured");
  const res = await fetch(CODEX_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: apiKey },
    body: JSON.stringify({ query: QUERY }),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`Codex returned HTTP ${res.status}`);
  const payload = (await res.json()) as {
    data?: { filterTokens?: { results?: CodexRow[] } };
    errors?: unknown;
  };
  const rows = payload?.data?.filterTokens?.results;
  if (!rows) throw new Error("Codex returned no trending data");

  const kept = rows.filter(passesScreen);
  const rated = kept.filter((r) => r.token.risk);
  const unrated = kept.filter((r) => !r.token.risk);
  const ordered = [...rated, ...unrated].slice(0, 15);

  const tokens: TrendingToken[] = ordered.map((row, i) => {
    const net = NETWORKS[row.token.networkId];
    return {
      rank: i + 1,
      address: row.token.address,
      name: row.token.name,
      symbol: row.token.symbol,
      networkId: row.token.networkId,
      chainId: net?.chainId ?? null,
      chainLabel: net?.label ?? `Network ${row.token.networkId}`,
      marketCap: num(row.marketCap),
      liquidity: num(row.liquidity),
      volume24: num(row.volume24),
      change24: num(row.change24),
      risk: row.token.risk,
    };
  });

  return {
    tokens,
    screenedOut: rows.length - kept.length,
    fetched: rows.length,
    updatedAt: new Date().toISOString(),
  };
}

export async function GET() {
  try {
    if (cache && cache.expires > Date.now()) {
      return NextResponse.json(cache.payload, {
        headers: { "Cache-Control": "s-maxage=1800, stale-while-revalidate=3600" },
      });
    }
    const payload = await fetchBoard();
    cache = { expires: Date.now() + TTL_MS, payload };
    return NextResponse.json(payload, {
      headers: { "Cache-Control": "s-maxage=1800, stale-while-revalidate=3600" },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Trending data is unavailable right now." },
      { status: 502 }
    );
  }
}
