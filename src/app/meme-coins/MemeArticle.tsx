import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reviewedDate, relatedLinks, type Platform } from "./content";
import { ArticleJsonLd } from "./SeoJsonLd";

export function AffiliateCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <aside className="my-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm sm:p-6">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-800">
        Disclosed partner link
      </p>

      <p className="mt-3 text-sm leading-7 text-slate-800">
        CryptosBeginner may earn a commission if you use this link. It does not
        change the editorial assessment, comparison order, fees, or risk
        discussion.
      </p>

      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noreferrer"
        className="mt-5 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        {label} ↗
      </a>
    </aside>
  );
}

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-12">
      <Image
        src={src}
        alt={alt}
        width={1912}
        height={900}
        className="h-auto w-full rounded-2xl border border-slate-200 bg-slate-950 shadow-sm"
      />

      {caption ? (
        <figcaption className="mt-3 px-1 text-center text-sm leading-6 text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticleBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        article-body text-[1.0625rem] leading-8 text-slate-800

        [&_h2]:mt-16
        [&_h2]:mb-6
        [&_h2]:scroll-mt-24
        [&_h2]:text-3xl
        [&_h2]:font-black
        [&_h2]:leading-tight
        [&_h2]:tracking-tight
        [&_h2]:text-slate-950

        [&_h2:first-child]:mt-0

        [&_h3]:mt-10
        [&_h3]:mb-4
        [&_h3]:scroll-mt-24
        [&_h3]:text-xl
        [&_h3]:font-extrabold
        [&_h3]:leading-snug
        [&_h3]:text-slate-950

        [&_p]:my-5
        [&_p]:max-w-none
        [&_p]:text-[1.0625rem]
        [&_p]:leading-8
        [&_p]:text-slate-800

        [&_strong]:font-extrabold
        [&_strong]:text-slate-950

        [&_a]:font-bold
        [&_a]:text-indigo-700
        [&_a]:underline
        [&_a]:decoration-indigo-300
        [&_a]:underline-offset-4
        [&_a:hover]:text-indigo-950

        [&_ul]:my-7
        [&_ul]:list-disc
        [&_ul]:space-y-3
        [&_ul]:pl-6

        [&_ol]:my-7
        [&_ol]:list-decimal
        [&_ol]:space-y-3
        [&_ol]:pl-6

        [&_li]:pl-1
        [&_li]:leading-7
        [&_li]:text-slate-800

        [&_blockquote]:my-8
        [&_blockquote]:border-l-4
        [&_blockquote]:border-indigo-400
        [&_blockquote]:bg-indigo-50
        [&_blockquote]:px-5
        [&_blockquote]:py-4
        [&_blockquote]:text-slate-800

        [&_figure]:my-12

        [&_iframe]:w-full
        [&_iframe]:border-0
      "
    >
      {children}
    </div>
  );
}

export function ArticleShell({
  kicker,
  title,
  description,
  path = "/meme-coins",
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  path?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleJsonLd title={title} description={description} path={path} />

      <Header />

      <header className="border-b border-slate-200 bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm font-bold text-indigo-800">{kicker}</p>

          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm font-bold text-slate-600">
            <span>CryptosBeginner editorial team</span>
            <span aria-hidden="true">•</span>
            <span>Last reviewed {reviewedDate}</span>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950 sm:px-6 sm:py-14">
        <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white px-5 py-9 shadow-sm sm:px-10 sm:py-14">
          <ArticleBody>{children}</ArticleBody>
        </article>
      </main>

      <Footer />
    </>
  );
}

export function RelatedPages() {
  return (
    <section className="mt-14 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">
        Related CryptosBeginner pages
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-slate-800">
        Continue with the surrounding research and safety resources:
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {relatedLinks.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-indigo-800 transition hover:border-indigo-400 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {label} →
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PlatformProfile({
  platform,
  children,
}: {
  platform: Platform;
  children: React.ReactNode;
}) {
  return (
    <ArticleShell
      path={`/meme-coins/reviews/${platform.slug}`}
      kicker={`Meme coins · Platform review · ${reviewedDate}`}
      title={`${platform.name}: features, fees and risk checks`}
      description={platform.summary}
    >
      <aside className="mb-10 rounded-2xl border border-amber-300 bg-amber-100 p-5 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-950">
          Editorial position
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-900">
          This profile separates documented features from editorial
          interpretation. It is not an endorsement, safety score, or prediction
          of results.
        </p>
      </aside>

      <h2>TL;DR</h2>

      <p>
        {platform.summary} {platform.caution}
      </p>

      <h2>At a glance</h2>

      <div className="my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-300 bg-slate-50 p-5">
          <p className="text-xs font-black uppercase tracking-wide text-slate-700">
            Category · {platform.category}
          </p>

          <p className="mt-2 font-bold leading-6 text-slate-950">
            {platform.role}
          </p>
        </div>

        <div className="rounded-xl border border-slate-300 bg-slate-50 p-5">
          <p className="text-xs font-black uppercase tracking-wide text-slate-700">
            Fee note
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-900">
            {platform.fee}
          </p>
        </div>
      </div>

      {platform.images.slice(0, 1).map((image) => (
        <Figure key={image.src} {...image} />
      ))}

      {children}

      {platform.affiliate ? <AffiliateCTA {...platform.affiliate} /> : null}

      {platform.images.slice(1).map((image) => (
        <Figure key={image.src} {...image} />
      ))}

      <h2>Official sources and verification</h2>

      <p>
        These sources support the platform description and fee or terms notes
        above. Conditions, availability, and pricing can change, so check the
        provider before connecting a wallet or signing a transaction.
      </p>

      <ul>
        {platform.sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.label} ↗
            </a>
          </li>
        ))}
      </ul>

      <RelatedPages />
    </ArticleShell>
  );
}

export function VideoReference({
  url,
  platform,
}: {
  url: string;
  platform: string;
}) {
  const embedUrl = url.replace("watch?v=", "embed/");

  return (
    <section
      className="my-12 overflow-hidden rounded-2xl border border-slate-300 bg-slate-950 shadow-sm"
      aria-label={`${platform} video walkthrough`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-5 py-3">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-indigo-200">
          Video walkthrough
        </span>

        <span className="text-xs font-bold text-slate-300">{platform}</span>
      </div>

      <div className="aspect-video bg-black">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={`${platform} beginner walkthrough`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="px-5 py-4 text-sm leading-6 text-slate-300">
        Product walkthrough for research and navigation context. Features,
        pricing, execution conditions, and availability can change.
      </p>
    </section>
  );
}
