import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Spain 2026",
  description:
    "2026 Spain crypto exchange guide: CNMV, MiCA, Banco de España, Spanish crypto tax, Modelo 100, Modelo 721, Coinbase, Kraken and Bit2Me.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/spain",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/spain",
      es: "https://www.cryptosbeginner.com/es/regiones/espana",
      "x-default":
        "https://www.cryptosbeginner.com/regions/spain",
    },
  },
};

const UPDATED = "2026-08-07";

const platforms = [
  {
    name: "Bit2Me",
    bestFor: "Spanish users and local-language support",
    note:
      "A Spain-focused crypto platform with local market relevance. Check its current MiCA authorisation, EUR funding, fees, custody and available assets.",
    href: "https://bit2me.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Beginners and recurring euro purchases",
    note:
      "A familiar international exchange for simple spot purchases. Compare spread, Advanced fees, SEPA funding, custody and the EEA entity serving Spain.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful trading tools and international liquidity. Review EUR pairs, maker/taker fees, staking and products available to Spanish residents.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Crypto.com",
    bestFor: "Mobile users and broader products",
    note:
      "A broad app ecosystem with multiple products. Rewards, staking, cards and stablecoin access can differ for Spanish customers.",
    href: "https://go.cryptosbeginner.com/CryptoCom",
    affiliate: true,
  },
  {
    name: "Bitpanda",
    bestFor: "European retail investors",
    note:
      "A broad European platform with euro support. Check Spanish availability, spreads, custody and current EU authorisation.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Bitstamp",
    bestFor: "Focused European spot trading",
    note:
      "A long-running European exchange useful for comparison. Verify Spanish availability, EUR funding, fees and the current regulatory position.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function SpainPage() {
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
                href="/es/regiones/espana"
                className="text-indigo-700 hover:underline"
              >
                Español
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 21, 2026</time> · By
              Sofia Bennett
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Spain 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Spain is an EU crypto market operating under MiCA. The
              Comisión Nacional del Mercado de Valores (CNMV) now has the
              main role for crypto-asset service-provider authorisation and
              market conduct, while Banco de España remains relevant to
              certain token and payment matters. Spanish residents also
              need to consider IRPF, Modelo 100, Modelo 721 and the
              growing role of automatic exchange reporting.
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
              Bit2Me is the most natural Spain-focused comparison for
              users who want Spanish-language support and a local market
              presence. Coinbase is often simple for beginners, Kraken
              suits active spot traders and Crypto.com offers a broader
              mobile ecosystem. Bitpanda and Bitstamp are additional
              European alternatives. Compare CNMV or EU authorisation,
              EUR funding, total cost, custody, withdrawals and tax
              records.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              A platform being accessible from Spain does not automatically
              prove that it is authorised to offer every product to
              Spanish residents. Verify the exact legal entity and
              service permission before depositing.
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
                Spain applies the EU Markets in Crypto-Assets Regulation,
                known as MiCA.
              </li>

              <li>
                CNMV supervises relevant crypto-asset service providers
                and market-conduct matters, while Banco de España remains
                relevant to certain token and payment responsibilities.
              </li>

              <li>
                Spain&apos;s national transition period ended on June 30,
                2026. Providers generally need MiCA authorisation or a
                valid EU passporting route to continue serving Spanish
                customers.
              </li>

              <li>
                Bit2Me, Coinbase, Kraken, Crypto.com, Bitpanda and Bitstamp
                are relevant comparison points.
              </li>

              <li>
                Crypto disposals are generally taxed as savings income at
                progressive rates from 19% to 30%, depending on the taxable
                base.
              </li>

              <li>
                Modelo 100, Modelo 721, FIFO records, wealth-tax rules and
                DAC8 reporting may all be relevant.
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
                  CNMV, Banco de España and MiCA
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant Spanish exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Spanish crypto tax
                </a>
              </li>

              <li>
                <a href="#reporting" className="hover:underline">
                  Modelo 100 and Modelo 721
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  EUR funding and withdrawals
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
            CNMV, Banco de España and MiCA in Spain
          </h2>

          <p className="text-slate-700 mb-4">
            Spain applies MiCA as the main European framework for many
            crypto-asset services. MiCA covers custody, operating trading
            platforms, exchanging cryptoassets, executing orders,
            transferring assets, providing advice and managing portfolios.
          </p>

          <p className="text-slate-700 mb-4">
            CNMV is Spain&apos;s national competent authority for important
            crypto-asset service-provider and market-conduct functions.
            Its work includes authorisation, supervision, investor-facing
            conduct and advertising or market-abuse requirements within
            its remit.
          </p>

          <p className="text-slate-700 mb-4">
            Banco de España has parallel responsibilities for certain
            asset-referenced tokens, e-money tokens and payment-related
            matters. Users should not assume that a platform appearing on
            an older national list has current MiCA authorisation.
          </p>

          <p className="text-slate-700 mb-4">
            Spain allowed a national transition period that ended on June
            30, 2026. From July 1, providers generally need an applicable
            CNMV authorisation or a valid authorisation passported from
            another EU member state.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.cnmv.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CNMV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.bde.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banco de España
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              MiCA Regulation
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevant crypto exchanges for Spain
          </h2>

          <p className="text-slate-700 mb-6">
            Spanish residents often prioritise EUR deposits, Spanish-
            language support, complete tax records and a provider with a
            verifiable European authorisation. The following platforms
            are comparison points, not a permanent ranking.
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

        {/* Tax */}
        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Spanish crypto tax in 2026
          </h2>

          <p className="text-slate-700 mb-4">
            Spanish tax residents generally report crypto disposals as
            savings income. Selling crypto for euros, swapping one token
            for another or using crypto to buy goods and services can
            create a taxable capital gain or loss.
          </p>

          <p className="text-slate-700 mb-4">
            For the 2025 tax year filed in 2026, savings-income rates are
            generally progressive: 19% up to €6,000, 21% from €6,000 to
            €50,000, 23% from €50,000 to €200,000, 27% from €200,000 to
            €300,000 and 30% above €300,000. Check the applicable tax
            year and regional rules before filing.
          </p>

          <p className="text-slate-700 mb-4">
            Spain generally uses FIFO principles when identifying which
            units were disposed of. A crypto-to-crypto swap can therefore
            create a disposal even when no euros reach your bank account.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, lending, liquidity provision and
            crypto received as salary or payment can be treated as income
            rather than ordinary investment gains.
          </p>

          <p className="text-slate-700 mb-4">
            Wealth-tax and regional tax rules may also become relevant for
            large holdings. Residents with complex activity should speak
            with a Spanish asesor fiscal familiar with cryptoassets.
          </p>

          <p className="text-sm text-slate-700">
            Official tax reference:{" "}
            <a
              href="https://sede.agenciatributaria.gob.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Agencia Tributaria
            </a>
          </p>
        </section>

        {/* Reporting */}
        <section id="reporting" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Modelo 100, Modelo 721 and DAC8
          </h2>

          <p className="text-slate-700 mb-4">
            Crypto gains are generally included in the annual Spanish
            income-tax return, Modelo 100, through the relevant savings-
            income sections.
          </p>

          <p className="text-slate-700 mb-4">
            Modelo 721 may be required when a Spanish tax resident holds
            cryptoassets in custody with foreign providers above the
            applicable €50,000 threshold. The obligation concerns
            reporting, not necessarily an additional tax payment.
          </p>

          <p className="text-slate-700 mb-4">
            Spanish exchanges and other providers may also submit
            information to AEAT through existing national reporting
            obligations. DAC8 further expands European information
            exchange for covered crypto providers.
          </p>

          <p className="text-slate-700">
            Keep platform exports, wallet history, acquisition costs,
            EUR values, fees, disposal dates and year-end balances.
            Exchange-generated summaries may not include every wallet or
            DeFi transaction needed for a Spanish return.
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            EUR deposits and withdrawals in Spain
          </h2>

          <p className="text-slate-700 mb-4">
            Spanish residents commonly use SEPA transfers, cards or
            payment methods supported by individual platforms. Availability
            depends on the provider, bank, account profile and compliance
            review.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the full cost of buying crypto: deposit fees, card
            charges, spread, trading commission, withdrawal fee and
            network cost.
          </p>

          <p className="text-slate-700">
            Use a payment account in your own name, keep confirmations and
            answer source-of-funds questions accurately. Banks and
            exchanges may delay unusual transactions for fraud and
            anti-money-laundering checks.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody and consumer risk
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA creates standards for authorised providers, but it does
            not make crypto equivalent to a guaranteed bank deposit.
            Prices can fall, withdrawals can be interrupted and a
            platform can experience insolvency, hacking or operational
            failure.
          </p>

          <p className="text-slate-700 mb-4">
            Ask whether you own actual crypto, whether withdrawals are
            available, whether customer assets are segregated and whether
            the provider lends or rehypothecates assets.
          </p>

          <p className="text-slate-700">
            Proof of Reserves is one transparency signal, not proof that
            all liabilities are covered or that customers have priority
            during insolvency.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              What is Proof of Reserves? →
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
            Practical comparison for Spain
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
                    Spanish checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bit2Me
                  </td>

                  <td className="px-4 py-3">
                    Spanish users and local-language support.
                  </td>

                  <td className="px-4 py-3">
                    Current MiCA/CNMV status, EUR funding, fees, custody
                    and supported assets.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bit2me.com"
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
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Beginners and recurring purchases.
                  </td>

                  <td className="px-4 py-3">
                    EEA entity, spread, custody and tax records.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
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
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Active spot traders.
                  </td>

                  <td className="px-4 py-3">
                    EUR pairs, fees, staking and current EU passporting.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visit Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Crypto.com
                  </td>

                  <td className="px-4 py-3">
                    Mobile users and wider products.
                  </td>

                  <td className="px-4 py-3">
                    Rewards, staking, cards, custody and Spanish product
                    restrictions.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/CryptoCom"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visit Crypto.com →
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
                    Modelo 721 records, EUR valuation and recovery-phrase
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
            Frequently asked questions about crypto in Spain
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Spain?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Owning and trading cryptoassets is generally possible.
                Providers serving Spanish residents must comply with
                applicable MiCA, AML, conduct and reporting rules.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is the Spanish crypto tax rate?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Crypto gains generally fall within the savings-income
                scale, with rates commonly ranging from 19% to 30%
                depending on the taxable base and tax year.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold">
                What is Modelo 721?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Modelo 721 is an informational declaration for certain
                cryptoassets held in custody with foreign providers above
                the applicable threshold. It is a reporting obligation,
                not automatically an additional tax.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are crypto-to-crypto swaps taxable in Spain?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                A swap can create a taxable disposal. Keep EUR values,
                dates, acquisition costs, fees and transaction records for
                every exchange.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Bit2Me relevant for Spanish residents?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Bit2Me is a natural Spain-focused comparison for users who
                want Spanish-language support and local market relevance.
                Verify its current MiCA status, fees, custody and available
                assets.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does MiCA guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regulates specified services but cannot eliminate
                volatility, insolvency, hacking, phishing, smart-contract
                failures or private-key loss.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Spain crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify CNMV authorisation or valid EU passporting status.
            </li>

            <li>
              Confirm the provider is permitted to serve Spanish customers
              after the June 30, 2026 transition deadline.
            </li>

            <li>
              Compare EUR deposits, spread, trading fees and withdrawal
              charges.
            </li>

            <li>
              Keep records for every purchase, sale, swap, reward and
              wallet transfer.
            </li>

            <li>
              Check whether Modelo 100, Modelo 721, wealth-tax or regional
              reporting applies to you.
            </li>

            <li>
              Treat staking, mining, airdrops and DeFi as potentially
              separate tax events.
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
              How to choose as a Spanish resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a provider that supports euro funding, provides
              complete transaction records and has a verifiable CNMV or EU
              passporting status. Organise Modelo 100 and Modelo 721
              information before selling, swapping or earning crypto.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://bit2me.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bit2Me official
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase official
              </a>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Kraken
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Spanish crypto regulation
              and tax treatment can change. Verify current CNMV, Banco de
              España and Agencia Tributaria guidance before depositing
              funds, trading or filing a return. Some links are affiliate
              links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}