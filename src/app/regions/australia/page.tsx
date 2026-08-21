import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PUBLISHED = "2026-07-29";
const UPDATED = "2026-07-29";

export const metadata: Metadata = {
  title:
    "Best Crypto Exchanges in Australia 2026: AUD Fees, AUSTRAC and ATO Guide",
  description:
    "Australia crypto exchange guide for 2026: AUSTRAC, ASIC licensing transition, AUD funding, CoinSpot, Kraken, OKX, Binance, ATO records and custody.",
  alternates: {
    canonical: `${SITE_URL}/regions/australia`,
    languages: {
      en: `${SITE_URL}/regions/australia`,
      "x-default": `${SITE_URL}/regions/australia`,
    },
  },
  openGraph: {
    title: "Best Crypto Exchanges in Australia 2026",
    description:
      "Compare Australian crypto platforms by AUD funding, regulation, fees, taxes, custody and product access.",
    url: `${SITE_URL}/regions/australia`,
    type: "article",
  },
};

const platforms = [
  {
    name: "CoinSpot",
    fit: "Australia-oriented retail access",
    note:
      "An Australian-focused platform often compared for AUD deposits and a broad retail interface. Compare instant-buy spreads with market-trading fees.",
    check:
      "Verify current AUSTRAC registration, product availability, AUD rails, spreads, withdrawals and custody terms.",
    href: "https://go.cryptosbeginner.com/CoinspotAustralia",
    affiliate: true,
  },
  {
    name: "Kraken",
    fit: "Trading tools and security comparison",
    note:
      "A global platform with Australian access that may appeal to active traders. Products and payment methods can vary by country, account type and local requirements.",
    check:
      "Check AUD deposits, Osko or bank-transfer availability, fees, staking, derivatives and withdrawals.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "OKX",
    fit: "Advanced trading tools",
    note:
      "A global platform commonly compared for spot, derivatives and Web3 tools. Australian users should confirm current local eligibility and product restrictions.",
    check:
      "Review the serving entity, AUD conversion, derivatives eligibility, custody and external-wallet access.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
  {
    name: "Binance",
    fit: "Liquidity and broad markets",
    note:
      "A global exchange worth comparing for liquidity and asset selection. Australian payment methods and product access may differ from other countries.",
    check:
      "Confirm Australian onboarding, AUD funding, P2P or bank routes, derivatives restrictions and the legal entity.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
];

const faqs = [
  {
    q: "What is the best crypto exchange in Australia?",
    a: "There is no single best exchange for every Australian. Compare AUD funding, total cost, AUSTRAC status, applicable ASIC requirements, asset selection, custody, withdrawals and tax records.",
  },
  {
    q: "Are crypto exchanges regulated in Australia?",
    a: "Australian crypto businesses can face AUSTRAC AML/CTF obligations, while activities involving financial products or regulated digital-asset platforms may involve ASIC and the Corporations Act. Registration under one regime does not automatically approve every product or service.",
  },
  {
    q: "What is changing in Australian crypto regulation?",
    a: "Australia is moving toward a broader digital-assets licensing framework. Current 2026 materials describe a future ASIC-related licensing regime for digital-asset platforms and tokenised custody platforms, with a transition before commencement. Check ASIC and Treasury material for the latest status.",
  },
  {
    q: "Can I buy crypto with Australian dollars?",
    a: "Many Australian platforms support AUD through bank transfer, PayID, Osko, card or other methods. Check the live method, processing time, limits, spread and withdrawal fees before depositing.",
  },
  {
    q: "How is crypto taxed in Australia?",
    a: "The ATO generally treats crypto-assets as CGT assets rather than ordinary currency. Selling, swapping, gifting or using crypto for goods or services can create a capital-gains event. Business, staking, mining and employment-related activity may be treated differently.",
  },
  {
    q: "Should I use a VPN to access an overseas exchange?",
    a: "No. A VPN or false location can breach platform terms, create account restrictions and complicate compliance, withdrawals and tax records. Use a platform that officially accepts Australian residents.",
  },
];

const sources = [
  {
    label: "ATO crypto-asset tax obligations",
    href: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments",
  },
  {
    label: "ATO crypto transaction and residency guidance",
    href: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/transactions-acquiring-and-disposing-of-crypto-assets/crypto-asset-transactions-and-tax-residency",
  },
  {
    label: "ASIC",
    href: "https://asic.gov.au",
  },
  {
    label: "AUSTRAC",
    href: "https://www.austrac.gov.au",
  },
];

export default function AustraliaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Best Crypto Exchanges in Australia 2026: AUD Fees, AUSTRAC and ATO Guide",
      description:
        "A practical Australia crypto guide covering AUD funding, AUSTRAC, ASIC transition, taxes, custody and exchange safety.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Alex Rivera",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/regions/australia`,
      inLanguage: "en-AU",
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
          name: "Regions",
          item: `${SITE_URL}/regions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Australia",
          item: `${SITE_URL}/regions/australia`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto platforms compared for Australia",
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="mb-3 text-sm font-medium text-amber-300">
              Australia guide · Updated{" "}
              <time dateTime={UPDATED}>July 29, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Best crypto exchanges in Australia: compare AUD, regulation and tax records
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Australian users need to compare more than coins and headline
              fees. Check AUD funding, AUSTRAC registration, the developing
              ASIC digital-assets framework, tax records, custody and whether
              the exact product is available to Australian residents.
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
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
                Review note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                This page is backdated to July 29, 2026. Australia&apos;s
                crypto framework is changing, so verify current ASIC, AUSTRAC,
                ATO and platform information before acting.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                AUD first
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                Compare PayID, Osko, bank, card, spread and withdrawal costs.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                Two regulatory layers
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                AUSTRAC AML/CTF obligations and ASIC financial-services rules
                answer different questions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                ATO records
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-950">
                Record every transaction in AUD at its market value.
              </p>
            </div>
          </div>
        </section>

        <section id="choose" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                The short answer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Choose the platform that fits your Australian use case
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                A beginner may want simple AUD deposits and a clear buy
                quote. An active trader may prioritise liquidity and advanced
                fees. A long-term holder may care most about external
                withdrawals and wallet control.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                CoinSpot, Kraken, OKX and Binance are useful comparison
                points. Their products, payment methods, legal entities and
                Australian availability are not identical.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                Choose by priority
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Simple buying:
                  </span>{" "}
                  AUD funding and transparent quotes.
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
                  downloadable statements and AUD records.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Long-term storage:
                  </span>{" "}
                  withdrawals and self-custody options.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                Australian regulatory map
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                AUSTRAC and ASIC do different jobs
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[190px_1fr]">
                <p className="font-bold text-slate-900">AUSTRAC</p>

                <p className="text-sm leading-6 text-slate-700">
                  AUSTRAC supervises AML/CTF obligations for covered digital
                  currency exchange and virtual-asset designated services.
                  Registration is not a guarantee that an exchange is safe or
                  that every product is approved.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[190px_1fr]">
                <p className="font-bold text-slate-900">ASIC</p>

                <p className="text-sm leading-6 text-slate-700">
                  ASIC is relevant where crypto-assets, custody, platforms or
                  related services fall within financial-services and
                  Corporations Act requirements.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[190px_1fr]">
                <p className="font-bold text-slate-900">
                  Digital-assets transition
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Australia is moving toward a broader licensing framework
                  for certain digital-asset platforms and tokenised custody
                  platforms. Transitional dates and final obligations should
                  be checked against current ASIC and Treasury publications.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[190px_1fr]">
                <p className="font-bold text-slate-900">Consumer risk</p>

                <p className="text-sm leading-6 text-slate-700">
                  A registration or licence does not guarantee crypto prices,
                  uninterrupted withdrawals, solvency or recovery after a
                  hack.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.austrac.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-700 hover:underline"
            >
              Check AUSTRAC →
            </a>

            <a
              href="https://asic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-700 hover:underline"
            >
              Check ASIC →
            </a>
          </div>
        </section>

        <section id="platforms" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Platform guide
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Australian platforms worth comparing
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              These are comparison points, not a universal ranking or legal
              certification. Confirm the exact entity, Australian access,
              current registrations and product terms.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg"
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

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Australia check
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
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                AUD funding
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                PayID or Osko does not tell you the total price
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Compare PayID, Osko, bank transfer and card funding. Then
                include the spread, trading commission and crypto withdrawal
                fee. Compare the final AUD amount and asset quantity.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Buy quote
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Check the spread and the quantity received.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Withdrawals
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Check network, minimum and platform fees.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-lg font-bold text-rose-950">
                Avoid payment workarounds
              </h3>

              <p className="mt-3 text-sm leading-6 text-rose-950">
                Use a bank account in your own name, provide accurate
                information and follow bank and platform compliance requests.
                Do not use a VPN or false details to bypass Australian
                restrictions.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
              ATO tax records
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Record every transaction in Australian dollars
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The ATO generally treats crypto-assets as CGT assets rather
              than ordinary currency. Selling, swapping, gifting or using
              crypto to obtain goods or services can create a CGT event.
              Mining, staking, employment and business activity may require
              separate treatment.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-amber-300">
                  AUD value
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Record market value in AUD at the transaction time.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-amber-300">
                  Cost base
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Keep acquisition cost, fees, dates and asset quantities.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-amber-300">
                  Tax residence
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Australian tax residence affects the income and gains
                  you may need to report.
                </p>
              </div>
            </div>

            <a
              href="https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/transactions-acquiring-and-disposing-of-crypto-assets/crypto-asset-transactions-and-tax-residency"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-amber-300 hover:underline"
            >
              Review ATO crypto guidance →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                Custody
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Australian access is not a guarantee of recovery
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                A platform can meet AML or financial-services requirements
                and still experience hacking, insolvency, operational
                problems, account restrictions or withdrawal delays.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>Can you withdraw to an external wallet?</li>
                <li>Are customer assets segregated?</li>
                <li>Does the provider lend or reuse customer assets?</li>
                <li>Can you export a complete transaction history?</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Keep long-term holdings separate
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                A hardware wallet reduces dependence on an exchange but makes
                you responsible for the recovery phrase, device security and
                every transaction you approve.
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
                  className="rounded-lg border border-amber-200 px-5 py-3 text-sm font-bold text-amber-900 hover:bg-white"
                >
                  Wallets guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Direct answers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Australian crypto exchange questions
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
              Australia exchange checklist
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Check the provider's current AUSTRAC and ASIC position.",
                "Identify the exact legal entity serving Australian customers.",
                "Compare PayID, Osko, bank, card, spread and withdrawal costs.",
                "Check whether spot, staking, lending or derivatives are available.",
                "Record every transaction and market value in AUD.",
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

              <a
                href="https://go.cryptosbeginner.com/CoinspotAustralia"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                Compare CoinSpot
              </a>

              <Link
                href="/regions"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Browse regions
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
              Regulatory and tax guidance can change. Check primary sources
              before relying on platform marketing or filing a return.
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
              financial, legal or tax advice. Australian crypto regulation,
              AUSTRAC obligations, ASIC licensing, ATO treatment, fees,
              platform availability and custody arrangements can change.
              Verify current official information before depositing funds,
              trading or operating a crypto-related business. Some links may
              be affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}