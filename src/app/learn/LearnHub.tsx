"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
};

const guides: Guide[] = [
  // Getting Started
  { slug: "crypto-platforms-for-beginners", title: "Best Crypto Platforms for Beginners", description: "What beginners actually need in a first platform, and our top picks compared side by side.", category: "Getting Started" },
  { slug: "crypto-glossary", title: "Crypto Glossary", description: "Clear, plain-English definitions for the crypto terms you will run into everywhere.", category: "Getting Started" },
  { slug: "bitcoin-forks", title: "Bitcoin Forks Explained", description: "Hard forks, soft forks, and chain splits: what they are and why they happen.", category: "Getting Started" },
  { slug: "what-are-bitcoin-forks", title: "What Are Bitcoin Forks?", description: "A beginner-friendly walkthrough of how and why Bitcoin's chain has split over the years.", category: "Getting Started" },
  { slug: "bitcoin-classic-hard-fork", title: "Bitcoin Classic and Hard Forks", description: "The block size debate, Bitcoin Classic's story, and hard fork safety basics.", category: "Getting Started" },
  // Security & Safety
  { slug: "crypto-exchange-security-checklist", title: "Crypto Exchange Security Checklist", description: "A practical checklist to vet any exchange before you trust it with your money.", category: "Security & Safety" },
  { slug: "seed-phrase-security", title: "Seed Phrase Security", description: "How to store your recovery phrase so nobody can steal your crypto, including you-proofing it.", category: "Security & Safety" },
  { slug: "what-is-proof-of-reserves", title: "What Is Proof of Reserves?", description: "The beginner's guide to how exchanges prove they actually hold your funds.", category: "Security & Safety" },
  { slug: "proof-of-reserves", title: "Proof of Reserves Explained Simply", description: "What PoR proves, what it does not prove, and why it matters after FTX.", category: "Security & Safety" },
  { slug: "how-to-check-exchange-proof-of-reserves", title: "How to Check Exchange Proof of Reserves", description: "Step-by-step: verify an exchange's reserves yourself instead of taking their word for it.", category: "Security & Safety" },
  { slug: "exchange-insurance-funds", title: "Exchange Insurance Funds Explained", description: "What exchange insurance funds cover, their limits, and the fine print nobody reads.", category: "Security & Safety" },
  { slug: "how-p2p-escrow-works", title: "How P2P Escrow Works", description: "How escrow protects both sides of a peer-to-peer crypto trade, and where it can go wrong.", category: "Security & Safety" },
  // Wallets
  { slug: "non-custodial-crypto-wallets", title: "Non-Custodial Crypto Wallets Explained", description: "Self-custody, seed phrases, and hot vs cold wallets: holding your own keys the right way.", category: "Wallets" },
  // Privacy
  { slug: "privacy-coins", title: "Privacy Coins Explained", description: "Monero, Zcash, Tornado Cash, and the fight for financial privacy, all in one hub.", category: "Privacy", badge: "Hub" },
  { slug: "what-is-monero", title: "What Is Monero (XMR)?", description: "The beginner's guide to the original privacy coin: ring signatures, stealth addresses, and where it stands today.", category: "Privacy" },
  { slug: "what-is-zcash", title: "What Is Zcash (ZEC)?", description: "Shielded vs transparent transactions, zk-SNARKs in plain English, and Zcash's 2026 comeback.", category: "Privacy" },
  { slug: "tornado-cash-explained", title: "Tornado Cash Explained", description: "How the mixer works and the full legal saga, from OFAC sanctions to the court rulings.", category: "Privacy" },
  { slug: "privacy-coins-vs-mixers", title: "Privacy Coins vs Mixers", description: "Private-by-default networks vs transparent chains plus mixers: how they compare across 7 dimensions.", category: "Privacy" },
  { slug: "what-are-privacy-swaps", title: "What Are Privacy Swaps?", description: "The 3 types explained with infographics: privacy-route aggregators, intent-based swaps, and shielded pools.", category: "Privacy", badge: "New" },
  { slug: "no-kyc-exchanges-explained", title: "No-KYC Exchanges Explained", description: "The no-KYC spectrum, the KYC-on-trigger trap, documented risks, and the eXch takedown.", category: "Privacy", badge: "New" },
  // Trading Guides
  { slug: "leverage-trading-guide", title: "Leverage Trading for Beginners", description: "What leverage is, how liquidation works, and the pitfalls that wipe out new traders.", category: "Trading Guides" },
  { slug: "how-to-trade-memecoins-safely", title: "How to Trade Memecoins Safely", description: "Spotting scams and rug pulls before they spot you: a survival guide for memecoin trading.", category: "Trading Guides" },
  { slug: "best-solana-dex", title: "Best Solana DEX in 2026", description: "Jupiter vs Raydium vs Orca compared: fees, liquidity, and which DEX fits your style.", category: "Trading Guides" },
  { slug: "gmgn-ai-agent", title: "GMGN AI Agent Guide", description: "How GMGN's AI agent and skills work, and how query access differs from signed trading.", category: "Trading Guides" },
  // DeFi & Staking
  { slug: "sui-staking", title: "SUI Staking: The Complete Beginner's Guide", description: "How Sui's delegated proof-of-stake works, current APY, and the risks to know.", category: "DeFi & Staking" },
  { slug: "rwa-crypto-projects", title: "RWA Crypto Explained", description: "Tokenization of real-world assets: the categories, the leading projects, and the risks.", category: "DeFi & Staking" },
  // Fintech
  { slug: "what-is-a-neobank", title: "What Is a Neobank?", description: "Digital banks explained: the 3-jobs model, banking-as-a-service, crypto neobanks, and how to launch your own.", category: "Fintech", badge: "New" },
];

const categories = ["All", "Getting Started", "Security & Safety", "Wallets", "Privacy", "Trading Guides", "DeFi & Staking", "Fintech"];

const featured = ["what-is-a-neobank", "privacy-coins", "proof-of-reserves", "crypto-exchange-security-checklist"];

export default function LearnHub() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) => {
      const matchesCategory = activeCategory === "All" || g.category === activeCategory;
      const matchesQuery = !q || g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, Guide[]> = {};
    for (const g of filtered) {
      if (!map[g.category]) map[g.category] = [];
      map[g.category].push(g);
    }
    return map;
  }, [filtered]);

  const featuredGuides = guides.filter((g) => featured.includes(g.slug));

  return (
    <div>
      {/* Stats bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 text-sm">
          <span><strong className="font-black text-slate-900">{guides.length}</strong> <span className="text-slate-600">guides</span></span>
          <span><strong className="font-black text-slate-900">{categories.length - 1}</strong> <span className="text-slate-600">categories</span></span>
          <span className="inline-flex items-center gap-2 text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Updated October 2026
          </span>
        </div>
      </div>

      {/* Search and filters */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, e.g. staking, privacy, seed phrase..."
            aria-label="Search learn guides"
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-950 shadow-sm outline-none ring-indigo-600 placeholder:text-slate-400 focus:ring-2"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === c
                  ? "bg-slate-950 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {activeCategory === "All" && !query && (
        <section className="mx-auto max-w-6xl px-4 pt-10">
          <h2 className="text-xl font-black text-slate-950">Featured guides</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/learn/${g.slug}`}
                className="group rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-5 transition hover:border-indigo-400 hover:shadow-md"
              >
                {g.badge && (
                  <span className="mb-2 inline-block rounded-full bg-indigo-700 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-white">
                    {g.badge}
                  </span>
                )}
                <h3 className="font-black text-slate-950 group-hover:text-indigo-800">{g.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{g.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Grouped guides */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            No guides match your search. Try a different term or category.
          </p>
        )}
        {(activeCategory === "All" ? categories.slice(1) : [activeCategory]).map((cat) => {
          const items = grouped[cat];
          if (!items || items.length === 0) return null;
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-black text-slate-950">
                {cat} <span className="ml-2 text-sm font-bold text-slate-400">{items.length}</span>
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/learn/${g.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-black text-slate-950 group-hover:text-indigo-800">{g.title}</h3>
                      {g.badge && (
                        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-slate-600">
                          {g.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{g.description}</p>
                    <span className="mt-3 inline-block text-sm font-bold text-indigo-700 group-hover:text-indigo-900">
                      Read guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
