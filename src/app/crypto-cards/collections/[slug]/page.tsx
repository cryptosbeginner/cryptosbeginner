import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { collections, getCollection, getCollectionCards } from "../collections-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const HUB_URL = `${SITE_URL}/crypto-cards`;
const COLLECTIONS_URL = `${SITE_URL}/crypto-cards/collections`;
const VERIFIED_LABEL = "October 2026";

export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(decodeURIComponent(slug));
  if (!collection) return { title: "Collection Not Found | CryptosBeginner", robots: { index: false, follow: false } };
  const pageUrl = `${COLLECTIONS_URL}/${collection.slug}`;
  const title = `${collection.title} | CryptosBeginner`;
  return {
    title: { absolute: title },
    description: collection.description,
    alternates: { canonical: pageUrl },
    openGraph: { title, description: collection.description, url: pageUrl, type: "article" },
    twitter: { card: "summary_large_image", title, description: collection.description },
    robots: { index: true, follow: true },
  };
}

function breadcrumbSchema(pageUrl: string, title: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Crypto Cards", item: HUB_URL },
      { "@type": "ListItem", position: 3, name: "Collections", item: COLLECTIONS_URL },
      { "@type": "ListItem", position: 4, name: title, item: pageUrl },
    ],
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(decodeURIComponent(slug));
  if (!collection) notFound();
  const cards = getCollectionCards(collection);
  const pageUrl = `${COLLECTIONS_URL}/${collection.slug}`;
  const related = collections.filter((c) => c.slug !== collection.slug).slice(0, 3);

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
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: collection.title,
                description: collection.description,
                datePublished: "2026-10-14",
                dateModified: "2026-10-14",
                mainEntity: { "@id": `${pageUrl}#itemlist` },
                breadcrumb: breadcrumbSchema(pageUrl, collection.title),
                isPartOf: { "@type": "CollectionPage", "@id": `${COLLECTIONS_URL}#webpage`, name: "Crypto Card Collections", url: COLLECTIONS_URL },
              },
              {
                "@type": "ItemList",
                "@id": `${pageUrl}#itemlist`,
                numberOfItems: cards.length,
                itemListOrder: "https://schema.org/ItemListOrderAscending",
                itemListElement: cards.map((card, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: card.name,
                  url: `${SITE_URL}/crypto-cards/${card.slug}`,
                })),
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
            "@id": `${pageUrl}#faq`,
            url: pageUrl,
            mainEntity: collection.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="relative overflow-hidden bg-[#0b0820] text-white">
          <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav className="text-sm text-slate-300">
                <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
                {" / "}
                <Link href="/crypto-cards/collections" className="hover:text-white">Collections</Link>
                {" / "}
                <span className="text-slate-400">{collection.title}</span>
              </nav>
              <span className="rounded-full border border-white/15 bg-white/[.08] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-fuchsia-100">
                Curated from our card data · verified {VERIFIED_LABEL}
              </span>
            </div>
            <div className="mt-12 max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">{collection.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl">{collection.title}</h1>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">{collection.intro}</p>
              <p className="mt-4 text-xs leading-6 text-slate-400">
                <strong className="text-slate-200">Affiliate disclosure:</strong> Some buttons may use referral links. A referral relationship does not change the inclusion criteria or guarantee approval, fees, rewards, availability, or suitability. This is an editorial curation, not financial advice.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#rankings" className="rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 hover:-translate-y-0.5">See the rankings</a>
                <a href="#method" className="rounded-xl border border-white/20 bg-white/[.08] px-5 py-3 text-sm font-black text-white hover:bg-white/15">How we picked</a>
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.75rem] bg-slate-950 p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-200">Methodology</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">How we picked these cards</h2>
              <div className="mt-6 space-y-3">
                {collection.methodology.map((criterion, index) => (
                  <p key={criterion} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-xs font-black text-fuchsia-200">{index + 1}</span>
                    {criterion}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Our own curation</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This ranking is produced by CryptosBeginner from our own database of 132 card profiles. The cards are ordered by editorial judgment against the methodology above. Reward headlines are quoted from provider wording, never converted into a score, and nothing here is invented.
                </p>
              </div>
              {collection.thinDataNote && (
                <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.17em] text-amber-800">Honest data note</p>
                  <p className="mt-3 text-sm leading-7 text-amber-950/80">{collection.thinDataNote}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="rankings" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Ranked shortlist</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">{cards.length} cards, ranked</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Ranked by editorial judgment against the methodology. Each card links to its full profile with the last data review date.
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {cards.map((card, index) => (
              <article key={card.slug} className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/25 transition duration-200 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-lg font-black text-white">
                    {index + 1}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.11em] text-slate-600">{card.network}</span>
                    <span className="rounded-full bg-fuchsia-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.11em] text-fuchsia-800">{card.cardFormats[0]}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em]">{card.name}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.13em] text-slate-500">{card.provider}</p>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-800">{card.reasoning}</p>
                <div className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-600">
                  <p><strong className="font-black uppercase tracking-[0.1em] text-slate-400">Rewards: </strong>{card.rewards}</p>
                  <p><strong className="font-black uppercase tracking-[0.1em] text-slate-400">Fees: </strong>{card.pricing}</p>
                  <p><strong className="font-black uppercase tracking-[0.1em] text-slate-400">Availability: </strong>{card.availability}</p>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Provider data last reviewed {card.reviewedAt} · verified {VERIFIED_LABEL}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/crypto-cards/${card.slug}`} className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white hover:bg-fuchsia-700">
                    Open card profile →
                  </Link>
                  {card.referralUrl && (
                    <a href={card.referralUrl} target="_blank" rel="sponsored nofollow noreferrer" className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-2.5 text-xs font-black text-fuchsia-800 hover:bg-fuchsia-100">
                      {card.referralLabel ?? "Check card"} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/20 sm:p-9">
            <div className="max-w-3xl">
              <AuthorByline updated="14 October 2026" />
            </div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.17em] text-cyan-700">FAQs</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">Questions readers ask</h2>
            <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {collection.faq.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">More collections</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} href={`/crypto-cards/collections/${item.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-fuchsia-200 hover:bg-fuchsia-50">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-fuchsia-700">{item.eyebrow}</p>
                    <p className="mt-2 text-sm font-black leading-6 text-slate-950">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.cards.length} cards ranked</p>
                  </Link>
                ))}
              </div>
              <Link href="/crypto-cards/collections" className="mt-6 inline-block text-sm font-black text-fuchsia-700 hover:text-fuchsia-900">
                ← All 10 collections
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
