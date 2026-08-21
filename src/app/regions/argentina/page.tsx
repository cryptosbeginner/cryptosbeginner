import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Argentina 2026",
  description:
    "2026 Argentina crypto exchange guide: CNV PSAV registration, ARCA tax, stablecoins, ARS funding, Bitso, Lemon, Ripio, Coinbase and Binance.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/argentina",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/argentina",
      es: "https://www.cryptosbeginner.com/es/regiones/argentina",
      "x-default":
        "https://www.cryptosbeginner.com/regions/argentina",
    },
  },
};

const UPDATED = "2026-08-13";

const platforms = [
  {
    name: "Lemon",
    bestFor: "Argentine users and local peso access",
    note:
      "A local Argentine crypto and payments app with strong market relevance. Check its current CNV PSAV registration, ARS funding, custody, fees and supported assets.",
    href: "https://lemon.me",
    affiliate: false,
  },
  {
    name: "Ripio",
    bestFor: "Latin American retail users",
    note:
      "A major regional crypto platform with Argentine roots. Verify its current PSAV status, ARS payment methods, custody and available products.",
    href: "https://www.ripio.com",
    affiliate: false,
  },
  {
    name: "Bitso",
    bestFor: "Regional liquidity and stablecoins",
    note:
      "A Latin American exchange with Argentine market relevance. Check local funding, ARS conversion, custody, fees and the CNV registration status of the applicable entity.",
    href: "https://bitso.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "International spot trading",
    note:
      "A familiar international exchange for custody and spot access. Confirm Argentine availability, ARS or USD funding options, fees and the EEA or foreign entity serving you.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Binance",
    bestFor: "Liquidity and stablecoin access",
    note:
      "A global platform frequently compared by Argentine users. Check local P2P availability, CNV registration, payment methods, custody and product restrictions.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful international trading tools and liquidity. Review ARS or USD conversion, fees, withdrawals, staking and Argentina availability.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
];

export default function ArgentinaPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">English</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/es/regiones/argentina"
                className="text-indigo-700 hover:underline"
              >
                Español
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 13, 2026</time> ·
              Cryptos Beginner editorial team
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Argentina 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Argentina has one of Latin America&apos;s most practical crypto
              markets, shaped by peso instability, dollar demand, stablecoins
              and cross-border payments. The CNV now regulates virtual-asset
              service providers through the PSAV framework, while ARCA
              applies general tax rules to crypto activity. This guide
              compares local platforms such as Lemon, Ripio and Bitso with
              global exchanges including Coinbase, Binance and Kraken.
            </p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Quick answer: which exchange is best?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Lemon, Ripio and Bitso are the most natural local comparisons
              for Argentine users who want ARS funding, stablecoins or
              regional support. Coinbase suits international spot access,
              Binance is often compared for liquidity and stablecoin/P2P
              markets, and Kraken is useful for active spot traders. Compare
              CNV registration, ARS payment routes, spreads, custody,
              withdrawals and tax documentation.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              A platform may be accessible online without being registered
              for every in-scope service in Argentina. Check the applicable
              entity and the CNV PSAV registry before depositing.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              TL;DR
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                Crypto is legal to hold, buy and sell in Argentina, but it
                is not legal tender.
              </li>

              <li>
                Law 27.739 created the legal basis for virtual assets and
                PSAVs, with CNV responsible for registration, supervision
                and sanctions.
              </li>

              <li>
                CNV General Resolution 1058/2025 establishes registration,
                conduct, custody, cybersecurity, disclosure and governance
                requirements for covered PSAVs.
              </li>

              <li>
                Lemon, Ripio and Bitso are important local or regional
                comparisons. Coinbase, Binance and Kraken are major
                international alternatives.
              </li>

              <li>
                ARCA applies existing income-tax and personal-assets rules;
                Argentina does not use one simple crypto-only tax rate.
              </li>

              <li>
                Stablecoins are especially important in Argentina, but
                stablecoin use still creates custody, issuer, tax and
                regulatory risks.
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              On this page
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#framework" className="hover:underline">
                  CNV and the PSAV framework
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant Argentine platforms
                </a>
              </li>

              <li>
                <a href="#stablecoins" className="hover:underline">
                  Stablecoins and dollar access
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Argentine crypto tax
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  ARS funding and P2P
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Frequently asked questions
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Framework */}
        <section id="framework" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            CNV and the PSAV framework
          </h2>

          <p className="text-slate-700 mb-4">
            Argentina&apos;s Law 27.739 introduced definitions for virtual
            assets and virtual-asset service providers, known locally as
            PSAVs. It appointed the Comisión Nacional de Valores, or CNV,
            as the authority responsible for registration, supervision,
            regulation and sanctions.
          </p>

          <p className="text-slate-700 mb-4">
            CNV General Resolution 1058/2025 expanded the framework. It
            covers businesses offering services such as exchange between
            virtual assets and fiat, exchange between virtual assets,
            transfers, custody and related services for or toward Argentine
            users.
          </p>

          <p className="text-slate-700 mb-4">
            Covered PSAVs must address areas including governance,
            cybersecurity, customer disclosures, complaints, custody,
            customer-asset handling, information systems and
            anti-money-laundering controls. CNV General Resolution
            1139/2026 also brought PSAVs into additional capital-markets
            AML and reporting obligations.
          </p>

          <p className="text-slate-700 mb-4">
            The registration requirement applies to the service provider,
            not to every individual who owns crypto. A platform serving
            Argentines from abroad may still have a regulatory connection
            to Argentina depending on its activities, marketing and local
            nexus.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.cnv.gov.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CNV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.argentina.gob.ar/uif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              UIF
            </a>{" "}
            ·{" "}
            <a
              href="https://www.argentina.gob.ar/arca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ARCA
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevant crypto platforms for Argentina
          </h2>

          <p className="text-slate-700 mb-6">
            Argentine users often prioritise stablecoin access, ARS
            conversion, local payment methods, liquidity and withdrawal
            flexibility. The platforms below are comparison points, not a
            permanent ranking.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-indigo-600">
                  {platform.bestFor}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {platform.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-4 inline-flex text-sm font-semibold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `Visit ${platform.name} →`
                    : `Official ${platform.name} website →`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Stablecoins */}
        <section id="stablecoins" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Stablecoins and access to dollar-linked value
          </h2>

          <p className="text-slate-700 mb-4">
            Stablecoins are a major part of Argentina&apos;s practical crypto
            market. Users may use dollar-linked tokens to reduce exposure to
            peso depreciation, move value across borders or trade on global
            platforms.
          </p>

          <p className="text-slate-700 mb-4">
            A stablecoin is not the same as a US dollar bank balance. Users
            face issuer risk, reserve risk, depegging risk, blockchain
            risk, custody risk and possible restrictions on deposits or
            withdrawals.
          </p>

          <p className="text-slate-700 mb-4">
            Stablecoin purchases, swaps and disposals can also have tax
            consequences. Do not assume that a token designed to track the
            dollar is invisible to ARCA or excluded from asset reporting.
          </p>

          <p className="text-slate-700">
            Before using a stablecoin, check the issuer, reserve model,
            redemption mechanism, network, exchange withdrawal support and
            whether the platform provides a clear transaction history.
          </p>
        </section>

        {/* Tax */}
        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Argentine crypto tax
          </h2>

          <p className="text-slate-700 mb-4">
            Argentina does not use one single dedicated crypto-tax code.
            ARCA applies existing tax rules, and the result depends on
            residence, frequency, purpose, type of income, disposal and
            whether the activity is private or business-related.
          </p>

          <p className="text-slate-700 mb-4">
            Crypto disposals may be relevant to income tax. Depending on
            the facts, gains can be treated as capital or regular income,
            with different rates and calculation rules. Some public tax
            summaries describe rates of 15% for certain capital gains and
            up to 35% for regular income, but the correct classification
            must be confirmed for the taxpayer and transaction.
          </p>

          <p className="text-slate-700 mb-4">
            Cryptoassets may also be relevant to Argentina&apos;s personal
            assets tax, with holdings generally valued at the applicable
            year-end date. Stablecoins, tokens on exchanges and assets in
            self-custody should not be ignored when assessing reporting
            obligations.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, lending, airdrops, liquidity provision and
            crypto received for work may create income-tax events.
            Argentine residents with meaningful activity should consult a
            contador familiarizado con activos virtuales.
          </p>

          <p className="text-sm text-slate-700">
            Tax authority:{" "}
            <a
              href="https://www.argentina.gob.ar/arca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ARCA
            </a>
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ARS funding, P2P and payment methods
          </h2>

          <p className="text-slate-700 mb-4">
            Argentine users may fund crypto platforms through local bank
            transfers, fintech wallets, payment apps, cards, local
            exchanges and P2P markets. The exact route depends on the
            platform and current banking policies.
          </p>

          <p className="text-slate-700 mb-4">
            P2P can provide access to ARS and stablecoins but introduces
            counterparty, fraud, payment-reversal and account-freezing
            risks. Use platform escrow when available, stay in the
            platform chat and never rely on screenshots as proof of
            payment.
          </p>

          <p className="text-slate-700">
            Use accounts in your own name, retain payment records and
            answer source-of-funds questions accurately. Avoid off-platform
            OTC deals and instructions designed to bypass banking,
            compliance or tax controls.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody and consumer risk
          </h2>

          <p className="text-slate-700 mb-4">
            CNV registration can improve transparency and compliance, but
            it does not guarantee the value of crypto or protect users
            from every custody, insolvency or market risk.
          </p>

          <p className="text-slate-700 mb-4">
            Ask whether the provider holds actual assets, whether
            withdrawals are available, whether customer assets are
            segregated and whether the platform lends or reuses customer
            funds.
          </p>

          <p className="text-slate-700">
            Proof of Reserves may be helpful, but it does not automatically
            prove complete liability coverage or priority for Argentine
            customers in an insolvency.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              What is Proof of Reserves? →
            </Link>

            <Link
              href="/learn/how-p2p-escrow-works"
              className="text-indigo-700 hover:underline"
            >
              How P2P escrow works →
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              Exchange security checklist →
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              Wallets guide →
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for Argentina
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Platform
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Best for
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Argentine checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Lemon
                  </td>

                  <td className="px-4 py-3">
                    Local users and ARS access.
                  </td>

                  <td className="px-4 py-3">
                    CNV PSAV registration, ARS funding, custody and fees.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://lemon.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Official website →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Ripio
                  </td>

                  <td className="px-4 py-3">
                    Regional Latin American access.
                  </td>

                  <td className="px-4 py-3">
                    CNV status, local payment options, custody and assets.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.ripio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Official website →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitso
                  </td>

                  <td className="px-4 py-3">
                    Regional liquidity and stablecoins.
                  </td>

                  <td className="px-4 py-3">
                    ARS conversion, entity, custody, fees and CNV status.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bitso.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Official website →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    Liquidity and stablecoin/P2P access.
                  </td>

                  <td className="px-4 py-3">
                    P2P rules, CNV registration, payment channels and
                    custody.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/binance"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visit Binance →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Self-custody
                  </td>

                  <td className="px-4 py-3">
                    Long-term holdings and on-chain use.
                  </td>

                  <td className="px-4 py-3">
                    ARS/USD valuation, tax records and recovery-phrase
                    security.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Wallets guide →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Frequently asked questions about crypto in Argentina
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Holding, buying and selling crypto is generally possible.
                Crypto is not legal tender, and providers offering covered
                services to Argentine users must follow the CNV PSAV
                framework and applicable AML rules.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is a PSAV in Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                PSAV means Proveedor de Servicios de Activos Virtuales,
                or virtual-asset service provider. The CNV registration
                framework covers specified businesses such as exchanges,
                transfers and custody.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                How are cryptocurrencies taxed in Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ARCA applies existing tax rules. Depending on the activity,
                gains may be relevant to income tax or capital-gains
                treatment, and crypto holdings may be included in personal
                assets reporting.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Why are stablecoins popular in Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Stablecoins can provide access to dollar-linked value and
                cross-border transfers. They still carry issuer, reserve,
                depegging, custody, tax and regulatory risks.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Lemon relevant for Argentine users?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Lemon is a natural local comparison because of its Argentine
                market focus and ARS-related access. Check current CNV PSAV
                registration, fees, custody and supported assets.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does CNV registration guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. Registration can improve compliance and transparency,
                but it cannot eliminate volatility, insolvency, hacking,
                fraud, phishing or private-key loss.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Argentina crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify current CNV PSAV registration and the exact legal
              entity.
            </li>

            <li>
              Check whether the provider offers custody, transfers,
              exchange and stablecoin services under the registered scope.
            </li>

            <li>
              Compare ARS funding, stablecoin conversion, spreads, fees and
              withdrawals.
            </li>

            <li>
              Keep records for every purchase, sale, swap, stablecoin
              transaction, reward and wallet transfer.
            </li>

            <li>
              Consider income tax, personal-assets reporting and business
              classification where relevant.
            </li>

            <li>
              Use platform escrow for P2P and never move a trade to
              off-platform chat before payment is verified.
            </li>

            <li>
              Use 2FA, unique passwords and offline recovery-phrase
              backups.
            </li>

            <li>
              Read our{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                exchange security checklist
              </Link>{" "}
              and{" "}
              <Link href="/methodology" className="text-indigo-700">
                methodology
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              How to choose as an Argentine resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a platform that explains its CNV PSAV status,
              supports your preferred ARS or stablecoin route and gives you
              complete transaction records. Use P2P escrow where available,
              keep long-term funds separate and organise ARCA documentation
              from the first transaction.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://lemon.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Lemon official
              </a>

              <a
                href="https://www.ripio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Ripio official
              </a>

              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Binance
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Argentine crypto regulation
              and tax treatment can change. Verify current CNV, UIF and
              ARCA guidance before depositing funds, trading or filing a
              return. Some links are affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}