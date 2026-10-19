import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../simpleswap";

// GET /api/swap/ranges?tickerFrom=btc&networkFrom=btc&tickerTo=eth&networkTo=eth&fixed=false
export async function GET(req: NextRequest) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  const q = req.nextUrl.searchParams;
  const params = new URLSearchParams();
  for (const key of ["tickerFrom", "networkFrom", "tickerTo", "networkTo"]) {
    const v = q.get(key);
    if (!v) return errorJson(`${key} is required`, 400);
    params.set(key, v.toLowerCase());
  }
  params.set("fixed", q.get("fixed") === "true" ? "true" : "false");
  return passthrough(swapFetch(`/v3/ranges?${params.toString()}`));
}
