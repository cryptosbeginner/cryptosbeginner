/**
 * Live perpetuals market data from Hyperliquid's public API.
 * No API key required. Responses are cached by Next.js (see revalidate below)
 * so we never hammer the endpoint on every page view.
 */

export type PerpMarket = {
  asset: string;
  markPx: number;
  prevDayPx: number;
  dayNtlVlm: number;
  openInterest: number;
  openInterestUsd: number;
  funding: number;
  maxLeverage: number;
};

export type PerpsSnapshot = {
  markets: PerpMarket[];
  totalDayVolumeUsd: number;
  fetchedAt: string;
  stale: boolean;
};

const HL_API = "https://api.hyperliquid.xyz/info";

function num(v: unknown): number {
  const n = parseFloat(String(v ?? "0"));
  return Number.isFinite(n) ? n : 0;
}

export async function getPerpsSnapshot(): Promise<PerpsSnapshot> {
  try {
    const res = await fetch(HL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "metaAndAssetCtxs" }),
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Hyperliquid API HTTP ${res.status}`);
    const [meta, ctxs] = (await res.json()) as [
      { universe: Array<{ name: string; maxLeverage?: number }> },
      Array<Record<string, unknown>>,
    ];
    const markets: PerpMarket[] = meta.universe.map((u, i) => {
      const c = ctxs[i] ?? {};
      const markPx = num(c.markPx);
      const oi = num(c.openInterest);
      return {
        asset: u.name,
        markPx,
        prevDayPx: num(c.prevDayPx),
        dayNtlVlm: num(c.dayNtlVlm),
        openInterest: oi,
        openInterestUsd: oi * markPx,
        funding: num(c.funding),
        maxLeverage: u.maxLeverage ?? 0,
      };
    });
    const totalDayVolumeUsd = markets.reduce((s, m) => s + m.dayNtlVlm, 0);
    markets.sort((a, b) => b.dayNtlVlm - a.dayNtlVlm);
    return {
      markets,
      totalDayVolumeUsd,
      fetchedAt: new Date().toISOString(),
      stale: false,
    };
  } catch {
    return { markets: [], totalDayVolumeUsd: 0, fetchedAt: new Date().toISOString(), stale: true };
  }
}

export function fmtUsdCompact(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

export function fmtPrice(n: number): string {
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 1 });
  if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 3 });
  return n.toPrecision(4);
}
