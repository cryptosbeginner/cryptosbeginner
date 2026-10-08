import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/demo-account`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Demo Account 2026: Practice Trading Risk-Free",
  description:
    "PrimeXBT's free demo account in 2026: how to open it on PXTrader 2.0 and MT5, virtual funds, trading contests, limits of demo trading, and when to go live.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Demo Account 2026: Practice Trading Risk-Free",
    description:
      "Practice on PrimeXBT without risking real money: free demo accounts, virtual funds, demo trading contests, and how to use demo time well.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-demo-account-dashboard.jpg`,
        width: 1400,
        height: 700,
        alt: "PrimeXBT demo account dashboard with virtual trading balance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Demo Account 2026",
    description:
      "Free PrimeXBT demo trading: virtual funds, contests, limitations, and moving to a live account.",
    images: [`${SITE_URL}/images/primexbt-demo-account-dashboard.jpg`],
  },
};

const faqItems = [
  {
    question: "Does PrimeXBT have a demo account?",
    answer:
      "Yes. PrimeXBT offers free demo accounts on PXTrader 2.0 and MT5 with virtual funds, so you can practice on live market prices without depositing real money. Availability and conditions can change, so check the live platform.",
  },
  {
    question: "Is the PrimeXBT demo account free?",
    answer:
      "Yes. No deposit is required to use the demo account. You trade with virtual funds, which means no real profit and no real loss.",
  },
  {
    question: "How do I open a PrimeXBT demo account?",
    answer:
      "Register for a PrimeXBT account with an email and password, confirm your email, then look for the demo or practice option in the platform dashboard to switch to demo mode. MT5 users open the PrimeXBT demo through the MT5 platform following the on-screen steps.",
  },
  {
    question: "Does the PrimeXBT demo account expire?",
    answer:
      "Independent reviews report that the demo does not expire, but terms can change. If long-term access matters to you, confirm the current policy on PrimeXBT's official pages or with support.",
  },
  {
    question: "Can I win real money on the PrimeXBT demo account?",
    answer:
      "Regular demo trading uses virtual funds with no real payouts. However, PrimeXBT runs separate demo trading contests where participants can compete for real prizes. Check the current contest schedule and rules on the official site.",
  },
  {
    question: "When should I switch from demo to a live account?",
    answer:
      "Consider going live only after you can explain your strategy, follow a risk plan consistently, and accept losing trades without changing the plan. Start small: demo confidence rarely survives first contact with real money unchanged.",
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

export default function PrimeXBTDemoAccountPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Demo Account 2026: Practice Trading Risk-Free",
    description:
      "A beginner's guide to the PrimeXBT demo account: how to open it, what virtual funds let you practice, demo trading contests, the honest limits of demo trading, and when to go live.",
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
    image: [`${SITE_URL}/images/primexbt-demo-account-dashboard.jpg`],
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
        name: "PrimeXBT Demo Account",
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
              PrimeXBT Demo Account: Practice Trading Risk-Free in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              A demo account lets you learn PrimeXBT&apos;s platform with
              virtual funds and live prices, so mistakes cost nothing. This
              guide explains how to open one on PXTrader 2.0 and MT5, what
              you can and cannot practice, the demo trading contests, and the
              honest limits every beginner should know.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Open PrimeXBT through our partner link
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
              src="/images/primexbt-demo-account-dashboard.jpg"
              alt="PrimeXBT demo account dashboard with virtual trading balance"
              width={1400}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              The PrimeXBT account area where you can switch between live and
              demo (practice) trading modes.
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
                <strong>Free to use:</strong> demo accounts on PXTrader 2.0
                and MT5, funded with virtual money. No deposit required.
              </li>
              <li>
                <strong>Real prices:</strong> you practice on live market
                quotes across crypto, forex, indices, and commodities.
              </li>
              <li>
                <strong>Easy to open:</strong> register, confirm your email,
                then switch to demo mode from the dashboard.
              </li>
              <li>
                <strong>Contests exist:</strong> separate demo trading
                contests let you compete for real prizes. Check current
                rules.
              </li>
              <li>
                <strong>Know the limits:</strong> demo cannot teach you how
                real losses feel, and fills may be smoother than live
                trading.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#what-is-demo" className="underline underline-offset-4">
                  What the demo account is
                </a>
              </li>
              <li>
                <a href="#how-to-open" className="underline underline-offset-4">
                  How to open a demo account
                </a>
              </li>
              <li>
                <a href="#contests" className="underline underline-offset-4">
                  Demo trading contests
                </a>
              </li>
              <li>
                <a href="#use-it-well" className="underline underline-offset-4">
                  How to use demo time well
                </a>
              </li>
              <li>
                <a href="#limits" className="underline underline-offset-4">
                  Honest limits of demo trading
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

        <Section id="what-is-demo">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What the PrimeXBT demo account is
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            A demo account is a practice version of the trading platform.
            PrimeXBT provides demo access on both PXTrader 2.0 and MT5,
            credited with virtual funds that behave like a real balance on
            screen but have no monetary value. Orders are filled against live
            market prices, so the charts, spreads, and margin requirements
            you see mirror real conditions.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Because no deposit is needed and nothing real is at stake, the
            demo is the right place to learn the mechanics: placing market
            and limit orders, setting stop-loss and take-profit levels,
            reading the margin panel, and understanding what leverage does to
            a position before it does it to your money.
          </p>
        </Section>

        <Section id="how-to-open">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to open a PrimeXBT demo account
          </h2>

          <ol className="mt-6 space-y-6">
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 1: Register for a PrimeXBT account
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                There is no separate demo signup form. Register normally with
                an email address and password, as covered in our{" "}
                <Link
                  href="/exchanges/primexbt/registration-guide"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT registration guide
                </Link>
                , and confirm your email.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 2: Switch to demo mode
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Log in to the web platform and look for the demo or practice
                option in the dashboard. Selecting it switches you to the
                virtual-funds environment, where you can move back and forth
                between demo and live whenever you like.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 3 (MT5 users): open the demo in MT5
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                If you trade on MetaTrader 5, download the MT5 platform and
                follow the on-screen steps to open a PrimeXBT demo account
                there. The process is guided and takes a few minutes.
              </p>
            </li>
          </ol>

          <figure className="mt-8">
            <Image
              src="/images/primexbt-demo-trading-platform.jpg"
              alt="PrimeXBT trading platform interface used for demo practice trading"
              width={2560}
              height={1280}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              The same trading interface, practiced with virtual funds before
              any real deposit.
            </figcaption>
          </figure>
        </Section>

        <Section id="contests">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Demo trading contests
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Beyond solo practice, PrimeXBT runs demo trading contests where
            participants compete on virtual accounts for real prizes.
            Contests add a competitive edge that plain demo trading lacks,
            and they are a popular way for beginners to experience
            performance pressure without financial risk.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Schedules, prize pools, and eligibility rules change from contest
            to contest. Always read the current contest terms on
            PrimeXBT&apos;s official site before joining, and remember that
            contest-style aggressive trading is entertainment, not a strategy
            to copy with real money.
          </p>
        </Section>

        <Section id="use-it-well">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to use demo time well
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Most beginners waste demo accounts by treating virtual money
            like a video game. A few habits make practice genuinely useful:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Trade realistic sizes.</strong> Size demo positions as
              if the balance were the amount you actually plan to deposit.
              Practicing with million-dollar positions teaches nothing about
              your real risk.
            </li>
            <li>
              <strong>Write the plan first.</strong> Note your entry reason,
              stop-loss, take-profit, and position size before clicking.
              Demo is where you build the habit of planning.
            </li>
            <li>
              <strong>Learn leverage math.</strong> Test how different
              leverage levels change liquidation distance and margin use.
              Watching a demo position get liquidated is a free lesson.
            </li>
            <li>
              <strong>Keep a simple journal.</strong> Log each trade and
              review weekly. Patterns in your mistakes show up faster on
              paper than in memory.
            </li>
            <li>
              <strong>Practice the boring parts.</strong> Deposits,
              withdrawals of the interface flow, order types, and the fees
              page. Read our{" "}
              <Link
                href="/exchanges/primexbt/fees"
                className="font-bold text-indigo-700 underline underline-offset-4"
              >
                PrimeXBT fees guide
              </Link>{" "}
              and model real costs in your demo results.
            </li>
          </ul>
        </Section>

        <Section id="limits">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Honest limits of demo trading
          </h2>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>The demo trap:</strong> demo profits feel easy because
              there is no fear. Real trading adds emotions, slippage in fast
              markets, and the psychological weight of actual loss. Treat
              demo success as proof you understand the platform, not proof
              your strategy is profitable.
            </p>
          </div>

          <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>No emotional pressure.</strong> Losing virtual money
              does not hurt, so demo cannot teach discipline under stress.
            </li>
            <li>
              <strong>Fills can be kinder.</strong> Demo fills may not fully
              reflect slippage and partial fills during volatile live
              markets.
            </li>
            <li>
              <strong>Withdrawals cannot be tested.</strong> The funding and
              withdrawal flow uses virtual funds, so test the real process
              with a small deposit first.
            </li>
          </ul>

          <p className="mt-4 leading-8 text-slate-800">
            When you do go live, start with an amount you can afford to lose
            completely, keep leverage low, and expect your performance to dip
            at first. That dip is normal, and it is exactly what the demo
            phase cannot simulate.
          </p>
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
              Ready for the real thing? Read the full review first
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              The full review covers fees, leverage, regulation, restricted
              countries, and platform tools, everything you should know
              before your first live trade.
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
              This page was reviewed on {UPDATED}. Demo availability,
              contest schedules, and platform features can change. Check the
              current provider pages before relying on any specific detail.
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
                for the current demo options, contest schedule, and platform
                downloads.
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
              Cryptocurrency, CFDs, futures, and leveraged products can result
              in rapid or total loss of capital. Availability depends on your
              jurisdiction. Some links are affiliate links. Verify live terms,
              fees, legal disclosures, restrictions, and product conditions on
              PrimeXBT&apos;s official website before trading with real funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
