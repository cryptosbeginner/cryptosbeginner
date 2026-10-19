// Shared SimpleSwap v3 client for the /api/swap routes.
// Reads the partner API key from SIMPLESWAP_API_KEY (Vercel env var).

const BASE = "https://api.simpleswap.io";

export function swapKey(): string | null {
  return process.env.SIMPLESWAP_API_KEY ?? null;
}

export async function swapFetch(path: string, init?: RequestInit): Promise<Response> {
  const apiKey = swapKey();
  if (!apiKey) throw new Error("SIMPLESWAP_API_KEY is not configured");
  const headers: Record<string, string> = {
    Accept: "application/json",
    "x-api-key": apiKey,
  };
  if (init?.body) headers["Content-Type"] = "application/json";
  const merged = new Headers(init?.headers);
  for (const [k, v] of Object.entries(headers)) {
    if (!merged.has(k)) merged.set(k, v);
  }
  const response = await fetch(`${BASE}${path}`, {
    ...init,
    headers: merged,
    signal: AbortSignal.timeout(15000),
  });
  return response;
}

export function errorJson(message: string, status = 502) {
  return Response.json({ error: message }, { status });
}

export async function passthrough(response: Promise<Response>) {
  try {
    const res = await response;
    const text = await res.text();
    let data: unknown = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }
    if (!res.ok) {
      const msg =
        (data as { message?: string })?.message ??
        (data as { error?: string })?.error ??
        `SimpleSwap responded with ${res.status}`;
      return Response.json({ error: msg }, { status: res.status === 401 ? 502 : res.status });
    }
    return Response.json(data);
  } catch (err) {
    return errorJson(err instanceof Error ? err.message : "Swap provider unreachable");
  }
}
