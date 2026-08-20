import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How P2P Escrow Works on Crypto Exchanges",
  description:
    "Learn how peer-to-peer (P2P) crypto escrow works on exchanges: how orders are matched, how funds are locked, and how to stay safe.",
};

const faqs = [
  {
    question: "What is P2P trading on a crypto exchange?",
    answer:
      "P2P trading lets two users trade directly: one sends local money (bank transfer, mobile wallet, cash) and the other releases crypto, with the exchange acting as an escrow and dispute resolver.",
  },
  {
    question: "What does escrow mean in P2P trading?",
    answer:
      "Escrow means the exchange temporarily locks the seller’s crypto so they cannot move it until the trade is completed or a dispute is resolved.",
  },
  {
    question: "Is P2P trading risk-free if escrow is used?",
    answer:
      "No. Escrow helps, but you must still avoid leaving platform chat, double-check names, and watch for payment fraud. P2P trading requires attention and caution.",
  },
  {
    question: "Can I lose money if I pay but the seller refuses to release crypto?",
    answer:
      "If you pay and can prove it with valid evidence, you should open a dispute. The exchange’s support team will review both sides and can release escrowed funds to you if the seller is at fault.",
  },
  {
    question: "Should beginners use P2P?",
    answer:
      "Beginners can use P2P safely if they understand the process and follow basic safety rules. However, some may prefer on-ramp partners or card/bank deposits until they are comfortable.",
  },
];

function P2PEscrowJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cryptosbeginner.com/learn/how-p2p-escrow-works",
    },
    headline: "How P2P Escrow Works on Crypto Exchanges",
    description:
      "Beginner-friendly explanation of how P2P escrow works on crypto exchanges: order matching, locking funds, releasing or disputing trades.",
    image:
      "https://cryptosbeginner.com/images/how-p2p-escrow-works-hero.png",
    datePublished: "2026-07-14",
    dateModified: "2026-08-12",
    author: [
      {
        "@type": "Person",
        name: "Hassan Malik",
        url: "https://cryptosbeginner.com/about",
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

export default function HowP2PEscrowWorksPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <P2PEscrowJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Learn • P2P & Escrow
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  How P2P Escrow Works on Crypto Exchanges
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  Peer-to-peer (P2P) markets let you buy and sell crypto
                  using local payment methods like bank transfers, mobile
                  wallets, or cash. Escrow is what makes those trades
                  workable: the exchange locks the seller’s crypto while you
                  pay, then releases it (or resolves disputes) based on
                  evidence.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Author: Hassan Malik</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Reviewed by: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 14 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TL;DR (Escrow Summary)
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  In P2P trading, the exchange locks the seller’s crypto in
                  escrow as soon as you start an order. You pay the seller
                  using the agreed local method, upload proof, and then
                  the seller confirms payment or you raise a dispute. The
                  exchange’s support team can release escrowed funds to the
                  correct party based on evidence. You stay safe by never
                  leaving platform chat, checking names carefully, and only
                  trading with reputable merchants.
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
                  <a href="#what-p2p-is" className="hover:text-emerald-700">
                    • What P2P trading is
                  </a>
                </li>
                <li>
                  <a href="#basic-flow" className="hover:text-emerald-700">
                    • The basic escrow flow
                  </a>
                </li>
                <li>
                  <a href="#dispute" className="hover:text-emerald-700">
                    • How disputes work
                  </a>
                </li>
                <li>
                  <a href="#risks" className="hover:text-emerald-700">
                    • Common risks & red flags
                  </a>
                </li>
                <li>
                  <a href="#safety-tips" className="hover:text-emerald-700">
                    • Safety tips for beginners
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
              id="what-p2p-is"
              className="text-lg font-semibold text-slate-900"
            >
              What P2P trading is (and why people use it)
            </h2>
            <p className="mt-2">
              P2P trading connects buyers and sellers directly. Instead of
              depositing money to the exchange and using an internal order
              book, you agree to trade with another user, usually at a
              specific price and using a specific local payment method
              such as bank transfer, mobile wallet, or cash deposit.
            </p>
            <p className="mt-2">
              This approach is popular in countries where card deposits or
              direct bank on-ramps are limited, expensive, or unreliable.
              P2P markets let people use familiar payment rails while still
              ending up with crypto in their exchange account.
            </p>

            <h2
              id="basic-flow"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              The basic P2P escrow flow
            </h2>
            <p className="mt-2">
              While each exchange has its own interface, the core escrow
              flow is very similar across platforms:
            </p>

            <ol className="mt-2 list-decimal pl-5 text-slate-800">
              <li>
                <span className="font-semibold">
                  You choose an offer.
                </span>{" "}
                You browse P2P listings, filter by payment method, price,
                and merchant rating, then click an offer that fits your
                needs.
              </li>
              <li>
                <span className="font-semibold">
                  Exchange locks seller’s crypto.
                </span>{" "}
                When you start the trade, the exchange moves the seller’s
                crypto for that order into escrow, so the seller cannot
                withdraw or reuse it while the trade is in progress.
              </li>
              <li>
                <span className="font-semibold">
                  You send payment off-platform.
                </span>{" "}
                You follow the merchant’s instructions and send fiat via
                the agreed method (bank transfer, mobile wallet, etc). You
                do this outside the exchange—but always coordinate within
                the exchange’s official chat.
              </li>
              <li>
                <span className="font-semibold">
                  Seller confirms payment.
                </span>{" "}
                After checking their bank or wallet, the seller confirms
                they received payment. When they click confirm, the
                exchange releases the escrowed crypto to you.
              </li>
              <li>
                <span className="font-semibold">
                  Or a dispute is opened.
                </span>{" "}
                If something goes wrong—payment not showing, wrong amount,
                suspected fraud—you or the seller can open a dispute. The
                exchange’s support team then steps in.
              </li>
            </ol>

            <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <p className="font-semibold">
                Important: escrow protects the crypto, not your bank
                account
              </p>
              <p className="mt-1">
                Escrow stops the seller from “running away” with funds
                while you pay—but you still need to use safe payment
                methods and watch for fraud on the fiat side.
              </p>
            </div>

            <h2
              id="dispute"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              How P2P disputes usually work
            </h2>
            <p className="mt-2">
              If the buyer says “I paid” and the seller says “I did not
              receive anything,” the exchange’s dispute process is what
              decides what happens to the escrowed crypto. The exact steps
              vary, but typically include:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Buyer uploads proof of payment (receipts, bank statements,
                transaction IDs, screenshots).
              </li>
              <li>
                Seller uploads their own evidence (account statements,
                confirmation that funds didn’t arrive or arrived under a
                different name).
              </li>
              <li>
                Support reviews the evidence and chat history to check
                whether the terms were followed.
              </li>
              <li>
                Support either releases the escrowed crypto to the buyer,
                cancels the trade and returns it to the seller, or takes
                other action according to platform policy.
              </li>
            </ul>
            <p className="mt-2">
              This system is not perfect—fiat payment rails have their own
              limitations—but a well-run dispute process can resolve many
              honest mistakes and deter basic scams.
            </p>

            <h2
              id="risks"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Common risks & red flags in P2P trading
            </h2>
            <p className="mt-2">
              Escrow helps, but P2P is still higher-risk than simple card
              or bank deposits. Watch for:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Merchants who insist on moving the conversation to external
                apps and ask you to confirm outside the exchange chat.
              </li>
              <li>
                Requests to send money to accounts with names that do not
                match the merchant’s verified profile.
              </li>
              <li>
                Deals that are far cheaper or more expensive than the
                typical market price without a clear reason.
              </li>
              <li>
                Merchants with low completion rates, very few trades, or
                poor reviews.
              </li>
              <li>
                Pressure to cancel the order and send funds without any
                active escrow.
              </li>
            </ul>

            <h2
              id="safety-tips"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Safety tips for beginners using P2P
            </h2>
            <p className="mt-2">
              If you are new to P2P, start with small amounts and treat
              safety as the main goal. A practical starter checklist:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Only trade with merchants who have many completed trades
                and strong ratings.
              </li>
              <li>
                Never leave the exchange’s official chat to negotiate
                payment or confirm details.
              </li>
              <li>
                Always double-check that the bank or wallet name matches
                the merchant’s profile.
              </li>
              <li>
                Keep clear records of every payment you send (receipts,
                transaction IDs, timestamps).
              </li>
              <li>
                Start with small amounts until you are comfortable with the
                process and dispute flow.
              </li>
            </ul>

            <p className="mt-4">
              As we build out{" "}
              <Link
                href="/tools/p2p-safety-checker"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                P2P Safety Checker
              </Link>{" "}
              tools and country-specific guides, we will connect this
              article to practical checklists for Pakistan, India, Nigeria,
              UAE and other markets.
            </p>

            <h2
              id="faq"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              FAQ: P2P escrow
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
                  Ready to explore exchanges with strong P2P markets?
                </p>
                <p className="mt-1 text-slate-700">
                  Compare major platforms, then use small test trades to
                  learn P2P safely before scaling up.
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