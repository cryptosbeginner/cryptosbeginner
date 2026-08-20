import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Seed Phrase Security: How to Protect Your Crypto Wallet",
  description:
    "Your seed phrase is the master key to your crypto. Learn safe backup methods, what to avoid, and how to build a simple, robust protection plan.",
};

const faqs = [
  {
    question: "What is a seed phrase?",
    answer:
      "A seed phrase (recovery phrase) is a list of words that can recreate your wallet and private keys. Anyone who has it can control your funds.",
  },
  {
    question: "Can support recover my funds if I lose my seed phrase?",
    answer:
      "No. For non-custodial wallets, losing your seed phrase generally means losing access to your funds permanently. There is no central reset button.",
  },
  {
    question: "Is it safe to store my seed phrase in cloud notes or email?",
    answer:
      "No. Cloud notes and email accounts are frequent targets and not designed to protect secrets like seed phrases. Use offline, physical methods instead.",
  },
  {
    question: "Do I need multiple backups of my seed phrase?",
    answer:
      "Yes. At least one primary backup and, ideally, a secondary backup in a different secure location protect you against fire, loss, or hardware failure.",
  },
  {
    question: "Should I share my seed phrase with anyone?",
    answer:
      "No. Never share your seed phrase with anyone, including supposed support agents, friends, or family. Legitimate services will never ask for it.",
  },
];

function SeedPhraseJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cryptosbeginner.com/learn/seed-phrase-security",
    },
    headline: "Seed Phrase Security: How to Protect Your Crypto Wallet",
    description:
      "Beginner-friendly guide to seed phrase security: what a recovery phrase is, how to back it up safely, and mistakes to avoid.",
    image:
      "https://cryptosbeginner.com/images/seed-phrase-security-hero.png",
    datePublished: "2026-07-10",
    dateModified: "2026-08-12",
    author: [
      {
        "@type": "Person",
        name: "Sophia Chen",
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

export default function SeedPhraseSecurityPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <SeedPhraseJsonLd />

        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Learn • Wallet Safety
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Seed Phrase Security
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  Your seed phrase is the master key to your crypto wallet.
                  If you protect it well, you can recover your funds even if
                  your device fails. If you expose or lose it, your funds
                  can be stolen or gone forever. This guide focuses on safe,
                  practical ways to back up and protect your seed phrase.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Author: Sophia Chen</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Reviewed by: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 10 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 12 August 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TL;DR (Wallet Safety)
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Write your seed phrase down offline, store it in one or
                  more secure physical locations (ideally with metal backup
                  for fire/flood), never store it in screenshots, cloud notes
                  or email, and never share it with anyone. Treat it as your
                  most sensitive secret.
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
                  <a href="#what-it-is" className="hover:text-emerald-700">
                    • What a seed phrase is
                  </a>
                </li>
                <li>
                  <a href="#why-important" className="hover:text-emerald-700">
                    • Why seed phrase security matters
                  </a>
                </li>
                <li>
                  <a href="#do" className="hover:text-emerald-700">
                    • Safe ways to back up your seed
                  </a>
                </li>
                <li>
                  <a href="#dont" className="hover:text-emerald-700">
                    • What never to do
                  </a>
                </li>
                <li>
                  <a href="#multi-backup" className="hover:text-emerald-700">
                    • Building a simple multi-backup plan
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
              id="what-it-is"
              className="text-lg font-semibold text-slate-900"
            >
              What a seed phrase really is
            </h2>
            <p className="mt-2">
              A seed phrase (also called a recovery phrase or mnemonic) is
              a sequence of words, typically 12 or 24, that can recreate
              your wallet’s private keys. In most non-custodial wallets,
              whoever controls the seed phrase controls the funds.
            </p>
            <p className="mt-2">
              When you first set up a wallet—whether on a phone app,
              browser extension, or hardware device—the software will show
              you this phrase and ask you to write it down. That moment is
              crucial: it is when you decide whether your future self will
              be able to recover funds safely, or whether you are leaving
              everything to chance.
            </p>

            <h2
              id="why-important"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Why seed phrase security matters
            </h2>
            <p className="mt-2">
              There is no central “forgot password” for non-custodial
              wallets. If you lose your seed phrase and your devices
              fail or are reset, your funds may be unrecoverable. If your
              seed phrase is exposed to someone else, they can import it
              into their own wallet software and move your funds without
              your consent.
            </p>
            <p className="mt-2">
              This is both the power and the risk of self-custody: you
              control your funds directly, but you are also responsible
              for protecting the key material that unlocks them. Good
              seed-phrase hygiene is therefore one of the most important
              skills in crypto.
            </p>

            <h2 id="do" className="mt-6 text-lg font-semibold text-slate-900">
              Safe ways to back up your seed phrase
            </h2>
            <p className="mt-2">
              There are many sophisticated schemes for backing up seeds,
              but most beginners are better off focusing on a small set of
              reliable, simple practices:
            </p>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Recommended practices
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    Write the seed phrase down clearly on paper, in the
                    correct order, and double-check spelling.
                  </li>
                  <li>
                    Store the paper backup in a secure, dry location such as
                    a safe, lockbox, or secure drawer.
                  </li>
                  <li>
                    Consider a metal backup (seed plate) to protect against
                    fire or water damage.
                  </li>
                  <li>
                    Keep at least one backup in a different physical
                    location than your primary residence (for fire/flood
                    scenarios).
                  </li>
                  <li>
                    If multiple trusted people need access (e.g., for
                    inheritance), document clear instructions without
                    revealing the seed itself in plain text.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-900">
                  Handling wallets and devices
                </p>
                <ul className="mt-1 list-disc pl-5 text-slate-800">
                  <li>
                    Prefer hardware wallets from reputable vendors for
                    significant holdings.
                  </li>
                  <li>
                    Only confirm seed phrases on the hardware device screen
                    itself—not on a PC or phone.
                  </li>
                  <li>
                    Test recovery with a small amount of funds first, so
                    you are confident your backup works.
                  </li>
                  <li>
                    Keep wallet apps and firmware updated from official
                    sources.
                  </li>
                </ul>
              </div>
            </div>

            <h2 id="dont" className="mt-6 text-lg font-semibold text-slate-900">
              What never to do with your seed phrase
            </h2>
            <p className="mt-2">
              The easiest way to lose funds is to store or share your seed
              phrase in places that attackers or malware regularly
              compromise. Avoid the following at all costs:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                Taking screenshots of your seed phrase or saving it in your
                phone’s photo gallery.
              </li>
              <li>
                Storing your seed phrase in cloud notes, email drafts,
                messaging apps, or unencrypted files.
              </li>
              <li>
                Entering your seed phrase into websites or forms that
                promise to “check your wallet safety” or “recover lost
                funds.”
              </li>
              <li>
                Sharing your seed phrase with anyone, including supposed
                support agents or friends who claim they need it to help.
              </li>
              <li>
                Combining the seed phrase with obvious hints or labels
                (e.g., “My main Bitcoin wallet seed”) that make it easier
                to target.
              </li>
            </ul>

            <div className="mt-4 rounded-lg border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-900">
              <p className="font-semibold">
                Absolute rule: never share your seed
              </p>
              <p className="mt-1">
                Legitimate services will never ask for your full seed
                phrase. If someone does, treat it as a scam and stop the
                conversation immediately.
              </p>
            </div>

            <h2
              id="multi-backup"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              Building a simple multi-backup plan
            </h2>
            <p className="mt-2">
              You do not need an overly complex system to be safer than
              most people. A practical starter plan might look like this:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800">
              <li>
                One paper backup stored in a secure place at home (safe or
                lockbox).
              </li>
              <li>
                One metal backup stored in a different safe location (e.g.,
                trusted family member’s safe, bank safety deposit box).
              </li>
              <li>
                A small test wallet with the same process so you can verify
                that recovery works without risking large amounts.
              </li>
            </ul>
            <p className="mt-2">
              As your holdings grow, you can explore more advanced
              strategies such as splitting seeds across locations or using
              multi-signature setups—but many beginners will already be
              far ahead of the average user just by following this basic
              multi-backup plan.
            </p>

            <p className="mt-4">
              For exchange-focused safety, combine this guide with our{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                Crypto Exchange Security Checklist
              </Link>{" "}
              and your regional access guides.
            </p>

            <h2
              id="faq"
              className="mt-6 text-lg font-semibold text-slate-900"
            >
              FAQ: Seed phrase security
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
                  Ready to combine exchanges and self-custody?
                </p>
                <p className="mt-1 text-slate-700">
                  Use exchanges for access and liquidity, but treat your
                  seed phrase as the long-term vault key—and protect it with
                  care.
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
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Read Proof of Reserves Guide
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