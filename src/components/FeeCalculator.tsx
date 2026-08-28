"use client";

import { useMemo, useState } from "react";

type Asset = "BTC" | "ETH" | "SOL" | "BNB" | "XRP" | "ZEC" | "XMR" | "TRX";

type Provider = {
  id: string;
  name: string;
  maker: number;
  taker: number;
  spread: number;
  withdrawal?: Partial<Record<Asset, number>>;
  affiliate: boolean;
  href: string;
  source: string;
  note: string;
};

const assetMeta: Record<Asset, { label: string }> = {
  BTC: { label: "Bitcoin (BTC)" },
  ETH: { label: "Ethereum (ETH)" },
  SOL: { label: "Solana (SOL)" },
  BNB: { label: "BNB (BNB)" },
  XRP: { label: "XRP (XRP)" },
  ZEC: { label: "Zcash (ZEC)" },
  XMR: { label: "Monero (XMR)" },
  TRX: { label: "TRON (TRX)" },
};

const defaultWithdrawalUsd: Record<Asset, number> = {
  BTC: 9.5,
  ETH: 3.5,
  SOL: 0.03,
  BNB: 0.5,
  XRP: 0.2,
  ZEC: 0.75,
  XMR: 0.75,
  TRX: 0.1,
};

const providers: Provider[] = [
  { id: "binance", name: "Binance", maker: 0.001, taker: 0.001, spread: 0.0005, withdrawal: { BTC: 9.5, ETH: 3.5, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/binance", source: "https://www.binance.com/en/fee/cryptoFee", note: "Standard spot baseline; tier, BNB discounts, asset, and network can change the result." },
  { id: "bybit", name: "Bybit", maker: 0.001, taker: 0.001, spread: 0.0005, withdrawal: { BTC: 9.5, ETH: 3.5, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/Bybit", source: "https://www.bybit.com/en/help-center/article/Trading-Fee-Structure", note: "Standard spot baseline; actual rate can vary by region, tier, product, and promotions." },
  { id: "bitget", name: "Bitget", maker: 0.001, taker: 0.001, spread: 0.0006, withdrawal: { BTC: 9.5, ETH: 3.5, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/Bitget-Bonus", source: "https://www.bitget.com/fee", note: "Review the live provider schedule before trading; this demo uses an editable baseline." },
  { id: "okx", name: "OKX", maker: 0.001, taker: 0.001, spread: 0.0005, withdrawal: { BTC: 9.5, ETH: 3.5, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/OKX", source: "https://www.okx.com/en-us/fees", note: "Fees and availability vary by region, account tier, product, and market." },
  { id: "bingx", name: "BingX", maker: 0.001, taker: 0.001, spread: 0.0008, withdrawal: { BTC: 9.5, ETH: 3.5, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/Bingx", source: "https://bingx.com/en/learn/article/crypto-trading-bingx-fees", note: "Provider schedule and asset withdrawal page should be checked at execution time." },
  { id: "weex", name: "WEEX", maker: 0.0008, taker: 0.0008, spread: 0.0008, affiliate: true, href: "https://go.cryptosbeginner.com/WEEX-Bonus", source: "https://www.weex.com/", note: "Illustrative baseline pending a maintained official fee-table integration." },
  { id: "mexc", name: "MEXC", maker: 0.0005, taker: 0.0005, spread: 0.0008, affiliate: true, href: "https://go.cryptosbeginner.com/MEXC-Bonus", source: "https://www.mexc.com/fee", note: "Campaigns and asset/network withdrawal charges can change independently." },
  { id: "kraken", name: "Kraken", maker: 0.004, taker: 0.008, spread: 0.001, withdrawal: { BTC: 19, ETH: 7, SOL: 0.03, BNB: 0.5, XRP: 0.2, ZEC: 0.75, XMR: 0.75, TRX: 0.1 }, affiliate: true, href: "https://go.cryptosbeginner.com/Kraken", source: "https://www.kraken.com/features/fee-schedule", note: "Instant Buy/Sell has a spread and different pricing from Kraken Pro order books." },
  { id: "bydfi", name: "BYDFI", maker: 0.001, taker: 0.001, spread: 0.0008, affiliate: true, href: "https://go.cryptosbeginner.com/BYDFi", source: "https://www.bydfi.com/", note: "Affiliate partner; verify the current product schedule and regional availability." },
  { id: "blofin", name: "BloFin", maker: 0.001, taker: 0.001, spread: 0.0009, affiliate: true, href: "https://go.cryptosbeginner.com/Blofin-Cashback", source: "https://blofin.com/en/fees", note: "The linked promotion may offer cashback; it does not remove market spread or network fees." },
  { id: "kucoin", name: "KuCoin", maker: 0.001, taker: 0.001, spread: 0.0007, affiliate: true, href: "https://go.cryptosbeginner.com/KuCoin", source: "https://www.kucoin.com/vip/privilege/fee", note: "Fee tier, token discounts, asset class, and jurisdiction affect the amount charged." },
  { id: "poloniex", name: "Poloniex", maker: 0.001, taker: 0.001, spread: 0.001, affiliate: true, href: "https://go.cryptosbeginner.com/PoloniexExchange", source: "https://poloniex.com/fees", note: "Use the live provider confirmation screen for the final withdrawal amount." },
  { id: "coinbase", name: "Coinbase Exchange", maker: 0.004, taker: 0.006, spread: 0.001, affiliate: false, href: "https://www.coinbase.com/", source: "https://help.coinbase.com/exchange/trading-and-funding/exchange-fees", note: "Reference provider shown with an official URL; no tracked CryptosBeginner referral link is used here." },
  { id: "gemini", name: "Gemini", maker: 0.002, taker: 0.004, spread: 0.001, affiliate: false, href: "https://www.gemini.com/", source: "https://www.gemini.com/fees", note: "Reference provider shown with an official URL; confirm ActiveTrader versus instant-buy pricing." },
  { id: "coinspot", name: "CoinSpot", maker: 0.001, taker: 0.001, spread: 0.0015, affiliate: false, href: "https://www.coinspot.com.au/", source: "https://www.coinspot.com.au/fees", note: "Australia-focused reference provider; availability, product, and payment fees are regional." },
  { id: "gate", name: "Gate.io", maker: 0.001, taker: 0.001, spread: 0.001, affiliate: false, href: "https://www.gate.io/", source: "https://www.gate.com/fee", note: "Non-affiliate reference provider; asset and network withdrawal charges vary." },
  { id: "htx", name: "HTX (formerly Huobi)", maker: 0.002, taker: 0.002, spread: 0.0012, affiliate: false, href: "https://www.htx.com/", source: "https://www.htx.com/fee", note: "Non-affiliate reference provider; verify jurisdiction, product, and current schedule." },
];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
const pct = (value: number) => `${(value * 100).toFixed(3)}%`;

export default function FeeCalculator() {
  const [amountStr, setAmountStr] = useState("1000");
  const [asset, setAsset] = useState<Asset>("BTC");
  const [execution, setExecution] = useState<"taker" | "maker">("taker");
  const [depositFeeStr, setDepositFeeStr] = useState("0");
  const [withdraw, setWithdraw] = useState(false);
  const [showReference, setShowReference] = useState(true);
  const [sort, setSort] = useState<"total" | "name">("total");

  const amount = Math.max(0, Number(amountStr) || 0);
  const depositFee = Math.max(0, Number(depositFeeStr) || 0);

  const results = useMemo(() => providers.map((provider) => {
    const tradingRate = execution === "maker" ? provider.maker : provider.taker;
    const tradingFee = amount * tradingRate;
    const spreadFee = amount * provider.spread;
    const withdrawalFee = withdraw ? (provider.withdrawal?.[asset] ?? defaultWithdrawalUsd[asset]) : 0;
    const costToAcquire = tradingFee + spreadFee + depositFee;
    const totalFees = costToAcquire + withdrawalFee;
    return { provider, tradingRate, tradingFee, spreadFee, withdrawalFee, costToAcquire, totalFees, totalPaid: amount + totalFees };
  }).filter((result) => showReference || result.provider.affiliate).sort((a, b) => sort === "name" ? a.provider.name.localeCompare(b.provider.name) : a.totalFees - b.totalFees), [amount, asset, depositFee, execution, showReference, sort, withdraw]);

  const cheapest = results[0];

  return (
    <div className="space-y-6">
      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block text-sm font-semibold text-slate-800">Amount to buy (USD)
            <input type="number" min="0" step="0.01" value={amountStr} onChange={(event) => setAmountStr(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2" />
          </label>
          <label className="block text-sm font-semibold text-slate-800">Asset
            <select value={asset} onChange={(event) => setAsset(event.target.value as Asset)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2">{Object.entries(assetMeta).map(([value, meta]) => <option key={value} value={value}>{meta.label}</option>)}</select>
          </label>
          <label className="block text-sm font-semibold text-slate-800">Order type
            <select value={execution} onChange={(event) => setExecution(event.target.value as "taker" | "maker")} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2"><option value="taker">Market / taker</option><option value="maker">Limit / maker</option></select>
          </label>
          <label className="block text-sm font-semibold text-slate-800">Your deposit fee
            <input type="number" min="0" step="0.01" value={depositFeeStr} onChange={(event) => setDepositFeeStr(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2" />
          </label>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 font-semibold"><input type="checkbox" checked={withdraw} onChange={(event) => setWithdraw(event.target.checked)} className="h-4 w-4 accent-emerald-600" /> Include estimated {asset} withdrawal</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" checked={showReference} onChange={(event) => setShowReference(event.target.checked)} className="h-4 w-4 accent-emerald-600" /> Show non-affiliate references</label>
          <label className="ml-auto inline-flex items-center gap-2">Sort
            <select value={sort} onChange={(event) => setSort(event.target.value as "total" | "name")} className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-slate-950"><option value="total">Lowest estimate</option><option value="name">Name</option></select>
          </label>
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500">The deposit field is user-entered because bank, card, fiat, and crypto funding costs vary by region and method. Withdrawal estimates for BTC, ETH, SOL, BNB, XRP, ZEC, XMR, and TRX are illustrative asset-level assumptions and are not live quotes.</p>
      </section>

      {cheapest && <section className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">Lowest displayed estimate</p><h2 className="mt-2 text-2xl font-black text-slate-950">{cheapest.provider.name}: {money.format(cheapest.totalFees)} estimated fees</h2><p className="mt-2 text-sm leading-6 text-emerald-950/80">That is not a recommendation or guarantee. It reflects the assumptions above and the provider baseline shown in this demo.</p></div><div className="rounded-xl bg-white/80 px-4 py-3 text-right"><div className="text-xs text-slate-500">Estimated amount paid</div><div className="text-xl font-black text-slate-950">{money.format(cheapest.totalPaid)}</div></div></div></section>}

      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/30">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-5 sm:px-7"><div><h2 className="text-xl font-black text-slate-950">Exchange-by-exchange estimate</h2><p className="mt-1 text-sm text-slate-500">{results.length} providers shown · {execution === "taker" ? "taker" : "maker"} assumption · {asset} {withdraw ? "withdrawal included" : "withdrawal excluded"}</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Demo baseline · verify before trading</span></div>
        <div className="divide-y divide-slate-100">
          {results.map(({ provider, tradingRate, tradingFee, spreadFee, withdrawalFee, totalFees, totalPaid }) => <article key={provider.id} className="p-5 sm:p-7"><div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-black text-slate-950">{provider.name}</h3><span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${provider.affiliate ? "bg-amber-100 text-amber-900" : "bg-slate-100 text-slate-600"}`}>{provider.affiliate ? "Affiliate link" : "Reference link"}</span></div><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{provider.note}</p></div><div className="text-left lg:text-right"><div className="text-xs text-slate-500">Estimated total fees</div><div className="text-2xl font-black text-slate-950">{money.format(totalFees)}</div><div className="text-xs text-slate-500">Estimated paid: {money.format(totalPaid)}</div></div></div><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">Trading fee · {pct(tradingRate)}</div><div className="mt-1 font-black text-slate-950">{money.format(tradingFee)}</div></div><div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">Spread estimate · {pct(provider.spread)}</div><div className="mt-1 font-black text-slate-950">{money.format(spreadFee)}</div></div><div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">Deposit fee</div><div className="mt-1 font-black text-slate-950">{money.format(depositFee)}</div></div><div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">{asset} withdrawal</div><div className="mt-1 font-black text-slate-950">{withdraw ? money.format(withdrawalFee) : "Excluded"}</div></div></div><div className="mt-4 flex flex-wrap items-center gap-3 text-sm"><a href={provider.href} target="_blank" rel={provider.affiliate ? "sponsored nofollow noreferrer" : "nofollow noreferrer"} className={`rounded-xl px-4 py-2.5 font-black transition ${provider.affiliate ? "bg-emerald-600 text-white hover:bg-emerald-700" : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50"}`}>{provider.affiliate ? `Open ${provider.name} →` : `Visit official ${provider.name} →`}</a><a href={provider.source} target="_blank" rel="nofollow noreferrer" className="font-semibold text-indigo-700 hover:text-indigo-900">Provider fee source ↗</a></div></article>)}
        </div>
      </div>
      <p className="text-xs leading-6 text-slate-500">Affiliate disclosure: CryptosBeginner may earn a commission when you use some partner links. That relationship does not change the inputs, displayed assumptions, or inclusion of non-affiliate reference providers. Fees, spreads, payment charges, withdrawal minimums, network conditions, promotions, and regional availability can change.</p>
    </div>
  );
}
