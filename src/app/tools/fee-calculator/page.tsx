import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeeCalculator from "@/components/FeeCalculator";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/fee-calculator`;

export const metadata: Metadata = {
  title: "Crypto Trading Fee Calculator: Compare BTC, ETH, SOL, BNB, XRP, ZEC, XMR & TRX Costs",
  description: "Estimate the cost of buying BTC, ETH, SOL, BNB, XRP, ZEC, XMR, or TRX across crypto exchanges, including trading fees, spread assumptions, deposit charges, and withdrawal costs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Trading Fee Calculator: Compare BTC, ETH, SOL, BNB, XRP, ZEC, XMR & TRX Costs",
    description: "Compare estimated trading, spread, funding, and withdrawal costs for eight popular crypto assets across affiliated and non-affiliate reference exchanges.",
    url: PAGE_URL,
    type: "website",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What does the crypto fee calculator include?", acceptedAnswer: { "@type": "Answer", text: "It estimates a selected exchange’s trading fee, a transparent spread assumption, an optional user-entered deposit fee, and an optional illustrative withdrawal amount for BTC, ETH, SOL, BNB, XRP, ZEC, XMR, or TRX." } },
    { "@type": "Question", name: "Why can my actual crypto purchase cost differ?", acceptedAnswer: { "@type": "Answer", text: "Actual costs can change because of the product used, market conditions, account tier, region, payment method, promotions, price impact, asset, network, and the provider’s final confirmation screen." } },
    { "@type": "Question", name: "Does the calculator recommend an exchange?", acceptedAnswer: { "@type": "Answer", text: "No. It is an estimate and comparison aid. Some results include affiliate links and some are official non-affiliate reference links; the displayed assumptions are not a suitability assessment." } },
  ],
};

export default function FeeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: "CryptosBeginner Crypto Trading Fee Calculator", url: PAGE_URL, applicationCategory: "FinanceApplication", operatingSystem: "Web", description: metadata.description, featureList: "BTC, ETH, SOL, BNB, XRP, ZEC, XMR, and TRX cost estimates" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · exchange costs</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">What does it actually cost to buy crypto?</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">Compare an estimated BTC, ETH, SOL, BNB, XRP, ZEC, XMR, or TRX purchase cost across exchanges by separating the trading fee, spread assumption, funding charge, and optional withdrawal cost. Use the result as a planning estimate—not a live quote.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300"><span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Affiliate + reference providers</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Transparent assumptions</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">8 popular assets</span></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><FeeCalculator /></div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">How to use it</p><h2 className="mt-3 text-xl font-black">Start with an equivalent comparison</h2><p className="mt-3 text-sm leading-7 text-slate-600">Choose the same asset, currency, product type, and order assumption for every provider. Add your actual deposit charge and select withdrawal only when you know the asset and network.</p></section>
            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">What is spread?</p><h2 className="mt-3 text-xl font-black">The price can matter as much as the fee</h2><p className="mt-3 text-sm leading-7 text-slate-600">A quoted buy price may differ from a reference market price. That difference can reflect spread, volatility, order size, liquidity, and execution method.</p></section>
            <section className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Important boundary</p><h2 className="mt-3 text-xl font-black">Final charges appear at the provider</h2><p className="mt-3 text-sm leading-7 text-amber-950/80">Check the exchange’s order preview and withdrawal confirmation immediately before acting. Fees, tiers, promotions, regions, and network charges can change.</p></section>
          </div>
          <section className="mx-auto mt-8 max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Continue researching</p><div className="mt-4 flex flex-wrap gap-4 text-sm font-bold"><Link href="/exchanges/best-crypto-exchanges-2026" className="text-indigo-700 hover:text-indigo-900">Compare exchange profiles →</Link><Link href="/learn/how-to-check-exchange-proof-of-reserves" className="text-indigo-700 hover:text-indigo-900">Read exchange-reserve guidance →</Link><Link href="/methodology" className="text-indigo-700 hover:text-indigo-900">See our methodology →</Link></div></section>
        </section>
      </main>
      <Footer />
    </>
  );
}
