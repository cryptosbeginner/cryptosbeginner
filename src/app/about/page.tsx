import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | CryptosBeginner",
  description: "Learn about the team behind CryptosBeginner.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">About CryptosBeginner</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              CryptosBeginner is an independent educational resource focused on helping people 
              understand cryptocurrency exchanges, wallets, and basic trading concepts.
            </p>

            <p>
              Our goal is to provide clear, practical information without unnecessary hype. 
              We prioritise beginner-friendly explanations, regional context, and transparent 
              comparisons.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">Our Contributors</h2>

            <div className="space-y-8 mt-6">
              <div>
                <h3 className="font-bold text-slate-900">Alex Rivera</h3>
                <p className="text-sm text-slate-500 mb-2">Lead Researcher</p>
                <p>
                  Focuses on exchange comparisons, fee structures, and security practices. 
                  Interested in how platforms serve users in emerging markets.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">Hassan Malik</h3>
                <p className="text-sm text-slate-500 mb-2">Regional Specialist</p>
                <p>
                  Covers practical guides for users in Pakistan and South Asia, with emphasis 
                  on P2P methods and local payment realities.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">Sophia Chen</h3>
                <p className="text-sm text-slate-500 mb-2">Education & Tutorials</p>
                <p>
                  Creates beginner and intermediate learning materials, including security 
                  habits and risk management basics.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-10">Contact</h2>
            <p>
              Reach us at:{" "}
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