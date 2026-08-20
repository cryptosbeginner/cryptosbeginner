import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange Security Checklist (Beginner Guide 2026)",
  description:
    "Use this security checklist before and after you deposit on any crypto exchange: platform-side safety signals and account-level protections for beginners.",
};

const faqs = [
  {
    question: "Should I keep all my crypto on exchanges?",
    answer:
      "No. Exchanges are useful for buying, selling, and short-term trading, but long-term holdings are generally safer in wallets you control, especially hardware wallets with good seed-phrase protection.",
  },
  {
    question: "Is 2FA enough to protect my exchange account?",
    answer:
      "2FA is essential, but it is only one layer. You should also use strong unique passwords, passkeys or hardware 2FA when available, withdrawal allowlists, and careful phishing avoidance.",
  },
  {
    question: "What is a withdrawal allowlist?",
    answer:
      "A withdrawal allowlist (or address whitelist) lets you lock withdrawals so funds can only be sent to a list of pre-approved wallet addresses, reducing the impact of account compromises.",
  },
  {
    question:
      "How often should I review my exchange security settings?",
    answer:
      "At least every few months, and any time the exchange announces new security features, incident reports, or major changes to its policies or terms of use.",
  },
  {
    question: "Do I need a hardware wallet if I use exchanges?",
    answer:
      "You don’t have to, but hardware wallets are strongly recommended for savings you plan to hold for longer periods. Exchanges are better treated as access ramps, not long-term vaults.",
  },
];

function SecurityChecklistJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://cryptosbeginner.com/learn/crypto-exchange-security-checklist",
    },
    headline:
      "Crypto Exchange Security Checklist (Beginner Guide 2026)",
    description:
      "Beginner-focused security checklist for using crypto exchanges: platform-side safety signals and account-level protections.",
    image:
      "https://cryptosbeginner.com/images/crypto-exchange-security-checklist-hero.png",
    datePublished: "2026-07-06",
    dateModified: "2026-08-12",
    author: [
      {
        "@type": "Person",
        name: "Sophia Chen",
        url:
          "https://cryptosbeginner.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      logo: {
        "@type": "ImageObject",
        url:
          "https://cryptosbeginner.com/images/logo-cryptosbeginner.png",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const safeArticle = JSON.stringify(articleLd).replace(/</g, "\\u003c");
  const safeFaq = JSON.stringify(faqLd).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: safeArticle }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

export default function CryptoExchangeSecurityChecklistPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <SecurityChecklistJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Learn • Trust & Safety
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Crypto Exchange Security Checklist
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  Before you deposit or trade on any crypto exchange, you can
                  run through a short security checklist to reduce avoidable
                  risks. This guide covers both platform-side security signals
                  and account-level protections you control.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Author: Sophia Chen</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Reviewed by: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 6 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TL;DR (Checklist Summary)
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Check the platform’s transparency (PoR, incidents, terms),
                  enable strong account protections (unique password, 2FA or
                  passkeys, withdrawal allowlists), avoid keeping more funds on
                  exchanges than you need for short-term trades, and make a
                  plan for moving savings into wallets you control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <nav
              aria-label="Table of contents"
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                On this page
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                <li>
                  <a href="#before-choosing" className="hover:text-emerald-700">
                    • Checklist before choosing an exchange
                  </a>
                </li>
                <li>
                  <a href="#account-security" className="hover:text-emerald-700">
                    • Account-level security settings
                  </a>
                </li>
                <li>
                  <a href="#daily-habits" className="hover:text-emerald-700">
                    • Everyday habits that prevent mistakes
                  </a>
                </li>
                <li>
                  <a href="#what-not-to-do" className="hover:text-emerald-700">
                    • What not to do
                  </a>
                </li>
                <li>
                  <a href="#printable" className="hover:text-emerald-700">
                    • Printable checklist
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-700">
                    • FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="max-w-none text-slate-900 text-sm sm:text-base leading-relaxed">
            <h2
              id="before-choosing"
              className="text-lg font-semibold text-slate-900"
            >
              Checklist before choosing an exchange
            </h2>
            <p className="mt-2">
              This first checklist focuses on the exchange itself—how it
              handles assets, communicates risk, and responds to incidents. You
              can use it alongside our reviews and regional guides when
              deciding where to open an account.
            </p>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Platform-side checks
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    Proof of Reserves or equivalent transparency reports,
                    clearly explained and refreshed regularly.
                  </li>
                  <li>
                    Clear separation of customer assets from company
                    operating funds and trading accounts.
                  </li>
                  <li>
                    Documented incident history, with explanations of what
                    happened and how affected users were treated.
                  </li>
                  <li>
                    Public security documentation: 2FA support, passkeys or
                    hardware key support, withdrawal controls, device
                    management.
                  </li>
                  <li>
                    Terms of use and risk disclosures that are actually
                    readable—not hidden or overly vague.
                  </li>
                  <li>
                    Regional access and compliance that match your country,
                    so you are not forced into gray-area usage.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Basic red flags to avoid
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    No visible Proof of Reserves, or only vague marketing
                    claims about “backed 1:1” without detail.
                  </li>
                  <li>
                    Long unexplained outages, delayed withdrawals, or
                    frequent “maintenance” around volatile market events.
                  </li>
                  <li>
                    Aggressive return promises, guaranteed profits, or
                    pressure to deposit quickly.
                  </li>
                  <li>
                    No clear incident page, despite public reports of past
                    hacks or losses.
                  </li>
                  <li>
                    Support or staff pushing you to move conversations off
                    official channels.
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              You can combine this checklist with our{" "}
              <Link
                href="/exchanges/best-crypto-exchanges-2026"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                Best Crypto Exchanges 2026
              </Link>{" "}
              guide and the{" "}
              <Link
                href="/learn/what-is-proof-of-reserves"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                Proof of Reserves explainer
              </Link>{" "}
              to get a fuller picture of how different platforms approach
              transparency.
            </p>

            <h2
              id="account-security"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Account-level security settings
            </h2>
            <p className="mt-2">
              Even on a well-run exchange, your account is only as safe as
              its weakest setting. Before you deposit meaningful funds, walk
              through these steps:
            </p>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Essential protections
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    Use a strong, unique password or passphrase—never reused
                    from email, social media, or bank accounts.
                  </li>
                  <li>
                    Turn on two-factor authentication (2FA), ideally via
                    hardware security key or authenticator app rather than
                    SMS.
                  </li>
                  <li>
                    Enable withdrawal allowlists / address whitelists where
                    possible, and lock changes behind 2FA and cooling-off
                    periods.
                  </li>
                  <li>
                    Review active devices and sessions, and revoke any that
                    you do not recognize.
                  </li>
                  <li>
                    Disable or tightly scope API keys if you use bots or
                    third-party tools, and never give them withdrawal
                    permission.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Extra protections (recommended)
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    Use a separate email address for exchange accounts, with
                    its own strong password and 2FA.
                  </li>
                  <li>
                    Lock your SIM with a PIN and ensure mobile provider
                    accounts use strong authentication to reduce SIM-swap
                    risk.
                  </li>
                  <li>
                    Configure login alerts and withdrawal alerts so you get
                    notified of important activity.
                  </li>
                  <li>
                    Consider passkeys or hardware keys where supported; they
                    resist many phishing and credential-theft attempts.
                  </li>
                </ul>
              </div>
            </div>

            <h2
              id="daily-habits"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Everyday habits that prevent mistakes
            </h2>
            <p className="mt-2">
              Most losses come from a mix of social engineering and hurried
              decisions. The following habits dramatically cut those risks:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Always check the URL and certificate in your browser before
                logging in—avoid links in emails and DMs; type the domain
                manually or use a trusted bookmark.
              </li>
              <li>
                Never share screenshots of your security settings, recovery
                codes, or internal IDs on social media.
              </li>
              <li>
                Treat unsolicited support messages (email, chat, Telegram)
                as suspicious by default, especially if they ask you to
                “verify” codes or move funds.
              </li>
              <li>
                Keep your devices updated, with reputable antivirus or
                endpoint protection if possible.
              </li>
              <li>
                Regularly review your exchange balances and recent
                transactions so you notice unexpected changes early.
              </li>
            </ul>

            <h2
              id="what-not-to-do"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              What not to do (common pitfalls)
            </h2>
            <p className="mt-2">
              Avoid the following behaviors. They show up again and again in
              real-world scam and compromise reports:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Reusing passwords between exchanges, email, banks, and
                social media.
              </li>
              <li>
                Logging into your exchange on shared, public, or unknown
                devices.
              </li>
              <li>
                Disabling 2FA because it feels inconvenient.
              </li>
              <li>
                Storing seed phrases, backup codes, or security keys in
                cloud notes, screenshots, or unencrypted files.
              </li>
              <li>
                Keeping all long-term savings on exchanges instead of moving
                them to wallets you control.
              </li>
            </ul>

            <h2
              id="printable"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Printable checklist
            </h2>
            <p className="mt-2">
              If you prefer a physical copy, you can print this section and
              tick items off before funding any new account:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>Platform has clear PoR / transparency and incident pages.</li>
              <li>
                Strong unique password/passphrase + 2FA/passkeys enabled.
              </li>
              <li>Withdrawal allowlist and alerts configured.</li>
              <li>API keys disabled or tightly scoped.</li>
              <li>
                Devices and sessions reviewed; login and withdrawal alerts
                enabled.
              </li>
              <li>
                Plan in place to move long-term savings into self-custody
                wallets.
              </li>
            </ul>

            <p className="mt-4">
              For deeper self-custody practices, see our{" "}
              <Link
                href="/learn/seed-phrase-security"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                Seed Phrase Security
              </Link>{" "}
              guide, which focuses on protecting wallets you control.
            </p>

            <h2
              id="faq"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              FAQ: Crypto exchange security checklist
            </h2>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group mt-3 rounded-lg border border-slate-200 bg-slate-50"
              >
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-900">
                  {faq.question}
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-800">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}

            <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  Ready to apply this checklist?
                </p>
                <p className="mt-1 text-slate-700">
                  Compare exchanges, then combine this checklist with our
                  Proof of Reserves guides before you decide where to keep
                  your funds.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/exchanges/best-crypto-exchanges-2026"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  View Best Crypto Exchanges 2026
                </Link>
                <Link
                  href="/tools/exchange-finder"
                  className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Take the Exchange Finder Quiz
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}