const ANNY_BASE_URL = "https://api.anny.trade";

export type CFOState = "Accumulate" | "Wait" | "Distribute";

export type AssetCFO = {
  symbol: string;
  name: string;
  state: CFOState;
  since: string;
  flips: { from: CFOState; to: CFOState; date: string }[];
  confidence: "Low" | "Medium" | "High" | "Very High";
  logoUrl: string;
};

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${ANNY_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Anny API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

/**
 * Fetch CFO Line state for a single asset.
 * Uses guest endpoint, no auth required.
 */
export async function fetchCFOLineForAsset(params: {
  asset: string;
  interval?: "1h" | "4h" | "1d" | "1w";
  tradeMarket?: string;
}): Promise<{ state: CFOState; since?: string }> {
  const { asset, interval = "1d", tradeMarket = "USDT" } = params;
  const data = await postJson<{
    result: { type: string };
    payload: {
      state?: CFOState;
      since?: string;
      // other fields ignored for now
    };
  }>("/backend/anny-line/chart", {
    asset,
    interval,
    tradeMarket,
  });

  if (data.result.type !== "OPERATION_PERFORMED") {
    throw new Error(`Anny API result: ${data.result.type}`);
  }

  const state = data.payload.state ?? "Wait";
  const since = data.payload.since;

  return { state, since };
}

/**
 * Fetch flip intelligence for a single asset.
 * Uses guest endpoint, no auth required.
 */
export async function fetchFlipIntelligenceForAsset(params: {
  asset: string;
  interval?: "1h" | "4h" | "1d" | "1w";
  tradeMarket?: string;
}): Promise<{ flips: { from: CFOState; to: CFOState; date: string }[] }> {
  const { asset, interval = "1d", tradeMarket = "USDT" } = params;
  const data = await postJson<{
    result: { type: string };
    payload: {
      flips?: { from: CFOState; to: CFOState; date: string }[];
    };
  }>("/backend/anny-line/flip-intelligence", {
    asset,
    interval,
    tradeMarket,
  });

  if (data.result.type !== "OPERATION_PERFORMED") {
    throw new Error(`Anny API result: ${data.result.type}`);
  }

  return { flips: data.payload.flips ?? [] };
}

const LOGO_MAP: Record<string, string> = {
  BTC: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  ETH: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  SOL: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
  BNB: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
  XRP: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
  ADA: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
  DOGE: "https://assets.coingecko.com/coins/images/5738/small/dogecoin.png",
  TRX: "https://assets.coingecko.com/coins/images/1094/small/tron.png",
  LINK: "https://assets.coingecko.com/coins/images/877/small/chainlink.png",
  AVAX: "https://assets.coingecko.com/coins/images/12559/small/avalanche.png",
};

const NAME_MAP: Record<string, string> = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  SOL: "Solana",
  BNB: "BNB",
  XRP: "XRP",
  ADA: "Cardano",
  DOGE: "Dogecoin",
  TRX: "TRON",
  LINK: "Chainlink",
  AVAX: "Avalanche",
};

const DEFAULT_ASSETS = ["BTC", "ETH", "SOL"];

/**
 * Fetch CFO Line data for a list of assets.
 * Failures for individual assets are logged but do not break the whole call.
 */
export async function fetchCFOAssets(
  assets: string[] = DEFAULT_ASSETS
): Promise<AssetCFO[]> {
  const results = await Promise.all(
    assets.map(async (asset): Promise<AssetCFO | null> => {
      try {
        const [cfo, flips] = await Promise.all([
          fetchCFOLineForAsset({ asset }),
          fetchFlipIntelligenceForAsset({ asset }),
        ]);

        const state = cfo.state;
        const since = cfo.since ?? new Date().toISOString().slice(0, 10);
        const flipsList = flips.flips.slice(0, 3); // last 3 flips

        return {
          symbol: asset,
          name: NAME_MAP[asset] ?? asset,
          state,
          since,
          flips: flipsList,
          confidence: "Medium" as const,
          logoUrl: LOGO_MAP[asset] ?? "",
        };
      } catch (err) {
        console.error(`Failed to fetch CFO for ${asset}`, err);
        return null;
      }
    })
  );

  return results.filter((r): r is AssetCFO => r !== null);
}
