import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExchangeFinderQuiz from "@/components/ExchangeFinderQuiz";

export const metadata = {
  title: "Exchange Finder Quiz 2026",
  description: "Answer a few questions and get a personalized crypto exchange recommendation.",
};

export default function ExchangeFinderPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-slate-50 border-b">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Find Your Exchange</h1>
            <p className="mt-4 text-lg text-slate-600">
              Three quick questions. One practical recommendation.
            </p>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-4 py-12">
          <ExchangeFinderQuiz />
        </section>
      </main>
      <Footer />
    </>
  );
}