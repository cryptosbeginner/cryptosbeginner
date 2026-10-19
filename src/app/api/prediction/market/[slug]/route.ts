import { NextResponse } from "next/server";
import { fetchPrediction } from "../../lib";

export const runtime = "nodejs";
export const revalidate = 300;

// GET /api/prediction/market/{slug}
// Proxies CoinStats GET /v1/prediction/markets/{slug} (1 credit per upstream call).
export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const safe = encodeURIComponent(slug);
  if (!slug || slug.length > 200) {
    return NextResponse.json({ data: [], error: "Invalid market slug." }, { status: 400 });
  }
  const result = await fetchPrediction(`/markets/${safe}`, `market:${safe}`);
  return NextResponse.json(result, {
    status: result.data.length ? 200 : 503,
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=300" },
  });
}
