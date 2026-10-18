import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, StepList, BulletList, WarningList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/crypto-card-fees-explained`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "14 October 2026";
const UPDATED_ISO = "2026-10-14";

export const metadata: Metadata = {
  title: "Crypto Card Fees Explained: Spreads, FX, ATM & Hidden Costs",
  description:
    "Every fee a crypto card can charge in 2026: conversion spreads, foreign exchange, ATM fees, top-up costs, subscriptions, and how to compare the true cost.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Fees Explained | CryptosBeginner",
    description: "Spreads, FX fees, ATM charges, top-up costs, and the hidden fees crypto card marketing leaves out.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Card Fees Explained",
    description: "The true cost of crypto cards: every fee category, explained plainly.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What is a conversion spread on a crypto card?",
    answer:
      "The spread is the difference between the market price of your crypto and the price the card program gives you when converting to fiat. If Bitcoin trades at $100,000 but your card converts at $99,000, that 1% gap is the spread. It is often the largest hidden cost because it applies to every transaction and is rarely advertised as a fee.",
  },
  {
    question: "Are 'no fee' crypto cards really free?",
    answer:
      "Almost never in the full sense. A card advertising no annual fee or no issuance fee can still charge conversion spreads, foreign exchange markups, ATM fees, or require a token lockup that has an opportunity cost. Always read the complete fee schedule, not just the marketing headline.",
  },
  {
    question: "How do ATM fees work on crypto cards?",
    answer:
      "Most cards allow a certain amount of free ATM withdrawals per month (for example $200-$400), then charge a percentage (often 1-2%) on amounts above that. The ATM operator may add its own surcharge on top. Some cards also treat ATM withdrawals differently from purchases for cashback purposes.",
  },
  {
    question: "What is the cheapest way to use a crypto card?",
    answer:
      "Generally: hold stablecoins rather than volatile crypto for spending (avoids spread on volatile pairs), stay within free ATM limits, avoid foreign currency transactions when possible, and choose a card whose fee structure matches your actual usage pattern rather than the highest headline cashback rate.",
  },
];

export default function CryptoCardFeesGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Card Fees Explained: Spreads, FX, ATM & Hidden Costs",
            url: PAGE_URL,
            datePublished: UPDATED_ISO,
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
            publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-white text-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <nav className="text-sm text-slate-500">
            <Link href={HUB_URL} className="hover:text-fuchsia-700">Crypto Cards</Link>
            {" / "}
            <Link href={`${SITE_URL}/crypto-cards/guides`} className="hover:text-fuchsia-700">Guides</Link>
            {" / Crypto Card Fees Explained"}
          </nav>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Crypto Cards Guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Crypto Card Fees Explained</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The fee that matters most is the one nobody advertises. This guide covers every way a crypto card can cost you money.
          </p>

          <AuthorByline updated="14 October 2026" />

          <div className="mt-10">
            <GuideH2>The fee nobody advertises: the spread</GuideH2>
            <GuideP>
              The single most important cost on most crypto cards is the conversion spread, and it is the one least likely to appear in marketing. When you spend crypto, the card program converts it to fiat at a rate it sets. The gap between the market rate and the rate you get is the spread, and it functions exactly like a fee on every transaction.
            </GuideP>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-7" role="img" aria-label="Infographic: a 1 percent spread means 1 dollar lost on every 100 dollars spent">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-300">How the spread works</p>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm font-black">
                    <span className="text-slate-300">Market price of your crypto</span>
                    <span className="text-xl text-white">$100.00</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm font-black">
                    <span className="text-slate-300">Rate your card gives you</span>
                    <span className="text-xl text-white">$99.00</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[99%] rounded-full bg-cyan-400/60" />
                  </div>
                </div>
                <div className="rounded-xl border border-rose-400/40 bg-rose-500/15 p-4">
                  <p className="text-sm font-black text-rose-200">The $1.00 gap is the spread. You pay it on every purchase, and it never appears as a line item.</p>
                </div>
              </div>
            </div>

            <GuideP>
              A 1% spread on $2,000 of monthly spending costs you $20 a month, or $240 a year. That can easily wipe out a headline cashback rate. When comparing cards, the spread matters more than almost any advertised fee. The problem is that spreads are often buried in terms documents or described vaguely as "conversion at our current rate." If a card does not publish its spread clearly, treat that as information.
            </GuideP>

            <GuideH2>The full fee menu</GuideH2>
            <GuideP>Every way a crypto card can charge you, in one place:</GuideP>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Issuance fees", range: "$0-$100+", body: "What you pay to get the card. Virtual cards are often free or cheap ($0-$10). Physical cards typically cost $10-$50. Metal cards can cost $100 or more, sometimes bundled with a premium tier. One-time cost, so it matters less than recurring fees." },
                { title: "Subscription fees", range: "$5-$30/month", body: "Premium tiers with higher cashback or limits. Do the math: a $15/month fee needs $180/year in extra cashback just to break even versus the free tier. Only makes sense if your spending clears that hurdle comfortably." },
                { title: "Foreign exchange fees", range: "0.5%-2%", body: "Applied when you spend in a currency different from your card's base currency, on top of the crypto conversion spread. Some cards advertise 'no FX fees' but still apply a spread on the crypto conversion, so check both." },
                { title: "ATM fees and limits", range: "1%-2% after allowance", body: "Most cards include a free ATM allowance (commonly $200-$800/month), then charge 1%-2% beyond it. The ATM operator's own surcharge is separate. If you need cash regularly, the free allowance matters more than cashback." },
                { title: "Top-up and deposit fees", range: "0%-3%", body: "On-chain deposits may just cost network gas. Card or bank top-ups can carry 1%-3% processing fees. Some programs charge for converting between cryptocurrencies inside the wallet." },
                { title: "Token lockup cost", range: "Opportunity cost", body: "Higher cashback tiers may require locking the program's native token. Your tokens sit illiquid and exposed to price drops. A 'free' premium tier requiring a $4,000 token lockup is not free." },
              ].map((fee) => (
                <div key={fee.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-black text-slate-950">{fee.title}</p>
                    <span className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-800">{fee.range}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{fee.body}</p>
                </div>
              ))}
            </div>

            <Callout tone="amber" title="Often missed">
              Less common but worth checking: monthly inactivity fees on dormant accounts, card replacement fees, chargeback fees, and fees for paper statements or premium support. Read the full schedule, not just the summary.
            </Callout>

            <GuideH2>How to compare the true cost</GuideH2>
            <GuideP>Ignore the marketing and build your own comparison for your usage:</GuideP>
            <StepList steps={[
              { title: "Estimate your monthly card spending", body: "In fiat terms, based on your real habits." },
              { title: "Find the conversion spread", body: "Ask support if it is not published. Their answer tells you a lot." },
              { title: "Add subscription fees", body: "If you are considering a paid tier." },
              { title: "Add expected ATM costs", body: "Based on your cash usage versus the free allowance." },
              { title: "Add FX costs", body: "If you spend in foreign currencies." },
              { title: "Subtract realistic cashback", body: "After caps, not the headline rate." },
            ]} />
            <GuideP>
              The card with the lowest total is your answer, regardless of which one has the flashiest rewards page. Our <Link href={HUB_URL} className="font-black text-fuchsia-700 hover:text-fuchsia-900">crypto cards directory</Link> and <Link href={`${HUB_URL}#calculator`} className="font-black text-fuchsia-700 hover:text-fuchsia-900">cashback calculator</Link> can help with the comparison.
            </GuideP>

            <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-7" role="img" aria-label="Infographic: on 100 dollars of monthly spending, a 1 percent spread costs 12 dollars a year, a 2 percent FX fee on half your spending costs 12 dollars a year">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-indigo-700">Where the money goes</p>
              <p className="mt-2 text-lg font-black text-slate-950">What $100 of monthly spending really costs</p>
              <div className="mt-5 space-y-3">
                {[
                  { label: "1% spread on all $100", cost: "$12/year", width: "50%" },
                  { label: "2% FX fee on $50 of travel spending", cost: "$12/year", width: "50%" },
                  { label: "$15/month subscription, unrecovered", cost: "$180/year", width: "100%" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">{row.label}</span>
                      <span className="font-black text-slate-950">{row.cost}</span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white">
                      <div className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500" style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Illustrative figures. Your costs depend on your card's actual schedule and your spending mix.</p>
            </div>

            <GuideH2>Red flags in fee marketing</GuideH2>
            <WarningList items={[
              { title: '"Zero fees" without specifying which fees', body: "Usually means zero issuance fee, with spreads and other charges intact." },
              { title: "Cashback rates without caps", body: "A 5% rate capped at $10/month is worse than 1.5% uncapped for most spenders." },
              { title: '"Interbank rate" claims without timing', body: "The rate at authorization vs settlement can differ. Ask when the rate is locked." },
              { title: "Fee schedules that require login to view", body: "Transparency should not need an account." },
            ]} />
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-4 divide-y divide-slate-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="mt-8 text-xs text-slate-500">
            Last updated {UPDATED}. Educational content only, not financial advice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
