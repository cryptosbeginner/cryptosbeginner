import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { countries } from "./countries-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/countries`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: "Crypto Cards by Country: Availability & Regional Guides",
  description:
    "Which crypto cards work in your country? Regional availability guides for the US, UK, EU, UAE, India, Nigeria, Brazil, and more, with tax notes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Cards by Country | CryptosBeginner",
    description: "Find crypto cards available in your country, with regional restrictions and tax notes.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CountriesIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Countries"}
            </nav>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Crypto Cards by Country</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Card availability, key restrictions, and tax notes for your region. Availability changes frequently; always verify on the provider page.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/crypto-cards/countries/${country.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <h2 className="text-xl font-black tracking-tight group-hover:text-fuchsia-700">{country.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{country.overview}</p>
                <p className="mt-4 text-sm font-black text-fuchsia-700">View cards →</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
