import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import SwapWidget from "./SwapWidget";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/swap`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: "Swap Crypto Instantly: No-Signup Exchange | CryptosBeginner",
  description:
    "Swap 1,500+ cryptocurrencies instantly with no signup through SimpleSwap. Compare fixed vs floating rates, understand the honest limits, and read our full review before swapping.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Swap Crypto Instantly: No-Signup Exchange",
    description:
      "Instant crypto swaps with no account needed, powered by SimpleSwap. Honest notes on rates, limits, and verification included.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swap Crypto Instantly: No-Signup Exchange Widget",
    description:
      "Swap 1,500+ cryptocurrencies with no signup. Powered by SimpleSwap, with honest framing from CryptosBeginner.",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need an account to swap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SimpleSwap processes crypto-to-crypto exchanges without registration. You provide a receiving wallet address and send your deposit to the address shown. Fiat purchases are a separate flow and may require identity verification.",
      },
    },
    {
      "@type": "Question",
      name: "What does a swap cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no separate platform fee shown at checkout; SimpleSwap earns from the exchange rate spread plus network fees. Compare the final received amount against other services before committing, especially on large swaps.",
      },
    },
    {
      "@type": "Question",
      name: "Is SimpleSwap a privacy tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It is a convenient instant exchange, not a privacy service. Transactions can be flagged under its AML policy and held pending verification. Do not use it expecting anonymity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between fixed and floating rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A floating rate follows the market and settles when your deposit is processed, so the received amount can shift slightly. A fixed rate locks the quote at the start, which suits larger swaps or volatile markets.",
      },
    },
    {
      "@type": "Question",
      name: "Does CryptosBeginner earn from my swap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Swaps made through this page are referred by CryptosBeginner, and we may earn a commission from SimpleSwap. This does not change the rates you see, and our review of the service is independent of that arrangement.",
      },
    },
  ],
};

export default function SwapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Tools · instant swaps
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Swap crypto without signing up
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Exchange 1,500+ cryptocurrencies right here, with no account and no
              registration for crypto-to-crypto swaps. Pick a pair, enter your receiving
              address, and send your deposit.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Powered by SimpleSwap
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <SwapWidget />
          <p className="mt-3 text-xs leading-6 text-slate-500">
            Affiliate disclosure: swaps created through this page are referred by CryptosBeginner and
            we may earn a commission from SimpleSwap. Our{" "}
            <Link href="/tools/simpleswap-review" className="font-bold text-indigo-700 hover:text-indigo-900">
              SimpleSwap review
            </Link>{" "}
            is written independently of that arrangement.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">How it works</p>
              <h2 className="mt-3 text-xl font-black">Three steps, no account</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Choose your pair and rate type, enter the wallet address that receives the
                swapped coins, then send your deposit to the address shown. SimpleSwap converts
                and sends the result to your wallet.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Rates</p>
              <h2 className="mt-3 text-xl font-black">Fixed or floating</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Floating rates follow the market and settle on deposit. Fixed rates lock your
                quote upfront, which is worth using on larger swaps or volatile days. The cost
                sits inside the rate spread, so compare the final received amount.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Honest limits</p>
              <h2 className="mt-3 text-xl font-black">Not a privacy tool</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                SimpleSwap can flag transactions under its AML policy and hold them pending
                verification. Fiat purchases may require KYC. Use it for convenience, not
                anonymity.
              </p>
            </div>
          </div>

          <section className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Keep researching</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/tools/simpleswap-review" className="text-indigo-700 hover:text-indigo-900">
                Read the SimpleSwap review →
              </Link>
              <Link href="/learn/what-are-privacy-swaps" className="text-indigo-700 hover:text-indigo-900">
                What privacy swaps actually do →
              </Link>
              <Link href="/learn/no-kyc-exchanges-explained" className="text-indigo-700 hover:text-indigo-900">
                No-KYC exchanges explained →
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
