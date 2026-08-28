import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { platforms, reviewedDate } from "../content";
import { CollectionJsonLd } from "../SeoJsonLd";

export const metadata = {
  title: "Meme Coin Platforms: Trading Terminals vs Launchpads | CryptosBeginner",
  description: "Compare meme-coin trading terminals, social discovery tools, and token launchpads by workflow, fees, chain, custody, and risk checks.",
  alternates: { canonical: "https://www.cryptosbeginner.com/meme-coins/platforms" },
  openGraph: {
    title: "Meme Coin Platforms: Trading Terminals vs Launchpads",
    description: "A practical directory of meme-coin terminals, launchpads, and discovery tools with source-backed limitations and fee notes.",
    url: "https://www.cryptosbeginner.com/meme-coins/platforms",
    type: "website",
  },
};

function PlatformCard({ platform }: { platform: (typeof platforms)[number] }) {
  const label = platform.category === "launchpad" ? "Launchpad" : platform.category === "comparison" ? "Comparison" : "Trading terminal";
  return <article className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-indigo-950">{label}</span><span className="text-xs font-bold text-slate-700">{platform.role}</span></div>
    <h2 className="mt-4 text-2xl font-black text-slate-950">{platform.name}</h2>
    <p className="mt-3 leading-7 text-slate-800">{platform.summary}</p>
    <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5"><div><p className="text-xs font-black uppercase tracking-wide text-slate-700">Cost question</p><p className="mt-1 text-sm leading-6 text-slate-800">{platform.fee}</p></div><div><p className="text-xs font-black uppercase tracking-wide text-slate-700">Risk question</p><p className="mt-1 text-sm leading-6 text-slate-800">{platform.caution}</p></div></div>
    <Link href={`/meme-coins/reviews/${platform.slug}`} className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-indigo-700">Read the {platform.name} profile →</Link>
  </article>;
}

export default function PlatformsPage() {
  const terminals = platforms.filter((platform) => platform.category === "terminal");
  const launchpads = platforms.filter((platform) => platform.category === "launchpad");
  const comparisons = platforms.filter((platform) => platform.category === "comparison");
  return <><CollectionJsonLd title="Meme Coin Platforms" description="Compare meme-coin trading terminals, launchpads, and discovery workflows." path="/meme-coins/platforms" items={platforms.map((p) => ({ name: p.name, path: `/meme-coins/reviews/${p.slug}` }))} /><Header /><main><section className="border-b border-slate-200 bg-slate-50"><div className="mx-auto max-w-5xl px-4 py-12 sm:px-6"><p className="text-sm font-bold text-indigo-800">Meme coins · Platform directory · {reviewedDate}</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Meme Coin Platforms: Terminals, Launchpads, and Discovery Tools</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-800">A trading terminal helps you research, monitor, and execute transactions. A launchpad helps creators deploy or bootstrap tokens. A social or comparison surface helps you find ideas. These functions can overlap, but a terminal is not a token audit and a launchpad is not proof of demand.</p></div></section><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6"><section><div className="mb-5"><h2 className="text-3xl font-black text-slate-950">Trading terminals and research workspaces</h2><p className="mt-2 max-w-3xl text-slate-800">These products organize charts, wallet activity, holder data, alerts, order controls, and repeatable settings. They can improve workflow speed without removing contract, liquidity, custody, or execution risk.</p></div><div className="grid gap-5 md:grid-cols-2">{terminals.map((platform) => <PlatformCard key={platform.slug} platform={platform} />)}</div></section><section className="mt-14"><div className="mb-5"><h2 className="text-3xl font-black text-slate-950">Meme-coin launchpads</h2><p className="mt-2 max-w-3xl text-slate-800">Launchpads reduce the technical steps required to create or discover tokens. Review the chain, contract, creator controls, bonding-curve or graduation rules, liquidity path, and current fee schedule before using one.</p></div><div className="grid gap-5 md:grid-cols-2">{launchpads.map((platform) => <PlatformCard key={platform.slug} platform={platform} />)}</div></section><section className="mt-14"><div className="mb-5"><h2 className="text-3xl font-black text-slate-950">Comparisons and social discovery</h2><p className="mt-2 max-w-3xl text-slate-800">These pages compare feed-driven discovery and quick-trading workflows. Treat leaderboards, displayed P&amp;L, and social proof as inputs for research—not recommendations.</p></div><div className="grid gap-5 md:grid-cols-2">{comparisons.map((platform) => <PlatformCard key={platform.slug} platform={platform} />)}</div></section><section className="mt-14 rounded-2xl border border-amber-300 bg-amber-100 p-6"><h2 className="text-2xl font-black text-slate-950">A useful separation for beginners</h2><p className="mt-2 leading-7 text-slate-900">Before opening a link, ask what job the product performs. A terminal may help you inspect and route a trade; a launchpad may create the market in which a token first appears. Neither one independently proves that the token is legitimate, liquid, or suitable for you.</p><Link href="/meme-coins/guides/token-verification" className="mt-4 inline-flex font-black text-indigo-900 hover:underline">Read the token-verification checklist →</Link></section></div></main><Footer /></>;
}
