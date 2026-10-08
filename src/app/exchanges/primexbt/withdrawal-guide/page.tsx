import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/primexbt/withdrawal-guide`;
const REVIEW_URL = `${SITE_URL}/exchanges/primexbt-review`;

const UPDATED = "8 October 2026";
const UPDATED_ISO = "2026-10-08";

const AFFILIATE = "https://go.prmx.co/visit/?bta=36112&nci=7605";
const PRIME_XBT_HOME = "https://primexbt.com/";

export const metadata: Metadata = {
  title: "PrimeXBT Withdrawal Guide 2026: Fees, Limits & How to Cash Out",
  description:
    "How to withdraw from PrimeXBT in 2026: step-by-step process, fixed withdrawal fees by asset and network, processing times, limits, and safety checklist.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PrimeXBT Withdrawal Guide 2026: Fees, Limits & How to Cash Out",
    description:
      "Withdrawing from PrimeXBT: the request process, flat network-based fees, daily processing window, verification limits, and what to do if a withdrawal is delayed.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/primexbt-deposit-methods.png`,
        width: 1867,
        height: 546,
        alt: "PrimeXBT account funding and withdrawal options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeXBT Withdrawal Guide 2026",
    description:
      "Fees, processing times, limits, and a safety checklist for PrimeXBT withdrawals.",
    images: [`${SITE_URL}/images/primexbt-deposit-methods.png`],
  },
};

const faqItems = [
  {
    question: "How do I withdraw from PrimeXBT?",
    answer:
      "Open your account dashboard, choose the withdrawal function, select the wallet or payment method, enter the destination address and amount, then confirm. New withdrawal addresses typically need email verification before the request is processed.",
  },
  {
    question: "How long do PrimeXBT withdrawals take?",
    answer:
      "PrimeXBT's finance team processes withdrawal requests in a daily window, published as 12:00 to 14:00 UTC. Crypto withdrawals are then sent on-chain, so blockchain confirmation adds more time depending on the network: minutes on fast networks, longer on congested ones. E-wallets are near instant after approval; bank wires can take several business days.",
  },
  {
    question: "What are the PrimeXBT withdrawal fees?",
    answer:
      "Crypto withdrawals use a flat fee per asset and network, not a percentage. The same coin costs different amounts on different networks, for example USDT on ERC-20 versus BEP-20 versus TRC-20. Check the live withdrawal page before you withdraw, because network fees and the schedule change.",
  },
  {
    question: "Is there a minimum or maximum withdrawal on PrimeXBT?",
    answer:
      "Limits depend on your verification level and the payment method. Unverified accounts face daily withdrawal caps, while fully verified accounts get substantially higher or no limits. The exact figures are shown in your account area and can change, so confirm them there.",
  },
  {
    question: "Do I need to complete KYC to withdraw?",
    answer:
      "You can use PrimeXBT with limited verification, but withdrawal caps apply until you complete identity verification. If you plan to move larger amounts, verify early rather than discovering the cap when you need the funds.",
  },
  {
    question: "My withdrawal is delayed. What should I do?",
    answer:
      "First check the basics: correct address, correct network, and whether your request went in before or after the daily 12:00 to 14:00 UTC processing window. Then check the blockchain explorer for your transaction. If the funds left PrimeXBT but have no confirmations, the delay is on the network. If the request is still pending with PrimeXBT after the next processing window, contact support with your transaction details.",
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

export default function PrimeXBTWithdrawalPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PrimeXBT Withdrawal Guide 2026: Fees, Limits & How to Cash Out",
    description:
      "A research-led guide to PrimeXBT withdrawals: step-by-step process, flat asset and network based fees, processing times, limits, safety checks, and troubleshooting.",
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
        name: "PrimeXBT Withdrawal Guide",
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
              PrimeXBT Withdrawal Guide: Fees, Limits, and How to Cash Out
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Getting money off a platform should be boring and predictable.
              This guide walks through PrimeXBT&apos;s withdrawal process
              step by step, explains the flat fee model, covers processing
              times and limits, and shows what to check before you panic
              about a delayed payout.
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
              alt="PrimeXBT account funding and withdrawal options"
              width={1200}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />

            <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
              PrimeXBT funding and withdrawal options. Methods, fees, and
              limits depend on your account type and jurisdiction.
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
                <strong>How:</strong> dashboard, withdrawal function, pick
                wallet and network, enter address and amount, confirm by
                email.
              </li>
              <li>
                <strong>Fees:</strong> flat per asset and network, not a
                percentage. Same coin, different network, different fee.
              </li>
              <li>
                <strong>Timing:</strong> requests are processed in a daily
                12:00 to 14:00 UTC window, then sent on-chain. Network
                confirmation adds more time.
              </li>
              <li>
                <strong>Limits:</strong> unverified accounts face daily caps.
                Verify before you need to move serious money.
              </li>
              <li>
                <strong>Golden rule:</strong> withdraw to the same route you
                deposited with, and test with a small amount first.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-black text-slate-950">On this page</h2>

            <ol className="mt-4 grid gap-2 text-sm font-bold text-indigo-700 sm:grid-cols-2">
              <li>
                <a href="#how-it-works" className="underline underline-offset-4">
                  How withdrawals work
                </a>
              </li>
              <li>
                <a href="#fees" className="underline underline-offset-4">
                  Withdrawal fees explained
                </a>
              </li>
              <li>
                <a href="#limits" className="underline underline-offset-4">
                  Minimums and limits
                </a>
              </li>
              <li>
                <a href="#timing" className="underline underline-offset-4">
                  Processing times
                </a>
              </li>
              <li>
                <a href="#safety" className="underline underline-offset-4">
                  Safety checklist
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="underline underline-offset-4">
                  Troubleshooting delays
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

        <Section id="how-it-works">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How PrimeXBT withdrawals work, step by step
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Withdrawing from PrimeXBT follows the same path as most crypto
            platforms, with one extra compliance layer: money generally has
            to leave by the same route it came in. That is an anti-money
            laundering rule, not a quirk, and it is worth planning your
            deposit method with your eventual withdrawal in mind.
          </p>

          <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-slate-800">
            <li>
              <strong>Open the withdrawal section.</strong> From your account
              dashboard, choose the withdrawal function and select the wallet
              holding the funds you want to move.
            </li>
            <li>
              <strong>Pick the asset and network.</strong> Choose the coin and,
              where offered, the blockchain network. For USDT this choice
              matters a lot: ERC-20, BEP-20, and TRC-20 are different
              networks with different fees and speeds.
            </li>
            <li>
              <strong>Enter the destination address.</strong> Paste the
              address of your personal wallet or receiving exchange. If you
              use address whitelisting, only pre-approved addresses will be
              accepted.
            </li>
            <li>
              <strong>Enter the amount.</strong> The interface shows the flat
              withdrawal fee for your selection, so you can see exactly what
              arrives on the other side before you commit.
            </li>
            <li>
              <strong>Confirm.</strong> Submit the request, then approve it
              through the confirmation email. New addresses usually need
              email verification before the request can proceed.
            </li>
            <li>
              <strong>Wait for processing and confirmation.</strong> PrimeXBT
              processes requests in its daily window, then broadcasts the
              transaction. After that, arrival time depends on the blockchain.
            </li>
          </ol>
        </Section>

        <Section id="fees">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Withdrawal fees explained
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Crypto withdrawals on PrimeXBT use a flat fee, not a percentage.
            Each asset has its own fixed charge, and for multi-network coins
            the fee differs by network. This is the single most useful thing
            to understand, because picking the right network is often the
            difference between a cheap withdrawal and an expensive one.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Network choice (USDT example)</th>
                  <th className="py-3 pr-4">Typical speed</th>
                  <th className="py-3">Fee pattern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">ERC-20 (Ethereum)</td>
                  <td className="py-3 pr-4 text-slate-700">Minutes, slower when congested</td>
                  <td className="py-3 text-slate-700">Highest of the three</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">BEP-20 (BNB Chain)</td>
                  <td className="py-3 pr-4 text-slate-700">Fast, usually under a few minutes</td>
                  <td className="py-3 text-slate-700">Much lower than ERC-20</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-slate-900">TRC-20 (Tron)</td>
                  <td className="py-3 pr-4 text-slate-700">Fast, often sub-10 minutes</td>
                  <td className="py-3 text-slate-700">Among the cheapest options</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-800">
            The table shows the pattern, not exact figures. Published reviews
            have listed these fees in the past, but the numbers move with
            network conditions, so treat any figure you see elsewhere as a
            snapshot. Check the live withdrawal page in your account right
            before you withdraw.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            Two cost traps to avoid. First, the fee is flat per withdrawal,
            so withdrawing ten small amounts costs ten times the fee of one
            larger withdrawal. Batch when you can. Second, fiat routes such
            as bank wires or card withdrawals can carry their own processing
            charges from the payment provider, separate from anything
            PrimeXBT lists.
          </p>
        </Section>

        <Section id="limits">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Minimums and limits
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Withdrawal limits on PrimeXBT depend on two things: how verified
            your account is, and which payment method you use. Unverified
            accounts face daily withdrawal caps, while fully verified
            accounts get substantially higher limits. The exact caps are
            shown inside your account and can change, so this is one detail
            to confirm on the live page rather than memorize from a guide.
          </p>

          <p className="mt-4 leading-8 text-slate-800">
            There is a practical minimum too: your withdrawal has to clear
            the flat network fee with something left over. Withdrawing an
            amount barely above the fee is technically possible and
            financially pointless. As a habit, keep withdrawals comfortably
            above the fee shown at confirmation time.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="leading-7 text-slate-900">
              <strong>Plan ahead:</strong> if you might need to move a large
              sum one day, complete identity verification now. Discovering a
              daily cap at the moment you need the money is an avoidable
              problem.
            </p>
          </div>
        </Section>

        <Section id="timing">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Processing times
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            A PrimeXBT withdrawal has two phases, and most confusion comes
            from mixing them up. First PrimeXBT itself has to process your
            request, then the blockchain has to confirm it.
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>PrimeXBT processing:</strong> published materials
              describe a daily processing window of 12:00 to 14:00 UTC.
              Requests submitted before the window are handled the same day;
              later requests roll to the next day.
            </li>
            <li>
              <strong>Blockchain confirmation:</strong> once broadcast, timing
              is the network&apos;s, not PrimeXBT&apos;s. Fast networks
              confirm in minutes; Bitcoin typically needs 30 to 90 minutes
              depending on congestion.
            </li>
            <li>
              <strong>E-wallets:</strong> near instant after PrimeXBT
              approves the request.
            </li>
            <li>
              <strong>Bank wires and cards:</strong> the slowest route,
              potentially several business days each way through the banking
              system.
            </li>
          </ul>

          <p className="mt-4 leading-8 text-slate-800">
            If you submit at 15:00 UTC on a Friday, expect nothing to move
            until the next processing window. That is normal scheduling, not
            a problem with your withdrawal.
          </p>
        </Section>

        <Section id="safety">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Safety checklist before you withdraw
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Most withdrawal disasters are user error, and all of them are
            preventable. Run through this list every time, even when you are
            in a hurry. Especially when you are in a hurry.
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-800">
            <li>
              <strong>Match the network on both ends.</strong> Sending USDT
              on TRC-20 to an ERC-20-only address can lose the funds
              permanently. The deposit address your wallet shows must be for
              the same network you select on PrimeXBT.
            </li>
            <li>
              <strong>Use address whitelisting.</strong> PrimeXBT lets you
              restrict withdrawals to pre-approved addresses verified by
              email. Turn it on, so a compromised account cannot send funds
              somewhere new.
            </li>
            <li>
              <strong>Test with a small amount first.</strong> For any new
              destination, send a small test withdrawal, confirm it arrives,
              then send the rest. The extra flat fee is cheap insurance.
            </li>
            <li>
              <strong>Keep 2FA enabled.</strong> Withdrawal confirmation plus
              two-factor authentication means an attacker needs your device
              and your inbox, not just your password.
            </li>
            <li>
              <strong>Withdraw to your own accounts only.</strong> PrimeXBT
              processes withdrawals back to the original source and will not
              send to third-party or anonymous accounts. Do not try to
              route around this.
            </li>
            <li>
              <strong>Beware of support impersonators.</strong> PrimeXBT
              support will never ask for your password or 2FA codes to
              &quot;release&quot; a withdrawal. Anyone who does is running a
              scam.
            </li>
          </ul>
        </Section>

        <Section id="troubleshooting">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Troubleshooting: when a withdrawal is delayed
          </h2>

          <p className="mt-4 leading-8 text-slate-800">
            Work through these in order before contacting support. Nine
            times out of ten, the answer is in the first three.
          </p>

          <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-slate-800">
            <li>
              <strong>Check the clock.</strong> Did your request go in after
              the 12:00 to 14:00 UTC processing window? If so, it simply
              waits for the next window.
            </li>
            <li>
              <strong>Check the blockchain.</strong> If PrimeXBT shows the
              withdrawal as sent, paste the transaction hash into a block
              explorer. No confirmations yet means network congestion, which
              resolves on its own.
            </li>
            <li>
              <strong>Check the address and network.</strong> One wrong
              character, or the right address on the wrong network, explains
              most &quot;missing&quot; withdrawals. Compare character by
              character.
            </li>
            <li>
              <strong>Check your email.</strong> An unconfirmed verification
              email leaves the request sitting in pending. Spam folders eat
              these regularly.
            </li>
            <li>
              <strong>Check for a verification hold.</strong> Large or
              unusual withdrawals can trigger additional identity checks.
              These add delay but are standard compliance practice.
            </li>
            <li>
              <strong>Contact support with details.</strong> If the request
              is still pending after the next processing window, reach out
              with your account details, the amount, the asset, the
              destination address, and the time you submitted. Complete
              information gets faster answers.
            </li>
          </ol>

          <p className="mt-4 leading-8 text-slate-800">
            One honest note: third-party review sites carry scattered
            withdrawal complaints about PrimeXBT, as they do for nearly
            every leveraged platform. Keep records of every withdrawal,
            test with small amounts when trying a new route, and never keep
            more on a derivatives platform than you can afford to have tied
            up during a dispute.
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
              Withdrawals are one chapter. The full review covers fees,
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
              This page was reviewed on {UPDATED}. Withdrawal fees,
              processing windows, and limits can change with provider
              updates. Check the current provider terms before moving funds.
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
                for current products, the withdrawal page, and legal links.
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
