import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/tria-review`;
const UPDATED = "17 October 2026";
const UPDATED_ISO = "2026-10-17";
const AFFILIATE = "https://go.cryptosbeginner.com/Tria";

const REVIEWER = {
  name: "Alex Rivera",
  initials: "AR",
  role: "Crypto researcher, CryptosBeginner",
};

export const metadata: Metadata = {
  title: "Tria Card Review 2026: Self-Custodial Visa Card, Tested",
  description:
    "October 2026 Tria review: self-custodial Visa crypto card with up to 6% cashback, Lite/Pro/Max memberships, real fee tables from the app, supported networks, and honest verdict.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tria Card Review 2026: Self-Custodial Visa Card, Tested",
    description:
      "Hands-on Tria review: self-custodial Visa crypto card, Lite/Pro/Max membership tiers, real fees captured in-app, supported networks, ATM withdrawals, and signup guide.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/tria/tria-account-created-self-custody.jpg`,
        width: 1080,
        height: 2400,
        alt: "Tria account creation screen confirming self-custody with the message you hold the keys, not Tria, not a bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tria Card Review 2026",
    description: "Tria tested: self-custodial Visa card, membership tiers, real fees, supported networks, and verdict.",
    images: [`${SITE_URL}/images/tools/tria/tria-account-created-self-custody.jpg`],
  },
};

const faqItems = [
  {
    question: "What is Tria?",
    answer:
      "Tria is a self-custodial crypto neobank with a Visa card. Unlike most crypto cards where a company holds your funds, Tria gives you a wallet where you hold the keys: the app states not Tria, not a bank, only you. Every transaction needs your Face ID approval. You top up the card with crypto from supported networks, and the card spends anywhere Visa is accepted. The app also offers futures trading, an earn section, travel bookings, and a referral program.",
  },
  {
    question: "Is Tria custodial or self-custodial?",
    answer:
      "Tria is self-custodial. The account creation screen states clearly: you hold the keys, not Tria, not a bank, only you. Your money cannot be frozen or spent without you, and every transaction requires your Face ID approval with no exceptions. This is a genuine difference from most crypto card apps, which are custodial and hold your balance on their servers.",
  },
  {
    question: "What are the Tria membership tiers?",
    answer:
      "There are three tiers. Lite costs 20 USD per year and includes a virtual card with 1.5% cashback on your first 1,000 USD of monthly spend, then 0.5% unlimited cashback. Pro costs 109 USD per year and includes a plastic plus virtual card with 4.5% cashback on your first 1,000 USD of monthly spend, then 1% unlimited. Max costs 250 USD per year and includes a metal plus virtual card with 6% cashback on your first 2,000 USD of monthly spend, then 1% unlimited. All tiers include spend up to 1M USD per day, price protection up to 2,000 USD, purchase protection up to 10,000 USD, Google Pay, and Apple Pay. Pro and Max add a physical card, airport lounge access, Visa Luxury Hotels, and Visa concierge.",
  },
  {
    question: "Which networks and tokens can I use to top up the Tria card?",
    answer:
      "Tria supports card top-ups from nine blockchains: Bitcoin, Ethereum, Polygon, Base, Arbitrum, Optimism, Binance Smart Chain (BSC), Aptos, and Solana. Minimums are 50 USD for Bitcoin and 10 USD for all other supported tokens. Avalanche is currently not supported for card top-ups. Deposit tokens include BTC, ETH, SOL, APT, USDC, USDT, and BNB, with XRPL marked as new in the app. Note that direct SOL deposits are not supported: SOL must first be converted to a supported currency. Most chains offer gasless deposits, meaning you do not need the native gas token, except on Solana where you must hold native SOL for fees.",
  },
  {
    question: "What are the Tria ATM withdrawal fees and limits?",
    answer:
      "ATM withdrawals cost a 1 USD base fee plus 1% of the withdrawal amount. Tria system limits are a maximum of 750 USD per transaction and a maximum of 3 withdrawals within a 24-hour period. When the ATM prompts you to choose an account type, you must select Credit. Selecting Savings or Checking typically results in a failed transaction. In Japan, withdrawals were confirmed to work at Seven Bank, E-net Bank, Lawson Bank, Japan Post Bank, and AEON Bank. Japanese ATMs impose their own cap of roughly 100,000 JPY (about 640 USD) per transaction, so your practical daily maximum in Japan is about 640 USD times 3 transactions.",
  },
  {
    question: "Does Tria offer futures trading?",
    answer:
      "Yes. The app has a Futures tab with two DEX options: Decibel (marked New and in beta) and Hyperliquid (marked Current). A 0.1% trading fee is charged on every trade you execute, whether you open or close a position, whether the trade is profitable or not, and regardless of order type. Fees are calculated on the notional value of the trade and deducted in USDC. Leverage goes up to 40x. The app warns that higher leverage increases liquidation risk, and Decibel is in beta with limited pairs and lower liquidity.",
  },
  {
    question: "What do app store reviews say about Tria?",
    answer:
      "Ratings are split. On Google Play, Tria has a 1.9 star rating from about 3,895 reviews and over 100K downloads. On the App Store, it shows 3.5 stars but from only 40 ratings, so that number is thin. Google Play's AI summary says users praise the clean UI, fast performance, and strong seedless security, and enjoy the cashback perks, but cite unhelpful developer support and poor transparency. One review complains about mandatory app updates every two or three days. Start small and test deposits and withdrawals before committing serious funds.",
  },
  {
    question: "How do I sign up for Tria?",
    answer:
      "Open our link at https://go.cryptosbeginner.com/Tria, download the Tria app for iPhone or Android, and create your account. Tria sets up a self-custodial wallet where you hold the keys. Choose a membership tier (Lite, Pro, or Max), complete any required verification, then top up your card from the Cards section by selecting your wallet, token, and amount. The app showed a 10 USD joining bonus at the time we reviewed it.",
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

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={540}
        height={1170}
        className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
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

export default function TriaReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tria Card Review 2026: Self-Custodial Visa Card, Tested",
    description:
      "Hands-on Tria review: self-custodial Visa crypto card, Lite/Pro/Max membership tiers, real fees captured in-app, supported networks, ATM withdrawals, and signup guide.",
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
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · crypto cards</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Tria Card review 2026: the self-custodial Visa card
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              You hold the keys, not Tria, not a bank. Up to 6% cashback across three membership
              tiers, real fee tables captured inside the app, nine supported networks, and honest
              notes on the rough edges. Here is the full Tria breakdown.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the Tria Card</PrimaryAffiliateButton>
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
          if you sign up through our link, at no extra cost to you. No referral code was provided
          for this review.{" "}
          <strong className="text-slate-700">Risk warning:</strong> crypto is volatile and card
          programs can change fees or availability. Educational content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What Tria is</H2>
            <P>
              Tria is a self-custodial crypto neobank built around a Visa card. That self-custody
              claim is the headline feature: when you create an account, the app tells you plainly
              that you hold the keys, not Tria, not a bank, only you. Your money cannot be frozen
              or spent without you, and every transaction needs your Face ID approval, with no
              exceptions. Most crypto card apps are custodial, meaning the company holds your
              balance. Tria puts the keys in your hands instead.
            </P>
            <P>
              Beyond the card, the app packs in a wallet with deposit, send, and swap, a futures
              trading tab, an earn section, travel bookings with cashback, a referrals program with
              points, and agentic trading keys for developers. The home screen walks you through
              three steps to your first dollar in motion: create your account, activate your card,
              then deposit to the card and make your first transaction.
            </P>
            <Figure
              src="/images/tools/tria/tria-account-created-self-custody.jpg"
              alt="Tria account creation screen confirming self-custody with the message you hold the keys, not Tria, not a bank"
              caption="Tria creates a self-custodial wallet: you hold the keys, not Tria, not a bank."
            />
          </Section>

          <Section id="memberships">
            <H2>Membership tiers: Lite, Pro, and Max</H2>
            <P>
              Tria sells the card through three annual memberships. The tier sets your cashback
              rate, your card format, and your perks. Here are the numbers captured in the app.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Membership</th>
                    <th className="px-4 py-3 font-black text-slate-950">Yearly price</th>
                    <th className="px-4 py-3 font-black text-slate-950">Card format</th>
                    <th className="px-4 py-3 font-black text-slate-950">Boosted cashback</th>
                    <th className="px-4 py-3 font-black text-slate-950">After the cap</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Lite</td>
                    <td className="px-4 py-3">20 USD</td>
                    <td className="px-4 py-3">Virtual card</td>
                    <td className="px-4 py-3">1.5% on first 1,000 USD/month</td>
                    <td className="px-4 py-3">0.5% unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Pro</td>
                    <td className="px-4 py-3">109 USD</td>
                    <td className="px-4 py-3">Plastic + virtual card</td>
                    <td className="px-4 py-3">4.5% on first 1,000 USD/month</td>
                    <td className="px-4 py-3">1% unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Max</td>
                    <td className="px-4 py-3">250 USD</td>
                    <td className="px-4 py-3">Metal + virtual card</td>
                    <td className="px-4 py-3">6% on first 2,000 USD/month</td>
                    <td className="px-4 py-3">1% unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              All tiers include a virtual card, spending up to 1M USD per day, price protection up
              to 2,000 USD, purchase protection up to 10,000 USD, plus Google Pay and Apple Pay.
              Pro and Max add a physical card, airport lounge access, Visa Luxury Hotels, and Visa
              concierge. Max upgrades the physical card to metal. The app showed a 10 USD joining
              bonus at the time we reviewed it, marked as expiring in 5 days in the screenshot, so
              treat that as a limited offer rather than a permanent perk.
            </P>
            <Figure
              src="/images/tools/tria/tria-max-membership-metal-card.jpg"
              alt="Tria Max membership screen showing the black metal Visa Signature card with 6 percent cashback"
              caption="The Max tier pairs a metal Visa Signature card with 6% cashback on the first $2,000 of monthly spend."
            />
            <Callout title="Read the cashback caps before you pick a tier">
              <p>
                The headline rates only apply to your first 1,000 USD (Lite and Pro) or 2,000 USD
                (Max) of monthly spend, then drop to 0.5% or 1% unlimited. Work out your real
                monthly card spend before paying for a higher tier: if you spend 800 USD a month,
                Lite at 20 USD a year may beat Max at 250 USD a year.
              </p>
            </Callout>
          </Section>

          <Section id="top-up">
            <H2>How to top up your Tria card</H2>
            <P>
              Top-ups add funds to your card by depositing crypto from your wallet. The deposit is
              converted and credited to your card balance, ready for immediate use. Most top-ups
              are processed near-instantly. The app lays out the steps:
            </P>
            <P>
              1. Navigate to the Cards section of your app. 2. Tap on Top-up. 3. Select your
              preferred wallet: the Tria Wallet or any supported external wallet. 4. Choose the
              token you wish to deposit. 5. Enter the amount you want to add. 6. Tap Review to
              verify your details. 7. Swipe to Top-up to finalize the transaction.
            </P>
            <P>
              One quirk worth knowing: funds can be visible but not usable. Refunds in progress
              (posted charges) are merchant refunds still being processed by Visa, and merchant
              refunds can only be spent by using the card, never withdrawn. Blocked amounts
              (pending charges) are pre-authorizations from hotels, car rentals, or fuel pumps,
              released once the final transaction amount is confirmed.
            </P>
          </Section>

          <Section id="networks">
            <H2>Supported networks and minimums</H2>
            <P>
              Tria supports card top-ups from nine blockchains: Bitcoin, Ethereum, Polygon, Base,
              Arbitrum, Optimism, Binance Smart Chain (BSC), Aptos, and Solana. Minimums are 50 USD
              for Bitcoin and 10 USD for all other supported tokens. Avalanche is currently not
              supported for card top-ups.
            </P>
            <P>
              For most supported chains, Tria offers gasless deposits, meaning you do not need to
              hold the blockchain's native gas token to fund your card. The exception is Solana:
              gasless deposits are not supported there, so you must hold native SOL in your wallet
              to cover transaction fees or the deposit will fail. Also note that direct SOL
              deposits are not supported at all, SOL must first be converted to a supported
              currency before topping up. Deposit tokens in the app include BTC, ETH, SOL, APT,
              USDC, USDT, and BNB, with XRPL marked as new.
            </P>
            <Figure
              src="/images/tools/tria/tria-supported-networks-minimums.jpg"
              alt="Tria supported networks and minimum top-up amounts for card funding"
              caption="Card top-ups work from 9 networks. Minimums are $50 for Bitcoin and $10 for other tokens."
            />
          </Section>

          <Section id="atm">
            <H2>ATM withdrawals: fees, limits, and how to avoid failures</H2>
            <P>
              Withdrawing cash costs a 1 USD base fee plus 1% of the withdrawal amount, rounded
              down to the nearest cent. So a 100 USD withdrawal needs 102 USD in your balance: 100
              plus 1 base plus 1 percentage. Tria's system limits are a maximum of 750 USD per
              transaction and a maximum of 3 withdrawals within a 24-hour period. The local ATM
              provider's own limits apply on top.
            </P>
            <P>
              The critical detail: when the ATM prompts you to choose an account type, you must
              select Credit. Do not select Savings or Checking, as those options will typically
              result in a failed transaction. In Japan, withdrawals were confirmed to work at Seven
              Bank, E-net Bank, Lawson Bank, Japan Post Bank, and AEON Bank. Note that at Seven
              Bank you must select Credit and accept the ATM's exchange rate. Most Japanese ATMs
              impose their own cap of roughly 100,000 JPY (about 640 USD) per transaction, so your
              practical daily maximum in Japan is about 640 USD times 3 transactions.
            </P>
          </Section>

          <Section id="futures">
            <H2>Futures trading in the app</H2>
            <P>
              The Futures tab offers two DEX options: Decibel, marked New and in beta, and
              Hyperliquid, marked Current. You pick one and can switch anytime from the trading
              dashboard. A 0.1% trading fee is charged on every trade you execute, whether you open
              or close a position, whether the trade is profitable or not, and regardless of order
              type. Fees are calculated on the notional value of the trade, not on profit or
              margin, and are deducted in USDC.
            </P>
            <P>
              Leverage goes up to 40x, with a slider from 1x upward. The app warns that selecting
              higher leverage increases your risk of liquidation. Decibel is flagged as in beta with
              limited pairs and lower liquidity, and it advertises potential airdrop, lower trading
              fees, and AMP points. Hyperliquid is positioned as the battle-tested option with
              deep liquidity and extensive pairs. Futures trading is high risk: the 0.1% fee on
              notional value adds up fast on leveraged positions, and liquidation can wipe out your
              margin.
            </P>
            <Callout title="Agentic trading keys">
              <p>
                The settings screen includes an Agentic Trading section where you can create API
                keys so the Tria trading SDK can place orders for you. Hyperliquid Agent Keys have
                3 slots, Decibel Delegate Keys are unlimited. Keys are shown once. Only create
                these if you understand API key security, because anyone holding your key can trade
                on your account.
              </p>
            </Callout>
          </Section>

          <Section id="ratings">
            <H2>What the app stores say</H2>
            <P>
              Ratings are split and worth reading carefully. On Google Play, Tria has a 1.9 star
              rating from about 3,895 reviews with over 100K downloads. On the App Store, it shows
              3.5 stars, but from only 40 ratings, so that number is thin and not very informative.
            </P>
            <P>
              Google Play's AI summary of reviews says users praise the clean UI, fast performance,
              and strong seedless security, and enjoy the cashback perks from the rewards program
              despite delayed processing. On the negative side, users cite unhelpful developer
              support and poor transparency. One review complains that the developers require
              mandatory updates almost every two or three days, which gets annoying when you need
              to check something quickly. As with any young fintech app, start small and test
              deposits and withdrawals before committing serious money.
            </P>
            <Figure
              src="/images/tools/tria/tria-google-play-listing.jpg"
              alt="Tria app listing on Google Play showing a 1.9 star rating from 3,000 reviews"
              caption="Google Play rates Tria 1.9 stars from about 3,000 reviews. App Store is higher at 3.5, but from only 40 ratings."
            />
          </Section>

          <Section id="signup">
            <H2>How to sign up</H2>
            <P>
              1. Open our link: <a href={AFFILIATE} target="_blank" rel="sponsored noopener noreferrer" className="font-bold text-emerald-700 hover:text-emerald-900">go.cryptosbeginner.com/Tria</a>.
              2. Download the Tria app for iPhone or Android. 3. Create your account: Tria sets up
              a self-custodial wallet where you hold the keys. 4. Choose a membership tier (Lite,
              Pro, or Max) and complete any required verification. 5. Go to the Cards section, tap
              Top-up, pick your token and network, and fund your card. The app showed a 10 USD
              joining bonus during our review.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Sign up for Tria now</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Genuinely self-custodial: you hold the keys</li>
                  <li>Up to 6% cashback on Max, 4.5% on Pro</li>
                  <li>Nine supported top-up networks</li>
                  <li>Gasless deposits on most chains</li>
                  <li>Apple Pay and Google Pay on all tiers</li>
                  <li>Price and purchase protection included</li>
                  <li>Futures trading via Hyperliquid and Decibel</li>
                  <li>Airport lounge and Visa concierge on Pro/Max</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>Cashback caps: boosted rates only on first 1,000 to 2,000 USD/month</li>
                  <li>Google Play rating is 1.9 stars from 3,895 reviews</li>
                  <li>Users cite poor support and transparency</li>
                  <li>Solana needs native SOL for gas, no gasless deposits</li>
                  <li>Direct SOL deposits not supported</li>
                  <li>Avalanche not supported for top-ups</li>
                  <li>ATM withdrawals: 1 USD plus 1%, 750 USD max per transaction</li>
                  <li>Self-custody means you are responsible for your keys</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              Tria is the most interesting self-custodial crypto card we have reviewed. The
              combination of real self-custody, a Visa card accepted anywhere, and cashback up to
              6% is genuinely rare. The membership math can work: if you spend 2,000 USD a month
              on the Max tier, the 6% boosted cashback covers the 250 USD annual fee several times
              over. The nine supported networks and gasless deposits on most chains make funding
              the card painless.
            </P>
            <P>
              The honest concerns: the 1.9 star Google Play rating from nearly 4,000 reviews is a
              real signal, with users complaining about support and transparency. The cashback caps
              mean the headline rates only apply to your first chunk of monthly spend. And
              self-custody cuts both ways: nobody can freeze your money, but nobody can recover
              your keys either. For a self-custody believer who spends enough to justify a tier,
              Tria is worth a serious look. Start with Lite, test deposits and a withdrawal, and
              upgrade only if the numbers work for you.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the Tria Card</PrimaryAffiliateButton>
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
