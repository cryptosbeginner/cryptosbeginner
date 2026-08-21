import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Ireland 2026",
  description:
    "2026 Ireland crypto exchange guide: Central Bank of Ireland MiCA rules, Irish crypto tax, Coinbase, Kraken, Bitstamp, Bitpanda and safe euro funding.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/ireland",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/ireland",
      "x-default":
        "https://www.cryptosbeginner.com/regions/ireland",
    },
  },
};

const UPDATED = "2026-08-21";

const platforms = [
  {
    name: "Coinbase",
    bestFor: "Beginners and recurring euro purchases",
    note:
      "A familiar international platform for simple purchases and spot trading. Compare the spread, Advanced fees, SEPA funding, custody and Irish tax records.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful trading tools and international liquidity. Check EUR pairs, maker/taker fees, staking availability and the entity serving Irish customers.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Bitstamp",
    bestFor: "Focused European spot trading",
    note:
      "A long-running European exchange with a comparatively focused product range. Verify Irish availability, EUR funding and the current EU authorisation.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
  {
    name: "Bitpanda",
    bestFor: "European retail investors",
    note:
      "A broad European retail platform with euro support. Compare spreads, custody, staking, tax reporting and the legal entity serving Ireland.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Crypto.com",
    bestFor: "Mobile users and wider products",
    note:
      "A large app ecosystem with multiple products. Rewards, staking, cards and stablecoin access may differ for Irish customers.",
    href: "https://go.cryptosbeginner.com/CryptoCom",
    affiliate: true,
  },
];

export default function IrelandPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 2026</time> · By
              Nora Whitfield
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Ireland 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Ireland is an EU crypto market operating under MiCA, with
              the Central Bank of Ireland acting as the national
              competent authority for crypto-asset service providers.
              Irish residents compare Coinbase, Kraken, Bitstamp,
              Bitpanda and Crypto.com for euro funding, spot trading and
              custody—but Revenue tax treatment and record-keeping are
              just as important as platform fees.
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
              Coinbase is often the simplest starting point for beginners,
              while Kraken is better suited to active spot traders who
              want more advanced tools. Bitstamp and Bitpanda are useful
              European alternatives, and Crypto.com may appeal to mobile
              users seeking a broader app ecosystem. Irish users should
              compare SEPA funding, total purchase cost, custody,
              withdrawals, tax records and the exact EU entity before
              opening an account.
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
                Ireland applies the EU Markets in Crypto-Assets
                Regulation, known as MiCA.
              </li>

              <li>
                The Central Bank of Ireland authorises and supervises
                relevant crypto-asset service providers and certain
                crypto-related issuers.
              </li>

              <li>
                Coinbase, Kraken, Bitstamp, Bitpanda and Crypto.com are
                relevant comparison points for Irish residents.
              </li>

              <li>
                Irish crypto disposals are generally subject to Capital
                Gains Tax at 33%, with a €1,270 annual personal exemption
                for chargeable gains.
              </li>

              <li>
                Staking, mining, airdrops, lending, salary paid in crypto
                and business trading can create income-tax obligations.
              </li>

              <li>
                Ireland has no simple long-term holding exemption like the
                German one-year private-sale rule.
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
                  MiCA and the Central Bank
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Irish crypto tax
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  SEPA funding and withdrawals
                </a>
              </li>

              <li>
                <a href="#custody" className="hover:underline">
                  Custody and safety
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
            MiCA and the Central Bank of Ireland
          </h2>

          <p className="text-slate-700 mb-4">
            Ireland applies the EU Markets in Crypto-Assets Regulation,
            or MiCA, as the main legal framework for many crypto-asset
            services. MiCA covers custody, operating trading platforms,
            exchanging cryptoassets, executing orders, transferring
            assets, providing advice and managing portfolios.
          </p>

          <p className="text-slate-700 mb-4">
            The Central Bank of Ireland is Ireland&apos;s national
            competent authority for MiCA. It authorises and supervises
            relevant crypto-asset service providers, with requirements
            covering governance, prudential safeguards, customer
            protection, operational resilience, anti-money-laundering
            controls and complaints handling.
          </p>

          <p className="text-slate-700 mb-4">
            The Central Bank also remains relevant for stablecoin issuers
            and financial institutions involved in crypto-related
            activity. A firm being available through an Irish website
            does not automatically mean every product is authorised in
            Ireland.
          </p>

          <p className="text-slate-700 mb-4">
            Irish residents should identify the exact legal entity,
            home regulator and service permission. A provider authorised
            in another EEA state may passport into Ireland, but that
            still does not eliminate the need to understand who holds the
            assets and where complaints are handled.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.centralbank.ie/regulation/industry-market-sectors/virtual-asset-service-providers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Central Bank of Ireland VASPs
            </a>{" "}
            ·{" "}
            <a
              href="https://www.centralbank.ie/consumer-hub/crypto-assets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Central Bank consumer information
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
            Relevant crypto exchanges for Ireland
          </h2>

          <p className="text-slate-700 mb-6">
            The following platforms are useful comparison points for
            Irish residents because they offer euro access, European
            market coverage or widely used trading tools. Availability,
            fees, staking, stablecoins and custody can vary by Irish
            customer profile and legal entity.
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
            Irish crypto tax: CGT and income tax
          </h2>

          <p className="text-slate-700 mb-4">
            Ireland generally treats cryptocurrency as a chargeable
            asset. Selling crypto for euros, swapping one cryptoasset for
            another, spending crypto on goods or services and making
            certain gifts can create a Capital Gains Tax event.
          </p>

          <p className="text-slate-700 mb-4">
            Capital Gains Tax is generally charged at 33% on net
            chargeable gains above the individual annual exemption of
            €1,270. Ireland does not generally reduce the rate simply
            because an asset was held for a longer period.
          </p>

          <p className="text-slate-700 mb-4">
            Gains are calculated using the relevant acquisition cost,
            allowable expenses and disposal proceeds. With multiple
            wallets and exchanges, users need complete transaction
            records rather than relying only on a yearly exchange
            statement.
          </p>

          <p className="text-slate-700 mb-4">
            Staking rewards, mining, airdrops, yield farming, lending
            returns and crypto received for employment or services may be
            taxable as income when received. A later disposal can create a
            separate CGT calculation based on the value used as the
            original cost.
          </p>

          <p className="text-slate-700 mb-4">
            If your activity amounts to a trade, profits may be taxed as
            trading income rather than private investment gains. The
            distinction depends on facts such as frequency, organisation,
            intention and commercial scale.
          </p>

          <p className="text-sm text-slate-700">
            Official tax reference:{" "}
            <a
              href="https://www.revenue.ie/en/additional-incomes/capital-gains-tax/what-is-capital-gains-tax/index.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Irish Revenue Capital Gains Tax
            </a>
          </p>
        </section>

        {/* Reporting */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DAC8 and crypto transaction reporting
          </h2>

          <p className="text-slate-700 mb-4">
            Ireland is implementing the EU DAC8 framework for
            crypto-asset reporting. Relevant crypto-asset service
            providers must collect and report specified customer and
            transaction information under the applicable rules.
          </p>

          <p className="text-slate-700 mb-4">
            The reporting framework is designed to improve cross-border
            tax transparency. Using an exchange established outside
            Ireland does not automatically make transactions invisible to
            Irish Revenue.
          </p>

          <p className="text-slate-700">
            Download exchange statements regularly and retain wallet
            records, euro valuations, fees, acquisition costs and
            disposal details. This is particularly important for DeFi,
            staking, self-custody and transfers between multiple
            platforms.
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            EUR deposits, SEPA and bank transfers
          </h2>

          <p className="text-slate-700 mb-4">
            Irish residents commonly use SEPA transfers, debit cards or
            other methods offered by an exchange. Faster funding options
            can be convenient but may carry a wider spread or additional
            processing fee.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the complete cost of buying crypto: deposit fee,
            card fee, spread, trading commission, withdrawal charge and
            network fee. For small recurring purchases, the spread can
            matter more than the advertised trading fee.
          </p>

          <p className="text-slate-700">
            Use a bank account in your own name, keep payment
            confirmations and answer source-of-funds questions accurately.
            Banks and exchanges can delay unusual transfers for fraud or
            anti-money-laundering checks.
          </p>
        </section>

        {/* Custody */}
        <section id="custody" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody and consumer protection
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA introduces standards for authorised providers, but it
            does not turn crypto into a guaranteed bank deposit. Prices
            can fall, withdrawals can be interrupted and providers can
            experience insolvency, hacks or operational failures.
          </p>

          <p className="text-slate-700 mb-4">
            Check whether the platform holds actual crypto for you,
            whether withdrawals are available, whether customer assets
            are segregated, whether assets may be lent or rehypothecated,
            and which legal entity is responsible for custody.
          </p>

          <p className="text-slate-700">
            Proof of Reserves is one transparency input—not proof that
            all liabilities are covered or that customers have priority
            in an insolvency.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              What is Proof of Reserves? →
            </Link>

            <Link
              href="/learn/how-to-check-exchange-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              How to check PoR →
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
            Practical comparison for Ireland
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
                    Irish checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Beginners and recurring euro purchases.
                  </td>

                  <td className="px-4 py-3">
                    Spread, Advanced fees, SEPA funding, custody and
                    transaction reports.
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
                    EUR pairs, fees, staking and current EEA entity.
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
                    Bitstamp / Bitpanda
                  </td>

                  <td className="px-4 py-3">
                    European spot-market alternatives.
                  </td>

                  <td className="px-4 py-3">
                    Verify Irish availability, custody, fees and current
                    EU authorisation.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.bitstamp.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Official websites →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Crypto.com
                  </td>

                  <td className="px-4 py-3">
                    Mobile users and wider app products.
                  </td>

                  <td className="px-4 py-3">
                    Check rewards, staking, cards, custody and Irish
                    product restrictions.
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
                    Self-custody wallet
                  </td>

                  <td className="px-4 py-3">
                    Long-term holdings and on-chain use.
                  </td>

                  <td className="px-4 py-3">
                    You control the keys, but tax records and security
                    remain your responsibility.
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
            Frequently asked questions about crypto in Ireland
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Ireland?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Holding and trading cryptoassets is generally possible.
                Providers serving Irish residents must comply with the
                applicable MiCA, AML and conduct requirements. Crypto is
                not the same as a guaranteed bank deposit.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is the crypto tax rate in Ireland?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Many private crypto disposals are subject to Capital
                Gains Tax at 33% after the individual annual exemption of
                €1,270. Staking, mining and other crypto income can be
                taxed under income-tax rules instead.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is crypto tax-free after one year in Ireland?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No general one-year crypto exemption applies in Ireland.
                A longer holding period does not automatically remove
                Capital Gains Tax from a private disposal.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are crypto-to-crypto swaps taxable?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Crypto-to-crypto exchanges can be disposals for Irish tax
                purposes. Keep the euro value, acquisition cost, date,
                fees and wallet details for every swap.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are staking rewards taxed in Ireland?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Staking rewards may be treated as income at receipt, with
                a later disposal potentially creating a separate Capital
                Gains Tax calculation. The facts of the arrangement
                matter.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does the Central Bank guarantee crypto holdings?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. Central Bank supervision and MiCA authorisation do
                not guarantee the value of cryptoassets or protect users
                from every custody, insolvency, fraud or market risk.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ireland crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Check the provider&apos;s MiCA authorisation or valid EEA
              passporting status.
            </li>

            <li>
              Identify the entity responsible for custody and customer
              complaints.
            </li>

            <li>
              Compare SEPA costs, card fees, spread, trading commissions
              and withdrawal charges.
            </li>

            <li>
              Keep records for every purchase, disposal, swap, reward,
              airdrop, lending return and wallet transfer.
            </li>

            <li>
              Remember that crypto-to-crypto swaps may create Irish CGT
              events.
            </li>

            <li>
              Treat staking, mining, airdrops and crypto compensation as
              potential income-tax matters.
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
              How to choose as an Irish resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a provider that supports your preferred SEPA
              funding route, supplies complete transaction records and
              has a verifiable MiCA or EEA authorisation. Plan your Revenue
              reporting before selling, swapping or earning crypto.
            </p>

            <div className="flex flex-wrap gap-3">
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

              <a
                href="https://www.bitstamp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bitstamp official
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Irish crypto regulation and
              tax treatment can change. Verify current Central Bank of
              Ireland, MiCA and Revenue guidance before depositing funds,
              trading or filing a tax return. Some links are affiliate
              links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}