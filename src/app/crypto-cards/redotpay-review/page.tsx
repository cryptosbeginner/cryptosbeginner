import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/redotpay-review`;

const UPDATED = "17 October 2026";
const UPDATED_ISO = "2026-10-17";
const ORIGINALLY_PUBLISHED = "9 April 2025";
const ORIGINALLY_PUBLISHED_ISO = "2025-04-09";

const REDOTPAY = "https://go.cryptosbeginner.com/RedotPay";

export const metadata: Metadata = {
  title: "RedotPay Review 2026: Fees, Limits & Is It Worth It?",
  description:
    "October 2026 RedotPay review: the crypto card with a $10 virtual card and 1% USD spending fees. Full fee breakdown, KYC steps, limits, ratings, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RedotPay Review 2026: Fees, Limits & Is It Worth It?",
    description:
      "RedotPay's fees, limits, how to get the card, and honest verdict.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/cards/redotpay-card.png`,
        width: 504,
        height: 1024,
        alt: "RedotPay Visa card official product image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RedotPay Review 2026: Fees, Limits & Is It Worth It?",
    description:
      "The crypto debit card reviewed: fees, how it works, and what to watch.",
    images: [`${SITE_URL}/images/cards/redotpay-card.png`],
  },
};

const faqItems = [
  {
    question: "Is RedotPay legit and safe?",
    answer:
      "RedotPay is a real operating company with a growing user base (6M+ users cited in 2026 third-party reviews), PCI DSS 4.0 certification, and about $42M in insurance coverage cited by reviewers. It is custodial and uses Fireblocks for custody, so your crypto sits with them, not in your own wallet. It is a legitimate product, but custodial risk is real and you should only keep spending money there, never your savings.",
  },
  {
    question: "Is RedotPay available in the US?",
    answer:
      "No. RedotPay is available in 100+ countries, but the US is listed as an unsupported country in RedotPay's own Help Center. If you are in the US, you cannot get a RedotPay card at the time of writing.",
  },
  {
    question: "What are RedotPay's fees?",
    answer:
      "The virtual card costs $10 one-time and the physical card costs $100 one-time, with no monthly or annual fee (account maintenance is waived). Spending costs 1% on USD purchases (the crypto conversion fee) and 2.2% on non-USD purchases (1% conversion plus 1.2% FX markup). ATM withdrawals cost 2% on HKD cards and 2% on USD cards up to $10,000 of monthly withdrawals, then 3%. Top-ups are free with on-chain crypto, 3% with a bank card, and 1% with Binance Pay. Small purchases of $1 or less are free for the first 5 per card each month, then $0.20 each. Declined transactions are free for the first 3 per card each month, then $0.50 each. Card spending limits are $100,000 per transaction and $1,000,000 daily. Fees from the official schedule effective December 1, 2025, verified October 2026.",
  },
  {
    question: "Does RedotPay require KYC?",
    answer:
      "Yes, full KYC is required before you can get a card. You go through Sumsub verification with a government-issued ID and a selfie. There is no anonymous or no-KYC route, and anyone telling you otherwise is wrong.",
  },
  {
    question: "Does RedotPay offer cashback?",
    answer:
      "Standard RedotPay cards have no cashback program. Cashback only comes with the paid RedotPay Pro membership, which pays 3% on Apple Pay and Google Pay purchases. If cashback is the reason you want a crypto card and you do not want to pay for Pro, look elsewhere.",
  },
  {
    question: "What is RedotPay Pro?",
    answer:
      "RedotPay Pro is RedotPay's paid membership, launched in June 2026. The monthly plan costs $12.90 a month and includes a free virtual card (the usual $10 issuance fee is waived) plus 3% cashback on Apple Pay and Google Pay purchases. The annual plan costs $129 a year and includes a free physical card (the usual $100 issuance fee is waived), the same 3% cashback, up to $1,000 a month of ATM withdrawals without RedotPay's withdrawal fee, and an extra 1% APY on RedotPay Earn balances where Earn is available. Cashback is paid in USDs, RedotPay's dollar credit for card spending. Membership fees are non-refundable and auto-renew.",
  },
  {
    question: "Is RedotPay Pro worth it?",
    answer:
      "It depends on how you pay. The 3% cashback applies only to Apple Pay and Google Pay purchases, not to physical card swipes or typed-in online payments, and third-party reviewers report it is capped at 18 USDs a month (about $600 of mobile-pay spend). At $12.90 a month, the monthly plan breaks even near $430 of Apple Pay or Google Pay spend a month, and you also skip the $10 virtual card fee. The $129 annual plan makes more sense if you want the free physical card, the $1,000 a month of fee-free ATM withdrawals, or the Earn boost. If you mostly swipe the physical card or spend under a few hundred dollars a month, Pro will cost you more than it pays back.",
  },
  {
    question: "Which countries cannot use RedotPay?",
    answer:
      "RedotPay's Help Center (updated August 2026) lists around 40 unsupported countries and regions where you cannot register or complete KYC, including the United States, Mainland China, Russia, Iran, North Korea, Cuba, Syria, Myanmar, Venezuela, Ukraine, and Belarus. If you are physically located in one of these areas you also cannot access the app at all. The lists can change as regulations evolve, so check RedotPay's Help Center before signing up. RedotPay P2P, meanwhile, is available in 100+ countries and regions; the app shows the current list for your location.",
  },
  {
    question: "Which cryptocurrencies can I spend on RedotPay?",
    answer:
      "RedotPay supports BTC, ETH, USDT, USDC, SOL, and more, across networks including TRC20, ERC20, BEP20, Polygon, Arbitrum, Solana, and Bitcoin. When you pay, your crypto is converted to fiat at the point of sale.",
  },
  {
    question: "Can I use RedotPay with Apple Pay or Google Pay?",
    answer:
      "Yes. RedotPay supports Apple Pay, Google Pay, and Samsung Pay. Apple Pay for newly issued cards was temporarily paused in August 2025, but RedotPay has been restoring it as a free upgrade since January 2026.",
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
      href={REDOTPAY}
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
  { id: "what-is", label: "What RedotPay is" },
  { id: "signup", label: "How to sign up" },
  { id: "kyc", label: "How to complete KYC" },
  { id: "topup", label: "How to top up with crypto" },
  { id: "virtual-card", label: "How to order the virtual card" },
  { id: "physical-card", label: "How to order the physical card" },
  { id: "spend", label: "How to spend with RedotPay" },
  { id: "atm", label: "ATM withdrawals: the weak spot" },
  { id: "fees", label: "Full fee table (verified October 2026)" },
  { id: "pro", label: "RedotPay Pro: is the membership worth it?" },
  { id: "availability", label: "Where RedotPay works (and where it does not)" },
  { id: "video", label: "Video review" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "risks", label: "Risks you should know" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "RedotPay questions" },
];

export default function RedotPayReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RedotPay Review 2026: Fees, Limits & Is It Worth It?",
    description:
      "October 2026 RedotPay review: the crypto card with a $10 virtual card and 1% USD spending fees. Full fee breakdown, KYC steps, limits, ratings, and honest risks.",
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
        name: "Cards",
        item: `${SITE_URL}/crypto-cards`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "RedotPay Review",
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
              RedotPay Review 2026: Fees, Limits &amp; Is It Worth It?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              RedotPay is a crypto debit card that lets you spend your
              crypto anywhere regular cards are accepted. The pitch is
              simple: a $10 virtual card, no monthly fee, and 1% on USD
              spending. I dug through the fee schedule, the user ratings,
              and the fine print so you know exactly what it costs and
              where it falls short. Here is the full picture.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Get the RedotPay card
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
            <strong>Disclosure:</strong> The RedotPay links on this page are
            affiliate links. If you sign up through them, CryptosBeginner
            may earn a commission at no extra cost to you. This does not
            change our assessment criteria or conclusions. This page is
            educational content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/cards/redotpay-app-2025.jpg"
              alt="RedotPay app home screen showing card balance and crypto holdings"
              width={504}
              height={1024}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The RedotPay app home screen with card balance and holdings.
              Captured in 2025; the interface may have changed since.
            </figcaption>
          </figure>

          <figure className="mt-8">
            <Image
              src="/images/cards/redotpay-card.png"
              alt="RedotPay Visa card official product image showing the red virtual card in the app"
              width={889}
              height={1380}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The official RedotPay card artwork from redotpay.com.
            </figcaption>
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">A crypto debit card.</strong>{" "}
                Top up with crypto, spend in fiat. Your coins convert at
                the point of sale.
              </li>
              <li>
                <strong className="text-slate-950">Cheap to get started.</strong>{" "}
                $10 one-time for the virtual card, no monthly or annual fee.
              </li>
              <li>
                <strong className="text-slate-950">Spending fees are honest.</strong>{" "}
                1% on USD purchases, 2.2% on non-USD purchases (verified
                October 2026).
              </li>
              <li>
                <strong className="text-slate-950">Full KYC required.</strong>{" "}
                Government ID plus selfie through Sumsub. This is never a
                no-KYC card.
              </li>
              <li>
                <strong className="text-slate-950">No cashback.</strong>{" "}
                Standard cards earn nothing back, so compare carefully with
                cashback cards.
              </li>
              <li>
                <strong className="text-slate-950">Not for US users.</strong>{" "}
                Available in 100+ countries, but the US is officially
                unsupported.
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
          <H2>What RedotPay is</H2>
          <P>
            RedotPay is a crypto debit card, issued in both virtual and
            physical form. The idea is straightforward: you load the card
            with crypto from your own wallets, and when you tap or swipe,
            RedotPay converts the exact amount to fiat at the moment of
            purchase. To the shop, it looks like a normal card payment.
          </P>
          <P>
            The company has grown fast. Third-party reviews in 2026 put the
            numbers at 6 million plus users and around $10 billion in
            annualized payment volume. On the security side, RedotPay is
            PCI DSS 4.0 certified, keeps custody through Fireblocks, and
            reviewers cite roughly $42 million in insurance coverage. It
            supports BTC, ETH, USDT, USDC, SOL, and more, across networks
            including TRC20, ERC20, BEP20, Polygon, Arbitrum, Solana, and
            Bitcoin.
          </P>
          <P>
            One thing to say plainly up front: RedotPay is custodial. Your
            crypto sits with them once you top up, not in your own wallet.
            That makes it a spending account, not a savings account. Keep
            what you plan to spend there, and keep the rest somewhere you
            control.
          </P>
        </Section>

        <Section id="signup">
          <H2>How to sign up</H2>
          <P>
            Signing up is the easy part. The card itself only unlocks after
            identity verification, which is the next section.
          </P>
          <Steps
            items={[
              "Click the RedotPay link on this page to open the signup page.",
              "Enter your email address and set a password, then confirm the email verification code they send you.",
              "Download the RedotPay app and log in with your new account.",
              "Before verification, you can look around the app, but you cannot order a card or top up yet.",
            ]}
          />
          <div className="mt-7">
            <PrimaryCtaButton>Get the RedotPay card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="kyc">
          <H2>How to complete KYC</H2>
          <P>
            Let me be direct about this, because it comes up a lot: RedotPay
            is not a no-KYC card and never has been. Before you can order
            any card, you complete full identity verification through
            Sumsub. Here is how it goes.
          </P>
          <Steps
            items={[
              "In the app, tap through to the identity verification section to start KYC.",
              "Choose your country and select a government-issued ID: passport, national ID card, or driver's licence.",
              "Photograph the front and back of your ID in good light, making sure every corner is visible.",
              "Take the live selfie check so Sumsub can match your face to the ID.",
              "Submit and wait. Approval usually lands within minutes, though it can take longer if your documents are hard to read.",
            ]}
          />
          <P>
            Higher verification levels unlock higher transaction limits,
            up to $100,000 per transaction and up to $1 million daily for
            the top tier. For most beginners, the basic level is plenty.
          </P>
        </Section>

        <Section id="topup">
          <H2>How to top up with crypto</H2>
          <figure className="mt-6">
            <Image
              src="/images/cards/redotpay-deposit-methods-2025.jpg"
              alt="RedotPay deposit screen showing crypto deposit options"
              width={502}
              height={1024}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              RedotPay deposit options in the app. Captured in 2025; the
              interface may have changed since.
            </figcaption>
          </figure>
          <P>
            Top-ups are where RedotPay is genuinely friendly: on-chain
            crypto deposits are free. You send coins from your own wallet
            to your RedotPay deposit address, and the full amount lands on
            your card balance. No percentage cut, no fixed fee.
          </P>
          <Steps
            items={[
              "Open the app, tap top up, and choose crypto deposit.",
              "Select the asset you want to deposit, for example USDT, and pick the network carefully (TRC20 is the cheap workhorse for USDT).",
              "Copy your RedotPay deposit address or scan the QR code.",
              "Send from your own wallet to that address. Start with a small test amount the first time.",
              "Wait for the network confirmations. Your card balance updates once the deposit is confirmed.",
            ]}
          />
          <P>
            The network you pick matters more than the fee RedotPay charges,
            because RedotPay charges nothing here. Sending USDT over TRC20
            costs a fraction of a dollar, while ERC20 can cost several
            dollars in gas. If you prefer funding from a bank card instead,
            expect a 3% top-up fee, or 1% via Binance Pay.
          </P>
        </Section>

        <Section id="virtual-card">
          <H2>How to order the virtual card</H2>
          <P>
            The virtual card is the way most people start. It costs $10
            one-time, there is no monthly or annual fee, and you can use it
            for online shopping and mobile wallets the moment it is issued.
          </P>
          <Steps
            items={[
              "Finish KYC first. You cannot order any card before verification.",
              "In the app, go to the card section and choose the virtual card.",
              "Pay the $10 one-time issuance fee from your card balance.",
              "Your virtual card details appear immediately. Add it to Apple Pay, Google Pay, or Samsung Pay, or use the card number for online purchases.",
            ]}
          />
          <P>
            A note on Apple Pay: RedotPay paused Apple Pay for newly issued
            cards in August 2025, but it has been restoring it as a free
            upgrade since January 2026. If yours does not link on the first
            try, check for an in-app upgrade option or contact support.
          </P>
        </Section>

        <Section id="physical-card">
          <H2>How to order the physical card</H2>
          <P>
            The physical card costs $100 one-time, again with no monthly or
            annual fee. That is steep for a piece of plastic, so it only
            makes sense if you want in-store taps and ATM access.
          </P>
          <Steps
            items={[
              "Make sure KYC is fully approved and you have a verified address on file.",
              "In the app's card section, choose the physical card option.",
              "Pay the $100 one-time issuance fee from your card balance.",
              "Enter or confirm your shipping address carefully. Double-check it, because re-shipping a card is a hassle.",
              "Wait for delivery, then activate the card in the app when it arrives.",
            ]}
          />
          <P>
            Honestly, most beginners should start with the $10 virtual card
            and see how much they actually use it before spending $100 on
            the physical one. You can always upgrade later.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the RedotPay card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="spend">
          <H2>How to spend with RedotPay</H2>
          <figure className="mt-6">
            <Image
              src="/images/cards/redotpay-transaction-history-2025.jpg"
              alt="RedotPay transaction history list in the app"
              width={499}
              height={1024}
              className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              RedotPay transaction history in the app. Captured in 2025; the
              interface may have changed since.
            </figcaption>
          </figure>
          <P>
            Spending is the part that just works. Once your balance is
            topped up, tap, swipe, or pay online like any debit card. The
            merchant gets paid in their local currency, and RedotPay
            converts your crypto to cover the exact amount at the point of
            sale. Your transaction history in the app shows every payment
            with the conversion details.
          </P>
          <P>
            What you actually pay depends on the currency. USD merchant
            purchases cost 1% on top. Non-USD purchases cost 2.2% total:
            1% crypto conversion plus a 1.2% FX markup. That is the honest
            headline number to remember when comparing cards.
          </P>
        </Section>

        <Section id="atm">
          <H2>ATM withdrawals: the weak spot</H2>
          <P>
            Let me be honest here, because the original review that this
            page builds on flagged it too: ATM withdrawals are RedotPay's
            weak spot. Only the physical card can use ATMs, withdrawals
            cost 2% of the amount on USD cards up to $10,000 of monthly
            withdrawals and 3% above that, and on a non-USD withdrawal the fees can
            stack to around 4.2% all-in once conversion and FX are included.
            On top of that, the ATM operator itself may add its own
            surcharge.
          </P>
          <P>
            If your plan is to live off crypto cash, a 2% haircut every
            time you touch an ATM gets old fast. RedotPay is at its best
            when you tap and pay at the shop counter, not when you pull
            cash out of a machine. Treat ATM use as an emergency option,
            not a daily habit.
          </P>
        </Section>

        <Section id="fees">
          <H2>Full fee table (verified October 2026)</H2>
          <P>
            Every figure below was checked against RedotPay's own published
            fee schedule and 2026 third-party reviews in October 2026.
            Fees can change, so always confirm in the app before you commit
            to the physical card.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/cards/redotpay-fee-schedule-dec-2025.png"
              alt="RedotPay official fee schedule effective December 1, 2025, showing card application fees, transaction fees, and card limits"
              width={640}
              height={965}
              className="mx-auto h-auto w-full max-w-md rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
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
                  <td className="py-3 pr-4">Virtual card issuance</td>
                  <td className="py-3 text-right font-bold">$10 one-time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical card issuance</td>
                  <td className="py-3 text-right font-bold">$100 one-time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual card replacement</td>
                  <td className="py-3 text-right font-bold">$5 first update, $10 each one after</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical card mailing</td>
                  <td className="py-3 text-right font-bold">Standard mail waived, DHL Express varies by country</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Monthly or annual fee</td>
                  <td className="py-3 text-right font-bold">None (account maintenance waived)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">USD merchant purchase</td>
                  <td className="py-3 text-right font-bold">1% crypto conversion fee</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Non-USD merchant purchase</td>
                  <td className="py-3 text-right font-bold">2.2% (1% conversion + 1.2% FX)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal (HKD card)</td>
                  <td className="py-3 text-right font-bold">2%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal (USD card)</td>
                  <td className="py-3 text-right font-bold">2% up to $10,000/mo, then 3%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal limits</td>
                  <td className="py-3 text-right font-bold">3/day, 30/month; $3,750/day, $50,000/month (USD)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Card spending limits</td>
                  <td className="py-3 text-right font-bold">$100,000 per transaction, $1,000,000 daily</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Top-up with crypto (on-chain)</td>
                  <td className="py-3 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Top-up with bank card</td>
                  <td className="py-3 text-right font-bold">3%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Top-up with Binance Pay</td>
                  <td className="py-3 text-right font-bold">1%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Small-transaction fee (purchases of $1 or less)</td>
                  <td className="py-3 text-right font-bold">First 5 per card per month waived, then $0.20 each</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Declined-transaction fee</td>
                  <td className="py-3 text-right font-bold">First 3 per card per month waived, then $0.50 each</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cashback</td>
                  <td className="py-3 text-right font-bold">None on standard cards</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The small-transaction fee deserves a mention: the first 5
            small purchases (each $1.00 or less) per card each month are
            waived, then every one after that costs $0.20. If you use the
            card for lots of small buys, like a daily coffee, those add up
            over a month. It is not a dealbreaker, but it is the kind of
            fee that only shows up in the fine print.
          </P>
          <P>
            Two more details from the December 2025 schedule worth knowing:
            replacing your virtual card costs $5 for the first update and
            $10 for each one after that, and standard-mail delivery of a
            physical card is waived while DHL Express varies by country.
            Note the USD-card ATM limits too: in some countries and
            regions the daily ATM limit drops to $3,000 and the monthly
            limit to $10,000, so check the app before a big cash trip.
          </P>
        </Section>

        <Section id="pro">
          <H2>RedotPay Pro: is the membership worth it?</H2>
          <P>
            In June 2026 RedotPay launched RedotPay Pro, a paid membership
            for people who use the card heavily. It does not change how
            you pay. It trades a monthly or annual fee for cashback,
            waived card fees, and fee-free ATM withdrawals.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Benefit</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Monthly ($12.90/mo)</th>
                  <th className="py-3 text-right font-black text-slate-950">Annual ($129/yr)</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Free card</td>
                  <td className="py-3 pr-4 text-right font-bold">Virtual card fee waived</td>
                  <td className="py-3 text-right font-bold">Physical card fee waived</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Cashback</td>
                  <td className="py-3 pr-4 text-right font-bold">3% on Apple Pay and Google Pay</td>
                  <td className="py-3 text-right font-bold">3% on Apple Pay and Google Pay</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM fee waiver</td>
                  <td className="py-3 pr-4 text-right font-bold">None</td>
                  <td className="py-3 text-right font-bold">First $1,000/mo free of RedotPay&apos;s ATM fee</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Earn boost</td>
                  <td className="py-3 pr-4 text-right font-bold">None</td>
                  <td className="py-3 text-right font-bold">Extra 1% APY on RedotPay Earn (supported regions)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The honest fine print: the 3% cashback applies only to Apple
            Pay and Google Pay purchases, not to physical card swipes or
            manually typed online payments. It is paid in USDs,
            RedotPay&apos;s dollar credit that can only be spent on future
            card purchases, and third-party reviewers report it is capped
            at 18 USDs a month (roughly $600 of mobile-pay spend). The
            membership fee is non-refundable and auto-renews, though you
            can cancel and keep benefits until the period ends.
          </P>
          <P>
            The breakeven math: at $12.90 a month, the monthly plan pays
            for itself near $430 of Apple Pay or Google Pay spend a
            month, and you also skip the $10 virtual card fee. The $129
            annual plan (about $10.75 a month) makes sense if you want the
            free $100 physical card, the $1,000 a month of fee-free ATM
            withdrawals, or the Earn boost. If you mostly swipe the
            physical card or spend a few hundred dollars a month, Pro
            costs more than it returns.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the RedotPay card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="availability">
          <H2>Where RedotPay works (and where it does not)</H2>
          <P>
            RedotPay says its card is available in 100+ countries, but the
            exclusions matter more than the headline. RedotPay&apos;s Help
            Center (updated August 2026) lists the countries and regions
            where you cannot register or complete KYC: Afghanistan,
            Albania, Belarus, Bosnia and Herzegovina, Bouvet Island,
            Burkina Faso, Burundi, Central African Republic, DR Congo,
            Croatia, Cuba, Eritrea, Ethiopia, Guinea-Bissau, Haiti, Iran,
            Iraq, Kosovo, Lebanon, Liberia, Libya, Mainland China, Mali,
            Montenegro, Myanmar, Netherlands Antilles, Nicaragua, North
            Korea, North Macedonia, Russia, Serbia, Slovenia, Somalia,
            South Sudan, Sudan, Syria, Ukraine, the United States,
            Venezuela, Yemen, and Zimbabwe.
          </P>
          <P>
            There is a second, overlapping list for location-based access:
            if you are physically located in one of the restricted areas,
            you cannot open the app at all. That list is nearly identical
            and adds Tanzania. The key point for travelers: it is not
            just about where your account was opened, it is about where
            you are standing. RedotPay says the lists are updated as
            regulations evolve, with changes announced in-app or by email.
          </P>
          <P>
            RedotPay P2P, the in-app peer-to-peer marketplace for buying
            and selling stablecoins, is available in 100+ countries and
            regions, including Argentina, Australia, Austria, Bahrain,
            Bangladesh, Belgium, the UAE, and many more. The full current
            list lives in your RedotPay app: if P2P shows up for your
            location, you can start an order.
          </P>
          <P>
            Bottom line: if you are in the US, Mainland China, or any
            sanctioned jurisdiction, RedotPay is not an option. Everyone
            else should still confirm their country in the app before
            paying any card fee, because issuance and delivery can have
            their own narrower restrictions.
          </P>
        </Section>

        <Section id="video">
          <H2>Video review</H2>
          <P>
            Prefer to watch? Here is our video walkthrough of the RedotPay
            card, covering signup, fees, and how spending actually works.
          </P>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/2O_USW7j83U"
                title="RedotPay card video review"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how RedotPay
            scores on public platforms. These are third-party ratings,
            checked in October 2026, and they move over time.
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
                  <td className="py-3 pr-4 text-right font-bold">~3 out of 5 (~800 reviews, mixed)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">4.5 out of 5 (68K+ reviews)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">4.8 out of 5 (3,700+ ratings)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The pattern is familiar for crypto cards: app users are mostly
            happy with the day-to-day product, while the smaller Trustpilot
            sample skews lower with complaints concentrated on support
            response times and the occasional blocked transaction. Read the
            negative reviews before you top up a large amount.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>$10 virtual card, no monthly or annual fee</li>
                <li>Free on-chain crypto top-ups</li>
                <li>1% fee on USD spending is genuinely competitive</li>
                <li>100+ countries supported</li>
                <li>Apple Pay, Google Pay, and Samsung Pay support</li>
                <li>PCI DSS 4.0 certified with Fireblocks custody</li>
                <li>RedotPay Pro adds 3% Apple Pay and Google Pay cashback for heavy users</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>No cashback on standard cards (Pro membership required)</li>
                <li>Physical card costs $100 one-time</li>
                <li>2% ATM fee, weak for cash users</li>
                <li>Small-transaction and declined-transaction fees add up</li>
                <li>Full KYC required, never a no-KYC option</li>
                <li>Not available in the US</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="risks">
          <H2>Risks you should know</H2>
          <P>
            <strong className="text-slate-950">Custodial risk.</strong>{" "}
            Once your crypto is on RedotPay, it is in their custody. If the
            company has problems, your balance has problems. Only keep what
            you plan to spend, and keep your savings in a wallet you
            control.
          </P>
          <P>
            <strong className="text-slate-950">Tax.</strong>{" "}
            In many countries, spending crypto is a taxable disposal. Every
            tap of the card can be a reportable event, which means keeping
            records. Check your local rules or talk to a tax professional
            before making the card your daily driver.
          </P>
          <P>
            <strong className="text-slate-950">Fees stack up.</strong>{" "}
            1% here, 2.2% there, $0.20 on small swipes, 2% at ATMs. Each
            one is small, but a heavy user who taps for everything and
            pulls cash regularly will feel the total. Run your own numbers
            against how you actually spend.
          </P>
          <P>
            <strong className="text-slate-950">Blocked transactions.</strong>{" "}
            Like every card in this space, payments can occasionally be
            declined or flagged, and support response times get mixed
            reviews. Keep a backup payment method when you travel.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            RedotPay is a solid, honest crypto card for what it is: a cheap
            way to spend crypto on everyday purchases. The $10 virtual card
            is a low-risk way to try it, free on-chain top-ups keep your
            money whole until the moment you spend, and 1% on USD
            purchases is fair. The honest caveats are the no-cashback
            policy, the expensive physical card, the weak ATM story, and
            the nickel-and-dime small transaction fees.
          </P>
          <P>
            If you spend mostly in dollars and pay at the counter rather
            than at the cash machine, RedotPay is genuinely worth a look.
            If you are in the US, want cashback, or live at the ATM, keep
            looking.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Get the RedotPay card</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>RedotPay questions</H2>
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
