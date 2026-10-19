import { NextResponse } from "next/server";
import { fetchPrediction, isValidSource, normalizeLimit } from "../lib";

export const runtime = "nodejs";
export const revalidate = 300;

// GET /api/prediction/markets?limit=N&offset=N&source=polymarket|kalshi|polymarket-us
// Proxies CoinStats GET /v1/prediction/markets (2 credits per upstream call).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = normalizeLimit(searchParams.get("limit"), 20, 50);
  const offsetRaw = Number(searchParams.get("offset") ?? "0");
  const offset = Number.isFinite(offsetRaw) ? Math.max(0, Math.floor(offsetRaw)) : 0;
  const source = searchParams.get("source");
  const upstream = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    sort: "volume24hr",
    order: "desc",
    active: "true",
  });
  if (isValidSource(source)) upstream.set("source", source);
  const upstreamQuery = upstream.toString();
  const result = await fetchPrediction(`/markets?${upstreamQuery}`, `markets:${upstreamQuery}`);
  return NextResponse.json(result, {
    status: result.data.length ? 200 : 503,
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=300" },
  });
}
