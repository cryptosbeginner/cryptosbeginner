import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Crypto Exchanges in Ethiopia 2026: Laws, Risks and Mining",
  description:
    "2026 Ethiopia crypto guide: National Bank of Ethiopia restrictions, Birr P2P prohibition, exchange and custody risks, mining rules and tax uncertainty.",
};

const UPDATED = "2026-08-21";

export default function EthiopiaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 2026</time> · By
              Alex Rivera
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Crypto Exchanges in Ethiopia 2026: Laws, Risks and Mining
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Ethiopia is currently a prohibition-first crypto market.
              The National Bank of Ethiopia (NBE) has prohibited
              unauthorised virtual-asset use, exchange, transfer,
              custody and related services, while Birr-denominated P2P
              crypto trading is expressly prohibited. Mining is a
              separate, licensed activity and should not be confused
              with permission to trade or spend crypto.
            </p>
          </div>
        </section>

        {/* Warning */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
            <h2 className="text-xl font-bold text-red-950 mb-3">
              Important legal warning
            </h2>

            <p className="text-sm leading-7 text-red-950">
              This page is educational and does not recommend buying,
              selling, transferring or using crypto in Ethiopia.
              Technical access to an offshore website, VPN or P2P
              marketplace does not create NBE authorisation. Obtain
              written local legal advice before undertaking any
              virtual-asset activity.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              TL;DR
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                The NBE prohibits unauthorised virtual-asset activity.
                The current policy is not a normal exchange-licensing
                market.
              </li>

              <li>
                The July 2026 NBE notice covers fiat-to-crypto exchange,
                crypto-to-crypto exchange, transfers, custody and
                financial services connected with token issuance.
              </li>

              <li>
                Birr-denominated P2P trading is prohibited unless the NBE
                expressly authorises it.
              </li>

              <li>
                No general retail crypto exchange is publicly identified
                as authorised to operate for Ethiopian users.
              </li>

              <li>
                Crypto mining has a distinct licensing and energy
                framework. A mining permit is not permission to operate
                an exchange or use crypto for payments.
              </li>

              <li>
                Ethiopia has no clearly published retail crypto-tax
                regime. Do not interpret that uncertainty as a tax-free
                or lawful trading environment.
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
                <a href="#legal-status" className="hover:underline">
                  Current legal status
                </a>
              </li>

              <li>
                <a href="#nbe-notices" className="hover:underline">
                  NBE notices and prohibited activity
                </a>
              </li>

              <li>
                <a href="#p2p" className="hover:underline">
                  Birr P2P and offshore access
                </a>
              </li>

              <li>
                <a href="#payments" className="hover:underline">
                  Payments and foreign exchange
                </a>
              </li>

              <li>
                <a href="#mining" className="hover:underline">
                  Mining is different
                </a>
              </li>

              <li>
                <a href="#tax" className="hover:underline">
                  Tax uncertainty
                </a>
              </li>

              <li>
                <a href="#checklist" className="hover:underline">
                  Risk checklist
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Legal status */}
        <section
          id="legal-status"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ethiopia&apos;s current crypto status
          </h2>

          <p className="text-slate-700 mb-4">
            Ethiopia does not currently have a permissive retail
            framework under which ordinary residents can freely open a
            locally authorised crypto exchange account. The National
            Bank of Ethiopia remains the central authority for money,
            payment systems, foreign exchange and related financial
            activity.
          </p>

          <p className="text-slate-700 mb-4">
            The current approach is prohibition-first. Virtual-asset use
            and dealing remain prohibited unless the NBE expressly
            authorises the activity under the applicable legal framework.
            The NBE has also stated that it is working toward a longer
            term digital-asset framework, but that future framework is
            not the same thing as a licence available today.
          </p>

          <p className="text-slate-700">
            For readers comparing African markets, Ethiopia should
            therefore not be presented alongside licensed VASP markets
            such as Kenya, Ghana or South Africa. It belongs in a
            restricted-jurisdiction category.
          </p>
        </section>

        {/* NBE notices */}
        <section
          id="nbe-notices"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            NBE notices and prohibited activities
          </h2>

          <p className="text-slate-700 mb-4">
            On 27 February 2026, the NBE specifically warned that
            Birr-denominated P2P cryptocurrency transactions on
            exchanges, trading platforms or similar services were
            prohibited unless expressly authorised.
          </p>

          <p className="text-slate-700 mb-4">
            A July 2026 public notice broadened the description of
            prohibited virtual-asset dealing. It reportedly includes:
          </p>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>Exchanging virtual assets for fiat currency.</li>
            <li>Exchanging one virtual asset for another.</li>
            <li>Transferring virtual assets.</li>
            <li>Providing custody or administration services.</li>
            <li>
              Participating in or providing financial services relating
              to virtual-asset issuance or sale.
            </li>
          </ul>

          <p className="mt-4 text-slate-700">
            This matters because the restriction is broader than simply
            banning crypto payments. It reaches the basic functions that
            make an exchange, wallet service or OTC desk operate.
          </p>

          <p className="mt-4 text-sm text-slate-700">
            Primary authority:{" "}
            <a
              href="https://www.nbe.gov.et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              National Bank of Ethiopia
            </a>
          </p>
        </section>

        {/* P2P */}
        <section id="p2p" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Birr P2P and offshore exchange access
          </h2>

          <p className="text-slate-700 mb-4">
            Some Ethiopians previously used Birr P2P markets on global
            exchanges to buy or sell stablecoins. The February 2026 NBE
            notice directly targeted that route. Binance later suspended
            ETB P2P trading after regulatory pressure, although platform
            access itself may change over time.
          </p>

          <p className="text-slate-700 mb-4">
            An offshore exchange may still load from an Ethiopian
            connection or permit account access. That does not establish
            legality, and the exchange may restrict withdrawals,
            geoblock users or request extensive source-of-funds
            evidence.
          </p>

          <p className="text-slate-700 mb-4">
            Off-platform OTC trading is especially risky. It can expose
            users to fraud, payment disputes, foreign-exchange problems,
            account investigations and loss of funds with no practical
            dispute mechanism.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h3 className="text-lg font-semibold text-amber-950 mb-2">
              P2P is not a legal workaround
            </h3>

            <p className="text-sm leading-7 text-amber-950">
              Escrow can reduce counterparty risk, but it does not
              override an NBE prohibition. A P2P marketplace changes the
              settlement mechanism; it does not create regulatory
              approval.
            </p>

            <Link
              href="/learn/how-p2p-escrow-works"
              className="mt-3 inline-flex text-sm font-semibold text-indigo-700 hover:underline"
            >
              Learn how P2P escrow works →
            </Link>
          </div>
        </section>

        {/* Payments */}
        <section id="payments" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Payments, Birr and foreign exchange
          </h2>

          <p className="text-slate-700 mb-4">
            The Ethiopian birr remains the country&apos;s recognised
            domestic currency. Crypto and stablecoins cannot be assumed
            to function as lawful payment instruments, settlement assets
            or substitutes for authorised foreign-exchange channels.
          </p>

          <p className="text-slate-700 mb-4">
            Banks and payment providers may review transfers associated
            with unlicensed crypto activity. Accounts can be delayed,
            restricted or investigated where transaction patterns appear
            inconsistent with a customer&apos;s profile or applicable
            foreign-exchange and AML rules.
          </p>

          <p className="text-slate-700">
            Do not use another person&apos;s account, disguise the purpose
            of a transfer or rely on instructions to bypass banking
            controls. Those steps can increase both financial and legal
            exposure.
          </p>
        </section>

        {/* Mining */}
        <section id="mining" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Mining is a separate activity
          </h2>

          <p className="text-slate-700 mb-4">
            Ethiopia has explored and licensed certain crypto-mining
            activity, especially through its digital-infrastructure and
            energy framework. Mining operators may need approvals related
            to investment, electricity, land, data infrastructure and
            technology.
          </p>

          <p className="text-slate-700 mb-4">
            Mining authorisation should not be interpreted as permission
            for a retail exchange, wallet provider, OTC desk or payment
            service. The operator must follow the exact scope of every
            licence and approval it receives.
          </p>

          <p className="text-slate-700">
            Mining also carries practical risks: electricity availability,
            equipment imports, taxation, foreign-exchange restrictions,
            changes to energy policy and the possibility that issued
            coins cannot lawfully be sold or transferred in Ethiopia.
          </p>
        </section>

        {/* Tax */}
        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tax treatment is uncertain
          </h2>

          <p className="text-slate-700 mb-4">
            Ethiopia does not currently publish a clear retail
            crypto-tax regime with a dedicated individual capital-gains
            rate, filing form or recognised exchange-reporting system.
          </p>

          <p className="text-slate-700 mb-4">
            That uncertainty should not be read as a tax exemption.
            General income-tax rules may be relevant to mining income,
            business revenue, employment compensation or other taxable
            receipts. Mining companies may also face ordinary business
            tax and other obligations depending on their structure.
          </p>

          <p className="text-slate-700 mb-4">
            Anyone with substantial crypto-related income should obtain
            advice from an Ethiopian tax professional. Keep records of
            acquisition, disposal, mining revenue, operating expenses,
            wallets, exchange statements and the source of all funds.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">
              Do not rely on “no crypto tax” claims
            </h3>

            <p className="text-sm leading-7 text-slate-700">
              Where the underlying transaction is prohibited or
              unrecognised, the absence of a crypto-specific tax form
              does not make the proceeds lawful or immune from scrutiny.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section
          id="comparison"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical options for Ethiopia residents
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Option
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Why people consider it
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Ethiopia-specific risk
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Offshore centralised exchanges
                  </td>
                  <td className="px-4 py-3">
                    Liquidity, token access and trading tools.
                  </td>
                  <td className="px-4 py-3">
                    No publicly identified general NBE retail approval;
                    access, withdrawals and accounts may be restricted.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Birr-denominated P2P
                  </td>
                  <td className="px-4 py-3">
                    Local settlement and stablecoin access.
                  </td>
                  <td className="px-4 py-3">
                    Prohibited unless expressly authorised by the NBE.
                    P2P escrow does not remove the legal risk.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Self-custody and DEXes
                  </td>
                  <td className="px-4 py-3">
                    On-chain access without a central account.
                  </td>
                  <td className="px-4 py-3">
                    Transfers and crypto-to-crypto exchange are included
                    in the broad NBE prohibition. Key-loss and smart
                    contract risks also remain.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Licensed mining
                  </td>
                  <td className="px-4 py-3">
                    Industrial-scale digital-asset production.
                  </td>
                  <td className="px-4 py-3">
                    Requires separate approvals and does not authorise
                    exchange, custody or crypto payments.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Risk checklist for Ethiopia
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Treat virtual-asset exchange, transfers, custody and
              related services as prohibited unless expressly authorised
              by the NBE.
            </li>

            <li>
              Do not use Birr P2P as a supposed legal workaround.
            </li>

            <li>
              Do not assume that Binance, another offshore exchange, a
              VPN or a DEX is approved for Ethiopian residents.
            </li>

            <li>
              Separate mining permissions from exchange, custody and
              payment permissions.
            </li>

            <li>
              Avoid third-party bank accounts, disguised transfers,
              off-platform OTC deals and cash settlement with unknown
              counterparties.
            </li>

            <li>
              Keep full records and obtain Ethiopian legal and tax advice
              before moving substantial crypto-related funds.
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
              </Link>{" "}
              before relying on any platform review.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              What should Ethiopian beginners do?
            </h2>

            <p className="text-sm text-slate-700">
              Start with education rather than a deposit. Understand the
              NBE position, avoid unauthorised Birr P2P and crypto
              services, and speak to a qualified Ethiopian lawyer before
              trading, mining commercially or moving crypto-related funds.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/learn/how-p2p-escrow-works"
                className="bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700"
              >
                Understand P2P escrow
              </Link>

              <Link
                href="/wallets"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Understand wallets
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Ethiopia&apos;s virtual
              asset policy is restrictive and evolving. This page does
              not recommend using an exchange, P2P market, wallet,
              mining operation or decentralised application. Seek
              qualified Ethiopian legal and tax advice before acting.
              Some links elsewhere on the site may be affiliate links.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}