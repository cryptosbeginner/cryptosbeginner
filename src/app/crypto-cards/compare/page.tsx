import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPARE_PAIRS } from "../compare-data";
import { formatSpend, getCardSpend } from "../spend-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/compare`;

export const metadata: Metadata = {
  title: { absolute: "Compare Crypto Cards Side by Side | CryptosBeginner" },
  description:
    "Head-to-head crypto card comparisons built from the directory's own listing facts: fees, cashback, custody model, availability and real monthly spend from PaymentScan data.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "Compare Crypto Cards Side by Side | CryptosBeginner", description: "Head-to-head comparisons of the most-used crypto cards: fees, cashback and real spend.", url: PAGE_URL, type: "website" },
  robots: { index: true, follow: true },
};

export default function CompareIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/crypto-cards" className="text-sm font-black text-fuchsia-700 hover:text-fuchsia-900">← Back to Crypto Cards directory</Link>
          <h1 className="mt-8 text-4xl font-black tracking-[-0.03em]">Compare crypto cards side by side</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Every comparison below is generated from the same listing facts used across this directory: pricing, rewards,
            funding model, availability and our computed rating, plus real settled spend for the latest tracked month
            (PaymentScan data via Castle Labs). No card pays for its position.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {COMPARE_PAIRS.map((pair) => {
              const sa = getCardSpend(pair.a.slug);
              const sb = getCardSpend(pair.b.slug);
              return (
                <Link key={pair.pairSlug} href={`/crypto-cards/compare/${pair.pairSlug}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-fuchsia-300 hover:bg-fuchsia-50/40">
                  <p className="text-base font-black text-slate-950">{pair.a.name} vs {pair.b.name}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                    {sa ? `${formatSpend(sa.spendUsd)} spent with ${pair.a.name}` : pair.a.name}
                    {sb ? ` · ${formatSpend(sb.spendUsd)} with ${pair.b.name}` : ""} in Oct 2026
                  </p>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 text-xs leading-5 text-slate-500">
            Comparisons cover the eight highest-spend listed programs. For the full directory of 200+ cards, open the{" "}
            <Link href="/crypto-cards" className="font-black text-fuchsia-700">crypto cards directory</Link>, or see how much each
            card is actually used on the <Link href="/crypto-cards/spending" className="font-black text-fuchsia-700">spend tracker</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
