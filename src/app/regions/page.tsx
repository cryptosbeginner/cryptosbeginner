"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange Guides by Country 2026 | Regional Guides",
  description:
    "Find country-specific crypto exchange guides covering regulation, taxes, payment methods, local platforms, P2P, custody and security.",
};

type MarketStatus = "live" | "restricted" | "coming-soon";

type Country = {
  name: string;
  localName?: string;
  href?: string;
  note: string;
  topics: string[];
  status: MarketStatus;
  updated?: string;
};

type RegionGroup = {
  region: string;
  intro: string;
  countries: Country[];
};

const regions: RegionGroup[] = [
  {
    region: "South Asia",
    intro:
      "High grassroots adoption, local payment methods and P2P often matter more than traditional bank rails.",
    countries: [
      {
        name: "India",
        note:
          "Top global adoption market with large retail demand, local exchanges and detailed tax considerations.",
        topics: ["INR", "Tax", "Local exchanges"],
        status: "coming-soon",
      },
      {
        name: "Pakistan",
        href: "/regions/pakistan",
        note:
          "P2P-heavy market where payment methods, stablecoins and exchange safety are central concerns.",
        topics: ["P2P", "PKR", "Payment methods"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Bangladesh",
        note:
          "Growing retail interest but a restrictive local environment that requires careful legal research.",
        topics: ["Restrictions", "P2P", "Risk"],
        status: "coming-soon",
      },
    ],
  },
  {
    region: "Southeast Asia",
    intro:
      "Large young populations, mobile-first finance and active retail trading make this one of crypto’s most important regions.",
    countries: [
      {
        name: "Indonesia",
        note:
          "Large retail base and active exchange market under local regulatory oversight.",
        topics: ["IDR", "Retail", "Local exchanges"],
        status: "coming-soon",
      },
      {
        name: "Vietnam",
        note:
          "High grassroots adoption and an active trader base, with changing regulatory conditions.",
        topics: ["Adoption", "P2P", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Philippines",
        note:
          "Remittances, mobile payments and retail trading drive demand for local and global platforms.",
        topics: ["Remittances", "PHP", "Mobile"],
        status: "coming-soon",
      },
      {
        name: "Malaysia",
        note:
          "A regulated market with local exchanges and global-platform comparisons.",
        topics: ["MYR", "Regulation", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Thailand",
        note:
          "Established retail market with regulated domestic venues and an active crypto community.",
        topics: ["THB", "Regulation", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Singapore",
        note:
          "High purchasing power, a major fintech hub and a tightly supervised crypto market.",
        topics: ["MAS", "SGD", "Fintech"],
        status: "coming-soon",
      },
    ],
  },
  {
    region: "Middle East",
    intro:
      "Gulf purchasing power, varied national rules and a mix of licensed regional venues and offshore platforms.",
    countries: [
      {
        name: "United Arab Emirates",
        href: "/regions/uae",
        note:
          "Dubai and Abu Dhabi have become major crypto hubs, with VARA, ADGM and strong international demand.",
        topics: ["VARA", "AED", "Dubai"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Saudi Arabia",
        localName: "KSA",
        href: "/regions/saudi-arabia",
        note:
          "Large regional market with rising demand but a cautious official stance on crypto activity.",
        topics: ["SAR", "Gulf", "Regulation"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Bahrain",
        href: "/regions/bahrain",
        note:
          "Structured CBB licensing framework, regional providers and practical GCC funding routes.",
        topics: ["CBB", "BHD", "Rain"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Oman",
        href: "/regions/oman",
        note:
          "FSA registration framework, Central Bank cautions and a developing virtual-asset market.",
        topics: ["FSA", "OMR", "VASP"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Turkey",
        localName: "Türkiye",
        href: "/regions/turkey",
        note:
          "High retail activity, local TRY exchanges, SPK oversight and MASAK compliance requirements.",
        topics: ["SPK", "MASAK", "TRY"],
        status: "live",
        updated: "2026",
      },
    ],
  },
  {
    region: "Africa",
    intro:
      "Utility-driven adoption is especially strong across Africa, often tied to remittances, stablecoins, mobile money and local-currency access.",
    countries: [
      {
        name: "Nigeria",
        href: "/regions/nigeria",
        note:
          "Large P2P market with evolving SEC, CBN and NRS rules, tax reporting and local payment constraints.",
        topics: ["P2P", "NGN", "SEC"],
        status: "live",
        updated: "2026",
      },
      {
        name: "South Africa",
        href: "/regions/south-africa",
        note:
          "FSCA CASP licensing, SARS reporting, rand on-ramps and a more formal crypto market.",
        topics: ["FSCA", "SARS", "ZAR"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Kenya",
        href: "/regions/kenya",
        note:
          "VASP rules, M-Pesa context, KRA reporting and changing local exchange access.",
        topics: ["VASP", "M-Pesa", "KRA"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Ghana",
        href: "/regions/ghana",
        note:
          "Act 1154, Bank of Ghana and SEC rules, mobile-money usage and P2P safety.",
        topics: ["BoG", "SEC", "GHS"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Egypt",
        href: "/regions/egypt",
        note:
          "Restricted market: CBE approval is required for crypto activity, with material legal and banking risk.",
        topics: ["CBE", "Restricted", "Risk"],
        status: "restricted",
        updated: "2026",
      },
      {
        name: "Ethiopia",
        href: "/regions/ethiopia",
        note:
          "Restricted market: NBE warnings, Birr P2P restrictions and separate rules for mining activity.",
        topics: ["NBE", "Birr", "Restricted"],
        status: "restricted",
        updated: "2026",
      },
    ],
  },
  {
    region: "Europe",
    intro:
      "Higher purchasing power, euro and local-currency rails, plus MiCA-era regulation. Users often prioritise regulated access, tax records and custody.",
    countries: [
      {
        name: "United Kingdom",
        href: "/regions/united-kingdom",
        note:
          "FCA framework, HMRC reporting, GBP funding and a major English-speaking crypto market.",
        topics: ["FCA", "HMRC", "GBP"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Germany",
        localName: "Deutschland",
        href: "/regions/germany",
        note:
          "MiCA, BaFin, EUR access and German private-sale tax rules for many individual holders.",
        topics: ["BaFin", "MiCA", "EUR"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Austria",
        localName: "Österreich",
        href: "/regions/austria",
        note:
          "FMA oversight, Bitpanda, 27.5% tax treatment and DAC8 reporting.",
        topics: ["FMA", "KESt", "DAC8"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Switzerland",
        localName: "Schweiz",
        href: "/regions/switzerland",
        note:
          "FINMA, Swiss DLT rules, CHF access, wealth tax and private-investor tax considerations.",
        topics: ["FINMA", "CHF", "Wealth tax"],
        status: "live",
        updated: "2026",
      },
      {
        name: "France",
        href: "/regions/france",
        note:
          "AMF, MiCA CASP rules, Form 2086, euro funding and French crypto tax.",
        topics: ["AMF", "PSCA", "Form 2086"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Netherlands",
        href: "/regions/netherlands",
        note:
          "AFM, DNB, Box 3 wealth tax, Bitvavo and iDEAL payment context.",
        topics: ["AFM", "Box 3", "iDEAL"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Ireland",
        href: "/regions/ireland",
        note:
          "Central Bank of Ireland, MiCA, Revenue tax, 33% CGT and euro access.",
        topics: ["CBI", "Revenue", "CGT"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Sweden",
        localName: "Sverige",
        href: "/regions/sweden",
        note:
          "Finansinspektionen, Safello, K4 tax records, SEK funding and MiCA rules.",
        topics: ["FI", "Safello", "K4"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Denmark",
        href: "/regions/denmark",
        note:
          "Finanstilsynet, Coinify, DKK funding, FIFO records and Danish crypto tax.",
        topics: ["Finanstilsynet", "Coinify", "FIFO"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Norway",
        localName: "Norge",
        href: "/regions/norway",
        note:
          "Finanstilsynet, EEA implementation, Firi, NBX, NOK funding and wealth reporting.",
        topics: ["Finanstilsynet", "Firi", "NOK"],
        status: "live",
        updated: "2026",
      },
      {
        name: "Spain",
        note:
          "Large retail base, euro funding and EU MiCA platform access.",
        topics: ["EUR", "MiCA", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Italy",
        note:
          "Growing retail interest, euro access and a shifting MiCA market.",
        topics: ["EUR", "MiCA", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Poland",
        note:
          "Active Central European market with local-currency and EU platform considerations.",
        topics: ["PLN", "MiCA", "Retail"],
        status: "coming-soon",
      },
    ],
  },
  {
    region: "North America",
    intro:
      "Large absolute trading volume and strong purchasing power, but platform availability changes by country, province and state.",
    countries: [
      {
        name: "United States",
        note:
          "Largest absolute market, but availability varies heavily by state, product and federal regulatory status.",
        topics: ["State rules", "USD", "Regulation"],
        status: "coming-soon",
      },
      {
        name: "Canada",
        note:
          "Regulated platforms, strong retail demand and province-specific requirements.",
        topics: ["CAD", "Provincial rules", "Retail"],
        status: "coming-soon",
      },
    ],
  },
  {
    region: "Latin America",
    intro:
      "Stablecoins, inflation protection, remittances and cross-border payments drive much of the region’s crypto demand.",
    countries: [
      {
        name: "Brazil",
        note:
          "One of Latin America’s largest markets, with local exchanges and BRL funding options.",
        topics: ["BRL", "Stablecoins", "Retail"],
        status: "coming-soon",
      },
      {
        name: "Argentina",
        note:
          "High stablecoin demand driven by currency pressure and a strong local crypto culture.",
        topics: ["ARS", "Stablecoins", "Inflation"],
        status: "coming-soon",
      },
      {
        name: "Mexico",
        note:
          "Growing market shaped by remittances, retail access and cross-border use cases.",
        topics: ["MXN", "Remittances", "Retail"],
        status: "coming-soon",
      },
    ],
  },
  {
    region: "East Asia & Pacific",
    intro:
      "A mix of large retail markets, high-volume trading hubs, strict local regulation and established domestic exchanges.",
    countries: [
      {
        name: "South Korea",
        note:
          "Highly active trading culture and strict local exchange regulation.",
        topics: ["KRW", "Local exchanges", "Volume"],
        status: "coming-soon",
      },
      {
        name: "Japan",
        note:
          "Established regulated market with domestic exchange licensing and JPY access.",
        topics: ["JPY", "FSA", "Regulation"],
        status: "coming-soon",
      },
      {
        name: "Hong Kong",
        note:
          "Regional trading hub with a licensing framework for retail virtual-asset venues.",
        topics: ["HKD", "SFC", "Licensed venues"],
        status: "coming-soon",
      },
      {
        name: "Australia",
        note:
          "High purchasing power, AUD access and evolving crypto regulation.",
        topics: ["AUD", "Regulation", "Retail"],
        status: "coming-soon",
      },
    ],
  },
];

const REGION_FILTERS = ["All", ...regions.map((region) => region.region)];

const statusStyles: Record<MarketStatus, string> = {
  live: "bg-emerald-100 text-emerald-800",
  restricted: "bg-amber-100 text-amber-800",
  "coming-soon": "bg-slate-100 text-slate-600",
};

const statusLabels: Record<MarketStatus, string> = {
  live: "Guide available",
  restricted: "Restricted market",
  "coming-soon": "Coming soon",
};

export default function RegionsPage() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredRegions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return regions
      .filter(
        (region) =>
          selectedRegion === "All" || region.region === selectedRegion,
      )
      .map((region) => ({
        ...region,
        countries: region.countries.filter((country) => {
          const searchText = [
            country.name,
            country.localName ?? "",
            country.note,
            ...country.topics,
          ]
            .join(" ")
            .toLowerCase();

          const matchesSearch =
            normalizedQuery.length === 0 ||
            searchText.includes(normalizedQuery);

          const matchesAvailability =
            !showAvailableOnly || country.status !== "coming-soon";

          return matchesSearch && matchesAvailability;
        }),
      }))
      .filter((region) => region.countries.length > 0);
  }, [query, selectedRegion, showAvailableOnly]);

  const liveGuideCount = regions.flatMap((region) =>
    region.countries.filter((country) => country.status !== "coming-soon"),
  ).length;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <p className="mb-3 text-sm font-medium text-indigo-200">
              Global crypto research · Updated August 2026
            </p>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
              Find Crypto Exchange Guides for Your Country
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              The right exchange depends on where you live. We explain
              local regulation, taxes, payment methods, P2P risks,
              exchange access and custody before you deposit funds.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/exchanges/best-crypto-exchanges-2026"
                className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Compare Exchanges
              </Link>

              <Link
                href="/tools/exchange-finder"
                className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Take the Quiz
              </Link>

              <Link
                href="/methodology"
                className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Our Methodology
              </Link>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-slate-800 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Regulation first
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  We distinguish local authorisation from basic technical
                  access to an offshore exchange.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Tax-aware
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Country guides flag the tax forms, reporting dates and
                  records users may need.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Safety-focused
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  We cover custody, Proof of Reserves, incident history,
                  P2P risk and self-custody basics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What guides cover */}
        <section className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">
                  Local rules
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Is crypto allowed where you live?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn the relevant regulator, licence framework,
                  consumer protections and any local restrictions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">
                  Tax and records
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  What could you need to report?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understand local tax treatment for sales, swaps,
                  staking, mining, wealth and exchange reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-indigo-600">
                  Funding and safety
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  How do people fund exchanges?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Compare local currency rails, bank transfers, cards,
                  mobile money, P2P and wallet risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Directory controls */}
        <section className="max-w-6xl mx-auto px-4 pt-14 pb-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Regional directory
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Choose your country guide
              </h2>

              <p className="mt-3 max-w-3xl text-slate-600">
                Browse {liveGuideCount} live country guides, or explore
                the markets we are researching next. Every live guide
                includes local regulation, tax notes, payment context,
                exchange comparisons and safety checks.
              </p>
            </div>

            <Link
              href="/tools/exchange-finder"
              className="inline-flex w-fit rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Not sure where to start? Take the quiz →
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
              <div>
                <label
                  htmlFor="country-search"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Find a country
                </label>

                <input
                  id="country-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search Norway, Germany, Nigeria, Pakistan..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 self-end rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(event) =>
                    setShowAvailableOnly(event.target.checked)
                  }
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Show available guides only
              </label>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {REGION_FILTERS.map((region) => {
                const isActive = region === selectedRegion;

                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional directory */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          {filteredRegions.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                No matching country guide found
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Try a broader search, browse another region or use the
                exchange finder for a general starting point.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredRegions.map((group) => (
                <section
                  key={group.region}
                  aria-labelledby={`${group.region
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}-heading`}
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <h2
                      id={`${group.region
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}-heading`}
                      className="text-2xl font-bold text-slate-900"
                    >
                      {group.region}
                    </h2>

                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {group.countries.length} market
                      {group.countries.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <p className="mb-5 max-w-3xl text-slate-600">
                    {group.intro}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.countries.map((country) => {
                      const cardContent = (
                        <>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">
                                {country.name}
                              </h3>

                              {country.localName && (
                                <p className="mt-0.5 text-sm text-slate-500">
                                  {country.localName}
                                </p>
                              )}
                            </div>

                            <span
                              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                                statusStyles[country.status]
                              }`}
                            >
                              {statusLabels[country.status]}
                            </span>
                          </div>

                          <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                            {country.note}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {country.topics.map((topic) => (
                              <span
                                key={topic}
                                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 text-sm font-semibold text-indigo-700">
                            {country.status === "coming-soon"
                              ? "Research in progress"
                              : "Read country guide →"}
                          </div>
                        </>
                      );

                      if (!country.href || country.status === "coming-soon") {
                        return (
                          <div
                            key={country.name}
                            className="flex min-h-[275px] flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5"
                          >
                            {cardContent}
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={country.href}
                          href={country.href}
                          className={`group flex min-h-[275px] flex-col rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md ${
                            country.status === "restricted"
                              ? "border-amber-300 hover:border-amber-400"
                              : "border-slate-200 hover:border-indigo-300"
                          }`}
                        >
                          {cardContent}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </section>

        {/* Safety workflow */}
        <section className="border-y bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Use country guides properly
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Local availability is not the same as local protection
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  A platform can accept registrations from a country
                  without being licensed there, offering every product
                  there or providing local consumer protection. Before
                  depositing, check the legal entity, regulator, custody
                  terms, payment route and tax consequences.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/learn/crypto-exchange-security-checklist"
                    className="text-sm font-semibold text-indigo-700 hover:underline"
                  >
                    Review the security checklist →
                  </Link>

                  <Link
                    href="/learn/how-p2p-escrow-works"
                    className="text-sm font-semibold text-indigo-700 hover:underline"
                  >
                    Understand P2P escrow →
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-bold text-slate-900">1</p>
                  <h3 className="mt-2 font-semibold text-slate-900">
                    Verify regulation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Confirm the provider and the service in the relevant
                    official register.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-bold text-slate-900">2</p>
                  <h3 className="mt-2 font-semibold text-slate-900">
                    Calculate total cost
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Include conversion, spread, deposit, trading and
                    withdrawal fees.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-bold text-slate-900">3</p>
                  <h3 className="mt-2 font-semibold text-slate-900">
                    Prepare tax records
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Save trades, swaps, rewards and wallet transfers from
                    the first transaction.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-bold text-slate-900">4</p>
                  <h3 className="mt-2 font-semibold text-slate-900">
                    Protect long-term funds
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Keep savings separate from exchange trading balances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topic cluster */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Continue learning
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Build your crypto safety plan
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300"
            >
              <h3 className="font-semibold text-slate-900">
                Proof of Reserves
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn what PoR can show and its important limitations.
              </p>
            </Link>

            <Link
              href="/wallets"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300"
            >
              <h3 className="font-semibold text-slate-900">
                Crypto wallets
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compare self-custody, hot wallets, cold storage and backups.
              </p>
            </Link>

            <Link
              href="/security/exchange-incidents"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300"
            >
              <h3 className="font-semibold text-slate-900">
                Security incidents
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review notable exchange and wallet failures.
              </p>
            </Link>

            <Link
              href="/methodology"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300"
            >
              <h3 className="font-semibold text-slate-900">
                Our methodology
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                See how we assess security, fees, liquidity and usability.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h2 className="text-3xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <details className="rounded-2xl border border-slate-700 p-5">
                <summary className="cursor-pointer font-semibold">
                  Which country has the best crypto exchange?
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  There is no universal best exchange or country. The right
                  platform depends on where you live, local licensing,
                  payment methods, tax rules, product access and fees.
                </p>
              </details>

              <details className="rounded-2xl border border-slate-700 p-5">
                <summary className="cursor-pointer font-semibold">
                  Why do exchange options differ by country?
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Licensing, banking rules, sanctions, tax reporting,
                  product restrictions and local payment infrastructure
                  differ between jurisdictions.
                </p>
              </details>

              <details className="rounded-2xl border border-slate-700 p-5">
                <summary className="cursor-pointer font-semibold">
                  Can I use an offshore exchange?
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Technical access does not prove legal authorisation or
                  local consumer protection. Check the country guide and
                  the platform&apos;s exact legal entity first.
                </p>
              </details>

              <details className="rounded-2xl border border-slate-700 p-5">
                <summary className="cursor-pointer font-semibold">
                  Are country guides financial or tax advice?
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  No. These are educational guides. Regulations, platform
                  availability, fees and tax treatment can change, so
                  verify current information before acting.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. Not
              financial, legal or tax advice. Exchange availability,
              regulation, tax rules and fees can change. Verify current
              information with the relevant regulator, tax authority and
              provider before depositing funds. Some links may be affiliate
              links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}