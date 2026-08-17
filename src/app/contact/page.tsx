import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | CryptosBeginner",
  description: "Get in touch with CryptosBeginner",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              For general enquiries, corrections, partnership opportunities, or feedback, 
              please email us at:
            </p>

            <p className="text-xl font-semibold">
              <a
                href="mailto:admin@cryptosbeginner.com"
                className="text-indigo-600 hover:underline"
              >
                admin@cryptosbeginner.com
              </a>
            </p>

            <p className="text-sm text-slate-500 mt-8">
              We aim to respond within a few business days. Please note that we cannot provide 
              personalized investment or trading advice.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}