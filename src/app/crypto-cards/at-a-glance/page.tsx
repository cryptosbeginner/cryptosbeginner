import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AuthorByline from "@/components/AuthorByline";
import GlanceList from "./GlanceList";
import { cardListings } from "../cards-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_TITLE = "Crypto Cards at a Glance: Every Card, One Line Each";
const PAGE_DESCRIPTION =
  "All 232 crypto cards in one scannable list: card art, network, custody model, the checked one-line summary, headline cashback and our rating for every card in the directory.";
const PAGE_URL = `${SITE_URL}/crypto-cards/at-a-glance`;

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | CryptosBeginner` },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Cards at a Glance | CryptosBeginner",
    description:
      "Every crypto card in the directory on one page: one checked line, the cashback headline and a rating for each of the 232 cards.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Cards at a Glance | CryptosBeginner",
    description: "All 232 crypto cards, one line each, with cashback headlines and ratings.",
  },
  robots: { index: true, follow: true },
};

const faq = [
  {
    question: "How is this different from the main crypto cards directory?",
    answer:
      "The directory page is built for deep filtering and comparison, with full cards for every listing. This page is the fast view: one row per card with its checked one-line summary, headline cashback and rating, so you can scan the whole market in a few minutes and open only the cards worth a closer look.",
  },
  {
    question: "Where do the one-line summaries come from?",
    answer:
      "Each line is the short summary from that card's own listing in this directory, written from the provider's published terms and pages. They are our words, not the provider's marketing copy, and the full listing behind every row carries the fees, caps and limits the one line cannot show.",
  },
  {
    question: "Why do some cards show no cashback?",
    answer:
      "Some cards publish no cashback programme at all, and others describe rewards without publishing a rate. The list says so plainly instead of guessing: a card marked as not published has no rate in its official materials that we could verify.",
  },
  {
    question: "How current is this list?",
    answer:
      "The rows are generated from the same listing data as the directory itself, so a card added, corrected or removed in the directory appears here at the same time. Ratings follow the published five-category formula explained on the how we rate page.",
  },
];

export default function AtAGlancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${PAGE_URL}#webpage`,
                name: "Crypto Cards at a Glance",
                url: PAGE_URL,
                description: PAGE_DESCRIPTION,
                datePublished: "2026-11-26",
                dateModified: "2026-11-26",
                mainEntity: { "@id": `${PAGE_URL}#itemlist` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },
              {
                "@type": "ItemList",
                "@id": `${PAGE_URL}#itemlist`,
                numberOfItems: cardListings.length,
                itemListElement: cardListings.map((card, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: card.name,
                  url: `${SITE_URL}/crypto-cards/${card.slug}`,
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Crypto Cards", item: `${SITE_URL}/crypto-cards` },
                  { "@type": "ListItem", position: 3, name: "At a Glance", item: PAGE_URL },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            url: PAGE_URL,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
            <Link href="/crypto-cards" className="hover:underline">Crypto Cards</Link> · The fast view
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Every crypto card, one line each
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Viral card tables list 40 or 50 projects with a marketing line each. This page lists all{" "}
            {cardListings.length} cards in our directory the same way, except every line comes from a checked
            listing, the cashback headline sits next to a rating, and each row opens the full fee and terms
            breakdown. Scan the market here, then read properly before you apply anywhere.
          </p>
          <div className="mt-5">
            <AuthorByline updated="26 November 2026" />
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
          <GlanceList />
        </section>
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/crypto-cards" className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:bg-indigo-50/40">
                <p className="font-black text-slate-950">Full directory</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Deep filters, regions and full listing cards for every product.</p>
              </Link>
              <Link href="/crypto-cards/effective-cashback" className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:bg-indigo-50/40">
                <p className="font-black text-slate-950">Effective cashback rankings</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">What each card actually keeps you after caps and annual fees.</p>
              </Link>
              <Link href="/learn/crypto-card-list-49" className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:bg-indigo-50/40">
                <p className="font-black text-slate-950">The 49-card list, checked</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">The viral table compared against the directory, line by line.</p>
              </Link>
            </div>
            <h2 className="mt-12 text-2xl font-black tracking-[-0.03em] text-slate-950">At a glance FAQ</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {faq.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-indigo-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
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
