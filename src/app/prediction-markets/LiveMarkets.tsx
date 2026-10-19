"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PredictionMarket = {
  source: "polymarket" | "kalshi" | "polymarket-us";
  slug: string;
  question: string;
  image?: string;
  icon?: string;
  outcomes?: string[];
  outcomePrices?: number[];
  volume24hr?: number;
  liquidity?: number;
  endDate?: string;
};

type ApiResponse = {
  data: PredictionMarket[];
  timestamp: string;
  cached: boolean;
  error?: string;
};

type VenueFilter = "all" | "polymarket" | "kalshi";

const VENUE_TABS: { id: VenueFilter; label: string }[] = [
  { id: "all", label: "All venues" },
  { id: "polymarket", label: "Polymarket" },
  { id: "kalshi", label: "Kalshi" },
];

function venueLabel(source: PredictionMarket["source"]): string {
  if (source === "kalshi") return "Kalshi";
  if (source === "polymarket-us") return "Polymarket US";
  return "Polymarket";
}

function venueUrl(market: PredictionMarket): string {
  if (market.source === "polymarket") return `https://polymarket.com/event/${market.slug}`;
  if (market.source === "polymarket-us") return `https://polymarket.us/event/${market.slug}`;
  return "https://kalshi.com";
}

function formatVolume(value?: number): string {
  if (value == null || !Number.isFinite(value)) return "Volume n/a";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
}

function formatEndDate(value?: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const days = Math.ceil((date.getTime() - Date.now()) / 86_400_000);
  if (days < 0) return "Ended";
  if (days === 0) return "Ends today";
  if (days === 1) return "Ends tomorrow";
  if (days < 60) return `Ends in ${days}d`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function MarketCard({ market }: { market: PredictionMarket }) {
  const yes = market.outcomePrices?.[0];
  const no = market.outcomePrices?.[1];
  const yesPct = yes != null && Number.isFinite(yes) ? Math.round(yes * 100) : null;
  const noPct = no != null && Number.isFinite(no) ? Math.round(no * 100) : null;
  const endLabel = formatEndDate(market.endDate);

  return (
    <a
      href={venueUrl(market)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-lime-300/60 hover:bg-white/10"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-lime-300/15 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-lime-300">
          {venueLabel(market.source)}
        </span>
        {endLabel && <span className="text-xs text-slate-400">{endLabel}</span>}
      </div>
      <h3 className="mt-3 text-base font-bold leading-6 text-white group-hover:text-lime-200">
        {market.question}
      </h3>
      {yesPct != null && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm font-black">
            <span className="text-lime-300">Yes {yesPct}%</span>
            {noPct != null && <span className="text-rose-300">No {noPct}%</span>}
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lime-400 to-lime-300 transition-all"
              style={{ width: `${yesPct}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] leading-5 text-slate-500">
            Market-implied probability, not a prediction.
          </p>
        </div>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
        <span>{formatVolume(market.volume24hr)} 24h vol</span>
        <span className="font-bold text-slate-300 group-hover:text-lime-300">View market →</span>
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="h-5 w-24 rounded-full bg-white/10" />
      <div className="mt-3 h-5 w-full rounded bg-white/10" />
      <div className="mt-2 h-5 w-3/4 rounded bg-white/10" />
      <div className="mt-4 h-2.5 w-full rounded-full bg-white/10" />
      <div className="mt-4 h-4 w-1/2 rounded bg-white/10" />
    </div>
  );
}

export default function LiveMarkets() {
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [timestamp, setTimestamp] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [venue, setVenue] = useState<VenueFilter>("all");
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      const json = (await res.json()) as ApiResponse;
      if (!res.ok || json.error || !json.data.length) {
        throw new Error(json.error || "No markets returned.");
      }
      setMarkets(json.data);
      setTimestamp(json.timestamp);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setMarkets([]);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    load("/api/prediction/trending?limit=12");
  }, [load]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = query.trim();
    if (trimmed.length === 0) {
      load("/api/prediction/trending?limit=12");
      return;
    }
    if (trimmed.length < 2) return;
    setSearching(true);
    debounceRef.current = setTimeout(() => {
      load(`/api/prediction/search?q=${encodeURIComponent(trimmed)}`);
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, load]);

  const visible = markets.filter((m) => {
    if (venue === "all") return true;
    if (venue === "polymarket") return m.source === "polymarket" || m.source === "polymarket-us";
    return m.source === "kalshi";
  });

  const dataAsOf = timestamp
    ? new Date(timestamp).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
    : "";

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">Live odds</p>
        <h2 className="mt-3 text-3xl font-black text-white">What the markets are pricing right now</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Live order-book prices from Polymarket and Kalshi, refreshed every few minutes. A 63¢ Yes
          share reads as roughly 63% market-implied probability. That is the crowd&apos;s current
          price, not a forecast, not advice, and never a guarantee.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {VENUE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setVenue(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                venue === tab.id
                  ? "bg-lime-300 text-slate-950"
                  : "border border-white/20 text-slate-300 hover:border-lime-300 hover:text-lime-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search markets, e.g. bitcoin, election, Fed"
            className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-lime-300 focus:outline-none"
            aria-label="Search prediction markets"
          />
          {searching && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">Searching…</span>
          )}
        </div>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-lg font-bold text-white">Live odds are unavailable right now</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-400">
              {error} The platform directory below is unaffected. Prices may take a minute to come back.
            </p>
            <button
              type="button"
              onClick={() => load(query.trim().length >= 2 ? `/api/prediction/search?q=${encodeURIComponent(query.trim())}` : "/api/prediction/trending?limit=12")}
              className="mt-6 rounded-full bg-lime-300 px-6 py-2.5 text-sm font-black text-slate-950 transition hover:bg-lime-200"
            >
              Try again
            </button>
          </div>
        ) : visible.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-lg font-bold text-white">No markets match this filter</p>
            <p className="mt-2 text-sm text-slate-400">Try a different venue or clear your search.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((market) => (
              <MarketCard key={`${market.source}:${market.slug}`} market={market} />
            ))}
          </div>
        )}
      </div>

      {dataAsOf && !loading && !error && (
        <p className="mt-6 text-xs text-slate-500">
          Data as of {dataAsOf} · via CoinStats Prediction Markets API (Polymarket, Kalshi). Prices
          move with every trade and may differ from the venue at execution.
        </p>
      )}
    </div>
  );
}
