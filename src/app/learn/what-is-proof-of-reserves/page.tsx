import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "What Is Proof of Reserves? (Beginner Guide 2026)",
  description:
    "Learn what Proof of Reserves (PoR) means, how exchanges use Merkle-tree audits to prove they hold customer assets, and why PoR is useful but not a guarantee of future solvency.",
};

const faqs = [
  {
    question: "What is Proof of Reserves in crypto?",
    answer:
      "Proof of Reserves (PoR) is a transparency method that lets a custodial platform demonstrate it currently holds enough assets to cover customer balances, usually via cryptographic proofs and/or independent audits.",
  },
  {
    question: "Does Proof of Reserves mean an exchange is safe?",
    answer:
      "PoR is a strong transparency signal, but it is not a full safety guarantee. It is a snapshot in time and may not cover off‑chain liabilities, future losses, or poor risk management.",
  },
  {
    question: "How does Proof of Reserves work technically?",
    answer:
      "Many PoR implementations use Merkle trees to aggregate anonymized customer balances into a single root hash, then compare those liabilities to on‑chain reserve wallets and publish the results.",
  },
  {
    question: "How can I check if a crypto exchange has Proof of Reserves?",
    answer:
      "Look for a dedicated Proof of Reserves, transparency, or audit page in the exchange’s footer or help center. A strong PoR report will include reserve wallet information, methodology, auditor details, and a recent date.",
  },
  {
    question: "Is Proof of Reserves enough on its own to trust an exchange?",
    answer:
      "No. You should combine PoR with other checks: security practices, incident history, regulation, fees, and your own account‑level security, such as hardware keys and withdrawal allowlists.",
  },
];

function ProofOfReservesJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://cryptosbeginner.com/learn/what-is-proof-of-reserves",
    },
    headline: "What Is Proof of Reserves? (Beginner Guide 2026)",
    description:
      "Beginner‑friendly explanation of Proof of Reserves (PoR): how exchanges prove they hold customer assets, how Merkle‑tree audits work, and why PoR is useful but limited.",
    image:
      "https://cryptosbeginner.com/images/what-is-proof-of-reserves-hero.png",
    datePublished: "2026-06-28",
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

  // Scrub "<" for safety as per Next.js JSON-LD guidance
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

export default function ProofOfReservesPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <ProofOfReservesJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Learn • Trust & Safety
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What Is Proof of Reserves?
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  Proof of Reserves (PoR) is how a crypto exchange or
                  custodial platform demonstrates it actually holds enough
                  assets to cover customer balances at a given moment—usually
                  using on‑chain reserve wallets, cryptographic proofs, and
                  independent audits.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Author: Sophia Chen</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Reviewed by: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 28 June 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TL;DR (Beginner Summary)
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Proof of Reserves is a transparency tool—not a magic
                  safety guarantee. A good PoR report shows that an exchange
                  currently holds enough crypto in reserve wallets to match
                  customer balances, and lets users or auditors verify those
                  claims. You should still combine PoR with other checks
                  (security, fees, regulation, and your own account hygiene)
                  before deciding where to keep your money.
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
                  <a href="#definition" className="hover:text-emerald-700">
                    • Simple definition
                  </a>
                </li>
                <li>
                  <a href="#why-matters" className="hover:text-emerald-700">
                    • Why PoR matters
                  </a>
                </li>
                <li>
                  <a href="#how-works" className="hover:text-emerald-700">
                    • How PoR works technically
                  </a>
                </li>
                <li>
                  <a href="#limitations" className="hover:text-emerald-700">
                    • Limitations & blind spots
                  </a>
                </li>
                <li>
                  <a
                    href="#how-exchanges-use"
                    className="hover:text-emerald-700"
                  >
                    • How exchanges publish PoR
                  </a>
                </li>
                <li>
                  <a
                    href="#how-beginners-use"
                    className="hover:text-emerald-700"
                  >
                    • How beginners should use PoR
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
          <article className="prose prose-slate max-w-none">
            <h2 id="definition">Simple definition</h2>
            <p>
              In traditional finance, “reserves” are the assets a bank or
              custodian keeps to meet withdrawal requests and obligations. In
              crypto, Proof of Reserves is any method—usually a mix of
              on‑chain data, cryptography, and independent auditing—that
              lets you verify a platform currently holds enough crypto to
              cover customer balances it is responsible for.[web:1][web:9]
            </p>
            <p>
              A typical PoR report compares two things: the total customer
              liabilities (how much crypto users should have on the platform)
              and the assets in reserve wallets the platform controls. If the
              reserves equal or exceed the liabilities, the exchange can
              claim it is fully backed at that snapshot in time.[web:5][web:8]
            </p>

            <h2 id="why-matters">Why Proof of Reserves matters</h2>
            <p>
              Centralized exchanges and custodians sit between you and the
              blockchain: they take deposits, show balances in an app, and
              route trades internally. Without transparency, you are
              trusting that those numbers reflect real assets and not
              accounting tricks or hidden holes.[web:1][web:37]
            </p>
            <p>
              Proof of Reserves emerged after high‑profile exchange failures
              and insolvencies, where customers discovered too late that the
              platform did not hold enough assets to honor withdrawals. PoR
              does not fix every risk, but it raises the bar for
              transparency and makes it harder for custodians to hide a
              shortfall for long.[web:1][web:36]
            </p>

            <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <p className="font-semibold">
                Quick takeaway for beginners
              </p>
              <p className="mt-1">
                Proof of Reserves is one of the first questions you should
                ask about any exchange: “Can you show convincing evidence
                that you hold the assets you say you do?”
              </p>
            </div>

            <h2 id="how-works">How PoR works technically (plain English)</h2>
            <p>
              Many PoR implementations use a data structure called a Merkle
              tree. Imagine every customer balance is turned into a small
              chunk of data, then pairs of chunks are repeatedly combined
              and hashed together until you are left with one final “root”
              hash that represents the entire set of balances.[web:31][web:39]
            </p>
            <p>
              The exchange can then prove that a particular anonymized
              balance is included in the tree without revealing other
              customers’ data. Auditors or users compare this Merkle root
              and liability snapshot to on‑chain data from the
              platform’s reserve wallets, checking that the reserves match
              or exceed the claimed liabilities at the time of the report.[web:31][web:32]
            </p>
            <p>
              Some platforms also publish reserve wallet addresses and
              invite users to verify balances on public block explorers.
              Others commission third‑party firms to attest that the
              data was collected correctly and that the reserves matched the
              reported liabilities at the audit date.[web:11][web:32][web:39]
            </p>

            <h2 id="limitations">Limitations & blind spots</h2>
            <p>
              Proof of Reserves is still just a snapshot. It shows that on a
              specific date, the exchange’s reserves matched its reported
              customer balances under the method used. It cannot guarantee
              future behavior, sudden losses, or hidden liabilities that
              were not included in the report.[web:1][web:36]
            </p>
            <p>
              Some PoR attempts only show “proof of assets”—that the platform
              controls certain wallets—without fully accounting for
              all liabilities. Others rely on opaque methodologies, infrequent
              updates, or auditors who do not specialize in crypto. A strong
              PoR implementation will clearly explain what is included, what
              is excluded, how often reports are refreshed, and what users
              can verify themselves.[web:1][web:9][web:39]
            </p>
            <p>
              That is why PoR should be treated as one piece of your
              security and trust assessment, alongside incident history,
              regulation, internal controls, and your own account‑level
              safety practices.
            </p>

            <h2 id="how-exchanges-use">
              How exchanges publish Proof of Reserves
            </h2>
            <p>
              Most mainstream exchanges that support PoR publish a
              dedicated transparency or Proof of Reserves page, usually
              linked from the footer or help center. These pages often
              include reserve wallet information, PoR methodology, audit
              reports, and instructions for users to verify their own
              balances against a Merkle tree or verification tool.[web:11][web:12][web:32]
            </p>
            <p>
              For example, you will often see:
            </p>
            <ul>
              <li>
                A list of on‑chain reserve wallets and links to block
                explorers.[web:11][web:32]
              </li>
              <li>
                A recent audit or attestation letter from a third‑party firm
                explaining scope and date.[web:1][web:39]
              </li>
              <li>
                A technical breakdown of how liabilities were collected,
                anonymized, and aggregated.[web:31][web:37]
              </li>
              <li>
                Optional tools that let you check whether your anonymized
                balance was included in the latest PoR run.[web:31][web:32][web:33]
              </li>
            </ul>

            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
              <p className="font-semibold">
                Helpful external resources (neutral references)
              </p>
              <p className="mt-1">
                For more technical detail and examples of PoR in practice,
                you can review:
              </p>
              <ul className="mt-1 list-disc pl-5">
                <li>
                  Educational explainer on Proof of Reserves by CoinGecko
                  (overview of PoR goals and high‑level mechanics).{" "}
                  <a
                    href="https://www.coingecko.com/learn/what-is-proof-of-reserves-por"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    View CoinGecko PoR guide
                  </a>
                </li>
                <li>
                  Crypto.com’s public Proof of Reserves page, which shows
                  how a large exchange publishes reserve data and invites
                  user verification.{" "}
                  <a
                    href="https://crypto.com/us/proof-of-reserves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    View Crypto.com PoR page
                  </a>
                </li>
                <li>
                  Binance’s Proof of Reserves section, with methodology and
                  reserve wallet references for major assets.{" "}
                  <a
                    href="https://www.binance.com/en/proof-of-reserves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    View Binance PoR page
                  </a>
                </li>
              </ul>
              <p className="mt-2 text-xs text-slate-600">
                We link to these pages as neutral transparency examples, not
                as endorsements or investment advice. Always do your own
                research and consider your local regulations and risk
                tolerance.[web:9][web:36]
              </p>
            </div>

            <h2 id="how-beginners-use">
              How beginners should use PoR when choosing an exchange
            </h2>
            <p>
              As a beginner, your goal is not to become an auditor—it is to
              avoid platforms that hide basic facts about how they store
              customer assets. You can use PoR as a simple filter: prefer
              exchanges that offer clear, recent, and verifiable PoR reports
              over ones that do not.[web:9][web:36]
            </p>
            <p>
              Combine this with other checks:
            </p>
            <ul>
              <li>
                Read our{" "}
                <Link
                  href="/exchanges/best-crypto-exchanges-2026"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Best Crypto Exchanges 2026
                </Link>{" "}
                comparison to see how major platforms stack up on fees,
                transparency, and beginner‑friendliness.
              </li>
              <li>
                Use the{" "}
                <Link
                  href="/tools/exchange-finder"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Exchange Finder Quiz
                </Link>{" "}
                to match with exchanges that fit your country and risk
                profile.
              </li>
              <li>
                Estimate your all‑in trading costs using our{" "}
                <Link
                  href="/tools/fee-calculator"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  Fee Calculator
                </Link>
                , then consider whether those costs are fair given the
                platform’s transparency and security.[web:29][web:30]
              </li>
            </ul>
            <p>
              For some countries, we also maintain{" "}
              <Link
                href="/regions"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                regional guides
              </Link>{" "}
              that explain which exchanges you can actually access, local
              payment rails, and practical safety tips for P2P and bank
              transfers.
            </p>

            <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-4 text-sm">
              <h3 className="m-0 text-base font-semibold text-emerald-900">
                Next steps for deeper safety
              </h3>
              <p className="mt-2 text-emerald-900">
                Once you understand Proof of Reserves, the next step is
                learning how to check it in practice and how to combine it
                with other security checks. We are publishing dedicated
                guides on:
              </p>
              <ul className="mt-2 list-disc pl-5 text-emerald-900">
                <li>
                  <Link
                    href="/learn/how-to-check-exchange-proof-of-reserves"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    How to Check Exchange Proof of Reserves
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/crypto-exchange-security-checklist"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    Crypto Exchange Security Checklist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security/exchange-incidents"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    Exchange Security Incidents (Historical Overview)
                  </Link>
                </li>
              </ul>
              <p className="mt-2 text-xs text-emerald-900">
                If a link above is not live yet, it means the guide is under
                review and will be added soon. We prefer shipping safety
                content only after it has been carefully checked.
              </p>
            </div>

            <h2 id="faq">FAQ: Proof of Reserves</h2>
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
                  Ready to compare beginner‑friendly exchanges?
                </p>
                <p className="mt-1 text-slate-700">
                  We score platforms on fees, transparency, Proof of Reserves,
                  beginner education, and regional access—so you do not have
                  to start from scratch.
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