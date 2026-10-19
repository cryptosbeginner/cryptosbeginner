import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../simpleswap";

// GET /api/swap/currencies — full currency list, cached 1 hour.
export async function GET(_req: NextRequest) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  return passthrough(
    swapFetch("/v3/currencies", { next: { revalidate: 3600 } })
  );
}
