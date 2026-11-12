import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { CardListing } from "../../cards-data";
import { COMPARE_PAIRS, getComparePair, getPairsForCard } from "../../compare-data";
import { getCardRating } from "../../ratings";
import { modelCashback } from "../../effective-cashback/cashback-math";
import {
  LATEST_SPEND_MONTH,
  SPEND_BASIS_LABELS,
  formatSpend,
  getCardSpend,
} from "../../spend-data";

const SITE_URL = "https://www.cryptosbeginner.com";

type Props = { params: Promise<{ pair: string }> };

export function generateStaticParams() {
  return COMPARE_PAIRS.map((p) => ({ pair: p.pairSlug }));
}

function categoryLabel(card: CardListing): string {
  return card.categories
    .map((c) => (c === "dual-mode" ? "Dual-mode" : c === "self-custody" ? "Self-custody" : c[0].toUpperCase() + c.slice(1)))
    .join(" · ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const found = getComparePair(pair);
  if (!found) return { title: "Comparison Not Found | CryptosBeginner", robots: { index: false, follow: false } };
  const title = `${found.a.name} vs ${found.b.name}: Fees, Cashback and Spend Compared | CryptosBeginner`;
  const description = `${found.a.name} and ${found.b.name} compared side by side on fees, cashback, custody, availability, our rating and real monthly spend. Facts from the CryptosBeginner directory, checked ${found.a.reviewedAt}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE_URL}/crypto-cards/compare/${found.pairSlug}` },
    openGraph: { title, description, url: `${SITE_URL}/crypto-cards/compare/${found.pairSlug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export default async function ComparePairPage({ params }: Props) {
  const { pair } = await params;
  const found = getComparePair(pair);
  if (!found) notFound();
  const { a, b } = found;
  const pageUrl = `${SITE_URL}/crypto-cards/compare/${found.pairSlug}`;
  const ra = getCardRating(a);
  const rb = getCardRating(b);
  const sa = getCardSpend(a.slug);
  const sb = getCardSpend(b.slug);
  const ma = modelCashback(a);
  const mb = modelCashback(b);

  const rows: Array<{ label: string; va: string; vb: string }> = [
    { label: "Our rating", va: `${ra.score.toFixed(1)} / 10${ra.status === "provisional" ? " (provisional)" : ""}`, vb: `${rb.score.toFixed(1)} / 10${rb.status === "provisional" ? " (provisional)" : ""}` },
    { label: "Network", va: a.network, vb: b.network },
    { label: "Model", va: categoryLabel(a), vb: categoryLabel(b) },
    { label: "Card formats", va: a.cardFormats.join(" · "), vb: b.cardFormats.join(" · ") },
    { label: "Availability", va: a.availability, vb: b.availability },
    { label: "Rewards", va: a.rewards, vb: b.rewards },
    { label: "Pricing", va: a.pricing, vb: b.pricing },
    { label: "Funding", va: a.funding, vb: b.funding },
    {
      label: `Spent in ${LATEST_SPEND_MONTH}`,
      va: sa ? `${formatSpend(sa.spendUsd)} · #${sa.rank} of ${sa.trackedCount} tracked · ${SPEND_BASIS_LABELS[sa.basis]}` : "Not tracked",
      vb: sb ? `${formatSpend(sb.spendUsd)} · #${sb.rank} of ${sb.trackedCount} tracked · ${SPEND_BASIS_LABELS[sb.basis]}` : "Not tracked",
    },
    { label: "Facts checked", va: a.reviewedAt, vb: b.reviewedAt },
  ];

  const spendLeader = sa && sb ? (sa.spendUsd >= sb.spendUsd ? a : b) : null;
  const ratingLeader = ra.score !== rb.score ? (ra.score > rb.score ? a : b) : null;

  const faqs = [
    {
      question: `Which is used more, ${a.name} or ${b.name}?`,
      answer:
        sa && sb
          ? `In ${LATEST_SPEND_MONTH}, ${formatSpend(sa.spendUsd)} was spent with ${a.name} and ${formatSpend(sb.spendUsd)} with ${b.name}, across the programs tracked by PaymentScan and republished by Castle Labs. ${spendLeader ? `${spendLeader.name} is the more used of the two on that measure.` : ""} ${sa.basis === "issuer-reported" || sb.basis === "issuer-reported" ? "One of these programs reports its own figures, which are not independently verified onchain." : "Both figures are settled payments, not top-ups."}`
          : "Spend tracking does not cover both cards yet. See the spend tracker for the programs it does cover.",
    },
    {
      question: `Which pays better cashback, ${a.name} or ${b.name}?`,
      answer: `On the published terms in this directory, ${a.name} lists: ${a.rewards} ${b.name} lists: ${b.rewards} Headline rates come with caps, tiers and conditions, so check the worked examples on each profile before deciding.`,
    },
    {
      question: `How do the fees compare between ${a.name} and ${b.name}?`,
      answer: `${a.name}: ${a.pricing} ${b.name}: ${b.pricing} Provider fees and regional terms change, so confirm on the official fee pages linked from each profile.`,
    },
  ];

  const morePairs = [...getPairsForCard(a.slug), ...getPairsForCard(b.slug)]
    .filter((p, i, arr) => p.pairSlug !== found.pairSlug && arr.findIndex((x) => x.pairSlug === p.pairSlug) === i)
    .slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: `${a.name} vs ${b.name}`, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Crypto Cards", item: `${SITE_URL}/crypto-cards` }, { "@type": "ListItem", position: 3, name: "Compare", item: `${SITE_URL}/crypto-cards/compare` }, { "@type": "ListItem", position: 4, name: `${a.name} vs ${b.name}`, item: pageUrl }] } }, { "@type": "FAQPage", "@id": `${pageUrl}#faq`, url: pageUrl, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }] }) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/crypto-cards/compare" className="text-sm font-black text-fuchsia-700 hover:text-fuchsia-900">← All comparisons</Link>
          <h1 className="mt-8 text-4xl font-black tracking-[-0.03em] sm:text-5xl">{a.name} vs {b.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {spendLeader && sa && sb
              ? `On real usage, ${spendLeader.name} leads: ${formatSpend(Math.max(sa.spendUsd, sb.spendUsd))} was spent with it in ${LATEST_SPEND_MONTH}, against ${formatSpend(Math.min(sa.spendUsd, sb.spendUsd))} for the other card. `
              : ""}
            {ratingLeader
              ? `On our computed rating, ${ratingLeader.name} scores higher (${Math.max(ra.score, rb.score).toFixed(1)} vs ${Math.min(ra.score, rb.score).toFixed(1)} out of 10). `
              : `Both cards score ${ra.score.toFixed(1)} out of 10 on our computed rating. `}
            The full side-by-side facts are below, taken from each card's directory profile.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-950 text-white">
                  <th className="px-4 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Fact</th>
                  <th className="px-4 py-4"><Link href={`/crypto-cards/${a.slug}`} className="font-black text-white hover:text-cyan-200">{a.name}</Link></th>
                  <th className="px-4 py-4"><Link href={`/crypto-cards/${b.slug}`} className="font-black text-white hover:text-cyan-200">{b.name}</Link></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0 align-top">
                    <td className="px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-400">{row.label}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{row.va}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{row.vb}</td>
                  </tr>
                ))}
                {(ma || mb) && (
                  <tr className="align-top">
                    <td className="px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-400">Cashback used in our math</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{ma ? `${ma.rateLabel}${ma.rateKind === "max-only" ? " (maximum rate, not a base rate)" : ""}${ma.monthlyCap ? `, cap $${ma.monthlyCap.toLocaleString("en-US")}/month` : ""}` : "Not modeled"}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{mb ? `${mb.rateLabel}${mb.rateKind === "max-only" ? " (maximum rate, not a base rate)" : ""}${mb.monthlyCap ? `, cap $${mb.monthlyCap.toLocaleString("en-US")}/month` : ""}` : "Not modeled"}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[a, b].map((card) => (
              <div key={card.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-base font-black">{card.name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{card.bestFor}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/crypto-cards/${card.slug}`} className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white hover:bg-fuchsia-700">Open profile →</Link>
                  {card.fullReviewUrl && <Link href={card.fullReviewUrl} className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white hover:bg-emerald-500">Full review →</Link>}
                  {card.referralUrl && <a href={card.referralUrl} target="_blank" rel="sponsored nofollow noreferrer" className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-2.5 text-xs font-black text-fuchsia-800 hover:bg-fuchsia-100">{card.referralLabel ?? "Check card"} ↗</a>}
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-black tracking-[-0.02em]">Questions about this pair</h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f) => (
              <details key={f.question} className="group p-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-black marker:hidden">{f.question}<span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>

          {morePairs.length > 0 && (
            <>
              <h2 className="mt-12 text-2xl font-black tracking-[-0.02em]">More comparisons</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {morePairs.map((p) => (
                  <Link key={p.pairSlug} href={`/crypto-cards/compare/${p.pairSlug}`} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800 hover:bg-slate-50">{p.a.name} vs {p.b.name} →</Link>
                ))}
                <Link href="/crypto-cards/compare" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800 hover:bg-slate-50">All comparisons →</Link>
              </div>
            </>
          )}
          <p className="mt-10 text-xs leading-5 text-slate-500">
            Spend figures are settled payments tracked by PaymentScan and republished by Castle Labs for {LATEST_SPEND_MONTH}; see the{" "}
            <Link href="/crypto-cards/spending" className="font-black text-fuchsia-700">spend tracker</Link> for methodology and caveats.
            Ratings are computed from structured listing facts by a fixed formula; see{" "}
            <Link href="/crypto-cards#how-we-rate" className="font-black text-fuchsia-700">how we rate</Link>. This comparison is educational content, not a personal recommendation.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
