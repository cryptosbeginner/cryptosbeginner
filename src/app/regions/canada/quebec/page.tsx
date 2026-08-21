import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-22";

export const metadata: Metadata = {
  title:
    "Best Crypto Exchanges in Quebec 2026: AMF, CAD Fees and Tax Guide",
  description:
    "Quebec crypto exchange guide for 2026: AMF registration, FINTRAC, CAD and Interac funding, crypto taxes, custody, scams and platform checks.",
  alternates: {
    canonical: `${SITE_URL}/regions/canada/quebec`,
    languages: {
      en: `${SITE_URL}/regions/canada/quebec`,
      fr: `${SITE_URL}/fr/regions/canada/quebec`,
      "x-default": `${SITE_URL}/regions/canada/quebec`,
    },
  },
  openGraph: {
    title: "Best Crypto Exchanges in Quebec 2026",
    description:
      "Compare crypto platforms available to Quebec residents by AMF status, CAD funding, fees, custody and tax records.",
    url: `${SITE_URL}/regions/canada/quebec`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Kraken",
    fit: "Active trading and liquidity",
    note:
      "A global platform commonly compared by Canadian traders. Quebec users should verify the current AMF or CSA position, the Canadian entity and available products.",
    check:
      "Review CAD funding, trading fees, staking, derivatives restrictions and external withdrawals.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Coinbase",
    fit: "Simple buying and recurring purchases",
    note:
      "A US-based brand with Canadian operations. Compare its Quebec availability, CAD funding, simple-buy spread and advanced-trading fees.",
    check:
      "Confirm the Canadian entity, AMF or CSA conditions, asset availability and staking terms.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Newton",
    fit: "Simple CAD access",
    note:
      "A Canadian retail platform often considered for straightforward crypto purchases. Compare the quoted spread with platforms showing explicit commissions.",
    check:
      "Verify Quebec access, CAD funding, spread, supported assets and transfer options.",
    href: "https://newton.co",
    affiliate: false,
  },
  {
    name: "Wealthsimple Crypto",
    fit: "Crypto alongside Canadian investments",
    note:
      "A Canadian investment-platform option for users who want crypto exposure in one account. Its custody and transfer model may differ from a self-custody exchange.",
    check:
      "Review Quebec availability, account structure, fees, asset transfers and custody terms.",
    href: "https://www.wealthsimple.com/en-ca/crypto",
    affiliate: false,
  },
  {
    name: "Shakepay",
    fit: "Bitcoin and ether basics",
    note:
      "A Canadian-focused platform worth comparing for simple purchases and CAD funding. Check current Quebec eligibility and product scope.",
    check:
      "Review spread, CAD rails, withdrawal support, asset selection and current regulatory terms.",
    href: "https://shakepay.com",
    affiliate: false,
  },
];

const faqs = [
  {
    q: "What is the best crypto exchange in Quebec?",
    a: "There is no single best platform for every Quebec resident. Compare AMF or CSA status, CAD funding, spread, commissions, available assets, custody, withdrawals and tax-record tools.",
  },
  {
    q: "Does the AMF regulate crypto exchanges in Quebec?",
    a: "The AMF is Quebec's financial-markets regulator. Crypto-asset trading platforms serving Quebec can be subject to securities, derivatives, money-services and consumer requirements. Check the platform in official Canadian registration materials and read any attached conditions.",
  },
  {
    q: "Can I buy Bitcoin with Canadian dollars in Quebec?",
    a: "Many platforms support CAD through Interac e-Transfer, bank transfer or other methods. Confirm the current method, limits, processing time, spread and withdrawal charges.",
  },
  {
    q: "Are crypto transactions taxable in Quebec?",
    a: "Crypto transactions can create federal and Quebec tax consequences. The CRA generally treats crypto-assets as commodities for income-tax purposes, while the nature of the activity can determine whether the result is a capital gain or business income.",
  },
  {
    q: "Do I report crypto-to-crypto swaps in Quebec?",
    a: "A crypto-to-crypto exchange can be a disposition for Canadian tax purposes. Track the value, date, asset quantity, adjusted cost base and fees even when no Canadian dollars are received.",
  },
  {
    q: "Can I use an offshore exchange from Quebec?",
    a: "Technical access does not prove local registration or consumer protection. The AMF warns users to be cautious with platforms located outside Canada. Avoid VPN workarounds and verify the platform's current Quebec availability.",
  },
];

const sources = [
  {
    label: "AMF crypto fraud guidance",
    href: "https://lautorite.qc.ca/grand-public/types-de-fraude/fraudes-cryptos",
  },
  {
    label: "AMF official website",
    href: "https://lautorite.qc.ca",
  },
  {
    label: "CRA crypto-asset tax obligations",
    href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html",
  },
  {
    label: "FINTRAC virtual currency",
    href: "https://fintrac-canafe.canada.ca",
  },
];

export default function QuebecPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Best Crypto Exchanges in Quebec 2026: AMF, CAD Fees and Tax Guide",
      description:
        "A practical Quebec crypto guide covering AMF checks, CAD funding, taxes, custody and platform safety.",
      datePublished: "2026-01-22",
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Alex Rivera",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/regions/canada/quebec`,
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
          name: "Quebec",
          item: `${SITE_URL}/regions/canada/quebec`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto platforms compared for Quebec",
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
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>English</span>
              <span className="text-slate-500">·</span>
              <Link
                href="/fr/regions/canada/quebec"
                className="text-white underline-offset-4 hover:underline"
              >
                Français
              </Link>
            </div>

            <p className="mb-3 text-sm font-medium text-blue-300">
              Quebec guide · Updated{" "}
              <time dateTime={UPDATED}>August 22, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Best crypto exchanges in Quebec: check the AMF before you deposit
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Quebec residents need more than a low trading fee. Check the
              platform&apos;s current AMF or CSA position, CAD funding route,
              custody model, available products and the transaction records
              you will need for Canadian and Quebec tax filing.
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
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                Quebec review note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                Registration and product conditions can change. Verify the
                current AMF and Canadian regulatory position before relying
                on a platform claim.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                AMF check
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                Verify the platform and any person promoting it in official
                Quebec registration materials.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                CAD cost
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                Include Interac, bank, spread, commission and withdrawal
                charges.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                Tax records
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                Track adjusted cost base and every crypto disposition.
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
                In Quebec, verify the platform before comparing the price
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                The first question is not “Which exchange has the lowest
                fee?” It is “Can this platform legally serve me in Quebec,
                and what conditions apply to the product I want?”
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                After that, compare CAD deposits, spread, trading commission,
                custody, withdrawals and downloadable records. Bitbuy,
                Kraken, Coinbase, NDAX, Newton, Wealthsimple Crypto and
                Shakepay are useful Canadian comparison points, but product
                access is not identical.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                Pick your priority
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Simple CAD buying:
                  </span>{" "}
                  clear quotes and Interac or bank access.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Active trading:
                  </span>{" "}
                  liquidity, order types and fee tiers.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Tax preparation:
                  </span>{" "}
                  complete statements and transaction exports.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Long-term holding:
                  </span>{" "}
                  external withdrawals and self-custody options.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                AMF and Canadian regulatory map
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Four things a registration check does not mean
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  AMF or CSA entry
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  It identifies a regulatory relationship or decision. Read
                  the exact entity, category and conditions.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  FINTRAC registration
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  It relates to covered AML and money-services obligations.
                  It is not a blanket approval for every trading, custody or
                  investment product.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Product access
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Spot crypto, stablecoins, staking, lending and derivatives
                  can have different conditions or may not be available.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Consumer protection
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Regulation does not guarantee price, liquidity, solvency,
                  uninterrupted withdrawals or recovery from a hack.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://lautorite.qc.ca/grand-public/types-de-fraude/fraudes-cryptos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Read AMF crypto-fraud guidance →
          </a>
        </section>

        <section id="platforms" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Platform guide
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Platforms Quebec residents commonly compare
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              These are comparison points, not a blanket endorsement. Confirm
              the current Quebec status, exact entity and permitted products.
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
                    Quebec check
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
                Interac is convenient, not automatically cheap
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Compare Interac e-Transfer, bank transfer and card funding.
                Then include the spread, trading commission and withdrawal
                charge. The amount of crypto received is the number that
                matters.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Before purchase
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Compare the final CAD quote and asset quantity.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Before withdrawal
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Check network, minimum and platform withdrawal fees.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Keep payment information accurate
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Use an account in your own name and respond accurately to
                identity and source-of-funds checks. Do not use a VPN, false
                address or third-party payment account to bypass a Quebec
                restriction.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              CRA and Quebec tax records
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              A crypto-to-crypto swap can still be a disposition
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The CRA generally treats crypto-assets as commodities for
              income-tax purposes. Selling, swapping, spending or receiving
              crypto can produce different tax consequences, depending on
              whether the activity is capital or business in nature.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Adjusted cost base
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Track units, acquisition cost, dates and fees.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Disposition value
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Record the value at the time of sale or exchange.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Federal and Quebec
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Consider both federal and provincial filing obligations.
                </p>
              </div>
            </div>

            <a
              href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-blue-300 hover:underline"
            >
              Review CRA crypto guidance →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Custody
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                A Canadian platform is not a bank deposit
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Registration and compliance requirements can improve
                governance, but they do not eliminate volatility, hacking,
                insolvency, withdrawal delays or account restrictions.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>Can you withdraw to an external wallet?</li>
                <li>Are customer assets segregated?</li>
                <li>What products are available in Quebec?</li>
                <li>Can you export the records needed for tax filing?</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-950">
                Consider self-custody carefully
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-950">
                A hardware wallet can reduce dependence on an exchange, but
                the recovery phrase becomes your responsibility. Losing it
                can mean losing access permanently.
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
              Quebec crypto exchange questions
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
              Quebec exchange checklist
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Check the platform in AMF and Canadian registration materials.",
                "Read the exact entity, category and conditions.",
                "Confirm Quebec and product eligibility.",
                "Compare Interac, bank, card, spread and withdrawal costs.",
                "Export records for CRA and Quebec tax reporting.",
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
              Regulatory entries and conditions can change. Verify official
              material before opening an account or filing a return.
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
              financial, legal or tax advice. Quebec crypto-platform status,
              AMF conditions, product availability, fees, custody arrangements
              and tax treatment can change. Verify current AMF, CRA, FINTRAC
              and platform information before depositing funds or filing taxes.
              Some links may be affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}