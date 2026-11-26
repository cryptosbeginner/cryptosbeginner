import type { CardListing } from "./cards-data";
import {
  effectiveAt,
  fmtUsd,
  modelCashback,
} from "./effective-cashback/cashback-math";

const LEVELS = [500, 1000, 3000];

export default function WhatYouKeep({ card }: { card: CardListing }) {
  const model = modelCashback(card);
  if (!model || model.rateKind === "unknown" || model.rateKind === "none") return null;

  const rows = LEVELS.map((level) => {
    const result = effectiveAt(model, level);
    const grossYear =
      Math.min((level * model.rate) / 100, model.monthlyCap ?? Infinity) * 12;
    const feesYear = model.annualFee ?? 0;
    return {
      level,
      grossYear,
      feesYear,
      keptYear: result.netBack * 12,
      effectivePct: result.effectivePct,
    };
  });

  return (
    <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/20">
      <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-700">
        Worked cashback math
      </p>
      <h2 className="mt-3 text-2xl font-black">
        What you keep at different spend levels
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
        Worked out from the published terms on this listing: {model.rateLabel}
        {model.monthlyCap
          ? `, with cashback capped at ${fmtUsd(model.monthlyCap)} a month`
          : ", with no monthly cap in the published terms"}
        {model.annualFee === null
          ? ". The annual fee is not published, so the kept figures assume none and may flatter the card"
          : model.annualFee === 0
            ? ", and no annual fee"
            : `, minus the ${fmtUsd(model.annualFee)} annual fee`}
        .
        {model.rateKind === "max-only"
          ? " The rate used is the top published rate, which usually needs a top tier or narrow categories, so treat these figures as a ceiling, not a typical result."
          : ""}{" "}
        FX fees and any per-payment fees are not included.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
              <th className="px-4 py-3">Monthly spend</th>
              <th className="px-4 py-3">Cashback a year</th>
              <th className="px-4 py-3">Annual fee</th>
              <th className="px-4 py-3">Kept per year</th>
              <th className="px-4 py-3">Effective rate</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {rows.map((row) => (
              <tr
                key={row.level}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-bold text-slate-900">
                  {fmtUsd(row.level)}
                </td>
                <td className="px-4 py-3">{fmtUsd(row.grossYear)}</td>
                <td className="px-4 py-3">
                  {model.annualFee === null
                    ? "Not published"
                    : fmtUsd(row.feesYear)}
                </td>
                <td className="px-4 py-3 font-black text-slate-950">
                  {row.keptYear >= 0 ? "+" : ""}
                  {fmtUsd(row.keptYear)}
                </td>
                <td className="px-4 py-3">{row.effectivePct.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">
        Same math as our{" "}
        <a
          href="/crypto-cards/effective-cashback"
          className="font-bold text-fuchsia-700 hover:text-fuchsia-900"
        >
          rewards calculator
        </a>
        , where you can compare every card at your own spend level.
      </p>
    </section>
  );
}
