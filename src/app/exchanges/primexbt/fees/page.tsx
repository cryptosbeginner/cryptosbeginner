import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/fees`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Fees Explained 2026: Trading, Funding & Withdrawal Costs",
  description:
    "PrimeXBT fees in 2026: 0.01% maker and from 0.045% taker on crypto futures, spread-based CFDs, overnight funding, swap-free options, and withdrawal costs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Fees Explained 2026: Trading, Funding & Withdrawal Costs",
    description:
      "What does PrimeXBT really cost? Crypto futures fees, CFD spreads, overnight funding, swap-free accounts, deposits, and withdrawals, verified October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-fees-markets.png`,
        width: 1377,
        height: 787,
        alt: "PrimeXBT trading fees and available markets overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Fees Explained 2026",
    description:
      "Crypto futures, CFD spreads, funding, and withdrawal fees on PrimeXBT, with a worked cost example.",
    images: [`${SITE_URL}/images/primexbt-fees-markets.png`],
  },
};

const faqItems = [
  {
    question: "What are PrimeXBT's trading fees?",
    answer:
      "For crypto futures, the published schedule shows 0.01% maker across all tiers and taker from 0.045% at the entry tier, falling at higher VIP volume tiers. Forex, indices, commodity, and share CFDs on PXTrader are typically priced through the spread with no separate commission. Confirm the live schedule for your instrument and account type.",
  },
  {
    question: "Does PrimeXBT charge deposit fees?",
    answer:
      "PrimeXBT itself does not charge a deposit fee. Third-party payment providers, card processors, or networks used to fund the deposit may apply their own charges, so check the funding method you choose.",
  },
  {
    question: "How much is the PrimeXBT withdrawal fee?",
    answer:
      "Withdrawals carry a fixed fee that varies by asset and network. For example, withdrawing USDT can cost different amounts on ERC-20, BEP-20, and TRC-20. Check the live withdrawal page before you withdraw, because network conditions and fee schedules change.",
  },
  {
    question: "What is the overnight funding fee on PrimeXBT?",
    answer:
      "Leveraged positions held past the funding time can incur overnight financing. On crypto futures, funding is charged three times a day, roughly every eight hours. Swap-free accounts replace overnight swaps with an administrative-fee model for eligible users.",
  },
  {
    question: "Are there hidden fees on PrimeXBT?",
    answer:
      "PrimeXBT publishes its fee schedule openly. The costs beginners most often miss are not hidden, they are structural: the spread, slippage in fast markets, overnight funding on multi-day positions, conversion charges, and withdrawal network fees.",
  },
  {
    question: "How do PrimeXBT fees compare to other exchanges?",
    answer:
      "On headline crypto-futures rates, PrimeXBT sits near the competitive end of the market. But headline rates are only one layer. Compare the all-in cost for your style: spread, funding, how long you hold, and how often you withdraw matter as much as the maker/taker number.",
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

export default function PrimeXBTFeesPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Fees Explained 2026: Trading, Funding & Withdrawal Costs",
    description:
      "A research-led breakdown of PrimeXBT fees: crypto futures maker/taker tiers, CFD spreads, overnight funding, swap-free accounts, deposits, and withdrawals.",
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
    image: [`${SITE_URL}/images/primexbt-fees-markets.png`],
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
        name: "PrimeXBT Fees",
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
              PrimeXBT Fees Explained: What Trading Really Costs in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Headline rates only tell part of the story. This guide breaks
              down PrimeXBT&apos;s crypto futures maker/taker tiers, CFD
              spreads, overnight funding, swap-free accounts, and deposit and
              withdrawal costs, with a worked example so you can estimate a
              real trade.
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
              src="/images/primexbt-fees-markets.png"
              alt="PrimeXBT trading fees and available markets overview"
              width={1200}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT fees and markets overview. Confirm the live fee
              schedule and instrument conditions before submitting a trade.
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
                <strong>Crypto futures:</strong> 0.01% maker, taker from
                0.045% at the entry tier, lower at VIP volume tiers.
              </li>
              <li>
                <strong>CFDs</strong> (forex, indices, commodities, shares):
                priced through the spread, no separate commission on
                PXTrader.
              </li>
              <li>
                <strong>Overnight funding</strong> applies to leveraged
                positions held past funding time. Swap-free accounts use an
                administrative-fee model instead.
              </li>
              <li>
                <strong>Deposits:</strong> no PrimeXBT fee.{" "}
                <strong>Withdrawals:</strong> fixed fee, varies by asset and
                network.
              </li>
              <li>
                <strong>Always verify</strong> the live Fees &amp; Conditions
                page. Tier, entity, and instrument all change the numbers.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#futures-fees" className="underline underline-offset-4">
                  Crypto futures fees
                </a>
              </li>
              <li>
                <a href="#cfd-spreads" className="underline underline-offset-4">
                  CFD spreads
                </a>
              </li>
              <li>
                <a href="#funding" className="underline underline-offset-4">
                  Overnight funding and swap-free
                </a>
              </li>
              <li>
                <a href="#example" className="underline underline-offset-4">
                  Worked cost example
                </a>
              </li>
              <li>
                <a href="#deposits-withdrawals" className="underline underline-offset-4">
                  Deposits and withdrawals
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

        <Section id="futures-fees">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Crypto futures fees
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Crypto futures use a maker/taker model based on 30-day trading
            volume. Makers, who add liquidity with limit orders, pay 0.01%
            across all tiers. Takers, who remove liquidity with market
            orders, start at 0.045% and pay less as volume grows.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Tier</th>
                  <th className="py-3 pr-4">30-day volume</th>
                  <th className="py-3 pr-4">Maker</th>
                  <th className="py-3">Taker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">Regular</td>
                  <td className="py-3 pr-4 text-slate-700">Under $5M</td>
                  <td className="py-3 pr-4 text-slate-700">0.01%</td>
                  <td className="py-3 text-slate-700">0.045%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">Tier 2</td>
                  <td className="py-3 pr-4 text-slate-700">$5M or more</td>
                  <td className="py-3 pr-4 text-slate-700">0.01%</td>
                  <td className="py-3 text-slate-700">0.035%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">Tier 3</td>
                  <td className="py-3 pr-4 text-slate-700">$20M or more</td>
                  <td className="py-3 pr-4 text-slate-700">0.01%</td>
                  <td className="py-3 text-slate-700">0.02%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    VIP 5 (top published tier)
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Highest volume band
                  </td>
                  <td className="py-3 pr-4 text-slate-700">0.01%</td>
                  <td className="py-3 text-slate-700">Down to 0.015%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Published tier structure, verified October 2026. Tiers apply for
            30 days and VIP bands can reduce taker fees further. Check the
            live schedule for your account type and entity.
          </p>
        </Section>

        <Section id="cfd-spreads">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            CFD spreads: forex, indices, commodities, shares
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Outside crypto futures, PrimeXBT prices most markets through the
            spread rather than a separate commission. On PXTrader there is no
            per-trade commission for forex, index, commodity, or share CFDs.
            Your cost is the difference between the buy and sell price, which
            widens in fast or thin markets.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Published materials cite spreads from around 0.1 pips on major
            forex pairs. Treat that as a best-case figure. The spread you
            actually pay depends on the instrument, the time of day, and
            market volatility.
          </p>
        </Section>

        <Section id="funding">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Overnight funding and swap-free accounts
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            This is the fee beginners underestimate most. If you hold a
            leveraged position past the funding time, you pay overnight
            financing. On crypto futures, funding is charged three times a
            day, roughly every eight hours. A position held for a week pays
            funding 21 times, which can quietly outweigh a tight entry
            commission.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT offers swap-free accounts on PXTrader 2.0 for eligible
            users. Standard Swap-Free accounts replace overnight swaps with
            an administrative-fee model, while Extended Swap-Free conditions
            may remove that charge for qualifying accounts. Eligibility and
            fees vary, so read the current terms before choosing this route.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Rule of thumb:</strong> day traders mostly care about
              maker/taker and spread. Swing traders holding for days should
              model funding first, because it compounds with every funding
              period.
            </p>
          </div>
        </Section>

        <Section id="example">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Worked example: a $10,000 BTC futures trade
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Say you open a $10,000 BTC/USDT futures position with a market
            order at the Regular tier (0.045% taker) and close it later the
            same way:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Open:</strong> $10,000 x 0.045% = <strong>$4.50</strong>
            </li>
            <li>
              <strong>Close:</strong> $10,000 x 0.045% ={" "}
              <strong>$4.50</strong>
            </li>
            <li>
              <strong>Round-trip commission: $9.00</strong>, before spread,
              slippage, or any funding.
            </li>
          </ul>

          <p className="mt-4 leading-8 text-slate-800">
            The same trade with limit orders (0.01% maker) would cost $1.00
            per side, or $2.00 round trip. Order type alone changes the cost
            by more than four times, which is why fee-aware traders prefer
            limit orders when patience allows.
          </p>
        </Section>

        <Section id="deposits-withdrawals">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Deposit and withdrawal fees
          </h2>

          <h3 className="mt-6 text-2xl font-black text-slate-950">Deposits</h3>

          <p className="mt-3 leading-8 text-slate-800">
            PrimeXBT does not charge a fee for depositing. You can fund with
            crypto (BTC, ETH, USDT, USDC, and others) or through third-party
            providers for cards and bank transfers. Those third parties set
            their own charges, so a card deposit can still cost you even
            though PrimeXBT takes nothing.
          </p>

          <h3 className="mt-6 text-2xl font-black text-slate-950">
            Withdrawals
          </h3>

          <p className="mt-3 leading-8 text-slate-800">
            Withdrawals carry a fixed fee that depends on the asset and the
            network. Withdrawing USDT, for example, costs different amounts
            on ERC-20, BEP-20, and TRC-20, because each network has its own
            congestion and cost profile. The fee is flat per withdrawal, not
            a percentage, so small frequent withdrawals are proportionally
            more expensive than larger occasional ones.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Check the live withdrawal page right before you withdraw. Network
            fees move with congestion, and the schedule can change.
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
              Continue with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              Fees are one chapter. The full review covers leverage,
              regulation, restricted countries, platform tools, and who
              should skip PrimeXBT entirely.
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
              This page was reviewed on {UPDATED}. Fee tiers, spreads,
              funding rates, and withdrawal charges can change with market
              conditions and provider updates. Check the current provider
              terms before trading.
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
                for current products, the Fees &amp; Conditions page, and
                legal links.
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
              PrimeXBT&apos;s official website before depositing funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
