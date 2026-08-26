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
const MIN_REQUEST_GAP_MS = 30_000;
const MAX_ADDRESS_LENGTH = 90;
const EVM_ADDRESS = /^0x[a-fA-F0-9]{40}$/;
const SOLANA_ADDRESS = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const BITCOIN_ADDRESS = /^(bc1[ac-hj-np-z02-9]{11,87}|[13][a-km-zA-HJ-NP-Z1-9]{25,34})$/i;

export function isWalletMode(value: string | null | undefined): value is WalletMode {
  return value === "balance" || value === "pl" || value === "defi";
}

export function isWalletNetwork(value: string | null | undefined): value is WalletNetwork {
  return (WALLET_NETWORKS as readonly string[]).includes((value ?? "").toLowerCase());
}

export function normalizeNetwork(value: string | null | undefined): WalletNetwork {
  const candidate = (value ?? "ethereum").toLowerCase();
  return isWalletNetwork(candidate) ? candidate : "ethereum";
}

export function validateWalletAddress(value: string | null | undefined, network?: WalletNetwork) {
  const address = (value ?? "").trim();
  if (!address || address.length > MAX_ADDRESS_LENGTH || /\s/.test(address)) return null;
  if (network === "bitcoin") return BITCOIN_ADDRESS.test(address) ? address : null;
  if (network === "solana") return SOLANA_ADDRESS.test(address) ? address : null;
  if (network === "ethereum" || network === "base" || network === "arbitrum" || network === "polygon") return EVM_ADDRESS.test(address) ? address : null;
  return null;
}

function networkParameter(network: WalletNetwork) {
  if (network === "arbitrum") return "arbitrum-wallet";
  if (network === "polygon") return "polygon-wallet";
  return network;
}

function endpointFor(mode: WalletMode) {
  if (mode === "pl") return "pl";
  if (mode === "defi") return "defi";
  return "balance";
}

function providerError(status: number) {
  if (status === 400) return "The provider rejected this address and network combination.";
  if (status === 401 || status === 403) return "The server-side provider configuration was not accepted.";
  if (status === 404) return "The provider found no supported wallet data for this request.";
  if (status === 409) return "Performance data is not ready because the provider needs transaction history to be synchronized.";
  if (status === 429) return "The provider rate limit was reached. Please wait before trying again.";
  return "The wallet provider is temporarily unavailable. Try again shortly.";
}

function clearExpiredRequests() {
  const expiry = Date.now() - 10 * 60_000;
  for (const [key, timestamp] of recentRequests) if (timestamp < expiry) recentRequests.delete(key);
}

export async function getWalletData(address: string, network: WalletNetwork, mode: WalletMode): Promise<WalletResponse> {
  const checkedAt = new Date().toISOString();
  const apiKey = process.env.COINSTATS_API_KEY;
  if (!apiKey) return { provider: "unavailable", mode, network, checkedAt, data: null, error: "Wallet research is not configured on this server yet." };

  clearExpiredRequests();
  const requestKey = `${mode}:${network}:${address.toLowerCase()}`;
  const previous = recentRequests.get(requestKey) ?? 0;
  if (Date.now() - previous < MIN_REQUEST_GAP_MS) {
    return { provider: "unavailable", mode, network, checkedAt, data: null, error: "Please wait 30 seconds before repeating this wallet request." };
  }
  recentRequests.set(requestKey, Date.now());

  const endpoint = new URL(`https://api.coinstats.app/v1/wallet/${endpointFor(mode)}`);
  endpoint.searchParams.set("address", address);
  endpoint.searchParams.set("blockchain", networkParameter(network));
  if (mode === "pl") {
    endpoint.searchParams.set("page", "1");
    endpoint.searchParams.set("limit", "100");
  }

  try {
    const response = await fetch(endpoint, { headers: { "X-API-KEY": apiKey, Accept: "application/json" }, cache: "no-store", signal: AbortSignal.timeout(12_000) });
    if (!response.ok) return { provider: "unavailable", mode, network, checkedAt, data: null, error: providerError(response.status) };
    return { provider: "CoinStats", mode, network, checkedAt, data: await response.json() };
  } catch {
    return { provider: "unavailable", mode, network, checkedAt, data: null, error: "The wallet provider did not respond in time. Try again shortly." };
  }
}
