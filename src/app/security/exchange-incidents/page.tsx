import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange & Wallet Security Incidents Timeline",
  description:
    "A curated timeline of notable exchange and wallet security incidents, with context, impact, and practical lessons for beginners.",
};

type IncidentSeverity = "low" | "medium" | "high";

type IncidentType =
  | "exchange-hack"
  | "wallet-exploit"
  | "data-breach"
  | "oracle-exploit"
  | "supply-chain";

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
  lessons: string;
  sourceUrl?: string;
  relatedSlug?: string;
}

const incidents: Incident[] = [
  // 2026 – hardware wallets, data breaches, DeFi oracle exploit
  {
    id: "safepal-2026",
    year: 2026,
    date: "2026-08-16",
    platform: "SafePal (hardware wallet)",
    incidentType: "data-breach",
    severity: "medium",
    title: "SafePal order-tracking data breach exposes ~39,798 customers",
    description:
      "SafePal disclosed that a flaw in its order-tracking plug-in allowed unauthorized access to about 39,798 customers' order information, including names, emails, shipping addresses, phone numbers and purchase details.",
    impact:
      "No seed phrases or private keys were exposed, but affected customers face elevated phishing and physical targeting risk due to leaked personal data.",
    response:
      "SafePal fixed the authorization bug, shortened data retention to 90 days, took down phishing sites related to the breach, and warned users to watch for targeted scams.",
    lessons:
      "Hardware wallets protect keys, but e-commerce and logistics systems can leak who owns them. Treat breach emails and messages as potential phishing, and never share recovery phrases in response.",
    sourceUrl:
      "https://www.reuters.com/legal/litigation/crypto-wallet-provider-safepal-discloses-data-breach-affecting-nearly-40000-2026-08-16/",
  },
  {
    id: "trezor-safepal-2026",
    year: 2026,
    date: "2026-08-16",
    platform: "Trezor & SafePal",
    incidentType: "data-breach",
    severity: "medium",
    title: "Trezor shipping provider and SafePal plug-in leaks combine to expose 53,487 hardware wallet buyers",
    description:
      "Over four days, Trezor and SafePal disclosed separate breaches that together exposed approximately 53,487 customer records, including names, emails and home addresses via a compromised shipping provider and an order-tracking flaw.",
    impact:
      "No wallets or seeds were directly compromised, but detailed owner lists and physical addresses raise the risk of phishing, extortion and physical threats against self-custody users.",
    response:
      "Both companies patched the issues, worked to remove fraudulent sites and communications, and warned customers about highly targeted phishing and potential physical threats.",
    lessons:
      "Data breaches around hardware wallet purchases can make self-custody users visible targets. Minimize the personal data you share, and assume any breach-linked message could be malicious.",
    sourceUrl:
      "https://www.forbes.com/sites/boazsobrado/2026/08/17/fraudulent-letters-trezor-safepal-warning-as-53487-owners-exposed/",
  },
  {
    id: "coldcard-2026",
    year: 2026,
    date: "2026-07-30",
    platform: "Coldcard (Coinkite)",
    incidentType: "wallet-exploit",
    severity: "high",
    title: "Coldcard firmware bug lets attackers reconstruct seeds and drain BTC",
    description:
      "A bug introduced in March 2021 Coldcard firmware weakened seed randomness on certain devices, causing wallets to fall back to a predictable software RNG instead of hardware entropy. In July 2026, attackers exploited this to brute-force keys and drain thousands of addresses.",
    impact:
      "Across multiple waves beginning July 30, roughly 1,367–1,816 BTC (≈$89–116M) were drained from 4,500+ addresses generated on vulnerable firmware, making this one of the largest hardware-wallet self-custody failures on record.",
    response:
      "Coinkite shipped patched firmware for affected models and urged users to migrate funds to wallets generated on fixed firmware, but upgrading cannot repair seeds created under the vulnerable RNG.",
    lessons:
      "Even reputable hardware wallets can ship subtle cryptographic bugs. For large holdings, consider defense-in-depth: multi-signature, diverse vendors, and occasional migration to fresh seeds created under audited conditions.",
    sourceUrl:
      "https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack",
  },
  {
    id: "ostium-2026",
    year: 2026,
    date: "2026-07-15",
    platform: "Ostium (Arbitrum perp DEX)",
    incidentType: "oracle-exploit",
    severity: "high",
    title: "Ostium price-report signer compromise drains $18–23.75M from OLP vault",
    description:
      "An attacker compromised Ostium's off-chain price-reporting infrastructure and a trusted PriceUpKeep forwarder, submitting fabricated but validly signed oracle prices that generated artificial trading profits.",
    impact:
      "Roughly $18–23.75M in USDC was drained from Ostium's OLP vault—the liquidity pool backing traders' PnL—while trader collateral remained safe. Liquidity providers bore the loss.",
    response:
      "Ostium paused trading, investigated with external firms, migrated to a new environment with hardened price-signing, and began designing a recovery plan for liquidity providers.",
    lessons:
      "DeFi protocols depend on off-chain components as much as on-chain code. When assessing risk, look beyond audits to oracle design, signer key management and how protocols cap or sanity-check price movements.",
    sourceUrl:
      "https://www.blockchainbreaches.com/en/breaches/ostium-2026",
  },

  // 2025 – Bybit mega hack
  {
    id: "bybit-2025",
    year: 2025,
    date: "2025-02-21",
    platform: "Bybit",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Bybit Ethereum cold wallet / Safe multisig compromise (~$1.4–1.5B theft)",
    description:
      "Attackers compromised the signing flow for Bybit's Ethereum cold wallet, spoofing the Safe{Wallet} front-end so multisig signers believed they were approving a routine cold-to-warm wallet transfer while actually upgrading to a malicious implementation contract.",
    impact:
      "Roughly 401,000+ ETH and large amounts of staked ETH (stETH, mETH, cmETH) worth about $1.4–1.5B were drained in minutes, making it the largest single crypto exchange theft recorded to date.",
    response:
      "Bybit kept other wallets operational, processed over 350,000 withdrawal requests in hours, replenished reserves via emergency loans and partner deposits, and launched a bounty program of up to 10% of stolen funds. Independent PoR audits later confirmed user liabilities remained fully backed.",
    lessons:
      "Even highly capitalized exchanges can suffer catastrophic wallet failures. As a user, treat PoR, incident history, and how an exchange responds under stress as core factors when deciding how much of your portfolio to keep on-platform.",
    sourceUrl: "https://rekt.news/bybit-rekt",
    relatedSlug: "/exchanges/bybit",
  },

  // 2023 – Ledger Connect Kit supply-chain attack
  {
    id: "ledger-connect-kit-2023",
    year: 2023,
    date: "2023-12-14",
    platform: "Ledger Connect Kit (Web3 library)",
    incidentType: "supply-chain",
    severity: "medium",
    title: "Ledger Connect Kit npm compromise injects wallet-drainer code into DeFi frontends",
    description:
      "A former Ledger employee fell victim to a phishing campaign that exposed their npm publishing session. Attackers pushed malicious versions of the @ledgerhq/connect-kit library (1.1.5–1.1.7), which many dApps loaded directly from CDN.",
    impact:
      "Around $600k in crypto was drained as DeFi users connected hardware wallets via compromised frontends, which silently altered transactions and approvals to route funds to attacker-controlled addresses.",
    response:
      "Ledger and affected dApps pulled the malicious versions, shipped a clean 1.1.8 release, coordinated with WalletConnect to disable the rogue project, and published detailed incident and mitigation reports.",
    lessons:
      "Supply-chain risk matters as much as wallet firmware. When using Web3 apps, prefer projects that pin library versions, use Subresource Integrity, and publish clear security updates when upstream dependencies are compromised.",
    sourceUrl: "https://www.ledger.com/blog/security-incident-report",
  },

  // 2020 – Ledger customer data breach
  {
    id: "ledger-data-2020",
    year: 2020,
    date: "2020-06-25",
    platform: "Ledger (e-commerce & marketing DB)",
    incidentType: "data-breach",
    severity: "medium",
    title: "Ledger e-commerce database breach exposes customer contact data",
    description:
      "An unauthorized third party accessed Ledger's e-commerce and marketing database via a leaked API key, later coupled with rogue Shopify support staff exporting additional customer records.",
    impact:
      "Roughly one million email addresses and over 270,000 detailed records (names, postal addresses, phone numbers) were exposed. Hardware wallets and funds remained secure, but users faced waves of phishing and extortion attempts.",
    response:
      "Ledger patched the breach, notified authorities and customers, hired external forensics, and began improving data-minimization and partner controls. Multiple updates emphasized that wallet seeds and private keys were unaffected.",
    lessons:
      "Data breaches often target personal information rather than funds. Always assume leaked email and address data will be used for phishing campaigns and never type seeds into software someone emails you.",
    sourceUrl:
      "https://www.ledger.com/addressing-the-july-2020-e-commerce-and-marketing-data-breach",
  },
];

const faqs = [
  {
    question: "Why include both exchanges and wallets on this incidents page?",
    answer:
      "Beginners face risk from both custodial exchanges and self-custody tools. Seeing incidents side by side helps you understand trade-offs between keeping funds on platforms and managing your own keys.",
  },
  {
    question: "Does one incident mean a platform or wallet is forever unsafe?",
    answer:
      "Not automatically. The key questions are how the team responded, whether users were made whole, what changed afterwards, and whether similar patterns repeat over time.",
  },
  {
    question: "Are these all the crypto security incidents that happened?",
    answer:
      "No. This is a curated educational timeline focusing on notable events from 2020 onward, with clear public documentation. It is not a complete, real-time feed.",
  },
  {
    question: "How often will this incidents timeline be updated?",
    answer:
      "We plan periodic updates as significant, well-documented incidents occur, especially those that teach new lessons for beginners and long-term holders.",
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
    headline: "Crypto Exchange & Wallet Security Incidents Timeline",
    description:
      "Curated overview of notable crypto exchange and wallet security incidents, with context, impact, and user-focused lessons.",
    image:
      "https://cryptosbeginner.com/images/exchange-incidents-hero.png",
    datePublished: "2026-07-18",
    dateModified: "2026-08-21",
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

function formatIncidentType(type: IncidentType) {
  switch (type) {
    case "exchange-hack":
      return "Exchange Hack";
    case "wallet-exploit":
      return "Wallet / Self-Custody Exploit";
    case "data-breach":
      return "Data Breach";
    case "oracle-exploit":
      return "Oracle / Price-Feed Exploit";
    case "supply-chain":
      return "Supply-Chain Attack";
    default:
      return type;
  }
}

export default function ExchangeIncidentsPage() {
  const years = Array.from(new Set(incidents.map((i) => i.year))).sort(
    (a, b) => b - a,
  );

  return (
    <>
      <Header />

      <main className="bg-white">
        <ExchangeIncidentsJsonLd />

        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Security • Incidents Timeline
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Crypto Exchange & Wallet Security Incidents
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  This page highlights notable exchange and wallet-related
                  incidents—breaches, oracle exploits, and data leaks—and
                  focuses on what you can learn from each event as a
                  beginner. It is a curated timeline, not a complete
                  record, designed to help you ask better safety questions.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Editor: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 18 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 21 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  How to read this timeline
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Each entry summarizes what happened, how users were
                  affected, how the platform responded, and what you can
                  learn. Use it together with our safety guides before
                  deciding where—and how—to store your funds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <nav
              aria-label="Quick links"
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Connect with other trust & safety guides
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  What Is Proof of Reserves?
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
                <Link
                  href="/learn/how-p2p-escrow-works"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How P2P Escrow Works
                </Link>
              </div>
            </nav>
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="max-w-none text-slate-900 text-sm sm:text-base leading-relaxed">
            <h2 className="text-lg font-semibold text-slate-900">
              Curated incidents by year
            </h2>
            <p className="mt-2">
              We group incidents by year. For each one, we highlight user
              impact and platform response, then pull out a simple lesson
              you can apply in your own setup—whether you use exchanges,
              hardware wallets, or DeFi protocols.
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
                      .map((incident) => (
                        <div
                          key={incident.id}
                          className="relative ml-4 flex gap-4 pb-6"
                        >
                          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                          <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                            <div className="flex flex-wrap items-start justify-between gap-3">
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
                                  {formatIncidentType(
                                    incident.incidentType,
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

                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              Lesson for beginners
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.lessons}
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
              We prioritize incidents with clear public documentation from
              multiple sources—official announcements, reputable news
              outlets, independent security firms and incident archives.
              The goal is not to track every minor issue, but to build an
              educational overview of major events and patterns beginners
              should know about.[web:117][web:129][web:143][web:118]
            </p>
            <p className="mt-2">
              When new, well-documented incidents occur, we may add them to
              this page along with links to our reviews and safety guides.
              That means details here can evolve over time as the crypto
              ecosystem learns and improves.
            </p>

            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              FAQ: Exchange & wallet security incidents
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
                This timeline simplifies complex situations and focuses on
                education. Always read primary sources and consider your
                own risk tolerance and local regulations before using any
                platform or hardware wallet.
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