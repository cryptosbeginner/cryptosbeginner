import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { glossaryBySlug, glossaryTerms, REVIEWED_AT } from "../glossary-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const GLOSSARY_URL = `${SITE_URL}/learn/crypto-glossary`;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const term = glossaryBySlug.get(slug);
  if (!term) return { title: "Crypto Glossary | CryptosBeginner" };
  const url = `${GLOSSARY_URL}/${term.slug}`;
  return {
    title: `${term.term} | Crypto Glossary`,
    description: term.shortDefinition,
    alternates: { canonical: url },
    openGraph: { title: `${term.term} | Crypto Glossary`, description: term.shortDefinition, url, type: "article" },
  };
}

function JsonLd({ term }: { term: (typeof glossaryTerms)[number] }) {
  const url = `${GLOSSARY_URL}/${term.slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      { "@type": "ListItem", position: 3, name: "Crypto Glossary", item: GLOSSARY_URL },
      { "@type": "ListItem", position: 4, name: term.term, item: url },
    ],
  };
  const definedTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    inDefinedTermSet: { "@type": "DefinedTermSet", name: "CryptosBeginner Crypto Glossary", url: GLOSSARY_URL },
    url,
    termCode: term.slug,
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${term.term} | Crypto Glossary`,
    description: term.shortDefinition,
    url,
    inLanguage: "en",
    dateModified: "2026-08-27",
    about: { "@type": "DefinedTerm", name: term.term },
  };
  return <>{[breadcrumb, definedTerm, webpage].map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />)}</>;
}

function InternalLink({ link }: { link: { label: string; url: string } }) {
  if (link.url.startsWith("/")) return <Link href={link.url} className="font-black text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-950">{link.label}</Link>;
  return <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-black text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-950">{link.label} ↗</a>;
}

export default async function GlossaryTermPage({ params }: Params) {
  const { slug } = await params;
  const term = glossaryBySlug.get(slug);
  if (!term) notFound();
  const relatedTerms = term.related.map((relatedSlug) => glossaryBySlug.get(relatedSlug)).filter((related): related is NonNullable<typeof related> => Boolean(related));
  const categoryHref = `/learn/crypto-glossary?category=${encodeURIComponent(term.category)}`;

  return <>
    <Header />
    <JsonLd term={term} />
    <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
      <section className="border-b border-slate-200 bg-[#081328] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2 text-slate-500">/</span><Link href="/learn" className="hover:text-white">Learn</Link><span className="mx-2 text-slate-500">/</span><Link href="/learn/crypto-glossary" className="hover:text-white">Crypto Glossary</Link><span className="mx-2 text-slate-500">/</span><span className="text-white">{term.term}</span></nav>
          <div className="mt-10 flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-200/40 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cyan-100">{term.category}</span><span className="text-xs font-bold text-slate-400">Last reviewed {REVIEWED_AT}</span></div>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">{term.term}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">{term.shortDefinition}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.34fr]">
          <article className="space-y-6">
            <section className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Quick answer</p><p className="mt-3 text-lg font-bold leading-8 text-indigo-950">{term.shortDefinition}</p></section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-3xl font-black tracking-[-0.04em]">What is {term.term}?</h2><p className="mt-4 text-base leading-8 text-slate-700">{term.answer}</p><p className="mt-4 text-base leading-8 text-slate-700">The useful way to approach this term is to separate its definition from the assumptions people often attach to it. In crypto, the same word can appear in a protocol rule, a user interface, a market-data label, or a marketing claim. Check which layer the explanation is describing.</p></section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-3xl font-black tracking-[-0.04em]">Why does {term.term.toLowerCase()} matter?</h2><p className="mt-4 text-base leading-8 text-slate-700">{term.whyItMatters}</p></section>
            <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-orange-800">Concrete example</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">See it in a real situation</h2><p className="mt-4 text-base leading-8 text-orange-950/80">{term.example}</p></section>
            <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-rose-800">Common misconceptions</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">What this term does not mean</h2><ul className="mt-5 space-y-4 text-base leading-7 text-rose-950/80">{term.misconceptions.map((misconception) => <li key={misconception} className="border-l-2 border-rose-300 pl-4">{misconception}</li>)}</ul></section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-3xl font-black tracking-[-0.04em]">Related terms</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{relatedTerms.map((related) => <Link key={related.slug} href={`/learn/crypto-glossary/${related.slug}`} className="rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"><span className="font-black text-slate-950">{related.term}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{related.shortDefinition}</span></Link>)}</div></section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-3xl font-black tracking-[-0.04em]">Sources and further reading</h2><p className="mt-3 text-sm leading-6 text-slate-600">Definitions are written for education and checked against the sources below where relevant. A source can explain a protocol or rule without endorsing every product built around it.</p><div className="mt-5 space-y-3">{term.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-slate-200 p-4 text-sm font-black text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50">{source.label} ↗</a>)}</div></section>
            {term.internalLinks?.length ? <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 sm:p-8"><h2 className="text-3xl font-black tracking-[-0.04em]">Continue with CryptosBeginner</h2><div className="mt-4 flex flex-wrap gap-3 text-sm"><span className="text-slate-600">Useful next reads:</span>{term.internalLinks.map((link) => <InternalLink key={link.url} link={link} />)}</div></section> : null}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><Link href="/learn/crypto-glossary" className="inline-flex text-sm font-black text-indigo-700 hover:text-indigo-950">← Back to glossary</Link><div className="mt-5 border-t border-slate-100 pt-5"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Browse by category</p><Link href={categoryHref} className="mt-3 block text-sm font-black text-slate-900 hover:text-indigo-700">{term.category} definitions →</Link></div><div className="mt-5 border-t border-slate-100 pt-5"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Editorial note</p><p className="mt-3 text-sm leading-6 text-slate-600">This is educational content, not financial, legal, or tax advice. Terms and product rules can change.</p></div></div></aside>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
