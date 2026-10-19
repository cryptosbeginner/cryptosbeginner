import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/no-kyc-exchanges-explained`;
const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";

export const metadata: Metadata = {
  title: "No-KYC Exchanges Explained: How They Work & the Honest Risks (2026)",
  description:
    "What no-KYC exchange really means: the spectrum from DEXs to instant swaps, why no account does not mean no KYC, documented fund-freeze cases, and the eXch shutdown.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "No-KYC Exchanges Explained: How They Work & the Honest Risks",
    description:
      "The no-KYC spectrum, the KYC-on-trigger trap, documented risks, and what happened to eXch.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "No-KYC Exchanges Explained",
    description: "How no-KYC trading really works, and the risks nobody advertises.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What does no-KYC mean in crypto?",
    answer:
      "It means a service does not ask for identity documents before you trade. But the label covers a wide spectrum: true DEXs with no accounts at all, instant swap services that may demand ID if their screening flags your transaction, P2P marketplaces, and offshore exchanges with light verification. Always read the terms before sending funds.",
  },
  {
    question: "Can a no-KYC exchange ask for my ID later?",
    answer:
      "Yes, and this is the most common surprise. Most instant swap services run automated AML screening and can trigger a KYC demand after you have already sent your coins. Their terms typically allow freezing funds for as long as the review takes. Assume any custodial step can become a KYC step.",
  },
  {
    question: "Is it legal to use a no-KYC exchange?",
    answer:
      "It depends on your jurisdiction. Some countries restrict or monitor non-KYC crypto access more heavily, and using these services does not remove tax or reporting obligations. A few jurisdictions treat privacy tools with extra scrutiny. This is general information, not legal advice: check your local rules.",
  },
  {
    question: "What happened to eXch?",
    answer:
      "eXch was a no-KYC instant swap operating since 2014. After around $200M from the February 2025 Bybit hack was traced through it, the operators announced a shutdown for May 1, 2025. On April 30, German authorities seized its servers and confiscated about EUR 34M in crypto plus 8TB of data. It remains the largest enforcement action against a no-KYC swap service.",
  },
  {
    question: "What is the safest way to try a no-KYC service?",
    answer:
      "Test with a small amount first, every service, every time. Bookmark the real domain and never trust search ads or direct messages. Keep records for tax purposes. Never swap an amount you cannot afford to have locked for weeks. And understand that no-logs claims cannot be verified.",
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

const SPECTRUM = [
  {
    label: "A",
    title: "True DEXs",
    example: "Uniswap, PancakeSwap",
    body: "No account exists to KYC. Trades execute via smart contracts straight from your wallet. Fully public on-chain; the front-end still sees your IP address.",
    risk: "Smart-contract and bridge risk, no support desk",
  },
  {
    label: "B",
    title: "No-account instant swaps",
    example: "ChangeNOW, StealthEX, SideShift.ai",
    body: "Send coin A to a one-time deposit address, receive coin B. No upfront ID, but almost all run automated screening that can trigger a KYC demand after you have sent funds. Accurate label: KYC-on-trigger.",
    risk: "Funds frozen mid-swap is the #1 real complaint",
  },
  {
    label: "C",
    title: "Swap aggregators",
    example: "SwapSpace",
    body: "Route your order to whichever partner in category B offers the best rate. Adds a middleman layer between you and the liquidity.",
    risk: "Two parties' terms apply, not one",
  },
  {
    label: "D",
    title: "P2P marketplaces",
    example: "Bisq, HodlHodl",
    body: "Trade directly with another person, escrow via multisig. The most private fiat on-ramp, but thin volume and slower trades.",
    risk: "Counterparty friction, low liquidity",
  },
  {
    label: "E",
    title: "Offshore CEXs, light KYC",
    example: "Various Seychelles / St. Vincent entities",
    body: "Full-custody exchanges allowing limited trading without ID. Tiers can be tightened at any time, with your funds inside.",
    risk: "Custodial: they hold your coins indefinitely",
  },
  {
    label: "F",
    title: "Privacy-route swaps",
    example: "Houdini Swap, PrivataSwap",
    body: "Route through Monero as an intermediate hop to break the on-chain trail. Same briefly-custodial model as category B during the swap.",
    risk: "Privacy coins are the #1 freeze trigger",
  },
];

export default function NoKycExchangesPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "No-KYC Exchanges Explained: How They Work & the Honest Risks (2026)",
    description: metadata.description,
    datePublished: UPDATED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: "Alex Rivera", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · exchanges</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              No-KYC exchanges explained
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              No-KYC is a spectrum, not a single thing. Here is how each type works, and the
              risks their marketing leaves out.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <div className="py-10">
          <Section id="spectrum">
            <H2>One label, six different things</H2>
            <P>
              When someone says no-KYC exchange, they could mean any of these. They differ in who
              holds your money, when ID can be demanded, and what happens if something goes wrong.
            </P>
            <div className="mt-6 space-y-3">
              {SPECTRUM.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      {s.label}
                    </span>
                    <div className="min-w-0">
                      <p className="font-black text-slate-950">
                        {s.title} <span className="font-semibold text-slate-400">· {s.example}</span>
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-600">{s.body}</p>
                      <p className="mt-2 text-xs font-bold leading-5 text-rose-700">
                        Main risk: {s.risk}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="kyc-on-trigger">
            <H2>No account does not mean no KYC</H2>
            <P>
              This is the single most misunderstood fact in this space. Most instant swap services
              advertise no registration and no ID, and that is true at the start. But nearly all of
              them run automated anti-money-laundering screening on every transaction, and their
              terms allow them to demand full KYC after your coins are already in their hands.
            </P>
            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 sm:p-6" role="img" aria-label="Infographic: the KYC-on-trigger trap, ID demanded after funds are sent">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-rose-700">The KYC-on-trigger trap</p>
              <ol className="mt-4 space-y-0">
                {[
                  ["You send 1 BTC", "No ID asked. The swap looks instant and private."],
                  ["Screening flags it", "Privacy coin, large amount, or high-risk counterparty triggers review."],
                  ["ID demanded", "Upload documents to continue, or wait. Your coins sit frozen meanwhile."],
                  ["The exit path", "Refusal usually means a refund to your original address, after days or weeks."],
                ].map(([title, body], i, arr) => (
                  <li key={title} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < arr.length - 1 && <span className="absolute left-[17px] top-10 h-full w-0.5 bg-rose-200" aria-hidden="true" />}
                    <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white">{i + 1}</span>
                    <div className="pt-1">
                      <p className="font-black text-slate-950">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-slate-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <P>
              Documented pattern, not theory: ChangeNOW's terms allow freezing funds for any period
              necessary, with corroborated cases of holds lasting weeks. Changelly's spokesperson
              has confirmed it can withhold suspicious transactions for an undisclosed period, with
              six-figure cases held for months. Assume any custodial step can become a KYC step.
            </P>
          </Section>

          <Section id="risks">
            <H2>The honest risks</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Frozen funds", "The #1 real-world complaint. Triggers include privacy coins, undisclosed amount thresholds, and high-risk counterparties, discovered after sending. Never swap an amount you cannot afford locked."],
                ["Exit scams and shutdowns", "Offshore entities, no regulator, no deposit insurance, near-zero recourse. eXch ran for a decade before a coordinated takedown (below)."],
                ["Phishing clones", "Fake lookalike domains have cost users $20,000+ in a single incident. Bookmark real domains; never trust search ads, DMs, or browser suggestions."],
                ["No-logs is unverifiable", "Every no-logs claim is marketing until proven otherwise. Seized servers have yielded terabytes of user-adjacent data."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="exch">
            <H2>Case study: the eXch takedown</H2>
            <P>
              eXch was a no-KYC instant swap running since 2014, operated from Belize, that took an
              ideological stance: no AML measures, no user data stored. After roughly $200M from
              the February 2025 Bybit hack was traced through it, the operators announced a
              shutdown for May 1, 2025, citing unsustainable legal pressure.
            </P>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-7" role="img" aria-label="Infographic: timeline of the eXch enforcement action">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-slate-400">What happened</p>
              <div className="mt-4 space-y-4">
                {[
                  ["Feb 2025", "Bybit hacked for $1.46B. About $200M traced through eXch. Operators refuse to cooperate."],
                  ["Apr 2025", "eXch announces shutdown effective May 1, pledges 50 BTC to open-source privacy software."],
                  ["Apr 30, 2025", "German BKA seizes servers, confiscates EUR 34M in crypto and 8TB of data. Germany's third-largest crypto seizure."],
                ].map(([date, body]) => (
                  <div key={date} className="flex gap-4">
                    <span className="shrink-0 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-black text-white">{date}</span>
                    <p className="text-sm leading-6 text-slate-300">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <P>
              The lesson for beginners: a decade-long ideological no-KYC stance still ended in a
              coordinated international takedown, with user-adjacent funds and server data in state
              hands. No-logs was a claim, not a fact.
            </P>
          </Section>

          <Section id="key-facts">
            <H2>Eight facts before you use any no-KYC service</H2>
            <ol className="mt-6 space-y-3">
              {[
                "No account is not no KYC. ID can be demanded mid-swap after screening flags.",
                "Funds are briefly custodial during every swap. No regulator, no insurance if they vanish.",
                "Frozen funds are the most common real complaint, not hacks. Test small, every time.",
                "Privacy coins are the #1 freeze trigger across the major swap services.",
                "No-logs is unverifiable marketing. Seizures have yielded terabytes of server data.",
                "Phishing clones out-threaten the services themselves. Bookmark domains.",
                "No-KYC can become KYC at any time. ShapeShift did exactly that in 2018.",
                "Offshore means no recourse. Your only leverage is starting small.",
              ].map((fact, i) => (
                <li key={fact} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-black text-white">{i + 1}</span>
                  <p className="pt-1 text-sm leading-6 text-slate-700">{fact}</p>
                </li>
              ))}
            </ol>
            <P>
              For how privacy-preserving swaps differ from these services, see{" "}
              <Link href="/learn/what-are-privacy-swaps" className="font-black text-fuchsia-700 hover:text-fuchsia-900">
                what are privacy swaps
              </Link>
              .
            </P>
          </Section>

          <Section id="faq">
            <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-lg font-black text-slate-950">A no-signup swap option with honest limits</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                SimpleSwap lets you swap crypto without creating an account, which suits small,
                everyday exchanges. It is not anonymous: transactions can trigger AML verification,
                and fiat purchases may require KYC. See our{" "}
                <Link href="/tools/simpleswap-review" className="font-black text-emerald-700 hover:text-emerald-900">
                  SimpleSwap review
                </Link>{" "}
                for the full picture.
              </p>
              <a
                href="https://go.cryptosbeginner.com/SimpleSwap"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Try SimpleSwap
              </a>
              <p className="mt-2 text-xs text-slate-500">Affiliate link. We may earn a commission.</p>
            </div>
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Last updated {UPDATED}. Educational content only, not financial or legal advice.
              Service details and incidents verified against public reporting, October 2026.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
