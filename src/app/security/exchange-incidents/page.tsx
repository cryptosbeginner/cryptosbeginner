import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange Security Incidents Timeline",
  description:
    "A curated timeline of notable crypto exchange security incidents, with context, impact, and links to further reading.",
};

type IncidentSeverity = "low" | "medium" | "high";

type IncidentType =
  | "hot-wallet-breach"
  | "internal-mismanagement"
  | "p2p-fraud"
  | "service-outage";

interface Incident {
  id: string;
  year: number;
  date: string;
  platform: string;
  incidentType: IncidentType;
  severity: IncidentSeverity;
  title: string;
  description: string;
  impact: string;
  response: string;
  sourceUrl?: string;
  relatedSlug?: string;
}

const incidents: Incident[] = [
  {
    id: "example-1",
    year: 2022,
    date: "2022-11-08",
    platform: "Large global CEX",
    incidentType: "hot-wallet-breach",
    severity: "high",
    title: "Hot wallet breach and temporary withdrawal freeze",
    description:
      "An attacker gained access to a subset of hot wallets, prompting the exchange to freeze withdrawals while it contained the breach and replenished affected balances.",
    impact:
      "Short-term loss on hot wallets; withdrawals paused for several hours; spot markets remained active.",
    response:
      "Exchange replenished customer balances from company reserves, published a postmortem, and tightened key management and withdrawal monitoring.",
    sourceUrl: "https://example.com/security-incident-1",
    relatedSlug: "/exchanges/example",
  },
  {
    id: "example-2",
    year: 2023,
    date: "2023-05-19",
    platform: "Regional exchange",
    incidentType: "service-outage",
    severity: "medium",
    title: "Extended service outage during high volatility",
    description:
      "The platform experienced an extended outage during a sharp market move, leaving users unable to place orders or adjust positions.",
    impact:
      "Trading and withdrawals inaccessible for several hours; no loss of funds reported, but users missed opportunities and hedging moves.",
    response:
      "Exchange upgraded infrastructure capacity, added status pages, and clarified outage policies.",
    sourceUrl: "https://example.com/security-incident-2",
  },
  {
    id: "example-3",
    year: 2021,
    date: "2021-09-03",
    platform: "P2P-focused marketplace",
    incidentType: "p2p-fraud",
    severity: "medium",
    title: "P2P fraud cluster targeting new users",
    description:
      "A cluster of P2P merchants abused external chats and fake payment proofs to trick new users into releasing escrowed crypto.",
    impact:
      "Dozens of dispute cases; some users lost funds when they confirmed payment without proper verification.",
    response:
      "Platform tightened merchant criteria, enforced in-chat communication rules, and improved dispute tooling.",
    sourceUrl: "https://example.com/security-incident-3",
  },
];

const faqs = [
  {
    question: "Why show security incidents on an education site?",
    answer:
      "Incidents help you understand real-world risks, not just marketing claims. We use them to highlight lessons, not to sensationalize or scare people away from all exchanges.",
  },
  {
    question: "Does an incident mean an exchange is unsafe forever?",
    answer:
      "Not necessarily. The key is how the platform responded, whether users were made whole, and what long-term changes were made. Context matters.",
  },
  {
    question: "Where do these incident entries come from?",
    answer:
      "We compile incidents from public postmortems, official announcements, reputable news coverage, and independent incident archives.",
  },
  {
    question: "Is this a complete list of all exchange incidents?",
    answer:
      "No. It is a curated educational timeline focusing on notable events and lessons for beginners. It does not cover every minor issue.",
  },
];

function ExchangeIncidentsJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cryptosbeginner.com/security/exchange-incidents",
    },
    headline: "Crypto Exchange Security Incidents Timeline",
    description:
      "Curated overview of notable crypto exchange security incidents, with context, impact, and user-focused lessons.",
    image:
      "https://cryptosbeginner.com/images/exchange-incidents-hero.png",
    datePublished: "2026-07-18",
    dateModified: "2026-08-12",
    author: [
      {
        "@type": "Person",
        name: "Alex Rivera",
        url: "https://cryptosbeginner.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      logo: {
        "@type": "ImageObject",
        url:
          "https://cryptosbeginner.com/images/logo-cryptosbeginner.png",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const safeArticle = JSON.stringify(articleLd).replace(/</g, "\\u003c");
  const safeFaq = JSON.stringify(faqLd).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: safeArticle }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

export default function ExchangeIncidentsPage() {
  const years = Array.from(
    new Set(incidents.map((i) => i.year)),
  ).sort((a, b) => b - a);

  return (
    <>
      <Header />

      <main className="bg-white">
        <ExchangeIncidentsJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Security • Incidents Timeline
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Crypto Exchange Security Incidents
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  This timeline highlights notable exchange-related security
                  incidents—breaches, outages, and P2P fraud clusters—and
                  focuses on what you can learn from each event as a
                  beginner. It is not a complete list, but a curated
                  overview designed to give you context.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Editor: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 18 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  How to use this page
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Browse incidents by year to see how exchanges have handled
                  real-world problems. Use the lessons to evaluate platforms
                  more critically and to improve your own security practices.
                  You should always combine this with our safety guides and
                  up-to-date reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <nav
              aria-label="Quick links"
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Connect with other safety content
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Proof of Reserves Guide
                </Link>
                <Link
                  href="/learn/how-to-check-exchange-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How to Check PoR
                </Link>
                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Security Checklist
                </Link>
                <Link
                  href="/learn/seed-phrase-security"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Seed Phrase Security
                </Link>
              </div>
            </nav>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="max-w-none text-slate-900 text-sm sm:text-base leading-relaxed">
            <h2 className="text-lg font-semibold text-slate-900">
              Timeline of selected incidents (curated)
            </h2>
            <p className="mt-2">
              We highlight incidents by year. For each entry, we show what
              happened, how users were affected, how the platform
              responded, and what lessons you can apply when choosing
              exchanges and protecting your own account.
            </p>

            <div className="mt-6 space-y-8">
              {years.map((year) => (
                <section key={year}>
                  <h3 className="text-base font-semibold text-slate-900">
                    {year}
                  </h3>
                  <div className="mt-3 border-l border-slate-200">
                    {incidents
                      .filter((i) => i.year === year)
                      .map((incident, idx) => (
                        <div
                          key={incident.id}
                          className="relative ml-4 flex gap-4 pb-6"
                        >
                          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                          <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  {incident.date} • {incident.platform}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                  {incident.title}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-white">
                                  {incident.incidentType
                                    .replace("-", " ")
                                    .replace(
                                      /\b\w/g,
                                      (c) => c.toUpperCase(),
                                    )}
                                </span>
                                <span
                                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                    incident.severity === "high"
                                      ? "bg-rose-600 text-white"
                                      : incident.severity === "medium"
                                      ? "bg-amber-500 text-white"
                                      : "bg-slate-300 text-slate-900"
                                  }`}
                                >
                                  {incident.severity.toUpperCase()}
                                </span>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-slate-800">
                              {incident.description}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              User impact
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.impact}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              Platform response
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.response}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                              {incident.sourceUrl && (
                                <a
                                  href={incident.sourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                                >
                                  View source / postmortem
                                </a>
                              )}
                              {incident.relatedSlug && (
                                <Link
                                  href={incident.relatedSlug}
                                  className="inline-flex items-center rounded-md border border-emerald-600 px-2 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                                >
                                  Read our exchange review
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              ))}
            </div>

            <h2 className="mt-8 text-lg font-semibold text-slate-900">
              How we curate and update incidents
            </h2>
            <p className="mt-2">
              We source incidents from official exchange announcements,
              public postmortems, reputable news coverage, and independent
              incident archives. We focus on entries that teach clear
              lessons for beginners—for example, the importance of Proof
              of Reserves, cold-storage separation, transparent
              communication, and fair user treatment.
            </p>
            <p className="mt-2">
              This page will be updated periodically. It is not a real-time
              incident feed and does not attempt to list every minor issue
              across all platforms.
            </p>

            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              FAQ: Exchange security incidents
            </h2>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group mt-3 rounded-lg border border-slate-200 bg-slate-50"
              >
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-900">
                  {faq.question}
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-800">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}

            <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-xs sm:flex-row sm:items-center sm:justify-between text-slate-600">
              <p>
                This timeline is educational and may simplify complex
                situations. Always read primary sources and consider your
                own risk tolerance and local regulations before using any
                exchange.
              </p>
              <p>
                Spot an error or missing context? Email{" "}
                <a
                  href="mailto:admin@cryptosbeginner.com"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  admin@cryptosbeginner.com
                </a>{" "}
                so we can review and improve it.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}