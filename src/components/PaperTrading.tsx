"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "cb-paper-trading-v1";
const STARTING_BALANCE_USD = 10000;
const REFRESH_MS = 20000;
const SIM_FEE = 0.01; // 1% simulated fee + slippage per fill
const MAX_EQUITY_POINTS = 240;
const ADDRESS_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

type Fill = {
  id: string;
  ts: number;
  side: "buy" | "sell";
  mint: string;
  symbol: string;
  priceUsd: number;
  usdGross: number;
  tokenAmount: number;
};

type Position = {
  mint: string;
  symbol: string;
  name: string;
  tokenAmount: number;
  avgEntryUsd: number;
  lastPriceUsd: number;
};

type Account = {
  balanceUsd: number;
  realizedPnlUsd: number;
  positions: Position[];
  fills: Fill[];
  equity: { ts: number; value: number }[];
  createdAt: number;
};

type Quote = {
  mint: string;
  symbol: string;
  name: string;
  priceUsd: number;
  change24h: number | null;
  liquidityUsd: number | null;
  fdv: number | null;
  pairUrl: string;
  fetchedAt: number;
};

type QuoteState = "idle" | "loading" | "ready" | "notfound" | "error";

function freshAccount(): Account {
  return {
    balanceUsd: STARTING_BALANCE_USD,
    realizedPnlUsd: 0,
    positions: [],
    fills: [],
    equity: [{ ts: Date.now(), value: STARTING_BALANCE_USD }],
    createdAt: Date.now(),
  };
}

function loadAccount(): Account {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshAccount();
    const parsed = JSON.parse(raw) as Account;
    if (typeof parsed.balanceUsd !== "number" || !Array.isArray(parsed.positions)) return freshAccount();
    return { ...freshAccount(), ...parsed };
  } catch {
    return freshAccount();
  }
}

function fmtUsd(n: number): string {
  if (!isFinite(n)) return "-";
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

function fmtPrice(n: number): string {
  if (!isFinite(n) || n <= 0) return "-";
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (n >= 1) return n.toFixed(4);
  if (n >= 0.01) return n.toFixed(6);
  return n.toPrecision(3);
}

function fmtTokens(n: number): string {
  if (!isFinite(n) || n <= 0) return "0";
  if (n >= 1000000) return `${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 1 });
  if (n >= 1) return n.toFixed(2);
  return n.toPrecision(3);
}

function fmtPct(n: number | null): string {
  if (n === null || !isFinite(n)) return "-";
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

function timeAgo(ts: number): string {
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

async function fetchQuote(mint: string): Promise<Quote> {
  const res = await fetch(`https://api.dexscreener.com/tokens/v1/solana/${mint}`);
  if (!res.ok) throw new Error("feed");
  const pairs = (await res.json()) as Array<any>;
  if (!Array.isArray(pairs) || pairs.length === 0) throw new Error("notfound");
  const best = pairs.reduce((a, b) =>
    Number(b?.liquidity?.usd || 0) > Number(a?.liquidity?.usd || 0) ? b : a
  );
  const priceUsd = Number(best.priceUsd);
  if (!isFinite(priceUsd) || priceUsd <= 0) throw new Error("noprice");
  return {
    mint,
    symbol: String(best?.baseToken?.symbol || "???"),
    name: String(best?.baseToken?.name || "Unknown token"),
    priceUsd,
    change24h: best?.priceChange?.h24 != null ? Number(best.priceChange.h24) : null,
    liquidityUsd: best?.liquidity?.usd != null ? Number(best.liquidity.usd) : null,
    fdv: best?.fdv != null ? Number(best.fdv) : null,
    pairUrl: String(best?.url || `https://dexscreener.com/solana/${mint}`),
    fetchedAt: Date.now(),
  };
}

function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function PaperTrading() {
  const [account, setAccount] = useState<Account | null>(null);
  const [mintInput, setMintInput] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoteState, setQuoteState] = useState<QuoteState>("idle");
  const [stale, setStale] = useState(false);
  const [buyAmount, setBuyAmount] = useState("100");
  const [sellPct, setSellPct] = useState(100);
  const [notice, setNotice] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [now, setNow] = useState(Date.now());
  const accountRef = useRef<Account | null>(null);
  const quoteRef = useRef<Quote | null>(null);

  useEffect(() => {
    const acct = loadAccount();
    setAccount(acct);
    accountRef.current = acct;
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (account) {
      accountRef.current = account;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(account));
      } catch {
        // storage full or unavailable; the session still works in memory
      }
    }
  }, [account]);

  const pushEquity = useCallback((acct: Account, equityValue: number): Account => {
    const equity = [...acct.equity, { ts: Date.now(), value: equityValue }].slice(-MAX_EQUITY_POINTS);
    return { ...acct, equity };
  }, []);

  const equityOf = useCallback((acct: Account): number => {
    const posValue = acct.positions.reduce((s, p) => s + p.tokenAmount * p.lastPriceUsd, 0);
    return acct.balanceUsd + posValue;
  }, []);

  const loadToken = useCallback(async (mint: string) => {
    const clean = mint.trim();
    if (!ADDRESS_RE.test(clean)) {
      setQuoteState("error");
      setNotice({ kind: "err", text: "That does not look like a Solana mint address. Paste the full token address." });
      return;
    }
    setQuoteState("loading");
    setNotice(null);
    try {
      const q = await fetchQuote(clean);
      setQuote(q);
      quoteRef.current = q;
      setQuoteState("ready");
      setStale(false);
      setAccount((prev) => {
        if (!prev) return prev;
        const positions = prev.positions.map((p) =>
          p.mint === q.mint ? { ...p, lastPriceUsd: q.priceUsd, symbol: q.symbol, name: q.name } : p
        );
        const next = { ...prev, positions };
        return pushEquity(next, equityOf(next));
      });
    } catch (e) {
      setQuoteState(e instanceof Error && e.message === "notfound" ? "notfound" : "error");
      setNotice({
        kind: "err",
        text:
          e instanceof Error && e.message === "notfound"
            ? "No market data found for that address on Solana. Check the mint and try again."
            : "Price feed unreachable. Trading is paused until a live quote loads.",
      });
    }
  }, [equityOf, pushEquity]);

  const refreshQuote = useCallback(async () => {
    const q = quoteRef.current;
    if (!q) return;
    try {
      const fresh = await fetchQuote(q.mint);
      setQuote(fresh);
      quoteRef.current = fresh;
      setStale(false);
      setAccount((prev) => {
        if (!prev) return prev;
        const positions = prev.positions.map((p) =>
          p.mint === fresh.mint ? { ...p, lastPriceUsd: fresh.priceUsd } : p
        );
        const next = { ...prev, positions };
        return pushEquity(next, equityOf(next));
      });
    } catch {
      setStale(true);
    }
  }, [equityOf, pushEquity]);

  useEffect(() => {
    if (quoteState !== "ready") return;
    const t = setInterval(() => {
      if (!document.hidden) void refreshQuote();
    }, REFRESH_MS);
    return () => clearInterval(t);
  }, [quoteState, refreshQuote]);

  const doBuy = useCallback(() => {
    const q = quoteRef.current;
    const acct = accountRef.current;
    if (!q || !acct || stale) {
      setNotice({ kind: "err", text: "Need a live quote before filling. Refresh the price and try again." });
      return;
    }
    const usd = Number(buyAmount);
    if (!isFinite(usd) || usd <= 0) {
      setNotice({ kind: "err", text: "Enter a buy amount above $0." });
      return;
    }
    if (usd > acct.balanceUsd) {
      setNotice({ kind: "err", text: `Insufficient paper balance. You have ${fmtUsd(acct.balanceUsd)}.` });
      return;
    }
    const tokens = (usd * (1 - SIM_FEE)) / q.priceUsd;
    const existing = acct.positions.find((p) => p.mint === q.mint);
    const totalCost = (existing ? existing.avgEntryUsd * existing.tokenAmount : 0) + usd;
    const totalTokens = (existing ? existing.tokenAmount : 0) + tokens;
    const position: Position = {
      mint: q.mint,
      symbol: q.symbol,
      name: q.name,
      tokenAmount: totalTokens,
      avgEntryUsd: totalCost / totalTokens,
      lastPriceUsd: q.priceUsd,
    };
    const positions = existing
      ? acct.positions.map((p) => (p.mint === q.mint ? position : p))
      : [...acct.positions, position];
    const fill: Fill = {
      id: uid(), ts: Date.now(), side: "buy", mint: q.mint, symbol: q.symbol,
      priceUsd: q.priceUsd, usdGross: usd, tokenAmount: tokens,
    };
    const next: Account = { ...acct, balanceUsd: acct.balanceUsd - usd, positions, fills: [fill, ...acct.fills].slice(0, 200) };
    setAccount(pushEquity(next, equityOf(next)));
    setNotice({ kind: "ok", text: `Paper bought ${fmtTokens(tokens)} ${q.symbol} at $${fmtPrice(q.priceUsd)} (1% simulated fee applied).` });
  }, [buyAmount, stale, equityOf, pushEquity]);

  const doSell = useCallback(() => {
    const q = quoteRef.current;
    const acct = accountRef.current;
    if (!q || !acct || stale) {
      setNotice({ kind: "err", text: "Need a live quote before filling. Refresh the price and try again." });
      return;
    }
    const pos = acct.positions.find((p) => p.mint === q.mint);
    if (!pos || pos.tokenAmount <= 0) {
      setNotice({ kind: "err", text: `No open ${q.symbol} position to sell.` });
      return;
    }
    const tokensToSell = (pos.tokenAmount * sellPct) / 100;
    if (tokensToSell <= 0) {
      setNotice({ kind: "err", text: "Sell percentage must be above 0." });
      return;
    }
    const proceeds = tokensToSell * q.priceUsd * (1 - SIM_FEE);
    const costBasis = tokensToSell * pos.avgEntryUsd;
    const realized = proceeds - costBasis;
    const remaining = pos.tokenAmount - tokensToSell;
    const positions =
      remaining <= 1e-12
        ? acct.positions.filter((p) => p.mint !== q.mint)
        : acct.positions.map((p) => (p.mint === q.mint ? { ...p, tokenAmount: remaining, lastPriceUsd: q.priceUsd } : p));
    const fill: Fill = {
      id: uid(), ts: Date.now(), side: "sell", mint: q.mint, symbol: q.symbol,
      priceUsd: q.priceUsd, usdGross: tokensToSell * q.priceUsd, tokenAmount: tokensToSell,
    };
    const next: Account = {
      ...acct,
      balanceUsd: acct.balanceUsd + proceeds,
      realizedPnlUsd: acct.realizedPnlUsd + realized,
      positions,
      fills: [fill, ...acct.fills].slice(0, 200),
    };
    setAccount(pushEquity(next, equityOf(next)));
    setNotice({
      kind: "ok",
      text: `Paper sold ${fmtTokens(tokensToSell)} ${q.symbol} for ${fmtUsd(proceeds)}. Realized ${realized >= 0 ? "+" : ""}${fmtUsd(realized)}.`,
    });
  }, [sellPct, stale, equityOf, pushEquity]);

  const resetAccount = useCallback(() => {
    if (!window.confirm("Reset your paper account to $10,000 and clear all positions and history?")) return;
    const acct = freshAccount();
    setAccount(acct);
    setNotice({ kind: "ok", text: "Paper account reset to $10,000." });
  }, []);

  const summary = useMemo(() => {
    if (!account) return null;
    const equity = equityOf(account);
    const posValue = account.positions.reduce((s, p) => s + p.tokenAmount * p.lastPriceUsd, 0);
    const totalPnl = equity - STARTING_BALANCE_USD;
    const unrealized = account.positions.reduce(
      (s, p) => s + p.tokenAmount * (p.lastPriceUsd - p.avgEntryUsd),
      0
    );
    return { equity, posValue, totalPnl, unrealized };
  }, [account, equityOf, now]);

  const spark = useMemo(() => {
    if (!account || account.equity.length < 2) return null;
    const pts = account.equity;
    const vals = pts.map((p) => p.value);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    const W = 300;
    const H = 80;
    const coords = pts.map((p, i) => {
      const x = (i / (pts.length - 1)) * W;
      const y = H - 6 - ((p.value - min) / span) * (H - 12);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    const up = vals[vals.length - 1] >= vals[0];
    return { coords: coords.join(" "), up };
  }, [account]);

  const canTrade = quoteState === "ready" && !stale;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900">
        <span className="font-black uppercase tracking-[0.14em]">Paper mode</span> · Fake money only.
        Prices are indicative quotes from a public feed, delayed and throttled. Nothing here is a real
        order and nothing is financial advice.
      </div>

      {notice && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
            notice.kind === "ok"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          {notice.text}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6" aria-label="Token lookup">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Step 1 · Find a token</p>
            <h2 className="mt-2 text-xl font-black">Load a Solana memecoin quote</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="paper-mint" className="sr-only">Solana token mint address</label>
              <input
                id="paper-mint"
                value={mintInput}
                onChange={(e) => setMintInput(e.target.value)}
                placeholder="Paste a Solana mint address"
                spellCheck={false}
                className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-xs outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
              <button
                type="button"
                onClick={() => void loadToken(mintInput)}
                disabled={quoteState === "loading"}
                className="shrink-0 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-fuchsia-700 disabled:opacity-50"
              >
                {quoteState === "loading" ? "Loading..." : "Load quote"}
              </button>
            </div>
            {quoteState === "ready" && quote && (
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-lg font-black text-slate-950">
                    {quote.symbol} <span className="text-sm font-bold text-slate-500">{quote.name}</span>
                  </p>
                  <p className="text-xl font-black text-slate-950">${fmtPrice(quote.priceUsd)}</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
                  <span>24h: <span className={`font-black ${(quote.change24h ?? 0) >= 0 ? "text-emerald-700" : "text-red-700"}`}>{fmtPct(quote.change24h)}</span></span>
                  {quote.liquidityUsd != null && <span>Liquidity: <span className="font-black">{fmtUsd(quote.liquidityUsd)}</span></span>}
                  {quote.fdv != null && <span>FDV: <span className="font-black">{fmtUsd(quote.fdv)}</span></span>}
                  <span className={stale ? "font-black text-red-700" : "text-slate-500"}>
                    {stale ? "Quote stale, refresh needed" : `Updated ${timeAgo(quote.fetchedAt)}`}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => void refreshQuote()}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-black text-slate-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
                  >
                    Refresh price
                  </button>
                  <a
                    href={quote.pairUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-black text-slate-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
                  >
                    View on Dexscreener ↗
                  </a>
                </div>
              </div>
            )}
          </section>

          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6" aria-label="Paper trade ticket">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Step 2 · Paper trade</p>
            <h2 className="mt-2 text-xl font-black">Buy and sell with fake money</h2>
            {!canTrade && (
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Load a token quote above to unlock the ticket. Fills only happen against a live quote.
              </p>
            )}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                <label htmlFor="paper-buy-amount" className="text-xs font-black uppercase tracking-[0.14em] text-emerald-800">Buy amount (USD)</label>
                <input
                  id="paper-buy-amount"
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                  inputMode="decimal"
                  disabled={!canTrade}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 disabled:opacity-50"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {["10", "50", "100", "500"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      disabled={!canTrade}
                      onClick={() => setBuyAmount(v)}
                      className="rounded-lg border border-emerald-300 bg-white px-3 py-1.5 text-xs font-black text-emerald-800 hover:bg-emerald-100 disabled:opacity-50"
                    >
                      ${v}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={doBuy}
                  disabled={!canTrade}
                  className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  Paper buy
                </button>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-red-800">Sell position</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[25, 50, 75, 100].map((v) => (
                    <button
                      key={v}
                      type="button"
                      disabled={!canTrade}
                      onClick={() => setSellPct(v)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-black disabled:opacity-50 ${
                        sellPct === v
                          ? "border-red-600 bg-red-600 text-white"
                          : "border-red-300 bg-white text-red-800 hover:bg-red-100"
                      }`}
                    >
                      {v}%
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  Sells {sellPct}% of your {quote?.symbol ?? "token"} position at the live quote.
                </p>
                <button
                  type="button"
                  onClick={doSell}
                  disabled={!canTrade}
                  className="mt-3 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition hover:bg-red-700 disabled:opacity-50"
                >
                  Paper sell {sellPct}%
                </button>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-slate-500">
              Each fill includes a 1% simulated fee and slippage, so results stay closer to real trading costs.
            </p>
          </section>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6" aria-label="Paper account">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Paper account</p>
              <button
                type="button"
                onClick={resetAccount}
                className="text-xs font-black text-slate-400 underline hover:text-red-600"
              >
                Reset
              </button>
            </div>
            {summary && (
              <>
                <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{fmtUsd(summary.equity)}</p>
                <p className={`mt-1 text-sm font-black ${summary.totalPnl >= 0 ? "text-emerald-700" : "text-red-700"}`}>
                  {summary.totalPnl >= 0 ? "+" : ""}{fmtUsd(summary.totalPnl)} total
                </p>
                {spark && (
                  <svg viewBox="0 0 300 80" className="mt-3 h-20 w-full" role="img" aria-label="Paper equity curve">
                    <polyline
                      points={spark.coords}
                      fill="none"
                      stroke={spark.up ? "#059669" : "#dc2626"}
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500">Cash</dt><dd className="font-black">{fmtUsd(account?.balanceUsd ?? 0)}</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">In positions</dt><dd className="font-black">{fmtUsd(summary.posValue)}</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Unrealized PnL</dt><dd className={`font-black ${summary.unrealized >= 0 ? "text-emerald-700" : "text-red-700"}`}>{summary.unrealized >= 0 ? "+" : ""}{fmtUsd(summary.unrealized)}</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Realized PnL</dt><dd className={`font-black ${(account?.realizedPnlUsd ?? 0) >= 0 ? "text-emerald-700" : "text-red-700"}`}>{(account?.realizedPnlUsd ?? 0) >= 0 ? "+" : ""}{fmtUsd(account?.realizedPnlUsd ?? 0)}</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Fills</dt><dd className="font-black">{account?.fills.length ?? 0}</dd></div>
                </dl>
              </>
            )}
          </section>

          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6" aria-label="Open positions">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Open positions</p>
            {!account || account.positions.length === 0 ? (
              <p className="mt-3 text-sm leading-7 text-slate-500">No open positions. Load a token and place a paper buy.</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {account.positions.map((p) => {
                  const pnl = p.tokenAmount * (p.lastPriceUsd - p.avgEntryUsd);
                  return (
                    <li key={p.mint} className="rounded-2xl bg-slate-50 p-3">
                      <div className="flex items-baseline justify-between">
                        <p className="font-black text-slate-950">{p.symbol}</p>
                        <p className={`text-sm font-black ${pnl >= 0 ? "text-emerald-700" : "text-red-700"}`}>
                          {pnl >= 0 ? "+" : ""}{fmtUsd(pnl)}
                        </p>
                      </div>
                      <p className="mt-1 font-mono text-xs text-slate-600">{fmtTokens(p.tokenAmount)} tokens</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Avg entry ${fmtPrice(p.avgEntryUsd)} · Last ${fmtPrice(p.lastPriceUsd)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </div>

      <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6" aria-label="Trade history">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Trade history</p>
        {!account || account.fills.length === 0 ? (
          <p className="mt-3 text-sm leading-7 text-slate-500">No fills yet. Your paper trades will appear here with timestamps.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-slate-400">
                  <th className="pb-2 pr-4 font-black">Side</th>
                  <th className="pb-2 pr-4 font-black">Token</th>
                  <th className="pb-2 pr-4 font-black">Price</th>
                  <th className="pb-2 pr-4 font-black">Tokens</th>
                  <th className="pb-2 pr-4 font-black">USD</th>
                  <th className="pb-2 font-black">Time</th>
                </tr>
              </thead>
              <tbody>
                {account.fills.slice(0, 20).map((f) => (
                  <tr key={f.id} className="border-t border-slate-100">
                    <td className={`py-2 pr-4 font-black ${f.side === "buy" ? "text-emerald-700" : "text-red-700"}`}>
                      {f.side.toUpperCase()}
                    </td>
                    <td className="py-2 pr-4 font-bold">{f.symbol}</td>
                    <td className="py-2 pr-4 font-mono text-xs">${fmtPrice(f.priceUsd)}</td>
                    <td className="py-2 pr-4 font-mono text-xs">{fmtTokens(f.tokenAmount)}</td>
                    <td className="py-2 pr-4 font-mono text-xs">{fmtUsd(f.usdGross)}</td>
                    <td className="py-2 text-xs text-slate-500">{new Date(f.ts).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-3 text-[11px] leading-5 text-slate-500">
          Stored only in this browser. Clearing site data wipes your paper account.
        </p>
      </section>
    </div>
  );
}
