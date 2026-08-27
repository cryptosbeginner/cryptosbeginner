"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PredictionPlatform } from "./prediction-data";

function Mark({ kind }: { kind: "search" | "arrow" | "check" | "warning" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    arrow: <><path d="M5 12h13" /><path d="m13 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    warning: <><path d="M12 3 2.8 20h18.4L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
  }[kind];
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">{paths}</svg>;
}

function Logo({ platform }: { platform: PredictionPlatform }) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm font-black text-slate-700" aria-label={`${platform.name} logo fallback`}>{platform.name.slice(0, 2).toUpperCase()}</div> : <Image src={platform.imageUrl} alt={platform.imageAlt} width={44} height={44} unoptimized onError={() => setFailed(true)} className="h-11 w-11 shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-1.5" />;
}

const formatCategory = (value: string) => value.replace("CLOB", "order book");

export default function PredictionDirectory({ platforms }: { platforms: PredictionPlatform[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [model, setModel] = useState("all");
  const categories = useMemo(() => Array.from(new Set(platforms.flatMap((item) => item.categories))).sort(), [platforms]);
  const models = useMemo(() => Array.from(new Set(platforms.map((item) => item.model))).sort(), [platforms]);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return platforms.filter((item) => {
      const matchesTerm = !term || [item.name, item.provider, item.shortDescription, item.categories.join(" "), item.model].join(" ").toLowerCase().includes(term);
      return matchesTerm && (category === "all" || item.categories.includes(category)) && (model === "all" || item.model === model);
    });
  }, [category, model, platforms, query]);
  const featured = platforms.find((item) => item.isFeatured);

  return <section id="platform-directory" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    {featured && <section className="mb-8 overflow-hidden rounded-[2rem] border border-indigo-200 bg-[linear-gradient(120deg,#eef2ff,#ffffff_60%,#fef3c7)] p-6 shadow-sm sm:p-8" aria-labelledby="featured-market-heading">
      <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-indigo-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">Featured partner profile</span><span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700">{featured.model} prediction market</span></div><h2 id="featured-market-heading" className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Start with the mechanics, then compare Polymarket.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">Polymarket is highlighted because CryptosBeginner has a disclosed partner relationship—not because inclusion or position is a guarantee of liquidity, access, safety, fees, or outcome. Use the profile to understand outcome shares, order books, fee categories, and resolution rules before deciding whether the product fits your own situation.</p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/prediction-markets/${featured.slug}`} className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-800">Read the Polymarket guide <Mark kind="arrow" /></Link><a href={featured.partnerUrl} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300">Visit Polymarket <Mark kind="arrow" /></a></div><p className="mt-3 text-xs leading-5 text-slate-600">Affiliate disclosure: CryptosBeginner may earn a commission from this partner link. It does not affect editorial inclusion, comparison order, provider terms, fees, or safety.</p></div>
        <div className="rounded-3xl border border-white/80 bg-white/75 p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700">A simple mental model</p><div className="mt-4 space-y-3"><div className="flex gap-3 rounded-2xl bg-slate-950 p-4 text-white"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime-300 text-sm font-black text-slate-950">1</span><p className="text-sm leading-6"><b>Question:</b> a market defines one future event and its possible outcomes.</p></div><div className="flex gap-3 rounded-2xl bg-white p-4 text-slate-800 shadow-sm"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-black text-indigo-700">2</span><p className="text-sm leading-6"><b>Price:</b> traders buy or sell outcome shares at an exchange price that can imply probability.</p></div><div className="flex gap-3 rounded-2xl bg-white p-4 text-slate-800 shadow-sm"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-100 text-sm font-black text-amber-700">3</span><p className="text-sm leading-6"><b>Resolution:</b> the published rules and source determine which outcome, if any, pays.</p></div></div></div>
      </div>
    </section>}

    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24"><div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Mark kind="search" /> Refine the directory</div><label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-600" htmlFor="prediction-search">Search</label><input id="prediction-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Platform, model, topic" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 outline-none ring-indigo-500 focus:ring-2" /><label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-600" htmlFor="prediction-category">Category</label><select id="prediction-category" value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"><option value="all">All categories</option>{categories.map((item) => <option key={item} value={item}>{formatCategory(item)}</option>)}</select><label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-600" htmlFor="prediction-model">Market model</label><select id="prediction-model" value={model} onChange={(event) => setModel(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"><option value="all">All models</option>{models.map((item) => <option key={item} value={item}>{item}</option>)}</select><p className="mt-5 text-xs leading-5 text-slate-600">Filters organize published provider information. They are not a ranking, forecast, betting tip, or safety score.</p></aside>

      <div><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm text-slate-600">Showing <span className="font-bold text-slate-950">{filtered.length}</span> of {platforms.length} platforms</p><p className="mt-1 text-xs text-slate-500">Provider facts reviewed 27 August 2026</p></div><div className="flex items-center gap-2 text-xs font-bold text-slate-500"><Mark kind="warning" /> Check each market’s rules before acting</div></div><div className="grid gap-5 md:grid-cols-2">{filtered.map((item) => <article key={item.slug} className={`overflow-hidden rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${item.isFeatured ? "border-indigo-300 ring-1 ring-indigo-100" : "border-slate-200"}`}><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><Logo platform={item} /><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-black text-slate-950">{item.name}</h3>{item.isFeatured && <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-700">Priority profile</span>}</div><p className="mt-0.5 text-xs text-slate-500">{item.provider}</p></div></div><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">{item.model}</span></div><p className="mt-4 text-sm leading-6 text-slate-600">{item.shortDescription}</p><div className="mt-4 grid gap-2 text-xs text-slate-600 sm:grid-cols-2"><span><b className="text-slate-800">Topics:</b> {item.categories.slice(0, 3).join(", ")}</span><span><b className="text-slate-800">Collateral:</b> {item.collateral}</span><span className="sm:col-span-2"><b className="text-slate-800">Fees:</b> {item.fees}</span></div><div className="mt-5 flex flex-wrap items-center gap-3"><Link href={`/prediction-markets/${item.slug}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white transition hover:bg-indigo-700">Open profile <Mark kind="arrow" /></Link>{item.partnerUrl && <a href={item.partnerUrl} target="_blank" rel="sponsored nofollow noreferrer" className="text-xs font-black text-indigo-700 hover:text-indigo-950">Official partner link</a>}</div>{item.partnerUrl && <p className="mt-3 text-[11px] leading-5 text-slate-500">Sponsored link disclosure: commission may be earned; it does not change listing order or provider terms.</p>}</article>)}</div></div>
    </div>
  </section>;
}
