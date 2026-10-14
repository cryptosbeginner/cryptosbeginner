import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/graveyard`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

type Status = "Discontinued" | "Paused" | "Shutting down";

interface GraveyardEntry {
  name: string;
  issuer: string;
  status: Status;
  date: string;
  whatHappened: string;
  lesson: string;
  verified: boolean;
}

const entries: GraveyardEntry[] = [
  {
    name: "Solflare Card",
    issuer: "Solflare, issued via Kulipa",
    status: "Paused",
    date: "July 28, 2026",
    whatHappened:
      "Card spending stopped on July 28, 2026 after card-issuing partner Kulipa wound down operations. Solflare said funds stayed safe in users' self-custody wallets and Borrow positions kept working, with a card on new issuing infrastructure expected afterward.",
    lesson:
      "Self-custody did its job here: the card stopped but the money stayed put. That is the model to look for when a card dies.",
    verified: true,
  },
  {
    name: "Ready Card",
    issuer: "Ready (formerly Argent), issued via Kulipa",
    status: "Discontinued",
    date: "July 29, 2026",
    whatHappened:
      "Ready's Metal and Lite self-custodial Starknet cards stopped working when issuer Kulipa began winding down. Non-EEA cards were halted first with roughly one hour's notice in June 2026. Ready is rebuilding on new infrastructure with no confirmed relaunch date.",
    lesson:
      "An issuer collapse can give users hours, not weeks, of notice. Keep running balances on single-purpose cards low.",
    verified: true,
  },
  {
    name: "Offramp Spend Card",
    issuer: "Offramp",
    status: "Discontinued",
    date: "July 31, 2026",
    whatHappened:
      "Offramp announced a phased wind-down starting July 1, 2026, citing difficult market conditions. Physical and virtual cards were disabled on July 31, crypto withdrawals ended September 30, and the platform ceased operations on December 31, 2026.",
    lesson:
      "Small regional fintechs can unwind fast even with a clean shutdown plan. Withdraw during the first announced window, not the last.",
    verified: true,
  },
  {
    name: "Cypher Card",
    issuer: "Cypher (acquired by Nium)",
    status: "Discontinued",
    date: "August 7, 2026",
    whatHappened:
      "Global payments company Nium acquired Cypher, announcing the deal on July 8, 2026. Card loading and new issuance stopped that day; existing cards were cancelled after August 7; the app, dApp, and business platform shut down on September 6, 2026. Osmosis Pay cards, which ran on Cypher infrastructure, followed the same timeline.",
    lesson:
      "Acquisitions are a distinct death mode: the team and technology survive, the card does not. White-label cards inherit the acquirer's plans.",
    verified: true,
  },
  {
    name: "Moonwell Card",
    issuer: "Moonwell, infrastructure by Cypher",
    status: "Discontinued",
    date: "September 6, 2026",
    whatHappened:
      "Moonwell's Visa card, launched in December 2024 with a borrow-and-load feature, died when Nium acquired infrastructure provider Cypher and declined to continue the program. New loads stopped in July 2026, purchases ended August 7, and withdrawal access closed September 6. Moonwell's core lending protocol was unaffected.",
    lesson:
      "Even a thoughtfully designed DeFi card can be hostage to a centralized partner one layer down. Check who actually runs the rails.",
    verified: true,
  },
  {
    name: "Cardano Card",
    issuer: "Emurgo, program via Wirex",
    status: "Shutting down",
    date: "October 31, 2026",
    whatHappened:
      "The official Cardano Card account announced on October 13, 2026 that the card will be discontinued on October 31. Wirex, the program partner, is discontinuing its custodial infrastructure to move to a non-custodial model, which ends the partnership.",
    lesson:
      "Partnership-built cards die when either partner pivots. Watch for public announcements from the infrastructure partner, not just the brand.",
    verified: true,
  },
  {
    name: "Gnosis Pay consumer cards",
    issuer: "Gnosis Pay",
    status: "Shutting down",
    date: "December 20, 2026",
    whatHappened:
      "Gnosis Pay is reported to be shutting down its direct-to-consumer debit card and web app by December 20, 2026, ending the GNO cashback program by September 30. The company is pivoting to a B2B model with white-label card infrastructure, and consumer users are being pointed toward partner programs such as MiniPay.",
    lesson:
      "A pivot is not a scam: self-custodial Gnosis Safe balances remain fully accessible. But the card you signed up for is still gone.",
    verified: false,
  },
  {
    name: "Quicko-issued card programs",
    issuer: "Quicko sp. z o.o. (Poland)",
    status: "Discontinued",
    date: "January 2026",
    whatHappened:
      "On January 21, 2026, the Polish Financial Supervision Authority withdrew Quicko's authorization to operate as a national payment institution. Every card program powered by Quicko, including the CEX.IO Card and TRASTRA's Mastercard relaunch, stopped as a result.",
    lesson:
      "One revoked licence, many dead cards. The issuer on your cardholder agreement is the real product; the brand is packaging.",
    verified: true,
  },
  {
    name: "CEX.IO Card",
    issuer: "CEX.IO, issued via Quicko",
    status: "Discontinued",
    date: "February 3, 2026",
    whatHappened:
      "CEX.IO's official help centre confirms that card payments became unavailable starting February 3, 2026 because the Polish regulator revoked the licence of program partner Quicko. New card issuance was paused immediately. CEX.IO's trading and wallet services continued to operate.",
    lesson:
      "A healthy exchange can lose its card overnight through no fault of its own. Read who the regulated issuer is before you rely on the card.",
    verified: true,
  },
  {
    name: "Swype.fun Card",
    issuer: "Brahma",
    status: "Discontinued",
    date: "April 2026",
    whatHappened:
      "Polymarket acquired Brahma, the DeFi startup behind Swype.fun, in a deal announced March 18, 2026. Brahma's products, including the virtual Visa that borrowed USDC against Aave and Euler positions, were sunset within 30 days.",
    lesson:
      "Acquisition risk applies to the cleverest designs. Swype.fun's non-custodial borrowing was innovative, but the company behind it was for sale.",
    verified: true,
  },
  {
    name: "Bitso Card",
    issuer: "Bitso, with Mastercard",
    status: "Discontinued",
    date: "May 26, 2025",
    whatHappened:
      "Bitso discontinued its card product in Mexico on May 26, 2025, announcing the decision in April as a strategic shift toward savings and investment products rather than payments. The card, launched in March 2023 after a 2022 beta, stayed operational for transactions until the final deactivation date.",
    lesson:
      "A profitable, licensed company can still kill a card line that no longer fits its strategy. Do not treat any card as a permanent fixture.",
    verified: true,
  },
  {
    name: "TRASTRA Crypto Card",
    issuer: "TRASTRA Limited / TRASTRA EU UAB",
    status: "Discontinued",
    date: "2025",
    whatHappened:
      "The TRASTRA mobile app was removed from Google Play in April 2025 and service availability listings describe TRASTRA's products as discontinued. A 2024 Mastercard relaunch built with Quicko died when Quicko lost its Polish licence in January 2026.",
    lesson:
      "Multiple lives, multiple deaths: a relaunch on a shaky issuer is still a shaky card. Card programs that have already failed once deserve extra scrutiny.",
    verified: false,
  },
  {
    name: "Juno Debit Card",
    issuer: "Juno, banking via Evolve Bank & Trust and Synapse",
    status: "Discontinued",
    date: "2024 - 2025",
    whatHappened:
      "Juno's banking and card services were disrupted after its backend provider Synapse went bankrupt in 2024, and Juno halted support from Evolve Bank & Trust. Juno discontinued its Treasury Account service on May 12, 2025 while working with regulators and a trustee to restore services.",
    lesson:
      "Banking-as-a-service failure is the single biggest killer of fintech cards. Your card's partner bank matters more than its brand or its app rating.",
    verified: false,
  },
  {
    name: "Spendly Card",
    issuer: "Spendly",
    status: "Discontinued",
    date: "First half of 2026",
    whatHappened:
      "Spendly's no-KYC virtual prepaid card service is reported to have formally ceased operations in the first half of 2026. The platform's primary domain and original card-issuance services are currently inaccessible, with no sign of a migrated product or restored portal.",
    lesson:
      "Anonymous, no-KYC products carry extra continuity risk: if the operator vanishes, customer support and dispute channels vanish with it.",
    verified: false,
  },
  {
    name: "BitPay Card",
    issuer: "BitPay, banking via Metropolitan Commercial Bank",
    status: "Paused",
    date: "June 1, 2023",
    whatHappened:
      "BitPay suspended new card applications on June 1, 2023 after Metropolitan Commercial Bank exited the crypto sector, ending its banking partnership. Existing cardholders could continue using their cards. BitPay has said it is seeking a new banking partner but has not announced a relaunch timeline.",
    lesson:
      "This is the second BitPay card program to die on a banking partner: the first ended in 2018 when Visa pulled issuer WaveCrest. Banking relationships are the dominant failure mode in crypto cards.",
    verified: true,
  },
];

const statusStyles: Record<Status, string> = {
  Discontinued: "bg-red-500/15 text-red-300 ring-1 ring-inset ring-red-400/30",
  Paused: "bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
  "Shutting down": "bg-orange-500/15 text-orange-300 ring-1 ring-inset ring-orange-400/30",
};

const faq = [
  {
    question: "Why does CryptosBeginner publish a card graveyard?",
    answer:
      "Because how a company handles failure tells you more than its marketing copy. We track discontinued cards so readers can spot the same red flags, bank partner exits, licence revocations, silent pivots, in cards that are still being sold. A directory that only lists live products is a directory that never learned anything.",
  },
  {
    question: "What is the most common reason crypto cards shut down?",
    answer:
      "The regulated partner fails, not the crypto brand. Banking-as-a-service collapses (Synapse, Evolve), issuer licence revocations (Quicko), bank exits from crypto (Metropolitan Commercial Bank), and infrastructure wind-downs (Kulipa, Cypher) account for most entries here. The card on your wallet app is usually one partnership away from stopping.",
  },
  {
    question: "My card is listed here. What should I do?",
    answer:
      "Withdraw any balances through the provider's official channels during the announced window, claim outstanding rewards, download your transaction records, and move recurring payments to another card. Do not assume deadlines will be extended. If the provider says funds are safe, verify that claim yourself rather than waiting.",
  },
  {
    question: "Does a shutdown mean cardholders lose their money?",
    answer:
      "Not always, but the risk is real. Most providers said customer funds were safe, and self-custodial products (Solflare, Ready, Gnosis Pay) kept wallets accessible. The danger is time pressure: withdrawal windows close, rewards expire, and dispute channels disappear. Treat the first announced deadline as the real one.",
  },
  {
    question: "Why do some entries say 'reported' instead of naming a primary source?",
    answer:
      "We could not verify the shutdown from the provider's own announcement or a regulator's notice. In those cases the evidence is an app removal, a service-availability notice, or a card-directory record. 'Reported' means the closure is consistent with available evidence but not confirmed by a primary source, and we say so openly.",
  },
  {
    question: "How do I spot a crypto card that might be next?",
    answer:
      "Check the cardholder agreement for who the licensed issuer is, then watch that company, not the brand. Repeated reward cuts, sudden regional withdrawals, delayed customer support, and long 'temporary pauses' are classic precursors. A card that has already switched issuers or brands once is statistically likelier to do it again.",
  },
];

export const metadata: Metadata = {
  title: "Crypto Card Graveyard: Discontinued & Failed Cards",
  description:
    "A running archive of discontinued, paused, and shut-down crypto cards, with what happened, when, and the red-flag lessons each one teaches. Verified October 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The Crypto Card Graveyard | CryptosBeginner",
    description:
      "Discontinued and failed crypto cards, with what happened, when, and the lessons each one teaches.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function GraveyardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${PAGE_URL}#webpage`,
                name: "Crypto Card Graveyard",
                url: PAGE_URL,
                description: "Discontinued, paused, and shut-down crypto cards: what happened, when, and the lessons each teaches.",
                datePublished: "2026-10-14",
                dateModified: "2026-10-14",
                mainEntity: { "@id": `${PAGE_URL}#itemlist` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },
              {
                "@type": "ItemList",
                "@id": `${PAGE_URL}#itemlist`,
                numberOfItems: entries.length,
                itemListOrder: "https://schema.org/ItemListOrderDescending",
                itemListElement: entries.map((entry, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: entry.name,
                  description: `${entry.status}, ${entry.date}`,
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Crypto Cards", item: HUB_URL },
                  { "@type": "ListItem", position: 3, name: "Graveyard", item: PAGE_URL },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            url: PAGE_URL,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#0b0820] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400">
              <Link href={HUB_URL} className="hover:text-white">Crypto Cards</Link>
              {" / Graveyard"}
            </nav>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                  Archive · updated October 2026
                </p>
                <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.96] tracking-[-0.06em] sm:text-7xl">
                  The Card<br />
                  <span className="bg-gradient-to-r from-red-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                    Graveyard.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  We review the cards that are alive. We also keep the records of the ones that are not.
                  Every entry below is a card that was discontinued, shut down, or paused, with what happened,
                  when it happened, and the red-flag pattern it teaches.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Card marketers will never show you this page. Read it before you apply for anything,
                  and read it again before you park real money on a single card.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/[.06] p-6 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-200">The pattern</p>
                <p className="mt-4 text-2xl font-black tracking-[-0.04em]">
                  The brand rarely fails. The partner does.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Banking partners, licensed issuers, and infrastructure providers account for most of these
                  entries. When you get a crypto card, your money&rsquo;s fate is decided one layer below the logo.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/[.07] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-300">
                {entries.length} entries
              </span>
              <span className="rounded-full bg-white/[.07] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-300">
                Most recent: December 2026
              </span>
              <span className="rounded-full bg-white/[.07] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-300">
                Verified October 2026
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {entries.map((entry) => (
              <article
                key={entry.name}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[.05] p-6 backdrop-blur-sm transition hover:border-fuchsia-400/30 sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      {entry.issuer}
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.03em]">{entry.name}</h2>
                    <p className="mt-1 text-xs font-bold text-slate-400">
                      {entry.date}
                      {!entry.verified && (
                        <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.1em] text-slate-300">
                          Reported
                        </span>
                      )}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] ${statusStyles[entry.status]}`}
                  >
                    {entry.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{entry.whatHappened}</p>
                <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/[.07] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-amber-200">
                    The lesson
                  </p>
                  <p className="mt-2 text-sm leading-7 text-amber-100/90">{entry.lesson}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[.05] p-6 sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.03em]">How we verify a death</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              We only list a card here when we can confirm its status from a provider announcement, a
              regulator notice, or credible news reporting. Where we cannot reach a primary source, the
              entry carries a &ldquo;Reported&rdquo; tag and we say so plainly. Dates are the provider&rsquo;s own announced
              dates. Where a date could not be confirmed, we give the period or omit it. Nothing here is
              invented, and nothing here is copied from another directory.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              This archive is reviewed quarterly alongside the rest of the cards directory. If a paused
              card relaunches, it moves back to the directory and keeps a record here. Last reviewed October 2026.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-200">Graveyard FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">The short answers before the long terms</h2>
            <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[.03]">
              {faq.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-300 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-fuchsia-400/20 bg-fuchsia-400/[.07] p-6 sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.03em]">Now go compare the cards that are still alive</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              The full directory separates provider claims from editorial context and shows the issuer
              behind each card, so the pattern above never catches you by surprise again.
            </p>
            <Link
              href={HUB_URL}
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              Browse the live cards directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
