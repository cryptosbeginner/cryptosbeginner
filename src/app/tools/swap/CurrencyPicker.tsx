"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SwapCurrency } from "./SwapWidget";

const POPULAR_TICKERS = [
  "btc", "eth", "usdt", "usdc", "sol", "bnb", "xrp", "doge",
  "trx", "ton", "ada", "ltc", "avax", "link", "matic", "dot",
];

function key(c: SwapCurrency) {
  return `${c.ticker.toLowerCase()}:${c.network.toLowerCase()}`;
}

export default function CurrencyPicker({
  label,
  currencies,
  value,
  onChange,
  excludeKey,
}: {
  label: string;
  currencies: SwapCurrency[];
  value: string;
  onChange: (key: string) => void;
  excludeKey?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = currencies.find((c) => key(c) === value);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => searchRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const popular = useMemo(() => {
    const out: SwapCurrency[] = [];
    const seen = new Set<string>();
    for (const t of POPULAR_TICKERS) {
      const candidates = currencies.filter(
        (x) => x.ticker.toLowerCase() === t && key(x) !== excludeKey && !seen.has(key(x))
      );
      // Prefer the native network (ticker === network), e.g. BTC on Bitcoin not Lightning
      const c =
        candidates.find((x) => x.network.toLowerCase() === t) ??
        candidates[0];
      if (c) { out.push(c); seen.add(key(c)); }
    }
    return out;
  }, [currencies, excludeKey]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = currencies.filter((c) => key(c) !== excludeKey);
    if (!q) return pool.slice(0, 60);
    return pool
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.ticker.toLowerCase().includes(q) ||
          c.network.toLowerCase().includes(q)
      )
      .slice(0, 60);
  }, [currencies, query, excludeKey]);

  const pick = (c: SwapCurrency) => {
    onChange(key(c));
    setOpen(false);
  };

  const row = (c: SwapCurrency) => (
    <button
      key={key(c)}
      type="button"
      onClick={() => pick(c)}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-indigo-50 ${
        key(c) === value ? "bg-indigo-50 ring-1 ring-indigo-200" : ""
      }`}
    >
      {c.image ? (
        <img src={c.image} alt="" className="h-8 w-8 rounded-full" loading="lazy" />
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-black text-slate-600">
          {c.ticker.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-black text-slate-950">{c.name}</span>
        <span className="block text-xs font-semibold uppercase text-slate-500">
          {c.ticker.toUpperCase()} · {c.network.toUpperCase()}
        </span>
      </span>
    </button>
  );

  return (
    <>
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-2 flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left transition hover:border-indigo-300 hover:bg-white"
      >
        {selected?.image ? (
          <img src={selected.image} alt="" className="h-9 w-9 rounded-full" />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-black text-slate-600">
            {selected?.ticker.slice(0, 2).toUpperCase() ?? "?"}
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-black text-slate-950">
            {selected ? `${selected.name}` : "Select currency"}
          </span>
          <span className="block text-xs font-semibold uppercase text-slate-500">
            {selected ? `${selected.ticker.toUpperCase()} · ${selected.network.toUpperCase()}` : "Tap to choose"}
          </span>
        </span>
        <span className="text-slate-400">▾</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-0 sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.5rem] bg-white shadow-2xl sm:rounded-[1.5rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-slate-100 p-5">
              <div className="flex items-center justify-between">
                <p className="text-base font-black text-slate-950">Choose currency</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-slate-600 hover:bg-slate-200"
                >
                  ×
                </button>
              </div>
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, ticker, or network…"
                className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {!query.trim() && popular.length > 0 && (
                <>
                  <p className="px-1 pb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400">Popular</p>
                  <div className="grid grid-cols-2 gap-1 pb-4">{popular.map(row)}</div>
                </>
              )}
              <p className="px-1 pb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                {query.trim() ? `Results (${filtered.length})` : "All currencies"}
              </p>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {filtered.map(row)}
              </div>
              {filtered.length === 0 && (
                <p className="py-8 text-center text-sm text-slate-500">No currencies match “{query}”.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
