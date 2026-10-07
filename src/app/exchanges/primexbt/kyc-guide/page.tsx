import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/kyc-guide`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT KYC Guide 2026: Verification Levels & Requirements",
  description:
    "PrimeXBT KYC in 2026: what verification PrimeXBT asks for, accepted ID documents, how long approval takes, and the limits on unverified accounts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT KYC Guide 2026: Verification Levels & Requirements",
    description:
      "Do you need KYC on PrimeXBT? Email signup, verification steps, accepted documents, approval times, and unverified limits, checked October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-platform-overview.png`,
        width: 1180,
        height: 842,
        alt: "PrimeXBT trading platform overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT KYC Guide 2026",
    description:
      "Verification steps, accepted ID documents, approval times, and limits for unverified PrimeXBT accounts.",
    images: [`${SITE_URL}/images/primexbt-platform-overview.png`],
  },
};

const faqItems = [
  {
    question: "Does PrimeXBT require KYC?",
    answer:
      "Not for basic use. You can register with just an email address and trade, deposit, and withdraw crypto without completing identity verification. KYC becomes necessary for full fiat access, higher limits, and whenever PrimeXBT triggers a customer due diligence check on your account.",
  },
  {
    question: "What documents do I need to verify my PrimeXBT account?",
    answer:
      "Published guidance points to a government-issued photo ID such as a passport, driver's license, national ID card, or residence permit, plus a proof of residence such as a recent utility bill or bank statement. You will also complete a liveness check, usually a live selfie taken with your phone or webcam.",
  },
  {
    question: "How long does PrimeXBT verification take?",
    answer:
      "Submitting the documents takes only a few minutes. Approval commonly takes several hours, though it can stretch to a few days during busy periods. Clear, well-lit photos and details that match your documents help avoid delays.",
  },
  {
    question: "What are the limits without KYC on PrimeXBT?",
    answer:
      "Current third-party reporting describes crypto deposits of any amount, fiat deposits capped around $2,000, and crypto withdrawals up to $20,000 per day for unverified accounts. Some regions and payment methods require verification earlier, so confirm what applies to your country during signup.",
  },
  {
    question: "Can PrimeXBT ask me to verify later even if I skip KYC now?",
    answer:
      "Yes. PrimeXBT reserves the right to run customer due diligence at any time, for example if its systems flag unusual activity or a terms violation. When that happens, the account can face deposit or withdrawal limits until you provide the requested documents.",
  },
  {
    question: "Is it safe to upload my ID to PrimeXBT?",
    answer:
      "Verification means trusting the platform with sensitive documents, so only ever verify inside the official PrimeXBT website or app, never through links in emails or messages. Enable two-factor authentication, keep your own copies of what you submit, and remember that residents of restricted countries cannot complete verification at all.",
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

export default function PrimeXBTKYCPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT KYC Guide 2026: Verification Levels & Requirements",
    description:
      "A research-led guide to PrimeXBT verification: when KYC is required, the step-by-step process, accepted documents, approval times, and unverified account limits.",
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
    image: [`${SITE_URL}/images/primexbt-platform-overview.png`],
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
        name: "PrimeXBT KYC Guide",
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
              PrimeXBT KYC Guide: Verification Levels and Requirements in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              PrimeXBT lets you start with just an email address, but
              verification unlocks higher limits and fiat access. This guide
              explains when KYC is actually required, what the process looks
              like, which documents are accepted, and what changes once you
              are verified.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryAffiliateButton className="w-full sm:w-auto">
                Visit PrimeXBT through our partner link
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
              src="/images/primexbt-platform-overview.png"
              alt="PrimeXBT trading platform overview"
              width={1200}
              height={630}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT platform overview. Verification requirements can vary
              by entity, region, and account activity.
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
                <strong>Signup needs no KYC:</strong> an email address and
                password gets you an account.
              </li>
              <li>
                <strong>Without verification</strong> you can deposit crypto,
                make limited fiat deposits, withdraw up to about $20,000 per
                day, and trade normally, though some regions ask for ID
                earlier.
              </li>
              <li>
                <strong>Verification</strong> means a liveness check, a
                government photo ID, and a proof of residence. It unlocks
                unlimited withdrawals and full fiat access.
              </li>
              <li>
                <strong>PrimeXBT can trigger verification at any time</strong>{" "}
                through customer due diligence, with limits applied until
                you comply.
              </li>
              <li>
                <strong>Approval usually takes hours,</strong> sometimes
                longer. Clean document photos keep it quick.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#do-you-need-kyc" className="underline underline-offset-4">
                  Do you need KYC on PrimeXBT?
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="underline underline-offset-4">
                  How verification works
                </a>
              </li>
              <li>
                <a href="#documents" className="underline underline-offset-4">
                  Accepted documents
                </a>
              </li>
              <li>
                <a href="#how-long" className="underline underline-offset-4">
                  How long approval takes
                </a>
              </li>
              <li>
                <a href="#limits" className="underline underline-offset-4">
                  Unverified vs verified limits
                </a>
              </li>
              <li>
                <a href="#privacy" className="underline underline-offset-4">
                  Privacy and data tips
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

        <Section id="do-you-need-kyc">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Do you need KYC on PrimeXBT?
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            For most users, no. PrimeXBT does not require identity
            verification to register, deposit crypto, trade, or withdraw
            crypto within the standard limits. That is one of the reasons
            the platform appears on no-KYC exchange lists.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Verification becomes necessary in three situations. First, when
            you want full fiat access: larger fiat deposits and fiat
            withdrawals. Second, when you want to lift the daily withdrawal
            cap. Third, when PrimeXBT itself initiates a customer due
            diligence check, which it can do at any time. Some regions also
            require ID before the first deposit, so your country matters.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Important:</strong> skipping KYC does not mean skipping
              the rules. If you live in a restricted country, you cannot use
              PrimeXBT at all, verified or not. Do not try to get around
              geographic restrictions.
            </p>
          </div>
        </Section>

        <Section id="how-it-works">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How verification works, step by step
          </h2>

          <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-slate-800">
            <li>
              <strong>Register.</strong> Sign up with an email address and a
              strong password, select your country, and confirm the
              verification code sent to your email. You can also sign up with
              a Google or Apple account where offered.
            </li>
            <li>
              <strong>Open verification.</strong> Click your profile icon and
              choose Verify Account. You will be asked to consent to PrimeXBT
              processing your personal data.
            </li>
            <li>
              <strong>Enter your details.</strong> Provide your full name,
              address, date of birth, and country, and confirm you are not a
              US citizen or resident.
            </li>
            <li>
              <strong>Complete the liveness check.</strong> Use your phone or
              webcam to take a live selfie when prompted.
            </li>
            <li>
              <strong>Upload your ID.</strong> Photograph or upload your
              government-issued identity document and check that the details
              were read correctly.
            </li>
            <li>
              <strong>Upload proof of residence.</strong> Add a document that
              confirms your address.
            </li>
            <li>
              <strong>Wait for approval.</strong> The review team checks your
              submission. You will be notified once a decision is made.
            </li>
          </ol>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            The exact screens and order can change with platform updates.
            Follow the prompts inside your account rather than any
            third-party walkthrough.
          </p>
        </Section>

        <Section id="documents">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Accepted documents
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Published guidance describes two document categories. What counts
            as acceptable can differ by country and by the entity serving
            your account, so treat this as a starting checklist, not a
            guarantee.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Category</th>
                  <th className="py-3">Commonly accepted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Proof of identity
                  </td>
                  <td className="py-3 text-slate-700">
                    Passport, driver&apos;s license, national ID card, or
                    residence permit
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Proof of residence
                  </td>
                  <td className="py-3 text-slate-700">
                    Recent utility bill or bank statement showing your name
                    and address
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Liveness
                  </td>
                  <td className="py-3 text-slate-700">
                    Live selfie taken during the verification flow
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-800">
            In some cases PrimeXBT may also ask about the source of your
            funds, particularly during a due diligence review. Keep records
            of where your deposits come from.
          </p>
        </Section>

        <Section id="how-long">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How long approval takes
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Filling in the forms and uploading documents takes a few minutes.
            The review itself commonly takes several hours. During busy
            periods it can stretch to a couple of days.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Most delays come from unreadable uploads. Photograph documents in
            good light, keep all four corners visible, and make sure the name
            and address you typed match your documents exactly. If anything
            is rejected, you will usually get a chance to resubmit.
          </p>
        </Section>

        <Section id="limits">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Unverified vs verified limits
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            The practical difference between the two states comes down to
            fiat access and withdrawal caps. These figures come from current
            third-party reporting and can change, so confirm them during
            signup.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Activity</th>
                  <th className="py-3 pr-4">Without KYC</th>
                  <th className="py-3">Verified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto deposits
                  </td>
                  <td className="py-3 pr-4 text-slate-700">Any amount</td>
                  <td className="py-3 text-slate-700">Any amount</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Fiat deposits
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Capped around $2,000; some methods need ID first
                  </td>
                  <td className="py-3 text-slate-700">Full access</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto withdrawals
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Up to about $20,000 per day
                  </td>
                  <td className="py-3 text-slate-700">No daily cap</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Fiat withdrawals
                  </td>
                  <td className="py-3 pr-4 text-slate-700">Restricted</td>
                  <td className="py-3 text-slate-700">Full access</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Trading
                  </td>
                  <td className="py-3 pr-4 text-slate-700">No restrictions</td>
                  <td className="py-3 text-slate-700">No restrictions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="privacy">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Privacy and data tips
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Verify only inside the official app or website.</strong>{" "}
              PrimeXBT will never ask for your documents over email, chat, or
              social media. Links in messages are a classic phishing route.
            </li>
            <li>
              <strong>Read the consent screen.</strong> Verification asks you
              to agree to personal data processing. Skim what you are
              agreeing to before you click through.
            </li>
            <li>
              <strong>Lock the account down first.</strong> Enable
              two-factor authentication before uploading anything sensitive.
            </li>
            <li>
              <strong>Keep your own copies.</strong> Save the documents you
              submitted and note the date. If a dispute ever arises, you will
              want that record.
            </li>
            <li>
              <strong>Remember the tradeoff.</strong> Verification removes
              limits but hands a platform your ID and address. Only verify
              with services you have researched and intend to keep using.
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
              Continue with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              Verification is one chapter. The full review covers fees,
              leverage, regulation, restricted countries, platform tools, and
              who should skip PrimeXBT entirely.
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
              This page was reviewed on {UPDATED}. Verification steps,
              accepted documents, limits, and regional rules can change with
              provider updates. Check the current requirements inside your
              account before submitting documents.
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
                for current signup, verification, and legal information.
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
