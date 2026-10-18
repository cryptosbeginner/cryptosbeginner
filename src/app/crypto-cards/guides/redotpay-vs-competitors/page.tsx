import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList, WarningList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/redotpay-vs-competitors`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: "RedotPay vs KAST vs ether.fi vs Plasma One: Crypto Card Comparison",
  description:
    "RedotPay vs the field (October 2026): the volume leader against KAST, ether.fi Cash, and Plasma One. Compare custody models, cashback caps, fees, and availability side by side.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RedotPay vs KAST vs ether.fi vs Plasma One | CryptosBeginner",
    description:
      "The biggest crypto card against its sharpest challengers: custody, cashback, fees, and availability compared.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "RedotPay vs the Field",
    description:
      "RedotPay vs KAST vs ether.fi vs Plasma One: custody, cashback caps, fees, and availability compared.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Is RedotPay really the biggest crypto card?",
    answer:
      "By volume, yes. Independent researcher tracking puts RedotPay at $537.9M topped up in September 2026, nearly half of the $1.22B market total that month, up from $304.8M a year earlier. Note the figure is top-up volume (money loaded), not card spend, and it comes from the researcher's tracking since the industry data provider has no public API.",
  },
  {
    question: "Is RedotPay custodial?",
    answer:
      "Yes. RedotPay is custodial: your crypto sits with them under Fireblocks custody, not in your own wallet. They cite PCI DSS 4.0 certification and about $42M in insurance coverage in third-party reviews. That makes it convenient but means you carry counterparty risk. Keep spending money there, not savings.",
  },
  {
    question: "Which card pays the most cashback on $1,000 a month?",
    answer:
      "Of these four, ether.fi Cash on the free Core tier pays the most at that spend: 3% on the first $2,000 of monthly spend, which is $30 on $1,000. KAST Standard pays 1.5% ($15), Plasma One Lite pays 2% on the first $500 then 0.1% (about $10.50), and RedotPay's standard card pays nothing; only the $12.90/month Pro plan pays 3%, and only on Apple Pay and Google Pay purchases.",
  },
  {
    question: "Can US residents get RedotPay?",
    answer:
      "No. RedotPay's help center lists around 40 unsupported countries and regions, including the United States, Mainland China, Russia, Iran, and North Korea. If you are physically in a restricted area you cannot access the app at all. KAST advertises 190+ countries and ether.fi supports bank transfers in 162 countries, so check each card's list for your country.",
  },
  {
    question: "What do I give up by choosing RedotPay over a self-custodial card?",
    answer:
      "Custody. With RedotPay your balance is held by the company under Fireblocks custody; with ether.fi or Plasma One your assets stay in wallets or vaults you control, so a company failure does not trap your funds. You also give up cashback unless you pay for Pro, and you give up the DeFi features (borrow mode, yield vaults) the challengers bundle in.",
  },
  {
    question: "Do any of these cards require KYC?",
    answer:
      "Yes, all of them. Every card here runs on regulated Visa or Mastercard rails and requires identity verification. Self-custody describes where your assets sit, not whether you verify your identity. No legitimate card issuer skips KYC on the card itself.",
  },
];

export default function RedotPayVsCompetitorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "RedotPay vs KAST vs ether.fi vs Plasma One: Crypto Card Comparison",
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
              Card comparison
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              RedotPay vs the Field
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              RedotPay is the biggest crypto card by volume, but it is custodial and its standard
              card pays no cashback. Here is how it stacks up against KAST, ether.fi Cash, and
              Plasma One on custody, rewards, fees, and availability.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            RedotPay wins on scale and simplicity: nearly half of all crypto card volume flows
            through it. But the standard card pays zero cashback, your funds sit in company
            custody, and US residents cannot use it at all. The challengers compete exactly where
            RedotPay is weakest: ether.fi and Plasma One keep your assets in your own custody,
            and ether.fi's free tier pays 3% on up to $2,000 of monthly spend.
          </Callout>

          <GuideH2>Scale: why RedotPay leads</GuideH2>
          <GuideP>
            Independent researcher tracking puts RedotPay at $537.9M topped up in September 2026,
            up from $304.8M a year earlier, which is nearly half of the $1.22B market total that
            month. Among the challengers, ether.fi is the largest self-custodial program at
            $128.8M spent, KAST did $213.4M topped up, and Plasma did $25.6M spent. Two honesty
            notes: the RedotPay and KAST figures are top-up volume (money loaded onto the card),
            not card spend, so they are not directly comparable to spend figures; and the numbers
            come from a researcher's tracking, since the industry data provider has no public API.
          </GuideP>

          <GuideH2>Custody: the real dividing line</GuideH2>
          <GuideP>
            This is the most important table on the page. It decides what happens to your money
            if the company behind the card has a bad day.
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Card</th>
                  <th className="px-5 py-4 font-black">Custody model</th>
                  <th className="px-5 py-4 font-black">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay</td>
                  <td className="px-5 py-4">Custodial (Fireblocks)</td>
                  <td className="px-5 py-4">
                    Your crypto sits with RedotPay. PCI DSS 4.0 certified, about $42M insurance
                    cited by reviewers. Convenient, but it is counterparty risk.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">ether.fi Cash</td>
                  <td className="px-5 py-4">Non-custodial vault</td>
                  <td className="px-5 py-4">
                    Assets stay in your own vault on Optimism. Only you authorize transactions;
                    the issuer has no custody or control over wallet contents.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Plasma One</td>
                  <td className="px-5 py-4">Self-custodial smart wallet</td>
                  <td className="px-5 py-4">
                    You hold your own keys; only you authorize transactions on the Plasma chain.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">KAST</td>
                  <td className="px-5 py-4">Company-held balances</td>
                  <td className="px-5 py-4">
                    Balances sit with KAST's program structure rather than in a wallet you
                    control. Independent researchers describe it as a custodial model; confirm
                    the current terms before loading large amounts.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <GuideH2>Cashback: advertised vs capped reality</GuideH2>
          <GuideP>
            RedotPay's standard card pays no cashback at all. Cashback only exists on RedotPay
            Pro ($12.90/month or $129/year): 3% on Apple Pay and Google Pay purchases, credited
            in USDs for future spending. Everyone else pays something on the free tier, but every
            headline rate sits inside a monthly cap.
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Card (entry tier)</th>
                  <th className="px-5 py-4 font-black">Headline rate</th>
                  <th className="px-5 py-4 font-black">Cap</th>
                  <th className="px-5 py-4 font-black">Real earnings on $1,000/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay Standard</td>
                  <td className="px-5 py-4">0%</td>
                  <td className="px-5 py-4">No cashback offered</td>
                  <td className="px-5 py-4 font-bold">$0</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">RedotPay Pro</td>
                  <td className="px-5 py-4">3% (Apple/Google Pay only)</td>
                  <td className="px-5 py-4">Mobile wallets only</td>
                  <td className="px-5 py-4 font-bold">$30, minus $12.90/mo fee</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">ether.fi Cash Core</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">3%</td>
                  <td className="px-5 py-4">First $2,000/mo</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$30</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">KAST Standard</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">1.5%</td>
                  <td className="px-5 py-4">First $2,000/mo</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$15</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Plasma One Lite</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">2%</td>
                  <td className="px-5 py-4">First $500/mo, then 0.1%</td>
                  <td className="px-5 py-4 font-bold text-emerald-700">$10.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <GuideP>
            The math favors ether.fi at normal spending: $30 on $1,000 with no annual fee and no
            mobile-wallet restriction. RedotPay Pro matches the $30 only if all your spending
            goes through Apple Pay or Google Pay, and the subscription eats nearly half of it at
            this spend level. KAST's paid tiers go higher (2% on Premium, 3% on Private) but cost
            $1,000 and $10,000 a year respectively, so they only make sense at very high spend.
          </GuideP>

          <GuideH2>Fees compared</GuideH2>
          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Fee</th>
                  <th className="px-5 py-4 font-black">RedotPay</th>
                  <th className="px-5 py-4 font-black">KAST</th>
                  <th className="px-5 py-4 font-black">ether.fi</th>
                  <th className="px-5 py-4 font-black">Plasma One</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold">Card issuance</td>
                  <td className="px-5 py-4">$10 virtual / $100 physical</td>
                  <td className="px-5 py-4">Free virtual / $40 physical</td>
                  <td className="px-5 py-4">$10 virtual / $50 physical (Core)</td>
                  <td className="px-5 py-4">Free Lite (virtual only)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">FX markup</td>
                  <td className="px-5 py-4">1% default-currency conversion + 1.2% non-default</td>
                  <td className="px-5 py-4">Check app (not published in our data)</td>
                  <td className="px-5 py-4">0.5% Core, 0.25% Luxe, 0% Pinnacle/VIP</td>
                  <td className="px-5 py-4">1% Lite, 0.5% Core, 0% Platinum</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Top-ups</td>
                  <td className="px-5 py-4">On-chain free; bank card 3%; Binance Pay 1%</td>
                  <td className="px-5 py-4">USDT on Solana primary path</td>
                  <td className="px-5 py-4">Bank transfers in 162 countries; crypto deposits</td>
                  <td className="px-5 py-4">Stablecoin deposits; bank rails vary by tier</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">ATM</td>
                  <td className="px-5 py-4">Tiered; 3% above $10,000/mo on USD cards</td>
                  <td className="px-5 py-4">Check app (not published in our data)</td>
                  <td className="px-5 py-4">$5,000/tx, 5 per 24h, $25,000 daily</td>
                  <td className="px-5 py-4">Up to $1,000/tx, 3 per 24h, physical only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <GuideH2>Availability</GuideH2>
          <BulletList
            items={[
              "RedotPay: around 40 unsupported countries including the US, Mainland China, Russia, Iran, and North Korea. If you are in a restricted area you cannot open the app at all. Singapore cards issued by Xfers (StraitsX); Hong Kong cards by Reap.",
              "KAST: advertised in 190+ countries; ID requirements vary by country. Issued by Third National, a Rain group company.",
              "ether.fi Cash: bank transfers in 162 countries; physical card ships to 31 US states (no delivery to Belgium or Ireland). Issued by Third National, a Rain group company.",
              "Plasma One: the provider does not publish a specific country list. Issued via Rain infrastructure with account services by Bridge.",
            ]}
          />

          <GuideH2>What you give up for RedotPay's convenience</GuideH2>
          <GuideP>
            RedotPay earned its scale by being the simplest on-ramp: top up from the app, spend
            anywhere Visa works, no vaults or keys to think about. Here is the honest price of
            that simplicity.
          </GuideP>
          <WarningList
            items={[
              {
                title: "Your money is theirs until you spend it",
                body: "Custodial balances mean you are trusting RedotPay's solvency, security, and compliance. With ether.fi or Plasma One, a company failure does not trap funds that were never in company hands.",
              },
              {
                title: "No rewards without a subscription",
                body: "The standard card pays 0% cashback. Every challenger here pays something on its free tier. RedotPay Pro's 3% only applies to Apple Pay and Google Pay purchases, so physical card swipes earn nothing extra.",
              },
              {
                title: "No DeFi upside",
                body: "ether.fi offers borrow mode against your vault from 1.43% and KAST pays boosted USD Reserve rates until mid-2027. RedotPay is a spending tool, not a yield venue.",
              },
              {
                title: "Geographic blind spots",
                body: "US residents are fully excluded, along with about 39 other countries. If you move to the US, your card stops being an option.",
              },
            ]}
          />

          <GuideH2>Beyond the card: what else each app does</GuideH2>
          <GuideH3>RedotPay</GuideH3>
          <BulletList
            items={[
              "P2P payments in 100+ countries",
              "RedotPay Pro subscription with mobile-wallet cashback and ATM allowances",
              "In-app crypto purchases and swaps",
            ]}
          />
          <GuideH3>KAST</GuideH3>
          <BulletList
            items={[
              "USD Reserve account with boosted rates (8-12%) until mid-2027, then 4%",
              "Self-custodial earn vaults including USDKY and Gauntlet-curated options",
              "Tiered Visa lineup from Platinum to Infinite",
            ]}
          />
          <GuideH3>ether.fi Cash</GuideH3>
          <BulletList
            items={[
              "Borrow mode: spend against crypto collateral from 1.43% without selling",
              "5% cashback on ether.fi Travel bookings plus hotel and flight discounts",
              "Lounge access, Visa concierge, and global eSIM on higher tiers",
            ]}
          />
          <GuideH3>Plasma One</GuideH3>
          <BulletList
            items={[
              "Yield on stablecoin balances through DeFi protocols in the Plasma ecosystem",
              "AI cashback and airline cashback perks on higher tiers (as shown in the app)",
              "Free transfers between Plasma One users",
            ]}
          />

          <GuideH2>The verdict</GuideH2>
          <GuideH3>The beginner who wants simplicity</GuideH3>
          <GuideP>
            RedotPay, if your country is supported. Nothing here is easier: top up, tap, done.
            Just go in knowing the standard card pays no cashback and your balance is custodial,
            so keep only spending money on it. If you are in the US, RedotPay is not an option at
            all, which makes KAST or ether.fi the default pick.
          </GuideP>
          <GuideH3>The self-custody believer</GuideH3>
          <GuideP>
            ether.fi Cash or Plasma One. ether.fi gives you a non-custodial vault plus 3% on up
            to $2,000 of monthly spend with no annual fee, which is the strongest free-tier
            package in this comparison. Plasma One Lite is the simplest free entry at 2% on the
            first $500, with a cleaner upgrade path if you later want zero FX fees.
          </GuideP>
          <GuideH3>The rewards maximizer</GuideH3>
          <GuideP>
            Do the math on your actual monthly spend. At $1,000 a month, ether.fi Core's $30
            beats everything here. At very high spend, KAST Private's 3% with higher caps or
            ether.fi Pinnacle's $50,000 monthly cap take over, but weigh the $10,000 KAST Private
            membership against what you will actually earn back. RedotPay Pro only makes sense
            if nearly all your spending already flows through Apple Pay or Google Pay.
          </GuideP>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Affiliate disclosure
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The links below are referral links. Using them is optional and does not change the
              price you pay; it may earn us a commission that supports our independent reviews.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="https://go.cryptosbeginner.com/RedotPay"
                target="_blank"
                rel="sponsored nofollow noopener"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Get RedotPay
              </Link>
              <Link
                href="https://go.cryptosbeginner.com/etherfi"
                target="_blank"
                rel="sponsored nofollow noopener"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Get ether.fi Cash
              </Link>
              <Link
                href="https://go.cryptosbeginner.com/KAST"
                target="_blank"
                rel="sponsored nofollow noopener"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Get KAST
              </Link>
              <Link
                href="https://go.cryptosbeginner.com/Plasma"
                target="_blank"
                rel="sponsored nofollow noopener"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Get the Plasma One Card
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/redotpay-review"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the RedotPay review
            </Link>
            <Link
              href="/crypto-cards/etherfi-review"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the ether.fi review
            </Link>
            <Link
              href="/crypto-cards/plasma-one-review"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the Plasma One review
            </Link>
            <Link
              href="/crypto-cards/kast-review"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the KAST review
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
