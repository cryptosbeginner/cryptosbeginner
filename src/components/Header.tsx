"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string; note?: string };
type NavGroup = { label: string; description: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: "Compare",
    description: "Start with a product comparison",
    items: [
      { label: "Best Exchanges", href: "/exchanges/best-crypto-exchanges-2026", note: "Fees, safety and liquidity" },
      { label: "Exchange Finder", href: "/tools/exchange-finder", note: "Answer a few questions" },
      { label: "Crypto Cards", href: "/crypto-cards", note: "31 cards, fees and regions" },
      { label: "No-KYC Exchanges", href: "/exchanges/no-kyc", note: "Verification and limitations" },
      { label: "Prediction Markets", href: "/prediction-markets", note: "Outcome shares and rules" },
    ],
  },
  {
    label: "Research",
    description: "Explore live data and on-chain topics",
    items: [
      { label: "Live Crypto Prices", href: "/crypto-prices", note: "Market data and project context" },
      { label: "Research Desk", href: "/crypto-research", note: "Evidence-led crypto research" },
      { label: "Crypto Screener", href: "/crypto-screener", note: "Filter projects and signals" },
      { label: "Wallet Tracker", href: "/wallet-tracker", note: "Follow public wallet activity" },
      { label: "Meme Coin Research", href: "/meme-coin-research", note: "Tools, risks and narratives" },
    ],
  },
  {
    label: "Learn",
    description: "Build your crypto fundamentals",
    items: [
      { label: "Learn Hub", href: "/learn", note: "Guides for crypto newcomers" },
      { label: "Wallets", href: "/wallets/best-crypto-wallets-2026", note: "Hardware and software wallets" },
      { label: "DEXes", href: "/dexes", note: "On-chain trading explained" },
      { label: "Security Incidents", href: "/security/exchange-incidents", note: "What failures teach us" },
      { label: "Crypto Glossary", href: "/learn/crypto-glossary", note: "Plain-English definitions" },
      { label: "Bitcoin Forks", href: "/learn/bitcoin-forks", note: "Forks, history and mechanics" },
    ],
  },
  {
    label: "Regions",
    description: "See what changes by country",
    items: [
      { label: "All Region Guides", href: "/regions", note: "Country-by-country directory" },
      { label: "United States", href: "/regions/united-states", note: "Access, rules and local rails" },
      { label: "United Arab Emirates", href: "/regions/uae", note: "Platforms and VARA context" },
      { label: "India", href: "/regions/india", note: "Local access and tax context" },
      { label: "Pakistan", href: "/regions/pakistan", note: "Local rails and availability" },
    ],
  },
  {
    label: "Tools",
    description: "Use practical crypto utilities",
    items: [
      { label: "Fee Calculator", href: "/tools/fee-calculator", note: "Compare trading costs" },
      { label: "Bitcoin Halving", href: "/tools/bitcoin-halving", note: "Countdown and history" },
      { label: "Wallet Alerts", href: "/wallet-alerts", note: "Research notification tools" },
      { label: "Public Wallet Explorer", href: "/public-wallets", note: "Explore public wallets" },
      { label: "Crypto Projects", href: "/projects", note: "Project and incident directory" },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return <svg aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleGroup = (label: string) => setOpenGroup((current) => current === label ? null : label);
  const closeMenus = () => { setOpenGroup(null); setMobileOpen(false); };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeMenus} className="shrink-0 text-xl font-black tracking-[-0.04em] text-slate-950">
          <span>Cryptos</span><span className="text-indigo-600">Beginner</span>
        </Link>

        <nav className="relative hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div key={group.label} className="relative">
              <button type="button" aria-expanded={openGroup === group.label} onClick={() => toggleGroup(group.label)} className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold transition ${openGroup === group.label ? "bg-slate-100 text-indigo-700" : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"}`}>
                {group.label}<Chevron open={openGroup === group.label} />
              </button>
              {openGroup === group.label && <div className="absolute right-0 top-[3.25rem] w-[23rem] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                <div className="border-b border-slate-100 px-3 pb-3"><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">{group.label}</p><p className="mt-1 text-sm font-semibold text-slate-500">{group.description}</p></div>
                <div className="mt-2 grid gap-1">{group.items.map((item) => <Link key={item.href} href={item.href} onClick={closeMenus} className="rounded-xl px-3 py-2.5 transition hover:bg-indigo-50"><span className="block text-sm font-bold text-slate-900">{item.label}</span>{item.note && <span className="mt-0.5 block text-xs font-medium text-slate-500">{item.note}</span>}</Link>)}</div>
              </div>}
            </div>
          ))}
          <Link href="/crypto-cards" className="ml-2 inline-flex items-center rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700">Crypto Cards</Link>
        </nav>

        <button type="button" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-slate-700 shadow-sm lg:hidden" onClick={() => { setMobileOpen((open) => !open); setOpenGroup(null); }} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">{mobileOpen ? <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}</svg>
        </button>
      </div>

      {mobileOpen && <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile navigation"><div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <Link href="/crypto-cards" onClick={closeMenus} className="mb-2 flex items-center justify-between rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white">Crypto Cards<span aria-hidden="true">→</span></Link>
        {navGroups.map((group) => <div key={group.label} className="border-b border-slate-100 last:border-0"><button type="button" onClick={() => toggleGroup(group.label)} aria-expanded={openGroup === group.label} className="flex w-full items-center justify-between py-3 text-left text-sm font-black text-slate-900">{group.label}<Chevron open={openGroup === group.label} /></button>{openGroup === group.label && <div className="mb-2 grid gap-1 rounded-xl bg-slate-50 p-2">{group.items.map((item) => <Link key={item.href} href={item.href} onClick={closeMenus} className="rounded-lg px-3 py-2.5 hover:bg-white"><span className="block text-sm font-bold text-slate-900">{item.label}</span>{item.note && <span className="mt-0.5 block text-xs font-medium text-slate-500">{item.note}</span>}</Link>)}</div>}</div>)}
      </div></nav>}
    </header>
  );
}
