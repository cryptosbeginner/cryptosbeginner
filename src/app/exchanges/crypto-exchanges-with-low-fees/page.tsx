import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/crypto-exchanges-with-low-fees`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2024";

const AFF = {
  mexc: "https://go.cryptosbeginner.com/MEXC-Bonus",
  bybit: "https://go.cryptosbeginner.com/Bybit",
  binance: "https://go.cryptosbeginner.com/binance",
  okx: "https://go.cryptosbeginner.com/OKX",
  bitget: "https://go.cryptosbeginner.com/BitgetBonus",
  bitunix: "https://go.cryptosbeginner.com/Bitunix",
  weex: "https://go.cryptosbeginner.com/WEEX-Bonus",
  bydfi: "https://go.cryptosbeginner.com/BYDFi",
  primexbt: "https://go.prmx.co/visit/?bta=36112&nci=7605",
  kraken: "https://go.cryptosbeginner.com/Kraken",
};

export const metadata: Metadata = {
  title: "Crypto Exchanges With Low Fees 2026: Cheapest Trading Fees Compared",
  description:
    "October 2026 comparison of the lowest-fee crypto exchanges: verified spot and futures fee tables for MEXC, Bybit, Binance, OKX, Bitget, and more, plus the hidden costs beginners miss.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Exchanges With Low Fees 2026: Cheapest Trading Fees Compared",
    description:
      "Verified fee tables for the cheapest crypto exchanges, maker vs taker explained, and the hidden costs that matter more than the headline rate.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/binance-fee-schedule.png`,
        width: 1024,
        height: 600,
        alt: "Binance published spot trading fee schedule showing tiered rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Exchanges With Low Fees 2026: Compared",
    description:
      "The cheapest crypto trading fees, verified against official schedules, plus the hidden costs beginners miss.",
    images: [`${SITE_URL}/images/binance-fee-schedule.png`],
  },
};

const faqItems = [
  {
    question: "Which crypto exchange has the lowest trading fees?",
    answer:
      "On verified published schedules, MEXC is the cheapest for spot at 0% maker and 0.05% taker on the standard tier. For crypto futures, PrimeXBT's entry tier starts at 0.01% maker with taker from 0.045%. But the headline rate is only part of the story: spreads, funding rates, and withdrawal fees can outweigh a small difference in trading fees.",
  },
  {
    question: "What is the difference between maker and taker fees?",
    answer:
      "A maker places a limit order that sits on the order book, adding liquidity. A taker places a market order that fills immediately against existing orders, removing liquidity. Exchanges usually charge makers less, and sometimes pay them a small rebate, because makers make the market work. If you trade with limit orders instead of market orders, you almost always pay the lower maker rate.",
  },
  {
    question: "Do 0% fee promotions really mean free trading?",
    answer:
      "They mean no trading commission on eligible pairs, but trading is never truly free. You still pay the spread between the buy and sell price, network or withdrawal fees when you move coins out, and possibly deposit fees depending on your payment method. Read the promotion terms: zero-fee campaigns usually cover specific pairs and exclude volume from VIP tier calculations.",
  },
  {
    question: "How much do fees matter for a beginner buying occasionally?",
    answer:
      "Less than you think, and more than you expect. On a single $100 buy, the difference between 0.10% and 1% is 90 cents. But beginners usually pay the expensive simple-buy price, around 1% plus spread, instead of the 0.10% advanced rate. Learning the advanced interface once saves you far more than switching between cheap exchanges.",
  },
  {
    question: "Are low-fee exchanges safe?",
    answer:
      "Low fees and safety are unrelated. Some of the cheapest exchanges are well-established and regulated, others are not. Check licensing, proof of reserves, security history, and how long the exchange has operated before funding any account. Never choose an exchange on fees alone, and never keep more on any exchange than you are actively trading.",
  },
  {
    question: "Do fees go down if I trade more?",
    answer:
      "Yes, on almost every major exchange. VIP tiers reduce maker and taker rates based on your 30-day trading volume or token holdings. Holding the exchange's native token, like BNB on Binance or BGB on Bitget, usually unlocks an extra discount on top. Check the fee schedule page for the exact thresholds.",
  },
];

function AffiliateButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{ color: "#ffffff", textDecoration: "none" }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

function Figure({
  src,
  alt,
  caption,
  width = 1024,
  height = 600,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
      />
      <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

export default function LowFeeExchangesPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Crypto Exchanges With Low Fees 2026: Cheapest Trading Fees Compared",
    description:
      "Verified spot and futures fee tables for the lowest-fee crypto exchanges, maker vs taker explained, and the hidden costs beginners miss.",
    datePublished: "2024-05-28",
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: "Alex Rivera", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Exchanges · fees
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Crypto exchanges with low fees 2026: the cheapest trading fees, compared honestly
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Every fee figure below is taken from the exchange&apos;s published schedule as
              verified in our review library, not from marketing pages. You get the real spot and
              futures tables, what maker and taker mean, and the hidden costs that quietly matter
              more than the headline rate.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4 text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">Affiliate disclosure:</strong> some links on this page
          may earn us a commission at no extra cost to you. It does not change our assessment.
        </div>

        <div className="py-10">
          <Section id="spot-fees">
            <H2>Spot trading fees compared</H2>
            <P>
              These are entry-tier spot rates from each exchange&apos;s published fee schedule, as
              verified in our reviews. VIP tiers, native-token discounts, and promotions can push
              them lower.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-900">Exchange</th>
                    <th className="px-4 py-3 font-black text-slate-900">Maker</th>
                    <th className="px-4 py-3 font-black text-slate-900">Taker</th>
                    <th className="px-4 py-3 font-black text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">MEXC</td>
                    <td className="px-4 py-3">0%</td>
                    <td className="px-4 py-3">0.05%</td>
                    <td className="px-4 py-3">20% off with MX token; zero-fee promos run regularly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">OKX</td>
                    <td className="px-4 py-3">0.08%</td>
                    <td className="px-4 py-3">0.05%</td>
                    <td className="px-4 py-3">Regular tier; lower at VIP levels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Bitunix</td>
                    <td className="px-4 py-3">0.08%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">Base tier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Binance</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.075% when you pay fees with BNB</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Bybit</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">Entry tier; VIP tiers reduce both</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Bitget</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.08% when you pay fees with BGB</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WEEX</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">Base tier, flat</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">BYDFi</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">0.10%</td>
                    <td className="px-4 py-3">Flat, no discounts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Kraken Pro</td>
                    <td className="px-4 py-3">0.40%</td>
                    <td className="px-4 py-3">0.80%</td>
                    <td className="px-4 py-3">Entry tier since the July 2026 change; falls with volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Verified against our{" "}
              <Link href="/exchanges/mexc-review" className="font-bold text-emerald-700 underline">
                MEXC review
              </Link>
              ,{" "}
              <Link href="/exchanges/okx-review" className="font-bold text-emerald-700 underline">
                OKX review
              </Link>
              ,{" "}
              <Link href="/exchanges/bitunix-review" className="font-bold text-emerald-700 underline">
                Bitunix review
              </Link>
              ,{" "}
              <Link href="/exchanges/binance-review" className="font-bold text-emerald-700 underline">
                Binance review
              </Link>
              ,{" "}
              <Link href="/exchanges/bybit-review" className="font-bold text-emerald-700 underline">
                Bybit review
              </Link>
              ,{" "}
              <Link href="/exchanges/bitget-review" className="font-bold text-emerald-700 underline">
                Bitget review
              </Link>
              ,{" "}
              <Link href="/exchanges/weex-review" className="font-bold text-emerald-700 underline">
                WEEX review
              </Link>
              ,{" "}
              <Link href="/exchanges/bydfi-review" className="font-bold text-emerald-700 underline">
                BYDFi review
              </Link>
              , and{" "}
              <Link href="/exchanges/kraken-review" className="font-bold text-emerald-700 underline">
                Kraken review
              </Link>
              . Fee schedules change, so confirm the live page before a large trade.
            </P>
            <Figure
              src="/images/binance-fee-schedule.png"
              alt="Binance published spot trading fee schedule showing tiered rates"
              caption="Binance's published spot fee schedule. Most majors now cluster around 0.10%."
            />
          </Section>

          <Section id="futures-fees">
            <H2>Futures and derivatives fees compared</H2>
            <P>
              Derivatives fees run lower than spot because exchanges compete fiercely for leveraged
              volume. Remember that leverage multiplies losses exactly as fast as gains, so a cheap
              fee schedule is no reason to use high leverage.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-900">Exchange</th>
                    <th className="px-4 py-3 font-black text-slate-900">Maker</th>
                    <th className="px-4 py-3 font-black text-slate-900">Taker</th>
                    <th className="px-4 py-3 font-black text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">MEXC</td>
                    <td className="px-4 py-3">0%</td>
                    <td className="px-4 py-3">0.02%</td>
                    <td className="px-4 py-3">As stated on the MEXC homepage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PrimeXBT</td>
                    <td className="px-4 py-3">0.01%</td>
                    <td className="px-4 py-3">from 0.045%</td>
                    <td className="px-4 py-3">Crypto futures entry tier; falls at VIP levels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Bybit</td>
                    <td className="px-4 py-3">0.02%</td>
                    <td className="px-4 py-3">0.055%</td>
                    <td className="px-4 py-3">Perpetuals entry tier; options 0.02% / 0.03%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Kraken</td>
                    <td className="px-4 py-3">0.02%</td>
                    <td className="px-4 py-3">0.05%</td>
                    <td className="px-4 py-3">Futures entry tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Verified against our{" "}
              <Link href="/exchanges/mexc-review" className="font-bold text-emerald-700 underline">
                MEXC review
              </Link>
              ,{" "}
              <Link href="/exchanges/primexbt-review" className="font-bold text-emerald-700 underline">
                PrimeXBT review
              </Link>
              ,{" "}
              <Link href="/exchanges/bybit-review" className="font-bold text-emerald-700 underline">
                Bybit review
              </Link>
              , and{" "}
              <Link href="/exchanges/kraken-review" className="font-bold text-emerald-700 underline">
                Kraken review
              </Link>
              . Funding rates are a separate, ongoing cost on perpetuals and are not included above.
            </P>
            <Figure
              src="/images/bybit-fee-schedule-2026.png"
              alt="Bybit published fee schedule showing spot, perpetual, and options rates"
              caption="Bybit's published schedule separates spot, perpetual, and options fees."
            />
          </Section>

          <Section id="maker-taker">
            <H2>Maker vs taker: the fee lever most beginners miss</H2>
            <P>
              Every trade has two sides. The <strong className="text-slate-900">maker</strong> places
              a limit order that waits on the order book, adding liquidity. The{" "}
              <strong className="text-slate-900">taker</strong> hits an existing order with a market
              order, removing liquidity. Exchanges reward makers with lower fees, sometimes even a
              small rebate, because makers are what make the market function.
            </P>
            <P>
              On MEXC, that distinction is the difference between 0% and 0.05%. On Kraken Pro, it is
              the difference between 0.40% and 0.80%. If your trade is not urgent, placing a limit
              order at the price you actually want almost always costs less than smashing the
              market-buy button. It is the single easiest fee saving in crypto.
            </P>
          </Section>

          <Section id="hidden-costs">
            <H2>The hidden costs that beat the headline rate</H2>
            <P>
              <strong className="text-slate-900">Spreads.</strong> The gap between the buy and sell
              price is a cost you pay on every trade, and on illiquid pairs it dwarfs the trading
              fee. A 0.10% fee on a pair with a 1% spread is really a 1.10% cost.
            </P>
            <P>
              <strong className="text-slate-900">Deposit fees.</strong> SEPA transfers are usually
              free or nearly free, but card deposits commonly cost 2 to 4%. Funding a $1,000
              account by card can cost more than a year of trading fees at 0.10%.
            </P>
            <P>
              <strong className="text-slate-900">Withdrawal fees.</strong> Moving crypto off an
              exchange costs a flat network-linked fee per coin, and it varies wildly between
              exchanges. Check the withdrawal fee for the specific coin and network you will use.
            </P>
            <P>
              <strong className="text-slate-900">Funding rates.</strong> On perpetual futures, longs
              and shorts pay each other a funding rate every few hours. In a hot market, funding
              can cost more per day than the trading fee cost on entry.
            </P>
            <P>
              <strong className="text-slate-900">The simple-buy trap.</strong> The one-tap buy flow
              on most exchanges charges roughly 1% plus spread, ten times the advanced-interface
              rate. Learning the spot trading screen once is worth more than any fee comparison.
            </P>
          </Section>

          <Section id="picks">
            <H2>Our picks by trading style</H2>
            <P>
              <strong className="text-slate-900">Cheapest spot trading overall: MEXC.</strong> Zero
              maker fees and 0.05% taker on the standard tier is simply the lowest verified spot
              schedule we cover, with regular zero-fee promotions on top. Best for active spot
              traders who are comfortable with a less regulated platform. Read the{" "}
              <Link href="/exchanges/mexc-review" className="font-bold text-emerald-700 underline">
                MEXC review
              </Link>{" "}
              first.
            </P>
            <div className="mt-4">
              <AffiliateButton href={AFF.mexc}>Visit MEXC</AffiliateButton>
            </div>
            <P>
              <strong className="text-slate-900">Cheapest with EU licensing: OKX and Bybit.</strong>{" "}
              OKX at 0.08% maker and 0.05% taker and Bybit at 0.10% each side both hold MiCA licenses
              and serve Europeans cleanly. If you trade from the EU, the small fee premium over
              MEXC buys meaningful regulatory protection. See our{" "}
              <Link
                href="/exchanges/best-crypto-exchanges-europe"
                className="font-bold text-emerald-700 underline"
              >
                Europe guide
              </Link>
              .
            </P>
            <div className="mt-4 flex flex-wrap gap-3">
              <AffiliateButton href={AFF.okx}>Visit OKX</AffiliateButton>
              <AffiliateButton href={AFF.bybit}>Visit Bybit</AffiliateButton>
            </div>
            <P>
              <strong className="text-slate-900">Cheapest futures: PrimeXBT.</strong> Crypto futures
              from 0.01% maker and 0.045% taker at the entry tier is the lowest verified derivatives
              schedule in our library. Only relevant if you genuinely need leverage and understand
              liquidation risk. Our{" "}
              <Link href="/exchanges/primexbt-review" className="font-bold text-emerald-700 underline">
                PrimeXBT review
              </Link>{" "}
              covers the full picture.
            </P>
            <div className="mt-4">
              <AffiliateButton href={AFF.primexbt}>Visit PrimeXBT</AffiliateButton>
            </div>
            <P>
              <strong className="text-slate-900">Best-known brands at fair prices: Binance and
              Bitget.</strong> Binance at 0.10% (0.075% with BNB) and Bitget at 0.10% (0.08% with
              BGB) are not the absolute cheapest, but they pair competitive fees with deep
              liquidity, which keeps spreads tight. For most people, tight spreads on a liquid
              exchange beat a lower fee on a thin one.
            </P>
            <div className="mt-4 flex flex-wrap gap-3">
              <AffiliateButton href={AFF.binance}>Visit Binance</AffiliateButton>
              <AffiliateButton href={AFF.bitget}>Visit Bitget</AffiliateButton>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              If you want the lowest verified fees, MEXC wins on spot and PrimeXBT wins on futures.
              If you want low fees with EU licensing, OKX and Bybit are the sweet spot. But the
              biggest fee saving available to a beginner is not switching exchanges: it is
              abandoning the one-tap buy button for limit orders on the advanced interface, which
              cuts costs roughly tenfold on any platform. Do that first, then optimize the last
              few basis points.
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
