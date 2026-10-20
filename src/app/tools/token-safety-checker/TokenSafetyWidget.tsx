"use client";

import { useState } from "react";

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
  error?: string;
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

export default function TokenSafetyWidget() {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("1");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedChain = CHAINS.find((c) => c.id === chain) ?? CHAINS[0];

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/token-safety?address=${encodeURIComponent(trimmed)}&chain=${chain}`);
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

  const meta = result ? VERDICT_META[result.verdict] : null;
  const passCount = result?.findings.filter((f) => f.status === "pass").length ?? 0;
  const warnCount = result?.findings.filter((f) => f.status === "warn").length ?? 0;
  const failCount = result?.findings.filter((f) => f.status === "fail").length ?? 0;

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
          <p className="mt-3 text-xs leading-6 text-slate-500">
            Copy the contract address from a block explorer, not from a social media post. Scammers post fake addresses.
          </p>
        </div>
      </form>

      {error && (
        <div className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 p-6">
          <p className="font-black text-red-900">Could not run the check</p>
          <p className="mt-2 text-sm leading-7 text-red-800">{error}</p>
        </div>
      )}

      {result && meta && (
        <div className="mt-6 overflow-hidden rounded-[1.5rem] shadow-lg">
          <div className={`bg-gradient-to-br px-6 py-8 sm:px-10 sm:py-10 ${meta.hero}`}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
              Scan result · {result.chainLabel}
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
            <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-white/90">{result.verdictReason}</p>

            {(failCount > 0 || warnCount > 0 || passCount > 0) && (
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-black">
                {failCount > 0 && <span className="rounded-full bg-black/30 px-3 py-1.5 text-red-200">{failCount} failed</span>}
                {warnCount > 0 && <span className="rounded-full bg-black/30 px-3 py-1.5 text-amber-200">{warnCount} warnings</span>}
                {passCount > 0 && <span className="rounded-full bg-black/30 px-3 py-1.5 text-emerald-200">{passCount} passed</span>}
              </div>
            )}

            {result.verdict !== "unknown" && <RiskMeter verdict={result.verdict} />}
          </div>

          {result.findings.length > 0 && (
            <div className="grid gap-4 bg-slate-50 p-6 sm:grid-cols-2 sm:p-8">
              {result.findings.map((f) => (
                <article key={f.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
          )}

          <div className="border-t border-slate-200 bg-white px-6 py-4 sm:px-10">
            <p className="text-xs leading-6 text-slate-500">
              Scanned {new Date(result.timestamp).toLocaleString()} on {selectedChain.label} · Data by{" "}
              <a href="https://gopluslabs.io" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700">
                GoPlus Security
              </a>
              . A clean scan means no obvious red flags were found, not that the token is safe. Always do your own research.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
