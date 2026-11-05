import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/real-cashback-after-fx`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "5 November 2026";
const UPDATED_ISO = "2026-11-05";

export const metadata: Metadata = {
  title: "The Cashback That Actually Reaches You: Crypto Card Rewards After FX Fees",
  description:
    "Headline cashback is only half the deal. We ran $1,000 of foreign currency spending through Wirex, Tria, ether.fi, Plasma One, RedotPay, and KAST using only the rates and fees published in our directory, and subtracted FX and conversion costs to find the cashback that actually reaches you.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The Cashback That Actually Reaches You | CryptosBeginner",
    description: "Six cards, $1,000 of foreign spending, one honest subtraction: cashback minus FX and conversion fees.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "The Cashback That Actually Reaches You",
    description: "What $1,000 of foreign spending really nets on six crypto cards after FX fees eat the rewards.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Why do FX fees matter more than the cashback rate?",
    answer:
      "Because they apply to every dollar while cashback often applies to only some of it. A 1% FX markup on $1,000 of foreign spending is $10, guaranteed. A 2% cashback rate capped at the first $500 earns $10, then almost nothing. On Plasma One Lite the two nearly cancel out exactly, which is why the honest number is the net, not the headline.",
  },
  {
    question: "Are these worked examples guaranteed?",
    answer:
      "No. Every rate, cap, and fee in the examples comes from the listings in our card directory, checked November 2026, and providers can change them. Where a figure our math needed is not published in the listing, we say so instead of assuming it, as with Tria's purchase conversion fee and KAST's general FX fee outside its Latin America promotion.",
  },
  {
    question: "What if I only spend in my home currency?",
    answer:
      "Then most FX and conversion charges fall away and the ranking flips back toward raw cashback: ether.fi Core pays the full $30, Plasma One Lite pays $10.50, KAST Standard pays $15. FX only bites when the purchase currency differs from your funding currency, which for travelers and anyone paid in a different currency is much of the time.",
  },
  {
    question: "Is a card with negative net cashback abroad a bad card?",
    answer:
      "Not necessarily. RedotPay's value for many users is access: it works in places other cards do not reach, and its standard card has no cashback at all, so any foreign spend carries the conversion cost. Judge a card on the total package for your situation, but judge it with the net number in front of you, not the advertised rate.",
  },
  {
    question: "Where can I run the numbers for my own spending?",
    answer:
      "Our effective cashback page runs every card in the directory through one formula at three spending levels: rewards after published caps, minus a share of any annual fee. It does not model foreign currency spending, which is the gap this guide fills for the six cards covered here.",
  },
];

export default function RealCashbackAfterFxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Cashback That Actually Reaches You",
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
              The Cashback That Actually Reaches You
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Cashback is paid on the way in and quietly taxed on the way out. We pushed $1,000 of foreign currency spending through six well known cards, using only the rates and fees published in our directory, and subtracted every FX and conversion charge to find what is left.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            On $1,000 spent abroad on base tiers: ether.fi Core nets about +$25 (3% cashback minus a 0.5% FX markup), Wirex One nets about +$5 on purchases (0.5% cashback, zero advertised purchase FX, with a top-up caveat), KAST Standard nets +$15 inside its 0% FX promotion currencies and an unknown amount outside them, Tria Lite nets +$13.33 before an FX fee our data does not publish, Plasma One Lite nets about +$0.50 in XPL (the 1% FX markup eats the cashback almost exactly), and RedotPay nets negative: $0 cashback on the standard card against 2.2% in conversion charges. The headline rate told you none of that.
          </Callout>

          <GuideH2>The test, and its rules</GuideH2>
          <GuideP>
            One scenario, applied identically: $1,000 of spending in a single month, all of it in a foreign currency, on each card's free or base tier, with all spending eligible for cashback. Cashback is computed from the published bands and caps in our directory listings. FX and conversion charges are computed from the fee figures published in the same listings. Membership costs are subtracted where the tier charges one. Where a listing does not publish a figure the math needs, the table says so and the net is labeled partial, because an honest gap beats an invented fee. All figures checked November 2026.
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Card (base tier)</th>
                  <th className="px-5 py-4 font-black">Cashback on $1,000</th>
                  <th className="px-5 py-4 font-black">FX and conversion cost</th>
                  <th className="px-5 py-4 font-black">Membership</th>
                  <th className="px-5 py-4 font-black">Net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">ether.fi Cash (Core)</td>
                  <td className="px-5 py-4">$30.00</td>
                  <td className="px-5 py-4">$5.00 (0.5% markup)</td>
                  <td className="px-5 py-4">$0 annual fee</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">+$25.00</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">KAST (Standard)</td>
                  <td className="px-5 py-4">$15.00</td>
                  <td className="px-5 py-4">$0 in the 16 promotion currencies; general FX fee not published in our listing</td>
                  <td className="px-5 py-4">$0 on Standard</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">+$15.00 in promo currencies, unknown elsewhere</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Tria (Lite)</td>
                  <td className="px-5 py-4">$15.00</td>
                  <td className="px-5 py-4">Not published in our listing</td>
                  <td className="px-5 py-4">$20/year, so $1.67 for the month</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">+$13.33 before FX</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Wirex One (base tier)</td>
                  <td className="px-5 py-4">$5.00</td>
                  <td className="px-5 py-4">$0 advertised on purchases; top-up conversion caveat below</td>
                  <td className="px-5 py-4">No monthly or annual fee advertised</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">+$5.00 on purchases</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Plasma One (Lite)</td>
                  <td className="px-5 py-4">$10.50, paid in XPL</td>
                  <td className="px-5 py-4">$10.00 (1% markup)</td>
                  <td className="px-5 py-4">$0 on Lite</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">+$0.50 in XPL</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay (Standard)</td>
                  <td className="px-5 py-4">$0 (no cashback on standard cards)</td>
                  <td className="px-5 py-4">$22.00 (1% conversion plus 1.2% non-default currency markup)</td>
                  <td className="px-5 py-4">No maintenance fee</td>
                  <td className="px-5 py-4 font-bold text-rose-700">−$22.00</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay (Pro, for contrast)</td>
                  <td className="px-5 py-4">$18.00 after the reported $18/month reward cap</td>
                  <td className="px-5 py-4">$22.00 (same 2.2%)</td>
                  <td className="px-5 py-4">$12.90/month</td>
                  <td className="px-5 py-4 font-bold text-rose-700">−$16.90</td>
                </tr>
              </tbody>
            </table>
          </div>

          <GuideH2>The arithmetic, card by card</GuideH2>
          <GuideP>
            <strong>ether.fi Cash Core</strong> is the clean winner abroad. Cashback is 3% on the first $2,000 of monthly spend, so $1,000 earns $30. The Core FX markup published in our listing is 0.5%, so the same spending costs $5. Annual fee is $0. Net: 30 − 5 = <strong>+$25</strong>. Two honest footnotes: the Core virtual card costs $10 once (the $10 activation deposit is spendable, not a fee), and higher tiers cut the markup to 0.25% or zero, so frequent travelers gain more from Luxe and above than the cashback table suggests.
          </GuideP>
          <GuideP>
            <strong>Plasma One Lite</strong> is the cautionary tale. Cashback is 2% on the first $500 ($10) and 0.1% on the next $500 ($0.50), totaling $10.50, paid in XPL. The Lite FX markup is 1%, so $1,000 of foreign spending costs $10. Net: 10.50 − 10 = <strong>+$0.50</strong>, and it arrives in a volatile token rather than dollars. The advertised 2% and the delivered 0.05% are both true statements about the same month.
          </GuideP>
          <GuideP>
            <strong>Wirex One</strong> advertises cashback from 0.5% to 8% depending on membership tier; at the base end, $1,000 earns $5. Wirex advertises zero FX fees, and our listing records no monthly or annual card fee, so the purchase side nets <strong>+$5</strong>. The caveat sits in the funding step: our listing notes that USD top-ups by card were reported in October 2026 to process in EUR with a conversion fee, the amount is not published, and the card you top up with may add its own fee. Wirex's true net depends on how you load it, and the honest answer is that the published data cannot finish this calculation.
          </GuideP>
          <GuideP>
            <strong>KAST Standard</strong> pays 1.5% on the first $2,000, so $15 on our test spend. FX is where it gets conditional: KAST advertises 0% FX fees on purchases in 16 Latin American currencies until the end of 2027, as reported by @0xDani and recorded in our listing. Spend in those currencies and the net is the full <strong>+$15</strong>. Spend anywhere else and our listing does not publish a general FX fee, so the net is honestly unknown rather than zero.
          </GuideP>
          <GuideP>
            <strong>Tria Lite</strong> pays 1.5% on the first $1,000, so $15, and the Lite membership costs $20 a year, $1.67 for the month, leaving <strong>+$13.33 before FX</strong>. Tria's published figures in our listing detail ATM costs ($1 plus 1%) but do not publish a purchase conversion or FX fee, so we stop the arithmetic there rather than assume the missing number is zero. If you are quoted an FX figure in the Tria app, subtract 1% of your foreign spend for every 1% it shows and the comparison completes itself.
          </GuideP>
          <GuideP>
            <strong>RedotPay</strong> shows why access and rewards are different products. The standard card pays no cashback, and its official fee schedule in our listing charges 1% crypto conversion on purchases plus a further 1.2% on non-default currency purchases: 2.2% of $1,000 is $22, for a net of <strong>−$22</strong>. The paid Pro membership does not rescue the foreign case: even assuming every dollar goes through Apple Pay or Google Pay at 3%, the $30 gross runs into the $18 monthly reward cap reported by third-party reviewers, then loses the same $22 in conversion charges and the $12.90 membership fee, landing at <strong>−$16.90</strong>. Pro can still pay off for heavy domestic mobile pay spending. Abroad, the conversion stack wins.
          </GuideP>

          <GuideH2>How to use this when you choose a card</GuideH2>
          <BulletList
            items={[
              "Estimate your foreign share. If most of your spending is in a currency other than your funding currency, rank cards by the net column, not the cashback column.",
              "Multiply the FX markup by your real spend before you celebrate a rate. A 1% markup on $2,000 a month is $240 a year, which buys a lot of membership tiers.",
              "Check whether the reward survives conversion. Cashback paid in XPL, CRO, or points still has to be converted or held; a dollar of USDC cashback and a dollar of token cashback are not the same dollar.",
              "When a fee is not published, treat it as a question to ask in the app before you top up, never as a zero. Two of the six cards here could not be fully priced from public data, and both are popular.",
            ]}
          />
          <GuideP>
            For the domestic side of the picture, our effective cashback page runs the whole directory through the caps and fees formula at $500, $1,000, and $2,000 a month, and our advertised vs reality guide explains the traps behind the headline rates. Read them together and you have both halves of the deal.
          </GuideP>

          <Callout title="Disclosure" tone="cyan">
            Some listing and review pages linked from this guide contain disclosed referral links. They do not change the arithmetic, which uses only the rates and fees published in our directory.
          </Callout>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Run the effective cashback table
            </Link>
            <Link
              href="/crypto-cards/guides/cashback-ad-vs-reality"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Cashback: advertised vs reality
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
