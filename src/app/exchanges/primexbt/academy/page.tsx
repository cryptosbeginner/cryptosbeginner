import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/academy`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Academy 2026: Free Crypto Trading Education",
  description:
    "PrimeXBT Academy explained: free trading courses, webinars, live demos, market analysis, and trading alerts, plus how beginners can use it to learn before risking real money.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Academy 2026: Free Crypto Trading Education",
    description:
      "What PrimeXBT Academy offers beginners: structured lessons, video content, webinars, live trading demonstrations, and community resources, reviewed October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-academy-banner.png`,
        width: 1024,
        height: 512,
        alt: "PrimeXBT Academy free crypto trading education banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Academy 2026: Free Crypto Trading Education",
    description:
      "Courses, webinars, live demos, and trading alerts for beginners, plus how to use them without risking real money.",
    images: [`${SITE_URL}/images/primexbt-academy-banner.png`],
  },
};

const faqItems = [
  {
    question: "Is PrimeXBT Academy free?",
    answer:
      "PrimeXBT Academy materials are free to access. You do not need to deposit funds to read the guides or watch the videos. Some community features and live events may require a PrimeXBT account, which itself is free to open.",
  },
  {
    question: "Do I need a PrimeXBT account to use the Academy?",
    answer:
      "Basic articles and videos are generally readable without logging in. Creating a free account is worthwhile because it unlocks community features and lets you practise what you learn in the demo trading environment.",
  },
  {
    question: "Can Academy trading alerts guarantee profits?",
    answer:
      "No. Trading alerts highlight market setups the Academy team finds interesting, but they are educational observations, not financial advice and not guarantees. Alerts can be wrong, and leveraged positions can lose money quickly. Always do your own analysis and manage risk.",
  },
  {
    question: "Is the Academy enough to become a profitable trader?",
    answer:
      "No course can make that promise. The Academy is a solid starting point for learning terminology, platform mechanics, and basic strategies. Real skill comes from months of practise, ideally in a demo account, and disciplined risk management with small positions.",
  },
  {
    question: "What should a complete beginner study first?",
    answer:
      "Start with crypto fundamentals and how margin trading works, then platform how-tos such as order types and stop losses, then technical analysis basics. Practise each lesson in the demo account before using real funds.",
  },
  {
    question: "Where do I find PrimeXBT Academy?",
    answer:
      "It is linked from the PrimeXBT website and blog. If you cannot find it, ask support through the live chat or Help Center for the current link, because site layouts change.",
  },
] as const;

function PrimaryAffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{
        color: "#ffffff",
        textDecoration: "none",
      }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12"
    >
      {children}
    </section>
  );
}

export default function PrimeXBTAcademyPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Academy 2026: Free Crypto Trading Education",
    description:
      "An educational walkthrough of PrimeXBT Academy: free courses, webinars, live trading demonstrations, market analysis, trading alerts, and how beginners can use them safely.",
    datePublished: "2026-10-08",
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "CryptosBeginner editorial team",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    image: [`${SITE_URL}/images/primexbt-academy-banner.png`],
    inLanguage: "en",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Exchanges",
        item: `${SITE_URL}/exchanges`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PrimeXBT Review",
        item: REVIEW_URL,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "PrimeXBT Academy",
        item: PAGE_URL,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              PrimeXBT Academy 2026: Free Crypto Trading Education
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              PrimeXBT Academy is the platform&apos;s free learning hub, with
              articles, videos, webinars, live trading demonstrations, and
              market analysis. This guide explains what it covers, how
              beginners can use it effectively, and where its limits are.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Open a free PrimeXBT account
              </PrimaryAffiliateButton>

              <Link
                href="/exchanges/primexbt-review"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Back to the full PrimeXBT review
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Affiliate disclosure:</strong> Some links on this page are
            affiliate links, including PrimeXBT links. CryptosBeginner may earn
            a commission if you register through one. This does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-8">
          <figure>
            <Image
              src="/images/primexbt-academy-banner.png"
              alt="PrimeXBT Academy free crypto trading education banner"
              width={1024}
              height={512}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT Academy offers free learning materials for traders at
              different experience levels. Course listings and formats change,
              so check the live Academy page.
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">
            <h2 className="text-2xl font-black text-emerald-950">
              TL;DR: the short version
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-800">
              <li>
                <strong>PrimeXBT Academy is free:</strong> articles, videos,
                webinars, and market analysis for all experience levels.
              </li>
              <li>
                <strong>Topics range</strong> from crypto basics and margin
                trading mechanics to technical analysis and risk management.
              </li>
              <li>
                <strong>Live trading demos</strong> and trading alerts show
                real setups, but they are educational, not guaranteed signals.
              </li>
              <li>
                <strong>Best used with the demo account:</strong> learn a
                concept, then practise it with virtual funds before risking
                real money.
              </li>
              <li>
                <strong>No course replaces experience.</strong> Treat the
                Academy as school, not as a shortcut to profits.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#what-it-is" className="underline underline-offset-4">
                  What PrimeXBT Academy is
                </a>
              </li>
              <li>
                <a href="#topics" className="underline underline-offset-4">
                  What you can learn
                </a>
              </li>
              <li>
                <a
                  href="#live-demos"
                  className="underline underline-offset-4"
                >
                  Live demos and trading alerts
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="underline underline-offset-4">
                  How to use it as a beginner
                </a>
              </li>
              <li>
                <a href="#faq" className="underline underline-offset-4">
                  FAQ
                </a>
              </li>
            </ol>
          </div>
        </section>

        <Section id="what-it-is">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What PrimeXBT Academy is
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT Academy is the exchange&apos;s educational arm: a library
            of written guides, video lessons, webinars, and market commentary
            aimed at traders ranging from complete beginners to experienced
            users. It covers both general crypto knowledge and
            platform-specific skills, such as how order types and leverage
            work on PrimeXBT itself.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            The material is free to access, and a free PrimeXBT account
            unlocks community features and the demo trading environment. For
            a beginner, the most valuable part is not any single course but
            the structure: you can move from basics to intermediate topics in
            a sensible order instead of piecing together random videos from
            across the internet.
          </p>
        </Section>

        <Section id="topics">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What you can learn
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The Academy&apos;s catalog typically spans several categories.
            Offerings change over time, so treat this as a guide to the kind
            of material available rather than an exact course list:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Crypto fundamentals:</strong> what blockchain is, how
              wallets and transactions work, and the key differences between
              major assets.
            </li>
            <li>
              <strong>Margin and leverage mechanics:</strong> how leveraged
              positions work, what liquidation means, and how margin calls
              are calculated. This is the material most beginners skip and
              most need.
            </li>
            <li>
              <strong>Technical analysis:</strong> reading charts, trend
              lines, support and resistance, and common indicators, explained
              with practical examples.
            </li>
            <li>
              <strong>Trading strategies:</strong> overviews of approaches
              like trend following, range trading, and scalping, with
              honest discussion of their drawbacks.
            </li>
            <li>
              <strong>Risk management:</strong> position sizing, stop losses,
              and the habit of never risking more than a small share of
              capital on one idea.
            </li>
            <li>
              <strong>Platform how-tos:</strong> depositing, withdrawing,
              placing orders, and using PrimeXBT&apos;s trading tools.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Beginner order of study:</strong> crypto basics, then
              margin mechanics, then order types and stop losses, then
              technical analysis, then strategy. Practise each stage in the
              demo account before moving on.
            </p>
          </div>
        </Section>

        <Section id="live-demos">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Live demos and trading alerts
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The Academy has historically offered live trading
            demonstrations, where experienced traders walk through real
            market setups and explain their reasoning out loud. Watching
            someone think through a trade, including the moments they decide
            not to take one, is often more instructive than any theory
            lesson. Check the live Academy page for the current schedule,
            since formats and hosts change.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            The Academy has also offered a Trading Alerts service: timely
            notes about market setups the team finds interesting. Treat these
            as educational observations, not signals to copy blindly. Alerts
            describe what someone else sees in the market. They do not
            guarantee outcomes, they do not manage your risk for you, and
            following them without understanding the reasoning is how
            beginners lose money quickly.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            The community side of the Academy includes social channels and
            shows such as market talk programs. These are useful for staying
            current on market narratives, but remember that any educator
            employed by a trading platform has an interest in active
            trading. Take the education seriously and the enthusiasm with a
            grain of salt.
          </p>
        </Section>

        <Section id="how-to-use">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to use the Academy as a beginner
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            A simple routine makes the material stick. Pick one topic at a
            time, study it until you can explain it in your own words, then
            try it in the demo account with virtual funds. For example, after
            the lesson on stop losses, place ten demo trades where the stop
            loss is set before entry, every time. That one habit will save
            you more money than any strategy lesson.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Keep notes on what confuses you and revisit those lessons. Most
            beginners rush to advanced strategy content while still fuzzy on
            margin mechanics. The boring fundamentals are the ones that
            protect your capital.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Finally, remember the Academy&apos;s limits. It teaches concepts
            well, but it cannot give you discipline, and it cannot make a
            risky market safe. When you move to real funds, start with the
            smallest position sizes the platform allows and treat your first
            months as tuition, not income.
          </p>
        </Section>

        <Section id="faq">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Frequently asked questions
          </h2>

          <div className="mt-7 grid gap-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {item.question}
                </h3>

                <p className="mt-3 leading-8 text-slate-800">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-4xl px-4 pb-12">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-7">
            <h2 className="text-xl font-black text-indigo-950">
              Continue with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              Education is one piece. The full review covers fees, leverage,
              regulation, restricted countries, and who should skip PrimeXBT
              entirely.
            </p>

            <Link
              href="/exchanges/primexbt-review"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-indigo-800"
            >
              Read the PrimeXBT review
            </Link>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Sources and verification
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-800">
              This page was reviewed on {UPDATED}. Course listings, webinar
              schedules, alert services, and community features change over
              time. Check the current Academy and Help Center pages for the
              latest offerings.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-800">
              <li>
                <a
                  href={PRIME_XBT_HOME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT official website
                </a>{" "}
                for current products, the Academy section, and legal links.
              </li>
              <li>
                <a
                  href={REVIEW_URL}
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  CryptosBeginner PrimeXBT review
                </a>{" "}
                for the broader assessment this guide supports.
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm leading-7 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. This page
              is not financial, investment, legal, or tax advice.
              Cryptocurrency, CFDs, futures, and leveraged products can result
              in rapid or total loss of capital. Availability depends on your
              jurisdiction. Some links are affiliate links. Verify live terms,
              fees, legal disclosures, restrictions, and product conditions on
              PrimeXBT&apos;s official website before depositing funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
