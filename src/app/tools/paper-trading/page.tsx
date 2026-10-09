import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaperTrading from "@/components/PaperTrading";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/paper-trading`;

const AFFILIATE_GMGN = "https://gmgn.ai/?ref=XPS1eXg4";
const AFFILIATE_AXIOM = "https://go.cryptosbeginner.com/Axiom";
const AFFILIATE_PADRE = "https://trade.padre.gg/rk/1000xgems";
const AFFILIATE_FOMO = "https://fomo.family/r/cryptosbeginner";

export const metadata: Metadata = {
  title: "Paper Trading Simulator: Practice Memecoin Trading With Fake Money",
  description:
    "Paper-trade Solana memecoins with a free $10,000 virtual account. Live indicative quotes, paper buys and sells, positions, PnL, and trade history, all stored in your browser.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Paper Trading Simulator: Practice Memecoin Trading With Fake Money",
    description:
      "Learn memecoin trading mechanics with fake money: live quotes, paper fills, positions, and PnL tracking. Free, no sign-up, nothing leaves your browser.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is paper trading?",
    a: "Paper trading means placing simulated trades with fake money against real market prices. You practice entries, exits, and position sizing without risking capital, and your trade history shows whether your process actually works.",
  },
  {
    q: "Where do the prices come from?",
    a: "Quotes come from Dexscreener's public market data feed for Solana tokens. They are indicative and throttled, and a fill only happens against a freshly loaded quote, so a stale price can never fill your paper order.",
  },
  {
    q: "Is this real trading?",
    a: "No. Every balance, position, and fill on this page is simulated. No wallet is connected, no order touches a blockchain or exchange, and nothing here is financial advice.",
  },
  {
    q: "Why is there a 1% simulated fee on each fill?",
    a: "Real memecoin trading includes network fees, DEX fees, and slippage. The simulator deducts 1% per fill so paper results stay closer to what real trading would cost, instead of looking better than reality.",
  },
  {
    q: "Where is my paper account stored?",
    a: "Only in your browser's local storage on this device. Nothing is uploaded to our servers. Clearing your browser's site data wipes the paper account, and the Reset button restores the $10,000 starting balance at any time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CryptosBeginner Paper Trading Simulator",
  url: PAGE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: metadata.description,
  featureList: "Virtual $10,000 paper account, live Solana token quotes, paper buy/sell fills, positions and PnL tracking, trade history",
};

const tradeLinks = [
  { label: "GMGN", href: AFFILIATE_GMGN },
  { label: "Axiom", href: AFFILIATE_AXIOM },
  { label: "Padre", href: AFFILIATE_PADRE },
  { label: "FOMO", href: AFFILIATE_FOMO },
];

export default function PaperTradingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · paper trading</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Practice memecoin trading with fake money
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A free $10,000 virtual account for Solana memecoins. Load any token by its mint address,
              place paper buys and sells against live indicative quotes, and watch your equity curve,
              positions, and trade history update. No sign-up, no wallet, nothing leaves your browser.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Free virtual $10,000</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Live indicative quotes</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Browser-only storage</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <PaperTrading />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">How it works</p>
              <h2 className="mt-3 text-xl font-black">Three steps to your first paper trade</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Paste a Solana mint address to load its live quote, choose a USD amount and paper-buy,
                then sell any percentage of the position later. Every fill is timestamped against the
                quote it used, with a 1% simulated fee so results stay honest.
              </p>
            </section>
            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">What it teaches</p>
              <h2 className="mt-3 text-xl font-black">Process, not profit</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Paper trading is for learning mechanics: how entries, exits, and position sizing feel
                when prices move fast. A green paper account does not mean a strategy works with real
                money, where emotions, liquidity, and execution change everything.
              </p>
            </section>
            <section className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Important boundary</p>
              <h2 className="mt-3 text-xl font-black">Simulated, with limits</h2>
              <p className="mt-3 text-sm leading-7 text-amber-950/80">
                Quotes are indicative and throttled, fills assume instant execution at the quote, and
                thin markets would slip far more than 1% in reality. Treat this as a learning sandbox,
                not a backtest.
              </p>
            </section>
          </div>

          <section className="mx-auto mt-8 max-w-6xl rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Ready for real markets?</p>
            <h2 className="mt-2 text-2xl font-black">Take your practice to a live terminal</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Paper trading builds mechanics. When you decide to trade real funds, these are the
              memecoin terminals our research pages reference. Start small, and never trade money
              you cannot afford to lose.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tradeLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-500"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            <p className="mt-3 text-[11px] leading-5 text-slate-400">
              Affiliate links: CryptosBeginner may earn a commission if you trade through them.
            </p>
          </section>

          <section className="mx-auto mt-8 max-w-6xl" aria-label="Frequently asked questions">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">FAQ</p>
            <h2 className="mt-2 text-2xl font-black">Paper trading questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-black text-slate-950">{f.q}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-8 max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            <p>
              <strong className="text-slate-900">Disclaimer:</strong> Educational content only. This
              simulator is not financial, investment, legal, or tax advice. Paper trading results do
              not predict real trading outcomes. Memecoins are extremely volatile and most go to zero.
              Availability of linked third-party sites depends on their own terms.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/public-wallets/meme-traders" className="text-indigo-700 hover:text-indigo-900">
                Research meme coin traders →
              </Link>
              <Link href="/tools/fee-calculator" className="text-indigo-700 hover:text-indigo-900">
                Compare trading fees →
              </Link>
              <Link href="/methodology" className="text-indigo-700 hover:text-indigo-900">
                See our methodology →
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
