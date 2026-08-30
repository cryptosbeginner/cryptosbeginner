/**
 * Crypto Market Dashboard data utilities
 *
 * - CoinGecko: price, 24h/7d change, market cap, volume, rank
 * - Anny Trade CFO Line: regime state, confidence, flip timestamps
 *
 * Caches CoinGecko responses for up to 5 minutes in memory.
 */

type CoinGeckoSimplePrice = {
  usd: number;
  usd_24h_change?: number;
  usd_7d_change?: number;
};

type CoinGeckoMarketData = {
  market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_rank: number;
};

type CoinGeckoCoin = {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price: number;
  price_change_percentage_24h?: number;
  price_change_percentage_7d_in_currency?: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
};

type CoinGeckoResponse = {
  price: CoinGeckoSimplePrice;
  marketData: CoinGeckoMarketData;
  image?: string;
};

type AnnyCfoState = {
  state: "accumulate" | "wait" | "distribute";
  confidence: number;
  regimeStart: number; // ms
  latestFlip: number; // ms
};

export type MarketAsset = {
  id: "bitcoin" | "ethereum" | "solana" | "binancecoin" | "ripple";
  symbol: string;
  name: string;
  image?: string;
  priceUsd: number;
  change24h: number | null;
  change7d: number | null;
  marketCapUsd: number;
  volume24hUsd: number;
  rank: number | null;
  cfo: AnnyCfoState | null;
  lastUpdated: number; // ms
  error?: string;
};

const COINGECKO_IDS = [
  "bitcoin",
  "ethereum",
  "solana",
  "binancecoin",
  "ripple",
] as const;

type CoinGeckoId = (typeof COINGECKO_IDS)[number];

const SYMBOL_MAP: Record<CoinGeckoId, string> = {
  bitcoin: "BTC",
  ethereum: "ETH",
  solana: "SOL",
  binancecoin: "BNB",
  ripple: "XRP",
};

const NAME_MAP: Record<CoinGeckoId, string> = {
  bitcoin: "Bitcoin",
  ethereum: "Ethereum",
  solana: "Solana",
  binancecoin: "BNB",
  ripple: "XRP",
};

let cachedMarketData: MarketAsset[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchFromCoinGecko(): Promise<MarketAsset[]> {
  const baseUrl = "https://api.coingecko.com/api/v3";
  const idsParam = COINGECKO_IDS.join(",");

  const [pricesRes, marketRes] = await Promise.all([
    fetch(
      `${baseUrl}/simple/price?ids=${idsParam}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_7d_change=true`
    ),
    fetch(
      `${baseUrl}/coins/markets?vs_currency=usd&ids=${idsParam}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    ),
  ]);

  if (!pricesRes.ok || !marketRes.ok) {
    throw new Error("CoinGecko API error");
  }

  const pricesJson: Record<string, CoinGeckoSimplePrice> = await pricesRes.json();
  const marketJson: CoinGeckoCoin[] = await marketRes.json();

  const marketMap = new Map<string, CoinGeckoCoin>();
  for (const coin of marketJson) {
    marketMap.set(coin.id, coin);
  }

  const assets: MarketAsset[] = COINGECKO_IDS.map((id) => {
    const price = pricesJson[id];
    const market = marketMap.get(id);
    const symbol = SYMBOL_MAP[id];
    const name = NAME_MAP[id];

    const base: MarketAsset = {
      id,
      symbol,
      name,
      image: market?.image,
      priceUsd: market?.current_price ?? price?.usd ?? 0,
      change24h:
        market?.price_change_percentage_24h ??
        price?.usd_24h_change ??
        null,
      change7d:
        market?.price_change_percentage_7d_in_currency ??
        price?.usd_7d_change ??
        null,
      marketCapUsd: market?.market_cap ?? 0,
      volume24hUsd: market?.total_volume ?? 0,
      rank: market?.market_cap_rank ?? null,
      cfo: null,
      lastUpdated: Date.now(),
    };

    return base;
  });

  return assets;
}

async function fetchAnnyCfoForAsset(
  asset: MarketAsset
): Promise<AnnyCfoState | null> {
  try {
    const res = await fetch(
      `https://api.anny.trade/v1/cfo-line/${asset.symbol}`
    );
    if (!res.ok) return null;
    const json = await res.json();

    const stateRaw = json.state as string | undefined;
    const state: AnnyCfoState["state"] =
      stateRaw === "accumulate"
        ? "accumulate"
        : stateRaw === "distribute"
        ? "distribute"
        : "wait";

    const confidence =
      typeof json.confidence === "number" ? json.confidence : 0;

    const regimeStart =
      typeof json.regimeStart === "number"
        ? json.regimeStart
        : Date.now();

    const latestFlip =
      typeof json.latestFlip === "number" ? json.latestFlip : Date.now();

    return {
      state,
      confidence,
      regimeStart,
      latestFlip,
    };
  } catch {
    return null;
  }
}

export async function getMarketDashboardData(): Promise<MarketAsset[]> {
  const now = Date.now();
  if (cachedMarketData && now - cacheTime < CACHE_TTL) {
    // Re-fetch CFO states only (they are cheap) and merge with cached market data
    const refreshed = await Promise.all(
      cachedMarketData.map(async (asset) => {
        const cfo = await fetchAnnyCfoForAsset(asset);
        return { ...asset, cfo, lastUpdated: now };
      })
    );
    return refreshed;
  }

  const market = await fetchFromCoinGecko();
  const withCfo = await Promise.all(
    market.map(async (asset) => {
      const cfo = await fetchAnnyCfoForAsset(asset);
      return { ...asset, cfo };
    })
  );

  cachedMarketData = withCfo;
  cacheTime = now;
  return withCfo;
}
