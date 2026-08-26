"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GlossaryCategory, GlossaryTerm } from "./glossary-data";

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.trim().toLowerCase() ? (
      <mark key={`${part}-${index}`} className="rounded bg-amber-200 px-0.5 text-slate-950">
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

const categoryStyles: Record<GlossaryCategory, string> = {
  Bitcoin: "border-orange-200 bg-orange-50 text-orange-800",
  Blockchain: "border-cyan-200 bg-cyan-50 text-cyan-800",
  Trading: "border-violet-200 bg-violet-50 text-violet-800",
  DeFi: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Wallets and security": "border-rose-200 bg-rose-50 text-rose-800",
  "Regulation and taxes": "border-slate-200 bg-slate-100 text-slate-700",
  Tokenomics: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800",
};

export default function GlossaryIndex({ terms, categories }: { terms: GlossaryTerm[]; categories: readonly GlossaryCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "All">("All");

  const filteredTerms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return terms.filter((term) => {
      const categoryMatches = activeCategory === "All" || term.category === activeCategory;
      const queryMatches = !normalized || [term.term, term.shortDefinition, term.category, ...term.related].some((value) => value.toLowerCase().includes(normalized));
      return categoryMatches && queryMatches;
    });
  }, [activeCategory, query, terms]);

  const groupedTerms = useMemo(() => categories.reduce<Record<string, GlossaryTerm[]>>((groups, category) => {
    groups[category] = filteredTerms.filter((term) => term.category === category);
    return groups;
  }, {}), [categories, filteredTerms]);

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-950">
      <section className="border-b border-slate-200 bg-[#081328] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Learn · Reference desk</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">Crypto terms, without the fog.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">Search the words behind wallets, markets, blockchains, DeFi, and token supply. Each entry starts with a direct definition, then adds the practical context a beginner needs to use the term correctly.</p>
          <div className="mt-8 max-w-3xl">
            <label htmlFor="glossary-search" className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Search crypto terms</label>
            <div className="mt-2 flex items-center rounded-2xl border border-white/15 bg-white/[0.09] px-4 shadow-2xl backdrop-blur">
              <span className="mr-3 text-xl text-cyan-200" aria-hidden="true">⌕</span>
              <input id="glossary-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try private key, liquidity, or Bitcoin halving" className="w-full bg-transparent py-4 text-base text-white outline-none placeholder:text-slate-400" />
              {query && <button type="button" onClick={() => setQuery("")} className="rounded-lg px-2 py-1 text-xs font-black text-slate-300 hover:bg-white/10 hover:text-white">Clear</button>}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">A working reference</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Start with a word. Leave with a better question.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">This glossary is for beginners and intermediate readers who want plain-English explanations without price hype. Use the search field for a quick lookup, choose a category to narrow the desk, or open a full entry for examples, misconceptions, related guides, and sources.</p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-800">Accuracy note</p>
            <p className="mt-3 text-sm leading-7 text-emerald-950/80">Last reviewed <strong>{"27 August 2026"}</strong>. Definitions are written in original editorial language and checked against official documentation or high-quality primary sources where relevant.</p>
            <Link href="/about" className="mt-4 inline-flex text-sm font-black text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950">Read our editorial standards →</Link>
          </div>
        </section>

        <section className="mt-8" aria-label="Glossary categories">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => {
              const selected = activeCategory === category;
              return <button key={category} type="button" onClick={() => setActiveCategory(category as GlossaryCategory | "All")} aria-pressed={selected} className={`rounded-full border px-4 py-2 text-xs font-black transition ${selected ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950"}`}>{category}</button>;
            })}
          </div>
          <p className="mt-4 text-sm text-slate-500">Showing <strong className="text-slate-900">{filteredTerms.length}</strong> of {terms.length} definitions{activeCategory !== "All" ? ` in ${activeCategory}` : ""}{query ? ` matching “${query}”` : ""}.</p>
        </section>

        <section className="mt-8 space-y-10">
          {categories.map((category) => {
            const categoryTerms = groupedTerms[category];
            if (!categoryTerms.length) return null;
            return <div key={category}>
              <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
                <div>
                  <p className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${categoryStyles[category]}`}>{category}</p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">{category}</h2>
                </div>
                <span className="text-xs font-bold text-slate-400">{categoryTerms.length} entries</span>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categoryTerms.map((term) => <article key={term.slug} className="group flex min-h-48 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/60">
                  <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-black tracking-[-0.03em]">{highlight(term.term, query)}</h3><span className="text-lg text-slate-300 transition group-hover:text-indigo-400" aria-hidden="true">↗</span></div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{highlight(term.shortDefinition, query)}</p>
                  <Link href={`/learn/crypto-glossary/${term.slug}`} className="mt-5 inline-flex text-sm font-black text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-950">Read the definition →</Link>
                </article>)}
              </div>
            </div>;
          })}
          {!filteredTerms.length && <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center"><h2 className="text-2xl font-black">No matching term yet</h2><p className="mt-3 text-sm leading-6 text-slate-600">Try a shorter phrase, remove the category filter, or send the editorial team a suggestion through the contact page.</p><Link href="/contact" className="mt-5 inline-flex rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white hover:bg-indigo-700">Suggest a term</Link></div>}
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Use the glossary with the site</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Definitions are the starting point, not the finish line.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">When a term affects a real decision, continue to the relevant guide. Learn about the Bitcoin supply schedule in the <Link href="/tools/bitcoin-halving" className="font-black text-cyan-200 underline">Halving tool</Link>, compare exchange questions in the <Link href="/tools/exchange-finder" className="font-black text-cyan-200 underline">Exchange Finder</Link>, or review custody basics before moving funds.</p>
        </section>
      </main>
    </div>
  );
}
