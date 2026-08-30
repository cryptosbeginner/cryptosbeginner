import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meme Coin Research Guide: Wallets, Liquidity & Smart Money",
  description:
    "A practical meme coin research guide for checking liquidity, holder concentration, wallets, token risk, and smart-money activity before you trade.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/meme-coins",
  },
  openGraph: {
    title: "Meme Coin Research Guide: Wallets, Liquidity & Smart Money",
    description:
      "Use this practical framework to research meme coins, monitor wallet activity, check liquidity, and manage risk before you trade.",
    url: "https://www.cryptosbeginner.com/meme-coins",
    siteName: "Cryptos Beginner",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Coin Research Guide: Wallets, Liquidity & Smart Money",
    description:
      "A practical framework for researching meme coins before you trade.",
  },
};

const faqItems = [
  {
    question: "What should I check before buying a meme coin?",
    answer:
      "Start with liquidity, holder concentration, recent wallet activity, the token contract, and whether the narrative is gaining or losing attention. Decide your maximum loss and profit-taking plan before entering.",
  },
  {
    question: "How do I spot a risky meme coin?",
    answer:
      "Common warning signs include shallow liquidity, a very concentrated top-holder list, unusual deployer wallet activity, sudden volume without a clear catalyst, and token permissions that can alter supply or trading behavior.",
  },
  {
    question: "Can smart-money tracking guarantee profitable trades?",
    answer:
      "No. Wallet activity is context, not a guarantee. A wallet may be hedging, testing liquidity, exiting gradually, or taking a high-risk position that does not suit your risk tolerance.",
  },
];

const researchSteps = [
  {
    number: "01",
    title: "Map the narrative",
    description:
      "Write down what is driving attention: a launch, a cultural moment, a chain rotation, a listing rumor, or a visible community. Ask whether the narrative is early, active, or already overcrowded.",
  },
  {
    number: "02",
    title: "Verify the token",
    description:
      "Confirm the contract address from trusted sources. Check the chain, token name, ticker, supply, and whether similar lookalike contracts exist.",
  },
  {
    number: "03",
    title: "Inspect liquidity",
    description:
      "Look at pool depth, trading volume, liquidity changes, and likely slippage at your intended size. A token can show a large market cap but still be difficult to exit.",
  },
  {
    number: "04",
    title: "Study holders and wallets",
    description:
      "Review top-holder concentration, deployer history, early buyer behavior, and transfers between related wallets. Concentration can magnify both upside and downside.",
  },
  {
    number: "05",
    title: "Plan the trade",
    description:
      "Set a small position size, invalidation point, and staged exit plan before buying. Do not make the risk decision after price moves against you.",
  },
];

const toolCards = [
  {
    title: "GMGN",
    text: "Research token flows, monitor notable wallets, and compare holder and trader behavior.",
    href: "/learn/gmgn-ai-agent",
    label: "Read the GMGN guide",
    external: false,
  },
  {
    title: "Solscan",
    text: "Inspect Solana token transfers, wallet histories, and transaction-level activity.",
    href: "https://solscan.io",
    label: "Open Solscan",
    external: true,
  },
  {
    title: "DexScreener",
    text: "Review pairs, liquidity, price action, volume, and DEX trading activity across chains.",
    href: "https://dexscreener.com",
    label: "Open DexScreener",
    external: true,
  },
  {
    title: "Wallet tracker",
    text: "Keep a record of your entries, exits, position sizing, and PnL so you can improve your process.",
    href: "/wallet-tracker",
    label: "Open wallet tracker",
    external: false,
  },
];

const learningCards = [
  {
    eyebrow: "Tutorial",
    title: "GMGN AI Agent Guide",
    text: "Learn how to use GMGN for token research, wallet monitoring, and smart-money workflow ideas.",
    href: "/learn/gmgn-ai-agent",
    label: "Read the GMGN tutorial",
  },
  {
    eyebrow: "Learning hub",
    title: "Crypto Guides for Beginners",
    text: "Explore beginner-friendly guides on crypto basics, research tools, trading workflows, and safer decision-making.",
    href: "/learn",
    label: "Browse all guides",
  },
  {
    eyebrow: "Tool",
    title: "Wallet Tracker",
    text: "Record entries, exits, allocations, and PnL so you can review your process instead of relying on memory.",
    href: "/wallet-tracker",
    label: "Open wallet tracker",
  },
];

function ToolLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function MemeCoinsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Meme Coin Research Guide: Wallets, Liquidity & Smart Money",
    description:
      "A practical framework for researching meme coins, checking liquidity, reviewing wallets, and managing risk.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cryptosbeginner.com/meme-coins",
    },
    author: {
      "@type": "Organization",
      name: "Cryptos Beginner",
    },
    publisher: {
      "@type": "Organization",
      name: "Cryptos Beginner",
    },
  };

  const faqJsonLd = {
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
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="transition hover:text-slate-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-200">Meme Coins</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Learn · Meme Coin Research
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Research Meme Coins Before You Trade
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            A practical, repeatable framework for checking liquidity, wallet
            behavior, token risk, and market narratives before you risk capital
            on a fast-moving meme coin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#research-framework"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start the research checklist
            </a>

            <Link
              href="/wallet-tracker"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Track your trades
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold text-cyan-300">Liquidity</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Check whether you can realistically exit at your intended position
              size, not only whether a chart looks attractive.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold text-cyan-300">Wallet flows</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Look for concentration, early entries, transfers, and selling
              behavior—not just one visible wallet buy.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold text-cyan-300">Risk plan</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Decide position size, invalidation, and profit-taking rules before
              volatility forces an emotional decision.
            </p>
          </article>
        </div>
      </section>

      <section
        id="research-framework"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              The framework
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Five checks before any entry
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300">
              You do not need a perfect prediction. You need a process that
              helps you recognize weak setups, control downside, and avoid
              buying blindly into a move.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {researchSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 sm:p-6"
              >
                <p className="text-sm font-bold text-cyan-300">{step.number}</p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Research tools
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Use the right tool for each question
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            No single dashboard tells the full story. Cross-check token details,
            liquidity, trades, and wallets before acting.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {toolCards.map((tool) => (
            <article
              key={tool.title}
              className="flex min-w-0 flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
            >
              <h3 className="text-xl font-semibold text-white">{tool.title}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                {tool.text}
              </p>

              <div className="mt-5">
                <ToolLink href={tool.href} external={tool.external}>
                  {tool.label}
                </ToolLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Continue learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Tutorials, reviews, and practical tools
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300">
              Build a more structured research routine with beginner-friendly
              guides, platform walkthroughs, and tools for tracking trades and
              wallet activity.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {learningCards.map((card) => (
              <article
                key={card.title}
                className="flex min-w-0 flex-col rounded-xl border border-slate-800 bg-slate-950 p-5 sm:p-6"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {card.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {card.text}
                </p>

                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  {card.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-amber-400/5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                Risk checklist
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Reasons to pause or skip a trade
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                These signals do not prove a token will fail, but they justify
                greater caution, smaller size, or no trade at all.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Liquidity is too shallow for your intended entry or exit size.",
                "A handful of wallets control an unusually large share of supply.",
                "The deployer or top wallets show suspicious transfers or rapid selling.",
                "The contract or token details cannot be independently verified.",
                "You are entering because of urgency, FOMO, or a social post rather than a defined setup.",
                "You cannot state where you would exit if the thesis is wrong.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-amber-300/20 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Meme coin research questions
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="max-w-4xl text-xs leading-5 text-slate-400">
            Educational content only; not financial, investment, legal, or tax
            advice. Meme coins are highly speculative and can lose value
            rapidly. Verify information independently and only risk capital you
            can afford to lose.
          </p>
        </div>
      </section>
    </main>
  );
}
