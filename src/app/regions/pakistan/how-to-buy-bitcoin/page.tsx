import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PUBLISHED = "2026-06-18";
const UPDATED = "2026-08-21";

export const metadata: Metadata = {
  title: "How to Buy Bitcoin in Pakistan 2026: PKR, P2P and Safety",
  description:
    "A practical guide to buying Bitcoin in Pakistan with PKR: PVARA and SBP context, P2P escrow, JazzCash and Easypaisa risks, KYC, fees and wallet security.",
  alternates: {
    canonical: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
    languages: {
      en: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
      ur: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
      "x-default": `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
    },
  },
  openGraph: {
    title: "How to Buy Bitcoin in Pakistan 2026",
    description:
      "PKR P2P, KYC, fees, scams and Bitcoin wallet safety for Pakistani beginners.",
    url: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
    type: "article",
  },
};

const faqs = [
  {
    q: "Is Bitcoin legal in Pakistan in 2026?",
    a: "Bitcoin is not legal tender in Pakistan. Pakistan now has a statutory virtual-asset framework and PVARA licensing path for service providers, but an individual should not assume that every accessible global exchange has a completed Pakistani licence. Check current PVARA, SBP and other official guidance.",
  },
  {
    q: "What is the easiest way to buy Bitcoin in Pakistan?",
    a: "Many beginners use a verified global exchange, buy USDT with PKR through the platform's P2P escrow system and then convert USDT to BTC on the spot market. Availability, payment methods and legal status can change.",
  },
  {
    q: "Can I use JazzCash or Easypaisa?",
    a: "Some P2P listings may offer JazzCash or Easypaisa. Use only the exchange's own escrow and chat, match the payment account name, pay the exact order amount and never use an off-platform broker.",
  },
  {
    q: "Do I need CNIC KYC?",
    a: "Major platforms generally require identity verification for account features, withdrawals or higher limits. Use accurate information and submit a clear CNIC image and matching selfie through the official app or website only.",
  },
  {
    q: "How much does a PKR 50,000 Bitcoin purchase cost?",
    a: "The final cost depends on the P2P spread, payment charges, spot commission and any withdrawal fee. Treat any percentage as an example, not a fixed quote. Check the live order price and total amount before confirming.",
  },
  {
    q: "Should I leave Bitcoin on an exchange?",
    a: "Keep only an amount intended for active trading on an exchange. For larger or long-term holdings, consider self-custody only after learning how to secure and recover a wallet.",
  },
];

function AffiliateButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
    >
      {children}
    </a>
  );
}

const sources = [
  {
    name: "PVARA licensing information",
    href: "https://www.pvara.gov.pk/licensing",
  },
  {
    name: "Pakistan Virtual Asset Services Regulations, 2026",
    href: "https://pvara.gov.pk/documents/Pakistan%20Virtual%20Asset%20Services%20Regulations,%202026%20-%20Notified%2021%20August%202026.pdf",
  },
  {
    name: "SBP circulars and notices",
    href: "https://www.sbp.org.pk/circulars",
  },
];

export default function HowToBuyBitcoinPakistanPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Buy Bitcoin in Pakistan 2026",
      description:
        "A step-by-step guide to PKR P2P Bitcoin purchases, KYC, fees and wallet safety.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Taimoor Chaudhry",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
      inLanguage: "en",
    },
    {
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
          name: "Pakistan",
          item: `${SITE_URL}/regions/pakistan`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to buy Bitcoin",
          item: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
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
        <article>
          <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
            <div className="mx-auto max-w-5xl px-4 py-14">
              <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
                <span>English</span>
                <span className="text-slate-500">·</span>
                <Link
                  href="/ur/regions/pakistan/how-to-buy-bitcoin"
                  className="text-white underline-offset-4 hover:underline"
                >
                  اردو
                </Link>
              </div>

              <p className="mb-3 text-sm font-medium text-emerald-300">
                Pakistan guide · Updated{" "}
                <time dateTime={UPDATED}>August 21, 2026</time>
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                How to buy Bitcoin in Pakistan with PKR
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                A beginner-friendly route through KYC, P2P escrow, JazzCash,
                Easypaisa, fees and wallet security, updated for Pakistan&apos;s
                new PVARA framework.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#steps"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
                >
                  See the five steps
                </a>

                <a
                  href="#safety"
                  className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  Read safety rules
                </a>
              </div>

              <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  Editorial review
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-200">
                  Written and reviewed for Pakistan context by{" "}
                  <span className="font-semibold text-white">
                    Taimoor Chaudhry
                  </span>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-bold text-emerald-800">
                  Typical route
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-950">
                  PKR → USDT through exchange escrow → BTC on spot.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-800">
                  Main cost
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-950">
                  P2P spread plus trading, payment and possible withdrawal
                  fees.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="text-sm font-bold text-rose-800">
                  Main rule
                </p>

                <p className="mt-2 text-sm leading-6 text-rose-950">
                  Never move payment or support conversations outside the
                  platform.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-amber-950">
                Before you buy
              </h2>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-amber-950">
                Bitcoin is not legal tender in Pakistan. P2P availability does
                not prove that a seller, exchange or payment route is locally
                licensed. Use the official platform, follow KYC and payment
                instructions, and verify current PVARA and SBP information
                before depositing.
              </p>
            </div>
          </section>

          <section id="steps" className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Step-by-step
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Five steps to buy Bitcoin
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
              {[
                "Create and secure your account.",
                "Complete CNIC identity verification.",
                "Buy USDT through PKR P2P escrow.",
                "Convert USDT to BTC on spot.",
                "Withdraw or secure the holding.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-3xl font-black text-emerald-600">
                    0{index + 1}
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  1. Create and secure the account
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Register through the official exchange website or app. Use
                  an authenticator app for two-factor authentication and never
                  share a one-time code with support or a P2P seller.
                </p>

                <div className="mt-4">
                  <AffiliateButton href="https://go.cryptosbeginner.com/binance">
                    Compare Binance
                  </AffiliateButton>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  2. Complete CNIC KYC
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Submit a clear CNIC image and matching selfie through the
                  official platform. Details should be accurate and
                  consistent with your account and payment information.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  3. Buy USDT through PKR P2P
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Open the platform&apos;s P2P market, choose Buy, select USDT
                  and set PKR as the currency. Filter for the payment method
                  you can legitimately use, review completion history and
                  start with a small test order.
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                  <li>Pay only the exact amount shown in the order.</li>
                  <li>Use the account name and payment method specified by the order.</li>
                  <li>Describe transfers accurately and follow your bank&apos;s instructions.</li>
                  <li>Mark payment only after the transaction succeeds.</li>
                  <li>Use the exchange appeal system if the merchant stalls.</li>
                </ul>

                <p className="mt-4 leading-7 text-slate-700">
                  For more detail, read{" "}
                  <Link
                    href="/learn/how-p2p-escrow-works"
                    className="font-semibold text-indigo-700 hover:underline"
                  >
                    How P2P escrow works
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  4. Convert USDT to BTC
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Open spot trading and select the BTC/USDT pair. A market
                  order may be simpler for a first small transaction, while
                  limit orders give more control over price.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  5. Secure the account and holding
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Enable withdrawal whitelisting, anti-phishing tools and
                  login alerts. For long-term holdings, learn self-custody
                  before moving funds to a hardware wallet.
                </p>

                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="mt-4 inline-flex font-semibold text-indigo-700 hover:underline"
                >
                  Read the exchange security checklist →
                </Link>
              </section>
            </div>
          </section>

          <section id="legal" className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                  Legal context
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  What changed in Pakistan?
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Pakistan now has a Virtual Assets Act and PVARA, the
                  dedicated regulator for VASPs. The Pakistan Virtual Asset
                  Services Regulations, 2026 add operational detail to the
                  licensing framework.
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  An NOC is not automatically a full VASP licence. An
                  international exchange can also be accessible to Pakistani
                  users without holding completed local authorisation.
                </p>
              </div>

              <aside className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-lg font-bold">
                  Check before relying on a claim
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>Is the provider licensed, NOC-stage or offshore?</li>
                  <li>Does the status cover exchange, custody or another service?</li>
                  <li>Does the current status cover retail customers?</li>
                  <li>Is the information from PVARA rather than an affiliate page?</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {sources.map((source) => (
                    <a
                      key={source.name}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-300 hover:underline"
                    >
                      {source.name} →
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section id="best-exchanges" className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Exchange comparison
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Platforms commonly compared for PKR
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  name: "Binance",
                  best: "First account and broad P2P",
                  rail: "PKR P2P may include bank transfer and mobile-wallet offers.",
                  href: "https://go.cryptosbeginner.com/binance",
                },
                {
                  name: "Bybit",
                  best: "Backup exchange and active trading",
                  rail: "Check current PKR P2P availability and derivatives restrictions.",
                  href: "https://go.cryptosbeginner.com/Bybit",
                },
                {
                  name: "OKX",
                  best: "Alternative P2P book and Web3 tools",
                  rail: "Verify P2P offers, customer eligibility and withdrawal access.",
                  href: "https://go.cryptosbeginner.com/OKX",
                },
                {
                  name: "Bitget",
                  best: "Copy-trading comparison",
                  rail: "Review lead traders, risk settings, fees and liquidity.",
                  href: "https://go.cryptosbeginner.com/Bitget-Bonus",
                },
              ].map((exchange) => (
                <article
                  key={exchange.name}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {exchange.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-emerald-700">
                    {exchange.best}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {exchange.rail}
                  </p>

                  <a
                    href={exchange.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-5 inline-flex font-semibold text-emerald-700 hover:underline"
                  >
                    Compare {exchange.name} →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="fees" className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Cost example
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                What can a PKR 50,000 purchase cost?
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                There is no fixed answer because the P2P spread, payment
                charges, spot commission and withdrawal fee change over time.
                Check the live order total rather than relying on a headline
                percentage.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    P2P spread
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Difference between the quoted PKR price and the reference
                    market price.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Spot fee
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Commission charged when USDT is converted to BTC.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Withdrawal fee
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Applies if you move BTC to an external wallet.
                  </p>
                </div>
              </div>

              <Link
                href="/tools/fee-calculator"
                className="mt-6 inline-flex font-semibold text-emerald-300 hover:underline"
              >
                Use the fee calculator →
              </Link>
            </div>
          </section>

          <section id="safety" className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-rose-700">
                  Safety
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Scams, bank reviews and account security
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  <li>Do not use WhatsApp or Instagram “agents”.</li>
                  <li>Do not pay outside exchange escrow.</li>
                  <li>Never share a recovery phrase, password or one-time code.</li>
                  <li>Use accurate payment details and follow bank instructions.</li>
                  <li>Keep receipts and order records.</li>
                  <li>Do not use leverage until you understand liquidation.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-lg font-bold text-rose-950">
                  The most common failure
                </h3>

                <p className="mt-3 text-sm leading-7 text-rose-950">
                  A user pays a person outside platform escrow after being
                  promised a better rate. The platform then has little ability
                  to reverse or investigate the payment. A better price is not
                  worth losing escrow protection.
                </p>
              </div>
            </div>
          </section>

          <section id="store" className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Storage
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Keep trading funds and long-term holdings separate
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-700">
                Keep only trading amounts on an exchange. For long-term
                holdings, consider self-custody only after learning how to
                protect the recovery phrase and verify every transaction.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <AffiliateButton href="https://go.cryptosbeginner.com/LedgerWallet">
                  Compare Ledger
                </AffiliateButton>

                <AffiliateButton href="https://go.cryptosbeginner.com/TrezorSafe">
                  Compare Trezor
                </AffiliateButton>

                <Link
                  href="/wallets"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Wallets guide
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Direct answers
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Buying Bitcoin in Pakistan: FAQ
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
            <div className="rounded-2xl bg-emerald-50 p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Your first transaction
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                Open one account, complete KYC and make a small P2P test
                before considering a larger purchase. Keep records and do
                not leave long-term holdings on an exchange.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <AffiliateButton href="https://go.cryptosbeginner.com/binance">
                  Compare Binance
                </AffiliateButton>

                <Link
                  href="/regions/pakistan"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
                >
                  Pakistan exchanges guide
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
              <p>
                <strong>Disclaimer:</strong> Educational content only. Not
                legal, tax or financial advice. Pakistan&apos;s virtual-asset
                framework, PVARA licensing, SBP rules, payment policies and
                exchange availability can change. Verify current official
                guidance before depositing funds. Some links may be affiliate
                links.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}