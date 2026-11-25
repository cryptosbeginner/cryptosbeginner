import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/crypto-cards-2023-vs-2026`;
const UPDATED = "26 November 2026";
const UPDATED_ISO = "2026-11-26";

export const metadata: Metadata = {
  title: "Crypto Cards in 2023 vs 2026: From 6 Exchange Cards to 232 Programmes",
  description:
    "In 2023 a crypto card meant one of six exchange cards. In 2026 this directory tracks 232 programmes. What changed: issuer platforms that rent the licence, self-custody cards, stablecoin funding, and a graveyard of cards that did not survive the boom.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Cards in 2023 vs 2026 | CryptosBeginner",
    description:
      "Six logos in 2023, a wall of them in 2026. We checked the viral comparison graphic against our own verified directory of 232 card programmes.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Cards in 2023 vs 2026",
    description:
      "In 2023 there were six crypto cards worth naming. In 2026 we track 232 programmes. Here is what actually changed, and what the logo wall leaves out.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "How many crypto cards are there in 2026?",
    answer:
      "There is no official global registry, so every count depends on what you count. A widely shared November 2026 comparison graphic shows 56 brands. This directory, which lists a programme only when its terms can be checked against official sources, tracks 232 programmes as of 26 November 2026, and the true number including white-label and regional variants is higher. New programmes launch every month, and others close: our graveyard of discontinued cards holds 20 entries.",
  },
  {
    question: "Are the 2023 crypto cards still available?",
    answer:
      "Yes. All six cards from the 2023 column, Crypto.com, Binance, Coinbase, Wirex, Nexo and Bybit, still operate card programmes in 2026, and all six are listed in this directory. Several changed shape along the way: the Binance Card has been discontinued in one form and relaunched in others, and Wirex's current offer centres on its self-custody Wirex One product. Surviving since 2023 is itself a credential in this market.",
  },
  {
    question: "Why do so many wallets and apps launch cards now?",
    answer:
      "Because they no longer need a bank licence of their own. Issuer platforms such as Rain, Third National, Baanx, Wallester, Immersve and Monavate rent out the regulated plumbing: the licence, the card network membership and the compliance stack. A wallet or trading app adds its brand, its balance and its users, and a card programme that once took years to build can launch in months. That is the single biggest reason the 2026 column is nine times longer than the 2023 one.",
  },
  {
    question: "What is the catch with the newest crypto cards?",
    answer:
      "Churn and thin disclosure. Programmes close as fast as they launch: the WhiteBIT Nova EUR card was suspended in June 2026 pending a migration that has not landed yet, and this directory's graveyard lists 20 discontinued cards. At the other extreme, some announced cards publish no terms at all. Backpack's card, for example, is still described by Backpack itself only as a coming-soon staking perk, with no fees, network or issuer published, so we do not list it. If a programme will not publish its terms, that is the review.",
  },
  {
    question: "How much do people actually spend on crypto cards?",
    answer:
      "A lot, and it is concentrated. The programmes we track processed about $1.37 billion of spending in October 2026 alone, based on the on-chain settlement data compiled on our crypto card spending page. A small number of large programmes account for most of that volume, which is the part of the 2026 picture a wall of logos cannot show: most of the 56 brands on the graphic are small, and a handful of cards do most of the spending.",
  },
];

export default function CryptoCards2023Vs2026Page() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Crypto Cards in 2023 vs 2026: From 6 Exchange Cards to 232 Programmes",
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
      { "@type": "ListItem", position: 3, name: "Crypto Cards in 2023 vs 2026", item: PAGE_URL },
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
              ← Back to Learn
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Market analysis
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Crypto cards in 2023 vs 2026: from 6 exchange cards to a card for every wallet
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              A comparison graphic by @Octop3s has been doing the rounds: six crypto card
              logos for 2023, fifty-six for 2026. It is a striking image, and it undersells
              the change. This directory, which lists a card programme only when its terms
              can be verified against official sources, tracks 232 programmes. Here is what
              actually happened between the two columns, checked against the listings
              themselves rather than the logos.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            In 2023 a crypto card meant an exchange card: six big exchanges, six programmes,
            all custodial. By late 2026 the card had become a feature that any wallet,
            trading terminal or lending app can ship, because issuer platforms now rent out
            the licence and compliance stack behind it. The result is more choice and more
            churn in equal measure: this directory tracks 232 live programmes and a
            graveyard of 20 that have already closed. All six of the 2023 cards are still
            operating, which in this market counts as a track record.
          </Callout>

          <GuideH2>The 2023 six: where they are now</GuideH2>
          <GuideP>
            The left column of the graphic is a fair snapshot of its era. A crypto card in
            2023 was an exchange loyalty product: you held your balance on the exchange,
            the exchange issued the card, and cashback came in the exchange's token or
            points. The striking thing about the six is not that they were few. It is that
            every one of them is still here.
          </GuideP>
          <BulletList
            items={[
              <span key="1"><strong>Crypto.com:</strong> the era's template, a tiered metal card ladder tied to staking its token. Still operating, still the programme most new cards are compared against.</span>,
              <span key="2"><strong>Binance:</strong> still operating a card, though the product has been discontinued in one form and relaunched in others since 2023, a pattern the whole market now follows.</span>,
              <span key="3"><strong>Coinbase:</strong> the US Visa debit card still runs, issued by Pathward and powered by Marqeta, alongside a separate Coinbase One credit card.</span>,
              <span key="4"><strong>Wirex:</strong> the 2023 card's company now centres on Wirex One, a self-custody product, and quietly supplies card infrastructure to newer brands, including KeyOne below.</span>,
              <span key="5"><strong>Nexo:</strong> still operating its dual-mode card, one of the few 2023 designs (spend without selling, against a credit line) that the 2026 wave copied widely.</span>,
              <span key="6"><strong>Bybit:</strong> now runs separate card programmes by region, with a points-based cashback ladder that only pays on crypto-funded spending since October 2026.</span>,
            ]}
          />

          <GuideH2>The 2026 wall, checked against the listings</GuideH2>
          <GuideP>
            We matched the graphic's 56 logos against this{" "}
            <Link href="/crypto-cards" className="font-bold text-indigo-700 underline">
              directory of crypto cards
            </Link>
            . Fifty of the 56 were already listed before the graphic arrived. Researching
            the rest added four programmes, each verified against its own official pages:{" "}
            <Link href="/crypto-cards/lava-card" className="font-bold text-indigo-700 underline">
              Lava
            </Link>
            , a secured Visa credit card from a Bitcoin lending company that pays rewards
            in bitcoin;{" "}
            <Link href="/crypto-cards/cashi-card" className="font-bold text-indigo-700 underline">
              Cashi
            </Link>
            , a Hong Kong stablecoin card in public beta;{" "}
            <Link href="/crypto-cards/keyone-card" className="font-bold text-indigo-700 underline">
              KeyOne
            </Link>
            , a self-custody wallet whose virtual Visa is issued by Wirex; and the{" "}
            <Link href="/crypto-cards/gmgn-card" className="font-bold text-indigo-700 underline">
              GMGN Card
            </Link>
            , which this directory had deliberately held since early November because GMGN
            published no terms for it. GMGN has now published a full fee schedule and
            limits, so the hold is lifted and the listing is live.
          </GuideP>
          <GuideP>
            Two of the 56 logos are not new programmes at all. Karta and Karta Personal
            are one programme under its brand and product names, not two cards. And
            Backpack's card remains unlisted here for the opposite reason GMGN was held:
            Backpack's own site still describes it only as a coming-soon benefit of
            staking its token, with no fees, network, issuer or terms published. When it
            publishes them, it gets a listing. Until then, a logo is not a card.
          </GuideP>

          <GuideH2>Why it exploded: four drivers</GuideH2>
          <BulletList
            items={[
              <span key="1"><strong>Issuer platforms rent the licence.</strong> Rain, Third National, Baanx, Wallester, Immersve and Monavate supply the regulated plumbing: the issuing licence, network membership and compliance. Programmes that look unrelated share issuers underneath; three of this directory's recent listings (XPlace, Startale and Juicyway) all run on Third National with Rain as programme manager. Building a card stopped being a banking project and became an integration.</span>,
              <span key="2"><strong>Self-custody cards arrived.</strong> The 2023 model required an exchange account. The 2026 wall is full of wallet cards: MetaMask, Phantom, Exodus, Bleap and Solayer spend from wallets users control, and KeyOne pairs a self-custody wallet with a card issued under Wirex's licences. The card became an accessory to a wallet rather than a reason to open an exchange account.</span>,
              <span key="3"><strong>Stablecoins became the default fuel.</strong> Most 2026 programmes fund in USDT or USDC and settle in dollars or euros, which made regional cards viable: Cashi in Hong Kong, Kontigo for Latin America, Tuyo, and MiniPay inside the Opera browser. The card stopped being a crypto product with a fiat problem and became a dollar product with a crypto rail.</span>,
              <span key="4"><strong>The card became a feature, not a product.</strong> GMGN is a memecoin trading terminal. Lava is a lending company. Jupiter is an aggregator. None of them is a card company, and all of them ship cards, because a card is now how an app keeps its users' balances inside the app. Expect every trading app you use to offer you one.</span>,
            ]}
          />

          <GuideH2>The other side of the wall: churn</GuideH2>
          <GuideP>
            A logo wall is a snapshot, and snapshots flatter. This directory also keeps a{" "}
            <Link href="/crypto-cards/graveyard" className="font-bold text-indigo-700 underline">
              graveyard of discontinued crypto cards
            </Link>
            , and it already holds 20 entries: programmes that launched, marketed and
            closed, some within a single year. The churn is not slowing. The{" "}
            <Link href="/crypto-cards/whitebit-nova-card" className="font-bold text-indigo-700 underline">
              WhiteBIT Nova EUR card
            </Link>{" "}
            has been suspended since 30 June 2026, pending a migration to a European
            entity that has not launched yet, and VaultLeap closes on 1 December 2026.
            Several logos on the 2026 wall will be in the graveyard by the time a 2027
            version of the graphic is drawn. That is not an argument against new cards;
            it is an argument for checking who issues one before you fund it, which is
            what our{" "}
            <Link href="/crypto-cards/guides/crypto-card-security-incidents" className="font-bold text-indigo-700 underline">
              security incidents guide
            </Link>{" "}
            exists for.
          </GuideP>

          <GuideH2>The money followed, unevenly</GuideH2>
          <GuideP>
            Usage grew with supply, but it did not spread evenly. The programmes tracked
            on our{" "}
            <Link href="/crypto-cards/spending" className="font-bold text-indigo-700 underline">
              crypto card spending page
            </Link>{" "}
            processed about $1.37 billion in October 2026, and a small number of large
            programmes account for most of that volume. Read the 2026 wall with that in
            mind: it is a map of how easy cards became to launch, not of how much each
            one is used. The median programme on that wall is small, young and one
            issuer decision away from the graveyard.
          </GuideP>

          <GuideH2>How to choose a card in 2026</GuideH2>
          <BulletList
            items={[
              <span key="1"><strong>Read the fees, not the cashback headline.</strong> The 8% and 10% figures in this market sit behind VIP tiers, monthly caps and category rules. Our guide to <Link href="/crypto-cards/guides/real-cashback-after-fx" className="font-bold text-indigo-700 underline">real cashback after FX</Link> works through what headline rates are worth after conversion fees and caps.</span>,
              <span key="2"><strong>Decide custody before brand.</strong> An exchange card, a custodial wallet card and a self-custody card fail in different ways. Pick the failure mode you can live with first; the brand second.</span>,
              <span key="3"><strong>Check who issues it.</strong> The issuer, not the logo, holds the licence and your fiat balance. Every listing in this directory names the issuer where the programme publishes it, and flags it where it does not.</span>,
              <span key="4"><strong>Check that it is still alive, and that its terms exist.</strong> The card news feed and the graveyard take minutes to scan. A programme that publishes no fees, no limits and no issuer, like the Backpack card today, has told you what it thinks of your due diligence.</span>,
            ]}
          />

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
            The comparison graphic is by @Octop3s on X (November 2026). Every programme
            named in this article was checked against the listing in this directory,
            which is itself built from the programme's own official pages, terms and fee
            schedules; the four listings added for this article (Lava, Cashi, KeyOne and
            GMGN) were researched from official sources on 25 and 26 November 2026.
            Spending figures are from the on-chain settlement data compiled on this
            site's crypto card spending page for October 2026. Directory counts (232
            programmes, 20 graveyard entries) are as of 26 November 2026 and change as
            programmes launch and close.
          </GuideP>
        </article>
      </main>
      <Footer />
    </>
  );
}
