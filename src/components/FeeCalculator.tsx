"use client";

import { useState } from "react";

export default function FeeCalculator() {
  const [amount, setAmount] = useState(1000);
  const [exchange, setExchange] = useState("binance");

  const fees: Record<string, { spot: number; name: string; href: string }> = {
    binance: { spot: 0.001, name: "Binance", href: "https://go.cryptosbeginner.com/binance" },
    bybit: { spot: 0.001, name: "Bybit", href: "https://go.cryptosbeginner.com/Bybit" },
    bitget: { spot: 0.001, name: "Bitget", href: "https://go.cryptosbeginner.com/Bitget-Bonus" },
    okx: { spot: 0.001, name: "OKX", href: "https://go.cryptosbeginner.com/OKX" },
    bingx: { spot: 0.001, name: "BingX", href: "https://go.cryptosbeginner.com/Bingx" },
    weex: { spot: 0.0008, name: "WEEX", href: "https://go.cryptosbeginner.com/WEEX-Bonus" },
    mexc: { spot: 0.0005, name: "MEXC", href: "https://go.cryptosbeginner.com/MEXC-Bonus" },
    kraken: { spot: 0.0026, name: "Kraken", href: "https://go.cryptosbeginner.com/Kraken" },
  };

  const selected = fees[exchange];
  const tradingFee = amount * selected.spot;
  const total = amount + tradingFee;

  return (
    <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-5">Calculate your fees</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Trade amount (USDT)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Exchange</label>
          <select
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
          >
            {Object.entries(fees).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 bg-slate-50 rounded-xl p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Exchange</span>
          <span className="font-medium text-slate-900">{selected.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Estimated trading fee</span>
          <span className="font-medium text-slate-900">${tradingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-2 mt-2 font-bold">
          <span>Total cost (approx)</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <a
        href={selected.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-lg"
      >
        Open {selected.name} →
      </a>

      <p className="mt-4 text-xs text-slate-500">
        Simplified estimate using standard spot taker fees. Real fees can be lower with VIP levels or token discounts.
      </p>
    </div>
  );
}