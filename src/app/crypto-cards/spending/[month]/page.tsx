import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MONTHLY_SERIES,
  formatSpend,
  monthTotal,
  type MonthSpend,
} from "../../spend-data";

const SITE_URL = "https://www.cryptosbeginner.com";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function longLabel(m: MonthSpend): string {
  const [year, mm] = m.month.split("-");
  return `${MONTH_NAMES[parseInt(mm, 10) - 1]} ${year}`;
}

const PROGRAM_ROWS: Array<{
  key: "redotpay" | "etherfi" | "kast" | "wirexOne" | "karta" | "plasmaOne";
  name: string;
  slug: string;
  basis: string;
}> = [
  { key: "redotpay", name: "RedotPay", slug: "redotpay-card", basis: "Issuer-reported" },
  { key: "etherfi", name: "ether.fi Cash", slug: "etherfi-cash-card", basis: "Onchain" },
  { key: "kast", name: "KAST", slug: "kast-card", basis: "Onchain, daily batches" },
  { key: "wirexOne", name: "Wirex One", slug: "wirex-one-card", basis: "Onchain" },
  { key: "karta", name: "Karta", slug: "karta-card", basis: "Onchain, daily batches" },
  { key: "plasmaOne", name: "Plasma One", slug: "plasma-one-card", basis: "Onchain" },
];

type Props = { params: Promise<{ month: string }> };

export function generateStaticParams() {
  return MONTHLY_SERIES.map((m) => ({ month: m.month }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { month } = await params;
  const entry = MONTHLY_SERIES.find((m) => m.month === month);
  if (!entry) return { title: "Spend Report Not Found | CryptosBeginner", robots: { index: false, follow: false } };
  const label = longLabel(entry);
  const title = `Crypto Card Spend Report: ${label} | CryptosBeginner`;
  const description = `How much was spent with crypto cards in ${label}: ${formatSpend(monthTotal(entry))} in settled payments across tracked programs, with the largest programs ranked. Data: PaymentScan via Castle Labs.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE_URL}/crypto-cards/spending/${entry.month}` },
    openGraph: { title, description, url: `${SITE_URL}/crypto-cards/spending/${entry.month}`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export default async function MonthlySpendReportPage({ params }: Props) {
  const { month } = await params;
  const idx = MONTHLY_SERIES.findIndex((m) => m.month === month);
  if (idx === -1) notFound();
  const entry = MONTHLY_SERIES[idx];
  const prev = idx > 0 ? MONTHLY_SERIES[idx - 1] : null;
  const next = idx < MONTHLY_SERIES.length - 1 ? MONTHLY_SERIES[idx + 1] : null;
  const total = monthTotal(entry);
  const prevTotal = prev ? monthTotal(prev) : null;
  const momPct = prevTotal ? ((total - prevTotal) / prevTotal) * 100 : null;
  const label = longLabel(entry);
  const isLatest = idx === MONTHLY_SERIES.length - 1;
  const pageUrl = `${SITE_URL}/crypto-cards/spending/${entry.month}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "@id": `${pageUrl}#article`, headline: `Crypto card spend report: ${label}`, url: pageUrl, datePublished: "2026-11-12", author: { "@type": "Person", name: "Alex Rivera" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Crypto Cards", item: `${SITE_URL}/crypto-cards` }, { "@type": "ListItem", position: 3, name: "Spend Tracker", item: `${SITE_URL}/crypto-cards/spending` }, { "@type": "ListItem", position: 4, name: label, item: pageUrl }] } }) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/crypto-cards/spending" className="text-sm font-black text-fuchsia-700 hover:text-fuchsia-900">← Back to the spend tracker</Link>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Monthly spend report</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950">Crypto card spend: {label}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {formatSpend(total)} was spent with crypto cards in {label} across the programs tracked by PaymentScan
            {momPct !== null && prev ? `, ${momPct >= 0 ? "up" : "down"} ${Math.abs(momPct).toFixed(1)}% on ${longLabel(prev)}` : ""}.
            Figures are settled card payments, not top-ups, compiled from PaymentScan data as republished by Castle Labs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Total settled spend</p>
              <p className="mt-2 text-3xl font-black">{formatSpend(total)}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Vs previous month</p>
              <p className="mt-2 text-3xl font-black">{momPct === null ? "n/a" : `${momPct >= 0 ? "+" : ""}${momPct.toFixed(1)}%`}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Largest program</p>
              <p className="mt-2 text-3xl font-black">RedotPay</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{formatSpend(entry.redotpay)}, issuer-reported</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-black tracking-[-0.02em]">Largest tracked programs</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3">Spent in {label}</th>
                  <th className="px-4 py-3">Share</th>
                  <th className="px-4 py-3">Basis</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_ROWS.map((row) => {
                  const value = entry[row.key];
                  return (
                    <tr key={row.key} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 font-black"><Link href={`/crypto-cards/${row.slug}`} className="hover:text-fuchsia-700">{row.name}</Link></td>
                      <td className="px-4 py-3">{value > 0 ? formatSpend(value) : "Not tracked"}</td>
                      <td className="px-4 py-3">{value > 0 ? `${((value / total) * 100).toFixed(1)}%` : "n/a"}</td>
                      <td className="px-4 py-3 text-slate-500">{row.basis}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="px-4 py-3 font-black">All other programs and unattributed issuer flows</td>
                  <td className="px-4 py-3">{formatSpend(entry.allOther)}</td>
                  <td className="px-4 py-3">{((entry.allOther / total) * 100).toFixed(1)}%</td>
                  <td className="px-4 py-3 text-slate-500">Mixed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Program figures for the six largest programs are published monthly by Castle Labs. A zero means the program was not yet tracked that month, not that it processed nothing.
            {isLatest ? " The full program-by-program table for this month, including every tracked program, is on the spend tracker." : " Full program-by-program tables are published for the latest month on the spend tracker."}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/crypto-cards/spending" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-fuchsia-700">Open the spend tracker →</Link>
            {isLatest && <Link href="/crypto-cards" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 hover:bg-slate-50">Browse the card directory →</Link>}
          </div>

          <nav className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm font-black">
            {prev ? <Link href={`/crypto-cards/spending/${prev.month}`} className="text-fuchsia-700 hover:text-fuchsia-900">← {longLabel(prev)}</Link> : <span />}
            {next ? <Link href={`/crypto-cards/spending/${next.month}`} className="text-fuchsia-700 hover:text-fuchsia-900">{longLabel(next)} →</Link> : <span className="text-slate-400">Latest report</span>}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
