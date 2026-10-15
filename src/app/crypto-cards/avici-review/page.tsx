import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/avici-review`;

const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

const AVICI = "https://invite.avici.money/mppwqz";

export const metadata: Metadata = {
  title: "Avici Card Review 2026: Fees, Countries & Is It Worth It?",
  description:
    "October 2026 Avici Card review: the self-custodial secured Visa credit card with 0% APR. Full fee breakdown, 50+ supported countries, how the collateral works, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Avici Card Review 2026: Fees, Countries & Is It Worth It?",
    description:
      "Avici's self-custodial Visa card reviewed: fees, countries, collateral, and honest verdict.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/cards/reviews/avici-physical-card.png`,
        width: 631,
        height: 424,
        alt: "Avici physical Visa card official product image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avici Card Review 2026: Fees, Countries & Is It Worth It?",
    description:
      "The self-custodial crypto credit card reviewed: fees, how it works, and what to watch.",
    images: [`${SITE_URL}/images/cards/reviews/avici-physical-card.png`],
  },
};

const faqItems = [
  {
    question: "Is the Avici Card legit and safe?",
    answer:
      "Avici is a real operating company with published card terms (last updated 20 June 2025) and a card program issued by Third National under license from Visa. The self-custodial design means Avici and the issuer cannot move your collateral except to settle your card charges. That said, it is a young product in a fast-moving space: only keep spending money in the collateral contract, never your life savings.",
  },
  {
    question: "What does the Avici Card cost?",
    answer:
      "The virtual Platinum card costs $15 for the first card ($10 for each additional card, no recurring charges). The virtual Signature costs $30 for the first year, then $20 per year. The physical Platinum costs $50 one-time, and the physical Signature costs $75 plus $20 per year from the second year. Transaction fees are $0, forex markup is 0% (Visa may charge 0.4-1% cross-border on non-USD), and APR on purchases is currently 0%. ATM withdrawals on Platinum cost $1 + 0.65% per withdrawal; Signature has $0 ATM fees. Figures verified October 2026 from Avici's official docs.",
  },
  {
    question: "Where is the Avici Card available?",
    answer:
      "Avici publishes an authorized-countries list covering 50+ countries, including Pakistan, UAE, Argentina, Brazil, Mexico, Philippines, South Africa, Singapore, Australia, Japan, and selected US states. It is NOT available to residents of India, China, Russia, Turkey, Iran, and several others on the prohibited list. US citizens must attest to non-US status when applying. The list can change at Avici's discretion, so check it before applying.",
  },
  {
    question: "How does the Avici Card collateral work?",
    answer:
      "You deposit USDC into a self-custodial Loan Escrow smart contract on Ethereum, Polygon, Optimism, or Arbitrum. Your own wallet owns the contract. Avici creates a matching USD credit balance, and your spending limit equals the USD value of your collateral. When you spend, only the spent amount is settled from collateral. If your collateral value drops below your outstanding charges and you do not top up, a liquidation event can occur.",
  },
  {
    question: "Does the Avici Card require KYC?",
    answer:
      "Yes. Identity verification is required before you can get a card, and applicants must attest that they are not US citizens. There is no anonymous route.",
  },
  {
    question: "Does the Avici Card offer cashback?",
    answer:
      "No. Avici does not advertise any cashback or rewards program in its official terms or docs. The pitch is 0% APR and self-custody, not rewards.",
  },
  {
    question: "Can I use the Avici Card with Apple Pay or Google Pay?",
    answer:
      "Avici's homepage shows tap-to-pay by adding the card to Apple Pay or Google Pay for offline shopping. Confirm in the app whether this is live for your card type and region.",
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
      href={AVICI}
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
  { id: "what-is", label: "What the Avici Card is" },
  { id: "how-it-works", label: "How the collateral works" },
  { id: "signup", label: "How to sign up" },
  { id: "kyc", label: "How to complete verification" },
  { id: "funding", label: "How to fund with USDC" },
  { id: "cards", label: "Card options and prices" },
  { id: "spend", label: "How to spend with Avici" },
  { id: "atm", label: "ATM withdrawals" },
  { id: "fees", label: "Full fee table (verified October 2026)" },
  { id: "countries", label: "Where it is available" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "risks", label: "Risks you should know" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Avici Card questions" },
];

export default function AviciReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Avici Card Review 2026: Fees, Countries & Is It Worth It?",
    description:
      "October 2026 Avici Card review: the self-custodial secured Visa credit card with 0% APR. Full fee breakdown, 50+ supported countries, how the collateral works, and honest risks.",
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
        name: "Avici Card Review",
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
              Updated {UPDATED} · By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Avici Card Review 2026: Fees, Countries &amp; Is It Worth It?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              The Avici Card is a secured Visa credit card with a twist: you
              lock USDC in a smart contract you own, and Avici gives you a
              matching credit line at 0% APR. No selling your crypto, no
              custodian holding your keys. I read the actual card terms and
              the official docs so you get real numbers, not marketing
              promises. Here is the full picture.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Get the Avici Card
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
            <strong>Disclosure:</strong> The Avici links on this page are
            affiliate links. If you sign up through them, CryptosBeginner
            may earn a commission at no extra cost to you. This does not
            change our assessment criteria or conclusions. This page is
            educational content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/cards/reviews/avici-physical-card.png"
              alt="Avici physical Visa card backed by USDC collateral"
              width={631}
              height={424}
              className="mx-auto h-auto w-full max-w-md rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The Avici physical Visa card backed by USDC collateral in a self-custodial smart contract.
            </figcaption>
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">A secured credit card, not a debit card.</strong>{" "}
                You lock USDC as collateral and get a matching USD credit line.
              </li>
              <li>
                <strong className="text-slate-950">Self-custodial.</strong>{" "}
                Your wallet owns the escrow smart contract. Avici cannot move
                your funds except to settle what you spent.
              </li>
              <li>
                <strong className="text-slate-950">0% APR on purchases.</strong>{" "}
                No interest charges at the time of writing, per the official
                card terms.
              </li>
              <li>
                <strong className="text-slate-950">Honest card prices.</strong>{" "}
                Virtual from $15 one-time, physical from $50 one-time. No
                monthly fee on Platinum tiers.
              </li>
              <li>
                <strong className="text-slate-950">50+ countries.</strong>{" "}
                Including Pakistan, UAE, and much of LatAm, Africa, and Asia.
                India, China, Russia, and Turkey are excluded.
              </li>
              <li>
                <strong className="text-slate-950">No cashback.</strong>{" "}
                The pitch is custody and 0% APR, not rewards.
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
          <H2>What the Avici Card is</H2>
          <P>
            Most crypto cards are debit cards: you top up, they convert, you
            spend. Avici does it differently. It is a secured credit card on
            the Visa network. You deposit USDC into a Loan Escrow smart
            contract, Avici creates a matching USD credit balance, and you
            spend against that credit line. Your crypto is never sold to
            fund a purchase; it sits as collateral backing your spending.
          </P>
          <P>
            The key word is self-custodial. The escrow contract is owned by
            your own wallet, not by Avici. Avici and the card issuer, Third
            National, can only settle the exact amounts you charged. They
            cannot move, freeze, or rehypothecate your collateral for any
            other purpose. That is a meaningful difference from custodial
            cards where your top-up sits on someone else's balance sheet.
          </P>
          <P>
            The card program runs under license from Visa, and the official
            card terms were last updated on 20 June 2025. Everything below
            comes from those terms and Avici's official docs, verified in
            October 2026.
          </P>
        </Section>

        <Section id="how-it-works">
          <H2>How the collateral works</H2>
          <figure className="mt-6">
            <Image
              src="/images/cards/reviews/avici-app-flow.png"
              alt="Avici app showing the card setup flow, official image from avici.money"
              width={786}
              height={1704}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              Setting up the Avici Card in the app: connect your wallet, deposit USDC as collateral, and activate your Visa.
            </figcaption>
          </figure>
          <P>
            Here is the mechanics in plain English. You connect your wallet
            and deposit USDC into the escrow contract on Ethereum, Polygon,
            Optimism, or Arbitrum. Avici reads the USD value of that
            collateral and sets your spending limit to match. Deposit $1,000
            in USDC, get roughly $1,000 in spending power.
          </P>
          <P>
            When you tap the card at a shop, the purchase draws down your
            credit balance, and the contract settles only that amount. The
            rest of your collateral stays untouched in your contract. Top up
            more USDC any time to raise your limit.
          </P>
          <P>
            The part to understand is liquidation. If the market value of
            your collateral drops below your outstanding charges and you do
            not add more, a liquidation event can occur: Avici or the issuer
            may liquidate enough collateral to cover what you owe. With USDC
            collateral this is unlikely to move much, but it is not
            impossible, and the terms give them the right. Keep a buffer.
          </P>
        </Section>

        <Section id="signup">
          <H2>How to sign up</H2>
          <P>
            Signup starts on the Avici website or in the app. You will need
            a wallet to connect for the collateral contract later, but the
            account itself begins with the usual details.
          </P>
          <Steps
            items={[
              "Click the Avici link on this page to open the official signup.",
              "Create your Avici account with your email and follow the onboarding steps.",
              "Download the Avici app and log in.",
              "Complete identity verification before you can order any card (next section).",
            ]}
          />
          <div className="mt-7">
            <PrimaryCtaButton>Get the Avici Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="kyc">
          <H2>How to complete verification</H2>
          <P>
            Direct answer first: Avici requires identity verification, and
            every applicant must attest that they are not a US citizen. The
            card is not available to US persons, full stop. Do not try to
            work around this; the attestation is part of the binding card
            terms.
          </P>
          <Steps
            items={[
              "In the app, start the identity verification flow.",
              "Provide a government-issued ID and complete the liveness or selfie check.",
              "Confirm the non-US-citizen attestation when asked.",
              "Wait for approval. You cannot order a card or open the escrow contract until verification passes.",
            ]}
          />
        </Section>

        <Section id="funding">
          <H2>How to fund with USDC</H2>
          <P>
            Funding means depositing USDC into your escrow contract. This is
            the step that sets your spending limit, so it deserves care.
          </P>
          <Steps
            items={[
              "Connect your wallet in the Avici app (Ethereum, Polygon, Optimism, or Arbitrum).",
              "Open the escrow or collateral section and choose deposit.",
              "Send USDC to the contract address shown. Start with a small test amount the first time.",
              "Once confirmed, your spending limit updates to reflect the collateral value.",
              "Add more USDC any time to raise the limit. Withdraw excess collateral when you have no outstanding charges.",
            ]}
          />
          <P>
            Remember the network you use affects gas costs, not Avici's
            fees. Avici charges no gas fee itself per the terms, but the
            underlying blockchain does. Polygon or Arbitrum will cost you
            cents; Ethereum mainnet can cost dollars.
          </P>
        </Section>

        <Section id="cards">
          <H2>Card options and prices</H2>
          <figure className="mt-6">
            <Image
              src="/images/cards/reviews/avici-card-front.png"
              alt="Avici card design, official image from avici.money"
              width={800}
              height={1530}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              Avici Card design showing the secured Visa credit card linked to your self-custodial crypto wallet.
            </figcaption>
          </figure>
          <P>
            Avici offers virtual and physical cards in two tiers, Platinum
            and Signature. Prices come straight from the official docs fee
            page, verified October 2026.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Card</th>
                  <th className="py-3 text-right font-black text-slate-950">Price</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual Platinum, first card</td>
                  <td className="py-3 text-right font-bold">$15 one-time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual Platinum, additional cards</td>
                  <td className="py-3 text-right font-bold">$10 one-time, no recurring</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual Signature</td>
                  <td className="py-3 text-right font-bold">$30 first year, then $20/year</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical Platinum</td>
                  <td className="py-3 text-right font-bold">$50 one-time, no recurring</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical Signature</td>
                  <td className="py-3 text-right font-bold">$75, then $20/year from second year</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical delivery (untracked)</td>
                  <td className="py-3 text-right font-bold">Free, 3 to 4 weeks</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical delivery (priority, tracked)</td>
                  <td className="py-3 text-right font-bold">$50 international, $15 US, 1 to 2 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The Platinum virtual at $15 one-time with no recurring charges
            is the sensible starting point. Only consider Signature if you
            specifically want its tier benefits, and only buy the physical
            card if you need in-store taps and ATM access.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the Avici Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="spend">
          <H2>How to spend with Avici</H2>
          <P>
            Spending works like any Visa credit card. Tap, insert, or pay
            online wherever Visa is accepted. The merchant is paid in fiat,
            and your credit balance is drawn down by the purchase amount.
            Avici advertises tap-to-pay through Apple Pay and Google Pay for
            offline shopping; confirm in the app that it is live for your
            card and region.
          </P>
          <P>
            On costs: transaction fees are $0 and the forex markup is 0%.
            The honest footnote is that Visa itself may charge a small
            0.4% to 1% cross-border fee on non-USD transactions, which is
            standard across Visa cards and outside Avici's control. The
            card terms list maximums of up to 3% foreign exchange fee
            (currently 1%) and up to 3% cross-border fee (currently 0%),
            so the real-world cost today is low.
          </P>
        </Section>

        <Section id="atm">
          <H2>ATM withdrawals</H2>
          <P>
            Only the physical card works at ATMs. Platinum withdrawals cost
            $1 plus 0.65% per transaction, with a $1,000 per-transaction
            limit, $3,000 per day, and 3 transactions per day. Signature
            cardholders pay $0 in ATM fees. Declined ATM transactions are
            not charged, unlike some competitors.
          </P>
          <P>
            Like most crypto cards, Avici is better as a spending card than
            a cash machine. The ATM fees are reasonable but the limits are
            modest, so plan accordingly.
          </P>
        </Section>

        <Section id="fees">
          <H2>Full fee table (verified October 2026)</H2>
          <P>
            Every figure below comes from Avici's official card terms (last
            updated 20 June 2025) and the official docs fee page, checked
            in October 2026. Terms can change; confirm in the app before
            you apply.
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
                  <td className="py-3 pr-4">APR on purchases</td>
                  <td className="py-3 text-right font-bold">0%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Transaction fee</td>
                  <td className="py-3 text-right font-bold">$0</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Forex markup</td>
                  <td className="py-3 text-right font-bold">0% (Visa may charge 0.4-1% cross-border on non-USD)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Foreign exchange fee (max / current)</td>
                  <td className="py-3 text-right font-bold">Up to 3% / currently 1%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cross-border fee (max / current)</td>
                  <td className="py-3 text-right font-bold">Up to 3% / currently 0%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal, Platinum</td>
                  <td className="py-3 text-right font-bold">$1 + 0.65% per withdrawal</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal, Signature</td>
                  <td className="py-3 text-right font-bold">$0</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM limits</td>
                  <td className="py-3 text-right font-bold">$1,000/txn, $3,000/day, 3 txns/day</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Late payment</td>
                  <td className="py-3 text-right font-bold">$0 to $40</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Returned payment</td>
                  <td className="py-3 text-right font-bold">Up to $29</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Liquidation penalty</td>
                  <td className="py-3 text-right font-bold">Up to $35 (not currently applied)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cashback</td>
                  <td className="py-3 text-right font-bold">None advertised</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="countries">
          <H2>Where it is available</H2>
          <P>
            Avici publishes an authorized-countries list and reserves the
            right to change it. At the time of writing it covers 50+
            countries, including Pakistan, the UAE, Argentina, Brazil,
            Mexico, the Philippines, South Africa, Singapore, Australia,
            Japan, Egypt, and selected US states. That is a genuinely broad
            list for a crypto card.
          </P>
          <P>
            The prohibited list matters just as much: residents of India,
            mainland China, Russia, Turkey, Iran, Belarus, Cuba, North
            Korea, Syria, Ukraine, Venezuela, Vietnam, and several others
            cannot get the card. And to repeat the big one: US citizens
            must attest to non-US status. If that describes you, stop here.
          </P>
          <P>
            Jurisdictions not mentioned on either list may still be
            restricted. Check the current list on Avici's docs before you
            apply, because it changes.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Self-custodial: your wallet owns the collateral contract</li>
                <li>0% APR on purchases at the time of writing</li>
                <li>$0 transaction fees, 0% forex markup</li>
                <li>Virtual card from $15 one-time, no recurring fee on Platinum</li>
                <li>50+ supported countries</li>
                <li>Spend without selling your crypto</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>No cashback or rewards of any kind</li>
                <li>Not available to US citizens, India, China, Russia, Turkey, and others</li>
                <li>Liquidation risk if collateral value drops below charges</li>
                <li>Physical card costs $50 to $75</li>
                <li>Young product; terms give Avici broad rights to change the deal</li>
                <li>Full KYC required, never anonymous</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="risks">
          <H2>Risks you should know</H2>
          <P>
            <strong className="text-slate-950">Liquidation risk.</strong>{" "}
            This is the one unique to Avici. Your spending limit tracks
            your collateral value. If that value falls below what you owe
            and you do not top up, they can liquidate collateral to cover
            it. With USDC this is a tail risk, not a daily worry, but
            understand it before you lock up funds.
          </P>
          <P>
            <strong className="text-slate-950">Smart contract risk.</strong>{" "}
            Self-custody removes the custodian but not the code risk. The
            escrow contract is only as safe as its code and the chain it
            runs on. This is true of all DeFi, but it applies here too.
          </P>
          <P>
            <strong className="text-slate-950">Tax.</strong>{" "}
            Spending against crypto collateral can have tax consequences
            depending on your jurisdiction, and liquidation events even
            more so. Talk to a tax professional before making this your
            daily card.
          </P>
          <P>
            <strong className="text-slate-950">Terms can change.</strong>{" "}
            The card terms explicitly reserve Avici's and the issuer's
            right to amend terms, add fees, or change the country list at
            any time. Today's 0% APR and today's country list are not
            promises about tomorrow.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            The Avici Card is the most interesting secured crypto card I
            have reviewed: real self-custody, 0% APR, honest card prices,
            and a 50+ country list. If you hold USDC and want to spend
            without selling, and you live in a supported country that is
            not the US, it is genuinely worth a look. Start with the $15
            virtual Platinum and see how it fits your life.
          </P>
          <P>
            The honest caveats: no cashback, liquidation risk is real even
            if unlikely with USDC, the product is young, and the excluded
            country list is long. If you want rewards, look at cashback
            cards instead. If you are in the US, India, or Turkey, this
            card is not for you.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the Avici Card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Avici Card questions</H2>
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
