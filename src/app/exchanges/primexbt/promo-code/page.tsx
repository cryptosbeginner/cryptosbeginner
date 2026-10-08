import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/promo-code`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Promo Code 2026: Bonuses & How to Redeem",
  description:
    "PrimeXBT promo codes and welcome bonuses in 2026: how promotional links work, how to redeem a bonus, the terms that matter, and how to avoid fake codes.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Promo Code 2026: Bonuses & How to Redeem",
    description:
      "How PrimeXBT promo codes and welcome bonuses work: redeeming through a promotional link, bonus terms to check, and avoiding fake code scams.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-promo-platform-overview.jpg`,
        width: 2560,
        height: 1280,
        alt: "PrimeXBT trading platform where promo bonuses are credited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Promo Code 2026",
    description:
      "PrimeXBT bonuses explained: how promo links work, redemption steps, and the terms that actually matter.",
    images: [`${SITE_URL}/images/primexbt-promo-platform-overview.jpg`],
  },
};

const faqItems = [
  {
    question: "What is a PrimeXBT promo code?",
    answer:
      "A PrimeXBT promo code or promotional link is an offer new users can use when registering to receive a welcome bonus or other perk. The specific bonus and its terms change over time, so always check the live promotions page.",
  },
  {
    question: "How do I redeem a PrimeXBT promo code?",
    answer:
      "In most cases you register through the promotional link, which applies the offer to your new account automatically. Some promotions use a code entered during signup or in the account dashboard. Follow the instructions on the official promotions page for the current offer.",
  },
  {
    question: "Can I withdraw a PrimeXBT welcome bonus immediately?",
    answer:
      "Usually not. Welcome bonuses typically come with trading requirements, such as reaching a certain volume, before bonus funds or profits from them become withdrawable. Read the bonus terms carefully before assuming the bonus is free money.",
  },
  {
    question: "Do PrimeXBT promo codes expire?",
    answer:
      "Yes, promotions run for limited periods and old codes stop working. If a code fails, check whether the promotion is still active on PrimeXBT's official site rather than trusting a third-party page's claims.",
  },
  {
    question: "Are PrimeXBT promo codes on social media safe?",
    answer:
      "Be cautious. Scammers post fake codes that lead to phishing sites designed to steal logins. Only use promotional links from sources you trust, and verify you land on PrimeXBT's real domain before registering.",
  },
  {
    question: "Can existing PrimeXBT users use promo codes?",
    answer:
      "Welcome bonuses are generally for new accounts only. Existing users may still benefit from other promotions, such as trading contests or periodic campaigns announced on the official site.",
  },
] as const;

function PrimaryAffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
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

export default function PrimeXBTpromoCodePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Promo Code 2026: Bonuses & How to Redeem",
    description:
      "A beginner's guide to PrimeXBT promo codes and welcome bonuses: how promotional links work, redemption steps, the bonus terms that matter, and how to avoid fake code scams.",
    datePublished: "2026-10-08",
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "CryptosBeginner editorial team",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    image: [`${SITE_URL}/images/primexbt-promo-platform-overview.jpg`],
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
        name: "Exchanges",
        item: `${SITE_URL}/exchanges`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PrimeXBT Review",
        item: REVIEW_URL,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "PrimeXBT Promo Code",
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
              PrimeXBT Promo Code: Bonuses and How to Redeem in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              PrimeXBT offers welcome bonuses and promotions to new users who
              register through promotional links. This guide explains how
              these offers work, how to redeem one step by step, the bonus
              terms that actually matter, and how to spot fake codes before
              they cost you.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Claim the PrimeXBT offer through our partner link
              </PrimaryAffiliateButton>

              <Link
                href="/exchanges/primexbt-review"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Back to the full PrimeXBT review
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Affiliate disclosure:</strong> Some links on this page are
            affiliate links, including PrimeXBT links. CryptosBeginner may earn
            a commission if you register through one. This does not change our
            assessment criteria or conclusions. This page is educational
            content, not financial advice.
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-8">
          <figure>
            <Image
              src="/images/primexbt-promo-platform-overview.jpg"
              alt="PrimeXBT trading platform where promo bonuses are credited"
              width={2560}
              height={1280}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              Bonuses from promotional offers are credited to your PrimeXBT
              account. Current offers and terms live on the official site.
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">
            <h2 className="text-2xl font-black text-emerald-950">
              TL;DR: the short version
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-800">
              <li>
                <strong>Promo offers</strong> give new users a welcome bonus
                or perk when registering through a promotional link.
              </li>
              <li>
                <strong>Redemption is usually automatic:</strong> register
                via the link and the offer attaches to your new account.
              </li>
              <li>
                <strong>Bonuses have strings attached:</strong> trading
                volume requirements and time limits are standard. Read the
                terms.
              </li>
              <li>
                <strong>Offers change:</strong> amounts and codes expire. We
                deliberately do not quote fixed bonus figures here, because
                they go stale fast.
              </li>
              <li>
                <strong>Beware fake codes:</strong> only use links from
                sources you trust and verify the domain before signing up.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#how-it-works" className="underline underline-offset-4">
                  How promo codes work
                </a>
              </li>
              <li>
                <a href="#redeem" className="underline underline-offset-4">
                  How to redeem step by step
                </a>
              </li>
              <li>
                <a href="#terms" className="underline underline-offset-4">
                  Bonus terms that matter
                </a>
              </li>
              <li>
                <a href="#other-promos" className="underline underline-offset-4">
                  Other PrimeXBT promotions
                </a>
              </li>
              <li>
                <a href="#fake-codes" className="underline underline-offset-4">
                  Avoiding fake code scams
                </a>
              </li>
              <li>
                <a href="#faq" className="underline underline-offset-4">
                  FAQ
                </a>
              </li>
            </ol>
          </div>
        </section>

        <Section id="how-it-works">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How PrimeXBT promo codes work
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT uses promotional links and codes to attract new users
            with welcome bonuses and perks. When you register through a
            promotional link, the offer is typically attached to your new
            account automatically, and any bonus is credited once you meet
            the qualifying conditions, such as making a first deposit.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            A bonus boosts your starting balance, which can be genuinely
            useful for learning the platform. But it is marketing, not a
            gift: the amounts, qualifying conditions, and expiry dates change
            regularly, which is why this page focuses on how the mechanics
            work rather than quoting a figure that may already be outdated.
            For the current offer, check PrimeXBT&apos;s official promotions
            page.
          </p>
        </Section>

        <Section id="redeem">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to redeem a PrimeXBT promo offer step by step
          </h2>

          <ol className="mt-6 space-y-6">
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 1: Use the promotional link
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Click the promotional link from a source you trust. Verify
                the page that opens is PrimeXBT&apos;s real domain before
                continuing. If the current promotion uses a code instead of
                a link, keep it ready to enter during signup.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 2: Register your account
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Complete the standard registration with your email and a
                strong password, then confirm your email address. Our{" "}
                <Link
                  href="/exchanges/primexbt/registration-guide"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT registration guide
                </Link>{" "}
                walks through this in detail.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 3: Meet the qualifying conditions
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Most welcome bonuses require a first deposit or a minimum
                funding amount before the bonus is credited. Check the live
                promotion terms for the current threshold and deadline.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 4: Confirm the bonus in your account
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                After qualifying, check your account dashboard or bonus
                section to confirm the credit arrived. If it is missing,
                contact PrimeXBT&apos;s 24/7 support with your registration
                details before the promotion window closes.
              </p>
            </li>
          </ol>

          <figure className="mt-8">
            <Image
              src="/images/primexbt-promo-markets-view.jpg"
              alt="PrimeXBT markets view where bonus funds can be used for practice and live trading"
              width={1400}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              Bonus funds can be put to work across PrimeXBT&apos;s crypto
              and traditional markets, subject to the bonus terms.
            </figcaption>
          </figure>
        </Section>

        <Section id="terms">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            The bonus terms that actually matter
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The headline bonus figure is the least important part of any
            promotion. These are the terms that decide whether a bonus is
            useful:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Trading volume requirements.</strong> Bonuses usually
              unlock for withdrawal only after you trade a set volume. A
              large bonus with a huge volume requirement can be harder to
              realize than a smaller one with light conditions.
            </li>
            <li>
              <strong>Time limits.</strong> Many bonuses expire if the
              conditions are not met within a set window, sometimes as
              short as a few weeks.
            </li>
            <li>
              <strong>What counts.</strong> Some promotions count only
              certain markets or order types toward the requirement. Check
              whether your planned trading style qualifies.
            </li>
            <li>
              <strong>Withdrawal order.</strong> Withdrawing your own deposit
              early can forfeit an unclaimed bonus. Understand the sequence
              before moving funds out.
            </li>
            <li>
              <strong>One per person.</strong> Welcome offers are for new
              accounts only. Creating duplicate accounts to claim multiple
              bonuses violates the terms and can get accounts closed.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Reality check:</strong> a bonus never turns a losing
              strategy into a winning one. Treat it as a small head start
              for learning, not as a reason to trade bigger or take risks
              you would otherwise avoid.
            </p>
          </div>
        </Section>

        <Section id="other-promos">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Other PrimeXBT promotions worth knowing
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Welcome bonuses are only one part of the picture. PrimeXBT also
            runs trading contests, including demo contests with real prizes,
            and periodic campaigns announced on its official channels. Our{" "}
            <Link
              href="/exchanges/primexbt/demo-account"
              className="font-bold text-indigo-700 underline underline-offset-4"
            >
              demo account guide
            </Link>{" "}
            explains how the contests work and why contest-style trading
            should not be confused with a real strategy.
          </p>
        </Section>

        <Section id="fake-codes">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Avoiding fake promo code scams
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Promo code pages are a favorite hunting ground for scammers.
            Fake codes and doctored links lead to lookalike sites that steal
            your email, password, and any crypto you deposit. Protect
            yourself with these habits:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Check the domain</strong> character by character
              before registering or logging in.
            </li>
            <li>
              <strong>Ignore codes in random DMs</strong> on Telegram,
              Discord, and X. PrimeXBT will not message you a secret bonus.
            </li>
            <li>
              <strong>Be skeptical of huge figures.</strong> A code promising
              an absurd bonus is bait, not generosity.
            </li>
            <li>
              <strong>Never share 2FA codes</strong> with anyone claiming to
              activate your bonus. Support staff never need them.
            </li>
          </ul>
        </Section>

        <Section id="faq">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Frequently asked questions
          </h2>

          <div className="mt-7 grid gap-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {item.question}
                </h3>

                <p className="mt-3 leading-8 text-slate-800">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-4xl px-4 pb-12">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-7">
            <h2 className="text-xl font-black text-indigo-950">
              Compare the offer against the full picture
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              A bonus is a footnote. Fees, leverage, regulation, and
              restricted countries matter far more. Read the full review
              before you decide.
            </p>

            <Link
              href="/exchanges/primexbt-review"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-indigo-800"
            >
              Read the PrimeXBT review
            </Link>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Sources and verification
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-800">
              This page was reviewed on {UPDATED}. Promotions, bonus amounts,
              and terms change frequently. Always verify the current offer
              and its full terms on PrimeXBT&apos;s official promotions page
              before registering.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-800">
              <li>
                <a
                  href={PRIME_XBT_HOME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  PrimeXBT official website
                </a>{" "}
                for current promotions, bonus terms, and legal disclosures.
              </li>
              <li>
                <a
                  href={REVIEW_URL}
                  className="font-bold text-indigo-700 underline underline-offset-4"
                >
                  CryptosBeginner PrimeXBT review
                </a>{" "}
                for the broader assessment this guide supports.
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm leading-7 text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. This page
              is not financial, investment, legal, or tax advice.
              Cryptocurrency, CFDs, futures, and leveraged products can result
              in rapid or total loss of capital. Availability depends on your
              jurisdiction. Some links are affiliate links. Verify live terms,
              fees, legal disclosures, restrictions, and product conditions on
              PrimeXBT&apos;s official website before registering or
              depositing funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
