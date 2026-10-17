import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";

export const metadata = {
  title: "Cryptos Beginner: Exchange, Safety & Region Guides 2026",
  description:
    "Independent crypto guides for beginners: 17 exchange reviews, 183 crypto cards compared, 7 hands-on card reviews tested on the real apps, region playbooks, wallet basics, and fee tools.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Cryptos Beginner: Crypto Guides Tested on the Real Apps",
    description:
      "17 exchange reviews, 183 crypto cards compared, hands-on card reviews, region playbooks, and tools. Independent, updated, beginner-first.",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptos Beginner",
    description:
      "Independent crypto guides for beginners: exchange reviews, 183 crypto cards compared, hands-on testing, region playbooks.",
  },
};

const STATS = [
  { value: "17", label: "Exchange reviews" },
  { value: "183", label: "Crypto cards compared" },
  { value: "7", label: "Hands-on card reviews" },
  { value: "5", label: "Region playbooks" },
];

const CARD_REVIEWS = [
  {
    name: "Tria Card",
    href: "/crypto-cards/tria-review",
    image: "/images/cards/tria-card.png",
    alt: "Tria Visa card official product visual",
    tag: "Self-custodial",
    blurb: "You hold the keys. Up to 6% cashback across Lite, Pro, and Max tiers.",
  },
  {
    name: "Solid Card",
    href: "/crypto-cards/solid-review",
    image: "/images/cards/solid-card.png",
    alt: "Solid green Visa card official product image",
    tag: "Up to 5% back",
    blurb: "Free to start, up to 5% USDC cashback and yield on idle balance.",
  },
  {
    name: "KAST Card",
    href: "/crypto-cards/kast-review",
    image: "/images/cards/kast-card.png",
    alt: "KAST Card official product image",
    tag: "Neobank",
    blurb: "Stablecoin neobank with 1.5 to 3% cashback and Earn vaults.",
  },
  {
    name: "DogPay Card",
    href: "/crypto-cards/dogpay-review",
    image: "/images/cards/dogpay-card.webp",
    alt: "DogPay virtual and physical card official product visual",
    tag: "Visa + Mastercard",
    blurb: "Global, American, and Singapore BINs plus a USD bank account.",
  },
];

const PILLARS = [
  {
    title: "Exchanges",
    href: "/exchanges/best-crypto-exchanges",
    desc: "Independent 2026 comparisons: fees, liquidity, proof of reserves, KYC vs no-KYC, and long-term safety notes.",
    link: "Compare exchanges",
  },
  {
    title: "Crypto Cards",
    href: "/crypto-cards",
    desc: "183 cards compared by fees, rewards, regions, and custody, plus 7 full reviews tested on the real apps.",
    link: "Browse 183 cards",
  },
  {
    title: "Regions",
    href: "/regions",
    desc: "Country-by-country reality checks: legal grey zones, licensed platforms, local payment rails, and tax notes.",
    link: "Explore regions",
  },
  {
    title: "Wallets",
    href: "/wallets",
    desc: "Hardware vs software, hot vs cold storage, practical backup plans, and incident lessons so you do not learn the hard way.",
    link: "Learn wallets",
  },
  {
    title: "On-chain & DEXes",
    href: "/dexes",
    desc: "How decentralised exchanges work, how they tie into meme ecosystems, and the risks of smart contracts and thin liquidity.",
    link: "Understand DEXes",
  },
  {
    title: "Tools",
    href: "/tools/fee-calculator",
    desc: "Fee calculator, exchange finder quiz, and a crypto research desk that make comparisons less painful.",
    link: "Try the tools",
  },
];

const EXCHANGE_PICKS = [
  {
    name: "Best Crypto Exchanges",
    href: "/exchanges/best-crypto-exchanges",
    updated: "13 October 2026",
    desc: "Binance, Bybit, Bitget, OKX, MEXC, Kraken and more: fees, security, and who each suits.",
  },
  {
    name: "Binance Review",
    href: "/exchanges/binance-review",
    updated: "13 October 2026",
    desc: "The deepest liquidity in crypto, with honest notes on fees, regulation, and past incidents.",
  },
  {
    name: "Bybit Review",
    href: "/exchanges/bybit-review",
    updated: "8 October 2026",
    desc: "Derivatives-first exchange with a full fee breakdown and security track record.",
  },
];

const FAQS = [
  {
    q: "Is CryptosBeginner independent?",
    a: "Yes. Rankings and verdicts are never for sale. Some pages contain affiliate links, each disclosed on the page, and they do not change the editorial facts or scores. Our methodology page documents exactly how we research and verify.",
  },
  {
    q: "Are the card reviews really tested?",
    a: "Yes. Each of the 7 card reviews was written after installing the real app, with fee tables, limits, and membership tiers captured in-app on the review date. The review shows its updated date so you know how fresh the figures are.",
  },
  {
    q: "How current is the information?",
    a: "Every guide and review carries a visible updated date. Fees, rewards, and availability change often, so we re-check figures on each update and label anything we could not verify.",
  },
  {
    q: "Do you cover my country?",
    a: "Our region playbooks cover the UAE, Saudi Arabia, Bahrain, Pakistan, and Oman, with licensed platforms, local payment rails, and tax notes for each. Card and exchange listings note regional availability wherever we could verify it.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Everything here is educational content for beginners, not financial, investment, legal, or tax advice. Crypto is volatile and products change terms; always confirm fees and availability on the provider's official pages before committing money.",
  },
];

export default function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CryptosBeginner",
    url: SITE_URL,
    description:
      "Independent crypto education for beginners: exchange reviews, crypto card comparisons, wallet guides, and region playbooks.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            Independent · Tested on real apps · Updated October 2026
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Crypto, explained honestly. <span className="text-emerald-400">Tested before we recommend.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Cryptos Beginner is a trust-first hub for crypto newcomers. We install the apps, capture
            the real fee tables, compare 183 crypto cards and 17 exchanges, and document regional
            realities, so you can choose with evidence instead of hype.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/reviews"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-400"
            >
              Read the card reviews
            </Link>
            <Link
              href="/exchanges/best-crypto-exchanges"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
            >
              Compare exchanges
            </Link>
            <Link
              href="/tools/exchange-finder"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
            >
              Take the quiz
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 text-sm text-slate-400">{s.label}</dt>
                <dd className="order-1 text-3xl font-black text-white md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="border-b border-slate-800 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { t: "Real app testing", d: "Fee tables and limits captured in-app, not copied from marketing pages." },
              { t: "Visible updated dates", d: "Every guide shows when its figures were last verified." },
              { t: "Disclosed affiliates", d: "Partner links are labeled on the page and never buy rankings." },
              { t: "Safety first", d: "Proof of reserves, security checklists, and red flags before any hype." },
            ].map((x) => (
              <div key={x.t} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-black text-emerald-300">✓</span>
                <div>
                  <p className="font-bold">{x.t}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARD REVIEWS SHOWCASE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Hands-on reviews</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Crypto cards, tested on the real apps</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Seven full reviews with real fee tables, honest pros and cons, and step-by-step signup guides.
              </p>
            </div>
            <Link href="/crypto-cards/reviews" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600">
              All 7 reviews →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARD_REVIEWS.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  <Image src={c.image} alt={c.alt} fill className="object-contain p-6 transition group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold text-white">{c.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-slate-950 group-hover:text-emerald-700">{c.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.blurb}</p>
                  <p className="mt-3 text-sm font-bold text-emerald-700">Read the review →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Start here</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">What you can learn</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Organised into clear sections you can work through at your own pace, instead of scattered social threads.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-md"
              >
                <h3 className="text-lg font-black text-slate-950 group-hover:text-emerald-700">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
                <p className="mt-4 text-sm font-bold text-emerald-700">{p.link} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXCHANGE PICKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Exchange reviews</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Most-read comparisons</h2>
            </div>
            <Link href="/exchanges/best-crypto-exchanges" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
              Full comparison →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {EXCHANGE_PICKS.map((e) => (
              <Link
                key={e.name}
                href={e.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Updated {e.updated}</p>
                <h3 className="mt-2 text-lg font-black text-slate-950 group-hover:text-emerald-700">{e.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Our standard</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">How we evaluate, in the open</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Security practices, trading fees, liquidity, ease of use, regional availability, and
                transparency, including proof of reserves where published. Rankings are independent
                and updated when material changes occur.
              </p>
              <Link
                href="/methodology"
                className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                Read the full methodology
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Security", desc: "Cold storage, proof of reserves, incident history" },
                { title: "Fees", desc: "Spot and futures effective trading cost" },
                { title: "Usability", desc: "Onboarding, mobile apps, everyday workflows" },
                { title: "Availability", desc: "Regional access, fiat rails, product eligibility" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-black text-emerald-300">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENTLY UPDATED */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Freshness</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Recently updated</h2>
          <p className="mt-3 max-w-3xl text-slate-600">The guides we have reviewed or refreshed most recently.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/crypto-cards/tria-review" className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:shadow-md">
              <p className="text-xs font-bold text-emerald-700">Updated 17 October 2026</p>
              <h3 className="mt-2 font-black text-slate-950 group-hover:text-emerald-700">Tria Card Review</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Self-custodial Visa card, Lite/Pro/Max tiers, real fee tables from the app.</p>
            </Link>
            <Link href="/exchanges/best-crypto-exchanges" className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:shadow-md">
              <p className="text-xs font-bold text-emerald-700">Updated 13 October 2026</p>
              <h3 className="mt-2 font-black text-slate-950 group-hover:text-emerald-700">Best Crypto Exchanges</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Fees, security, liquidity, and who each platform actually suits.</p>
            </Link>
            <Link href="/crypto-cards/reviews" className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:shadow-md">
              <p className="text-xs font-bold text-emerald-700">Updated 17 October 2026</p>
              <h3 className="mt-2 font-black text-slate-950 group-hover:text-emerald-700">Crypto Card Reviews</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">All 7 hands-on reviews in one place, tested on the real apps.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Questions</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Frequently asked</h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                  {f.q}
                  <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-black tracking-tight">Ready to take your first steps?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Start with the card reviews or the global exchange comparison, then drill down into your
            region and wallet plan. Take it slow, keep safety first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/crypto-cards/reviews" className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-400">
              Read the card reviews
            </Link>
            <Link href="/tools/fee-calculator" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20">
              Fee calculator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
