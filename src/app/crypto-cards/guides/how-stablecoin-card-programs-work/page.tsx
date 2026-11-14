import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/how-stablecoin-card-programs-work`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "15 November 2026";
const UPDATED_ISO = "2026-11-15";

export const metadata: Metadata = {
  title: "How a Stablecoin Card Program Actually Works: The Five Layers Behind Your Card",
  description:
    "Five layers sit between your tap and your stablecoins: the brand, custody, the processor, the issuer and the network. What each layer does, what each one earns, and why cashback pays out more than the card makes, built from PaymentScan's launch research and our own issuer data.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How a Stablecoin Card Program Actually Works | CryptosBeginner",
    description: "The brand is one of five layers, and it earns the least. The full stack behind a stablecoin card, with the industry's own numbers.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "How a Stablecoin Card Program Actually Works",
    description: "Five layers, one tap: what happens between your stablecoins and the merchant, and why cashback is a marketing budget.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Who actually issues a stablecoin card?",
    answer:
      "A licensed issuer, also called the BIN sponsor, whose name appears in the cardholder agreement. For many self-custody cards that is Third National, a Rain group company. Other major issuers include StraitsX, Wirex, Stripe (through Bridge), Interlace, Monavate and Reap. The brand on the card is usually a separate company that rents this infrastructure.",
  },
  {
    question: "How does a stablecoin card make money?",
    answer:
      "Mostly not from you spending. A program keeps roughly 0.1% of spend from interchange as an early program and 0.5 to 0.6% at scale. The bigger legs are yield on customer balances, plan fees and token treasuries. PaymentScan's data shows a sample European fintech earning about 60% of its revenue from yield on balances.",
  },
  {
    question: "Why is cashback higher than what the card earns?",
    answer:
      "Because cashback is a customer acquisition budget, not a share of card revenue. In October 2026, payouts measured onchain ran at 1.2% of spend for ether.fi Cash, 1.4% for Wirex One, 2.5% for Plasma One and 2.9% for Ethena Pay, against the 0.1 to 0.6% programs keep from interchange. When the budget tightens, rates fall, as several programs showed through 2026.",
  },
  {
    question: "What does it cost to launch a stablecoin card?",
    answer:
      "More than the sales quotes suggest. PaymentScan's issuer survey puts a realistic launch budget near $250,000 against quotes around $100,000, about three months to a first live card, six months or more for physical cards, and monthly minimum fees of $5,000 to $15,000 after a ramp period. Covering a small team's costs takes roughly $9 million in monthly spend.",
  },
  {
    question: "Is my money safer with one issuer than another?",
    answer:
      "The custody model matters more than the issuer's size. With a self-custody card, the issuer can freeze the card but not the coins in your wallet. With a custodial card, your deposit is usually a claim on the program, and the cardholder terms decide what you are owed if it fails. KAST's terms, for example, treat a deposit as a sale to KAST, which would leave cardholders as unsecured creditors in an insolvency.",
  },
];

export default function HowStablecoinCardProgramsWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How a Stablecoin Card Program Actually Works",
            url: PAGE_URL,
            datePublished: "2026-11-15",
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Card guide
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              How a Stablecoin Card Program Actually Works
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              You tap, the merchant gets paid in fiat, and stablecoins leave your balance. Between those two events sit five layers of companies, and the brand printed on your card is only one of them. This is the whole stack, with the industry's own numbers.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            A stablecoin card is a rented stack. The brand runs the app, an issuer lends its banking license and BIN range, a processor approves each tap, and the network settles from a prefunded fiat account. The program keeps about 0.1% of your spending from interchange early on and 0.5 to 0.6% at scale, while paying out 1.2 to 2.9% in cashback, so the difference comes from yield on your balance, plan fees and token budgets. Three issuer platforms, Rain, StraitsX and Wirex, processed 96% of the spend researchers could attribute in Q3 2026.
          </Callout>

          <GuideH2>The five layers between your tap and your coins</GuideH2>
          <GuideP>
            PaymentScan, the research arm of Castle Labs, spent 2026 interviewing the companies that sell card infrastructure and published the results in a launch guide for new programs. Read from the cardholder's side, their industry map explains almost everything confusing about these cards: the weird fee structures, the sudden shutdowns, and why two rival brands can fail on the same day.
          </GuideP>
          <figure className="mt-8">
            <img
              src="/images/cards/guides/program-stack.png"
              alt="Diagram of the five layers of a stablecoin card program: the brand, custody, the processor, the issuer and the network"
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              The five layers of a stablecoin card program, from the logo you know to the rails you never see. Diagram by CryptosBeginner, based on PaymentScan's launch research.
            </figcaption>
          </figure>
          <GuideP>
            The brand is the layer you chose, and it does the least regulated work: the app, the marketing, the support inbox, the card design. Underneath it, custody decides where your stablecoins actually sit. On a self-custody card they stay in a wallet you control until the moment of purchase. On a custodial card they sit in accounts the program controls, often with a specialist custodian such as BitGo or Fireblocks, and what you hold is a balance the program owes you.
          </GuideP>
          <GuideP>
            The processor is the layer with the stopwatch. When a merchant's terminal asks whether a payment is good, the answer has to come back in a fraction of a second; Wirex's external authorisation setup, for example, expects a response within 300 milliseconds and treats anything over 500 as a decline. The issuer, the BIN sponsor, is the licensed company in your cardholder agreement. It carries the regulatory risk, holds the relationship with Visa or Mastercard, and can end a program's card access in a way the brand cannot override.
          </GuideP>
          <GuideP>
            The last layer surprises most people: the merchant is not paid in stablecoins. Programs keep a prefunded fiat account with their issuer, topped up days ahead of expected volume (Wirex asks for a buffer of three to five days of spend, Rain's proposals run near four), and settlement flows from that account over the normal card rails. Your stablecoins are sold or drawn against behind the scenes. The crypto part of a crypto card happens entirely on your side of the wall.
          </GuideP>

          <GuideH2>Follow $100: what the card earns</GuideH2>
          <GuideP>
            The merchant pays for all of this through interchange, the percentage of each sale that flows back through the network. It varies enormously by region: as low as 0.2% on capped European debit, around 0.7% blended worldwide, and up to 1.5% in parts of Latin America. The network and the issuer take their cuts first. What reaches the program is a negotiated share, typically 20 to 80% of the gross, which lands at about 0.1% of spend for an early program and 0.5 to 0.6% for a large one. Per $1 million of monthly spend, that is roughly $1,000 of interchange revenue early and $5,000 to $6,000 at scale.
          </GuideP>
          <figure className="mt-8">
            <img
              src="/images/cards/guides/interchange-vs-cashback.png"
              alt="Bar chart comparing interchange kept by a card program per $100 of spending, $0.10 early and $0.50 to $0.60 at scale, against cashback paid out per $100 in October 2026: ether.fi $1.20, Wirex One $1.40, Plasma One $2.50, Ethena Pay $2.90"
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              Per $100 of spending: what a program keeps from interchange, against what four programs paid out in cashback in October 2026, measured onchain by PaymentScan.
            </figcaption>
          </figure>

          <GuideH2>So why is the cashback higher than the revenue?</GuideH2>
          <GuideP>
            Because cashback is not paid out of card revenue. It is a customer acquisition cost, and PaymentScan's onchain measurements show how large it runs: in October 2026, ether.fi Cash paid out 1.2% of spend, Wirex One 1.4%, Plasma One 2.5% and Ethena Pay 2.9%, every one of them above what the program keeps from interchange. The money comes from the other legs of the business: yield on customer balances (ether.fi cardholders held about $318 million at the end of October 2026, most of it supplied to Aave; Plasma One held about $33 million), paid plan tiers, and token treasuries. In PaymentScan's sample P&amp;L for a European fintech program, yield on balances is about 60% of total revenue.
          </GuideP>
          <GuideP>
            This is why generous rates keep getting cut. A cashback rate is a budget line with a funding source behind it, and when the treasury allocation ends, the staking tier changes or the plan reprices, the rate follows. Our guide to cashback after FX fees runs the same logic from the cardholder's side: judge a card on the net number and on how durable the funding behind it looks, never on the headline alone.
          </GuideP>

          <GuideH2>Who holds your money while it waits</GuideH2>
          <GuideP>
            The custody layer decides what a shutdown, a freeze or an insolvency means for you, and the models differ more than the marketing suggests. With a self-custody card, the program can kill the card, but the coins in your wallet are not theirs to freeze or lose; when Kulipa wound down in July 2026, its card brands stopped working while balances stayed in users' own wallets. With a custodial card, your deposit is a claim. How strong that claim is lives in the terms: KAST's terms treat a crypto deposit as a sale to KAST for a USD-denominated claim, with assets held by BitGo and Fireblocks on KAST's behalf, which would make cardholders unsecured creditors in an insolvency. KAST added redemption rights for unspent balances after this structure drew public criticism in July 2026.
          </GuideP>
          <GuideP>
            Neither model is automatically wrong. Custody buys convenience, recovery options and, in some programs, stronger fraud protection. But the two models fail differently, and the cardholder agreement, not the landing page, tells you which one you are in. Our security incidents guide walks through the documented cases, from data breaches to issuer exploits, and what each one did to the people holding the card.
          </GuideP>

          <GuideH2>Three platforms carry almost the whole market</GuideH2>
          <figure className="mt-8">
            <img
              src="/images/cards/guides/issuer-concentration.png"
              alt="Bar chart of stablecoin card spend by issuer platform in Q3 2026: Rain 43%, StraitsX 36%, Wirex 17%, all other issuers 4%"
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
            />
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              Share of stablecoin card spend PaymentScan could attribute to an issuer, Q3 2026. The attributed total was $3.4 billion for the quarter.
            </figcaption>
          </figure>
          <GuideP>
            Of the spend PaymentScan could attribute to an issuer in the third quarter of 2026, Rain processed 43%, StraitsX 36% and Wirex 17%. Our own directory tells the same story at brand level: Rain's infrastructure sits behind 12 of the 201 cards we track, including ether.fi Cash, KAST, Plasma One and the Western Union Stablecard, and the legal issuer named on those cards is Third National, a Rain group company. We mapped the whole arrangement in our BIN by BIN issuer guide, and the short video below walks through it.
          </GuideP>
          <figure className="mt-8">
            <video
              controls
              preload="none"
              poster="/images/cards/guides/issuer-map-poster.jpg"
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
              playsInline
            >
              <source src="/videos/issuer-map-video.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">
              Watch: the brand on your card doesn't run your card. The issuer map behind the 201 cards in our directory, in 32 seconds. A CryptosBeginner video, November 2026.
            </figcaption>
          </figure>
          <GuideP>
            Concentration cuts both ways. The big platforms are principal members of the networks with real compliance teams, and scale is why a two-person startup can offer a working card at all. But shared infrastructure means shared failure: in August 2026 an exploited Rain card contract hit Avici and Tria users at the same time, and programs that share a BIN range can share its problems too, as Slash cardholders found when a shared BIN started declining Meta ad purchases in October 2026. The larger programs hedge by splitting cardholders across two issuers: KAST runs on Rain and Reap, RedotPay on StraitsX and Reap, and Kolo on Rain and Wirex, usually because no single issuer covers every country a program wants to serve.
          </GuideP>
          <GuideP>
            Geography is the quiet constraint in this market. Rain issues in the US and settles in USD only, which is one reason USD-only cards quietly cost their holders an extra 2 to 3% on international spending once network currency fees land. Wirex issues locally in the US, EEA, UK and Australia; StraitsX is based in Singapore with processing reach into around 100 countries; Stripe, through Bridge, covers the US, EEA and parts of Latin America and EMEA. Where you live decides which layer of the stack you get.
          </GuideP>

          <GuideH2>What it costs to launch one</GuideH2>
          <div className="my-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { k: "~$250K", v: "Realistic launch budget, against quotes near $100K" },
              { k: "~3 months", v: "To a first live card; physical cards take 6 months or more" },
              { k: "$5K to $15K", v: "Monthly minimum fees once the ramp period ends" },
              { k: "~$9M / month", v: "Spend needed to cover a small team's running costs" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-black text-slate-950">{s.k}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{s.v}</p>
              </div>
            ))}
          </div>
          <GuideP>
            The launch numbers explain the shape of the market. KYC checks run about $3 to $4 per user, every inactive card still costs about $1 a month, and the median program tracked from launch since 2024 was processing $660,000 a month by its sixth month, far under break-even. The median cardholder spends about $120 a month while the average is near $1,600, because fewer than a quarter of holders, the ones spending over $1,000, drive more than 90% of all spend. Programs are built for whales they mostly do not have.
          </GuideP>
          <GuideP>
            The fastest launches, KAST, COCA, Tria and Plasma One, reached $9 to $15 million a month quickly, and every one of them arrived with an existing audience or a token community attached. That is the real barrier to entry in this market: not the license, which can be rented, but distribution. It is also why so many cards are launched by wallets, exchanges and protocols rather than by new companies, and why the graveyard of discontinued cards keeps growing. We track the closures in our card graveyard, and our shutdown guide explains what to do when your card is one of them.
          </GuideP>

          <GuideH2>What this means for you as a cardholder</GuideH2>
          <BulletList
            items={[
              "Judge the issuer, not just the brand. Your cardholder agreement names the company that actually stands behind the card, and our directory repeats it on each listing where the provider states it.",
              "Keep two cards on two different platforms. A backup on the same issuer is one point of failure wearing two logos, as the Kulipa and Cypher shutdowns showed in July and August 2026.",
              "Keep card balances small and top up close to spending. The prefunding model means your money sits inside someone else's stack; the less of it there, the less any layer can hurt you.",
              "Treat high cashback as a promotion with a funding source, not a feature. When you can see what funds it (a token treasury, a paid tier, yield on balances), you can guess how long it lasts.",
              "Save your cardholder agreement at signup. It is the document that defines your claim if the program winds down, and it gets much harder to find after the app closes.",
            ]}
          />
          <GuideP>
            None of this makes stablecoin cards a bad product. Spending a stablecoin balance anywhere Visa or Mastercard is accepted, without an exchange withdrawal in between, is genuinely useful, and the market processed $1.37 billion in October 2026 alone. It just pays to know which of the five layers you are actually trusting with each part of the journey. Our spending tracker follows the monthly totals program by program, and the card directory lists all 201 programs with their issuers, fees and custody models side by side.
          </GuideP>

          <Callout title="Sources and a disclosure" tone="cyan">
            The industry figures in this guide come from How to Launch a Stablecoin Card Program by PaymentScan (Castle Labs), first edition, November 2026, built from a questionnaire answered by Wirex, Stripe, StraitsX and Interlace, with Rain covered from public documents and operator reporting. PaymentScan is sponsored by Wirex, one of the issuers covered, so treat its issuer comparisons with that in mind. Directory figures (201 listings, issuer mapping, shutdown dates) are our own, checked November 2026. Nothing here is financial advice.
          </Callout>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/guides/crypto-card-bin-by-bin"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              See the full issuer map
            </Link>
            <Link
              href="/crypto-cards/spending"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Monthly spending tracker
            </Link>
            <Link
              href="/crypto-cards/guides/how-crypto-cards-work"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              How crypto cards work
            </Link>
            <Link
              href={HUB_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Browse all cards
            </Link>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {faqItems.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-slate-900">{f.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
