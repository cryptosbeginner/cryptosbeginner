export const NEXT_HALVING_BLOCK = 1_050_000;
export const CURRENT_BLOCK_REWARD = 3.125;
export const NEXT_BLOCK_REWARD = 1.5625;
export const AVERAGE_BLOCK_SECONDS = 600;

export async function getBitcoinTipHeight(): Promise<{ height: number | null; checkedAt: string }> {
  try {
    const response = await fetch("https://mempool.space/api/blocks/tip/height", { next: { revalidate: 300 }, signal: AbortSignal.timeout(8_000) });
    if (!response.ok) return { height: null, checkedAt: new Date().toISOString() };
    const raw = Number((await response.text()).trim());
    if (!Number.isInteger(raw) || raw < 1 || raw > 2_000_000) return { height: null, checkedAt: new Date().toISOString() };
    return { height: raw, checkedAt: new Date().toISOString() };
  } catch {
    return { height: null, checkedAt: new Date().toISOString() };
  }
}

export function blocksRemaining(height: number | null) {
  return height === null ? null : Math.max(0, NEXT_HALVING_BLOCK - height);
}
