import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cryptos Beginner – Exchange, Safety & Region Guides 2026",
  description:
    "Global crypto beginner hub. Independent exchange comparisons, trust & safety guides, region playbooks, wallet and DEX basics, plus tools for fees and matching platforms.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <p className="text-sm font-medium text-indigo-200 mb-3">
            Global · Independent · Updated 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Pick the Right Crypto Exchange, Wallet and On-Chain Tools
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            Cryptos Beginner is a trust-first hub for crypto newcomers. We
            compare exchanges, explain regional realities, walk through
            wallet and DEX basics, and put safety front and centre before
            any hype.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/exchanges/best-crypto-exchanges-2026"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Compare Exchanges
            </Link>
            <Link
              href="/tools/exchange-finder"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY STRIP */}
      <section className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Trust & Safety First
            </p>
            <p className="mt-1 text-sm text-slate-200 max-w-2xl">
              We maintain dedicated guides on Proof of Reserves, exchange
              security checklists, seed phrase safety and P2P escrow so
              beginners can spot red flags before depositing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
            >
              Proof of Reserves →
            </Link>
            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
            >
              Security Checklist →
            </Link>
            <Link
              href="/learn/seed-phrase-security"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
            >
              Seed Phrase Safety →
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS / CATEGORIES */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900">
            What You Can Learn Here
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Cryptos Beginner is built as a map for new users. Instead of
            scattering information across social threads, we organise it
            into clear sections you can work through at your own pace.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">Exchanges</h3>
              <p className="mt-1 text-sm text-slate-600">
                Independent comparisons for 2026, including fees,
                liquidity, KYC vs No-KYC options and long-term safety
                notes.
              </p>
              <Link
                href="/exchanges/best-crypto-exchanges-2026"
                className="mt-3 inline-flex text-sm text-indigo-700 hover:underline"
              >
                View exchange guide →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">Regions</h3>
              <p className="mt-1 text-sm text-slate-600">
                Country-by-country reality checks. Legal grey zones,
                licensed platforms, local payment rails and tax notes.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-indigo-700">
                <Link href="/regions/uae" className="hover:underline">
                  UAE
                </Link>
                <Link href="/regions/saudi-arabia" className="hover:underline">
                  Saudi Arabia
                </Link>
                <Link href="/regions/bahrain" className="hover:underline">
                  Bahrain
                </Link>
                <Link href="/regions/pakistan" className="hover:underline">
                  Pakistan
                </Link>
                <Link href="/regions/oman" className="hover:underline">
                  Oman
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">Wallets</h3>
              <p className="mt-1 text-sm text-slate-600">
                Hardware vs software, hot vs cold storage, practical
                backup plans and incident lessons so you don&apos;t learn
                the hard way.
              </p>
              <Link
                href="/wallets"
                className="mt-3 inline-flex text-sm text-indigo-700 hover:underline"
              >
                Explore wallets →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">On-chain & DEXes</h3>
              <p className="mt-1 text-sm text-slate-600">
                How decentralised exchanges work, how they tie into meme
                ecosystems, and the risks of smart contracts and thin
                liquidity.
              </p>
              <Link
                href="/dexes"
                className="mt-3 inline-flex text-sm text-indigo-700 hover:underline"
              >
                Learn about DEXes →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">Meme Coins</h3>
              <p className="mt-1 text-sm text-slate-600">
                Honest explainers on pump.fun, Believe, Terminal/Padre,
                GMGN and other tools, plus checklists for avoiding obvious
                rugs.
              </p>
              <Link
                href="/meme-coins"
                className="mt-3 inline-flex text-sm text-indigo-700 hover:underline"
              >
                Visit meme coin hub →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold text-slate-900">Tools</h3>
              <p className="mt-1 text-sm text-slate-600">
                Fee calculator, exchange finder quiz and more small tools
                that make comparisons less painful.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
                <Link href="/tools/fee-calculator" className="hover:underline">
                  Fee calculator
                </Link>
                <Link
                  href="/tools/exchange-finder"
                  className="hover:underline"
                >
                  Exchange finder
                </Link>
                <Link href="/crypto-research" className="hover:underline">
                  Research desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900">
            How We Evaluate Exchanges
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We assess platforms on security practices, trading fees,
            liquidity, ease of use, regional availability, and
            transparency (including Proof of Reserves where published).
            Rankings are independent and updated when material changes
            occur.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Security", desc: "Cold storage, PoR, incident history" },
              { title: "Fees", desc: "Spot & futures effective trading cost" },
              {
                title: "Usability",
                desc: "Onboarding, mobile apps and everyday workflows",
              },
              {
                title: "Availability",
                desc: "Regional access, fiat rails and product eligibility",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-slate-100"
              >
                <div className="font-semibold text-slate-900">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Featured Guides & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/exchanges/best-crypto-exchanges-2026"
              className="block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">
                Main Comparison
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Best Crypto Exchanges 2026
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Fees, security, liquidity and who each platform is best
                for.
              </p>
            </Link>

            <Link
              href="/regions/uae"
              className="block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">
                Regional
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Best Exchanges in the UAE
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Licensed platforms, VARA rules, local rails and safety
                tips.
              </p>
            </Link>

            <Link
              href="/tools/exchange-finder"
              className="block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">
                Tool
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Exchange Finder Quiz
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Answer a few questions and get a tailored shortlist rather
                than a one-size-fits-all pick.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">
            Ready to take your first steps?
          </h2>
          <p className="mt-3 text-slate-300">
            Start with our global comparison, then drill down into your
            region and wallet plan. Take it slow, keep safety first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/exchanges/best-crypto-exchanges-2026"
              className="bg-emerald-500 hover:bg-emerald-600 font-semibold px-6 py-3 rounded-lg transition"
            >
              View Best Exchanges 2026
            </Link>
            <Link
              href="/tools/fee-calculator"
              className="bg-white/10 hover:bg-white/20 font-semibold px-6 py-3 rounded-lg transition"
            >
              Fee Calculator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}