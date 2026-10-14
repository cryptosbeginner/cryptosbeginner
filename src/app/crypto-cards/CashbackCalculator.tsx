"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cardListings } from "./cards-data";

type CalculatorCard = {
  slug: string;
  name: string;
  provider: string;
  rate: number;
  cap: number | null;
  token: string;
  conditions: string;
};

function parseCashback(card: (typeof cardListings)[number]): CalculatorCard | null {
  const rewards = card.rewards.toLowerCase();
  if (/no cashback|no rewards|not advertised/.test(rewards)) return null;

  const rateMatch = rewards.match(/(\d+(?:\.\d+)?)\s*%/);
  if (!rateMatch) return null;
  const rate = parseFloat(rateMatch[1]);
  if (rate <= 0 || rate > 10) return null;

  const capMatch = rewards.match(/cap(?:ped)?(?:\s+at)?\s+\$?(\d+(?:,\d+)?)/i) || rewards.match(/\$(\d+(?:,\d+)?)\s*(?:per month|monthly|\/mo)/i);
  const cap = capMatch ? parseInt(capMatch[1].replace(",", ""), 10) : null;

  const tokenMatch = card.rewards.match(/\b([A-Z]{2,6})\s+(?:rewards|cashback|tokens?)\b/) || card.rewards.match(/in\s+([A-Z]{2,6})\b/);
  const token = tokenMatch ? tokenMatch[1] : "rewards";

  return {
    slug: card.slug,
    name: card.name,
    provider: card.provider,
    rate,
    cap,
    token,
    conditions: card.rewards,
  };
}

export default function CashbackCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(1000);

  const results = useMemo(() => {
    const cards: CalculatorCard[] = [];
    for (const card of cardListings) {
      const parsed = parseCashback(card);
      if (parsed) cards.push(parsed);
    }
    return cards
      .map((card) => {
        const gross = (monthlySpend * card.rate) / 100;
        const estimated = card.cap !== null ? Math.min(gross, card.cap) : gross;
        const capped = card.cap !== null && gross > card.cap;
        return { ...card, estimated, capped };
      })
      .sort((a, b) => b.estimated - a.estimated);
  }, [monthlySpend]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Cashback calculator</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">What would you actually earn?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Enter your typical monthly card spend. Estimates use each card&apos;s advertised cashback rate with monthly caps applied where published. Rates, caps, and eligibility change; verify on the provider page before applying.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5">
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

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-black uppercase tracking-[0.1em] text-slate-500">
                <th className="px-4 py-3">Card</th>
                <th className="px-4 py-3">Rate</th>
                <th className="px-4 py-3">Est. monthly reward</th>
                <th className="px-4 py-3">Paid in</th>
                <th className="px-4 py-3">Conditions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((card) => (
                <tr key={card.slug} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-black">
                    <Link href={`/crypto-cards/${card.slug}`} className="hover:text-fuchsia-700">{card.name}</Link>
                    <div className="text-xs font-semibold text-slate-500">{card.provider}</div>
                  </td>
                  <td className="px-4 py-3 font-black text-emerald-700">{card.rate}%</td>
                  <td className="px-4 py-3">
                    <span className="font-black">${card.estimated.toFixed(2)}</span>
                    {card.capped && <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800">Cap applied</span>}
                  </td>
                  <td className="px-4 py-3 text-xs">{card.token}</td>
                  <td className="px-4 py-3 text-xs leading-5 text-slate-600">{card.conditions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {results.length === 0 && (
          <p className="mt-6 rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-600">
            No cards in the directory currently publish a parseable cashback rate.
          </p>
        )}

        <p className="mt-5 text-xs leading-5 text-slate-500">
          <strong>Methodology:</strong> Estimates multiply your spend by the advertised base rate, then apply any published monthly cap. Tiered rates, staking requirements, lockups, excluded merchant categories, and regional differences are not modeled. Figures checked October 2026; provider terms are the authority. Spending crypto can have tax consequences depending on your jurisdiction.
        </p>
      </div>
    </section>
  );
}
