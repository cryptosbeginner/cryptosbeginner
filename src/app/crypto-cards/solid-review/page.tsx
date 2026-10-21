import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/solid-review`;

const UPDATED = "21 October 2026";
const UPDATED_ISO = "2026-10-21";

const SOLID = "https://www.solid.xyz/refer?ref=4Z0ZE";

export const metadata: Metadata = {
  title: "Solid Card Review 2026: Fees, Cashback Tiers & Is It Worth It?",
  description:
    "October 2026 Solid Card review: the self-custodial Visa card with up to 5% USDC cashback and up to 6% APY. Full fee tables, Rewards tiers, funding modes, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Solid Card Review 2026: Fees, Cashback Tiers & Is It Worth It?",
    description:
      "Solid's self-custodial Visa card reviewed: cashback tiers, fees, yield, and honest verdict.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/cards/reviews/solid-visa-card-plinth.png`,
        width: 1200,
        height: 630,
        alt: "Solid green Visa card official product image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solid Card Review 2026: Fees, Cashback Tiers & Is It Worth It?",
    description:
      "The self-custodial cashback card reviewed: tiers, fees, and what to watch.",
    images: [`${SITE_URL}/images/cards/reviews/solid-visa-card-plinth.png`],
  },
};

const faqItems = [
  {
    question: "Is the Solid Card legit and safe?",
    answer:
      "Solid is a real operating company with a published fee schedule, a Visa Platinum card program issued through Rain or Wirex, and audits by Check Point. The self-custodial design means you hold the keys via passkeys and Solid cannot move your funds. That said, the yield comes from DeFi strategies, which carry smart contract and market risk. Only keep money in Solid that you can afford to have exposed to DeFi.",
  },
  {
    question: "What does the Solid Card cost?",
    answer:
      "The card itself is free at every tier: no issuance fee, no monthly or annual fee, no top-up fee. Spending in USD is free. On non-USD purchases you pay 1% card provider FX plus 0.5% Solid FX, for 1.5% total at every tier. Wirex cardholders pay no FX on euro purchases from a EUR balance. Figures verified October 2026 from Solid's official support docs.",
  },
  {
    question: "How does Solid cashback work?",
    answer:
      "Cashback is paid in USDC on eligible purchases: 3% at Core (cap $50/month), 4% at Prime (cap $100/month), 5% at Ultra (cap $200/month). It is credited 14 days after the transaction settles, lands in your Savings, and starts earning yield immediately. Because cashback exceeds the 1.5% total FX cost at every tier, even non-USD purchases leave you ahead.",
  },
  {
    question: "What are the Solid Rewards tiers and how do I unlock them?",
    answer:
      "Everyone starts at Core. Prime unlocks with a $199 per year subscription or by locking 50,000 FUSE for 12 months. Ultra requires locking 400,000 FUSE for 12 months. Higher tiers raise your cashback rate and cap, and cut or remove fees on bank deposits and swaps. Locked FUSE cannot be withdrawn before the unlock date.",
  },
  {
    question: "What is the difference between Savings Mode and Borrow Mode?",
    answer:
      "Savings Mode spends directly from your card balance. Borrow Mode lets you borrow USDC against your savings to spend, so your deposited funds stay put and keep earning yield while you spend the borrowed amount. It is the spend-without-selling pitch, built into the card.",
  },
  {
    question: "Where is the Solid Card available?",
    answer:
      "The card is issued by Rain or Wirex depending on your country of residence, assigned automatically when you order. Solid does not publish one global country list. EU payments are still launching at the time of writing. Local currency deposits are live in 16 currencies across Latin America, Africa, Asia, the Gulf, and the euro area via TransFi; Thailand supports cash-out only for now. Check eligibility in the app before applying.",
  },
  {
    question: "Does the Solid Card require KYC?",
    answer:
      "Yes. Identity verification is required for card issuance. Local currency deposits through TransFi need a separate one-time verification with TransFi, even if your card is already active.",
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
      href={SOLID}
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

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-800">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

const tocItems = [
  { id: "video", label: "Video review" },
  { id: "what-is", label: "What the Solid Card is" },
  { id: "modes", label: "Savings Mode vs Borrow Mode" },
  { id: "signup", label: "How to sign up" },
  { id: "kyc", label: "How to complete verification" },
  { id: "funding", label: "How to fund your card" },
  { id: "tiers", label: "Rewards tiers: Core, Prime, Ultra" },
  { id: "spend", label: "How to spend and earn cashback" },
  { id: "savings", label: "Savings yield explained" },
  { id: "fees", label: "Full fee table (verified October 2026)" },
  { id: "visa-platinum", label: "Visa Platinum perks" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "risks", label: "Risks you should know" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Solid Card questions" },
];

export default function SolidReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Solid Card Review 2026: Fees, Cashback Tiers & Is It Worth It?",
    description:
      "October 2026 Solid Card review: the self-custodial Visa card with up to 5% USDC cashback and up to 6% APY. Full fee tables, Rewards tiers, funding modes, and honest risks.",
    datePublished: UPDATED_ISO,
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
        name: "Cards",
        item: `${SITE_URL}/crypto-cards`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Solid Card Review",
        item: PAGE_URL,
      },
    ],
  };

  const videoLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Spend Your Crypto Anywhere: Honest Solid.xyz Review (6% APY + Visa Card)",
    description:
      "Our video review of the Solid Card: how the self-custodial Visa card works, the Rewards tiers, the savings yield, and the fees to watch.",
    thumbnailUrl: "https://i.ytimg.com/vi/rtu6w7SYKsk/hqdefault.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/rtu6w7SYKsk",
    contentUrl: "https://www.youtube.com/watch?v=rtu6w7SYKsk",
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    inLanguage: "en",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
      />

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Solid Card Review 2026: Fees, Cashback Tiers &amp; Is It Worth It?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Solid pairs a self-custodial money app with a Visa Platinum
              card: up to 5% cashback in USDC, up to 6% APY on your dollars,
              zero card fees, and you hold the keys the whole time. I went
              through Solid's official support docs line by line so you get
              the real fee tables, the real tier requirements, and the real
              catches. Here is the full picture.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Get the Solid Card
              </PrimaryCtaButton>

              <Link
                href="#fees"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Jump to the fee table
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Disclosure:</strong> The Solid links on this page are
            affiliate links. If you sign up through them, CryptosBeginner
            may earn a commission at no extra cost to you. This does not
            change our assessment criteria or conclusions. This page is
            educational content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/cards/reviews/solid-visa-card-plinth.png"
              alt="Solid green Visa card, official product image from solid.xyz"
              width={1200}
              height={630}
              className="mx-auto h-auto w-full max-w-2xl rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The Solid Visa card. Official product image from solid.xyz.
            </figcaption>
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">A self-custodial Visa card.</strong>{" "}
                You hold the keys via passkeys. Solid cannot move your funds.
              </li>
              <li>
                <strong className="text-slate-950">Real cashback.</strong>{" "}
                3% to 5% in USDC depending on tier, with monthly caps of $50
                to $200. It beats the card's own FX fees at every tier.
              </li>
              <li>
                <strong className="text-slate-950">The card is free.</strong>{" "}
                No issuance, monthly, annual, or top-up fees at any tier.
              </li>
              <li>
                <strong className="text-slate-950">Yield on idle money.</strong>{" "}
                Up to 6% APY on dollars, 15% on FUSE, 3% on ETH, with a 10%
                performance fee on yield.
              </li>
              <li>
                <strong className="text-slate-950">Two ways to spend.</strong>{" "}
                Savings Mode spends your balance; Borrow Mode borrows against
                it so your money keeps earning.
              </li>
              <li>
                <strong className="text-slate-950">Tiers cost money or lockup.</strong>{" "}
                Prime is $199/year or 50,000 FUSE locked 12 months; Ultra
                needs 400,000 FUSE locked 12 months.
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

        <Section id="video">
          <H2>Video review</H2>
          <P>
            Prefer to watch? Here is our video review of the Solid Card,
            covering how the self-custodial Visa card works, the Rewards
            tiers, the savings yield, and the fees to watch.
          </P>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/rtu6w7SYKsk"
                title="Solid Card video review: Spend Your Crypto Anywhere, Honest Solid.xyz Review"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Section>

        <Section id="what-is">
          <H2>What the Solid Card is</H2>
          <P>
            Solid is a stablecoin money app with a Visa Platinum card
            attached. At its core is SoUSD, a yield-bearing stablecoin: you
            deposit USDC, it mints SoUSD representing shares in a vault of
            audited DeFi strategies, and the token grows in value as the
            vault earns. No staking, no lockups, yield compounds on its own.
          </P>
          <P>
            The card itself is issued by Rain or Wirex depending on your
            country, assigned automatically when you order. It spends your
            card balance wherever Visa is accepted. The headline pitch is
            the combination: self-custody (passkeys, audited infrastructure,
            Check Point audit), cashback on spending, and yield on the money
            sitting in the app. Everything below comes from Solid's official
            support docs, verified in October 2026.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/cards/reviews/solid-app-account.png"
              alt="Solid app account screen showing balance and card, official image from solid.xyz"
              width={743}
              height={1545}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The Solid app account screen. Official image from solid.xyz.
            </figcaption>
          </figure>
        </Section>

        <Section id="modes">
          <H2>Savings Mode vs Borrow Mode</H2>
          <P>
            This is the feature that sets Solid apart from plain debit
            cards, so it is worth understanding before anything else.
          </P>
          <P>
            <strong className="text-slate-950">Savings Mode</strong> is the
            simple one: the card spends directly from your balance. Money
            in, money out. What you do not spend keeps earning yield in
            Savings.
          </P>
          <P>
            <strong className="text-slate-950">Borrow Mode</strong> is the
            clever one: you borrow USDC against your savings to spend, so
            your deposited funds stay put and keep earning yield while you
            spend the borrowed amount. It is the spend-without-selling idea,
            built into the card rather than bolted on. Like any borrowing,
            understand the terms before you lean on it.
          </P>
        </Section>

        <Section id="signup">
          <H2>How to sign up</H2>
          <P>
            Signup happens in the Solid app. The card is ordered from
            inside the app after your account is set up.
          </P>
          <Steps
            items={[
              "Click the Solid link on this page to open the official site, then get the app.",
              "Create your Solid account and set up passkey authentication. This is your self-custody key, so follow the backup steps carefully.",
              "Order your Solid card from the card section of the app. The issuer (Rain or Wirex) is assigned based on your country.",
              "Complete identity verification to activate the card (next section).",
            ]}
          />
          <div className="mt-7">
            <PrimaryCtaButton>Get the Solid Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="kyc">
          <H2>How to complete verification</H2>
          <P>
            Identity verification is required for card issuance; there is
            no anonymous route. One wrinkle to know: local currency deposits
            through TransFi need a separate one-time verification with
            TransFi itself, even if your card is already active. Have a
            government-issued ID ready for both.
          </P>
          <Steps
            items={[
              "In the app, start the card verification flow when ordering.",
              "Provide your ID and complete the liveness check as prompted.",
              "Wait for approval, then your card is activated.",
              "If you plan to deposit local currency, complete the separate TransFi verification on first use.",
            ]}
          />
        </Section>

        <Section id="funding">
          <H2>How to fund your card</H2>
          <P>
            You have three main routes to get money onto the card, and the
            fees differ by route and tier.
          </P>
          <P>
            <strong className="text-slate-950">Crypto deposits.</strong>{" "}
            Send USDC or USDT from an external wallet. Free on the Fuse
            network, 0.1% on Ethereum, 0.03% on other networks (BNB Chain,
            Polygon, Base, Arbitrum). Minimum deposit $10, no maximum.
          </P>
          <P>
            <strong className="text-slate-950">Local currency deposits.</strong>{" "}
            Pay from your local bank account or mobile money wallet in 16
            currencies across Latin America, Africa, Asia, the Gulf, and
            the euro area, powered by TransFi. No crypto knowledge needed:
            you pay in your currency and USDC lands on your card balance.
            Solid's fee is 0.5%, shown inside the TransFi quote before you
            confirm. Thailand currently supports cash-out only.
          </P>
          <P>
            <strong className="text-slate-950">Bank deposits and Virtual Account.</strong>{" "}
            Open a Virtual Account for a one-time $10 fee to get US bank
            account details in your name for ACH and wire transfers. Bank
            deposit fees are 0.5% at Core, 0.25% at Prime, and free at
            Ultra. Bank withdrawals currently carry no Solid fee at any
            tier.
          </P>
          <Steps
            items={[
              "In the app, tap Add Funds and pick your route: crypto, cash deposit (local currency), or bank.",
              "For crypto, choose the network carefully. Fuse is free; Ethereum costs 0.1%.",
              "For local currency, pick your currency and payment method, complete TransFi verification once, and confirm the quoted rate.",
              "Move money from Wallet to your card's spendable balance. The card only spends what is on the card.",
            ]}
          />
        </Section>

        <Section id="tiers">
          <H2>Rewards tiers: Core, Prime, Ultra</H2>
          <P>
            Everyone starts at Core. The tiers change your cashback rate
            and cap, and cut fees on bank deposits and swaps. Here is the
            honest breakdown.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Benefit</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Core</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Prime</th>
                  <th className="py-3 text-right font-black text-slate-950">Ultra</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cashback (USDC)</td>
                  <td className="py-3 pr-4 text-right font-bold">3%</td>
                  <td className="py-3 pr-4 text-right font-bold">4%</td>
                  <td className="py-3 text-right font-bold">5%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Monthly cashback cap</td>
                  <td className="py-3 pr-4 text-right font-bold">$50</td>
                  <td className="py-3 pr-4 text-right font-bold">$100</td>
                  <td className="py-3 text-right font-bold">$200</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Bank deposit fee</td>
                  <td className="py-3 pr-4 text-right font-bold">0.5%</td>
                  <td className="py-3 pr-4 text-right font-bold">0.25%</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Swap fee</td>
                  <td className="py-3 pr-4 text-right font-bold">0.5%</td>
                  <td className="py-3 pr-4 text-right font-bold">0.25%</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Solid FX fee (non-USD)</td>
                  <td className="py-3 pr-4 text-right font-bold">0.5%</td>
                  <td className="py-3 pr-4 text-right font-bold">0.5%</td>
                  <td className="py-3 text-right font-bold">0.5%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">How to unlock</td>
                  <td className="py-3 pr-4 text-right font-bold">Everyone</td>
                  <td className="py-3 pr-4 text-right font-bold">$199/year or lock 50,000 FUSE 12 mo</td>
                  <td className="py-3 text-right font-bold">Lock 400,000 FUSE 12 mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The math that matters: at Core you need to spend about $167 a
            month to hit the $50 cap at 3%. At Ultra you need $4,000 a
            month to hit the $200 cap at 5%. Be honest about your spending
            before paying for Prime or locking FUSE for Ultra. Locked FUSE
            cannot be withdrawn before the unlock date, and your tier ends
            when the lock ends unless you lock again.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the Solid Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="spend">
          <H2>How to spend and earn cashback</H2>
          <P>
            Spend anywhere Visa is accepted, in person or online. USD
            purchases are free. On non-USD purchases you pay 1% provider FX
            plus 0.5% Solid FX, 1.5% total at every tier. Wirex-issued
            cardholders pay zero FX on euro purchases made from a EUR
            balance or from soUSD with Credit mode on.
          </P>
          <P>
            Cashback lands as USDC 14 days after the transaction settles,
            straight into your Savings where it starts earning yield
            immediately. Here is why the fee math works in your favor:
            even at Core, 3% cashback beats the 1.5% total FX cost. On a
            $100 equivalent euro purchase, you pay about $1.50 in FX and
            earn $3 back. On USD purchases there are no FX fees at all, so
            the full cashback is yours. That is the core of Solid's pitch,
            and the numbers check out.
          </P>
          <P>
            The card works with Apple Pay and Google Pay at no extra cost.
            Cross-border and international transaction fees are covered by
            Solid, so FX and cross-border never stack on the same purchase.
          </P>
        </Section>

        <Section id="savings">
          <H2>Savings yield explained</H2>
          <P>
            Money you are not spending can sit in Savings and earn: up to
            6% APY on dollars, up to 15% on FUSE, and 3% on ETH, per the
            official page. The yield comes from curated DeFi strategies,
            and Solid takes a 10% performance fee from the yield generated,
            never from your principal. If your Savings earn $100, Solid
            keeps $10 and you keep $90.
          </P>
          <P>
            Moving money into Savings is free with no lockup or minimum.
            Withdrawing from Savings carries a 0.01% solver fee to cover
            onchain execution costs. These are variable DeFi yields, not
            bank interest: rates move with strategy performance, and the
            usual DeFi risks apply.
          </P>
        </Section>

        <Section id="fees">
          <H2>Full fee table (verified October 2026)</H2>
          <P>
            Every figure below comes from Solid's official support docs
            (the complete fees overview, updated 12 October 2026, and the
            card fees page, updated 9 October 2026). Fees can change; the
            app always shows the exact fee before you confirm.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Item</th>
                  <th className="py-3 text-right font-black text-slate-950">Fee</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Card issuance</td>
                  <td className="py-3 text-right font-bold">Free, all tiers</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Monthly or annual card fee</td>
                  <td className="py-3 text-right font-bold">None</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Top-up fee</td>
                  <td className="py-3 text-right font-bold">0%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">USD card spending</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Non-USD card spending (total FX)</td>
                  <td className="py-3 text-right font-bold">1.5% (1% provider + 0.5% Solid), all tiers</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">EUR spending from EUR balance (Wirex cards)</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple Pay / Google Pay</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cross-border fees</td>
                  <td className="py-3 text-right font-bold">Covered by Solid</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cashback</td>
                  <td className="py-3 text-right font-bold">3% / 4% / 5% USDC (caps $50 / $100 / $200 per month)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Bank deposit</td>
                  <td className="py-3 text-right font-bold">0.5% Core, 0.25% Prime, free Ultra</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual Account opening</td>
                  <td className="py-3 text-right font-bold">$10 one-time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Crypto deposit</td>
                  <td className="py-3 text-right font-bold">Free on Fuse, 0.1% Ethereum, 0.03% other networks</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Local currency deposit (TransFi)</td>
                  <td className="py-3 text-right font-bold">0.5% Solid fee inside the quote</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Swaps</td>
                  <td className="py-3 text-right font-bold">0.5% Core, 0.25% Prime, free Ultra</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Bank withdrawal</td>
                  <td className="py-3 text-right font-bold">Currently free (tiered fee planned)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Savings performance fee</td>
                  <td className="py-3 text-right font-bold">10% of yield earned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="visa-platinum">
          <H2>Visa Platinum perks</H2>
          <P>
            The Solid Card is issued on the Visa Platinum tier, which adds
            a set of Visa benefits at no extra cost on top of Solid's own
            cashback: purchase protection, price protection, extended
            warranty, and global auto rental insurance, managed through the
            Visa Benefits Portal. These are provided and administered by
            Visa, not Solid, and coverage can vary by region. Nice to have,
            not a reason to choose the card on its own.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Self-custodial: you hold the keys, Solid cannot move funds</li>
                <li>Card is completely free: no issuance, monthly, or top-up fees</li>
                <li>3% to 5% USDC cashback beats the 1.5% FX cost at every tier</li>
                <li>Up to 6% APY on dollars, 15% on FUSE</li>
                <li>Borrow Mode lets you spend while savings keep earning</li>
                <li>Visa Platinum perks included</li>
                <li>16 local currencies for deposits via TransFi</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Prime costs $199/year or a 50,000 FUSE 12-month lock; Ultra needs 400,000 FUSE locked</li>
                <li>Monthly cashback caps ($50/$100/$200) limit heavy spenders</li>
                <li>Cashback paid 14 days after settlement, not instantly</li>
                <li>No published global country list; EU payments still launching</li>
                <li>DeFi yield is variable and carries smart contract risk</li>
                <li>10% performance fee on yield</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="risks">
          <H2>Risks you should know</H2>
          <P>
            <strong className="text-slate-950">DeFi yield risk.</strong>{" "}
            The 6% APY is not bank interest. It comes from DeFi strategies
            that can underperform, and smart contracts can have bugs. Solid
            is audited, but audits are not guarantees. Only keep money in
            Savings that you can afford to have exposed to DeFi.
          </P>
          <P>
            <strong className="text-slate-950">FUSE lockup risk.</strong>{" "}
            Prime and Ultra require locking FUSE for 12 months, during
            which you cannot withdraw it no matter what the token price
            does. 400,000 FUSE for Ultra is a serious commitment. Do the
            math on the token's volatility before you lock.
          </P>
          <P>
            <strong className="text-slate-950">Issuer and region risk.</strong>{" "}
            Your card is issued by Rain or Wirex, and terms follow their
            program. Availability is not global and the EU rollout is
            still in progress. Confirm your country is supported before
            you get attached to the numbers.
          </P>
          <P>
            <strong className="text-slate-950">Tax.</strong>{" "}
            In many countries, spending crypto and earning DeFi yield are
            taxable events. Cashback in USDC may also be taxable income
            where you live. Keep records and talk to a tax professional.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Solid is the rare crypto card where the math genuinely works:
            a free card, cashback that exceeds its own FX fees at every
            tier, yield on idle money, and self-custody throughout. Core
            tier alone, with 3% cashback and no fees to get started, is a
            strong deal for everyday spending. Borrow Mode is a genuinely
            clever answer to spend-without-selling.
          </P>
          <P>
            The honest caveats: the paid tiers demand real money or a big
            FUSE lockup, cashback caps limit heavy spenders, DeFi yield is
            not guaranteed, and availability is still rolling out in some
            regions. If you spend a few hundred dollars a month and want
            custody plus yield, start at Core and see how it fits. Only
            pay for Prime or lock FUSE if your spending actually clears
            the caps.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the Solid Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Solid Card questions</H2>
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
