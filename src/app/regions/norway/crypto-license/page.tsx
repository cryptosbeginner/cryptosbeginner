import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-11-26";

export const metadata: Metadata = {
  title:
    "Norway Crypto License Guide 2026: CASP Authorisation, MiCA and Finanstilsynet",
  description:
    "Norway has no standalone crypto license. Since July 2025, crypto firms need MiCA CASP authorisation from Finanstilsynet under the Crypto Assets Act. This guide explains the old VASP registration, the new authorisation, timelines and the first authorised firms.",
  alternates: {
    canonical: `${SITE_URL}/regions/norway/crypto-license`,
    languages: {
      en: `${SITE_URL}/regions/norway/crypto-license`,
      "x-default": `${SITE_URL}/regions/norway/crypto-license`,
    },
  },
  openGraph: {
    title: "Norway Crypto License Guide 2026",
    description:
      "CASP authorisation under MiCA is Norway's crypto route now. Requirements, published timelines, fees and official sources.",
    url: `${SITE_URL}/regions/norway/crypto-license`,
    type: "article",
  },
};

const services = [
  "Custody and administration of crypto-assets for clients",
  "Operating a trading platform for crypto-assets",
  "Exchanging crypto-assets for funds, or for other crypto-assets",
  "Executing orders, and receiving and transmitting orders, for clients",
  "Placing crypto-assets, advice and portfolio management",
  "Transfer services for crypto-assets on behalf of clients",
];

const timeline = [
  {
    step: "Receipt confirmed",
    detail:
      "Finanstilsynet confirms receipt of a CASP application within 5 working days.",
  },
  {
    step: "Completeness check",
    detail:
      "Within 25 working days, Finanstilsynet assesses whether the application is complete. If information is missing, it sets a deadline of 5 to 20 working days to supply it, and it can refuse to assess applications that stay incomplete.",
  },
  {
    step: "Assessment",
    detail:
      "Once the application is complete, the statutory assessment period is 40 working days. Finanstilsynet may request further information within the first 20 working days.",
  },
  {
    step: "Decision",
    detail:
      "The decision to grant or refuse authorisation is notified within 5 working days of the assessment ending.",
  },
];

const faqs = [
  {
    q: "Is there a crypto license in Norway?",
    a: "There is no standalone Norwegian crypto licence, and there never was one. From 2018 to 2025, exchange and custody providers registered with Finanstilsynet under anti-money laundering rules. Since 1 July 2025, the Crypto Assets Act applies the EU's MiCA regulation in Norway, and offering crypto-asset services requires CASP authorisation from Finanstilsynet. Registration alone no longer authorises anyone.",
  },
  {
    q: "Can I still register as a VASP in Norway?",
    a: "Not as a route to market. Registered exchange and custody providers were allowed to keep operating under a transitional rule, first to 30 December 2025 and then extended to 30 June 2026, or until their authorisation was granted or refused. That period has expired. Finanstilsynet expects unauthorised providers to wind down in an orderly way, and providing crypto-asset services without authorisation can be punished with fines or imprisonment of up to 3 years.",
  },
  {
    q: "What is a CASP and who needs authorisation?",
    a: "A CASP is a crypto-asset service provider under MiCA. Authorisation is required to provide services such as custody for clients, operating a trading platform, exchanging crypto for funds or other crypto, executing or transmitting orders, advice, portfolio management and transfer services. The firm must have a presence in the EEA. Firms that already hold certain financial licences, such as credit institutions and investment firms, can use a notification route instead, at least 40 working days before they start.",
  },
  {
    q: "How long does CASP authorisation take in Norway?",
    a: "Finanstilsynet publishes the statutory clock: receipt confirmed within 5 working days, a completeness check within 25 working days, a 40-working-day assessment once the file is complete, and a decision notified within 5 working days. Preparing a complete file, including fit and proper documentation for management, takes longer than the assessment itself, so plan the project in months.",
  },
  {
    q: "How much does Norwegian CASP authorisation cost?",
    a: "Finanstilsynet does not publish a CASP application fee, so treat any exact figure quoted by a consultancy as unverified. Authorised CASPs pay an annual supervision levy, allocated across firms in proportion to their income from licensed activities, so there is no fixed annual amount either. Forming the underlying Norwegian AS costs NOK 5,570 to register electronically according to Altinn's guide, and an AS needs at least NOK 30,000 in share capital.",
  },
  {
    q: "Can an EU-authorised CASP serve Norwegian customers?",
    a: "Yes, through MiCA passporting. A CASP authorised in another EEA state can provide its services across the EEA after notifying its home-state supervisor. A Norwegian CASP does the same in reverse, notifying Finanstilsynet before offering services in other EEA states. The authorisation has to be real: since the transitional period ended, a legacy registration in any country is not a passport.",
  },
  {
    q: "Which firms are authorised in Norway so far?",
    a: "Finanstilsynet's register shows the first authorisations under MiCA Article 63 going to Týr Markets AS on 18 May 2026, which Finanstilsynet describes as the first virtual currency exchange platform to receive it, and Firi AS on 22 May 2026. Under the old regime, 13 exchange and storage providers were registered in Norway, and Finanstilsynet fined one of the largest, Norwegian Block Exchange, for serious AML failures in 2024, a reminder that supervision is active, not a formality. Always check the live register, the Virksomhetsregisteret, for the current list.",
  },
];

const sources = [
  {
    label: "Finanstilsynet: crypto-asset service providers (CASP)",
    href: "https://www.finanstilsynet.no/tema/kryptoeiendeler-mica/kryptoeiendelstjenesteytere-casp/",
  },
  {
    label: "Finanstilsynet: the Entity Register",
    href: "https://www.finanstilsynet.no/virksomhetsregisteret/",
  },
  {
    label: "Lovdata: the Crypto Assets Act",
    href: "https://lovdata.no/dokument/NL/lov/2025-05-27-20",
  },
  {
    label: "Finanstilsynet: AML guidance",
    href: "https://www.finanstilsynet.no/nyhetsarkiv/rundskriv/2022/veileder-til-hvitvaskingsloven/",
  },
  {
    label: "Altinn: start and register a limited company (AS)",
    href: "https://info.altinn.no/en/start-and-run-business/start-business/registration/start-and-register-a-private-limited-company/",
  },
  {
    label: "Skatteetaten: tax rules for virtual assets",
    href: "https://www.skatteetaten.no/en/person/taxes/get-the-taxes-right/shares-and-securities/about-shares-and-securities/digital-currency/tax-regulations-virtual-currency",
  },
];

export default function NorwayCryptoLicensePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Norway Crypto License Guide 2026: CASP Authorisation, MiCA and Finanstilsynet",
      dateModified: UPDATED,
      mainEntityOfPage: `${SITE_URL}/regions/norway/crypto-license`,
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
          name: "Norway",
          item: `${SITE_URL}/regions/norway`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Norway Crypto License Guide",
          item: `${SITE_URL}/regions/norway/crypto-license`,
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
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <p className="mb-2 text-sm font-medium text-indigo-600">
              Updated <time dateTime={UPDATED}>November 26, 2026</time> · By
              Ingrid Larsen
            </p>

            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Norway crypto license: why CASP authorisation replaced VASP
              registration
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Most guides to a Norway crypto license still describe the old
              system: register with Finanstilsynet under anti-money
              laundering rules and start trading. That route closed on 30
              June 2026. Norway now runs on MiCA, through its own Crypto
              Assets Act, and the permission a crypto business needs is a
              CASP authorisation. This guide explains both regimes, the
              published timelines, and what is officially known about fees.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-indigo-950">
              Quick answer
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              There is no Norwegian crypto licence as a standalone document.
              From 15 October 2018, exchange and custody providers
              registered with Finanstilsynet as obliged entities under the
              Money Laundering Regulations. The Crypto Assets Act brought
              MiCA into Norwegian law on 1 July 2025, a transitional period
              for registered providers ran to 30 June 2026, and since then
              only authorised CASPs, or firms that notified under the
              licence-holder route, may offer crypto-asset services in
              Norway. The first Article 63 authorisations went to Týr
              Markets on 18 May 2026 and Firi on 22 May 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The old regime: AML registration, 2018 to 2025
          </h2>

          <p className="mb-4 text-slate-700">
            Norway folded crypto into its anti-money laundering framework
            early. Section 1-3 of the Money Laundering Regulations made
            providers of virtual currency exchange services, and providers
            of custody services, meaning safekeeping private keys for
            customers, obliged entities that had to register with
            Finanstilsynet. The duty covered providers registered in
            Norway, operating from Norway, or targeting the Norwegian
            market; Finanstilsynet&apos;s guidance treats a
            Norwegian-language website or marketing aimed at Norway as
            targeting the market.
          </p>

          <p className="mb-4 text-slate-700">
            Registration was an AML gate, not a business licence.
            Applicants had to be legal persons, meet fit and proper
            requirements, and file their details together with the risk
            assessments and procedures the Money Laundering Act requires.
            Finanstilsynet supervised only AML compliance, could refuse or
            revoke registrations, and did act on what it found: its 2024
            annual report records 13 registered exchange and storage
            providers and a fine against Norwegian Block Exchange for
            serious AML non-compliance.
          </p>

          <p className="mb-4 text-slate-700">
            Anyone still telling you to &quot;register as a VASP&quot; to
            enter the Norwegian market is describing a system that no
            longer grants market access.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The current regime: MiCA authorisation under the Crypto Assets
            Act
          </h2>

          <p className="mb-4 text-slate-700">
            Norway is an EEA state, not an EU member, so MiCA had to be
            incorporated into the EEA Agreement first, which happened by
            EEA Joint Committee Decision No 41/2025. Parliament then
            passed the Crypto Assets Act, in force from 1 July 2025, which
            applies MiCA as Norwegian law and makes Finanstilsynet the
            supervisory authority. A firm authorised as a CASP in Norway
            can passport its services across the EEA after notifying
            Finanstilsynet, and CASPs authorised elsewhere in the EEA can
            passport in.
          </p>

          <p className="mb-4 text-slate-700">
            Authorisation under MiCA Article 63 covers ten regulated
            services. The ones most crypto businesses need are:
          </p>

          <ul className="mb-4 list-disc space-y-2 pl-5 text-slate-700">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <p className="mb-4 text-slate-700">
            Two details carry real consequences. Management must pass a
            fit and proper assessment: board members, the general manager
            and de facto managers are assessed individually and
            collectively, with a suitability form, ID, CV and a police
            certificate for each person, and the AML and compliance
            officers are assessed too. And ownership is controlled:
            acquiring 10 percent or more of a CASP needs prior approval
            from Finanstilsynet, with further notifications at 20, 30 and
            50 percent.
          </p>

          <p className="mb-4 text-slate-700">
            The enforcement side is not decorative. Under the Crypto
            Assets Act, providing crypto-asset services without
            authorisation is punishable by fines or imprisonment of up to
            3 years, for intentional or negligent breaches.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to apply, and how long it takes
          </h2>

          <p className="mb-4 text-slate-700">
            You need a Norwegian company first, usually a limited company
            (AS) with at least NOK 30,000 in share capital, a Norwegian
            business address and registration through Altinn. The CASP
            application itself is filed electronically through Altinn on
            Finanstilsynet&apos;s form KRT-3060, with the application
            information MiCA requires. Unlike many regulators,
            Finanstilsynet publishes its processing clock:
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="divide-y divide-slate-200">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-2 px-6 py-4 md:grid-cols-[190px_1fr]"
                >
                  <p className="font-bold text-slate-900">{item.step}</p>
                  <p className="text-sm leading-6 text-slate-700">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            On fees, honesty beats precision: no CASP application fee is
            published by Finanstilsynet or on the application form, and
            the annual supervision levy for authorised CASPs is allocated
            by income from licensed activities, so there is no fixed
            figure to quote. Budget for the process, the compliance build
            and the levy, and treat any exact &quot;CASP filing fee&quot;
            in a sales pitch as unverified.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What this means if you just want to trade
          </h2>

          <p className="mb-4 text-slate-700">
            For Norwegian users rather than businesses, the practical
            change is about which platforms may serve you. Local names
            such as Firi hold Norwegian authorisation, and EEA-authorised
            platforms can passport in. Platforms that relied on the old
            registration, or on no Norwegian permission at all, have had
            to get authorised, partner with an authorised firm, or leave.
            Our Norway exchange guide compares the platforms Norwegians
            actually use, and for tax, Skatteetaten treats virtual assets
            as assets, not currency: gains are capital income taxed at 22
            percent, losses are deductible, and holdings count toward net
            wealth tax at market value on 1 January.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/regions/norway"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Norway exchanges guide
            </Link>

            <Link
              href="/regions/canada/crypto-license"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Canada licensing guide
            </Link>

            <Link
              href="/regions/spain/crypto-license"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Spain licensing guide
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Norway crypto licensing questions
          </h2>

          <div className="grid gap-4">
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

        <section className="mx-auto max-w-4xl px-4 pb-14">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              Primary sources
            </h2>

            <p className="text-sm leading-6 text-slate-600">
              Every requirement in this guide traces to one of these
              official pages. The register is live, so check it before
              relying on any list, including the examples here.
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
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. Not
              legal, financial or tax advice. Norwegian crypto regulation
              moved from AML registration to MiCA authorisation in 2025 and
              2026, and details continue to change as Finanstilsynet
              processes applications. Confirm your position with
              Finanstilsynet and qualified Norwegian counsel before
              launching a service or relying on a provider&apos;s status.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
