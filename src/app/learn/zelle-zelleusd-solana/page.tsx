import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/zelle-zelleusd-solana`;
const UPDATED = "17 November 2026";
const UPDATED_ISO = "2026-11-17";
const IMG = "/images/learn/zelle-zlusd/demo-steps.png";

export const metadata: Metadata = {
  title: "Zelle Picks Solana for ZelleUSD: What the $1.25M Confidential Transfer Demo Actually Proves",
  description:
    "At Breakpoint on 16 November 2026, Zelle announced its ZelleUSD stablecoin will run on Solana and demoed a $1.25 million confidential bank to bank transfer with the amount hidden. The demo ran on a test network. What was announced, how confidential transfers work, and what is still missing before anyone can use it.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Zelle Picks Solana for ZelleUSD | CryptosBeginner",
    description:
      "The bank owned network behind $1.2 trillion in US payments chose a public blockchain for its stablecoin, and hid the amount in its first demo transfer. The devnet caveat, explained.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMG}`, alt: "Four step diagram of Zelle's confidential ZelleUSD transfer demo at Breakpoint: Anchorage Digital Bank issues 1.25 million dollars in ZLUSD, a bank converts it to confidential form on Solana, sends it to a second bank with the amount hidden, and the receiving bank decrypts it, with a note that the demo ran on a test network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelle Picks Solana for ZelleUSD",
    description:
      "A $1.25M transfer with the amount hidden, demoed live at Breakpoint. It ran on devnet. Here is what Zelle actually announced and what it did not.",
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
    question: "Why would banks want payment amounts hidden on a public blockchain?",
    answer:
      "Because public ledgers are public. A bank moving money for customers cannot broadcast amounts to competitors and observers, and regulators still need visibility. Confidential transfers split the difference: amounts are hidden from the public, the network verifies validity, and the participating institutions can decrypt what they need for compliance checks such as anti-money laundering controls.",
  },
];

export default function ZelleZelleusdSolanaPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zelle Picks Solana for ZelleUSD: What the $1.25M Confidential Transfer Demo Actually Proves",
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
      { "@type": "ListItem", position: 3, name: "Zelle Picks Solana for ZelleUSD", item: PAGE_URL },
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
              Zelle picks Solana for ZelleUSD, and hides the amount in its first transfer
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              On 16 November 2026, on stage at Solana's Breakpoint conference in London, Zelle
              announced that its dollar stablecoin, ZelleUSD (ZLUSD), will run on Solana for
              international payments, and demonstrated a $1.25 million transfer between banks with
              the amount encrypted and invisible to observers. Zelle is the network owned by seven
              of the largest US banks, which moved more than $1.2 trillion between American
              accounts in 2025. The detail most coverage buries: the demonstration ran on
              Solana's devnet, a test network where tokens have no value. No customer money moved,
              and no launch date was announced.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            Zelle, operated by Early Warning Services for Bank of America, Capital One, JPMorgan
            Chase, PNC, Truist, US Bank and Wells Fargo, has chosen Solana as the chain for
            ZelleUSD, the stablecoin behind its international expansion. Anchorage Digital Bank
            issues the token. The Breakpoint demo showed a bank converting $1.25 million of ZLUSD
            into confidential form, sending it to a second bank, and the receiver decrypting the
            amount, with the network verifying the transfer throughout without seeing the figure.
            It ran on a test network, the token is pre-launch, and consumer access, fees and a
            production timeline are all still unannounced.
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

          <GuideH2>What was announced at Breakpoint</GuideH2>
          <GuideP>
            The announcement itself is the news, separate from the demo. Zelle has spent 2026
            building an international business on top of a network that historically only moved
            money inside the United States. In June 2026 it named India as its first remittance
            corridor, with US to India transfers planned before the end of 2026, and unveiled
            ZelleUSD as the asset intended to underpin international payments in more markets over
            time. Breakpoint added the missing piece: the chain. Alexandra Lang, Zelle's vice
            president of digital asset partnerships and strategy, presented Solana as a deliberate
            choice for payments at scale, and the Solana Foundation used the same stage to
            announce the network's move out of beta, with finality improving to about 150
            milliseconds.
          </GuideP>
          <GuideP>
            For the bank consortium behind Zelle, this is the first time its cross-border plans
            have been tied publicly to a specific public blockchain. That is a different category
            of decision from a crypto company launching a token: the owners include the banks that
            run much of the US payments system, and their network reaches more than 2,400 banks
            and credit unions.
          </GuideP>

          <GuideH2>How the demo worked</GuideH2>
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

          <GuideH2>The catch: devnet is not a launch</GuideH2>
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

          <GuideH2>Why it matters for stablecoins</GuideH2>
          <GuideP>
            Stablecoins have spent two years moving from crypto product to payments
            infrastructure, and this is the pattern repeating at a larger scale: an existing
            payments giant adopts a public chain for settlement, picks a regulated issuer, and
            treats amount privacy as a requirement rather than a feature. It is the same
            architecture, at bank scale, that sits underneath the stablecoin card programs in our{" "}
            <Link href="/crypto-cards/guides/how-stablecoin-card-programs-work" className="font-bold text-indigo-700 underline">
              guide to how stablecoin card programs work
            </Link>
            : an issuer mints, institutions settle, and the customer eventually sees an ordinary
            payment. If Zelle ships the India corridor on this stack, the first mass-market test
            of confidential transfers will not be a crypto app. It will be the app Americans
            already use to split rent.
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
            This article is based on Zelle's Breakpoint announcement of 16 November 2026 as
            reported by{" "}
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
            , including their reporting that the demonstration ran on Solana's devnet. We will
            update this page when Zelle announces consumer access, fees or a production date.
            Nothing here is financial advice.
          </GuideP>
        </article>
      </main>
      <Footer />
    </>
  );
}
