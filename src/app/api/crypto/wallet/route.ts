import { NextRequest, NextResponse } from "next/server";
import { getWalletData, isWalletMode, normalizeNetwork, validateWalletAddress } from "./wallet-data";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const address = validateWalletAddress(params.get("address"));
  const modeValue = params.get("mode");
  if (!address) return NextResponse.json({ error: "Enter a valid public wallet address. Do not submit a seed phrase or private key." }, { status: 400 });
  if (!isWalletMode(modeValue)) return NextResponse.json({ error: "Choose one wallet mode: balance, pl, or defi." }, { status: 400 });

  const network = normalizeNetwork(params.get("network"));
  const result = await getWalletData(address, network, modeValue);
  if (result.provider === "unavailable") return NextResponse.json(result, { status: 503, headers: { "Cache-Control": "no-store" } });
  return NextResponse.json(result, { status: 200, headers: { "Cache-Control": "private, no-store" } });
}
