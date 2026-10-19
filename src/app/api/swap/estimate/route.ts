import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../simpleswap";

// GET /api/swap/estimate?tickerFrom=btc&networkFrom=btc&tickerTo=eth&networkTo=eth&amount=0.1&fixed=false
export async function GET(req: NextRequest) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  const q = req.nextUrl.searchParams;
  const params = new URLSearchParams();
  for (const key of ["tickerFrom", "networkFrom", "tickerTo", "networkTo", "amount"]) {
    const v = q.get(key);
    if (!v) return errorJson(`${key} is required`, 400);
    params.set(key, key === "amount" ? v : v.toLowerCase());
  }
  params.set("fixed", q.get("fixed") === "true" ? "true" : "false");
  return passthrough(swapFetch(`/v3/estimates?${params.toString()}`));
}
