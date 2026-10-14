import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/tevau-review`;

const UPDATED = "14 October 2026";
const UPDATED_ISO = "2026-10-14";
const ORIGINALLY_PUBLISHED = "11 July 2025";
const ORIGINALLY_PUBLISHED_ISO = "2025-07-11";

const TEVAU = "https://go.cryptosbeginner.com/Tevau";

export const metadata: Metadata = {
  title: "Tevau Card Review 2026: Fees, Availability & Is It Worth It?",
  description:
    "October 2026 Tevau review: the USDT-funded Visa card with tiers from a $20 virtual card to a $499 24K gold card. Honest fees, the August 2026 availability changes, and the real risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Tevau Card Review 2026: Fees, Availability & Is It Worth It?",
    description:
      "Tevau's card tiers, fees, availability changes, and honest risks, reviewed for beginners.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/cards/tevau-virtual-card-2025.jpg`,
        width: 1747,
        height: 1080,
        alt: "Tevau app virtual card ordering screen showing the card tier options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tevau Card Review 2026: Fees, Availability & Is It Worth It?",
    description:
      "The USDT-funded crypto card reviewed: fees, availability, and what to watch.",
    images: [`${SITE_URL}/images/cards/tevau-virtual-card-2025.jpg`],
  },
};

const faqItems = [
  {
    question: "Is Tevau available in my country?",
    answer:
      "Tevau claims 180 to 200-plus countries supported, but check before you count on it. In August 2026 it removed virtual cards for Algeria, Egypt, and Turkey over Visa compliance issues, US residents cannot currently onboard (an already-issued card still works when you travel in the US), and users have reported problems in Bangladesh and Thailand. Availability moves, so confirm your country inside the app before you fund anything.",
  },
  {
    question: "Why did Tevau remove virtual cards for Algeria, Egypt, and Turkey?",
    answer:
      "Tevau points to Visa compliance requirements. The practical effect is that new users in those countries can no longer order a virtual card, and existing users should check whether their card still works before relying on it. It is a reminder that any crypto card's availability can change when card-network rules shift.",
  },
  {
    question: "What does the Tevau card cost?",
    answer:
      "Issuance costs $20 for the virtual card, $100 for the plastic physical card, $199 for the metal card, and $499 for the 24K gold card, with no monthly or annual fee on any tier. Usage fees, verified October 2026 and approximate: about 1% to top up, 1.2% FX on currency conversion, 1.9% on ATM withdrawals, and a $3 inactivity fee after 90 consecutive days of no activity.",
  },
  {
    question: "Do I have to verify my identity to use Tevau?",
    answer:
      "Yes. KYC is mandatory on Tevau: a government-issued ID plus a selfie, with a liveness check in the app. There is no lite tier and no anonymous option, and that is not expected to change.",
  },
  {
    question: "Which crypto can I load onto Tevau?",
    answer:
      "USDT and USDC. If your crypto is in anything else, convert it to USDT on an exchange first, then send it to your Tevau deposit address. Always send a small test amount before the full top-up.",
  },
  {
    question: "Is Tevau safe to use?",
    answer:
      "Tevau is a Hong Kong company that launched in 2024, and its Bank of Canada PSP registration was approved in August 2026. That is a registration, not a guarantee of your funds. The card is custodial, so your balance sits with Tevau, not in your own wallet. Keep spending money on the card, not savings, and note the public review base is thin, with Google Play showing about 3.4 out of 5.",
  },
  {
    question: "Does Tevau offer cashback?",
    answer:
      "No. Tevau has no cashback or rewards program. What it does offer is Tevau Earn: up to 4.49% APR on idle USDT, which is promotional and comes with conditions, so read the terms before counting on the rate.",
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
      href={TEVAU}
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
  { id: "what-is", label: "What Tevau is (and is not)" },
  { id: "availability", label: "Availability: the part that changed" },
  { id: "signup", label: "How to sign up" },
  { id: "kyc", label: "How to complete KYC" },
  { id: "topup", label: "How to top up with USDT" },
  { id: "order", label: "How to order your card" },
  { id: "spend", label: "How to spend with the card" },
  { id: "atm", label: "ATM withdrawals" },
  { id: "fees", label: "Fees, verified October 2026" },
  { id: "video", label: "Video review" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "risks", label: "Risks and honest caveats" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Tevau questions" },
];

export default function TevauReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tevau Card Review 2026: Fees, Availability & Is It Worth It?",
    description:
      "October 2026 Tevau review: the USDT-funded Visa card with tiers from a $20 virtual card to a $499 24K gold card. Honest fees, the August 2026 availability changes, and the real risks.",
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
        name: "Crypto Cards",
        item: `${SITE_URL}/crypto-cards`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tevau Review",
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
              Tevau Card Review 2026: Fees, Availability &amp; Is It Worth It?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Tevau is a Hong Kong-based crypto card that lets you load
              USDT or USDC and spend it like a normal Visa card, with
              tiers from a $20 virtual card up to a $499 24K gold card and
              no monthly fee. The honest story: the fees are reasonable,
              but availability moved in 2026, so check your country before
              anything else.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit Tevau
              </PrimaryCtaButton>

              <Link
                href="/crypto-cards"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Compare crypto cards
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Disclosure:</strong> The Tevau links on this page are
            affiliate links. If you sign up through them, CryptosBeginner
            may earn a commission at no extra cost to you. This does not
            change our assessment criteria or conclusions. This page is
            educational content, not financial advice. Images marked
            historical are from the 2025 review; current figures were
            verified in October 2026.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/cards/tevau-virtual-card-2025.jpg"
              alt="Tevau app virtual card ordering screen showing the card tier options"
              width={1747}
              height={1080}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-sm leading-6 text-slate-500">
              Historical image from 2025: Tevau&apos;s virtual card order
              flow. Fees and availability have changed since; current
              figures are verified October 2026.
            </figcaption>
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">Availability changed in 2026.</strong>{" "}
                Virtual cards were removed for Algeria, Egypt, and Turkey
                around August 2026. Confirm your country in the app before
                you fund anything.
              </li>
              <li>
                <strong className="text-slate-950">USDT-first Visa card.</strong>{" "}
                Load USDT or USDC, spend like a normal debit card in
                stores, online, and at ATMs.
              </li>
              <li>
                <strong className="text-slate-950">Four tiers, no monthly fee.</strong>{" "}
                $20 virtual, $100 plastic, $199 metal, $499 24K gold. No
                monthly or annual fee on any tier.
              </li>
              <li>
                <strong className="text-slate-950">Fair usage fees.</strong>{" "}
                About 1% to top up, 1.2% FX on conversion, 1.9% at ATMs,
                and a $3 inactivity fee after 90 days idle.
              </li>
              <li>
                <strong className="text-slate-950">KYC is mandatory.</strong>{" "}
                Government ID plus a selfie. No anonymous option.
              </li>
              <li>
                <strong className="text-slate-950">Extras and limits.</strong>{" "}
                Earn up to 4.49% APR on idle USDT (promotional, conditions
                apply). Reviewers report spending limits up to $3M daily
                and monthly, though Tevau does not publish these.
              </li>
              <li>
                <strong className="text-slate-950">Thin review base.</strong>{" "}
                Google Play shows about 3.4 out of 5 from a few hundred
                ratings, and there is no Trustpilot listing. Judge it on
                the terms, not the crowd.
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
          <H2>What Tevau is (and is not)</H2>
          <P>
            Tevau is a crypto debit card from a Hong Kong company that
            launched in 2024. You load it with USDT or USDC, and it spends
            like a normal Visa card: in stores, online, and at ATMs. It is
            not a bank account and not an exchange. It is a way to spend
            stablecoins in the real world without cashing out to fiat
            first.
          </P>
          <P>
            The card comes in four tiers: a $20 virtual card, a $100
            plastic physical card, a $199 metal card, and a $499 24K gold
            card. There is no monthly or annual fee on any of them, which
            is genuinely good in a market where premium metal cards often
            carry yearly charges. The product is aimed squarely at crypto
            natives who already hold USDT and want to spend it directly.
          </P>
          <P>
            On the regulatory side, Tevau&apos;s Bank of Canada PSP
            (payment service provider) registration was approved in August
            2026. That is a registration, not a guarantee of your funds,
            and it does not change the custodial reality of the product,
            which we cover in the risks section below.
          </P>
        </Section>

        <Section id="availability">
          <H2>Availability: the part that changed</H2>
          <P>
            This is the section that matters most, because it changed.
            Tevau advertises availability in 180 to 200-plus countries, but
            that headline number hides the details. Here is the honest
            picture, using a simple three-state model: available,
            unavailable, unclear.
          </P>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong className="text-slate-950">Unavailable: Algeria, Egypt, Turkey.</strong>{" "}
              Virtual cards were removed for these three countries around
              August 2026. Tevau cites Visa compliance requirements. If you
              are in one of these countries, do not plan around a Tevau
              virtual card until the situation is confirmed in the app.
            </li>
            <li>
              <strong className="text-slate-950">Unavailable for onboarding: United States.</strong>{" "}
              US residents cannot currently sign up. An already-issued
              card still works when you travel in the US, but you cannot
              create an account from there.
            </li>
            <li>
              <strong className="text-slate-950">Unclear: Bangladesh, Thailand.</strong>{" "}
              Community reports describe problems for users in these
              countries. We could not independently confirm whether these
              are temporary, account-specific, or policy-level, so treat
              them as unconfirmed.
            </li>
          </ul>
          <P>
            What this means for you: check your country inside the Tevau
            app before you fund anything, and treat availability as
            something that can change. The August 2026 removals prove that
            card-network rules can pull a product from a country with
            little warning. If Tevau is your only way to spend crypto,
            that is a risk worth planning around.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/cards/tevau-availability-2025.jpg"
              alt="Tevau app country availability list from 2025, before virtual cards were removed for Algeria, Egypt, and Turkey"
              width={1842}
              height={1080}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm leading-6 text-slate-500">
              Historical image from 2025: Tevau&apos;s availability list
              before the August 2026 removals. Do not rely on it for
              current coverage.
            </figcaption>
          </figure>
        </Section>

        <Section id="signup">
          <H2>How to sign up</H2>
          <P>
            Signing up is straightforward, but do it in the right order:
            confirm your country first, verify your identity second, and
            only then think about funding the account.
          </P>
          <Steps
            items={[
              "Go to Tevau's site or download the Tevau app and start a new account with your email or phone number.",
              "Set a strong password, and turn on two-factor authentication if the app offers it.",
              "Confirm your country of residence carefully, because availability and card options depend on it.",
              "Do not fund the account until you have completed KYC and confirmed your country is supported.",
            ]}
          />
          <div className="mt-7">
            <PrimaryCtaButton>Visit Tevau</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="kyc">
          <H2>How to complete KYC</H2>
          <P>
            KYC is mandatory on Tevau. There is no lite tier and no
            anonymous option, so have a government-issued ID and your
            phone ready before you start.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/cards/tevau-kyc-2025.jpg"
              alt="Tevau app KYC verification flow showing the identity document upload steps"
              width={1943}
              height={1080}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <Steps
            items={[
              "In the app, open the verification section and select your country and ID type.",
              "Photograph the front and back of your government ID in good light. Blurry photos are the most common reason for delays.",
              "Take a live selfie when prompted and follow the liveness check instructions on screen.",
              "Submit and wait for approval, then confirm your verification status in the app before ordering a card.",
            ]}
          />
        </Section>

        <Section id="topup">
          <H2>How to top up with USDT</H2>
          <P>
            Tevau is USDT and USDC first. If your crypto is in anything
            else, convert it to USDT on an exchange first, then send it to
            your Tevau deposit address. Always send a small test amount
            before the full top-up: a wrong network means lost funds.
          </P>
          <Steps
            items={[
              "In the app, open the top-up or deposit section and select USDT (or USDC) plus the network you will send on.",
              "Copy your Tevau deposit address, and make sure the network matches the one you are sending from.",
              "Send a small test amount from your exchange or wallet and wait for it to arrive.",
              "Once the test lands, send the rest. Remember the top-up fee is about 1%.",
            ]}
          />
        </Section>

        <Section id="order">
          <H2>How to order your card</H2>
          <P>
            You can start with a virtual card for online spending, then
            add a physical card later for in-store and ATM use. Virtual
            costs $20, plastic physical $100, metal $199, and 24K gold
            $499. No monthly or annual fee on any tier.
          </P>
          <Steps
            items={[
              "With KYC approved, open the card section and choose virtual or physical.",
              "Pick your tier and confirm the issuance fee. The virtual card is the cheap way to test the product.",
              "For a physical card, enter your shipping address and pay the issuance fee from your balance.",
              "Activate the card in the app when it arrives. Virtual cards activate immediately. Then set your PIN.",
            ]}
          />
        </Section>

        <Section id="spend">
          <H2>How to spend with the card</H2>
          <P>
            Once activated, the card spends like a normal Visa debit card:
            tap in stores, pay online, and add it to Apple Pay or Google
            Pay where supported. Tevau converts your USDT balance at the
            point of sale, with a 1.2% FX fee when the purchase currency
            differs from your balance currency. If you spend in a
            different currency often, that fee adds up, so it is worth
            knowing about before you travel.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Tevau</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="atm">
          <H2>ATM withdrawals</H2>
          <P>
            Physical cards work at ATMs, which is handy when you need
            cash. The catch is the 1.9% ATM withdrawal fee, plus whatever
            the ATM operator charges on top. For small withdrawals the
            combined cost is steep, so ATMs make most sense for larger,
            less frequent pulls. Check your daily ATM limit in the app
            before you travel, since limits vary.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees, verified October 2026</H2>
          <P>
            The figures below are approximate, verified against
            Tevau&apos;s published FAQ in October 2026. Always confirm the
            final numbers in the app before you order or transact, because
            fees can change.
          </P>
          <figure className="mt-6">
            <Image
              src="/images/cards/tevau-deposit-fees-2025.jpg"
              alt="Tevau app deposit fee information from 2025, before the current fee schedule was verified in October 2026"
              width={1080}
              height={2174}
              className="mx-auto h-auto w-full max-w-sm rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-sm leading-6 text-slate-500">
              Historical image from 2025: Tevau&apos;s deposit fee screen.
              Use the table below for current figures.
            </figcaption>
          </figure>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Fee</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Amount (verified October 2026)</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Virtual card issuance</td>
                  <td className="py-3 pr-4 text-right font-bold">$20</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Physical card (plastic) issuance</td>
                  <td className="py-3 pr-4 text-right font-bold">$100</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Metal card issuance</td>
                  <td className="py-3 pr-4 text-right font-bold">$199</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">24K gold card issuance</td>
                  <td className="py-3 pr-4 text-right font-bold">$499</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Monthly or annual fee</td>
                  <td className="py-3 pr-4 text-right font-bold">None</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Crypto top-up fee</td>
                  <td className="py-3 pr-4 text-right font-bold">About 1%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">FX (currency conversion) fee</td>
                  <td className="py-3 pr-4 text-right font-bold">1.2%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ATM withdrawal fee</td>
                  <td className="py-3 pr-4 text-right font-bold">1.9%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Inactivity fee</td>
                  <td className="py-3 pr-4 text-right font-bold">$3 after 90 consecutive days of no activity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The fee structure is honest and simple: no monthly fee, a
            modest top-up charge, and the real costs show up on FX and ATM
            use. The $3 inactivity fee is easy to avoid if you use the
            card at least once every three months.
          </P>
        </Section>

        <Section id="video">
          <H2>Video review</H2>
          <P>
            I recorded a full walkthrough of the Tevau card: the tiers,
            the fees, and the availability changes explained on camera.
            Watch it below.
          </P>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/NFBK3EC3ZSU"
                title="Tevau card video review"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but public ratings give a sense of
            how other users experience Tevau. The honest framing first:
            the review base is thin, so read these as rough signals, not
            verdicts.
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
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">About 3.4 out of 5 (around 700 ratings)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">Not enough ratings to display</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Trustpilot</td>
                  <td className="py-3 pr-4 text-right font-bold">No listing found</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            A 3.4 on Google Play from a few hundred ratings is not a red
            flag on its own, but it is not a vote of confidence either.
            Treat it as too little data to lean on, and weigh the fees,
            terms, and availability facts above instead.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>No monthly or annual fee on any tier</li>
                <li>Modest top-up fee of about 1%</li>
                <li>High spending limits reported by reviewers: up to $3M daily and monthly (reviewer-reported, not official)</li>
                <li>Tevau Earn: up to 4.49% APR on idle USDT (promotional, conditions apply)</li>
                <li>Physical cards with ATM access</li>
                <li>Metal and 24K gold tiers for those who want them</li>
                <li>Bank of Canada PSP registration approved August 2026</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Virtual cards removed for Algeria, Egypt, and Turkey in August 2026</li>
                <li>US onboarding closed; existing cards only work for travel there</li>
                <li>KYC mandatory, no anonymous option</li>
                <li>USDT and USDC only; convert everything else first</li>
                <li>No cashback or rewards program</li>
                <li>$3 inactivity fee after 90 days with no activity</li>
                <li>Custodial: your balance sits with Tevau, not in your wallet</li>
                <li>Thin public review base</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="risks">
          <H2>Risks and honest caveats</H2>
          <P>
            <strong className="text-slate-950">Custodial risk.</strong> A
            Tevau card is not self-custody. Your USDT sits with Tevau
            until you spend it, so if the company runs into trouble, your
            balance is exposed. Keep spending money on the card, not
            savings.
          </P>
          <P>
            <strong className="text-slate-950">Availability can change.</strong>{" "}
            The August 2026 removals are the proof. Card-network
            compliance can pull a product from a country with little
            warning. Do not build your only way of spending crypto around
            a single card.
          </P>
          <P>
            <strong className="text-slate-950">Tax on spending crypto.</strong>{" "}
            In many countries, spending crypto counts as disposing of it,
            which can be a taxable event even when it feels like just
            buying coffee. Check your local tax rules before you spend
            regularly.
          </P>
          <P>
            <strong className="text-slate-950">Promotional rates and reported figures.</strong>{" "}
            The 4.49% APR Earn rate is promotional and comes with
            conditions. The high spending limits are reported by
            reviewers, not published by Tevau. Verify both in the app for
            your own account before relying on them.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Tevau is a fair deal for a specific person: you hold USDT, you
            can pass KYC, you live in a supported country, and you want to
            spend stablecoins without cashing out first. No monthly fee, a
            roughly 1% top-up fee, and Earn on idle USDT make the
            economics decent for regular spenders.
          </P>
          <P>
            The caution flags are real, though: availability moved in
            2026, there is no cashback, and your money sits with Tevau
            until you spend it. Skip it entirely if you are in Algeria,
            Egypt, or Turkey until virtual cards return, and skip it if
            anonymity matters to you. For everyone else in a supported
            country, start with the $20 virtual card and see if the
            product earns the upgrade.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Tevau</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Tevau questions</H2>
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
