"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Learn", href: "/learn" },
    { label: "Security", href: "/security/exchange-incidents" },
    { label: "Wallets", href: "/wallets/best-crypto-wallets-2026" },
    { label: "DEXes", href: "/dexes" },
    { label: "Cards", href: "/crypto-cards" },
    { label: "Privacy Directory", href: "/crypto-privacy-directory" },
    { label: "Meme Coins", href: "/meme-coins" },
    { label: "Exchanges", href: "/exchanges/best-crypto-exchanges-2026" },
    { label: "Regions", href: "/regions" },
    { label: "Quiz", href: "/tools/exchange-finder" },
    { label: "Fee Calculator", href: "/tools/fee-calculator" },
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / brand */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="text-slate-900">Cryptos</span>
          <span className="text-indigo-600">Beginner</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-indigo-600 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700 shadow-sm"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm text-slate-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-slate-50"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}