import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Turkey 2026",
  description:
    "2026 Turkey guide: SPK licensing, MASAK rules, payment ban, tax reality and how residents actually use domestic and global exchanges.",
};

const UPDATED = "2026-08-21";

export default function TurkeyPage() {
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
              Best Crypto Exchanges in Turkey 2026
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Crypto in Turkey is legal to own and trade, but cannot be
              used for payments. Exchanges and other service providers
              now sit under a statutory licensing regime run by the
              Capital Markets Board (SPK), with MASAK enforcing
              banking-grade AML rules. This guide explains that
              framework, tax reality and how Turkish residents actually
              use domestic and global platforms.
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
                Crypto is legal to own and trade, but using it to pay for
                goods and services is banned by Central Bank regulation.
              </li>
              <li>
                Law No. 7518 brought crypto-asset service providers under
                SPK licensing. Domestic platforms like BtcTurk, Paribu,
                Bitexen, Icrypex and Binance TR operate under a transition
                regime while licenses are processed.
              </li>
              <li>
                MASAK enforces strict AML and Travel Rule requirements:
                KYC, source-of-funds checks and detailed data for larger
                transfers.
              </li>
              <li>
                As of mid-2026, there is no dedicated crypto-specific tax
                law in force. Occasional individual gains are widely
                treated as untaxed; business-scale trading and income are
                taxed as commercial income at 15–40% under general rules.
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
                  Legal and regulatory framework
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:underline">
                  Payment ban and what it means
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline">
                  Exchanges Turkish residents actually use
                </a>
              </li>
              <li>
                <a href="#masak" className="hover:underline">
                  MASAK, AML and Travel Rule
                </a>
              </li>
              <li>
                <a href="#tax" className="hover:underline">
                  Tax reality for individuals and businesses
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:underline">
                  Practical comparison table
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:underline">
                  Safety checklist
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Framework */}
        <section id="framework" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Legal and regulatory framework in Turkey
          </h2>
          <p className="text-slate-700 mb-4">
            Turkey&apos;s core crypto framework comes from Law No. 7518,
            published in the Official Gazette on 2 July 2024. The law
            amends Capital Markets Law No. 6362 and formally defines
            crypto-asset service providers (&quot;platforms&quot;,
            custodians and related entities) as regulated Capital Markets
            Board (SPK) institutions. These providers now require
            establishment approval and operating authorisation from SPK
            before serving Turkish residents.
          </p>
          <p className="text-slate-700 mb-4">
            Secondary communiqués issued in March 2025 set detailed rules
            on minimum paid-in capital, governance, shareholder
            qualifications and conduct. Operating as a crypto-asset
            service provider without authorisation is a criminal offence.
            Licensed custody institutions started to receive final
            operating licences in 2026, while trading platforms continue
            under a transition regime as their applications are examined.
          </p>
          <p className="text-slate-700 text-sm">
            External references: SPK/CMB official communiqués and Law No.
            7518; MASAK AML rules and Travel Rule guidance.
          </p>
        </section>

        {/* Payment ban */}
        <section id="payments" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Payment ban: crypto not allowed for everyday purchases
          </h2>
          <p className="text-slate-700 mb-4">
            Since April 2021, the Central Bank of the Republic of Turkey
            (CBRT) has prohibited using crypto assets, directly or
            indirectly, to pay for goods and services. Payment service
            providers cannot build products that let customers pay in
            crypto, and merchants cannot accept crypto as a means of
            payment. You must convert to Turkish lira (TRY) on a platform
            and then pay through the banking system if you want to spend
            value.
          </p>
          <p className="text-slate-700 mb-4">
            The ban does not criminalise holding or trading crypto. It
            simply confines crypto to investment and trading roles rather
            than day-to-day payments. This distinction matters: Turkish
            law recognises crypto assets as regulated instruments in the
            capital markets sense, while keeping them outside the legal
            tender perimeter.
          </p>
        </section>

        {/* Platforms used */}
        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchanges Turkish residents actually use
          </h2>
          <p className="text-slate-700 mb-4">
            Turkey has a strong domestic exchange scene. Local platforms
            such as BtcTurk, Paribu, Bitexen, ICRYPEX and Binance TR serve
            millions of users and submitted licence applications under
            Law No. 7518&apos;s transition regime. These platforms offer
            TRY pairs, mobile apps and deep liquidity in popular coins.
          </p>
          <p className="text-slate-700 mb-4">
            At the same time, Turkish residents often use global
            exchanges such as Binance (global), OKX and Bybit via
            offshore entities. These platforms provide derivatives,
            broader token lists and specialised features, but they do not
            operate as fully authorised Turkish CASPs and sit outside
            direct SPK investor protection. Many users maintain a domestic
            platform for fiat on-ramp and tax-friendly visibility, then
            move a portion of funds to offshore platforms or self-custody
            wallets for specific strategies.
          </p>
        </section>

        {/* MASAK / AML / Travel Rule */}
        <section id="masak" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            MASAK, AML rules and the Travel Rule
          </h2>
          <p className="text-slate-700 mb-4">
            Turkey&apos;s Financial Crimes Investigation Board (MASAK)
            treats crypto-asset service providers as full AML/CFT obliged
            entities. Platforms must perform know-your-customer (KYC)
            checks, monitor transactions and file suspicious transaction
            reports. Updates aligned with FATF&apos;s Travel Rule require
            CASPs to collect and transmit originator and beneficiary data
            for transfers, with stricter requirements for transfers at or
            above 15,000 TRY.
          </p>
          <p className="text-slate-700 mb-4">
            In practice, this means Turkish exchanges ask for detailed ID
            information, enforce descriptive transfer notes and can apply
            temporary holds on withdrawals when originator/beneficiary
            data is incomplete or patterns look high risk. Accounts can be
            frozen while MASAK investigates. For ordinary users, the
            takeaway is simple: expect bank-like scrutiny on large or
            unusual flows and keep clean records.
          </p>
        </section>

        {/* Tax */}
        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tax reality for individuals and businesses (2026)
          </h2>
          <p className="text-slate-700 mb-4">
            As of mid-2026, Turkey has debated several crypto-specific
            tax proposals, including a small transaction levy and
            withholding on gains, but those articles were withdrawn in
            Parliament and have not entered into force. There is no
            dedicated crypto tax statute in effect. Crypto-asset service
            providers remain subject to ordinary corporate income tax on
            net profits and general banking and insurance transaction tax
            rules where applicable.
          </p>
          <p className="text-slate-700 mb-4">
            For individuals, occasional investment-scale trading gains
            have generally been treated as outside the securities
            withholding regime and widely untaxed in practice. However,
            continuous, organised, profit-seeking trading and brokerage
            can be reclassified as commercial income (ticari kazanç) under
            general income tax rules, taxed at progressive rates that run
            from around 15% up to 40% for high brackets. Crypto received
            as salary or business payment is taxed as ordinary income.
          </p>
          <p className="text-slate-700 text-sm">
            Because the special regime is not yet final, anyone operating
            at business scale or with substantial gains should treat tax
            as an evolving area and obtain local advice each year.
          </p>
        </section>

        {/* Comparison table */}
        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for Turkey residents
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Option
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Best for
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Turkey notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Domestic SPK-track exchanges (BtcTurk, Paribu, Binance TR,
                    etc.)
                  </td>
                  <td className="px-4 py-3">
                    TRY on-ramp, mainstream coins, local support.
                  </td>
                  <td className="px-4 py-3">
                    Operating under the new CASP regime&apos;s transition
                    period; subject to MASAK AML rules and future SPK
                    licensing decisions.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Global offshore exchanges
                  </td>
                  <td className="px-4 py-3">
                    Derivatives, deeper liquidity, niche tokens.
                  </td>
                  <td className="px-4 py-3">
                    Serve Turkish users at their own risk, outside direct SPK
                    investor protections; tax and AML treatment depends on
                    usage pattern.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    DEXes and on-chain tools
                  </td>
                  <td className="px-4 py-3">
                    Self-custody swaps, DeFi and meme ecosystems.
                  </td>
                  <td className="px-4 py-3">
                    No accounts or KYC, but fully exposed to smart contract and
                    liquidity risks. Regulatory focus is on service providers,
                    not direct users.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety checklist */}
        <section id="checklist" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Safety checklist for crypto users in Turkey
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Remember that crypto cannot be used directly for payments.
              Convert to TRY on a platform and pay via bank channels
              instead.
            </li>
            <li>
              Prefer platforms that are in the SPK process and take MASAK
              AML rules seriously; be cautious with unregistered services.
            </li>
            <li>
              Keep long-term holdings on reputable hardware wallets rather
              than leaving savings on exchanges.
            </li>
            <li>
              Treat frequent or high-volume trading as potentially taxable
              commercial income and get advice accordingly.
            </li>
            <li>
              Use our{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                exchange security checklist
              </Link>{" "}
              and{" "}
              <Link
                href="/security/exchange-incidents"
                className="text-indigo-700"
              >
                incidents timeline
              </Link>{" "}
              before committing size to any platform.
            </li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not financial,
              legal or tax advice. Crypto-asset activity in Turkey is
              subject to evolving regulation and enforcement by the
              Capital Markets Board and MASAK, and tax treatment depends
              on individual circumstances. Always seek local professional
              advice before depositing funds, operating a service or
              relying on any position described here.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}