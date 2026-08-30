import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/meme-coins`;

export const metadata: Metadata = {
  title: "Meme Coin Research for Beginners: Tools, Risks and Workflows",
  description:
    "Learn how to research meme coins before trading. Understand token contracts, liquidity, holders, wallet activity, trading terminals, launchpads, slippage, and common risk checks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Meme Coin Research for Beginners: Tools, Risks and Workflows",
    description:
      "A practical beginner guide to meme-coin research, including contracts, liquidity, holder concentration, wallet activity, trading tools, and risk checks.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/meme-coins-hero.png`,
        width: 1600,
        height: 900,
        alt: "Meme coin research tools and on-chain trading workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Coin Research for Beginners",
    description:
      "Learn a research-first meme-coin workflow before connecting a wallet or trading.",
    images: [`${SITE_URL}/images/meme-coins-hero.png`],
  },
};

const researchSteps = [
  {
    number: "01",
    title: "Find the exact contract",
    description:
      "Do not rely on a ticker, logo, or social-media post. Confirm the exact token contract from a primary project source, then compare it with the address shown in your trading or charting tool.",
  },
  {
    number: "02",
    title: "Check liquidity and exit conditions",
    description:
      "Look beyond the displayed market cap. Review available liquidity, recent swaps, price impact, route quality, and how a small trade size could affect an eventual exit.",
  },
  {
    number: "03",
    title: "Inspect holders and wallet activity",
    description:
      "Review holder concentration, creator or deployer-linked wallets, early-wallet behavior, large transfers, and recent selling. A single wallet label or public P&L figure is not a recommendation.",
  },
  {
    number: "04",
    title: "Review token and contract risk",
    description:
      "Check available transfer controls, authority settings, sellability, token age, pool context, and any security fields. A pass on one check does not prove a token is safe.",
  },
  {
    number: "05",
    title: "Decide risk before execution",
    description:
      "Set a maximum loss, position size, invalidation point, and exit plan before a transaction. A terminal can make execution faster, but it cannot remove market or smart-contract risk.",
  },
];

const toolCategories = [
  {
    title: "Trading terminals",
    description:
      "Trading terminals combine discovery, charts, wallet tracking, holder data, alerts, and execution controls. Use them to organize research, not as token-safety scanners.",
    examples: "Examples: GMGN, Axiom, Padre",
  },
  {
    title: "Social discovery tools",
    description:
      "Social feeds, trader profiles, leaderboards, and alerts can surface ideas. Treat activity and displayed P&L as research context because timing, liquidity, and incentives may not be visible.",
    examples: "Example: FOMO",
  },
  {
    title: "Launchpads",
    description:
      "Launchpads reduce the technical steps required to create or discover tokens. Permissionless creation does not prove that a token has a credible team, durable liquidity, or a viable market.",
    examples: "Examples: Pump.fun, Bags.fm, Four.meme, SunPump",
  },
  {
    title: "Charts and explorers",
    description:
      "Charts and blockchain explorers help you validate addresses, inspect transactions, review liquidity, and understand activity independently from a social feed or terminal interface.",
    examples: "Examples: DexScreener, Solscan and chain-native explorers",
  },
];

const redFlags = [
  "You cannot independently confirm the exact token contract.",
  "Liquidity appears too shallow for the position size you are considering.",
  "A small group of wallets controls a large share of the supply.",
  "The creator, deployer, or early wallets show repeated rapid selling.",
  "The trade depends mainly on urgency, a leaderboard, or a social-media claim.",
  "You do not understand the route, slippage, token approval, or wallet prompt.",
  "You have no realistic exit condition if the idea is wrong.",
];

const faqItems = [
  {
    question: "Are meme-coin trading terminals safe?",
    answer:
      "A terminal can make research and execution more convenient, but it cannot independently prove that a token is legitimate, liquid, or sellable. Wallet security, contract risk, price impact, and market risk remain your responsibility.",
  },
  {
    question: "What should I check before buying a meme coin?",
    answer:
      "At minimum, confirm the exact contract address, check liquidity and likely price impact, inspect holder concentration and wallet activity, review sellability and token controls, then decide your position size and exit condition before signing.",
  },
  {
    question: "Can Smart Money or wallet labels predict a trade?",
    answer:
      "No. A label, visible wallet trade, or positive P&L is historical context. It may not show funding sources, unrealized positions, timing, liquidity constraints, transfers, selection bias, or whether you can reproduce the entry and exit.",
  },
  {
    question: "Is a low trading fee the full cost of a meme-coin trade?",
    answer:
      "No. The total cost can include a platform fee, network fee, priority fee, optional tip, spread, price impact, slippage, and token-specific restrictions. Check the transaction preview before signing.",
  },
];

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

export default function MemeCoinsPage() {
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
          name: "Meme Coins",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Meme Coin Research for Beginners: Tools, Risks and Workflows",
      description:
        "A practical beginner guide to researching meme coins before connecting a wallet or trading.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": PAGE_URL,
      },
      author: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      image: `${SITE_URL}/images/meme-coins-hero.png`,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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

      <main className="min-w-0 overflow-x-hidden bg-slate-50 text-slate-950">
        <section className="border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                Meme coins · Beginner research hub
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                Research Meme Coins Before You Trade Them
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Meme-coin tools can make discovery and execution faster. They
                cannot prove that a token is legitimate, liquid, sellable, or
                suitable for your risk tolerance. Start with a repeatable
                research process before you connect a wallet or sign a trade.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#research-workflow"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Start the research workflow
                </a>

                <a
                  href="#tools"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  Understand the tools
                </a>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
                Educational content only. Meme coins are highly speculative and
                can lose value rapidly. This page does not provide token picks,
                trading signals, or profit promises.
              </p>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <Image
                src="/images/meme-coins-hero.png"
                alt="Meme coin research workspace with charts, token data, wallet activity and trading tools"
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />

              <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-slate-300">
                Research tools can help organize market information. They do
                not replace contract checks, liquidity analysis, or a risk plan.
              </figcaption>
            </figure>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
              Start with the job
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              A terminal, launchpad, chart, and explorer do different things
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-800">
              Most beginner mistakes start with using the wrong tool for the
              wrong question. A trading terminal may help you monitor and route
              a transaction. A launchpad may help create or discover a token.
              A charting tool or blockchain explorer can help verify activity.
              None of these tools independently validates a meme coin.
            </p>
          </div>

          <div
            id="tools"
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            {toolCategories.map((tool) => (
              <article
                key={tool.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {tool.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-800">
                  {tool.description}
                </p>

                <p className="mt-4 text-sm font-bold text-emerald-800">
                  {tool.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="border-y border-slate-200 bg-white">
          <Section>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
                <Image
                  src="/images/meme-coin-tools-collage.png"
                  alt="Collage of meme coin research tools including charts, wallet tracking, launchpads and token information"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                />

                <figcaption className="border-t border-slate-800 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-300">
                  Use multiple independent sources when researching a token.
                  A single dashboard, post, or label can leave out critical
                  context.
                </figcaption>
              </figure>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
                  Build a process
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Tools help with research. They do not create certainty.
                </h2>

                <p className="mt-4 leading-8 text-slate-800">
                  A token can appear on a trending page, show strong volume, or
                  have visible wallet buys while still having shallow liquidity,
                  concentrated supply, misleading social activity, transfer
                  restrictions, or a poor exit route. Use tools to ask better
                  questions rather than to outsource the decision.
                </p>

                <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-900">
                    A useful beginner rule
                  </p>

                  <p className="mt-3 leading-7 text-slate-900">
                    If you cannot explain what the token is, identify its exact
                    contract, assess where liquidity sits, and describe how you
                    would exit, the lower-risk choice is to skip it.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </section>

        <Section>
          <div id="research-workflow" className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
              Research workflow
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Five checks before you use a meme-coin tool to trade
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-800">
              The aim is not a perfect prediction. The aim is to reduce avoidable
              mistakes, understand what a tool is showing you, and decide what
              would make you walk away.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {researchSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black tracking-[0.16em] text-emerald-700">
                  {step.number}
                </p>

                <h3 className="mt-3 text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-800">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="border-y border-slate-200 bg-rose-50">
          <Section>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-rose-700">
                  Reasons to pause
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Red flags that deserve more research or no trade
                </h2>

                <p className="mt-4 leading-8 text-slate-800">
                  These signals do not automatically prove fraud. They do mean
                  you should slow down, verify more information, use less
                  exposure, or avoid the trade altogether.
                </p>
              </div>

              <ul className="grid gap-3">
                {redFlags.map((flag) => (
                  <li
                    key={flag}
                    className="rounded-xl border border-rose-200 bg-white px-5 py-4 leading-7 text-slate-800 shadow-sm"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </section>

        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Meme-coin research questions
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {item.question}
                </h3>

                <p className="mt-3 leading-8 text-slate-800">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="border-t border-slate-200 bg-slate-950 text-white">
          <Section>
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">
                More guides are being rebuilt
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Learn the workflow before you connect a wallet
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-200">
                This meme-coin research hub is being rebuilt into a practical
                library of platform walkthroughs, token-verification checklists,
                wallet-research guides, and execution-risk explainers. Until
                those resources are published, use the steps above as a baseline
                and independently verify every transaction.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/learn/gmgn-ai-agent"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Read the GMGN AI Agent guide
                </Link>

                <Link
                  href="/disclaimer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  Read the disclaimer
                </Link>
              </div>
            </div>
          </Section>
        </section>
      </main>

      <Footer />
    </>
  );
}