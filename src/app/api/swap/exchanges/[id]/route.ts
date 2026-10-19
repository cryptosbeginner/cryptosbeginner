import { NextRequest } from "next/server";
import { swapFetch, passthrough, errorJson, swapKey } from "../../simpleswap";

// GET /api/swap/exchanges/[id] — poll exchange status.
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!swapKey()) return errorJson("Swap provider is not configured yet.", 503);
  const { id } = await params;
  if (!id) return errorJson("Exchange id is required", 400);
  return passthrough(swapFetch(`/v3/exchanges/${encodeURIComponent(id)}`));
}
