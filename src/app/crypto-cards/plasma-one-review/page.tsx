import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/plasma-one-review`;
const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";
const AFFILIATE = "https://go.cryptosbeginner.com/Plasma";
const IMG = "/images/cards/plasma";

const REVIEWER = {
  name: "Alex Rivera",
  initials: "AR",
  role: "Crypto researcher, CryptosBeginner",
};

export const metadata: Metadata = {
  title: "Plasma One Card Review 2026: Tiers, Cashback and Fees, Tested",
  description:
    "October 2026 Plasma One Card review: self-custodial Visa for stablecoin spending with Lite, Core, and Platinum tiers, XPL cashback as shown in the app, real fee tables from the help center, country availability, and honest verdict.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Plasma One Card Review 2026: Tiers, Cashback and Fees, Tested",
    description:
      "Hands-on Plasma One review: self-custodial Visa card, Lite/Core/Platinum tiers, XPL cashback, real fees from the help center, deposit networks, ATM limits, and signup guide.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${IMG}/384483ce4371b2c1050774d9ea972c9e4cd4fbbd220758efd3a6fafd7aaa9dcc.jpg`,
        width: 1080,
        height: 1990,
        alt: "Plasma One app Platinum tier screen showing 4 percent cashback, 10 percent AI and airline cashback, and a 100,000 XPL lock requirement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasma One Card Review 2026",
    description: "Plasma One tested: self-custodial Visa card, three tiers, XPL cashback, real fees, and verdict.",
    images: [`${SITE_URL}${IMG}/384483ce4371b2c1050774d9ea972c9e4cd4fbbd220758efd3a6fafd7aaa9dcc.jpg`],
  },
};

const faqItems = [
  {
    question: "What is the Plasma One Card?",
    answer:
      "Plasma One is a self-custodial Visa card for spending stablecoins. Everything you deposit converts to USD on arrival, and the card spends that balance anywhere Visa is accepted. Card issuance runs on Rain infrastructure, the same provider stack behind several other crypto card programs. It comes in three tiers: Lite (free), Core ($199 per year or a 20,000 XPL lock), and Platinum (a 100,000 XPL lock at a promotional rate). Cashback is paid in XPL, Plasma's native digital asset.",
  },
  {
    question: "How do the Lite, Core, and Platinum tiers work?",
    answer:
      "Lite is free and gives you a virtual card only, with 2% XPL cashback on the first $500 of monthly spend. Core costs $199 per year, paid from your USD cash balance, or a 20,000 XPL lock for 12 months; it adds 3% base cashback, a Visa Signature physical card (physical issuance is marked coming soon), and travel perks. Platinum requires a 100,000 XPL lock for 12 months at a promotional rate, with 4% base cashback, 0% FX on card spend, a Visa Infinite metal card, and the full perks list. Core auto-renews every 12 months unless you opt out; you can downgrade to Lite, renew Core, or upgrade to Platinum from the Tiers tab.",
  },
  {
    question: "What cashback does Plasma One pay?",
    answer:
      "Cashback is paid in XPL and the base rates are shown in the app: Lite pays 2% on the first $500 of monthly spend, then 0.1% on the rest. Core pays 3% base with 5% AI cashback and 1% friends referral. Platinum pays 4% base with 10% AI cashback, 10% airline cashback up to $600, and 1% referral; Lite referral is 0.25%. Two honesty notes: the only help article on AI cashback documents an expired May 27 to June 3, 2026 promo week, not the standing tier benefit, so we could not verify current AI cashback terms. And the airline cashback article contradicts itself on the cap period, saying both a semi-annual cap and a monthly reset. Confirm both in the app before spending around them.",
  },
  {
    question: "What does the XPL lock mean for Core and Platinum?",
    answer:
      "If you choose the lock instead of paying Core's $199 annual fee, you lock 20,000 XPL for 12 months and cannot unlock early. Platinum requires locking 100,000 XPL for 12 months at a promotional rate, with no cash option. XPL is a digital asset: it is not legal tender, not FDIC or FSCS insured, and its value can fall to zero. Only lock XPL you can afford to have illiquid for a year, and size the lock against the token's volatility, not just the headline cashback rate.",
  },
  {
    question: "What are the Plasma One fees?",
    answer:
      "From the help center fee article (updated October 12, 2026): card FX markup is 1% on Lite, 0.5% on Core, and 0% on Platinum, plus a Visa network FX fee of about 1% on Lite and Core (none on Platinum). Bank deposits are free on all tiers. Bank withdrawals cost 0.75% to 1.00% on Lite, 0.25% to 0.35% on Core, and less than 0.1% on Platinum, plus rail fees. Onramp examples: USD ACH costs $1 on Lite and $0.50 on Core and Platinum; USD Wire costs $15 on Lite and Core and $10 on Platinum. Crypto deposits carry a Plasma fee of 0.15% to 0.75% identical across tiers, plus network, bridge, and swap fees; USDG deposits only carry the bridge fee.",
  },
  {
    question: "How do I fund my Plasma One account?",
    answer:
      "You can deposit stablecoins (USDT, USDC, USDG, USDe, PYUSD, USDS, EURC), other crypto (ETH, WBTC, HYPE, WETH, cbBTC, BNB, OP, ARB, POL, uBTC, UNI, AAVE), or fiat through virtual bank accounts that auto-convert to USDT: EUR via SEPA (minimum 2 EUR), GBP via Faster Payments (minimum 2 GBP), MXN via SPEI (minimum 50 MXN), COP via Bre-B (minimum 10,000 COP), plus a USD account. As shown in the app, USDT deposits support 9 networks with Plasma recommended as instant and free, USDC supports 7 networks, and USDG arrives via Robinhood Chain. Typical times: USD ACH 1 to 3 business days, USD Wire same day before cutoff, EUR SEPA and GBP Faster Payments minutes, MXN SPEI, BRL PIX, and COP Bre-B about 30 minutes. You can also send money to Plasma One usernames or Plasma mainnet addresses only. Deposits are screened, and funds linked to sanctioned entities may be blocked and become unrecoverable.",
  },
  {
    question: "Which countries and US states support Plasma One?",
    answer:
      "The card is fully unsupported in Cuba, Iran, North Korea, Russia, Syria, Ukraine, and Venezuela. Documents from Belarus, mainland China, India, Iraq, Israel, Myanmar, Nepal, Nicaragua, Turkey, Vietnam, Nigeria, and Sri Lanka are blocked at document level, but you may still qualify with proof of address from an eligible country. In the US, 31 states are supported, including California, Texas, Florida, and New York; Washington and Arizona are explicitly unsupported. Fiat deposits and withdrawals are unavailable for residents of a long exclusion list that includes Japan, Algeria, Lebanon, and Tunisia, and in the US only New York residents can use them. Physical card delivery excludes 29 countries, including Mexico, India, Bangladesh, and Turkey. Check the help center country lists before applying, because eligibility can change.",
  },
  {
    question: "Can I withdraw cash from an ATM with Plasma One?",
    answer:
      "Yes, with the physical card only. ATM withdrawals go up to $1,000 per transaction with a maximum of 3 withdrawals per rolling 24 hours. ATM withdrawals do not earn cashback, and ATM operator fees may apply on top. Platinum members pay no FX on non-USD ATM withdrawals. The help center's ATM fee table values did not extract cleanly, so confirm the exact ATM fee shown in the app for your tier before relying on cash access.",
  },
  {
    question: "What perks come with Core and Platinum?",
    answer:
      "Core is a Visa Signature: price protection $2,000, purchase protection $10,000, extended warranty $10,000, auto rental insurance, a lounge program, 1GB GigSky eSIM, Visa concierge, and a luxury hotel collection. In the app, Core adds a $100 per year ChatGPT Go credit (rebate when you pay with the card), 2 free virtual cards, and priority support. Platinum is a Visa Infinite: price protection $4,000, purchase protection $20,000, extended warranty $25,000, $1.5M travel accident insurance, $600 baggage delay, $3,000 lost luggage, unlimited Priority Pass lounge access at 1,900+ lounges, 3GB GigSky eSIM, concierge, plus $500 per year in ChatGPT Plus and Claude Pro credits, 3 free virtual cards, a 16g metal card, and VIP support. Because cards are issued from Puerto Rico, set the Visa benefits portal location to Puerto Rico to see your benefits.",
  },
  {
    question: "How do I sign up for the Plasma One Card?",
    answer:
      "Open our link at https://go.cryptosbeginner.com/Plasma, download the Plasma One app for iPhone or Android, and create your account. Pick your country of residence, then complete identity verification: email verification, profile details, an identity document photo, a selfie, and a short questionnaire. In most regions a $10 deposit is required before card activation; it is not a fee, it stays in your balance and is spendable. Some regions charge a $10 card fee instead, and the app shows which applies to you. Then activate your card and pick a tier.",
  },
];

function PrimaryAffiliateButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{ color: "#ffffff", textDecoration: "none" }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
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

function Figure({ src, alt, caption, width = 540, height = 1080, wide = false }: { src: string; alt: string; caption: string; width?: number; height?: number; wide?: boolean }) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`mx-auto h-auto w-full ${wide ? "max-w-2xl" : "max-w-xs"} rounded-2xl border border-slate-200 shadow-sm`}
      />
      <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <p className="font-black text-amber-900">{title}</p>
      <div className="mt-2 text-sm leading-7 text-amber-950/80">{children}</div>
    </div>
  );
}

function Steps({ steps }: { steps: { title: string; detail: React.ReactNode }[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
            {i + 1}
          </span>
          <div className="min-w-0">
            <p className="font-bold text-slate-950">{step.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function PlasmaOneReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plasma One Card Review 2026: Tiers, Cashback and Fees, Tested",
    description:
      "Hands-on Plasma One review: self-custodial Visa card for stablecoin spending, Lite/Core/Platinum tiers, XPL cashback as shown in the app, real fees from the help center, deposit networks, ATM limits, and signup guide.",
    datePublished: UPDATED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: REVIEWER.name, url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300">Tools · crypto cards</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Plasma One Card review 2026: the stablecoin Visa with XPL cashback
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A self-custodial Visa card for stablecoin spending, with three tiers from a free
              Lite plan to a Platinum tier locked behind 100,000 XPL. Cashback pays in XPL, the
              fee tables are unusually transparent, and the app was tested screen by screen.
              Here is the full Plasma One breakdown.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the Plasma One Card</PrimaryAffiliateButton>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} reviewer={REVIEWER} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4 text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">Affiliate disclosure:</strong> we may earn a commission
          if you sign up through our link, at no extra cost to you.{" "}
          <strong className="text-slate-700">Risk warning:</strong> crypto is volatile, XPL can
          fall to zero, locks cannot be undone early, and card programs can change. Educational
          content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What Plasma One is</H2>
            <P>
              Plasma One is a Visa card with a stablecoin-first design. Everything you deposit,
              stablecoins, other crypto, or fiat through a virtual bank account, converts to USD
              on arrival, and the card spends that balance anywhere Visa is accepted. It is
              self-custodial: you hold your own assets rather than parking them in a company
              account. Card issuance runs on Rain infrastructure, the same provider stack behind
              several other crypto card programs, and in October 2026 Plasma announced a Stripe
              partnership for multi-currency stablecoin cards.
            </P>
            <P>
              The program is built around three membership tiers, Lite, Core, and Platinum, which
              set your cashback rate, your fees, and your perks. Cashback is paid in XPL, Plasma's
              native digital asset, which is also the key to the paid tiers: Core can be unlocked
              with a 20,000 XPL lock instead of the $199 annual fee, and Platinum requires a
              100,000 XPL lock with no cash option at all.
            </P>
            <Figure
              src={`${IMG}/384483ce4371b2c1050774d9ea972c9e4cd4fbbd220758efd3a6fafd7aaa9dcc.jpg`}
              alt="Plasma One app Platinum tier screen showing 4 percent cashback, 10 percent AI and airline cashback, a 100,000 XPL lock requirement, and 0 percent FX on card spend"
              caption="The Platinum tier screen: 4% cashback, 10% AI and airline cashback, and a 100,000 XPL lock at the promotional rate."
              width={540}
              height={995}
            />
          </Section>

          <Section id="tiers">
            <H2>Tiers: Lite, Core, and Platinum</H2>
            <P>
              Plasma One sells the card through three tiers. The tier sets your cashback rate,
              your FX and withdrawal fees, your card format, and your perks. Here are the numbers
              captured in the app in October 2026.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Tier</th>
                    <th className="px-4 py-3 font-black text-slate-950">Price</th>
                    <th className="px-4 py-3 font-black text-slate-950">Cashback (as shown in app)</th>
                    <th className="px-4 py-3 font-black text-slate-950">Card format</th>
                    <th className="px-4 py-3 font-black text-slate-950">Card FX markup</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Free</td>
                    <td className="px-4 py-3">2% on first $500/mo, then 0.1%</td>
                    <td className="px-4 py-3">1 free virtual card, no physical card</td>
                    <td className="px-4 py-3">1%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Core</td>
                    <td className="px-4 py-3">$199/yr or 20,000 XPL lock</td>
                    <td className="px-4 py-3">3% base, 5% AI, 1% friends referral</td>
                    <td className="px-4 py-3">Visa Signature; 2 free virtual, physical coming soon</td>
                    <td className="px-4 py-3">0.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Platinum</td>
                    <td className="px-4 py-3">100,000 XPL lock (promotional rate)</td>
                    <td className="px-4 py-3">4% base, 10% AI, 10% airline, 1% referral</td>
                    <td className="px-4 py-3">Visa Infinite metal 16g; 3 free virtual, physical ordering live</td>
                    <td className="px-4 py-3">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              A few mechanics worth knowing before you pick. Lite requires a $10 deposit before
              card activation in most regions. That is an activation minimum, not a fee: the money
              stays in your balance and is spendable. Some regions charge a $10 card fee instead,
              and the app shows which applies to you. Core auto-renews every 12 months unless you
              opt out, and from the Tiers tab you can downgrade to Lite, renew Core, or upgrade
              to Platinum. Cards are issued from Puerto Rico, so set the Visa benefits portal
              location to Puerto Rico to see your card benefits.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src={`${IMG}/0042cd0de980093500a46f701323784b552e9cfdd5c299dbe3af8da64112bcc3.jpg`}
                alt="Plasma One app Core tier screen showing the Visa Signature card, 199 dollars per year or a 20,000 XPL lock, 3 percent cashback, 5 percent AI cashback, and ChatGPT Go included"
                caption="Core: $199/year or a 20,000 XPL lock, 3% cashback, 5% AI cashback, and ChatGPT Go included."
                width={540}
                height={1090}
              />
              <Figure
                src={`${IMG}/5ed847f3a96b225c3d27536551db8dfd34a8a80f09264dabc4535256e0217fe0.jpg`}
                alt="Plasma One app Lite tier screen showing the free virtual Visa card, 2 percent cashback, and spending in over 180 countries"
                caption="Lite is the free entry point: a virtual card with 2% cashback on the first $500 of monthly spend."
                width={540}
                height={1080}
              />
            </div>
            <Callout title="The XPL locks are the real decision">
              <p>
                Core's 20,000 XPL lock and Platinum's 100,000 XPL lock both run 12 months and
                cannot be unlocked early. XPL is a digital asset: it is not legal tender, not
                FDIC or FSCS insured, and its value can fall to zero. The 100,000 XPL Platinum
                requirement is a promotional rate, so the bar for Platinum can rise. Only lock
                XPL you can afford to have illiquid for a full year, and size the lock against
                the token's volatility, not just the headline cashback rate.
              </p>
            </Callout>
          </Section>

          <Section id="cashback">
            <H2>Cashback in XPL</H2>
            <P>
              Every tier earns cashback in XPL on eligible card spend. The base rates below are
              captured from the app in October 2026, because Plasma's help center does not publish
              base cashback rates in its articles. ATM withdrawals never earn cashback.
            </P>
            <Figure
              src={`${IMG}/1aadb5db4fce234a9ddf720e5636d4bcf5b25f4825adafbe511ee2adb01909b2.jpg`}
              alt="Plasma One app cashback tracker showing 2 percent back on the first 500 dollars of monthly spend and 0.1 percent on the rest, resetting on November 1"
              caption="Lite cashback: 2% on the first $500 each month, then 0.1% on the rest. The counter resets monthly."
              width={540}
              height={807}
            />
            <P>
              On Lite, the 2% rate covers the first $500 of monthly spend, then drops to 0.1% on
              everything above it. The in-app tracker counts your monthly progress and shows the
              reset date, so you always know where you stand. Core raises the base to 3% and adds
              5% AI cashback plus 1% on friends referrals. Platinum raises the base to 4% with
              10% AI cashback, 10% airline cashback up to $600, and 1% referral; Lite referral
              cashback is 0.25%.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src={`${IMG}/187c6049a89d89eb3c7548345ab5e0c06a6374079aebeec79a075d34723b4f9e.jpg`}
                alt="Plasma One app Core cashback breakdown showing 5 percent AI cashback, 3 percent base cashback, 1 percent referral, and a 100 dollar annual ChatGPT Go credit"
                caption="Core cashback detail: 3% base, 5% on AI subscriptions, 1% on referrals, plus the ChatGPT Go credit."
                width={540}
                height={759}
              />
              <Figure
                src={`${IMG}/1fdd6d4d72c800562008abcfd429aeaaaf4bf25a07ac9fdf4d7ac36076a4fa14.jpg`}
                alt="Plasma One app Platinum cashback breakdown showing 10 percent AI cashback, up to 600 dollars airline cashback, 4 percent base cashback, and 1 percent referral"
                caption="Platinum cashback detail: 4% base, 10% on AI, up to $600 on airlines, 1% on referrals."
                width={540}
                height={782}
              />
            </div>
            <Callout title="Two cashback claims we could not fully verify">
              <p>
                First, AI cashback: the app presents it as a standing tier benefit, but the only
                help article on AI cashback documents an expired promotional week from May 27 to
                June 3, 2026, not the ongoing tier feature. We could not verify current AI
                cashback terms, so treat the 5% and 10% figures as app-shown, not confirmed.
                Second, airline cashback on Platinum: it applies to direct airline website and app
                purchases only, no third-party booking sites, and pays in XPL weekly on Thursdays.
                But the help article contradicts itself on the cap, describing both a semi-annual
                cap and a monthly reset. Confirm the real cap in the app before booking travel
                around it.
              </p>
            </Callout>
          </Section>

          <Section id="fees">
            <H2>Fees: the full table</H2>
            <P>
              Plasma's help center fee article, updated October 12, 2026, is one of the clearer
              fee documents in crypto cards. Here is what it says, tier by tier.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Fee</th>
                    <th className="px-4 py-3 font-black text-slate-950">Lite</th>
                    <th className="px-4 py-3 font-black text-slate-950">Core</th>
                    <th className="px-4 py-3 font-black text-slate-950">Platinum</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Card FX markup</td>
                    <td className="px-4 py-3">1% added fees</td>
                    <td className="px-4 py-3">0.5% added fees</td>
                    <td className="px-4 py-3">0%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Visa network FX</td>
                    <td className="px-4 py-3">~1%</td>
                    <td className="px-4 py-3">~1%</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Bank deposit</td>
                    <td className="px-4 py-3">Free</td>
                    <td className="px-4 py-3">Free</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Bank withdrawal</td>
                    <td className="px-4 py-3">0.75% to 1.00%</td>
                    <td className="px-4 py-3">0.25% to 0.35%</td>
                    <td className="px-4 py-3">Less than 0.1% + rail fees</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">USD ACH onramp</td>
                    <td className="px-4 py-3">$1</td>
                    <td className="px-4 py-3">$0.50</td>
                    <td className="px-4 py-3">$0.50</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">USD Wire onramp</td>
                    <td className="px-4 py-3">$15</td>
                    <td className="px-4 py-3">$15</td>
                    <td className="px-4 py-3">$10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Crypto deposit (Plasma fee)</td>
                    <td className="px-4 py-3">0.15% to 0.75%</td>
                    <td className="px-4 py-3">0.15% to 0.75%</td>
                    <td className="px-4 py-3">0.15% to 0.75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Crypto deposits carry the same 0.15% to 0.75% Plasma fee on every tier, plus
              network, bridge, and swap fees on top. USDG deposits are the exception: only the
              bridge fee applies. The app shows these exact fee screens per tier, so you can check
              the quote before committing.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src={`${IMG}/7263b30f3cb262fe278fc56e3dd7871394f425b4a7ce470789cd0aa18a0e0a10.jpg`}
                alt="Plasma One app Core fee screen showing card FX at 0.5 percent added fees, free bank deposits, bank withdrawal at 0.25 to 0.35 percent, 2 free virtual cards, and 1 free physical card"
                caption="Core fees in the app: 0.5% card FX, free bank deposits, 0.25-0.35% bank withdrawals, 2 free virtual cards."
                width={540}
                height={756}
              />
              <Figure
                src={`${IMG}/11eb105ed1d142c698a8e263572c82943f7d4e159fe43c7cbcaf31ca38dc816c.jpg`}
                alt="Plasma One app Lite fee screen showing card FX at 1 percent added fees, free bank deposits, bank withdrawal at 0.75 to 1.00 percent, 1 free virtual card, and no physical card"
                caption="Lite fees in the app: 1% card FX, free bank deposits, 0.75-1.00% bank withdrawals, one free virtual card."
                width={540}
                height={737}
              />
            </div>
          </Section>

          <Section id="funding">
            <H2>Funding: stablecoins, crypto, and fiat rails</H2>
            <P>
              Plasma One accepts three kinds of deposits, and everything converts to USD on
              arrival. Stablecoins: USDT, USDC, USDG, USDe, PYUSD, USDS, and EURC. Other crypto:
              ETH, WBTC, HYPE, WETH, cbBTC, BNB, OP, ARB, POL, uBTC, UNI, and AAVE. And fiat
              through virtual bank accounts that auto-convert to USDT: EUR via SEPA (minimum 2
              EUR), GBP via Faster Payments (minimum 2 GBP), MXN via SPEI (minimum 50 MXN), COP
              via Bre-B (minimum 10,000 COP), plus a USD account.
            </P>
            <Figure
              src={`${IMG}/552aac6eab4236b86aa4eddfaa6d649a186af52ba6f663b43d84e0aa8cf4324d.jpg`}
              alt="Plasma One app Add Funds screen listing USDT, USDC, and USDG deposits with their supported blockchain networks"
              caption="Add Funds lists each stablecoin with its supported networks. USDT shows the widest network choice."
              width={700}
              height={781}
              wide
            />
            <P>
              Network choice is generous. As shown in the app, USDT deposits support 9 networks
              with Plasma itself recommended as instant and free, alongside BSC, Arbitrum,
              Solana, Ethereum, Tron, Polygon, Optimism, and HyperEVM. USDC supports 7 networks:
              Arbitrum, Solana, Ethereum, Base, Polygon, Optimism, and HyperEVM. USDG arrives via
              Robinhood Chain in about 10 minutes. Deposit times on the fiat side: USD ACH takes
              1 to 3 business days, USD Wire usually lands the same day before the cutoff, EUR
              SEPA and GBP Faster Payments take minutes, and MXN SPEI, BRL PIX, and COP Bre-B
              take about 30 minutes.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src={`${IMG}/10a7e8f9a6e42359a2d09cb7e810be42f8094f15b08fff9cefe610cceeaac160.jpg`}
                alt="Plasma One app USDT deposit screen listing 9 networks with Plasma marked recommended and instant, plus BSC, Arbitrum, Solana, Ethereum, Tron, Polygon, Optimism, and HyperEVM"
                caption="USDT supports 9 deposit networks. Plasma itself is marked recommended, instant, and free."
                width={540}
                height={1081}
              />
              <Figure
                src={`${IMG}/6de38f3d2a01f940e6ab2f62bc4d6f00b4f61a3e17b31ed5ba8413df6464e95a.jpg`}
                alt="Plasma One app cash deposit screen showing EUR via SEPA, GBP via Faster Payments, MXN via SPEI, COP via Bre-B, and the XPL token"
                caption="Fiat arrives through virtual accounts in EUR, GBP, MXN, and COP, auto-converted to USDT."
                width={540}
                height={769}
              />
            </div>
            <P>
              You can also send money to other users: Plasma One usernames or Plasma mainnet
              addresses only, not arbitrary external wallets. One warning to take seriously:
              deposits are screened, funds should come from your own wallets or recognized
              exchanges, and funds linked to sanctioned entities may be reviewed or blocked by
              partners before reaching Plasma and could become unrecoverable.
            </P>
            <Callout title="Send from trusted sources only">
              <p>
                The app is explicit here: incoming transfers are checked automatically, deposits
                may be delayed or blocked, and sanctioned-linked funds could become
                unrecoverable. Do not use mixers, no-KYC swap services, or other people's wallets
                to fund this account. The compliance risk is yours.
              </p>
            </Callout>
          </Section>

          <Section id="earn">
            <H2>Earn on idle balances</H2>
            <P>
              The Earn tab pays yield on idle balances with no lockup: you can move back to cash
              anytime. The app shows a 4.34% APY example with an earnings simulator, so a
              $10,000 balance projects to about $10,434 after a year at the shown rate. UK
              residents are shown up to 6% yield in the onboarding flow.
            </P>
            <Figure
              src={`${IMG}/1e51fc6b531a06723a2a92b3014405cf76763ef495f8ca2f94a61cc2b944f153.jpg`}
              alt="Plasma One app Earn screen showing 4.34 percent APY with no lockup, a start earning button, and an earnings simulator projecting 10,434 dollars on a 10,000 dollar balance after one year"
              caption="The Earn tab: 4.34% APY in the example shown, no lockup, with an earnings simulator. Variable rate, not guaranteed."
            />
            <Callout title="Yield is variable, not a savings rate">
              <p>
                The 4.34% is an example of a variable rate, not a promised return. Yield comes
                from DeFi protocols inside the Plasma ecosystem, which means it moves with
                market conditions and carries smart-contract risk on top of the usual crypto
                volatility. Do not park money here that you cannot afford to see fluctuate.
              </p>
            </Callout>
          </Section>

          <Section id="availability">
            <H2>Country availability and the physical card</H2>
            <P>
              Eligibility is the section to read twice, because Plasma One has several different
              country lists for different features. The card itself is fully unsupported in Cuba,
              Iran, North Korea, Russia, Syria, Ukraine, and Venezuela. Documents from Belarus,
              mainland China, India, Iraq, Israel, Myanmar, Nepal, Nicaragua, Turkey, Vietnam,
              Nigeria, and Sri Lanka are blocked at document level, but you may still qualify
              with proof of address from an eligible country.
            </P>
            <P>
              In the US, 31 states are supported, including Alabama, Alaska, Arkansas,
              California, Colorado, Connecticut, Florida, Hawaii, Illinois, Indiana, Iowa,
              Kansas, Kentucky, Maine, Massachusetts, Michigan, Minnesota, Montana, Nebraska, New
              Hampshire, New Jersey, New York, North Carolina, Oklahoma, Pennsylvania, South
              Carolina, Texas, Utah, Virginia, West Virginia, and Wyoming. Washington and Arizona
              are explicitly unsupported. Fiat deposits and withdrawals have the narrowest reach:
              they are unavailable for residents of Afghanistan, Algeria, Belarus, Burundi,
              China, Cuba, the DRC, Gaza Strip, Guinea Bissau, Iran, Iraq, Japan, Lebanon, Libya,
              Myanmar, North Korea, Russia, Somalia, South Sudan, Sudan, Syria, Tunisia,
              Ukrainian territories, Venezuela, the West Bank, and Yemen, and in the US only New
              York residents can use them.
            </P>
            <P>
              The physical card has its own delivery list. It is not available in 29 countries,
              including Cuba, Iran, North Korea, Russia, Syria, Ukraine, Venezuela, Yemen, Libya,
              Somalia, Sudan, Afghanistan, South Sudan, Haiti, Eritrea, Kuwait, Seychelles,
              Mexico, Bangladesh, Belarus, mainland China, India, Iraq, Israel, Myanmar, Nepal,
              Nicaragua, Turkey, and Vietnam. Lite gets no physical card at all. On Core and
              Platinum the first card is free with shipping extra; a replacement costs $40 on
              Core and $120 on Platinum; standard delivery is $20 on Core and free on Platinum;
              express delivery is $50 on Core and $30 on Platinum. You activate the physical card
              in the app with its last 4 digits and set a PIN. No PO boxes.
            </P>
            <P>
              ATM access comes with the physical card: up to $1,000 per transaction, maximum 3
              withdrawals per rolling 24 hours, no cashback on ATM withdrawals, and ATM operator
              fees may apply on top. Platinum members pay no FX on non-USD ATM withdrawals. The
              help center's ATM fee table values did not extract cleanly, so confirm the exact
              ATM fee shown in the app for your tier.
            </P>
            <Callout title="Check eligibility before you verify">
              <p>
                Country lists change, and Plasma runs separate lists for the card, for fiat
                rails, and for physical delivery. Confirm your country on the help center pages
                for each feature before starting KYC, because a rejected application still costs
                you the time and documents.
              </p>
            </Callout>
          </Section>

          <Section id="perks">
            <H2>Perks: what Core and Platinum add</H2>
            <P>
              Beyond cashback, the paid tiers bundle Visa benefits and app perks. Core is a Visa
              Signature: $2,000 price protection, $10,000 purchase protection, $10,000 extended
              warranty, auto rental insurance, a lounge program, 1GB of GigSky eSIM data, Visa
              concierge, and a luxury hotel collection. In the app, Core adds a $100 per year
              ChatGPT Go credit (paid as a rebate when you pay for it with the card), 2 free
              virtual cards, and priority support.
            </P>
            <P>
              Platinum is a Visa Infinite and the list gets serious: $4,000 price protection,
              $20,000 purchase protection, $25,000 extended warranty, auto rental insurance,
              $1.5M travel accident insurance, $600 baggage delay, $3,000 lost luggage, unlimited
              Priority Pass lounge access across 1,900+ lounges, 3GB of GigSky eSIM data, and
              concierge. The app adds $500 per year in ChatGPT Plus and Claude Pro credits, 3
              free virtual cards, the 16g metal card, and VIP support.
            </P>
            <Figure
              src={`${IMG}/58f4ca83abeb69b6b2dae18f6a68d7bd8efcd78163e42a06537c0cb1feddc343.jpg`}
              alt="Plasma One app Platinum travel and lifestyle screen showing unlimited lounge access, 3GB global eSIM included, car rental insurance, 24/7 Visa concierge, and included travel insurance, baggage delay, and lost luggage cover"
              caption="Platinum travel and lifestyle: unlimited lounge access, 3GB eSIM, and full travel insurance cover included."
              width={540}
              height={674}
            />
            <P>
              One practical note: because the cards are issued from Puerto Rico, the Visa
              benefits portal needs its location set to Puerto Rico for your benefits to show
              correctly.
            </P>
          </Section>

          <Section id="ratings">
            <H2>What the app stores say</H2>
            <P>
              On Google Play, Plasma One: Stablecoin Card by Plasma Labs shows 4.2 stars from
              561 reviews with over 100,000 downloads, rated 3+. On the App Store it shows 4.3
              from 186 ratings, rated 4+, with App Store previews advertising Apple Pay
              availability in minutes.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src={`${IMG}/24e4b2b157a4055c72e51a691f0e4fc465890296739e57ef293b3e48b639b590.jpg`}
                alt="Google Play listing for Plasma One Stablecoin Card showing 4.2 stars from 561 reviews and over 100,000 downloads"
                caption="Google Play: 4.2 stars from 561 reviews, 100K+ downloads. A decent early signal at real scale."
                width={700}
                height={552}
                wide
              />
              <Figure
                src={`${IMG}/7576535fd6ce72f20dfe24b8e4f166697b553c2d24ceeb77b23000802e622f27.jpg`}
                alt="App Store listing for Plasma One Stablecoin Card showing 4.3 stars from 186 ratings with previews for Apple Pay spending"
                caption="App Store: 4.3 from 186 ratings. A smaller sample, so treat it as an early signal."
                width={540}
                height={984}
              />
            </div>
            <P>
              100K+ downloads is real traction for a young card program, and 4.2 stars from 561
              reviews is respectable. The App Store sample is thinner. As with any young card
              program, start small: fund the minimum, make a purchase, try the earn and
              withdrawal flows, and only then move meaningful funds.
            </P>
          </Section>

          <Section id="signup">
            <H2>How to sign up</H2>
            <P>
              Getting started takes a few minutes plus verification time. Follow these steps in
              order:
            </P>
            <Steps
              steps={[
                {
                  title: "Open our link",
                  detail: (
                    <>
                      Start here:{" "}
                      <a
                        href={AFFILIATE}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="font-bold break-all text-emerald-700 hover:text-emerald-900"
                      >
                        go.cryptosbeginner.com/Plasma
                      </a>
                    </>
                  ),
                },
                {
                  title: "Download the app",
                  detail: "Get the Plasma One app for iPhone or Android.",
                },
                {
                  title: "Pick your country of residence",
                  detail:
                    "Choose carefully: you will be asked for proof of residency, and eligibility varies by feature and country.",
                },
                {
                  title: "Verify your identity",
                  detail:
                    "Complete email verification, profile details, an identity document photo, a selfie, and a short questionnaire. The app says it takes about 2 minutes plus review time.",
                },
                {
                  title: "Make the activation deposit",
                  detail:
                    "In most regions a $10 deposit is required before card activation. It is not a fee: it stays in your balance and is spendable. Some regions charge a $10 card fee instead, and the app shows which applies to you.",
                },
                {
                  title: "Pick a tier and activate",
                  detail:
                    "Start on Lite to test the card, then upgrade to Core or Platinum from the Tiers tab if the math works for your spend.",
                },
              ]}
            />
            <Figure
              src={`${IMG}/c310e0c9761d915f989f0594015b887adf790523069edfd4a29d66d67cd23d08.jpg`}
              alt="Plasma One app identity verification screen listing email verification, profile details, identity document, selfie, and questionnaire steps"
              caption="Identity verification covers email, profile details, an ID document, a selfie, and a short questionnaire."
              width={540}
              height={1072}
            />
            <div className="mt-6">
              <PrimaryAffiliateButton>Sign up for the Plasma One Card now</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Genuinely free Lite tier with 2% cashback on the first $500/month</li>
                  <li>Unusually transparent fee tables in the help center</li>
                  <li>0% FX markup on Platinum, plus no Visa network FX</li>
                  <li>Free bank deposits on every tier</li>
                  <li>9 networks for USDT deposits, Plasma network instant and free</li>
                  <li>Virtual fiat accounts in EUR, GBP, MXN, COP, and USD</li>
                  <li>Strong Visa Infinite perks on Platinum: unlimited Priority Pass, $1.5M travel accident cover</li>
                  <li>100K+ downloads with a 4.2 star Play Store rating</li>
                  <li>Card issuance on Rain infrastructure</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>XPL locks are 12 months with no early unlock, and XPL can fall to zero</li>
                  <li>100,000 XPL Platinum lock is a promotional rate that can rise</li>
                  <li>Cashback paid in XPL, so rewards fluctuate with the token</li>
                  <li>AI cashback terms not verifiable in the help center (only an expired promo documented)</li>
                  <li>Airline cashback cap is internally inconsistent in the official article</li>
                  <li>Cashback caps are tight on Lite: 2% only on the first $500/month</li>
                  <li>Narrow country and US state coverage, with separate lists per feature</li>
                  <li>Lite gets no physical card; Core physical marked coming soon</li>
                  <li>Deposits screened; sanctioned-linked funds can become unrecoverable</li>
                  <li>ATM fee table values could not be extracted; confirm in-app</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              Plasma One is the rare crypto card with a genuinely free tier that still pays real
              cashback. Lite at 2% on the first $500 of monthly spend costs nothing to try, the
              fee tables are clearer than most competitors manage, and the funding side is
              strong: 9 networks for USDT, free bank deposits, and virtual accounts in five
              fiat currencies. For a stablecoin spender who wants a card without committing to
              a token lock, Lite is an easy recommendation to test.
            </P>
            <P>
              The honest concerns are all about the paid tiers. The XPL locks are the price of
              admission to Core and Platinum, and a 12-month lock with no early exit on a
              volatile digital asset is a serious commitment. Cashback in XPL means your rewards
              move with the token, and two of the flashiest perks, AI cashback and airline
              cashback, rest on shaky documentation: one expired, one self-contradictory.
              Platinum's 0% FX and Visa Infinite perks are genuinely strong for heavy travelers
              and high spenders who can stomach the lock. Everyone else should start on Lite,
              run a deposit, a purchase, and a withdrawal through it, and only then decide
              whether the XPL math works for them.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the Plasma One Card</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="compare">
            <H2>Plasma One vs the alternatives</H2>
            <P>
              Plasma One is not the only crypto card we have tested on the real apps. Here is
              how it stacks up against alternatives we reviewed hands-on, so you can see where
              your money goes furthest. You can also browse the full{" "}
              <a href="/crypto-cards" className="font-bold text-emerald-700 hover:text-emerald-900">
                crypto cards hub
              </a>{" "}
              and our{" "}
              <a href="/crypto-cards/reviews" className="font-bold text-emerald-700 hover:text-emerald-900">
                card reviews
              </a>
              .
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Card</th>
                    <th className="px-4 py-3 font-black text-slate-950">Yearly cost</th>
                    <th className="px-4 py-3 font-black text-slate-950">Cashback</th>
                    <th className="px-4 py-3 font-black text-slate-950">Custody</th>
                    <th className="px-4 py-3 font-black text-slate-950">Standout feature</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-emerald-100 bg-emerald-50/60">
                    <td className="px-4 py-3 font-bold text-slate-900">Plasma One</td>
                    <td className="px-4 py-3">Free Lite; $199/yr or 20K XPL lock; 100K XPL Platinum lock</td>
                    <td className="px-4 py-3">2% to 4% in XPL, caps $500+/mo (app-observed)</td>
                    <td className="px-4 py-3">Self-custodial</td>
                    <td className="px-4 py-3">Free tier with real cashback, 0% FX on Platinum</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/etherfi-review" className="text-emerald-700 hover:text-emerald-900">ether.fi Cash</a>
                    </td>
                    <td className="px-4 py-3">Tiered memberships, points unlocks</td>
                    <td className="px-4 py-3">3% to 4%, caps $2K to $50K/mo</td>
                    <td className="px-4 py-3">Non-custodial Vault</td>
                    <td className="px-4 py-3">Borrow mode from 1.43%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/tria-review" className="text-emerald-700 hover:text-emerald-900">Tria</a>
                    </td>
                    <td className="px-4 py-3">20 to 250 USD membership</td>
                    <td className="px-4 py-3">Up to 6% on first 2,000 USD/mo, then 1%</td>
                    <td className="px-4 py-3">Self-custodial, you hold the keys</td>
                    <td className="px-4 py-3">Highest headline cashback, 9 top-up networks</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/solid-review" className="text-emerald-700 hover:text-emerald-900">Solid</a>
                    </td>
                    <td className="px-4 py-3">Free, no annual fee</td>
                    <td className="px-4 py-3">3% to 5% USDC, caps 50 to 200 USD/mo</td>
                    <td className="px-4 py-3">Self-custodial throughout</td>
                    <td className="px-4 py-3">Free card with real cashback and yield</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/redotpay-review" className="text-emerald-700 hover:text-emerald-900">RedotPay</a>
                    </td>
                    <td className="px-4 py-3">10 USD virtual card</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">App-managed</td>
                    <td className="px-4 py-3">Cheapest honest way to spend crypto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              The quick read: Plasma One is the only card here with a genuinely free tier that
              still pays 2% cashback, and its fee transparency is best in class. ether.fi Cash
              has the borrow-against-assets mode Plasma One lacks. Tria has the higher headline
              cashback at 6% but no free tier and no borrow mode. Solid wins on pure math for
              moderate spenders with USDC rewards. If you want to test a self-custodial
              stablecoin card without paying or locking anything, Plasma One's Lite tier is the
              obvious starting point.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the Plasma One Card</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
