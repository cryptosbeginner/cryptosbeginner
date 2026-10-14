import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/crypto-cards-and-taxes`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "14 October 2026";
const UPDATED_ISO = "2026-10-14";

export const metadata: Metadata = {
  title: "Crypto Cards and Taxes: What Spending Crypto Really Costs You",
  description:
    "Spending crypto with a card can trigger tax in many countries. How crypto card transactions are taxed, record-keeping basics, and when to talk to a professional.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Cards and Taxes | CryptosBeginner",
    description: "Why every tap of a crypto card can be a taxable event, and how to stay on top of it.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Cards and Taxes",
    description: "The tax side of spending crypto that card marketing never mentions.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Is spending crypto with a card a taxable event?",
    answer:
      "In many countries, yes. The US, UK, Australia, Canada, and much of the EU treat converting crypto to fiat (which is what happens when you spend with a crypto card) as a disposal of the asset. If the crypto gained value since you acquired it, you may owe capital gains tax on the difference. This applies even to small purchases.",
  },
  {
    question: "Do I owe tax if I spend stablecoins like USDT or USDC?",
    answer:
      "Possibly, but usually less. Stablecoins are designed to hold their dollar value, so the gain or loss on each spend is typically tiny. However, they can still deviate slightly from $1.00, and the disposal itself may still be reportable depending on your jurisdiction. The record-keeping burden is the same even when the tax owed is negligible.",
  },
  {
    question: "How do I track crypto card spending for taxes?",
    answer:
      "You need the date, amount spent, the crypto used, its cost basis (what you originally paid), and its fair market value at spend time. Many crypto tax software tools can import card transaction history automatically. Manual tracking in a spreadsheet works for light users but becomes painful quickly.",
  },
  {
    question: "Can cashback rewards from crypto cards be taxed?",
    answer:
      "It depends on the jurisdiction and how the reward is structured. In the US, the IRS has generally treated credit card style cashback as a purchase discount (not taxable), but crypto-denominated rewards that appreciate could create tax questions. This area is evolving, and guidance varies by country, so check local rules or ask a tax professional.",
  },
];

const DISCLAIMER =
  "This guide is educational content about general tax concepts, not tax advice. Tax law varies by country and changes frequently. For your specific situation, consult a qualified tax professional in your jurisdiction.";

export default function CryptoCardsAndTaxesGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Cards and Taxes: What Spending Crypto Really Costs You",
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
            {" / Crypto Cards and Taxes"}
          </nav>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Crypto Cards Guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Crypto Cards and Taxes</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every tap can be a taxable event. Here is what card marketing will not tell you about the tax side of spending crypto.
          </p>

          <AuthorByline updated="14 October 2026" />

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <strong>Not tax advice.</strong> {DISCLAIMER}
          </div>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>The core issue: spending is disposing</h2>
            <p>
              In most major jurisdictions, cryptocurrency is treated as property for tax purposes, not as currency. When your crypto card converts Bitcoin to dollars to pay for groceries, tax authorities generally see two things happening: you disposed of Bitcoin, and you received dollars. If the Bitcoin was worth more than when you bought it, that gain is potentially taxable, exactly as if you had sold it on an exchange.
            </p>
            <p>
              This surprises many card users. Buying a $4 coffee with appreciated Bitcoin can technically create a reportable capital gain. The amounts per transaction are usually small, but across hundreds of transactions a year, the record-keeping burden is real and the aggregate gains can be meaningful.
            </p>

            <h2>How different countries treat it</h2>
            <h3>Taxed on disposal (US, UK, Australia, Canada, much of the EU)</h3>
            <p>
              These jurisdictions generally treat each crypto-to-fiat conversion as a taxable disposal. Short-term vs long-term rates may apply depending on holding period. You need cost basis records for every spend. Some have de minimis exemptions or annual allowances (the UK's capital gains annual exempt amount, for example), but the reporting obligation generally remains.
            </p>
            <h3>More favorable regimes</h3>
            <p>
              A few jurisdictions do not tax crypto capital gains at all (the UAE for individuals, for instance), or only tax professional trading activity rather than personal use (approaches vary across the EU). These regimes can change, and residency rules are strict, so verify current law rather than relying on reputation.
            </p>
            <h3>Evolving and unclear</h3>
            <p>
              Many countries in Asia, Africa, and Latin America are still developing crypto tax frameworks. The absence of clear guidance does not mean the absence of tax. When in doubt, keep records as if the strictest interpretation applies.
            </p>

            <h2>Stablecoins reduce (but do not eliminate) the problem</h2>
            <p>
              Spending USDT or USDC instead of Bitcoin dramatically shrinks the gain per transaction, since stablecoins hover near $1.00. But two issues remain. First, small deviations from the peg still create tiny gains or losses that are technically reportable. Second, the record-keeping requirement does not disappear, you still need to log every disposal. Stablecoin spending is simpler, not exempt.
            </p>

            <h2>Practical record-keeping</h2>
            <p>For each card transaction, you ideally record:</p>
            <ul>
              <li>Date and time of the transaction</li>
              <li>Fiat amount spent</li>
              <li>Which crypto was converted and how much</li>
              <li>The crypto's cost basis (what you paid to acquire those specific units)</li>
              <li>Fair market value at the moment of spending</li>
            </ul>
            <p>
              Doing this by hand for daily spending is miserable. Crypto tax software (there are several established options) can import transaction histories from major card programs and exchanges and compute gains automatically. If you use a crypto card regularly, tax software is close to mandatory. Check whether your card program offers transaction exports in a compatible format before committing to one.
            </p>

            <h2>Cashback and rewards: a gray area</h2>
            <p>
              Card rewards add another layer. If your card pays 2% cashback in Bitcoin, is that a purchase discount (generally not taxed at receipt in the US) or income? Guidance is thin and varies by country. And when you later spend or sell the rewarded crypto, its receipt value becomes your cost basis for that future disposal. Keep records of rewards received, not just spending.
            </p>

            <h2>Strategies people use</h2>
            <ul>
              <li><strong>Spend stablecoins, hold volatile crypto.</strong> Minimizes per-transaction gains and keeps your investment thesis separate from your spending.</li>
              <li><strong>Use cards only in favorable jurisdictions</strong> if you genuinely reside there, with proper residency, not as a dodge.</li>
              <li><strong>Consolidate spending</strong> onto fewer transactions where practical, to reduce the number of taxable events.</li>
              <li><strong>Keep a dedicated spending wallet</strong> so card transactions do not tangle with your investment records.</li>
            </ul>
            <p>
              None of these are loopholes. They are organizational choices that make compliance manageable.
            </p>

            <h2>When to get professional help</h2>
            <p>
              Talk to a crypto-aware tax professional if: you use a crypto card heavily, you have significant unrealized gains, you moved countries recently, you earn rewards in crypto, or your jurisdiction's guidance is unclear. The cost of an hour with a professional is small compared to the cost of getting a tax return wrong.
            </p>

            <p>
              Browse cards with their fee and availability details in our <Link href={HUB_URL}>crypto cards directory</Link>.
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
            Last updated {UPDATED}. {DISCLAIMER}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
