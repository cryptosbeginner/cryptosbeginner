"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cardListings } from "./cards-data";
import {
  effectiveAt,
  fmtUsd,
  modelCashback,
  type CashbackModel,
} from "./effective-cashback/cashback-math";

// Cards whose listings publish a single numeric FX markup we can model.
// ether.fi Cash: "FX markup: 0.5% Core, 0.25% Luxe, none on Pinnacle/VIP"
// (base Core tier modeled). Kolo: "EUR card FX up to 1.35% on non-EUR
// purchases" (the published maximum is modeled). Every other card's FX cost
// is not modeled and is flagged in the table instead of guessed.
const VERIFIED_FX_PCT: Record<string, { pct: number; note: string }> = {
  "etherfi-cash-card": { pct: 0.5, note: "0.5% FX markup on the Core tier" },
  "kolo-card": { pct: 1.35, note: "up to 1.35% FX on non-EUR purchases (EUR card)" },
};

type Row = {
  model: CashbackModel;
  gross: number;
  feePerMonth: number | null;
  fxCost: number | null;
  net: number;
  capped: boolean;
};

export default function CashbackCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(1000);
  const [fxShare, setFxShare] = useState(0);

  const { rows, excluded } = useMemo(() => {
    const models: CashbackModel[] = [];
    let excludedCount = 0;
    for (const card of cardListings) {
      const model = modelCashback(card);
      if (!model || model.rateKind === "none") {
        excludedCount++;
        continue;
      }
      models.push(model);
    }
    const computed: Row[] = models.map((model) => {
      const eff = effectiveAt(model, monthlySpend);
      const gross = Math.min(
        (monthlySpend * model.rate) / 100,
        model.monthlyCap ?? Infinity,
      );
      const fx = VERIFIED_FX_PCT[model.card.slug];
      const fxCost =
        fx && fxShare > 0
          ? (monthlySpend * (fxShare / 100) * fx.pct) / 100
          : fx
            ? 0
            : null;
      return {
        model,
        gross,
        feePerMonth: model.annualFee !== null ? model.annualFee / 12 : null,
        fxCost,
        net: eff.netBack - (fxCost ?? 0),
        capped: model.monthlyCap !== null && gross >= model.monthlyCap,
      };
    });
    computed.sort((x, y) => y.net - x.net);
    return { rows: computed, excluded: excludedCount };
  }, [monthlySpend, fxShare]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Net rewards calculator</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">What would you actually keep?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Enter your monthly spend and how much of it is in a foreign currency. The ranking subtracts each card&apos;s
              annual fee and, where the listing publishes a numeric FX markup, the FX cost, from its cashback after caps.
              That is the order that matters, not the headline rate.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
              Monthly spend (USD)
              <input
                type="number"
                min={0}
                max={100000}
                step={50}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Math.max(0, parseInt(e.target.value || "0", 10)))}
                className="mt-2 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-4 py-3 text-lg font-black outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
            </label>
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(parseInt(e.target.value, 10))}
              className="mt-4 w-full accent-fuchsia-600"
              aria-label="Monthly spend slider"
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
              Spent in a foreign currency: {fxShare}%
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={fxShare}
                onChange={(e) => setFxShare(parseInt(e.target.value, 10))}
                className="mt-4 w-full accent-cyan-600"
                aria-label="Foreign currency share slider"
              />
            </label>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              FX cost is subtracted only for cards whose listings publish a numeric FX markup. The rest are flagged
              &quot;FX not modeled&quot; rather than guessed.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-black uppercase tracking-[0.1em] text-slate-500">
                <th className="px-4 py-3">Card</th>
                <th className="px-4 py-3">Cashback rate</th>
                <th className="px-4 py-3">Gross / mo</th>
                <th className="px-4 py-3">Annual fee / mo</th>
                <th className="px-4 py-3">FX cost / mo</th>
                <th className="px-4 py-3">Net / mo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ model, gross, feePerMonth, fxCost, net, capped }) => (
                <tr key={model.card.slug} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-black">
                    <Link href={`/crypto-cards/${model.card.slug}`} className="hover:text-fuchsia-700">{model.card.name}</Link>
                    <div className="text-xs font-semibold text-slate-500">{model.card.provider}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-black text-emerald-700">{model.rateLabel}</span>
                    {model.rateKind === "max-only" && <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800">Maximum, not base</span>}
                    {capped && <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800">Cap applied</span>}
                  </td>
                  <td className="px-4 py-3">{fmtUsd(gross)}</td>
                  <td className="px-4 py-3">{feePerMonth === null ? <span className="text-xs font-semibold text-slate-400">Not published</span> : fmtUsd(feePerMonth)}</td>
                  <td className="px-4 py-3">
                    {fxShare === 0 ? <span className="text-xs font-semibold text-slate-400">n/a</span> : fxCost === null ? <span className="text-xs font-semibold text-amber-700">Not modeled</span> : fmtUsd(fxCost)}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`font-black ${net < 0 ? "text-rose-700" : ""}`}>{fmtUsd(net)}</span>
                    {fxShare > 0 && fxCost === null && <div className="text-[10px] font-semibold text-slate-400">before FX</div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 && (
          <p className="mt-6 rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-600">
            No cards in the directory currently publish a modelable cashback rate.
          </p>
        )}

        <p className="mt-5 text-xs leading-5 text-slate-500">
          <strong>Methodology:</strong> Cashback uses the base rate derived from each listing&apos;s published rewards text
          (a lone &quot;up to&quot; rate is flagged as a maximum, not a base), applies any published monthly cap, then subtracts
          the annual fee spread over 12 months. Annual fees marked &quot;Not published&quot; are treated as zero in the math and
          flagged, never invented. FX is modeled only for {Object.values(VERIFIED_FX_PCT).length} cards with a numeric markup in
          their listings: {Object.entries(VERIFIED_FX_PCT).map(([slug, v]) => `${cardListings.find((c) => c.slug === slug)?.name ?? slug} (${v.note})`).join("; ")}.
          Tiered bands, staking or lockup requirements, excluded categories and regional terms are not modeled. {excluded} cards
          publish no modelable cashback and are excluded. See also the{" "}
          <Link href="/crypto-cards/effective-cashback" className="font-black text-fuchsia-700">effective cashback rankings</Link>.
          Provider terms are the authority; spending crypto can have tax consequences.
        </p>
      </div>
    </section>
  );
}
