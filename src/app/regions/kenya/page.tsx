import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Crypto Exchanges in Kenya 2026",
  description:
    "2026 Kenya guide: VASP Act and gazetted regulations, CBK and CMA split, KRA tax after the 3% DAT repeal, and how residents actually use P2P and global exchanges.",
};

const UPDATED = "2026-08-21";

export default function KenyaPage() {
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
              Best Crypto Exchanges in Kenya 2026
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Kenya has moved from Central Bank cautions and a blunt
              3% digital asset tax to a full Virtual Asset Service
              Providers regime. The CBK and CMA now split licensing,
              KRA wants transaction records, and crypto is still not
              legal tender. This guide covers the rules and how
              Kenyans actually fund and trade.
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
                The VASP Act and gazetted VASP Regulations 2026
                require licences for exchanges, wallets, stablecoin
                issuers and related firms serving Kenyan customers,
                including offshore platforms with no local office.
              </li>
              <li>
                Dual regulators: CBK for payments, wallets and
                stablecoins; CMA for exchanges, brokers, ICOs and
                tokenisation. Existing operators have a transition
                window into November 2026.
              </li>
              <li>
                Crypto is property, not legal tender. Banks remain
                cautious, so P2P, M-Pesa-linked rails and global
                platforms still dominate day-to-day use.
              </li>
              <li>
                The 3% Digital Asset Tax was repealed from 1 July
                2025. Current mix: 10% excise on VASP fees, 15% CGT
                on many investor gains, and income tax for frequent
                traders. Finance Bill 2026 adds KRA reporting by
                VASPs.
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
                  VASP Act and dual regulators
                </a>
              </li>
              <li>
                <a href="#reality" className="hover:underline">
                  How Kenyans actually trade
                </a>
              </li>
              <li>
                <a href="#tax" className="hover:underline">
                  KRA tax after DAT repeal
                </a>
              </li>
              <li>
                <a href="#funding" className="hover:underline">
                  Funding and M-Pesa rails
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
            VASP Act, gazetted rules and CBK–CMA split
          </h2>
          <p className="text-slate-700 mb-4">
            Kenya now requires a licence for anyone offering virtual
            asset services in or from Kenya. Draft VASP Regulations
            went to public consultation in March 2026. The Virtual
            Asset Service Providers Regulations, 2026 were later
            gazetted, setting capital, governance, AML, cybersecurity,
            client-asset segregation and reporting duties.
          </p>
          <p className="text-slate-700 mb-4">
            Oversight is split. The Central Bank of Kenya covers
            virtual asset-to-fiat conversion, wallets, payment-style
            services and stablecoin issuers. The Capital Markets
            Authority covers exchanges, brokers, advisers, managers,
            ICOs and tokenisation. Firms without a Kenyan office can
            still be in scope if they serve Kenyan customers.
          </p>
          <p className="text-slate-700 mb-4">
            Existing platforms targeting Kenya generally have until
            around 4 November 2026 to be licensed or stop. Crypto is
            not legal tender. CBK has long warned that digital assets
            sit outside deposit insurance and banking-law protection.
          </p>
          <p className="text-slate-700 text-sm">
            External references:{" "}
            <a
              href="https://www.centralbank.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Central Bank of Kenya
            </a>{" "}
            ·{" "}
            <a
              href="https://www.cma.or.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Capital Markets Authority
            </a>{" "}
            ·{" "}
            <a
              href="https://www.treasury.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              National Treasury
            </a>
          </p>
        </section>

        <section id="reality" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Reality on the ground: P2P and global platforms
          </h2>
          <p className="text-slate-700 mb-4">
            Licensing is new. Most Kenyans still use global exchanges
            with P2P, M-Pesa-linked merchants, and informal OTC. Binance
            P2P, Bybit and similar venues remain common because they
            match shilling liquidity that banks will not touch directly.
          </p>
          <p className="text-slate-700 mb-4">
            That pattern is under pressure. Once the November 2026
            window closes, unlicensed services to Kenyan residents
            sit outside the legal perimeter. Expect more KYC, frozen
            P2P ads, and platforms either licensing, restricting Kenya,
            or going fully grey. Treat any app that still onboards
            Kenyans with zero local compliance as higher risk.
          </p>
        </section>

        <section id="tax" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tax: DAT gone, CGT and VASP reporting in
          </h2>
          <p className="text-slate-700 mb-4">
            Finance Act 2023’s 3% Digital Asset Tax on transfer value
            was repealed by Finance Act 2025 from 1 July 2025. It was
            widely criticised as a tax on turnover, not profit.
          </p>
          <p className="text-slate-700 mb-4">
            The 2026 mix is closer to ordinary tax law. VASPs charge
            10% excise on their own service fees, not on trade
            notional. Many individual investors face 15% capital gains
            tax on net profit at disposal. Frequent, organised trading
            can be taxed as income on the 10% to 35% personal scale.
            Crypto is treated as property for tax purposes.
          </p>
          <p className="text-slate-700 mb-4">
            Finance Bill 2026 would require VASPs to file annual
            returns with KRA covering Kenyan customer identities and
            transaction histories. That is reporting, not a new levy.
            False entries and non-filing carry proposed fines and
            possible jail terms. Keep records even if your exchange
            has not started sending files yet.
          </p>
        </section>

        <section id="funding" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Funding: M-Pesa, P2P and bank friction
          </h2>
          <p className="text-slate-700 mb-4">
            Direct bank-to-exchange rails are still limited because
            CBK never treated crypto as money. Kenyans typically fund
            via P2P against M-Pesa or bank transfer, then withdraw
            crypto to a wallet or another venue. Escrow on major P2P
            boards is safer than off-platform chat, but name mismatches,
            fake SMS and chargeback-style disputes remain common.
          </p>
          <p className="text-slate-700 mb-4">
            Licensed VASPs should eventually offer cleaner
            shilling conversion under CBK payment rules. Until those
            products are live and trusted, size P2P tickets small,
            stay inside platform chat, and never treat a merchant’s
            personal number as an official rail.
          </p>
        </section>

        <section id="comparison" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practical comparison for Kenya residents
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
                    Kenya notes
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Licensed / licensing VASPs
                  </td>
                  <td className="px-4 py-3">
                    Longer-term KES on-ramp once products go live.
                  </td>
                  <td className="px-4 py-3">
                    Must meet CMA or CBK capital, AML and custody
                    rules. Check whether a firm is actually in the
                    licence pipeline.
                  </td>
                  <td className="px-4 py-3">
                    Confirm CMA/CBK status, not marketing copy.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Global exchanges with P2P
                  </td>
                  <td className="px-4 py-3">
                    Liquidity, futures, today’s shilling access.
                  </td>
                  <td className="px-4 py-3">
                    Still the default. Kenya access may tighten after
                    the November 2026 licence deadline. Not CBK
                    deposit-protected.
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
                    Bybit and similar
                  </td>
                  <td className="px-4 py-3">
                    Active traders who want P2P plus derivatives.
                  </td>
                  <td className="px-4 py-3">
                    Useful for trading capital. Keep savings off the
                    exchange.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Bybit"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      Bybit →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Informal OTC / off-app P2P
                  </td>
                  <td className="px-4 py-3">
                    Last-resort shilling conversion.
                  </td>
                  <td className="px-4 py-3">
                    Highest fraud and legal risk. Avoid unless you
                    fully understand escrow and disputes.
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href="/learn/how-p2p-escrow-works"
                      className="text-indigo-700 hover:underline"
                    >
                      P2P escrow →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="checklist" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Safety checklist for Kenya crypto users
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Crypto is not legal tender and not covered by bank
              deposit protection.
            </li>
            <li>
              Prefer P2P inside a major platform’s escrow. Never move
              to WhatsApp or a personal till first.
            </li>
            <li>
              The 3% DAT is gone. Still budget for 15% CGT or income
              tax if you trade often, plus 10% excise baked into
              platform fees.
            </li>
            <li>
              Expect KRA to receive VASP customer and transaction
              files. Keep your own records.
            </li>
            <li>
              After November 2026, unlicensed services to Kenyans are
              a red flag, not a feature.
            </li>
            <li>
              Withdraw long-term holdings to a hardware wallet. Use
              our{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                security checklist
              </Link>{" "}
              and{" "}
              <Link href="/methodology" className="text-indigo-700">
                methodology
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              How to choose as a Kenya resident
            </h2>
            <p className="text-sm text-slate-700 mb-3">
              Use a liquid global venue with P2P for now, size
              positions as trading capital, keep savings in self
              custody, and watch which firms actually get CMA or CBK
              licences.
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
                href="https://go.cryptosbeginner.com/Bybit"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Bybit
              </a>
              <a
                href="https://go.cryptosbeginner.com/OKX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                OKX
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational only. Not
              financial, legal or tax advice. Virtual asset activity
              in Kenya is subject to the VASP Act, CBK, CMA and KRA
              rules that are still being enforced. Some links are
              affiliate links. Check current licence status and tax
              law before depositing funds.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}