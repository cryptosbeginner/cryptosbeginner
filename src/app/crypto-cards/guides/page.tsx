import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: "Crypto Card Guides: How They Work, Fees & Taxes",
  description:
    "Practical guides to crypto cards: how they work, every fee explained, and the tax implications of spending crypto. Plain language, no hype.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Guides | CryptosBeginner",
    description: "How crypto cards work, what they really cost, and what spending crypto means for your taxes.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const guides = [
  {
    slug: "how-crypto-cards-work",
    title: "How Crypto Cards Work",
    description:
      "Top-up vs direct spend, stablecoin settlement, what happens when you tap to pay, and how crypto cards differ from regular debit cards.",
    readTime: "8 min read",
  },
  {
    slug: "crypto-card-fees-explained",
    title: "Crypto Card Fees Explained",
    description:
      "Every fee a crypto card can charge: conversion spreads, FX markups, ATM fees, top-up costs, subscriptions, and how to compare the true cost.",
    readTime: "10 min read",
  },
  {
    slug: "crypto-cards-and-taxes",
    title: "Crypto Cards and Taxes",
    description:
      "Why spending crypto can trigger tax in many countries, record-keeping basics, stablecoin nuances, and when to talk to a professional.",
    readTime: "9 min read",
  },
  {
    slug: "plasma-one-vs-tria",
    title: "Plasma One vs Tria",
    description:
      "Two self-custodial Visa cards on Rain infrastructure compared: cashback tiers, FX fees, and app features side by side.",
    readTime: "7 min read",
  },
];

export default function CryptoCardGuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Crypto Card Guides",
            url: PAGE_URL,
            description: "Practical guides to understanding crypto cards.",
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Guides"}
            </nav>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-200">Learn</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Crypto Card Guides</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Plain-language guides to how crypto cards work, what they really cost, and what spending crypto means for your taxes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/crypto-cards/guides/${guide.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">{guide.readTime}</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight group-hover:text-fuchsia-700">{guide.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
                <p className="mt-5 text-sm font-black text-fuchsia-700">Read the guide →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-2xl font-black">Ready to compare cards?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Browse the full directory with filters for region, network, cashback, and card type, or try the card finder quiz.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={HUB_URL}
                className="rounded-xl bg-fuchsia-600 px-6 py-3 text-sm font-black text-white hover:bg-fuchsia-700"
              >
                Browse all cards
              </Link>
              <Link
                href={`${HUB_URL}/finder`}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
              >
                Take the card finder quiz
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
