import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-research`;

export const metadata: Metadata = {
  title: "Crypto Research Tools: Prices, Wallets & Market Context",
  description: "Use CryptosBeginner’s market, wallet, and on-chain research tools to compare crypto data with timestamps, provider labels, and transparent limitations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Research Tools: Prices, Wallets & Market Context",
    description: "A clear starting point for crypto market scans, public-wallet research, and token context without signal theatre.",
    url: PAGE_URL,
    type: "website",
  },
};

const tools = [
  { eyebrow: "Market board", title: "Live crypto prices", description: "Scan prices, rank, volume, and recent changes with a visible provider and checked timestamp.", href: "/crypto-prices", accent: "from-cyan-500 to-blue-600", tag: "CoinStats first" },
  { eyebrow: "Filter view", title: "Market screener", description: "Narrow the same market snapshot by momentum, rank, volume, and positive or watchlist status.", href: "/crypto-screener", accent: "from-violet-500 to-fuchsia-600", tag: "Research filters" },
  { eyebrow: "Read-only", title: "Wallet tracker", description: "Review a public address on one selected network without submitting keys or connecting a wallet.", href: "/wallet-tracker", accent: "from-fuchsia-500 to-rose-500", tag: "Explicit lookup" },
  { eyebrow: "Observation", title: "Public-wallet board", description: "Save neutral address labels locally and move into a deliberate read-only lookup when you are ready.", href: "/public-wallets", accent: "from-amber-400 to-orange-500", tag: "Local only" },
  { eyebrow: "Research guide", title: "Meme-token context", description: "Work through liquidity, holder concentration, contract permissions, and timeline questions before treating a chart as a story.", href: "/meme-coin-research", accent: "from-emerald-400 to-teal-500", tag: "Risk checklist" },
  { eyebrow: "Meme coin hub", title: "Meme Coins directory", description: "Compare launchpads, trading terminals, social discovery tools, fee layers, screenshots, and beginner workflows.", href: "/meme-coins", accent: "from-fuchsia-500 to-violet-600", tag: "Platform directory" },
  { eyebrow: "Browser demo", title: "Wallet alerts", description: "Draft local price and wallet rules. Production notifications require authenticated background jobs and durable storage.", href: "/wallet-alerts", accent: "from-slate-500 to-slate-800", tag: "Prototype" },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is CryptosBeginner’s research suite?", acceptedAnswer: { "@type": "Answer", text: "It is a connected set of market, screener, public-wallet, wallet, alert, and token-context tools that present descriptive data with provider labels, timestamps, and limitations." } },
    { "@type": "Question", name: "Does a market filter identify a good investment?", acceptedAnswer: { "@type": "Answer", text: "No. A filter reorganizes a provider snapshot. It does not establish suitability, future performance, liquidity under stress, or smart-contract safety." } },
    { "@type": "Question", name: "Are wallet lookups private?", acceptedAnswer: { "@type": "Answer", text: "A blockchain address is public but can still be a sensitive identifier. The tracker is read-only, uses one selected network, and does not request private keys, seed phrases, or wallet connections." } },
  ],
};

export default function CryptoResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", url: PAGE_URL, name: metadata.title, description: metadata.description, isPartOf: { "@type": "WebSite", name: "CryptosBeginner", url: SITE_URL } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="relative overflow-hidden bg-[#0b0820] text-white">
          <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-[30rem] w-[30rem] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">CryptosBeginner · research desk</p>
              <h1 className="mt-5 text-5xl font-black leading-[.98] tracking-[-0.06em] sm:text-7xl">Price is the headline.<br /><span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">Context is the story.</span></h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">One place to scan market snapshots, compare movement, read public-wallet activity, and slow down before a chart becomes a conclusion. Every tool tells you what it knows, when it was checked, and where the data stops.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/crypto-prices" className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">Open live prices</Link><Link href="/wallet-tracker" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10">Read a public wallet</Link></div>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.08] p-5 backdrop-blur"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">01 · provenance</p><p className="mt-2 text-sm leading-6 text-slate-300">Provider, timestamp, and fallback state stay visible.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.08] p-5 backdrop-blur"><p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-200">02 · restraint</p><p className="mt-2 text-sm leading-6 text-slate-300">Descriptive metrics do not become automatic signals.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.08] p-5 backdrop-blur"><p className="text-xs font-black uppercase tracking-[0.16em] text-amber-200">03 · control</p><p className="mt-2 text-sm leading-6 text-slate-300">Wallet requests are deliberate, scoped, and read-only.</p></div></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Choose your next question</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">A toolkit, not a prediction machine</h2><p className="mt-4 text-base leading-8 text-slate-600">Start with the smallest tool that answers the question in front of you. A price change may need a screener. A wallet label may need an address check. A meme-token chart may need a contract and liquidity review.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <Link key={tool.href} href={tool.href} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/30 transition duration-200 hover:-translate-y-1 hover:border-slate-300"><div className={`h-2 w-20 rounded-full bg-gradient-to-r ${tool.accent}`} /><div className="mt-6 flex items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{tool.eyebrow}</p><h3 className="mt-2 text-xl font-black">{tool.title}</h3></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-slate-600">{tool.tag}</span></div><p className="mt-4 text-sm leading-7 text-slate-600">{tool.description}</p><span className="mt-6 inline-flex text-sm font-black text-fuchsia-700 group-hover:text-fuchsia-900">Open tool <span className="ml-2 transition group-hover:translate-x-1">→</span></span></Link>)}</div></section>
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-7 sm:p-9"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">How to read the suite</p><h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Use the data as evidence, not as a verdict</h2><div className="mt-5 grid gap-5 text-sm leading-7 text-amber-950/80 md:grid-cols-3"><p><strong className="text-amber-950">Snapshot:</strong> price, volume, rank, and wallet balances describe a moment; they do not guarantee an executable quote or a stable market.</p><p><strong className="text-amber-950">Attribution:</strong> provider calculations can differ because coverage, token identity, transaction sync, and time windows differ.</p><p><strong className="text-amber-950">Responsibility:</strong> crypto assets can lose value, become illiquid, or carry technical and regulatory risks. Verify before acting.</p></div></div></section>
      </main>
      <Footer />
    </>
  );
}
