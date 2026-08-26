"use client";

import { useEffect, useMemo, useState } from "react";
import type { MarketResponse } from "../api/crypto/markets/market-data";

const currencies = ["usd", "eur", "gbp", "aud", "cad"] as const;
type Currency = (typeof currencies)[number];
type SortKey = "rank" | "change24h" | "marketCap" | "volume24h";

function formatMoney(value: number | null, currency: Currency, compact = false) {
  if (value === null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: value < 1 ? 6 : compact ? 1 : 2,
  }).format(value);
}

function formatPercent(value: number | null) {
  if (value === null) return "—";
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function tone(value: number | null) {
  if (value === null || value === 0) return "text-slate-500";
  return value > 0 ? "text-emerald-700" : "text-rose-700";
}

function formatCheckedAt(value: string | null) {
  if (!value) return "Waiting for data";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Recently checked" : `Updated ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

export default function PriceTracker({ initialPayload }: { initialPayload: MarketResponse }) {
  const [currency, setCurrency] = useState<Currency>("usd");
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
    try {
      window.localStorage.setItem("cryptosbeginner-price-watchlist", JSON.stringify(watchlist));
    } catch {
      // Watchlist persistence is optional; market data must still load.
    }
  }, [watchlist]);

  useEffect(() => {
    let cancelled = false;
    const load = async (isRefresh = false) => {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      setError("");
      try {
        const response = await fetch(`/api/crypto/markets?currency=${currency}&limit=100`, { cache: "no-store" });
        const nextPayload = (await response.json()) as MarketResponse;
        if (!response.ok || !nextPayload.data?.length) throw new Error(nextPayload.error ?? "Market data is temporarily unavailable.");
        if (!cancelled) setPayload(nextPayload);
      } catch (loadError) {
        if (!cancelled) setError(loadError instanceof Error ? loadError.message : "Market data is temporarily unavailable.");
      } finally {
        if (!cancelled) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    };

    void load();
    const interval = window.setInterval(() => void load(true), 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [currency]);

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

  function toggleWatchlist(id: string) {
    setWatchlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-indigo-950/10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Live crypto market data · Updated automatically</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Track the market without losing the context</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Search a live table of major crypto assets by price, market cap, volume, and recent change. This is market information, not a signal that an asset is safe or suitable for you.</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-indigo-950/20">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Provider status</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-2xl font-black">{payload?.provider ?? "Connecting"}</span>
                <span className="rounded-full bg-emerald-300/15 px-3 py-1.5 text-xs font-bold text-emerald-200">{payload?.fallback ? "Fallback active" : "Primary feed"}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{formatCheckedAt(payload?.checkedAt ?? null)} · refreshes every 60 seconds</p>
              {payload?.fallback && <p className="mt-3 text-xs leading-5 text-amber-200">The primary provider was unavailable, so the tracker is showing fallback data. Compare timestamps before using the table.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Prices move quickly</p><p className="mt-2 text-sm leading-6 text-slate-700">A displayed price is a time-stamped snapshot, not a guaranteed execution price.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Liquidity matters</p><p className="mt-2 text-sm leading-6 text-slate-700">Market cap and volume help with context but do not remove spread or slippage.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Verify the source</p><p className="mt-2 text-sm leading-6 text-slate-700">Use the provider’s current data and your own research before making decisions.</p></div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Market table</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Live crypto prices and market metrics</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">The server fetches provider data without exposing API credentials to your browser. Change the quote currency or refresh manually when you need a newer snapshot.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm font-bold text-slate-700">Quote currency
              <select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)} className="ml-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                {currencies.map((item) => <option key={item} value={item}>{item.toUpperCase()}</option>)}
              </select>
            </label>
            <button type="button" onClick={() => window.location.reload()} className="rounded-lg bg-slate-900 px-3.5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50" disabled={refreshing}>{refreshing ? "Refreshing…" : "Refresh"}</button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto_auto] md:items-center">
          <label className="sr-only" htmlFor="market-search">Search market assets</label>
          <input id="market-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Bitcoin, ETH, Solana…" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200" />
          <label className="text-sm font-bold text-slate-700">Sort by
            <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)} className="ml-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <option value="rank">Market rank</option><option value="change24h">24h change</option><option value="marketCap">Market cap</option><option value="volume24h">24h volume</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700"><input type="checkbox" checked={watchlistOnly} onChange={(event) => setWatchlistOnly(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400" /> Watchlist only</label>
        </div>

        {error && <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm leading-7 text-rose-900"><strong>Market data unavailable.</strong> {error} Try refresh again in a moment.</div>}
        {loading && !payload && <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center text-sm font-semibold text-slate-600">Loading live market data…</div>}
        {!loading && !error && filteredCoins.length === 0 && <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center"><h3 className="text-lg font-black">No assets match your filters</h3><p className="mt-2 text-sm text-slate-600">Try a broader search or turn off Watchlist only.</p></div>}

        {filteredCoins.length > 0 && <>
          <p className="mt-6 text-sm text-slate-600" aria-live="polite">Showing <strong className="text-slate-900">{filteredCoins.length}</strong> assets{watchlist.length > 0 ? ` · ${watchlist.length} saved` : ""}</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_56px] gap-4 border-b bg-slate-50 px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-500 md:grid"><span className="text-left">Asset</span><span>Price</span><span>24h</span><span>Market cap</span><span>Volume</span><span aria-hidden="true" /></div>
            <div className="divide-y divide-slate-100">
              {filteredCoins.map((coin) => {
                const saved = watchlist.includes(coin.id);
                return <div key={coin.id} className="grid gap-4 px-5 py-5 transition hover:bg-slate-50 md:grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_56px] md:items-center md:text-right">
                  <div className="flex min-w-0 items-center gap-3 text-left"><button type="button" aria-label={saved ? `Remove ${coin.name} from watchlist` : `Add ${coin.name} to watchlist`} onClick={() => toggleWatchlist(coin.id)} className={`text-lg ${saved ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}>★</button><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-50 text-xs font-black text-indigo-700">{coin.symbol.slice(0, 3)}</div><div className="min-w-0"><p className="truncate font-black text-slate-900">{coin.name}</p><p className="text-xs font-bold uppercase tracking-wide text-slate-500">#{coin.rank} · {coin.symbol}</p></div></div>
                  <div className="text-left md:text-right"><p className="text-sm font-black text-slate-900">{formatMoney(coin.price, currency)}</p><p className="text-xs text-slate-500 md:hidden">Current price</p></div>
                  <div className={`text-left text-sm font-bold md:text-right ${tone(coin.change24h)}`}>{formatPercent(coin.change24h)}<span className="block text-xs font-semibold text-slate-400">24h</span></div>
                  <div className="text-left text-sm font-semibold text-slate-700 md:text-right">{formatMoney(coin.marketCap, currency, true)}<span className="block text-xs font-semibold text-slate-400">market cap</span></div>
                  <div className="text-left text-sm font-semibold text-slate-700 md:text-right">{formatMoney(coin.volume24h, currency, true)}<span className="block text-xs font-semibold text-slate-400">24h volume</span></div>
                  <div className="text-left text-xs font-bold text-indigo-700 md:text-right">#{coin.rank}</div>
                </div>;
              })}
            </div>
          </div>
        </>}

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-7"><p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">What this tracker does</p><h2 className="mt-2 text-2xl font-black">A clean market-data starting point</h2><p className="mt-4 text-sm leading-7 text-slate-700">Use the table to compare current snapshots, search a symbol, save a local watchlist, and switch quote currencies. A future coin-detail layer can add historical charts, contract addresses, market categories, and on-chain pool context.</p></div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-7"><p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">Important limitation</p><h2 className="mt-2 text-2xl font-black">A price feed is not an alpha engine</h2><p className="mt-4 text-sm leading-7 text-slate-700">Prices, volumes, rankings, and changes are descriptive data. They do not establish future returns, token quality, liquidity under stress, or the safety of a smart contract.</p></div>
        </section>
      </main>
    </div>
  );
}
