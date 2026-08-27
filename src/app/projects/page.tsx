import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";

export const metadata: Metadata = {
  title: "Crypto Projects | Histories, Failures and Research Notes",
  description:
    "Research hub for crypto project histories plus dead, abandoned and obsolete products. Educational reference, not investment advice.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Crypto Projects | CryptosBeginner",
    description: "Project histories and evidence-based failure research.",
    url: `${SITE_URL}/projects`,
    type: "website",
    images: [`${SITE_URL}/images/projects/failure-directory-hero.svg`],
  },
};

export default function ProjectsHubPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="bg-white">
        <section className="border-b bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <Image
              src="/images/projects/failure-directory-hero.svg"
              alt="Crypto project research graphic"
              width={1200}
              height={630}
              unoptimized
              className="w-full rounded-3xl border border-white/10"
            />
            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Crypto project research
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              The first live section covers dead, abandoned, insolvent and
              officially sunset products.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-12">
          <Link
            href="/projects/dead"
            className="block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-rose-300 hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-rose-700">
              Live
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Dead, abandoned and obsolete projects
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              Sourced case files for enforcement cases, insolvencies, protocol
              failures, abandoned launches and 2026 sunsets.
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
