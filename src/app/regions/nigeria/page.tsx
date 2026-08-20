import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in Nigeria 2026 | P2P & Naira Access",
  description: "Practical 2026 guide for Nigeria: P2P-focused exchanges, naira access, fees and security notes.",
};

export default function NigeriaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Hassan Malik</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in Nigeria 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              Nigeria remains one of the world’s strongest grassroots crypto markets. Most users still depend on P2P and mobile-money style routes more than simple card deposits.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li><strong>Strong practical options:</strong> Bybit, Bitget, MEXC</li>
              <li><strong>Also used:</strong> WEEX, BingX, OKX (availability can vary)</li>
              <li><strong>Main reality:</strong> P2P / local payment methods matter more than bank on-ramps</li>
              <li><strong>Note:</strong> Platform access and naira routes have changed before — verify live offers</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What matters in Nigeria</h2>
          <p className="text-slate-700 mb-4">
            Liquidity on NGN P2P, reliable escrow, and withdrawal reliability usually matter more than the lowest advertised spot fee. Some global platforms have restricted or changed naira services over time, so always confirm current payment methods inside the app.
          </p>
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
                {[
                  ["Bybit", "Futures + P2P", "https://go.cryptosbeginner.com/Bybit"],
                  ["Bitget", "Copy trading + P2P", "https://go.cryptosbeginner.com/Bitget-Bonus"],
                  ["MEXC", "Low fees / alts", "https://go.cryptosbeginner.com/MEXC-Bonus"],
                  ["WEEX", "Futures focus", "https://go.cryptosbeginner.com/WEEX-Bonus"],
                  ["BingX", "Social trading", "https://go.cryptosbeginner.com/Bingx"],
                ].map(([n, b, h]) => (
                  <tr key={n}>
                    <td className="px-4 py-3 font-medium text-slate-900">{n}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3"><a href={h} target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
          <article>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Bybit</h2>
            <p className="text-slate-700 mb-4">Often practical for active traders who want futures plus usable P2P routes. Start small and test withdrawals.</p>
            <a href="https://go.cryptosbeginner.com/Bybit" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Open Bybit →</a>
          </article>
          <article>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Bitget</h2>
            <p className="text-slate-700 mb-4">Useful if you want copy trading and still need local-style funding options.</p>
            <a href="https://go.cryptosbeginner.com/Bitget-Bonus" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Open Bitget →</a>
          </article>
          <article>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Security basics</h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Use escrow only</li>
              <li>Enable app 2FA</li>
              <li>Keep long-term funds off-exchange</li>
            </ul>
          </article>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p><strong>Disclaimer:</strong> Educational only. Not financial advice. Availability changes. Some links are affiliate links.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}