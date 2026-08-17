import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer | CryptosBeginner",
  description: "Important disclaimer for CryptosBeginner.com",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Disclaimer</h1>
          
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">Last updated: August 2026</p>
            
            <p>
              The information published on CryptosBeginner.com is provided for general educational 
              and informational purposes only. It does not constitute financial, investment, trading, 
              tax, or legal advice.
            </p>
            
            <p>
              Cryptocurrency markets are highly volatile. You can lose some or all of the capital you 
              allocate to digital assets. Past performance is not indicative of future results.
            </p>
            
            <p>
              We may earn commissions through affiliate links. This never influences our rankings or 
              editorial opinions, but you should assume that some links are monetized.
            </p>
            
            <p>
              CryptosBeginner.com, its owners, and contributors accept no liability for any loss or 
              damage arising from the use of information on this website.
            </p>
            
            <p>
              For questions, contact us at:{" "}
              <a href="mailto:admin@cryptosbeginner.com" className="text-indigo-600 font-medium hover:underline">
                admin@cryptosbeginner.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}