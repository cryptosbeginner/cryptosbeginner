import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/spending/methodology`;
const UPDATED = "26 November 2026";
const UPDATED_ISO = "2026-11-26";

export const metadata: Metadata = {
  title: "How Crypto Card Spend Is Measured: Methodology | CryptosBeginner",
  description:
    "How our crypto card spending numbers are produced: on-chain settlement, PaymentScan data, the difference between on-chain and issuer-reported figures, why published totals differ, and what the data cannot tell you.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How Crypto Card Spend Is Measured",
    description:
      "The methodology behind the CryptosBeginner spend tracker: sources, labels, revisions and limits, stated plainly.",
    url: PAGE_URL,
    type: "article",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Why do other sites show a different total for the same month?",
    answer:
      "Because they draw the line in a different place. Our headline total follows PaymentScan and includes programs whose figures are issuer-reported, labeled as such wherever they appear. A publisher that counts only spend it can verify on-chain will show a much smaller number for the same month: for October 2026 that verified-only approach produces roughly $490M against our $1.37B headline. Neither number is fabricated; they answer different questions. Ours answers how much tracked programs settled in total, theirs answers how much of it can be independently checked on a blockchain.",
  },
  {
    question: "Is this spend or top-ups?",
    answer:
      "Spend. The figures are settled card payments: money that left a card program to pay a merchant. Top-ups and deposits are excluded. The distinction matters because top-up volume runs higher and says less about real usage.",
  },
  {
    question: "Why is RedotPay labeled issuer-reported?",
    answer:
      "RedotPay is the largest tracked program, and its settlement does not appear on a public blockchain in a form PaymentScan can read. Its monthly figure comes from data the issuer supplies, and PaymentScan flags it as not on-chain verifiable. We publish it, because excluding the biggest program would distort the market picture, and we label it every time, because readers should know which numbers they can check and which they have to take on trust.",
  },
  {
    question: "Can I quote or reuse this data?",
    answer:
      "Yes. The monthly series is free to quote with a link back to the spend tracker, and we publish it as CSV and JSON downloads so you do not have to scrape the page. If you republish a figure, keep its basis label with it: an issuer-reported number quoted as on-chain fact is how bad statistics spread.",
  },
];

export default function SpendMethodologyPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How Crypto Card Spend Is Measured: Methodology",
      url: PAGE_URL,
      datePublished: UPDATED_ISO,
      dateModified: UPDATED_ISO,
      author: { "@type": "Person", name: "Alex Rivera" },
      publisher: { "@type": "Organization", name: "CryptosBeginner" },
      about:
        "Methodology for monthly crypto card spending statistics compiled from PaymentScan data.",
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
          name: "Spending Tracker",
          item: `${SITE_URL}/crypto-cards/spending`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Methodology",
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
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
            Spend data methodology
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950">
            How crypto card spend is measured
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Our spend tracker publishes a monthly total for crypto card
            payments, $1.37B for October 2026, and rankings by program.
            Numbers like that invite a fair question: measured how? This
            page explains where the figures come from, what the labels
            mean, why other publishers show different totals for the same
            month, and what the data cannot tell you. Updated{" "}
            <time dateTime={UPDATED_ISO}>{UPDATED}</time>.
          </p>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Start with settlement: what makes this countable at all
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              When a crypto card pays a merchant, the merchant is paid over
              the ordinary Visa or Mastercard rails, in ordinary currency.
              Behind that payment, many programs fund what they owe by
              moving money on a public blockchain, usually stablecoins,
              from the program&apos;s wallets to its card issuer. Those
              funding transfers are public. Anyone can add them up, which
              is what makes an independent spending statistic possible
              without asking issuers for their numbers.
            </p>
            <p>
              The flip side defines the limits of the whole exercise. A
              program that settles through internal ledger entries, bank
              transfers or an issuer&apos;s private systems leaves nothing
              public to count. Its spend can only ever be reported by the
              issuer itself. Every crypto card statistic you will ever see
              is built on that split, whether the publisher explains it or
              not.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Where our numbers come from
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              The underlying tracking is done by PaymentScan
              (paymentscan.xyz), which reads settlement flows and
              attributes them to card programs and issuers. Castle Labs
              republishes PaymentScan data as monthly tables, and we
              compile our tracker and monthly reports from those tables by
              hand, in the first week of each month. PaymentScan has no
              public API, so there is no live feed behind our pages: each
              month we publish is a complete calendar month, checked as a
              snapshot.
            </p>
            <p>
              Card terms are a separate input. Cashback rates, fees and
              caps in our directory and rewards calculator come from each
              issuer&apos;s official pages, never from spend data. Spend
              tells you a card is used; terms tell you what it costs.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            The three labels we put on every figure
          </h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <div className="divide-y divide-slate-200">
              <div className="grid gap-2 px-6 py-5 md:grid-cols-[200px_1fr]">
                <p className="font-bold text-slate-900">On-chain</p>
                <p className="text-sm leading-6 text-slate-600">
                  Settlement was read from public blockchain transfers and
                  attributed to the program. Independently checkable, and
                  the strongest kind of figure we publish. Where the source
                  provides them, these programs also carry an average
                  payment size and a paying-user count.
                </p>
              </div>
              <div className="grid gap-2 px-6 py-5 md:grid-cols-[200px_1fr]">
                <p className="font-bold text-slate-900">
                  On-chain, daily batches
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  The program settles on-chain but in aggregated daily
                  batches, as KAST and Karta do. The monthly total is
                  on-chain and checkable, but per-payment figures cannot be
                  derived, so we publish totals only for these programs.
                </p>
              </div>
              <div className="grid gap-2 px-6 py-5 md:grid-cols-[200px_1fr]">
                <p className="font-bold text-slate-900">Issuer-reported</p>
                <p className="text-sm leading-6 text-slate-600">
                  The figure comes from data the issuer sends PaymentScan,
                  not from public settlement. RedotPay, Gate Card, DogPay
                  and BFinance sit here, together $431.9M of October
                  2026&apos;s total. We include them, because a market
                  total that omits its largest program misleads in the
                  opposite direction, and we label them every time,
                  because you should know which numbers rest on trust.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Why published totals differ, and the unattributed third
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              Two honest publishers can print very different totals for
              the same month, and October 2026 is the clearest example.
              Our headline is $1.37B. Count only on-chain verifiable
              settlement and the same month comes to roughly $490M. The
              gap is mostly one program: RedotPay&apos;s $423.5M is
              issuer-reported. When you see a crypto card statistic, the
              first question to ask is which side of that line the
              publisher counts.
            </p>
            <p>
              There is a second, quieter gap. In October 2026, $448.1M,
              about a third of the total, flowed through issuers such as
              Rain and Wirex without being attributable to a specific card
              program. Named programs are carved out of their issuers&apos;
              totals in our tables, so nothing is double counted, but it
              means the named-card ranking understates the big issuers,
              and the true spend of smaller programs on shared rails is
              partly invisible. We show the unattributed figure openly
              rather than spreading it across programs it may not belong
              to.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Revisions, coverage growth and like-for-like
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              The source data refreshes, and a recent month can be revised
              when it does. We only report complete months, we date every
              snapshot, and when a figure changes we update the month
              report rather than quietly editing history.
            </p>
            <p>
              Totals also grow for a boring reason: coverage grows. A
              program added to tracking in June makes the market look
              bigger in July even if nothing else changed. That is why
              our tracker also publishes a like-for-like comparison, the
              growth of only the programs tracked in both periods, next to
              the headline growth. Headline growth tells you the tracked
              market is expanding; like-for-like tells you whether the
              same cards are actually being used more.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            What this data does not tell you
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Spend is not users.</strong>{" "}
              A total is the value of payments. A small number of heavy
              spenders can move a program&apos;s month, and most programs
              do not publish user counts.
            </li>
            <li>
              <strong className="text-slate-900">Spend is not safety.</strong>{" "}
              Volume says a card is used, not that its issuer is sound,
              its fees are fair or its custody is prudent. Our directory
              and reviews exist for those questions.
            </li>
            <li>
              <strong className="text-slate-900">
                A missing program is not a dead program.
              </strong>{" "}
              If a card settles off-chain and does not report, it is
              invisible to this method entirely. Absence from the table
              means unmeasured, not unused.
            </li>
            <li>
              <strong className="text-slate-900">
                Averages hide the shape.
              </strong>{" "}
              Where we show an average payment, it is a mean across very
              different kinds of spending, from coffee to rent.
            </li>
          </ul>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Methodology questions
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
              href="/crypto-cards/spending"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-fuchsia-700"
            >
              Open the spend tracker →
            </Link>
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
            >
              Try the rewards calculator →
            </Link>
          </div>

          <p className="mt-8 text-xs leading-5 text-slate-500">
            Sources: PaymentScan (paymentscan.xyz); monthly tables
            republished by Castle Labs at castlelabs.io/research/crypto-cards.
            This page describes our compilation and labeling choices; the
            underlying tracking method belongs to PaymentScan.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
