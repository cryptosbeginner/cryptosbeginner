import { NextResponse } from "next/server";
import { fetchPrediction, normalizeLimit } from "../lib";

export const runtime = "nodejs";
export const revalidate = 300;

// GET /api/prediction/trending?limit=N  (default 10, max 25)
// Proxies CoinStats GET /v1/prediction/markets/trending (2 credits per upstream call).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = normalizeLimit(searchParams.get("limit"), 10, 25);
  const result = await fetchPrediction(`/markets/trending?limit=${limit}`, `trending:${limit}`);
  return NextResponse.json(result, {
    status: result.data.length ? 200 : 503,
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=300" },
  });
}
