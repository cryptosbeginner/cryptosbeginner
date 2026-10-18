import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "./collections-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const HUB_URL = `${SITE_URL}/crypto-cards`;
const PAGE_URL = `${SITE_URL}/crypto-cards/collections`;
const PAGE_TITLE = "Crypto Card Collections: Curated Rankings by CryptosBeginner";
const PAGE_DESCRIPTION =
  "Eleven curated crypto card collections from CryptosBeginner: metal cards, cashback, self-custodial cards, privacy-focused cards, US and Europe availability, Apple Pay, travel perks, and more, ranked from our card database.";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | CryptosBeginner` },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Collections | CryptosBeginner",
    description: "Curated, ranked shortlists from our 132-card database: metal, cashback, self-custody, regions, and more.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Card Collections",
    description: "Eleven curated rankings from our own card data, verified October 2026.",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 86400;

export default function CollectionsIndexPage() {
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
                url: PAGE_URL,
                name: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                datePublished: "2026-10-14",
                dateModified: "2026-10-14",
                mainEntity: { "@id": `${PAGE_URL}#itemlist` },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Crypto Cards", item: HUB_URL },
                    { "@type": "ListItem", position: 3, name: "Collections", item: PAGE_URL },
                  ],
                },
              },
              {
                "@type": "ItemList",
                "@id": `${PAGE_URL}#itemlist`,
                numberOfItems: collections.length,
                itemListOrder: "https://schema.org/ItemListOrderAscending",
                itemListElement: collections.map((collection, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: collection.title,
                  url: `${PAGE_URL}/${collection.slug}`,
                })),
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="relative overflow-hidden bg-[#0b0820] text-white">
          <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-300">
              <Link href="/crypto-cards" className="hover:text-white">Crypto Cards</Link>
              {" / "}
              <span className="text-slate-400">Collections</span>
            </nav>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Curated rankings · verified October 2026</p>
                <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[.96] tracking-[-0.06em] sm:text-7xl">
                  Crypto Card Collections
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Eleven curated shortlists from our card database. Each collection ranks cards against a published methodology, keeps provider wording intact, and says plainly where our data is thin instead of inventing winners.
                </p>
                <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-400">
                  <strong className="text-slate-200">Affiliate disclosure:</strong> Some buttons may use referral links. A referral relationship does not change the inclusion criteria or guarantee approval, fees, rewards, availability, or suitability. These are editorial curations, not financial advice.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/[.08] p-6 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-200">The fast answer</p>
                <p className="mt-4 text-2xl font-black tracking-[-0.04em]">Ranked, not recommended.</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  These pages are research shortlists: country eligibility, fees, funding model, and reward conditions come before the headline rate. Use them as a starting point, then confirm your address and current terms in the provider flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection, index) => (
              <Link
                key={collection.slug}
                href={`/crypto-cards/collections/${collection.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/25 transition duration-200 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,.34),transparent_30%),linear-gradient(135deg,#111827,#312e81_58%,#c026d3)] p-6">
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white">
                    {collection.cards.length} cards ranked
                  </span>
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-black text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-12 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">{collection.eyebrow}</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{collection.title}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-slate-600">{collection.description}</p>
                  <p className="mt-auto pt-5 text-sm font-black text-fuchsia-700 group-hover:text-fuchsia-900">
                    Open the ranking →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/20 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">How the collections work</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">Our curation, our data, our writing</h2>
            <div className="mt-6 grid gap-5 text-sm leading-7 text-slate-600 md:grid-cols-3">
              <div>
                <p className="font-black text-slate-950">One database</p>
                <p className="mt-2">Every collection draws from the same 132 card profiles, each with provider-stated fees, rewards, funding, regions, and formats reviewed against official sources.</p>
              </div>
              <div>
                <p className="font-black text-slate-950">Published methodology</p>
                <p className="mt-2">Each collection page shows exactly how its cards were picked and ranked. When our data is thin for a criterion, the page says so and ranks fewer cards.</p>
              </div>
              <div>
                <p className="font-black text-slate-950">No invented facts</p>
                <p className="mt-2">Fees, rates, and availability are quoted from provider wording with review dates. Where a detail was not published, we flag it rather than filling the gap.</p>
              </div>
            </div>
            <Link href="/crypto-cards" className="mt-8 inline-block text-sm font-black text-fuchsia-700 hover:text-fuchsia-900">
              ← Back to the full Crypto Cards directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
