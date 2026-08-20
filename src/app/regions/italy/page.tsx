import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in Italy 2026 | MiCA Guide",
  description:
    "In-depth 2026 Italy guide. EU access after MiCA, EUR funding, and practical regulated-leaning exchange options.",
};

export default function ItalyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Alex Rivera</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in Italy 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              Italian users sit under the same MiCA-era constraints as the rest of the EU, with
              local banking behaviour and tax reporting habits layered on top. Availability is the
              first filter; fees come second.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li>Primary options to evaluate: Kraken, OKX</li>
              <li>Confirm the legal entity and enabled products after KYC</li>
              <li>Keep exportable trade history for tax reporting</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical notes for Italy</h2>
          <p className="text-slate-700 mb-4">
            Some global brands that still dominate in Asia or Africa are less straightforward for
            EU residents after 2026. Italian users should verify SEPA support and whether the
            account is retail-spot only or includes additional products.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100"><tr>
                <th className="px-4 py-3 font-semibold text-slate-800">Exchange</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Best for</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Action</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr><td className="px-4 py-3 font-medium text-slate-900">Kraken</td><td className="px-4 py-3">Security-focused starting point</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
                <tr><td className="px-4 py-3 font-medium text-slate-900">OKX</td><td className="px-4 py-3">Wider toolset if unlocked</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16"><div className="flex flex-wrap gap-3">
          <a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Kraken</a>
          <a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">OKX</a>
        </div></section>

        <section className="bg-slate-50 border-t"><div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
          <p><strong>Disclaimer:</strong> Educational only. Not tax or financial advice. Some links are affiliate links.</p>
        </div></section>
      </main>
      <Footer />
    </>
  );
}