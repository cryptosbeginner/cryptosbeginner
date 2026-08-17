import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | CryptosBeginner",
  description: "Privacy Policy for CryptosBeginner.com",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">Last updated: August 2026</p>

            <p>CryptosBeginner.com (“we”, “us”) respects your privacy.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Information you voluntarily provide (for example via the contact form)</li>
              <li>Standard server and analytics data (IP address, browser type, pages visited)</li>
              <li>Cookies and similar technologies used for analytics and affiliate tracking</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8">How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To operate and improve the website</li>
              <li>To respond to enquiries</li>
              <li>For analytics and performance measurement</li>
              <li>For affiliate attribution where applicable</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
            <p>
              For privacy-related requests, email us at:{" "}
              <a
                href="mailto:admin@cryptosbeginner.com"
                className="text-indigo-600 font-medium hover:underline"
              >
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