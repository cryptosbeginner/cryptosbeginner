import { NextResponse } from "next/server";
import { fetchPrediction, normalizeLimit } from "../lib";

export const runtime = "nodejs";
export const revalidate = 300;

// GET /api/prediction/search?q=...&limit=N
// Proxies CoinStats GET /v1/prediction/search (3 credits per upstream call).
// Restricted to type=markets so the widget only receives market cards.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim();
  if (q.length < 2) {
    return NextResponse.json({ data: [], error: "Search needs at least 2 characters." }, { status: 400 });
  }
  const limit = normalizeLimit(searchParams.get("limit"), 12, 25);
  const upstreamQuery = new URLSearchParams({ q, type: "markets", limit: String(limit) }).toString();
  const result = await fetchPrediction(`/search?${upstreamQuery}`, `search:${upstreamQuery}`);
  return NextResponse.json(result, {
    status: result.data.length ? 200 : 503,
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=300" },
  });
}
