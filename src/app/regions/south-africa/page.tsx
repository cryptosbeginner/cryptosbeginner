import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in South Africa 2026",
  description:
    "2026 South Africa guide: FSCA CASP licences, SARS crypto tax and CARF, SARB cross-border draft rules, and how residents use VALR, Luno and global exchanges.",
};

const UPDATED = "2026-08-21";

export default function SouthAfricaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 2026</time> · By
              Alex Rivera
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges in South Africa 2026
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              South Africa treats crypto as a financial product, not legal
              tender. The FSCA licenses crypto-asset service providers,
              SARS taxes gains and now receives CASP reports under CARF,
              and the Reserve Bank is drafting cross-border crypto rules.
              This guide explains that framework and how residents
              actually use local and global platforms.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              TL;DR
            </h2>
            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                Crypto has been a financial product under FAIS since
                October 2022. CASP licensing started 1 June 2023; by
                January 2026 the FSCA had approved about 300 of 512
                applications.
              </li>
              <li>
                Local licensed platforms such as VALR and Luno are the
                default rand on-ramps. Global exchanges are still used
                for extra liquidity and derivatives, at higher
                regulatory and tax-reporting risk.
              </li>
              <li>
                SARS taxes crypto as an asset. Frequent trading is
                ordinary income (up to 45%); long-term holdings can
                fall under CGT at an effective rate of up to 18%.
                CARF reporting started 1 March 2026.
              </li>
              <li>
                A draft SARB Crypto Asset Manual (August 2026) would
                put cross-border crypto flows under exchange control,
                with individual allowances and bans on some
                non-custodial and corporate routes.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              On this page
            </h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#framework" className="hover:underline">
                  FSCA and CASP framework
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline">
                  Local vs global platforms
                </a>
              </li>
              <li>
                <a href="#tax" className="hover:underline">
                  SARS tax and CARF
                </a>
              </li>
              <li>
                <a href="#crossborder" className="hover:underline">
                  Exchange control draft
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:underline">
                  Practical comparison
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

        <section id="framework" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            FSCA framework: crypto as a financial product
          </h2>
          <p className="text-slate-700 mb-4">
            In October 2022 the Financial Sector Conduct Authority
            declared crypto assets financial products under the FAIS
            Act. From 1 June 2023, businesses that give advice,
            intermediary services or investment management in crypto
            generally need Crypto Asset Service Provider (CASP)
            authorisation as part of an FSP licence. A standard FSP
            licence does not automatically cover crypto.
          </p>
          <p className="text-slate-700 mb-4">
            By January 2026 the FSCA had received 512 CASP applications,
            approved about 300, declined 14, seen 121 withdrawn and
            still had dozens under review, plus investigations into
            unlicensed activity. Licensing covers financial services in
            crypto. It does not make crypto legal tender, and the
            Reserve Bank still treats rand as the only legal currency.
          </p>
          <p className="text-slate-700 text-sm">
            External references:{" "}
            <a
              href="https://www.fsca.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              FSCA
            </a>{" "}
            ·{" "}
            <a
              href="https://www.sars.gov.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              SARS
            </a>{" "}
            ·{" "}
            <a
              href="https://www.resbank.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              South African Reserve Bank
            </a>
          </p>
        </section>

        <section id="platforms" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Platforms South Africans actually use
          </h2>
          <p className="text-slate-700 mb-4">
            Licensed local exchanges such as VALR and Luno are the
            usual rand on-ramp: EFT deposits, ZAR pairs, local support
            and FSCA-track compliance. They are slower and often more
            expensive than global venues, but they sit inside the
            domestic perimeter that SARS and the FSCA can actually
            supervise.
          </p>
          <p className="text-slate-700 mb-4">
            Many active traders still move funds to global platforms
            such as Binance, OKX or Bybit for deeper books, more
            tokens and derivatives. Those accounts sit outside FSCA
            CASP protection. Combined with SARS CARF reporting and
            the SARB draft on cross-border crypto, treating offshore
            platforms as a long-term vault is a poor fit for most
            residents.
          </p>
        </section>

        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            SARS tax, CARF and record-keeping
          </h2>
          <p className="text-slate-700 mb-4">
            SARS treats crypto as an intangible asset, not currency.
            Simply holding does not create tax. Selling, swapping,
            spending, earning staking or mining rewards, and
            crypto-to-crypto trades can all be taxable events. There
            is no special crypto exemption.
          </p>
          <p className="text-slate-700 mb-4">
            Frequent or business-like trading is usually ordinary
            income at marginal rates of 18% to 45%. Longer-term
            investment disposals can be capital gains: 40% inclusion,
            R50,000 annual exclusion, effective CGT up to about 18%
            for individuals. SARS published a Draft Guide to the
            Taxation of Crypto Assets on 1 July 2026 and set up a
            Crypto Revenue Augmentation Unit to audit wallets using
            CARF data.
          </p>
          <p className="text-slate-700 mb-4">
            CARF took effect 1 March 2026. Licensed CASPs report
            certain crypto transactions to SARS; individuals still
            declare activity on normal income tax returns (ITR12).
            First international exchanges of that data are expected
            around 2027. Assume SARS can see local-exchange activity
            even if you never convert to rand.
          </p>
        </section>

        <section id="crossborder" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchange control: draft SARB crypto manual
          </h2>
          <p className="text-slate-700 mb-4">
            On 3 August 2026, SARB and National Treasury published a
            draft Crypto Asset Manual for Cross-Border Activities for
            comment until 30 September 2026. It is not final law yet,
            but it signals that moving crypto offshore via authorised
            CASPs would fall under Currency and Exchanges Act rules.
          </p>
          <p className="text-slate-700 mb-4">
            The draft would allow only natural persons (not companies
            or trusts) to do cross-border crypto, apply existing
            individual allowances (about R2 million single
            discretionary and R10 million foreign capital per year),
            treat transfers to offshore CASPs or non-custodial wallets
            as cross-border, and prohibit inbound transfers from
            non-custodial wallets to domestic authorised CASPs. Watch
            this closely before relying on self-custody plus offshore
            exchange hops.
          </p>
        </section>

        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for South African residents
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
                    South Africa notes
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    VALR / Luno and other FSCA-track CASPs
                  </td>
                  <td className="px-4 py-3">
                    Rand on-ramp, simple spot, local support.
                  </td>
                  <td className="px-4 py-3">
                    Inside FAIS/CASP and SARS CARF reporting. Better
                    consumer-protection story than unlicensed apps.
                  </td>
                  <td className="px-4 py-3">
                    Check current licence status on the FSCA register
                    before depositing.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Binance / OKX / Bybit
                  </td>
                  <td className="px-4 py-3">
                    Liquidity, derivatives, wider token lists.
                  </td>
                  <td className="px-4 py-3">
                    Offshore. Not FSCA-protected. Cross-border and tax
                    reporting risk is rising under CARF and the SARB
                    draft.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/binance"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      Binance →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Self-custody and DEXes
                  </td>
                  <td className="px-4 py-3">
                    Long-term holdings and on-chain activity.
                  </td>
                  <td className="px-4 py-3">
                    Swaps can still be taxable. Draft SARB rules may
                    restrict some wallet-to-CASP flows. Hardware
                    wallets remain the safer vault than any exchange.
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 hover:underline"
                    >
                      Wallets guide →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="checklist" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Safety checklist for South African users
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Prefer FSCA-authorised CASPs for rand deposits. Confirm
              the licence, not just marketing claims.
            </li>
            <li>
              Declare crypto on your ITR12. CARF means SARS can match
              local-exchange data even if you never cash out.
            </li>
            <li>
              Keep records of every sale, swap, spend and reward. SARS
              treats crypto-to-crypto as a disposal.
            </li>
            <li>
              Do not treat offshore exchanges as savings accounts.
              Size positions for trading capital only.
            </li>
            <li>
              Watch the SARB draft before moving large amounts to
              non-custodial wallets via local CASPs.
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
              <Link href="/methodology" className="text-indigo-700">
                methodology
              </Link>{" "}
              before committing size.
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              How to choose as a South African resident
            </h2>
            <p className="text-sm text-slate-700 mb-3">
              Start with a licensed local CASP for ZAR, keep long-term
              holdings in a hardware wallet, and only use global
              exchanges for products you cannot get at home. Plan for
              SARS from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Binance
              </a>
              <a
                href="https://go.cryptosbeginner.com/OKX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                OKX
              </a>
              <a
                href="https://go.cryptosbeginner.com/Bybit"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Bybit
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Crypto-asset services in
              South Africa are overseen by the FSCA, SARS and the
              Reserve Bank. Some links are affiliate links. Always
              check current licences, tax rules and exchange-control
              notices before depositing funds.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}