import { Metadata } from "next";
import Link from "next/link";
import { getMarketDashboardData } from "@/lib/crypto-market-dashboard";

export const metadata: Metadata = {
  title: "Crypto Market Regime Dashboard (CFO Line + Market Data)",
  description:
    "Live crypto market regime dashboard combining CoinGecko price, market cap, volume, and 24h/7d changes with Anny Trade CFO Line states for BTC, ETH, SOL, BNB, and XRP.",
  openGraph: {
    title: "Crypto Market Regime Dashboard (CFO Line + Market Data)",
    description:
      "Live crypto market regime dashboard combining CoinGecko price, market cap, volume, and 24h/7d changes with Anny Trade CFO Line states for BTC, ETH, SOL, BNB, and XRP.",
    type: "website",
  },
  twitter: {
    title: "Crypto Market Regime Dashboard (CFO Line + Market Data)",
    description:
      "Live crypto market regime dashboard combining CoinGecko price, market cap, volume, and 24h/7d changes with Anny Trade CFO Line states for BTC, ETH, SOL, BNB, and XRP.",
  },
};

function formatNumber(n: number) {
  if (!isFinite(n)) return "—";
  if (Math.abs(n) >= 1e12) return (n / 1e12).toFixed(2) + "T";
  if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(2) + "B";
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(2) + "K";
  return n.toFixed(2);
}

function formatPercent(n: number | null) {
  if (n === null || !isFinite(n)) return "—";
  const sign = n > 0 ? "+" : "";
  return sign + n.toFixed(2) + "%";
}

function cfoLabel(state: string) {
  switch (state) {
    case "accumulate":
      return "Accumulate";
    case "distribute":
      return "Distribute";
    default:
      return "Wait";
  }
}

function cfoColor(state: string) {
  switch (state) {
    case "accumulate":
      return "text-emerald-400";
    case "distribute":
      return "text-rose-400";
    default:
      return "text-amber-400";
  }
}

function cfoBg(state: string) {
  switch (state) {
    case "accumulate":
      return "bg-emerald-500/10 border-emerald-500/30";
    case "distribute":
      return "bg-rose-500/10 border-rose-500/30";
    default:
      return "bg-amber-500/10 border-amber-500/30";
  }
}

export default async function CfoLineDashboardPage() {
  let assets = await getMarketDashboardData().catch(() => []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs (inline, no custom component) */}
        <nav className="mb-6 text-xs text-slate-400" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-200">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-slate-200">
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-200">CFO Dashboard</li>
          </ol>
        </nav>

        <section className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Crypto Market Regime Dashboard
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Live overview combining CoinGecko market data with Anny Trade CFO
            Line states for BTC, ETH, SOL, BNB, and XRP. Use this as a
            high-level regime map, not as trading advice.
          </p>
        </section>

        {/* Mobile cards */}
        <section className="mb-10 grid gap-4 sm:hidden">
          {assets.length === 0 && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              Market data unavailable at the moment.
            </div>
          )}
          {assets.map((a) => (
            <div
              key={a.id}
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {a.image ? (
                    <img
                      src={a.image}
                      alt={`${a.name} icon`}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold">
                      {a.symbol[0]}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold">{a.name}</div>
                    <div className="text-xs text-slate-400">{a.symbol}</div>
                  </div>
                </div>
                <div
                  className={`rounded-md border px-2 py-1 text-xs font-medium ${cfoBg(
                    a.cfo?.state ?? "wait"
                  )} ${cfoColor(a.cfo?.state ?? "wait")}`}
                >
                  {cfoLabel(a.cfo?.state ?? "wait")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-slate-400">Price</div>
                  <div className="font-medium">
                    ${formatNumber(a.priceUsd)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">24h</div>
                  <div className="font-medium">
                    {formatPercent(a.change24h)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">7d</div>
                  <div className="font-medium">
                    {formatPercent(a.change7d)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">Market cap</div>
                  <div className="font-medium">
                    ${formatNumber(a.marketCapUsd)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">Volume (24h)</div>
                  <div className="font-medium">
                    ${formatNumber(a.volume24hUsd)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">Rank</div>
                  <div className="font-medium">
                    {a.rank ? `#${a.rank}` : "—"}
                  </div>
                </div>
              </div>

              {a.cfo && (
                <div className="mt-3 rounded-md border border-slate-800 bg-slate-900/40 p-2 text-xs">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-slate-400">CFO Line</span>
                    <span className={`font-medium ${cfoColor(a.cfo.state)}`}>
                      {cfoLabel(a.cfo.state)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                    <div>
                      Confidence:{" "}
                      <span className="text-slate-200">
                        {(a.cfo.confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div>
                      Regime start:{" "}
                      <span className="text-slate-200">
                        {new Date(a.cfo.regimeStart).toLocaleString()}
                      </span>
                    </div>
                    <div className="col-span-2">
                      Latest flip:{" "}
                      <span className="text-slate-200">
                        {new Date(a.cfo.latestFlip).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Desktop table */}
        <section className="hidden sm:block">
          {assets.length === 0 && (
            <div className="mb-6 rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              Market data unavailable at the moment.
            </div>
          )}
          {assets.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/60">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-slate-800 text-xs uppercase text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Asset</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">24h</th>
                    <th className="px-4 py-3">7d</th>
                    <th className="px-4 py-3">Market cap</th>
                    <th className="px-4 py-3">Volume (24h)</th>
                    <th className="px-4 py-3">Rank</th>
                    <th className="px-4 py-3">CFO Line</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((a) => (
                    <tr
                      key={a.id}
                      className="border-b border-slate-800/60 last:border-b-0"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {a.image ? (
                            <img
                              src={a.image}
                              alt={`${a.name} icon`}
                              className="h-7 w-7 rounded-full"
                            />
                          ) : (
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold">
                              {a.symbol[0]}
                            </div>
                          )}
                          <div>
                            <div className="font-medium">{a.name}</div>
                            <div className="text-xs text-slate-400">
                              {a.symbol}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-medium">
                        ${formatNumber(a.priceUsd)}
                      </td>
                      <td className="px-4 py-3">
                        {formatPercent(a.change24h)}
                      </td>
                      <td className="px-4 py-3">
                        {formatPercent(a.change7d)}
                      </td>
                      <td className="px-4 py-3">
                        ${formatNumber(a.marketCapUsd)}
                      </td>
                      <td className="px-4 py-3">
                        ${formatNumber(a.volume24hUsd)}
                      </td>
                      <td className="px-4 py-3">
                        {a.rank ? `#${a.rank}` : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {a.cfo ? (
                          <div className="flex items-center gap-2">
                            <span
                              className={`rounded-md border px-2 py-0.5 text-xs font-medium ${cfoBg(
                                a.cfo.state
                              )} ${cfoColor(a.cfo.state)}`}
                            >
                              {cfoLabel(a.cfo.state)}
                            </span>
                            <span className="text-xs text-slate-400">
                              {(a.cfo.confidence * 100).toFixed(0)}%
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Context */}
        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="mb-2 text-lg font-semibold">How to read this</h2>
            <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-slate-300">
              <li>
                <strong>Accumulate:</strong> CFO Line suggests net buying
                pressure and potential accumulation behavior.
              </li>
              <li>
                <strong>Wait:</strong> Mixed signals or transitional regime;
                often choppy price action.
              </li>
              <li>
                <strong>Distribute:</strong> CFO Line suggests net selling
                pressure and potential distribution behavior.
              </li>
              <li>
                Always combine with your own analysis, risk management, and
                time horizon.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="mb-2 text-lg font-semibold">Data sources</h2>
            <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-slate-300">
              <li>
                Price, 24h/7d change, market cap, volume, and rank from{" "}
                <a
                  href="https://www.coingecko.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  CoinGecko
                </a>
                .
              </li>
              <li>
                CFO Line state, confidence, and flip timestamps from{" "}
                <a
                  href="https://anny.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Anny Trade
                </a>
                .
              </li>
              <li>
                Data is cached for up to 5 minutes and may lag during API
                outages or rate limits.
              </li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-8">
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs leading-relaxed text-slate-400">
              This dashboard is for informational purposes only and is not
              financial advice. Crypto markets are highly volatile. Always do
              your own research and manage your risk carefully.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
