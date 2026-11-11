import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  LATEST_SPEND_MONTH,
  NOVEMBER_2026_MTD_LABEL,
  OCTOBER_2026_ISSUERS,
  OCTOBER_2026_PROGRAMS,
  OCTOBER_2026_TOTAL_USD,
  OCTOBER_2026_UNATTRIBUTED_USD,
  OCTOBER_2026_UNDER_10K,
  OCTOBER_2026_VS_SEP_PCT,
  MONTHLY_SERIES,
  SPEND_BASIS_LABELS,
  formatSignedPct,
  formatSpend,
  monthTotal,
} from "../spend-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/spending`;
const UPDATED = "12 November 2026";
const UPDATED_ISO = "2026-11-12";

export const metadata: Metadata = {
  title: "Crypto Card Spending Tracker: Monthly Volumes by Card | CryptosBeginner",
  description:
    "How much do people actually spend on crypto cards? Monthly settled spend for 30 card programs, tracked from PaymentScan data: $1.37B in October 2026, ranked by program with methodology and caveats.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Spending Tracker",
    description:
      "Monthly settled spend by crypto card program: $1.37B tracked in October 2026 across 30 programs. Data from PaymentScan, compiled by CryptosBeginner.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Card Spending Tracker",
    description:
      "Monthly settled spend by crypto card program, from PaymentScan data. October 2026: $1.37B across 30 tracked programs.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Where does this spending data come from?",
    answer:
      "The figures come from PaymentScan (paymentscan.xyz), which tracks settled crypto card payments, mostly by reading settlement onchain. We compile the monthly tables from PaymentScan data as republished by Castle Labs, and we update this page by hand in the first week of each month. PaymentScan has no public API, so there is no live feed; each month here is a complete calendar month snapshot.",
  },
  {
    question: "What counts as spend here?",
    answer:
      "Settled card payments only, not top-ups or deposits. That distinction matters: some trackers quote top-up volume, which runs higher because it counts money loaded onto cards rather than money actually spent with merchants. Four programs (RedotPay, Gate Card, DogPay and BFinance) are counted mostly from data the issuer sends PaymentScan rather than onchain settlement, and we label them issuer-reported wherever they appear.",
  },
  {
    question: "Why is a third of the spend not tied to a named card?",
    answer:
      "PaymentScan can see settlement flowing through an issuer such as Rain or Wirex without being able to attribute every payment to a specific card program on those rails. In October 2026 that unattributed share was $448.1M, about 33% of the $1.37B total. Named programs are carved out of the issuer totals, so the two tables add up without double counting, and the named-card ranking understates how much spend the big issuers carry in total.",
  },
  {
    question: "Which crypto card has the most spending?",
    answer:
      "RedotPay, with $423.5M of settled spend in October 2026, about 31% of all tracked spend. It is also the biggest caveat in the table: its figure is issuer-reported rather than read from onchain settlement, so it cannot be independently verified. The largest fully onchain-measured program is ether.fi Cash at $141.9M, followed by KAST at $121.0M.",
  },
];

const SERIES_KEYS = [
  { key: "redotpay", label: "RedotPay", color: "#e11d48" },
  { key: "etherfi", label: "ether.fi Cash", color: "#4f46e5" },
  { key: "kast", label: "KAST", color: "#f59e0b" },
  { key: "wirexOne", label: "Wirex One", color: "#06b6d4" },
  { key: "karta", label: "Karta", color: "#10b981" },
  { key: "plasmaOne", label: "Plasma One", color: "#a21caf" },
  { key: "allOther", label: "All other", color: "#cbd5e1" },
] as const;

function pctClass(pct: number | null): string {
  if (pct === null) return "text-slate-500";
  return pct >= 0 ? "font-bold text-emerald-700" : "font-bold text-rose-700";
}

export default function SpendingPage() {
  const maxTotal = Math.max(...MONTHLY_SERIES.map(monthTotal));
  const octoberNamed = OCTOBER_2026_PROGRAMS.reduce((sum, p) => sum + p.spendUsd, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Card Spending Tracker: Monthly Volumes by Card",
            url: PAGE_URL,
            datePublished: UPDATED_ISO,
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
            publisher: { "@type": "Organization", name: "CryptosBeginner" },
            about: "Monthly settled spending volumes for crypto card programs, compiled from PaymentScan data.",
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
      <main className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Card spend data</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950">
            Crypto card spending, tracked monthly
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Cashback rates are marketing. Spend is behaviour. This page tracks how much money
            actually moves through crypto card programs each month, using settled payment data
            from PaymentScan, compiled by CryptosBeginner and updated monthly. The latest
            complete month is {LATEST_SPEND_MONTH}: {formatSpend(OCTOBER_2026_TOTAL_USD)} spent
            across 30 tracked programs, up {OCTOBER_2026_VS_SEP_PCT}% on September.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Data to 31 October 2026 · Updated {UPDATED} · Source:{" "}
            <a href="https://paymentscan.xyz" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 hover:text-emerald-900">
              PaymentScan
            </a>{" "}
            via{" "}
            <a href="https://castlelabs.io/research/crypto-cards" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 hover:text-emerald-900">
              Castle Labs
            </a>
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Total tracked spend, Oct 2026", "$1.37B", `+${OCTOBER_2026_VS_SEP_PCT}% on September 2026`],
              ["Largest program", "RedotPay", "$423.5M, 31% of the total (issuer-reported)"],
              ["Named programs tracked", "28", "plus Ready and Solflare under $10K"],
              ["Not tied to a named card", "33%", `${formatSpend(OCTOBER_2026_UNATTRIBUTED_USD)} through issuers such as Rain and Wirex`],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Spend by program, {LATEST_SPEND_MONTH}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Settled payments only, not top-ups. Programs labelled issuer-reported send their
            figures to PaymentScan directly and cannot be checked onchain; programs labelled
            daily batches settle a day of spend onchain in one transfer, so they have totals
            but no per-payment figures. Cards in our directory link to their listings.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[960px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-black text-slate-950">#</th>
                  <th className="px-4 py-3 font-black text-slate-950">Program</th>
                  <th className="px-4 py-3 font-black text-slate-950">October spend</th>
                  <th className="px-4 py-3 font-black text-slate-950">Share</th>
                  <th className="px-4 py-3 font-black text-slate-950">vs September</th>
                  <th className="px-4 py-3 font-black text-slate-950">Avg payment</th>
                  <th className="px-4 py-3 font-black text-slate-950">{NOVEMBER_2026_MTD_LABEL}</th>
                  <th className="px-4 py-3 font-black text-slate-950">Data</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {OCTOBER_2026_PROGRAMS.map((p, i) => (
                  <tr key={p.program} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-400">{i + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      {p.slug ? (
                        <Link href={`/crypto-cards/${p.slug}`} className="text-emerald-700 hover:text-emerald-900">
                          {p.program}
                        </Link>
                      ) : (
                        p.program
                      )}
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-900">{formatSpend(p.spendUsd)}</td>
                    <td className="px-4 py-3">{p.sharePct}%</td>
                    <td className={`px-4 py-3 ${pctClass(p.vsPrevPct)}`}>{formatSignedPct(p.vsPrevPct)}</td>
                    <td className="px-4 py-3">{p.avgPaymentUsd ? `$${p.avgPaymentUsd}` : "n/a"}</td>
                    <td className="px-4 py-3">{p.monthToDateUsd ? formatSpend(p.monthToDateUsd) : "n/a"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 text-xs font-bold ${
                          p.basis === "issuer-reported"
                            ? "border-amber-200 bg-amber-50 text-amber-800"
                            : "border-slate-200 bg-slate-50 text-slate-600"
                        }`}
                      >
                        {SPEND_BASIS_LABELS[p.basis]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Named programs total {formatSpend(octoberNamed)} of the {formatSpend(OCTOBER_2026_TOTAL_USD)} tracked.
            Also tracked with under $10,000 of October spend, with no figures published:{" "}
            {OCTOBER_2026_UNDER_10K.join(" and ")}. Figures are as published by PaymentScan and
            Castle Labs, rounded, so rows may not sum exactly to the total.
          </p>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Twelve months of card spend
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            The six largest programs, stacked, with everything else (including unattributed
            issuer flows) as All other. Tracked spend has close to tripled in a year, from
            about $482M in November 2025 to {formatSpend(monthTotal(MONTHLY_SERIES[MONTHLY_SERIES.length - 1]))}{" "}
            in October 2026, and it grew in most months along the way.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-64 items-end gap-1 sm:gap-2">
              {MONTHLY_SERIES.map((m) => {
                const total = monthTotal(m);
                return (
                  <div key={m.month} className="flex flex-1 flex-col justify-end" style={{ height: "100%" }} title={`${m.label}: ${formatSpend(total)}`}>
                    <div className="flex flex-col-reverse overflow-hidden rounded-t-md" style={{ height: `${(total / maxTotal) * 100}%` }}>
                      {SERIES_KEYS.map(({ key, color }) => {
                        const v = m[key];
                        if (!v) return null;
                        return <div key={key} style={{ height: `${(v / total) * 100}%`, backgroundColor: color }} title={`${m.label} · ${formatSpend(v)}`} />;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex gap-1 sm:gap-2">
              {MONTHLY_SERIES.map((m) => (
                <p key={m.month} className="flex-1 text-center text-[10px] font-bold text-slate-500 sm:text-xs">
                  {m.label.replace(" 20", " ’")}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {SERIES_KEYS.map(({ key, label, color }) => (
                <p key={key} className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
                  {label}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-black text-slate-950">Month</th>
                  <th className="px-4 py-3 font-black text-slate-950">Total tracked spend</th>
                  <th className="px-4 py-3 font-black text-slate-950">vs previous month</th>
                  <th className="px-4 py-3 font-black text-slate-950">Largest program</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {MONTHLY_SERIES.map((m, i) => {
                  const total = monthTotal(m);
                  const prev = i > 0 ? monthTotal(MONTHLY_SERIES[i - 1]) : null;
                  const change = prev ? Math.round(((total - prev) / prev) * 1000) / 10 : null;
                  return (
                    <tr key={m.month} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 font-bold text-slate-900">{m.label}</td>
                      <td className="px-4 py-3">{formatSpend(total)}</td>
                      <td className={`px-4 py-3 ${pctClass(change)}`}>{change === null ? "n/a" : formatSignedPct(change)}</td>
                      <td className="px-4 py-3">RedotPay, {formatSpend(m.redotpay)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">What the October numbers say</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Growth is broad at the top.</strong> All six of
              the largest programs grew on September: Plasma One +18%, Wirex One +15%, ether.fi
              Cash +10%, Karta +8.4%, KAST +6.3% and RedotPay +5.0%.
            </li>
            <li>
              <strong className="text-slate-900">The fastest growth is at the small end.</strong>{" "}
              Solid grew +148% on September (to $689.7K), Ethena Pay +97% (to $3.1M) and Gate
              Card +40% (to $3.8M). Small bases make big percentages, but the direction matches
              the trailing 30-day picture through mid-November.
            </li>
            <li>
              <strong className="text-slate-900">Ticket sizes differ wildly.</strong> Kolo
              averages $249 per payment and Plasma One $182, against $14 at SafePal and $38 at
              Bitget Wallet. High average tickets suggest travel and big-ticket spending;
              low ones suggest everyday small purchases.
            </li>
            <li>
              <strong className="text-slate-900">A third of the market is invisible by name.</strong>{" "}
              {formatSpend(OCTOBER_2026_UNATTRIBUTED_USD)} moved through issuers without being
              tied to a named card, so the ranking above understates the programmes running on
              Rain and Wirex rails in particular.
            </li>
          </ul>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">
            Spend not tied to a named card, by issuer
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            PaymentScan&apos;s unattributed series: payments an issuer settles for card
            programmes it has not named. Named cards are carved out of these totals, so this
            table and the program table add up to the {formatSpend(OCTOBER_2026_TOTAL_USD)} total
            without double counting.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-black text-slate-950">Issuer</th>
                  <th className="px-4 py-3 font-black text-slate-950">October spend</th>
                  <th className="px-4 py-3 font-black text-slate-950">vs September</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {OCTOBER_2026_ISSUERS.map((row) => (
                  <tr key={row.issuer} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 font-bold text-slate-900">{row.issuer}</td>
                    <td className="px-4 py-3">{formatSpend(row.spendUsd)}</td>
                    <td className={`px-4 py-3 ${pctClass(row.vsPrevPct)}`}>{formatSignedPct(row.vsPrevPct)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">Methodology and caveats</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              Data: PaymentScan (paymentscan.xyz), compiled from the monthly tables republished
              by Castle Labs at castlelabs.io/research/crypto-cards (spend updated 6 November
              2026, data to 31 October 2026). We update this page by hand each month; there is
              no live feed.
            </p>
            <p>
              Figures are settled card payments, not top-ups. RedotPay, Gate Card, DogPay and
              BFinance, together $431.9M or 31% of October&apos;s total, are counted mostly from
              data the issuers send PaymentScan rather than from onchain settlement; PaymentScan
              itself flags those figures as not onchain-verifiable, and their payment and user
              counts are not comparable, so we leave them blank. KAST, Karta, Karta.io, Tuyo and
              Solayer settle in daily batches, so they have totals but no per-payment figures.
            </p>
            <p>
              The November column is a partial month (to 6 November 2026) and is not comparable
              with full months. Published figures are rounded; rows may not sum exactly to
              totals. Nothing on this page is a recommendation: spend volume says a card is
              used, not that it is safe, well priced, or right for you. Check our{" "}
              <Link href="/crypto-cards" className="font-bold text-emerald-700 hover:text-emerald-900">
                card directory and reviews
              </Link>{" "}
              for fees, custody and risk detail before choosing a card.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-black tracking-[-0.02em] text-slate-950">Spending tracker FAQ</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                  {item.question}
                  <span className="float-right text-emerald-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-black text-slate-950">Choosing a card?</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Spend volume is only one signal. Compare fees, cashback caps, custody and country
                availability across 200+ cards in the directory.
              </p>
            </div>
            <Link
              href="/crypto-cards"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-emerald-700"
            >
              Browse the card directory
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
