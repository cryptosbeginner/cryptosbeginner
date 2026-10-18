import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/etherfi-review`;
const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";
const AFFILIATE = "https://go.cryptosbeginner.com/etherfi";

const REVIEWER = {
  name: "Alex Rivera",
  initials: "AR",
  role: "Crypto researcher, CryptosBeginner",
};

export const metadata: Metadata = {
  title: "ether.fi Cash Card Review 2026: Non-Custodial Visa, Tested",
  description:
    "October 2026 ether.fi Cash review: non-custodial Visa crypto card with 3 to 4% cashback, Core/Luxe/Pinnacle/VIP tiers, Direct Pay and Borrow modes, real fee tables from the app and help center, country availability, and honest verdict.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "ether.fi Cash Card Review 2026: Non-Custodial Visa, Tested",
    description:
      "Hands-on ether.fi Cash review: non-custodial Visa card, four membership tiers, Borrow mode from 1.43%, real fees captured in-app, earn rates, ATM limits, and signup guide.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/cards/etherfi/c5aaa1911973db9b2554ef7c7b3debb8d62ca391b839c91acce4b90ca8b66d0b.jpg`,
        width: 1080,
        height: 2138,
        alt: "ether.fi Cash Core membership screen showing the physical Visa card with 3 percent cashback and 5 percent back on ether.fi Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ether.fi Cash Card Review 2026",
    description: "ether.fi Cash tested: non-custodial Visa card, four tiers, Borrow mode, real fees, earn rates, and verdict.",
    images: [`${SITE_URL}/images/cards/etherfi/c5aaa1911973db9b2554ef7c7b3debb8d62ca391b839c91acce4b90ca8b66d0b.jpg`],
  },
};

const faqItems = [
  {
    question: "What is the ether.fi Cash card?",
    answer:
      "ether.fi Cash is a non-custodial Visa card. Your assets stay in your own self-custodial Vault, and the card spends against it anywhere Visa is accepted. Card issuance runs on Rain infrastructure. You can spend in Direct Pay mode, which spends your balance directly, or Borrow mode, which borrows against your assets from 1.43% so you keep your positions. The card comes in four membership tiers: Core, Luxe, Pinnacle, and VIP, with 3% to 4% cashback on card spend.",
  },
  {
    question: "Is ether.fi Cash custodial or non-custodial?",
    answer:
      "It is non-custodial. Your assets sit in your self-custodial Vault, which you control, rather than in a company account. That is the card's headline difference from most crypto cards, which are custodial. The trade-off is the usual one with self-custody: you are responsible for your keys and recovery, and there is no bank to call if you lose access.",
  },
  {
    question: "How does Borrow mode work on ether.fi Cash?",
    answer:
      "Borrow mode lets you spend against your Vault assets without selling them. Borrowing starts from 1.43%, and you pick a borrow currency in Preferences: USDC, USDT, or EURC. The borrowed amount is what you pay with when the card is in Borrow mode, and you can repay anytime. This is real leverage against volatile collateral: if your assets drop in value, your borrowing power shrinks, so only borrow what you could repay if the market turns.",
  },
  {
    question: "What are the ether.fi Cash membership tiers?",
    answer:
      "There are four. Core is the entry tier with 3% cashback on card spend, 5% back on ether.fi Travel plus up to 65% off hotels and flights, one free virtual card, a free physical card with a shipping fee, $10,000 of balance protection, Visa concierge, a Global eSIM, airport lounge access, auto rental insurance, and purchase and price protection. Luxe adds a metal physical card with free shipping, 10% off AI, food, and streaming, airport lounge passes, two free virtual cards, and $50,000 of balance protection. Pinnacle adds 20% off AI, food, and streaming, unlimited lounge access, ten free virtual cards, $100,000 of balance protection, and a dedicated account manager, unlocking at 25,000 points. VIP is the top tier with 40% off AI, food, and streaming, 4% cashback, unlimited lounge, unlimited virtual cards, $500,000 of balance protection, executive support, ventures access, and a gold physical card. Monthly cashback caps are $2,000 on Core, $10,000 on Luxe, and $50,000 on Pinnacle.",
  },
  {
    question: "What are the ether.fi Cash card fees?",
    answer:
      "Additional virtual cards cost $10 on Core, Luxe, and Pinnacle, and are free on VIP. Physical cards cost $50 on Core and $100 on Luxe and Pinnacle, and are free on VIP. Foreign exchange markup is 0.5% on Core, 0.25% on Luxe, and zero on Pinnacle and VIP, applied to transactions in currencies other than USD or EUR. Funding fees depend on the rail: USD ACH costs $0.50 plus 0.10%, USD domestic wire and SWIFT cost $20 plus 0.10%, EUR SEPA to USDC costs 0.90 EUR plus 0.15%, EUR SEPA to EURC costs 0.90 EUR, GBP Faster Payments costs 0.90 GBP plus 0.20% FX, AUD local transfer costs A$0.50, MXN SPEI costs MX$4.10 plus 0.20% FX, COP BREB costs COP$1,000 plus 0.45% FX, and AED local transfer costs 0 AED plus 0.25% FX. A $10 deposit activates the account; it is not a fee. Fees can vary by region, so confirm the quote shown in the app before you fund.",
  },
  {
    question: "What are the ether.fi Cash ATM withdrawal limits?",
    answer:
      "All tiers share the same ATM limits: $5,000 per transaction, a maximum of 5 withdrawals in a rolling 24 hours, and a $25,000 daily limit in a rolling 24-hour period. ATM withdrawals are not permitted in North Korea, Iran, or Myanmar due to platform integrity and compliance requirements.",
  },
  {
    question: "Which countries support ether.fi Cash bank transfers and the physical card?",
    answer:
      "Bank transfers are available in 162 countries. They are not available in 24 countries, including Afghanistan, Belarus, China, Cuba, Iran, North Korea, Russia, Syria, and Venezuela. The physical card ships to 31 US states. Belgium and Ireland are Cash-eligible but do not get physical card delivery, so users there use virtual cards. Check the help center country lists before applying, because eligibility can change.",
  },
  {
    question: "Can I earn yield on assets in the ether.fi app?",
    answer:
      "Yes. The Earn tab lists reward rates per asset, captured in October 2026: PAXGy (staked gold) 3.03%, weETH (staked ETH) 2.29%, weETHs 3.5%, eBTC (staked BTC) 0.21%, beHYPE (staked HYPE) 2.11%, and frxUSD 3.57%. ETHFI staking showed 0.99%. These are variable reward rates, not guaranteed interest, and they move with the underlying protocols.",
  },
  {
    question: "What do app store reviews say about ether.fi?",
    answer:
      "On the App Store, ether.fi: Crypto Card and Spend shows 4.9 stars from 407 ratings and is rated 18+. On Google Play, the app has over 50,000 downloads. The App Store rating count is small, so treat it as an early signal rather than a settled reputation. As with any young card program, start small and test a deposit, a purchase, and a withdrawal before moving serious funds.",
  },
  {
    question: "How do I sign up for ether.fi Cash?",
    answer:
      "Open our link at https://go.cryptosbeginner.com/etherfi, download the ether.fi app for iPhone or Android, and create your account. Complete identity verification with a valid passport and proof of address; the residence country you declare, your proof of address country, and your IP location must match, and you should not use a VPN during signup. Fund your Vault with a $10 minimum deposit to activate, then order your card and pick a membership tier.",
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

function Figure({ src, alt, caption, width = 540, height = 1170, wide = false }: { src: string; alt: string; caption: string; width?: number; height?: number; wide?: boolean }) {
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

export default function EtherfiReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ether.fi Cash Card Review 2026: Non-Custodial Visa, Tested",
    description:
      "Hands-on ether.fi Cash review: non-custodial Visa crypto card, Core/Luxe/Pinnacle/VIP membership tiers, Direct Pay and Borrow modes, real fees captured in-app, earn rates, ATM limits, and signup guide.",
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
              ether.fi Cash review 2026: the non-custodial Visa card
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Your assets stay in your own self-custodial Vault. 3% to 4% cashback across four
              membership tiers, a Borrow mode from 1.43% so you can spend without selling, real
              fee tables captured inside the app and help center, and honest notes on the rough
              edges. Here is the full ether.fi Cash breakdown.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the ether.fi Cash Card</PrimaryAffiliateButton>
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
          <strong className="text-slate-700">Risk warning:</strong> crypto is volatile, borrow rates
          and card programs can change, and KYC verification is required. Educational content, not
          financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What ether.fi Cash is</H2>
            <P>
              ether.fi Cash is a Visa card built on a simple idea: your crypto never leaves your
              control. Assets sit in your self-custodial Vault, and the card spends against it
              anywhere Visa is accepted. Card issuance runs on Rain infrastructure, the same
              provider stack behind several other crypto card programs. The app also works as a
              small neobank: portfolio tracking, an Earn tab with reward rates per asset,
              tokenized stocks and metals, travel bookings with cashback, and a referral program.
            </P>
            <P>
              The two headline features are the membership tiers, which set your cashback rate and
              perks, and the two spending modes. Direct Pay spends your Vault balance directly.
              Borrow mode borrows against your assets instead, so you keep your positions and get
              liquidity to spend. That choice, spend versus borrow, is the core decision this card
              asks you to make.
            </P>
            <Figure
              src="/images/cards/etherfi/c05eb2073a0bebd5535400b6a3b68c632185414a831f1494ae576654e29fe152.png"
              alt="ether.fi Cash card details panel showing the virtual Visa card, 3 percent cashback on all purchases, and spending limits"
              caption="The card details panel shows 3% cashback on all purchases, with per-card and Vault spending limits you can edit."
              width={700}
              height={1400}
            />
          </Section>

          <Section id="memberships">
            <H2>Membership tiers: Core, Luxe, Pinnacle, and VIP</H2>
            <P>
              ether.fi Cash sells the card through four membership tiers. The tier sets your
              cashback rate, your monthly cashback cap, your card format, and your perks. Here are
              the numbers captured in the app in October 2026.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Membership</th>
                    <th className="px-4 py-3 font-black text-slate-950">Cashback</th>
                    <th className="px-4 py-3 font-black text-slate-950">Monthly cap</th>
                    <th className="px-4 py-3 font-black text-slate-950">Card format</th>
                    <th className="px-4 py-3 font-black text-slate-950">Balance protection</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Core</td>
                    <td className="px-4 py-3">3% on card spend, 5% on ether.fi Travel</td>
                    <td className="px-4 py-3">$2,000</td>
                    <td className="px-4 py-3">1 free virtual, physical card + shipping fee</td>
                    <td className="px-4 py-3">$10K</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Luxe</td>
                    <td className="px-4 py-3">3% on everything else, 10% off AI/food/streaming</td>
                    <td className="px-4 py-3">$10,000</td>
                    <td className="px-4 py-3">2 free virtual, metal physical free shipping</td>
                    <td className="px-4 py-3">$50K</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Pinnacle</td>
                    <td className="px-4 py-3">3%, 20% off AI/food/streaming</td>
                    <td className="px-4 py-3">$50,000</td>
                    <td className="px-4 py-3">10 free virtual, metal physical, express shipping</td>
                    <td className="px-4 py-3">$100K</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">VIP</td>
                    <td className="px-4 py-3">4%, 40% off AI/food/streaming</td>
                    <td className="px-4 py-3">Unlimited virtual cards</td>
                    <td className="px-4 py-3">Gold physical card, free</td>
                    <td className="px-4 py-3">$500K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Core also includes up to 65% off hotels and flights through ether.fi Travel, Visa
              concierge, a Global eSIM, airport lounge access, auto rental insurance, and purchase
              and price protection. Luxe adds free airport lounge passes and unlocks at 5,000
              points. Pinnacle adds unlimited lounge access, a dedicated account manager with
              Telegram priority support, and unlocks at 25,000 points. VIP adds unlimited virtual
              cards, executive support, and ventures access. The annual value figures shown in the
              app (over $1,000 on Core, over $5,600 on Luxe, over $28,000 on Pinnacle) are provider
              marketing estimates, not guaranteed returns.
            </P>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src="/images/cards/etherfi/c5aaa1911973db9b2554ef7c7b3debb8d62ca391b839c91acce4b90ca8b66d0b.jpg"
                alt="ether.fi Cash Core membership screen showing the physical Visa card with 3 percent cashback on card spend and 5 percent back on ether.fi Travel"
                caption="Core is the entry tier: 3% cashback on card spend, 5% back on ether.fi Travel, and up to 65% off hotels and flights."
              />
              <Figure
                src="/images/cards/etherfi/d17718c1be4a54b645a537ce00864145e09767d7db2893c848140db89dd91c81.jpg"
                alt="ether.fi Cash Luxe membership screen showing the metal Visa card with 10 percent off AI, food, and streaming"
                caption="Luxe upgrades to a metal physical card with free shipping and 10% off AI, food, and streaming."
              />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Figure
                src="/images/cards/etherfi/9b6aadb3f42e55ab09d2dc77639668f4fce8eaa368820668039dbd384ca08c39.jpg"
                alt="ether.fi Cash Pinnacle membership details showing 20 percent off AI and food, 3 percent cashback, unlimited airport lounge access, and 10 free virtual cards"
                caption="Pinnacle adds 20% off AI and food, unlimited lounge access, and 10 free virtual cards. It unlocks at 25,000 points."
              />
              <Figure
                src="/images/cards/etherfi/12849a30621c7c6bd7680956baeb7cebfb661e166558e5d2a4d2a99273a17e18.jpg"
                alt="ether.fi Cash VIP membership details showing 40 percent off AI and food, 4 percent cashback, unlimited airport lounge access, and unlimited virtual cards"
                caption="VIP is the top tier: 4% cashback, 40% off AI and food, unlimited lounge access, and unlimited virtual cards."
              />
            </div>
            <Callout title="Read the cashback caps before you pick a tier">
              <p>
                The 3% rate only applies up to the monthly cap: $2,000 on Core, $10,000 on Luxe,
                and $50,000 on Pinnacle. Work out your real monthly card spend before chasing a
                higher tier, because spend above the cap earns at the base rate instead.
              </p>
            </Callout>
          </Section>

          <Section id="spend-modes">
            <H2>Two ways to spend: Direct Pay and Borrow mode</H2>
            <P>
              This is the feature that sets ether.fi Cash apart from most crypto cards. In Direct
              Pay mode, the card spends your Vault balance directly, like a normal debit card. In
              Borrow mode, the card borrows against your assets instead, so you keep your positions
              and get liquidity to spend. Borrowing starts from 1.43%, and you repay anytime.
            </P>
            <Figure
              src="/images/cards/etherfi/dacae77011baed8bfbc5d85fec26e6170983df5ddf57f60c7c50a6b6723be7db.jpg"
              alt="ether.fi app home banner advertising borrowing at 1.43 percent to get liquidity without selling assets, above the trending markets list"
              caption="The home screen advertises borrowing from 1.43%: liquidity without selling your assets, repayable anytime."
            />
            <P>
              You choose your borrow currency in Preferences: USDC, USDT, or EURC. That currency is
              what you pay with when the card is in Borrow mode. Borrowing is enabled by default
              and can be toggled off to opt out.
            </P>
            <Figure
              src="/images/cards/etherfi/856c702705f615263f06db6458eecd7dec56dbbe11e669e23ba0e0096d4e8a78.jpg"
              alt="ether.fi app Preferences screen showing borrow currency set to USDT and the Borrow feature enabled with an opt-out toggle"
              caption="Preferences lets you set the borrow currency (USDC, USDT, or EURC) and toggle Borrow mode on or off."
            />
            <Callout title="Borrowing against volatile collateral is real risk">
              <p>
                Borrow mode is leverage against crypto. If your collateral drops in value, your
                borrowing power shrinks with it. The 1.43% starting rate can also change, and
                rates vary by asset and market conditions. Only borrow what you could repay if the
                market turns against you, and understand the liquidation terms before you switch
                Borrow mode on.
              </p>
            </Callout>
          </Section>

          <Section id="funding">
            <H2>Funding your Vault</H2>
            <P>
              Getting money in is flexible. You can fund by bank transfer, by sending crypto from
              your own wallet, or by connecting an exchange account. Supported bank rails include
              USD ACH, domestic wire, and SWIFT, EUR SEPA, GBP Faster Payments, AUD local
              transfer, MXN SPEI, COP BREB, and AED local transfer. Crypto deposits come from
              Ethereum, Optimism, or Base.
            </P>
            <Figure
              src="/images/cards/etherfi/31bc68a49dcc03d30f5a7f8713beb628340bbfecf8cd4e86d53c30d496272432.jpg"
              alt="ether.fi app Add Funds screen offering PIX instant payments, sending from a crypto wallet, or sending from an exchange"
              caption="Add Funds offers bank rails, crypto wallet deposits, and exchange connections in one place."
            />
            <P>
              A $10 deposit activates the account. That is an activation minimum, not a fee, and
              the money is yours to spend. Funding fees depend on the rail you choose:
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Funding method</th>
                    <th className="px-4 py-3 font-black text-slate-950">Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">USD ACH</td>
                    <td className="px-4 py-3">$0.50 + 0.10%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">USD domestic wire / SWIFT</td>
                    <td className="px-4 py-3">$20.00 + 0.10%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">EUR SEPA to USDC</td>
                    <td className="px-4 py-3">€0.90 + 0.15%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">EUR SEPA to EURC</td>
                    <td className="px-4 py-3">€0.90</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">GBP Faster Payments</td>
                    <td className="px-4 py-3">£0.90 + 0.20% FX</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">AUD local transfer</td>
                    <td className="px-4 py-3">A$0.50</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">MXN SPEI</td>
                    <td className="px-4 py-3">MX$4.10 + 0.20% FX</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">COP BREB</td>
                    <td className="px-4 py-3">COP$1,000 + 0.45% FX</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">AED local transfer</td>
                    <td className="px-4 py-3">0 AED + 0.25% FX</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Figure
              src="/images/cards/etherfi/2fb3ba5fe24e8ae73f2cf737f08dcf1bdf238ecb159e50bb9bbc0087a654f093.png"
              alt="ether.fi help center table listing bank-transfer funding fees for USD ACH, wire, SWIFT, EUR SEPA, GBP, AUD, MXN, COP, and AED"
              caption="Funding fees from the help center. The app always shows the current fee for your selected method before you confirm."
              width={700}
              height={900}
              wide
            />
            <P>
              Typical timeframes: USD ACH takes 1 to 2 business days, Fedwire and domestic wires
              are typically same day, USD SWIFT takes 3 to 5 business days, EUR SEPA Instant
              arrives instantly or same day where your bank supports it, and standard EUR SEPA
              takes 1 to 2 business days. Note that AED funding via FTS is not available to UAE
              residents or UAE-registered businesses since October 2026, and third-party deposits
              can trigger requests for source-of-funds documentation.
            </P>
          </Section>

          <Section id="fees">
            <H2>Card fees and FX markup</H2>
            <P>
              Each tier charges its own fee for additional cards, taken from your account balance
              when you order:
            </P>
            <Figure
              src="/images/cards/etherfi/df0fbeace90b5ee6a911054a8fcdd00c93dfe05a644fc6db5f4d171bcf9ffa06.png"
              alt="ether.fi help center table showing card fees by tier: 10 dollar virtual cards on Core, Luxe, and Pinnacle, free on VIP; physical cards 50 dollars on Core, 100 on Luxe and Pinnacle, free on VIP"
              caption="Card fees by tier from the help center. Virtual cards are not free in some regions, including the UK, Singapore, Thailand, and others."
              width={700}
              height={500}
              wide
            />
            <P>
              Virtual cards are not free for users in Angola, Bolivia, Ecuador, Bangladesh,
              Indonesia, Malaysia, Mexico, Peru, the Philippines, Argentina, Colombia, South
              Africa, Hong Kong, the UK, Singapore, and Thailand, and virtual card fees may vary by
              region. Card creation limits also apply per tier: Core gets 1 free virtual card (up
              to 5 max) and up to 1 physical card, Luxe gets 4 free virtual (up to 10) and up to 2
              physical, Pinnacle gets 10 free virtual (up to 50) and up to 4 physical, and VIP gets
              50 free virtual and 2 physical cards.
            </P>
            <P>
              Foreign exchange markup applies when you transact in a currency other than USD or
              EUR, on top of the base FX rate at settlement time:
            </P>
            <Figure
              src="/images/cards/etherfi/94b1161b62b9783380d7f402dc3806642f6da4489dfefd7bd8fca527ace1c859.png"
              alt="ether.fi help center table showing added FX fees by tier: 0.5 percent on Core, 0.25 percent on Luxe, and none on Pinnacle or VIP"
              caption="FX markup by tier: 0.5% on Core, 0.25% on Luxe, zero on Pinnacle and VIP. Applied on top of the base rate at settlement."
              width={700}
              height={800}
              wide
            />
          </Section>

          <Section id="atm">
            <H2>ATM withdrawals: limits by tier</H2>
            <P>
              All four tiers share the same ATM withdrawal limits. There is no tier advantage here,
              which is unusual for a card with this much tiering elsewhere:
            </P>
            <Figure
              src="/images/cards/etherfi/c2de3a04141499ee4c5ad53d2c509af71733089473d17415232600d8d4703846.png"
              alt="ether.fi help center table showing ATM withdrawal limits of 5,000 dollars per transaction, 5 withdrawals per rolling 24 hours, and a 25,000 dollar daily limit on all tiers"
              caption="ATM limits are identical across all tiers: $5,000 per transaction, 5 withdrawals per rolling 24 hours, $25,000 daily."
              width={700}
              height={900}
              wide
            />
            <P>
              ATM withdrawals are not permitted in North Korea, Iran, or Myanmar due to platform
              integrity and global compliance requirements. Your card and Vault also have separate
              daily and monthly spending limits that work together: spending is controlled by
              whichever limit is reached first, and daily limits reset every 24 hours from when
              they were last refreshed.
            </P>
          </Section>

          <Section id="earn">
            <H2>Earn on your assets</H2>
            <P>
              The Earn tab pays reward rates per asset, so idle Vault assets can work while you
              hold them. Rates captured in October 2026:
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Asset</th>
                    <th className="px-4 py-3 font-black text-slate-950">Type</th>
                    <th className="px-4 py-3 font-black text-slate-950">Reward rate</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">PAXGy</td>
                    <td className="px-4 py-3">Staked gold</td>
                    <td className="px-4 py-3">3.03%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">frxUSD</td>
                    <td className="px-4 py-3">Reward-based stablecoin</td>
                    <td className="px-4 py-3">3.57%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">weETHs</td>
                    <td className="px-4 py-3">Symbiotic staked ETH</td>
                    <td className="px-4 py-3">3.5%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">weETH</td>
                    <td className="px-4 py-3">Staked ETH</td>
                    <td className="px-4 py-3">2.29%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">beHYPE</td>
                    <td className="px-4 py-3">Staked HYPE</td>
                    <td className="px-4 py-3">2.11%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">ETHFI</td>
                    <td className="px-4 py-3">Staked ETHFI</td>
                    <td className="px-4 py-3">0.99%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">eBTC</td>
                    <td className="px-4 py-3">Staked BTC</td>
                    <td className="px-4 py-3">0.21%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Figure
              src="/images/cards/etherfi/c0fa1d80a08640698cbcad94d03a0624326d449d554dff051ebf67be33c9ebaf.jpg"
              alt="ether.fi app Earn screen showing reward rates: PAXGy 3.03 percent, weETH 2.29 percent, weETHs 3.5 percent, eBTC 0.21 percent, beHYPE 2.11 percent, and frxUSD 3.57 percent"
              caption="The Earn tab lists live reward rates per asset. These are variable DeFi rewards, not guaranteed interest."
            />
            <Callout title="Reward rates move">
              <p>
                These are variable reward rates from the underlying staking and DeFi protocols, not
                fixed interest. They change with network conditions, and the underlying assets
                themselves are volatile. Do not treat Earn as a savings account.
              </p>
            </Callout>
          </Section>

          <Section id="availability">
            <H2>Country availability and the physical card</H2>
            <P>
              Bank transfers are available in 162 countries, which is broad coverage. They are not
              available in 24 countries, including Afghanistan, Belarus, China, Cuba, Iran, North
              Korea, Russia, Syria, and Venezuela. The physical card has narrower reach: it ships
              to 31 US states. Belgium and Ireland are Cash-eligible but do not get physical card
              delivery, so users there rely on virtual cards.
            </P>
            <P>
              Identity verification is strict. You apply with your own valid, unexpired passport
              and proof of address in your name. The residence country you declare, your proof of
              address country, and the country identified from your IP address must all match, and
              you should not use a VPN during signup or verification. A Chinese passport can be
              used to apply from eligible regions other than Hong Kong, but passport acceptance
              does not guarantee approval. Submitting documents does not guarantee approval:
              applications remain subject to regional eligibility and verification review.
            </P>
            <Callout title="Check eligibility before you apply">
              <p>
                Country lists change. Confirm your country on the help center pages for bank
                transfer availability and physical card delivery before starting KYC, because a
                rejected application still costs you the time and documents.
              </p>
            </Callout>
          </Section>

          <Section id="ratings">
            <H2>What the app stores say</H2>
            <P>
              On the App Store, ether.fi: Crypto Card and Spend shows 4.9 stars from 407 ratings
              and is rated 18+. On Google Play, the app has over 50,000 downloads.
            </P>
            <Figure
              src="/images/cards/etherfi/0ebf6080127b61aad6964807f8bfffec654e62e60e693ca44454c9dee626cfc6.jpg"
              alt="ether.fi app App Store listing showing 4.9 stars from 407 ratings with an 18 plus age rating"
              caption="The App Store lists ether.fi at 4.9 stars from 407 ratings. That is a strong score from a small sample, so treat it as an early signal."
            />
            <P>
              The rating is high but the sample is thin: 407 ratings is not enough to judge how
              the app handles support tickets, edge cases, or outages at scale. As with any young
              card program, start small: fund the minimum, make a purchase, try an ATM
              withdrawal, and only then move meaningful funds.
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
                        go.cryptosbeginner.com/etherfi
                      </a>
                    </>
                  ),
                },
                {
                  title: "Download the app",
                  detail: "Get the ether.fi app for iPhone or Android.",
                },
                {
                  title: "Create your account and verify",
                  detail:
                    "Complete identity verification with a valid passport and proof of address. Your declared residence, proof of address country, and IP location must match. Do not use a VPN during signup.",
                },
                {
                  title: "Fund your Vault",
                  detail:
                    "Make the $10 minimum deposit to activate your account, by bank transfer, crypto deposit, or exchange connection.",
                },
                {
                  title: "Pick a membership tier",
                  detail:
                    "Choose Core, Luxe, Pinnacle, or VIP based on your monthly spend and the cashback caps.",
                },
                {
                  title: "Order your card",
                  detail:
                    "Create a virtual card to start spending immediately, or order the physical card if your region supports delivery.",
                },
              ]}
            />
            <div className="mt-6">
              <PrimaryAffiliateButton>Sign up for ether.fi Cash now</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Genuinely non-custodial: assets stay in your Vault</li>
                  <li>Borrow mode from 1.43%: spend without selling</li>
                  <li>3% to 4% cashback, strong for a self-custody card</li>
                  <li>5% back on ether.fi Travel plus up to 65% off hotels and flights</li>
                  <li>Earn tab with live reward rates per asset</li>
                  <li>162 countries for bank transfers</li>
                  <li>Zero FX markup on Pinnacle and VIP</li>
                  <li>Card issuance on Rain infrastructure</li>
                  <li>4.9 star App Store rating (early sample)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>Cashback caps: $2,000/month on Core, $10,000 on Luxe</li>
                  <li>Borrow mode is leverage against volatile collateral</li>
                  <li>Physical card only ships to 31 US states</li>
                  <li>24 countries excluded from bank transfers</li>
                  <li>Strict KYC: residence, documents, and IP must match</li>
                  <li>Virtual cards not free in 16 listed regions</li>
                  <li>Fees can vary by region; always check the in-app quote</li>
                  <li>Self-custody means you are responsible for your keys</li>
                  <li>App Store rating from only 407 ratings so far</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              ether.fi Cash is the most feature-complete non-custodial crypto card we have
              reviewed. The combination of self-custody, 3% to 4% cashback, and a Borrow mode
              from 1.43% that lets you spend without selling is genuinely rare. The Earn tab, the
              travel perks, and the 162-country bank transfer coverage make it feel like a real
              neobank rather than a card bolted onto a wallet.
            </P>
            <P>
              The honest concerns: the cashback caps mean the headline 3% only applies to your
              first $2,000 of monthly spend on Core. Borrow mode is leverage, and leverage
              against crypto collateral demands respect. The physical card barely exists outside
              part of the US, and KYC is strict enough that some applicants will be turned away.
              For a self-custody believer who wants to spend without selling, ether.fi Cash is
              worth a serious look. Start on Core, test a deposit and a withdrawal, try Borrow
              mode with a small amount first, and upgrade only if the numbers work for you.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the ether.fi Cash Card</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="compare">
            <H2>ether.fi Cash vs the alternatives</H2>
            <P>
              ether.fi Cash is not the only crypto card we have tested on the real apps. Here is
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
                    <td className="px-4 py-3 font-bold text-slate-900">ether.fi Cash</td>
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
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/kast-review" className="text-emerald-700 hover:text-emerald-900">KAST</a>
                    </td>
                    <td className="px-4 py-3">Free Standard tier</td>
                    <td className="px-4 py-3">1.5% to 3% by tier</td>
                    <td className="px-4 py-3">Self-custodial Earn vaults</td>
                    <td className="px-4 py-3">Free tier with earn on idle balance</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/redotpay-review" className="text-emerald-700 hover:text-emerald-900">RedotPay</a>
                    </td>
                    <td className="px-4 py-3">10 USD virtual card</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">App-managed</td>
                    <td className="px-4 py-3">Cheapest honest way to spend crypto</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <a href="/crypto-cards/dogpay-review" className="text-emerald-700 hover:text-emerald-900">DogPay</a>
                    </td>
                    <td className="px-4 py-3">10 USD virtual, memberships to 29.80 USD/mo</td>
                    <td className="px-4 py-3">None, tier perks instead</td>
                    <td className="px-4 py-3">App-managed</td>
                    <td className="px-4 py-3">Multi-BIN Visa and Mastercard, USD account</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              The quick read: ether.fi Cash is the only card here with a borrow-against-assets
              spending mode, and its 3% to 4% cashback with self-custody is a strong combo. Tria
              has the higher headline cashback at 6% but tighter caps and no borrow mode. Solid
              wins on pure math for moderate spenders with no annual fee. If spending without
              selling your crypto is the goal, ether.fi Cash stands alone.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get the ether.fi Cash Card</PrimaryAffiliateButton>
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
