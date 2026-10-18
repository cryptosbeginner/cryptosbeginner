import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Sweden 2026",
  description:
    "2026 Sweden crypto exchange guide: Finansinspektionen, MiCA, Safello, Coinbase, Kraken, Swedish crypto tax, K4 reporting and safe SEK funding.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/sweden",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/sweden",
      sv: "https://www.cryptosbeginner.com/sv/regioner/sverige",
      "x-default":
        "https://www.cryptosbeginner.com/regions/sweden",
    },
  },
};

const UPDATED = "2026-08-14";

const platforms = [
  {
    name: "Safello",
    bestFor: "Swedish users and local market access",
    note:
      "A Sweden-focused crypto platform with local market relevance. Check its current MiCA permissions, SEK funding, fees, spreads, custody and available assets.",
    href: "https://www.safello.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Beginners and recurring purchases",
    note:
      "A familiar international exchange for simple spot purchases. Compare euro funding, card costs, spread, custody and the EEA entity serving Sweden.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful trading tools and international liquidity. Review euro funding, maker/taker fees, staking and products available to Swedish residents.",
    href: "https://invite.kraken.com/JDNW/1blpzfsr",
    affiliate: true,
  },
  {
    name: "Bitpanda",
    bestFor: "European retail investors",
    note:
      "A broad European retail platform. Verify Swedish availability, SEK or euro funding, spreads, custody and current EEA authorisation.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Bitstamp",
    bestFor: "Focused European spot trading",
    note:
      "A long-running European exchange useful for comparison. Check Swedish availability, euro funding, fees and current MiCA status.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function SwedenPage() {
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
                href="/sv/regioner/sverige"
                className="text-indigo-700 hover:underline"
              >
                Svenska
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 21, 2026</time> · By
              Elise Morgan
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Sweden 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Sweden is an EU crypto market operating under MiCA, with
              Finansinspektionen as the national competent authority.
              Swedish residents compare local providers such as Safello
              with international platforms such as Coinbase and Kraken.
              The practical questions are whether SEK funding is
              available, how Swedish tax rules apply, who holds the
              assets and whether the provider is authorised to serve
              Swedish customers.
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
              Safello is the most natural local comparison for Swedish
              users who want Sweden-focused support and payment options.
              Coinbase is often easier for beginners, Kraken suits active
              spot traders, and Bitpanda or Bitstamp offer additional
              European comparisons. Your choice should depend on SEK or
              euro funding, total cost, tax records, custody, withdrawals
              and the exact product you want to use.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Verify the legal entity and current MiCA status before
              depositing. A platform being accessible from Sweden does
              not automatically mean every product is authorised or
              available to Swedish residents.
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
                Crypto is legal to own and trade in Sweden, but it is
                not legal tender or a guaranteed bank deposit.
              </li>

              <li>
                Finansinspektionen, commonly called FI, supervises
                relevant MiCA crypto-asset service providers in Sweden.
              </li>

              <li>
                Safello became the first Swedish company to receive a
                MiCA crypto-asset service-provider authorisation.
              </li>

              <li>
                Coinbase, Kraken, Bitpanda and Bitstamp are useful
                international comparison points, subject to current
                Swedish availability.
              </li>

              <li>
                Private crypto disposals are generally taxed at 30%.
                Swedish rules commonly allow only 70% of a crypto loss as
                a deduction.
              </li>

              <li>
                Individual disposals are generally reported through the
                K4 form. Staking, mining and business activity may need
                separate treatment.
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
                  MiCA and Finansinspektionen
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant Swedish exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Swedish crypto tax
                </a>
              </li>

              <li>
                <a href="#reporting" className="hover:underline">
                  DAC8 reporting
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  SEK, euro and payment methods
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
            MiCA and Finansinspektionen
          </h2>

          <p className="text-slate-700 mb-4">
            Sweden applies the EU Markets in Crypto-Assets Regulation,
            or MiCA. The framework covers services such as custody,
            operating a trading platform, exchanging cryptoassets,
            executing orders, transferring assets, providing advice and
            managing portfolios.
          </p>

          <p className="text-slate-700 mb-4">
            Finansinspektionen, Sweden&apos;s Financial Supervisory
            Authority, is the national competent authority for relevant
            MiCA authorisations and supervision. Its role includes
            oversight of regulated crypto services, conduct, governance
            and applicable anti-money-laundering requirements.
          </p>

          <p className="text-slate-700 mb-4">
            Sweden used a relatively short transition route from earlier
            national arrangements to MiCA. From 1 July 2026, providers
            generally need MiCA authorisation or a valid EEA passporting
            route to continue offering regulated crypto services in
            Sweden.
          </p>

          <p className="text-slate-700 mb-4">
            Safello received authorisation from Finansinspektionen for
            services including trading, custody and transfer of
            cryptoassets. Other platforms may serve Swedish users from
            another EEA country, so the home regulator and legal entity
            should always be checked.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.fi.se/en/payments/apply-for-authorisation/crypto-assets-and-crypto-asset-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Finansinspektionen crypto assets
            </a>{" "}
            ·{" "}
            <a
              href="https://www.skatteverket.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Skatteverket
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
            Relevant crypto exchanges for Sweden
          </h2>

          <p className="text-slate-700 mb-6">
            Swedish users often prioritise SEK access, Swish or local
            banking convenience. International exchanges may instead use
            euro funding through SEPA. Compare payment availability,
            conversion costs, custody and the entity serving Sweden.
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
            Swedish crypto tax and K4 reporting
          </h2>

          <p className="text-slate-700 mb-4">
            Skatteverket generally treats cryptocurrency as an “other
            asset” rather than ordinary currency. Selling crypto,
            exchanging one token for another or using crypto to pay for
            goods and services can create a taxable disposal.
          </p>

          <p className="text-slate-700 mb-4">
            Capital gains are generally taxed at 30%. Swedish rules
            commonly allow only 70% of a crypto loss as a deduction,
            subject to the applicable calculation rules. There is no
            general one-year holding exemption.
          </p>

          <p className="text-slate-700 mb-4">
            Individual disposals are generally reported using the K4
            form, section D for other assets. The calculation can be
            complicated when you use multiple exchanges, wallets,
            stablecoins or decentralised applications.
          </p>

          <p className="text-slate-700 mb-4">
            Swedish taxpayers generally need to calculate the cost basis
            for each cryptocurrency using the applicable average-cost
            method. Do not assume that a platform&apos;s own profit figure
            is enough for your tax return.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, lending, liquidity provision and
            crypto received as salary or payment may be taxed differently.
            Frequent or organised activity can also raise questions about
            business taxation.
          </p>

          <p className="text-sm text-slate-700">
            Official tax reference:{" "}
            <a
              href="https://www.skatteverket.se/privat/skatter/vardepapperkryptovalutaochandrainvesteringar/kryptovaluta.4.233f91de16a57d9b90d2b.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Skatteverket cryptocurrency guidance
            </a>
          </p>
        </section>

        {/* DAC8 */}
        <section id="reporting" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DAC8 and Swedish crypto reporting
          </h2>

          <p className="text-slate-700 mb-4">
            Sweden has implemented European reporting and information-
            exchange rules for cryptoassets. Relevant crypto-asset
            service providers must collect and report specified customer
            and transaction information.
          </p>

          <p className="text-slate-700 mb-4">
            The first reporting period covers calendar year 2026, with
            the first reports to Skatteverket expected under the Swedish
            timetable in 2027. This does not create a separate DAC8 tax
            return for individuals; the reporting obligation sits with
            the provider.
          </p>

          <p className="text-slate-700">
            Your own declaration obligation remains. Save exchange
            exports, wallet history, SEK or euro values, fees, cost basis
            and disposal dates throughout the year.
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            SEK, euro, Swish and payment methods
          </h2>

          <p className="text-slate-700 mb-4">
            Sweden-focused platforms may offer SEK or Swish-related
            payment options, while international exchanges commonly rely
            on euros through SEPA. Availability changes by platform,
            bank, account history and compliance checks.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the full conversion route. A low trading fee can be
            offset by a wide SEK-to-euro conversion spread, card fee,
            instant-buy spread or withdrawal charge.
          </p>

          <p className="text-slate-700">
            Use payment accounts in your own name, keep confirmations and
            answer source-of-funds questions accurately. Banks and
            exchanges can delay unusual transactions for fraud or
            anti-money-laundering reviews.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody and consumer risk
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA introduces standards for authorised providers, but it
            does not make crypto a guaranteed bank deposit. Prices can
            fall, withdrawals can be interrupted and a platform can
            experience insolvency, hacking or operational failure.
          </p>

          <p className="text-slate-700 mb-4">
            Ask whether you own actual crypto, whether withdrawals are
            available, whether customer assets are segregated and whether
            the provider lends or rehypothecates assets.
          </p>

          <p className="text-slate-700">
            Proof of Reserves is one transparency signal. It does not
            automatically prove that every liability is covered or that
            customers receive priority in an insolvency.
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

            <Link
              href="/wallets"
              className="text-indigo-700 hover:underline"
            >
              Wallets guide →
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for Sweden
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
                    Swedish checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Safello
                  </td>

                  <td className="px-4 py-3">
                    Swedish users and local payment access.
                  </td>

                  <td className="px-4 py-3">
                    Check FI authorisation, SEK/Swish support, fees,
                    spreads and custody.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.safello.com"
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
                    Euro funding, spread, EEA entity, custody and tax
                    records.
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
                    Euro pairs, fees, staking and current EEA permission.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://invite.kraken.com/JDNW/1blpzfsr"
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
                    Bitpanda / Bitstamp
                  </td>

                  <td className="px-4 py-3">
                    European spot alternatives.
                  </td>

                  <td className="px-4 py-3">
                    Verify Sweden access, custody, fees and current EEA
                    authorisation.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.bitpanda.com/en"
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
                    Self-custody
                  </td>

                  <td className="px-4 py-3">
                    Long-term holdings and on-chain use.
                  </td>

                  <td className="px-4 py-3">
                    K4 records, SEK valuation and recovery-phrase
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
            Frequently asked questions about crypto in Sweden
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Sweden?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Yes. Owning and trading cryptoassets is generally
                possible. Crypto is not legal tender, and providers must
                comply with applicable MiCA, AML and conduct requirements.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                How is crypto taxed in Sweden?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Private crypto gains are generally taxed at 30%. Selling,
                swapping or spending crypto can create a taxable disposal.
                Swedish rules commonly allow only 70% of a crypto loss as a
                deduction.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is the Swedish K4 form?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                K4 is used to report certain disposals of other assets,
                including crypto-related disposals. The correct
                calculation depends on the transaction and taxpayer&apos;s
                circumstances.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is crypto tax-free after one year in Sweden?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No general one-year exemption applies. Swedish residents
                should calculate disposals under the applicable Skatteverket
                rules regardless of how long the crypto was held.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Safello relevant for Swedish users?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Safello is a natural Swedish-market comparison because it
                focuses on local users and holds Swedish MiCA
                authorisation according to current public information.
                Check its current product scope, fees, custody and payment
                methods before using it.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does MiCA guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regulates specified services but cannot eliminate
                volatility, insolvency, hacks, phishing, smart-contract
                failures or loss of private keys.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Sweden crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify the provider&apos;s FI authorisation or valid EEA
              passporting status.
            </li>

            <li>
              Check the exact entity responsible for custody and customer
              complaints.
            </li>

            <li>
              Compare SEK conversion, euro funding, spread, trading fees
              and withdrawal charges.
            </li>

            <li>
              Keep records for every purchase, sale, swap, reward and
              wallet transfer.
            </li>

            <li>
              Prepare K4 information instead of relying only on an
              exchange&apos;s annual summary.
            </li>

            <li>
              Treat staking, mining, airdrops and DeFi as potentially
              different tax events.
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
              How to choose as a Swedish resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a provider that supports your preferred SEK or
              euro funding route, provides complete transaction records and
              has a verifiable MiCA or EEA authorisation. Keep long-term
              holdings separate from trading funds and organise K4 records
              throughout the year.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.safello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Safello official
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
                href="https://invite.kraken.com/JDNW/1blpzfsr"
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
              financial, legal or tax advice. Swedish crypto regulation
              and tax treatment can change. Verify current
              Finansinspektionen and Skatteverket guidance before
              depositing funds, trading or filing a K4 return. Some links
              are affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}