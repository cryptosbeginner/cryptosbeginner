import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in Japan 2026",
  description: "2026 Japan guide: highly regulated market, local compliance focus, practical options for residents.",
};

export default function JapanPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Alex Rivera</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in Japan 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              Japan is one of the world’s more tightly regulated crypto markets. Locally registered platforms
              matter more than global volume rankings. Many offshore venues restrict Japanese residents.
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li>Prioritise locally compliant access</li>
              <li>Do not assume global platforms are available</li>
              <li>Verify JPY rails and product eligibility after KYC</li>
            </ul>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <p className="text-slate-700 mb-4">
            For Japanese users, the first filter is legal availability. If a global exchange blocks onboarding,
            do not attempt workarounds. Prefer platforms that explicitly support Japan and provide clear custody controls.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100"><tr>
                <th className="px-4 py-3 font-semibold text-slate-800">Exchange</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Notes</th>
                <th className="px-4 py-3 font-semibold text-slate-800">Action</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr><td className="px-4 py-3 font-medium text-slate-900">Kraken</td><td className="px-4 py-3">Evaluate only if available to your residency</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
                <tr><td className="px-4 py-3 font-medium text-slate-900">OKX</td><td className="px-4 py-3">Confirm Japan entity / access rules</td><td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-slate-50 border-t"><div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600"><p><strong>Disclaimer:</strong> Educational only. Not financial advice. Japan has strict local rules. Some links are affiliate links.</p></div></section>
      </main>
      <Footer />
    </>
  );
}