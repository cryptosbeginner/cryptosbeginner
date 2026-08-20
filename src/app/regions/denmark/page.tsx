import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in Denmark 2026",
  description:
    "In-depth 2026 Denmark guide. Nordic compliance expectations, MiCA access, and practical exchange options.",
};

export default function DenmarkPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Alex Rivera</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in Denmark 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              Denmark shares the Nordic preference for transparent, well-run financial services.
              For crypto that translates into a bias toward platforms with clearer EU access and
              fewer operational surprises.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li>Primary shortlist: Kraken, OKX</li>
              <li>Verify onboarding success before optimising for fees</li>
              <li>Use self-custody for longer-term holdings</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <p className="text-slate-700 mb-4">
            Danish users should treat global marketing pages cautiously. What is available in
            Asia or the Middle East may not be available under an EU-resident account after 2026.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100"><tr>
                <th className="px-4 py-3 font-semibold text-slate-800">Exchange</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Best for</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Action</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr><td className="px-4 py-3 font-medium text-slate-900">Kraken</td><td className="px-4 py-3">Reliable EU-facing option</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
                <tr><td className="px-4 py-3 font-medium text-slate-900">OKX</td><td className="px-4 py-3">Feature depth where enabled</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16"><div className="flex flex-wrap gap-3">
          <a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Kraken</a>
          <a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">OKX</a>
        </div></section>

        <section className="bg-slate-50 border-t"><div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
          <p><strong>Disclaimer:</strong> Educational only. Not financial advice. Some links are affiliate links.</p>
        </div></section>
      </main>
      <Footer />
    </>
  );
}