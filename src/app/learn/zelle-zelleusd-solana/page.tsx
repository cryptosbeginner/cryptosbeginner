import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/zelle-zelleusd-solana`;
const UPDATED = "17 November 2026";
const UPDATED_ISO = "2026-11-17";
const IMG = "/images/learn/zelle-zlusd/demo-steps.png";

export const metadata: Metadata = {
  title: "Zelle Picks Solana for ZelleUSD, MoneyGram Connects Wallets to Cash: Breakpoint's Payments Announcements Explained",
  description:
    "Two payments giants chose Solana at Breakpoint on 16 November 2026. Zelle announced its ZelleUSD stablecoin will run on Solana and demoed a $1.25 million confidential transfer on a test network. MoneyGram and Solflare switched on USDC cash-outs at agent locations in over 170 countries, fee free until 31 December 2026. What was actually announced, and what was not.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Zelle on Solana and MoneyGram's 170 Country Cash-Out | CryptosBeginner",
    description:
      "The bank owned network behind $1.2 trillion in US payments chose a public blockchain for its stablecoin, and MoneyGram turned Solana wallets into cash at 480,000 locations. Both Breakpoint announcements, with the caveats included.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMG}`, alt: "Four step diagram of Zelle's confidential ZelleUSD transfer demo at Breakpoint: Anchorage Digital Bank issues 1.25 million dollars in ZLUSD, a bank converts it to confidential form on Solana, sends it to a second bank with the amount hidden, and the receiving bank decrypts it, with a note that the demo ran on a test network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelle Picks Solana, MoneyGram Connects Wallets to Cash",
    description:
      "A $1.25M transfer with the amount hidden, demoed on a test network, and USDC cash-outs live in 170+ countries. Breakpoint's two payments announcements, explained with the fine print.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Can I send money with ZelleUSD now?",
    answer:
      "No. ZelleUSD is in pre-launch status. Zelle has announced the token, its issuer and its first planned corridor, but there is no consumer access, no fee schedule and no launch date for the Solana based service. The Breakpoint demonstration was between banks, on a test network.",
  },
  {
    question: "Did Zelle really move $1.25 million on Solana?",
    answer:
      "It demonstrated a transfer representing $1.25 million, live on stage at Breakpoint on 16 November 2026. The important qualifier is that the demo ran on Solana's devnet, the development network where tokens carry no real value. It proves the mechanics work end to end. It does not show a live service moving customer money.",
  },
  {
    question: "What is a confidential transfer?",
    answer:
      "A transfer where the amount is encrypted on-chain. The network can still verify, using zero-knowledge proofs, that the transfer is valid and that no money was created or lost, without anyone watching being able to see how much moved. The sender and receiver can decrypt the amount; on Solana this is an optional feature of the Token-2022 standard, switched on by the issuer.",
  },
  {
    question: "Who issues ZelleUSD and where will it be used first?",
    answer:
      "Anchorage Digital Bank issues ZLUSD. Zelle unveiled the token in June 2026 alongside its international plans, naming India as the first remittance corridor, with US to India transfers planned by the end of 2026. Whether ZLUSD settles that corridor from day one has not been confirmed, and no production timeline was given at Breakpoint.",
  },
  {
    question: "Is the MoneyGram cash-out in Solflare live now?",
    answer:
      "Yes, according to MoneyGram: the integration is available now to eligible users in supported markets, not a future rollout. It covers participating MoneyGram locations in more than 170 countries and territories. Availability varies by market, and MoneyGram's crypto services are unavailable in Alaska, Hawaii and Louisiana.",
  },
  {
    question: "What does the MoneyGram cash-out cost, and do I need ID?",
    answer:
      "Eligible users pay zero cash-out fees until 31 December 2026; after that, standard fees and exchange spreads apply, and the zero fee promotion says nothing about the exchange rate you receive, which is where much of the real cost of cash conversion usually sits. Cash collection is not anonymous: MoneyGram verifies your identity and issues a reference number for pickup once you send the USDC.",
  },
  {
    question: "Why would banks want payment amounts hidden on a public blockchain?",
    answer:
      "Because public ledgers are public. A bank moving money for customers cannot broadcast amounts to competitors and observers, and regulators still need visibility. Confidential transfers split the difference: amounts are hidden from the public, the network verifies validity, and the participating institutions can decrypt what they need for compliance checks such as anti-money laundering controls.",
  },
];

export default function ZelleZelleusdSolanaPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zelle Picks Solana for ZelleUSD, MoneyGram Connects Wallets to Cash: Breakpoint's Payments Announcements Explained",
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
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      { "@type": "ListItem", position: 3, name: "Zelle and MoneyGram on Solana", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Link href="/learn" className="text-sm font-black text-amber-200 hover:text-white">
              ← Back to Learn guides
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Stablecoin news
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Breakpoint's payments double: Zelle picks Solana, MoneyGram connects wallets to cash
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Solana's Breakpoint conference in London produced two payments announcements on 16
              November 2026 that belong in one story. Zelle, the network owned by seven of the
              largest US banks, announced that its dollar stablecoin ZelleUSD will run on Solana
              and demonstrated a $1.25 million transfer with the amount hidden, on a test network.
              The same day, MoneyGram and the Solflare wallet switched on USDC cash-outs at agent
              locations in more than 170 countries, live now and fee free until the end of 2026.
              One is a promise about where institutional money is heading. The other is a product
              you can already use. Both run on the same chain.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            Zelle (operated by Early Warning Services for Bank of America, Capital One, JPMorgan
            Chase, PNC, Truist, US Bank and Wells Fargo) has chosen Solana for ZelleUSD, the
            stablecoin behind its international expansion, issued by Anchorage Digital Bank. Its
            Breakpoint demo of a confidential $1.25 million bank to bank transfer ran on devnet,
            and the token remains pre-launch with no consumer access or date announced.
            MoneyGram's Solflare integration is the opposite profile: live now, it lets users turn
            USDC into local cash at participating locations in over 170 countries and territories,
            with zero cash-out fees for eligible users until 31 December 2026, identity checks
            included.
          </Callout>

          <figure className="mt-8">
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 aspect-[1600/980]">
              <Image
                src={IMG}
                alt="Four step diagram of Zelle's confidential ZelleUSD transfer demo at Breakpoint: Anchorage Digital Bank issues 1.25 million dollars in ZLUSD, a bank converts it to confidential form on Solana, sends it to a second bank with the amount hidden, and the receiving bank decrypts it, with a note that the demo ran on a test network"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </figure>

          <GuideH2>Announcement one: Zelle brings its stablecoin to Solana</GuideH2>
          <GuideP>
            Zelle has spent 2026 building an international business on top of a network that
            historically only moved money inside the United States; it moved more than $1.2
            trillion between American accounts in 2025. In June 2026 it named India as its first
            remittance corridor, with US to India transfers planned before the end of 2026, and
            unveiled ZelleUSD as the asset intended to underpin international payments in more
            markets over time. Breakpoint added the missing piece: the chain. Alexandra Lang,
            Zelle's vice president of digital asset partnerships and strategy, presented Solana as
            a deliberate choice for payments at scale, and the Solana Foundation used the same
            stage to announce the network's move out of beta, with finality improving to about 150
            milliseconds.
          </GuideP>
          <GuideP>
            For the bank consortium behind Zelle, this is the first time its cross-border plans
            have been tied publicly to a specific public blockchain. That is a different category
            of decision from a crypto company launching a token: the owners include the banks that
            run much of the US payments system, and their network reaches more than 2,400 banks
            and credit unions.
          </GuideP>

          <GuideH2>How the Zelle demo worked</GuideH2>
          <GuideP>
            The live demonstration walked through one complete confidential payment. Anchorage
            Digital Bank, the issuer, issued $1.25 million in ZLUSD to a participating bank. That
            bank converted the balance into confidential form and sent it to a second bank. The
            receiving institution decrypted the amount before the funds returned to Anchorage. At
            no stage could an outside observer see how much had moved, even though the network
            verified the transfer was valid. The demo interface split the total on screen into a
            $1,000,000 public balance and a $250,000 confidential balance, which is a neat picture
            of the model: the token behaves like an ordinary stablecoin until the holder switches
            a balance into its encrypted form.
          </GuideP>
          <GuideP>
            The technology is Solana's Token-2022 standard and its confidential transfer
            extension. Amounts are encrypted, and zero-knowledge proofs let the network confirm
            that a statement about the transfer is true, that the sender had the balance and that
            nothing was created from nothing, without revealing the number behind it. The banks on
            either end hold the keys to decrypt what they need, which is what makes the design
            sellable to compliance departments: privacy from the public, visibility for the
            institutions with legal obligations. It sits in the same family as the privacy tools
            in our guide to{" "}
            <Link href="/learn/what-are-privacy-swaps" className="font-bold text-indigo-700 underline">
              privacy swaps
            </Link>
            , aimed at institutions instead of individuals.
          </GuideP>
          <GuideP>Watch the demonstration as Solana posted it from the Breakpoint stage:</GuideP>
          <figure className="mt-4">
            <div className="mx-auto w-full max-w-[550px]">
              <iframe
                src="https://platform.twitter.com/embed/Tweet.html?id=2122284580405236216"
                title="Video of Zelle's confidential ZelleUSD transfer demonstration at Solana Breakpoint, posted by Solana on X"
                loading="lazy"
                className="h-[620px] w-full rounded-2xl border border-slate-200 bg-white"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              Zelle's first confidential ZLUSD transfer, demonstrated live at Breakpoint on 16
              November 2026 (video: @solana on X). The interface shown is a test environment.
            </figcaption>
          </figure>

          <GuideH2>The catch on Zelle: devnet is not a launch</GuideH2>
          <GuideP>
            Almost everything exciting about the demo comes with the same footnote. It ran on
            devnet, Solana's development network, where tokens are created freely and carry no
            real value, so the $1.25 million figure describes the size of the test, not money at
            risk. ZLUSD itself exists on the main network only in pre-launch form: on-chain
            trackers showed roughly 138,000 tokens at the start of November, and no public
            reserve attestation had been released at that point. Neither presenter gave a date
            for a production launch, and the announcement included no consumer access, no fee
            schedule and no list of supported markets beyond the India corridor Zelle had already
            named. Whether ZLUSD settles that corridor from its first day is also unconfirmed.
          </GuideP>
          <GuideP>
            None of that makes the announcement hollow. Banks do not demo on a competitor's stage
            by accident, and the mechanics shown are the hard part of confidential institutional
            payments. It does mean the honest headline is "Zelle has chosen its chain and shown
            its privacy model working in test conditions," not "Zelle now moves money on Solana."
            The gap between those two sentences is where most crypto news coverage quietly lives,
            and it is worth refusing to skip.
          </GuideP>

          <GuideH2>Announcement two: MoneyGram turns Solana wallets into cash</GuideH2>
          <GuideP>
            The second announcement needs no test network disclaimer, because it is already
            switched on. Solflare, one of the largest Solana wallets, has integrated MoneyGram
            Ramps, the service that connects crypto balances to MoneyGram's physical agent
            network. Solflare users can now convert USDC into local currency and collect it as
            cash at participating MoneyGram locations in more than 170 countries and territories.
            Solflare reports more than 4 million active users holding over $15 billion in
            self-custodied assets; MoneyGram operates more than 480,000 agent locations worldwide
            and reports that Ramps volume grew 113% year over year. MoneyGram describes the
            service as available now to eligible users in supported markets, not as a rollout to
            come.
          </GuideP>
          <GuideP>The cash-out flow, as described by MoneyGram and Solflare:</GuideP>
          <BulletList
            items={[
              <span key="1"><strong>Start in the wallet:</strong> open Withdraw in Solflare, choose MoneyGram, and enter the amount of USDC to redeem. Your funds stay in your own wallet until you send them.</span>,
              <span key="2"><strong>Verify and get a reference:</strong> MoneyGram checks your identity, quotes the transaction and issues a reference number for the pickup.</span>,
              <span key="3"><strong>Send the USDC:</strong> the stablecoins move from your wallet to settle the cash-out.</span>,
              <span key="4"><strong>Collect local currency:</strong> take the reference number to a participating MoneyGram agent and walk out with cash.</span>,
            ]}
          />
          <figure className="mt-4">
            <div className="mx-auto w-full max-w-[550px]">
              <iframe
                src="https://platform.twitter.com/embed/Tweet.html?id=2122281304792125482"
                title="Solana's announcement that MoneyGram and Solflare connect Solana wallets to cash in 170 eligible countries, posted by Solana on X"
                loading="lazy"
                className="h-[620px] w-full rounded-2xl border border-slate-200 bg-white"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              Solana's announcement of the MoneyGram and Solflare integration, 16 November 2026
              (@solana on X).
            </figcaption>
          </figure>

          <GuideH2>The fine print on the cash-out</GuideH2>
          <GuideP>
            Three qualifications keep this honest. First, the price: eligible users pay zero
            cash-out fees until 31 December 2026, which is a launch promotion, and after it ends,
            standard fees and exchange spreads apply. A zero fee is not the same as a free
            conversion, because the announcement publishes no representative exchange rate, and
            the spread on cash conversions is usually where the real cost sits. Second, the
            access: this is a regulated money service, so collection requires identity
            verification, it works only at participating locations, availability varies by
            market, and MoneyGram's crypto services are unavailable in Alaska, Hawaii and
            Louisiana. Third, the direction: cash-in through Ramps covers only about 25
            countries, against 170 plus for cash-out, so this is mainly an off-ramp for people
            receiving and spending digital dollars, not a way to fund a wallet with banknotes.
          </GuideP>
          <GuideP>
            Solflare is also not MoneyGram's first crypto integration, which is precisely why it
            matters. Ramps began in 2022 with the Stellar Development Foundation and Circle,
            arrived on Solana in August 2026 with the Rift wallet as its first integration, and
            Kraken agreed a similar crypto to cash arrangement in May 2026 covering more than 100
            countries. MoneyGram is building Ramps as an embedded service that wallets plug into;
            adding a wallet with millions of self-custody users is the distribution play working
            as intended.
          </GuideP>

          <GuideH2>Why the two announcements belong together</GuideH2>
          <GuideP>
            Read side by side, the two announcements are the same thesis from opposite ends.
            Zelle's problem is institutional: banks will not move serious money on a ledger where
            every competitor can read the amounts, so the amounts have to become confidential
            while staying verifiable. MoneyGram's problem is human: a digital dollar is only
            useful in much of the world if it can become banknotes at a counter, quickly and
            without a bank account. Privacy for the institutions, physical access for the people,
            and a public blockchain underneath both. That is the architecture described in our{" "}
            <Link href="/crypto-cards/guides/how-stablecoin-card-programs-work" className="font-bold text-indigo-700 underline">
              guide to how stablecoin card programs work
            </Link>
            , running at national payments scale: an issuer mints, networks settle, and the
            customer sees an ordinary payment. One half of it is still a test network demo. The
            other half you can use today.
          </GuideP>

          <GuideH2>Frequently asked questions</GuideH2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-slate-950">{item.question}</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <GuideH2>Sources</GuideH2>
          <GuideP>
            The Zelle sections are based on Zelle's Breakpoint announcement of 16 November 2026
            as reported by{" "}
            <a href="https://cointelegraph.com/news/zelle-solana-zelleusd-stablecoin-international-payments" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              Cointelegraph
            </a>
            ,{" "}
            <a href="https://cryptobriefing.com/zelle-solana-zelleusd-stablecoin-international-payments/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              CryptoBriefing
            </a>{" "}
            and{" "}
            <a href="https://www.crypto-news-flash.com/zelle-picks-solana-for-its-bank-backed-stablecoin/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              Crypto News Flash
            </a>
            , including their reporting that the demonstration ran on Solana's devnet. The
            MoneyGram sections are based on the Solflare integration announced the same day, as
            reported by{" "}
            <a href="https://www.theblock.co/news/defi/2026-11-16-solflare-ceo-ai-security-reviews-bunker-mode-moneygram-441396" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              The Block
            </a>
            ,{" "}
            <a href="https://cryptobriefing.com/solflare-ai-security-moneygram-integration/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              CryptoBriefing
            </a>{" "}
            and{" "}
            <a href="https://cryptonews.net/news/market/33758304/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              CryptoNews
            </a>
            . We will update this page when Zelle announces consumer access or a production date,
            and when MoneyGram publishes post-promotion fees. Nothing here is financial advice.
          </GuideP>
        </article>
      </main>
      <Footer />
    </>
  );
}
