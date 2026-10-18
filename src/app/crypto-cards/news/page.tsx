import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CARD_NEWS, type CardNewsEntry } from "../card-news";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/news`;
const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";

export const metadata: Metadata = {
  title: "Crypto Card News & Offers Tracker | CryptosBeginner",
  description:
    "The latest fee changes, promos, launches and catalog updates for crypto spending cards, with full terms and sources. Updated as changes are verified.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card News & Offers Tracker",
    description:
      "Fee changes, promos, launches and catalog updates for crypto cards, with sources. Updated as changes are verified.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Card News & Offers Tracker",
    description:
      "Fee changes, promos, launches and catalog updates for crypto cards, with sources.",
  },
  robots: { index: true, follow: true },
};

const TYPE_LABELS: Record<CardNewsEntry["type"], string> = {
  "fee-change": "Fee change",
  promo: "Promo",
  launch: "Launch",
  "catalog-update": "Catalog update",
  market: "Market",
};

const TYPE_STYLES: Record<CardNewsEntry["type"], string> = {
  "fee-change": "bg-amber-100 text-amber-800 border-amber-200",
  promo: "bg-emerald-100 text-emerald-800 border-emerald-200",
  launch: "bg-cyan-100 text-cyan-800 border-cyan-200",
  "catalog-update": "bg-indigo-100 text-indigo-800 border-indigo-200",
  market: "bg-slate-100 text-slate-700 border-slate-200",
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

export default function CardNewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#webpage`,
            name: "Crypto Card News & Offers Tracker",
            url: PAGE_URL,
            description:
              "Fee changes, promos, launches and catalog updates for crypto spending cards, with sources.",
            datePublished: "2026-10-18",
            dateModified: UPDATED_ISO,
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="relative overflow-hidden bg-[#0b0820] text-white">
          <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link href="/crypto-cards" className="text-sm font-black text-cyan-200 hover:text-white">
              ← Back to Crypto Cards directory
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Card news & offers
            </p>
            <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">
              What changed, when, and where the terms are
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Fee changes, promos, launches, and our own catalog updates, in one dated feed.
              Every entry names its source. Nothing here is a recommendation; provider terms
              are the final word.
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-400">
              Last updated {UPDATED}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {CARD_NEWS.map((entry) => (
              <article
                key={`${entry.date}-${entry.title}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] ${TYPE_STYLES[entry.type]}`}
                  >
                    {TYPE_LABELS[entry.type]}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {formatDate(entry.date)}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-black tracking-[-0.02em]">
                  {entry.cardSlug ? (
                    <Link
                      href={`/crypto-cards/${entry.cardSlug}`}
                      className="hover:text-fuchsia-700"
                    >
                      {entry.title}
                    </Link>
                  ) : (
                    entry.title
                  )}
                </h2>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                  {entry.cardName}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{entry.details}</p>
                {entry.sourceLabel && (
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    <strong className="text-slate-500">Source:</strong> {entry.sourceLabel}
                    {entry.sourceUrl && (
                      <>
                        {" "}
                        <a
                          href={entry.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-black text-fuchsia-700 hover:text-fuchsia-900"
                        >
                          Open ↗
                        </a>
                      </>
                    )}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-lg font-black">Spotted a change we missed?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We update this feed as fee changes and promos are verified against official
              sources. If a card changed its terms, the fastest way to get it checked is
              through the card's official fee page.
            </p>
            <Link
              href="/crypto-cards"
              className="mt-4 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-500"
            >
              Browse the card directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
