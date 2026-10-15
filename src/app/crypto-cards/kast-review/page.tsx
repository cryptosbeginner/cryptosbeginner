import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/kast-review`;
const UPDATED = "16 October 2026";
const UPDATED_ISO = "2026-10-16";
const AFFILIATE = "https://go.cryptosbeginner.com/KAST";
const REF_CODE = "7MPKCWDC";

const REVIEWER = {
  name: "David Chen",
  initials: "DC",
  role: "DeFi researcher, CryptosBeginner",
};

export const metadata: Metadata = {
  title: "KAST Review 2026: Stablecoin Neobank, Cards, Reserve Rewards Tested",
  description:
    "October 2026 KAST review: Global USD account, Standard/Premium/Private memberships, Visa cards, Reserve account rewards up to 12%, Earn vaults, real in-app captures, fees, and signup with referral.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KAST Review 2026: Stablecoin Neobank, Cards, Reserve Rewards Tested",
    description:
      "Hands-on KAST review: global USD account, membership tiers, Visa card lineup, Reserve rewards, Earn vaults with in-app captures, fees, and how to sign up with a referral.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/kast/kast-home-reserve-balance.jpg`,
        width: 1080,
        height: 2157,
        alt: "KAST app home screen showing Reserve balance with Deposit, Rewards, Refer options and membership upgrade banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAST Review 2026",
    description: "KAST tested: stablecoin neobank, card lineup, Reserve rewards, Earn vaults, fees, and signup guide.",
    images: [`${SITE_URL}/images/tools/kast/kast-home-reserve-balance.jpg`],
  },
};

const faqItems = [
  {
    question: "What is KAST?",
    answer:
      "KAST is a stablecoin-based neobank app that gives you a Global USD Account. You deposit stablecoins (mainly USDT on Solana), hold a USD balance, spend it with Visa cards, send payments to other users or to 200 countries by SWIFT, and earn rewards on idle balance through the Reserve account or Earn vaults. It is available on iPhone and Android.",
  },
  {
    question: "Is KAST a bank?",
    answer:
      "No. KAST is a fintech platform built on stablecoin rails, not a licensed bank. Accounts and cards are provided through its regulated partners, and eligibility and ID requirements vary by country. It was founded in July 2024 by former Circle executive Raagulan Pathy, is headquartered in Singapore, and raised an 80 million USD Series A in March 2026 at a 600 million USD valuation co-led by QED Investors and Left Lane Capital.",
  },
  {
    question: "What are the KAST membership tiers?",
    answer:
      "There are three tiers. Standard is free and gives 1.5% cashback, an 8% annualized cash reward on the Reserve account balance (boosted until mid-2027, then 4%), and 2 free Standard cards. Premium costs 1,000 USD per year and gives 2% cashback, 1% back in points, a 10% annualized Reserve reward, 1 Premium card plus 2 Standard cards, and Visa Infinite benefits. Private costs 10,000 USD per year and gives 3% cashback, 2% back in points, a 12% annualized Reserve reward, 1 Gold Plated card plus 2 Premium or Standard cards, VIP Concierge services, and Visa Infinite benefits.",
  },
  {
    question: "How does the KAST Reserve account reward work?",
    answer:
      "The USD Reserve Account pays daily cash rewards on your balance with no lock-ups. The current boosted rate is 8% annualized for Standard members (shown in the app as 4% plus a 4% bonus), 10% for Premium, and 12% for Private, available until mid-2027. After that, the rate returns to 4%. The app states rewards are fully funded by KAST, so treat the boosted period as promotional and check the app for the current rate.",
  },
  {
    question: "What cards does KAST offer and what do they cost?",
    answer:
      "Standard members can order the K Card and Solana Card on Visa Platinum. Premium unlocks the X Card and Solana Illuma Card on Visa Infinite. Private unlocks the KAST Gold Card, Solana Gold Card, and Bitcoin Black Card, also on Visa Infinite. A virtual card is free, while a physical card costs 40 USD. Cards support Google Wallet, and you can view statements, set a PIN, freeze, or cancel a card from the app.",
  },
  {
    question: "Which stablecoins and networks can I deposit into KAST?",
    answer:
      "The app's deposit rules say to deposit only USDT on Solana. XRPL and Stellar deposits require a correct destination tag or memo. Deposits of unsupported assets or networks may be permanently lost, so always double check the asset and network shown in the app before sending.",
  },
  {
    question: "Is my money safe in KAST Earn vaults?",
    answer:
      "KAST Earn vaults are self-custodial: your funds are held in a Privy (a Stripe company) wallet, with onchain proof of reserves you can verify. The USDKY vault (3.3% APY, conservative) is powered by the M0 protocol and backed by short-term US Treasury bills. The Gauntlet Alpha Vault (4.5% APY, moderate) is curated by Gauntlet's quant team and deploys funds across DeFi protocols. APYs are variable, not guaranteed, and DeFi strategies carry smart contract and market risk. There are no lock-ups, so you can withdraw to your Spending Account at any time.",
  },
  {
    question: "How do I sign up for KAST with a referral?",
    answer:
      "Use a referral link to open your account, then download the app, verify your identity, and order a card. Our referral link is https://go.cryptosbeginner.com/KAST and the referral code is 7MPKCWDC. You can also add a referral code later in the app under Accounts, in the Referred by section.",
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

function FeeTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="bg-slate-950 text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 leading-6 ${j === 0 ? "font-bold text-slate-900" : "text-slate-600"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KastReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "KAST Review 2026: Stablecoin Neobank, Cards, Reserve Rewards Tested",
    description:
      "Hands-on KAST review: global USD account, membership tiers, Visa card lineup, Reserve rewards, Earn vaults with in-app captures, fees, and signup guide.",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · stablecoin neobank</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              KAST review 2026: a global USD account on stablecoin rails
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A Global USD Account, Visa cards from free Standard to a 10,000 USD Private tier,
              Reserve rewards up to 12%, and self-custodial Earn vaults. Here is the honest,
              screen-by-screen breakdown of KAST, captured inside the app in October 2026.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get KAST with referral code {REF_CODE}</PrimaryAffiliateButton>
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
          if you sign up through our referral link, at no extra cost to you. The referral code is{" "}
          {REF_CODE}.{" "}
          <strong className="text-slate-700">Risk warning:</strong> crypto and DeFi yields are
          variable and can fall, promotional rates expire, and KAST is not a bank. Educational
          content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What KAST is</H2>
            <P>
              KAST is a stablecoin neobank built for people who live across borders. Instead of a
              traditional bank account, you get a Global USD Account funded with stablecoins. You
              deposit USDT on Solana, hold a dollar balance, spend it with Visa cards anywhere Visa
              is accepted, send money to other KAST users instantly with a KAST tag, or pay out to
              bank accounts in 200 countries via SWIFT.
            </P>
            <P>
              What makes it different from a crypto exchange card is the banking layer around it:
              a Reserve account that pays daily cash rewards on idle balance, self-custodial Earn
              vaults for extra yield, global payouts, and a membership program with cashback and
              Visa Infinite perks. Everything below is captured from the live app in October 2026.
            </P>
            <Figure
              src="/images/tools/kast/kast-home-reserve-balance.jpg"
              alt="KAST app home screen showing Reserve balance with Deposit, Rewards, Refer options and membership upgrade banner"
              caption="The KAST home screen centers on your Reserve balance, with quick access to Deposit, Rewards, and Refer."
            />
          </Section>

          <Section id="company">
            <H2>Company background</H2>
            <P>
              KAST was founded in July 2024 by Raagulan Pathy, a former Circle executive, and is
              headquartered in Singapore. In March 2026 it raised an 80 million USD Series A at a
              600 million USD valuation, co-led by QED Investors and Left Lane Capital, with
              participation from Peak XV Partners, HSG, and DST Global Partners. It had previously
              raised a 10 million USD seed round co-led by HSG and Peak XV Partners.
            </P>
            <P>
              The company reports more than one million users and nearly 5 billion USD in annualized
              transaction volume, with availability in more than 190 countries. It has hired over
              250 people across engineering, compliance, and operations, drawing talent from Stripe,
              Revolut, Binance, Circle, and Airwallex.
            </P>
            <P>
              Important context: KAST is a fintech platform built on stablecoin rails, not a
              licensed bank. Accounts and cards are provided through its regulated partners, and
              eligibility plus ID requirements vary by country. The boosted Reserve rates below are
              promotional, funded by KAST, and scheduled to end in mid-2027, so treat them as a
              launch incentive rather than a permanent yield.
            </P>
          </Section>

          <Section id="membership">
            <H2>Membership tiers: Standard, Premium, Private</H2>
            <P>
              KAST runs on a membership model with three tiers. Standard is free. Premium costs
              1,000 USD per year. Private costs 10,000 USD per year. Each tier raises your cashback,
              your Reserve reward rate, and the cards you can order. Here is the side-by-side
              comparison from the app.
            </P>
            <FeeTable
              headers={["Tier", "Standard", "Premium", "Private"]}
              rows={[
                ["Price", "Free", "1,000 USD / year", "10,000 USD / year"],
                ["Cashback", "1.5%", "2%", "3%"],
                ["Back in points", "Not included", "1%", "2%"],
                [
                  "Reserve reward (annualized)",
                  "8% until mid-2027, then 4%",
                  "10% until mid-2027",
                  "12% until mid-2027",
                ],
                [
                  "Cards included",
                  "2 free Standard cards",
                  "1 Premium + 2 Standard cards",
                  "1 Gold Plated + 2 Premium or Standard cards",
                ],
                ["Visa Infinite benefits", "No", "Yes", "Yes"],
                ["VIP Concierge", "No", "No", "Yes"],
              ]}
            />
            <Figure
              src="/images/tools/kast/kast-membership-standard.jpg"
              alt="KAST Membership screen showing the free Standard tier with 1.5 percent cashback, 8 percent annualized Reserve reward, and 2 free Standard cards"
              caption="The free Standard tier: 1.5% cashback, an 8% boosted Reserve reward, and two free Standard cards."
            />
            <Figure
              src="/images/tools/kast/kast-membership-premium.jpg"
              alt="KAST Membership screen showing the Premium tier at 1,000 USD per year with 2 percent cashback, 1 percent back in points, 10 percent Reserve reward, and Visa Infinite benefits"
              caption="Premium at 1,000 USD per year adds 2% cashback, points, a 10% Reserve reward, and Visa Infinite benefits."
            />
            <Figure
              src="/images/tools/kast/kast-membership-private.jpg"
              alt="KAST Membership screen showing the Private tier at 10,000 USD per year with 3 percent cashback, 2 percent back in points, 12 percent Reserve reward, gold plated card, and VIP Concierge"
              caption="Private at 10,000 USD per year: 3% cashback, a 12% Reserve reward, a gold plated card, and VIP Concierge."
            />
            <P>
              Whether an upgrade pays for itself depends on your balances and spend. The Premium
              tier costs 1,000 USD a year, so you need meaningful card spend or a large Reserve
              balance for the extra cashback and the 2 percentage point Reserve boost to cover it.
              Private at 10,000 USD a year is aimed at high net worth users who will use the
              concierge and the full Visa Infinite suite.
            </P>
          </Section>

          <Section id="reserve">
            <H2>Reserve account: daily cash rewards on your balance</H2>
            <P>
              The USD Reserve Account is KAST's headline feature. You keep a dollar balance in the
              app and it earns daily cash rewards with no lock-ups and no limits on access. The
              current boosted rates run until mid-2027: 8% annualized on Standard (shown in the app
              as 4% plus a 4% bonus), 10% on Premium, and 12% on Private. After mid-2027 the rate
              returns to 4%.
            </P>
            <Figure
              src="/images/tools/kast/kast-reserve-account-onboarding.jpg"
              alt="KAST USD Reserve Account onboarding explaining boosted rates until mid-2027, 8 percent reward now returning to 4 percent after, with no lock-ups and daily cash rewards"
              caption="The Reserve onboarding is explicit: 8% now, back to 4% after mid-2027, no lock-ups, rewards paid daily."
            />
            <Figure
              src="/images/tools/kast/kast-reserve-reward-rate.jpg"
              alt="KAST Reserve account screen showing lifetime earnings, reward rate of 4 percent plus 4 percent bonus until mid-2027, and upgrade prompt for 12 percent"
              caption="The Reserve screen breaks the rate down as 4% plus a 4% bonus until mid-2027, with an upsell to Private for 12%."
            />
            <Callout title="Read this before you chase the rate">
              The app states Reserve rewards are fully funded by KAST. That means the 8 to 12%
              figures are a customer acquisition cost, not a market yield, and they end in
              mid-2027. Enjoy the boost while it lasts, but do not build a long-term plan around a
              rate the company is paying out of pocket.
            </Callout>
          </Section>

          <Section id="cards">
            <H2>Cards: the full lineup</H2>
            <P>
              KAST issues Visa cards in three design families, gated by membership. Standard members
              can order the K Card and the Solana Card on Visa Platinum. Premium unlocks the X Card
              and the Solana Illuma Card on Visa Infinite. Private unlocks the KAST Gold Card, the
              Solana Gold Card, and the Bitcoin Black Card, all on Visa Infinite.
            </P>
            <Figure
              src="/images/tools/kast/kast-order-card-tiers.jpg"
              alt="KAST order card screen showing Standard cards K Card and Solana Card, Premium X Card and Solana Illuma Card, and Private KAST Gold Card and Solana Gold Card"
              caption="The order screen groups every card design by membership tier, from Standard Visa Platinum to Private Visa Infinite."
            />
            <P>
              A virtual card is free and issued instantly for online and in-store purchases through
              mobile wallets. A physical card costs 40 USD and is delivered to you for global
              spending and ATM withdrawals. Cards support Google Wallet, and from the card screen
              you can view details, freeze the card, pull a statement, set a PIN, or cancel it.
            </P>
            <Figure
              src="/images/tools/kast/kast-card-type-virtual-physical.jpg"
              alt="KAST choose card type screen showing a free Virtual card and a Physical card costing 40 USD"
              caption="Virtual is free and instant. Physical costs 40 USD and ships to you."
            />
            <Figure
              src="/images/tools/kast/kast-cards-virtual-platinum.jpg"
              alt="KAST Cards screen showing an active virtual Visa Platinum card with Add to Google Wallet button and transaction history"
              caption="An active virtual Visa Platinum card in the app, with Google Wallet pairing and a clean transaction list."
            />
            <H2>Visa Infinite benefits</H2>
            <P>
              Premium and Private members get Visa Infinite benefits. The in-app breakdown lists
              purchase protection up to 20,000 USD, extended warranty up to 25,000 USD, price
              protection up to 4,000 USD, travel insurance up to 1,500,000 USD, lost luggage cover
              of 3,000 USD, baggage delay cover of 600 USD, a car rental damage waiver, heavily
              discounted lounge access, US Customs express entry, and a global eSIM with 3GB
              included plus regional eSIMs. These are standard Visa Infinite program perks, and
              exact coverage follows the card terms for your region.
            </P>
            <Figure
              src="/images/tools/kast/kast-visa-infinite-travel-benefits.jpg"
              alt="KAST Visa Infinite benefits screen listing lounge access, US Customs express entry, global and regional eSIM data, and Visa Luxury Hotel Collection"
              caption="Visa Infinite perks in the app: lounge access, express customs entry, eSIM data, and hotel collection access."
            />
          </Section>

          <Section id="earn">
            <H2>Earn vaults: USDKY and Gauntlet Alpha</H2>
            <P>
              Beyond the Reserve account, KAST Earn offers two self-custodial yield vaults. USDKY
              (labeled KAST via M0) pays 3.3% APY and is rated Conservative. The Gauntlet Alpha
              Vault pays 4.5% APY and is rated Moderate. Both show balance, earnings, and risk
              level right on the Earn screen, and there is no cap on deposits or earnings.
            </P>
            <Figure
              src="/images/tools/kast/kast-earn-vaults.jpg"
              alt="KAST Earn screen showing two vaults: USDKY at 3.3 percent APY rated Conservative and Gauntlet Alpha Vault at 4.5 percent APY rated Moderate"
              caption="The Earn screen: USDKY at 3.3% APY (Conservative) and the Gauntlet Alpha Vault at 4.5% APY (Moderate)."
            />
            <P>
              USDKY is KAST's yield-enabled vault powered by USDKY, which derives its value from
              M0 protocol collateral consisting primarily of short-term US Treasury bills. Yield
              generated from that collateral is reflected in the value of USDKY over time, and it
              is powered by the M0 protocol. The Gauntlet Alpha Vault is curated by Gauntlet's
              quantitative team, which automatically deploys funds across top-tier DeFi protocols to
              capture risk-adjusted yield.
            </P>
            <P>
              Both vaults are self-custodial. Your tokens sit in your own Privy wallet (Privy is a
              Stripe company), you get onchain proof of reserves you can verify on a block
              explorer, and you can withdraw back to your KAST Spending Account at any time, since
              nothing is time-locked. Earnings are not paid out as cash; instead, the redemption
              value of your vault shares rises as yield accrues, and you realize the gain when you
              withdraw. APYs are variable and fluctuate with the underlying strategy, so they are
              not fixed or guaranteed. KAST currently passes 100% of the net displayed yield to
              users, with fees possible in the future on advance notice.
            </P>
            <Figure
              src="/images/tools/kast/kast-earn-safety-faq-usdky.jpg"
              alt="KAST Earn FAQ explaining self-custody: USDKY tokens held in a Privy wallet, onchain proof of reserves, and backing from short-term US Treasury bills"
              caption="The in-app FAQ explains the self-custodial model: your USDKY sits in your Privy wallet, verifiable onchain."
            />
            <Callout title="DeFi risk is real here">
              Self-custodial does not mean risk-free. The Gauntlet vault deploys into DeFi
              protocols, which carry smart contract risk, and both APYs move with markets. Only
              deposit what you can afford to have fluctuate, and keep spending money in the
              Reserve or Spending Account, not in a yield vault.
            </Callout>
          </Section>

          <Section id="payments">
            <H2>Payments: tags, payouts, and SWIFT</H2>
            <P>
              The Payments tab is built for moving money, not trading. You can pay anyone instantly
              with a KAST tag or KAST link, send stablecoins instantly, run an instant payout to
              55+ countries, or send USD via SWIFT to 200 countries in 1 to 3 days. Search by name,
              KAST tag, phone, or email to find recipients.
            </P>
            <Figure
              src="/images/tools/kast/kast-payments.jpg"
              alt="KAST Payments screen with options for instant Stablecoin transfers, Pay anyone with KAST tag or link, instant payout to 55 plus countries, and USD via SWIFT to 200 countries"
              caption="Payments covers instant stablecoin sends, KAST tag payments, 55+ country payouts, and SWIFT to 200 countries."
            />
            <P>
              Your KAST tag is your payment handle. In the app's Discoverability settings you
              choose how others can find you: by name, KAST tag, email address, or phone number,
              each with its own toggle. Our test account uses the tag cryptosbeginner, which shows
              how clean peer-to-peer payments feel when both sides are on KAST.
            </P>
            <Figure
              src="/images/tools/kast/kast-discoverability-kast-tag.jpg"
              alt="KAST Discoverability settings showing toggles for being found by name, KAST tag cryptosbeginner, email address, and phone number"
              caption="Discoverability settings let you control exactly how others can find and pay you."
            />
          </Section>

          <Section id="security">
            <H2>Security and deposits</H2>
            <P>
              KAST lets you set your own security limits. Both onchain transfers and KAST user
              transfers default to a 5,000 USD daily limit and a 5,000 USD per-transaction limit,
              which you can adjust. Below your limit, a one-time passcode is enough; above it, the
              app asks for enhanced security like a face scan or authenticator code.
            </P>
            <Figure
              src="/images/tools/kast/kast-onchain-transfer-limits.jpg"
              alt="KAST onchain transfer security settings showing a 5,000 USD daily limit and 5,000 USD per-transaction limit with passcode and face scan options"
              caption="Custom security limits: 5,000 USD daily and per-transaction defaults, adjustable to your comfort level."
            />
            <P>
              Deposits have strict rules, so read them before you send anything. The app says to
              deposit only USDT on Solana. XRPL and Stellar deposits require a correct destination
              tag or memo. Deposits of unsupported assets or networks may be permanently lost. The
              Receive screen shows a QR code with the asset, network, and wallet address, and the
              deposit rules sheet repeats the warning. There is no undo button on a wrong-network
              deposit, so copy the address fresh every time.
            </P>
            <Figure
              src="/images/tools/kast/kast-deposit-rules.jpg"
              alt="KAST deposit rules warning to deposit only USDT on Solana, use correct destination tag or memo for XRPL and Stellar, and that wrong deposits may be permanently lost"
              caption="The deposit rules are strict: USDT on Solana only, and wrong-network deposits can be permanently lost."
            />
            <Callout title="The one rule that matters most">
              Only ever send USDT on Solana to your KAST deposit address, and never reuse an old
              address from memory. A single wrong-network deposit can mean the funds are gone for
              good, and support cannot reverse an onchain transfer.
            </Callout>
          </Section>

          <Section id="app">
            <H2>App experience and ratings</H2>
            <P>
              The app itself is polished: a dark, modern interface with five tabs (Home, Accounts,
              Payments, Cards, Wealth), instant virtual card issuance, Google Wallet pairing, and
              support for six languages including English, Spanish, Portuguese, Turkish, Simplified
              Chinese, and Arabic. The Accounts screen holds your profile, referral code field,
              statements, language and currency preferences, a self-custody toggle, and account
              closure.
            </P>
            <P>
              Public ratings are mixed but lean positive. On the App Store, KAST: Global USD
              Account holds 4.0 stars from 272 ratings. On Google Play it holds 3.9 stars from
              about 3,000 reviews with 500,000+ downloads. That is a solid base for a 2024
              startup, but the sub-4.0 Play Store score says support and edge cases still need
              work. Read recent reviews for your country before you commit real money.
            </P>
            <Figure
              src="/images/tools/kast/kast-google-play-listing.jpg"
              alt="Google Play listing for KAST Global USD Account showing 3.9 stars from 3,000 reviews and 500,000 plus downloads"
              caption="Google Play: 3.9 stars from 3K reviews, 500K+ downloads. The App Store shows 4.0 from 272 ratings."
            />
          </Section>

          <Section id="signup">
            <H2>How to sign up for KAST</H2>
            <P>
              Getting started takes a few minutes. Follow these steps:
            </P>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-600">
              <li>
                Open our referral link:{" "}
                <a
                  href={AFFILIATE}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="font-bold text-emerald-700 underline"
                >
                  go.cryptosbeginner.com/KAST
                </a>{" "}
                (referral code {REF_CODE}).
              </li>
              <li>Download the KAST app for iPhone or Android and create your account.</li>
              <li>
                If you skipped the link, add the code later under Accounts, then Referred by, then
                Add code.
              </li>
              <li>Complete identity verification. Card eligibility and ID requirements vary by country.</li>
              <li>Order your free virtual card instantly, or pay 40 USD for a physical card.</li>
              <li>
                Deposit USDT on Solana using the Receive screen, then move funds between your
                Spending Account and Reserve to start earning.
              </li>
            </ol>
            <Figure
              src="/images/tools/kast/kast-accounts-settings.jpg"
              alt="KAST Accounts settings showing Profile, Referred by with Add code button, Statements, language and currency preferences, and Self-custody toggle"
              caption="Missed the referral at signup? Add the code later under Accounts, then Referred by."
            />
            <div className="mt-8">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Start with KAST · code {REF_CODE}
              </PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What we like</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-950/80">
                  <li>Free Standard tier with 1.5% cashback and a boosted 8% Reserve reward</li>
                  <li>Real Visa cards (Platinum and Infinite) with Google Wallet support</li>
                  <li>Self-custodial Earn vaults with onchain proof of reserves</li>
                  <li>Global payouts: instant to 55+ countries, SWIFT USD to 200 countries</li>
                  <li>Adjustable security limits with step-up authentication</li>
                  <li>Well-funded team: 80M USD Series A, 1M+ users, 190+ countries</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-950/80">
                  <li>Reserve boost ends mid-2027, then the rate drops to 4%</li>
                  <li>Premium (1,000 USD/yr) and Private (10,000 USD/yr) are expensive</li>
                  <li>Earn vault APYs are variable and carry DeFi risk</li>
                  <li>Deposits are USDT on Solana only; wrong-network deposits can be lost</li>
                  <li>Not a bank; availability and ID rules vary by country</li>
                  <li>Google Play rating of 3.9 suggests support still maturing</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              KAST is one of the most complete stablecoin neobanks we have tested. The free
              Standard tier alone gives you a Global USD Account, a free virtual Visa card, 1.5%
              cashback, and an 8% boosted Reserve reward until mid-2027, which is a strong package
              for anyone paid in stablecoins or living across borders. The Earn vaults are
              genuinely self-custodial with onchain proof, which sets them apart from opaque
              custodial yield products.
            </P>
            <P>
              The caveats are the price of the paid tiers, the expiry date on the boosted rates,
              and the strict deposit rules. Premium only makes sense if your spend or Reserve
              balance is large enough to earn back 1,000 USD a year, and Private is firmly a
              wealth product. Start on Standard, test deposits small, keep spending money out of
              the yield vaults, and re-check the Reserve rate as mid-2027 approaches.
            </P>
            <div className="mt-8">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Try KAST free · referral code {REF_CODE}
              </PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-bold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
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
