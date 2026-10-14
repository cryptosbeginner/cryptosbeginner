import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardFinderQuiz from "./CardFinderQuiz";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/finder`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: "Crypto Card Finder: Answer 4 Questions, Get Matched",
  description:
    "Not sure which crypto card fits? Answer four quick questions about your priorities, region, and preferences, and get matched with the best cards from our directory.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Finder Quiz | CryptosBeginner",
    description: "Four questions, five matched cards. Find the crypto card that fits your spending.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CardFinderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Crypto Card Finder Quiz",
            url: PAGE_URL,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0" },
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Card Finder"}
            </nav>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Find your crypto card</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Answer four quick questions. We will match you with up to five cards from our directory and explain why each one fits.
            </p>
          </div>
        </section>
        <CardFinderQuiz />
        <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            <p className="font-black text-slate-950">How matching works</p>
            <p className="mt-2">
              The quiz filters our card directory by your region and format preference, then scores the remaining cards against your top priority. Matches are a starting point, not a recommendation. Always verify current fees, rewards, and eligibility on the provider's official page before applying.
            </p>
            <p className="mt-3">
              Prefer to browse everything yourself? <Link href={HUB_URL} className="font-bold text-fuchsia-700 hover:underline">Explore the full directory</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
