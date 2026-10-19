import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import TokenSafetyWidget from "./TokenSafetyWidget";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/token-safety-checker`;

const UPDATED = "20 October 2026";

export const metadata: Metadata = {
  title: "Token Safety Checker: Spot Honeypots and Rug Pulls | CryptosBeginner",
  description:
    "Paste any token contract address and check it for honeypot logic, sell restrictions, hidden taxes, mint functions, and proxy contracts. Free scanner powered by GoPlus Security.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Token Safety Checker: Spot Honeypots and Rug Pulls",
    description:
      "Free token contract scanner. Check for honeypots, sell blocks, hidden taxes, and mint functions before you buy.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Safety Checker",
    description: "Scan any token contract for honeypots and rug pull red flags. Free, powered by GoPlus Security.",
  },
};

const faqs = [
  {
    question: "What does the token safety checker look for?",
    answer:
      "It scans the token smart contract for the most common scam patterns: honeypot logic that blocks selling, restrictions that stop you selling all your tokens, high buy or sell taxes, mint functions that let the owner print more tokens, upgradeable proxy contracts, unrenounced ownership, and unverified source code.",
  },
  {
    question: "Does a clean scan mean the token is safe?",
    answer:
      "No. A clean scan means no obvious red flags were found in the contract code, not that the token is a good investment. Scams can also happen through unlocked liquidity, fake teams, or market manipulation that no contract scan can see. Treat this as one input to your own research, never the whole decision.",
  },
  {
    question: "What should I do if a token is flagged high risk?",
    answer:
      "Do not buy it. A high risk verdict means the scanner found honeypot logic or sell restrictions, which are the hallmarks of an outright scam. If you already hold the token, assume the funds may be unrecoverable and do not send more money to the contract.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "Ethereum, BNB Chain, Polygon, Base, Arbitrum, Optimism, Avalanche, and Solana. Paste the token contract address for the chain you select.",
  },
  {
    question: "Where does the scan data come from?",
    answer:
      "GoPlus Security, whose token security API is embedded in CoinGecko, OKX Wallet, and Trust Wallet. The scan is free and runs against their live database.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function TokenSafetyCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Tools · token safety
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Check a token before you buy it
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Paste any token contract address and scan it for the classic rug pull patterns:
              honeypots, sell blocks, hidden taxes, mint functions, and upgradeable contracts.
              Free, powered by GoPlus Security.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Data by GoPlus Security
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <TokenSafetyWidget />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Why scan</p>
              <h2 className="mt-3 text-xl font-black">Most scams are in the code</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A honeypot looks like a normal token until you try to sell. The trap is written
                into the contract long before the price chart moves. A 30-second scan catches
                what the chart never will.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Limits</p>
              <h2 className="mt-3 text-xl font-black">What a scan cannot see</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Unlocked liquidity, team wallets dumping, fake volume, and social engineering all
                live outside the contract. A clean scan is a green light for the code only, never
                for the investment.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Habit</p>
              <h2 className="mt-3 text-xl font-black">Scan every new token</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Copy the contract address from a block explorer or the project docs, never from a
                DM or a comment section. Scammers post fake addresses that point to their own
                honeypots.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Token safety questions, answered plainly</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white">
              {faqs.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950">
                    {item.question}
                    <span className="float-right text-indigo-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm leading-7 text-slate-600">
            Want to understand the trading side too? Read our{" "}
            <Link href="/learn/what-is-crypto-arbitrage" className="font-bold text-indigo-700 hover:text-indigo-900">
              crypto arbitrage guide
            </Link>{" "}
            and compare{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="font-bold text-indigo-700 hover:text-indigo-900">
              the best crypto exchanges
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
