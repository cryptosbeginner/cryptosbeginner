import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange and Wallet Security Incidents Timeline",
  description:
    "A curated timeline of notable crypto exchange and wallet security incidents, with context, impact and practical lessons for beginners.",
};

type IncidentSeverity = "low" | "medium" | "high";

type IncidentType =
  | "exchange-hack"
  | "wallet-exploit"
  | "data-breach"
  | "oracle-exploit"
  | "misuse-of-funds";

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
  // Origin story: Mt. Gox
  {
    id: "mtgox-2014",
    year: 2014,
    date: "2014-02-28",
    platform: "Mt. Gox",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Mt. Gox collapse after years of undetected hot wallet thefts",
    description:
      "Launched in 2010, Mt. Gox grew into the dominant Bitcoin exchange before collapsing in early 2014. Later analysis suggested that most of the missing coins had been leaking from its hot wallet since late 2011, far beyond a single one-off hack.",
    impact:
      "Around 744,408 customer bitcoins and 100,000 company-held bitcoins were lost. Trading halted, the site was taken offline and the company entered bankruptcy, leaving many early users locked in multi-year recovery proceedings.",
    response:
      "The company first blamed transaction malleability, then entered civil rehabilitation. Ongoing court-supervised processes aim to redistribute remaining assets to creditors and former customers.",
    lessons:
      "Mt. Gox showed that basic hot-wallet security failures could silently drain an exchange over years. It is one reason modern platforms lean heavily on cold storage, multi-signature controls and external audits.",
    sourceUrl: "https://en.wikipedia.org/wiki/Mt._Gox",
  },

  // KuCoin 2020
  {
    id: "kucoin-2020",
    year: 2020,
    date: "2020-09-25",
    platform: "KuCoin",
    incidentType: "exchange-hack",
    severity: "high",
    title: "KuCoin hot wallet compromise and rapid token reissues",
    description:
      "In September 2020, Singapore-based exchange KuCoin detected unauthorised outflows from its hot wallets. Private keys controlling those wallets had been exposed, allowing attackers to move funds into their own addresses and immediately begin swapping assets on on-chain markets.",
    impact:
      "Roughly 281 million dollars worth of assets across Bitcoin, Ether and many ERC 20 tokens were drained from KuCoin hot wallets. Cold wallets remained intact, and later coordination with token issuers allowed a majority of the stolen ERC 20 tokens to be frozen and reissued.",
    response:
      "KuCoin moved remaining hot wallet funds to new wallets, paused deposits and withdrawals, and launched an investigation with law enforcement and blockchain analytics firms. An insurance fund and issuer support eventually covered most user losses.",
    lessons:
      "KuCoin underlined the importance of strict hot wallet key management and incident response. It also showed how token contracts, on-chain tracing and coordinated reissues can limit damage for some asset types but not for base-layer coins like Bitcoin.",
    sourceUrl: "https://www.coindesk.com/markets/2020/09/26/over-280m-drained-in-kucoin-crypto-exchange-hack",
  },

  // FTX 2022
  {
    id: "ftx-2022",
    year: 2022,
    date: "2022-11-11",
    platform: "FTX and Alameda Research",
    incidentType: "misuse-of-funds",
    severity: "high",
    title: "FTX and Alameda collapse after secret use of customer assets",
    description:
      "From 2019 to 2022, FTX marketed itself as a safe and liquid exchange while its affiliate Alameda Research quietly drew billions of dollars of customer assets via hidden credit lines and bank accounts. Special code paths exempted Alameda from standard risk controls, letting it run a large negative balance backed by user deposits.",
    impact:
      "Regulators later alleged that over 8 billion dollars of customer deposits had been misappropriated or lost. When confidence broke in November 2022, withdrawal requests revealed a massive shortfall. FTX and Alameda filed for bankruptcy, leaving millions of users exposed and reshaping trust in centralised platforms.",
    response:
      "New management began forensic work inside the bankruptcy estate. The SEC, CFTC and other regulators filed civil charges, and criminal proceedings targeted the former leadership. Recovery efforts continue, with partial distributions to creditors and detailed public reporting on the scheme.",
    lessons:
      "FTX showed that financial failure can come not only from external hacks but from internal misuse and commingling of funds. Transparent proof of reserves, clear segregation of customer assets and strong governance are critical when choosing an exchange.",
    sourceUrl: "https://www.sec.gov/newsroom/press-releases/2022-219",
  },

  // 2020 Ledger data breach
  {
    id: "ledger-data-2020",
    year: 2020,
    date: "2020-07-28",
    platform: "Ledger (e-commerce and marketing data)",
    incidentType: "data-breach",
    severity: "medium",
    title: "Ledger customer contact data breach and leak",
    description:
      "An attacker gained access to Ledger’s e-commerce and marketing database via a leaked API key. A later incident involving a rogue partner support agent compounded the problem and led to a large set of customer records being exposed online.",
    impact:
      "Around one million email addresses and more than 270,000 detailed records, including names, postal addresses and phone numbers, were leaked. Hardware wallets and private keys remained secure, but affected customers faced waves of phishing and extortion attempts.",
    response:
      "Ledger patched the underlying issues, notified authorities and users, and published several updates explaining what happened. The company increased focus on data minimisation and partner oversight to reduce the impact of similar breaches.",
    lessons:
      "The Ledger breach highlighted that data about who owns hardware wallets can be almost as sensitive as private keys themselves. Users should expect phishing after such breaches and never type recovery phrases into software or forms that claim to be “checking” wallet safety.",
    sourceUrl:
      "https://www.ledger.com/addressing-the-july-2020-e-commerce-and-marketing-data-breach",
  },

  // 2023 Ledger Connect Kit supply chain
  {
    id: "ledger-connect-kit-2023",
    year: 2023,
    date: "2023-12-14",
    platform: "Ledger Connect Kit",
    incidentType: "exchange-hack",
    severity: "medium",
    title: "Ledger Connect Kit library compromise and DeFi wallet drainer",
    description:
      "A former Ledger employee’s credentials were compromised, allowing attackers to push malicious versions of the Ledger Connect Kit JavaScript library to npm. Many DeFi frontends loaded that library directly, and the poisoned versions injected wallet drainer logic into dApps.",
    impact:
      "Around 600,000 dollars in crypto was stolen as users connected hardware wallets to compromised DeFi sites and signed transactions that had been silently altered. The incident showed that supply chain risk in Web frontends can undermine even strong hardware wallet practices.",
    response:
      "Ledger and affected dApps pulled and replaced the malicious library versions, coordinated with WalletConnect to cut off the rogue project, and published technical incident reports and mitigation guidance for developers.",
    lessons:
      "The Connect Kit compromise illustrated that protecting self-custody involves both wallet firmware and the Web applications people use to interact with it. Projects benefit from pinning dependencies, using integrity checks and reacting quickly to upstream compromises.",
    sourceUrl: "https://www.ledger.com/blog/security-incident-report",
  },

  // 2020s to 2026 newer incidents

  {
    id: "kucoin-2020-archive",
    year: 2020,
    date: "2020-09-24",
    platform: "KuCoin (archive note)",
    incidentType: "exchange-hack",
    severity: "medium",
    title: "KuCoin laundering trail and token reissues",
    description:
      "Independent incident archives have tracked how attackers moved KuCoin’s stolen funds through decentralised exchanges and mixing services. A large portion of token losses were mitigated by issuer freezes and reissues, while base-layer coins remained irrecoverable.",
    impact:
      "The hack settled as one of the largest hot wallet compromises at the time, and its laundering routes helped shape how exchanges and analytics firms monitor abuse on DeFi rails.",
    response:
      "KuCoin and partners traced flows, coordinated with issuers and gradually reduced the outstanding loss. Insurance funds and reissues helped restore user balances.",
    lessons:
      "This incident reinforced the practical difference between token contracts that can be frozen or reissued and base-layer coins that cannot be rolled back. Both types of assets need careful risk management.",
    sourceUrl: "https://www.blockchainbreaches.com/en/breaches/kucoin-2020",
  },

  // Coldcard 2026
  {
    id: "coldcard-2026",
    year: 2026,
    date: "2026-07-30",
    platform: "Coldcard (Coinkite)",
    incidentType: "wallet-exploit",
    severity: "high",
    title: "Coldcard firmware bug and large self-custody losses",
    description:
      "A bug introduced in March 2021 reduced seed randomness on some Coldcard devices by falling back to a predictable software random number generator. In 2026, attackers exploited that weakness to brute force keys and drain funds from addresses created on vulnerable firmware.",
    impact:
      "Across multiple waves, more than one thousand bitcoins were taken from thousands of wallets, making this one of the largest hardware wallet failures recorded. Only wallets seeded on fixed firmware or other devices were unaffected.",
    response:
      "Coinkite released patched firmware and urged users to move funds to wallets generated with corrected randomness. However, upgrading firmware could not repair seeds that had already been created under the flawed generator.",
    lessons:
      "The Coldcard incident showed that even specialised hardware can have subtle cryptographic bugs. For large holdings, many users now consider multi-signature setups, diverse vendors and occasional migrations to fresh seeds as part of defence in depth.",
    sourceUrl:
      "https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack",
  },

  // SafePal / Trezor 2026 data leaks
  {
    id: "safepal-2026",
    year: 2026,
    date: "2026-08-16",
    platform: "SafePal and Trezor",
    incidentType: "data-breach",
    severity: "medium",
    title: "SafePal and Trezor customer data exposures and phishing risk",
    description:
      "Separate incidents at SafePal and a Trezor shipping provider exposed tens of thousands of customer order records, including names, email addresses and home addresses. The leaks did not reveal recovery phrases or keys but made hardware wallet buyers more visible to attackers.",
    impact:
      "Around fifty thousand records were exposed across both companies, raising the risk of targeted phishing, extortion attempts and physical threats against self-custody users.",
    response:
      "SafePal and Trezor fixed the underlying issues, notified customers and authorities, and worked to remove malicious phishing sites and communications that used the leaked lists.",
    lessons:
      "These incidents showed that privacy around who owns hardware wallets is itself a safety issue. Users benefit from treating any breach-linked email or message as suspect and keeping recovery phrases completely offline.",
    sourceUrl:
      "https://www.forbes.com/sites/boazsobrado/2026/08/17/fraudulent-letters-trezor-safepal-warning-as-53487-owners-exposed/",
  },

  // Bybit 2025 mega hack
  {
    id: "bybit-2025",
    year: 2025,
    date: "2025-02-21",
    platform: "Bybit",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Bybit Ethereum wallet compromise and multi-billion dollar loss",
    description:
      "Attackers compromised the signing flow for Bybit’s main Ethereum wallet and associated contracts. They tricked signers into approving changes that moved control to a malicious implementation, then drained large holdings of Ether and staked Ether in a short period.",
    impact:
      "Reports put the loss at roughly 1.4 to 1.5 billion dollars in Ether and related assets, making it the largest single exchange theft recorded at that time. The incident triggered heavy scrutiny of custody arrangements for large centralised platforms.",
    response:
      "Bybit processed an intense wave of withdrawals, secured emergency funding and loans, and worked to restore reserves. The platform launched bounty offers and detailed post incident communications while regulators and law enforcement investigated.",
    lessons:
      "Bybit’s loss highlighted that custody risk remains central even for large and well-known exchanges. Users are encouraged to treat platform size and marketing as secondary to technical custody practices and contingency planning.",
    sourceUrl: "https://rekt.news/bybit-rekt",
    relatedSlug: "/exchanges/bybit",
  },

  // Ostium DeFi oracle exploit
  {
    id: "ostium-2026",
    year: 2026,
    date: "2026-07-15",
    platform: "Ostium (Arbitrum perp DEX)",
    incidentType: "oracle-exploit",
    severity: "high",
    title: "Ostium price signer compromise and vault drain",
    description:
      "Ostium, a perpetuals protocol on Arbitrum, suffered an exploit after an attacker compromised its off chain price reporting system. They submitted forged but validly signed oracle prices and routed them through a task scheduler to manufacture artificial trading profits.",
    impact:
      "Around 18 to 24 million dollars in stablecoins were drained from the liquidity vault backing trader positions. Trader collateral remained safe, but liquidity providers bore the loss.",
    response:
      "The protocol paused trading, brought in external investigators, hardened its off chain price signing environment and began to design recovery options for affected liquidity providers.",
    lessons:
      "Ostium’s experience showed that DeFi risk is not limited to smart contracts. Off chain infrastructure such as oracle signers and automation keys must be treated as critical security components.",
    sourceUrl: "https://www.blockchainbreaches.com/en/breaches/ostium-2026",
  },
];

const faqs = [
  {
    question: "Why include both exchanges and wallets on this incidents page?",
    answer:
      "Beginners face risk from both custodial exchanges and self-custody tools. Seeing incidents side by side helps you understand trade offs between keeping funds on platforms and managing your own keys.",
  },
  {
    question: "Does one incident mean a platform or wallet is forever unsafe?",
    answer:
      "Not automatically. The key questions are how the team responded, whether users were made whole, what changed afterwards and whether similar patterns repeat over time.",
  },
  {
    question: "Is this all of the crypto security incidents that happened?",
    answer:
      "No. This is a curated educational timeline focusing on notable events with clear public documentation. It is not a complete, real time feed.",
  },
  {
    question: "How often will this incidents timeline be updated?",
    answer:
      "It will be updated periodically as significant incidents occur, especially ones that teach new lessons for beginners and long term holders.",
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
    headline: "Crypto Exchange and Wallet Security Incidents Timeline",
    description:
      "Curated overview of notable crypto exchange and wallet security incidents, with context, impact and user focused lessons.",
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
        dangerouslySetInnerHTML={{ __html: safeArticle }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

function formatIncidentType(type: IncidentType) {
  switch (type) {
    case "exchange-hack":
      return "Exchange hack";
    case "wallet-exploit":
      return "Wallet or self custody exploit";
    case "data-breach":
      return "Data breach";
    case "oracle-exploit":
      return "Oracle or price feed exploit";
    case "misuse-of-funds":
      return "Misuse of customer funds";
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
                  Security · Incidents timeline
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Crypto Exchange and Wallet Security Incidents
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  This page highlights notable exchange and wallet related
                  incidents. It aims to show where things have gone wrong, how
                  teams responded and what you can learn as a beginner. It is a
                  curated timeline, not a complete record, designed to help you
                  ask better safety questions.
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
                  Each entry summarises what happened, how users were affected,
                  how the platform responded and a simple lesson. Use it
                  together with our safety guides before deciding where and how
                  to store your funds.
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
                Connect with other trust and safety guides
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  What is Proof of Reserves
                </Link>
                <Link
                  href="/learn/how-to-check-exchange-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How to check PoR
                </Link>
                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Security checklist
                </Link>
                <Link
                  href="/learn/seed-phrase-security"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Seed phrase security
                </Link>
                <Link
                  href="/learn/how-p2p-escrow-works"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How P2P escrow works
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
              impact and platform response, then pull out a simple lesson you
              can apply in your own setup, whether you use exchanges, hardware
              wallets or DeFi protocols.
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
                                  {incident.date} · {incident.platform}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                  {incident.title}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-white">
                                  {formatIncidentType(incident.incidentType)}
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
                                  View source or post incident report
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
              We prioritise incidents with clear public documentation from
              multiple sources. The goal is not to track every minor issue but
              to build an educational overview of major events and patterns
              that beginners should know about. Incidents range from early
              exchange failures like Mt. Gox to more recent wallet bugs and
              DeFi exploits.
            </p>
            <p className="mt-2">
              When new, well documented incidents occur, we may add them to
              this page along with links to our reviews and safety guides.
              Details here can evolve over time as the crypto ecosystem
              learns and improves.
            </p>

            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              FAQ: Exchange and wallet security incidents
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
                education. Always read primary sources and consider your own
                risk tolerance and local regulations before using any platform
                or hardware wallet.
              </p>
              <p>
                Spot an error or missing context. Email{" "}
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