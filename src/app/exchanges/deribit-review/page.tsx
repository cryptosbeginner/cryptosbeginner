import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/deribit-review`;

const UPDATED = "9 October 2026";
const UPDATED_ISO = "2026-10-09";
const ORIGINALLY_PUBLISHED = "3 June 2024";
const ORIGINALLY_PUBLISHED_ISO = "2024-06-03";

const DERIBIT = "https://www.deribit.com/";
const DERIBIT_FEES = "https://support.deribit.com/hc/en-us/articles/25944746248989-Fees";
const DERIBIT_DOCS = "https://support.deribit.com/hc/en-us";

export const metadata: Metadata = {
  title: "Deribit Review 2026: Options Fees, Coinbase Ownership & Is It Safe?",
  description:
    "October 2026 Deribit review: the world's largest BTC options exchange, now owned by Coinbase. Options and futures fees, insurance fund, regulation, and who should avoid it.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Deribit Review 2026: Options Fees & Coinbase Ownership",
    description:
      "Deribit's options fees, insurance fund, and regulation, plus what the Coinbase acquisition means for traders.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/deribit-homepage-2026.png`,
        width: 1440,
        height: 900,
        alt: "Deribit homepage with options trading highlights and product links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deribit Review 2026: Options Fees & Coinbase Ownership",
    description:
      "The world's largest crypto options exchange, reviewed honestly: fees, safety, and the Coinbase era.",
    images: [`${SITE_URL}/images/deribit-homepage-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is Deribit safe and legit?",
    answer:
      "Deribit is a long-running derivatives exchange (since 2016) with no reported loss of customer funds to a platform hack and an insurance fund designed so losing positions never socialize losses onto other traders. The caveats: it is a derivatives-only venue with lighter regulation than spot exchanges, it holds a VARA licence in Dubai but is not available to US retail directly, and derivatives themselves carry liquidation risk no platform can remove.",
  },
  {
    question: "Who owns Deribit now?",
    answer:
      "Coinbase completed its acquisition of Deribit in August 2025 for about $2.9 billion. In October 2026, Coinbase folded Deribit into its new Coinbase Global Exchange and announced Deribit-powered options rolling out to eligible traders, with US institutional access routed through Coinbase Financial Markets under CFTC guidance.",
  },
  {
    question: "What are Deribit's trading fees?",
    answer:
      "At the standard tier, perpetuals and futures cost 0.015% maker and 0.035% taker, with maker rebates at higher VIP tiers. Options cost 0.03% of the underlying value for both makers and takers, capped at 12.5% of the option's price. Settlement fees apply at expiry: 0.025% for futures and 0.015% for options, with daily options and weekly futures exempt. Spot on Deribit's own book is free. Volume-based VIP tiers reduce these further.",
  },
  {
    question: "Is Deribit available in the US?",
    answer:
      "Deribit does not serve US retail traders directly. Following the Coinbase acquisition, US institutional clients can access Deribit options and perpetuals through Coinbase Prime and Coinbase Financial Markets under CFTC guidance issued in May 2026. US retail access to Deribit-powered options is planned for later in 2026.",
  },
  {
    question: "Does Deribit require KYC?",
    answer:
      "Yes. KYC verification is mandatory for all accounts. Older descriptions of Deribit as a no-KYC venue are outdated.",
  },
  {
    question: "What can you trade on Deribit?",
    answer:
      "European-style options on BTC, ETH, and SOL with weekly, monthly, and quarterly expirations, plus perpetual swaps, quarterly futures, spot, DVOL volatility futures, and block trading for large orders. Leverage runs up to 100x on select perpetual contracts, which is extremely risky and unsuitable for most people.",
  },
  {
    question: "What is the Deribit insurance fund?",
    answer:
      "The insurance fund absorbs losses when a liquidated position closes below bankruptcy price, so the shortfall is not passed on to other traders. Deribit reports the fund's balance publicly, and it has a long record of covering liquidations without socialized losses.",
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
      href={DERIBIT}
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
  { id: "what-is", label: "What Deribit is" },
  { id: "coinbase", label: "The Coinbase acquisition" },
  { id: "fees", label: "Fees and costs" },
  { id: "options", label: "Options trading" },
  { id: "security", label: "Security and the insurance fund" },
  { id: "regulation", label: "Regulation and availability" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "alternatives", label: "Alternatives" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Deribit questions" },
];

export default function DeribitReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Deribit Review 2026: Options Fees, Coinbase Ownership & Is It Safe?",
    description:
      "October 2026 Deribit review: the world's largest BTC options exchange, now owned by Coinbase. Options and futures fees, insurance fund, regulation, and who should avoid it.",
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
        name: "Deribit Review",
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
              Deribit Review 2026: Options Fees, Coinbase Ownership &amp; Is
              It Safe?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Deribit is where serious crypto options traders go: the deepest
              BTC and ETH options books in the industry. In 2025 it became a
              Coinbase company, and in 2026 it is being folded into a global
              exchange. This review covers the fees, the insurance fund, and
              what the new ownership changes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit Deribit
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
            <strong>Disclosure:</strong> The Deribit links on this page are
            direct links, not affiliate links. CryptosBeginner earns nothing
            if you sign up through them, and that does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/deribit-homepage-2026.png"
              alt="Deribit homepage with options trading highlights and product links"
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
                <strong className="text-slate-950">The options venue.</strong>{" "}
                The deepest BTC and ETH options books in crypto, with over
                $30 billion in BTC options open interest.
              </li>
              <li>
                <strong className="text-slate-950">Now a Coinbase company.</strong>{" "}
                Acquired for about $2.9 billion in August 2025 and being
                integrated into Coinbase Global Exchange.
              </li>
              <li>
                <strong className="text-slate-950">Cheap for what it is.</strong>{" "}
                Futures at 0.015% maker and 0.035% taker, options at 0.03% of
                the underlying capped at 12.5% of the premium.
              </li>
              <li>
                <strong className="text-slate-950">Real risk controls.</strong>{" "}
                A public insurance fund with a long record of absorbing
                liquidations without socialized losses.
              </li>
              <li>
                <strong className="text-slate-950">Not for beginners.</strong>{" "}
                Derivatives-only, no US retail access, and leverage up to
                100x. Most people should not trade here.
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
          <H2>What Deribit is</H2>
          <P>
            Deribit launched in 2016 as a derivatives-only exchange and
            became the venue where crypto options actually trade. While other
            exchanges bolt options onto a spot business, Deribit built its
            entire order book around them: BTC, ETH, and SOL options with
            weekly, monthly, and quarterly expirations, alongside perpetual
            swaps and quarterly futures used to hedge those options.
          </P>
          <P>
            That specialization shows up in the numbers. Coinbase reported
            over $30 billion in BTC options open interest on Deribit as of
            September 2026, and the platform processed more than $1 trillion
            in volume in the year before the acquisition. If you have ever
            seen a "max pain" level quoted for Bitcoin options expiry, it
            was calculated from Deribit open interest.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/deribit-options-interface-2026.png"
              alt="Deribit BTC options trading interface with the options chain"
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
        </Section>

        <Section id="coinbase">
          <H2>The Coinbase acquisition</H2>
          <P>
            In August 2025, Coinbase completed its acquisition of Deribit for
            about $2.9 billion in cash and stock. In October 2026, Coinbase
            announced the integration is complete: Deribit now sits inside a
            new Coinbase Global Exchange, with Deribit-powered options, spot
            margin, and unified portfolios rolling out to eligible traders.
          </P>
          <P>
            For users, the practical effects are still unfolding. US
            institutional clients can already access Deribit options and
            perpetuals through Coinbase Prime under CFTC guidance from May
            2026, a regulated route that did not exist before. US retail
            access to Deribit-powered options is planned for later in 2026,
            and Coinbase is relaunching Coinbase Pro as a professional
            platform covering spot, futures, perpetuals, options, and
            equities. None of this makes options safer; it makes them more
            accessible, which is a different thing.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees and costs</H2>
          <P>
            The headline structure is simple. At the standard tier, perpetuals
            and futures cost{" "}
            <strong className="text-slate-900">0.015% maker and 0.035% taker</strong>,
            with maker rebates kicking in at higher VIP tiers. Options cost{" "}
            <strong className="text-slate-900">0.03% of the underlying value</strong>{" "}
            for both makers and takers, capped at 12.5% of the option's
            price, which protects traders on cheap deep-out-of-the-money
            contracts. Spot on Deribit's own order book is free at 0% maker
            and taker; only pairs routed to Coinbase Exchange carry spot fees.
          </P>
          <P>
            These are Deribit's own published rates, verified on its official
            fee schedule. Expiry adds settlement fees: 0.025% of contract value for futures
            and 0.015% for options, with daily options exempt. Volume-based
            VIP tiers cut these further for heavy traders. Deposits are free
            in crypto, and withdrawals cost only the network fee. Check the{" "}
            <Link href={DERIBIT_FEES} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              live fee schedule
            </Link>{" "}
            before trading, since tiers were updated in late 2025.
          </P>
        </Section>

        <Section id="options">
          <H2>Options trading</H2>
          <P>
            All Deribit options are European-style: they can only be exercised
            at expiry, which removes the early-assignment risk that complicates
            American-style contracts. Calls and puts trade on every market,
            expirations run from daily out to quarterly, and the interface
            shows live Greeks (delta, gamma, theta, vega) natively in the
            options chain.
          </P>
          <P>
            The position builder lets you model multi-leg strategies before
            committing capital: straddles, strangles, iron condors, covered
            calls. Block trading is available for large orders that would
            move the public book. Minimum sizes were lowered in 2025 with
            USDC-settled linear options (0.01 BTC, 0.1 ETH), which made the
            venue slightly less institutional-only than it used to be.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Deribit</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="security">
          <H2>Security and the insurance fund</H2>
          <P>
            Deribit's defining safety feature is its insurance fund. When a
            leveraged position is liquidated below its bankruptcy price, the
            fund absorbs the shortfall instead of passing it to other
            traders. Deribit publishes the fund's balance in its official
            <Link href={DERIBIT_DOCS} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">documentation</Link>,
            and it has a long
            record of covering liquidations without socialized losses, which
            is exactly the failure mode that has hurt traders on other
            derivatives venues.
          </P>
          <P>
            Standard protections are all present: mandatory KYC, 2FA, IP
            allowlisting, and cold storage for the bulk of client funds.
            Deribit has no reported history of losing customer funds to a
            platform hack. That is a strong record, but it does not make
            trading safe: liquidation is a product feature here, and most
            options buyers lose money over time.
          </P>
        </Section>

        <Section id="regulation">
          <H2>Regulation and availability</H2>
          <P>
            Deribit operates through Deribit FZE, which holds a licence from
            Dubai's VARA. It is not a US-regulated exchange and does not
            serve US retail traders directly. Since the Coinbase acquisition,
            US institutions have a regulated route in through Coinbase
            Financial Markets, but that is an institutional product, not a
            retail one.
          </P>
          <P>
            KYC is mandatory for every account, and a long list of
            restricted jurisdictions applies. Do not use a VPN to bypass
            regional blocks; getting flagged during a compliance review can
            freeze withdrawals. Check the current restricted-countries list
            for your location before signing up.
          </P>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how other users rate
            Deribit on public platforms. These are third-party ratings, checked in
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
                  <td className="py-3 pr-4 text-right font-bold">3.5 out of 5 (very few reviews)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">4.2 out of 5 (~550)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Deribit is a derivatives niche with a small review base, so treat these
            figures as low-confidence.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Deepest BTC/ETH options books in crypto ($30B+ BTC OI)</li>
                <li>Low derivatives fees with maker rebates</li>
                <li>Public insurance fund, no socialized losses on record</li>
                <li>No reported loss of customer funds to a hack</li>
                <li>Now backed by Coinbase ($2.9B acquisition)</li>
                <li>Professional tooling: Greeks, position builder, block trades</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Derivatives-only; not a place to buy and hold spot</li>
                <li>No US retail access</li>
                <li>Lighter regulation than major spot exchanges</li>
                <li>Leverage up to 100x; liquidation is routine</li>
                <li>Interface assumes you already understand options</li>
                <li>Options buyers lose money more often than not</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            Deribit suits experienced derivatives traders who need real
            options liquidity: hedgers, volatility traders, and market makers
            running multi-leg strategies. If you already trade options
            elsewhere, the depth, the Greeks in the chain, and the fee
            structure are the reasons to be here.
          </P>
          <P>
            Everyone else should skip it. If you are buying crypto for the
            first time, want to hold long term, or do not know what theta
            decay is, Deribit is not your exchange. Start with a spot venue
            like{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            or{" "}
            <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
              Binance
            </Link>
            , and treat derivatives as an advanced topic for much later, if
            ever.
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For crypto derivatives with a broader product set and spot
            markets attached,{" "}
            <Link href="/exchanges/bybit-review" className="text-blue-600 hover:underline">
              Bybit
            </Link>{" "}
            and{" "}
            <Link href="/exchanges/okx-review" className="text-blue-600 hover:underline">
              OKX
            </Link>{" "}
            both offer options alongside perps and spot, with larger retail
            user bases. Neither matches Deribit's options depth. Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Deribit is the best crypto options exchange by the measure that
            matters: liquidity. The fees are fair, the insurance fund has a
            genuine track record, and Coinbase ownership adds institutional
            weight. But it is a professional derivatives venue, not a general
            crypto exchange, and options are a negative-sum game for most
            retail traders after fees. Use it if you already know exactly
            what you are doing with options. Otherwise, admire it from a
            distance.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Deribit</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Deribit questions</H2>
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
