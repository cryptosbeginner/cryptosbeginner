import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EffectiveCashbackTable from "./EffectiveCashbackTable";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/effective-cashback`;
const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";

export const metadata: Metadata = {
  title: "Effective Cashback Compared: What Crypto Cards Actually Pay | CryptosBeginner",
  description:
    "Headline cashback rates lie by omission. We computed the effective cashback of every crypto card in our directory at $500, $1,000 and $2,000 monthly spend, after caps and annual fees. See what each card really pays.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Effective Cashback: What Crypto Cards Actually Pay",
    description:
      "Every card in our directory ranked by net effective cashback at real spending levels, after caps and annual fees.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Cashback: What Crypto Cards Actually Pay",
    description:
      "Every card in our directory ranked by net effective cashback at real spending levels, after caps and annual fees.",
  },
  robots: { index: true, follow: true },
};

const FAQ = [
  {
    question: "What is effective cashback?",
    answer:
      "The headline rate (say, 3%) is what a card advertises. Effective cashback is what you actually keep: rewards after any monthly cap, minus a share of the annual fee, divided by what you spent. A 3% card with a $129 annual fee pays less than 3% unless you spend enough to dilute the fee.",
  },
  {
    question: "Why do some cards show an 'up to' rate instead of a ranking?",
    answer:
      "Some cards only advertise a maximum rate ('up to 10%') tied to tiers, staking, or spending conditions, with no published base rate. We list those separately and do not rank them, because ranking them on the maximum would mislead. Always check the qualifying conditions on the provider page.",
  },
  {
    question: "What is not included in these estimates?",
    answer:
      "Staking or lockup requirements, reward lockup periods, excluded merchant categories, regional differences, reward-token price volatility, and welcome bonuses. Tiered programs ('first $1,000 at 4.5%, then 1%') are simplified to the advertised base rate, so actual returns can be lower above the first tier. Provider terms are the authority.",
  },
  {
    question: "How often is this updated?",
    answer:
      "The table is computed from our card directory listings, which carry their own verified-on dates. Cashback programs change often; treat this as a comparison starting point and confirm the current terms on the provider page before applying.",
  },
];

const METHODOLOGY = [
  [
    "Rate used",
    "The first published base rate: the lowest paid tier ('Tier 1 pays 1%'), the base of an 'X% to Y%' range, or the first rate stated. Cards whose only stated rate is a promotional 'up to X%' are listed separately, not ranked.",
  ],
  [
    "Monthly caps",
    "Only explicit monthly reward caps are applied ('$25/month cap', 'monthly cap (USD 750)'). Tier thresholds ('first $1,000 at 4.5%') are noted in the listing but simplified in the math.",
  ],
  [
    "Annual fees",
    "The first published yearly figure, or a monthly fee annualized x12. Cards stating 'no annual fee' count as $0. One-time issuance fees are not annualized.",
  ],
  [
    "Formula",
    "Effective % = (min(spend x rate, monthly cap) - annual fee / 12) / spend. Computed at $500, $1,000 and $2,000 monthly spend.",
  ],
];

export default function EffectiveCashbackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "Effective Cashback Compared: What Crypto Cards Actually Pay",
                description:
                  "Every crypto card in the CryptosBeginner directory ranked by net effective cashback at $500, $1,000 and $2,000 monthly spend.",
                datePublished: UPDATED_ISO,
                dateModified: UPDATED_ISO,
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Crypto Cards", item: `${SITE_URL}/crypto-cards` },
                  { "@type": "ListItem", position: 3, name: "Effective Cashback", item: PAGE_URL },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                url: PAGE_URL,
                mainEntity: FAQ.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="bg-slate-50">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Card intelligence
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Effective cashback: what crypto cards actually pay
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              A 3% headline rate with a $129 annual fee is not really 3%. We
              ran every card in our directory through one honest formula:
              rewards after any published monthly cap, minus a share of the
              annual fee, at three real spending levels. Updated {UPDATED}.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              <Link href="/crypto-cards" className="underline hover:text-white">
                Browse all 183 cards
              </Link>
              {" · "}
              <Link href="/crypto-cards/reviews" className="underline hover:text-white">
                Read our tested reviews
              </Link>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <EffectiveCashbackTable />
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
              Methodology
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950">
              How the numbers are computed
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {METHODOLOGY.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm font-black text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
              These are modeled estimates from our own directory listings, not
              provider quotes. Figures were computed {UPDATED}; cashback
              programs change frequently, so confirm current terms on the
              provider page before applying. Spending crypto can have tax
              consequences depending on your jurisdiction. For the full story
              behind the headline rates, read our guide{" "}
              <Link
                href="/crypto-cards/guides/cashback-ad-vs-reality"
                className="font-bold text-indigo-700 underline hover:text-indigo-900"
              >
                Crypto Card Cashback: Advertised vs Reality
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950">
              The short answers
            </h2>
            <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {FAQ.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-indigo-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
