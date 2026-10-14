import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/coinflare-review`;

const UPDATED = "26 September 2026";
const UPDATED_ISO = "2026-09-26";
const ORIGINALLY_PUBLISHED = "1 August 2024";
const ORIGINALLY_PUBLISHED_ISO = "2024-08-01";

const COINFLARE_WITHDRAWAL = "https://www.coinflare.com/";

export const metadata: Metadata = {
  title: "Coinflare Review 2026: Exchange Shut Down (Wind-Down Notice)",
  description:
    "Coinflare (formerly BITFLEX) shut down in April 2026. What happened, how to request a manual withdrawal of remaining funds, and what the exchange was.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Coinflare Review 2026: Exchange Shut Down (Wind-Down Notice)",
    description:
      "Coinflare wound down in April 2026. What happened and how to claim remaining funds.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/coinflare-winddown-2026.png`,
        width: 1919,
        height: 998,
        alt: "Coinflare manual withdrawal request page announcing the April 2026 wind-down of operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinflare Review 2026: Exchange Shut Down (Wind-Down Notice)",
    description:
      "Coinflare wound down in April 2026. What happened and how to claim remaining funds.",
    images: [`${SITE_URL}/images/coinflare-winddown-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is Coinflare still operating?",
    answer:
      "No. As of 20 April 2026, Coinflare disabled withdrawals through its platform as part of an orderly wind-down of operations. The site now serves only a manual withdrawal request page for remaining assets. Do not deposit funds to Coinflare.",
  },
  {
    question: "How do I withdraw my remaining funds from Coinflare?",
    answer:
      "Use the manual withdrawal request form on coinflare.com. You will need to provide your full legal name, date of birth, registered email address, and registered phone number, matching your Coinflare account as closely as possible. Requests are reviewed against historical account data and require identity verification. Approval is not guaranteed.",
  },
  {
    question: "What was Coinflare?",
    answer:
      "Coinflare, formerly BITFLEX, was a Seychelles-based crypto exchange launched in 2022. It offered spot trading at 0.1% maker and taker and futures at 0.02% maker and 0.06% taker with up to 100x leverage, optional KYC, and security partnerships with Fireblocks, Jumio, and Coincover. It never published proof of reserves.",
  },
  {
    question: "Will I definitely get my funds back from Coinflare?",
    answer:
      "There is no guarantee. Coinflare states that submission of a request does not guarantee approval or processing, and incomplete or unverifiable claims may be rejected. Submit your request with accurate, matching details as soon as possible.",
  },
  {
    question: "What are good alternatives to Coinflare?",
    answer:
      "For no-KYC derivatives, consider BloFin or BYDFi. For low-fee futures with published reserves, Bitunix. For regulated trading, Kraken or Deribit. See our best crypto exchanges guide for the full comparison.",
  },
] as const;

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

const tocItems = [
  { id: "shutdown", label: "The shutdown: what happened" },
  { id: "claim", label: "How to claim remaining funds" },
  { id: "what-was", label: "What Coinflare was" },
  { id: "fees", label: "Fees and features (historical)" },
  { id: "lessons", label: "Lessons from the shutdown" },
  { id: "alternatives", label: "Alternatives" },
  { id: "faq", label: "Coinflare questions" },
];

export default function CoinflareReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Coinflare Review 2026: Exchange Shut Down (Wind-Down Notice)",
    description:
      "Coinflare (formerly BITFLEX) shut down in April 2026. What happened, how to request a manual withdrawal of remaining funds, and what the exchange was.",
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
        name: "Exchanges",
        item: `${SITE_URL}/exchanges`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coinflare Review",
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
            <div className="rounded-2xl border-2 border-rose-500 bg-rose-50 p-6 sm:p-7">
              <p className="text-lg font-black text-rose-900">
                Warning: Coinflare has shut down.
              </p>
              <p className="mt-3 leading-7 text-slate-800">
                As of 20 April 2026, Coinflare users can no longer submit
                withdrawals through the platform, as part of an orderly
                wind-down of operations. The site now exists only for
                manual withdrawal requests of remaining assets. Do not
                deposit funds to Coinflare. If you have assets there, read
                the claim section below.
              </p>
            </div>

            <p className="mt-8 text-sm font-bold text-indigo-700">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} ·
              By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Coinflare Review 2026: Exchange Shut Down (Wind-Down Notice)
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Coinflare, formerly BITFLEX, was a small Seychelles derivatives
              exchange that wound down in April 2026. This page keeps the
              record straight: what happened, how to claim any remaining
              funds, and what the exchange was before it closed.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={COINFLARE_WITHDRAWAL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", textDecoration: "none" }}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-rose-700 w-full sm:w-auto"
              >
                Coinflare manual withdrawal page
              </a>

              <Link
                href="/exchanges/best-crypto-exchanges"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Compare crypto exchanges
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
            <strong>Disclosure:</strong> There are no affiliate links on this
            page. CryptosBeginner earns nothing from Coinflare links, and
            that does not change our assessment. This page is educational
            content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/coinflare-winddown-2026.png"
              alt="Coinflare manual withdrawal request page announcing the April 2026 wind-down of operations"
              width={1919}
              height={998}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
          </figure>

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

        <Section id="shutdown">
          <H2>The shutdown: what happened</H2>
          <P>
            Coinflare's own site states it plainly: starting 20 April 2026,
            users could no longer submit withdrawals through the platform as
            part of an orderly wind-down of operations. The entire public
            site was replaced with a single manual withdrawal request page.
            No trading, no deposits, no fee schedule, no markets. Just the
            claim form.
          </P>
          <P>
            We verified this directly from Coinflare's site code. There was
            no hack announcement and no regulator action we could confirm,
            just a quiet wind-down. That quietness is itself a data point:
            small offshore exchanges can simply stop, and when they do,
            users are left filing forms and hoping.
          </P>
        </Section>

        <Section id="claim">
          <H2>How to claim remaining funds</H2>
          <P>
            If you held assets on Coinflare, use the manual withdrawal
            request form on their site. Here is what the process involves,
            straight from their notice:
          </P>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-800">
            <li>
              Fill in the claim form with details matching your Coinflare
              account as closely as possible: full legal name, date of
              birth, registered email address, and registered phone number.
            </li>
            <li>
              Expect identity verification and compliance checks. Requests
              are reviewed against historical account data.
            </li>
            <li>
              Incomplete or inconsistent requests may need additional
              review, so get the details right the first time.
            </li>
            <li>
              Understand the limit: Coinflare says submission does not
              guarantee approval or processing, and unverifiable claims may
              be rejected.
            </li>
          </ul>
          <P>
            Submit as soon as you can, keep copies of everything you send,
            and be wary of anyone contacting you claiming they can recover
            your funds for a fee. That is a classic post-shutdown scam.
          </P>
          <div className="mt-7">
            <a
              href={COINFLARE_WITHDRAWAL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none" }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-rose-700"
            >
              Coinflare manual withdrawal page
            </a>
          </div>
        </Section>

        <Section id="what-was">
          <H2>What Coinflare was</H2>
          <figure className="mt-6">
            <Image
              src="/images/coinflare-platform-2024.png"
              alt="Coinflare trading platform as it appeared in 2024, before the shutdown"
              width={1024}
              height={458}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Coinflare launched in 2022 as BITFLEX and rebranded to Coinflare
            in 2024. Based in Seychelles and led by Ee Wui Yang, it was a
            small derivatives-focused exchange: a handful of spot coins,
            around 80 futures contracts, and up to 100x leverage. KYC was
            optional, with unverified accounts able to withdraw up to 5,000
            USDT per day.
          </P>
          <P>
            Its security story was a mixed bag that, in hindsight, reads
            like a warning. It partnered with Fireblocks, Jumio, and
            Coincover, which sounded reassuring. But it never published
            proof of reserves, held no meaningful licence, and operated with
            thin public transparency. The partnerships were real; the
            verifiable backing for customer funds was not.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees and features (historical)</H2>
          <figure className="mt-6">
            <Image
              src="/images/coinflare-fees-2024.png"
              alt="Coinflare fee schedule as published in 2024, before the shutdown"
              width={1024}
              height={434}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            For the record, Coinflare's last published fees were 0.1% maker
            and taker on spot and 0.02% maker and 0.06% taker on futures,
            with volume tiers below that. It ran a RewardsHub with tasks and
            Flex Points, an earn program, and regular trading campaigns. All
            of this is now historical. Do not let old fee comparisons or
            bonus articles send you to a dead platform.
          </P>
        </Section>

        <Section id="lessons">
          <H2>Lessons from the shutdown</H2>
          <P>
            Coinflare is the reason this site keeps saying the same thing on
            every review: trade on small offshore exchanges if you must, but
            never store funds there. No proof of reserves, no major
            licence, and a quiet wind-down with a form as your only recourse
            is exactly how this story goes. Prefer venues with published
            reserves and real regulators, keep balances minimal everywhere
            else, and withdraw to a wallet you control.
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For no-KYC derivatives with a longer track record,{" "}
            <Link href="/exchanges/blofin-review" className="text-blue-600 hover:underline">
              BloFin
            </Link>{" "}
            or{" "}
            <Link href="/exchanges/bydfi-review" className="text-blue-600 hover:underline">
              BYDFi
            </Link>
            . For low-fee futures with published proof of reserves,{" "}
            <Link href="/exchanges/bitunix-review" className="text-blue-600 hover:underline">
              Bitunix
            </Link>
            . For regulated trading,{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            or{" "}
            <Link href="/exchanges/deribit-review" className="text-blue-600 hover:underline">
              Deribit
            </Link>
            . Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="faq">
          <H2>Coinflare questions</H2>
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
