"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MarketCurrency, MarketResponse } from "../api/crypto/markets/market-data";
import MarketIcon from "@/components/MarketIcon";

type SortKey = "change" | "volume" | "rank";

const currencySymbols: Record<MarketCurrency, string> = { usd: "$", eur: "€", gbp: "£", aud: "A$", cad: "C$", jpy: "¥" };

function money(value: number | null, currency: MarketCurrency) {
  if (value === null) return "—";
  const symbol = currencySymbols[currency];
  const absolute = Math.abs(value);
  const units = absolute >= 1e12 ? [1e12, "T"] as const : absolute >= 1e9 ? [1e9, "B"] as const : absolute >= 1e6 ? [1e6, "M"] as const : absolute >= 1e3 ? [1e3, "K"] as const : [1, ""] as const;
  const amount = value / units[0];
  return `${symbol}${amount.toFixed(units[0] === 1 ? 2 : 1)}${units[1]}`;
}

function percent(value: number | null) {
  return value === null ? "—" : `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function updatedAt(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "timestamp unavailable" : `${new Intl.DateTimeFormat("en-US", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", hour12: false }).format(date)} UTC`;
}

export default function MarketScreener({ initialPayload }: { initialPayload: MarketResponse }) {
  const [currency, setCurrency] = useState<MarketCurrency>(initialPayload.currency);
  const [payload, setPayload] = useState<MarketResponse>(initialPayload);
  const [query, setQuery] = useState("");
  const [minimumChange, setMinimumChange] = useState("all");
  const [maximumRank, setMaximumRank] = useState("100");
  const [sort, setSort] = useState<SortKey>("change");
  const [positiveOnly, setPositiveOnly] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    setError("");
    try {
      const response = await fetch(`/api/crypto/markets?currency=${currency}&limit=100`, { cache: "no-store" });
      const nextPayload = (await response.json()) as MarketResponse;
      if (!response.ok || !nextPayload.data?.length) throw new Error(nextPayload.error ?? "Market data is temporarily unavailable.");
      setPayload(nextPayload);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Market data is temporarily unavailable.");
    } finally {
      setRefreshing(false);
    }
  }, [currency]);

  useEffect(() => {
    const refreshTimer = window.setTimeout(() => void load(), 0);
    const interval = window.setInterval(() => void load(true), 60_000);
    return () => { window.clearTimeout(refreshTimer); window.clearInterval(interval); };
  }, [load]);

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const minChange = minimumChange === "all" ? -Infinity : Number(minimumChange);
    const maxRank = Number(maximumRank);
    return [...payload.data].filter((coin) => {
      const textMatch = !normalized || `${coin.name} ${coin.symbol} ${coin.id}`.toLowerCase().includes(normalized);
      const changeMatch = (coin.change24h ?? -Infinity) >= minChange;
      const rankMatch = coin.rank <= maxRank;
      const positiveMatch = !positiveOnly || (coin.change24h ?? -Infinity) > 0;
      return textMatch && changeMatch && rankMatch && positiveMatch;
    }).sort((a, b) => {
      if (sort === "volume") return (b.volume24h ?? -Infinity) - (a.volume24h ?? -Infinity);
      if (sort === "rank") return a.rank - b.rank;
      return (b.change24h ?? -Infinity) - (a.change24h ?? -Infinity);
    });
  }, [maximumRank, minimumChange, payload.data, positiveOnly, query, sort]);

  return <main className="min-h-screen bg-[#f7f7fb] text-slate-950"><section className="relative overflow-hidden bg-[#0b0820] text-white"><div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" /><div className="pointer-events-none absolute right-0 top-12 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" /><div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:46px_46px]" /><div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><Link href="/crypto-prices" className="text-sm font-black text-cyan-200 hover:text-white">← Back to live prices</Link><p className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Research tool · market screener</p><h1 className="mt-4 max-w-4xl text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-7xl">A filter is useful.<br /><span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">It is not a signal.</span></h1><p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Scan the current market snapshot by 24-hour change, rank, and volume. The screener helps you organize research; it does not forecast price or remove risk.</p></div></section><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/40 lg:grid-cols-[1.2fr_repeat(5,1fr)] lg:items-end"><label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Search<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Token, symbol, or ID" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold normal-case tracking-normal text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" /></label><label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Quote<select value={currency} onChange={(event) => setCurrency(event.target.value as MarketCurrency)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-800"><option value="usd">USD</option><option value="eur">EUR</option><option value="gbp">GBP</option><option value="aud">AUD</option><option value="cad">CAD</option><option value="jpy">JPY</option></select></label><label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Min 24h change<select value={minimumChange} onChange={(event) => setMinimumChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-800"><option value="all">Any</option><option value="0">0% and above</option><option value="5">+5% and above</option><option value="10">+10% and above</option></select></label><label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Max rank<select value={maximumRank} onChange={(event) => setMaximumRank(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-800"><option value="25">Top 25</option><option value="50">Top 50</option><option value="100">Top 100</option></select></label><label className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Order<select value={sort} onChange={(event) => setSort(event.target.value as SortKey)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-800"><option value="change">24h momentum</option><option value="volume">24h volume</option><option value="rank">Market rank</option></select></label><label className="flex items-center gap-2 pb-3 text-sm font-black text-slate-700"><input type="checkbox" checked={positiveOnly} onChange={(event) => setPositiveOnly(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-fuchsia-600 focus:ring-fuchsia-300" /> Positive only</label></div><div className="mt-6 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-600">Showing <strong className="text-slate-950">{matches.length}</strong> of {payload.data.length} tracked assets</p><div className="flex items-center gap-3 text-xs font-semibold text-slate-500"><span>Provider: <strong className="text-slate-700">{payload.provider}</strong> · checked {updatedAt(payload.checkedAt)}</span><button type="button" onClick={() => void load(true)} disabled={refreshing} className="rounded-lg bg-slate-950 px-3 py-2 font-black text-white hover:bg-fuchsia-700 disabled:opacity-50">{refreshing ? "Updating…" : "Refresh"}</button></div></div>{payload.keyless && <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-6 text-amber-950">This preview is using CoinGecko’s keyless public fallback. It is rate-limited and intended for testing; production should use a server-side provider key.</p>}{error && <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"><strong>Refresh failed.</strong> {error}</p>}{matches.length === 0 ? <div className="mt-4 rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-14 text-center"><h2 className="text-xl font-black">Nothing matches that cut</h2><p className="mt-2 text-sm text-slate-600">Loosen the rank, change, or search filters and try again.</p></div> : <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{matches.map((coin) => <Link key={coin.id} href={`/crypto-prices/coin/${encodeURIComponent(coin.id)}`} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/30 transition hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-fuchsia-100/50"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><MarketIcon src={coin.image} name={coin.name} symbol={coin.symbol} /><div><h2 className="font-black text-slate-950 group-hover:text-fuchsia-700">{coin.name}</h2><p className="text-xs font-black uppercase tracking-wide text-slate-500">#{coin.rank} · {coin.symbol}</p></div></div><span className={`rounded-full px-2.5 py-1 text-xs font-black ${coin.change24h !== null && coin.change24h >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>{percent(coin.change24h)}</span></div><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">Price · {currency.toUpperCase()}</p><p className="mt-1 text-sm font-black text-slate-900">{money(coin.price, currency)}</p></div><div className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">24h volume</p><p className="mt-1 text-sm font-black text-slate-900">{money(coin.volume24h, currency)}</p></div></div><div className="mt-5 flex items-center justify-between text-xs font-black text-fuchsia-700"><span>Open research card</span><span className="transition group-hover:translate-x-1">→</span></div></Link>)}</div>}<section className="mt-12 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Method note</p><h2 className="mt-2 text-2xl font-black">Why these filters stay descriptive</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-amber-950/80">Momentum and volume filters can help you find where attention is concentrated, but they can also surface illiquid, volatile, manipulated, or newly listed assets. Treat every result as a prompt for verification—not a ranking of what to buy.</p></section></div></main>;
}
