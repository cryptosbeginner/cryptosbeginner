export type MiningSnapshot = {
  currentHashrateTHs: number | null;
  currentDifficulty: number | null;
  checkedAt: string;
};

export async function getMiningSnapshot(): Promise<MiningSnapshot> {
  try {
    const response = await fetch("https://mempool.space/api/v1/mining/hashrate/1m", {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) return { currentHashrateTHs: null, currentDifficulty: null, checkedAt: new Date().toISOString() };
    const payload = await response.json() as { currentHashrate?: number; currentDifficulty?: number };
    const currentHashrateTHs = typeof payload.currentHashrate === "number" && Number.isFinite(payload.currentHashrate) ? payload.currentHashrate / 1e12 : null;
    const currentDifficulty = typeof payload.currentDifficulty === "number" && Number.isFinite(payload.currentDifficulty) ? payload.currentDifficulty : null;
    return { currentHashrateTHs, currentDifficulty, checkedAt: new Date().toISOString() };
  } catch {
    return { currentHashrateTHs: null, currentDifficulty: null, checkedAt: new Date().toISOString() };
  }
}
