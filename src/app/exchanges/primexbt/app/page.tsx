import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/app`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT App 2026: Mobile Trading Review & Download Guide",
  description:
    "PrimeXBT app review 2026: download for Android and iOS, mobile trading features, security settings, and honest limitations compared to the desktop platform.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT App 2026: Mobile Trading Review & Download Guide",
    description:
      "Is the PrimeXBT mobile app worth it? Download steps, features, security, and where the app falls short of desktop. Verified October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-platform-overview.png`,
        width: 1377,
        height: 787,
        alt: "PrimeXBT trading interface, mirrored in the mobile app for Android and iOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT App 2026",
    description:
      "Download guide and honest review of the PrimeXBT mobile app: features, security, and limitations.",
    images: [`${SITE_URL}/images/primexbt-platform-overview.png`],
  },
};

const faqItems = [
  {
    question: "How do I download the PrimeXBT app?",
    answer:
      "On Android, open the Google Play Store, search for PrimeXBT, and install the official app. On iOS, open the App Store, search for PrimeXBT, and tap Get. Always install from the official store listing and double-check the developer name before installing.",
  },
  {
    question: "Is the PrimeXBT app free?",
    answer:
      "Yes, the app itself is free to download and use. You only pay the normal trading costs: spreads, commissions, funding, and withdrawal fees, exactly as on the web platform.",
  },
  {
    question: "Can I do everything on the app that I can on desktop?",
    answer:
      "The app covers the essentials: trading, deposits, withdrawals, and account management. Complex multi-chart analysis, some advanced order settings, and heavy research are more comfortable on desktop. Serious chart work still belongs on a bigger screen.",
  },
  {
    question: "Is the PrimeXBT mobile app safe?",
    answer:
      "The app supports the same account protections as the web platform, including two-factor authentication and biometric login where your device allows it. Most mobile security incidents come from phishing, fake apps, and unsecured devices rather than the official app itself.",
  },
  {
    question: "Why can't I find the PrimeXBT app in my app store?",
    answer:
      "Availability varies by country due to regional restrictions. If the official app does not appear in your store, PrimeXBT may not serve your region, and you should check the restricted countries list in our full review rather than sideloading anything from unofficial sources.",
  },
  {
    question: "Should beginners trade on the app or on desktop?",
    answer:
      "Learn on desktop first, where the full interface, order panel, and risk controls are easiest to see. Use the app for monitoring positions and managing on the go once you already understand what you are doing.",
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

export default function PrimeXBTAppPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT App 2026: Mobile Trading Review & Download Guide",
    description:
      "An educational review of the PrimeXBT mobile app: Android and iOS download steps, features, security settings, and honest limitations versus desktop.",
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
        name: "PrimeXBT App",
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
              PrimeXBT App: Mobile Trading Review &amp; Download Guide for 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              The PrimeXBT app puts the trading platform in your pocket:
              charts, orders, deposits, and withdrawals on Android and iOS.
              This guide covers how to download it safely, what it does
              well, where it falls short of desktop, and the security
              settings you should enable first.
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
              alt="PrimeXBT trading interface, mirrored in the mobile app for Android and iOS"
              width={1200}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              The PrimeXBT trading experience, available on desktop and in
              the mobile app for Android and iOS.
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
                <strong>Free on Android and iOS,</strong> installed from the
                official store listings only.
              </li>
              <li>
                <strong>Covers the essentials:</strong> trading, charts,
                deposits, withdrawals, and account management on the go.
              </li>
              <li>
                <strong>Desktop still wins</strong> for serious chart
                analysis and complex order management.
              </li>
              <li>
                <strong>Enable 2FA and biometric login</strong> before
                funding, and never install from unofficial sources.
              </li>
              <li>
                <strong>New to the platform?</strong> Start with our{" "}
                <Link
                  href="/exchanges/primexbt/trading-guide"
                  className="font-bold text-emerald-800 underline underline-offset-4"
                >
                  trading guide
                </Link>{" "}
                on desktop, then use the app for monitoring.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#download-android" className="underline underline-offset-4">
                  Download on Android
                </a>
              </li>
              <li>
                <a href="#download-ios" className="underline underline-offset-4">
                  Download on iOS
                </a>
              </li>
              <li>
                <a href="#features" className="underline underline-offset-4">
                  What the app can do
                </a>
              </li>
              <li>
                <a href="#limitations" className="underline underline-offset-4">
                  Where the app falls short
                </a>
              </li>
              <li>
                <a href="#security" className="underline underline-offset-4">
                  Mobile security settings
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

        <Section id="download-android">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Download on Android
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-800">
            <li>Open the Google Play Store on your device.</li>
            <li>Search for PrimeXBT.</li>
            <li>
              Find the official PrimeXBT listing and verify the developer
              name before tapping install.
            </li>
            <li>Tap Install and wait for the download to finish.</li>
            <li>
              Open the app and log in, or register a new account if you do
              not have one yet.
            </li>
          </ol>

          <p className="mt-4 leading-8 text-slate-800">
            If the official app does not appear in your Play Store,
            PrimeXBT may be restricted in your region. Do not sideload APK
            files from random websites. Those are a classic malware vector,
            and a fake trading app can drain your account.
          </p>
        </Section>

        <Section id="download-ios">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Download on iOS
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-800">
            <li>Open the App Store on your iPhone or iPad.</li>
            <li>Tap Search and type PrimeXBT.</li>
            <li>
              Find the official PrimeXBT app in the results and check the
              developer name.
            </li>
            <li>Tap Get to download and install it.</li>
            <li>Open the app and log in or create an account.</li>
          </ol>

          <p className="mt-4 leading-8 text-slate-800">
            The same regional note applies: if the app is missing from your
            App Store, your country may be unsupported. Check the restricted
            countries section of our full review rather than looking for
            workarounds.
          </p>
        </Section>

        <Section id="features">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            What the app can do
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Trade on the go.</strong> Open and close positions on
              crypto futures and CFD markets, with market, limit, and stop
              orders.
            </li>
            <li>
              <strong>Charts and watchlists.</strong> Follow your markets
              with mobile charting and price alerts, so you are not chained
              to a desk.
            </li>
            <li>
              <strong>Deposits and withdrawals.</strong> Fund your account or
              move money out without opening a browser. See our{" "}
              <Link
                href="/exchanges/primexbt/deposit-guide"
                className="font-bold text-indigo-700 underline underline-offset-4"
              >
                deposit guide
              </Link>{" "}
              and{" "}
              <Link
                href="/exchanges/primexbt/withdrawal-guide"
                className="font-bold text-indigo-700 underline underline-offset-4"
              >
                withdrawal guide
              </Link>{" "}
              for the details.
            </li>
            <li>
              <strong>Account management.</strong> Update security settings,
              review history, and manage wallets from the app.
            </li>
            <li>
              <strong>Copy trading access.</strong> Follow strategies through
              the app if you use copy trading. Our{" "}
              <Link
                href="/exchanges/primexbt/copy-trading"
                className="font-bold text-indigo-700 underline underline-offset-4"
              >
                copy trading guide
              </Link>{" "}
              explains how it works and what to watch for.
            </li>
          </ul>
        </Section>

        <Section id="limitations">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Where the app falls short
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Honest assessment: a phone screen is a compromise. Multi-chart
            layouts, detailed drawing tools, and scanning many markets at
            once are all harder on mobile. Complex order tickets with
            several conditional legs are easier to misconfigure on a small
            screen, and fat-finger errors are a real phenomenon.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            The practical setup most experienced traders use: do your
            analysis and position planning on desktop, then use the app for
            monitoring, alerts, and managing existing positions when away.
            Opening brand-new leveraged positions from a phone, in a hurry,
            is where avoidable mistakes happen.
          </p>
        </Section>

        <Section id="security">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Mobile security settings
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Enable two-factor authentication</strong> on your
              account. This is the single most important setting, on mobile
              or desktop.
            </li>
            <li>
              <strong>Use biometric login</strong> (fingerprint or face
              unlock) so a stolen unlocked moment does not become a stolen
              account.
            </li>
            <li>
              <strong>Keep your OS and the app updated.</strong> Updates
              patch the vulnerabilities attackers actually exploit.
            </li>
            <li>
              <strong>Avoid public Wi-Fi for trading</strong> or use a
              trusted VPN. Airport networks are not where you want to move
              money.
            </li>
            <li>
              <strong>Never share login codes</strong> with anyone, including
              people claiming to be support. Real support never asks for
              them.
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
              The app is one chapter. The full review covers trading
              products, leverage, regulation, restricted countries, fees,
              and who should skip PrimeXBT entirely.
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
              This page was reviewed on {UPDATED}. App features, store
              availability, and supported regions change over time. Check
              the official store listings and provider terms before
              installing.
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
                for current products, app links, and legal links.
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
