import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/whitebit-review`;

const UPDATED = "7 October 2026";
const UPDATED_ISO = "2026-10-07";
const ORIGINALLY_PUBLISHED = "5 May 2025";
const ORIGINALLY_PUBLISHED_ISO = "2025-05-05";

const WHITEBIT = "https://whitebit.com/";
const WHITEBIT_FEES = "https://whitebit.com/fees";

export const metadata: Metadata = {
  title: "WhiteBIT Review 2026: Fees, MiCA Licence & Security, Honestly Assessed",
  description:
    "October 2026 WhiteBIT review: Europe's large Ukraine-founded exchange, its June 2026 MiCA licence, spot and futures fees, WBT token, security record, and the honest caveats.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WhiteBIT Review 2026: Fees, MiCA Licence & Security",
    description:
      "WhiteBIT's fees, MiCA licence, security posture, and WBT ecosystem, assessed honestly.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/whitebit-trading-interface-2026.png`,
        width: 1024,
        height: 472,
        alt: "WhiteBIT futures trading interface with the BTC perpetual order book and buy/sell panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteBIT Review 2026: Fees, MiCA Licence & Security",
    description:
      "Europe's large crypto exchange reviewed: fees, regulation, security, and WBT.",
    images: [`${SITE_URL}/images/whitebit-trading-interface-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is WhiteBIT safe and legit?",
    answer:
      "WhiteBIT reports 96% of customer funds in cold storage, holds CCSS Level 3 and PCI DSS certifications, undergoes Hacken security audits, and ranks near the top of CER.live's exchange security ratings with an AAA score. It states a $30 million insurance fund and runs a bug bounty paying up to $1 million. The honest caveats: CER.live notes no proof-of-reserves audit, and India's financial intelligence unit issued WhiteBIT a non-compliance notice in September 2026 alongside 14 other platforms.",
  },
  {
    question: "Does WhiteBIT have a MiCA licence?",
    answer:
      "Yes. WB-Shield Innovations GmbH, operating as WhiteBIT EU, received MiCA authorization from Austria's Financial Market Authority on 19 June 2026, which passports regulated crypto services across 30 EEA countries. WhiteBIT is preparing a dedicated whitebit.eu platform under that framework.",
  },
  {
    question: "What are WhiteBIT's trading fees?",
    answer:
      "Spot trading costs 0.10% maker and taker at the base tier, falling across eleven VIP levels to as low as a 0.001% maker rebate and 0.03% taker at the top. Holding WBT can cut fees further, up to 100% off maker fees at sufficient levels. Futures start at 0.01% maker and 0.055% taker. Margin borrowing costs 0.0585% per day.",
  },
  {
    question: "Is WhiteBIT available in the US?",
    answer:
      "The global WhiteBIT platform does not serve US, UK, or Canadian residents. WhiteBIT launched a separate WhiteBIT US platform in December 2025. Check current availability for your location before signing up, and do not use a VPN to bypass restrictions.",
  },
  {
    question: "What is the WBT token?",
    answer:
      "WBT is WhiteBIT's native token. It pays trading fee discounts, grants Launchpad access, benefits from a burn mechanism, and serves as the gas token for Whitechain, WhiteBIT's own blockchain. Like all exchange tokens, its price carries normal market risk and moves with the platform's fortunes.",
  },
  {
    question: "What is the WhiteBIT Nova card?",
    answer:
      "Nova is WhiteBIT's Visa crypto card, advertised with zero issuance and maintenance fees and cashback paid in Bitcoin. Card terms, cashback rates, and availability vary by region, so read the current card terms for your country before applying.",
  },
  {
    question: "Does WhiteBIT require KYC?",
    answer:
      "Yes. KYC verification is mandatory for trading, deposits, and withdrawals on WhiteBIT.",
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
      href={WHITEBIT}
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
  { id: "what-is", label: "What WhiteBIT is" },
  { id: "fees", label: "Fees and costs" },
  { id: "regulation", label: "Regulation and the honest caveats" },
  { id: "security", label: "Security" },
  { id: "products", label: "Products, WBT, and the Nova card" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "alternatives", label: "Alternatives" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "WhiteBIT questions" },
];

export default function WhitebitReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "WhiteBIT Review 2026: Fees, MiCA Licence & Security, Honestly Assessed",
    description:
      "October 2026 WhiteBIT review: Europe's large Ukraine-founded exchange, its June 2026 MiCA licence, spot and futures fees, WBT token, security record, and the honest caveats.",
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
        name: "WhiteBIT Review",
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
              WhiteBIT Review 2026: Fees, MiCA Licence &amp; Security,
              Honestly Assessed
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              WhiteBIT is one of Europe's largest crypto exchanges, founded
              in Ukraine in 2018, and it secured a MiCA licence in June 2026.
              This review covers its fees, its genuinely strong security
              posture, the WBT ecosystem, and the regulatory blemishes that
              belong in any fair assessment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit WhiteBIT
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
            <strong>Disclosure:</strong> The WhiteBIT links on this page are
            direct links, not affiliate links. CryptosBeginner earns nothing
            if you sign up through them, and that does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/whitebit-trading-interface-2026.png"
              alt="WhiteBIT futures trading interface with the BTC perpetual order book and buy/sell panel"
              width={1024}
              height={472}
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
                <strong className="text-slate-950">Europe's major exchange.</strong>{" "}
                Founded in Ukraine in 2018, part of W Group, with 330-plus
                assets and a claimed $2.5 billion in daily volume.
              </li>
              <li>
                <strong className="text-slate-950">MiCA licensed.</strong>{" "}
                WhiteBIT EU received MiCA authorization from Austria's FMA in
                June 2026, passporting across 30 EEA countries.
              </li>
              <li>
                <strong className="text-slate-950">Straightforward fees.</strong>{" "}
                Spot at 0.10% maker and taker, futures from 0.01% maker and
                0.055% taker, with VIP tiers and WBT discounts on top.
              </li>
              <li>
                <strong className="text-slate-950">Strong security posture.</strong>{" "}
                96% cold storage, CCSS Level 3, AAA on CER.live, and a $1
                million bug bounty. No proof-of-reserves audit, though.
              </li>
              <li>
                <strong className="text-slate-950">Not for everyone.</strong>{" "}
                Unavailable in the US, UK, and Canada on the global platform,
                and India's FIU issued it a non-compliance notice in 2026.
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
          <H2>What WhiteBIT is</H2>
          <P>
            WhiteBIT launched in 2018, founded by Ukrainian entrepreneur
            Volodymyr Nosov, and grew into one of Europe's largest crypto
            exchanges. It sits inside the W Group ecosystem, which claims
            more than 35 million customers globally. The platform lists over
            330 assets across 780-plus trading pairs and reports average
            daily volume around $2.5 billion, putting it firmly in the second
            tier of global exchanges by size: far below Binance, but a
            serious venue in its own right.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/whitebit-markets-2026.png"
              alt="WhiteBIT markets page listing cryptocurrency prices and 24-hour changes"
              width={1024}
              height={462}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Its identity is European and compliance-forward. WhiteBIT has
            worked with Ukrainian government institutions, partners with
            brands like Visa and Juventus, and spent the last two years
            collecting licences. That positioning is its main selling point
            against offshore competitors with thinner regulatory cover.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees and costs</H2>
          <P>
            Spot trading costs{" "}
            <strong className="text-slate-900">0.10% maker and taker</strong>{" "}
            at the base tier, with eleven VIP levels bringing that down to a
            0.001% maker rebate and 0.03% taker at the top, qualified by
            balance or 30-day volume. Holding WBT adds a separate discount of
            up to 100% off maker fees. Futures start at{" "}
            <strong className="text-slate-900">0.01% maker and 0.055% taker</strong>,
            and margin borrowing runs 0.0585% per day.
          </P>
          <P>
            Fiat costs deserve a look before you deposit. EUR deposits via
            SEPA run about 0.1%, EUR withdrawals carry a 5 euro flat fee, and
            card deposits cost more. Crypto deposits are free; withdrawals
            track network costs. Check the{" "}
            <Link href={WHITEBIT_FEES} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              live fee pages
            </Link>{" "}
            for your asset and method, since these change.
          </P>
        </Section>

        <Section id="regulation">
          <H2>Regulation and the honest caveats</H2>
          <P>
            The licence story is genuinely strong. WB-Shield Innovations
            GmbH, operating as WhiteBIT EU, received MiCA authorization from
            Austria's Financial Market Authority on 19 June 2026, one of only
            a handful of providers authorized in Austria, and it passports
            regulated crypto services across 30 EEA countries. A dedicated
            whitebit.eu platform is being prepared under that framework.
          </P>
          <P>
            Now the caveats. On 9 September 2026, India's Financial
            Intelligence Unit issued non-compliance notices to 15 virtual
            asset service providers under anti-money-laundering rules, and
            WhiteBIT UAB was on the list. That is a formal enforcement
            notice, not a ban, but it sits awkwardly next to the MiCA
            credentials. Separately, Russia's prosecutor general designated
            WhiteBIT and W Group "undesirable organizations" in January
            2026, a political designation against a Ukraine-founded company
            that says more about geopolitics than about the exchange's
            conduct, but it is part of the record.
          </P>
          <P>
            Availability is restricted: the global platform does not serve
            the US, UK, or Canada, though a separate WhiteBIT US platform
            launched in December 2025. KYC is mandatory everywhere.
          </P>
        </Section>

        <Section id="security">
          <H2>Security</H2>
          <figure className="mt-6">
            <Image
              src="/images/whitebit-security-rating-2026.png"
              alt="CER.live security rating showing WhiteBIT ranked second with an AAA score"
              width={1024}
              height={337}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            WhiteBIT's security posture is one of the best-documented among
            mid-tier exchanges. It reports 96% of customer funds in cold
            storage, holds CCSS Level 3 and PCI DSS certifications, undergoes
            Hacken security audits, and sits near the top of CER.live's
            exchange security ranking with an AAA score. The bug bounty pays
            up to $1 million for critical findings, and the company states a
            $30 million insurance fund.
          </P>
          <P>
            The gap in the picture is proof of reserves: CER.live notes the
            absence of a PoR audit. WhiteBIT has not reported a loss of
            customer funds to a platform hack, which counts for a lot, but a
            reserves audit would strengthen the transparency story
            considerably.
          </P>
        </Section>

        <Section id="products">
          <H2>Products, WBT, and the Nova card</H2>
          <P>
            Beyond spot, WhiteBIT offers margin up to 10x, futures up to
            100x, crypto lending, auto-invest plans, a Launchpad for new
            tokens, and trading bots. The WBT token threads through all of
            it: fee discounts, Launchpad access, a burn mechanism, and gas
            for Whitechain, the group's own blockchain. WBT has even been
            included in S&P Dow Jones crypto indices, unusual for an
            exchange token.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/whitebit-nova-card-2026.png"
              alt="WhiteBIT Nova Visa card promotion advertising cashback in Bitcoin"
              width={1024}
              height={469}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            The Nova card is WhiteBIT's Visa crypto card, advertised with
            zero issuance and maintenance fees and cashback paid in Bitcoin.
            Card terms and cashback rates vary by region, so read the current
            terms for your country. If you are comparing crypto cards, this
            is one of the more established European options.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit WhiteBIT</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how other users rate
            WhiteBIT on public platforms. These are third-party ratings, checked in
            October 2026, and they move over time.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Platform</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Rating</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Trustpilot</td>
                  <td className="py-3 pr-4 text-right font-bold">3.0 out of 5</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">4.3 out of 5 (~23K)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">4.7 out of 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The Trustpilot score sits at the midpoint, while mobile app users rate
            WhiteBIT noticeably higher.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>MiCA licence via Austria, passported across 30 EEA countries</li>
                <li>Simple fees: 0.10%/0.10% spot, cheap futures</li>
                <li>Strong documented security: AAA on CER.live, CCSS Level 3</li>
                <li>WBT discounts up to 100% off maker fees</li>
                <li>Nova Visa card with BTC cashback</li>
                <li>330+ assets, solid European fiat rails</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>No proof-of-reserves audit</li>
                <li>India FIU non-compliance notice (September 2026)</li>
                <li>Unavailable in US, UK, Canada on the global platform</li>
                <li>Fiat deposit/withdrawal fees add up</li>
                <li>Smaller liquidity than top-tier global exchanges</li>
                <li>Basic educational resources</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            WhiteBIT suits European traders who want a regulated venue with
            reasonable fees, a real security track record, and euro rails
            that work. The WBT discounts make it increasingly attractive the
            more you trade, and the Nova card is a genuine perk if you spend
            crypto.
          </P>
          <P>
            Skip it if you are in the US, UK, or Canada, if you need the
            deepest global liquidity for large orders, or if a
            proof-of-reserves audit is a hard requirement for you. Futures
            leverage runs to 100x; treat that as a warning label, not a
            feature.
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For a larger regulated European venue,{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            pairs strong licensing with a proof-of-reserves program. For
            lower futures fees and deeper derivatives liquidity,{" "}
            <Link href="/exchanges/bybit-review" className="text-blue-600 hover:underline">
              Bybit
            </Link>{" "}
            and{" "}
            <Link href="/exchanges/okx-review" className="text-blue-600 hover:underline">
              OKX
            </Link>{" "}
            are the natural comparisons. Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            WhiteBIT is a solid second-tier exchange with first-tier
            compliance ambitions: the MiCA licence is real, the security
            documentation is unusually thorough, and the fees are fair. The
            missing proof-of-reserves audit and the India FIU notice keep it
            from a clean bill of health. For European traders who value
            regulation and security over maximum liquidity, it is a
            defensible choice. For everyone else, Kraken or OKX deserve a
            look first.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit WhiteBIT</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>WhiteBIT questions</H2>
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
