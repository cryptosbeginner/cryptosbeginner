"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DirectoryCategory = "All" | "P2P" | "DEX" | "Wallet" | "Privacy tools";

type PrivacyService = {
  name: string;
  category: Exclude<DirectoryCategory, "All">;
  description: string;
  posture: string;
  custody: string;
  bestFor: string;
  caution: string;
  tags: string[];
  href: string;
};

const categories: DirectoryCategory[] = [
  "All",
  "P2P",
  "DEX",
  "Wallet",
  "Privacy tools",
];

const services: PrivacyService[] = [
  {
    name: "Bisq",
    category: "P2P",
    description:
      "An open-source, peer-to-peer Bitcoin trading network for users who want to compare offers without a traditional exchange account.",
    posture: "No central account by default",
    custody: "Non-custodial trade flow",
    bestFor: "Bitcoin-to-fiat and Bitcoin-to-crypto P2P",
    caution:
      "Liquidity, payment reversibility, dispute handling, and local rules still matter. Start with a small test trade.",
    tags: ["Bitcoin", "P2P", "Open source"],
    href: "https://bisq.network/",
  },
  {
    name: "RoboSats",
    category: "P2P",
    description:
      "A private, open-source Bitcoin P2P marketplace designed around temporary robot identities and escrow-based trades.",
    posture: "Temporary trading identity",
    custody: "Escrow during the trade",
    bestFor: "Small Bitcoin P2P purchases",
    caution:
      "Use the official site, understand payment-method chargeback risk, and never release a trade outside escrow.",
    tags: ["Bitcoin", "P2P", "Escrow"],
    href: "https://learn.robosats.org/",
  },
  {
    name: "Uniswap",
    category: "DEX",
    description:
      "A self-custody wallet and decentralized exchange ecosystem for on-chain token swaps without a traditional exchange account.",
    posture: "Wallet-based access",
    custody: "Self-custody",
    bestFor: "On-chain swaps for experienced users",
    caution:
      "Smart-contract risk, slippage, network fees, token scams, and irreversible transactions require careful review.",
    tags: ["DEX", "On-chain", "Self-custody"],
    href: "https://app.uniswap.org/",
  },
  {
    name: "Cake Wallet",
    category: "Wallet",
    description:
      "An open-source, non-custodial wallet focused on Bitcoin, Monero, and everyday self-custody workflows.",
    posture: "No exchange account required",
    custody: "Self-custody",
    bestFor: "Holding and managing supported assets",
    caution:
      "The recovery phrase is the security boundary. Verify downloads, back up offline, and test recovery before holding more.",
    tags: ["Wallet", "Monero", "Open source"],
    href: "https://cakewallet.com/",
  },
  {
    name: "Mullvad VPN",
    category: "Privacy tools",
    description:
      "A privacy-oriented network tool that can reduce exposure on untrusted networks; it does not make crypto activity anonymous.",
    posture: "Privacy utility",
    custody: "Not a financial service",
    bestFor: "Safer network use and compartmentalisation",
    caution:
      "A VPN does not override exchange eligibility, local law, account controls, blockchain transparency, or platform terms.",
    tags: ["Network", "Privacy", "Security"],
    href: "https://mullvad.net/",
  },
  {
    name: "Trezor",
    category: "Wallet",
    description:
      "A hardware-wallet ecosystem for keeping private keys separate from everyday devices and exchange balances.",
    posture: "No hosted account needed for self-custody",
    custody: "Self-custody",
    bestFor: "Long-term key separation",
    caution:
      "Buy through official channels, verify the device, and protect the recovery phrase from cameras, cloud storage, and other people.",
    tags: ["Hardware", "Wallet", "Self-custody"],
    href: "https://trezor.io/",
  },
];

const categoryDescriptions: Record<DirectoryCategory, string> = {
  All: "Every starter listing in the directory.",
  P2P: "Peer-to-peer marketplaces where payment and counterparty risk matter.",
  DEX: "On-chain trading interfaces that connect to a wallet instead of a conventional account.",
  Wallet: "Self-custody tools where the recovery phrase and device security are central.",
  "Privacy tools": "Network and privacy utilities that reduce exposure but do not erase financial or legal obligations.",
};

function matchesQuery(service: PrivacyService, query: string) {
  const haystack = [
    service.name,
    service.category,
    service.description,
    service.posture,
    service.custody,
    service.bestFor,
    service.caution,
    ...service.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

export default function PrivacyDirectory() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<DirectoryCategory>("All");
  const [selfCustodyOnly, setSelfCustodyOnly] = useState(false);

  const filteredServices = useMemo(
    () =>
      services.filter((service) => {
        const categoryMatches =
          selectedCategory === "All" || service.category === selectedCategory;
        const queryMatches = query.length === 0 || matchesQuery(service, query);
        const custodyMatches =
          !selfCustodyOnly || service.custody === "Self-custody";

        return categoryMatches && queryMatches && custodyMatches;
      }),
    [query, selectedCategory, selfCustodyOnly],
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <p className="mb-3 text-sm font-medium text-indigo-200">
              Privacy &amp; self-custody directory · Updated August 2026
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
              Explore privacy-focused crypto tools without confusing privacy for safety
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A careful starter directory for no-account P2P markets, DEXes,
              self-custody wallets, and privacy utilities. We show the privacy
              posture, custody model, and the risks to investigate before you
              use any service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#directory"
                className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Browse the directory
              </Link>
              <Link
                href="/methodology"
                className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                How we evaluate
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Identity is one lens
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  No KYC does not mean no logs, no limits, no counterparties,
                  and no legal obligations.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Keys change the risk
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Self-custody gives control and responsibility. A lost phrase
                  cannot be recovered by customer support.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Verify every link
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Use official domains, inspect policies, and test with small
                  amounts before trusting a service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">P2P</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Counterparty privacy
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A platform can reduce account data while the payment method,
                  trade partner, and dispute path remain important.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">DEX</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  On-chain transparency
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Wallet-based access can remove an account layer, but public
                  transactions, smart contracts, and scams remain visible risks.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">Wallets</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Fewer custodians
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keeping keys yourself reduces platform dependence but makes
                  backups, devices, and transaction approvals your responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="directory" className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Privacy directory
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Start with the model, not a score
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Browse {services.length} starter listings. This is a research
                index, not a ranking: privacy, custody, liquidity, compliance,
                and security can change by product and jurisdiction.
              </p>
            </div>
            <Link
              href="/exchanges/no-kyc"
              className="inline-flex w-fit rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Read the No-KYC guide →
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
              <div>
                <label
                  htmlFor="privacy-search"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Search services and attributes
                </label>
                <input
                  id="privacy-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try wallet, Bitcoin, P2P, self-custody..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <label className="flex cursor-pointer items-center gap-3 self-end rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={selfCustodyOnly}
                  onChange={(event) => setSelfCustodyOnly(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Self-custody only
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-200"
                    }`}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.name}
                className="flex min-h-[430px] flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {service.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {service.name}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                    Starter listing
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <dl className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-800">Privacy posture</dt>
                    <dd className="mt-1 text-slate-600">{service.posture}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-800">Custody model</dt>
                    <dd className="mt-1 text-slate-600">{service.custody}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-800">Best suited to</dt>
                    <dd className="mt-1 text-slate-600">{service.bestFor}</dd>
                  </div>
                </dl>

                <div className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">
                  <strong>Check first:</strong> {service.caution}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 text-sm font-semibold text-indigo-700 hover:underline"
                >
                  Visit official site ↗
                </a>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                No listings match those filters
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Try a broader search or clear the self-custody filter.
              </p>
            </div>
          )}
        </section>

        <section className="border-y bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  A safer workflow
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Privacy is a process, not a switch
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Before using any privacy-oriented tool, verify the official
                  domain, understand the custody model, test a small amount,
                  record the transaction, and check the rules that apply where
                  you live. A service can be privacy-oriented and still be
                  unsafe, unavailable, illiquid, or unsuitable for your task.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/learn/crypto-exchange-security-checklist"
                    className="text-sm font-semibold text-indigo-700 hover:underline"
                  >
                    Review the security checklist →
                  </Link>
                  <Link
                    href="/learn/seed-phrase-security"
                    className="text-sm font-semibold text-indigo-700 hover:underline"
                  >
                    Protect a seed phrase →
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["1", "Verify the domain", "Use bookmarks or links from official documentation."],
                  ["2", "Map the custody", "Know who can freeze, reverse, or recover funds."],
                  ["3", "Test the workflow", "Start small and confirm the receive address."],
                  ["4", "Keep records", "Save fees, dates, counterparties, and tax data."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-2xl font-bold text-slate-900">{number}</p>
                    <h3 className="mt-2 font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Frequently asked questions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What this directory does—and does not—mean
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does “no KYC” mean a service is anonymous?
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                No. Services may still collect device, network, payment, wallet,
                or transaction information. Public blockchains can also expose
                activity permanently.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are the listings ranked or endorsed?
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                No. The starter directory groups tools by model and highlights
                questions to investigate. It is not a guarantee of safety,
                legality, availability, or suitability.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Why include wallets and privacy tools with exchanges?
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Privacy is a workflow. The exchange, wallet, network, payment
                rail, and record-keeping choices can all change the information
                and risks involved.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                How should I evaluate a new listing?
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Start with the official domain and documentation, then check
                custody, support, fees, liquidity, security history, local rules,
                and whether you can exit safely.
              </p>
            </details>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> This directory is educational and is
              not financial, legal, tax, or security advice. Privacy-oriented
              tools can carry heightened scam, custody, liquidity, compliance,
              and operational risk. Verify current information with the
              provider and relevant authorities before using a service. Links
              may be affiliate links where disclosed elsewhere on the site.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
