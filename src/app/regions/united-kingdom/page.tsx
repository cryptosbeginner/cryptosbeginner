import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in the UK 2026",
  description: "2026 UK guide: FCA context, practical exchanges, and product restrictions to watch.",
};

export default function UKPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Alex Rivera</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in the UK 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              UK users face a more regulated environment than many emerging markets. Retail derivatives rules and FCA registration status shape what is realistically available.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li><strong>Conservative pick:</strong> Kraken</li>
              <li><strong>Also evaluate:</strong> OKX and other platforms with clear UK/EU pathways</li>
              <li><strong>Watch for:</strong> retail derivatives restrictions and registration status</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">Exchange</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Best for</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Kraken</td>
                  <td className="px-4 py-3">Regulated access / security reputation</td>
                  <td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">OKX</td>
                  <td className="px-4 py-3">Broader product set where available</td>
                  <td className="px-4 py-3"><a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16">
          <a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg mr-3">Open Kraken →</a>
          <a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Open OKX →</a>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p><strong>Disclaimer:</strong> Educational only. Not financial advice. UK product rules can restrict derivatives. Some links are affiliate links.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}