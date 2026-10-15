import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/proof-of-reserves`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2025";
const HERO_IMAGE = "/images/learn/proof-of-reserves/featured.jpg";

export const metadata: Metadata = {
  title: "Proof of Reserves Explained Simply (2026): What It Proves, What It Does Not",
  description:
    "October 2026 beginner hub for crypto proof of reserves: the plain-English meaning, what PoR proves and does not prove, self-attested vs auditor-verified reports, red flags, and links to our full how-to-check guide.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Proof of Reserves Explained Simply (2026)",
    description:
      "What proof of reserves proves, what it does not prove, and how to read an exchange's PoR report in 60 seconds.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${HERO_IMAGE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of Reserves Explained Simply (2026)",
    description:
      "The 5-minute beginner hub: what PoR proves, what it does not, and the red flags to watch for.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
};

const faqItems = [
  {
    question: "What is the simplest way to explain proof of reserves?",
    answer:
      "Think of a bank letting every customer peek at a shared ledger that shows the total of all customer balances, without revealing anyone's individual balance, alongside evidence that the bank's vaults hold at least that much. Proof of reserves is the crypto version: an exchange shows it currently holds enough assets to cover what it owes customers. It is a transparency tool, not a safety guarantee.",
  },
  {
    question: "What does proof of reserves NOT prove?",
    answer:
      "Three big things. First, it is a snapshot in time: reserves can be borrowed just for the audit and returned after. Second, it proves assets, not full liabilities: off-chain debts, hidden loans or commingled company funds may not be captured. Third, it proves nothing about risk management: an exchange can hold your assets today and lose them to bad trading or fraud tomorrow. That is why our full what-is guide calls PoR a strong signal, not a guarantee.",
  },
  {
    question: "Is self-attested proof of reserves trustworthy?",
    answer:
      "It is better than nothing, but independent auditor verification is the gold standard. A self-attested report (signed by the exchange itself) tells you what the company claims; an auditor-verified report adds an independent firm that checked the methodology. When you read a PoR page, look for the auditor's name, the methodology used (often a Merkle tree), the report date, and the reserve wallet addresses you can inspect on-chain yourself.",
  },
  {
    question: "Does proof of reserves protect me if an exchange is hacked?",
    answer:
      "No. Proof of reserves shows that assets were present at the time of the check; it does not protect them from theft, fraud or insolvency after the fact. Exchange insurance funds cover a different slice of risk (mainly liquidation shortfalls), and even those have strict limits. No single disclosure removes exchange risk, so keep only trading balances on exchanges and store the rest in your own wallet.",
  },
  {
    question: "Where do I go for the full step-by-step check?",
    answer:
      "Start with our what is proof of reserves guide for the conceptual foundation, then follow how to check exchange proof of reserves for the practical walkthrough: finding the transparency page, reading the Merkle tree report, and verifying wallet addresses. For the other half of the safety picture, read exchange insurance funds explained.",
  },
  {
    question: "Should beginners rely on proof of reserves alone when picking an exchange?",
    answer:
      "No. Treat PoR as one check on a longer list. Combine it with the exchange's security practices and incident history, how long it has operated, regulatory standing, the fee structure, and your own account hygiene (strong passwords, two-factor authentication, withdrawal allowlists). Our exchange security checklist puts the full set of checks in one place.",
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

export default function ProofOfReservesHubPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Proof of Reserves Explained Simply (2026): What It Proves, What It Does Not",
    description:
      "October 2026 beginner hub for crypto proof of reserves: the plain-English meaning, what PoR proves and does not prove, self-attested vs auditor-verified reports, red flags, and links to our full how-to-check guide.",
    datePublished: "2025-05-05",
    dateModified: UPDATED_ISO,
    image: [`${SITE_URL}${HERO_IMAGE}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: "Alex Rivera", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · exchange safety</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Proof of reserves, decoded: the 5-minute beginner hub
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Proof of reserves is the first thing serious beginners check before trusting an exchange with
              their money. This hub gives you the plain-English version, what PoR actually proves (and what
              it does not), the red flags in any report, and the deep-dive guides for the full picture.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <div className="py-10">
          <Section id="quick-version">
            <H2>The 30-second version</H2>
            <figure className="mt-6">
              <Image
                src={HERO_IMAGE}
                alt="Illustration explaining how proof of reserves works on crypto exchanges"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-3 text-center text-sm leading-6 text-slate-600">
                Proof of reserves is an exchange showing it holds the assets it owes its customers.
              </figcaption>
            </figure>
            <P>
              When you deposit crypto on an exchange, all you see is a number in an app. Proof of reserves
              (PoR) is the exchange's way of answering the uncomfortable question:{" "}
              <strong className="text-slate-900">is the crypto I think I have actually there?</strong> A PoR
              report compares two things: the total crypto customers are owed (liabilities) against the
              crypto sitting in the exchange's reserve wallets (assets). If reserves cover liabilities, the
              exchange is fully backed at that moment.
            </P>
            <P>
              This idea took off after major exchange collapses, most famously FTX, where customer funds were
              allegedly used for risky bets and the cupboard was bare when withdrawals flooded in. PoR makes
              that kind of hidden hole much harder to conceal.
            </P>
          </Section>

          <Section id="proves">
            <H2>What proof of reserves proves, and what it does not</H2>
            <P>
              The biggest beginner mistake is treating PoR as a stamp of safety. Here is the honest split:
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm leading-7 text-slate-600">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-3 font-bold text-slate-950">PoR proves</th>
                    <th className="px-5 py-3 font-bold text-slate-950">PoR does NOT prove</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-5 py-3">The exchange held enough assets to cover customer balances at the time of the check</td>
                    <td className="px-5 py-3">That the exchange holds them right now (it is a snapshot, not a live feed)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Customer liabilities are recorded honestly, at least for the balances included in the report</td>
                    <td className="px-5 py-3">That all liabilities are included, especially off-chain debts and hidden loans</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">The exchange is willing to be transparent about its wallets</td>
                    <td className="px-5 py-3">That the exchange is solvent, well managed, or secure against hacks and fraud</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Reserve wallets exist and are verifiable on-chain</td>
                    <td className="px-5 py-3">That company funds and customer funds are kept separate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              The takeaway: PoR answers <strong className="text-slate-900">"can you show me the money"</strong>{" "}
              but not <strong className="text-slate-900">"are you running the business responsibly."</strong>{" "}
              Both matter, and only the first is what PoR checks.
            </P>
          </Section>

          <Section id="flavors">
            <H2>Two flavors: self-attested vs. auditor-verified</H2>
            <P>
              Not all PoR reports carry the same weight. A{" "}
              <strong className="text-slate-900">self-attested report</strong> is published by the exchange
              itself, with its own signatures and wallet disclosures. It is better than nothing, but you are
              taking the company's word for the methodology.
            </P>
            <P>
              An <strong className="text-slate-900">auditor-verified report</strong> adds an independent firm
              that reviewed the method, usually a Merkle tree construction that aggregates anonymized
              customer balances into one cryptographic root hash without exposing anyone's balance, and
              confirmed that reserve wallets match or exceed liabilities. Always look for three things on
              the report: the auditor's name, a recent date, and wallet addresses you can inspect on a block
              explorer yourself.
            </P>
          </Section>

          <Section id="checklist">
            <H2>Your 60-second PoR checklist</H2>
            <P>
              Before you deposit on any exchange, run through this list. It takes a minute and filters out
              the venues that talk about transparency without practicing it:
            </P>
            <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
              <li><strong className="text-slate-900">1. Is there a PoR page at all?</strong> Look in the footer or help center for "proof of reserves" or "transparency." If you cannot find one, that is your answer.</li>
              <li><strong className="text-slate-900">2. How recent is it?</strong> A report from over a year ago is stale. Serious exchanges refresh regularly.</li>
              <li><strong className="text-slate-900">3. Who checked it?</strong> An independent auditor's name and methodology beat a company-signed statement.</li>
              <li><strong className="text-slate-900">4. Are wallets disclosed?</strong> Reserve addresses you can verify on-chain are the real deal; a PDF with only totals is weaker.</li>
              <li><strong className="text-slate-900">5. Do the numbers cover your assets?</strong> Reports sometimes cover only major coins. Check whether the assets you plan to hold are included.</li>
            </ul>
          </Section>

          <Section id="red-flags">
            <H2>Red flags in any PoR report</H2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
              <li><strong className="text-slate-900">A report that only appears after bad press.</strong> Transparency published under pressure tends to be minimal.</li>
              <li><strong className="text-slate-900">No auditor name or methodology.</strong> "Trust us, we checked" is not a proof.</li>
              <li><strong className="text-slate-900">Reserves that exactly equal liabilities every time.</strong> Healthy reports show a comfortable surplus; suspiciously round numbers deserve scrutiny.</li>
              <li><strong className="text-slate-900">Missing coins you would expect.</strong> If the report covers BTC and ETH but quietly omits the exchange's own token, ask why.</li>
              <li><strong className="text-slate-900">Wallets that move funds right after the snapshot.</strong> The classic trick: borrow assets for the audit, return them after.</li>
            </ul>
          </Section>

          <Section id="go-deeper">
            <H2>Go deeper: the full guides</H2>
            <P>
              This hub is the map. When you want the full territory, read the dedicated guides:
            </P>
            <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
              <li>
                <Link href="/learn/what-is-proof-of-reserves" className="font-bold text-blue-600 hover:underline">
                  What is proof of reserves? →
                </Link>
                <br />
                The conceptual deep dive: the Merkle tree method in plain English, why PoR matters, and its blind spots.
              </li>
              <li>
                <Link href="/learn/how-to-check-exchange-proof-of-reserves" className="font-bold text-blue-600 hover:underline">
                  How to check an exchange's proof of reserves →
                </Link>
                <br />
                The practical walkthrough: find the transparency page, read the report, and verify wallets yourself.
              </li>
              <li>
                <Link href="/learn/exchange-insurance-funds" className="font-bold text-blue-600 hover:underline">
                  Exchange insurance funds explained →
                </Link>
                <br />
                The other half of the safety picture: what insurance funds cover, their limits, and how they differ from PoR.
              </li>
            </ul>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
