import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/simpleswap-review`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";
const ORIGINALLY_PUBLISHED = "19 October 2026";

// User-confirmed masked affiliate link (go.cryptosbeginner.com redirect).
const AFFILIATE = "https://go.cryptosbeginner.com/SimpleSwap";
const SIMPLESWAP_SITE = "https://simpleswap.io/";

export const metadata: Metadata = {
  title: "SimpleSwap Review 2026: Fees, KYC Reality, Limits & Verdict",
  description:
    "October 2026 SimpleSwap review: how the no-signup instant swap works, fixed vs floating rates, the real fee model, when KYC gets triggered, restricted countries, and who should use it.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "SimpleSwap Review 2026: Fees, KYC Reality, Limits & Verdict",
    description:
      "A research-led SimpleSwap review: instant crypto swaps without signup, the spread-based fee model, fixed vs floating rates, the AML policy that can freeze a swap, and the long restricted-countries list.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleSwap Review 2026: Fees, KYC Reality, Limits & Verdict",
    description:
      "SimpleSwap reviewed: no-signup swaps, real fees, when KYC hits, and who cannot use it.",
  },
};

const faqItems = [
  {
    question: "Does SimpleSwap require KYC?",
    answer:
      "For a routine crypto-to-crypto swap, no: you can swap without creating an account or verifying identity. But that is not the whole story. SimpleSwap's AML policy lets it demand KYC on any transaction at its discretion. If a swap is flagged during review, it can be frozen and you may have to verify your identity (through their verification provider) to get your funds released, even if you never made an account. Fiat exchanges may require KYC under the fiat partners' own policies.",
  },
  {
    question: "How does SimpleSwap make money if there are no explicit fees?",
    answer:
      "Through the spread: the exchange rate you are quoted already includes SimpleSwap's margin, so there is no separate commission line item on crypto swaps. Their FAQ indicates costs can start from around 0.2% for some assets, and the exact margin varies by pair and market conditions. The honest way to judge the price is to compare the final amount you receive against a live market quote for the same pair.",
  },
  {
    question: "What is the difference between fixed and floating rates?",
    answer:
      "A fixed rate locks the amount you will receive at quote time, which protects you from price moves during the swap, but it comes with upper amount limits because SimpleSwap absorbs the volatility risk. A floating rate follows the market at execution time with no strict time or amount limits, so the final amount can land slightly above or below the estimate. Use fixed when certainty matters, floating for larger amounts or when you do not mind small variance.",
  },
  {
    question: "Which countries cannot use SimpleSwap?",
    answer:
      "The restricted list in their Terms of Service is long and includes the United States (and its territories), the United Kingdom, and every EU member state, plus China, India, Japan, Cuba, Iran, North Korea, Syria, Venezuela, and others. If you live in the US, UK, or EU, this service is not for you. Check the current terms before relying on the list, as it can change.",
  },
  {
    question: "Is SimpleSwap a privacy tool?",
    answer:
      "No. Swapping without an account is convenient, but it is not privacy. SimpleSwap monitors transactions, partners with AML screening services, can freeze a swap it deems suspicious, and keeps logs. If your goal is private onchain swaps, read our guide to privacy swaps instead and understand the trade-offs there too.",
  },
  {
    question: "How long does a SimpleSwap exchange take?",
    answer:
      "SimpleSwap gives a rough guide of 1 to 60 minutes for a swap and states plainly that this is not a guarantee. Timing depends on the networks involved, how quickly your deposit confirms, and whether the transaction passes through any compliance review.",
  },
] as const;

function PrimaryAffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
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
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

export default function SimpleSwapReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SimpleSwap Review 2026: Fees, KYC Reality, Limits & Verdict",
    description:
      "A research-led SimpleSwap review covering no-signup instant swaps, fixed vs floating rates, the spread-based fee model, the AML policy that can trigger KYC on any transaction, restricted countries, and who the service suits.",
    datePublished: "2026-10-19",
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
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · instant swaps</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              SimpleSwap Review 2026: convenient swaps, with eyes-open caveats
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              SimpleSwap is an instant crypto exchange that has run since 2018: pick two assets, send
              one to their deposit address, and receive the other in your own wallet, usually without
              creating an account. This review covers how the swaps actually work, what they cost, when
              the no-KYC promise ends, and the long list of countries that cannot use it at all.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try SimpleSwap</PrimaryAffiliateButton>
            </div>
            <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-400">
              <strong className="text-slate-200">Affiliate disclosure:</strong> Some links on this page
              are affiliate links. CryptosBeginner may earn a commission if you complete an exchange
              through one. This does not change our assessment criteria or conclusions. This page is
              educational content, not financial advice.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
          <AuthorByline updated="19 October 2026" />
        </div>

        <div className="py-10">
          <Section>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">TL;DR: our take</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  <strong className="text-slate-900">Best for:</strong> quick crypto-to-crypto swaps
                  without signing up, especially smaller amounts where convenience beats squeezing the
                  last fraction of a percent.
                </li>
                <li>
                  <strong className="text-slate-900">Not for:</strong> anyone in the US, UK, or EU
                  (all restricted), anyone seeking privacy, and anyone who cannot tolerate a swap being
                  frozen pending a compliance review.
                </li>
                <li>
                  <strong className="text-slate-900">Fee reality:</strong> no explicit commission; the
                  margin sits inside the quoted rate. Compare the final received amount against a live
                  market quote to judge the true cost.
                </li>
                <li>
                  <strong className="text-slate-900">The KYC catch:</strong> no account needed for
                  routine swaps, but their AML policy reserves the right to demand identity
                  verification on any transaction, and flagged funds can be frozen until you comply.
                </li>
                <li>
                  <strong className="text-slate-900">Loyalty upside:</strong> an optional free account
                  unlocks fee discounts up to 20% and USDT cashback up to 0.4% for heavy swappers.
                </li>
              </ul>
            </div>
          </Section>

          <Section>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">On this page</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-bold text-indigo-700">
              <li><a href="#what-is" className="hover:text-indigo-900">What SimpleSwap is</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-900">How a swap works</a></li>
              <li><a href="#rates" className="hover:text-indigo-900">Fixed vs floating rates</a></li>
              <li><a href="#fees" className="hover:text-indigo-900">Fees: where the money is made</a></li>
              <li><a href="#limits" className="hover:text-indigo-900">Limits</a></li>
              <li><a href="#kyc" className="hover:text-indigo-900">The KYC and AML reality</a></li>
              <li><a href="#restricted" className="hover:text-indigo-900">Restricted countries</a></li>
              <li><a href="#loyalty" className="hover:text-indigo-900">Loyalty program</a></li>
              <li><a href="#pros-cons" className="hover:text-indigo-900">Pros and cons</a></li>
              <li><a href="#who" className="hover:text-indigo-900">Who it suits, and who should skip it</a></li>
              <li><a href="#alternatives" className="hover:text-indigo-900">Alternatives</a></li>
              <li><a href="#verdict" className="hover:text-indigo-900">Verdict</a></li>
              <li><a href="#faq" className="hover:text-indigo-900">FAQ</a></li>
            </ol>
          </Section>

          <Section id="what-is">
            <H2>What is SimpleSwap?</H2>
            <P>
              SimpleSwap is an instant cryptocurrency exchange operating since 2018. It describes
              itself as a self-custodial, multi-source swap aggregator: instead of running its own
              order book, it pulls liquidity from more than 20 providers across centralized and
              decentralized sources and routes your swap through whichever offers the best terms at
              that moment. Its homepage advertises more than 1,500 supported cryptocurrencies, and its
              blog cites over 2,800 swappable crypto and fiat options.
            </P>
            <P>
              The defining trait is the wallet-to-wallet model. You never deposit funds into a
              SimpleSwap balance or create an account to do a standard crypto-to-crypto swap. You send
              coins to a deposit address they show you, and the swapped coins land directly in the
              destination wallet you specified. Because the platform does not hold customer balances
              between swaps, there is no exchange account to be hacked in the traditional sense, which
              removes one whole category of custodial risk.
            </P>
            <P>
              That convenience comes with a counterweight you should understand before sending
              anything, covered in the KYC and restricted-countries sections below. SimpleSwap also
              offers fiat-to-crypto and crypto-to-fiat exchanges through third-party providers, plus
              iOS and Android apps that mirror the desktop swap flow.
            </P>
          </Section>

          <Section id="how-it-works">
            <H2>How a swap works</H2>
            <P>
              The flow is deliberately simple, and that is the product:
            </P>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-8 text-slate-600">
              <li>
                <strong className="text-slate-900">Choose your pair and amount.</strong> Select what
                you are sending and what you want to receive, and pick a fixed or floating rate (more
                on the difference below).
              </li>
              <li>
                <strong className="text-slate-900">Enter your destination wallet address.</strong> This
                is where the swapped coins go. Double-check it: crypto transactions cannot be reversed
                if you paste the wrong address.
              </li>
              <li>
                <strong className="text-slate-900">Send your deposit.</strong> SimpleSwap shows you a
                deposit address. You send the exact amount from your own wallet. Your funds are now in
                flight through their routing.
              </li>
              <li>
                <strong className="text-slate-900">Wait for completion.</strong> SimpleSwap gives 1 to
                60 minutes as a rough guide and states plainly that this is not a guarantee. Timing
                depends on network confirmations and whether the swap passes through any compliance
                review.
              </li>
            </ol>
            <P>
              You can follow the exchange status on the page using the exchange ID. Support is
              available around the clock through live chat, which matters because the one moment you
              need help with a swap service is when money is mid-flight.
            </P>
          </Section>

          <Section id="rates">
            <H2>Fixed vs floating rates</H2>
            <P>
              Every swap offers two rate types, and choosing between them is the most important
              decision on the page:
            </P>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Fixed rate</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  <li>The amount you receive is locked at quote time</li>
                  <li>Quote typically holds for about 20 minutes; your deposit needs to confirm inside that window</li>
                  <li>Upper amount limits apply, because SimpleSwap absorbs the volatility risk</li>
                  <li>Best when certainty matters more than squeezing out a slightly better deal</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Floating rate</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  <li>The final amount follows the market at execution time</li>
                  <li>Can land slightly above or below the estimate, in either direction</li>
                  <li>No strict time limit and no strict upper amount limit</li>
                  <li>Best for larger swaps or when you accept small variance</li>
                </ul>
              </div>
            </div>
            <P>
              In volatile markets the fixed rate is usually the calmer choice for beginners: you know
              exactly what arrives. Just respect the time window, because a late deposit can fall
              outside the locked quote.
            </P>
          </Section>

          <Section id="fees">
            <H2>Fees: where the money is made</H2>
            <P>
              SimpleSwap charges no explicit commission on crypto swaps. Instead, all of its margin is
              baked into the exchange rate you are quoted. Their FAQ indicates costs can start from
              around 0.2% for some assets, but the real number varies by pair, provider, and market
              conditions, and you will not see it itemized anywhere.
            </P>
            <P>
              That opacity is standard for instant-swap services, and the honest way to handle it is
              comparison: before confirming, check what the same pair would yield at the live market
              rate or on a competing swap service at the same moment. If SimpleSwap's final received
              amount is within a percent or so of the alternatives, you are paying a fair convenience
              premium. If the gap is wide, walk away from that particular quote.
            </P>
            <P>
              Two more fee notes. Network (miner) fees are separate and depend on blockchain
              congestion; they affect what you actually receive. Fiat purchases go through
              third-party providers whose fees are their own, reported to start around 0.5%, and those
              providers run their own checks.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Check live rates on SimpleSwap</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="limits">
            <H2>Limits</H2>
            <P>
              Floating-rate swaps carry no strict upper amount limit, which makes them the natural
              choice for larger conversions. Fixed-rate swaps do have maximum amounts, shown at quote
              time, because SimpleSwap takes on the price risk while your quote is locked. Minimum
              amounts are pair-dependent and displayed before you commit. If a fixed quote will not
              accept your size, that is the limit telling you to use floating or split the swap.
            </P>
          </Section>

          <Section id="kyc">
            <H2>The KYC and AML reality</H2>
            <P>
              This is the section most reviews gloss over, so here it is plainly:{" "}
              <strong className="text-slate-900">SimpleSwap is convenient, not private.</strong>
            </P>
            <P>
              For a routine crypto-to-crypto swap you do not need an account and you will not be asked
              for ID. Creating an optional Customer Account (or signing in with Google) unlocks the
              loyalty program, exchange history, price alerts, and an address-screening tool, plus
              SimpleSwap says verified users may get better rates and fewer repeated checks.
            </P>
            <P>
              But their AML/KYC policy explicitly reserves the right to require identity verification
              on <em>any</em> transaction at their discretion. In practice this is how it works: if a
              swap is selected for additional review, which can happen because of a partner liquidity
              provider's risk assessment under European AML directives or because the deposit trips
              their monitoring, the exchange can be frozen while they ask for a photo ID and
              information about the origin of your coins. This can happen even if you have swapped
              without an account before. Verification is handled through a third-party provider, and
              completing it once generally covers future swaps unless something changes.
            </P>
            <P>
              Be clear-eyed about what a freeze means: your deposit sits with SimpleSwap while the
              review runs, and getting it released means completing their verification process. Their
              terms also provide for a processing fee on returned funds in some cases. If any of that
              sounds unacceptable, do not use an instant swap service for those funds in the first
              place. And if privacy is your actual goal, read our{" "}
              <Link href="/learn/what-are-privacy-swaps" className="font-bold text-indigo-700 underline hover:text-indigo-900">
                guide to privacy swaps
              </Link>{" "}
              instead, with the same skepticism applied there.
            </P>
          </Section>

          <Section id="restricted">
            <H2>Restricted countries</H2>
            <P>
              SimpleSwap's Terms of Service restrict usage in a long list of locations, and it includes
              most of the English-speaking world: the{" "}
              <strong className="text-slate-900">United States</strong> (including territories), the{" "}
              <strong className="text-slate-900">United Kingdom</strong>, and{" "}
              <strong className="text-slate-900">every EU member state</strong>, alongside China,
              India, Japan, Cuba, Iran, North Korea, Syria, Venezuela, and others. It is your
              responsibility to check the current terms for your jurisdiction, and the list can change.
            </P>
            <P>
              This is the single biggest filter on this review: if you are in the US, UK, or EU, stop
              here. The service is not for you, and attempting to circumvent the restriction with a VPN would
              violate their terms.
            </P>
          </Section>

          <Section id="loyalty">
            <H2>Loyalty program</H2>
            <P>
              Registered users are automatically enrolled in a four-tier loyalty program that discounts
              the service fee and, at higher tiers, pays USDT cashback. Every swap counts toward your
              all-time volume permanently, and once you reach a tier you keep it even if your volume
              later drops:
            </P>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-black">Tier</th>
                    <th className="py-3 pr-4 font-black">All-time volume</th>
                    <th className="py-3 pr-4 font-black">Fee discount</th>
                    <th className="py-3 font-black">USDT cashback</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Bronze</td>
                    <td className="py-3 pr-4">Automatic at signup</td>
                    <td className="py-3 pr-4">5%</td>
                    <td className="py-3">None</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Silver</td>
                    <td className="py-3 pr-4">$10,000</td>
                    <td className="py-3 pr-4">10%</td>
                    <td className="py-3">None</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Gold</td>
                    <td className="py-3 pr-4">$30,000</td>
                    <td className="py-3 pr-4">15% (or 20% enhanced mode)</td>
                    <td className="py-3">0.1%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-black text-slate-900">Platinum</td>
                    <td className="py-3 pr-4">$200,000</td>
                    <td className="py-3 pr-4">20% (or 40% enhanced mode)</td>
                    <td className="py-3">0.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Cashback is paid in USDT with a 250 USDT minimum withdrawal. Gold and Platinum members
              can switch once a month between the standard mode (cashback plus discount) and an
              enhanced mode that trades the cashback for a bigger fee discount. Thresholds and
              percentages have changed before, so confirm the live loyalty page before planning around
              them. For most casual users the program is a nice bonus, not a reason to choose the
              service; it only starts paying meaningfully at volumes most beginners will never reach.
            </P>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50/60 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">Strengths</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>No signup needed for routine crypto-to-crypto swaps</li>
                  <li>Wallet-to-wallet model: no balances held on the platform</li>
                  <li>1,500+ cryptocurrencies with aggregated multi-provider liquidity</li>
                  <li>Fixed and floating rates to suit certainty or size</li>
                  <li>Operating since 2018 with 24/7 live support</li>
                  <li>Loyalty program rewards repeat swappers permanently</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-red-200 bg-red-50/60 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-800">Weaknesses</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>Restricted in the US, UK, and all EU countries</li>
                  <li>KYC can be demanded on any transaction at their discretion</li>
                  <li>Flagged swaps can be frozen pending verification</li>
                  <li>Margin hidden in the rate: true cost requires comparison</li>
                  <li>Not a privacy tool despite the no-signup flow</li>
                  <li>Fiat swaps go through third parties with their own fees and KYC</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="who">
            <H2>Who it suits, and who should skip it</H2>
            <P>
              SimpleSwap suits people outside the restricted regions who want to convert one crypto to
              another quickly without opening another exchange account: rebalancing a portfolio,
              exiting a small position, or grabbing a token your exchange does not list. If you swap
              regularly, the free account and loyalty discounts are worth the two minutes of signup.
            </P>
            <P>
              Skip it if you are in the US, UK, or EU. Skip it if you need privacy rather than
              convenience. Skip it for amounts where a freeze would hurt you, because any swap can
              theoretically be selected for review. And skip the fixed rate for large amounts that
              exceed its limits; use floating or split the trade.
            </P>
          </Section>

          <Section id="alternatives">
            <H2>Alternatives</H2>
            <P>
              <strong className="text-slate-900">ChangeNOW</strong> is the closest like-for-like
              alternative: another long-running no-signup instant swap with fixed and floating rates.
              Compare final received amounts head to head before committing to either.
            </P>
            <P>
              <strong className="text-slate-900">A centralized exchange</strong> (Binance, Kraken,
              Bybit, and the others we review) gives you a visible order book and often tighter
              pricing for liquid pairs, at the cost of full KYC signup and custodial balances. For
              large swaps of major coins, an exchange usually wins on price.
            </P>
            <P>
              <strong className="text-slate-900">Onchain DEX aggregators</strong> keep everything in
              your own wallet with no intermediary holding funds mid-swap, which is a stronger trust
              model if you are comfortable with self-custody. They require more know-how around
              networks, gas, and slippage.
            </P>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              SimpleSwap does one thing well: fast crypto-to-crypto swaps with no account, backed by
              aggregated liquidity and eight years of continuous operation. The fee model is honest
              enough once you understand the margin lives in the rate, and the loyalty program is a
              genuine perk for repeat users.
            </P>
            <P>
              The honest price of that convenience is spelled out in their own policies: no privacy,
              discretionary KYC on any transaction, frozen funds during reviews, and no service at all
              for the US, UK, and EU. If you are eligible, start with a small test swap on a fixed
              rate, compare the received amount against the market, and only then trust it with size.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try SimpleSwap</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="faq">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">FAQ</p>
            <H2>SimpleSwap questions</H2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-black text-slate-950">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
              <p>
                <strong className="text-slate-900">Disclaimer:</strong> Educational content only. This
                page is not financial, investment, legal, or tax advice. Features, fees, availability,
                and restricted regions change; verify the live provider terms before swapping.
                Availability of linked third-party sites depends on their own terms.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
                <Link href="/learn/what-are-privacy-swaps" className="text-indigo-700 hover:text-indigo-900">
                  Read: what are privacy swaps? →
                </Link>
                <a href={SIMPLESWAP_SITE} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-900">
                  Visit SimpleSwap →
                </a>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
