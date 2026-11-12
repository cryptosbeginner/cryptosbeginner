import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/crypto-card-security-incidents`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "13 November 2026";
const UPDATED_ISO = "2026-11-13";

export const metadata: Metadata = {
  title: "Crypto Card Security Incidents: A Sourced History of Hacks, Exploits and Breaches",
  description:
    "The major security incidents that hit crypto card users, each verified against a reputable source: Crypto.com in 2022, Infini in 2025, Gnosis Pay and the Rain contract exploit in 2026, the Based card data breach, and Gnosis Pay's November 2026 data breach. Plus what the cardholder terms actually say about who pays for unauthorized card use. What happened, who paid, and how to protect yourself.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Security Incidents | CryptosBeginner",
    description: "A careful, sourced history of the hacks and breaches that reached crypto card users, and the safety habits that actually help.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Card Security Incidents",
    description: "Six verified incidents, one honest non-finding, the liability rules that decide who pays, and the patterns that connect them.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Were users reimbursed in these incidents?",
    answer:
      "In every fund loss incident in this guide, the provider says affected users were made whole: Crypto.com reimbursed all 483 accounts in 2022, Gnosis Pay absorbed its 2026 loss, and Rain covered the August 2026 refunds with Avici and Tria adding 10% on top. That is a good record, but it is a record of choices companies made after the fact, not a guarantee written into your cardholder agreement. Do not treat it as insurance.",
  },
  {
    question: "Does self-custody protect my card balance?",
    answer:
      "Only partly. Self-custody protected users in the Rain exploit: their wallets and private keys were never touched. But the money they had loaded onto their cards sat in a card contract, and that contract is what was drained. Gnosis Pay makes the same point from the other side: funds sat in users' own Safe wallets, and a flaw in the card modules around those wallets was still enough. Self-custody removes the custodian, not the code.",
  },
  {
    question: "What should I do if my card program announces an exploit?",
    answer:
      "Stop topping up, move any balance you can back to a wallet you control, and wait for the provider's official statement before acting on social media claims. In the verified incidents above, refunds were automatic and did not require users to click links or file claims through third parties. Anyone asking for your seed phrase or a 'verification payment' during an incident is running a scam on top of the incident.",
  },
  {
    question: "Is my identity data at risk with a crypto card?",
    answer:
      "Yes, and the Based incident shows how. Card programs collect passports, ID numbers, addresses, and selfies for KYC, often through outside vendors. That data can be exposed even when no money moves. Use a unique email for card programs, and assume anything you upload for verification could one day leak.",
  },
  {
    question: "How do you choose which incidents to include here?",
    answer:
      "We include an incident only when we can verify it from a reputable source: a major crypto newsroom, a security firm's disclosure, or the company's own post-mortem, with the source and date named in the text. When we looked for a widely rumored incident and could not verify one, we say so, as with Wirex below.",
  },
];

export default function CryptoCardSecurityIncidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Card Security Incidents",
            url: PAGE_URL,
            datePublished: "2026-11-05",
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
              Card guide
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Crypto Card Security Incidents
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Crypto cards fail in ways ordinary bank cards do not: drained vaults, buggy card contracts, insider access, and leaked identity files. This is the verified history, with a source and a date on every entry, and one honest non-finding where the rumors did not check out.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="How to read this page" tone="rose">
            Every incident below was verified against a reputable source before inclusion: a company post-mortem, a security firm's disclosure, or established crypto newsrooms, named in the text with dates. Rumors, forum posts, and unsourced social media claims were left out. One entry, Wirex, is included precisely because we could not verify the incident people assume exists, and the absence is worth recording honestly.
          </Callout>

          <GuideH2>Crypto.com, January 2022: the 2FA bypass</GuideH2>
          <GuideP>
            On 17 January 2022, attackers withdrew crypto from Crypto.com accounts without the two-factor authentication the accounts required. Crypto.com's official post-mortem, published 20 January 2022 and covered by TechCrunch and Decrypt the same day, put the damage at 483 affected users and unauthorized withdrawals of 4,836.26 ETH, 443.93 BTC, and about $66,200 in other cryptocurrencies, roughly $34 million in total. Withdrawals were suspended for about 14 hours while the company investigated.
          </GuideP>
          <GuideP>
            The outcome is the part worth remembering: every affected account was fully reimbursed, the company rebuilt its 2FA infrastructure, and it launched a Worldwide Account Protection Program covering up to $250,000 for qualified users. The lesson for card users is that exchange linked cards inherit exchange account risk. Your card is only as safe as the login standing in front of it, and in 2022 that login could be stepped around.
          </GuideP>

          <GuideH2>Infini, February 2025: the insider who kept the keys</GuideH2>
          <GuideP>
            On 24 February 2025, about $49.5 million in USDC was drained from a vault belonging to Infini, a stablecoin neobank with its own card program. Analysis by security firms Cyvers and QuillAudits, reported by Decrypt and catalogued in The Block's roundup of the biggest crypto hacks of 2025, tied the drain to a former developer whose administrative privileges on Infini's contracts had never been revoked after he left. The flaw was not exotic code. It was an access control failure: credentials that should have been deleted were still live more than three months later.
          </GuideP>
          <GuideP>
            Infini's founder pledged that affected users would be fully compensated, and the company said withdrawals and payments continued. Four months later, on 17 June 2025, Infini suspended its Global, Lite, and Tech cards, citing compliance costs. The sequence is the lesson: an exploit does not have to take your money directly to end your card. It only has to damage the company enough that the card stops being worth running. When a card program dies after an incident like this, it joins the long list of discontinued programs we track on our graveyard page.
          </GuideP>

          <GuideH2>Gnosis Pay, June 2026: self-custody is not the same as safe</GuideH2>
          <GuideP>
            Gnosis Pay is the flagship self-custodial card: funds sit in the user's own Safe smart wallet, and the card spends from it. On 1 June 2026, attackers exploited an ERC-1271 signature validation flaw in the Zodiac Delay and Roles modules that Gnosis Pay card wallets rely on, code that had carried the flaw since October 2023. According to Gnosis Pay's official post-mortem, published 3 July 2026, about $1.5 million was extracted, roughly $300,000 more became temporarily inaccessible, and about 5,281 wallets were affected. PeckShield flagged the attack publicly while it was underway.
          </GuideP>
          <GuideP>
            The response was the best in this guide: root cause identified in about two hours, services restored to roughly 99% of users by 6 June, and Gnosis Pay absorbed the entire loss so users lost nothing. Keep both halves of that sentence. The model worked exactly as designed and users were still exposed, because self-custody moves risk from a company's vault into smart contract code, and code has bugs. What protected users in the end was not the architecture. It was the provider's decision to pay.
          </GuideP>

          <GuideH2>Rain, Avici, and Tria, August 2026: one contract, many brands</GuideH2>
          <GuideP>
            On 28 August 2026, an attacker exploited an outdated version of a Solana card contract operated by Rain, the issuing infrastructure provider behind a large share of the self-custody card market. Blockchain security firm Blockaid, which disclosed the incident on 2 September 2026, estimated total losses of about $1.1 million across the programs running the vulnerable contract. Avici reported $500,859.22 taken from the card balances of 1,685 users. Tria reported about $431,945 across 636 customers.
          </GuideP>
          <GuideP>
            Two details matter. First, no user's wallet or private keys were touched. The money that left was the money sitting in card collateral contracts, the balance users had loaded in order to spend. Second, the brands were not the failure point: the shared issuer infrastructure underneath them was, which meant cardholders of competing products had the same bad day. Affected users were refunded in full, with Rain covering the refunds and Avici and Tria each adding 10% on top, and Rain said every program on the vulnerable contract version was upgraded. This incident is the strongest argument in this guide for knowing who issues your card, which is why we built the brand to issuer map in our BIN guide.
          </GuideP>

          <GuideH2>Based, October 2026: the breach that took data, not money</GuideH2>
          <GuideP>
            On 5 October 2026, an unauthorized party accessed an internal dashboard used to manage the Based Visa Card program. In statements on 11 and 12 October 2026, reported by PANews and Cryptopolitan, Based co-founder Edison Lim said KYC data collected for the card may have been exposed: names, passport or national ID numbers, dates of birth, addresses, email addresses, and phone numbers. Based said card numbers, CVVs, and PINs were not in the dataset, that its self-custodial trading wallet was unaffected, and that it had notified Singapore's Personal Data Protection Commission and filed a police report. No loss of customer funds has been confirmed.
          </GuideP>
          <GuideP>
            This is the incident type card users underestimate. Money can be refunded. A passport number, birth date, and home address, linked to the knowledge that you hold crypto, cannot be un-leaked. Every crypto card requires KYC, so every cardholder has a file like this sitting with a provider or its vendor. Choose programs the way you would choose anyone you hand identity documents to.
          </GuideP>

          <GuideH2>Gnosis Pay, November 2026: the breach that took data</GuideH2>
          <GuideP>
            Gnosis Pay appears in this guide twice, and the second incident is the quieter kind. On 3 November 2026 the company emailed cardholders that their names and shipping addresses were taken in a breach of the card system itself. Funds were not affected. Rotki founder Lefteris Karapetsas, a cardholder, said his email also listed his card number and every wallet address linked to the account. That combination is the problem: a name, a home address, and a list of wallet addresses lets anyone look those wallets up onchain and see what they hold.
          </GuideP>
          <GuideP>
            The timing makes it permanent. The consumer card closes on 20 December 2026, and Gnosis Pay's own help pages say KYC and transaction records are kept for five more years after that. Closing the card does not close the file. Expect phishing that uses your real name and address to look legitimate, and remember the company's own warning: Gnosis Pay will never ask for your seed phrase, PIN, or to move funds.
          </GuideP>

          <GuideH2>The one we could not verify: Wirex</GuideH2>
          <GuideP>
            Readers ask about Wirex because it is one of the oldest names in crypto cards, and old names attract rumors. We looked for a platform level Wirex security incident in reputable reporting before writing this guide, and we did not find one. Incident tracking reviews of Wirex likewise report no known platform hack or breach. What does exist is a long tail of individual account compromises, phishing losses, and bitter support and chargeback disputes, which is a service quality story, not a breach story. We are recording the non-finding rather than laundering rumor into fact. No platform incident is not the same as no risk: account level attacks are how most users actually lose money, on Wirex and everywhere else.
          </GuideP>

          <GuideH2>Who pays when it is fraud: the liability rules in the terms</GuideH2>
          <GuideP>
            The refunds above were providers choosing to pay. A different question is what you are owed when someone uses your card without permission, and that answer sits in the cardholder agreement, where it varies more than most users expect. The summary below follows the current terms for seven cards, as compiled by @xKseilas from the agreements themselves. It covers card payments only: a wallet drained with a stolen seed phrase is not a card transaction, and none of these agreements applies to it.
          </GuideP>
          <BulletList
            items={[
              "ether.fi Cash: the US agreement caps your loss for unauthorized use at $50, and at zero once you report, unless there are two or more incidents in 12 months; ATM cash advances are not covered. The international terms have no $50 cap and give no refund if the card was lost or stolen, or if you did not report without undue delay.",
              "KAST: the US agreement has the same $50 cap and conditions. The non-US terms charge you nothing after you notify them, but you may still owe charges made before notice. The US business card leaves you fully liable until you give notice.",
              "Gnosis Pay: in the EEA you can lose up to 50 euros if the card was lost or stolen, and the first £35 outside the EEA; nothing after you report the card compromised. Report within 13 months at most. The card stops on 20 December 2026 and disputes are supported until 12 June 2028.",
              "Crypto.com: the EU prepaid card terms say you accept the risk of unauthorized payments, while a later clause caps your exposure at the equivalent of £35 until you report. No refund if you did not keep your card details safe.",
              "Wirex: the UK card caps your loss at £35 before you report and nothing after, with 13 months to flag a transaction. The global terms put everything spent before you block the card on you, with two weeks to dispute.",
              "RedotPay: the Singapore card terms make you liable for all card transactions, authorized or not, with no refund if your card details leaked on your side; disputes run within 60 days. The Apple Pay and Google Pay terms make you liable until you report, with exceptions at RedotPay's sole discretion.",
              "Tangem Pay: the card freezes instantly in the app and a virtual card reissue costs $5, with the old details stopping at once; a plastic replacement needs a new order. If your recovery phrase leaked, Tangem cannot recover the funds.",
            ]}
          />
          <GuideP>
            The pattern: on US agreements the $50 cap does real work, reporting fast is worth money everywhere, and on some non-US terms the honest answer is that the loss is yours. If someone skims your US ether.fi card and spends $800, reporting the same day caps your loss at $50. The same $800 taken from a self-custody wallet with a stolen seed phrase has no chargeback at all. Freeze the card in the app first, report it to support the same day, dispute every charge you do not recognize, and if a seed phrase leaked, move the funds to a new wallet instead.
          </GuideP>

          <GuideH2>The patterns, and what actually protects you</GuideH2>
          <GuideP>
            Six incidents, six different failure modes: an authentication bypass, an insider's leftover access, a smart contract flaw, shared issuer infrastructure, a vendor dashboard, and a card-system breach that took identity data. There is no single product feature that defeats all of them, including self-custody. What helps is boring and cumulative:
          </GuideP>
          <BulletList
            items={[
              "Keep card balances small. Every dollar sitting in a card account, vault, or collateral contract is a dollar exposed to that program's worst day. Top up close to when you spend.",
              "Hold the bulk of your funds in a wallet only you control, separate from any card. In the Rain exploit, untouched wallets were the whole reason the losses stopped at card balances.",
              "Use a hardware wallet or passkey, a unique password, and app based 2FA on the account behind the card. The Crypto.com incident was, at root, a login failure.",
              "Know your issuer and spread your risk. A second card on a different issuer is real redundancy; a second card on the same issuer is a spare copy of the same risk. Our BIN guide maps the major programs.",
              "Treat your KYC data as semi-public. Use a unique email address for card programs, and think before uploading identity documents to a program you barely know.",
              "During an incident, do nothing quickly. Refunds in every case above were automatic. Urgent messages asking you to verify, claim, or move funds mid-incident are scams riding the news.",
              "Pick providers by their response record. Gnosis Pay and the Rain programs published numbers, timelines, and refunds. That behavior, visible before you need it, is the closest thing to a safety rating this industry has.",
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/guides/crypto-card-bin-by-bin"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Who issues your card, BIN by BIN
            </Link>
            <Link
              href="/crypto-cards/graveyard"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              See the card graveyard
            </Link>
            <Link
              href="/crypto-cards/gnosis-pay-card"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Gnosis Pay listing
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
