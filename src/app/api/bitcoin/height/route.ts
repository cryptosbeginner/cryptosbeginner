import { NextResponse } from "next/server";
import { getBitcoinTipHeight, NEXT_HALVING_BLOCK, blocksRemaining } from "@/app/bitcoin-halving/halving-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getBitcoinTipHeight();
  return NextResponse.json({ ...snapshot, nextHalvingBlock: NEXT_HALVING_BLOCK, blocksRemaining: blocksRemaining(snapshot.height) }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } });
}
