import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

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

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>The fee nobody advertises: the spread</h2>
            <p>
              The single most important cost on most crypto cards is the conversion spread, and it is the one least likely to appear in marketing. When you spend crypto, the card program converts it to fiat at a rate it sets. The gap between the market rate and the rate you get is the spread, and it functions exactly like a fee on every transaction.
            </p>
            <p>
              A 1% spread on $2,000 of monthly spending costs you $20 a month, or $240 a year. That can easily wipe out a headline cashback rate. When comparing cards, the spread matters more than almost any advertised fee. The problem is that spreads are often buried in terms documents or described vaguely as "conversion at our current rate." If a card does not publish its spread clearly, treat that as information.
            </p>

            <h2>The full fee menu</h2>
            <h3>Issuance fees</h3>
            <p>
              What you pay to get the card. Virtual cards are often free or cheap ($0-$10). Physical cards typically cost $10-$50. Metal cards can cost $100 or more, sometimes bundled with a premium tier. This is a one-time cost, so it matters less than recurring fees unless you replace cards often.
            </p>
            <h3>Subscription or monthly fees</h3>
            <p>
              Some cards charge a monthly fee ($5-$30) for premium tiers with higher cashback or limits. Do the math: a $15/month fee needs $180/year in extra cashback just to break even versus the free tier. Subscriptions only make sense if your spending is high enough to clear that hurdle comfortably.
            </p>
            <h3>Foreign exchange fees</h3>
            <p>
              When you spend in a currency different from your card's base currency, an FX markup usually applies on top of the crypto conversion spread. This can be 0.5%-2%. If you travel frequently, a card with low or zero FX fees saves real money. Some cards advertise "no FX fees" but still apply a spread on the crypto conversion, so check both.
            </p>
            <h3>ATM fees and limits</h3>
            <p>
              Most cards include a free ATM allowance (commonly $200-$800/month depending on tier), then charge 1%-2% beyond it. The ATM operator's own surcharge is separate and unavoidable. If you regularly need cash, the free allowance size matters more than the headline cashback rate.
            </p>
            <h3>Top-up and deposit fees</h3>
            <p>
              Moving crypto onto the card can carry fees depending on the method. On-chain deposits may just cost network gas. Card or bank top-ups can carry 1%-3% processing fees. Some programs charge for converting between cryptocurrencies inside the wallet.
            </p>
            <h3>Token lockup opportunity cost</h3>
            <p>
              Several card programs offer higher cashback tiers if you lock (stake) their native token. This is not a fee exactly, but it has a real cost: your tokens are illiquid, exposed to price drops, and earning whatever staking yield applies instead of being deployed elsewhere. A "free" premium tier that requires a $4,000 token lockup is not free.
            </p>
            <h3>Inactivity and miscellaneous fees</h3>
            <p>
              Less common but worth checking: monthly inactivity fees on dormant accounts, card replacement fees, chargeback fees, and fees for paper statements or premium support. Read the full schedule, not just the summary.
            </p>

            <h2>How to compare the true cost</h2>
            <p>
              Ignore the marketing and build your own comparison for your usage:
            </p>
            <ol>
              <li><strong>Estimate your monthly card spending</strong> in fiat terms.</li>
              <li><strong>Find the conversion spread</strong> (ask support if it is not published; their answer tells you a lot).</li>
              <li><strong>Add subscription fees</strong> if you are considering a paid tier.</li>
              <li><strong>Add expected ATM costs</strong> based on your cash usage versus the free allowance.</li>
              <li><strong>Add FX costs</strong> if you spend in foreign currencies.</li>
              <li><strong>Subtract realistic cashback</strong> after caps, not the headline rate.</li>
            </ol>
            <p>
              The card with the lowest total is your answer, regardless of which one has the flashiest rewards page. Our <Link href={HUB_URL}>crypto cards directory</Link> and <Link href={`${HUB_URL}#calculator`}>cashback calculator</Link> can help with the comparison.
            </p>

            <h2>Red flags in fee marketing</h2>
            <ul>
              <li><strong>"Zero fees"</strong> without specifying which fees. Usually means zero issuance fee, with spreads and other charges intact.</li>
              <li><strong>Cashback rates without caps.</strong> A 5% rate capped at $10/month is worse than 1.5% uncapped for most spenders.</li>
              <li><strong>"Interbank rate" claims</strong> without specifying when the rate is locked. The rate at authorization vs settlement can differ.</li>
              <li><strong>Fee schedules that require login to view.</strong> Transparency should not need an account.</li>
            </ul>
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
