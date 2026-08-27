"use client";

import { useMemo, useState } from "react";
import {
  wallets,
  categoryLabels,
  type WalletCategory,
} from "./wallets-data";

const filters: Array<"All" | WalletCategory> = [
  "All",
  "hardware",
  "mobile",
  "extension",
  "desktop",
];

export default function WalletExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | WalletCategory>("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return wallets.filter((wallet) => {
      const haystack = [wallet.name, wallet.fit, wallet.chains, wallet.category].join(" ").toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesCategory = category === "All" || wallet.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Ledger, Phantom, Solana, hardware..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  active
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                {item === "All" ? "All types" : categoryLabels[item]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((wallet) => (
          <article key={wallet.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white"
                  style={{ backgroundColor: wallet.color }}
                  aria-hidden
                >
                  {wallet.mark}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{wallet.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {categoryLabels[wallet.category]}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {wallet.price}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{wallet.fit}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600"><strong>Chains:</strong> {wallet.chains}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Security:</strong> {wallet.security}</p>
            <p className="mt-2 text-sm leading-6 text-amber-900"><strong>Watch for:</strong> {wallet.watchFor}</p>
            <a
              href={wallet.href}
              target="_blank"
              rel={wallet.affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-bold text-white ${
                wallet.affiliate ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {wallet.affiliate ? `Compare ${wallet.name}` : `Official ${wallet.officialName} site`}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
