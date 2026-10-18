"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cardCategories, cardListings, CardCategory, CardListing } from "./cards-data";
import TrustStats from "./TrustStats";

// Region filter options. Each option matches when any of the card's region
// strings contains the value or one of its aliases (case-insensitive).
const REGION_OPTIONS: Array<{ value: string; label: string; aliases: string[] }> = [
  { value: "north america", label: "North America", aliases: [] },
  { value: "united states", label: "United States", aliases: ["usa"] },
  { value: "canada", label: "Canada", aliases: [] },
  { value: "europe", label: "Europe / EEA", aliases: ["european economic area", "eea"] },
  { value: "united kingdom", label: "United Kingdom", aliases: ["uk"] },
  { value: "asia", label: "Asia", aliases: [] },
  { value: "middle east", label: "Middle East", aliases: [] },
  { value: "africa", label: "Africa", aliases: [] },
  { value: "latin america", label: "Latin America", aliases: ["latam"] },
  { value: "australia", label: "Australia & Oceania", aliases: ["oceania", "new zealand"] },
  { value: "global", label: "Global", aliases: [] },
];

function regionMatches(cardRegions: string[], option: { value: string; aliases: string[] }): boolean {
  const needles = [option.value, ...option.aliases];
  return cardRegions.some((item) => {
    const hay = item.toLowerCase();
    return needles.some((needle) => hay.includes(needle));
  });
}

type GlyphName = "check" | "money" | "globe" | "shield" | "wallet" | "card" | "search" | "star";
function Glyph({ name, size = 15, className = "" }: { name: GlyphName; size?: number; className?: string }) {
  const paths: Record<GlyphName, string> = {
    check: "M20 6 9 17l-5-5m12-6 4 4",
    money: "M12 2v20m5-16.5c-.9-.9-2.4-1.5-4.1-1.5C10.2 4 8 5.4 8 7.2c0 4.4 9 2.2 9 6.6 0 1.8-2.1 3.2-4.8 3.2-1.8 0-3.5-.6-4.5-1.7",
    globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c2.1 2.2 3.2 5.2 3.2 9S14.1 18.8 12 21c-2.1-2.2-3.2-5.2-3.2-9S9.9 5.2 12 3Zm-8.5 9h17",
    shield: "M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z",
    wallet: "M3 6h18v13H3zM16 10h5v5h-5a2.5 2.5 0 0 1 0-5Z",
    card: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2 3h14",
    search: "M11 4a7 7 0 1 0 4.9 12L21 21l-1.4 1.4-5.1-5.1A7 7 0 0 0 11 4Z",
    star: "M12 3l2.7 5.8 6.3.8-4.6 4.3 1.2 6.1-5.6-3.1-5.6 3.1 1.2-6.1L3 9.6l6.3-.8L12 3Z",
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d={paths[name]} /></svg>;
}

function isPlaceholder(card: CardListing) {
  return card.imageUrl.includes("placeholder") || !card.imageUrl;
}

function CardArtwork({ card }: { card: CardListing }) {
  const [broken, setBroken] = useState(false);
  const showPlaceholder = broken || isPlaceholder(card);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,.22),transparent_45%),linear-gradient(135deg,#0f172a,#312e81_55%,#a21caf)]">
      {!showPlaceholder && (
        <Image
          src={card.imageUrl}
          alt={card.imageAlt}
          onError={() => setBroken(true)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition duration-300 group-hover:scale-[1.04]"
          referrerPolicy="no-referrer"
        />
      )}
      {showPlaceholder && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
          <Glyph name="card" size={36} className="text-white/40" />
          <p className="mt-3 text-2xl font-black tracking-[-0.03em]">{card.name}</p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/60">{card.provider} · {card.network}</p>
        </div>
      )}
      <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-slate-950/75 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">{card.network}</span>
      {card.fullReviewUrl && (
        <span className="absolute right-3 top-3 rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-950">Reviewed</span>
      )}
    </div>
  );
}

function categoryLabel(category: CardCategory) {
  return category === "dual-mode" ? "Dual-mode" : category === "self-custody" ? "Self-custody" : category[0].toUpperCase() + category.slice(1);
}

function cashbackHighlight(card: CardListing): string | null {
  const m = card.rewards.match(/(\d+(?:\.\d+)?\s*%)/);
  if (!m) return null;
  if (/no cashback|no rewards|0%/.test(card.rewards.toLowerCase())) return null;
  return m[1].replace(/\s+/, "");
}

export default function CardsDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | CardCategory>("all");
  const [region, setRegion] = useState("all");
  const [network, setNetwork] = useState("all");
  const [sort, setSort] = useState<"name" | "reviewed">("name");
  const [view, setView] = useState<"grid" | "table">("grid");
  const [cashback, setCashback] = useState("all");

  const networks = useMemo(() => {
    const set = new Set<string>();
    for (const card of cardListings) {
      const n = card.network.toLowerCase();
      if (n.includes("visa")) set.add("Visa");
      if (n.includes("mastercard")) set.add("Mastercard");
      if (n.includes("amex") || n.includes("american express")) set.add("Amex");
    }
    return [...set].sort();
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return [...cardListings]
      .filter((card) => !needle || [card.name, card.provider, card.network, card.shortDescription, card.bestFor].join(" ").toLowerCase().includes(needle))
      .filter((card) => category === "all" || card.categories.includes(category))
      .filter((card) => {
        if (region === "all") return true;
        const option = REGION_OPTIONS.find((o) => o.value === region);
        return option ? regionMatches(card.regions, option) : card.regions.some((item) => item.toLowerCase().includes(region.toLowerCase()));
      })
      .filter((card) => network === "all" || card.network.toLowerCase().includes(network.toLowerCase()))
      .filter((card) => {
        if (cashback === "all") return true;
        const rewards = card.rewards.toLowerCase();
        if (cashback === "yes") return /cashback|reward|%/.test(rewards) && !/no cashback|no rewards/.test(rewards);
        if (cashback === "no") return /no cashback|no rewards/.test(rewards);
        return true;
      })
      .sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : b.reviewedAt.localeCompare(a.reviewedAt));
  }, [category, query, region, network, sort, cashback]);

  const activeFilterCount = [query.trim() !== "", category !== "all", region !== "all", network !== "all", cashback !== "all"].filter(Boolean).length;
  const resetFilters = () => { setQuery(""); setCategory("all"); setRegion("all"); setNetwork("all"); setCashback("all"); setSort("name"); };

  return (
    <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
      {/* HERO — compact */}
      <section className="relative overflow-hidden bg-[#0b0820] text-white">
        <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-sm font-black text-cyan-200 hover:text-white">← Back to CryptosBeginner</Link>
            <span className="rounded-full border border-white/15 bg-white/[.08] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-fuchsia-100">Facts checked October 2026</span>
          </div>
          <div className="mt-8 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Crypto Cards · compare the rails</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              Find the card. <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">Read the footnotes.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A source-backed directory of {cardListings.length} crypto spending cards. Availability, fees, rewards, issuers, and taxes vary; this page organizes the facts without turning them into a personal recommendation.
            </p>
            <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-400">
              <strong className="text-slate-200">Affiliate disclosure:</strong> Some “Check card” buttons may use referral links. That does not change the listing criteria or guarantee approval, pricing, rewards, or suitability. Provider pages remain the source of current terms.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/crypto-cards/finder" className="rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 px-3 py-2 text-xs font-black text-fuchsia-100 hover:bg-fuchsia-400/20">Card finder quiz</Link>
              <Link href="/crypto-cards/collections" className="rounded-full border border-white/15 bg-white/[.06] px-3 py-2 text-xs font-black text-slate-200 hover:bg-white/10">Collections</Link>
              <Link href="/crypto-cards/countries" className="rounded-full border border-white/15 bg-white/[.06] px-3 py-2 text-xs font-black text-slate-200 hover:bg-white/10">By country</Link>
              <Link href="/crypto-cards/issuers" className="rounded-full border border-white/15 bg-white/[.06] px-3 py-2 text-xs font-black text-slate-200 hover:bg-white/10">Issuers</Link>
              <Link href="/crypto-cards/guides" className="rounded-full border border-white/15 bg-white/[.06] px-3 py-2 text-xs font-black text-slate-200 hover:bg-white/10">Guides</Link>
              <Link href="/crypto-cards/graveyard" className="rounded-full border border-red-300/40 bg-red-400/10 px-3 py-2 text-xs font-black text-red-100 hover:bg-red-400/20">Card graveyard</Link>
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <TrustStats />
            </div>
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-[200px] flex-1">
              <Glyph name="search" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cards, providers, networks..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-semibold outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
            <select value={category} onChange={(e) => setCategory(e.target.value as "all" | CardCategory)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black" aria-label="Card model">
              <option value="all">All models</option>
              {cardCategories.slice(1).map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            <select value={network} onChange={(e) => setNetwork(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black" aria-label="Network">
              <option value="all">Any network</option>
              {networks.map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black" aria-label="Region">
              <option value="all">Any region</option>
              {REGION_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <select value={cashback} onChange={(e) => setCashback(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black" aria-label="Cashback">
              <option value="all">Any rewards</option>
              <option value="yes">Has cashback</option>
              <option value="no">No cashback</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value as "name" | "reviewed")} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black" aria-label="Sort">
              <option value="name">Name A-Z</option>
              <option value="reviewed">Recently reviewed</option>
            </select>
            <div className="flex overflow-hidden rounded-xl border border-slate-200">
              <button onClick={() => setView("grid")} className={`px-3.5 py-2.5 text-xs font-black ${view === "grid" ? "bg-slate-950 text-white" : "bg-white text-slate-600"}`}>Cards</button>
              <button onClick={() => setView("table")} className={`px-3.5 py-2.5 text-xs font-black ${view === "table" ? "bg-slate-950 text-white" : "bg-white text-slate-600"}`}>Compare</button>
            </div>
            {activeFilterCount > 0 && (
              <button onClick={resetFilters} className="rounded-xl px-3 py-2.5 text-xs font-black text-fuchsia-700 hover:bg-fuchsia-50">
                Reset ({activeFilterCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* DIRECTORY */}
      <section id="directory" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm font-black text-slate-700">{filtered.length} <span className="font-semibold text-slate-500">of {cardListings.length} cards</span></p>
          <p className="hidden text-xs font-semibold text-slate-400 sm:block">Images: official issuer artwork · Facts checked October 2026</p>
        </div>

        {view === "table" ? (
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
                  <th className="sticky left-0 bg-slate-50 px-4 py-3 shadow-[2px_0_4px_rgba(0,0,0,0.05)]">Card</th>
                  <th className="px-4 py-3">Network</th>
                  <th className="px-4 py-3">Formats</th>
                  <th className="px-4 py-3">Pricing</th>
                  <th className="px-4 py-3">Rewards</th>
                  <th className="px-4 py-3">Availability</th>
                  <th className="px-4 py-3">Links</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((card) => (
                  <tr key={card.slug} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="sticky left-0 bg-white px-4 py-3 shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-800">
                          {!isPlaceholder(card) && (
                            <Image src={card.imageUrl} alt="" onError={() => {}} fill sizes="80px" className="object-contain p-1" referrerPolicy="no-referrer" />
                          )}
                          {isPlaceholder(card) && (
                            <div className="flex h-full items-center justify-center"><Glyph name="card" size={18} className="text-white/50" /></div>
                          )}
                        </div>
                        <div>
                          <Link href={`/crypto-cards/${card.slug}`} className="font-black hover:text-fuchsia-700">{card.name}</Link>
                          <div className="text-xs font-semibold text-slate-500">{card.provider}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">{card.network}</td>
                    <td className="px-4 py-3">{card.cardFormats.join(", ")}</td>
                    <td className="px-4 py-3 text-xs leading-5">{card.pricing}</td>
                    <td className="px-4 py-3 text-xs leading-5">{card.rewards}</td>
                    <td className="px-4 py-3 text-xs leading-5">{card.availability}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <Link href={`/crypto-cards/${card.slug}`} className="text-xs font-black text-slate-950 hover:text-fuchsia-700">Profile →</Link>
                        {card.referralUrl && <a href={card.referralUrl} target="_blank" rel="sponsored nofollow noreferrer" className="text-xs font-black text-fuchsia-700">Check card ↗</a>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((card) => {
              const cb = cashbackHighlight(card);
              return (
                <article key={card.slug} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl hover:shadow-fuchsia-100/40">
                  <Link href={`/crypto-cards/${card.slug}`} className="block" aria-label={`${card.name} profile`}>
                    <CardArtwork card={card} />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-black tracking-[-0.02em] leading-tight">
                          <Link href={`/crypto-cards/${card.slug}`} className="hover:text-fuchsia-700">{card.name}</Link>
                        </h3>
                        <p className="mt-0.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">{card.provider}</p>
                      </div>
                      {cb && (
                        <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-black text-emerald-700">
                          <Glyph name="star" size={12} />{cb}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.categories.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-600">{categoryLabel(item)}</span>
                      ))}
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-600">{card.cardFormats.join(" · ")}</span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{card.shortDescription}</p>
                    <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs leading-5">
                      <p className="flex gap-2"><Glyph name="money" size={14} className="mt-0.5 shrink-0 text-slate-400" /><span className="text-slate-600 line-clamp-2">{card.pricing}</span></p>
                      <p className="flex gap-2"><Glyph name="globe" size={14} className="mt-0.5 shrink-0 text-slate-400" /><span className="text-slate-600 line-clamp-1">{card.availability}</span></p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                      <Link href={`/crypto-cards/${card.slug}`} className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white transition hover:bg-fuchsia-700">Open profile →</Link>
                      {card.fullReviewUrl && <Link href={card.fullReviewUrl} className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-500">Full review →</Link>}
                      {card.referralUrl && <a href={card.referralUrl} target="_blank" rel="sponsored nofollow noreferrer" className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-2.5 text-xs font-black text-fuchsia-800 transition hover:bg-fuchsia-100">{card.referralLabel ?? "Check card"} ↗</a>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-lg font-black">No cards match those filters.</p>
            <p className="mt-2 text-sm text-slate-600">Try a broader search or <button onClick={resetFilters} className="font-black text-fuchsia-700">reset all filters</button>.</p>
          </div>
        )}
      </section>

      {/* HOW WE LIST */}
      <section id="how-we-list" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-slate-950 p-7 text-white">
            <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-200">Editorial method</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">What makes a listing useful?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Each profile separates the funding model, network, formats, region wording, pricing, rewards, and provider relationship. Facts are checked against the linked official product page.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-xs font-black text-fuchsia-200">01 · Source</p><p className="mt-2 text-sm leading-6 text-slate-300">The provider page is the evidence layer.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-xs font-black text-cyan-200">02 · Scope</p><p className="mt-2 text-sm leading-6 text-slate-300">Country and tier conditions stay visible.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-xs font-black text-amber-200">03 · Costs</p><p className="mt-2 text-sm leading-6 text-slate-300">Fees, lockups, spreads, and funding are distinct.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-xs font-black text-emerald-200">04 · Update</p><p className="mt-2 text-sm leading-6 text-slate-300">Review dates make stale copy easier to spot.</p></div>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-7">
            <p className="text-xs font-black uppercase tracking-[0.17em] text-amber-800">Read before applying</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-amber-950 sm:text-3xl">Headline rewards are not the whole cost.</h2>
            <p className="mt-4 text-sm leading-7 text-amber-950/80">A card may involve identity verification, a spread, FX conversion, staking or lockup requirements, borrowing risk, tax consequences, ATM charges, or an issuer that is different from the brand on the front.</p>
            <Link href="/methodology" className="mt-6 inline-flex rounded-xl bg-amber-950 px-4 py-3 text-sm font-black text-white hover:bg-amber-900">Read site methodology →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
