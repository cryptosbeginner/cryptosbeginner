import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeeCalculator from "@/components/FeeCalculator";

export const metadata = {
  title: "Crypto Trading Fee Calculator 2026",
  description: "Compare crypto trading fees across Binance, Bybit, Bitget, OKX, BingX, WEEX, MEXC and Kraken.",
};

export default function FeeCalculatorPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-slate-50 border-b">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Crypto Fee Calculator</h1>
            <p className="mt-4 text-lg text-slate-600">
              Estimate standard spot trading fees, then open the exchange that fits your cost.
            </p>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-4 py-12">
          <FeeCalculator />
        </section>
      </main>
      <Footer />
    </>
  );
}