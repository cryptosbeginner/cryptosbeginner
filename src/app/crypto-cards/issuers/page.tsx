import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { issuers } from "./issuers-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/issuers`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: "Crypto Card Issuers & Program Managers Directory",
  description:
    "Who actually issues crypto cards? A directory of card issuers, program managers, and banking-as-a-service providers powering crypto debit and prepaid cards.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Issuers Directory | CryptosBeginner",
    description: "The companies behind crypto cards: issuers, program managers, and infrastructure providers.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const typeLabels: Record<string, string> = {
  "card-issuer": "Card Issuer",
  "program-manager": "Program Manager",
  "baas-provider": "Banking-as-a-Service",
  "payment-processor": "Payment Processor",
};

export default function IssuersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Crypto Card Issuers Directory",
            url: PAGE_URL,
            description: "Card issuers and program managers powering crypto cards.",
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Issuers"}
            </nav>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Who Issues Crypto Cards?</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              The brand on the card is rarely the company actually issuing it. These are the licensed issuers, program managers, and infrastructure providers behind crypto card programs.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-black">Why issuers matter</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              When you get a crypto card, your legal relationship is typically with the licensed issuer, not the crypto brand whose logo is on the plastic. The issuer holds your funds, handles disputes, and appears in the cardholder agreement. If the crypto brand has problems, the issuer relationship determines what happens to your money. Knowing who stands behind a card is basic due diligence.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8" role="img" aria-label="Infographic mapping crypto card brands to their infrastructure providers">
            <p className="text-xs font-black uppercase tracking-[0.17em] text-indigo-700">Brand vs infrastructure</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">The brand in your app is not always the company powering the card</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Verified brand-to-infrastructure mappings. When the brand and the provider are different companies, either one can change terms, restrict countries, or end the program.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Powered by</p>
                <p className="mt-1 text-xl font-black text-slate-950">Wirex</p>
                <div className="mt-3 space-y-2">
                  {["BingX card", "COCA card"].map((c) => (
                    <p key={c} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{c}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Powered by</p>
                <p className="mt-1 text-xl font-black text-slate-950">Rain</p>
                <div className="mt-3 space-y-2">
                  {["Plasma One", "ether.fi Cash", "Tuyo", "KAST"].map((c) => (
                    <p key={c} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{c}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Powered by</p>
                <p className="mt-1 text-xl font-black text-slate-950">Baanx</p>
                <div className="mt-3 space-y-2">
                  {["MetaMask card", "Ledger CL card", "1inch card"].map((c) => (
                    <p key={c} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{c}</p>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Mappings verified against official announcements and provider materials, October 2026. Some reported mappings could not be verified and are omitted; Bitrefill's Striga partnership was superseded by Lightspark in February 2026. Programs can change providers; your cardholder agreement is authoritative.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {issuers.map((issuer) => (
              <article key={issuer.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">
                      {typeLabels[issuer.type] ?? issuer.type}
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight">{issuer.name}</h2>
                    {issuer.headquarters && (
                      <p className="mt-1 text-xs font-semibold text-slate-500">{issuer.headquarters}</p>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{issuer.description}</p>
                {issuer.knownCryptoCards.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Known crypto card programs</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {issuer.knownCryptoCards.map((card) => (
                        <span key={card} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                          {card}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <a
                  href={issuer.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-black text-fuchsia-700 hover:underline"
                >
                  Official website ↗
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-slate-500">
            Issuer relationships are based on publicly available information and can change. Card programs may switch issuers; the cardholder agreement for your specific card is the authoritative source. Last reviewed October 2026.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
