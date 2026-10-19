import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../simpleswap";

// POST /api/swap/exchanges — create a new exchange.
// Body: { tickerFrom, networkFrom, tickerTo, networkTo, amount, addressTo, fixed?, rateId?, userRefundAddress?, extraIdTo? }
export async function POST(req: NextRequest) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return errorJson("Invalid JSON body", 400);
  }
  const required = ["tickerFrom", "networkFrom", "tickerTo", "networkTo", "amount", "addressTo"];
  for (const key of required) {
    if (!body[key]) return errorJson(`${key} is required`, 400);
  }
  const payload: Record<string, unknown> = {
    tickerFrom: String(body.tickerFrom).toLowerCase(),
    networkFrom: String(body.networkFrom).toLowerCase(),
    tickerTo: String(body.tickerTo).toLowerCase(),
    networkTo: String(body.networkTo).toLowerCase(),
    amount: String(body.amount),
    addressTo: String(body.addressTo),
    fixed: body.fixed === true,
  };
  if (body.rateId) payload.rateId = String(body.rateId);
  if (body.userRefundAddress) payload.userRefundAddress = String(body.userRefundAddress);
  if (body.extraIdTo) payload.extraIdTo = String(body.extraIdTo);
  return passthrough(
    swapFetch("/v3/exchanges", { method: "POST", body: JSON.stringify(payload) })
  );
}
