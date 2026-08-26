import { NextResponse } from "next/server";
import { getMiningSnapshot } from "@/app/bitcoin-halving/mining-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getMiningSnapshot();
  return NextResponse.json(snapshot, { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800" } });
}
