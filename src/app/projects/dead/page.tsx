import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeadProjectsExplorer from "./DeadProjectsExplorer";
import { countByLifecycle, deadProjects } from "./dead-projects";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-27";

export const metadata: Metadata = {
  title: "Dead, Abandoned and Obsolete Crypto Projects | Research Directory",
  description:
    "Evidence-based directory of dead, abandoned, insolvent and officially sunset crypto projects, including Terra, FTX, OneCoin, Diem, Loopring DEX and Goldfinch.",
  alternates: { canonical: `${SITE_URL}/projects/dead` },
  openGraph: {
    title: "Dead, abandoned and obsolete crypto projects",
    description: "Research failed tokens, sunsets, insolvencies and enforcement cases with sources and user guidance.",
    url: `${SITE_URL}/projects/dead`,
    type: "website",
    images: [`${SITE_URL}/images/projects/failure-directory-hero.svg`],
  },
};

const faqs = [
  {
    q: "What is the difference between dead, abandoned and obsolete?",
    a: "Dead means the original product no longer works as marketed. Abandoned means development or launch stopped. Obsolete or sunset means the team officially wound the product down. A leftover ticker can still trade in all three cases.",
  },
  {
    q: "Does a listing mean the project was a scam?",
    a: "No. We only use fraud or enforcement language when a court, regulator or prosecutor has said so.",
  },
  {
    q: "Why is EOS not listed?",
    a: "EOS raised a record ICO and later lost mindshare, but the chain still operates. This directory does not treat reduced popularity as death.",
  },
  {
    q: "Are there really millions of dead coins?",
    a: "CoinGecko’s GeckoTerminal research counts tokens that stopped trading. Most of those are unused meme tokens. This page is a sourced case file, not a census.",
  },
  {
    q: "Should I sell a remnant token because it is listed here?",
    a: "No. This is educational research, not investment, legal or tax advice.",
  },
];

export default function DeadProjectsIndexPage() {
  const counts = countByLifecycle();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: "Dead, abandoned and obsolete projects", item: `${SITE_URL}/projects/dead` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Dead, abandoned and obsolete crypto projects",
      url: `${SITE_URL}/projects/dead`,
      inLanguage: "en",
      dateModified: UPDATED,
      image: `${SITE_URL}/images/projects/failure-directory-hero.svg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: deadProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `${SITE_URL}/projects/dead/${project.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <main className="bg-white">
        <section className="border-b bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <Image src="/images/projects/failure-directory-hero.svg" alt="Dead, abandoned and obsolete crypto projects research graphic" width={1200} height={630} priority unoptimized className="w-full rounded-3xl border border-white/10" />
            <p className="mt-8 text-sm font-medium uppercase tracking-wider text-rose-300">
              Research directory · Updated <time dateTime={UPDATED}>27 August 2026</time>
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Dead, abandoned and obsolete crypto projects
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              High-profile products that stopped working, never launched, or were officially wound down. Each case file uses a lifecycle label, a confidence level and primary sources.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["Enforcement", counts.enforcement],
              ["Insolvency", counts.insolvency],
              ["Protocol failure", counts["protocol-failure"]],
              ["Abandoned", counts.abandoned],
              ["Obsolete / sunset", counts.obsolete],
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-3xl font-black text-slate-900">{value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <Image src="/images/projects/lifecycle-map.svg" alt="How CryptosBeginner labels failed crypto projects" width={1200} height={720} unoptimized className="w-full rounded-3xl border border-slate-200" />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-rose-700">Case files</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Filter by lifecycle</h2>
          </div>
          <DeadProjectsExplorer />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Selected timeline</h2>
          <p className="mt-3 max-w-3xl text-slate-700">This is a researched sample of famous failures and sunsets, not a count of every unused meme token.</p>
          <Image src="/images/projects/contagion-timeline.svg" alt="Selected case timeline from Mt. Gox in 2014 to 2026 sunsets" width={1200} height={420} unoptimized className="mt-6 w-full rounded-3xl border border-slate-200" />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-2xl font-bold text-slate-900">What the tracker numbers actually mean</h2>
              <p className="mt-4 leading-7 text-slate-700">
                CoinGecko’s GeckoTerminal research found that 13.4 million of 25.2 million tracked cryptocurrencies had stopped trading by the end of 2025. That is a no-trade definition, not a list of 3,300 famous dead coins and not a list of proven scams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-7">
              <h2 className="text-2xl font-bold text-slate-900">Reviewed and excluded</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li><strong>EOS:</strong> the chain still operates, so it is not labelled dead.</li>
                <li><strong>Substratum, Waltonchain, Nebulas, SALT:</strong> not added until we have a stronger primary record.</li>
                <li><strong>Terra $60 billion:</strong> we use the more commonly sourced $40–45 billion range.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Projects hub</Link>
            <Link href="/learn" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Learn</Link>
            <Link href="/methodology" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Methodology</Link>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p><strong>Disclaimer:</strong> Educational research only. Not financial, legal or tax advice. A remnant market is not a restored product.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
