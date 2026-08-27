import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_PATH = "/tools/cfo-line-dashboard";
const UPDATED = "2026-08-27";

const ANNYPAY_BASE = "https://api.annytrade.com";

export const metadata: Metadata = {
  title:
    "CFO Line Dashboard – Crypto Regime Map (Accumulate, Wait, Distribute)",
  description:
    "See which major crypto assets are in Accumulate, Wait or Distribute according to the CFO Line indicator. Educational, not financial advice.",
  keywords:
    "CFO Line, crypto regime map, Accumulate Wait Distribute, Bitcoin indicator, Ethereum indicator, Solana indicator, crypto trend, crypto momentum, Anny Trade",
  authors: [{ name: "Crypto's Beginner" }],
  creator: "Crypto's Beginner",
  publisher: "Crypto's Beginner",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "CFO Line Dashboard – Crypto Regime Map",
    description:
      "Live CFO Line states for BTC, ETH, SOL and more: Accumulate, Wait and Distribute regimes.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "en_US",
    siteName: "Crypto's Beginner",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFO Line Dashboard – Crypto Regime Map",
    description:
      "Live CFO Line states for BTC, ETH, SOL and more: Accumulate, Wait and Distribute regimes.",
    creator: "@cryptosbeginner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type AssetState = "Accumulate" | "Wait" | "Distribute";

type AssetCFO = {
  symbol: string;
  name: string;
  state: AssetState;
  since: string;
  flips: { from: AssetState; to: AssetState; date: string }[];
  confidence: "Low" | "Medium" | "High" | "Very High";
  logoUrl?: string;
};

function stateColor(state: AssetState) {
  if (state === "Accumulate") return "bg-emerald-100 text-emerald-800";
  if (state === "Wait") return "bg-amber-100 text-amber-800";
  return "bg-rose-100 text-rose-800";
}

function stateLabel(state: AssetState) {
  if (state === "Accumulate") return "Strength";
  if (state === "Wait") return "Neutral";
  return "Weakness";
}

async function getCFOLineAssets(): Promise<AssetCFO[]> {
  try {
    const res = await fetch(`${ANNYPAY_BASE}/cfo-line/assets`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("CFO Line fetch failed");
    const data = await res.json();

    return (data as any[]).map((a) => ({
      symbol: a.symbol,
      name: a.name,
      state: a.state as AssetState,
      since: a.since,
      flips: (a.flips || []).map((f: any) => ({
        from: f.from as AssetState,
        to: f.to as AssetState,
        date: f.date,
      })),
      confidence: (a.confidence || "Medium") as AssetCFO["confidence"],
      logoUrl: a.logoUrl,
    }));
  } catch {
    return [
      {
        symbol: "BTC",
        name: "Bitcoin",
        state: "Accumulate",
        since: "2026-08-10",
        flips: [
          { from: "Wait", to: "Accumulate", date: "2026-08-10" },
          { from: "Distribute", to: "Wait", date: "2026-07-22" },
        ],
        confidence: "High",
        logoUrl: "/logos/btc.svg",
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        state: "Wait",
        since: "2026-08-18",
        flips: [
          { from: "Accumulate", to: "Wait", date: "2026-08-18" },
          { from: "Wait", to: "Accumulate", date: "2026-07-30" },
        ],
        confidence: "Medium",
        logoUrl: "/logos/eth.svg",
      },
      {
        symbol: "SOL",
        name: "Solana",
        state: "Distribute",
        since: "2026-08-20",
        flips: [
          { from: "Wait", to: "Distribute", date: "2026-08-20" },
          { from: "Accumulate", to: "Wait", date: "2026-08-05" },
        ],
        confidence: "Low",
        logoUrl: "/logos/sol.svg",
      },
    ];
  }
}

export default async function CFOLineDashboardPage() {
  const assets = await getCFOLineAssets();

  const faq = [
    {
      question:
        "What is the CFO Line indicator and how should I use it?",
      answer:
        "The CFO Line is a trend and momentum indicator that labels each asset as Accumulate, Wait or Distribute. It is designed to show regime (strength vs weakness), not to give direct buy or sell signals.",
    },
    {
      question:
        "What do Accumulate, Wait and Distribute mean?",
      answer:
        "Accumulate means trend and momentum are aligned to the upside (strength regime). Wait means mixed or flat signals. Distribute means trend and momentum are aligned to the downside (weakness regime).",
    },
    {
      question:
        "Is the CFO Line Dashboard financial advice?",
      answer:
        "No. This dashboard is educational and informational only. It is not financial, legal or tax advice. Always combine any indicator with your own risk rules and time horizon.",
    },
  ];

  const breadcrumbs = [
    { "@type": "ListItem" as const, position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem" as const,
      position: 2,
      name: "Tools",
      item: `${SITE_URL}/tools`,
    },
    {
      "@type": "ListItem" as const,
      position: 3,
      name: "CFO Line Dashboard",
      item: `${SITE_URL}${PAGE_PATH}`,
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "CFO Line Dashboard – Crypto Regime Map",
      description:
        "Live CFO Line states for major crypto assets: Accumulate, Wait and Distribute regimes.",
      url: `${SITE_URL}${PAGE_PATH}`,
      inLanguage: "en",
      dateModified: UPDATED,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-cfo-line.jpg`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question" as const,
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: f.answer,
        },
      })),
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
              Tools · Live
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              CFO Line Dashboard
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A regime map for crypto. The CFO Line labels each asset as
              Accumulate, Wait or Distribute based on trend and momentum.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Data from the Anny Trade API. Educational, not financial advice.
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
            Each row shows the current CFO Line state, how long it has been
            active, recent flips and a confidence score.
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
                        {asset.logoUrl ? (
                          <Image
                            src={asset.logoUrl}
                            alt={`${asset.name} logo`}
                            width={28}
                            height={28}
                            className="h-7 w-7 rounded-full"
                          />
                        ) : (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
                            {asset.symbol.slice(0, 1)}
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {asset.symbol}
                          </p>
                          <p className="text-xs text-slate-500">
                            {asset.name}
                          </p>
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
                        {asset.flips.map((f, i) => (
                          <li key={i}>
                            {f.date}: {f.from} → {f.to}
                          </li>
                        ))}
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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-6">
              {faq.map((f, i) => (
                <div key={i}>
                  <p className="text-base font-bold text-slate-900">
                    {f.question}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
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
