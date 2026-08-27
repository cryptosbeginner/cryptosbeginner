"use client";

import { useMemo, useState } from "react";
import { categoryLabels, wallets, type WalletCategory } from "./wallets-data";

const filters: Array<"All" | WalletCategory> = [
  "All",
  "hardware",
  "mobile",
  "extension",
];

export default function WalletExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | WalletCategory>("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return wallets.filter((wallet) => {
      const haystack = [wallet.name, wallet.fit, wallet.chains, wallet.note].join(" ").toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesFilter = filter === "All" || wallet.category === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search wallets, chains or use cases"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-700"}`}
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
                <img src={wallet.logo} alt={`${wallet.name} logo`} width={40} height={40} className="h-10 w-10 rounded-xl bg-slate-100 object-contain p-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{wallet.name}</h3>
                  <p className="text-sm font-semibold text-cyan-700">{wallet.fit}</p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {categoryLabels[wallet.category]}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{wallet.note}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600"><strong>Chains:</strong> {wallet.chains}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Security:</strong> {wallet.security}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Check:</strong> {wallet.check}</p>
            <a
              href={wallet.href}
              target="_blank"
              rel={wallet.affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-bold text-white ${wallet.affiliate ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"}`}
            >
              {wallet.affiliate ? `Compare ${wallet.name}` : `Official ${wallet.name} site`}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
