import Link from "next/link";
import {
  LATEST_SPEND_MONTH,
  OCTOBER_2026_PROGRAMS,
  OCTOBER_2026_TOTAL_USD,
  OCTOBER_2026_VS_SEP_PCT,
  formatSignedPct,
  formatSpend,
} from "./spend-data";

export default function CardSpend() {
  const top = OCTOBER_2026_PROGRAMS.slice(0, 10);
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Card spend tracker</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
              {formatSpend(OCTOBER_2026_TOTAL_USD)} spent on crypto cards in {LATEST_SPEND_MONTH}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Settled spend by program, from PaymentScan data, up {OCTOBER_2026_VS_SEP_PCT}% on
              September. The ten largest of 28 named programs are below; the full tracker has
              every program, twelve months of history, and the methodology.
            </p>
          </div>
          <Link
            href="/crypto-cards/spending"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-emerald-700"
          >
            Open the spend tracker
          </Link>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 font-black text-slate-950">#</th>
                <th className="px-4 py-3 font-black text-slate-950">Program</th>
                <th className="px-4 py-3 font-black text-slate-950">October spend</th>
                <th className="px-4 py-3 font-black text-slate-950">Share</th>
                <th className="px-4 py-3 font-black text-slate-950">vs September</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {top.map((p, i) => (
                <tr key={p.program} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-400">{i + 1}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {p.slug ? (
                      <Link href={`/crypto-cards/${p.slug}`} className="text-emerald-700 hover:text-emerald-900">
                        {p.program}
                      </Link>
                    ) : (
                      p.program
                    )}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">{formatSpend(p.spendUsd)}</td>
                  <td className="px-4 py-3">{p.sharePct}%</td>
                  <td className={`px-4 py-3 ${p.vsPrevPct !== null && p.vsPrevPct >= 0 ? "font-bold text-emerald-700" : "font-bold text-rose-700"}`}>
                    {formatSignedPct(p.vsPrevPct)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Data: PaymentScan (paymentscan.xyz) via Castle Labs, settled payments to 31 October
          2026. RedotPay is issuer-reported and cannot be verified onchain; see the tracker for
          full methodology.
        </p>
      </div>
    </section>
  );
}
