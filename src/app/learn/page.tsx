import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Learn Crypto Basics, Safety and Tools",
  description:
    "Start here for crypto basics: Proof of Reserves, security checklists, seed phrase safety, P2P escrow and beginner tools.",
};

export default function LearnIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              CryptosBeginner · Learn
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Learn Crypto: Safety, Exchanges, Wallets
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              This section collects our core guides on trust and safety,
              exchanges, P2P, seed phrases and beginner tools. Use it as a
              starting point before picking platforms or coins.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Trust and safety
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/learn/what-is-proof-of-reserves"
                    className="text-indigo-700 hover:underline"
                  >
                    What is Proof of Reserves
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/how-to-check-exchange-proof-of-reserves"
                    className="text-indigo-700 hover:underline"
                  >
                    How to check exchange PoR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/crypto-exchange-security-checklist"
                    className="text-indigo-700 hover:underline"
                  >
                    Crypto exchange security checklist
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
                Self-custody and P2P basics
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link
                    href="/learn/seed-phrase-security"
                    className="text-indigo-700 hover:underline"
                  >
                    Seed phrase security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/how-p2p-escrow-works"
                    className="text-indigo-700 hover:underline"
                  >
                    How P2P escrow works
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Country and region guides
              </h2>
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
                Tools for beginners
              </h2>
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
              Educational content only. Not financial, legal or tax advice.
              Use these guides to ask better questions before you deposit
              money or move coins.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}