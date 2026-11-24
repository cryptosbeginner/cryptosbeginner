import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/tutorials`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: "Crypto Card Tutorials: Learn How Crypto Cards Really Work, Step by Step",
  description:
    "A step by step curriculum on crypto cards: how they work, the five layers behind every stablecoin card program, who issues your card, the fees, the real cashback, the risks and the taxes. Free lessons from the CryptosBeginner card directory team.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Tutorials | CryptosBeginner",
    description: "Nine lessons, in order, from your first top-up to what happens when a card shuts down.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Crypto Card Tutorials",
    description: "Learn how crypto cards really work: the stack, the issuers, the fees, the real cashback, the risks.",
  },
  robots: { index: true, follow: true },
};

const lessons = [
  {
    n: 1,
    href: "/crypto-cards/guides/how-crypto-cards-work",
    title: "How Crypto Cards Work",
    description:
      "Start here. Top-ups, spending and settlement explained in plain language: what happens between loading crypto onto a card and the merchant getting paid.",
    readTime: "8 min read",
  },
  {
    n: 2,
    href: "/crypto-cards/guides/how-stablecoin-card-programs-work",
    title: "How a Stablecoin Card Program Actually Works",
    description:
      "The industry view: the five layers behind every program, what each layer earns, why cashback pays more than the card makes, and what it costs to launch one. Built on PaymentScan's launch research.",
    readTime: "12 min read",
  },
  {
    n: 3,
    href: "/crypto-cards/guides/crypto-card-bin-by-bin",
    title: "Who Issues Your Crypto Card, BIN by BIN",
    description:
      "The brand on the card is rarely the company behind it. How to find your real issuer, and the map of which platform sits behind the major programs.",
    readTime: "9 min read",
  },
  {
    n: 4,
    href: "/crypto-cards/guides/crypto-card-fees-explained",
    title: "Crypto Card Fees Explained",
    description:
      "Spreads, FX markups, ATM charges and the hidden costs that never make the landing page, with the fee types to check before you top up.",
    readTime: "9 min read",
  },
  {
    n: 5,
    href: "/crypto-cards/guides/real-cashback-after-fx",
    title: "The Cashback That Actually Reaches You",
    description:
      "Headline cashback minus FX fees and caps: what $1,000 of foreign spending really earns on six well known cards.",
    readTime: "9 min read",
  },
  {
    n: 6,
    href: "/crypto-cards/guides/cashback-ad-vs-reality",
    title: "Cashback: Advertised vs Reality",
    description:
      "The traps behind the headline rates at $1,000 a month of spending: caps, tiers, token payouts and the exclusions in the small print.",
    readTime: "8 min read",
  },
  {
    n: 7,
    href: "/crypto-cards/guides/crypto-card-security-incidents",
    title: "Crypto Card Security Incidents",
    description:
      "The documented breaches and exploits at card programs so far, and what each one teaches about custody and where your money actually sits.",
    readTime: "10 min read",
  },
  {
    n: 8,
    href: "/crypto-cards/guides/what-happens-if-your-card-shuts-down",
    title: "What Happens If Your Card Shuts Down",
    description:
      "Programs close. What happens to your balance, your pending cashback and your rights, and the steps to take the day it happens to your card.",
    readTime: "8 min read",
  },
  {
    n: 9,
    href: "/crypto-cards/guides/crypto-cards-and-taxes",
    title: "Crypto Cards and Taxes",
    description:
      "Spending crypto is a taxable event in most places. What using a crypto card really costs you at tax time, and the records to keep.",
    readTime: "9 min read",
  },
];

export default function CryptoCardTutorialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Crypto Card Tutorials",
            url: PAGE_URL,
            description: "A step by step curriculum on how crypto cards really work.",
            hasPart: lessons.map((l) => ({
              "@type": "Article",
              name: l.title,
              url: `${SITE_URL}${l.href}`,
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Tutorials"}
            </nav>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-amber-300">Learn, step by step</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Crypto Card Tutorials</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Nine lessons in the order we would teach them: how a card works, the industry stack behind it, who really issues it, what it costs, what the cashback is really worth, and what to do when things go wrong.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/crypto-cards/guides/how-stablecoin-card-programs-work"
            className="group mb-10 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-2"
          >
            <img
              src="/images/cards/guides/program-stack.png"
              alt="Diagram of the five layers of a stablecoin card program: the brand, custody, the processor, the issuer and the network"
              className="h-full w-full object-cover"
            />
            <div className="p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-600">New lesson · Start with lesson 2 if you already hold a card</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight group-hover:text-amber-700">
                How a Stablecoin Card Program Actually Works
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Five layers sit between your tap and your coins, and the brand on the card is only one of them. What each layer does, what each one earns from your spending, why cashback pays out more than the card makes, and what it really costs to launch a program, from PaymentScan's industry research and our own issuer data.
              </p>
              <p className="mt-5 text-sm font-black text-amber-700">Read the lesson →</p>
            </div>
          </Link>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.n}
                href={lesson.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {lesson.n}
                  </span>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{lesson.readTime}</p>
                </div>
                <h2 className="mt-4 text-2xl font-black tracking-tight group-hover:text-amber-700">{lesson.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{lesson.description}</p>
                <p className="mt-5 text-sm font-black text-amber-700">Read lesson {lesson.n} →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-2xl font-black">Finished the lessons? Put them to work.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Browse the directory of 219 cards with issuers, fees and custody models side by side, follow the monthly spending tracker, or read the individual guides and comparisons.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={HUB_URL}
                className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Browse all cards
              </Link>
              <Link
                href="/crypto-cards/spending"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
              >
                Monthly spending tracker
              </Link>
              <Link
                href="/crypto-cards/guides"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
              >
                All card guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
