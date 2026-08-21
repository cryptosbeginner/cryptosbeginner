import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-22";

export const metadata: Metadata = {
  title:
    "Best Crypto Exchanges in Ontario 2026: OSC Rules, CAD Fees and Safety",
  description:
    "Ontario crypto exchange guide for 2026: OSC registration, exemptive relief, CAD and Interac funding, crypto limits, CRA tax records and platform safety.",
  alternates: {
    canonical: `${SITE_URL}/regions/canada/ontario`,
    languages: {
      en: `${SITE_URL}/regions/canada/ontario`,
      "x-default": `${SITE_URL}/regions/canada/ontario`,
    },
  },
  openGraph: {
    title: "Best Crypto Exchanges in Ontario 2026",
    description:
      "Compare Ontario crypto platforms by OSC status, CAD funding, fees, custody and tax records.",
    url: `${SITE_URL}/regions/canada/ontario`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Bitbuy",
    fit: "Ontario-focused Canadian comparison",
    note:
      "A Canadian platform listed by the OSC among crypto-asset trading platforms operating under specific registration or exemptive-relief conditions.",
    check:
      "Confirm the current OSC entry, available assets, CAD funding, spread, withdrawals and custody terms.",
    href: "https://bitbuy.ca",
    affiliate: false,
  },
  {
    name: "Kraken",
    fit: "Trading tools and liquidity",
    note:
      "A global platform with a Canadian operating entity. Ontario users should check the current OSC position and which products are available in their account.",
    check:
      "Review CAD rails, fee tiers, staking, derivatives restrictions and external-wallet withdrawals.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Coinbase",
    fit: "Simple buying and recurring purchases",
    note:
      "A US-based brand with a Canadian entity and Ontario-specific regulatory conditions. Product access should be checked during onboarding.",
    check:
      "Confirm the current OSC decision, CAD funding, simple-buy spread, advanced fees and staking availability.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "NDAX",
    fit: "CAD spot trading",
    note:
      "A Canadian platform commonly compared for CAD markets and active trading. Verify the current OSC entry and the exact account features available in Ontario.",
    check:
      "Review Interac or bank funding, fees, liquidity, wallet support and withdrawal costs.",
    href: "https://ndax.io",
    affiliate: false,
  },
  {
    name: "Newton",
    fit: "Simple Canadian retail access",
    note:
      "A Canadian retail platform listed in Ontario regulatory materials. Compare its quote and spread with platforms that show an explicit trading commission.",
    check:
      "Check the current OSC status, CAD funding, spread, asset support and transfer options.",
    href: "https://newton.co",
    affiliate: false,
  },
  {
    name: "Wealthsimple Crypto",
    fit: "Crypto alongside other investments",
    note:
      "A Canadian investment-platform option with Ontario-specific conditions. Its custody and transfer model may differ from a traditional exchange.",
    check:
      "Review available assets, transfer rights, fees, custody, account limits and current OSC terms.",
    href: "https://www.wealthsimple.com/en-ca/crypto",
    affiliate: false,
  },
];

const faqs = [
  {
    q: "What is the best crypto exchange in Ontario?",
    a: "There is no single best platform for every Ontario resident. Compare the platform's current OSC status, available products, CAD funding, spread, commissions, custody, withdrawals and tax records.",
  },
  {
    q: "Are crypto exchanges regulated in Ontario?",
    a: "Crypto-asset trading platforms serving Ontario may need registration, exemptive relief or other regulatory arrangements. The OSC publishes platform-specific decisions and conditions. Check the current OSC list rather than relying on an exchange's general marketing page.",
  },
  {
    q: "Can I buy Bitcoin with Canadian dollars in Ontario?",
    a: "Many Canadian platforms support CAD through Interac e-Transfer, bank transfer or other methods. Confirm the current funding route, limits, processing time and total cost.",
  },
  {
    q: "Does Ontario impose crypto investment limits?",
    a: "Some registered or exempted platforms operate under investor-protection conditions that can include limits, suitability requirements or product restrictions. The exact condition depends on the platform, customer category and current OSC decision.",
  },
  {
    q: "How is crypto taxed in Ontario?",
    a: "Ontario residents generally report crypto income or taxable dispositions under Canadian federal tax rules, with provincial tax also affecting the final result. A trade can be treated as capital or business activity. Keep adjusted-cost-base, proceeds, fee and wallet records.",
  },
  {
    q: "Can I use an offshore exchange with a VPN?",
    a: "Using a VPN or false location can breach platform terms, trigger account restrictions and complicate compliance and tax records. Use a platform that officially accepts Ontario residents and the product you need.",
  },
];

const sources = [
  {
    label: "OSC crypto businesses",
    href: "https://www.osc.ca/en/industry/registration-and-compliance/crypto-businesses",
  },
  {
    label: "CRA crypto-asset tax obligations",
    href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html",
  },
  {
    label: "CRA crypto transaction income",
    href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/income-crypto-transactions.html",
  },
  {
    label: "FINTRAC virtual currency",
    href: "https://fintrac-canafe.canada.ca",
  },
];

export default function OntarioPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Best Crypto Exchanges in Ontario 2026: OSC Rules, CAD Fees and Safety",
      description:
        "A practical guide to Ontario crypto platforms, OSC requirements, CAD funding, taxes and custody.",
      datePublished: "2026-01-20",
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Alex Rivera",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/regions/canada/ontario`,
      inLanguage: "en-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Canada",
          item: `${SITE_URL}/regions/canada`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ontario",
          item: `${SITE_URL}/regions/canada/ontario`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto platforms compared for Ontario",
      itemListElement: platforms.map((platform, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: platform.name,
        url: platform.href,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="mb-3 text-sm font-medium text-red-300">
              Ontario guide · Updated{" "}
              <time dateTime={UPDATED}>August 22, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Best crypto exchanges in Ontario: check the OSC first
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Ontario is one of Canada&apos;s most closely monitored crypto
              markets. Before comparing fees, check whether the platform
              appears in current OSC materials, what products its terms
              cover, whether your account is eligible and how CAD funding and
              tax records work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#choose"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Find your fit
              </a>

              <a
                href="#platforms"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Compare platforms
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-200">
                Review note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                OSC decisions and platform terms can change. This page is
                educational and does not certify any platform. Verify the
                current OSC entry before depositing.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                OSC first
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                Check the platform&apos;s current Ontario status and specific
                conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                CAD total cost
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                Include Interac or bank fees, spread, commission and
                withdrawals.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                CRA records
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                Track every disposition, fee, cost base and wallet transfer.
              </p>
            </div>
          </div>
        </section>

        <section id="choose" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                The short answer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Your Ontario platform choice has three parts
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                First, check the current OSC position and product conditions.
                Second, compare the CAD funding route and total cost. Third,
                confirm how the platform supports withdrawals and tax
                reporting.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Bitbuy, Kraken, Coinbase, NDAX, Newton and Wealthsimple Crypto
                are useful comparison points. They do not all offer the same
                products, and an entry on an OSC page should be read together
                with the specific decision and conditions.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                Choose by use case
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Occasional buying:
                  </span>{" "}
                  simple CAD deposits and clear quotes.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Active trading:
                  </span>{" "}
                  liquidity, order types and fee tiers.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Tax reporting:
                  </span>{" "}
                  downloadable statements and transaction history.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Long-term holding:
                  </span>{" "}
                  external withdrawals and custody control.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                Ontario regulatory map
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                What the OSC entry does—and does not—tell you
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[210px_1fr]">
                <p className="font-bold text-slate-900">
                  Registration or relief
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  A platform may operate under a category such as Restricted
                  Dealer or Investment Dealer, or under specific exemptive
                  relief. Read the current OSC decision and conditions.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[210px_1fr]">
                <p className="font-bold text-slate-900">
                  Product scope
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Spot crypto, staking, stablecoins, lending, margin and
                  derivatives may not all be covered in the same way.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[210px_1fr]">
                <p className="font-bold text-slate-900">
                  Investor conditions
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Platform-specific conditions can address suitability,
                  disclosure, custody, limits and reporting.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[210px_1fr]">
                <p className="font-bold text-slate-900">
                  What it is not
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  An OSC listing is not a guarantee that crypto prices,
                  withdrawals or the platform&apos;s solvency are protected.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.osc.ca/en/industry/registration-and-compliance/crypto-businesses"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Check the OSC crypto-business list →
          </a>
        </section>

        <section id="platforms" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Platform guide
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Platforms Ontario users commonly compare
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              The following platforms appear in Canadian or Ontario
              comparison discussions. Always verify the current OSC status,
              exact legal entity and permitted products.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {platform.name}
                    </h3>
                  </div>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-800">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Ontario check
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {platform.check}
                  </p>
                </div>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-5 inline-flex text-sm font-bold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `Compare ${platform.name} →`
                    : `Official ${platform.name} website →`}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                CAD funding
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Interac convenience can hide the full price
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Compare Interac e-Transfer, bank transfer and card funding.
                Then include the quoted spread, trading commission and crypto
                withdrawal fee. A low advertised commission may still produce
                a higher CAD purchase price.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Before buying
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Compare the final CAD amount and asset quantity.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Before withdrawing
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Check network, minimum and platform withdrawal fees.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Use accurate account information
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Use a payment account in your own name and respond accurately
                to identity and source-of-funds checks. Do not use a VPN,
                false address or third-party payment account to bypass an
                Ontario restriction.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-red-300">
              CRA records
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Every crypto disposition can matter
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The CRA generally treats crypto-assets as commodities for
              income-tax purposes. Selling crypto, exchanging one asset for
              another, spending crypto or receiving it for services may have
              different consequences.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-red-300">
                  Cost base
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Track acquisition cost, dates, asset units and fees.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-red-300">
                  Dispositions
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A crypto-to-crypto exchange may still be a taxable
                  disposition.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-red-300">
                  Activity type
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Investor and business activity can be treated differently.
                </p>
              </div>
            </div>

            <a
              href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-red-300 hover:underline"
            >
              Review CRA crypto obligations →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                Custody and protection
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Regulatory conditions are not a price guarantee
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Ontario rules can improve disclosure, custody and compliance,
                but they do not eliminate volatility, hacking, insolvency,
                account restrictions or delayed withdrawals.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>Can you withdraw to an external wallet?</li>
                <li>Are client assets segregated?</li>
                <li>What products are permitted in your account?</li>
                <li>Can you export your complete transaction history?</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-red-50 p-6">
              <h3 className="text-lg font-bold text-red-950">
                Keep long-term holdings separate
              </h3>

              <p className="mt-3 text-sm leading-6 text-red-950">
                Self-custody can reduce exchange dependence, but it makes you
                responsible for the recovery phrase, device security and
                transaction verification.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://go.cryptosbeginner.com/LedgerWallet"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Compare Ledger
                </a>

                <Link
                  href="/wallets"
                  className="rounded-lg border border-red-200 px-5 py-3 text-sm font-bold text-red-900 hover:bg-white"
                >
                  Wallets guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Direct answers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Ontario crypto exchange questions
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  {item.q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Ontario exchange checklist
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Check the current OSC crypto-business list.",
                "Read the exact decision and conditions for the platform.",
                "Confirm your Ontario account and product eligibility.",
                "Compare Interac, bank, card, spread and withdrawal costs.",
                "Export records for CRA and adjusted-cost-base tracking.",
                "Use 2FA and never use a VPN to bypass restrictions.",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  ✓ {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                Compare Kraken
              </a>

              <Link
                href="/regions/canada"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Canada exchanges guide
              </Link>

              <Link
                href="/methodology"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Read our methodology
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Primary sources
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Regulatory entries and conditions change. Check the official
              sources before opening an account or filing a return.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {sources.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-700 hover:underline"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. Not
              financial, legal or tax advice. Ontario crypto-platform
              registration, exemptive relief, product availability, fees,
              tax treatment and custody arrangements can change. Verify
              current OSC, CRA, FINTRAC and platform information before
              depositing funds or filing taxes. Some links may be affiliate
              links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}