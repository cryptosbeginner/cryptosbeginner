// Shared helpers for the CoinStats Prediction Markets API proxy.
// All upstream calls happen server-side; the API key never reaches the client.
// In-memory cache (5-minute TTL) protects the CoinStats credit budget:
// trending and list calls cost 2 credits, detail and prices 1, search 3.

const BASE = "https://api.coinstats.app/v1/prediction";
const TTL_MS = 5 * 60 * 1000;

export type PredictionSource = "polymarket" | "kalshi" | "polymarket-us";

export type PredictionMarket = {
  source: PredictionSource;
  slug: string;
  question: string;
  description?: string;
  image?: string;
  icon?: string;
  outcomes?: string[];
  outcomePrices?: number[];
  volume24hr?: number;
  liquidity?: number;
  endDate?: string;
};

export type ProxyResult = {
  data: PredictionMarket[];
  timestamp: string;
  cached: boolean;
  error?: string;
};

const cache = new Map<string, { expires: number; body: Omit<ProxyResult, "cached"> }>();

function asNumber(value: unknown): number | null {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function normalizeMarket(raw: unknown): PredictionMarket | null {
  if (!raw || typeof raw !== "object") return null;
  const m = raw as Record<string, unknown>;
  const slug = String(m.slug ?? "");
  const question = String(m.question ?? "");
  if (!slug || !question) return null;
  return {
    source:
      m.source === "kalshi"
        ? "kalshi"
        : m.source === "polymarket-us"
          ? "polymarket-us"
          : "polymarket",
    slug,
    question,
    description: typeof m.description === "string" ? m.description : undefined,
    image: typeof m.image === "string" ? m.image : undefined,
    icon: typeof m.icon === "string" ? m.icon : undefined,
    outcomes: Array.isArray(m.outcomes) ? m.outcomes.map(String) : undefined,
    outcomePrices: Array.isArray(m.outcomePrices)
      ? m.outcomePrices.map((p) => asNumber(p) ?? 0)
      : undefined,
    volume24hr: asNumber(m.volume24hr) ?? undefined,
    liquidity: asNumber(m.liquidity) ?? undefined,
    endDate: typeof m.endDate === "string" ? m.endDate : undefined,
  };
}

function marketsFromPayload(payload: unknown): unknown[] {
  if (!payload || typeof payload !== "object") return [];
  const r = payload as Record<string, unknown>;
  const data = r.data;
  // List/trending endpoints return { data: [...] }.
  if (Array.isArray(data)) return data;
  // Detail endpoint returns { data: {...} }; search returns { data: { markets: [...] } }.
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    if (Array.isArray(d.markets)) return d.markets;
    return [data];
  }
  return [];
}

function emptyResult(error?: string): ProxyResult {
  return { data: [], timestamp: new Date().toISOString(), cached: false, error };
}

export async function fetchPrediction(path: string, cacheKey: string): Promise<ProxyResult> {
  const now = Date.now();
  const hit = cache.get(cacheKey);
  if (hit && hit.expires > now) {
    return { ...hit.body, cached: true };
  }

  const key = process.env.COINSTATS_API_KEY;
  if (!key) {
    return emptyResult("Prediction market data is temporarily unavailable.");
  }

  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { "X-API-KEY": key },
      // Belt and braces: Next fetch cache mirrors the in-memory TTL.
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      return emptyResult("Prediction market data is temporarily unavailable.");
    }
    const json = (await res.json()) as Record<string, unknown>;
    if (json.success === false) {
      return emptyResult("Prediction market data is temporarily unavailable.");
    }
    const markets = marketsFromPayload(json)
      .map(normalizeMarket)
      .filter((m): m is PredictionMarket => m !== null);
    const body: Omit<ProxyResult, "cached"> = {
      data: markets,
      timestamp: typeof json.timestamp === "string" ? json.timestamp : new Date().toISOString(),
    };
    cache.set(cacheKey, { expires: now + TTL_MS, body });
    return { ...body, cached: false };
  } catch {
    return emptyResult("Prediction market data is temporarily unavailable.");
  }
}

export function normalizeLimit(value: string | null | undefined, fallback: number, max: number): number {
  const parsed = Number(value ?? String(fallback));
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(1, Math.floor(parsed)));
}

export function isValidSource(value: string | null | undefined): value is PredictionSource {
  return value === "polymarket" || value === "kalshi" || value === "polymarket-us";
}
