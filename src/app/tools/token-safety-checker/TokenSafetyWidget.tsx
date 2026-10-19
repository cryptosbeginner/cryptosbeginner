"use client";

import { useState } from "react";

type Finding = {
  key: string;
  label: string;
  status: "pass" | "warn" | "fail" | "unknown";
  detail: string;
  explanation: string;
};

type CheckResult = {
  address: string;
  chain: string;
  chainLabel: string;
  tokenName: string | null;
  tokenSymbol: string | null;
  verdict: "safe" | "caution" | "high-risk" | "unknown";
  verdictReason: string;
  findings: Finding[];
  timestamp: string;
  cached: boolean;
  error?: string;
};

const CHAINS = [
  { id: "1", label: "Ethereum" },
  { id: "56", label: "BNB Chain" },
  { id: "137", label: "Polygon" },
  { id: "8453", label: "Base" },
  { id: "42161", label: "Arbitrum" },
  { id: "10", label: "Optimism" },
  { id: "43114", label: "Avalanche" },
  { id: "1399811149", label: "Solana" },
];

const VERDICT_STYLE: Record<CheckResult["verdict"], { bg: string; ring: string; text: string; label: string }> = {
  safe: { bg: "bg-emerald-50", ring: "ring-emerald-300", text: "text-emerald-900", label: "No red flags" },
  caution: { bg: "bg-amber-50", ring: "ring-amber-300", text: "text-amber-900", label: "Caution" },
  "high-risk": { bg: "bg-red-50", ring: "ring-red-300", text: "text-red-900", label: "High risk" },
  unknown: { bg: "bg-slate-100", ring: "ring-slate-300", text: "text-slate-700", label: "Unknown" },
};

const FINDING_STYLE: Record<Finding["status"], { dot: string; badge: string; label: string }> = {
  pass: { dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", label: "OK" },
  warn: { dot: "bg-amber-500", badge: "bg-amber-100 text-amber-800", label: "Warning" },
  fail: { dot: "bg-red-500", badge: "bg-red-100 text-red-800", label: "Failed" },
  unknown: { dot: "bg-slate-400", badge: "bg-slate-200 text-slate-700", label: "No data" },
};

export default function TokenSafetyWidget() {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("1");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const verdict = result ? VERDICT_STYLE[result.verdict] : null;

  return (
    <div>
      <form onSubmit={runCheck} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <label htmlFor="token-address" className="text-sm font-black text-slate-900">
          Token contract address
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="token-address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0xdac17f958d2ee523a2206206994597c13d831ec7"
            spellCheck={false}
            autoComplete="off"
            className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 font-mono text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <select
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            aria-label="Blockchain"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 focus:border-indigo-500 focus:outline-none"
          >
            {CHAINS.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={loading || !address.trim()}
          className="mt-4 w-full rounded-xl bg-indigo-700 px-6 py-3.5 text-sm font-black text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {loading ? "Scanning contract..." : "Check token safety"}
        </button>
        <p className="mt-3 text-xs leading-6 text-slate-500">
          Paste the token contract address from a block explorer, not from a social media post. Scammers post fake addresses.
        </p>
      </form>

      {error && (
        <div className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 p-6">
          <p className="font-black text-red-900">Could not run the check</p>
          <p className="mt-2 text-sm leading-7 text-red-800">{error}</p>
        </div>
      )}

      {result && verdict && (
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
          <div className={`border-b border-slate-200 px-6 py-6 sm:px-8 ${verdict.bg}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full px-4 py-1.5 text-sm font-black ring-2 ${verdict.ring} ${verdict.text} bg-white`}>
                {verdict.label}
              </span>
              <div>
                <p className="text-lg font-black text-slate-950">
                  {result.tokenName ?? "Unknown token"}{result.tokenSymbol ? ` (${result.tokenSymbol})` : ""}
                </p>
                <p className="font-mono text-xs text-slate-500">{result.address} · {result.chainLabel}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">{result.verdictReason}</p>
          </div>

          <ul className="divide-y divide-slate-100">
            {result.findings.map((f) => {
              const style = FINDING_STYLE[f.status];
              return (
                <li key={f.key} className="px-6 py-5 sm:px-8">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${style.dot}`} aria-hidden="true" />
                    <p className="font-black text-slate-900">{f.label}</p>
                    <span className={`ml-auto shrink-0 rounded-full px-2.5 py-0.5 text-xs font-black ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-bold text-slate-700">{f.detail}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{f.explanation}</p>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 sm:px-8">
            <p className="text-xs leading-6 text-slate-500">
              Scanned {new Date(result.timestamp).toLocaleString()} · Data by{" "}
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
