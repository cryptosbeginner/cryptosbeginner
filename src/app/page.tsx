import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cryptos Beginner – Best Crypto Exchanges & Guides 2026",
  description:
    "Independent crypto exchange comparisons, regional guides, fee tools and beginner tutorials. Honest reviews updated for 2026.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <p className="text-sm font-medium text-indigo-200 mb-3">
            Independent • Updated 2026 • Beginner Focused
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Find the Best Crypto Exchange for Your Needs
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            Clear comparisons, real fee breakdowns, regional guides, and practical tutorials. 
            No hype — just the information you need to choose safely.
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

      {/* METHODOLOGY */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900">How We Evaluate Exchanges</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We assess platforms on security practices, trading fees, liquidity, ease of use, 
            regional availability, and transparency (including Proof of Reserves where published). 
            Rankings are independent and updated when material changes occur.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Security", desc: "Cold storage, PoR, incident history" },
              { title: "Fees", desc: "Spot & futures real effective cost" },
              { title: "Usability", desc: "Onboarding and mobile experience" },
              { title: "Availability", desc: "Regional access & payment methods" },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-semibold text-slate-900">{item.title}</div>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/exchanges/best-crypto-exchanges-2026"
              className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">Main Comparison</div>
              <h3 className="font-bold text-lg text-slate-900">Best Crypto Exchanges 2026</h3>
              <p className="mt-2 text-sm text-slate-600">
                Fees, security, liquidity and who each platform is best for.
              </p>
            </Link>

            <Link
              href="/regions/pakistan"
              className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">Regional</div>
              <h3 className="font-bold text-lg text-slate-900">Best Exchanges in Pakistan</h3>
              <p className="mt-2 text-sm text-slate-600">
                P2P focus, practical payment methods and safety tips.
              </p>
            </Link>

            <Link
              href="/tools/exchange-finder"
              className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">Tool</div>
              <h3 className="font-bold text-lg text-slate-900">Exchange Finder Quiz</h3>
              <p className="mt-2 text-sm text-slate-600">
                Answer a few questions and get a personalized recommendation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">Ready to choose an exchange?</h2>
          <p className="mt-3 text-slate-300">
            Start with our main comparison or take the quick quiz.
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