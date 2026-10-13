import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/m2-review`;

const UPDATED = "29 September 2026";
const UPDATED_ISO = "2026-09-29";
const ORIGINALLY_PUBLISHED = "22 April 2024";
const ORIGINALLY_PUBLISHED_ISO = "2024-04-22";

const M2 = "https://www.m2.com/";
const M2_FEES = "https://www.m2.com/en_AE/fees";

export const metadata: Metadata = {
  title: "M2 Exchange Review 2026: ADGM-Licensed Trading, Fees & Earn, Honestly Assessed",
  description:
    "October 2026 M2 exchange review: the ADGM-licensed Abu Dhabi venue with 0.10% spot fees, M2 Earn, and AED banking. Regulation, limits, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "M2 Exchange Review 2026: ADGM-Licensed Trading, Fees & Earn",
    description:
      "M2's regulation, fees, earn products, and risks, assessed honestly.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/m2-homepage-2026.png`,
        width: 1600,
        height: 900,
        alt: "M2 homepage with the digital wealth tagline and institutional product navigation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 Exchange Review 2026: ADGM-Licensed Trading, Fees & Earn",
    description:
      "The regulated Abu Dhabi exchange reviewed: fees, earn, and what to watch.",
    images: [`${SITE_URL}/images/m2-homepage-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is M2 exchange regulated and safe?",
    answer:
      "M2 is licensed by the Financial Services Regulatory Authority in the Abu Dhabi Global Market as a multilateral trading facility and custodian, a genuinely strong regulatory position. It is backed by Phoenix Group, a listed bitcoin mining conglomerate. That said, regulation is not a guarantee: keep balances minimal and withdraw to your own wallet.",
  },
  {
    question: "Does M2 require KYC?",
    answer:
      "Yes. M2 is a fully regulated exchange, so identity verification is mandatory for all accounts. There is no anonymous or low-KYC access.",
  },
  {
    question: "What are M2's trading fees?",
    answer:
      "Verified from M2's official fee page: spot trading costs 0.10% maker and 0.10% taker. M2 offers no derivatives, so there are no futures fees to compare.",
  },
  {
    question: "Does M2 offer leverage or futures?",
    answer:
      "No. M2 is a spot-only venue with around 50 listed tokens, plus convert, earn, mining products, and an OTC desk. If you want derivatives, look elsewhere.",
  },
  {
    question: "What is M2 Earn and what are the rates?",
    answer:
      "M2 Earn offers curated yield plans across digital assets. Advertised rates move over time; M2's own site shows plans such as USDT at 6.0% APR and AVAX at 4.5% APR. Yields are not guaranteed and advertised APYs change with market conditions.",
  },
  {
    question: "Who can use M2?",
    answer:
      "M2 primarily serves UAE residents and institutional clients, with AED bank account integration for deposits and withdrawals. Availability outside the UAE is limited, so check your local eligibility before signing up.",
  },
] as const;

function PrimaryCtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={M2}
      target="_blank"
      rel="noopener noreferrer"
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-black tracking-tight text-slate-950">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-8 text-slate-800">{children}</p>;
}

const tocItems = [
  { id: "what-is", label: "What M2 is" },
  { id: "fees", label: "Fees, verified from the official schedule" },
  { id: "kyc", label: "Mandatory KYC" },
  { id: "earn", label: "M2 Earn and yield products" },
  { id: "otc", label: "OTC and institutional focus" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "alternatives", label: "Alternatives" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "M2 questions" },
];

export default function M2ReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "M2 Exchange Review 2026: ADGM-Licensed Trading, Fees & Earn, Honestly Assessed",
    description:
      "October 2026 M2 exchange review: the ADGM-licensed Abu Dhabi venue with 0.10% spot fees, M2 Earn, and AED banking. Regulation, limits, and honest risks.",
    datePublished: ORIGINALLY_PUBLISHED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Person",
      name: "Alex Rivera",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
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
        name: "M2 Review",
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
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} ·
              By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              M2 Exchange Review 2026: ADGM-Licensed Trading, Fees &amp; Earn,
              Honestly Assessed
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              M2 is one of the few exchanges with a real Abu Dhabi regulator
              licence, 0.10% spot fees, and AED banking. But it is spot-only,
              mandatory-KYC, and built for the Gulf and institutions, not
              global retail.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit M2
              </PrimaryCtaButton>

              <Link
                href="/exchanges/best-crypto-exchanges"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Compare crypto exchanges
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Disclosure:</strong> The M2 links on this page are
            direct links, not affiliate links. CryptosBeginner earns nothing
            if you sign up through them, and that does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/m2-homepage-2026.png"
              alt="M2 homepage with the digital wealth tagline and institutional product navigation"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">Real regulation.</strong>{" "}
                Licensed by the ADGM Financial Services Regulatory Authority
                as a trading facility and custodian.
              </li>
              <li>
                <strong className="text-slate-950">Flat 0.10% spot fees.</strong>{" "}
                0.10% maker and taker, verified on the official fee page.
              </li>
              <li>
                <strong className="text-slate-950">Spot only.</strong>{" "}
                Around 50 tokens, no futures, no leverage, no margin.
              </li>
              <li>
                <strong className="text-slate-950">Mandatory KYC.</strong>{" "}
                No anonymous access. Full identity verification for everyone.
              </li>
              <li>
                <strong className="text-slate-950">Built for the Gulf.</strong>{" "}
                AED bank integration, OTC desk, and an increasingly
                institutional product set.
              </li>
              <li>
                <strong className="text-slate-950">Earn products.</strong>{" "}
                M2 Earn yield plans, for example USDT at 6.0% APR on the
                site. Rates move, and yields are never guaranteed.
              </li>
            </ul>
          </div>

          <nav aria-label="On this page" className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              On this page
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm font-semibold text-indigo-700 no-underline hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <Section id="what-is">
          <H2>What M2 is</H2>
          <P>
            M2 launched in 2023 in Abu Dhabi, led by CEO Stefan Kimmel, and
            is backed by Phoenix Group, the listed bitcoin mining
            conglomerate that holds a major equity stake. It received its
            Financial Services Regulatory Authority licence in the Abu Dhabi
            Global Market in late 2023, authorizing it as a multilateral
            trading facility and custodian, with an additional Bahamas
            licence held by a subsidiary.
          </P>
          <P>
            In practice, M2 has shifted toward institutional digital asset
            services: yield strategies, financing solutions, and market
            solutions sit at the front of its site, while retail spot
            trading lives in the app. This is not a global retail exchange
            in the Binance mould; it is a regulated regional venue.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees, verified from the official schedule</H2>
          <figure className="mt-6">
            <Image
              src="/images/m2-fees-2026.png"
              alt="M2 official fee page showing spot trading at 0.10% maker and 0.10% taker"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            M2's{" "}
            <Link href={M2_FEES} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              official fee page
            </Link>{" "}
            states a flat{" "}
            <strong className="text-slate-900">0.10% maker and 0.10% taker</strong>{" "}
            on spot trading. There are no derivatives, so the fee story is
            simple. Crypto deposits are free; network fees apply on crypto
            withdrawals.
          </P>
        </Section>

        <Section id="kyc">
          <H2>Mandatory KYC</H2>
          <P>
            As a regulated exchange, M2 requires full identity verification
            from every user. There is no anonymous tier, no trading without
            documents, and no unverified withdrawal allowance. If that is a
            dealbreaker, regulated venues are not for you.
          </P>
        </Section>

        <Section id="earn">
          <H2>M2 Earn and yield products</H2>
          <figure className="mt-6">
            <Image
              src="/images/m2-earn-2026.png"
              alt="M2 Earn page showing yield plans including USDT at 6.0% and AVAX at 4.5% APR"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            M2 Earn offers curated yield plans across digital assets. The
            site shows plans such as USDT at 6.0% APR and AVAX at 4.5% APR.
            M2 also runs mining-related products with its Phoenix Group
            connection, and its MMX token carries a fixed supply with a burn
            mechanism and tiered platform benefits.
          </P>
          <P>
            Treat advertised yields with care: APYs change with market
            conditions, and no yield product on any exchange is
            risk-free. Past rates do not predict future ones.
          </P>
        </Section>

        <Section id="otc">
          <H2>OTC and institutional focus</H2>
          <figure className="mt-6">
            <Image
              src="/images/m2-otc-2026.png"
              alt="M2 OTC desk page describing bespoke liquidity for high-value trades"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            M2 runs a bespoke OTC desk for high-value trades and offers AED
            bank account integration for deposits and withdrawals of
            dirhams, a genuine differentiator for UAE residents. The
            platform's direction is clearly institutional: financing
            solutions, market solutions, and yield products for discerning
            capital.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit M2</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>ADGM FSRA licence as MTF and custodian</li>
                <li>Flat 0.10% spot fees, verified officially</li>
                <li>AED bank deposits and withdrawals</li>
                <li>Backed by listed Phoenix Group</li>
                <li>M2 Earn yield products and OTC desk</li>
                <li>No reported major hack</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Spot only: no futures, no leverage</li>
                <li>Only around 50 listed tokens</li>
                <li>Mandatory KYC for everyone</li>
                <li>Primarily UAE and institutional focused</li>
                <li>Earn yields move and are not guaranteed</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            M2 suits UAE-based users and institutions who want a regulated
            on-ramp with AED banking, simple flat fees, and earn products
            under a real regulator. It is also a reasonable conservative
            spot-only option for anyone who prefers regulated venues.
          </P>
          <P>
            Skip it if you want derivatives, anonymous access, or a large
            altcoin catalogue. For no-KYC derivatives see{" "}
            <Link href="/exchanges/blofin-review" className="text-blue-600 hover:underline">
              BloFin
            </Link>
            , and for Gulf fiat rails with more coins see{" "}
            <Link href="/exchanges/rain-review" className="text-blue-600 hover:underline">
              Rain
            </Link>
            .
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For the Gulf with more listed assets,{" "}
            <Link href="/exchanges/rain-review" className="text-blue-600 hover:underline">
              Rain
            </Link>{" "}
            is the regulated alternative. For global regulated spot trading,{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            has deeper liquidity. For regulated futures,{" "}
            <Link href="/exchanges/deribit-review" className="text-blue-600 hover:underline">
              Deribit
            </Link>{" "}
            is the professional venue. Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            M2 is one of the better-regulated exchanges available anywhere:
            a genuine ADGM licence, flat verified 0.10% spot fees, AED
            banking, and a serious institutional product set. Its limits are
            the mirror image of its strengths: spot only, small token
            list, mandatory KYC, and a Gulf-first footprint. If you are in
            the UAE and want regulated crypto access, it is a strong pick.
            Everyone else should weigh whether its geography fits them.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit M2</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>M2 questions</H2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-800">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
