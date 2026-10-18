import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, StepList, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/how-crypto-cards-work`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "14 October 2026";
const UPDATED_ISO = "2026-10-14";

export const metadata: Metadata = {
  title: "How Crypto Cards Work: Top-Up, Spending & Settlement Explained",
  description:
    "How crypto cards actually work in 2026: top-up models vs direct spend, stablecoin settlement, what happens at checkout, and the key differences from regular debit cards.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How Crypto Cards Work | CryptosBeginner",
    description: "Top-up vs direct spend, stablecoin settlement, and what happens when you tap a crypto card.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "How Crypto Cards Work",
    description: "The mechanics behind crypto debit and prepaid cards, explained plainly.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Do I spend actual cryptocurrency when I use a crypto card?",
    answer:
      "Usually not directly. Most crypto cards convert your crypto to fiat currency (like USD or EUR) either when you top up the card or at the moment of purchase. The merchant receives fiat through the Visa or Mastercard network. A few self-custody cards are experimenting with on-chain settlement, but conversion to fiat remains the standard model.",
  },
  {
    question: "What is the difference between top-up and direct-spend crypto cards?",
    answer:
      "Top-up cards require you to convert crypto to fiat and load it onto the card before spending, similar to a prepaid card. Direct-spend cards pull from your crypto balance automatically at checkout, converting just enough to cover each purchase. Direct-spend is more convenient but gives you less control over conversion timing and rates.",
  },
  {
    question: "What are stablecoins used for in crypto cards?",
    answer:
      "Many cards use stablecoins like USDT or USDC as an intermediate step. You might hold USDT in your card wallet, and when you spend, it converts to local fiat. This avoids the volatility of holding Bitcoin or Ethereum directly for spending, since the stablecoin holds its dollar value until the moment of conversion.",
  },
  {
    question: "Can I use a crypto card anywhere Visa or Mastercard is accepted?",
    answer:
      "In theory yes, wherever the card network is accepted. In practice, your card's issuer, your country of residence, and the merchant's country can all affect whether a transaction goes through. Some cards also block certain merchant categories like gambling or cash-like transactions.",
  },
  {
    question: "Do crypto cards work with Apple Pay and Google Pay?",
    answer:
      "Many do, especially virtual cards. If the card issuer supports tokenization, you can add the virtual card to your phone wallet and pay contactless. Physical cards with NFC chips also work for tap-to-pay. Check the specific card's features, as mobile wallet support varies by issuer and region.",
  },
];

export default function HowCryptoCardsWorkGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Crypto Cards Work: Top-Up, Spending & Settlement Explained",
            url: PAGE_URL,
            datePublished: UPDATED_ISO,
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
            publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-white text-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <nav className="text-sm text-slate-500">
            <Link href={HUB_URL} className="hover:text-fuchsia-700">Crypto Cards</Link>
            {" / "}
            <Link href={`${SITE_URL}/crypto-cards/guides`} className="hover:text-fuchsia-700">Guides</Link>
            {" / How Crypto Cards Work"}
          </nav>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Crypto Cards Guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">How Crypto Cards Work</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A crypto card looks like a regular debit card and works at the same terminals. What happens behind the scenes is different. This guide explains the mechanics in plain language.
          </p>

          <AuthorByline updated="14 October 2026" />

          <div className="mt-10">
            <GuideH2>The short version</GuideH2>
            <GuideP>
              A crypto card connects your cryptocurrency holdings to the Visa or Mastercard payment network. When you pay for something, crypto is converted to fiat currency and the merchant receives fiat. You never hand Bitcoin directly to the coffee shop. The card is a bridge, not a crypto-native payment rail.
            </GuideP>

            <Callout tone="cyan" title="The one-sentence version">
              You tap. Crypto becomes fiat behind the scenes. The merchant gets dollars or euros and never knows crypto was involved.
            </Callout>

            <GuideH2>Two funding models: top-up vs direct spend</GuideH2>
            <GuideP>
              Crypto cards generally follow one of two models. Understanding which one your card uses matters because it affects fees, convenience, and control.
            </GuideP>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-800">Model A</p>
                <p className="mt-2 text-lg font-black text-slate-950">Top-up (prepaid)</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  You convert crypto to fiat and load it onto the card in advance, like topping up a prepaid phone. Spending draws from this fiat balance.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex gap-2"><span className="font-black text-emerald-700">+</span><span className="text-slate-700">Predictable: you lock the rate when you top up</span></p>
                  <p className="flex gap-2"><span className="font-black text-emerald-700">+</span><span className="text-slate-700">No surprises at checkout</span></p>
                  <p className="flex gap-2"><span className="font-black text-rose-700">-</span><span className="text-slate-700">Extra step before you can spend</span></p>
                  <p className="flex gap-2"><span className="font-black text-rose-700">-</span><span className="text-slate-700">Loaded fiat earns nothing sitting there</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-fuchsia-800">Model B</p>
                <p className="mt-2 text-lg font-black text-slate-950">Direct spend</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The card pulls from your crypto balance automatically at the point of sale, converting just enough crypto to cover each transaction.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex gap-2"><span className="font-black text-emerald-700">+</span><span className="text-slate-700">Convenient: no pre-loading needed</span></p>
                  <p className="flex gap-2"><span className="font-black text-emerald-700">+</span><span className="text-slate-700">Spend straight from your balance</span></p>
                  <p className="flex gap-2"><span className="font-black text-rose-700">-</span><span className="text-slate-700">You accept the rate at that exact moment</span></p>
                  <p className="flex gap-2"><span className="font-black text-rose-700">-</span><span className="text-slate-700">Sharp market moves can change your cost</span></p>
                </div>
              </div>
            </div>

            <GuideH2>Where stablecoins fit in</GuideH2>
            <GuideP>
              Many card programs use stablecoins such as USDT or USDC as a middle layer. You hold stablecoins in the card wallet, and spending converts them to local fiat at checkout. This sidesteps the volatility problem: your spending balance holds its dollar value instead of swinging with Bitcoin's price. For most users, keeping spending money in stablecoins and investment crypto separate is the sensible approach.
            </GuideP>

            <GuideH2>What happens when you tap to pay</GuideH2>
            <GuideP>Here is the typical sequence for a direct-spend card:</GuideP>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-7" role="img" aria-label="Infographic: the five steps of a crypto card payment, from tap to merchant settlement">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-300">The payment journey</p>
              <p className="mt-2 text-lg font-black">A $50 tap, second by second</p>
              <ol className="mt-5 space-y-0">
                {[
                  { n: "1", title: "You tap", body: "Card or phone at the terminal for a $50 purchase." },
                  { n: "2", title: "Balance check", body: "The card program checks your available crypto or stablecoin balance." },
                  { n: "3", title: "Conversion", body: "Roughly $50 worth (plus any spread or fee) converts to fiat." },
                  { n: "4", title: "Network processing", body: "Visa or Mastercard processes a standard fiat transaction." },
                  { n: "5", title: "Merchant paid", body: "The merchant receives $50 minus their usual card processing fees." },
                ].map((s, i, arr) => (
                  <li key={s.n} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < arr.length - 1 && <span className="absolute left-[17px] top-10 h-full w-0.5 bg-white/15" aria-hidden="true" />}
                    <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">{s.n}</span>
                    <div className="pt-1">
                      <p className="font-black text-white">{s.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-slate-300">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 rounded-xl border border-white/15 bg-white/[0.07] p-4 text-sm leading-6 text-slate-300">
                The whole thing takes seconds. From the merchant's perspective, it is indistinguishable from a regular card payment.
              </p>
            </div>

            <GuideH2>Self-custody cards: a newer model</GuideH2>
            <GuideP>
              A newer category connects directly to your own crypto wallet instead of requiring you to deposit funds with the card company. You keep control of your private keys, and the card draws from your wallet at spend time, often using smart contracts. This removes custodial risk (the card company cannot freeze your deposited balance because they never hold it), but the products are newer, availability is limited, and the user experience can be rougher.
            </GuideP>

            <GuideH2>Key differences from a regular debit card</GuideH2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="p-4 text-left font-black">What differs</th>
                    <th className="p-4 text-left font-black">Regular debit card</th>
                    <th className="p-4 text-left font-black">Crypto card</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Conversion", "Spends fiat directly", "Adds a conversion step; the spread is often the program's main revenue"],
                    ["Volatility", "Balance holds its value", "Purchasing power fluctuates if you hold volatile crypto"],
                    ["Tax", "No tax implication", "Each conversion can be a taxable disposal in many countries"],
                    ["Issuer risk", "Bank-backed", "Depends on the program staying in business and keeping banking partners"],
                  ].map(([a, b, c]) => (
                    <tr key={a} className="bg-white odd:bg-slate-50">
                      <td className="p-4 font-black text-slate-950">{a}</td>
                      <td className="p-4 leading-6 text-slate-600">{b}</td>
                      <td className="p-4 leading-6 text-slate-600">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <GuideH2>What to check before getting one</GuideH2>
            <BulletList items={[
              <span key="1">Which <strong className="text-slate-950">funding model</strong> it uses: top-up or direct spend.</span>,
              <span key="2">The <strong className="text-slate-950">conversion spread</strong>, not just the headline "no fees" claim.</span>,
              <span key="3">Which <strong className="text-slate-950">cryptocurrencies</strong> are supported.</span>,
              <span key="4">Your country's <strong className="text-slate-950">eligibility</strong>.</span>,
              <span key="5"><strong className="text-slate-950">ATM fees and limits</strong>.</span>,
              <span key="6">What happens to your balance <strong className="text-slate-950">if the program shuts down</strong>.</span>,
            ]} />
            <GuideP>
              Our <Link href={HUB_URL} className="font-black text-fuchsia-700 hover:text-fuchsia-900">crypto cards directory</Link> lists these details per card with links to official sources.
            </GuideP>
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-4 divide-y divide-slate-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="mt-8 text-xs text-slate-500">
            Last updated {UPDATED}. Educational content only, not financial advice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
