export const ALLOWED_CURRENCIES = new Set(["usd", "eur", "gbp", "aud", "cad", "jpy"]);

export type MarketCurrency = "usd" | "eur" | "gbp" | "aud" | "cad" | "jpy";
export type MarketProvider = "CoinStats" | "CoinGecko" | "CoinGecko public" | "unavailable";

export type MarketCoin = {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  image: string;
  price: number | null;
  marketCap: number | null;
  volume24h: number | null;
  change1h: number | null;
  change24h: number | null;
  change7d: number | null;
  change30d: number | null;
  lastUpdatedAt: number | null;
};

export type MarketResponse = {
  provider: MarketProvider;
  currency: MarketCurrency;
  checkedAt: string;
  staleAfterSeconds: number;
  data: MarketCoin[];
  fallback?: boolean;
  keyless?: boolean;
  error?: string;
};

export function normalizeCurrency(value: string | null | undefined): MarketCurrency {
  const normalized = (value ?? "usd").toLowerCase();
  return ALLOWED_CURRENCIES.has(normalized) ? normalized as MarketCurrency : "usd";
}

export function normalizeLimit(value: string | null | undefined) {
  const parsed = Number(value ?? "50");
  if (!Number.isFinite(parsed)) return 50;
  return Math.min(100, Math.max(5, Math.floor(parsed)));
}

function asNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function listFromPayload(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  const record = payload as Record<string, unknown>;
  for (const key of ["result", "coins", "data", "items"]) {
    if (Array.isArray(record[key])) return record[key] as unknown[];
  }
  return [];
}

function normalizeCoin(raw: unknown, index: number): MarketCoin {
  const coin = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const price = asNumber(coin.price ?? coin.current_price ?? coin.priceUsd);
  const marketCap = asNumber(coin.marketCap ?? coin.market_cap ?? coin.marketCapUsd);
  const volume = asNumber(coin.volume ?? coin.total_volume ?? coin.volumeUsd);
  const change24h = asNumber(coin.priceChange1d ?? coin.priceChange24h ?? coin.price_change_percentage_24h ?? coin.pCh24h);
  const change1h = asNumber(coin.priceChange1h ?? coin.price_change_percentage_1h ?? coin.price_change_percentage_1h_in_currency);
  const change7d = asNumber(coin.priceChange7d ?? coin.price_change_percentage_7d ?? coin.price_change_percentage_7d_in_currency);
  const change30d = asNumber(coin.priceChange1m ?? coin.price_change_percentage_30d ?? coin.price_change_percentage_30d_in_currency);
  const id = String(coin.coinId ?? coin.id ?? coin.identifier ?? `coin-${index}`);

  return {
    id,
    rank: asNumber(coin.rank ?? coin.market_cap_rank) ?? index + 1,
    name: String(coin.name ?? id),
    symbol: String(coin.symbol ?? "").toUpperCase(),
    image: String(coin.imgUrl ?? coin.image ?? coin.icon ?? ""),
    price,
    marketCap,
    volume24h: volume,
    change1h,
    change24h,
    change7d,
    change30d,
    lastUpdatedAt: asNumber(coin.lastUpdatedAt ?? coin.last_updated) ?? null,
  };
}

async function fetchCoinStats(limit: number, currency: MarketCurrency) {
  const apiKey = process.env.COINSTATS_API_KEY;
  if (!apiKey) throw new Error("CoinStats credentials are not configured");
  const endpoint = new URL("https://api.coinstats.app/v1/coins");
  endpoint.searchParams.set("limit", String(limit));
  endpoint.searchParams.set("page", "1");
  endpoint.searchParams.set("currency", currency.toUpperCase());
  endpoint.searchParams.set("sortBy", "marketCap");
  endpoint.searchParams.set("sortDir", "desc");

  const response = await fetch(endpoint, {
    headers: { "X-API-KEY": apiKey, Accept: "application/json" },
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`CoinStats responded with ${response.status}`);
  const payload = await response.json();
  const data = listFromPayload(payload).map(normalizeCoin).filter((coin) => coin.price !== null);
  if (!data.length) throw new Error("CoinStats returned no market rows");
  return data;
}

async function fetchCoinGecko(limit: number, currency: MarketCurrency) {
  const apiKey = process.env.COINGECKO_API_KEY;
  const endpoint = new URL("https://api.coingecko.com/api/v3/coins/markets");
  endpoint.searchParams.set("vs_currency", currency);
  endpoint.searchParams.set("order", "market_cap_desc");
  endpoint.searchParams.set("per_page", String(limit));
  endpoint.searchParams.set("page", "1");
  endpoint.searchParams.set("sparkline", "false");
  endpoint.searchParams.set("price_change_percentage", "1h,7d,30d");

  const headers: Record<string, string> = { Accept: "application/json" };
  if (apiKey) headers["x-cg-demo-api-key"] = apiKey;
  const response = await fetch(endpoint, {
    headers,
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`CoinGecko responded with ${response.status}`);
  const payload = await response.json();
  const data = listFromPayload(payload).map(normalizeCoin).filter((coin) => coin.price !== null);
  if (!data.length) throw new Error("CoinGecko returned no market rows");
  return data;
}

export async function getMarketData(limit: number, currency: MarketCurrency): Promise<MarketResponse> {
  const checkedAt = new Date().toISOString();
  try {
    return { provider: "CoinStats", currency, checkedAt, staleAfterSeconds: 90, data: await fetchCoinStats(limit, currency) };
  } catch {
    try {
      const data = await fetchCoinGecko(limit, currency);
      const keyless = !process.env.COINGECKO_API_KEY;
      return { provider: keyless ? "CoinGecko public" : "CoinGecko", currency, checkedAt, staleAfterSeconds: 90, data, fallback: true, keyless };
    } catch {
      return { provider: "unavailable", currency, checkedAt, staleAfterSeconds: 90, data: [], error: "Market data is temporarily unavailable. Try again shortly." };
    }
  }
}
