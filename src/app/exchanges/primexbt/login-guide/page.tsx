import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/login-guide`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Login Guide 2026: Sign In, 2FA & Troubleshooting",
  description:
    "How to log in to PrimeXBT in 2026: email and Google sign-in, 2FA codes, password reset, and fixes for common login problems like locked accounts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Login Guide 2026: Sign In, 2FA & Troubleshooting",
    description:
      "Sign in to PrimeXBT safely: login steps, Google sign-in, 2FA, forgotten passwords, and what to do when you cannot log in.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-login-account-screen.jpg`,
        width: 1400,
        height: 700,
        alt: "PrimeXBT account sign-in screen for existing users",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Login Guide 2026",
    description:
      "PrimeXBT sign-in steps, 2FA, password reset, and troubleshooting for login problems.",
    images: [`${SITE_URL}/images/primexbt-login-account-screen.jpg`],
  },
};

const faqItems = [
  {
    question: "How do I log in to PrimeXBT?",
    answer:
      "Open PrimeXBT's official site, click Sign In, enter your registered email and password, complete the 2FA code if enabled, and submit. If you registered with Google, use the Continue with Google option instead.",
  },
  {
    question: "I forgot my PrimeXBT password. What do I do?",
    answer:
      "Click the Forgot your password link below the Sign In button, enter your registered email, and follow the reset instructions sent to your inbox. Create a new unique password you have not used anywhere else.",
  },
  {
    question: "What if I lost access to my 2FA app?",
    answer:
      "Without your authenticator codes you will need to go through PrimeXBT's account recovery process, which usually requires identity verification. This is why saving your 2FA backup codes at setup time matters so much.",
  },
  {
    question: "Why is my PrimeXBT account locked?",
    answer:
      "Repeated failed login attempts can trigger a temporary lock as a security measure. Wait for the cooldown period, then try again carefully. If the lock persists, contact PrimeXBT's 24/7 live chat support.",
  },
  {
    question: "Can I stay logged in on multiple devices?",
    answer:
      "You can log in from more than one device, but for security it is better to sign out of devices you do not control and to review active sessions in your account settings regularly.",
  },
  {
    question: "Is it safe to log in to PrimeXBT on public Wi-Fi?",
    answer:
      "Avoid it when you can. Public networks make credential theft easier. If you must, make sure 2FA is enabled, never save the password in a shared browser, and log out when finished.",
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

export default function PrimeXBTLoginGuidePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Login Guide 2026: Sign In, 2FA & Troubleshooting",
    description:
      "A beginner's guide to logging in to PrimeXBT: sign-in steps, Google login, two-factor authentication, password reset, and troubleshooting common login issues.",
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
    image: [`${SITE_URL}/images/primexbt-login-account-screen.jpg`],
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
        name: "PrimeXBT Login Guide",
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
              PrimeXBT Login Guide: Sign In, 2FA, and Troubleshooting in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Logging in to PrimeXBT is quick, but a wrong click on a
              phishing link or a lost 2FA app can turn it into a headache.
              This guide covers the sign-in steps, Google login, two-factor
              codes, password resets, and fixes for the most common login
              problems.
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
              src="/images/primexbt-login-account-screen.jpg"
              alt="PrimeXBT account sign-in screen for existing users"
              width={1400}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              The PrimeXBT sign-in form. Always verify the site address before
              entering your credentials.
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
                <strong>Sign in</strong> with your registered email and
                password, or use Continue with Google if you registered that
                way.
              </li>
              <li>
                <strong>Complete 2FA</strong> by entering the 6-digit code
                from your authenticator app when prompted.
              </li>
              <li>
                <strong>Forgot your password?</strong> Use the reset link
                below the Sign In button and check your inbox.
              </li>
              <li>
                <strong>Locked out?</strong> Repeated wrong attempts trigger
                a temporary lock. Wait, then retry carefully or contact 24/7
                support.
              </li>
              <li>
                <strong>Verify the URL</strong> every time. Phishing copies
                of the login page are the most common way accounts get
                stolen.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#sign-in-steps" className="underline underline-offset-4">
                  How to sign in
                </a>
              </li>
              <li>
                <a href="#two-factor" className="underline underline-offset-4">
                  Two-factor authentication
                </a>
              </li>
              <li>
                <a href="#password-reset" className="underline underline-offset-4">
                  Resetting a forgotten password
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="underline underline-offset-4">
                  Troubleshooting login problems
                </a>
              </li>
              <li>
                <a href="#security-habits" className="underline underline-offset-4">
                  Login security habits
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

        <Section id="sign-in-steps">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to sign in to PrimeXBT
          </h2>

          <ol className="mt-6 space-y-6">
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 1: Open the official site
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Type the PrimeXBT address yourself or use a bookmark you
                saved earlier, rather than clicking links from emails or
                messages. Fake login pages that harvest credentials are one
                of the most common crypto scams.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 2: Click Sign In
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                The Sign In button sits in the top-right corner of the
                homepage. Clicking it opens the login form.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 3: Enter your email and password
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                Type the email address you registered with and your password.
                If you signed up using Google, choose Continue with Google
                instead and complete the Google flow.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-black text-slate-950">
                Step 4: Enter your 2FA code
              </h3>
              <p className="mt-3 leading-8 text-slate-800">
                If two-factor authentication is enabled, you will be asked
                for the 6-digit code from your authenticator app. Open the
                app, read the current code, and enter it before it expires.
                Then click Sign In to reach your dashboard.
              </p>
            </li>
          </ol>
        </Section>

        <Section id="two-factor">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Two-factor authentication (2FA)
          </h2>

          <figure className="mt-6">
            <Image
              src="/images/primexbt-login-platform-view.jpg"
              alt="PrimeXBT trading platform view after a successful secure login"
              width={2560}
              height={1280}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              A successful login lands you on the PrimeXBT trading platform.
              Keep 2FA enabled so a stolen password alone is not enough to get
              in.
            </figcaption>
          </figure>

          <p className="mt-6 leading-8 text-slate-800">
            2FA adds a second check after your password: a short-lived code
            generated on your phone. Even if someone steals your password,
            they cannot log in without that code. Use an authenticator app
            rather than SMS when you have the choice, because SMS codes can
            be intercepted through SIM-swap attacks.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Do this once:</strong> when you enable 2FA, PrimeXBT
              shows backup or recovery codes. Save them offline, on paper in
              a safe place. If your phone is lost or reset, those codes are
              the fastest way back into your account.
            </p>
          </div>
        </Section>

        <Section id="password-reset">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Resetting a forgotten password
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Below the Sign In button you will find a Forgot your password
            link. Click it, enter the email address you registered with, and
            check your inbox for reset instructions. Follow the link in the
            email to set a new password.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Choose a new password that is unique to PrimeXBT and store it in
            a password manager. If you do not receive the reset email,
            check spam and promotions folders, confirm the address matches
            your registration, and request another email before contacting
            support.
          </p>
        </Section>

        <Section id="troubleshooting">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Troubleshooting common login problems
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>"Invalid email or password":</strong> retype both
              carefully, watching for caps lock and autocorrect on mobile.
              Password managers avoid most typos.
            </li>
            <li>
              <strong>2FA code rejected:</strong> authenticator codes expire
              every 30 seconds, so enter the current one quickly. If your
              phone&apos;s clock has drifted, enable automatic time in its
              settings, since code generation depends on accurate time.
            </li>
            <li>
              <strong>Account temporarily locked:</strong> too many failed
              attempts trigger a cooldown. Wait for the stated period instead
              of hammering retries, which only extends it.
            </li>
            <li>
              <strong>Page will not load or buttons do nothing:</strong> try
              a different browser, disable aggressive ad blockers for the
              site, or clear cache and cookies. Outdated browsers can also
              break the login form.
            </li>
            <li>
              <strong>Google login loops:</strong> if Continue with Google
              bounces you back, make sure you are signed in to the same
              Google account you registered with, then try an incognito
              window.
            </li>
          </ul>

          <p className="mt-4 leading-8 text-slate-800">
            If none of this works, PrimeXBT&apos;s support team is available
            around the clock through live chat and email. Have your
            registered email address ready so they can identify the account.
          </p>
        </Section>

        <Section id="security-habits">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Login security habits worth keeping
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Bookmark the real site</strong> and never log in from
              links in emails, DMs, or ads.
            </li>
            <li>
              <strong>Keep 2FA on</strong> and store backup codes offline.
            </li>
            <li>
              <strong>Use a unique password</strong> managed by a password
              manager, not memorized variations.
            </li>
            <li>
              <strong>Log out on shared devices</strong> and avoid public
              Wi-Fi for trading logins.
            </li>
            <li>
              <strong>Review active sessions</strong> in your account
              settings and revoke anything you do not recognize.
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
              New here? Start with the full review
            </h2>

            <p className="mt-3 leading-7 text-slate-800">
              The full review covers fees, leverage, regulation, restricted
              countries, and platform tools, so you know what you are
              logging in to.
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
              This page was reviewed on {UPDATED}. Login flows and security
              options can change. Check the current provider pages before
              relying on any specific step.
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
                for the current sign-in page, 2FA settings, and support
                channels.
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
              PrimeXBT&apos;s official website before logging in or
              depositing funds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
