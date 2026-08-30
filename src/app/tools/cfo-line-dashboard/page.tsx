import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCfoLineDashboardData, type AssetCFO } from "@/lib/anny-cfo-line";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-28";

export const metadata: Metadata = {
  title:
    "CFO Line Dashboard – Crypto Regime Map (Accumulate, Wait, Distribute)",
  description:
    "See which crypto assets are in Accumulate, Wait or Distribute according to the CFO Line indicator. Educational, not financial advice.",
  keywords:
    "CFO Line, crypto regime map, Accumulate Wait Distribute, crypto indicator, Bitcoin, Ethereum, Solana, crypto signals, Anny Trade",
  authors: [{ name: "Crypto's Beginner" }],
  alternates: {
    canonical: `${SITE_URL}/tools/cfo-line-dashboard`,
  },
  openGraph: {
    title: "CFO Line Dashboard – Crypto Regime Map",
    description:
      "Crypto regime map: Accumulate, Wait and Distribute states for BTC, ETH, SOL and more.",
    url: `${SITE_URL}/tools/cfo-line-dashboard`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-cfo-line-dashboard.jpg`,
        width: 1200,
        height: 630,
        alt: "CFO Line Dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFO Line Dashboard – Crypto Regime Map",
    description:
      "Crypto regime map: Accumulate, Wait and Distribute states for BTC, ETH, SOL and more.",
    images: [`${SITE_URL}/og-cfo-line-dashboard.jpg`],
  },
};

function stateColor(state: AssetCFO["state"]) {
  if (state === "Accumulate") return "bg-emerald-100 text-emerald-800";
  if (state === "Wait") return "bg-amber-100 text-amber-800";
  return "bg-rose-100 text-rose-800";
}

function stateLabel(state: AssetCFO["state"]) {
  if (state === "Accumulate") return "Strength";
  if (state === "Wait") return "Neutral";
  return "Weakness";
}

export default async function CFOLineDashboardPage() {
  const assets = await getCfoLineDashboardData();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: `${SITE_URL}/tools`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CFO Line Dashboard",
          item: `${SITE_URL}/tools/cfo-line-dashboard`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "CFO Line Dashboard",
      description:
        "Crypto regime map using the CFO Line indicator: Accumulate, Wait and Distribute states.",
      url: `${SITE_URL}/tools/cfo-line-dashboard`,
      inLanguage: "en",
      dateModified: UPDATED,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the CFO Line?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The CFO Line is a trend and momentum indicator that labels each asset as Accumulate, Wait or Distribute.",
          },
        },
        {
          "@type": "Question",
          name: "Does Accumulate mean buy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Accumulate means the indicator sees strength. It is not a direct buy signal.",
          },
        },
        {
          "@type": "Question",
          name: "Is this financial advice?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This dashboard is educational only and not financial, legal or tax advice.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-300">
              Tools · Dashboard
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              CFO Line Dashboard
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A regime map for crypto. The CFO Line labels each asset as
              Accumulate, Wait or Distribute based on trend and momentum.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Data from the Anny Trade API (guest endpoint). Rate-limited for
              unauthenticated calls; if limits are hit, you may see demo data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900">Accumulate</p>
              <p className="mt-2 text-sm leading-6 text-emerald-950">
                Trend and momentum are aligned to the upside. Not a buy signal,
                but a strength regime.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">Wait</p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Mixed signals. Trend and momentum disagree or are flat.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-bold text-rose-900">Distribute</p>
              <p className="mt-2 text-sm leading-6 text-rose-950">
                Trend and momentum are aligned to the downside. A weakness
                regime, not a direct sell instruction.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
            Regime map
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            CFO Line states for major assets
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Real-time(ish) data from Anny Trade. Each row shows the current
            state, when it started, recent flips and a confidence level.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Asset
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    CFO Line state
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Since
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Recent flips
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Confidence
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {assets.map((asset) => (
                  <tr key={asset.symbol} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={asset.logoUrl}
                          alt={`${asset.name} logo`}
                          width={28}
                          height={28}
                          className="h-7 w-7"
                        />
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {asset.symbol}
                          </p>
                          <p className="text-xs text-slate-500">{asset.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${stateColor(
                          asset.state
                        )}`}
                      >
                        {asset.state} · {stateLabel(asset.state)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {asset.since}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      <ul className="space-y-1">
                        {asset.flips.length === 0 ? (
                          <li>No flips recorded</li>
                        ) : (
                          asset.flips.map((f, i) => (
                            <li key={i}>
                              {f.date}: {f.from} → {f.to}
                            </li>
                          ))
                        )}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {asset.confidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              How to read this dashboard
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <strong>Accumulate</strong> does not mean “buy now”. It means
                the indicator sees strength.
              </li>
              <li>
                <strong>Wait</strong> means mixed signals. Many assets spend
                most of their time here.
              </li>
              <li>
                <strong>Distribute</strong> means weakness, not necessarily an
                immediate crash.
              </li>
              <li>
                Use this as context, not as a trading signal. Combine with your
                own risk rules and time horizon.
              </li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              Data is provided by the Anny Trade API. Guest calls are
              rate-limited; if limits are hit, the page falls back to demo
              data so it always renders.
            </p>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              Educational tool only. Not financial, legal or tax advice. The
              CFO Line is an indicator, not a guarantee. Past behaviour does
              not predict future results.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
