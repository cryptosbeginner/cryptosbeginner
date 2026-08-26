export type WalletMode = "balance" | "pl" | "defi";

export const WALLET_NETWORKS = ["ethereum", "base", "solana", "bitcoin", "arbitrum", "polygon"] as const;
export type WalletNetwork = (typeof WALLET_NETWORKS)[number];

export type WalletResponse = {
  provider: "CoinStats" | "unavailable";
  mode: WalletMode;
  network: WalletNetwork;
  checkedAt: string;
  data: unknown;
  error?: string;
};

const recentRequests = new Map<string, number>();
const MIN_REQUEST_GAP_MS = 15_000;

export function isWalletMode(value: string | null | undefined): value is WalletMode {
  return value === "balance" || value === "pl" || value === "defi";
}

export function normalizeNetwork(value: string | null | undefined): WalletNetwork {
  const candidate = (value ?? "ethereum").toLowerCase();
  return (WALLET_NETWORKS as readonly string[]).includes(candidate) ? candidate as WalletNetwork : "ethereum";
}

export function validateWalletAddress(value: string | null | undefined) {
  const address = (value ?? "").trim();
  if (address.length < 12 || address.length > 128) return null;
  if (!/^[a-zA-Z0-9._:-]+$/.test(address)) return null;
  return address;
}

function networkParameter(network: WalletNetwork) {
  return network === "arbitrum" ? "arbitrum-wallet" : network === "polygon" ? "polygon-wallet" : network;
}

function endpointFor(mode: WalletMode) {
  if (mode === "pl") return "pl";
  if (mode === "defi") return "defi";
  return "balance";
}

export async function getWalletData(address: string, network: WalletNetwork, mode: WalletMode): Promise<WalletResponse> {
  const checkedAt = new Date().toISOString();
  const apiKey = process.env.COINSTATS_API_KEY;
  if (!apiKey) return { provider: "unavailable", mode, network, checkedAt, data: null, error: "CoinStats credentials are not configured." };

  const requestKey = `${mode}:${network}:${address.toLowerCase()}`;
  const previous = recentRequests.get(requestKey) ?? 0;
  if (Date.now() - previous < MIN_REQUEST_GAP_MS) {
    return { provider: "unavailable", mode, network, checkedAt, data: null, error: "Please wait a few seconds before repeating this wallet request." };
  }
  recentRequests.set(requestKey, Date.now());
  for (const [key, timestamp] of recentRequests) if (Date.now() - timestamp > 10 * 60_000) recentRequests.delete(key);

  const endpoint = new URL(`https://api.coinstats.app/v1/wallet/${endpointFor(mode)}`);
  endpoint.searchParams.set("address", address);
  endpoint.searchParams.set("blockchain", networkParameter(network));
  if (mode === "pl") {
    endpoint.searchParams.set("page", "1");
    endpoint.searchParams.set("limit", "100");
  }

  try {
    const response = await fetch(endpoint, { headers: { "X-API-KEY": apiKey, Accept: "application/json" }, cache: "no-store", signal: AbortSignal.timeout(12_000) });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      const providerMessage = payload && typeof payload === "object" && "message" in payload ? String((payload as { message?: unknown }).message ?? "") : "";
      throw new Error(providerMessage || `CoinStats responded with ${response.status}`);
    }
    return { provider: "CoinStats", mode, network, checkedAt, data: payload };
  } catch (error) {
    return { provider: "unavailable", mode, network, checkedAt, data: null, error: error instanceof Error ? error.message : "Wallet data is temporarily unavailable." };
  }
}
