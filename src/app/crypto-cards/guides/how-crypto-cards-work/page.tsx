import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

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

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>The short version</h2>
            <p>
              A crypto card connects your cryptocurrency holdings to the Visa or Mastercard payment network. When you pay for something, crypto is converted to fiat currency and the merchant receives fiat. You never hand Bitcoin directly to the coffee shop. The card is a bridge, not a crypto-native payment rail.
            </p>

            <h2>Two funding models: top-up vs direct spend</h2>
            <p>
              Crypto cards generally follow one of two models. Understanding which one your card uses matters because it affects fees, convenience, and control.
            </p>
            <h3>Top-up (prepaid) model</h3>
            <p>
              You convert cryptocurrency to fiat and load it onto the card in advance, like topping up a prepaid phone. Spending draws from this fiat balance. The advantage is predictability: you lock in the conversion rate when you top up, and there are no surprises at checkout. The downside is an extra step before you can spend, and your loaded fiat balance earns nothing while it sits there.
            </p>
            <h3>Direct-spend model</h3>
            <p>
              The card pulls from your crypto balance automatically at the point of sale, converting just enough crypto to cover each transaction. This is more convenient, you do not need to pre-load, but you accept whatever conversion rate and spread applies at that exact moment. If the market moves sharply, the cost of your purchase in crypto terms can differ from what you expected.
            </p>

            <h2>Where stablecoins fit in</h2>
            <p>
              Many card programs use stablecoins such as USDT or USDC as a middle layer. You hold stablecoins in the card wallet, and spending converts them to local fiat at checkout. This sidesteps the volatility problem: your spending balance holds its dollar value instead of swinging with Bitcoin's price. For most users, keeping spending money in stablecoins and investment crypto separate is the sensible approach.
            </p>

            <h2>What happens when you tap to pay</h2>
            <p>Here is the typical sequence for a direct-spend card:</p>
            <ol>
              <li>You tap your card or phone at a terminal for a $50 purchase.</li>
              <li>The card program checks your available crypto or stablecoin balance.</li>
              <li>It converts roughly $50 worth (plus any spread or fee) to fiat.</li>
              <li>The Visa or Mastercard network processes a standard fiat transaction.</li>
              <li>The merchant receives $50 minus their usual card processing fees.</li>
            </ol>
            <p>
              The whole thing takes seconds. From the merchant's perspective, it is indistinguishable from a regular card payment. They do not need to accept crypto, run special software, or even know you paid with a crypto card.
            </p>

            <h2>Self-custody cards: a newer model</h2>
            <p>
              A newer category connects directly to your own crypto wallet instead of requiring you to deposit funds with the card company. You keep control of your private keys, and the card draws from your wallet at spend time, often using smart contracts. This removes custodial risk (the card company cannot freeze your deposited balance because they never hold it), but the products are newer, availability is limited, and the user experience can be rougher.
            </p>

            <h2>Key differences from a regular debit card</h2>
            <ul>
              <li><strong>Conversion spread:</strong> Regular debit cards spend fiat directly. Crypto cards add a conversion step, and the spread on that conversion is often the card program's main revenue source.</li>
              <li><strong>Volatility exposure:</strong> If you hold volatile crypto as your spending balance, your purchasing power fluctuates. Regular debit balances do not.</li>
              <li><strong>Tax events:</strong> In many countries, converting crypto to fiat counts as a disposal for tax purposes. Every coffee purchase could theoretically be a taxable event. Regular debit spending has no such implication.</li>
              <li><strong>Issuer risk:</strong> Your card depends on the card program staying in business and maintaining its banking relationships. If the issuer has problems, your card can stop working with little warning.</li>
            </ul>

            <h2>What to check before getting one</h2>
            <p>
              Before applying for any crypto card, confirm: which funding model it uses, the conversion spread (not just the headline "no fees" claim), supported cryptocurrencies, your country's eligibility, ATM fees and limits, and what happens to your balance if the program shuts down. Our <Link href={HUB_URL}>crypto cards directory</Link> lists these details per card with links to official sources.
            </p>
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
