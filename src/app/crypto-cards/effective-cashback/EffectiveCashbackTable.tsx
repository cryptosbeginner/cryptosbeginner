"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cardListings } from "../cards-data";
import {
  SPEND_LEVELS,
  effectiveAt,
  fmtPct,
  fmtUsd,
  modelCashback,
  type EffectiveResult,
} from "./cashback-math";

function RankedRow({
  row,
  rank,
  spend,
}: {
  row: EffectiveResult;
  rank: number;
  spend: number;
}) {
  const card = row.card;
  return (
    <tr className="border-b border-slate-100 transition hover:bg-indigo-50/50">
      <td className="px-3 py-3 text-center text-sm font-black text-slate-400">
        {rank}
      </td>
      <td className="px-3 py-3">
        <Link
          href={`/crypto-cards/${card.slug}`}
          className="flex items-center gap-3"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <Image
              src={card.imageUrl}
              alt=""
              fill
              sizes="36px"
              className="object-contain p-1"
            />
          </span>
          <span className="text-sm font-bold text-slate-900 hover:text-indigo-700">
            {card.name}
          </span>
        </Link>
      </td>
      <td className="px-3 py-3 text-sm text-slate-600">{row.rateLabel}</td>
      <td className="px-3 py-3 text-sm text-slate-600">
        {row.monthlyCap !== null ? fmtUsd(row.monthlyCap) : "Not published"}
      </td>
      <td className="px-3 py-3 text-sm text-slate-600">
        {row.annualFee !== null ? fmtUsd(row.annualFee) : "Not published"}
      </td>
      <td className="px-3 py-3 text-right">
        <span
          className={`text-sm font-black ${row.effectivePct >= 2 ? "text-emerald-600" : row.effectivePct >= 1 ? "text-slate-900" : "text-slate-500"}`}
        >
          {fmtPct(row.effectivePct)}
        </span>
      </td>
      <td className="px-3 py-3 text-right text-sm font-bold text-slate-700">
        {fmtUsd(row.netBack)}
        <span className="block text-[11px] font-normal text-slate-400">
          per month
        </span>
      </td>
    </tr>
  );
}

export default function EffectiveCashbackTable() {
  const [spend, setSpend] = useState<number>(1000);

  const { ranked, promo, noneCount, unknownCount } = useMemo(() => {
    const models = cardListings
      .map(modelCashback)
      .filter((m) => m !== null);
    const ranked = models
      .filter((m) => m.rateKind === "base" && m.rate > 0)
      .map((m) => effectiveAt(m, spend))
      .sort((a, b) => b.effectivePct - a.effectivePct);
    const promo = models
      .filter((m) => m.rateKind === "max-only")
      .map((m) => effectiveAt(m, spend))
      .sort((a, b) => b.effectivePct - a.effectivePct);
    const noneCount = models.filter((m) => m.rateKind === "none").length;
    const unknownCount = cardListings.length - models.length;
    return { ranked, promo, noneCount, unknownCount };
  }, [spend]);

  const top3 = ranked.slice(0, 3);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-slate-600">
          Monthly spend:
        </span>
        {SPEND_LEVELS.map((level) => (
          <button
            key={level}
            onClick={() => setSpend(level)}
            aria-pressed={spend === level}
            className={`min-h-11 rounded-lg px-5 py-2.5 text-sm font-black transition ${
              spend === level
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            ${level.toLocaleString()}
          </button>
        ))}
      </div>

      {top3.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {top3.map((row, i) => (
            <Link
              key={row.card.slug}
              href={`/crypto-cards/${row.card.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <p className="text-xs font-black uppercase tracking-widest text-indigo-600">
                #{i + 1} at ${spend.toLocaleString()}/mo
              </p>
              <p className="mt-2 text-base font-black text-slate-900">
                {row.card.name}
              </p>
              <p className="mt-1 text-3xl font-black text-emerald-600">
                {fmtPct(row.effectivePct)}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {fmtUsd(row.netBack)} back per month &middot; {row.rateLabel}
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-slate-950 text-left">
              <th className="px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-300">
                #
              </th>
              <th className="px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-300">
                Card
              </th>
              <th className="px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-300">
                Published rate
              </th>
              <th className="px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-300">
                Monthly cap
              </th>
              <th className="px-3 py-3 text-xs font-black uppercase tracking-wider text-slate-300">
                Annual fee
              </th>
              <th className="px-3 py-3 text-right text-xs font-black uppercase tracking-wider text-slate-300">
                Effective @ ${spend.toLocaleString()}
              </th>
              <th className="px-3 py-3 text-right text-xs font-black uppercase tracking-wider text-slate-300">
                Est. back
              </th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((row, i) => (
              <RankedRow key={row.card.slug} row={row} rank={i + 1} spend={spend} />
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Ranked by net effective cashback at ${spend.toLocaleString()} monthly
        spend: rewards after any published monthly cap, minus one twelfth of the
        published annual fee. {ranked.length} cards modeled.
      </p>

      {promo.length > 0 && (
        <details className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <summary className="cursor-pointer text-base font-black text-slate-900">
            Promotional &ldquo;up to&rdquo; rates ({promo.length}) &mdash; not
            ranked
          </summary>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            These cards advertise a maximum rate (&ldquo;up to X%&rdquo;) with
            tier, staking, or spending conditions, but no published base rate.
            The figure below assumes you actually earn the maximum, which most
            users won&rsquo;t. Verify the qualifying conditions on the provider
            page before counting on it.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {promo.map((row) => (
              <li
                key={row.card.slug}
                className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm"
              >
                <Link
                  href={`/crypto-cards/${row.card.slug}`}
                  className="font-bold text-slate-900 hover:text-indigo-700"
                >
                  {row.card.name}
                </Link>
                <span className="shrink-0 text-slate-600">
                  {row.rateLabel} &middot;{" "}
                  <strong className="text-slate-900">
                    {fmtPct(row.effectivePct)}
                  </strong>{" "}
                  if max earned
                </span>
              </li>
            ))}
          </ul>
        </details>
      )}

      <p className="mt-6 text-sm text-slate-500">
        {noneCount} cards in our directory advertise no cashback program, and{" "}
        {unknownCount} publish too little rate data to model. Figures are
        estimates from our October 2026 listings; provider terms are the
        authority.
      </p>
    </div>
  );
}
