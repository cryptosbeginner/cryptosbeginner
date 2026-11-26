import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-11-26";

export const metadata: Metadata = {
  title:
    "Spain Crypto License Guide 2026: CNMV Authorisation and MiCA CASP Rules",
  description:
    "Spain has no separate national crypto license: since 1 July 2026 a crypto firm needs MiCA CASP authorisation from the CNMV, an Article 60 notification, or an EU passport. This guide explains each route, the capital tiers, the statutory timelines and the firms on the register.",
  alternates: {
    canonical: `${SITE_URL}/regions/spain/crypto-license`,
    languages: {
      en: `${SITE_URL}/regions/spain/crypto-license`,
      "x-default": `${SITE_URL}/regions/spain/crypto-license`,
    },
  },
  openGraph: {
    title: "Spain Crypto License Guide 2026",
    description:
      "The routes behind the search for a Spain crypto license: CNMV authorisation under MiCA, Article 60 notifications and the EU passport, with official sources.",
    url: `${SITE_URL}/regions/spain/crypto-license`,
    type: "article",
  },
};

const regimes = [
  {
    name: "CASP authorisation (Article 63)",
    who: "CNMV",
    applies:
      "Crypto firms that are not already regulated financial institutions: exchanges, brokers, custodians and transfer or advice providers established in Spain.",
    key: "A full application assessed by the CNMV against MiCA's requirements. Own funds must meet the class tier for the services offered: EUR 50,000, EUR 125,000 or EUR 150,000, or a quarter of the previous year's fixed overheads if that is higher.",
  },
  {
    name: "Article 60 notification",
    who: "CNMV",
    applies:
      "Credit institutions, investment firms, e-money institutions and other already-authorised financial entities that want to add crypto-asset services.",
    key: "No new authorisation: the firm notifies the CNMV at least 40 working days before it starts providing the services. Every Spanish entry on this route so far is a bank.",
  },
  {
    name: "EU passport",
    who: "Home-state authority, listed by the CNMV",
    applies:
      "CASPs authorised in another EU or EEA member state that want to serve Spanish clients.",
    key: "Most big names in Spain arrive this way: Coinbase from Luxembourg, Kraken from Ireland, OKX and Crypto.com from Malta. On the CNMV list they appear as PSC en régimen de LP, freedom to provide services, with their home country named.",
  },
  {
    name: "Banco de España VASP register (closed)",
    who: "Banco de España",
    applies:
      "The pre-MiCA national register of virtual currency exchange and wallet providers, created for anti-money-laundering purposes only.",
    key: "Registration was never a licence, an authorisation or an endorsement, and it conferred no prudential supervision. The register closed on 1 July 2026 and can now be consulted only as historical data.",
  },
  {
    name: "Token issuance (Titles III and IV of MiCA)",
    who: "CNMV and Banco de España",
    applies:
      "Issuers of asset-referenced tokens and e-money tokens offered to the public in Spain.",
    key: "A separate regime from CASP authorisation: white paper notification or approval, reserve and redemption rules, and for e-money tokens issuance restricted to credit institutions and e-money institutions.",
  },
  {
    name: "Company formation",
    who: "Notary and the Registro Mercantil",
    applies: "Every business, before any of the routes above.",
    key: "Incorporating a Spanish company (usually an S.L.) is a corporate step, not a regulatory approval. A company registration number says nothing about permission to provide crypto services.",
  },
];

const steps = [
  {
    title: "Choose the route that fits your status",
    text: "If you are a crypto firm with no financial licence, you need Article 63 authorisation. If you are already a bank, investment firm or e-money institution, you notify under Article 60. If you are authorised elsewhere in the EU, you passport instead of applying in Spain.",
  },
  {
    title: "Incorporate and build substance in Spain",
    text: "An applicant CASP must be established in Spain with its registered office and place of effective management here, a management body that meets MiCA's fit and proper standards, and shareholders and qualifying holders who pass the CNMV's assessment.",
  },
  {
    title: "Meet the capital tier for your services",
    text: "MiCA sets three own-funds classes: EUR 50,000 for services such as order reception, advice and portfolio management; EUR 125,000 for exchange and execution services; and EUR 150,000 for custody and operating a trading platform. The requirement is the higher of the class figure or a quarter of the previous year's fixed overheads, and it can be met with own funds or an equivalent insurance policy.",
  },
  {
    title: "Prepare the application pack",
    text: "The CNMV publishes a manual for CASP authorisation applications. The pack covers the programme of operations, governance and internal controls, anti-money-laundering systems, custody and segregation arrangements, ICT risk management, complaints handling and the prudential safeguard calculation.",
  },
  {
    title: "File with the CNMV and run the statutory clock",
    text: "Under MiCA, the authority has 25 working days to assess whether the application is complete, and 40 working days from a complete file to grant or refuse. Requests for missing information extend the real timeline: practitioners estimate 3 to 6 months for a complete, well-prepared file, and longer where the file needs work. Those figures are estimates, not CNMV commitments.",
  },
  {
    title: "Do not operate while the application is pending",
    text: "A pending application gives no right to provide services. Spain's transitional cover ended on 1 July 2026, so since that date only authorised, notified or passported firms may serve Spanish clients, with no exception for firms mid-application.",
  },
  {
    title: "Stay authorised",
    text: "Authorisation brings ongoing duties: maintaining own funds, safeguarding and segregating client crypto, complaints handling, conduct and disclosure rules, and reporting. An authorisation that is not used within 12 months must be withdrawn, and the CNMV can withdraw it for serious breaches.",
  },
];

const authorisedCasps = [
  "Bitcoinforme S.L. (Bit2Me), 31 October 2025: the first Spanish CASP authorisation, and the broadest, covering seven MiCA services",
  "DUE Network S.L., 12 June 2026",
  "Criptan Trade S.L. (Criptan), 26 June 2026",
  "Crossmint Europe S.L., 26 June 2026",
  "Minos Global S.L., 30 June 2026",
  "Prosegur Custodia de Activos Digitales S.L.U. (Prosegur Crypto), 30 June 2026, custody-focused",
  "IQANA Technologies S.L., 10 July 2026, portfolio management only",
  "Basque Pay S.L. (Fazil Crypto), 31 July 2026, reception and transmission of orders only",
  "Fintech Payments PSC S.L. (Cryptopocket), 31 July 2026",
  "Prakma Markets S.L. (GoIn Crypto), 9 October 2026",
];

const notifiedBanks = [
  "Banco Bilbao Vizcaya Argentaria S.A. (BBVA), 5 March 2025",
  "CECABANK S.A., 24 July 2025",
  "OPEN BANK S.A. (Openbank), 24 July 2025",
  "RENTA 4 BANCO S.A., 21 November 2025",
  "CAIXABANK S.A., 27 March 2026",
  "KUTXABANK S.A., 27 March 2026",
  "ABANCA Corporación Bancaria S.A., 6 November 2026",
];

const faqs = [
  {
    q: "Is there a crypto license in Spain?",
    a: "There is no separate Spanish national licence. Since MiCA applied in full, the permission to provide crypto-asset services in Spain is a CASP authorisation granted by the CNMV under Article 63 of MiCA, an Article 60 notification by an already-regulated financial institution, or an authorisation from another member state passported into Spain. The old Banco de España register was an anti-money-laundering registration only, and it closed on 1 July 2026.",
  },
  {
    q: "Who issues crypto authorisations in Spain?",
    a: "The Comisión Nacional del Mercado de Valores (CNMV), Spain's securities regulator, is the national competent authority for CASP authorisation and supervision under MiCA. ESMA does not grant authorisations; it publishes the EU-wide interim register built from the national authorities' data. The Banco de España keeps roles around e-money tokens and payments, but it no longer registers crypto service providers.",
  },
  {
    q: "How much does a Spain crypto license cost?",
    a: "No published CNMV tariff for a CASP application could be established for this guide: sources contradict each other, and the CNMV fee schedule does not publish a CASP application fee. Treat any consultancy quoting one fixed official fee with caution. The real cost floor is the prudential requirement: own funds of EUR 50,000, EUR 125,000 or EUR 150,000 depending on the services, or a quarter of fixed overheads if higher, plus the legal and compliance cost of the application itself.",
  },
  {
    q: "How long does CNMV authorisation take?",
    a: "MiCA sets the statutory clock: 25 working days for the CNMV to assess completeness, then 40 working days to decide on a complete application. In practice, information requests pause and extend the process, and practitioners estimate 3 to 6 months for a complete file. Those practice figures are estimates, not regulator commitments, and a firm may not operate while it waits.",
  },
  {
    q: "Can an exchange authorised elsewhere in the EU serve Spain?",
    a: "Yes. A CASP authorised in any member state can passport its services across the EU, and most large platforms serving Spain do exactly that: Coinbase is authorised in Luxembourg, Kraken in Ireland, OKX and Crypto.com in Malta, Bitpanda in Austria and Bitvavo in the Netherlands. They appear on the CNMV's list as providers under the freedom to provide services, with their home authority named.",
  },
  {
    q: "What happened to the Banco de España crypto register?",
    a: "It was an anti-money-laundering register of virtual currency exchange and custody wallet providers, and registration never amounted to authorisation or supervision. Firms on it by 30 December 2024 received transitional cover under MiCA for up to 18 months. Spain took the full period, it ended on 1 July 2026, and the register closed the same day. It survives only as historical data.",
  },
  {
    q: "Is Binance licensed in Spain?",
    a: "As of the register checks behind this guide in November 2026, Binance does not appear in ESMA's interim register or on the CNMV's list of crypto-asset service providers, so it holds no MiCA authorisation covering Spain. Registers change, so check the live CNMV list and the ESMA register before relying on any platform's status, including this one.",
  },
];

const sources = [
  {
    label: "CNMV (Comisión Nacional del Mercado de Valores)",
    href: "https://www.cnmv.es",
  },
  {
    label: "Banco de España",
    href: "https://www.bde.es",
  },
  {
    label: "ESMA (European Securities and Markets Authority)",
    href: "https://www.esma.europa.eu",
  },
  {
    label: "MiCA Regulation (EU) 2023/1114, full text",
    href: "https://eur-lex.europa.eu/eli/reg/2023/1114/oj",
  },
];

export default function SpainCryptoLicensePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Spain Crypto License Guide 2026: CNMV Authorisation and MiCA CASP Rules",
      dateModified: UPDATED,
      mainEntityOfPage: `${SITE_URL}/regions/spain/crypto-license`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Regions",
          item: `${SITE_URL}/regions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Spain",
          item: `${SITE_URL}/regions/spain`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Spain Crypto License Guide",
          item: `${SITE_URL}/regions/spain/crypto-license`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="mb-3 text-sm font-medium text-amber-300">
              Spain licensing guide · Updated{" "}
              <time dateTime={UPDATED}>November 26, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Spain crypto license: CNMV authorisation under MiCA
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Search for a Spain crypto license and you will find
              consultancies selling one. Spain does not issue a national
              one. Since 1 July 2026 the only permissions that count are
              European: a MiCA authorisation from the CNMV, a notification
              by a regulated bank or investment firm, or an authorisation
              passported in from another member state. This guide maps
              each route to its official source.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#regimes"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                See the routes
              </a>

              <a
                href="#steps"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Authorisation steps
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
                Guide note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                This page is educational and is not legal advice.
                Regulatory registers change often; the firm lists here come
                from ESMA&apos;s interim MiCA register, file updated 18
                November 2026, cross-checked against the CNMV&apos;s list
                on 26 November 2026. Confirm your obligations with the
                regulators and qualified counsel before launching.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                One licence, valid across the EU
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                A CNMV authorisation is a MiCA authorisation: it passports
                to every member state, and authorisations from other
                member states passport into Spain the same way.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                The old register is closed
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                The Banco de España VASP register was an anti-money
                laundering list, never a licence. It closed on 1 July 2026
                when Spain&apos;s 18-month transition ended.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                No published application fee
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                No CNMV tariff for a CASP application could be established
                from official sources. The binding cost is capital: EUR
                50,000 to EUR 150,000 of own funds by service class.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                The short answer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Why Spain has no national crypto license
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Spain regulated crypto in two eras. In the first, from
                2021, the Banco de España kept a register of virtual
                currency exchange and wallet providers for anti-money
                laundering purposes. Registration was widely marketed as a
                Spanish crypto licence, but it never was one: it involved
                no prudential supervision and no assessment of the
                firm&apos;s finances or fitness beyond AML checks.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                The second era is MiCA, the EU regulation that has applied
                to crypto-asset service providers since 30 December 2024.
                Spain designated the CNMV as its competent authority and
                took the full 18-month transition MiCA allowed for firms
                already on the Banco de España register. That transition
                ended on 1 July 2026, and the register closed with it.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                So the honest answer to &quot;how do I get a crypto
                license in Spain&quot; is: you do not apply for a Spanish
                one. You apply for a European authorisation that happens
                to be granted in Spain, or you bring one from another
                member state. The routes below are the full list.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">Which route applies to you</h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Crypto-native firm:
                  </span>{" "}
                  Article 63 authorisation from the CNMV.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Bank, investment firm or e-money institution:
                  </span>{" "}
                  Article 60 notification, at least 40 working days before
                  launch.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Authorised elsewhere in the EU:
                  </span>{" "}
                  passport your existing authorisation into Spain.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Only on the old Banco de España register:
                  </span>{" "}
                  your transitional cover ended on 1 July 2026.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Application still pending:
                  </span>{" "}
                  you may not operate until it is granted.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="regimes" className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                The regulatory map
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Six routes and records, six different jobs
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {regimes.map((regime) => (
                <div
                  key={regime.name}
                  className="grid gap-3 px-6 py-5 md:grid-cols-[210px_1fr]"
                >
                  <div>
                    <p className="font-bold text-slate-900">{regime.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {regime.who}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm leading-6 text-slate-700">
                      {regime.applies}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {regime.key}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Read the MiCA Regulation itself →
          </a>
        </section>

        <section id="steps" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Step by step
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              How to get authorised for crypto in Spain
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              The steps below follow the Article 63 route for a
              crypto-native firm. Notification and passport routes skip
              the application itself but keep the substance, capital and
              conduct requirements that sit behind it.
            </p>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Proof the system is live
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Firms on the official registers
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              ESMA&apos;s interim MiCA register, file updated 18 November
              2026, lists 17 entities with Spain as their home state: 10
              CASP authorisations granted by the CNMV and 7 notifications
              by Spanish banks. Around 200 further firms, most of them
              authorised elsewhere in the EU, appear on the CNMV&apos;s
              list as able to serve Spain under the passport. Statuses
              change, so the live registers, not any static guide, are
              the source of truth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Authorised by the CNMV (Article 63)
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {authorisedCasps.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Banks that notified (Article 60)
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {notifiedBanks.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Notification is open to firms that already hold a
                financial authorisation. Every Spanish notification so
                far has come from a bank, starting with BBVA in March
                2025, before any crypto-native firm was authorised.
              </p>
            </div>
          </div>

          <a
            href="https://www.cnmv.es"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Check the CNMV list of crypto-asset service providers →
          </a>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
              What changed
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              1 July 2026: the transition ended
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Spain used the longest transition MiCA allowed. Providers
              entered in the Banco de España register on 30 December 2024
              could keep operating for 18 months while they sought
              authorisation. On 1 July 2026 that cover expired for
              everyone at once: the register closed, and from that date
              only CNMV-authorised CASPs, Article 60 notified institutions
              and passported EU firms may provide crypto-asset services
              in Spain. A firm whose application was still pending lost
              its right to operate along with everyone else. For users,
              the practical test is simple: if a provider serving Spain
              is not on the CNMV list or in ESMA&apos;s register today, it
              is not authorised to serve Spain today, whatever its website
              says about registrations obtained before MiCA.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Direct answers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Spain crypto licensing questions
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  {item.q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Before you launch: the checklist
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Decide which route your status triggers: authorisation, notification or passport.",
                "Confirm your services against MiCA's list and the capital class they fall in.",
                "Build the application pack against the CNMV's authorisation manual.",
                "Do not serve Spanish clients while an application is pending.",
                "Check the live CNMV list and ESMA register before relying on any firm's status.",
                "Plan for ongoing own funds, safeguarding and complaints duties after authorisation.",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  ✓ {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/regions/spain"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Spain exchanges guide
              </Link>

              <Link
                href="/regions/norway/crypto-license"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Norway licensing guide
              </Link>

              <Link
                href="/regions/canada/crypto-license"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Canada licensing guide
              </Link>

              <Link
                href="/methodology"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Read our methodology
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Primary sources
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every requirement in this guide traces to one of these
              official pages. Registers and conditions change, so check
              them before acting.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {sources.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-700 hover:underline"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. Not
              legal, financial or tax advice. Spanish crypto regulation
              now sits inside the EU MiCA framework, which is still
              bedding in, and whether an authorisation route applies
              depends on your exact business model and existing licences.
              Confirm your obligations with the CNMV, the Banco de España
              and ESMA&apos;s register, and take qualified legal advice
              before launching or serving Spanish clients.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
