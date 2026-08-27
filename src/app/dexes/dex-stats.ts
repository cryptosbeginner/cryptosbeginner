import type { DexService } from "./dex-data";

export type DexPairStat = {
  pair: string;
  volume24hUsd: number | null;
  sourceUrl?: string;
};

export type DexStats = {
  slug: string;
  provider: "CoinGecko" | "GeckoTerminal" | "unavailable";
  checkedAt: string;
  volume24hUsd: number | null;
  volume24hBtc: number | null;
  pairs: number | null;
  trackedPools: number | null;
  trades24h: number | null;
  popularPairs: DexPairStat[];
  coverageNote: string;
  error?: string;
};

export type DexStatsMap = Record<string, DexStats>;

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";
const GECKOTERMINAL_BASE = "https://api.geckoterminal.com/api/v2";

function asNumber(value: unknown): number | null {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? value as Record<string, unknown> : {};
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function headersForCoinGecko(): Record<string, string> {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (process.env.COINGECKO_API_KEY) headers["x-cg-demo-api-key"] = process.env.COINGECKO_API_KEY;
  return headers;
}

async function getJson(url: string, headers: Record<string, string>) {
  const response = await fetch(url, {
    headers,
    next: { revalidate: 120 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`${response.status} from ${new URL(url).hostname}`);
  return response.json() as Promise<unknown>;
}

async function getBitcoinUsd(): Promise<number | null> {
  try {
    const payload = asRecord(await getJson(`${COINGECKO_BASE}/simple/price?ids=bitcoin&vs_currencies=usd`, headersForCoinGecko()));
    return asNumber(asRecord(payload.bitcoin).usd);
  } catch {
    return null;
  }
}

function emptyStats(service: DexService, checkedAt: string, error?: string): DexStats {
  return {
    slug: service.slug,
    provider: "unavailable",
    checkedAt,
    volume24hUsd: null,
    volume24hBtc: null,
    pairs: null,
    trackedPools: null,
    trades24h: null,
    popularPairs: [],
    coverageNote: "No current third-party venue snapshot was available for this profile. Check the official interface for current markets and statistics.",
    error,
  };
}

async function fetchCoinGeckoStats(service: DexService, checkedAt: string, bitcoinUsd: number | null): Promise<DexStats | null> {
  const exchangeId = service.stats?.coinGeckoExchangeId;
  if (!exchangeId) return null;
  const endpoint = new URL(`${COINGECKO_BASE}/exchanges/${encodeURIComponent(exchangeId)}`);
  endpoint.searchParams.set("dex_pair_format", "symbol");
  const payload = asRecord(await getJson(endpoint.toString(), headersForCoinGecko()));
  const tickers = Array.isArray(payload.tickers) ? payload.tickers : [];
  const popularPairs: DexPairStat[] = tickers
    .map((raw): DexPairStat | null => {
      const ticker = asRecord(raw);
      const convertedVolume = asNumber(asRecord(ticker.converted_volume).usd);
      const base = asString(ticker.base);
      const target = asString(ticker.target);
      return base && target ? { pair: `${base} / ${target}`, volume24hUsd: convertedVolume, ...(asString(ticker.trade_url) ? { sourceUrl: asString(ticker.trade_url) as string } : {}) } : null;
    })
    .filter((item): item is DexPairStat => item !== null)
    .sort((a, b) => (b.volume24hUsd ?? 0) - (a.volume24hUsd ?? 0))
    .slice(0, 5);
  const volume24hBtc = asNumber(payload.trade_volume_24h_btc);
  const pairs = asNumber(payload.pairs);
  if (!tickers.length && (volume24hBtc === null || volume24hBtc === 0) && (pairs === null || pairs === 0)) return null;
  return {
    slug: service.slug,
    provider: "CoinGecko",
    checkedAt,
    volume24hUsd: volume24hBtc !== null && bitcoinUsd !== null ? volume24hBtc * bitcoinUsd : null,
    volume24hBtc,
    pairs: pairs !== null && pairs > 0 ? pairs : null,
    trackedPools: null,
    trades24h: null,
    popularPairs,
    coverageNote: "CoinGecko exchange snapshot. Volume is reported by CoinGecko in BTC and converted to USD using its current Bitcoin price; trade counts are not supplied by this endpoint.",
  };
}

async function fetchGeckoTerminalStats(service: DexService, checkedAt: string): Promise<DexStats | null> {
  const config = service.stats?.geckoTerminal;
  if (!config) return null;
  const endpoint = new URL(`${GECKOTERMINAL_BASE}/networks/${encodeURIComponent(config.network)}/dexes/${encodeURIComponent(config.dexId)}/pools`);
  endpoint.searchParams.set("page", "1");
  const payload = asRecord(await getJson(endpoint.toString(), { Accept: "application/json" }));
  const rows = Array.isArray(payload.data) ? payload.data : [];
  const poolStats = rows.map((raw) => {
    const attributes = asRecord(asRecord(raw).attributes);
    const volume = asNumber(asRecord(attributes.volume_usd).h24);
    const transactions = asRecord(asRecord(attributes.transactions).h24);
    const buys = asNumber(transactions.buys) ?? 0;
    const sells = asNumber(transactions.sells) ?? 0;
    return {
      pair: asString(attributes.name) ?? "Unnamed pool",
      volume24hUsd: volume,
      trades24h: buys + sells,
      address: asString(attributes.address),
    };
  }).sort((a, b) => (b.volume24hUsd ?? 0) - (a.volume24hUsd ?? 0));
  const volume24hUsd = poolStats.reduce((sum, pool) => sum + (pool.volume24hUsd ?? 0), 0);
  const trades24h = poolStats.reduce((sum, pool) => sum + pool.trades24h, 0);
  return {
    slug: service.slug,
    provider: "GeckoTerminal",
    checkedAt,
    volume24hUsd: volume24hUsd > 0 ? volume24hUsd : null,
    volume24hBtc: null,
    pairs: null,
    trackedPools: poolStats.length || null,
    trades24h: poolStats.length ? trades24h : null,
    popularPairs: poolStats.slice(0, 5).map((pool) => ({ pair: pool.pair, volume24hUsd: pool.volume24hUsd, sourceUrl: pool.address ? `https://www.geckoterminal.com/${config.network}/pools/${pool.address}` : undefined })),
    coverageNote: "GeckoTerminal public snapshot of the top pools returned for this DEX. Volume, pool count, and trade count are tracked-pool figures, not a guaranteed venue-wide total.",
  };
}

function mergeStats(primary: DexStats | null, secondary: DexStats | null, service: DexService, checkedAt: string): DexStats {
  if (!primary && !secondary) return emptyStats(service, checkedAt);
  if (!primary) return secondary as DexStats;
  if (!secondary) return primary;
  return {
    ...primary,
    trades24h: secondary.trades24h,
    trackedPools: secondary.trackedPools,
    popularPairs: primary.popularPairs.length ? primary.popularPairs : secondary.popularPairs,
    coverageNote: `${primary.coverageNote} ${secondary.coverageNote}`,
  };
}

export async function getDexStats(services: DexService[]): Promise<DexStatsMap> {
  const checkedAt = new Date().toISOString();
  const bitcoinUsd = await getBitcoinUsd();
  const entries = await Promise.all(services.map(async (service) => {
    let primary: DexStats | null = null;
    let secondary: DexStats | null = null;
    try {
      primary = await fetchCoinGeckoStats(service, checkedAt, bitcoinUsd);
    } catch {
      primary = null;
    }
    try {
      secondary = await fetchGeckoTerminalStats(service, checkedAt);
    } catch {
      secondary = null;
    }
    return [service.slug, mergeStats(primary, secondary, service, checkedAt)] as const;
  }));
  return Object.fromEntries(entries);
}

export async function getDexStatsForService(service: DexService): Promise<DexStats> {
  const result = await getDexStats([service]);
  return result[service.slug] ?? emptyStats(service, new Date().toISOString());
}

export function summarizeDexStats(services: DexService[], stats: DexStatsMap) {
  const rows = services.map((service) => stats[service.slug]).filter((item): item is DexStats => Boolean(item && item.provider !== "unavailable"));
  const volume = rows.reduce((sum, item) => sum + (item.volume24hUsd ?? 0), 0);
  const tradeRows = rows.filter((item) => item.trades24h !== null);
  const pairRows = rows.filter((item) => item.pairs !== null);
  const trades = tradeRows.length ? tradeRows.reduce((sum, item) => sum + (item.trades24h ?? 0), 0) : null;
  const pairs = pairRows.length ? pairRows.reduce((sum, item) => sum + (item.pairs ?? 0), 0) : null;
  return {
    trackedVenues: rows.length,
    volume24hUsd: volume > 0 ? volume : null,
    trades24h: trades,
    tradesReportedBy: tradeRows.length,
    pairs,
    pairsReportedBy: pairRows.length,
    checkedAt: rows[0]?.checkedAt ?? new Date().toISOString(),
  };
}
