"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  cardCategories,
  cardFaqs,
  custodyFilters,
  allCryptoCards,
  kycFilters,
  type CardCategory,
  type CustodyModel,
  type CryptoCard,
  type KycLevel,
} from "./card-data";

type SortMode = "featured" | "name" | "reviewed";

type CardVisualProps = {
  card: CryptoCard;
};

function BrandMark({ card, small = false }: { card: CryptoCard; small?: boolean }) {
  const initials = card.issuer
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (small) {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15 text-[9px] font-black text-white" aria-label={`${card.issuer} brand mark`}>
        {initials}
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15 text-[9px] font-black text-white" aria-hidden="true">
        {initials}
      </span>
      <span>{card.issuer}</span>
    </span>
  );
}

function BrandLogo({ card }: { card: CryptoCard }) {
  const [logoFailed, setLogoFailed] = useState(false);

  if (!card.logoUrl || logoFailed) return <BrandMark card={card} />;

  return (
    <Image
      src={card.logoUrl}
      alt={`${card.issuer} logo`}
      width={28}
      height={28}
      className="h-6 w-6 rounded-md bg-white/10 p-1"
      loading="lazy"
      onError={() => setLogoFailed(true)}
    />
  );
}

function CardVisual({ card }: CardVisualProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-800 p-4 shadow-inner">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-2xl" />
      {card.imageUrl && !imageFailed ? (
        <Image
          src={card.imageUrl}
          alt={`${card.name} card visual`}
          width={800}
          height={500}
          className="relative h-36 w-full rounded-xl object-contain"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="relative flex h-36 items-center justify-center">
          <div className="relative h-28 w-48 rotate-[-7deg] overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500 via-violet-500 to-slate-950 p-4 shadow-2xl shadow-indigo-950/50">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full border border-emerald-200/20" />
            <div className="relative flex items-start justify-between gap-2">
              <BrandMark card={card} small />
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
                {card.network.split(" ")[0]}
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <span className="text-[10px] font-semibold text-white/80">{card.name}</span>
              <span className="text-[9px] text-white/55">CRYPTO</span>
            </div>
          </div>
        </div>
      )}
      <div className="relative mt-3 flex items-center justify-between text-[11px] font-medium text-white/70">
        <span className="flex items-center gap-2">
          <BrandLogo card={card} />
          <span>{card.issuer}</span>
        </span>
        <span>{card.visualCredit ?? "Original directory card visual"}</span>
      </div>
    </div>
  );
}

function matchesCard(card: CryptoCard, query: string) {
  const haystack = [
    card.name,
    card.issuer,
    card.category,
    card.network,
    card.kyc,
    card.custody,
    card.regionLabel,
    card.funding,
    card.headline,
    card.summary,
    card.standout,
    card.checkFirst,
    ...card.regions,
    ...card.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

function kycTone(kyc: KycLevel) {
  if (kyc === "No KYC claim") return "bg-amber-100 text-amber-900";
  if (kyc === "Provider-dependent") return "bg-slate-100 text-slate-700";
  return "bg-indigo-100 text-indigo-800";
}

function custodyTone(custody: CustodyModel) {
  if (custody === "Self-custody until payment") return "bg-emerald-100 text-emerald-900";
  if (custody === "Provider-dependent") return "bg-slate-100 text-slate-700";
  return "bg-violet-100 text-violet-900";
}

export default function CardsDirectory() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | CardCategory>("All");
  const [selectedKyc, setSelectedKyc] = useState<"All" | KycLevel>("All");
  const [selectedCustody, setSelectedCustody] = useState<"All" | CustodyModel>("All");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const filteredCards = useMemo(() => {
    const result = allCryptoCards.filter((card) => {
      const categoryMatches = selectedCategory === "All" || card.category === selectedCategory;
      const kycMatches = selectedKyc === "All" || card.kyc === selectedKyc;
      const custodyMatches = selectedCustody === "All" || card.custody === selectedCustody;
      const queryMatches = query.length === 0 || matchesCard(card, query);
      const countryMatches =
        country.trim().length === 0 ||
        [card.regionLabel, ...card.regions].join(" ").toLowerCase().includes(country.trim().toLowerCase());

      return categoryMatches && kycMatches && custodyMatches && queryMatches && countryMatches;
    });

    return result.sort((a, b) => {
      if (sortMode === "name") return a.name.localeCompare(b.name);
      if (sortMode === "reviewed") return b.lastReviewed.localeCompare(a.lastReviewed);
      return allCryptoCards.indexOf(a) - allCryptoCards.indexOf(b);
    });
  }, [country, query, selectedCategory, selectedCustody, selectedKyc, sortMode]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-200">
                Crypto cards directory · Updated August 2026
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Compare crypto cards by the details that actually matter
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Explore card programs by country, KYC level, custody model, network,
                funding assets, rewards and fee signals. The goal is clarity before
                an application—not a promise that one card is best for everyone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#directory"
                  className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  Browse the directory
                </Link>
                <Link
                  href="/methodology"
                  className="rounded-lg bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  How we evaluate
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">{allCryptoCards.length}</p>
                <p className="mt-1 text-sm text-slate-300">catalog entries from named sources</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">5</p>
                <p className="mt-1 text-sm text-slate-300">comparison lenses beyond rewards</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                  What this page does
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                                It combines independently reviewed profiles with a broader reference index. Reference entries are discovery records, not full reviews, until issuer terms are verified.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800 bg-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-7 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Start with eligibility</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                A card that looks attractive online may not be available in your country or state.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Separate custody from convenience</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                A familiar card interface does not tell you who controls the assets before payment.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Read the fine print</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Rewards, FX, funding, ATM, limits, credit approval and tax treatment can change.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-bold text-indigo-600">01 · KYC</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Identity requirements vary</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A card program may need identity verification even when the underlying funding asset is crypto.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-bold text-indigo-600">02 · custody</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Wallet control is not universal</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Some programs connect to a wallet, while others use an account balance or a provider-operated flow.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-bold text-indigo-600">03 · cost</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Headline rewards are not the whole price</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Compare conversion spreads, FX rules, top-up fees, subscriptions, ATM charges and limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="directory" className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Crypto cards</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Find a card by fit, not hype
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Search the starter directory, narrow it by KYC and custody, then open the official source before making a decision.
              </p>
            </div>
            <Link
              href="mailto:admin@cryptosbeginner.com?subject=Suggest%20a%20crypto%20card%20listing"
              className="inline-flex w-fit rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Suggest a listing
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.7fr]">
              <div>
                <label htmlFor="card-search" className="mb-2 block text-sm font-bold text-slate-800">
                  Search cards, issuers and use cases
                </label>
                <input
                  id="card-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try self-custody, cashback, Bitcoin..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label htmlFor="card-country" className="mb-2 block text-sm font-bold text-slate-800">
                  Country or region
                </label>
                <input
                  id="card-country"
                  type="search"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  placeholder="US, Europe, Canada..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label htmlFor="card-sort" className="mb-2 block text-sm font-bold text-slate-800">
                  Sort listings
                </label>
                <select
                  id="card-sort"
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value as SortMode)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="featured">Editorial starter order</option>
                  <option value="name">Name A–Z</option>
                  <option value="reviewed">Recently reviewed</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCountry("");
                    setSelectedCategory("All");
                    setSelectedKyc("All");
                    setSelectedCustody("All");
                    setSortMode("featured");
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Reset filters
                </button>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Use case</p>
              <div className="flex flex-wrap gap-2">
                {cardCategories.map((category) => {
                  const active = category === selectedCategory;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={active}
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        active ? "bg-indigo-600 text-white" : "bg-white text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <fieldset>
                <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">KYC signal</legend>
                <div className="flex flex-wrap gap-2">
                  {kycFilters.map((filter) => {
                    const active = filter === selectedKyc;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setSelectedKyc(filter)}
                        aria-pressed={active}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                          active ? "border-indigo-600 bg-indigo-50 text-indigo-800" : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Custody model</legend>
                <div className="flex flex-wrap gap-2">
                  {custodyFilters.map((filter) => {
                    const active = filter === selectedCustody;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setSelectedCustody(filter)}
                        aria-pressed={active}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                          active ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </div>

            <p className="mt-5 text-sm text-slate-600" aria-live="polite">
              Showing <strong className="text-slate-900">{filteredCards.length}</strong> of {allCryptoCards.length} catalog entries.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCards.map((card) => (
              <article
                key={card.slug}
                id={card.slug}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
              >
                <CardVisual card={card} />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">{card.category}</p>
                    <h3 className="mt-1 text-xl font-black text-slate-900">{card.name}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{card.issuer}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${card.status === "Reference profile" ? "bg-slate-100 text-slate-700" : "bg-emerald-100 text-emerald-800"}`}>{card.status === "Reference profile" ? "Reference" : "Reviewed profile"}</span>
                </div>

                <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">{card.headline}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`rounded-md px-2 py-1 text-xs font-bold ${kycTone(card.kyc)}`}>{card.kyc}</span>
                  <span className={`rounded-md px-2 py-1 text-xs font-bold ${custodyTone(card.custody)}`}>{card.custody}</span>
                </div>

                <dl className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm">
                  <div>
                    <dt className="font-bold text-slate-800">Network</dt>
                    <dd className="mt-1 text-slate-600">{card.network}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Availability</dt>
                    <dd className="mt-1 text-slate-600">{card.regionLabel}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Funding</dt>
                    <dd className="mt-1 text-slate-600">{card.funding}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Standout to verify</dt>
                    <dd className="mt-1 text-slate-600">{card.standout}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Fee summary</dt>
                    <dd className="mt-1 text-slate-600">{card.feeSummary ?? "See official terms; not independently profiled."}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Rewards</dt>
                    <dd className="mt-1 text-slate-600">{card.rewardSummary ?? "See official terms; reward conditions may change."}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-800">Limits and eligibility</dt>
                    <dd className="mt-1 text-slate-600">{card.limitsSummary ?? "Confirm current country, transaction, ATM, and account limits."}</dd>
                  </div>
                </dl>

                <details className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-950">
                  <summary className="cursor-pointer font-bold">What to check first</summary>
                  <p className="mt-2 leading-6">{card.checkFirst}</p>
                </details>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                  <Link
                    href={`/crypto-cards/${card.slug}`}
                    className="rounded-lg border border-indigo-200 bg-indigo-50 px-3.5 py-2.5 text-sm font-bold text-indigo-800 transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    Read profile →
                  </Link>
                  <a
                    href={card.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-slate-900 px-3.5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    {card.status === "Reference profile" ? "View source page ↗" : "Visit official site ↗"}
                  </a>
                  <a
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    Source &amp; terms
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-400">{card.sourceLabel ?? "Issuer source"} · Last reviewed {card.lastReviewed}</p>
              </article>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <h3 className="text-lg font-bold text-slate-900">No card listings match those filters</h3>
              <p className="mt-2 text-sm text-slate-600">Try a broader search or reset the filters to view all starter listings.</p>
            </div>
          )}
        </section>

        <section className="border-y bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-600">Safer card research</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">The best card is the one you can understand</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Before applying, verify the legal issuer, country coverage, KYC requirements, custody model, funding route, fees, limits, rewards conditions, dispute process, and tax record workflow. A polished card visual is not proof of a safe or suitable product.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/learn/crypto-exchange-security-checklist" className="text-sm font-bold text-indigo-700 hover:underline">
                  Review the security checklist →
                </Link>
                <Link href="/disclaimer" className="text-sm font-bold text-indigo-700 hover:underline">
                  Read the disclaimer →
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Check the country", "Availability and issuing partners can change by jurisdiction."],
                ["02", "Map the money flow", "Understand where assets sit before authorization and settlement."],
                ["03", "Calculate the real cost", "Compare FX, conversion, top-up, subscription and ATM charges."],
                ["04", "Keep your records", "Save statements, fees, dates and crypto-to-fiat conversion details."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-black text-slate-900">{number}</p>
                  <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Frequently asked questions</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Crypto-card basics, without the marketing fog</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {cardFaqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-7 text-slate-600">
            <p>
              <strong>Editorial and financial disclaimer:</strong> This directory is educational and is not financial, legal, tax, credit, or payment advice. Card availability, fees, rewards, limits, eligibility, KYC requirements, providers, networks, and custody models can change. Verify current terms with the issuer and consider professional advice for consequential decisions. Some links may be affiliate links where disclosed elsewhere on the site.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
