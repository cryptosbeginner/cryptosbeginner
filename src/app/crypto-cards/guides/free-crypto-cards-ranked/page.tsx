import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/free-crypto-cards-ranked`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "11 November 2026";
const UPDATED_ISO = "2026-11-11";

export const metadata: Metadata = {
  title: "Free Crypto Cards, Ranked: No Issuance Fee, No Annual Fee (November 2026)",
  description:
    "The crypto cards in our directory that are genuinely free to get and free to hold: no issuance fee and no monthly or annual fee on the base plan, per each listing's published pricing. Ranked by cashback, spending fees, and caveats, with the nearly free cards flagged honestly.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Free Crypto Cards, Ranked | CryptosBeginner",
    description: "Ten cards that cost nothing to get and nothing to hold, ranked on what they pay and what they still charge when you spend.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Free Crypto Cards, Ranked",
    description: "No issuance fee, no annual fee, ranked by real value. Plus the 'free' cards that are not quite.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What counts as a free crypto card here?",
    answer:
      "Two tests, both from the pricing published in the card's directory listing: the virtual card costs nothing to issue, and the base plan charges no monthly or annual fee. Cards that fail either test are excluded or moved to the nearly free section, even if the marketing calls them free. Spending charges like FX markups and conversion fees do not disqualify a card, but they are listed for every entry because free to hold is not the same as free to use.",
  },
  {
    question: "Why is ether.fi not in the main ranking if its annual fee is $0?",
    answer:
      "Because getting the card is not free: our listing records a $10 virtual card fee on Core, Luxe, and Pinnacle (free only on VIP). The separate $10 activation deposit is spendable and is not a fee, and we do not count it against the card. One real $10 charge is enough to move it to nearly free, where it still ranks as excellent value.",
  },
  {
    question: "Why is RedotPay not listed as free?",
    answer:
      "RedotPay charges no maintenance fee, but its official fee schedule lists a $10 virtual card issuance fee and $100 for the physical card. Free to hold, not free to get, so it sits in the nearly free section with the reason stated.",
  },
  {
    question: "Are free cards worse than paid ones?",
    answer:
      "Not automatically. Solid pays 3% cashback on its free Core tier and Bybit pays 2% at base, which beat several paid memberships once you subtract their fees. Paid tiers mainly buy higher caps, lower FX markups, and physical or metal cards. If your spending is modest, the free tier is often the rational end of the product.",
  },
  {
    question: "Can a free card stop being free?",
    answer:
      "Yes. MEXC's listing shows its issuance fee crossed out from $20 to $0, which is a promotion, not a personality trait. Providers change pricing with little notice, which is why every listing in our directory carries a reviewed date and why you should confirm the fee screen in the app before you finish signing up.",
  },
];

const ranked = [
  {
    rank: 1,
    name: "Solid Card",
    href: "/crypto-cards/solid-card",
    facts: "Issuance free, no monthly or annual fee, top-ups free at all tiers, per our listing.",
    why: "The strongest free package in the directory: 3% cashback in USDC on the free Core tier, capped at $50 a month, from a self-custodial app. Non-USD spending carries a 1.5% total FX charge, and the card is issued by Rain or Wirex depending on your country.",
  },
  {
    rank: 2,
    name: "Bybit Card",
    href: "/crypto-cards/bybit-card",
    facts: "Free card issuance and no annual fees per the product page in our listing.",
    why: "A 2% base cashback band on everyday spending with no fee to clear first, plus $100 of free ATM withdrawals a month before a 2% fee applies. The catch is geography: Bybit states the card is not for EEA customers, and the advertised 10% rate is a selected users offer on up to $300, not the standard deal.",
  },
  {
    rank: 3,
    name: "Binance Card",
    href: "/crypto-cards/binance-card",
    facts: "Free to activate, with no monthly or annual fees disclosed on the reviewed page.",
    why: "Up to 3% cashback capped at $50 a month in South Africa, New Zealand, and Australia, and up to 2% capped at 120 BRL in Brazil, spending straight from a Binance balance. The honest flags: availability is rolling out market by market with no single country list, and ATM and FX fees are not disclosed on the reviewed page, so check them in the app.",
  },
  {
    rank: 4,
    name: "KAST (Standard)",
    href: "/crypto-cards/kast-card",
    facts: "Virtual card free and Standard membership free, captured from the live app in October 2026.",
    why: "1.5% cashback on the first $2,000 of monthly spend on a free tier is genuinely competitive. Know the trade-offs before you start: the physical card costs $40, and funding rules are strict, with USDT on Solana required for the main deposit path. Wrong network deposits can be lost.",
  },
  {
    rank: 5,
    name: "Plasma One (Lite)",
    href: "/crypto-cards/plasma-one-card",
    facts: "Lite tier free, per our listing.",
    why: "2% cashback on the first $500 of monthly spend costs nothing to access. The limits are the point, though: after $500 the rate falls away, cashback is paid in XPL rather than dollars, and the Lite FX markup is 1%, which our FX guide shows can nearly cancel the reward on foreign spending.",
  },
  {
    rank: 6,
    name: "Gate Card",
    href: "/crypto-cards/gate-card",
    facts: "Virtual and physical issuance free and no monthly fee, per our listing.",
    why: "Rare in offering a free physical card, not just a free virtual one. Spending is not free: a 0.90% crypto conversion fee applies on transactions of $2 or more, non-USD purchases carry a 0.40% FX fee, ATM withdrawals cost 2%, and a replacement card is $25.",
  },
  {
    rank: 7,
    name: "Nexo Card",
    href: "/crypto-cards/nexo-card",
    facts: "Nexo states no monthly, annual, or inactivity card fees, per our listing.",
    why: "Up to 2% cashback in Credit Mode, where you borrow against your crypto instead of selling it, across selected European countries. That mode is the caveat: rewards depend on loyalty tier and balance requirements, and borrowing against collateral carries liquidation risk that a free debit card never asks you to think about.",
  },
  {
    rank: 8,
    name: "MetaMask Card",
    href: "/crypto-cards/metamask-card",
    facts: "Virtual card listed as free on the product page; the Metal price is not published publicly.",
    why: "1% back in mUSD on the Virtual card and self-custody until the moment of payment, inside the wallet many users already have. Availability is country dependent, and the reviewed page noted US and UK signups temporarily closed, so confirm you can actually get it before planning around it.",
  },
  {
    rank: 10,
    name: "Belo Card",
    href: "/crypto-cards/belo-card",
    facts: "No issuance or maintenance fee per the official help center, per our listing.",
    why: "A clean free offer aimed at Latin American users who want to spend crypto without account fees. Shipping, replacement, withdrawal, and some international transaction fees may still apply, so the free part is the account, not every action you take with it.",
  },
  {
    rank: 9,
    name: "Utorg Card",
    href: "/crypto-cards/utorg-card",
    facts: "No issuance, monthly, annual, or replacement fees in the published terms, with zero payment and FX fees flagged as a limited-time promotion on the card page, per our listing.",
    why: "The cheapest way to spend USDC in the EEA right now: a non-custodial virtual Visa with monthly limits up to €30,000 and no cashback to complicate the math. The trade-offs are real: virtual only, EEA residents only with Ukraine also on the issuer grid, USDC top-ups only, and top-ups credit at 1 USDC = $0.9995, so a small conversion cost hides in the rate.",
  },
];

export default function FreeCryptoCardsRankedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Free Crypto Cards, Ranked",
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
              Free Crypto Cards, Ranked
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Plenty of cards call themselves free. These ten pass both tests in their published pricing: nothing to issue the card, and no monthly or annual fee to keep it. Ranked by what they pay you and what they still charge when you spend.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The method, plainly">
            Rankings are built only from our own directory data, checked November 2026. A card qualifies when its listing's published pricing shows no issuance fee for the virtual card and no monthly or annual fee on the base plan. Cards whose pricing is not published are excluded rather than assumed free, and cards with one small catch are flagged in a separate nearly free section below. Order weighs base tier cashback first, then spending fees, then how much fine print stands between you and the offer.
          </Callout>

          <GuideH2>The ranking</GuideH2>
          {ranked.map((card) => (
            <div key={card.rank}>
              <GuideH3>
                {card.rank}. {card.name}
              </GuideH3>
              <GuideP>
                <strong>Free check:</strong> {card.facts}
              </GuideP>
              <GuideP>{card.why}</GuideP>
              <GuideP>
                <Link href={card.href} className="font-bold text-indigo-700 underline">
                  See the {card.name} listing
                </Link>
              </GuideP>
            </div>
          ))}

          <GuideH2>Nearly free, and honest about why not</GuideH2>
          <GuideP>
            These cards are good products that fail one of the two tests. They belong in your thinking, just not under a free headline:
          </GuideP>
          <BulletList
            items={[
              "ether.fi Cash (Core): $0 annual fee, but the virtual card costs $10 on Core, Luxe, and Pinnacle. The $10 activation deposit is spendable and is not a fee. Ten dollars once for 3% cashback and the joint best FX markup in our data is still a bargain, it is simply not $0.",
              "Kolo: the card itself is free, but a $10 deposit is required to issue it. The deposit comes back as spendable balance, and a 1% fee applies on every card payment.",
              "MEXC Card: the official page shows the issuance figure crossed out from $20 to $0, with a 0% service fee on the shown route. That is a promotional price display, not a fee schedule, and other fees need regional confirmation.",
              "KuCard: the first virtual card is free and there is no membership, but conversion fees are not itemized on the reviewed page, so the full cost of using it is not published.",
              "RedotPay: no maintenance fee, but $10 to issue a virtual card and $100 for the physical one per its official fee schedule. Free to hold is only half the promise.",
              "CEX.IO Card: free to issue and free to hold, and it held a top ten place here until November 2026. A 1% conversion fee on non-EUR purchases and a €10,000 monthly limit moved it out as zero-fee EEA rivals arrived.",
            ]}
          />

          <GuideH2>Free to hold is not free to use</GuideH2>
          <GuideP>
            Every card on this page can still charge you when money moves: FX markups on foreign purchases, crypto conversion fees, ATM charges, replacement fees. Plasma One Lite is the standing example, free in every way except that its 1% FX markup nearly cancels its cashback abroad. Before you commit to any card here, run its numbers through the foreign spending test in our guide to the cashback that actually reaches you, and compare base rates across the whole directory on our effective cashback page.
          </GuideP>

          <Callout title="Disclosure" tone="cyan">
            Some listing and review pages linked from this guide contain disclosed referral links. The ranking above is computed from published pricing and rates in our directory and is not affected by them.
          </Callout>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/guides/real-cashback-after-fx"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              The cashback that actually reaches you
            </Link>
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Compare effective cashback
            </Link>
            <Link
              href="/crypto-cards/etherfi-review"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the ether.fi review
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
