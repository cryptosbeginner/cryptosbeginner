"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DexService } from "./dex-data";

function Glyph({ name }: { name: "wallet" | "fee" | "network" | "shield" | "arrow" | "external" | "check" | "warning" }) {
  const paths = {
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" /><path d="M4 8h13a2 2 0 0 1 2 2v2h-4a2 2 0 0 0 0 4h4v3" /><circle cx="15" cy="14" r=".5" /></>,
    fee: <><path d="M12 3v18M16 6.5c-.8-.8-2-1.2-3.5-1.2-2.1 0-3.5 1.1-3.5 2.7 0 4.2 7 2 7 6.1 0 1.6-1.5 2.7-3.7 2.7-1.5 0-2.7-.5-3.6-1.4" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m10.8 6.8-4.5 9.4M13.2 6.8l4.5 9.4M7 18h10" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    arrow: <><path d="M5 12h13" /><path d="m13 7 5 5-5 5" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    warning: <><path d="M12 3 2.8 20h18.4L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
  }[name];
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">{paths}</svg>;
}

function HeroImage({ service }: { service: DexService }) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className="grid min-h-[260px] place-items-center rounded-3xl bg-[radial-gradient(circle_at_30%_25%,#bef264,transparent_34%),linear-gradient(135deg,#0f172a,#312e81)] p-8 text-center text-3xl font-black text-white">{service.name}</div> : <Image src={service.imageUrl} alt={service.imageAlt} width={1200} height={630} className="h-full min-h-[260px] w-full rounded-3xl border border-slate-200 bg-slate-50 object-cover" priority unoptimized onError={() => setFailed(true)} />;
}

export default function DexDetail({ service, noKycMode = false }: { service: DexService; noKycMode?: boolean }) {
  const directoryHref = noKycMode ? "/exchanges/no-kyc" : "/dexes";
  const directoryLabel = noKycMode ? "No-KYC exchange directory" : "DEX directory";
  const productLabel = service.kind === "prediction-market" ? "Prediction market" : service.kind === "aggregator" ? "Aggregator" : service.kind === "p2p" ? "P2P service" : service.kind === "instant-swap" ? "Instant swap" : "DEX";
  const feeHeadline = service.fees.split(/(?<=\.)\s+/)[0];
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"><Link href={directoryHref} className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-950"><span className="rotate-180"><Glyph name="arrow" /></span> Back to {directoryLabel}</Link></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-14">
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{service.categories.slice(0, 3).join(" · ")}</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{service.name}</h1><p className="mt-4 max-w-2xl text-xl leading-8 text-slate-600">{service.shortDescription}</p><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">{productLabel}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">Reviewed {service.reviewedAt}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{service.access}</span>{service.isKycConditional && <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">Policy checks may apply</span>}</div>{service.kind === "prediction-market" && <div className="mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-950">Prediction market — not a token-swap DEX. Review the market definition, resolution source, close time, collateral, and settlement terms before taking a position.</div>}<div className="mt-8 flex flex-wrap gap-3"><a href={service.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-800">Visit official site <Glyph name="external" /></a>{service.feeSourceUrl && <a href={service.feeSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 transition hover:border-indigo-400">Fee documentation <Glyph name="external" /></a>}{service.partnerUrl && <a href={service.partnerUrl} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300">{service.partnerLabel ?? "Partner link"} <Glyph name="external" /></a>}</div>{service.partnerUrl && <p className="mt-3 text-xs leading-5 text-slate-500">Affiliate disclosure: CryptosBeginner may earn a commission if you use this partner link. It does not affect listing order, editorial inclusion, fees, or safety.</p>}</div>
        <HeroImage service={service} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-4"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Glyph name="wallet" /><p className="mt-4 text-xs font-black uppercase tracking-wide text-slate-500">Access model</p><p className="mt-1 font-bold text-slate-950">{service.access}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Glyph name="fee" /><p className="mt-4 text-xs font-black uppercase tracking-wide text-slate-500">Fee lens</p><p className="mt-1 font-bold text-slate-950">{feeHeadline}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Glyph name="network" /><p className="mt-4 text-xs font-black uppercase tracking-wide text-slate-500">Network scope</p><p className="mt-1 font-bold text-slate-950">{service.chains.slice(0, 2).join(", ")}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Glyph name="shield" /><p className="mt-4 text-xs font-black uppercase tracking-wide text-slate-500">{service.verificationLabel ?? "Verification"}</p><p className="mt-1 font-bold text-slate-950">{service.kind === "prediction-market" ? "Read market-specific rules" : service.access === "Wallet-first" ? "Wallet-first; checks vary" : service.isKycConditional ? "Conditional" : service.access === "No account flow" ? "No standard account observed" : "Review provider terms"}</p></div></div></section>

      <section className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">Editorial read</p><h2 className="mt-3 text-3xl font-black">What stands out about {service.name}?</h2><p className="mt-5 text-base leading-8 text-slate-300">{service.editorialSummary}</p><div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-black uppercase tracking-wide text-slate-400">Best suited to</p><p className="mt-2 text-lg font-bold text-white">{service.bestFor}</p></div></div><div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-black">Read before you trade</h2><div className="mt-5 flex gap-3 text-slate-300"><Glyph name="warning" /><p className="text-sm leading-6">{service.caution}</p></div><div className="mt-6 space-y-4 text-sm leading-6 text-slate-300"><p><span className="font-bold text-white">Availability:</span> {service.availability}</p><p><span className="font-bold text-white">{service.verificationLabel ?? "Verification"}:</span> {service.verification}</p><p><span className="font-bold text-white">Assets:</span> {service.assets}</p></div></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8"><div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7"><h2 className="text-2xl font-black text-emerald-950">What may work well</h2><ul className="mt-5 space-y-4 text-sm leading-6 text-emerald-950">{service.pros.map((item) => <li key={item} className="flex gap-3"><span className="mt-0.5 text-emerald-700"><Glyph name="check" /></span>{item}</li>)}</ul></div><div className="rounded-3xl border border-amber-200 bg-amber-50 p-7"><h2 className="text-2xl font-black text-amber-950">Trade-offs to understand</h2><ul className="mt-5 space-y-4 text-sm leading-6 text-amber-950">{service.cons.map((item) => <li key={item} className="flex gap-3"><span className="mt-0.5 text-amber-700"><Glyph name="warning" /></span>{item}</li>)}</ul></div></section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">FAQ</p><h2 className="mt-3 text-3xl font-black text-slate-950">Questions readers usually ask</h2><div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">{service.faqs.map((item) => <details key={item.question} className="group p-5"><summary className="cursor-pointer list-none pr-8 font-bold text-slate-950 marker:hidden">{item.question}<span className="float-right text-indigo-600 transition group-open:rotate-45">＋</span></summary><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div></section>

      <section className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><p>Educational comparison only. Provider terms, fees, policies, and access can change.</p><div className="flex flex-wrap gap-4"><Link href={directoryHref} className="font-bold text-indigo-700">Browse directory</Link><Link href="/crypto-cards" className="font-bold text-indigo-700">Compare prepaid crypto cards</Link></div></div></section>
    </main>
  );
}
