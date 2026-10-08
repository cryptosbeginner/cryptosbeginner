import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/customer-support-guide`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Customer Support 2026: Contact Options & Help Guide",
  description:
    "PrimeXBT customer support explained: live chat, email, Help Center, what to prepare before contacting support, and how to avoid support scams. Reviewed October 2026.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Customer Support 2026: Contact Options & Help Guide",
    description:
      "How to reach PrimeXBT support: live chat, email, and the Help Center, plus what to prepare and how to spot impersonation scams.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-academy-banner.png`,
        width: 1024,
        height: 512,
        alt: "PrimeXBT trading platform banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Customer Support 2026: Contact Options & Help Guide",
    description:
      "Live chat, email, Help Center, and scam-safety tips for getting help on PrimeXBT.",
    images: [`${SITE_URL}/images/primexbt-academy-banner.png`],
  },
};

const faqItems = [
  {
    question: "How do I contact PrimeXBT customer support?",
    answer:
      "The fastest route is the live chat on the PrimeXBT website, staffed around the clock. For detailed issues, email works better because you can attach information. The Help Center covers common questions without any waiting.",
  },
  {
    question: "Is PrimeXBT support really available 24/7?",
    answer:
      "PrimeXBT advertises round-the-clock support through live chat. Response quality and wait times vary with demand, so for non-urgent questions the Help Center or email can be less frustrating than waiting in a busy chat queue.",
  },
  {
    question: "What should I prepare before contacting support?",
    answer:
      "Have your account email ready, note the exact time and details of the issue, and capture any error messages. Never share your password, 2FA codes, or private keys. Real support will never ask for them.",
  },
  {
    question: "Will PrimeXBT support ever contact me first on Telegram or WhatsApp?",
    answer:
      "Be extremely suspicious of anyone who does. Scammers routinely impersonate exchange support staff on messaging apps. Only trust support channels reached through the official PrimeXBT website, and never send funds to an address someone gives you in a chat.",
  },
  {
    question: "Can support help me recover a lost password?",
    answer:
      "Yes, account recovery is a standard support request. Use the official password reset flow or contact support through the website. You will need to verify your identity, which is why keeping your account email secure matters.",
  },
  {
    question: "Where can I find answers without contacting anyone?",
    answer:
      "The PrimeXBT Help Center has articles on trading terms, order types, fees, deposits, and withdrawals. It is the quickest option for routine questions and worth checking before opening a chat.",
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

export default function PrimeXBTCustomerSupportPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Customer Support 2026: Contact Options & Help Guide",
    description:
      "An educational guide to PrimeXBT customer support: live chat, email, the Help Center, what to prepare before contacting support, and how to avoid support impersonation scams.",
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
    image: [`${SITE_URL}/images/primexbt-academy-banner.png`],
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
        name: "PrimeXBT Customer Support",
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
              PrimeXBT Customer Support 2026: Contact Options &amp; Help Guide
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              When money is on the line, knowing how to reach support matters.
              This guide covers PrimeXBT&apos;s contact channels, what to
              prepare before you write, realistic expectations, and the
              number one support-related scam to avoid.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Open a free PrimeXBT account
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
              src="/images/primexbt-academy-banner.png"
              alt="PrimeXBT trading platform banner"
              width={1024}
              height={512}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT offers live chat, email, and a Help Center. Contact
              details can change, so use the channels listed on the official
              website.
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
                <strong>Live chat</strong> on the website is the fastest
                option and runs around the clock.
              </li>
              <li>
                <strong>Email</strong> is better for detailed issues where you
                need to explain context and attach information.
              </li>
              <li>
                <strong>Help Center</strong> answers most routine questions
                instantly, with no queue.
              </li>
              <li>
                <strong>Prepare before you write:</strong> account email,
                exact error details, and timestamps. Never share passwords or
                2FA codes.
              </li>
              <li>
                <strong>Support will never ask for your private keys</strong>
                or message you first on Telegram. Anyone who does is a
                scammer.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#channels" className="underline underline-offset-4">
                  Support channels
                </a>
              </li>
              <li>
                <a href="#help-center" className="underline underline-offset-4">
                  The Help Center
                </a>
              </li>
              <li>
                <a href="#prepare" className="underline underline-offset-4">
                  What to prepare
                </a>
              </li>
              <li>
                <a href="#scams" className="underline underline-offset-4">
                  Avoiding support scams
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

        <Section id="channels">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            PrimeXBT support channels
          </h2>

          <h3 className="mt-6 text-2xl font-black text-slate-950">Live chat</h3>

          <p className="mt-3 leading-8 text-slate-800">
            Live chat is available directly on the PrimeXBT website and is
            the best choice when you need a quick answer: a deposit that has
            not appeared, a page that will not load, or a simple how-to
            question. It runs around the clock, though wait times grow during
            busy market periods. Keep your questions specific and you will
            get better answers faster.
          </p>

          <h3 className="mt-6 text-2xl font-black text-slate-950">Email</h3>

          <p className="mt-3 leading-8 text-slate-800">
            Email suits problems that need explanation: a disputed trade, an
            account verification issue, or anything where you want a written
            record. Describe the issue in full, include relevant details and
            error messages, and send it from your registered email address
            so the team can identify your account. Expect a slower response
            than live chat, but a more thorough one.
          </p>

          <h3 className="mt-6 text-2xl font-black text-slate-950">
            Social media and blog
          </h3>

          <p className="mt-3 leading-8 text-slate-800">
            PrimeXBT maintains social media accounts and a blog with market
            updates, feature announcements, and promotions. These are good
            for staying informed but they are not support channels. Never
            post your account details publicly, and do not trust anyone who
            replies to your public question claiming to be support staff.
          </p>
        </Section>

        <Section id="help-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            The Help Center: fastest answers, no queue
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The Help Center is PrimeXBT&apos;s self-serve knowledge base. It
            covers trading terms, order types, fees, deposits, withdrawals,
            account settings, and other essentials, and it is the quickest
            way to answer routine questions. Before opening a chat, search
            the Help Center. Most beginner questions, from minimum deposits
            to how stop losses work, are already answered there.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Use it proactively too. Reading the articles on margin mechanics
            and fees before you trade will prevent the exact misunderstandings
            that most often end up as support tickets.
          </p>
        </Section>

        <Section id="prepare">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What to prepare before contacting support
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Good preparation gets your issue resolved faster. Before you open
            a chat or send an email, gather:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Your registered email address,</strong> so the agent can
              locate your account.
            </li>
            <li>
              <strong>Exact details of the issue,</strong> including what you
              were doing, what happened, and any error messages shown.
            </li>
            <li>
              <strong>Timestamps,</strong> especially for deposit, withdrawal,
              or order problems.
            </li>
            <li>
              <strong>Transaction IDs,</strong> if the issue involves an
              on-chain transfer.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-rose-300 bg-rose-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Never share:</strong> your password, 2FA codes, private
              keys, or seed phrases. Legitimate support will never ask for
              them, and anyone who does is trying to steal your account.
            </p>
          </div>
        </Section>

        <Section id="scams">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Avoiding support impersonation scams
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The most common support-related scam works like this: someone
            contacts you on Telegram, WhatsApp, or social media claiming to
            be PrimeXBT support, often after you post a question publicly.
            They sound helpful, then ask you to share your screen, install
            software, send a test deposit, or provide login details. Every
            step is designed to drain your account.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            The rules are simple. Only start support conversations through
            the official PrimeXBT website. Never click support links sent to
            you in messages. Never send funds to an address given to you in
            a chat. And treat any unsolicited message claiming to be support
            as a scam by default.
          </p>
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
              Continue with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              Support is one piece. The full review covers fees, leverage,
              regulation, restricted countries, and who should skip PrimeXBT
              entirely.
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
              This page was reviewed on {UPDATED}. Support channels, hours,
              and contact details can change. Use the channels listed on the
              official PrimeXBT website, not links from messages or social
              media.
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
                for current support channels, the Help Center, and legal
                links.
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
              PrimeXBT&apos;s official website before depositing funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
