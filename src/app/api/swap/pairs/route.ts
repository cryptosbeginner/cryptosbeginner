import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../simpleswap";

// GET /api/swap/pairs?ticker=btc&network=btc&fixed=false
export async function GET(req: NextRequest) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  const q = req.nextUrl.searchParams;
  const ticker = (q.get("ticker") ?? "").toLowerCase();
  const network = (q.get("network") ?? "").toLowerCase();
  if (!ticker || !network) return errorJson("ticker and network are required", 400);
  const fixed = q.get("fixed") === "true";
  return passthrough(
    swapFetch(`/v3/pairs/${encodeURIComponent(ticker)}/${encodeURIComponent(network)}?fixed=${fixed}`, {
      next: { revalidate: 300 },
    })
  );
}
