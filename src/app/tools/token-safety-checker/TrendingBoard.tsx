"use client";

import { useEffect, useState } from "react";

type TrendingToken = {
  rank: number;
  address: string;
  name: string | null;
  symbol: string | null;
  networkId: number;
  chainId: string | null;
  chainLabel: string;
  marketCap: number | null;
  liquidity: number | null;
  volume24: number | null;
  change24: number | null;
  risk: { verdict: string; score: number | null; coverage: string | null } | null;
};

type BoardPayload = {
  tokens: TrendingToken[];
  screenedOut: number;
  fetched: number;
  updatedAt: string;
  error?: string;
};

const VERDICT_LABELS: Record<string, string> = {
  NEUTRAL: "Neutral",
  VERIFIED: "Verified",
  VERIFIED_CONTESTED: "Verified, contested",
  CAUTION: "Caution",
};

function fmtMoney(v: number | null): string {
  if (v === null) return "n/a";
  if (v >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3) return `$${(v / 1e3).toFixed(1)}K`;
  return `$${v.toFixed(0)}`;
}

function RiskBadge({ token }: { token: TrendingToken }) {
  if (!token.risk) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
        Unrated
      </span>
    );
  }
  const label = VERDICT_LABELS[token.risk.verdict] ?? token.risk.verdict;
  const score = token.risk.score;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
      {label}
      {score !== null && <span className="rounded-full bg-white/80 px-1.5 py-0.5 text-[10px]">{Math.round(score)}/100</span>}
    </span>
  );
}

export default function TrendingBoard() {
  const [board, setBoard] = useState<BoardPayload | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/trending-tokens")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data: BoardPayload) => {
        if (alive) setBoard(data);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="mt-12" aria-label="Trending tokens, risk screened">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-950 px-6 py-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black text-white">Trending now, risk-screened</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                The tokens trending hardest across every chain right now, with anything Codex rates
                a proven scam, high risk, or 40+ on its risk score already removed.
              </p>
            </div>
            {board && (
              <p className="text-xs font-bold text-slate-400">
                Updated {new Date(board.updatedAt).toLocaleTimeString()} · {board.screenedOut} of{" "}
                {board.fetched} trending tokens screened out
              </p>
            )}
          </div>
        </div>

        {!board && !failed && (
          <div className="space-y-3 p-6 sm:p-8" aria-live="polite">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />
            ))}
            <p className="text-xs font-bold text-slate-500">Loading the trending board...</p>
          </div>
        )}

        {failed && (
          <p className="p-6 text-sm leading-7 text-slate-600 sm:p-8">
            The trending board is unavailable right now. The scanner above still works: paste any
            contract address to check a token directly.
          </p>
        )}

        {board && (
          <ol className="divide-y divide-slate-100">
            {board.tokens.map((t) => {
              const up = (t.change24 ?? 0) >= 0;
              return (
                <li key={`${t.networkId}-${t.address}`} className="px-6 py-4 sm:px-8">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    <span className="w-7 text-lg font-black text-slate-300">{t.rank}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-black text-slate-900">
                        {t.name ?? "Unknown token"}
                        {t.symbol && <span className="ml-2 text-sm font-bold text-slate-500">{t.symbol}</span>}
                      </p>
                      <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs font-bold text-slate-500">
                        <span>{t.chainLabel}</span>
                        <span>MC {fmtMoney(t.marketCap)}</span>
                        <span>Vol 24h {fmtMoney(t.volume24)}</span>
                        <span>Liq {fmtMoney(t.liquidity)}</span>
                      </p>
                    </div>
                    <span className={`text-sm font-black ${up ? "text-emerald-600" : "text-red-600"}`}>
                      {t.change24 === null ? "n/a" : `${up ? "+" : ""}${t.change24.toFixed(1)}%`}
                      <span className="ml-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">24h</span>
                    </span>
                    <RiskBadge token={t} />
                    {t.chainId ? (
                      <a
                        href={`/tools/token-safety-checker?address=${encodeURIComponent(t.address)}&chain=${t.chainId}`}
                        className="rounded-full bg-indigo-700 px-4 py-2 text-xs font-black text-white transition hover:bg-indigo-800"
                      >
                        Scan it
                      </a>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-500">
                        Chain not in checker
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        )}

        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 sm:px-8">
          <p className="text-xs leading-6 text-slate-500">
            Trending data and risk verdicts by Codex, the data engine behind{" "}
            <a href="/tools/defined-fi-review" className="font-bold text-indigo-700">
              Defined.fi
            </a>
            . The board refreshes about every 30 minutes. Trending is not a recommendation: a
            screened token has passed a first risk filter, nothing more. Scan anything before you
            buy, and never trade money you cannot afford to lose.
          </p>
        </div>
      </div>
    </section>
  );
}
