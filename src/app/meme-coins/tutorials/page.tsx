import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meme Coin Tutorials for Beginners | CryptosBeginner",
  description:
    "Beginner-friendly meme coin tutorials covering token research, wallet safety, trading terminals, launchpads, liquidity, and execution risk.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/meme-coins/tutorials",
  },
};

export default function MemeCoinTutorialsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
            Meme coins · Tutorials
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Meme Coin Tutorials for Beginners
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Practical guides covering token research, wallet safety, on-chain
            data, trading tools, liquidity, execution settings, and common
            mistakes in highly speculative meme-coin markets.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-xl font-black text-slate-950">
              Tutorials are being rebuilt
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              We are rebuilding this section with clearer walkthroughs,
              screenshots, videos, source links, and risk explanations.
            </p>
          </div>

          <Link
            href="/meme-coins"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-emerald-700"
          >
            Back to Meme Coin Research →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}