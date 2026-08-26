"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MarketCoin, MarketCurrency, MarketResponse } from "../api/crypto/markets/market-data";
import MarketIcon from "@/components/MarketIcon";

const currencies: MarketCurrency[] = ["usd", "eur", "gbp", "aud", "cad", "jpy"];
type SortKey = "rank" | "change24h" | "marketCap" | "volume24h";

function formatMoney(value: number | null, currency: MarketCurrency, compact = false) {
  if (value === null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: value < 1 ? 6 : compact ? 1 : 2,
  }).format(value);
}

function formatPercent(value: number | null, compact = false) {
  if (value === null) return "—";
  return `${value >= 0 ? "+" : ""}${value.toFixed(compact ? 1 : 2)}%`;
}

function formatCheckedAt(value: string | null) {
  if (!value) return "Waiting for data";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Recently checked" : `Updated ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

function Icon({ type }: { type: "arrow" | "search" | "refresh" | "filter" | "chart" | "wallet" | "eye" }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    refresh: <><path d="M20 11a8.1 8.1 0 0 0-14.7-4.7L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 14.7 4.7L20 16" /><path d="M20 20v-4h-4" /></>,
    filter: <><path d="M4 5h16" /><path d="M7 12h10" /><path d="M10 19h4" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 3-4 3 2 4-6" /></>,
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 16.5z" /><path d="M4 8h15" /><path d="M16 13h4" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  } as const;
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">{paths[type]}</svg>;
}

function ChangePill({ label, value, dark = false }: { label: string; value: number | null; dark?: boolean }) {
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-black ${dark ? value !== null && value >= 0 ? "bg-emerald-400/10 text-emerald-300" : "bg-rose-400/10 text-rose-300" : value !== null && value >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}><span>{label}</span>{formatPercent(value, true)}</span>;
}

function ChangeStrip({ coin }: { coin: MarketCoin }) {
  return <div className="flex flex-wrap gap-1.5"><ChangePill label="1h" value={coin.change1h} /><ChangePill label="24h" value={coin.change24h} /><ChangePill label="7d" value={coin.change7d} /></div>;
}

export default function PriceTracker({ initialPayload }: { initialPayload: MarketResponse }) {
  const [currency, setCurrency] = useState<MarketCurrency>("usd");
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [query, setQuery] = useState("");
  const [watchlistOnly, setWatchlistOnly] = useState(false);
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = window.localStorage.getItem("cryptosbeginner-price-watchlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [payload, setPayload] = useState<MarketResponse | null>(initialPayload);
  const [loading, setLoading] = useState(!initialPayload.data.length);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try { window.localStorage.setItem("cryptosbeginner-price-watchlist", JSON.stringify(watchlist)); } catch { /* optional persistence */ }
  }, [watchlist]);

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true); else setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/crypto/markets?currency=${currency}&limit=100`, { cache: "no-store" });
      const nextPayload = (await response.json()) as MarketResponse;
      if (!response.ok || !nextPayload.data?.length) throw new Error(nextPayload.error ?? "Market data is temporarily unavailable.");
      setPayload(nextPayload);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Market data is temporarily unavailable.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [currency]);

  useEffect(() => {
    // The initial payload is server-rendered; this effect only keeps it fresh in the browser.
    const initialRefresh = window.setTimeout(() => void load(), 0);
    const interval = window.setInterval(() => void load(true), 60_000);
    return () => { window.clearTimeout(initialRefresh); window.clearInterval(interval); };
  }, [load]);

  const filteredCoins = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return [...(payload?.data ?? [])]
      .filter((coin) => !normalizedQuery || `${coin.name} ${coin.symbol} ${coin.id}`.toLowerCase().includes(normalizedQuery))
      .filter((coin) => !watchlistOnly || watchlist.includes(coin.id))
      .sort((a, b) => {
        if (sortKey === "change24h") return (b.change24h ?? -Infinity) - (a.change24h ?? -Infinity);
        if (sortKey === "marketCap") return (b.marketCap ?? -Infinity) - (a.marketCap ?? -Infinity);
        if (sortKey === "volume24h") return (b.volume24h ?? -Infinity) - (a.volume24h ?? -Infinity);
        return a.rank - b.rank;
      });
  }, [payload, query, sortKey, watchlist, watchlistOnly]);

  const topGainer = useMemo(() => [...(payload?.data ?? [])].sort((a, b) => (b.change24h ?? -Infinity) - (a.change24h ?? -Infinity))[0], [payload]);
  const topLoser = useMemo(() => [...(payload?.data ?? [])].sort((a, b) => (a.change24h ?? Infinity) - (b.change24h ?? Infinity))[0], [payload]);
  const totalMarketCap = useMemo(() => (payload?.data ?? []).reduce((total, coin) => total + (coin.marketCap ?? 0), 0), [payload]);

  function toggleWatchlist(id: string) {
    setWatchlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f7fb] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#0b0820] text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-200"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" /> Market terminal · live feed</div>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-7xl">Find the move.<br /><span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">Keep the context.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">A faster way to scan price, volume, momentum, and market rank across the assets that are actually moving. Built for research—not hype, signals, or guaranteed outcomes.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/crypto-screener" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"><Icon type="filter" /> Open screener <Icon type="arrow" /></Link>
                <Link href="/public-wallets" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10"><Icon type="eye" /> Explore wallet research</Link>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[.08] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between"><div><p className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-200">Pulse board</p><p className="mt-1 text-sm text-slate-300">Provider snapshot · {formatCheckedAt(payload?.checkedAt ?? null)}</p></div><span className="rounded-full bg-emerald-300/15 px-3 py-1.5 text-[11px] font-black text-emerald-200">{payload?.fallback ? "Fallback" : payload?.provider ?? "Connecting"}</span></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-300/10 p-4"><p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">Top 24h gainer</p>{topGainer ? <div className="mt-4 flex items-center gap-3"><MarketIcon src={topGainer.image} name={topGainer.name} symbol={topGainer.symbol} size="sm" /><div className="min-w-0"><p className="truncate font-black">{topGainer.name}</p><p className="text-sm font-black text-emerald-300">{formatPercent(topGainer.change24h)}</p></div></div> : <p className="mt-4 text-sm text-slate-400">Waiting for data</p>}</div>
                <div className="rounded-2xl bg-rose-300/10 p-4"><p className="text-[10px] font-black uppercase tracking-[0.16em] text-rose-200">Top 24h loser</p>{topLoser ? <div className="mt-4 flex items-center gap-3"><MarketIcon src={topLoser.image} name={topLoser.name} symbol={topLoser.symbol} size="sm" /><div className="min-w-0"><p className="truncate font-black">{topLoser.name}</p><p className="text-sm font-black text-rose-300">{formatPercent(topLoser.change24h)}</p></div></div> : <p className="mt-4 text-sm text-slate-400">Waiting for data</p>}</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-black/10 p-4"><p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Tracked rows</p><p className="mt-2 text-2xl font-black">{payload?.data.length ?? 0}</p></div><div className="rounded-2xl border border-white/10 bg-black/10 p-4"><p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Saved locally</p><p className="mt-2 text-2xl font-black">{watchlist.length}</p></div></div>
              {payload?.fallback && <p className="mt-4 text-xs leading-5 text-amber-200">The primary market source was unavailable. Check the timestamp before comparing this snapshot with another venue.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-8"><div className="flex gap-3"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700"><Icon type="chart" /></span><div><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Read the tape</p><p className="mt-1 text-sm leading-6 text-slate-600">Price, rank, volume, and multiple horizons in one scan.</p></div></div><div className="flex gap-3"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-700"><Icon type="eye" /></span><div><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">No fake precision</p><p className="mt-1 text-sm leading-6 text-slate-600">Every row is a provider snapshot—not a quote or execution guarantee.</p></div></div><div className="flex gap-3"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700"><Icon type="wallet" /></span><div><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Research first</p><p className="mt-1 text-sm leading-6 text-slate-600">Explore wallets, token context, and risk questions before acting.</p></div></div></div></section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Market board</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Live prices, without the noise</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Use the table as a starting point for research. Icons come from the configured market provider when available, with an initials fallback so a missing image never breaks the layout.</p></div><div className="flex flex-wrap items-center gap-3"><label className="text-sm font-black text-slate-700">Quote<select value={currency} onChange={(event) => setCurrency(event.target.value as MarketCurrency)} className="ml-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-black text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300">{currencies.map((item) => <option key={item} value={item}>{item.toUpperCase()}</option>)}</select></label><button type="button" onClick={() => void load(true)} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 disabled:cursor-wait disabled:opacity-50" disabled={refreshing}><span className={refreshing ? "animate-spin" : ""}><Icon type="refresh" /></span>{refreshing ? "Updating…" : "Refresh feed"}</button></div></div>

        <div className="mt-8 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/40 md:grid-cols-[1fr_auto_auto] md:items-center"><label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-400 focus-within:ring-2 focus-within:ring-cyan-200"><Icon type="search" /><span className="sr-only">Search market assets</span><input id="market-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Bitcoin, ETH, Solana…" className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400" /></label><label className="text-sm font-black text-slate-700">Sort<select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)} className="ml-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-black text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"><option value="rank">Market rank</option><option value="change24h">24h change</option><option value="marketCap">Market cap</option><option value="volume24h">24h volume</option></select></label><label className="flex items-center gap-2 px-2 text-sm font-black text-slate-700"><input type="checkbox" checked={watchlistOnly} onChange={(event) => setWatchlistOnly(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-fuchsia-600 focus:ring-fuchsia-300" /> Watchlist only</label></div>

        {error && <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm leading-7 text-rose-900"><strong>Market data unavailable.</strong> {error} Try the refresh button again in a moment.</div>}
        {loading && !payload && <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm font-semibold text-slate-600 shadow-sm">Loading the market board…</div>}
        {!loading && !error && filteredCoins.length === 0 && <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm"><h3 className="text-lg font-black">No assets match those filters</h3><p className="mt-2 text-sm text-slate-600">Try a broader search or turn off Watchlist only.</p></div>}

        {filteredCoins.length > 0 && <><div className="mt-7 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-600" aria-live="polite">Showing <strong className="text-slate-950">{filteredCoins.length}</strong> assets{watchlist.length > 0 ? ` · ${watchlist.length} saved` : ""}</p><p className="text-xs font-semibold text-slate-500">Approx. tracked cap: <strong className="text-slate-700">{formatMoney(totalMarketCap, currency, true)}</strong></p></div><div className="mt-3 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/35"><div className="hidden grid-cols-[2.35fr_1.05fr_1.55fr_1fr_1fr_70px] gap-4 border-b border-slate-100 bg-slate-50/80 px-5 py-3 text-right text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 md:grid"><span className="text-left">Asset</span><span>Price</span><span className="text-left">Momentum</span><span>Market cap</span><span>Volume</span><span>Rank</span></div><div className="divide-y divide-slate-100">{filteredCoins.map((coin) => { const saved = watchlist.includes(coin.id); return <div key={coin.id} className="grid gap-4 px-4 py-5 transition hover:bg-slate-50/80 sm:px-5 md:grid-cols-[2.35fr_1.05fr_1.55fr_1fr_1fr_70px] md:items-center md:text-right"><div className="flex min-w-0 items-center gap-3 text-left"><button type="button" aria-label={saved ? `Remove ${coin.name} from watchlist` : `Add ${coin.name} to watchlist`} onClick={() => toggleWatchlist(coin.id)} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg transition hover:-translate-y-0.5 ${saved ? "bg-amber-50 text-amber-500" : "bg-slate-50 text-slate-300 hover:bg-amber-50 hover:text-amber-400"}`}>{saved ? "★" : "☆"}</button><MarketIcon src={coin.image} name={coin.name} symbol={coin.symbol} /><div className="min-w-0"><Link href={`/crypto-prices/coin/${encodeURIComponent(coin.id)}`} className="block truncate font-black text-slate-950 hover:text-fuchsia-700">{coin.name}</Link><p className="text-xs font-black uppercase tracking-wide text-slate-500">{coin.symbol} <span className="mx-1 text-slate-300">·</span> #{coin.rank}</p></div></div><div className="text-left md:text-right"><p className="text-sm font-black text-slate-950">{formatMoney(coin.price, currency)}</p><p className="text-xs text-slate-500 md:hidden">Current price</p></div><div className="text-left md:text-right"><ChangeStrip coin={coin} /></div><div className="text-left text-sm font-black text-slate-700 md:text-right">{formatMoney(coin.marketCap, currency, true)}<span className="block text-xs font-semibold text-slate-400">market cap</span></div><div className="text-left text-sm font-black text-slate-700 md:text-right">{formatMoney(coin.volume24h, currency, true)}<span className="block text-xs font-semibold text-slate-400">24h volume</span></div><Link href={`/crypto-prices/coin/${encodeURIComponent(coin.id)}`} className="inline-flex items-center justify-start gap-1 text-xs font-black text-fuchsia-700 hover:text-fuchsia-900 md:justify-end">View <Icon type="arrow" /></Link></div>; })}</div></div></>}

        <section className="mt-14 grid gap-4 lg:grid-cols-3"><Link href="/crypto-screener" className="group rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-200/30 transition hover:-translate-y-1"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200"><Icon type="filter" /></span><p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Next layer</p><h3 className="mt-2 text-2xl font-black">Screen the market</h3><p className="mt-3 text-sm leading-6 text-slate-300">Slice the same feed by momentum, volume, rank, and watchlist status without pretending a filter is a trading signal.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">Open screener <Icon type="arrow" /></span></Link><Link href="/wallet-tracker" className="group rounded-[1.5rem] border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 to-white p-6 shadow-xl shadow-slate-200/30 transition hover:-translate-y-1"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700"><Icon type="wallet" /></span><p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Opt-in research</p><h3 className="mt-2 text-2xl font-black">Read a public wallet</h3><p className="mt-3 text-sm leading-6 text-slate-600">Review balances and activity from a public address. No seed phrases, private keys, or wallet connection required.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-fuchsia-700">Open wallet tracker <Icon type="arrow" /></span></Link><Link href="/public-wallets" className="group rounded-[1.5rem] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6 shadow-xl shadow-slate-200/30 transition hover:-translate-y-1"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Icon type="eye" /></span><p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-amber-700">Research board</p><h3 className="mt-2 text-2xl font-black">Follow on-chain activity</h3><p className="mt-3 text-sm leading-6 text-slate-600">Use transparent public metrics and labels—not “smart money” theatre or copy-trading promises.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-700">Explore wallet research <Icon type="arrow" /></span></Link></section>
        <section className="mt-5 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 sm:p-7"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">Important limitation</p><h2 className="mt-2 text-2xl font-black tracking-[-0.03em]">A price feed is not an alpha engine</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-amber-950/80">Prices, market caps, volumes, wallet balances, and historical performance are descriptive observations. They do not establish future returns, token quality, liquidity during stress, smart-contract safety, or whether an asset is suitable for you. Always verify the timestamp, contract, chain, and source.</p></section>
      </main>
    </div>
  );
}
