import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PrimeXBT Review 2026: Fees, Leverage, Regulation & Who It Suits",
  description:
    "In-depth 2026 PrimeXBT review covering regulation, fees, crypto futures & CFDs, leverage risks, security, pros and cons, and whether this multi-asset broker fits beginners or active traders.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/exchanges/primexbt-review",
  },
  openGraph: {
    title: "PrimeXBT Review 2026 | CryptosBeginner",
    description:
      "Honest PrimeXBT review: fees, regulation entities, leverage risks, platform features, and who should (and should not) use it.",
    url: "https://www.cryptosbeginner.com/exchanges/primexbt-review",
    type: "article",
    images: [{ url: "https://www.cryptosbeginner.com/images/1.png" }],
  },
};

const AFFILIATE = "https://go.cryptosbeginner.com/PrimeXBT";

export default function PrimeXBTReviewPage() {
  const reviewLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "PrimeXBT",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
    },
    author: {
      "@type": "Person",
      name: "Alex Rivera",
    },
    datePublished: "2026-03-18",
    dateModified: "2026-08-21",
    reviewBody:
      "PrimeXBT is a multi-asset derivatives broker focused on crypto futures and CFDs, with competitive headline fees and high leverage. Regulation is entity-specific rather than top-tier global coverage, and the product is better suited to experienced traders than absolute beginners.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "3.7",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: "https://www.cryptosbeginner.com",
    },
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Review 2026: Fees, Leverage, Regulation & Who It Suits",
    datePublished: "2026-03-18",
    dateModified: "2026-08-21",
    author: { "@type": "Person", name: "Alex Rivera" },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: "https://www.cryptosbeginner.com",
    },
    image: ["https://www.cryptosbeginner.com/images/1.png"],
    mainEntityOfPage: "https://www.cryptosbeginner.com/exchanges/primexbt-review",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is PrimeXBT safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PrimeXBT lists security measures such as cold storage and 2FA, and has reported no major public breach since launch. Regulation is multi-entity and not equivalent to FCA/ASIC-style top-tier retail protection. High leverage remains the biggest practical risk.",
        },
      },
      {
        "@type": "Question",
        name: "Is PrimeXBT good for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually no. PrimeXBT is derivatives-focused with high leverage. Beginners are generally better served by a major spot exchange and a clear learning path before using leveraged products.",
        },
      },
      {
        "@type": "Question",
        name: "Does PrimeXBT offer spot crypto trading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PrimeXBT is primarily a futures and CFD platform rather than a full spot exchange for long-term asset custody.",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated 21 August 2026 · By Alex Rivera · Reviewed for CryptosBeginner
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              PrimeXBT Review 2026: Fees, Leverage, Regulation & Who It Actually Suits
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              PrimeXBT is a multi-asset trading platform built around crypto futures and CFDs on forex,
              indices, commodities and related markets — not a beginner spot-exchange for buying and
              holding coins long term. This review explains the product model, fee structure,
              regulatory picture, leverage risks, and who should skip it.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={AFFILIATE}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Visit PrimeXBT →
              </a>
              <Link
                href="/exchanges/best-crypto-exchanges-2026"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Compare top exchanges
              </Link>
            </div>
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="max-w-4xl mx-auto px-4 pt-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-slate-800">
            <strong>Affiliate disclosure:</strong> Some links on this page are affiliate links
            (including{" "}
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-700 underline">
              go.cryptosbeginner.com/PrimeXBT
            </a>
            ). We may earn a commission if you sign up. That does not change our assessment criteria.
            This is educational content, not financial advice.
          </div>
        </section>

        {/* Hero image */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <figure>
            <Image
              src="/images/1.png"
              alt="PrimeXBT trading platform overview screenshot"
              width={1200}
              height={630}
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Figure 1. PrimeXBT platform overview (user-uploaded screenshot).
            </figcaption>
          </figure>
        </section>

        {/* Score / TLDR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">TL;DR — Our take</h2>
            <ul className="space-y-2 text-slate-800">
              <li>
                <strong>Best for:</strong> experienced traders who want crypto futures + multi-asset CFDs in one account
              </li>
              <li>
                <strong>Not ideal for:</strong> absolute beginners, long-term HODLers, or users who need top-tier retail regulation
              </li>
              <li>
                <strong>Core product:</strong> derivatives (futures/CFDs), not a full spot exchange
              </li>
              <li>
                <strong>Headline crypto futures fee:</strong> around 0.05% per side on many published schedules (verify live)
              </li>
              <li>
                <strong>Biggest risk:</strong> high leverage and liquidations — not “platform marketing”
              </li>
              <li>
                <strong>Our overall score:</strong> 3.7 / 5 for active traders; lower for beginners
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">On this page</h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li><a href="#what-is" className="hover:underline">What PrimeXBT is</a></li>
              <li><a href="#pros-cons" className="hover:underline">Pros & cons</a></li>
              <li><a href="#regulation" className="hover:underline">Regulation & entities</a></li>
              <li><a href="#fees" className="hover:underline">Fees & costs</a></li>
              <li><a href="#platform" className="hover:underline">Platform & tools</a></li>
              <li><a href="#security" className="hover:underline">Security</a></li>
              <li><a href="#who" className="hover:underline">Who should use it</a></li>
              <li><a href="#alternatives" className="hover:underline">Alternatives</a></li>
              <li><a href="#verdict" className="hover:underline">Verdict</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ol>
          </div>
        </section>

        {/* What is */}
        <section id="what-is" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What is PrimeXBT?</h2>
          <p className="text-slate-700 mb-4">
            PrimeXBT launched in 2018 and positions itself as a multi-asset broker for traders who
            want crypto derivatives alongside traditional CFD markets (forex, indices, commodities,
            and related instruments) from a single account model.
          </p>
          <p className="text-slate-700 mb-4">
            That is an important distinction versus platforms such as{" "}
            <Link href="/exchanges/best-crypto-exchanges-2026" className="text-indigo-600 hover:underline">
              major spot crypto exchanges
            </Link>
            . On a typical spot exchange you buy an asset and can withdraw it to a wallet you control.
            On a derivatives-focused broker, you are mostly trading price exposure with leverage —
            and funding, overnight, and liquidation mechanics matter as much as the entry fee.
          </p>
          <p className="text-slate-700">
            In 2026, PrimeXBT continues to market proprietary PXTrader tooling (including TradingView-powered
            charting in published materials), MT5 access in some setups, swap-free account options on
            PXTrader 2.0, and funding via crypto and card rails. Product availability depends on the
            legal entity and your country of residence.
          </p>
        </section>

        {/* Pros cons */}
        <section id="pros-cons" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pros and cons</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-bold text-emerald-900 mb-3">Pros</h3>
              <ul className="space-y-2 text-slate-800 text-sm">
                <li>Multi-asset access (crypto futures + CFDs) in one workflow</li>
                <li>Competitive published crypto futures trading fees</li>
                <li>TradingView-style charting on proprietary platform materials</li>
                <li>High maximum leverage for advanced strategies (also a risk)</li>
                <li>Crypto deposits usable as trading capital on many account setups</li>
                <li>Active product updates (e.g. swap-free expansion on PXTrader 2.0 in 2026)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="font-bold text-rose-900 mb-3">Cons</h3>
              <ul className="space-y-2 text-slate-800 text-sm">
                <li>Not a top-tier regulated retail broker (no FCA/ASIC-style global standard)</li>
                <li>Derivatives-first — weak fit for simple long-term coin ownership</li>
                <li>High leverage can liquidate accounts quickly</li>
                <li>Proof-of-reserves style transparency is weaker than leading spot exchanges</li>
                <li>Restricted in several major jurisdictions</li>
                <li>Funding/overnight costs can dominate multi-day strategies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regulation */}
        <section id="regulation" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulation and legal entities</h2>
          <p className="text-slate-700 mb-4">
            PrimeXBT operates through multiple legal entities rather than a single globally
            recognised top-tier retail licence. Independent reviews commonly reference an FSCA
            authorisation pathway in South Africa (often cited with licence number 45697 for a local
            entity), plus additional offshore registrations/licences associated with jurisdictions
            such as Seychelles (FSA), Mauritius (FSC), and other service entities (including Saint
            Lucia incorporation details in company documents).
          </p>
          <p className="text-slate-700 mb-4">
            What this means in practice:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
            <li>Your contractual counterparty depends on onboarding and residency</li>
            <li>Product set and protections can differ by entity</li>
            <li>This is not equivalent to trading with an FCA-, ASIC-, or CySEC-authorised retail broker</li>
            <li>Some regions are restricted entirely under the platform’s terms</li>
          </ul>
          <p className="text-slate-700 mb-4">
            PrimeXBT has also been associated with Financial Commission membership in industry
            reporting, including a compensation-fund style mechanism with a capped recovery amount
            per eligible complaint. That can help with certain disputes; it is not a substitute for
            statutory investor-protection regimes in major financial centres.
          </p>
          <p className="text-slate-700 mb-2">Sources to cross-check yourself:</p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>
              <a href="https://primexbt.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                PrimeXBT official site / legal disclosures
              </a>
            </li>
            <li>
              <a href="https://www.fsca.co.za/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                FSCA (South Africa)
              </a>{" "}
              register search for authorised entities
            </li>
            <li>
              Independent broker reviews that document multi-entity licensing (verify dates)
            </li>
          </ul>
        </section>

        {/* Fees */}
        <section id="fees" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Fees and real trading costs</h2>
          <p className="text-slate-700 mb-4">
            Published fee schedules in 2026 industry reviews commonly list crypto futures trading
            around <strong>0.05%</strong> per trade on standard account models, with lower rates on
            some forex/index/commodity CFD categories. Exact maker/taker structures can differ by
            product and account type — always confirm inside the live fee schedule.
          </p>

          <figure className="my-6">
            <Image
              src="/images/3.png"
              alt="PrimeXBT fees or markets overview screenshot"
              width={1200}
              height={700}
              className="w-full rounded-2xl border border-slate-200"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Figure 2. Fees / markets overview (upload your screenshot as /images/3.png).
            </figcaption>
          </figure>

          <p className="text-slate-700 mb-4">
            Costs beginners often underestimate:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Funding / overnight financing</strong> on positions held across sessions
            </li>
            <li>
              <strong>Spread and slippage</strong> during volatile moves
            </li>
            <li>
              <strong>Withdrawal network fees</strong> on crypto payouts
            </li>
            <li>
              <strong>Liquidation costs</strong> when leverage is too high for account size
            </li>
          </ul>
          <p className="text-slate-700">
            Use our{" "}
            <Link href="/tools/fee-calculator" className="text-indigo-600 font-medium hover:underline">
              fee calculator
            </Link>{" "}
            for rough comparisons, then verify live contract conditions on the instrument you trade.
          </p>
        </section>

        {/* Platform */}
        <section id="platform" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Platform, markets and tools</h2>
          <p className="text-slate-700 mb-4">
            PrimeXBT’s proprietary stack (PXTrader / PXTrader 2.0 in current marketing) is designed
            for active trading: order tickets, charting, and risk controls in one interface. Public
            updates in August 2026 highlighted expanded swap-free account options on PXTrader 2.0,
            replacing variable overnight swaps with more predictable administrative fee models for
            eligible accounts.
          </p>

          <figure className="my-6">
            <Image
              src="/images/2.png"
              alt="PrimeXBT PXTrader trading terminal chart interface"
              width={1200}
              height={700}
              className="w-full rounded-2xl border border-slate-200"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Figure 3. Trading terminal / chart view (upload as /images/2.png).
            </figcaption>
          </figure>

          <p className="text-slate-700 mb-4">
            Typical market coverage includes:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
            <li>Crypto futures / perpetual-style contracts on major coins</li>
            <li>Forex CFDs</li>
            <li>Indices and commodities CFDs</li>
            <li>Selected share CFDs depending on entity/product set</li>
          </ul>
          <p className="text-slate-700">
            Leverage can be high — industry materials frequently cite adjustable leverage up to
            very elevated ratios on eligible instruments. High leverage is a feature for
            professionals and a common account-killer for beginners.
          </p>
        </section>

        {/* Security */}
        <section id="security" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Security posture</h2>
          <p className="text-slate-700 mb-4">
            PrimeXBT publicly emphasises operational security controls such as cold storage for
            digital assets, multi-signature approaches, 2FA, address whitelisting, and encrypted
            connections. Independent reviews often note the absence of a major public breach since
            launch — useful, but not a guarantee of future outcomes.
          </p>
          <p className="text-slate-700 mb-4">
            Compared with leading spot exchanges that publish frequent proof-of-reserves attestations,
            PrimeXBT’s transparency model is closer to a traditional broker narrative. Treat balances
            on any derivatives platform as trading capital, not long-term savings.
          </p>
          <p className="text-slate-700">
            Related reading:{" "}
            <Link href="/security/exchange-incidents" className="text-indigo-600 hover:underline">
              exchange security incidents
            </Link>
            {" "}·{" "}
            <Link href="/wallets/best-crypto-wallets-2026" className="text-indigo-600 hover:underline">
              best crypto wallets 2026
            </Link>
          </p>
        </section>

        {/* Funding image */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <figure>
            <Image
              src="/images/4.png"
              alt="PrimeXBT account funding methods screenshot"
              width={1200}
              height={700}
              className="w-full rounded-2xl border border-slate-200"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Figure 4. Funding / deposit screen (upload as /images/4.png).
            </figcaption>
          </figure>
        </section>

        {/* Who */}
        <section id="who" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who should use PrimeXBT (and who should not)</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Consider it if:</strong> you already understand margin, funding rates, and
              liquidation risk; you want crypto derivatives and traditional CFDs in one place; and
              you accept entity-based offshore regulation.
            </p>
            <p>
              <strong>Skip it if:</strong> you are buying your first Bitcoin to hold for years; you
              need FCA/ASIC-level consumer protections; or you are still learning basic spot market
              order types.
            </p>
            <p>
              Beginners are usually better served by a major spot exchange from our{" "}
              <Link href="/exchanges/best-crypto-exchanges-2026" className="text-indigo-600 hover:underline">
                best crypto exchanges 2026
              </Link>{" "}
              guide, plus a hardware wallet for long-term storage.
            </p>
          </div>
        </section>

        {/* Alternatives */}
        <section id="alternatives" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Alternatives to compare</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>
              <a href="https://go.cryptosbeginner.com/Bybit" target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-600 hover:underline">
                Bybit
              </a>{" "}
              — stronger pure-crypto derivatives ecosystem for many active traders
            </li>
            <li>
              <a href="https://go.cryptosbeginner.com/binance" target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-600 hover:underline">
                Binance
              </a>{" "}
              — broader spot + derivatives stack where available
            </li>
            <li>
              <a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-600 hover:underline">
                OKX
              </a>{" "}
              — multi-product trading toolkit
            </li>
            <li>
              <a href="https://go.cryptosbeginner.com/Kraken" target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-600 hover:underline">
                Kraken
              </a>{" "}
              — more conservative reputation for users prioritising operational history
            </li>
          </ul>
        </section>

        {/* Verdict */}
        <section id="verdict" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Verdict</h2>
          <p className="text-slate-700 mb-4">
            PrimeXBT can be a capable multi-asset derivatives venue for traders who already know
            what they are doing. Competitive published fees and a combined crypto/CFD workflow are
            the main attractions. The limiting factors are regulation quality versus top-tier
            brokers, weaker proof-of-reserves style transparency than leading spot exchanges, and
            the structural risk of high leverage.
          </p>
          <p className="text-slate-700 mb-6">
            Our score: <strong>3.7/5</strong> for experienced active traders;{" "}
            <strong>2.5/5</strong> for absolute beginners.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Open PrimeXBT (affiliate) →
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="font-bold text-slate-900">Is PrimeXBT legit?</h3>
              <p className="mt-2">
                It is a long-running commercial trading platform with multi-entity licensing claims
                and an active product roadmap. “Legit business” is not the same as “low-risk” or
                “top-tier regulated.”
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Can beginners use PrimeXBT?</h3>
              <p className="mt-2">
                Possible, but not recommended as a first platform. Learn spot markets and risk
                management first.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Does PrimeXBT require KYC?</h3>
              <p className="mt-2">
                Verification requirements depend on account limits, payment method, and compliance
                triggers. Higher limits and certain funding routes typically require identity checks.
                Confirm current onboarding rules on the official site.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Is there a PrimeXBT bonus?</h3>
              <p className="mt-2">
                Promotions change. If a deposit bonus is offered, read the volume and withdrawal
                conditions carefully — bonuses on leveraged products can encourage overtrading.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-bold">Trade only what you can afford to lose</h2>
            <p className="mt-3 text-slate-300">
              Derivatives amplify both gains and losses. Prefer licensed local options where your
              country requires them.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={AFFILIATE}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-500 hover:bg-emerald-600 font-semibold px-5 py-3 rounded-lg"
              >
                Visit PrimeXBT
              </a>
              <Link
                href="/exchanges/best-crypto-exchanges-2026"
                className="bg-white/10 hover:bg-white/20 font-semibold px-5 py-3 rounded-lg"
              >
                Best exchanges 2026
              </Link>
              <Link
                href="/tools/exchange-finder"
                className="bg-white/10 hover:bg-white/20 font-semibold px-5 py-3 rounded-lg"
              >
                Exchange quiz
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. Not financial, tax, or legal
              advice. Cryptocurrency and leveraged products can result in total loss of capital.
              Availability depends on your jurisdiction. Some links are affiliate links. Always
              verify live terms, fees, and regulatory disclosures on the official PrimeXBT site
              before depositing funds.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}