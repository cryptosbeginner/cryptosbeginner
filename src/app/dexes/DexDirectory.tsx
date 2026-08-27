"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { DexService } from "./dex-data";
import { summarizeDexStats, type DexStatsMap } from "./dex-stats";

function Glyph({ name }: { name: "search" | "shield" | "wallet" | "fee" | "network" | "arrow" | "card" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" /><path d="M4 8h13a2 2 0 0 1 2 2v2h-4a2 2 0 0 0 0 4h4v3" /><circle cx="15" cy="14" r=".5" /></>,
    fee: <><path d="M12 3v18M16 6.5c-.8-.8-2-1.2-3.5-1.2-2.1 0-3.5 1.1-3.5 2.7 0 4.2 7 2 7 6.1 0 1.6-1.5 2.7-3.7 2.7-1.5 0-2.7-.5-3.6-1.4" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m10.8 6.8-4.5 9.4M13.2 6.8l4.5 9.4M7 18h10" /></>,
    arrow: <><path d="M5 12h13" /><path d="m13 7 5 5-5 5" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  }[name];
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">{paths}</svg>;
}

function ProviderLogo({ service }: { service: DexService }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-sm font-black text-slate-700" aria-label={`${service.name} logo fallback`}>
      {service.name.slice(0, 2).toUpperCase()}
    </div>
  ) : (
    <Image
      src={service.logoUrl}
      alt={`${service.name} logo`}
      width={44}
      height={44}
      className="h-11 w-11 rounded-xl border border-slate-200 bg-white object-contain p-1.5"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}

function ProviderVisual({ service }: { service: DexService }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="flex h-36 items-end bg-[radial-gradient(circle_at_20%_20%,#bef264,transparent_30%),linear-gradient(135deg,#0f172a,#1e293b)] p-4 text-white">
      <span className="text-lg font-black tracking-tight">{service.name}</span>
    </div>
  ) : (
    <Image
      src={service.imageUrl}
      alt={service.imageAlt}
      width={640}
      height={360}
      className="h-36 w-full object-cover"
      loading="lazy"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}

const kindLabel: Record<DexService["kind"], string> = {
  dex: "DEX",
  aggregator: "Aggregator",
  p2p: "P2P",
  "instant-swap": "Instant swap",
  "prediction-market": "Prediction market",
};

const profileHref = (item: DexService) => item.isDex || item.kind === "prediction-market" ? `/dexes/${item.slug}` : `/exchanges/no-kyc/${item.slug}`;
const verificationLabel = (item: DexService) => item.kind === "prediction-market" ? "Market rules; resolution varies" : item.access === "Wallet-first" ? "Wallet-first; checks vary" : item.isKycConditional ? "May apply" : item.access === "No account flow" ? "No standard account observed" : "Review provider terms";
const verificationTile = (item: DexService) => item.kind === "prediction-market" ? "Settlement" : "Verification";
const formatUsd = (value: number | null) => value === null ? "Not available" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 2 }).format(value);
const formatCount = (value: number | null) => value === null ? "Not available" : new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(value);
const formatCheckedAt = (value: string) => `${new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(new Date(value))} UTC`;

export default function DexDirectory({
  services,
  mode,
  stats = {},
}: {
  services: DexService[];
  mode: "dex" | "no-kyc";
  stats?: DexStatsMap;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [access, setAccess] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [compare, setCompare] = useState<string[]>([]);

  const categories = useMemo(() => Array.from(new Set(services.flatMap((item) => item.categories))).sort(), [services]);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = services.filter((item) => {
      const matchesQuery = !term || [item.name, item.provider, item.shortDescription, item.categories.join(" "), item.chains.join(" ")].join(" ").toLowerCase().includes(term);
      const matchesCategory = category === "all" || item.categories.includes(category);
      const matchesAccess = access === "all" || (access === "wallet" ? item.access === "Wallet-first" : access === "no-account" ? item.access === "No account flow" : item.isKycConditional);
      return matchesQuery && matchesCategory && matchesAccess;
    });
    return result.sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : sort === "fee" ? a.fees.localeCompare(b.fees) : Number(b.isNoKycCandidate) - Number(a.isNoKycCandidate) || a.name.localeCompare(b.name));
  }, [access, category, query, services, sort]);

  const compared = services.filter((item) => compare.includes(item.slug));
  const toggleCompare = (slug: string) => setCompare((current) => current.includes(slug) ? current.filter((item) => item !== slug) : current.length < 3 ? [...current, slug] : current);
  const directoryStats = mode === "dex" ? summarizeDexStats(services, stats) : null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Glyph name="search" /> Refine the directory</div>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="service-search">Search</label>
          <input id="service-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, network, model" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2" />
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="service-category">Category</label>
          <select id="service-category" value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="all">All categories</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="service-access">Access model</label>
          <select id="service-access" value={access} onChange={(event) => setAccess(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="all">Any access model</option>
            <option value="wallet">Wallet-first</option>
            <option value="no-account">No account flow</option>
            <option value="conditional">KYC may apply</option>
          </select>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="service-sort">Sort</label>
          <select id="service-sort" value={sort} onChange={(event) => setSort(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="relevance">Research order</option>
            <option value="name">Name A–Z</option>
            <option value="fee">Fee notes</option>
          </select>
          <p className="mt-5 text-xs leading-5 text-slate-500">Filters describe published provider information. They are not a privacy score, safety score, or personal recommendation.</p>
        </aside>

        <div>
          {directoryStats && (
            <section className="mb-6 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-5" aria-labelledby="market-snapshot-heading">
              <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700">Live market snapshot</p><h2 id="market-snapshot-heading" className="mt-1 text-2xl font-black text-slate-950">Tracked DEX activity, not a universal ranking</h2></div><p className="text-xs font-semibold text-slate-500">Checked {formatCheckedAt(directoryStats.checkedAt)}</p></div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="rounded-2xl border border-indigo-100 bg-white p-4"><p className="text-[10px] font-black uppercase tracking-wide text-slate-500">Tracked venues</p><p className="mt-2 text-2xl font-black text-slate-950">{directoryStats.trackedVenues || "—"}</p></div><div className="rounded-2xl border border-indigo-100 bg-white p-4"><p className="text-[10px] font-black uppercase tracking-wide text-slate-500">24h volume</p><p className="mt-2 text-2xl font-black text-slate-950">{formatUsd(directoryStats.volume24hUsd)}</p></div><div className="rounded-2xl border border-indigo-100 bg-white p-4"><p className="text-[10px] font-black uppercase tracking-wide text-slate-500">24h trades</p><p className="mt-2 text-2xl font-black text-slate-950">{formatCount(directoryStats.trades24h)}</p>{directoryStats.tradesReportedBy > 0 && <p className="mt-1 text-[11px] text-slate-500">Reported by {directoryStats.tradesReportedBy} venue{directoryStats.tradesReportedBy === 1 ? "" : "s"}</p>}</div><div className="rounded-2xl border border-indigo-100 bg-white p-4"><p className="text-[10px] font-black uppercase tracking-wide text-slate-500">Tracked pairs</p><p className="mt-2 text-2xl font-black text-slate-950">{formatCount(directoryStats.pairs)}</p>{directoryStats.pairsReportedBy > 0 && <p className="mt-1 text-[11px] text-slate-500">Reported by {directoryStats.pairsReportedBy} venue{directoryStats.pairsReportedBy === 1 ? "" : "s"}</p>}</div></div>
              <p className="mt-4 text-xs leading-5 text-slate-600">Stats are shown only where third-party coverage is available. The totals combine returned venue snapshots and may omit unsupported products, pool classes, or non-comparable market types; they are informational, not a liquidity, safety, or performance score.</p>
            </section>
          )}
          {compared.length > 0 && (
            <div className="mb-6 rounded-3xl border border-indigo-200 bg-indigo-50 p-5" aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Side-by-side view</p><h2 className="mt-1 text-xl font-black text-slate-950">Compare {compared.length} selected {mode === "dex" ? "platforms" : "services"}</h2></div><button type="button" onClick={() => setCompare([])} className="text-sm font-bold text-indigo-700">Clear</button></div>
              <div className="mt-4 overflow-x-auto"><table className="min-w-full text-left text-sm"><thead><tr className="text-xs uppercase tracking-wide text-slate-500"><th className="pb-2 pr-5">Field</th>{compared.map((item) => <th key={item.slug} className="pb-2 pr-5">{item.name}</th>)}</tr></thead><tbody className="divide-y divide-indigo-100"><tr><th className="py-2 pr-5 font-semibold text-slate-600">Model</th>{compared.map((item) => <td key={item.slug} className="py-2 pr-5">{kindLabel[item.kind]}</td>)}</tr><tr><th className="py-2 pr-5 font-semibold text-slate-600">Access</th>{compared.map((item) => <td key={item.slug} className="py-2 pr-5">{item.access}</td>)}</tr><tr><th className="py-2 pr-5 font-semibold text-slate-600">Fees</th>{compared.map((item) => <td key={item.slug} className="max-w-xs py-2 pr-5">{item.fees}</td>)}</tr><tr><th className="py-2 pr-5 font-semibold text-slate-600">Networks</th>{compared.map((item) => <td key={item.slug} className="py-2 pr-5">{item.chains.join(", ")}</td>)}</tr><tr><th className="py-2 pr-5 font-semibold text-slate-600">Risk focus</th>{compared.map((item) => <td key={item.slug} className="py-2 pr-5">{item.kind === "prediction-market" ? "Resolution and collateral" : item.kind === "dex" && item.categories.includes("perpetuals") ? "Margin and liquidation" : "Contract, route, and liquidity"}</td>)}</tr></tbody></table></div>
            </div>
          )}

          <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm text-slate-500">Showing <span className="font-bold text-slate-900">{filtered.length}</span> of {services.length} listings</p><p className="mt-1 text-xs text-slate-500">Provider facts reviewed 27 August 2026</p></div><Link href="/crypto-cards" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-700"><Glyph name="card" /> Prepaid crypto cards <Glyph name="arrow" /></Link></div>
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <ProviderVisual service={item} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><ProviderLogo service={item} /><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-black text-slate-950">{item.name}</h3><span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">{kindLabel[item.kind]}</span></div><p className="mt-0.5 text-xs text-slate-500">{item.provider}</p></div></div><button type="button" onClick={() => toggleCompare(item.slug)} aria-pressed={compare.includes(item.slug)} className={`rounded-full border px-3 py-1 text-xs font-bold transition ${compare.includes(item.slug) ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-200 text-slate-600 hover:border-indigo-400"}`}>{compare.includes(item.slug) ? "Selected" : "Compare"}</button></div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
                  <div className="mt-4 grid gap-2 text-xs text-slate-600 sm:grid-cols-2"><span className="flex items-start gap-2"><Glyph name="wallet" /><span><b className="text-slate-800">Access:</b> {item.access}</span></span><span className="flex items-start gap-2"><Glyph name="fee" /><span><b className="text-slate-800">Fees:</b> {item.fees}</span></span><span className="flex items-start gap-2"><Glyph name="network" /><span><b className="text-slate-800">Networks:</b> {item.chains.slice(0, 2).join(", ")}{item.chains.length > 2 ? " + more" : ""}</span></span><span className="flex items-start gap-2"><Glyph name="shield" /><span><b className="text-slate-800">{verificationTile(item)}:</b> {verificationLabel(item)}</span></span></div>
                  {stats[item.slug] && stats[item.slug].provider !== "unavailable" && <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600"><div className="flex flex-wrap items-center justify-between gap-2"><span className="font-black uppercase tracking-wide text-slate-500">Market snapshot</span><span className="font-semibold text-slate-500">{stats[item.slug].provider}</span></div><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1"><span><b className="text-slate-800">24h volume:</b> {formatUsd(stats[item.slug].volume24hUsd)}</span>{stats[item.slug].pairs !== null && <span><b className="text-slate-800">Pairs:</b> {formatCount(stats[item.slug].pairs)}</span>}{stats[item.slug].trades24h !== null && <span><b className="text-slate-800">Trades:</b> {formatCount(stats[item.slug].trades24h)}</span>}</div></div>}
                  <div className="mt-5 flex flex-wrap gap-2">{item.categories.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">{tag}</span>)}</div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><Link href={profileHref(item)} className="inline-flex items-center gap-2 text-sm font-black text-indigo-700 hover:text-indigo-900">Read profile <Glyph name="arrow" /></Link><div className="flex flex-wrap items-center gap-3"><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 hover:text-slate-800">Official source ↗</a>{item.partnerUrl && <a href={item.partnerUrl} target="_blank" rel="sponsored nofollow noreferrer" className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-900 hover:bg-amber-200">{item.partnerLabel ?? "Partner link"} ↗</a>}</div></div>{item.partnerUrl && <p className="mt-3 text-[11px] leading-5 text-slate-500">Affiliate disclosure: CryptosBeginner may earn a commission if you use this partner link. It does not affect listing order, editorial inclusion, fees, or safety.</p>}
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center"><p className="font-bold text-slate-800">No matching services</p><p className="mt-2 text-sm text-slate-500">Try clearing a filter or searching by network.</p></div>}
        </div>
      </div>
    </section>
  );
}
