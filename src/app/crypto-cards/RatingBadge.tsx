"use client";

import { useState } from "react";
import type { CardRating } from "./ratings";

function badgeColor(score: number): string {
  if (score >= 8) return "bg-emerald-500";
  if (score >= 6) return "bg-lime-500";
  if (score >= 4) return "bg-amber-500";
  return "bg-rose-500";
}

export default function RatingBadge({ rating, compact = false }: { rating: CardRating; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const provisional = rating.status === "provisional";
  return (
    <span className="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-label={`Card rating ${rating.score.toFixed(1)} out of 10${provisional ? ", provisional" : ""}. Activate for details.`}
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 ${compact ? "py-1" : "py-1.5"} text-xs font-black text-white shadow-sm ${provisional ? "bg-slate-400" : badgeColor(rating.score)}`}
      >
        <svg aria-hidden="true" width={12} height={12} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.7 5.8 6.3.8-4.6 4.3 1.2 6.1-5.6-3.1-5.6 3.1 1.2-6.1L3 9.6l6.3-.8L12 3Z" /></svg>
        {rating.score.toFixed(1)}
        {provisional && <span className="rounded-full bg-white/25 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider">Provisional</span>}
      </button>
      {open && (
        <span className="absolute left-0 top-full z-40 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-xl">
          <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-400">How this score is built</span>
          <span className="mt-2 block space-y-1">
            {rating.breakdown.map((b) => (
              <span key={b.category} className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">{b.category} ({b.weight}%)</span>
                <span className="font-black text-slate-900">{b.score.toFixed(1)}</span>
              </span>
            ))}
          </span>
          {provisional && (
            <span className="mt-2 block text-[11px] leading-5 text-slate-500">Provisional: limited fee and rewards data. The score updates automatically when the provider publishes structured fee and cashback terms.</span>
          )}
          <a href="/crypto-cards#how-we-rate" className="mt-2 inline-block text-xs font-black text-fuchsia-700 hover:text-fuchsia-900">How we rate →</a>
        </span>
      )}
    </span>
  );
}
