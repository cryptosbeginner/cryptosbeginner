import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-22";

export const metadata: Metadata = {
  title:
    "Best Crypto Exchanges in British Columbia 2026: BCSC, CAD Fees and Safety",
  description:
    "British Columbia crypto exchange guide for 2026: BCSC registration, CSA warnings, CAD and Interac funding, CRA tax records, custody and scam prevention.",
  alternates: {
    canonical: `${SITE_URL}/regions/canada/british-columbia`,
    languages: {
      en: `${SITE_URL}/regions/canada/british-columbia`,
      "x-default": `${SITE_URL}/regions/canada/british-columbia`,
    },
  },
  openGraph: {
    title: "Best Crypto Exchanges in British Columbia 2026",
    description:
      "Compare BC crypto platforms by BCSC status, CAD funding, fees, custody, tax records and investor protection.",
    url: `${SITE_URL}/regions/canada/british-columbia`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Kraken",
    fit: "Active trading and liquidity",
    note:
      "A global platform commonly compared by Canadian traders. BC users should verify the current Canadian registration position, entity and product availability.",
    check:
      "Review CAD funding, fee tiers, staking, derivatives restrictions and external withdrawals.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Coinbase",
    fit: "Simple buying and recurring purchases",
    note:
      "A US-based brand with Canadian operations and a familiar beginner interface. Check current British Columbia eligibility and product conditions.",
    check:
      "Review CAD funding, spread, advanced fees, asset access and staking terms.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "NDAX",
    fit: "CAD spot trading",
    note:
      "A Canadian platform often compared for CAD markets and active trading. Verify the current legal entity and BC account features.",
    check:
      "Check Interac or bank funding, liquidity, trading fees, withdrawal costs and wallet support.",
    href: "https://ndax.io",
    affiliate: false,
  },
  {
    name: "Newton",
    fit: "Straightforward Canadian access",
    note:
      "A Canadian retail platform for users who prefer simple buying and selling. Compare the quoted spread with explicit-commission platforms.",
    check:
      "Confirm BC availability, CAD funding, supported assets, spread and transfer options.",
    href: "https://newton.co",
    affiliate: false,
  },
  {
    name: "Shakepay",
    fit: "Bitcoin and ether basics",
    note:
      "A Canadian-focused option worth comparing for simple CAD purchases. Check current BC eligibility and the exact service scope.",
    check:
      "Review spread, CAD rails, withdrawals, asset selection and current regulatory terms.",
    href: "https://shakepay.com",
    affiliate: false,
  },
];

const faqs = [
  {
    q: "What is the best crypto exchange in British Columbia?",
    a: "There is no single best exchange for every BC resident. Compare BCSC or Canadian registration information, CAD funding, spread, commissions, custody, withdrawals, asset selection and tax records.",
  },
  {
    q: "Does the BCSC regulate crypto exchanges?",
    a: "The BCSC is British Columbia's securities regulator. Crypto-asset trading platforms can be subject to securities, derivatives, money-services and consumer requirements. Check the current Canadian registration information and the exact conditions for the platform.",
  },
  {
    q: "How can I check whether a crypto platform is registered in BC?",
    a: "Use the BCSC, CSA and National Registration Search resources. Also check BCSC investor alerts and caution lists. A platform's website, app availability or social-media promotion is not proof of registration.",
  },
  {
    q: "Can I buy Bitcoin with Canadian dollars in British Columbia?",
    a: "Many Canadian platforms support CAD through Interac e-Transfer, bank transfer or other methods. Confirm the current funding route, limits, spread, processing time and withdrawal charges.",
  },
  {
    q: "How is crypto taxed in British Columbia?",
    a: "BC residents generally report crypto income or taxable dispositions under Canadian federal and provincial tax rules. The CRA generally treats crypto-assets as commodities for income-tax purposes, while investor and business activity can be classified differently.",
  },
  {
    q: "Are unregistered crypto platforms safe if they accept BC customers?",
    a: "No. Acceptance of BC customers does not prove registration or adequate customer-asset safeguards. The BCSC and other Canadian regulators warn investors to check registration and avoid unregistered platforms.",
  },
];

const sources = [
  {
    label: "BCSC crypto and investor information",
    href: "https://www.bcsc.bc.ca",
  },
  {
    label: "BCSC investor caution list",
    href: "https://www.bcsc.bc.ca/enforcement/early-intervention/investment-caution-list",
  },
  {
    label: "Canadian registration search",
    href: "https://www.canada.ca/en/financial-consumer-agency/services/financial-toolkit/investing/registration-search.html",
  },
  {
    label: "CRA crypto-asset tax obligations",
    href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html",
  },
];

export default function BritishColumbiaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Best Crypto Exchanges in British Columbia 2026: BCSC, CAD Fees and Safety",
      description:
        "A practical British Columbia crypto guide covering BCSC checks, CAD funding, taxes, custody and investor safety.",
      datePublished: "2026-01-24",
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Alex Rivera",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/regions/canada/british-columbia`,
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
          name: "British Columbia",
          item: `${SITE_URL}/regions/canada/british-columbia`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto platforms compared for British Columbia",
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="mb-3 text-sm font-medium text-blue-300">
              British Columbia guide · Updated{" "}
              <time dateTime={UPDATED}>August 22, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Best crypto exchanges in British Columbia: check the BCSC first
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              For BC residents, the first question is not which exchange has
              the most coins. It is whether the platform is registered or
              operating under an appropriate Canadian arrangement, whether it
              can serve your account and whether customer assets and CAD
              payments are handled clearly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#choose"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Find your fit
              </a>

              <a
                href="#check"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Check registration
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                BC investor note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                BCSC investor alerts and platform status can change. Verify
                the current information before sending money to a platform or
                promoter.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                BCSC first
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                Verify the platform and any person promoting it.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                CAD total cost
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                Include Interac, bank, spread, commission and withdrawal
                costs.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                Asset safeguards
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                Registration does not eliminate volatility or insolvency
                risk.
              </p>
            </div>
          </div>
        </section>

        <section id="choose" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                The short answer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                In BC, platform verification comes before platform rankings
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                A good platform for a BC resident should have a clear legal
                entity, transparent customer terms, an available CAD funding
                route, understandable fees and a complete transaction history.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Kraken, Coinbase, NDAX, Newton, Wealthsimple Crypto and
                Shakepay are useful comparison points. They do not offer the
                same products, and their Canadian conditions can change.
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
                  CAD deposits and simple quotes.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Active trading:
                  </span>{" "}
                  liquidity and fee tiers.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Tax preparation:
                  </span>{" "}
                  complete transaction exports.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Long-term custody:
                  </span>{" "}
                  external withdrawals and wallet control.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="check" className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Registration check
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                How to check a platform before sending money
              </h2>
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-5">
                <p className="text-2xl font-black text-blue-700">01</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Search the regulator
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Check the BCSC, CSA and National Registration Search
                  resources.
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-5">
                <p className="text-2xl font-black text-amber-700">02</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Match the entity
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Match the legal name and website—not just the brand name.
                </p>
              </div>

              <div className="rounded-xl bg-rose-50 p-5">
                <p className="text-2xl font-black text-rose-700">03</p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Check the warning lists
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Search investor alerts and caution lists before depositing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 border-t px-6 py-5 text-sm">
              {sources.slice(0, 3).map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="platforms" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Platform guide
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Platforms BC residents commonly compare
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              These are comparison points, not a certification that every
              product is available or suitable in British Columbia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
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

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    BC check
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
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                CAD funding
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Interac is convenient, but calculate the full quote
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Compare Interac e-Transfer, bank transfer and card funding.
                Then add the spread, trading commission and crypto withdrawal
                fee. The final amount of crypto received is more useful than
                the headline commission.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Deposit
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Method, speed, limits and payment charges.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Withdrawal
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Network, minimum and platform charges.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Keep your account information accurate
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Use a payment account in your own name and answer identity
                and source-of-funds questions accurately. Do not use a VPN,
                false address or third-party payment account to bypass a BC
                restriction.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              CRA tax records
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Track adjusted cost base and every disposition
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The CRA generally treats crypto-assets as commodities for
              income-tax purposes. Selling, swapping, spending or receiving
              crypto can have different consequences depending on whether the
              activity is capital or business in nature.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Cost base
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Record units, acquisition cost, dates and fees.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Dispositions
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A crypto-to-crypto swap may still be taxable.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  BC filing
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Consider federal and provincial tax obligations.
                </p>
              </div>
            </div>

            <a
              href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-blue-300 hover:underline"
            >
              Review CRA guidance →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Investor protection
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Unregistered platforms create a different risk profile
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                BCSC warnings commonly focus on unregistered firms,
                impersonation and inadequate protection of customer assets.
                A professional website or a Canadian phone number is not
                proof of registration.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>Search the platform and promoter by legal name.</li>
                <li>Check BCSC caution lists and investor alerts.</li>
                <li>Never pay a “release fee” to recover supposed profits.</li>
                <li>Keep your own records and verify wallet addresses.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-950">
                Keep long-term holdings separate
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-950">
                A hardware wallet can reduce exchange dependence, but you
                become responsible for the recovery phrase, device security
                and every transaction you approve.
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
                  className="rounded-lg border border-blue-200 px-5 py-3 text-sm font-bold text-blue-900 hover:bg-white"
                >
                  Wallets guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Direct answers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              British Columbia crypto questions
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
              British Columbia exchange checklist
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Search the platform in BCSC, CSA and registration resources.",
                "Match the legal entity, website and account terms.",
                "Confirm British Columbia and product eligibility.",
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
              Investor alerts and registration information can change. Check
              official sources before sending money or relying on a platform
              claim.
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
              financial, legal or tax advice. British Columbia crypto-platform
              registration, BCSC warnings, product availability, fees, tax
              treatment and custody arrangements can change. Verify current
              BCSC, CSA, FINTRAC, CRA and platform information before depositing
              funds or filing taxes. Some links may be affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}