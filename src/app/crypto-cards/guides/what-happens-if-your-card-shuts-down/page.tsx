import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList, StepList, WarningList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/what-happens-if-your-card-shuts-down`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: "What Happens to Your Money If Your Crypto Card Shuts Down?",
  description:
    "Crypto cards shut down more often than you think. Learn how custody models decide whether you keep your money, with real shutdown case studies and a checklist to verify any card before you load it.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Happens to Your Money If Your Crypto Card Shuts Down? | CryptosBeginner",
    description: "The custody model decides whether a card shutdown is an inconvenience or a loss. Real cases, plain explanations, and a verification checklist.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "What Happens to Your Money If Your Crypto Card Shuts Down?",
    description: "Self-custody vs custodial cards when the program ends: real shutdowns and what to check first.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "If my crypto card shuts down, do I lose my money?",
    answer:
      "Not always, but the outcome depends on who actually holds your funds. With self-custodial cards, your money sits in a wallet or smart contract you control, so the card stopping is an inconvenience rather than a loss: Solflare and Ready users kept their funds when issuer Kulipa wound down in July 2026, and Gnosis Pay users keep their self-custodial Safe after the December 20, 2026 consumer shutdown. With custodial cards, your balance is a claim on the company, so recovery depends on their process, solvency, and the withdrawal window they set.",
  },
  {
    question: "What is the most common reason crypto cards shut down?",
    answer:
      "The regulated partner fails, not the crypto brand. Our card graveyard shows the pattern clearly: banking-as-a-service collapses (Synapse, Evolve), issuer licence revocations (Quicko in Poland), banks exiting crypto (Metropolitan Commercial Bank), and infrastructure wind-downs (Kulipa, Cypher). The brand on the card is usually one partnership away from stopping.",
  },
  {
    question: "How do I check who really holds my money before I load a card?",
    answer:
      "Start with the cardholder agreement, which names the licensed issuer and describes where funds sit. Then check the footer of the card's official page for an issuer name, search the terms for phrases like 'issued by' or 'funds held by', and compare against our issuers directory. If you cannot find a named, licensed issuer anywhere, treat that as a red flag.",
  },
  {
    question: "Does having a second crypto card protect me as a backup?",
    answer:
      "Only if a different company issues it. In July 2026, issuer Kulipa wound down and both the Solflare and Ready cards stopped within a day of each other, because they shared the same issuer. Two cards on the same infrastructure are one card with extra steps. Check the issuer behind each card, not just the brand on the front.",
  },
  {
    question: "What should I do the moment my card announces a shutdown?",
    answer:
      "Act in the first announced window, not the last. Withdraw balances through official channels immediately, claim any outstanding rewards (they usually expire), download your transaction records for tax purposes, and move recurring payments to another card. Do not assume deadlines will be extended: Offramp ended crypto withdrawals on September 30, 2026 after announcing the window months earlier.",
  },
  {
    question: "Does this page cover every card's custody model?",
    answer:
      "No. Custody terms vary by card and region, and they can change. We state the custody facts we have verified from cardholder agreements and provider pages; where we have not verified a card's model, we say so. For any card, the cardholder agreement is the authoritative source for where your funds sit and what happens on termination.",
  },
];

export default function CardShutdownGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Happens to Your Money If Your Crypto Card Shuts Down?",
            url: PAGE_URL,
            datePublished: "2026-10-19",
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Card safety guide
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              What Happens to Your Money If Your Crypto Card Shuts Down?
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Cards shut down. Programs pivot, issuers lose licences, partners wind down. Whether that ruins your week or costs you your money comes down to one thing: who actually holds your funds.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            A crypto card is two things: a brand you signed up with, and a licensed company that actually issues the card and holds the money. When cards shut down, self-custodial users usually keep everything, because funds never left their wallet. Custodial users get their money back only if the company's process, solvency, and deadlines cooperate. Know which one you have before you load it.
          </Callout>

          <GuideH2>Why this matters right now</GuideH2>
          <GuideP>
            This is not a theoretical risk. Gnosis Pay told cardholders on September 21, 2026 that its consumer card and web app stop working on December 20, 2026 at 23:59 UTC, as the company pivots to B2B infrastructure. And in July 2026, card-issuing partner Kulipa began winding down, which killed the Solflare card on July 28 and the Ready card on July 29. Two separate brands, two dead cards, one day apart, one shared issuer.
          </GuideP>
          <GuideP>
            These are not isolated incidents. Our <Link href="/crypto-cards/graveyard" className="font-bold text-fuchsia-700 hover:underline">card graveyard</Link> tracks 15 discontinued, paused, or shutting-down cards, and the pattern is consistent: the brand rarely fails. The partner does. Banks exit crypto, regulators revoke licences, infrastructure providers wind down, and the card you use every day stops with little warning.
          </GuideP>

          <GuideH2>The three custody models, explained simply</GuideH2>
          <GuideP>
            Custody answers one question: while your money is parked on this card, who can move it? There are three answers, and they decide everything that follows a shutdown.
          </GuideP>

          <GuideH3>1. True self-custody: the card stops, the money stays</GuideH3>
          <GuideP>
            With a self-custodial card, your funds sit in a wallet or smart contract that you own. The card company never holds your balance, so if the program ends, the card simply stops working and your money stays exactly where it was. You can move it yourself, independent of the app.
          </GuideP>
          <BulletList
            items={[
              "Avici: you deposit USDC into a self-custodial Loan Escrow smart contract that your own wallet owns. Avici and the issuer cannot move funds except to settle your card charges.",
              "Gnosis Pay: users keep funds in a Safe smart account. After the December 20, 2026 consumer shutdown, those Safes stay fully accessible with no withdrawal deadline.",
              "Tria: you hold the keys, and every transaction needs your Face ID. The card company cannot move your balance.",
            ]}
          />

          <GuideH3>2. Hybrid: some of your money is with partners</GuideH3>
          <GuideP>
            Hybrid cards mix self-custody with platform-held balances. Your crypto might sit in a wallet you control, while top-up balances, fiat, yield positions, or reward pools are held by the company or its partners. In a shutdown, the self-custodial part is fine and the platform-held part goes through the company's process. This is the hardest model to evaluate from marketing copy alone, because the answer differs balance by balance.
          </GuideP>

          <GuideH3>3. Custodial: your balance is a claim on the company</GuideH3>
          <GuideP>
            With a fully custodial card, you top up a balance that the company or its partners hold. You do not control those funds on-chain; you hold a claim against the operator. In a shutdown, getting money back depends on the company's solvency, its terms, insolvency procedures if it fails, and the withdrawal window it sets. Exchange-issued and EMI-style cards typically fall here.
          </GuideP>
          <Callout tone="amber" title="What we cannot tell you">
            We state custody facts we have verified from cardholder agreements and provider pages. For cards we have not verified, the honest answer is "check the cardholder agreement." Never assume a card is self-custodial because its marketing says "non-custodial wallet": the wallet and the card balance can be two different custody stories.
          </Callout>

          <GuideH2>What real shutdowns looked like</GuideH2>
          <GuideP>
            Every entry below comes from our <Link href="/crypto-cards/graveyard" className="font-bold text-fuchsia-700 hover:underline">card graveyard</Link>, where we track what happened, when, and whether users got their funds back.
          </GuideP>

          <GuideH3>Kulipa winds down: Solflare and Ready, July 2026</GuideH3>
          <GuideP>
            Card-issuing partner Kulipa began winding down in July 2026. The Solflare card stopped on July 28; the Ready card stopped on July 29. Ready's non-EEA cards had been halted first with roughly one hour of notice back in June. Both cards were self-custodial, so funds stayed safe in users' wallets and kept working for everything else. The lesson: self-custody did its job, but nobody got meaningful notice, and a backup card on the same issuer is not a backup at all.
          </GuideP>

          <GuideH3>Gnosis Pay pivots to B2B, December 20, 2026</GuideH3>
          <GuideP>
            Gnosis Pay is ending its consumer card and web app on December 20, 2026 at 23:59 UTC to focus on white-label B2B infrastructure. New sign-ups closed September 30, and the GNO cashback program ended with its final distribution on October 7. The good news for users: balances live in a self-custodial Safe, so assets stay accessible with no withdrawal deadline. The lesson: a pivot is not a scam and self-custody protects you, but the card you signed up for is still gone, so plan your replacement now.
          </GuideP>

          <GuideH3>Quicko loses its licence: CEX.IO Card, February 2026</GuideH3>
          <GuideP>
            On January 21, 2026, the Polish Financial Supervision Authority withdrew Quicko's authorization to operate as a payment institution. Every card program powered by Quicko stopped, including the CEX.IO Card, whose payments became unavailable on February 3, 2026. CEX.IO's exchange kept running normally. The lesson: one revoked licence can kill many cards at once, and the issuer named on your cardholder agreement is the real product. The brand is packaging.
          </GuideP>

          <GuideH3>Offramp winds down, July to September 2026</GuideH3>
          <GuideP>
            Offramp announced a phased wind-down starting July 1, 2026. Cards were disabled July 31, and crypto withdrawals ended September 30. Users who acted in the first window were fine; anyone who waited until the last days was racing the clock. The lesson: treat the first announced deadline as the real one. Deadlines in shutdowns rarely get extended.
          </GuideP>

          <GuideH3>Metropolitan Commercial Bank exits crypto: BitPay Card, 2023</GuideH3>
          <GuideP>
            BitPay suspended new card applications on June 1, 2023 after its banking partner exited the crypto sector. Existing cardholders could keep using their cards while BitPay looked for a new partner. This was the second BitPay card program to die on a banking partner; the first ended in 2018 when Visa pulled issuer WaveCrest. The lesson: banking relationships are the dominant failure mode in crypto cards, and a card can die twice on two different partners.
          </GuideP>

          <GuideH2>Check who holds your money before you load it</GuideH2>
          <GuideP>
            This takes ten minutes and it is the single most useful piece of due diligence in crypto cards. Do it before you top up anything meaningful.
          </GuideP>
          <StepList
            steps={[
              {
                title: "Open the cardholder agreement",
                body: "This is the legal document you accept when you order the card, usually linked in the footer of the card's site. It names the licensed issuer and describes where funds sit and what happens on termination. This document outranks all marketing.",
              },
              {
                title: "Search the terms for the money trail",
                body: "Search for phrases like 'issued by', 'funds held by', 'e-money', and 'safeguarding'. You are looking for a named, licensed company, not vague language about 'our partners'.",
              },
              {
                title: "Check the footer of the official page",
                body: "Regulated issuers are usually named in small print at the bottom of the card's homepage or pricing page. If no issuer is named anywhere, treat that as a red flag.",
              },
              {
                title: "Look the issuer up in our directory",
                body: "Our issuers page maps brands to their infrastructure: Wirex powers the BingX and COCA cards, Rain powers Plasma One, ether.fi Cash, Tuyo, and KAST, and Baanx powers the MetaMask, Ledger, and 1inch cards. If your card shares an issuer with another card you use, they are not independent backups.",
              },
              {
                title: "Ask where the money sits, not just who issues",
                body: "An issuer can process payments while your balance sits elsewhere. For each balance type (crypto top-up, fiat, rewards, yield), ask: is this in a wallet I control, or a claim on the company?",
              },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/issuers"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Browse the issuers directory
            </Link>
            <Link
              href="/crypto-cards/graveyard"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the card graveyard
            </Link>
          </div>

          <GuideH2>The backup-card rule</GuideH2>
          <GuideP>
            Many people carry two crypto cards so one can cover the other. That only works if a different company issues each card. Solflare and Ready looked like independent backups of each other until Kulipa wound down and both stopped within a day. When you pick a backup, check the issuer behind it, not the logo on the front. If both cards run on the same infrastructure, you do not have a backup. You have one point of failure with two apps.
          </GuideP>
          <WarningList
            items={[
              {
                title: "Same issuer, same fate",
                body: "Cards sharing an issuer die together. Verify each card's issuer in the cardholder agreement before counting it as a backup.",
              },
              {
                title: "Notice can be hours, not weeks",
                body: "Ready's non-EEA cards stopped with roughly one hour of notice. Do not park money you need this week on a single card.",
              },
              {
                title: "Rewards die first",
                body: "Cashback programs and reward pools usually end before the card stops working. Gnosis Pay's GNO cashback ended October 7, over two months before the December 20 shutdown. Claim rewards early.",
              },
            ]}
          />

          <GuideH2>The bottom line</GuideH2>
          <GuideP>
            Pick cards the way you would pick a bank branch in an earthquake zone: assume the building might not be there next year, and make sure your money does not depend on it. Self-custodial cards turn a shutdown into an inconvenience. Custodial cards turn it into a process you do not control. Check the cardholder agreement, know the issuer, keep a genuinely independent backup, and act in the first window if a shutdown is ever announced. The graveyard keeps growing; your funds do not have to join it.
          </GuideP>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={HUB_URL}
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Browse all cards
            </Link>
            <Link
              href="/crypto-cards/graveyard"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the card graveyard
            </Link>
            <Link
              href="/crypto-cards/issuers"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Who issues your card?
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
