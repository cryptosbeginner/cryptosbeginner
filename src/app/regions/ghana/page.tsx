import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges in Ghana 2026",
  description:
    "In-depth 2026 Ghana guide. Mobile-money and P2P focus, practical exchanges, fees and safety rules.",
};

export default function GhanaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">Updated August 2026 · By Hassan Malik</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Best Crypto Exchanges in Ghana 2026</h1>
            <p className="mt-4 text-lg text-slate-700">
              Ghana’s crypto usage often intersects with mobile money and regional payment habits.
              Platforms that support usable local P2P routes tend to matter more than pure futures branding.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li>Practical options: Bybit, Bitget, MEXC, Binance</li>
              <li>Check live mobile-money / bank P2P offers before funding</li>
              <li>Never complete payment outside exchange escrow</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Funding reality</h2>
          <p className="text-slate-700 mb-4">
            Merchant availability for GHS can change quickly. Treat every first trade as a test:
            small amount, confirm release, then test a withdrawal.
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
                {[["Bybit","Active trading + P2P","https://go.cryptosbeginner.com/Bybit"],["Bitget","Copy trading","https://go.cryptosbeginner.com/Bitget-Bonus"],["MEXC","Fees / listings","https://go.cryptosbeginner.com/MEXC-Bonus"],["Binance","Liquidity","https://go.cryptosbeginner.com/binance"]].map(([n,b,h])=>(
                  <tr key={n}><td className="px-4 py-3 font-medium text-slate-900">{n}</td><td className="px-4 py-3">{b}</td><td className="px-4 py-3"><a href={h} target="_blank" rel="noopener noreferrer sponsored" className="text-emerald-600 font-medium hover:underline">Visit →</a></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16"><div className="flex flex-wrap gap-3">
          <a href="https://go.cryptosbeginner.com/Bybit" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Bybit</a>
          <a href="https://go.cryptosbeginner.com/Bitget-Bonus" target="_blank" rel="noopener noreferrer sponsored" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg">Bitget</a>
        </div></section>

        <section className="bg-slate-50 border-t"><div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
          <p><strong>Disclaimer:</strong> Educational only. Not financial advice. Some links are affiliate links.</p>
        </div></section>
      </main>
      <Footer />
    </>
  );
}