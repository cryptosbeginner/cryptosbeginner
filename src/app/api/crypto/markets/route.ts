import { NextResponse } from "next/server";
import { getMarketData, normalizeCurrency, normalizeLimit } from "./market-data";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currency = normalizeCurrency(searchParams.get("currency"));
  const limit = normalizeLimit(searchParams.get("limit"));
  const payload = await getMarketData(limit, currency);

  if (!payload.data.length) {
    return NextResponse.json(payload, { status: 503, headers: { "Cache-Control": "no-store" } });
  }

  return NextResponse.json(payload, {
    headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" },
  });
}
