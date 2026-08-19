import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Crypto Exchanges by Region",
  description:
    "Find the best crypto exchanges by country and region. Guides for Pakistan, Germany, UAE and more, with local payment methods and practical advice.",
};

export default function RegionsPage() {
  const regions = [
    {
      title: "Pakistan",
      href: "/regions/pakistan",
      desc: "P2P-focused guide, local payment methods, and practical exchange options.",
    },
    {
      title: "Germany",
      href: "/regions/germany",
      desc: "MiCA context, EUR deposits, and regulation-focused exchange recommendations.",
    },
    {
      title: "United Arab Emirates",
      href: "/regions/uae",
      desc: "UAE-focused options, including locally relevant platforms and funding methods.",
    },
    {
      title: "United States",
      href: "/regions/united-states",
      desc: "US-oriented platforms and what to consider around regulation and availability.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Best Crypto Exchanges by Region
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              The right exchange depends on where you live. Start with your region for
              payment methods, availability, and practical setup advice.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {regions.map((region) => (
              <Link
                key={region.href}
                href={region.href}
                className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition"
              >
                <h2 className="text-lg font-bold text-slate-900">{region.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{region.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}