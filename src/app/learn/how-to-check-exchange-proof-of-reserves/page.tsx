import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Check Exchange Proof of Reserves (Step‑by‑Step Guide)",
  description:
    "Learn how to check a crypto exchange’s Proof of Reserves as a beginner: find the PoR page, verify reserve wallets, use Merkle tools, and spot weak reports.",
};

const faqs = [
  {
    question: "Do I need to be technical to check Proof of Reserves?",
    answer:
      "No. Most large exchanges provide a simple PoR page and, in better cases, a verification tool. You mainly need to find the page, confirm the date, see whether liabilities are included, and optionally use a Merkle verification tool.",
  },
  {
    question: "What is the first thing to check on a PoR page?",
    answer:
      "Check whether the PoR covers both assets and liabilities. A page that only lists reserve wallets without proving customer liabilities is closer to proof of assets than a full solvency picture.",
  },
  {
    question: "How often should an exchange update its Proof of Reserves?",
    answer:
      "More frequent is better. Monthly or quarterly reports with visible history are stronger than a one‑off snapshot from many months ago.",
  },
  {
    question: "Can Proof of Reserves be faked?",
    answer:
      "PoR reduces the room for abuse but cannot eliminate it. Borrowed funds, hidden liabilities, and creative accounting can still distort the picture. That is why PoR should be one of several trust checks.",
  },
  {
    question:
      "Is verifying my own balance in a Merkle tree worth the effort?",
    answer:
      "Yes. If your anonymized balance is included in the liabilities tree used for PoR, you know that the reported snapshot did not simply omit you. It is a useful extra check when exchanges provide the tools.",
  },
];

function HowToJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://cryptosbeginner.com/learn/how-to-check-exchange-proof-of-reserves",
    },
    headline:
      "How to Check Exchange Proof of Reserves (Step‑by‑Step Guide)",
    description:
      "Beginner‑friendly instructions for verifying a crypto exchange’s Proof of Reserves: find the PoR page, confirm assets and liabilities, use Merkle tools, and recognize weak reports.",
    image:
      "https://cryptosbeginner.com/images/how-to-check-proof-of-reserves-hero.png",
    datePublished: "2026-07-02",
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

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Exchange Proof of Reserves",
    description:
      "Step‑by‑step instructions for beginners who want to verify a crypto exchange’s Proof of Reserves.",
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [],
    tool: [
      {
        "@type": "HowToTool",
        name: "Exchange website or app",
      },
      {
        "@type": "HowToTool",
        name: "Blockchain explorer (for reserve wallets)",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Find the official Proof of Reserves page",
        text:
          "Log in to the exchange and scroll to the footer or help center. Look for a dedicated Proof of Reserves, transparency, or audit page.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Check date, frequency and scope",
        text:
          "Confirm when the latest PoR was published, how often reports are issued, and whether the exchange explains both assets and customer liabilities.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Verify reserve wallets on a public explorer",
        text:
          "Copy the reserve wallet addresses from the PoR page, then check balances on a reputable blockchain explorer to see whether they match the reported reserves.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Use Merkle or account‑level verification tools",
        text:
          "If the exchange offers a Merkle tree or account verification tool, follow its instructions to confirm your anonymized account balance is included in the liabilities snapshot.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Review auditor details and limitations",
        text:
          "Read who performed the attestation and what they actually checked. Look for clear explanations of limitations and avoid platforms with vague or marketing‑heavy PoR pages.",
      },
    ],
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
  const safeHowTo = JSON.stringify(howToLd).replace(/</g, "\\u003c");
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
        dangerouslySetInnerHTML={{ __html: safeHowTo }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

export default function HowToCheckPorPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <HowToJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Learn • Trust & Safety
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  How to Check Exchange Proof of Reserves
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  You do not need to be a developer or auditor to sanity‑check
                  a crypto exchange’s Proof of Reserves. This guide walks you
                  through simple, practical steps you can take as a beginner to
                  understand what a PoR page really proves—and what it does not.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Author: Sophia Chen</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Reviewed by: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 2 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TL;DR (Step‑by‑Step)
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  To check Proof of Reserves: find the exchange’s PoR page in
                  the footer or help center, confirm the date and that it covers
                  both assets and liabilities, use any “verify my balance” or
                  Merkle tools they provide, cross‑check reserve wallets on
                  public explorers, and read the auditor’s explanation and
                  limitations. If the page looks like marketing with no clear
                  method, treat that as a red flag.
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
                  <a href="#why" className="hover:text-emerald-700">
                    • Why checking PoR matters
                  </a>
                </li>
                <li>
                  <a href="#step-1" className="hover:text-emerald-700">
                    • Step 1: Find the PoR page
                  </a>
                </li>
                <li>
                  <a href="#step-2" className="hover:text-emerald-700">
                    • Step 2: Check date & scope
                  </a>
                </li>
                <li>
                  <a href="#step-3" className="hover:text-emerald-700">
                    • Step 3: Verify reserve wallets
                  </a>
                </li>
                <li>
                  <a href="#step-4" className="hover:text-emerald-700">
                    • Step 4: Use Merkle tools
                  </a>
                </li>
                <li>
                  <a href="#step-5" className="hover:text-emerald-700">
                    • Step 5: Read auditor & limits
                  </a>
                </li>
                <li>
                  <a href="#red-flags" className="hover:text-emerald-700">
                    • Green flags & red flags
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
            <h2 id="why" className="text-lg font-semibold text-slate-900">
              Why it is worth checking Proof of Reserves yourself
            </h2>
            <p className="mt-2">
              Proof of Reserves pages are designed to build trust—but they are
              not all equal. Some exchanges publish detailed, verifiable PoR
              reports with reserve wallets, Merkle trees, and third‑party
              attestations. Others offer marketing graphics with little
              substance behind them.
            </p>
            <p className="mt-2">
              As a beginner, you can use a few simple checks to separate
              stronger PoR implementations from weaker ones. This does not
              require writing code or understanding every technical detail. The
              goal is to see whether the platform takes transparency seriously
              enough to show its work and invite verification, rather than
              asking you to trust slogans.
            </p>

            <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <p className="font-semibold">Key idea</p>
              <p className="mt-1">
                A good PoR page explains how reserves and liabilities are
                measured, offers tools for users to verify their inclusion, and
                is kept reasonably up‑to‑date. A weak one is mostly marketing.
              </p>
            </div>

            <h2
              id="step-1"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Step 1: Find the official PoR or transparency page
            </h2>
            <p className="mt-2">
              First, make sure you are looking at the real thing. Log in to the
              exchange’s website or app and scroll to the footer or help center.
              Reputable platforms usually link their Proof of Reserves,
              transparency, or audit pages there, sometimes under sections like
              “Security,” “Trust,” or “Legal.”
            </p>
            <p className="mt-2">
              Avoid random blog posts or screenshots circulating on social
              media. Always start from the exchange’s own domain, then navigate
              through the menus to the PoR or reserve section.
            </p>

            <h2
              id="step-2"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Step 2: Check the date, frequency and scope
            </h2>
            <p className="mt-2">
              When you land on the PoR page, look for the report date and how
              often reports are published. Strong PoR implementations tend to
              offer monthly or quarterly attestations and a history of past
              reports, not just a single snapshot from long ago.
            </p>
            <p className="mt-2">
              Next, check scope. The PoR page should explain whether it covers:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Customer liabilities (balances owed to users).</li>
              <li>On‑chain reserve assets held by the exchange.</li>
              <li>Any limitations—such as which assets are covered.</li>
            </ul>

            <h2
              id="step-3"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Step 3: Verify reserve wallets on a blockchain explorer
            </h2>
            <p className="mt-2">
              Many exchanges publish the addresses of their reserve wallets on
              their PoR pages. As a user, you can copy those addresses and
              inspect them on a public blockchain explorer to confirm that
              on‑chain balances roughly match the reported reserves.
            </p>
            <p className="mt-2">
              When checking, keep a few things in mind:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Focus on the snapshot: try to compare balances around the
                reported PoR date, not just current balances.
              </li>
              <li>
                Expect operational movement: exchanges move funds between hot
                and cold wallets regularly, so some noise is normal.
              </li>
              <li>
                Look for clarity: a PoR page that clearly lists reserve
                addresses and their roles is more transparent than one that
                hides them behind vague charts.
              </li>
            </ul>

            <h2
              id="step-4"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Step 4: Use Merkle or account‑level verification tools
            </h2>
            <p className="mt-2">
              The strongest PoR setups let you verify that your own anonymized
              account balance was included in the liabilities snapshot. Some
              platforms provide interfaces where you can log in, generate a
              Merkle leaf or record ID, and check it against the published
              Merkle root via a verification tool.
            </p>
            <p className="mt-2">
              You do not need to understand every cryptographic detail. The key
              point is that the exchange offers a way for you to confirm your
              inclusion in the liabilities side of the PoR, not just the asset
              side.
            </p>

            <h2
              id="step-5"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Step 5: Review auditor details and built‑in limitations
            </h2>
            <p className="mt-2">
              Finally, read who performed any attestation and what they
              examined. Check whether the report was issued by an independent
              firm with clear methodology, not just by the exchange itself.
            </p>
            <p className="mt-2">
              Look for auditor name and credentials, explanation of how
              balances were processed, and discussion of limitations—such as
              off‑chain liabilities that PoR cannot fully capture. A candid PoR
              page will acknowledge that it cannot guarantee future solvency,
              even if the snapshot looks healthy.
            </p>

            <h2
              id="red-flags"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Green flags and red flags to watch for
            </h2>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <p className="font-semibold">Green flags</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    Recent PoR dates with visible history and clear update
                    frequency.
                  </li>
                  <li>
                    Published reserve wallet addresses and instructions for
                    verifying them on public explorers.
                  </li>
                  <li>
                    A Merkle tree or similar liability commitment plus
                    user‑level verification tools.
                  </li>
                  <li>
                    Independent attestation alongside clear explanation of
                    scope and limitations.
                  </li>
                  <li>
                    Honest discussion of what PoR does not prove, instead of
                    implying total safety.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                <p className="font-semibold">Red flags</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    PoR pages that only show asset balances without proving
                    liabilities or explaining methodology.
                  </li>
                  <li>
                    Snapshots that are many months old with no clear plan for
                    updates.
                  </li>
                  <li>
                    No way for individual users to verify their own inclusion in
                    the liabilities snapshot.
                  </li>
                  <li>
                    Auditor information that is missing, vague, or appears
                    conflicted.
                  </li>
                  <li>
                    Heavy marketing language around PoR with little technical
                    substance or transparency.
                  </li>
                </ul>
              </div>
            </div>

            <h2
              id="faq"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              FAQ: Checking Proof of Reserves
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
                  Continue building your safety toolkit
                </p>
                <p className="mt-1 text-slate-700">
                  Proof of Reserves is just one part of choosing a safer
                  exchange. Next, combine it with our security checklist and
                  incident history before deciding where to keep your funds.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Read &quot;What Is Proof of Reserves?&quot;
                </Link>
                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  View Security Checklist
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Compare beginner‑friendly exchanges that take transparency
                  seriously
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  We score platforms on fees, PoR implementation, security
                  practices, and beginner experience—especially for regional
                  markets.
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}