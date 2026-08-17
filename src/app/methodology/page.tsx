import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Methodology | CryptosBeginner",
  description: "How we research and rank crypto exchanges at CryptosBeginner.",
};

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Our Methodology</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              At CryptosBeginner we aim to provide clear, practical, and independent information 
              for people who are new to cryptocurrency or looking to choose an exchange.
            </p>

            <h2 className="text-xl font-bold text-slate-900">What We Evaluate</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Security & Transparency</strong> — Cold storage practices, Proof of Reserves, security incidents, and public communication.</li>
              <li><strong>Trading Fees</strong> — Spot and futures fees at standard and discounted levels.</li>
              <li><strong>Liquidity</strong> — Depth of order books on major pairs.</li>
              <li><strong>Ease of Use</strong> — Onboarding, interface clarity, and mobile experience.</li>
              <li><strong>Product Range</strong> — Spot, futures, copy trading, earn products, and additional tools.</li>
              <li><strong>Regional Accessibility</strong> — Availability and practical payment methods in different countries.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900">How We Stay Updated</h2>
            <p>
              We review major platforms regularly and update our comparisons when there are meaningful 
              changes in fees, security practices, product offerings, or regulatory status.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Affiliate Disclosure</h2>
            <p>
              Some links on this website are affiliate links. We may earn a commission if you sign up 
              through them. This never influences our rankings or editorial opinions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}