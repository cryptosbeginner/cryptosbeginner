import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://www.cryptosbeginner.com";
const pageUrl = `${siteUrl}/prediction-markets/polymarket`;
const title = "Polymarket Review: How It Works, Fees, Resolution & Risks | CryptosBeginner";
const description = "A beginner-friendly deep dive into Polymarket: outcome shares, the CLOB order book, taker fees by category, UMA oracle resolution, Polymarket US vs international, and the honest risks.";
const PARTNER_URL = "https://polymarket.com?via=cryptosbeginner";
const PARTNER_PERPS_URL = "https://polymarket.com/perps?via=perps-trading";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "article" },
};

const faqs = [
  {
    question: "What is Polymarket?",
    answer: "Polymarket is a prediction market where you trade outcome shares on real-world events: elections, sports, crypto prices, economic data, and more. Each market asks a yes-or-no question, and shares trade between $0.01 and $1.00. A share priced at $0.62 can be read as roughly a 62% market-implied probability, not a guarantee.",
  },
  {
    question: "How do Polymarket fees work?",
    answer: "Makers pay no fees. Takers pay a fee that varies by market category: crypto 0.07, sports 0.05, finance/politics/tech 0.04, economics/culture/weather 0.05, and geopolitics is fee-free. The fee peaks at 50% probability and shrinks toward either end. There are no Polymarket fees to deposit or withdraw USDC.",
  },
  {
    question: "What is the difference between Polymarket and Polymarket US?",
    answer: "Polymarket's international app is crypto-based: you fund with USDC and trade on-chain. Polymarket US is a CFTC-regulated exchange (operating through QCX LLC) that accepts debit card, ACH, and wire. They are separate products with different access rules, funding methods, and availability.",
  },
  {
    question: "How are Polymarket markets resolved?",
    answer: "Most markets use the UMA optimistic oracle. Anyone can propose an outcome; anyone can dispute it by posting a bond. If undisputed, the proposed outcome stands. Winning shares redeem for $1.00 each and losing shares become worthless. Always read the market's specific rules, because edge cases are decided by the written criteria, not the headline question.",
  },
  {
    question: "Is Polymarket available in my country?",
    answer: "Availability is market and jurisdiction dependent and has changed over time. The international app has restricted certain regions, while Polymarket US operates as a regulated exchange with its own eligibility rules. Check Polymarket's current terms and availability notices before signing up, and confirm your local tax obligations independently.",
  },
  {
    question: "What are Polymarket Perps?",
    answer: "Polymarket Perps is a separate leveraged trading product, distinct from prediction markets. It should be evaluated independently: leverage multiplies both gains and losses, and the fee structure, risks, and mechanics differ from event outcome shares. Do not confuse a perps position with a prediction market position.",
  },
];

const pros = [
  "Broadest event-market catalog in the category, from elections to crypto prices",
  "Published documentation for orders, fees, and the resolution process",
  "Order-book pricing makes the bid and ask visible before you trade",
  "Geopolitics and world-events markets carry no trading fees",
  "Makers are never charged fees",
];

const cons = [
  "Taker fees vary by category and can add up on frequent trading",
  "Availability differs by product and jurisdiction and has changed over time",
  "Resolution follows written market rules, which can surprise beginners on edge cases",
  "Liquidity varies by market; thin markets mean wider spreads",
  "A position can lose its entire purchase price",
];

export default function PolymarketReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "@id": `${pageUrl}#review`,
        url: pageUrl,
        name: title,
        description,
        itemReviewed: { "@type": "Product", name: "Polymarket" },
        author: { "@type": "Organization", name: "CryptosBeginner", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Prediction Markets", item: `${siteUrl}/prediction-markets` },
          { "@type": "ListItem", position: 3, name: "Polymarket", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="overflow-hidden bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">
                Deep-dive review · updated October 2026
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Polymarket, explained before you trade a single share.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Polymarket is the largest prediction market in the world: you buy and sell shares tied to
                yes-or-no questions about elections, sports, crypto, and economics. This review covers how
                the order book works, what the fees actually cost, how the UMA oracle settles markets, how
                Polymarket US differs from the international app, and the risks beginners miss.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PARTNER_URL}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="rounded-full bg-lime-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-200"
                >
                  Explore Polymarket
                </a>
                <a
                  href="/prediction-markets#live-markets"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-lime-300 hover:text-lime-300"
                >
                  See live market odds
                </a>
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-400">
                Affiliate disclosure: CryptosBeginner has a disclosed partner relationship with Polymarket.
                Inclusion here is informational, not a recommendation. Provider rules, fees, and availability
                can change; verify current terms before trading.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">The basics</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">How Polymarket works</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every Polymarket market asks one yes-or-no question with a closing date. You trade outcome
              shares priced between $0.01 and $1.00. If the answer is yes, Yes shares redeem for $1.00 each
              and No shares become worthless. The price is the market's collective probability estimate: a
              Yes share at $0.62 implies roughly a 62% chance, but it is shaped by liquidity, fees, and who
              happens to be trading, so treat it as a signal, not a forecast.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm font-black text-lime-300">01 · Shares</p>
              <h3 className="mt-3 text-xl font-black">Buy Yes or No</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Pick a side on the question. You can hold until resolution or sell early at the current
                market price if liquidity allows.
              </p>
            </article>
            <article className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 text-indigo-950">
              <p className="text-sm font-black text-indigo-700">02 · Order book</p>
              <h3 className="mt-3 text-xl font-black">The CLOB matches you</h3>
              <p className="mt-3 text-sm leading-7">
                A central limit order book matches buyers and sellers. Makers post limit orders for free;
                takers who match existing orders pay the category fee. The visible bid and ask show you the
                real spread before you commit.
              </p>
            </article>
            <article className="rounded-3xl border border-amber-100 bg-amber-50 p-6 text-amber-950">
              <p className="text-sm font-black text-amber-700">03 · Resolution</p>
              <h3 className="mt-3 text-xl font-black">UMA settles it</h3>
              <p className="mt-3 text-sm leading-7">
                The UMA optimistic oracle resolves most markets. Anyone proposes an outcome; anyone can
                dispute it by posting a bond. Undisputed proposals stand, and winning shares redeem for $1.
              </p>
            </article>
          </div>
        </section>

        {/* Fees */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Costs</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">What trading actually costs</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Polymarket charges taker fees that vary by market category. Makers are never charged. The
                fee is calculated in USDC, peaks at 50% probability, and shrinks symmetrically toward either
                end. Geopolitics and world-events markets are completely fee-free.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-4 font-black text-slate-950">Category</th>
                    <th className="px-5 py-4 font-black text-slate-950">Taker fee rate</th>
                    <th className="px-5 py-4 font-black text-slate-950">Maker fee</th>
                    <th className="px-5 py-4 font-black text-slate-950">Example: $50 trade at 50¢</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr><td className="px-5 py-3 font-bold text-slate-900">Crypto</td><td className="px-5 py-3">0.07</td><td className="px-5 py-3">0</td><td className="px-5 py-3">$1.75</td></tr>
                  <tr><td className="px-5 py-3 font-bold text-slate-900">Sports</td><td className="px-5 py-3">0.05</td><td className="px-5 py-3">0</td><td className="px-5 py-3">$1.25</td></tr>
                  <tr><td className="px-5 py-3 font-bold text-slate-900">Finance / Politics / Tech</td><td className="px-5 py-3">0.04</td><td className="px-5 py-3">0</td><td className="px-5 py-3">$1.00</td></tr>
                  <tr><td className="px-5 py-3 font-bold text-slate-900">Economics / Culture / Weather</td><td className="px-5 py-3">0.05</td><td className="px-5 py-3">0</td><td className="px-5 py-3">$1.25</td></tr>
                  <tr><td className="px-5 py-3 font-bold text-slate-900">Geopolitics</td><td className="px-5 py-3">0 (fee-free)</td><td className="px-5 py-3">0</td><td className="px-5 py-3">$0.00</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Source:{" "}
              <a
                href="https://docs.polymarket.com/trading/fees"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-700 underline"
              >
                Polymarket fee documentation
              </a>
              , reviewed October 2026. Fees fund a maker rebate program; takers can earn a portion back
              through a tiered taker rebate program. No Polymarket fees apply to USDC deposits or
              withdrawals, though intermediaries like Coinbase or MoonPay may charge their own.
            </p>
          </div>
        </section>

        {/* US vs International */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Two products</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Polymarket US vs the international app</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              These are different products with different rails. Do not assume the rules of one apply to the
              other.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">International app</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Crypto-native: fund with USDC and trade on-chain</li>
                <li>Central limit order book with maker/taker structure</li>
                <li>Broadest market catalog across categories</li>
                <li>Availability varies by jurisdiction and has changed over time</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">Polymarket US</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>CFTC-regulated exchange operating through QCX LLC</li>
                <li>Fund with debit card, ACH, or wire transfer</li>
                <li>Designed for US regulatory compliance</li>
                <li>Separate availability rules from the international app</li>
              </ul>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
            Note: Polymarket US sued Ohio officials in federal court in October 2026 after the state's
            Casino Control Commission ordered a halt to sports contracts. State-level challenges to sports
            event contracts are ongoing across the US, so availability can change.
          </p>
        </section>

        {/* Resolution deep dive */}
        <section className="border-y border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">Settlement</p>
              <h2 className="mt-3 text-3xl font-black">How resolution actually works</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                This is the part beginners skip, and it is the part that decides whether you get paid.
                Polymarket markets resolve through the UMA optimistic oracle: after the event, anyone can
                propose an outcome. If nobody disputes it within the challenge window, the proposal stands.
                If someone disputes it, they post a bond and the dispute goes through UMA's resolution
                process. Winning shares redeem for $1.00; losing shares expire worthless.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The critical detail: resolution follows the market's written rules, not your reading of the
                headline question. Edge cases, exact wording, the designated source, and cutoff times all
                live in the market rules. Read them before every trade, especially on politics and
                fast-moving news markets.
              </p>
              <a
                href="https://docs.polymarket.com/concepts/resolution"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-lime-300 hover:text-lime-300"
              >
                Read the official resolution docs
              </a>
            </div>
          </div>
        </section>

        {/* Live markets teaser */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Live data</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">See what the market thinks right now</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our prediction markets hub pulls live odds from Polymarket and Kalshi, showing trending
              questions with real-time Yes/No prices, 24h volume, and venue comparisons.
            </p>
            <Link
              href="/prediction-markets#live-markets"
              className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-black text-white transition hover:bg-indigo-700"
            >
              View live Polymarket odds
            </Link>
          </div>
        </section>

        {/* Perps warning */}
        <section className="border-y border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">Separate product</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">A note on Polymarket Perps</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Polymarket also offers a Perps product for leveraged trading. This is a different product
                from prediction markets with different mechanics, fees, and risks. Leverage multiplies both
                gains and losses, and a leveraged position can be liquidated. Evaluate it independently, and
                do not confuse a perps position with an event outcome share.
              </p>
              <a
                href={PARTNER_PERPS_URL}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="mt-6 inline-block rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
              >
                Learn about Polymarket Perps
              </a>
            </div>
          </div>
        </section>

        {/* Pros and cons */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Verdict</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Pros and cons</h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-black text-emerald-950">What stands out</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-emerald-900">
                {pros.map((item) => (
                  <li key={item} className="flex gap-2"><span className="font-black">+</span>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-xl font-black text-rose-950">What to watch</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-rose-900">
                {cons.map((item) => (
                  <li key={item} className="flex gap-2"><span className="font-black">−</span>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-black text-slate-950">Risks, stated plainly</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>A position can lose its entire purchase price if the outcome goes against you.</li>
              <li>Thin markets have wide spreads; the price you see may not be the price you get.</li>
              <li>Resolution follows written market rules, and edge cases can surprise even careful readers.</li>
              <li>Availability, fees, and product rules can change; verify current terms before trading.</li>
              <li>Nothing here is financial advice. Only trade what you can afford to lose.</li>
            </ul>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 inline-block rounded-full bg-lime-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-200"
            >
              Explore Polymarket
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Partner link with disclosure. Verify current terms, fees, and availability before trading.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-black">Polymarket questions, answered plainly</h2>
            <div className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
              {faqs.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-8 font-bold text-white">
                    {item.question}
                    <span className="float-right text-lime-300 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>Educational review only. Provider rules, fees, availability, and market status can change.</p>
            <Link href="/prediction-markets" className="font-bold text-indigo-700">
              Back to all prediction markets
            </Link>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
