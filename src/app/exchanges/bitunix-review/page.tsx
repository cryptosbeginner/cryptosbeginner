import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/bitunix-review`;

const UPDATED = "4 October 2026";
const UPDATED_ISO = "2026-10-04";
const ORIGINALLY_PUBLISHED = "13 May 2025";
const ORIGINALLY_PUBLISHED_ISO = "2025-05-13";

const BITUNIX = "https://www.bitunix.com/";
const BITUNIX_FEES = "https://www.bitunix.com/service/handling-fee";
const BITUNIX_POR = "https://www.bitunix.com/proof-of-reserve";

export const metadata: Metadata = {
  title: "Bitunix Review 2026: Fees, KYC Change & 200x Leverage, Honestly Assessed",
  description:
    "October 2026 Bitunix review: the futures-first exchange with 200x leverage, published proof of reserves, and the July 2026 KYC-for-withdrawals change.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bitunix Review 2026: Fees, KYC Change & 200x Leverage",
    description:
      "Bitunix's fees, reserves, KYC rules, and risks, assessed honestly.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/bitunix-futures-2026.png`,
        width: 1440,
        height: 900,
        alt: "Bitunix futures trading interface showing the BTC/USDT perpetual contract chart and order panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitunix Review 2026: Fees, KYC Change & 200x Leverage",
    description:
      "The futures-first exchange reviewed: fees, reserves, and what changed in 2026.",
    images: [`${SITE_URL}/images/bitunix-futures-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is Bitunix safe and legit?",
    answer:
      "Bitunix is a real operating exchange founded in 2021 with MPC custody via Cobo, Merkle Tree proof of reserves, and a reported $30 million Care Fund. It holds a US money-services registration and a Philippines SEC compliance licence, but no major exchange licence. It has no reported major hack. The honest caveat: it is a young offshore exchange with thin public documentation about its team and audits.",
  },
  {
    question: "Does Bitunix require KYC?",
    answer:
      "Partially, and this changed in 2026. You can register and trade without upfront KYC, but since 1 July 2026 withdrawals require completing identity verification. KYC is also mandatory for card purchases and higher limits. The no-KYC era of withdrawing freely is over on Bitunix.",
  },
  {
    question: "What are Bitunix's trading fees?",
    answer:
      "Verified from Bitunix's official fee page: spot costs 0.08% maker and 0.10% taker, futures cost 0.02% maker and 0.06% taker at the base tier. VIP tiers bring futures down to 0% maker and 0.026% taker at the top.",
  },
  {
    question: "What is the maximum leverage on Bitunix?",
    answer:
      "Up to 200x on BTC and ETH perpetual futures. At 200x, a 0.5% move against your position liquidates it. This is an extremely dangerous product for beginners.",
  },
  {
    question: "What is Bitunix's proof of reserves?",
    answer:
      "Bitunix publishes proof-of-reserve snapshots on its website. The 1 October 2026 audit showed reserve ratios of 156% for BTC, 108% for ETH, and 105% for USDT, meaning reserves exceeded user holdings for all three.",
  },
  {
    question: "Does Bitunix have copy trading and a demo account?",
    answer:
      "Bitunix offers copy trading with trader stats and auto-copy, but there is no officially documented demo mode, despite third-party sites claiming one. Do not trust demo claims you cannot verify on Bitunix's own site.",
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
      href={BITUNIX}
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
  { id: "what-is", label: "What Bitunix is" },
  { id: "fees", label: "Fees, verified from the official schedule" },
  { id: "kyc", label: "The July 2026 KYC change" },
  { id: "leverage", label: "The 200x leverage warning" },
  { id: "reserves", label: "Proof of reserves and the Care Fund" },
  { id: "products", label: "Copy trading, TradFi, and multi-window charts" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "alternatives", label: "Alternatives" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Bitunix questions" },
];

export default function BitunixReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Bitunix Review 2026: Fees, KYC Change & 200x Leverage, Honestly Assessed",
    description:
      "October 2026 Bitunix review: the futures-first exchange with 200x leverage, published proof of reserves, and the July 2026 KYC-for-withdrawals change.",
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
        name: "Bitunix Review",
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
              Bitunix Review 2026: Fees, KYC Change &amp; 200x Leverage,
              Honestly Assessed
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Bitunix is a futures-first exchange with genuinely low fees,
              published proof of reserves, and 200x leverage. The big 2026
              change: withdrawals now require KYC. Here is the full picture,
              honestly framed.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit Bitunix
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
            <strong>Disclosure:</strong> The Bitunix links on this page are
            direct links, not affiliate links. CryptosBeginner earns nothing
            if you sign up through them, and that does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/bitunix-futures-2026.png"
              alt="Bitunix futures trading interface showing the BTC/USDT perpetual contract chart and order panel"
              width={1440}
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
                <strong className="text-slate-950">Futures-first, low fees.</strong>{" "}
                Spot 0.08% maker and 0.10% taker, futures 0.02% maker and
                0.06% taker, with VIP tiers below that.
              </li>
              <li>
                <strong className="text-slate-950">KYC now required for withdrawals.</strong>{" "}
                Since 1 July 2026 you can trade without KYC, but you cannot
                withdraw without verifying.
              </li>
              <li>
                <strong className="text-slate-950">200x leverage.</strong>{" "}
                Up to 200x on BTC and ETH perpetuals. A 0.5% move against
                you means liquidation. Read that twice.
              </li>
              <li>
                <strong className="text-slate-950">Published reserves.</strong>{" "}
                October 2026 audit: BTC 156%, ETH 108%, USDT 105%. MPC
                custody via Cobo and a reported $30M Care Fund.
              </li>
              <li>
                <strong className="text-slate-950">TradFi on the side.</strong>{" "}
                Stock, ETF, forex, index, and commodity perpetuals next to
                crypto.
              </li>
              <li>
                <strong className="text-slate-950">Young and offshore.</strong>{" "}
                Founded 2021, Seychelles, thin team documentation, no major
                licence.
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
          <H2>What Bitunix is</H2>
          <P>
            Bitunix launched in 2021, founded by Arron Lee, and is
            registered in Seychelles. It grew into a top-15 derivatives
            exchange with a reported 5 to 10 million users and over 1,200
            trading pairs: 540-plus spot assets, 520-plus futures contracts,
            and a TradFi lineup of stocks, ETFs, forex, indices, and
            commodities.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/bitunix-homepage-2026.png"
              alt="Bitunix homepage with the smarter trade tagline and platform statistics"
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Its identity is futures-first and fee-competitive: one of the
            lowest futures maker fees in the market at 0.02%, a clean
            interface, and a mobile app that does not feel like an
            afterthought.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees, verified from the official schedule</H2>
          <figure className="mt-6">
            <Image
              src="/images/bitunix-fees-2026.png"
              alt="Bitunix official fee schedule showing VIP tier rates for spot and futures trading"
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Bitunix's{" "}
            <Link href={BITUNIX_FEES} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              official fee page
            </Link>{" "}
            states base rates of{" "}
            <strong className="text-slate-900">0.08% maker and 0.10% taker</strong>{" "}
            on spot and{" "}
            <strong className="text-slate-900">0.02% maker and 0.06% taker</strong>{" "}
            on futures. VIP tiers, qualified by 30-day volume or balance,
            bring futures down to 0% maker and 0.026% taker at the top tier.
            These are genuinely among the lowest headline fees in the
            derivatives segment.
          </P>
        </Section>

        <Section id="kyc">
          <H2>The July 2026 KYC change</H2>
          <P>
            This is the most important 2026 development for Bitunix, and the
            old no-KYC marketing is now misleading. Since 1 July 2026,
            withdrawals require completing identity verification. You can
            still register and trade without upfront KYC, and KYC is also
            mandatory for card purchases and higher limits, but the era of
            withdrawing freely without verification is over.
          </P>
          <P>
            Practically, this makes Bitunix a low-friction trading venue
            rather than a privacy venue. If anonymous withdrawals are your
            priority, venues like BloFin still offer higher no-KYC
            withdrawal allowances.
          </P>
        </Section>

        <Section id="leverage">
          <H2>The 200x leverage warning</H2>
          <P>
            Bitunix offers up to{" "}
            <strong className="text-slate-900">200x leverage</strong> on BTC
            and ETH perpetual futures. At 200x, a 0.5% price move against
            your position liquidates it. On Bitcoin, that is a move that
            happens in minutes on ordinary days.
          </P>
          <P>
            High leverage is marketed as opportunity; mathematically it is a
            near-certain path to losing the position. Never trade leverage
            with money you cannot afford to lose, and understand that most
            leveraged retail traders lose money. Bitunix has no officially
            documented demo mode, so practice elsewhere before risking real
            capital.
          </P>
        </Section>

        <Section id="reserves">
          <H2>Proof of reserves and the Care Fund</H2>
          <figure className="mt-6">
            <Image
              src="/images/bitunix-por-2026.png"
              alt="Bitunix proof of reserve page showing reserve ratios above 100% for BTC, ETH, and USDT"
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Bitunix publishes proof-of-reserve snapshots with a user audit
            tool. The 1 October 2026 audit showed reserve ratios of 156% for
            BTC, 108% for ETH, and 105% for USDT. Custody runs through Cobo's
            MPC infrastructure, and the exchange reports a $30 million Care
            Fund. See the live{" "}
            <Link href={BITUNIX_POR} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              proof-of-reserve page
            </Link>{" "}
            for current figures.
          </P>
          <P>
            The qualifier, as always with self-published reserves: this is
            better than nothing, but not an independent audit at the
            standard of the most regulated exchanges.
          </P>
        </Section>

        <Section id="products">
          <H2>Copy trading, TradFi, and multi-window charts</H2>
          <P>
            Bitunix offers copy trading with trader stats and auto-copy,
            plus a distinctive multi-window mode that fits up to 16 charts
            on one screen for active futures traders. The TradFi lineup,
            177 stocks, 35 ETFs, 49 forex pairs, 12 indices, and 12
            commodities, sits alongside crypto perpetuals. Past performance
            of copied traders predicts nothing, and most copy traders lose
            money.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Bitunix</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how other users rate
            Bitunix on public platforms. These are third-party ratings, checked in
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
                  <td className="py-3 pr-4 text-right font-bold">3.0 out of 5 (~650 reviews)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">4.5 out of 5 (~5.7K)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">4.6 out of 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            A modest review base overall, with mobile users rating Bitunix higher
            than the Trustpilot average.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Among the lowest futures fees: 0.02%/0.06%</li>
                <li>Published PoR, MPC custody, $30M Care Fund</li>
                <li>1,200+ pairs including TradFi perpetuals</li>
                <li>Copy trading and 16-chart multi-window</li>
                <li>Clean interface and mobile app</li>
                <li>No reported major hack</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Withdrawals require KYC since July 2026</li>
                <li>No major-jurisdiction licence</li>
                <li>200x leverage is a liquidation machine</li>
                <li>Thin team and audit documentation</li>
                <li>No officially documented demo mode</li>
                <li>Thinner spot liquidity than top-tier venues</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            Bitunix suits experienced futures traders who want low fees, a
            clean terminal, and multi-chart workflows, and who are
            comfortable completing KYC for withdrawals. Keep balances small
            and withdraw regularly.
          </P>
          <P>
            Skip it if you need anonymous withdrawals, want a licensed
            exchange, or are new to derivatives. Beginners belong on spot
            first, on a regulated venue like{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>
            .
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For no-KYC derivatives with deeper liquidity,{" "}
            <Link href="/exchanges/bybit-review" className="text-blue-600 hover:underline">
              Bybit
            </Link>{" "}
            is the larger venue. For a similar no-KYC profile with higher
            withdrawal allowances,{" "}
            <Link href="/exchanges/blofin-review" className="text-blue-600 hover:underline">
              BloFin
            </Link>
            . For regulated futures with a real licence story,{" "}
            <Link href="/exchanges/deribit-review" className="text-blue-600 hover:underline">
              Deribit
            </Link>{" "}
            is the professional choice. Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Bitunix is a solid low-fee futures exchange with real proof of
            reserves and a clean trading experience. The July 2026
            KYC-for-withdrawals change ended its no-KYC era, and the young,
            offshore profile keeps it a trading venue rather than a storage
            venue. Use it for what it is good at, keep balances small, and
            never touch 200x unless you fully understand liquidation.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Bitunix</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Bitunix questions</H2>
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
