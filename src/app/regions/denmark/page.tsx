import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Denmark 2026",
  description:
    "2026 Denmark crypto exchange guide: Finanstilsynet, MiCA, Coinify, Lunar Block, Coinbase, Kraken, Danish crypto tax and safe DKK funding.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/denmark",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/denmark",
      "x-default":
        "https://www.cryptosbeginner.com/regions/denmark",
    },
  },
};

const UPDATED = "2026-08-21";

const platforms = [
  {
    name: "Coinify",
    bestFor: "Danish and European crypto infrastructure",
    note:
      "A Denmark-based digital-asset provider with local market relevance. Check its current MiCA services, fees, custody model and retail availability.",
    href: "https://www.coinify.com",
    affiliate: false,
  },
  {
    name: "Lunar Block",
    bestFor: "Users seeking crypto through a Nordic finance app",
    note:
      "A Danish/Nordic comparison point connected with the Lunar ecosystem. Confirm custody, withdrawals, available assets and the exact legal entity.",
    href: "https://www.lunar.app",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Beginners and recurring euro purchases",
    note:
      "A familiar international exchange for simple spot purchases. Compare EUR funding, spread, custody and the EEA entity serving Denmark.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Experienced spot traders",
    note:
      "Useful trading tools and international liquidity. Review EUR funding, maker/taker fees, staking and products available to Danish residents.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Crypto.com",
    bestFor: "Mobile users and broader products",
    note:
      "A broad app ecosystem with several products. Rewards, staking, cards and stablecoin access can differ for Danish customers.",
    href: "https://go.cryptosbeginner.com/CryptoCom",
    affiliate: true,
  },
  {
    name: "Bitstamp",
    bestFor: "Focused European spot trading",
    note:
      "A long-running European exchange useful for comparison. Verify Danish availability, EUR funding, fees and current MiCA authorisation.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function DenmarkPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 2026</time> · By
              Mikkel Sørensen
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in Denmark 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Denmark is an EU crypto market operating under MiCA, with
              Finanstilsynet as the national competent authority. Danish
              residents compare local providers such as Coinify and Lunar
              Block with global exchanges such as Coinbase and Kraken.
              The biggest practical differences are DKK or EUR funding,
              Danish tax treatment, custody and whether the provider is
              authorised to serve Danish customers.
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
              Coinify and Lunar Block are useful Denmark-focused
              comparison points. Coinbase is often easier for beginners,
              while Kraken suits active spot traders who want a more
              advanced interface. Crypto.com may appeal to mobile users,
              and Bitstamp is another European spot-market alternative.
              Compare DKK-to-EUR conversion, total fees, custody,
              withdrawals and tax records before choosing.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              A MiCA authorisation reduces certain regulatory risks, but it
              does not guarantee crypto prices, platform solvency,
              uninterrupted withdrawals or protection from private-key
              loss.
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
                Denmark applies the EU Markets in Crypto-Assets
                Regulation, known as MiCA.
              </li>

              <li>
                Finanstilsynet, the Danish Financial Supervisory Authority,
                is the national competent authority for relevant MiCA
                crypto services.
              </li>

              <li>
                Local comparison points include Coinify and Lunar Block.
                Coinbase, Kraken, Crypto.com and Bitstamp are relevant
                international alternatives.
              </li>

              <li>
                Denmark generally taxes private crypto gains as personal
                income rather than using a simple flat capital-gains
                system.
              </li>

              <li>
                Crypto-to-crypto swaps, sales and spending can create
                taxable events. FIFO records are important.
              </li>

              <li>
                DAC8-related reporting increases the information that
                exchanges may provide to Danish tax authorities.
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
                  MiCA and Finanstilsynet
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant Danish exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Danish crypto tax
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  DKK, EUR and payment methods
                </a>
              </li>

              <li>
                <a href="#comparison" className="hover:underline">
                  Practical comparison
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
            MiCA and Finanstilsynet
          </h2>

          <p className="text-slate-700 mb-4">
            Denmark applies MiCA as the main framework for many
            crypto-asset services. The rules cover custody, operating
            trading platforms, exchanging cryptoassets, executing orders,
            transferring assets, providing advice and managing portfolios.
          </p>

          <p className="text-slate-700 mb-4">
            Finanstilsynet is the Danish national competent authority for
            relevant MiCA authorisations and supervision. Its role
            includes oversight of regulated firms, conduct, governance,
            consumer information and applicable anti-money-laundering
            controls.
          </p>

          <p className="text-slate-700 mb-4">
            Denmark used the EU transition period for existing providers
            that met the applicable conditions. That transition ended on
            1 July 2026, meaning a Denmark-facing provider generally
            needs a MiCA authorisation or a valid EEA passporting route.
          </p>

          <p className="text-slate-700 mb-4">
            A provider may be authorised in another EEA state and serve
            Denmark through passporting. Danish users should identify the
            legal entity, home regulator, custody arrangement and complaint
            process before depositing.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.finanstilsynet.dk/Engelsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Finanstilsynet
            </a>{" "}
            ·{" "}
            <a
              href="https://www.esma.europa.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ESMA
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
            Relevant crypto exchanges for Denmark
          </h2>

          <p className="text-slate-700 mb-6">
            Danish users often want DKK convenience, but many international
            platforms operate through EUR and SEPA. The platforms below
            are comparison points rather than permanent rankings. Fees,
            products and regulatory status can change by entity.
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
            Danish crypto tax
          </h2>

          <p className="text-slate-700 mb-4">
            Denmark generally treats private cryptocurrency gains as
            personal income rather than applying a simple flat capital-
            gains tax. The exact tax result depends on the asset, the
            transaction, the taxpayer&apos;s purpose and whether the activity
            is private or commercial.
          </p>

          <p className="text-slate-700 mb-4">
            Selling crypto for Danish kroner or euros, swapping one token
            for another and spending crypto can all create a taxable
            disposal. A long holding period does not automatically create
            a general tax exemption.
          </p>

          <p className="text-slate-700 mb-4">
            Danish calculations generally use the FIFO principle:
            first-in, first-out. When the same asset was acquired at
            different times and prices, the earliest units are generally
            matched first. This makes complete transaction history
            essential.
          </p>

          <p className="text-slate-700 mb-4">
            Crypto gains can be taxed at high marginal personal-income
            rates, depending on the taxpayer&apos;s total income and
            municipality. Loss deductions may not mirror gain taxation,
            so users should not estimate their final liability simply by
            applying one percentage to their profit.
          </p>

          <p className="text-slate-700 mb-4">
            Mining, staking, lending, airdrops, liquidity provision and
            crypto received for work may be taxed under different income
            rules. Frequent and organised trading can also be treated as
            business activity.
          </p>

          <p className="text-sm text-slate-700">
            Official tax reference:{" "}
            <a
              href="https://skat.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Skattestyrelsen
            </a>
          </p>
        </section>

        {/* Reporting */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DAC8 and Danish reporting
          </h2>

          <p className="text-slate-700 mb-4">
            European DAC8 rules increase the reporting obligations of
            relevant crypto-asset service providers. Exchanges and other
            covered platforms must collect specified customer and
            transaction information.
          </p>

          <p className="text-slate-700 mb-4">
            The purpose is to improve cross-border tax transparency.
            Using an exchange outside Denmark does not automatically make
            the activity invisible to Skattestyrelsen.
          </p>

          <p className="text-slate-700">
            Reporting by a platform does not replace your own filing
            responsibility. Keep exchange exports, wallet history,
            DKK/EUR valuations, fees, cost basis and disposal dates.
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DKK, EUR and payment methods
          </h2>

          <p className="text-slate-700 mb-4">
            Denmark-focused platforms may offer DKK-related payment
            options, while global exchanges commonly rely on EUR through
            SEPA. Availability depends on the provider, bank, account
            history and compliance checks.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the full cost of converting and buying: DKK-to-EUR
            exchange rate, payment fee, spread, trading commission,
            withdrawal charge and network fee.
          </p>

          <p className="text-slate-700">
            Use a bank account in your own name, retain confirmations and
            answer source-of-funds questions accurately. Banks and
            exchanges can delay unusual transfers while performing fraud
            and anti-money-laundering checks.
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
            provider can experience insolvency, hacking or operational
            failure.
          </p>

          <p className="text-slate-700 mb-4">
            Ask whether you own actual crypto, whether withdrawals are
            available, whether customer assets are segregated and whether
            the provider lends or rehypothecates assets.
          </p>

          <p className="text-slate-700">
            Proof of Reserves can provide one transparency signal, but it
            does not independently prove that all liabilities are covered
            or that customers have priority during insolvency.
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
            Practical comparison for Denmark
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
                    Danish checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinify
                  </td>

                  <td className="px-4 py-3">
                    Danish and European crypto infrastructure.
                  </td>

                  <td className="px-4 py-3">
                    Current MiCA services, custody, fees and retail
                    availability.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinify.com"
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
                    Lunar Block
                  </td>

                  <td className="px-4 py-3">
                    Nordic app-based access.
                  </td>

                  <td className="px-4 py-3">
                    Custody, withdrawals, legal entity and supported
                    assets.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.lunar.app"
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
                    EUR funding, spread, EEA entity, custody and tax
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
                    EUR pairs, fees, staking and current EEA permission.
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
                    Self-custody
                  </td>

                  <td className="px-4 py-3">
                    Long-term holdings and on-chain use.
                  </td>

                  <td className="px-4 py-3">
                    FIFO records, DKK valuations and recovery-phrase
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
            Frequently asked questions about crypto in Denmark
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in Denmark?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Owning and trading cryptoassets is generally possible.
                Crypto is not the same as legal tender or a guaranteed
                bank deposit. Providers must follow applicable MiCA, AML
                and conduct requirements.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                How is crypto taxed in Denmark?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Denmark generally taxes private crypto gains as personal
                income rather than using a simple flat capital-gains
                regime. Exact treatment depends on the activity, asset and
                taxpayer&apos;s circumstances.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are crypto-to-crypto swaps taxable in Denmark?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                A swap can be a taxable event. Keep the DKK value, date,
                cost basis, fees and asset quantities for each transaction.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is FIFO in Danish crypto tax?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                FIFO means first-in, first-out. The earliest acquired units
                are generally matched first when calculating the cost basis
                of a disposal, subject to the applicable Danish rules.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Coinify relevant for Danish users?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Coinify is a relevant Denmark-based comparison point.
                Check its current MiCA permissions, custody, fees and
                whether its particular product is available to retail
                customers.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does MiCA guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regulates specified services but cannot eliminate
                volatility, insolvency, hacking, phishing, smart-contract
                failures or loss of private keys.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Denmark crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify the provider&apos;s MiCA authorisation or valid EEA
              passporting status.
            </li>

            <li>
              Identify the entity responsible for custody and complaints.
            </li>

            <li>
              Compare DKK conversion, EUR funding, spread, trading fees
              and withdrawal charges.
            </li>

            <li>
              Keep records for every purchase, sale, swap, reward and
              wallet transfer.
            </li>

            <li>
              Use FIFO-compatible records and do not rely only on an
              exchange&apos;s annual profit summary.
            </li>

            <li>
              Treat staking, mining, lending and airdrops as potentially
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
              How to choose as a Danish resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with a provider that supports your preferred DKK or
              EUR payment route, gives you complete transaction records
              and has a verifiable MiCA or EEA authorisation. Organise
              FIFO records from the first transaction and keep long-term
              holdings separate from active trading funds.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.coinify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinify official
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
              financial, legal or tax advice. Danish crypto regulation
              and tax treatment can change. Verify current Finanstilsynet
              and Skattestyrelsen guidance before depositing funds,
              trading or filing a return. Some links are affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}