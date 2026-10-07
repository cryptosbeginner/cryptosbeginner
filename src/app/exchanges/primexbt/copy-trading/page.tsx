import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/copy-trading`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";
const PRIME_XBT_COVESTING_FAQ =
  "https://primexbt.gitbook.io/help-center/covesting/covesting-faq";

export const metadata: Metadata = {
  title: "PrimeXBT Copy Trading 2026: How Covesting Works & the Risks",
  description:
    "PrimeXBT copy trading explained: how the Covesting module works for followers and strategy managers, profit-share splits, costs, and the risks to know in 2026.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Copy Trading 2026: How Covesting Works & the Risks",
    description:
      "Follow pro traders or run your own strategy on PrimeXBT. Profit shares, entry fees, manager minimums, and the risks, verified October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-pxtrader-terminal.png`,
        width: 1600,
        height: 800,
        alt: "PrimeXBT PXTrader trading terminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Copy Trading 2026",
    description:
      "How Covesting copy trading works on PrimeXBT: followers, strategy managers, profit shares, and risks.",
    images: [`${SITE_URL}/images/primexbt-pxtrader-terminal.png`],
  },
};

const faqItems = [
  {
    question: "What is PrimeXBT copy trading?",
    answer:
      "It is the Covesting module built into PrimeXBT. Experienced traders create public Strategies from their own funds, and followers allocate money to automatically replicate those trades. Managers earn a cut of their followers' profits; followers keep the rest minus platform and entry fees.",
  },
  {
    question: "How much does it cost to follow a strategy?",
    answer:
      "Followers pay a 1% entry fee on new followings, plus a share of profits when the strategy wins. The follower's profit share rises with the amount invested, from 60% at smaller sizes to 75% at 1 BTC or more, with the strategy manager taking 20% and the platform taking the remainder. Verify the live schedule before following.",
  },
  {
    question: "How much can strategy managers earn on PrimeXBT?",
    answer:
      "Managers receive 20% of the profits their followers make. There is no charge to followers when a strategy loses money, since the cut applies to profits only. Managers can also reduce their own trading fees through COV token memberships.",
  },
  {
    question: "What is the minimum amount to start copy trading?",
    answer:
      "Published minimums to start following have been as low as 0.001 BTC. Creating a strategy requires more: 0.01 BTC, 0.14 ETH, 200 USDT, 200 USDC, or 1,000 COV in personal funds, depending on denomination. Minimums can change, so check the live terms.",
  },
  {
    question: "Is copy trading on PrimeXBT safe?",
    answer:
      "No form of copy trading is safe in the sense of guaranteed outcomes. You hand trade decisions to another person whose past results do not predict future performance. Managers can hit drawdowns, change style, or take risks you would not take yourself. Use stop-loss protection, diversify across strategies, and never allocate money you cannot afford to lose.",
  },
  {
    question: "Can beginners use PrimeXBT copy trading?",
    answer:
      "The interface makes it easy to start, which is exactly why beginners should be careful. Copying does not teach you risk management on its own. If you are new, start with the demo, follow with small amounts, and learn how leverage, margin, and drawdowns work before scaling up.",
  },
] as const;

function PrimaryAffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{
        color: "#ffffff",
        textDecoration: "none",
      }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12"
    >
      {children}
    </section>
  );
}

export default function PrimeXBTCopyTradingPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Copy Trading 2026: How Covesting Works & the Risks",
    description:
      "A research-led guide to PrimeXBT copy trading: the Covesting module, follower steps, strategy manager setup, profit-share splits, costs, and risks.",
    datePublished: "2026-10-08",
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "CryptosBeginner editorial team",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    image: [`${SITE_URL}/images/primexbt-pxtrader-terminal.png`],
    inLanguage: "en",
  };

  const breadcrumbLd = {
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
        name: "Exchanges",
        item: `${SITE_URL}/exchanges`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PrimeXBT Review",
        item: REVIEW_URL,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "PrimeXBT Copy Trading",
        item: PAGE_URL,
      },
    ],
  };

  const faqLd = {
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
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              PrimeXBT Copy Trading: How Covesting Works and What It Risks
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Copy trading lets you mirror the trades of experienced strategy
              managers automatically. This guide explains how PrimeXBT&apos;s
              Covesting module works for followers and managers, what the
              profit-share splits and costs look like, and the risks nobody
              should skip over.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Visit PrimeXBT through our partner link
              </PrimaryAffiliateButton>

              <Link
                href="/exchanges/primexbt-review"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Back to the full PrimeXBT review
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Affiliate disclosure:</strong> Some links on this page are
            affiliate links, including PrimeXBT links. CryptosBeginner may earn
            a commission if you register through one. This does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-8">
          <figure>
            <Image
              src="/images/primexbt-pxtrader-terminal.png"
              alt="PrimeXBT PXTrader trading terminal"
              width={1600}
              height={800}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              The PXTrader terminal, where Covesting strategies are browsed,
              followed, and managed. Strategy terms and availability depend on
              your account type and jurisdiction.
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">
            <h2 className="text-2xl font-black text-emerald-950">
              TL;DR: the short version
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-800">
              <li>
                <strong>Covesting</strong> is PrimeXBT&apos;s built-in copy
                trading module. Managers run public strategies, followers
                mirror their trades automatically.
              </li>
              <li>
                <strong>Followers</strong> pay a 1% entry fee and share
                profits: they keep 60% to 75% depending on size, the manager
                takes 20%, the platform takes the rest.
              </li>
              <li>
                <strong>Managers</strong> earn 20% of follower profits and
                need minimum personal funds to open a strategy.
              </li>
              <li>
                <strong>The core risk:</strong> past performance does not
                predict future results. A top-ranked manager can still lose
                your money.
              </li>
              <li>
                <strong>Never</strong> copy with money you cannot afford to
                lose, and verify live terms before following anyone.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#what-it-is" className="underline underline-offset-4">
                  What Covesting is
                </a>
              </li>
              <li>
                <a href="#for-followers" className="underline underline-offset-4">
                  How it works for followers
                </a>
              </li>
              <li>
                <a href="#for-managers" className="underline underline-offset-4">
                  How it works for strategy managers
                </a>
              </li>
              <li>
                <a href="#fees-splits" className="underline underline-offset-4">
                  Fees and profit-share splits
                </a>
              </li>
              <li>
                <a href="#risks" className="underline underline-offset-4">
                  The risks, honestly
                </a>
              </li>
              <li>
                <a href="#who-should-avoid" className="underline underline-offset-4">
                  Who should avoid it
                </a>
              </li>
              <li>
                <a href="#faq" className="underline underline-offset-4">
                  FAQ
                </a>
              </li>
            </ol>
          </div>
        </section>

        <Section id="what-it-is">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What copy trading is on PrimeXBT
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT&apos;s copy trading runs through the Covesting module, a
            partnership that has been part of the platform for years. The
            setup has two sides. A strategy manager puts up their own money
            and trades it in a public Strategy, a pool visible to everyone on
            the platform. A follower picks a strategy, allocates funds to it,
            and every trade the manager makes is then replicated in the
            follower&apos;s account automatically.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Each strategy has a public profile with performance history, risk
            metrics, total equity following it, and follower count. You can
            filter and sort the leaderboard by profit, active days, drawdown,
            and other criteria before committing any funds. That transparency
            is useful, but it is not a safety net, which we cover in the
            risks section below.
          </p>
        </Section>

        <Section id="for-followers">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How it works for followers, step by step
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Browse strategies.</strong> Open the Covesting or copy
              trading section and work through the leaderboard. Look past the
              headline profit number and check drawdown, active days, and how
              long the track record actually is.
            </li>
            <li>
              <strong>Inspect the manager.</strong> Open the strategy profile
              for trade history, risk level, and the manager&apos;s own
              equity in the strategy. A manager with meaningful personal
              funds at stake has skin in the game.
            </li>
            <li>
              <strong>Allocate an amount.</strong> Decide how much of your
              capital follows this strategy. This sets how trades are sized
              in your account. Start small enough that a full loss would
              sting but not hurt you.
            </li>
            <li>
              <strong>Set your guardrails.</strong> Configure stop-loss
              protection and take-profit levels for the following, based on
              your own risk tolerance rather than the manager&apos;s.
            </li>
            <li>
              <strong>Activate and monitor.</strong> Confirm the follow,
              keeping in mind the 1% entry fee on new followings. Trades then
              replicate automatically. Review performance regularly and be
              ready to unfollow or resize if the strategy drifts from what
              you signed up for.
            </li>
          </ol>

          <p className="mt-4 leading-8 text-slate-800">
            There is no cap on how many strategies you can follow, and
            spreading across several uncorrelated managers is one of the few
            reliable ways to reduce single-manager risk.
          </p>
        </Section>

        <Section id="for-managers">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How it works for strategy managers
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            If you trade consistently well, running a strategy turns your
            track record into a second income stream. You create a strategy
            from your own funds, trade it as normal, and earn 20% of the
            profits your followers make. The better and steadier your
            results, the more followers and equity you attract, which is
            where the income scales.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Opening a strategy requires minimum personal funds, which vary by
            denomination:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Denomination</th>
                  <th className="py-3">Minimum personal funds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">BTC</td>
                  <td className="py-3 text-slate-700">0.01 BTC</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">ETH</td>
                  <td className="py-3 text-slate-700">0.14 ETH</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">USDT</td>
                  <td className="py-3 text-slate-700">200 USDT</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">USDC</td>
                  <td className="py-3 text-slate-700">200 USDC</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">COV</td>
                  <td className="py-3 text-slate-700">1,000 COV</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Minimums from PrimeXBT&apos;s official Covesting FAQ, verified
            October 2026. Check the live terms, as minimums can change.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Managers can also cut their own trading costs through COV token
            memberships. Staking COV unlocks Advanced, Premium, or Elite
            tiers with trading fee discounts of up to 75% for strategy
            accounts, plus a share of platform fee burns that reduce the
            token supply over time.
          </p>
        </Section>

        <Section id="fees-splits">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Fees and profit-share splits
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Copy trading has two cost layers: the entry fee and the profit
            share. New followings carry a 1% entry fee, which COV token
            holders can remove. When a strategy is profitable, the gains are
            split three ways, and the follower&apos;s cut grows with the
            amount invested:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Amount invested</th>
                  <th className="py-3 pr-4">Follower keeps</th>
                  <th className="py-3 pr-4">Strategy manager</th>
                  <th className="py-3">Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    0.01 - 0.3 BTC
                  </td>
                  <td className="py-3 pr-4 text-slate-700">60%</td>
                  <td className="py-3 pr-4 text-slate-700">20%</td>
                  <td className="py-3 text-slate-700">20%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    0.3 - 0.5 BTC
                  </td>
                  <td className="py-3 pr-4 text-slate-700">65%</td>
                  <td className="py-3 pr-4 text-slate-700">20%</td>
                  <td className="py-3 text-slate-700">15%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    0.5 - 1 BTC
                  </td>
                  <td className="py-3 pr-4 text-slate-700">70%</td>
                  <td className="py-3 pr-4 text-slate-700">20%</td>
                  <td className="py-3 text-slate-700">10%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    1 BTC or more
                  </td>
                  <td className="py-3 pr-4 text-slate-700">75%</td>
                  <td className="py-3 pr-4 text-slate-700">20%</td>
                  <td className="py-3 text-slate-700">5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Published split structure. The manager&apos;s 20% applies to
            profits only, so losing periods cost followers nothing in profit
            share. Confirm the current bands in your account before following.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            On top of the copy trading layer, the underlying trades still pay
            normal trading fees, spreads, and any overnight funding, exactly
            as described in our{" "}
            <Link
              href="/exchanges/primexbt/fees"
              className="font-bold text-indigo-700 underline underline-offset-4"
            >
              PrimeXBT fees guide
            </Link>
            . Factor those in when judging a strategy&apos;s net returns.
          </p>
        </Section>

        <Section id="risks">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            The risks, honestly
          </h2>

          <div className="mt-6 rounded-2xl border border-rose-300 bg-rose-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Past performance does not predict future results.</strong>{" "}
              A strategy at the top of the leaderboard earned that rank in
              past market conditions. It can lose money tomorrow, and when it
              does, your account loses with it.
            </p>
          </div>

          <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Manager risk:</strong> you delegate decisions to a
              stranger. They can change style, overtrade, take on hidden
              leverage, or simply have a bad month. Their incentives reward
              attracting followers, not necessarily protecting your capital.
            </li>
            <li>
              <strong>Drawdowns are yours too:</strong> every losing trade is
              mirrored into your account at your allocation size. A 30%
              strategy drawdown is a 30% hit to the funds you allocated.
            </li>
            <li>
              <strong>Leverage multiplies both sides:</strong> strategies can
              trade with leverage, so small market moves become large
              account moves. Understand the leverage involved before you
              follow.
            </li>
            <li>
              <strong>Costs drag on returns:</strong> the 1% entry fee, the
              profit share, plus spreads, trading fees, and funding all come
              out of your side. A strategy needs to clear all of that before
              you see a net gain.
            </li>
            <li>
              <strong>Popularity is not diligence:</strong> follower counts
              and flashy ROI figures attract crowds, but crowds do not audit
              risk management. Read the full track record, not the headline
              number.
            </li>
          </ul>

          <p className="mt-5 leading-8 text-slate-800">
            Practical guardrails help: diversify across more than one
            strategy, set stop-loss protection on every following, review
            performance on a schedule instead of once a year, and size each
            allocation as money you can afford to lose completely.
          </p>
        </Section>

        <Section id="who-should-avoid">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Who should avoid copy trading
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-800">
            <p>
              <strong>Skip it if:</strong> you expect steady or guaranteed
              returns, you cannot afford to lose the allocated funds, you are
              in a jurisdiction where PrimeXBT is restricted, or you do not
              yet understand leverage, margin, and liquidation. Copy trading
              does not remove any of those concepts, it just hides them
              behind someone else&apos;s decisions.
            </p>

            <p>
              <strong>It may suit:</strong> traders who understand the risks,
              want exposure to strategies they lack time to run themselves,
              and treat each following as a small, monitored, stop-loss
              protected allocation rather than a savings plan.
            </p>

            <p>
              For most beginners, learning spot-market basics first, as
              covered in our{" "}
              <Link
                href="/exchanges/primexbt-review"
                className="font-bold text-indigo-700 underline underline-offset-4"
              >
                full PrimeXBT review
              </Link>
              , is a saner starting point than handing a leveraged account to
              a stranger.
            </p>
          </div>
        </Section>

        <Section id="faq">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Frequently asked questions
          </h2>

          <div className="mt-7 grid gap-4">
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

        <section className="mx-auto max-w-4xl px-4 pb-12">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-7">
            <h2 className="text-xl font-black text-indigo-950">
              Continue with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              Copy trading is one feature. The full review covers fees,
              leverage, regulation, restricted countries, and the platform as
              a whole.
            </p>

            <Link
              href="/exchanges/primexbt-review"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-indigo-800"
            >
              Read the PrimeXBT review
            </Link>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Sources and verification
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-800">
              This page was reviewed on {UPDATED}. Strategy terms, minimums,
              profit-share bands, and module availability can change. Check
              the current provider terms before following a strategy or
              opening one.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-800">
              <li>
                <a
                  href={PRIME_XBT_HOME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT official website
                </a>{" "}
                for current products, account access, and legal links.
              </li>
              <li>
                <a
                  href={PRIME_XBT_COVESTING_FAQ}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT Covesting help center
                </a>{" "}
                for the official copy trading FAQ, strategy minimums, and
                module documentation.
              </li>
              <li>
                <a
                  href={REVIEW_URL}
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  CryptosBeginner PrimeXBT review
                </a>{" "}
                for the broader assessment this guide supports.
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm leading-7 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. This page
              is not financial, investment, legal, or tax advice.
              Cryptocurrency, CFDs, futures, leveraged products, and copy
              trading can result in rapid or total loss of capital. Past
              performance of any strategy does not predict future results.
              Availability depends on your jurisdiction. Some links are
              affiliate links. Verify live terms, fees, legal disclosures,
              restrictions, and product conditions on PrimeXBT&apos;s official
              website before depositing funds or following a strategy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
