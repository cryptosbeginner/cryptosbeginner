import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in France 2026",
  description:
    "2026 France crypto exchange guide: AMF, ACPR, MiCA CASP authorisation, French crypto tax, Coinbase, Kraken, Coinhouse and safer exchange selection.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions/france",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/france",
      fr: "https://www.cryptosbeginner.com/fr/regions/france",
      "x-default":
        "https://www.cryptosbeginner.com/regions/france",
    },
  },
};

const UPDATED = "2026-08-10";

export default function FrancePage() {
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
                href="/fr/regions/france"
                className="text-indigo-700 hover:underline"
              >
                Français
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 10, 2026</time> · By
              Alex Rivera
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in France 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              France has completed its transition from the national PSAN
              regime to the European MiCA framework. The AMF supervises
              French crypto-asset providers, the ACPR remains relevant for
              prudential and financial-sector matters, and French users
              must consider both exchange authorisation and tax reporting.
              This guide compares the most relevant platforms and explains
              what French residents should check before depositing euros.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              TL;DR
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                France is inside the EU MiCA framework. The AMF is the
                main French authority for crypto-asset service provider
                authorisation and supervision.
              </li>

              <li>
                The old PSAN transition ended on 1 July 2026. Providers
                now need MiCA CASP authorisation or an eligible EU
                notification route to continue serving French clients.
              </li>

              <li>
                Relevant platforms include Coinhouse, Coinbase, Kraken,
                Bitpanda, Bitstamp and Crypto.com. Check the exact legal
                entity and current AMF or EU authorisation.
              </li>

              <li>
                French individuals generally calculate crypto gains using
                the portfolio-based formula and report disposals on Form
                2086 when applicable.
              </li>

              <li>
                The 2026 flat-tax rate is generally 31.4% for taxable
                private crypto gains, subject to the applicable rules,
                thresholds and personal circumstances.
              </li>

              <li>
                Staking, mining, airdrops, lending, DeFi and professional
                trading may have different tax treatment.
              </li>
            </ul>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Which exchange is best in France?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Coinhouse is an important France-focused comparison for
              users who value a local brand and French support. Coinbase
              and Kraken are strong international comparison points for
              euro funding and spot trading. Bitpanda, Bitstamp and
              Crypto.com may also be relevant depending on fees, products,
              custody and authorisation. The best choice depends on your
              preferred payment method, trading frequency, tax-reporting
              needs and whether you want self-custody.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              No platform should be treated as automatically safe because
              it is familiar or appears in a search result. Verify the
              provider&apos;s current authorisation and the exact product
              you intend to use.
            </p>
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
                  AMF, ACPR and MiCA
                </a>
              </li>

              <li>
                <a href="#platforms" className="hover:underline">
                  Relevant exchanges
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  French crypto tax
                </a>
              </li>

              <li>
                <a href="#funding" className="hover:underline">
                  EUR funding and withdrawals
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
            France, the AMF and the MiCA transition
          </h2>

          <p className="text-slate-700 mb-4">
            France created its national PSAN regime under the 2019 PACTE
            law. The regime required registration for certain crypto
            services and offered an optional form of authorisation before
            the EU-wide MiCA framework became fully operational.
          </p>

          <p className="text-slate-700 mb-4">
            MiCA now provides the main European framework for many
            crypto-asset services, including custody, operating a trading
            platform, exchanging cryptoassets, executing orders,
            transferring assets, providing advice and managing portfolios.
          </p>

          <p className="text-slate-700 mb-4">
            The AMF is the competent authority for French CASP
            authorisations. The ACPR remains relevant where the activity
            involves prudentially supervised financial institutions,
            payment services or other financial-sector responsibilities.
          </p>

          <p className="text-slate-700 mb-4">
            The French transitional period ended on 1 July 2026. A legacy
            PSAN registration is therefore not the same as a current MiCA
            CASP authorisation. Providers that did not obtain the required
            authorisation must cease the relevant French activity.
          </p>

          <p className="text-sm text-slate-700">
            Official references:{" "}
            <a
              href="https://www.amf-france.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              AMF
            </a>{" "}
            ·{" "}
            <a
              href="https://www.amf-france.org/en/news-publications/news-releases/crypto-assets-end-pacte-law-and-european-mica-regulation-transitional-period-establishes-new-role"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              AMF MiCA transition notice
            </a>{" "}
            ·{" "}
            <a
              href="https://www.esma.europa.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ESMA
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevant crypto exchanges for France
          </h2>

          <p className="text-slate-700 mb-6">
            These platforms are relevant comparison points because they
            serve European users, support euro funding, have a France
            presence or are commonly considered by French residents.
            Their products, fees, custody arrangements and permissions
            may differ by legal entity.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                France-focused platform
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinhouse
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                A France-focused crypto provider and natural comparison
                for users seeking French-language support and a local
                market presence. Check current MiCA status, fees, custody
                and available assets.
              </p>

              <a
                href="https://www.coinhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Official Coinhouse website →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Beginners and euro purchases
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                A familiar international platform for euro purchases and
                basic spot use. Compare spreads, Advanced fees, custody,
                withdrawals and the relevant EU entity.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Official Coinbase website →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Active spot traders
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Useful trading tools and broad spot-market access.
                Compare EUR pairs, maker/taker fees, staking and products
                available to French residents.
              </p>

              <a
                href="https://invite.kraken.com/JDNW/1blpzfsr"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Visit Kraken →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                European comparison
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitpanda and Bitstamp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Both are useful European comparison points for spot
                trading and euro funding. Use the official websites to
                verify current France availability, MiCA status, fees
                and custody.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.bitpanda.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitpanda official →
                </a>

                <a
                  href="https://www.bitstamp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitstamp official →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tax */}
        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            French crypto tax basics
          </h2>

          <p className="text-slate-700 mb-4">
            French tax residents generally calculate private crypto
            gains under the digital-asset rules in the General Tax Code.
            A taxable event can occur when crypto is sold for fiat, used
            to buy goods or services, or transferred in another taxable
            disposal.
          </p>

          <p className="text-slate-700 mb-4">
            The French calculation uses a portfolio-based formula rather
            than simply matching each sale to one individual purchase.
            The taxable gain generally compares the disposal price with
            the proportional acquisition cost of the overall portfolio.
          </p>

          <p className="text-slate-700 mb-4">
            For 2026, the flat tax, or PFU, is generally 31.4% on
            applicable private crypto gains: 12.8% income tax plus
            18.6% social levies. The annual disposal threshold is
            generally €305, subject to the detailed conditions and
            applicable tax rules.
          </p>

          <p className="text-slate-700 mb-4">
            Private investors generally use Form 2086 to calculate
            digital-asset gains and may need Form 3916-bis to declare
            certain foreign digital-asset accounts. Professional or
            habitual traders may fall under a different business-income
            regime.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, lending, DeFi and employment paid
            in crypto require separate analysis. Do not assume that every
            receipt is treated like a private capital gain.
          </p>

          <p className="text-sm text-slate-700">
            Official tax information:{" "}
            <a
              href="https://www.impots.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              impots.gouv.fr
            </a>
          </p>
        </section>

        {/* Funding */}
        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            EUR funding and withdrawals
          </h2>

          <p className="text-slate-700 mb-4">
            French residents commonly use SEPA transfers, cards or
            platform-specific payment methods to fund exchanges. Actual
            availability depends on the provider, bank, account history
            and compliance review.
          </p>

          <p className="text-slate-700 mb-4">
            Compare the complete route: deposit fee, spread, trading
            commission, withdrawal charge and network fee. A low
            advertised trading fee does not necessarily mean the lowest
            cost for a small euro purchase.
          </p>

          <p className="text-slate-700">
            Use payment accounts in your own name, keep transfer
            confirmations and do not misrepresent the purpose of a
            transaction. Exchanges and banks may request source-of-funds
            information, particularly for large or unusual transfers.
          </p>
        </section>

        {/* Comparison */}
        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for France
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
                    France checks
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinhouse
                  </td>

                  <td className="px-4 py-3">
                    France-focused service and French-language support.
                  </td>

                  <td className="px-4 py-3">
                    Confirm current MiCA authorisation, fees, custody and
                    supported assets.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinhouse.com"
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
                    Beginners and recurring euro purchases.
                  </td>

                  <td className="px-4 py-3">
                    Check EU entity, spread, custody and Form 2086-ready
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
                    EUR pairs, fees, staking and current MiCA status.
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
                    European spot-market comparison.
                  </td>

                  <td className="px-4 py-3">
                    Use official websites to verify France access,
                    custody, fees and authorisation.
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
            Frequently asked questions about crypto in France
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is cryptocurrency legal in France?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Yes. Holding and trading cryptoassets is generally legal,
                but providers serving French clients must follow the
                applicable MiCA authorisation or notification requirements.
                The old PSAN transition ended on 1 July 2026.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is the French crypto tax rate?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                The applicable flat-tax rate for many private crypto
                gains in 2026 is generally 31.4%, made up of income tax
                and social levies. The exact result depends on the
                transaction and taxpayer&apos;s circumstances.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is a crypto-to-crypto swap taxable in France?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Certain exchanges between cryptoassets can receive
                different treatment from sales for fiat or purchases of
                goods and services. Keep records for every swap and
                consult the current French tax rules before filing.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                What is Form 2086 used for?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Form 2086 is used to calculate taxable gains from digital
                assets for French tax reporting. Additional forms may be
                required for foreign digital-asset accounts.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is Coinhouse relevant for French residents?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Coinhouse is a France-focused comparison point with
                French-language market relevance. Users should still
                verify current MiCA status, fees, custody and supported
                products.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Does MiCA guarantee crypto safety?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regulates specified activities and imposes
                conduct and compliance requirements, but it cannot
                eliminate volatility, insolvency, hacks, phishing,
                smart-contract failures or private-key loss.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            France crypto exchange checklist
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verify the provider&apos;s MiCA authorisation or eligible EU
              notification route.
            </li>

            <li>
              Do not treat an old PSAN listing as equivalent to current
              CASP authorisation.
            </li>

            <li>
              Compare EUR deposit fees, spread, trading fees, withdrawal
              costs and network fees.
            </li>

            <li>
              Keep records for every purchase, disposal, swap, staking
              reward, airdrop, lending return and wallet transfer.
            </li>

            <li>
              Learn the French Form 2086 and foreign-account reporting
              requirements before filing.
            </li>

            <li>
              Use unique passwords, 2FA and offline recovery-phrase
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
              How to choose as a French resident
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Start with an authorised or clearly eligible European
              provider that supports euro funding and gives you complete
              transaction records. Keep long-term holdings separate from
              trading balances and plan tax reporting before you sell or
              swap.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.coinhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinhouse official
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
              financial, legal or tax advice. French crypto regulation and
              tax treatment can change. Verify current AMF, ACPR, MiCA and
              French tax guidance before depositing funds, trading or
              filing a return. Some links are affiliate links.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}