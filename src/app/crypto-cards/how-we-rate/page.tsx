import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RATING_METHODOLOGY } from "../ratings";
import { cardListings } from "../cards-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/how-we-rate`;
const UPDATED = "26 November 2026";
const UPDATED_ISO = "2026-11-26";

export const metadata: Metadata = {
  title: "How We Rate Crypto Cards: The Scoring Formula Explained | CryptosBeginner",
  description:
    "Every CryptosBeginner card rating is computed by one published formula from the listing data: rewards 30%, fees 25%, availability 20%, custody 15%, features 10%. No human picks the number, and no provider can pay for a better one.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How We Rate Crypto Cards",
    description:
      "The full scoring formula behind every CryptosBeginner card rating, with a worked example and what the score does not measure.",
    url: PAGE_URL,
    type: "article",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Can a provider pay for a better rating?",
    answer:
      "No. The rating is calculated from the structured facts in the listing: cashback tiers, fee data, regions, custody model and features. Referral links exist on some listings and are labeled, but they are not an input to the formula, and no one adjusts a score by hand. Two cards with the same facts always get the same score.",
  },
  {
    question: "Why does a card with 10% cashback score lower than one with 3%?",
    answer:
      "Because the rewards score reads the whole structure, not the headline. A 10% rate that applies to one narrow category, sits under a low monthly cap, or needs an expensive token tier earns less credit than a flat 3% on all spending. Fees then pull the total down further if the card charges an annual fee or a high FX markup to fund the headline rate.",
  },
  {
    question: "What does Provisional mean?",
    answer:
      "It means the provider has not published structured fee and cashback data we can parse, so some categories are scored from limited evidence, such as the pricing text on the listing. The badge is muted for exactly that reason. When a listing gains structured fee breakdown or cashback tier data, the rating recalculates automatically and the badge clears.",
  },
  {
    question: "How often do ratings change?",
    answer:
      "Whenever the underlying listing changes. Ratings are computed from listing data at build time, so a fee change, a new cashback tier or a wider country list flows into the score the next time the site is published with that listing updated. Each listing shows the date its facts were last checked.",
  },
];

const exampleRows = [
  { category: "Rewards", weight: 30, score: 6.0 },
  { category: "Fees", weight: 25, score: 8.0 },
  { category: "Availability", weight: 20, score: 5.0 },
  { category: "Custody and trust", weight: 15, score: 8.0 },
  { category: "Features", weight: 10, score: 7.0 },
];

export default function HowWeRatePage() {
  const exampleTotal = exampleRows.reduce(
    (sum, row) => sum + (row.score * row.weight) / 100,
    0,
  );
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How We Rate Crypto Cards: The Scoring Formula Explained",
      url: PAGE_URL,
      datePublished: UPDATED_ISO,
      dateModified: UPDATED_ISO,
      author: { "@type": "Person", name: "Alex Rivera" },
      publisher: { "@type": "Organization", name: "CryptosBeginner" },
      about:
        "The weighted scoring formula behind CryptosBeginner crypto card ratings.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Crypto Cards",
          item: `${SITE_URL}/crypto-cards`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How We Rate",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">
            Ratings methodology
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950">
            How we rate crypto cards
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Every one of the {cardListings.length} cards in our directory
            carries a rating out of 10. No human picks that number. It is
            computed by one fixed formula from the structured facts already
            in the listing, the same facts you can read on the page, so two
            cards with the same facts always get the same score. This page
            publishes the formula in full: the categories, the weights, how
            each category is scored, and what the result does not measure.
            Updated <time dateTime={UPDATED_ISO}>{UPDATED}</time>.
          </p>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            The formula
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            The rating is a weighted average of five category scores, each
            out of 10: rewards at 30%, fees at 25%, availability at 20%,
            custody and trust at 15%, and features at 10%. Rewards and fees
            carry the most weight because they decide what a card actually
            costs or earns a typical holder over a year.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {RATING_METHODOLOGY.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            A worked example
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Take a hypothetical card with decent cashback under a modest
            cap, clean fees, mid-range availability, self-custody, and a
            good feature set:
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Weight</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Contribution</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {exampleRows.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-4 py-3 font-bold text-slate-900">
                      {row.category}
                    </td>
                    <td className="px-4 py-3">{row.weight}%</td>
                    <td className="px-4 py-3">{row.score.toFixed(1)}</td>
                    <td className="px-4 py-3">
                      {((row.score * row.weight) / 100).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-black text-slate-950">
                    Overall rating
                  </td>
                  <td className="px-4 py-3" />
                  <td className="px-4 py-3 font-black text-slate-950">
                    {exampleTotal.toFixed(1)} / 10
                  </td>
                  <td className="px-4 py-3" />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Note what the example shows: strong fees and custody cannot
            fully rescue mediocre rewards and availability, because the
            weights follow what a card costs and earns, not how it is
            marketed.
          </p>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Provisional ratings
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              Most new listings start as Provisional. The formula needs
              structured inputs, chiefly a fee breakdown and cashback tiers,
              and many providers publish their terms as prose, PDFs or app
              screens instead. Where structured data is missing, the
              affected categories fall back to parsing the listing&apos;s
              published pricing text, or score neutral where nothing can be
              parsed. The badge is shown muted so the thinner evidence base
              is visible at a glance.
            </p>
            <p>
              A card graduates automatically: when its listing gains
              structured fee and cashback data, the rating recalculates and
              the Provisional badge clears. Nothing about graduation is
              editorial, and a provider cannot speed it up except by
              publishing clearer terms.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            What the rating does not measure
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">
                Whether the issuer is safe.
              </strong>{" "}
              Custody and trust scores the model and its documented
              safeguards, not the issuer&apos;s solvency or honesty. A high
              rating is not a safety endorsement; our reviews and the
              security incidents guide cover failures and red flags.
            </li>
            <li>
              <strong className="text-slate-900">
                How much a card is actually used.
              </strong>{" "}
              Usage is a separate signal, published in our spend tracker
              from PaymentScan data. Some highly rated cards are barely
              used, and the most used card in the market is not the highest
              rated. Both facts are on the listings, labeled for what they
              are.
            </li>
            <li>
              <strong className="text-slate-900">
                Whether it is right for you.
              </strong>{" "}
              The formula scores a typical holder. Your country, spend
              level and currency can flip the answer, which is why the
              rewards calculator works from your own monthly spend instead.
            </li>
          </ul>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Ratings questions
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/crypto-cards"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-fuchsia-700"
            >
              Browse the rated directory →
            </Link>
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
            >
              Try the rewards calculator →
            </Link>
            <Link
              href="/crypto-cards/spending/methodology"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
            >
              How spend is measured →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
