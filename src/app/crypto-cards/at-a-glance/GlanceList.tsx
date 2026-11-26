"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cardListings } from "../cards-data";
import { getCardRating } from "../ratings";
import { modelCashback } from "../effective-cashback/cashback-math";

type NetworkFilter = "all" | "visa" | "mastercard";
type CustodyFilter = "all" | "self" | "provider";
type SortKey = "rating" | "name" | "cashback";

function barColor(score: number): string {
  if (score >= 8) return "bg-emerald-500";
  if (score >= 6) return "bg-lime-500";
  if (score >= 4) return "bg-amber-500";
  return "bg-rose-500";
}

function networkLabel(network: string): string {
  if (network.includes("Visa") && network.includes("Mastercard")) return "Visa · Mastercard";
  if (network.includes("Visa")) return "Visa";
  if (network.includes("Mastercard")) return "Mastercard";
  return "Network not published";
}

export default function GlanceList() {
  const [query, setQuery] = useState("");
  const [network, setNetwork] = useState<NetworkFilter>("all");
  const [custody, setCustody] = useState<CustodyFilter>("all");
  const [sort, setSort] = useState<SortKey>("rating");

  const rows = useMemo(() => {
    const enriched = cardListings.map((card) => ({
      card,
      rating: getCardRating(card),
      model: modelCashback(card),
    }));
    const q = query.trim().toLowerCase();
    const filtered = enriched.filter(({ card }) => {
      if (q && !`${card.name} ${card.provider}`.toLowerCase().includes(q)) return false;
      if (network === "visa" && !card.network.includes("Visa")) return false;
      if (network === "mastercard" && !card.network.includes("Mastercard")) return false;
      if (custody === "self" && !card.categories.includes("self-custody")) return false;
      if (custody === "provider" && card.categories.includes("self-custody")) return false;
      return true;
    });
    filtered.sort((a, b) => {
      if (sort === "name") return a.card.name.localeCompare(b.card.name);
      if (sort === "cashback") return (b.model?.rate ?? -1) - (a.model?.rate ?? -1);
      return b.rating.score - a.rating.score;
    });
    return filtered;
  }, [query, network, custody, sort]);

  const selectClass =
    "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-800";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by card or provider"
          className="min-w-56 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 placeholder:font-medium placeholder:text-slate-400"
          aria-label="Search cards"
        />
        <select value={network} onChange={(e) => setNetwork(e.target.value as NetworkFilter)} className={selectClass} aria-label="Filter by network">
          <option value="all">All networks</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>
        <select value={custody} onChange={(e) => setCustody(e.target.value as CustodyFilter)} className={selectClass} aria-label="Filter by custody">
          <option value="all">All custody models</option>
          <option value="self">Self-custody</option>
          <option value="provider">Provider-held</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className={selectClass} aria-label="Sort cards">
          <option value="rating">Sort: highest rated</option>
          <option value="cashback">Sort: cashback rate</option>
          <option value="name">Sort: name A to Z</option>
        </select>
      </div>
      <p className="mt-3 text-xs font-semibold text-slate-500">
        Showing {rows.length} of {cardListings.length} cards. One line per card, from its checked listing; open a card for fees, caps and terms.
      </p>
      <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {rows.map(({ card, rating, model }) => (
          <Link
            key={card.slug}
            href={`/crypto-cards/${card.slug}`}
            className="flex items-center gap-4 px-4 py-3.5 transition hover:bg-slate-50 sm:gap-5 sm:px-5"
          >
            <span className="relative hidden h-12 w-[4.75rem] shrink-0 overflow-hidden rounded-md bg-slate-100 sm:block">
              <Image src={card.imageUrl} alt={card.imageAlt} fill sizes="76px" className="object-contain" referrerPolicy="no-referrer" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-black text-slate-950">{card.name}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500">
                  {networkLabel(card.network)}
                </span>
                {card.categories.includes("self-custody") && (
                  <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-cyan-700">
                    Self-custody
                  </span>
                )}
              </span>
              <span className="mt-0.5 line-clamp-2 block text-sm leading-5 text-slate-600">
                {card.shortDescription}
              </span>
            </span>
            <span className="hidden w-40 shrink-0 text-right md:block">
              <span className="block text-sm font-black text-slate-900">
                {model === null
                  ? "Cashback not published"
                  : model.rateKind === "none"
                    ? "No cashback"
                    : model.rateLabel}
              </span>
              <span className="mt-1.5 flex items-center justify-end gap-2">
                <span className="h-2 w-20 overflow-hidden rounded-full bg-slate-100">
                  <span className={`block h-full rounded-full ${barColor(rating.score)}`} style={{ width: `${Math.max(4, rating.score * 10)}%` }} />
                </span>
                <span className="text-xs font-black text-slate-700">{rating.score.toFixed(1)}</span>
              </span>
            </span>
            <span className="shrink-0 text-slate-300" aria-hidden="true">→</span>
          </Link>
        ))}
        {rows.length === 0 && (
          <p className="px-5 py-8 text-center text-sm font-semibold text-slate-500">
            No cards match those filters. Try a broader search.
          </p>
        )}
      </div>
    </div>
  );
}
