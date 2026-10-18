import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/cashback-ad-vs-reality`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: "Crypto Card Cashback: Advertised vs Reality at $1,000/Month",
  description:
    "Crypto card cashback advertised vs reality (October 2026): we computed what 8 crypto cards actually pay on $1,000/month of spending, after monthly caps, tier requirements, and fees. Plasma One Lite, ether.fi Core, KAST, Tria, and more.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Cashback: Advertised vs Reality | CryptosBeginner",
    description: "What $1,000 a month really earns on 8 crypto cards, after caps, tiers, and fees.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Card Cashback: Advertised vs Reality",
    description: "Real earnings at $1,000/month spend across 8 crypto cards, computed from published bands and caps.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Why does the advertised cashback rate differ from what I actually earn?",
    answer:
      "The advertised rate is the ceiling, available only to the top tier and only within a monthly spend band. Below it sit tier requirements (token locks or paid memberships), monthly caps that cut the rate after a threshold, annual fees that eat into earnings, and reward assets that can lose value. The realistic number for a normal user usually lands between 0% and 2% of spend.",
  },
  {
    question: "Which card pays the most on $1,000 a month of spending?",
    answer:
      "Using our directory's published bands and caps: ether.fi Core and Solid Core both pay about $30 on $1,000 of monthly spend (3% with no binding cap at that level). Tria Max pays $60 at 6%, but costs $250 a year. Plasma One Lite pays about $10.50 and KAST Standard pays $15, both on free tiers. Run your own spend level through our effective cashback calculator before deciding.",
  },
  {
    question: "Are these cashback figures guaranteed?",
    answer:
      "No. All figures here are computed from the rates, bands, and caps published in our card directory as of October 2026, and providers can change them. Rewards are usually paid in a token or points asset whose value moves, and excluded merchant categories, refunds, and ATM withdrawals typically earn nothing. Treat these as planning numbers, not promises.",
  },
  {
    question: "Does it matter which asset cashback is paid in?",
    answer:
      "Yes. Plasma One pays in XPL, Crypto.com pays in CRO, and Solid pays in USDC. A 2% reward in a volatile token is not the same as 2% in a dollar-pegged asset: the token can fall (or rise) between earning and spending. If you want predictable rewards, prefer cards that pay in stablecoins or fiat-equivalent balances.",
  },
  {
    question: "How do annual and monthly fees change the cashback math?",
    answer:
      "Subtract them first. RedotPay Pro advertises 3%, but at $12.90 a month with a reported $18 monthly reward cap, a $1,000 spender nets about $5.10 a month. Tria Lite's $15 a month at 1.5% costs $20 a year, so the first-year net is $160, not $180. Always compute rewards minus membership cost.",
  },
  {
    question: "Where can I compare cashback across more cards?",
    answer:
      "Our effective cashback page runs every card in the directory through one honest formula: rewards after published monthly caps, minus a share of any annual fee, at three real spending levels. Use it alongside this guide.",
  },
];

export default function CashbackAdVsRealityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Card Cashback: Advertised vs Reality at $1,000/Month",
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
              Card guide
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Crypto Card Cashback: What $1,000 a Month Really Earns You
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Every crypto card advertises its ceiling rate. We ran eight cards through their published tiers, monthly caps, and fees to find what a normal user actually pockets on $1,000 of monthly spending.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            The advertised rate is the ceiling, not the promise. After monthly caps, tier requirements, and membership fees, most cards pay a normal spender between $5 and $30 on $1,000 a month. ether.fi Core and Solid Core lead the free options at about $30; Plasma One Lite pays about $10.50 and KAST Standard pays $15. Always do the math on your own spend before picking a card.
          </Callout>

          <GuideH2>The advertised rate is the ceiling, not the promise</GuideH2>
          <GuideP>
            Crypto card marketing leads with the biggest number: up to 6%, up to 10%, up to 4.5%. That number is real, but it comes with conditions that most shoppers never read. Five traps sit between the headline and your wallet:
          </GuideP>
          <BulletList
            items={[
              "Monthly caps: the top rate applies only to the first slice of monthly spend, then drops to a fraction of a percent.",
              "Tier requirements: the best rates hide behind token locks (sometimes six figures) or paid memberships.",
              "Membership fees: a monthly or annual fee is subtracted from whatever you earn.",
              "Reward assets: cashback paid in a volatile token is worth less (or more) by the time you spend it.",
              "Excluded categories: ATM withdrawals, refunds, and some merchant categories usually earn nothing.",
            ]}
          />
          <GuideP>
            The table below applies one consistent test to eight cards in our directory: $1,000 of ordinary monthly spending, computed from the published cashback bands and caps we track for each card. No invented numbers, and every catch is labeled.
          </GuideP>

          <GuideH2>The numbers: eight cards at $1,000 a month</GuideH2>
          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Card</th>
                  <th className="px-5 py-4 font-black">Advertised rate</th>
                  <th className="px-5 py-4 font-black">What unlocks the top rate</th>
                  <th className="px-5 py-4 font-black">Realistic $1k/mo earnings</th>
                  <th className="px-5 py-4 font-black">The catch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">Plasma One</td>
                  <td className="px-5 py-4">Up to 4%</td>
                  <td className="px-5 py-4">100K XPL lock, Platinum (promotional, rising to 150K)</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$10.50 on free Lite</td>
                  <td className="px-5 py-4">2% only on the first $500/mo, then 0.1%; paid in XPL</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">ether.fi Cash</td>
                  <td className="px-5 py-4">3% (4% on VIP)</td>
                  <td className="px-5 py-4">VIP tier</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$30 on Core</td>
                  <td className="px-5 py-4">3% capped at the first $2,000/mo; no annual fee on Core</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">KAST</td>
                  <td className="px-5 py-4">Up to 3%</td>
                  <td className="px-5 py-4">Private membership, $10,000/year</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$15 on free Standard</td>
                  <td className="px-5 py-4">1.5% capped at the first $2,000/mo</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Tria</td>
                  <td className="px-5 py-4">Up to 6%</td>
                  <td className="px-5 py-4">Max tier, $250/year</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$15 Lite ($20/yr), $45 Pro ($109/yr), $60 Max</td>
                  <td className="px-5 py-4">Top rates only on the first $1,000/mo (Lite/Pro) or $2,000 (Max)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay</td>
                  <td className="px-5 py-4">3%</td>
                  <td className="px-5 py-4">Pro membership, $12.90/month</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">About $5.10 net</td>
                  <td className="px-5 py-4">Apple/Google Pay only; a reported $18/mo reward cap; the fee eats most of it</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Crypto.com</td>
                  <td className="px-5 py-4">Up to 4.5%</td>
                  <td className="px-5 py-4">CRO lockup, Icy White tier</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$15 on Ruby (1.5%)</td>
                  <td className="px-5 py-4">Requires a CRO lockup; paid in CRO; terms vary by region</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Solid</td>
                  <td className="px-5 py-4">Up to 5%</td>
                  <td className="px-5 py-4">400K FUSE lock, Ultra tier</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$30 on Core (3%)</td>
                  <td className="px-5 py-4">Rewards capped at $50/mo on Core; paid in USDC</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Bybit Card</td>
                  <td className="px-5 py-4">Up to 10%</td>
                  <td className="px-5 py-4">Selected users only, on up to $300 of spend</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$20 by the published band (2%)</td>
                  <td className="px-5 py-4">Independent research found a $5/mo real-world cap for standard users; verify current terms in-app</td>
                </tr>
              </tbody>
            </table>
          </div>
          <GuideP>
            Method: each figure multiplies the card's published base-tier rate by $1,000, applies the published monthly cap or band, and subtracts any membership fee. RedotPay's $18 reward cap is reported by third-party reviewers, not published by the provider, so it is labeled as reported. Bybit's published band shows 2% with no cap in our data, but independent research found standard users hit a $5 monthly ceiling on crypto-funded purchases; the table shows both.
          </GuideP>

          <GuideH2>Where our math was independently confirmed</GuideH2>
          <GuideP>
            An independent researcher recently ran the same $1,000-a-month exercise from the official terms and published the results. Three of our computed figures match theirs exactly:
          </GuideP>
          <BulletList
            items={[
              "Plasma One Lite: 2% on the first $500 ($10) plus 0.1% on the rest ($0.50) = $10.50. Their figure: about $10.50.",
              "ether.fi Core: 3% on the first $2,000 = $30. Their figure: $30.",
              "KAST Standard: 1.5% on the first $2,000 = $15. Their figure: $15.",
            ]}
          />
          <GuideP>
            When two separate readings of the official terms land on the same number, you can trust the math. The takeaway from both exercises is the same: the advertised rate is the ceiling, and for most people the real number lands between 0% and 2% of spend.
          </GuideP>

          <GuideH2>The five catches, explained</GuideH2>
          <GuideH3>1. Monthly caps cut the headline rate down to size</GuideH3>
          <GuideP>
            Plasma One Lite's 2% sounds generous until you see it stops at $500 of monthly spend. After that you earn 0.1%, which is twenty times less. Tria's 6% Max rate stops at $2,000. Always ask: the top rate applies to how much of my spending, and what do I earn after that?
          </GuideP>
          <GuideH3>2. The top tier has a price tag</GuideH3>
          <GuideP>
            KAST's 3% requires a $10,000-a-year Private membership. Plasma One's 4% requires locking 100,000 XPL (rising to 150,000 after the promotion), and those locks cannot be released early. Crypto.com's top tiers require locking CRO. If you would not pay the price on its own, do not count the rate.
          </GuideP>
          <GuideH3>3. Fees come out of rewards first</GuideH3>
          <GuideP>
            RedotPay Pro is the clearest example: 3% on $1,000 of mobile-pay spending is $30, but a reported $18 monthly cap and a $12.90 monthly fee leave about $5.10. Tria Lite's $20 annual fee turns $180 a year of rewards into $160. Compute net, not gross.
          </GuideP>
          <GuideH3>4. The reward asset matters as much as the rate</GuideH3>
          <GuideP>
            Plasma One pays in XPL and Crypto.com pays in CRO. If the token drops 20% after you earn it, your 2% was really 1.6%. Solid pays in USDC and ether.fi tracks rewards in dollar terms, which removes that guesswork. Prefer stable reward assets unless you actively want exposure to the token.
          </GuideP>
          <GuideH3>5. Not all spending counts</GuideH3>
          <GuideP>
            RedotPay's 3% applies only to Apple Pay and Google Pay purchases. ATM withdrawals, refunded purchases, and some merchant categories typically earn nothing on most cards. Your realistic number depends on how you actually pay, not just how much.
          </GuideP>

          <GuideH2>Do the math on your own spending</GuideH2>
          <GuideP>
            $1,000 a month is a useful benchmark, but your number is what matters. Our effective cashback page runs every card in the directory through the same honest formula used here: rewards after published monthly caps, minus a share of any annual fee, at three real spending levels ($500, $1,000, and $2,000 a month). Start there, then read the full review of any card that makes your shortlist.
          </GuideP>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Compare effective cashback
            </Link>
            <Link
              href="/crypto-cards/guides/plasma-one-vs-tria"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read Plasma One vs Tria
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
