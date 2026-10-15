import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/reviews`;
const UPDATED = "16 October 2026";
const UPDATED_ISO = "2026-10-16";

export const metadata: Metadata = {
  title: "Crypto Card Reviews: Tested, Compared, Honest | CryptosBeginner",
  description:
    "In-depth crypto card reviews tested on the real apps: Avici, DogPay, KAST, RedotPay, Solid, and Tevau. Real fee tables, honest verdicts, no hype.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Card Reviews | CryptosBeginner",
    description:
      "Six crypto cards tested on the real apps, with real fee tables and honest verdicts.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Card Reviews | CryptosBeginner",
    description:
      "Six crypto cards tested on the real apps, with real fee tables and honest verdicts.",
  },
  robots: { index: true, follow: true },
};

type Review = {
  slug: string;
  name: string;
  provider: string;
  network: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  href: string;
};

const REVIEWS: Review[] = [
  {
    slug: "solid-review",
    name: "Solid Card",
    provider: "Solid",
    network: "Visa",
    imageUrl: "/images/cards/solid-card.png",
    imageAlt: "Solid green Visa card official product image",
    summary:
      "The rare crypto card where the math genuinely works: free to start, USDC cashback that beats its own FX fees at every tier, and yield on idle money.",
    highlights: ["Up to 5% USDC cashback", "Up to 6% APY on idle balance", "Self-custodial throughout"],
    href: "/crypto-cards/solid-review",
  },
  {
    slug: "kast-review",
    name: "KAST Card",
    provider: "KAST",
    network: "Visa",
    imageUrl: "/images/cards/kast-card.png",
    imageAlt: "KAST Card official product image",
    summary:
      "A complete stablecoin neobank: free Standard tier with 1.5% cashback, an 8% boosted Reserve reward, and genuinely self-custodial Earn vaults with onchain proof.",
    highlights: ["1.5% to 3% cashback by tier", "8% to 12% boosted Reserve rewards", "Self-custodial Earn vaults"],
    href: "/crypto-cards/kast-review",
  },
  {
    slug: "avici-review",
    name: "Avici Card",
    provider: "Avici",
    network: "Visa",
    imageUrl: "/images/cards/avici-card.png",
    imageAlt: "Avici Card official product image",
    summary:
      "The most interesting secured crypto card we have reviewed: real self-custody, 0% APR, honest card prices, and a 50+ country list. Spend without selling your USDC.",
    highlights: ["0% APR secured credit", "50+ supported countries", "Virtual card from $15"],
    href: "/crypto-cards/avici-review",
  },
  {
    slug: "dogpay-review",
    name: "DogPay Card",
    provider: "DogPay",
    network: "Visa and Mastercard",
    imageUrl: "/images/cards/dogpay-card.webp",
    imageAlt: "DogPay virtual and physical card official product visual",
    summary:
      "A practical crypto spending toolkit: Visa and Mastercard options across Global, American, and Singapore BINs, a USD bank account, and Apple Pay plus Google Pay support.",
    highlights: ["Global, American, Singapore BINs", "USD bank account included", "Works for Amazon and AI subscriptions"],
    href: "/crypto-cards/dogpay-review",
  },
  {
    slug: "redotpay-review",
    name: "RedotPay Card",
    provider: "RedotPay",
    network: "Varies by region",
    imageUrl: "/images/cards/redotpay-card.png",
    imageAlt: "RedotPay physical stablecoin card",
    summary:
      "A cheap, honest way to spend crypto on everyday purchases: a $10 virtual card, free on-chain top-ups, and 1% on USD purchases. No cashback, no hype.",
    highlights: ["$10 virtual card", "1% fee on USD spending", "Free on-chain top-ups"],
    href: "/crypto-cards/redotpay-review",
  },
  {
    slug: "tevau-review",
    name: "Tevau Card",
    provider: "Tevau",
    network: "Visa",
    imageUrl: "/images/cards/tevau-card.png",
    imageAlt: "Tevau Visa card official product visual",
    summary:
      "A fair deal if you hold USDT and can pass KYC: tiers from a $20 virtual card to a $499 24K gold card, roughly 1% top-up fees, and Earn on idle USDT.",
    highlights: ["Tiers from $20 to $499", "Roughly 1% top-up fee", "Earn on idle USDT"],
    href: "/crypto-cards/tevau-review",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={review.href} className="relative block aspect-[16/10] w-full overflow-hidden bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,.22),transparent_45%),linear-gradient(135deg,#0f172a,#312e81_55%,#a21caf)]">
        <Image
          src={review.imageUrl}
          alt={review.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition duration-300 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-slate-950/75 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
          {review.network}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">
          {review.provider} · Full review
        </p>
        <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">
          <Link href={review.href} className="hover:text-fuchsia-700">
            {review.name} review
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{review.summary}</p>
        <ul className="mt-4 space-y-1.5">
          {review.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {h}
            </li>
          ))}
        </ul>
        <Link
          href={review.href}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-700"
        >
          Read full review
        </Link>
      </div>
    </article>
  );
}

export default function CardReviewsHubPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Crypto Card Reviews",
    url: PAGE_URL,
    description:
      "In-depth crypto card reviews tested on the real apps: Avici, DogPay, KAST, RedotPay, Solid, and Tevau.",
    datePublished: "2026-10-16",
    dateModified: UPDATED_ISO,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: REVIEWS.length,
      itemListElement: REVIEWS.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${r.name} review`,
        url: `${SITE_URL}${r.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">
              Crypto Cards · Reviews
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Crypto card reviews, tested on the real apps
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Every review is research-led
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              No sponsored rankings, no copied spec sheets. Each review below was
              written after testing the actual product: real fee tables captured
              in-app, real onboarding steps, and honest verdicts that include
              the downsides. Start with the card that fits your life, then read
              the full breakdown before you apply.
            </p>
            <div className="mt-6">
              <Link
                href="/crypto-cards"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/20"
              >
                Browse all {189} cards in the directory
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">
              How we review
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
              What every review covers
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Each full review follows the same structure so you can compare
              cards fairly: what the card is and who it suits, the company
              behind it, every fee we could verify, how to sign up step by
              step, what we liked, what we did not, and a verdict with no
              hedging. Fees, availability, and rewards are checked against
              official sources on publication day and re-checked on every
              update. Affiliate links never influence verdicts.
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              <strong className="text-slate-700">Risk note:</strong> crypto is
              volatile and card programs change terms often. Treat every review
              as a starting point, then verify current fees and eligibility on
              the provider page before applying. Educational content, not
              financial advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
