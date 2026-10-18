import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../../guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/news/crypto-card-spending-tripled-2026`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";

const SOURCE_URL = "https://x.com/0xVishnya/status/2110271623509000676";

export const metadata: Metadata = {
  title: "Crypto Card Spending Tripled in a Year: $403M to $1.22B",
  description:
    "Crypto card spending grew 3x in a year to $1.22B in September 2026. Per-card figures: Tria up 108x, Avici 16x, ether.fi 5.4x, RedotPay still the volume leader. Data attributed to researcher @0xVishnya.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Spending Tripled in a Year | CryptosBeginner",
    description:
      "From $403M to $1.22B in twelve months: which crypto cards grew fastest, and who still owns the volume.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Crypto Card Spending Tripled in a Year",
    description:
      "Tria up 108x, RedotPay still the volume leader. Per-card figures for September 2025 vs September 2026.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Where do these crypto card spending figures come from?",
    answer:
      "The per-card figures come from crypto researcher @0xVishnya, who published them in an October 14, 2026 post on X comparing September 2025 with September 2026. His tracking methodology is not published, so treat these as his figures, not ours. The industry data provider paymentscan aggregates issuer-submitted data but has no public API, so independent per-card tracking like this is currently the best public window into program-level volume.",
  },
  {
    question: "Why do some figures say spent and others say topped up?",
    answer:
      "Different programs report different metrics. Most figures in the table are card spend, but the KAST and RedotPay figures are top-up volume (money loaded onto the card), which is not the same as money spent. Treat spend and top-up figures as related but not directly comparable.",
  },
  {
    question: "Which crypto card grew the fastest?",
    answer:
      "Tria, by a wide margin: from $156K in September 2025 to $16.7M in September 2026, roughly 108x. Kolo, Karta, and Avici each grew about 16x, and Tuyo grew 9.4x. All five are relatively new programs, mostly self-custodial.",
  },
  {
    question: "Which crypto card has the highest volume?",
    answer:
      "RedotPay, by a wide margin: $537.9M topped up in September 2026, nearly half of the $1.22B market total. Among self-custodial programs, ether.fi leads on absolute spend at $128.8M.",
  },
  {
    question: "Why did Gnosis shrink?",
    answer:
      "Gnosis Pay is winding down its consumer card: the card stops working on December 20, 2026, as the project pivots to B2B. Falling volume ahead of a announced shutdown is expected. We track discontinued programs on our card graveyard page.",
  },
  {
    question: "Does fast growth mean a card is better?",
    answer:
      "No. Growth measures adoption, not quality. A fast-growing card can still have high fees, weak cashback caps, or a custody model you would not accept. Before choosing, check who actually holds your money, run the cashback math on your real monthly spend, and read the fee schedule. Growth tells you where the market is moving; it does not tell you which card fits you.",
  },
];

const rows: Array<[string, string, string, string, string?]> = [
  ["Tria", "$156K", "$16.7M", "108x"],
  ["Kolo", "$1.2M", "$19.6M", "16x"],
  ["Karta", "$3.1M", "$49.5M", "16x"],
  ["Avici", "$240K", "$3.8M", "16x"],
  ["Tuyo", "$227K", "$2.1M", "9.4x"],
  ["ether.fi", "$24.1M", "$128.8M", "5.4x"],
  ["Karta io", "$3.3M", "$16.7M", "5.1x"],
  ["KAST", "$58.6M", "$213.4M", "3.6x", "Top-up volume"],
  ["Bitget Wallet", "$920K", "$1.8M", "2x"],
  ["RedotPay", "$304.8M", "$537.9M", "1.8x", "Top-up volume"],
  ["Avalanche Card", "$1.6M", "$2.8M", "1.7x"],
  ["Exa", "$1.0M", "$1.7M", "1.7x"],
];

const newerRows: Array<[string, string]> = [
  ["Wirex One", "$47.6M"],
  ["Plasma", "$25.6M spent"],
  ["COCA", "$9.3M"],
  ["Ethena Pay", "$1.6M"],
];

export default function CryptoCardSpendingTripledPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Crypto Card Spending Tripled in a Year: $403M to $1.22B",
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
            <Link
              href="/crypto-cards/news"
              className="text-sm font-black text-cyan-200 hover:text-white"
            >
              ← Back to Card News
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Market data
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Crypto card spending tripled in a year
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              From $403M in September 2025 to $1.22B in September 2026. Here is the
              per-card breakdown: who grew fastest, who still owns the volume, and
              which programs are fading.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            The whole crypto card market did 3x in twelve months. The fastest growers
            are young, mostly self-custodial programs: Tria at 108x, Kolo, Karta, and
            Avici at 16x each. But absolute volume still belongs to RedotPay at
            $537.9M, nearly half the market. Growth measures adoption, not quality:
            run the cashback and fee math before you pick a card.
          </Callout>

          <GuideH2>The headline numbers</GuideH2>
          <GuideP>
            Crypto researcher{" "}
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-fuchsia-700 hover:text-fuchsia-900"
            >
              @0xVishnya
            </a>{" "}
            published per-card volume figures comparing September 2025 with September
            2026. The market total went from $403M to $1.22B, a new record. His
            tracking methodology is not published, so read these as his figures,
            attributed below, rather than independently verified data.
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Card</th>
                  <th className="px-5 py-4 font-black">Sep 2025</th>
                  <th className="px-5 py-4 font-black">Sep 2026</th>
                  <th className="px-5 py-4 font-black">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map(([card, y2025, y2026, growth, note]) => (
                  <tr key={card}>
                    <td className="px-5 py-4 font-bold">
                      {card}
                      {note && (
                        <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500">
                          {note}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{y2025}</td>
                    <td className="px-5 py-4 font-bold">{y2026}</td>
                    <td className="px-5 py-4 font-bold text-emerald-700">{growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GuideP>
            The KAST and RedotPay figures are top-up volume (funds loaded), not card
            spend, so they are not directly comparable to the spend figures. Four
            newer programs were only tracked from this year, so no growth multiple
            applies:
          </GuideP>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Newer program</th>
                  <th className="px-5 py-4 font-black">Sep 2026 volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {newerRows.map(([card, volume]) => (
                  <tr key={card}>
                    <td className="px-5 py-4 font-bold">{card}</td>
                    <td className="px-5 py-4">{volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <GuideH2>The fastest growers are mostly self-custodial</GuideH2>
          <GuideP>
            Look at the top of the growth table and a pattern stands out. Tria (108x),
            Kolo (16x), Avici (16x), and Tuyo (9.4x) are all young programs, and most
            of them market themselves as self-custodial: your funds stay in wallets
            you control rather than on a company balance sheet. ether.fi, the
            largest self-custodial program by absolute spend at $128.8M, grew 5.4x.
          </GuideP>
          <GuideP>
            That matches what we see across the catalog. The market is shifting away
            from exchange-style custodial cards toward programs where a shutdown does
            not strand your balance. If that matters to you, our issuers page shows
            who actually holds your money for each card, brand by brand.
          </GuideP>

          <GuideH2>RedotPay still owns the absolute numbers</GuideH2>
          <GuideP>
            Growth multiples flatter small programs. In absolute terms, RedotPay
            remains the giant: $537.9M topped up in September 2026, up 1.8x from
            $304.8M a year earlier. That is nearly half of the entire $1.22B market.
            KAST is the other volume heavyweight at $213.4M topped up, 3.6x up.
            No other program is within a factor of two of RedotPay.
          </GuideP>

          <GuideH2>Some programs shrank</GuideH2>
          <GuideP>
            Not everything grew. Gnosis, MetaMask, Solayer, BFinance, and SafePal all
            did less volume than a year ago. Gnosis has a clear explanation: Gnosis
            Pay is winding down its consumer card on December 20, 2026, pivoting to
            B2B, so falling volume ahead of a announced shutdown is expected. For
            the others, the figures suggest users are migrating to the faster-growing
            programs above. We track discontinued programs on the card graveyard
            page.
          </GuideP>

          <GuideH2>What this means if you are choosing a card</GuideH2>
          <BulletList
            items={[
              "Growth is a signal of adoption, not a recommendation. A card growing 16x can still have fees or cashback caps that make it wrong for you.",
              "The self-custodial trend is real: the fastest growers mostly keep funds in your control. Check the custody model before you apply, because it decides what happens to your money if the program shuts down.",
              "Absolute volume still concentrates in a few programs. If network effects and longevity matter to you, RedotPay and KAST dominate the totals.",
              "Do the cashback math on your actual monthly spend. Headline rates are ceilings; caps and tiers decide what you really earn. Our effective cashback page runs the numbers at $500, $1,000, and $2,000 of monthly spend.",
            ]}
          />

          <GuideH2>A note on where these numbers come from</GuideH2>
          <GuideP>
            There is no official, public, per-card volume feed for the crypto card
            industry. The data provider paymentscan aggregates issuer-submitted data
            but offers no public API, and the largest programs settle off-chain
            through Visa, so there is nothing to count on-chain. Independent
            researcher tracking, like the figures above, is currently the best public
            window into program-level volume. We attribute the figures to their
            source and flag where metrics differ (spend vs top-ups) so you can read
            them honestly.
          </GuideP>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/effective-cashback"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Compare real cashback rates
            </Link>
            <Link
              href="/crypto-cards/issuers"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Who issues each card
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
