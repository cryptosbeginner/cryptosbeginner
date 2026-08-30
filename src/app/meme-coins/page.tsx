import { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsList,
  BreadcrumbsSeparator,
} from "@/components/ui/breadcrumbs";
import { ArticleJsonLd } from "next-seo";

export const metadata: Metadata = {
  title: "Meme Coins: Research, Track Wallets & Spot Smart Money",
  description:
    "Learn how to research meme coins, track wallets, and spot smart money using GMGN, Solscan, and other tools. Practical guides for Solana and multi-chain.",
  openGraph: {
    title: "Meme Coins: Research, Track Wallets & Spot Smart Money",
    description:
      "Learn how to research meme coins, track wallets, and spot smart money using GMGN, Solscan, and other tools. Practical guides for Solana and multi-chain.",
    type: "article",
  },
  twitter: {
    title: "Meme Coins: Research, Track Wallets & Spot Smart Money",
    description:
      "Learn how to research meme coins, track wallets, and spot smart money using GMGN, Solscan, and other tools. Practical guides for Solana and multi-chain.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meme Coins: Research, Track Wallets & Spot Smart Money",
  description:
    "Learn how to research meme coins, track wallets, and spot smart money using GMGN, Solscan, and other tools. Practical guides for Solana and multi-chain.",
  image: "https://www.cryptosbeginner.com/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "Cryptos Beginner",
    url: "https://www.cryptosbeginner.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Cryptos Beginner",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptosbeginner.com/logo.png",
    },
  },
  datePublished: "2025-08-29",
  dateModified: "2025-08-30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.cryptosbeginner.com/meme-coins",
  },
};

export default function MemeCoinsPage() {
  return (
    <>
      <ArticleJsonLd jsonLd={articleJsonLd} />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs className="mb-6">
            <BreadcrumbsList>
              <BreadcrumbsItem>
                <BreadcrumbsLink href="/">Home</BreadcrumbsLink>
              </BreadcrumbsItem>
              <BreadcrumbsSeparator />
              <BreadcrumbsItem>
                <BreadcrumbsLink href="/learn">Learn</BreadcrumbsLink>
              </BreadcrumbsItem>
              <BreadcrumbsSeparator />
              <BreadcrumbsItem>
                <BreadcrumbsLink href="/meme-coins">Meme Coins</BreadcrumbsLink>
              </BreadcrumbsItem>
            </BreadcrumbsList>
          </Breadcrumbs>

          {/* Hero */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meme Coins: Research, Track Wallets & Spot Smart Money
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Learn how to research meme coins, track wallets, and spot smart
              money using GMGN, Solscan, and other tools. Practical guides for
              Solana and multi-chain.
            </p>
          </section>

          {/* Intro */}
          <section className="mb-12 rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Why meme coin research matters
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Meme coins move fast and are heavily driven by narratives,
              liquidity, and wallet flows. Without a clear research process, it
              is easy to chase pumps, miss exits, or get trapped in illiquid
              tokens. This page gives you a practical framework and links to
              tools you can use immediately.
            </p>
          </section>

          {/* Framework */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">
              A simple framework for meme coin research
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">
                  1. Understand the narrative
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Identify the story behind the token: community, catalysts,
                  listings, and social traction. Check whether the narrative is
                  new, rotating, or exhausted.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">
                  2. Check liquidity and token structure
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Look at liquidity depth, holder distribution, top wallets,
                  and any lock/vesting. Thin liquidity and concentrated holdings
                  increase risk of manipulation and slippage.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">
                  3. Track wallets and smart money
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Use tools like GMGN and Solscan to follow experienced wallets,
                  insiders, and early buyers. Observe entry/exit patterns and
                  position sizing.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">
                  4. Define risk and exits
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Decide position size, invalidation levels, and profit-taking
                  rules before entering. Meme coins can gap and gap back quickly.
                </p>
              </div>
            </div>
          </section>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">
              Tools for meme coin research
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">GMGN</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  Analyze token pages, holder distribution, and wallet flows.
                  Use GMGN Skills to tag and track smart money and insiders.
                </p>
                <Link
                  href="/learn/gmgn-ai-agent"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  GMGN AI Agent guide →
                </Link>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">Solscan</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  Deep-dive into Solana transactions, token transfers, and
                  wallet histories. Useful for tracing entries, exits, and
                  cluster behavior.
                </p>
                <Link
                  href="https://solscan.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Open Solscan →
                </Link>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium">
                  Wallet tracker & DEX monitor
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  Track your own positions, PnL, and DEX activity in one place.
                  Combine with GMGN and Solscan for a full picture.
                </p>
                <Link
                  href="/wallet-tracker"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Open wallet tracker →
                </Link>
              </div>
            </div>
          </section>

          {/* How to use GMGN */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">
              How to use GMGN for meme coins
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
              <ol className="list-inside list-decimal space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                <li>
                  Open a token page on GMGN and check liquidity, holders, and
                  recent trades.
                </li>
                <li>
                  Use the “Holders” and “Top Traders” tabs to identify
                  influential wallets and early buyers.
                </li>
                <li>
                  Tag interesting wallets with GMGN Skills and monitor their
                  future activity.
                </li>
                <li>
                  Cross-check with Solscan for detailed transaction history and
                  token flows.
                </li>
                <li>
                  Combine insights with your own risk rules and position sizing.
                </li>
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-base font-medium">
                  Are meme coins safe to trade?
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Meme coins are highly speculative and can be manipulated. Only
                  risk capital you can afford to lose and use clear entry/exit
                  rules.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-base font-medium">
                  Which chains are best for meme coins?
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Solana is currently the most active for meme coins due to low
                  fees and fast transactions. Other chains like Base and BSC also
                  see activity but with different risk profiles.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-base font-medium">
                  How do I avoid scams?
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Check liquidity locks, holder distribution, and contract
                  ownership. Avoid tokens with extreme concentration, hidden
                  mint functions, or suspicious trading patterns.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h2 className="text-xl font-semibold">
                Ready to track your own trades?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                Use the wallet tracker and DEX monitor to log entries, exits,
                and PnL. Combine this with GMGN and Solscan for a complete
                research and execution workflow.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/wallet-tracker"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400"
                >
                  Open wallet tracker
                </Link>
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
                >
                  Browse all guides
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-6">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs leading-relaxed text-slate-400">
                This content is for educational purposes only and is not
                financial advice. Meme coins are highly volatile and risky.
                Always do your own research and manage your risk carefully.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
