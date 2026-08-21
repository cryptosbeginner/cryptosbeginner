import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Brazil 2026",
  description:
    "2026 Brazil crypto exchange guide: Banco Central, CVM, Law 14.478, DeCripto reporting, BRL funding, Mercado Bitcoin, Bitso, Coinbase and Binance.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/brazil",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/brazil",
      pt: "https://www.cryptosbeginner.com/pt/regioes/brasil",
      "x-default":
        "https://www.cryptosbeginner.com/regions/brazil",
    },
  },
};

const UPDATED = "2026-08-13";

const platforms = [
  {
    name: "Mercado Bitcoin",
    bestFor: "Brazilian users and BRL access",
    note:
      "A major Brazil-focused digital-asset platform with strong local relevance. Check current Banco Central authorisation, BRL funding, custody, fees and available products.",
    href: "https://www.mercadobitcoin.com.br",
    affiliate: false,
  },
  {
    name: "Bitso",
    bestFor: "Latin American users and stablecoins",
    note:
      "A regional exchange with Brazilian market relevance. Verify BRL funding, Pix support, custody, fees and the applicable Banco Central status.",
    href: "https://bitso.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Beginners and international spot access",
    note:
      "A familiar international exchange for simple purchases and custody. Compare BRL availability, conversion costs, fees and the entity serving Brazil.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Binance",
    bestFor: "Liquidity and broad token access",
    note:
      "A global venue frequently compared by Brazilian traders. Check BRL/Pix availability, Banco Central authorisation, product restrictions and custody.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful international trading tools and liquidity. Review BRL or USD conversion, fees, staking, withdrawals and Brazilian availability.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
];

export default function BrazilPage() {
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
                href="/pt/regioes/brasil"
                className="text-indigo-700 hover:underline"
              >
                Português
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 13, 2026</time> ·
              Cryptos Beginner editorial team
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Brazil 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Brazil has one of Latin America&apos;s most developed crypto
              markets. Law 14.478 created the legal framework for virtual
              assets, Banco Central do Brasil now authorises and supervises
              relevant virtual-asset service providers, and CVM remains
              responsible for tokens that qualify as securities. The new
              DeCripto system also changes how crypto activity is reported
              to Receita Federal.
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
              Mercado Bitcoin is the most natural Brazil-focused comparison
              for users who want BRL and local infrastructure. Bitso is a
              useful regional alternative, Coinbase often suits beginners,
              Binance is commonly compared for liquidity and broader token
              access, and Kraken suits active spot traders. Compare Pix or
              BRL funding, total fees, custody, withdrawals, Banco Central
              authorisation and DeCripto records.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Technical access is not enough. Check whether the exact legal
              entity and product are authorised to serve Brazilian
              customers.
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
                Brazil regulates crypto under Law 14.478/2022, known as the
                Marco Legal dos Ativos Virtuais.
              </li>

              <li>
                Banco Central do Brasil supervises and authorises relevant
                virtual-asset service providers, while CVM handles
                cryptoassets that qualify as securities or investment
                contracts.
              </li>

              <li>
                BCB regulations for crypto service providers took effect
                on February 2, 2026, with transition arrangements for
                existing firms.
              </li>

              <li>
                Mercado Bitcoin, Bitso, Coinbase, Binance and Kraken are
                important comparison points.
              </li>

              <li>
                DeCripto replaced the older crypto reporting model for
                relevant transactions from July 1, 2026.
              </li>

              <li>
                Brazil&apos;s substantive tax treatment and DeCripto reporting
                obligation should be kept separate: DeCripto is primarily
                a reporting framework, not automatically a new tax rate.
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
                  Banco Central, CVM and Law 14.478
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant Brazilian exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Brazilian crypto tax
                </a>
              </li>

              <li>
                <a href="#decripto" className="hover:underline">
                  DeCripto reporting
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  BRL, Pix and payment methods
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
            Banco Central, CVM and Brazil&apos;s crypto framework
          </h2>

          <p className="text-slate-700 mb-4">
            Law 14.478/2022 created Brazil&apos;s legal framework for virtual
            assets and virtual-asset service providers. It defines
            regulated activities such as exchange, transfer and custody
            for third parties.
          </p>

          <p className="text-slate-700 mb-4">
            Decree 11.563/2023 designated Banco Central do Brasil as the
            main regulator for virtual-asset service providers. Banco
            Central regulations that operationalised the framework became
            effective on February 2, 2026.
          </p>

          <p className="text-slate-700 mb-4">
            Banco Central focuses on service providers, payments,
            custody, foreign-exchange implications, governance, capital,
            cybersecurity and anti-money-laundering controls. CVM remains
            responsible where a token or arrangement qualifies as a
            security or investment contract.
          </p>

          <p className="text-slate-700 mb-4">
            Existing providers received a transition period under the new
            framework. Brazilian users should verify the current Banco
            Central register and identify whether an exchange is authorised,
            applying for authorisation or operating through another entity.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.bcb.gov.br/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banco Central do Brasil
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.br/cvm/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CVM
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.br/receitafederal/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Receita Federal
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevant crypto exchanges for Brazil
          </h2>

          <p className="text-slate-700 mb-6">
            Brazilian users commonly prioritise BRL deposits, Pix, local
            liquidity, stablecoins and clear tax records. The platforms
            below are comparison points rather than a fixed ranking.
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
            Brazilian crypto tax
          </h2>

          <p className="text-slate-700 mb-4">
            Brazil applies general tax rules to cryptoassets rather than
            relying on one simple universal crypto-tax category. The
            correct treatment depends on whether the activity is a private
            disposal, business activity, income, offshore investment or
            another type of transaction.
          </p>

          <p className="text-slate-700 mb-4">
            Selling crypto, swapping one token for another or spending
            crypto can create a taxable event. The applicable calculation
            can depend on the cost basis, proceeds, type of asset, monthly
            volume and whether the transaction occurred through a Brazilian
            exchange or another venue.
          </p>

          <p className="text-slate-700 mb-4">
            Current summaries describe progressive rates for certain
            capital gains, including 15%, 17.5%, 20% and 22.5% bands. The
            detailed rate and exemption treatment can depend on the legal
            route, monthly disposal value and whether foreign-asset rules
            apply.
          </p>

          <p className="text-slate-700 mb-4">
            Brazilian residents should separately analyse staking, mining,
            airdrops, lending, liquidity provision, DeFi and crypto received
            for work. Companies and professional traders may face different
            tax and accounting rules.
          </p>

          <p className="text-sm text-slate-700">
            Official tax reference:{" "}
            <a
              href="https://www.gov.br/receitafederal/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Receita Federal do Brasil
            </a>
          </p>
        </section>

        {/* DeCripto */}
        <section id="decripto" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DeCripto reporting from July 2026
          </h2>

          <p className="text-slate-700 mb-4">
            DeCripto is Brazil&apos;s new crypto-asset reporting framework
            administered through Receita Federal systems. It replaces the
            earlier reporting model based on Normative Instruction 1.888
            for the applicable operations beginning July 1, 2026.
          </p>

          <p className="text-slate-700 mb-4">
            Brazilian tax residents may need to report transactions carried
            out through foreign exchanges, decentralised platforms or P2P
            channels when the applicable monthly reporting threshold is
            exceeded. Current summaries identify R$35,000 as the key
            off-exchange monthly threshold, but users should check the
            current Receita Federal instructions.
          </p>

          <p className="text-slate-700 mb-4">
            DeCripto is primarily an information-reporting obligation. It
            does not automatically replace the substantive tax analysis for
            gains, income, offshore assets or business activity.
          </p>

          <p className="text-slate-700">
            Keep transaction IDs, BRL values, exchange statements, wallet
            addresses, fees, acquisition costs and dates. A platform export
            may not include every DeFi, P2P or self-custody transaction.
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            BRL, Pix and payment methods
          </h2>

          <p className="text-slate-700 mb-4">
            Brazil-focused platforms commonly offer BRL deposits through
            Pix or other local payment routes. International exchanges may
            use third-party payment providers or require conversion through
            another currency.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the full cost: Pix or bank-transfer fee, BRL conversion,
            spread, trading commission, withdrawal charge and blockchain
            network fee.
          </p>

          <p className="text-slate-700">
            Use payment accounts in your own name, retain Pix receipts and
            answer source-of-funds questions accurately. Avoid third-party
            accounts, off-platform OTC deals and instructions designed to
            bypass compliance controls.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody and consumer risk
          </h2>

          <p className="text-slate-700 mb-4">
            Banco Central authorisation can improve oversight, but it does
            not make crypto equivalent to a guaranteed bank deposit. Prices
            can fall, withdrawals can pause and platforms can suffer
            insolvency, hacking or operational failure.
          </p>

          <p className="text-slate-700 mb-4">
            Ask whether you own actual crypto, whether withdrawals are
            available, whether customer assets are segregated and whether
            the provider lends or reuses assets.
          </p>

          <p className="text-slate-700">
            Proof of Reserves can be one transparency input, but it does
            not automatically prove complete liability coverage or
            customer priority during insolvency.
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
            Practical comparison for Brazil
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
                    Brazilian checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Mercado Bitcoin
                  </td>

                  <td className="px-4 py-3">
                    Brazilian users and BRL access.
                  </td>

                  <td className="px-4 py-3">
                    Banco Central authorisation, Pix/BRL funding, custody
                    and fees.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.mercadobitcoin.com.br"
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
                    BRL/Pix support, entity, custody and reporting.
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
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Beginners and international spot access.
                  </td>

                  <td className="px-4 py-3">
                    BRL availability, conversion, EEA or foreign entity
                    and custody.
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
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    Liquidity and broad token access.
                  </td>

                  <td className="px-4 py-3">
                    Pix/BRL provider, Banco Central status, custody and
                    product restrictions.
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
                    BRL valuation, DeCripto records and recovery-phrase
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
            Frequently asked questions about crypto in Brazil
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Brazil?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Holding and trading cryptoassets is generally possible.
                Law 14.478 created a dedicated framework, while Banco
                Central regulates relevant providers and CVM supervises
                cryptoassets that qualify as securities.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is DeCripto?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                DeCripto is Receita Federal&apos;s crypto-asset reporting
                system. It changes how relevant crypto transactions are
                reported from July 1, 2026; it is a reporting framework and
                does not automatically replace the underlying tax rules.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Do Brazilian residents report foreign-exchange crypto
                transactions?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Brazilian residents may have DeCripto reporting obligations
                for transactions outside Brazilian exchanges when the
                applicable threshold is exceeded. Check current Receita
                Federal instructions and the relevant monthly limits.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Pix available for crypto purchases?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Some Brazil-focused platforms and payment partners support
                Pix or BRL deposits. Availability, limits and fees vary,
                so confirm who processes the payment before sending funds.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Mercado Bitcoin relevant for Brazilian users?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Mercado Bitcoin is a natural Brazil-focused comparison for
                BRL access and local infrastructure. Check its current
                Banco Central status, fees, custody, assets and withdrawals.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does Banco Central authorisation guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. Authorisation can reduce certain compliance and provider
                risks, but it cannot eliminate volatility, insolvency,
                hacking, phishing or private-key loss.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Brazil crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify Banco Central authorisation and check whether CVM rules
              apply to the product.
            </li>

            <li>
              Confirm who handles Pix or BRL deposits and whether the
              payment provider is authorised.
            </li>

            <li>
              Compare BRL conversion, spread, trading fees and withdrawal
              costs.
            </li>

            <li>
              Keep records for every purchase, sale, swap, reward and wallet
              transfer.
            </li>

            <li>
              Check whether DeCripto reporting applies to foreign exchange,
              DeFi or P2P activity.
            </li>

            <li>
              Treat staking, mining, lending, airdrops and business activity
              as potentially separate tax events.
            </li>

            <li>
              Use 2FA, unique passwords and offline recovery-phrase backups.
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
              How to choose as a Brazilian resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a provider that supports your preferred BRL or Pix
              route, explains its authorisation and gives you complete
              records. Separate tax calculation from DeCripto reporting,
              and keep long-term holdings away from unnecessary exchange
              risk.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.mercadobitcoin.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Mercado Bitcoin official
              </a>

              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bitso official
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
              <strong>Disclaimer:</strong> Educational only. Not financial,
              legal or tax advice. Brazilian crypto regulation, tax
              treatment and DeCripto reporting requirements can change.
              Verify current Banco Central, CVM and Receita Federal guidance
              before depositing funds, trading or filing a return. Some
              links are affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}