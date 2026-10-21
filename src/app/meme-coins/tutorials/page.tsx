import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/meme-coins/tutorials`;
const UPDATED = "21 October 2026";
const UPDATED_ISO = "2026-10-21";

export const metadata: Metadata = {
  title: "Meme Coin Tutorials: Rug Checks & Research Workflows | CryptosBeginner",
  description:
    "Step-by-step meme coin tutorials for beginners: how to rug check a Pump.fun coin for free, research wallets with GMGN, and verify tokens before you trade.",
  authors: [{ name: "CryptosBeginner editorial team" }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Meme Coin Tutorials: Rug Checks & Research Workflows",
    description:
      "Practical, free meme-coin tutorials: rug checks, wallet research, and contract verification, with the risks explained plainly.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Coin Tutorials: Rug Checks & Research Workflows",
    description:
      "How to rug check a Pump.fun coin for free, plus wallet and token research workflows for beginners.",
  },
};

const rugCheckSteps = [
  {
    number: "01",
    title: "Start with the contract address, never the ticker",
    body: "Copy the token's contract address from the project's official channel and paste that exact address into every tool below. Never search by ticker alone. Copycat tokens reuse names, tickers, and logos, and the chart that looks right can belong to a completely different contract. If you cannot confirm the address from two independent sources, stop here.",
  },
  {
    number: "02",
    title: "Check the creator's history",
    body: "A developer's past launches are the closest thing meme coins have to a track record. Tools such as TraceHound pull up a creator's earlier tokens and show whether the dev sold into their own launches. A clean history does not make the new coin safe, but a creator who has already rugged several launches is telling you exactly what to expect from the next one.",
  },
  {
    number: "03",
    title: "Look at bundles and the first blocks",
    body: "Bundled buys are coordinated purchases that land in the same block or the first few slots of a launch, often from wallets the dev funded in advance. Trench Radar at trench.bot shows which wallets bought together at launch and how much of the supply they hold between them. When a handful of bundled wallets controls a big share of supply, that supply can be dumped in a single move, and usually is.",
  },
  {
    number: "04",
    title: "Get a risk score from a scanner",
    body: "Scanner tools compress several contract and trading checks into a single score. Examples include MemeAssist, BunnyMaps, PumpLens, which publishes a rug score from 0 to 100, and Mad Rugscape, which runs multiple checking engines over the same token. Treat any score as a summary of the checks behind it, not a verdict. Scanners disagree with each other often, and a strong score has never stopped a determined dev.",
  },
  {
    number: "05",
    title: "Track smart money, or skip the trade entirely",
    body: "If the earlier checks pass, tracking tools can show whether experienced wallets are buying, holding, or quietly leaving. Watch what they do rather than what promoters say. And if anything looked off at any earlier step, the correct move is to skip the trade entirely. There is always another launch, and walking away costs nothing.",
  },
];

export default function MemeCoinTutorialsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Meme Coin Research",
          item: `${SITE_URL}/meme-coins`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Meme Coin Tutorials",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Rug Check a Pump.fun Coin for Free",
      description:
        "A five-step rug check for Pump.fun launches using free tools: verify the contract, check the creator's history, inspect bundles, run a scanner, and decide whether to skip.",
      url: PAGE_URL,
      dateModified: UPDATED_ISO,
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
              Meme coins · Tutorials · Updated {UPDATED}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Meme Coin Tutorials for Beginners
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800">
              Practical guides covering token research, wallet safety, on-chain
              data, trading tools, liquidity, execution settings, and common
              mistakes in highly speculative meme-coin markets.
            </p>

            <div className="mt-6 max-w-2xl">
              <AuthorByline updated={UPDATED} />
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              Educational content only. Meme coins are highly speculative and
              most go to zero. These tutorials teach research habits, not
              trading signals, and nothing here is financial advice.
            </p>
          </div>

          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
              Featured tutorial
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              How to rug check a Pump.fun coin for free
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-800">
              Most Pump.fun launches are dead within the hour, and a share of
              them are designed to be. The good news is that the warning signs
              are usually visible before you buy, if you know where to look.
              This check takes a few minutes, uses free tools only, and works
              in layers: each step can end the process on its own.
            </p>

            <ol className="mt-10 space-y-6">
              {rugCheckSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-[auto_1fr]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black tracking-wider text-emerald-300">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-700">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-xl font-black text-rose-950">
                A clean check is not a safe coin
              </h3>

              <p className="mt-3 leading-8 text-slate-800">
                These layers catch known patterns: bundled supply, serial
                devs, dangerous contract settings, and coordinated early
                buyers. They cannot catch a developer who simply decides to
                sell tomorrow, a promoter who dumps on their own followers, or
                liquidity that vanishes when you try to exit. Run the check to
                filter out the obvious traps, then size any trade as if it
                could still go to zero, because it can.
              </p>
            </div>

            <p className="mt-8 leading-8 text-slate-800">
              Think of these tools as research layers. They tell you what is
              known about a token before you buy. The actual trade, if you
              make one, happens on your trading terminal of choice, and
              skipping the coin is a complete and valid outcome of this
              process. On most launches, it is the right one. For the wider
              process around this check, see the{" "}
              <Link
                href="/meme-coins"
                className="font-bold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900"
              >
                meme-coin research hub
              </Link>{" "}
              and our{" "}
              <Link
                href="/tools/token-safety-checker"
                className="font-bold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900"
              >
                free token safety checker
              </Link>
              , which adds contract-level flags such as honeypots and mint
              functions.
            </p>

            <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
              Workflow adapted from a community tutorial by @TheMaran (Oct
              2026), tools verified as listed.
            </p>
          </article>

          <section className="mt-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              More tutorials
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/learn/gmgn-ai-agent"
                className="block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-300 hover:shadow"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                  Wallet and token research
                </p>

                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">
                  GMGN AI Agent tutorial
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  How GMGN Skills and the Agent API work, how read-only query
                  access differs from signed trading access, and how to
                  research tokens and wallets without handing an AI control of
                  your funds.
                </p>

                <span className="mt-4 inline-flex font-bold text-emerald-700">
                  Read the tutorial →
                </span>
              </Link>

              <Link
                href="/meme-coin-research"
                className="block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-300 hover:shadow"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                  Checklist
                </p>

                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">
                  Meme-coin research checklist
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  The printable companion to the rug check above: liquidity,
                  holder concentration, contract permissions, and public-wallet
                  context, in the order to work through them.
                </p>

                <span className="mt-4 inline-flex font-bold text-emerald-700">
                  Open the checklist →
                </span>
              </Link>
            </div>
          </section>

          <Link
            href="/meme-coins"
            className="mt-10 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-emerald-700"
          >
            Back to Meme Coin Research →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
