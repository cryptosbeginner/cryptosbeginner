import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/kast-points-pioneer-units`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "5 November 2026";
const UPDATED_ISO = "2026-11-05";

export const metadata: Metadata = {
  title: "KAST Points Went From $800 to $0: The Pioneer Units Swap, Explained",
  description:
    "KAST has dropped its token plan and replaced KAST Points with KAST Pioneer Units, as reported on 1 November 2026. What users expected their points to be worth, what the reports say replaced them, and the lesson every points program user should take from it.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KAST Points Went From $800 to $0 | CryptosBeginner",
    description: "KAST dropped its token plan and swapped points for Pioneer Units. What happened, as reported, and what it teaches about points programs.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "KAST Points Went From $800 to $0",
    description: "The token plan is gone and points became Pioneer Units. Here is what was reported, and the lesson for every points farmer.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What happened to KAST Points?",
    answer:
      "As reported by @0xDani and @xKseilas on X on 1 November 2026, KAST dropped its plan for a token and replaced KAST Points with a new unit called KAST Pioneer Units. We have not independently verified the announcement, so treat the details as reported and check KAST's official channels and the app for the confirmed terms.",
  },
  {
    question: "Were KAST Points really worth $800?",
    answer:
      "No official value ever existed. The $800 figure reflects the kind of expectation users on X attached to a typical points balance, based on the assumption that points would convert into a tradeable token at launch. That assumption was never a promise KAST was bound by, which is exactly the problem this story illustrates.",
  },
  {
    question: "What are KAST Pioneer Units?",
    answer:
      "Per the reports, Pioneer Units are the replacement reward unit for the points program, issued instead of a token allocation. The reports do not give us a verified conversion rate, redemption value, or expiry to publish, so we are not inventing one. If you hold points, the number that matters is the one shown in your KAST app, under the terms KAST publishes there.",
  },
  {
    question: "Does this change KAST's cashback?",
    answer:
      "The cashback and the points were always separate things. Our KAST listing tracks 1.5% cashback on Standard, 2% on Premium, and 3% on Private, plus points on top for the paid tiers. The reported change is about the points layer and the dropped token plan. Check the app for current tier terms before spending toward any tier.",
  },
  {
    question: "Should I stop using KAST?",
    answer:
      "That is your call, and it should rest on the parts of the product you can price today: the cashback rate, the Reserve rates, the fees, and the deposit rules, all of which we track in our KAST review. The lesson of this story is narrower: never count a points balance as money, on KAST or anywhere else.",
  },
];

export default function KastPointsPioneerUnitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "KAST Points Went From $800 to $0",
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
              KAST Points Went From $800 to $0
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              KAST has dropped its token plan and replaced its points with something called Pioneer Units. If you spent a year farming points toward a token that is no longer coming, this is what happened, and the lesson is bigger than KAST.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version" tone="amber">
            On 1 November 2026, @0xDani and @xKseilas reported on X that KAST has dropped its token plan and replaced KAST Points with KAST Pioneer Units. Everything specific in this explainer comes from those reports, not from our own verification, and we flag it that way throughout. The core story is simple: a points balance users mentally priced at hundreds of dollars was never worth anything official, and now the token future it was priced against is gone.
          </Callout>

          <GuideH2>What KAST Points were supposed to be</GuideH2>
          <GuideP>
            KAST runs a tiered card program. Alongside plain cashback, its paid tiers earn points: our listing, captured from the live app in October 2026, shows Premium members earning 2% cashback plus 1% back in points, and Private members earning 3% cashback plus 2% back in points. Points programs like this are never really about the points. They are about what the points are expected to become, and in crypto the expected answer is almost always the same: a token.
          </GuideP>
          <GuideP>
            That expectation did real work. Users routed spending through KAST, paid for memberships, and held Reserve balances partly to accumulate points ahead of a token launch they assumed was coming. On X, users priced their expected allocations in the hundreds of dollars; the $800 figure in our headline is the kind of number attached to a typical active user's balance. None of that value was ever official. There was no published conversion rate, no token supply to divide, and no contractual promise that points would become anything at all. The $800 lived entirely in the community's imagination, which is precisely why it could go to zero in a single announcement.
          </GuideP>

          <GuideH2>What the reports say happened</GuideH2>
          <GuideP>
            As reported by @0xDani, a close follower of the crypto card scene, and amplified by @xKseilas on 1 November 2026, KAST dropped the token plan and retired KAST Points in favor of KAST Pioneer Units. Per those reports, Pioneer Units are the program's new reward unit: the thing you now hold instead of points, with no token launch attached to it.
          </GuideP>
          <GuideP>
            Here is what we are not going to do: invent the rest. The reports we have seen do not establish a verified conversion rate from points to units, a cash value for a unit, what units can be redeemed for, or whether they expire. Those details decide whether this swap is a mild disappointment or a total wipeout, and they belong to KAST's official announcement and the terms shown in the app. If you hold a balance, open the app and read the conversion KAST actually applied to your account. If the terms are not written down there, that absence is information too.
          </GuideP>

          <GuideH2>Why companies do this</GuideH2>
          <GuideP>
            Points are the perfect marketing liability. They cost nothing to issue, they feel like money to the user, and the terms almost always say, in the fine print, that the issuer can change or cancel the program at any time. A token, by contrast, creates expectations that are hard to walk back, plus regulatory and market obligations. When a company quietly retires the token future and swaps points for a closed unit with no market, it converts an open-ended promise into a closed one it fully controls. Rational for the company. Expensive for anyone who spent real money chasing the points.
          </GuideP>
          <GuideP>
            KAST is not accused of anything unusual here, and that is the point. This is how points programs work everywhere, from airline miles devaluations to exchange points that expire unspent. The crypto version just moves faster and dresses the points in token language.
          </GuideP>

          <GuideH2>The lesson for every points program</GuideH2>
          <BulletList
            items={[
              "Price points at zero. If a reward is not cash, a stablecoin, or a tradeable asset in your wallet today, its planning value is zero. Anything it later becomes is a bonus, not income.",
              "Separate the cashback from the story. KAST's paid tiers bundle real cashback (2% and 3% in our listing data) with points. Judge the membership on the cashback alone; if it does not pay for itself without the points, it does not pay.",
              "Spending to farm is still spending. Money routed to a card to earn points is money you could have routed to a card paying a higher certain rate. The opportunity cost is real even when the points turn out to be worth something.",
              "Read the program's change clause before you accumulate, not after. If the terms say the issuer may modify or terminate the program at its discretion, and they nearly always do, you now know exactly what that sentence costs when it is used.",
              "Watch how a company handles the swap. A program that honors balances generously under the new system is telling you something good about itself. One that lets balances quietly evaporate is telling you something too.",
            ]}
          />
          <GuideP>
            None of this changes the verifiable parts of the KAST product, which we track in our review and listing: the tier cashback rates, the USD Reserve boosted rates (a KAST funded promotion running to mid-2027, per the listing), the $40 physical card, and the strict USDT on Solana deposit rule. Those are the numbers worth deciding on. The points were always the decoration.
          </GuideP>

          <Callout title="Disclosure" tone="cyan">
            Our KAST review and listing pages contain a disclosed referral link. It does not change anything in this explainer, and the facts above are reported from X sources, not taken from KAST marketing.
          </Callout>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/kast-review"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Read our KAST review
            </Link>
            <Link
              href="/crypto-cards/kast-card"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              See the KAST listing
            </Link>
            <Link
              href="/crypto-cards/guides/cashback-ad-vs-reality"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Cashback: advertised vs reality
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
