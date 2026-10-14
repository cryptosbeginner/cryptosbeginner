import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cardListings } from "../../cards-data";
import { countries, getCountryBySlug, getCountriesForCard } from "../countries-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const HUB_URL = `${SITE_URL}/crypto-cards`;

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const info = getCountryBySlug(country);
  if (!info) return { title: "Country not found" };
  const url = `${SITE_URL}/crypto-cards/countries/${country}`;
  return {
    title: `Crypto Cards in ${info.name}: Availability, Fees & Tax Notes`,
    description: `Which crypto cards work in ${info.name}? Available cards, key restrictions, and tax notes for ${info.name} residents.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Crypto Cards in ${info.name} | CryptosBeginner`,
      description: `Available crypto cards, restrictions, and tax notes for ${info.name}.`,
      url,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const info = getCountryBySlug(country);
  if (!info) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-3xl font-black">Country not found</h1>
          <Link href="/crypto-cards/countries" className="mt-4 inline-block text-fuchsia-700 hover:underline">
            Back to all countries
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const availableCards = cardListings.filter((card) => {
    const cardCountries = getCountriesForCard(card.regions, card.availability);
    return cardCountries.includes(country) || cardCountries.includes("global");
  });

  const pageUrl = `${SITE_URL}/crypto-cards/countries/${country}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Crypto Cards in ${info.name}`,
            url: pageUrl,
            description: `Crypto cards available in ${info.name}.`,
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / "}
              <Link href="/crypto-cards/countries" className="hover:text-white">Countries</Link>
              {` / ${info.name}`}
            </nav>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Crypto Cards in {info.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{info.overview}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Tax note</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">{info.taxNote}</p>
            <p className="mt-2 text-xs text-amber-700">General information only, not tax advice. Consult a local professional.</p>
          </div>

          <h2 className="mt-10 text-2xl font-black tracking-tight">
            Cards listing {info.name} availability ({availableCards.length})
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Based on provider-published availability. Always confirm your eligibility on the official page before applying.
          </p>

          {availableCards.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 text-center">
              <p className="font-bold text-slate-700">No cards in our directory currently list {info.name} explicitly.</p>
              <p className="mt-2 text-sm text-slate-500">
                Some cards with broad international availability may still accept {info.name} residents. Check the{" "}
                <Link href={HUB_URL} className="text-fuchsia-700 hover:underline">full directory</Link>.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {availableCards.map((card) => (
                <Link
                  key={card.slug}
                  href={`/crypto-cards/${card.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative h-32 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-indigo-900 to-fuchsia-900">
                    <Image src={card.imageUrl} alt={card.imageAlt} fill className="object-contain p-3" sizes="(max-width: 640px) 100vw, 33vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                      {card.network}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-black tracking-tight group-hover:text-fuchsia-700">{card.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">{card.shortDescription}</p>
                  <p className="mt-3 text-xs text-slate-500">
                    <span className="font-bold text-slate-700">Availability:</span> {card.availability.slice(0, 120)}
                    {card.availability.length > 120 ? "..." : ""}
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/crypto-cards/countries" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">
              ← All countries
            </Link>
            <Link href={HUB_URL} className="rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-black text-white hover:bg-fuchsia-700">
              Browse full directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
