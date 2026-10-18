import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/plasma-one-vs-tria`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";

export const metadata: Metadata = {
  title: "Plasma One vs Tria: Two Self-Custodial Crypto Cards Compared",
  description:
    "Plasma One vs Tria card comparison (October 2026): both are self-custodial Visa cards issued via Rain. Compare cashback tiers, fees, FX rates, and features side by side.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Plasma One vs Tria: Crypto Card Comparison | CryptosBeginner",
    description: "Two self-custodial Visa cards on Rain infrastructure compared: cashback, fees, and features.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Plasma One vs Tria",
    description: "Self-custodial Visa crypto cards compared: cashback tiers, fees, FX, and features.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What do Plasma One and Tria have in common?",
    answer:
      "Both are self-custodial Visa cards issued through Rain's card infrastructure. With both, you hold your own keys and assets stay in your custody rather than sitting on a company's balance sheet. Both offer tiered cashback programs and target crypto-native users who want to spend stablecoins in everyday life.",
  },
  {
    question: "Which has better cashback, Plasma One or Tria?",
    answer:
      "It depends on your spending level and whether you want to lock tokens. Tria's headline rates are higher: 1.5% on Lite ($20/year), 4.5% on Pro ($109/year), and 6% on Max ($250/year). Plasma One offers 2% on the free Lite tier, 3% on Core ($199/year or 20K XPL lock), and 4% on Platinum (100K XPL lock, promotional rate rising to 150K XPL). But headline rates only apply within monthly caps: Tria caps the top rate at the first $1,000 (Lite/Pro) or $2,000 (Max) of monthly spend, while Plasma One caps at the first $500 (Lite), $1,000 (Core), or $3,000 (Platinum). Always do the math on your actual monthly spend.",
  },
  {
    question: "Does Tria really offer 50x leverage on perps?",
    answer:
      "No. Tria's in-app perpetuals run on Decibel and Hyperliquid, and the official Decibel integration documentation states up to 40x leverage. No official Tria source advertises 50x inside the app. A social media post claiming 50x could not be verified.",
  },
  {
    question: "Which card is better for international spending?",
    answer:
      "Plasma One publishes a clear FX schedule: 0% markup on Platinum, 0.5% on Core, and 1% on Lite. Tria's FX fees vary; check the current fee schedule in the app before traveling. If you spend heavily in foreign currencies, Plasma One's Platinum tier with zero FX markup is the cleaner option on paper.",
  },
  {
    question: "Are both cards really self-custodial?",
    answer:
      "Yes, both market themselves as self-custodial and both run on Rain's infrastructure. With self-custodial cards, your assets remain in wallets you control, which removes the risk of the card company freezing or losing your balance. You still complete KYC to get the card, and the Visa network processes the actual payments.",
  },
];

export default function PlasmaOneVsTriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Plasma One vs Tria: Two Self-Custodial Crypto Cards Compared",
            url: PAGE_URL,
            datePublished: "2026-10-18",
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Card comparison
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Plasma One vs Tria
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Two self-custodial Visa cards running on the same Rain infrastructure, with very different reward structures. Here is how they compare on cashback, fees, and features.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            Both cards are self-custodial Visa cards issued via Rain. Tria offers higher headline cashback (up to 6%) with lower annual fees, while Plasma One offers a genuinely free tier at 2% and a clear zero-FX-fee top tier. Your monthly spend and how you feel about locking tokens decide the winner.
          </Callout>

          <GuideH2>The common ground</GuideH2>
          <GuideP>
            Plasma One and Tria share the same foundation: both are Visa cards issued through Rain's licensed card infrastructure, and both are self-custodial, meaning your crypto stays in wallets you control rather than on a company balance sheet. Both require KYC, both target stablecoin spenders, and both use tiered membership programs to gate their best rewards.
          </GuideP>

          <GuideH2>Cashback tiers compared</GuideH2>
          <GuideP>
            This is where the two cards diverge most. Tria's headline rates run higher, but both cards cap the top rate within a monthly spend band. Spending beyond the cap earns a lower base rate.
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Tier</th>
                  <th className="px-5 py-4 font-black">Cost</th>
                  <th className="px-5 py-4 font-black">Headline cashback</th>
                  <th className="px-5 py-4 font-black">Applies to first</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">Tria Lite</td>
                  <td className="px-5 py-4">$20/year</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">1.5%</td>
                  <td className="px-5 py-4">$1,000/mo</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Tria Pro</td>
                  <td className="px-5 py-4">$109/year</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">4.5%</td>
                  <td className="px-5 py-4">$1,000/mo</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Tria Max</td>
                  <td className="px-5 py-4">$250/year</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">6%</td>
                  <td className="px-5 py-4">$2,000/mo</td>
                </tr>
                <tr className="bg-indigo-50/50">
                  <td className="px-5 py-4 font-bold">Plasma One Lite</td>
                  <td className="px-5 py-4">Free</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">2%</td>
                  <td className="px-5 py-4">$500/mo</td>
                </tr>
                <tr className="bg-indigo-50/50">
                  <td className="px-5 py-4 font-bold">Plasma One Core</td>
                  <td className="px-5 py-4">$199/year or 20K XPL lock</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">3%</td>
                  <td className="px-5 py-4">$1,000/mo</td>
                </tr>
                <tr className="bg-indigo-50/50">
                  <td className="px-5 py-4 font-bold">Plasma One Platinum</td>
                  <td className="px-5 py-4">100K XPL lock*</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">4%</td>
                  <td className="px-5 py-4">$3,000/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <GuideP>
            * The 100,000 XPL Platinum lock is a promotional rate. Plasma's help center states it rises to 150,000 XPL after the promotional period. Factor that into any long-term calculation.
          </GuideP>

          <GuideH2>Foreign exchange fees</GuideH2>
          <GuideP>
            Plasma One publishes a transparent FX schedule: 1% on Lite, 0.5% on Core, and 0% on Platinum. Tria does not advertise a single FX figure as prominently; check the in-app fee schedule for your region before relying on it for travel spending. For frequent foreign-currency spenders, Plasma One Platinum's zero markup is a concrete advantage.
          </GuideP>

          <GuideH2>Beyond the card: app features</GuideH2>
          <GuideH3>Tria</GuideH3>
          <BulletList
            items={[
              "Swaps across 1,000+ tokens inside the app",
              "Perpetual futures via Decibel and Hyperliquid, up to 40x leverage, 0.1% fee on notional",
              "Earn vaults (wBTC, USDC, AUSD)",
              "$1M per day spend limit on all tiers",
              "Price protection up to $2,000 and purchase protection up to $10,000",
            ]}
          />
          <GuideH3>Plasma One</GuideH3>
          <BulletList
            items={[
              "Stablecoin balances can earn yield through DeFi protocols in the Plasma ecosystem",
              "Free transfers to other Plasma One users",
              "Multi-currency stablecoin card partnership with Stripe announced October 2026",
              "Bank account details and withdrawals (specific currency coverage not independently verified)",
            ]}
          />

          <GuideH2>A note on social media claims</GuideH2>
          <GuideP>
            This comparison was prompted by a viral post comparing the two cards. Verification against official sources confirmed the core facts but corrected several details: Tria's perps top out at 40x leverage (not 50x as claimed), Plasma One's 100K XPL lock is promotional (rising to 150K XPL), and specific claims about Plasma One's bank-account currencies, withdrawal currency count, and deposit network counts could not be verified from official sources. Treat unverified social media figures as starting points for your own research, not facts.
          </GuideP>

          <GuideH2>The verdict</GuideH2>
          <GuideP>
            Choose Tria if you want the highest headline cashback and will use the in-app trading features; the Pro tier at $109/year with 4.5% on the first $1,000 of monthly spend is the sweet spot for moderate spenders. Choose Plasma One if you prefer a genuinely free entry point at 2%, want zero FX fees on the top tier, or like the idea of yield on idle stablecoin balances. Both are self-custodial and both run on Rain, so the decision comes down to rewards math on your real spending, not infrastructure trust.
          </GuideP>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/tria-review"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Read the full Tria review
            </Link>
            <Link
              href={HUB_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Browse all cards
            </Link>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {faqItems.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-slate-900">{f.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
