import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnHub from "./LearnHub";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn`;

export const metadata: Metadata = {
  title: "Learn Crypto: 25 Beginner Guides on Safety, Wallets, Privacy and Trading",
  description:
    "Browse all 25 CryptosBeginner guides: crypto basics, exchange safety, wallets, privacy coins, trading, DeFi staking, and neobanks. Updated October 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Learn Crypto: Beginner Guides on Safety, Wallets, Privacy and Trading",
    description:
      "25 plain-English crypto guides covering security, self-custody, privacy coins, trading, staking, and digital banking.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where should a crypto beginner start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the Getting Started guides: best crypto platforms for beginners, the crypto glossary, and the exchange security checklist. Then learn about wallets and seed phrase security before buying anything.",
      },
    },
    {
      "@type": "Question",
      name: "How many guides are in the CryptosBeginner learn section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The learn section has 25 guides across 7 categories: Getting Started, Security and Safety, Wallets, Privacy, Trading Guides, DeFi and Staking, and Fintech. All guides are reviewed and updated, most recently in October 2026.",
      },
    },
  ],
};

export default function LearnIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300">CryptosBeginner · Learn</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Learn crypto, properly
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Plain-English guides on safety, wallets, privacy, trading, and digital banking.
              No jargon walls, no shilling, just what you need to know before you trust a platform
              with your money.
            </p>
          </div>
        </section>
        <LearnHub />
      </main>
      <Footer />
    </>
  );
}
