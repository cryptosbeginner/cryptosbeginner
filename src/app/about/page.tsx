import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-22";

export const metadata: Metadata = {
  title: "About CryptosBeginner | Independent Crypto Education and Reviews",
  description:
    "Learn who creates CryptosBeginner content, how we review crypto exchanges and wallets, how affiliate links work and how we handle financial and regulatory topics.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About CryptosBeginner",
    description:
      "Our editorial team, review process, regional contributors, disclosures and standards for crypto education.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const contributors = [
  {
    name: "Alex Rivera",
    role: "Lead researcher and editorial contributor",
    focus:
      "Exchange comparisons, fee structures, platform security and international crypto-market research.",
    pages: [
      "United States",
      "Canada",
      "Australia",
      "International exchange guides",
    ],
  },
  {
    name: "Hassan Malik",
    role: "Pakistan and South Asia contributor",
    focus:
      "Practical regional guides, P2P markets, local payment methods and user-safety issues across Pakistan and South Asia.",
    pages: [
      "Pakistan regional guide",
      "Pakistan buying guides",
      "South Asia research",
    ],
  },
  {
    name: "Sophia Chen",
    role: "Education and tutorials contributor",
    focus:
      "Beginner explanations, wallet security, self-custody, risk management and practical learning resources.",
    pages: [
      "Wallet education",
      "Security guides",
      "Beginner tutorials",
    ],
  },
  {
    name: "Taimoor Chaudhry",
    role: "Pakistan writer and local-context contributor",
    focus:
      "Pakistan-focused crypto content, PVARA developments, PKR payment realities, P2P safety and Urdu-language localisation.",
    pages: [
      "Pakistan regional guide",
      "Pakistan Bitcoin guides",
      "Urdu content",
    ],
  },
  {
    name: "Dariusz Kowalczyk",
    role: "Polish language and local-context reviewer",
    focus:
      "Polish-language clarity, terminology, local reader context and review of Poland-focused crypto content.",
    pages: [
      "Poland regional guide",
      "Polish-language pages",
      "Polish local terminology",
    ],
  },
  {
    name: "Youssef Al-Rashidi",
    role: "Arabic language and regional-context reviewer",
    focus:
      "Arabic-language clarity, regional terminology and local-context review for Arabic pages covering Gulf and MENA markets.",
    pages: [
      "Arabic regional pages",
      "Gulf market terminology",
      "Arabic localisation",
    ],
  },
];

const regionalGuides = [
  {
    name: "Pakistan",
    href: "/regions/pakistan",
    note: "PVARA, SBP, PKR P2P and local payment safety.",
  },
  {
    name: "Poland",
    href: "/regions/poland",
    note: "MiCA, KNF, PLN/EUR funding and PIT-38 context.",
  },
  {
    name: "United States",
    href: "/regions/united-states",
    note: "State availability, federal agencies, USD rails and tax records.",
  },
  {
    name: "Canada",
    href: "/regions/canada",
    note: "CAD funding, provincial rules, CRA records and custody.",
  },
  {
    name: "Australia",
    href: "/regions/australia",
    note: "AUD funding, AUSTRAC, ASIC transition and ATO records.",
  },
  {
    name: "Gulf and MENA",
    href: "/regions",
    note: "UAE, Bahrain, Oman, Saudi Arabia and regional access.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity before promotion",
    text:
      "We explain the product, the risks and the relevant local context before placing commercial links.",
  },
  {
    number: "02",
    title: "Primary sources first",
    text:
      "Regulatory and tax claims should be checked against government, regulator or official platform material whenever possible.",
  },
  {
    number: "03",
    title: "Local context matters",
    text:
      "A platform available in one country, state or province may be restricted or structured differently elsewhere.",
  },
  {
    number: "04",
    title: "No guaranteed outcomes",
    text:
      "We do not promise profits, guaranteed safety, uninterrupted withdrawals or immunity from market losses.",
  },
];

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CryptosBeginner",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Independent educational resource covering cryptocurrency exchanges, wallets, security and regional market context.",
      email: "admin@cryptosbeginner.com",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "admin@cryptosbeginner.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "About CryptosBeginner",
      description:
        "Information about the CryptosBeginner team, editorial process, disclosures and crypto education standards.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      dateModified: UPDATED,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "CryptosBeginner regional guides",
      itemListElement: regionalGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.name,
        url: `${SITE_URL}${guide.href}`,
      })),
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-300">
              About CryptosBeginner
            </p>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                  Clear crypto education without the hype
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                  CryptosBeginner helps readers understand exchanges,
                  wallets, self-custody, crypto security and regional access
                  before they make a financial decision.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-sm font-semibold text-indigo-200">
                  Last reviewed
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  August 22, 2026
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  This page explains who we are, how we work and how we
                  separate editorial information from affiliate relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <p className="text-3xl font-black text-indigo-700">01</p>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Explain first
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                We aim to explain how a product works before asking readers
                to click through to it.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-3xl font-black text-emerald-700">02</p>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Localise carefully
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exchange access, payment rails, tax rules and regulation
                vary by country, state and province.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-3xl font-black text-amber-700">03</p>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Show our work
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                We disclose our contributors, sources, review process and
                commercial relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
                What we do
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                A practical reference for everyday crypto decisions
              </h2>

              <div className="mt-5 space-y-5 text-slate-700">
                <p className="leading-7">
                  CryptosBeginner is an independent educational publication
                  focused on cryptocurrency exchanges, wallets, trading
                  mechanics, platform security and regional market context.
                </p>

                <p className="leading-7">
                  Our readers include people buying crypto for the first time,
                  users comparing exchanges, long-term holders learning
                  self-custody and experienced readers checking a platform’s
                  fees, products or local availability.
                </p>

                <p className="leading-7">
                  We do not present crypto as a guaranteed investment. Prices
                  can fall, platforms can fail, withdrawals can be delayed and
                  users can lose funds through scams, operational mistakes or
                  lost recovery phrases.
                </p>

                <p className="leading-7">
                  Our goal is to make the important questions easier to see:
                  Who operates the platform? Which entity serves the customer?
                  What does the local regulator say? What does the service
                  actually cost? Can the user withdraw the asset? What records
                  should be kept?
                </p>
              </div>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-7 text-white">
              <h2 className="text-2xl font-bold">
                What we do not promise
              </h2>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <li>Guaranteed returns.</li>
                <li>Risk-free exchanges or wallets.</li>
                <li>Universal access to every platform.</li>
                <li>Personalised legal, tax or financial advice.</li>
                <li>Permanent accuracy for changing regulations.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Our standards
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              How we approach financial and regulatory content
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex gap-4">
                  <span className="text-2xl font-black text-indigo-600">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {principle.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Editorial process
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              From research to publication
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-4">
              <div>
                <p className="text-2xl font-black text-indigo-600">01</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Define the reader question
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  We identify whether the reader needs a comparison, tutorial,
                  safety explanation or regional answer.
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-indigo-600">02</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Check primary material
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  We prioritise regulator, government, tax-authority and
                  official platform information.
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-indigo-600">03</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Add practical context
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  We explain fees, funding, custody, account restrictions and
                  common failure modes.
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-indigo-600">04</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Review and update
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Pages receive a visible review date and should be revisited
                  when material rules or product terms change.
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-indigo-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                Important limitation
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                A review date does not mean that every platform term or legal
                rule remains unchanged after publication. Readers should
                verify live terms and official regulator information before
                acting.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Contributors
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              The people behind the pages
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Contributors work on different parts of the site. A contributor
              title describes their role on CryptosBeginner; it is not a claim
              that every contributor provides legal, tax, investment or
              regulatory advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <article
                key={contributor.name}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-lg font-black text-indigo-700">
                  {contributor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {contributor.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-indigo-700">
                  {contributor.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {contributor.focus}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Main coverage
                  </p>

                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {contributor.pages.map((page) => (
                      <li key={page}>• {page}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl bg-indigo-50 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
                Regional expertise
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Crypto access is local
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                The exchange that works for one country may not work the same
                way in another. Payment rails, regulators, taxes, product
                restrictions and customer protection can all change.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                That is why we use regional contributors and language
                reviewers rather than publishing one global page and changing
                only the country name.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {regionalGuides.map((guide) => (
                <Link
                  key={guide.name}
                  href={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {guide.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {guide.note}
                  </p>

                  <span className="mt-4 inline-flex text-sm font-bold text-indigo-700">
                    Explore guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
                Affiliate disclosure
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                How CryptosBeginner makes money
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Some links on CryptosBeginner are affiliate links. If you
                click one and sign up or buy a product, we may receive a
                commission at no additional cost to you.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Affiliate relationships do not guarantee that a platform is
                suitable, available or regulated for your location. We aim to
                place disclosures near commercial links and keep our editorial
                explanations independent from the commercial relationship.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                What a commission does not mean
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>It does not mean the platform is risk-free.</li>
                <li>It does not mean the platform is available everywhere.</li>
                <li>It does not replace checking the current regulator.</li>
                <li>It does not turn educational content into financial advice.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Corrections and updates
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Found an error?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              Crypto rules, platform terms, fees and product availability can
              change. If you find an inaccurate statement, broken link or
              outdated regulatory claim, contact us with the page URL, the
              relevant passage and a reliable source.
            </p>

            <a
              href="mailto:admin@cryptosbeginner.com?subject=Correction%20request"
              className="mt-5 inline-flex rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800"
            >
              Send a correction
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-2xl bg-slate-950 p-8 text-white">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
                  Contact
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Have a question about our content?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  We welcome source corrections, accessibility feedback,
                  partnership questions and editorial suggestions.
                </p>
              </div>

              <a
                href="mailto:admin@cryptosbeginner.com"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                admin@cryptosbeginner.com
              </a>
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>General disclaimer:</strong> CryptosBeginner publishes
              educational information only. Our content is not financial,
              legal, tax, accounting or investment advice. Cryptocurrency
              involves substantial risk, including volatility, scams,
              platform failure, loss of access and total loss of funds.
              Always verify current official information and consider
              professional advice for your circumstances.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}