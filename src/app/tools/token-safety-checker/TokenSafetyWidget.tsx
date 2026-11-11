"use client";

import { useEffect, useState } from "react";

type Finding = {
  key: string;
  label: string;
  status: "pass" | "warn" | "fail" | "unknown";
  detail: string;
  explanation: string;
};

type Verdict = "safe" | "caution" | "high-risk" | "unknown";

type CheckResult = {
  address: string;
  chain: string;
  chainLabel: string;
  tokenName: string | null;
  tokenSymbol: string | null;
  verdict: Verdict;
  verdictReason: string;
  findings: Finding[];
  timestamp: string;
  cached: boolean;
  dataSource?: string;
  codex?: { verdict: string; score: number | null; coverage: string | null } | null;
  error?: string;
};

const CODEX_VERDICT_LABELS: Record<string, string> = {
  SCAM: "Proven scam",
  HIGH_RISK: "High risk",
  CAUTION: "Caution",
  NEUTRAL: "Neutral",
  VERIFIED: "Verified",
  VERIFIED_CONTESTED: "Verified, contested",
  UNASSESSED: "Not yet assessed",
};

const CODEX_COVERAGE_LABELS: Record<string, string> = {
  ANALYZED: "Contract analysis complete",
  NOT_ANALYZED: "Contract analysis pending",
  INCONCLUSIVE: "Contract analysis inconclusive",
  STALE: "Contract analysis refreshing",
};

const CHAINS: { id: string; label: string; color: string }[] = [
  { id: "1", label: "Ethereum", color: "#627EEA" },
  { id: "56", label: "BNB Chain", color: "#F0B90B" },
  { id: "137", label: "Polygon", color: "#8247E5" },
  { id: "8453", label: "Base", color: "#0052FF" },
  { id: "42161", label: "Arbitrum", color: "#28A0F0" },
  { id: "10", label: "Optimism", color: "#FF0420" },
  { id: "43114", label: "Avalanche", color: "#E84142" },
  { id: "324", label: "zkSync Era", color: "#8C8DFC" },
  { id: "59144", label: "Linea", color: "#61DFFF" },
  { id: "534352", label: "Scroll", color: "#D97706" },
  { id: "81457", label: "Blast", color: "#CA8A04" },
  { id: "169", label: "Manta Pacific", color: "#0093DD" },
  { id: "146", label: "Sonic", color: "#475569" },
  { id: "80094", label: "Berachain", color: "#8B5CF6" },
  { id: "480", label: "World Chain", color: "#0F172A" },
  { id: "1868", label: "Soneium", color: "#3B82F6" },
  { id: "130", label: "Unichain", color: "#FF007A" },
  { id: "5000", label: "Mantle", color: "#65B3AE" },
  { id: "204", label: "opBNB", color: "#EAB308" },
  { id: "25", label: "Cronos", color: "#1D4ED8" },
  { id: "100", label: "Gnosis", color: "#059669" },
  { id: "321", label: "KCC", color: "#10B981" },
  { id: "solana", label: "Solana", color: "#9945FF" },
  { id: "tron", label: "Tron", color: "#FF0013" },
];

const VERDICT_META: Record<Verdict, { label: string; hero: string; badge: string; meter: string; marker: string }> = {
  safe: {
    label: "No red flags",
    hero: "from-emerald-600 via-emerald-700 to-teal-800",
    badge: "bg-white text-emerald-900",
    meter: "left-[8%]",
    marker: "bg-emerald-300 ring-emerald-100",
  },
  caution: {
    label: "Caution",
    hero: "from-amber-500 via-amber-600 to-orange-700",
    badge: "bg-white text-amber-900",
    meter: "left-[50%]",
    marker: "bg-amber-300 ring-amber-100",
  },
  "high-risk": {
    label: "High risk",
    hero: "from-red-600 via-red-700 to-rose-900",
    badge: "bg-white text-red-900",
    meter: "left-[92%]",
    marker: "bg-red-300 ring-red-100",
  },
  unknown: {
    label: "Unknown",
    hero: "from-slate-600 via-slate-700 to-slate-900",
    badge: "bg-white text-slate-800",
    meter: "left-[50%]",
    marker: "bg-slate-300 ring-slate-100",
  },
};

const EXAMPLES: { label: string; chain: string; address: string }[] = [
  { label: "BONK · Solana", chain: "solana", address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263" },
  { label: "PEPE · Ethereum", chain: "1", address: "0x6982508145454ce325ddbe47a25d4ec3d2311933" },
  { label: "USDC · Ethereum", chain: "1", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
];

const SCAN_STEPS = [
  "Contacting Codex risk engine...",
  "Reading holder distribution...",
  "Running contract checks on GoPlus...",
  "Checking taxes, mint and ownership...",
  "Scoring the results...",
];

function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.9 4.6-2.3 8-5.9 8-10.9V5.5L12 2Z" />
      <path d="m9 11.5 2.2 2.2L15.5 9.5" />
    </svg>
  );
}

function StatusIcon({ status }: { status: Finding["status"] }) {
  const wrap = "flex h-10 w-10 shrink-0 items-center justify-center rounded-full";
  if (status === "pass")
    return (
      <span className={`${wrap} bg-emerald-100 text-emerald-700`} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </span>
    );
  if (status === "warn")
    return (
      <span className={`${wrap} bg-amber-100 text-amber-700`} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M12 3 2.8 20h18.4L12 3Z" />
          <path d="M12 9.5v4.5" />
          <path d="M12 17.2h.01" />
        </svg>
      </span>
    );
  if (status === "fail")
    return (
      <span className={`${wrap} bg-red-100 text-red-700`} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-5 w-5">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </span>
    );
  return (
    <span className={`${wrap} bg-slate-100 text-slate-500`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4" />
        <path d="M12 17.5h.01" />
      </svg>
    </span>
  );
}

function scoreBand(score: number): { label: string; color: string } {
  if (score <= 0) return { label: "Minimal measured risk", color: "#34d399" };
  if (score < 40) return { label: "Low measured risk", color: "#a3e635" };
  if (score < 70) return { label: "Elevated risk", color: "#fbbf24" };
  return { label: "Severe risk", color: "#f87171" };
}

function ScoreGauge({ score }: { score: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const clamped = Math.max(0, Math.min(100, score));
  const band = scoreBand(clamped);
  const R = 52;
  const C = 2 * Math.PI * R;
  const offset = mounted ? C - (clamped / 100) * C : C;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={band.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black leading-none text-white">{Math.round(clamped)}</span>
          <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">of 100</span>
        </div>
      </div>
      <p className="mt-2 text-center text-xs font-black uppercase tracking-[0.14em]" style={{ color: band.color }}>
        {band.label}
      </p>
      <p className="mt-1 text-center text-[11px] font-bold text-white/60">Codex risk score</p>
    </div>
  );
}

function RiskMeter({ verdict }: { verdict: Verdict }) {
  const meta = VERDICT_META[verdict];
  return (
    <div className="mt-6">
      <div className="relative h-3 overflow-visible rounded-full bg-white/20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500" />
        <div className={`absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ${meta.meter} ${meta.marker}`} />
      </div>
      <div className="mt-3 flex justify-between text-[11px] font-black uppercase tracking-[0.14em] text-white/70">
        <span>Safe</span>
        <span>Caution</span>
        <span>High risk</span>
      </div>
    </div>
  );
}

const FINDING_GROUPS: { status: Finding["status"]; title: string; blurb: string; headClass: string; cardClass: string }[] = [
  { status: "fail", title: "Red flags", blurb: "Checks this token failed. Treat these seriously.", headClass: "text-red-800", cardClass: "border-red-200 bg-red-50/60" },
  { status: "warn", title: "Warnings", blurb: "Not proof of a scam, but each one raises the stakes.", headClass: "text-amber-800", cardClass: "border-amber-200 bg-amber-50/60" },
  { status: "pass", title: "Passed checks", blurb: "What came back clean.", headClass: "text-emerald-800", cardClass: "border-slate-200 bg-white" },
  { status: "unknown", title: "Could not check", blurb: "The scanners returned no data for these.", headClass: "text-slate-600", cardClass: "border-slate-200 bg-white" },
];

export default function TokenSafetyWidget() {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("1");
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedChain = CHAINS.find((c) => c.id === chain) ?? CHAINS[0];

  useEffect(() => {
    if (!loading) return;
    setScanStep(0);
    const id = setInterval(() => setScanStep((s) => Math.min(s + 1, SCAN_STEPS.length - 1)), 1400);
    return () => clearInterval(id);
  }, [loading]);

  async function scan(addr: string, chainId: string) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/token-safety?address=${encodeURIComponent(addr)}&chain=${chainId}`);
      const data = (await res.json()) as CheckResult & { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Could not reach the scanner. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    await scan(trimmed, chain);
  }

  function runExample(ex: (typeof EXAMPLES)[number]) {
    setAddress(ex.address);
    setChain(ex.chain);
    void scan(ex.address, ex.chain);
  }

  const meta = result ? VERDICT_META[result.verdict] : null;
  const passCount = result?.findings.filter((f) => f.status === "pass").length ?? 0;
  const warnCount = result?.findings.filter((f) => f.status === "warn").length ?? 0;
  const failCount = result?.findings.filter((f) => f.status === "fail").length ?? 0;
  const totalChecks = result?.findings.length ?? 0;
  const top10Finding = result?.findings.find((f) => f.key === "codex-top10");
  const taxFinding = result?.findings.find((f) => f.key === "tax");

  return (
    <div>
      <form
        onSubmit={runCheck}
        className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
      >
        <div className="border-b border-slate-100 bg-slate-950 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <ShieldIcon />
            </span>
            <div>
              <p className="font-black text-white">Scan a token contract</p>
              <p className="text-xs text-slate-400">Pick the network, paste the address, get a verdict.</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-black text-slate-900">Blockchain</p>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Blockchain">
            {CHAINS.map((c) => {
              const active = c.id === chain;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setChain(c.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-black transition ${
                    active
                      ? "border-slate-900 bg-slate-950 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} aria-hidden="true" />
                  {c.label}
                </button>
              );
            })}
          </div>

          <label htmlFor="token-address" className="mt-6 block text-sm font-black text-slate-900">
            Token contract address
          </label>
          <input
            id="token-address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={chain === "solana" ? "e.g. EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" : chain === "tron" ? "e.g. TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" : "0xdac17f958d2ee523a2206206994597c13d831ec7"}
            spellCheck={false}
            autoComplete="off"
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3.5 font-mono text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button
            type="submit"
            disabled={loading || !address.trim()}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 text-sm font-black text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Scanning contract...
              </>
            ) : (
              <>
                <ShieldIcon className="h-4 w-4" />
                Check token safety
              </>
            )}
          </button>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Try an example:</span>
            {EXAMPLES.map((ex) => (
              <button
                key={ex.label}
                type="button"
                disabled={loading}
                onClick={() => runExample(ex)}
                className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-black text-indigo-800 transition hover:bg-indigo-100 disabled:opacity-50"
              >
                {ex.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            Copy the contract address from a block explorer, not from a social media post. Scammers post fake addresses.
          </p>
        </div>
      </form>

      {loading && (
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 sm:p-8" aria-live="polite">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            <p className="font-black text-white">{SCAN_STEPS[scanStep]}</p>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400 transition-all duration-700"
              style={{ width: `${((scanStep + 1) / SCAN_STEPS.length) * 100}%` }}
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Codex risk engine", "Holder distribution", "GoPlus contract checks"].map((label, i) => (
              <div key={label} className={`rounded-xl border px-4 py-3 text-xs font-black ${scanStep >= i ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/5 text-slate-400"}`}>
                {label}
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 p-6">
          <p className="font-black text-red-900">Could not run the check</p>
          <p className="mt-2 text-sm leading-7 text-red-800">{error}</p>
        </div>
      )}

      {result && meta && (
        <div className="mt-6 overflow-hidden rounded-[1.5rem] shadow-lg">
          <div className={`relative bg-gradient-to-br px-6 py-8 sm:px-10 sm:py-10 ${meta.hero}`}>
            <ShieldIcon className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-white/10" />
            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div className="min-w-0 max-w-2xl flex-1">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                  Scan result · {result.chainLabel}
                  {result.cached ? " · cached scan" : " · live scan"}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <span className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xl font-black shadow ${meta.badge}`}>
                    <ShieldIcon className="h-6 w-6" />
                    {meta.label}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {result.tokenName ?? "Unknown token"}
                  {result.tokenSymbol && <span className="text-white/70"> ({result.tokenSymbol})</span>}
                </h2>
                <p className="mt-2 break-all font-mono text-xs text-white/60">{result.address}</p>
                <p className="mt-4 text-base font-bold leading-8 text-white/90">{result.verdictReason}</p>

                {result.codex && (
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-black">
                    <span className="rounded-full bg-black/30 px-3 py-1.5 text-white">
                      Codex verdict: {CODEX_VERDICT_LABELS[result.codex.verdict] ?? result.codex.verdict}
                    </span>
                    {result.codex.coverage && CODEX_COVERAGE_LABELS[result.codex.coverage] && (
                      <span className="rounded-full bg-black/30 px-3 py-1.5 text-white/80">
                        {CODEX_COVERAGE_LABELS[result.codex.coverage]}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {result.codex && result.codex.score !== null && (
                <div className="shrink-0 rounded-3xl bg-black/25 px-5 py-4">
                  <ScoreGauge score={result.codex.score} />
                </div>
              )}
            </div>

            <div className="relative">
              {result.verdict !== "unknown" && <RiskMeter verdict={result.verdict} />}
            </div>
          </div>

          {totalChecks > 0 && (
            <div className="grid grid-cols-2 gap-px bg-slate-200 lg:grid-cols-5">
              <div className="bg-white px-5 py-4">
                <p className="text-2xl font-black text-emerald-700">
                  {passCount}
                  <span className="text-base text-slate-400">/{totalChecks}</span>
                </p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Checks passed</p>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-2xl font-black text-amber-600">{warnCount}</p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Warnings</p>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-2xl font-black text-red-600">{failCount}</p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Red flags</p>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="truncate text-2xl font-black text-slate-900">{top10Finding ? top10Finding.detail.replace("The top 10 wallets hold ", "").replace(" of the supply", "") : "n/a"}</p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Top 10 holders own</p>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="truncate text-2xl font-black text-slate-900">{taxFinding ? taxFinding.detail : "n/a"}</p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Buy / sell tax</p>
              </div>
            </div>
          )}

          {result.findings.length > 0 && (
            <div className="space-y-8 bg-slate-50 p-6 sm:p-8">
              {FINDING_GROUPS.map((group) => {
                const items = result.findings.filter((f) => f.status === group.status);
                if (items.length === 0) return null;
                return (
                  <section key={group.status}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className={`text-lg font-black ${group.headClass}`}>
                        {group.title} · {items.length}
                      </h3>
                      <p className="text-xs font-bold text-slate-500">{group.blurb}</p>
                    </div>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      {items.map((f) => (
                        <article key={f.key} className={`rounded-2xl border p-5 shadow-sm ${group.cardClass}`}>
                          <div className="flex items-start gap-3">
                            <StatusIcon status={f.status} />
                            <div className="min-w-0">
                              <p className="font-black text-slate-900">{f.label}</p>
                              <p className="mt-0.5 text-sm font-bold text-slate-700">{f.detail}</p>
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{f.explanation}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          <div className="border-t border-slate-200 bg-white px-6 py-4 sm:px-10">
            <p className="text-xs leading-6 text-slate-500">
              Scanned {new Date(result.timestamp).toLocaleString()} on {selectedChain.label} · Data by{" "}
              {result.dataSource ?? "GoPlus Security"}. A clean scan means no obvious red flags were found, not
              that the token is safe. Always do your own research.
            </p>
            {result.codex && (
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Want the full picture? Read our{" "}
                <a href="/tools/defined-fi-review" className="font-bold text-indigo-700">
                  Defined.fi review
                </a>{" "}
                or open this token on{" "}
                <a
                  href="https://go.cryptosbeginner.com/DefinedFi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700"
                >
                  Defined.fi
                </a>{" "}
                (affiliate link) for live charts, holders and trades.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
