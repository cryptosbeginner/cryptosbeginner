import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-11-26";

export const metadata: Metadata = {
  title:
    "Canada Crypto License Guide 2026: FINTRAC, Dealer Registration and PSP Rules",
  description:
    "There is no single crypto license in Canada. This guide explains the registrations a crypto business actually needs: CSA and CIRO dealer registration, FINTRAC MSB registration, Quebec licensing and Bank of Canada PSP registration.",
  alternates: {
    canonical: `${SITE_URL}/regions/canada/crypto-license`,
    languages: {
      en: `${SITE_URL}/regions/canada/crypto-license`,
      "x-default": `${SITE_URL}/regions/canada/crypto-license`,
    },
  },
  openGraph: {
    title: "Canada Crypto License Guide 2026",
    description:
      "The registrations behind the search for a Canada crypto license: dealer registration, FINTRAC, Quebec and the Bank of Canada, with official sources.",
    url: `${SITE_URL}/regions/canada/crypto-license`,
    type: "article",
  },
};

const regimes = [
  {
    name: "Securities dealer registration",
    who: "Provincial regulators and CIRO",
    applies:
      "Crypto trading platforms where clients hold accounts or claims against the platform instead of receiving coins immediately.",
    key: "The current route is investment dealer registration with CIRO membership. The interim restricted dealer route and pre-registration undertakings are closed to new platforms.",
  },
  {
    name: "FINTRAC MSB registration",
    who: "FINTRAC (federal)",
    applies:
      "Any business with a place of business in Canada that deals in virtual currency: exchanging funds for crypto, crypto for funds, crypto for crypto, or transferring crypto for clients.",
    key: "Free, mandatory before you start operating, and renewed every 2 years. FINTRAC states plainly that registration is not a licence and not an endorsement.",
  },
  {
    name: "FINTRAC foreign MSB registration",
    who: "FINTRAC (federal)",
    applies:
      "Businesses outside Canada with no place of business here that direct MSB services, including dealing in virtual currency, at clients in Canada.",
    key: "You must register before operating and name a representative for service who lives in Canada. Legal responsibility stays with the foreign business.",
  },
  {
    name: "Quebec money-services licence",
    who: "Revenu Québec, under the Money-Services Businesses Act",
    applies:
      "Businesses offering money services in Quebec, in classes such as currency exchange and funds transfer.",
    key: "A real licence, separate from FINTRAC. The application runs through a Quebec-resident respondent and involves Sûreté du Québec security clearances. The AMF is Quebec's securities regulator, which is the role in which it oversees trading platforms.",
  },
  {
    name: "Bank of Canada PSP registration",
    who: "Bank of Canada, under the Retail Payment Activities Act",
    applies:
      "Payment service providers performing fiat payment functions for end users in Canada, such as holding client balances or initiating electronic funds transfers.",
    key: "Crypto transfers themselves are excluded because the Act excludes digital currencies, but a platform's Canadian dollar payment functions can still make it a PSP. The application fee is $2,500, and safeguarding rules have applied since 8 September 2025.",
  },
  {
    name: "Incorporation and business registration",
    who: "Corporations Canada or a provincial registry",
    applies: "Every business, before any of the registrations above.",
    key: "Forming a company is not a regulatory approval. A federal corporation must also register in each province where it carries on business.",
  },
];

const steps = [
  {
    title: "Incorporate and set up tax accounts",
    text: "Incorporate federally or in one province, register extra-provincially where you will operate, and open CRA program accounts such as GST/HST as the business requires.",
  },
  {
    title: "Build the AML program before you apply",
    text: "Appoint a compliance officer, document your compliance program, and arrange criminal record checks for the CEO, president, directors and anyone owning or controlling 20 percent or more of the business. FINTRAC requires checks issued within 6 months of the application.",
  },
  {
    title: "Register with FINTRAC before operating",
    text: "File the pre-registration form, then the full registration form with ownership, locations, agents and estimated volumes. Registration is free and runs in 2-year cycles.",
  },
  {
    title: "Start dealer registration with your principal regulator and CIRO",
    text: "If you will run a trading platform, engage the securities regulator in your principal jurisdiction and CIRO on investment dealer registration. Expect platform-specific terms and conditions and exemptive relief decisions.",
  },
  {
    title: "Add the Quebec licence if you serve Quebec",
    text: "Money services offered in Quebec need the Money-Services Businesses Act licence through Revenu Québec, on top of FINTRAC registration and securities registration.",
  },
  {
    title: "Register as a PSP if you perform fiat payment functions",
    text: "Apply through the Bank of Canada's PSP Connect portal and pay the $2,500 application fee. Applications are shared with the Department of Finance for national security screening and with FINTRAC.",
  },
  {
    title: "Stay current",
    text: "Renew FINTRAC registration every 2 years, file corporate annual returns, pay the RPAA annual assessment if you are a registered PSP, and keep AML and dealer compliance running. Registrations lapse and statuses change.",
  },
];

const investmentDealers = [
  "Coinsquare Capital Markets Ltd. (also carrying on business as Bitbuy)",
  "Ndax Canada Inc.",
  "Newton Crypto Ltd.",
  "Shakepay Inc.",
  "Wealthsimple Investments Inc.",
  "Questrade, Inc.",
  "Webull Canada Crypto Limited",
  "Fidelity Clearing Canada ULC",
];

const restrictedDealers = [
  "Coinbase Canada Inc.",
  "Foris DAX CAN ULC et al. (Crypto.com)",
  "Netcoins Inc.",
  "Payward Canada Inc. and Payward, Inc. (Kraken)",
  "Satstreet Inc.",
];

const faqs = [
  {
    q: "Is there a crypto license in Canada?",
    a: "No. Canada has no single crypto licence. A crypto business usually needs several registrations at once: securities dealer registration for a trading platform, FINTRAC registration for dealing in virtual currency, a Quebec licence for money services in Quebec, and possibly Bank of Canada PSP registration for fiat payment functions. FINTRAC itself states that it does not issue licences and that registration is not an endorsement.",
  },
  {
    q: "Does every crypto exchange need FINTRAC registration?",
    a: "If the business deals in virtual currency and has a place of business in Canada, yes, and it must register before it begins operating. Dealing in virtual currency covers exchanging funds for crypto, crypto for funds or crypto for crypto, and transferring crypto at a client's request. Foreign businesses that direct those services at Canadians register as foreign MSBs instead.",
  },
  {
    q: "How much does it cost to get licensed for crypto in Canada?",
    a: "FINTRAC registration is free. Bank of Canada PSP registration carries a one-time application fee of $2,500, adjusted annually, plus an annual assessment once registered. The OSC and CSA do not publish a fee or a standard price for dealer registration, which is handled case by case with the principal regulator and CIRO. Anyone quoting one fixed price for a full Canadian crypto licence is leaving most of the picture out.",
  },
  {
    q: "How long does Canadian crypto registration take?",
    a: "FINTRAC publishes no processing timeline, so treat consultancy estimates with caution. Dealer registration has no standard timeline either: it proceeds by application, review and platform-specific decisions. Build your launch plan around months of regulatory work, not days, and do not start operating before the registrations that apply to you are in place.",
  },
  {
    q: "Can an offshore exchange legally serve Canadians?",
    a: "Only if it meets the same regimes. A foreign platform directing services at Canada generally needs FINTRAC foreign MSB registration with a Canadian representative for service, and on the securities side it must be authorized to do business with Canadians, which is what the CSA's authorized platforms list records. Operating offshore does not remove Canadian obligations.",
  },
  {
    q: "What happened to pre-registration undertakings and restricted dealers?",
    a: "They were an interim bridge. From 2022 the CSA expected unregistered platforms to give pre-registration undertakings while they pursued registration, and many platforms operated as restricted dealers under time-limited relief. The CSA has ended that interim approach and no longer accepts new undertakings: new platforms are expected to apply directly for investment dealer registration and CIRO membership.",
  },
  {
    q: "What does the new Stablecoin Act change?",
    a: "Budget 2025 legislation, passed in Bill C-15, creates a federal Stablecoin Act. Fiat-backed stablecoin issuers will register with the Bank of Canada, hold a 1:1 reserve of high-quality liquid assets in the reference currency, publish a redemption policy offering redemption at par, and will not be allowed to offer interest or yield to holders. The framework is expected to come into force in 2027 while regulations are developed. Until then, stablecoins trade on Canadian platforms under the CSA's interim value-referenced crypto asset approach, with issuer undertakings for USDC, QCAD and CADC.",
  },
];

const sources = [
  {
    label: "FINTRAC: money services businesses",
    href: "https://fintrac-canafe.canada.ca/msb-esm/msb-eng",
  },
  {
    label: "FINTRAC: MSB registry",
    href: "https://fintrac-canafe.canada.ca/msb-esm/reg-eng",
  },
  {
    label: "OSC: crypto businesses",
    href: "https://www.osc.ca/en/industry/registration-and-compliance/crypto-businesses",
  },
  {
    label: "CSA: platforms authorized to do business with Canadians",
    href: "https://www.securities-administrators.ca/crypto-platforms-regulation-and-enforcement-actions/crypto-platforms-authorized-to-do-business-with-canadians/",
  },
  {
    label: "Bank of Canada: retail payment supervision",
    href: "https://www.bankofcanada.ca/regulatory-oversight/retail-payments/supervisory-framework/",
  },
  {
    label: "Finance Canada: stablecoin framework",
    href: "https://www.canada.ca/en/department-finance/programs/financial-sector-policy/canadas-stablecoin-framework.html",
  },
  {
    label: "Quebec Money-Services Businesses Act",
    href: "https://www.legisquebec.gouv.qc.ca/en/document/cs/e-12.000001",
  },
];

export default function CanadaCryptoLicensePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Canada Crypto License Guide 2026: FINTRAC, Dealer Registration and PSP Rules",
      dateModified: UPDATED,
      mainEntityOfPage: `${SITE_URL}/regions/canada/crypto-license`,
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
          name: "Canada",
          item: `${SITE_URL}/regions/canada`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Canada Crypto License Guide",
          item: `${SITE_URL}/regions/canada/crypto-license`,
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="mb-3 text-sm font-medium text-red-300">
              Canada licensing guide · Updated{" "}
              <time dateTime={UPDATED}>November 26, 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Canada crypto license: the registrations you actually need
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Search for a Canada crypto license and you will find
              consultancies selling one. Canada does not issue one. What
              exists is a stack of registrations, securities, money
              services, payments and provincial, and which ones you need
              depends on what your business actually does. This guide maps
              each regime to its official source.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#regimes"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                See the regimes
              </a>

              <a
                href="#steps"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Registration steps
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-200">
                Guide note
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                This page is educational and is not legal advice. Regulatory
                registers change often; the OSC list referenced here was
                updated on November 15, 2026 and the CSA list on November
                20, 2026. Confirm your obligations with the regulators and
                qualified counsel before launching.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                No single licence
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                FINTRAC says it directly: registration with FINTRAC does not
                mean FINTRAC licenses the business, and FINTRAC issues no
                licences at all.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                FINTRAC is free, dealer registration is the hard part
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                MSB registration costs nothing. The demanding route is
                securities dealer registration with CIRO membership for
                trading platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                Stablecoins get their own law in 2027
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                The Stablecoin Act will put issuers under the Bank of
                Canada, with 1:1 reserves, redemption at par and no yield
                to holders.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                The short answer
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Why there is no Canada crypto license
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Canada splits financial regulation across federal and
                provincial bodies, and crypto touches several of them at
                once. Securities law is provincial, coordinated nationally
                by the Canadian Securities Administrators. Anti-money
                laundering is federal, run by FINTRAC. Payments oversight
                sits with the Bank of Canada. Quebec adds its own
                money-services licence on top.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Securities law reaches exchanges through a simple idea set
                out by the CSA in 2020: when a platform does not immediately
                deliver the crypto a client bought into the client&apos;s
                sole control, the client&apos;s claim against the platform
                is itself a security or derivative. That makes the platform
                a dealer, and dealers must register, even when the
                underlying coin is not a security.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                So the honest answer to &quot;how do I get a crypto license
                in Canada&quot; is a checklist, not a certificate. The
                regimes below are the checklist.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">Which regimes apply to you</h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Trading platform:
                  </span>{" "}
                  dealer registration plus FINTRAC, at minimum.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Broker or on/off-ramp:
                  </span>{" "}
                  FINTRAC for dealing in virtual currency; securities
                  analysis if clients hold claims on you.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Serving Quebec:
                  </span>{" "}
                  add the Revenu Québec money-services licence where your
                  services fall in its classes.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Holding or moving client dollars:
                  </span>{" "}
                  check Bank of Canada PSP registration for the fiat side.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Based abroad:
                  </span>{" "}
                  foreign MSB registration and the CSA authorized list are
                  your two gates.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="regimes" className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                The regulatory map
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Six registrations and approvals, six different jobs
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
            href="https://fintrac-canafe.canada.ca/msb-esm/reg-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Read FINTRAC on what registration does and does not mean →
          </a>
        </section>

        <section id="steps" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Step by step
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              How to register a crypto company in Canada
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              The order matters: FINTRAC registration must be in place
              before you operate, and dealer registration is a long
              engagement, not a form. Not every step applies to every
              business model.
            </p>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white">
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
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Proof the system is live
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Platforms on the official registers
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              The OSC&apos;s crypto business list, updated November 15,
              2026, shows what completed registration looks like. Statuses
              change: a platform on the CSA&apos;s national list is
              currently subject to terms requiring it to wind down its
              registrable business, which is why the live registers, not
              any static guide, are the source of truth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Registered as investment dealers
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {investmentDealers.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Registered as restricted dealers
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {restrictedDealers.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Restricted dealer status came with platform-specific terms
                and conditions under the interim approach. The CSA list
                covers platforms authorized in some provinces only, so
                check the provinces named for each platform.
              </p>
            </div>
          </div>

          <a
            href="https://www.securities-administrators.ca/crypto-platforms-regulation-and-enforcement-actions/crypto-platforms-authorized-to-do-business-with-canadians/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Check the CSA authorized platforms list →
          </a>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-red-300">
              Coming in 2027
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              The Stablecoin Act adds a federal issuer regime
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Canada&apos;s new stablecoin framework, passed in Bill C-15,
              will require fiat-backed stablecoin issuers to register with
              the Bank of Canada, back tokens 1:1 with high-quality liquid
              assets held in the reference currency, publish a redemption
              policy that offers redemption at par, and meet governance,
              risk and recovery standards. Issuers may not pay interest or
              yield to holders. Issuers are also money services businesses
              dealing in virtual currency under the anti-money laundering
              law, so FINTRAC registration applies as well. Regulations
              are being developed and the framework is expected to come
              into force in 2027. Until then, platforms list stablecoins
              under the CSA&apos;s interim approach, with issuer
              undertakings in place for USDC, QCAD and CADC.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Direct answers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Canada crypto licensing questions
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
                "Decide which regimes your business model triggers.",
                "Register with FINTRAC before you start operating.",
                "Open the dealer conversation with your principal regulator and CIRO early.",
                "Cover Quebec separately if you will serve it.",
                "Check PSP registration for your Canadian dollar payment flows.",
                "Verify every claim against the live official registers.",
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
                href="/regions/canada"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Canada exchanges guide
              </Link>

              <Link
                href="/regions/norway/crypto-license"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Norway licensing guide
              </Link>

              <Link
                href="/regions/spain/crypto-license"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Spain licensing guide
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
              legal, financial or tax advice. Canadian crypto regulation
              spans federal and provincial regimes that change frequently,
              and whether a registration applies depends on your exact
              business model. Confirm your obligations with FINTRAC, your
              provincial securities regulator, CIRO, Revenu Québec and the
              Bank of Canada, and take qualified legal advice before
              launching or serving Canadian clients.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
