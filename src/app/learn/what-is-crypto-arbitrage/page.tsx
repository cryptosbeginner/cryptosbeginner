import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/what-is-crypto-arbitrage`;
const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: "What Is Crypto Arbitrage? Types, Real Examples, and Risks (2026 Guide)",
  description:
    "Crypto arbitrage means buying where it is cheap and selling where it is priced higher. The 7 types explained with real numbers, the fee math beginners skip, why most lose money, and how to spot scams.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Is Crypto Arbitrage? Types, Real Examples, and Risks",
    description:
      "Buy low, sell high, keep the gap: the 7 arbitrage types with worked numbers, the gross-vs-net fee trap, and the scam red flags.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/arbitrage/how-arbitrage-works.svg`, width: 1200, height: 640, alt: "Diagram showing the three steps of cross-exchange crypto arbitrage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Crypto Arbitrage? Types, Real Examples, and Risks",
    description:
      "The 7 arbitrage types with real numbers, the fee math that kills most trades, and how to spot the scams.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What is crypto arbitrage in simple terms?",
    answer:
      "Crypto arbitrage is buying a cryptocurrency where it costs less and selling it where it is priced higher, keeping the difference. Because hundreds of independent exchanges each set prices from their own order books, the same coin routinely trades at slightly different prices in different places at the same time.",
  },
  {
    question: "Is crypto arbitrage profitable for beginners?",
    answer:
      "Rarely. Typical price gaps for major coins are fractions of a percent, while the all-in cost of trading fees, withdrawal fees, network fees, and slippage is often around 1% or more. Automated bots also close gaps in seconds. Most beginners lose money because they trade the headline gap instead of the net profit after every cost.",
  },
  {
    question: "What are the main types of crypto arbitrage?",
    answer:
      "The main types are cross-exchange arbitrage (buy on one exchange, sell on another), triangular arbitrage (three trades on one exchange), cross-border arbitrage (regional price premiums), funding-rate arbitrage (long spot plus short perpetuals), P2P arbitrage (reselling where exchanges are hard to access), DEX arbitrage (price gaps between decentralized and centralized exchanges), and flash-loan arbitrage (advanced, single-transaction borrowing).",
  },
  {
    question: "Is crypto arbitrage legal?",
    answer:
      "Arbitrage itself is legal in most countries; it is ordinary trading. But some jurisdictions ban or restrict crypto entirely, profits are taxable in most places (usually as capital gains), and a few exchanges forbid arbitrage strategies in their terms. This is general information, not legal or tax advice.",
  },
  {
    question: "Are crypto arbitrage bots legitimate?",
    answer:
      "Real arbitrage automation exists, but it is built by professionals and never needs your withdrawal permissions. Bots marketed with guaranteed profits, fixed daily returns, or upfront activation fees are scams designed to drain wallets or run Ponzi schemes. Treat any guaranteed-profit claim as a red flag.",
  },
  {
    question: "How much money do you need to start crypto arbitrage?",
    answer:
      "Because spreads are thin, meaningful profit requires meaningful capital, and that capital gets split across multiple exchanges. There is no fixed minimum, but with a few hundred dollars the fees alone usually erase the gap. Paper-trade the math first: if the net spread after all fees is not clearly positive, the trade is not worth taking.",
  },
];

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

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full" loading="lazy" />
      <figcaption className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

export default function WhatIsCryptoArbitragePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Crypto Arbitrage? Types, Real Examples, and Risks (2026 Guide)",
    description: metadata.description,
    datePublished: UPDATED_ISO,
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · trading guides</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              What is crypto arbitrage? Types, real examples, and risks
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Buy where it is cheap, sell where it is priced higher, keep the difference.
              Simple idea, brutal execution. Here is how it really works, with the numbers
              most guides leave out.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <Section>
          <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">The short version</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-emerald-950">
              <li><strong>Arbitrage</strong> exploits price differences for the same coin across exchanges, regions, or trading pairs.</li>
              <li>Typical gaps for major coins are <strong>fractions of a percent</strong>, and they close in <strong>seconds</strong> as bots pounce.</li>
              <li>The <strong>net spread after fees</strong> is the only number that matters. A 1% headline gap is often a loss after costs.</li>
              <li><strong>Guaranteed-profit arbitrage bots are scams.</strong> Real automation never needs your withdrawal permissions.</li>
            </ul>
          </div>
        </Section>

        <Section id="definition">
          <H2>The idea in one paragraph</H2>
          <P>
            Crypto has no central price feed. Hundreds of independent exchanges each set prices from
            their own order books, their own liquidity, and their own regional demand. So the same
            asset routinely trades at slightly different prices in different places at the same moment.
            Arbitrage is the act of buying where it is cheaper and selling where it is priced higher,
            pocketing the difference. It is the same concept as in traditional markets, applied to an
            environment with hundreds of venues trading around the clock.
          </P>
          <P>
            Here is the catch most introductions skip: the price you see is not the price you get.
            The real price is the <strong>effective price</strong>, after trading fees, withdrawal fees,
            network fees, slippage, and the time it takes to move coins between venues. A scanner that
            only shows headline gaps will mislead you. Every example in this guide does the full math.
          </P>
          <Figure
            src="/images/learn/arbitrage/how-arbitrage-works.svg"
            alt="Three-step diagram of cross-exchange arbitrage: buy 1 BTC on Exchange A, transfer it, sell on Exchange B, with fees subtracted from the gross gap"
            caption="The classic cross-exchange trade: three steps, and the profit is whatever survives the fees."
          />
        </Section>

        <Section id="types">
          <H2>The 7 types of crypto arbitrage</H2>
          <P>
            Arbitrage is one idea with several battlefields. Beginners should understand the first
            three; the rest are here so you recognize what people are talking about.
          </P>
          <Figure
            src="/images/learn/arbitrage/arbitrage-types.svg"
            alt="Grid illustrating seven types of crypto arbitrage: cross-exchange, triangular, cross-border, funding rate, P2P, DEX, flash loans, and statistical"
            caption="Seven ways to chase the same gap. Only the first few are remotely accessible without serious infrastructure."
          />
          <div className="mt-8 space-y-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">1. Cross-exchange (spatial) arbitrage</h3>
              <P>
                Buy on Exchange A, sell on Exchange B. Example: 1 BTC costs $50,000 on one exchange
                and $50,200 on another. Buy low, sell high: $200 gross profit before fees. This is the
                trade most people picture, and the one most exposed to transfer-time risk, because the
                coins must physically move between venues while the price can shift.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">2. Triangular arbitrage</h3>
              <P>
                Cycle through three trading pairs on the <em>same</em> exchange to exploit misaligned
                implied rates. Example: start with 10,000 USDT, buy BTC, trade BTC for ETH, trade ETH
                back to USDT. If the three legs do not line up, you might end with 10,050 USDT. No
                cross-exchange transfer is needed, but you pay trading fees three times, which usually
                eats the edge.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">3. Cross-border (geographic) arbitrage</h3>
              <P>
                Exploit persistent regional premiums caused by capital controls or local demand. The
                famous case is the <strong>Kimchi premium</strong>: Bitcoin has repeatedly traded at
                large premiums on Korean exchanges versus global prices, at times around 50%, with
                Japan seeing 10 to 15%. The premium persists precisely because moving large amounts of
                local currency out is hard, which is also why most outsiders cannot capture it.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">4. Funding-rate arbitrage</h3>
              <P>
                On perpetual futures, a funding rate keeps futures prices near spot. When the rate is
                strongly positive, traders go long on spot and short on perps, collecting funding
                payments roughly every 8 hours. It looks market-neutral, but funding rates and margin
                requirements can change mid-trade, and leverage amplifies any mistake.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">5. P2P arbitrage</h3>
              <P>
                Buy crypto cheaply and resell at a markup to buyers who cannot easily reach exchanges,
                often through P2P platforms. Stablecoins are the usual vehicle. During bull runs,
                premiums of 10 to 30% over spot are not uncommon in markets with restricted exchange
                access. The risks are counterparty trust and, for in-person deals, personal safety.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">6. DEX / DeFi arbitrage</h3>
              <P>
                Exploit gaps between decentralized exchanges (which price via automated market makers)
                and centralized exchanges (which use order books), or between DEX pools themselves.
                Example: ETH at $2,000 on a BNB Chain pool versus $2,100 on a centralized exchange.
                Gas fees are the silent killer here: on-chain legs get expensive exactly when
                opportunities are richest.
              </P>
            </div>
            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <h3 className="text-lg font-black">7. Flash loans and statistical arbitrage (advanced)</h3>
              <P>
                Flash loans let programmers borrow large sums with zero collateral inside a single
                blockchain transaction, route through profitable swaps, and repay everything in the
                same transaction. Statistical arbitrage uses quant models to trade deviations lasting
                seconds. Both are institutional or developer territory, and MEV searchers compete for
                the same crumbs. Included here for completeness, not as a suggestion.
              </P>
            </div>
          </div>
        </Section>

        <Section id="worked-example">
          <H2>A worked example with real numbers</H2>
          <P>
            Let us run a cross-exchange trade the way a careful trader would, costs first.
            ETH is $3,000 on Exchange A and $3,040 on Exchange B: a 1.33% gross spread.
            You commit 10 ETH, which is $30,000 of capital.
          </P>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-6 py-4 font-black">Line item</th>
                  <th className="px-6 py-4 text-right font-black">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr><td className="px-6 py-4">Buy 10 ETH on Exchange A</td><td className="px-6 py-4 text-right font-semibold">$30,000.00</td></tr>
                <tr><td className="px-6 py-4">Sell 10 ETH on Exchange B</td><td className="px-6 py-4 text-right font-semibold">$30,400.00</td></tr>
                <tr><td className="px-6 py-4 font-black text-slate-950">Gross gain</td><td className="px-6 py-4 text-right font-black text-emerald-700">+$400.00</td></tr>
                <tr><td className="px-6 py-4">Buy-side taker fee (0.075%)</td><td className="px-6 py-4 text-right font-semibold text-rose-700">−$22.50</td></tr>
                <tr><td className="px-6 py-4">Sell-side taker fee (0.075%)</td><td className="px-6 py-4 text-right font-semibold text-rose-700">−$22.80</td></tr>
                <tr><td className="px-6 py-4">ETH withdrawal + network fee</td><td className="px-6 py-4 text-right font-semibold text-rose-700">−$10.00</td></tr>
                <tr><td className="px-6 py-4 font-black text-slate-950">Net profit (before slippage and tax)</td><td className="px-6 py-4 text-right font-black text-slate-950">≈ $344.70</td></tr>
              </tbody>
            </table>
          </div>
          <P>
            That is about <strong>1.15%</strong> on $30,000 of capital, and it assumes the price did
            not move during the transfer, your orders filled at the quoted prices, and nothing else
            went wrong. Shrink the spread to 0.8% and keep the same costs, and the trade flips to a
            loss. This is the single most important lesson in arbitrage: <strong>the headline gap is
            never the profit</strong>.
          </P>
          <Figure
            src="/images/learn/arbitrage/gross-vs-net.svg"
            alt="Bar-style infographic showing a $400 gross gain reduced by trading, withdrawal, and network fees to about $340 net profit"
            caption="Gross versus net on a 1.33% spread. Fees take the first bite out of every gap."
          />
        </Section>

        <Section id="risks">
          <H2>The full cost and risk stack</H2>
          <P>
            Professionals evaluate every trade against this list. If you cannot answer each line,
            you are gambling, not arbitraging.
          </P>
          <ul className="mt-6 space-y-4">
            {[
              ["Trading fees, twice", "Maker/taker fees run about 0.02 to 0.1% per side on most exchanges, and you pay on both legs. Triangular arbitrage pays three times."],
              ["Withdrawal and network fees", "Moving coins off an exchange costs a withdrawal fee plus the blockchain network fee. Some venues waive one or the other, most do not."],
              ["Transfer-time risk", "The signature risk of arbitrage. Bitcoin averages about 10 minutes per confirmation, and cross-exchange transfers can take anywhere from seconds to days. The price can move against you while your coins are in transit."],
              ["Slippage", "Your own order moves the price on thin order books. The quoted price is not the filled price, especially at size."],
              ["KYC and verification delays", "Serious size needs verified accounts on every venue you touch. Verification takes days, and some regions are blocked entirely."],
              ["Capital fragmentation", "Spreads are thin, so meaningful profit needs meaningful size, and that capital sits split across venues instead of working in one place."],
              ["Exchange risk", "Funds parked on multiple venues are exposed to hacks, insolvency, withdrawal freezes, and delistings. A few exchanges even forbid arbitrage in their terms."],
              ["Withdrawal limits", "Daily and weekly caps slow how fast you can redeploy capital after a trade."],
              ["Tax and regulation", "Arbitrage is legal in most places, but profits are usually taxable as capital gains, and some countries ban or restrict crypto outright. Rules shift; check yours."],
            ].map(([title, body]) => (
              <li key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-[1.5rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
            <h3 className="font-black text-indigo-950">The pro workaround: pre-positioned capital</h3>
            <p className="mt-2 text-sm leading-7 text-indigo-900">
              Experienced arbitrageurs keep fiat and crypto already sitting on both exchanges. When a
              gap appears, they buy on A and sell on B near-simultaneously, with no blockchain
              transfer in the critical path. This removes transfer-time risk and withdrawal fees from
              the trade itself. It requires more capital and more exchange risk, which is why
              arbitrage is a capital game, not a cleverness game.
            </p>
          </div>
        </Section>

        <Section id="why-beginners-lose">
          <H2>Why beginners usually lose</H2>
          <Figure
            src="/images/learn/arbitrage/why-beginners-lose.svg"
            alt="Four-panel infographic on why beginners lose at arbitrage: bots, transfer delays, fee illusion, and scam bots"
            caption="Four ways the edge disappears before a manual trader can act on it."
          />
          <P>
            Put bluntly: you are racing bots that execute in milliseconds for gaps that last seconds,
            while paying retail fees on both legs. As more arbitrageurs enter, spreads compress and
            opportunities shrink. The beginners who survive treat arbitrage as a math exercise first:
            spreadsheet the net spread, assume slippage, and walk away from anything marginal.
          </P>
        </Section>

        <Section id="scams">
          <H2>Scam red flags</H2>
          <P>
            Arbitrage hype attracts scammers because the pitch sounds like free money. Memorize these:
          </P>
          <ul className="mt-6 space-y-4">
            {[
              ["Guaranteed-profit bots", "No legitimate strategy guarantees profit. Bots sold with profit promises are frequently built to drain connected wallets or API keys. Real automation never needs withdrawal permissions."],
              ["Fixed daily returns", "Promises like 5% daily from an arbitrage bot are Ponzi packaging. Real arbitrage yields are thin, variable, and never guaranteed."],
              ["Upfront activation fees", "Paying to unlock a bot or mentorship is the classic advance-fee pattern."],
              ["Telegram and Discord schemes", "Anonymous groups pooling funds for arbitrage plays have no accountability and a long history of disappearing."],
              ["Paper-profit scanners", "A scanner showing profits you cannot execute is marketing, not a track record. Treat every scanner result as an estimate, never a promise."],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4 rounded-[1.5rem] border border-rose-200 bg-rose-50 p-6">
                <span className="text-2xl">🚨</span>
                <div>
                  <h3 className="font-black text-rose-950">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-rose-900">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="faq">
          <H2>Frequently asked questions</H2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer font-black text-slate-950">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Keep learning</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/learn/leverage-trading-guide" className="text-indigo-700 hover:text-indigo-900">
                Leverage trading guide →
              </Link>
              <Link href="/learn/how-to-trade-memecoins-safely" className="text-indigo-700 hover:text-indigo-900">
                How to trade memecoins safely →
              </Link>
              <Link href="/tools/swap" className="text-indigo-700 hover:text-indigo-900">
                Try our instant swap tool →
              </Link>
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-400">
              Educational content only, not financial advice. Examples use illustrative prices and fees;
              actual numbers vary by venue and time. Research sources include Coinbase Learn, Bybit Learn,
              Crypto.com, MEXC, the Bitcoin Foundation, Chiliz, OneKey, and Arkm Research.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
