import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { deadProjects, getDeadProject, lifecycleLabels } from "../dead-projects";

const SITE_URL = "https://www.cryptosbeginner.com";
type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return deadProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getDeadProject(slug);
  if (!project) return { title: "Case not found | CryptosBeginner" };
  return {
    title: `${project.name} | Dead and Obsolete Crypto Projects`,
    description: project.summary,
    alternates: { canonical: `${SITE_URL}/projects/dead/${project.slug}` },
    openGraph: {
      title: `${project.name} case file`,
      description: project.summary,
      url: `${SITE_URL}/projects/dead/${project.slug}`,
      type: "article",
      images: [`${SITE_URL}${project.image.src}`],
    },
  };
}

export default async function DeadProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getDeadProject(slug);
  if (!project) notFound();

  const related = deadProjects
    .filter((item) => item.slug !== project.slug && item.lifecycle === project.lifecycle)
    .slice(0, 3);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: "Dead, abandoned and obsolete projects", item: `${SITE_URL}/projects/dead` },
        { "@type": "ListItem", position: 4, name: project.name, item: `${SITE_URL}/projects/dead/${project.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${project.name} case file`,
      description: project.summary,
      dateModified: project.reviewedAt,
      inLanguage: "en",
      image: `${SITE_URL}${project.image.src}`,
      author: { "@type": "Organization", name: "CryptosBeginner", url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: "CryptosBeginner" },
      mainEntityOfPage: `${SITE_URL}/projects/dead/${project.slug}`,
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
          <div className="mx-auto max-w-5xl px-4 py-10">
            <Image src={project.image.src} alt={project.image.alt} width={1200} height={420} priority unoptimized className="w-full rounded-3xl border border-white/10" />
            <p className="mt-8 text-sm font-medium uppercase tracking-wider text-rose-300">
              <Link href="/projects/dead" className="hover:underline">Dead, abandoned and obsolete</Link> · {lifecycleLabels[project.lifecycle]}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{project.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-rose-200/20 px-3 py-1 font-semibold text-rose-100">{project.status}</span>
              {project.secondaryStatus && (
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-slate-100">{project.secondaryStatus}</span>
              )}
              <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-amber-200">Confidence: {project.confidence}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <article className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900">What happened</h2>
                <p className="mt-3 leading-7 text-slate-700">{project.whatHappened}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900">What failed</h2>
                <p className="mt-3 leading-7 text-slate-700">{project.whatFailed}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900">Current status</h2>
                <p className="mt-3 leading-7 text-slate-700">{project.currentStatus}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900">What users should do</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {project.userGuidance.map((item) => (
                    <li key={item} className="leading-7">{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900">Lessons</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {project.lessons.map((item) => (
                    <li key={item} className="leading-7">{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900">Primary sources</h2>
                <div className="mt-4 space-y-3">
                  {project.evidence.map((source) => (
                    <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="block font-semibold text-indigo-700 hover:underline">
                      {source.label} →
                    </a>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">Case facts</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div><dt className="font-semibold text-slate-500">Lifecycle</dt><dd className="mt-1 text-slate-800">{lifecycleLabels[project.lifecycle]}</dd></div>
                  <div><dt className="font-semibold text-slate-500">Era</dt><dd className="mt-1 text-slate-800">{project.era}</dd></div>
                  <div><dt className="font-semibold text-slate-500">Ticker</dt><dd className="mt-1 text-slate-800">{project.ticker ?? "No public ticker"}</dd></div>
                  <div><dt className="font-semibold text-slate-500">Last known activity</dt><dd className="mt-1 text-slate-800">{project.lastKnownActivity}</dd></div>
                  <div><dt className="font-semibold text-slate-500">Remnant market</dt><dd className="mt-1 text-slate-800">{project.stillTrades ? "May still appear on some markets" : "No meaningful original market"}</dd></div>
                </dl>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <h2 className="text-lg font-bold text-rose-950">Recovery warning</h2>
                <p className="mt-3 text-sm leading-6 text-rose-950">Never share a seed phrase or send crypto to unlock an old balance.</p>
              </div>
              {related.length > 0 && (
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h2 className="text-lg font-bold text-slate-900">Same lifecycle</h2>
                  <ul className="mt-4 space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/projects/dead/${item.slug}`} className="font-semibold text-indigo-700 hover:underline">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href="/projects/dead" className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Back to directory</Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
