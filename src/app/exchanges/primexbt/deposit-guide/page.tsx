import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/deposit-guide`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Deposit Guide 2026: Methods, Limits & How to Fund Your Account",
  description:
    "How to deposit on PrimeXBT in 2026: crypto transfers, card and bank options via third parties, minimums, processing times, and the fees to watch.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Deposit Guide 2026: Methods, Limits & How to Fund Your Account",
    description:
      "Fund your PrimeXBT account step by step: crypto deposits, card and bank transfers, minimums, confirmation times, and third-party charges. Verified October 2026.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-deposit-methods.png`,
        width: 1867,
        height: 546,
        alt: "PrimeXBT account funding and deposit methods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Deposit Guide 2026",
    description:
      "Crypto, card, and bank deposit methods on PrimeXBT, with minimums, processing times, and fee warnings.",
    images: [`${SITE_URL}/images/primexbt-deposit-methods.png`],
  },
};

const faqItems = [
  {
    question: "Does PrimeXBT charge deposit fees?",
    answer:
      "No. PrimeXBT does not charge a fee for deposits on its side. You still pay your own blockchain network fee when sending crypto, and third-party card or bank providers set their own charges, which commonly run a few percent on card purchases.",
  },
  {
    question: "What is the minimum deposit on PrimeXBT?",
    answer:
      "There is no fixed minimum for crypto deposits beyond network and practical limits, so even small amounts work. Fiat minimums depend on the third-party provider you use and commonly sit between about $5 and $30. Check the deposit screen for the live figure before you commit.",
  },
  {
    question: "How long does a PrimeXBT deposit take?",
    answer:
      "Crypto deposits are credited after the required blockchain confirmations: roughly 40 minutes for Bitcoin, 4 to 6 minutes for Ethereum and ERC-20 tokens, and about a minute for BEP-20, TRC-20, and Solana transfers, though congestion can stretch these times. Card and e-wallet deposits through third parties are usually near-instant, while bank wires can take 1 to 5 business days.",
  },
  {
    question: "Which cryptocurrencies can I deposit on PrimeXBT?",
    answer:
      "The main options are BTC, ETH, USDT, and USDC, with additional assets supported depending on your region and account. USDT and similar stablecoins can usually move across several networks, including ERC-20, BEP-20, and TRC-20. Always match the network on both ends of the transfer.",
  },
  {
    question: "Can I deposit fiat currency directly?",
    answer:
      "Not directly. PrimeXBT does not take fiat deposits into its own accounts. Instead, you buy crypto with a card, bank transfer, or e-wallet through an integrated third-party provider, and the resulting crypto lands in your PrimeXBT wallet. Those providers may require their own identity checks.",
  },
  {
    question: "Why has my deposit not arrived?",
    answer:
      "The usual causes are an unconfirmed blockchain transaction, the wrong network selected, or a typo in the address. Check the transaction status on a block explorer first and confirm the network matches. If everything looks right and the funds still have not appeared after a reasonable wait, contact PrimeXBT support with your transaction ID.",
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

export default function PrimeXBTDepositGuidePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Deposit Guide 2026: Methods, Limits & How to Fund Your Account",
    description:
      "A research-led guide to funding PrimeXBT: crypto transfers, card and bank options through third parties, minimums, processing times, and the fees to watch.",
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
    image: [`${SITE_URL}/images/primexbt-deposit-methods.png`],
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
        name: "PrimeXBT Deposit Guide",
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
              PrimeXBT Deposit Guide: How to Fund Your Account in 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Funding PrimeXBT is straightforward once you know the two
              routes: sending crypto from your own wallet, or buying crypto
              with a card or bank transfer through a third-party provider.
              This guide walks through both, with minimums, processing
              times, and the charges most beginners miss.
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
              src="/images/primexbt-deposit-methods.png"
              alt="PrimeXBT account funding and deposit methods"
              width={1200}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT funding options. Methods, limits, and availability
              vary by region and account type.
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
                <strong>Two routes:</strong> send crypto from your own wallet,
                or buy crypto with a card, bank transfer, or e-wallet through
                a third-party provider.
              </li>
              <li>
                <strong>PrimeXBT charges no deposit fee.</strong> You pay your
                own blockchain network fee, and third-party providers add
                their own charges.
              </li>
              <li>
                <strong>No fixed crypto minimum.</strong> Fiat minimums
                depend on the provider, commonly around $5 to $30.
              </li>
              <li>
                <strong>Timing:</strong> crypto arrives after blockchain
                confirmations (minutes for most networks, longer for
                Bitcoin). Cards are near-instant. Bank wires take days.
              </li>
              <li>
                <strong>Match the network</strong> on both ends of a crypto
                transfer. A wrong-network deposit can be unrecoverable.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#methods" className="underline underline-offset-4">
                  Deposit methods compared
                </a>
              </li>
              <li>
                <a href="#crypto-steps" className="underline underline-offset-4">
                  Step-by-step: crypto deposit
                </a>
              </li>
              <li>
                <a href="#fiat-steps" className="underline underline-offset-4">
                  Step-by-step: card and bank deposit
                </a>
              </li>
              <li>
                <a href="#limits-times" className="underline underline-offset-4">
                  Minimums and processing times
                </a>
              </li>
              <li>
                <a href="#fees" className="underline underline-offset-4">
                  Fees to watch
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
        <Section id="methods">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Deposit methods compared
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT does not take fiat directly into its own accounts.
            Every funding route either moves crypto you already own or buys
            crypto for you through a partner. Here is how the options stack
            up:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">How it works</th>
                  <th className="py-3 pr-4">Typical cost</th>
                  <th className="py-3">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto transfer
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Send BTC, ETH, USDT, or USDC from your own wallet
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Your network fee only
                  </td>
                  <td className="py-3 text-slate-700">
                    Minutes to about 40 min
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Credit or debit card
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Buy crypto through a third-party provider
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Provider charge, often 2-5%
                  </td>
                  <td className="py-3 text-slate-700">Near-instant</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Bank transfer
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Wire funds via a supported provider or local rail
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Provider and intermediary fees may apply
                  </td>
                  <td className="py-3 text-slate-700">1-5 business days</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    E-wallets and local methods
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Skrill, Neteller, Binance Pay, or regional options
                    where available
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Varies by provider and region
                  </td>
                  <td className="py-3 text-slate-700">
                    Instant to 24 hours
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Availability, minimums, and exact charges depend on your country
            and the provider serving it. The deposit screen inside your
            account always shows the live options for your region.
          </p>
        </Section>

        <Section id="crypto-steps">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Step-by-step: crypto deposit
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            This is the cheapest and most common way to fund PrimeXBT. You
            need your own crypto wallet with funds ready to send.
          </p>

          <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Log in</strong> to your PrimeXBT account and open the{" "}
              <strong>Deposit</strong> section from the dashboard.
            </li>
            <li>
              <strong>Choose your deposit currency</strong>, for example
              Bitcoin (BTC), Ethereum (ETH), Tether (USDT), or USD Coin
              (USDC).
            </li>
            <li>
              <strong>Select the network.</strong> For USDT you will typically
              see options like ERC-20, BEP-20, and TRC-20. Pick the same
              network your sending wallet uses.
            </li>
            <li>
              <strong>Copy the deposit address</strong> PrimeXBT shows you,
              or scan the QR code with your wallet app. Copy-paste beats
              typing: one wrong character sends funds nowhere useful.
            </li>
            <li>
              <strong>Paste the address into your own wallet</strong> as the
              recipient, enter the amount, and confirm the transfer.
            </li>
            <li>
              <strong>Wait for confirmations.</strong> The deposit appears in
              your PrimeXBT wallet once the blockchain has confirmed the
              transaction enough times. Bitcoin takes longest; most other
              networks clear in minutes.
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border border-rose-300 bg-rose-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Do not skip this:</strong> sending on the wrong network
              is the most common way deposits get lost. If your wallet holds
              USDT on TRC-20 but you generate an ERC-20 deposit address, the
              funds may never arrive. Match the network on both ends, and
              send a small test amount first if the sum matters to you.
            </p>
          </div>
        </Section>

        <Section id="fiat-steps">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Step-by-step: card and bank deposit
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            If you do not hold crypto yet, PrimeXBT routes you through a
            third-party provider that converts your fiat payment into crypto
            for your account.
          </p>

          <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Open the Deposit section</strong> and choose the card,
              bank transfer, or e-wallet option instead of a direct crypto
              deposit.
            </li>
            <li>
              <strong>Pick your provider and currency.</strong> The available
              providers depend on your country. Common choices include Visa
              and Mastercard purchases, bank wires, and e-wallets such as
              Skrill or Neteller.
            </li>
            <li>
              <strong>Enter the amount and your payment details</strong> on
              the provider&apos;s page. You will see their fee disclosed
              before you confirm. Some providers ask for identity
              verification at this point.
            </li>
            <li>
              <strong>Confirm and wait.</strong> Card and e-wallet purchases
              are usually credited near-instantly. Bank wires take longer,
              often 1 to 5 business days for international transfers.
            </li>
            <li>
              <strong>Check what arrived.</strong> The crypto lands in your
              PrimeXBT wallet. If your account is denominated in a different
              currency, a conversion may apply, which can carry its own
              spread.
            </li>
          </ol>

          <p className="mt-5 leading-8 text-slate-800">
            Because the purchase happens on the provider&apos;s rails, their
            terms govern the transaction: their fees, their KYC, their
            refund policy. Read their checkout summary carefully before you
            confirm, especially the total after fees.
          </p>
        </Section>

        <Section id="limits-times">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Minimums and processing times
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT sets no fixed minimum for crypto deposits, so you can
            start with whatever your network fee makes sensible. Fiat
            minimums are set by the third-party provider and commonly fall
            between about $5 and $30, with bank wires sometimes requiring
            more.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Deposit type</th>
                  <th className="py-3 pr-4">Typical minimum</th>
                  <th className="py-3">Typical processing time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto (BTC)
                  </td>
                  <td className="py-3 pr-4 text-slate-700">No fixed minimum</td>
                  <td className="py-3 text-slate-700">About 40 minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto (ETH, ERC-20)
                  </td>
                  <td className="py-3 pr-4 text-slate-700">No fixed minimum</td>
                  <td className="py-3 text-slate-700">About 4-6 minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Crypto (BEP-20, TRC-20, Solana)
                  </td>
                  <td className="py-3 pr-4 text-slate-700">No fixed minimum</td>
                  <td className="py-3 text-slate-700">About 1 minute</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Card / e-wallet
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    About $5-$30, provider dependent
                  </td>
                  <td className="py-3 text-slate-700">
                    Near-instant to 24 hours
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">
                    Bank wire
                  </td>
                  <td className="py-3 pr-4 text-slate-700">
                    Higher, provider dependent
                  </td>
                  <td className="py-3 text-slate-700">1-5 business days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Times are approximate and move with network congestion and
            provider load. Crypto times assume normal conditions; a
            congested Bitcoin network can take considerably longer.
          </p>
        </Section>

        <Section id="fees">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Fees to watch
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            PrimeXBT itself charges nothing for deposits, which makes the
            real cost easy to miss. It sits one layer away:
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Blockchain network fees:</strong> paid by you to
              miners or validators when sending crypto. These spike with
              congestion, especially on Ethereum mainnet.
            </li>
            <li>
              <strong>Third-party processor charges:</strong> card purchases
              commonly add 2-5% on top of your deposit amount. Always read
              the provider&apos;s total before confirming.
            </li>
            <li>
              <strong>Currency conversion:</strong> if your deposit currency
              differs from your account denomination, the conversion can
              carry an embedded spread of roughly 0.5-2%. Funding in a
              matching currency avoids it.
            </li>
            <li>
              <strong>Intermediary bank fees:</strong> international wires
              can pick up charges from correspondent banks that neither you
              nor PrimeXBT controls.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Cheapest route in practice:</strong> for most users it
              is a direct crypto transfer on a low-fee network such as
              TRC-20 or BEP-20. Card purchases win on speed but lose on
              cost, so they suit small urgent top-ups rather than regular
              funding.
            </p>
          </div>
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
              Funding is step one. The full review covers what happens next:
              fees, leverage, regulation, restricted countries, and whether
              PrimeXBT suits your goals at all.
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
              This page was reviewed on {UPDATED}. Deposit methods,
              minimums, processing times, and provider charges vary by
              region and can change. Check the live deposit screen in your
              account before funding.
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
                for current deposit options and the live deposit screen.
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
