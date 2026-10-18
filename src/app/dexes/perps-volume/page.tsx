import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  fmtPrice,
  fmtUsdCompact,
  getPerpsSnapshot,
} from "./hyperliquid";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/dexes/perps-volume`;

export const metadata: Metadata = {
  title: "Live Perps Volume: Hyperliquid 24h Trading Data | CryptosBeginner",
  description:
    "Live perpetual futures volume on Hyperliquid: 24h volume by market, open interest, funding rates, and price changes, refreshed every few minutes from Hyperliquid's public API.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Live Perps Volume | CryptosBeginner",
    description:
      "Live Hyperliquid perpetuals data: 24h volume, open interest, and funding by market.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Perps Volume | CryptosBeginner",
    description:
      "Live Hyperliquid perpetuals data: 24h volume, open interest, and funding by market.",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 300;

const FAQ = [
  {
    question: "Where does this data come from?",
    answer:
      "Directly from Hyperliquid's public info API (api.hyperliquid.xyz), the same endpoint their own frontend uses. No API key is needed. We cache it for five minutes so the page loads fast and we don't overload their servers.",
  },
  {
    question: "What is 24h notional volume?",
    answer:
      "The total dollar value of perpetual contracts traded in the last 24 hours for each market. It counts both sides of every trade at the traded price, so it is larger than the actual money deposited (open interest).",
  },
  {
    question: "Why track perps volume?",
    answer:
      "Volume shows where traders actually are. Deep volume usually means tighter spreads and less slippage. A market with high open interest but thin volume can be harder to exit cleanly. Beginners should prefer the most liquid markets.",
  },
  {
    question: "Does high volume mean a market is safe?",
    answer:
      "No. Volume measures activity, not safety. Perpetuals use leverage, and liquidations can cascade in volatile markets. Volume tells you about liquidity; it says nothing about direction or risk.",
  },
];

function changePct(markPx: number, prevDayPx: number): number | null {
  if (!prevDayPx) return null;
  return ((markPx - prevDayPx) / prevDayPx) * 100;
}

export default async function PerpsVolumePage() {
  const snap = await getPerpsSnapshot();
  const top = snap.markets.slice(0, 20);
  const updated = new Date(snap.fetchedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
    hour12: false,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "Live Perps Volume: Hyperliquid 24h Trading Data",
                description: metadata.description,
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "DEXes", item: `${SITE_URL}/dexes` },
                  { "@type": "ListItem", position: 3, name: "Live Perps Volume", item: PAGE_URL },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                url: PAGE_URL,
                mainEntity: FAQ.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              },
            ],
          }),
        }}
      />
      <Header />
      <main className="bg-white">
        <section className="overflow-hidden bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">
              On-chain data · refreshed every 5 minutes
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Live perpetuals volume
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Where perps traders actually are, right now. Live 24-hour volume,
              open interest, and funding across Hyperliquid perpetual markets,
              straight from their public API.
            </p>
            <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black text-lime-300">
                  {snap.stale ? "—" : fmtUsdCompact(snap.totalDayVolumeUsd)}
                </p>
                <p className="mt-1 text-sm text-slate-300">24h total volume</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black text-lime-300">
                  {snap.stale ? "—" : snap.markets.length}
                </p>
                <p className="mt-1 text-sm text-slate-300">perps markets tracked</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black text-lime-300">
                  {snap.stale ? "—" : fmtUsdCompact(top.reduce((s, m) => s + m.openInterestUsd, 0))}
                </p>
                <p className="mt-1 text-sm text-slate-300">open interest (top 20)</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              {snap.stale
                ? "Live data is temporarily unavailable. Showing cached structure; please refresh in a few minutes."
                : `Last updated ${updated} UTC. Data: Hyperliquid public API.`}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {snap.stale || top.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-base font-bold text-slate-900">
                Could not reach the live feed
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Hyperliquid&apos;s public API did not respond in time. This is
                usually temporary. The page retries automatically every five
                minutes; nothing on your end is broken.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[820px] border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-950 text-left">
                    {["#", "Market", "Price", "24h %", "24h volume", "Open interest", "Funding (1h)", "Max lev."].map(
                      (h, i) => (
                        <th
                          key={h}
                          className={`px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-300 ${i >= 2 ? "text-right" : ""}`}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {top.map((m, i) => {
                    const chg = changePct(m.markPx, m.prevDayPx);
                    return (
                      <tr
                        key={m.asset}
                        className="border-b border-slate-100 transition hover:bg-lime-50/60"
                      >
                        <td className="px-4 py-3 text-sm font-black text-slate-400">
                          {i + 1}
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm font-black text-slate-900">
                            {m.asset}
                          </span>
                          <span className="text-xs text-slate-400">-PERP</span>
                        </td>
                        <td className="px-4 py-3 text-right text-sm font-bold text-slate-800">
                          ${fmtPrice(m.markPx)}
                        </td>
                        <td
                          className={`px-4 py-3 text-right text-sm font-bold ${chg === null ? "text-slate-400" : chg >= 0 ? "text-emerald-600" : "text-rose-600"}`}
                        >
                          {chg === null ? "—" : `${chg >= 0 ? "+" : ""}${chg.toFixed(2)}%`}
                        </td>
                        <td className="px-4 py-3 text-right text-sm font-bold text-slate-800">
                          {fmtUsdCompact(m.dayNtlVlm)}
                        </td>
                        <td className="px-4 py-3 text-right text-sm text-slate-600">
                          {fmtUsdCompact(m.openInterestUsd)}
                        </td>
                        <td className="px-4 py-3 text-right text-sm text-slate-600">
                          {(m.funding * 100).toFixed(4)}%
                        </td>
                        <td className="px-4 py-3 text-right text-sm text-slate-600">
                          {m.maxLeverage ? `${m.maxLeverage}x` : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-slate-500">
            Top 20 markets by 24h notional volume. Funding shown as the most
            recent hourly rate; positive funding means longs pay shorts.
          </p>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-3xl border border-indigo-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">
                  Trade where the volume is
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  Compare perps venues before you trade
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Our DEX directory compares perps platforms on fees, networks,
                  and access model, with source-backed listings instead of hype.
                </p>
              </div>
              <Link
                href="/dexes"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-slate-800"
              >
                Browse the DEX directory
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Reading the numbers
          </h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
            {FAQ.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950">
                  {item.question}
                  <span className="float-right text-indigo-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-500">
            Educational market data only, not trading advice. Perpetual futures
            use leverage and can liquidate your position. Figures refresh every
            five minutes from Hyperliquid&apos;s public API; brief gaps during
            API outages are normal.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
