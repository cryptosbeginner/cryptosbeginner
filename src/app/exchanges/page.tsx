import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchanges 2026: KYC, No-KYC, DEXes and P2P",
  description:
    "Overview hub for crypto exchanges on CryptosBeginner. Licensed KYC platforms, No-KYC options, DEXes, P2P and security guides.",
};

export default function ExchangesIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Exchanges · Overview
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Crypto Exchanges Guide 2026
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Use this page as your map of crypto exchanges. It links to
              licensed KYC platforms, No-KYC options, decentralised
              exchanges and our security guides so you can choose with
              eyes open.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Licensed KYC exchanges
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Country guides that focus on licensed, regulated platforms
                and local fiat rails.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/regions/pakistan"
                    className="text-indigo-700 hover:underline"
                  >
                    Pakistan exchanges guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/regions/uae"
                    className="text-indigo-700 hover:underline"
                  >
                    UAE exchanges guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/regions/saudi-arabia"
                    className="text-indigo-700 hover:underline"
                  >
                    Saudi Arabia exchanges guide
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                No-KYC and on-chain options
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                For privacy-focused users and on-chain traders who already
                hold crypto.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/exchanges/no-kyc"
                    className="text-indigo-700 hover:underline"
                  >
                    No-KYC exchanges guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dexes"
                    className="text-indigo-700 hover:underline"
                  >
                    DEXes and on-chain trading
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Security and incidents
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Learn how past failures happened and how to avoid common
                mistakes.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/learn/crypto-exchange-security-checklist"
                    className="text-indigo-700 hover:underline"
                  >
                    Exchange security checklist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security/exchange-incidents"
                    className="text-indigo-700 hover:underline"
                  >
                    Exchange and wallet incidents timeline
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Tools and calculators
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Quick helpers for fees and matching platforms to your
                situation.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/tools/fee-calculator"
                    className="text-indigo-700 hover:underline"
                  >
                    Fee calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/exchange-finder"
                    className="text-indigo-700 hover:underline"
                  >
                    Exchange finder quiz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              Educational content only. Not financial advice. Combine these
              pages with your own research and local rules before choosing
              exchanges.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}