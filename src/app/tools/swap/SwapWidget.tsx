"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Currency = {
  ticker: string;
  network: string;
  name: string;
  image?: string;
  hasExtraId?: boolean;
  isAvailableFloat?: boolean;
  isAvailableFixed?: boolean;
  warningsFrom?: string[];
  warningsTo?: string[];
};

type Estimate = {
  estimatedAmount: string;
  rateId?: string | null;
  validUntil?: string | null;
};

type ExchangeResult = {
  id: string;
  type?: string;
  status?: string;
  addressFrom?: string;
  addressTo?: string;
  amountFrom?: string;
  expectedAmount?: string;
  amountTo?: string;
  extraIdFrom?: string;
  txFrom?: string;
  txTo?: string;
  validUntil?: string;
};

const STATUS_STEPS = ["waiting", "confirming", "exchanging", "sending", "finished"] as const;

function statusLabel(status?: string): string {
  switch ((status ?? "").toLowerCase()) {
    case "waiting": return "Waiting for your deposit";
    case "confirming": return "Deposit detected, confirming";
    case "exchanging": return "Exchanging";
    case "sending": return "Sending to your wallet";
    case "finished": return "Finished";
    case "failed": return "Failed";
    case "refunded": return "Refunded";
    case "overdue": return "Overdue";
    case "expired": return "Expired";
    default: return status ?? "Unknown";
  }
}

function currencyKey(c: { ticker: string; network: string }) {
  return `${c.ticker.toLowerCase()}:${c.network.toLowerCase()}`;
}

export default function SwapWidget() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [fromKey, setFromKey] = useState("btc:btc");
  const [toKey, setToKey] = useState("eth:eth");
  const [amount, setAmount] = useState("0.1");
  const [fixed, setFixed] = useState(false);
  const [addressTo, setAddressTo] = useState("");
  const [refundAddress, setRefundAddress] = useState("");

  const [pairs, setPairs] = useState<string[]>([]);
  const [range, setRange] = useState<{ min: string | null; max: string | null } | null>(null);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [estimating, setEstimating] = useState(false);
  const [estimateError, setEstimateError] = useState<string | null>(null);

  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [exchange, setExchange] = useState<ExchangeResult | null>(null);
  const [exchangeStatus, setExchangeStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const estimateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const currencyMap = useMemo(() => {
    const m = new Map<string, Currency>();
    for (const c of currencies) m.set(currencyKey(c), c);
    return m;
  }, [currencies]);

  const fromCur = currencyMap.get(fromKey);
  const toCur = currencyMap.get(toKey);

  // Load currency list
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/swap/currencies");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Could not load currencies");
        const list: Currency[] = Array.isArray(data.result) ? data.result : Array.isArray(data) ? data : [];
        if (!cancelled) {
          setCurrencies(list);
          // Keep defaults only if they exist in the list
          const has = (k: string) => list.some((c) => currencyKey(c) === k);
          if (list.length && !has("btc:btc")) setFromKey(currencyKey(list[0]));
          if (list.length && !has("eth:eth")) {
            const eth = list.find((c) => c.ticker.toLowerCase() === "eth");
            if (eth) setToKey(currencyKey(eth));
          }
        }
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : "Could not load currencies");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Load pairs + ranges when from/to/fixed change
  useEffect(() => {
    if (!fromCur || !toCur) return;
    let cancelled = false;
    (async () => {
      try {
        const [t, n] = fromKey.split(":");
        const pr = await fetch(`/api/swap/pairs?ticker=${t}&network=${n}&fixed=${fixed}`);
        const pd = await pr.json();
        if (!cancelled && pr.ok) {
          const dest = pd.result?.[fromKey] ?? pd.result?.[`${t}:${n}`] ?? [];
          setPairs(Array.isArray(dest) ? dest : []);
        }
        const [tt, tn] = toKey.split(":");
        const rr = await fetch(
          `/api/swap/ranges?tickerFrom=${t}&networkFrom=${n}&tickerTo=${tt}&networkTo=${tn}&fixed=${fixed}`
        );
        const rd = await rr.json();
        if (!cancelled && rr.ok && rd.result) {
          setRange({ min: rd.result.min ?? null, max: rd.result.max ?? null });
        } else if (!cancelled) {
          setRange(null);
        }
      } catch {
        if (!cancelled) setRange(null);
      }
    })();
    return () => { cancelled = true; };
  }, [fromKey, toKey, fixed, fromCur, toCur]);

  const fetchEstimate = useCallback(async () => {
    if (!fromCur || !toCur || !amount || Number(amount) <= 0) {
      setEstimate(null);
      return;
    }
    setEstimating(true);
    setEstimateError(null);
    try {
      const [t, n] = fromKey.split(":");
      const [tt, tn] = toKey.split(":");
      const res = await fetch(
        `/api/swap/estimate?tickerFrom=${t}&networkFrom=${n}&tickerTo=${tt}&networkTo=${tn}&amount=${encodeURIComponent(amount)}&fixed=${fixed}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not get a quote");
      const r = data.result as Estimate | null;
      if (r && r.estimatedAmount) {
        setEstimate(r);
      } else {
        setEstimate(null);
        setEstimateError("No quote available for this pair and amount.");
      }
    } catch (e) {
      setEstimate(null);
      setEstimateError(e instanceof Error ? e.message : "Could not get a quote");
    } finally {
      setEstimating(false);
    }
  }, [fromCur, toCur, amount, fixed, fromKey, toKey]);

  // Debounced estimate
  useEffect(() => {
    if (estimateTimer.current) clearTimeout(estimateTimer.current);
    estimateTimer.current = setTimeout(fetchEstimate, 800);
    return () => { if (estimateTimer.current) clearTimeout(estimateTimer.current); };
  }, [fetchEstimate]);

  const amountOutOfRange = useMemo(() => {
    if (!range || !amount) return null;
    const v = Number(amount);
    if (!Number.isFinite(v)) return "Enter a valid amount.";
    if (range.min !== null && v < Number(range.min)) return `Minimum is ${range.min} ${fromCur?.ticker.toUpperCase()}.`;
    if (range.max !== null && v > Number(range.max)) return `Maximum is ${range.max} ${fromCur?.ticker.toUpperCase()}.`;
    return null;
  }, [range, amount, fromCur]);

  const createExchange = async () => {
    if (!addressTo.trim()) {
      setCreateError("Enter the wallet address that should receive the swapped coins.");
      return;
    }
    if (amountOutOfRange) {
      setCreateError(amountOutOfRange);
      return;
    }
    if (fixed && !estimate?.rateId) {
      setCreateError("The fixed-rate quote expired. Wait for a fresh quote and try again.");
      return;
    }
    setCreating(true);
    setCreateError(null);
    try {
      const [t, n] = fromKey.split(":");
      const [tt, tn] = toKey.split(":");
      const res = await fetch("/api/swap/exchanges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tickerFrom: t,
          networkFrom: n,
          tickerTo: tt,
          networkTo: tn,
          amount,
          addressTo: addressTo.trim(),
          fixed,
          rateId: fixed ? estimate?.rateId : undefined,
          userRefundAddress: refundAddress.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not create the exchange");
      const ex: ExchangeResult = data.result ?? data;
      setExchange(ex);
      setExchangeStatus(ex.status ?? "waiting");
    } catch (e) {
      setCreateError(e instanceof Error ? e.message : "Could not create the exchange");
    } finally {
      setCreating(false);
    }
  };

  // Poll status while exchange is active
  useEffect(() => {
    if (!exchange?.id) return;
    const terminal = ["finished", "failed", "refunded", "overdue", "expired"];
    if (exchangeStatus && terminal.includes(exchangeStatus.toLowerCase())) return;
    pollTimer.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/swap/exchanges/${encodeURIComponent(exchange.id)}`);
        const data = await res.json();
        if (res.ok && data.result?.status) setExchangeStatus(data.result.status);
      } catch { /* keep polling */ }
    }, 15000);
    return () => { if (pollTimer.current) clearInterval(pollTimer.current); };
  }, [exchange?.id, exchangeStatus]);

  const copyDeposit = async () => {
    if (!exchange?.addressFrom) return;
    try {
      await navigator.clipboard.writeText(exchange.addressFrom);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const swapDirection = () => {
    setFromKey(toKey);
    setToKey(fromKey);
    setEstimate(null);
  };

  const activeToOptions = useMemo(() => {
    if (!pairs.length) return currencies;
    const set = new Set(pairs.map((p) => p.toLowerCase()));
    return currencies.filter((c) => set.has(currencyKey(c)));
  }, [currencies, pairs]);

  if (loading) {
    return (
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-bold text-slate-500">Loading swap options…</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-8 text-center">
        <p className="text-sm font-black text-rose-900">The swap service is not available right now.</p>
        <p className="mt-2 text-xs leading-6 text-rose-800">{loadError}</p>
        <a
          href="https://go.cryptosbeginner.com/SimpleSwap"
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          Swap on SimpleSwap instead
        </a>
      </div>
    );
  }

  // Exchange created: show deposit instructions + status
  if (exchange) {
    const stepIndex = STATUS_STEPS.indexOf((exchangeStatus ?? "waiting").toLowerCase() as typeof STATUS_STEPS[number]);
    return (
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Exchange created</p>
          <h2 className="mt-2 text-2xl font-black">Send your deposit to complete the swap</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Send exactly <strong className="text-white">{exchange.amountFrom} {fromCur?.ticker.toUpperCase()}</strong> on the{" "}
            <strong className="text-white">{fromCur?.network.toUpperCase()}</strong> network to the address below.
          </p>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Deposit address</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <code className="flex-1 break-all rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              {exchange.addressFrom ?? "—"}
            </code>
            <button
              type="button"
              onClick={copyDeposit}
              className="shrink-0 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white transition hover:bg-indigo-700"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          {exchange.extraIdFrom && (
            <p className="mt-3 text-xs leading-6 text-slate-600">
              Memo / extra ID required: <code className="rounded bg-slate-100 px-2 py-0.5 font-bold">{exchange.extraIdFrom}</code>
            </p>
          )}
          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Status: {statusLabel(exchangeStatus ?? undefined)}</p>
            <div className="mt-3 flex gap-1.5">
              {STATUS_STEPS.map((s, i) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full ${stepIndex >= 0 && i <= stepIndex ? "bg-emerald-500" : "bg-slate-200"}`}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-bold text-slate-500">
              <span>Waiting</span><span>Confirming</span><span>Exchanging</span><span>Sending</span><span>Finished</span>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">You receive</p>
              <p className="mt-1 font-black text-slate-950">
                {exchange.expectedAmount ?? exchange.amountTo ?? "—"} {toCur?.ticker.toUpperCase()}
              </p>
              <p className="mt-1 break-all text-xs text-slate-500">to {exchange.addressTo}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">Exchange ID</p>
              <p className="mt-1 break-all font-mono text-xs font-bold text-slate-800">{exchange.id}</p>
              <p className="mt-1 text-xs text-slate-500">Save this ID to track your swap.</p>
            </div>
          </div>
          {exchange.txTo && (
            <p className="mt-4 break-all text-xs leading-6 text-slate-600">
              Payout transaction: <code className="rounded bg-slate-100 px-2 py-0.5">{exchange.txTo}</code>
            </p>
          )}
          <button
            type="button"
            onClick={() => { setExchange(null); setExchangeStatus(null); setAddressTo(""); }}
            className="mt-6 text-sm font-bold text-indigo-700 hover:text-indigo-900"
          >
            ← Start a new swap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-[1fr_auto_1fr]">
        <div className="p-6 sm:p-8">
          <label className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            You send
            <select
              value={fromKey}
              onChange={(e) => { setFromKey(e.target.value); setEstimate(null); }}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-900"
            >
              {currencies.map((c) => (
                <option key={currencyKey(c)} value={currencyKey(c)}>
                  {c.name} ({c.ticker.toUpperCase()}) · {c.network.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            Amount
            <input
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-900"
            />
          </label>
          {range && (range.min !== null || range.max !== null) && (
            <p className="mt-2 text-xs text-slate-500">
              Limits: {range.min ?? "no min"} – {range.max ?? "no max"} {fromCur?.ticker.toUpperCase()}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center border-y border-slate-100 bg-slate-50/60 px-4 py-3 md:border-x md:border-y-0">
          <button
            type="button"
            onClick={swapDirection}
            aria-label="Swap direction"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-lg font-black text-white transition hover:bg-indigo-700"
          >
            ⇄
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <label className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            You receive
            <select
              value={toKey}
              onChange={(e) => { setToKey(e.target.value); setEstimate(null); }}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-black normal-case tracking-normal text-slate-900"
            >
              {activeToOptions.map((c) => (
                <option key={currencyKey(c)} value={currencyKey(c)}>
                  {c.name} ({c.ticker.toUpperCase()}) · {c.network.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Estimated receive</p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {estimating ? "…" : estimate?.estimatedAmount ? `${estimate.estimatedAmount} ${toCur?.ticker.toUpperCase()}` : "—"}
            </p>
            {estimate?.estimatedAmount && Number(amount) > 0 && (
              <p className="mt-1 text-xs text-slate-500">
                Rate: 1 {fromCur?.ticker.toUpperCase()} ≈ {(Number(estimate.estimatedAmount) / Number(amount)).toPrecision(6)} {toCur?.ticker.toUpperCase()}
                {fixed && estimate.validUntil ? ` · locked until ${new Date(estimate.validUntil).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}
              </p>
            )}
            {estimateError && <p className="mt-1 text-xs font-semibold text-rose-700">{estimateError}</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Rate type</p>
          <div className="flex rounded-xl border border-slate-200 p-1">
            <button
              type="button"
              onClick={() => setFixed(false)}
              className={`rounded-lg px-4 py-2 text-sm font-black transition ${!fixed ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"}`}
            >
              Floating
            </button>
            <button
              type="button"
              onClick={() => setFixed(true)}
              className={`rounded-lg px-4 py-2 text-sm font-black transition ${fixed ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"}`}
            >
              Fixed
            </button>
          </div>
          <p className="text-xs text-slate-500">
            {fixed ? "Quote locked at creation." : "Rate follows the market until your deposit confirms."}
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            Receiving wallet address
            <input
              value={addressTo}
              onChange={(e) => setAddressTo(e.target.value)}
              placeholder={toCur ? `${toCur.ticker.toUpperCase()} address on ${toCur.network.toUpperCase()}` : "Destination address"}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold normal-case tracking-normal text-slate-900"
            />
          </label>
          <label className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            Refund address <span className="font-semibold normal-case text-slate-400">(optional)</span>
            <input
              value={refundAddress}
              onChange={(e) => setRefundAddress(e.target.value)}
              placeholder="Where funds return if the swap fails"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold normal-case tracking-normal text-slate-900"
            />
          </label>
        </div>

        {toCur?.hasExtraId && (
          <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-6 text-amber-900">
            {toCur.ticker.toUpperCase()} on {toCur.network.toUpperCase()} may need a memo or destination tag.
            SimpleSwap will tell you if one is required when you create the swap.
          </p>
        )}

        {amountOutOfRange && (
          <p className="mt-3 text-sm font-semibold text-rose-700">{amountOutOfRange}</p>
        )}
        {createError && (
          <p className="mt-3 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-900">
            <strong>Could not create the swap.</strong> {createError}
          </p>
        )}

        <button
          type="button"
          onClick={createExchange}
          disabled={creating || estimating || !estimate}
          className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-black text-white shadow-lg transition hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-50"
        >
          {creating ? "Creating your swap…" : "Create swap"}
        </button>
        <p className="mt-3 text-center text-xs leading-6 text-slate-500">
          No account needed. Double-check the receiving address: crypto sent to the wrong address cannot be recovered.
          Swaps are processed by SimpleSwap under their terms; transactions can be held for AML review.
        </p>
      </div>
    </div>
  );
}
