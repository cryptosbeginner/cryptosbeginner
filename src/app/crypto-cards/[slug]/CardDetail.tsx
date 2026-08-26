"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { CryptoCard } from "../card-data";

type CardDetailProps = {
  card: CryptoCard;
  relatedCards: CryptoCard[];
};

function initials(issuer: string) {
  return issuer
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProductVisual({ card }: { card: CryptoCard }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-800 p-6 shadow-2xl shadow-indigo-950/20">
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
      {card.imageUrl && !imageFailed ? (
        <Image
          src={card.imageUrl}
          alt={`${card.name} product image`}
          width={900}
          height={560}
          className="relative mx-auto h-64 w-full rounded-2xl object-contain sm:h-80"
          priority
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="relative flex h-64 items-center justify-center sm:h-80">
          <div className="relative h-44 w-72 rotate-[-7deg] overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-indigo-500 via-violet-500 to-slate-950 p-6 shadow-2xl shadow-indigo-950/60 sm:h-52 sm:w-88">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/20" />
            <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full border border-emerald-200/20" />
            <div className="relative flex items-start justify-between gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xs font-black text-white">
                {initials(card.issuer)}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                {card.network.split(" ")[0]}
              </span>
            </div>
            <div className="relative mt-16 text-base font-black text-white sm:mt-20">{card.name}</div>
            <div className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
              CryptosBeginner profile visual
            </div>
          </div>
        </div>
      )}
      <div className="relative mt-4 flex items-center justify-between gap-4 text-xs text-white/70">
        <span className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15 text-[10px] font-black">
            {initials(card.issuer)}
          </span>
          {card.issuer}
        </span>
        <span>{card.visualCredit ?? "Original directory visual"}</span>
      </div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</dt>
      <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</dd>
    </div>
  );
}

export default function CardDetail({ card, relatedCards }: CardDetailProps) {
  const referenceOnly = card.status === "Reference profile";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <section className="border-b border-indigo-950/10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
            <Link href="/crypto-cards" className="text-sm font-bold text-emerald-300 hover:text-white hover:underline">
              ← Back to the crypto-card directory
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">{card.category} · {card.status ?? "Reviewed profile"}</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{card.name}</h1>
                <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-slate-200">{card.headline}</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{card.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {referenceOnly ? (
                    <Link href="/crypto-cards" className="rounded-xl border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                      Back to directory
                    </Link>
                  ) : (
                    <a href={card.officialUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                      Visit official site ↗
                    </a>
                  )}
                </div>
              </div>
              <ProductVisual card={card} />
            </div>
          </div>
        </section>

        <section className="border-b bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3">
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Start here</p><p className="mt-2 text-sm leading-6 text-slate-700">Check eligibility and the provider entity serving your country.</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Read the cost</p><p className="mt-2 text-sm leading-6 text-slate-700">Look beyond cashback: spreads, FX, ATM, subscription, and conversion fees matter.</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Map custody</p><p className="mt-2 text-sm leading-6 text-slate-700">A familiar card interface does not tell you who controls the underlying funds.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14" id="overview">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Card profile</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">The details to compare before applying</h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">Last reviewed {card.lastReviewed}</p>
          </div>
          {referenceOnly && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              This is a reference profile included for discovery. CryptosBeginner has not independently verified a complete fee sheet, reward schedule, legal issuer, or current availability for this entry.
            </div>
          )}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DetailField label="Issuer / provider" value={card.issuer} />
            <DetailField label="Card network" value={card.network} />
            <DetailField label="KYC signal" value={card.kyc} />
            <DetailField label="Custody model" value={card.custody} />
            <DetailField label="Availability" value={card.regionLabel} />
            <DetailField label="Funding" value={card.funding} />
            <DetailField label="Fee summary" value={card.feeSummary ?? "See official terms; not independently profiled."} />
            <DetailField label="Rewards" value={card.rewardSummary ?? "See official terms; reward conditions may change."} />
            <DetailField label="Limits and eligibility" value={card.limitsSummary ?? "Confirm current country, transaction, ATM, and account limits."} />
          </dl>
        </section>

        <section className="border-y bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-600">Our review frame</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">What this profile is really saying</h2>
              <p className="mt-5 text-base leading-8 text-slate-700">{card.summary}</p>
              <div className="mt-6 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600">Standout to verify</p>
                <p className="mt-3 text-base leading-8 text-slate-800">{card.standout}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-950/15">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Before you use it</p>
              <h2 className="mt-2 text-2xl font-black">A safer verification checklist</h2>
              <ol className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <li><strong className="text-white">1. Confirm the domain.</strong> Start from the official provider source, not a copied promotion.</li>
                <li><strong className="text-white">2. Confirm the legal issuer.</strong> A wallet, exchange, and card issuer may be different companies.</li>
                <li><strong className="text-white">3. Read the current terms.</strong> Check fees, limits, rewards exclusions, refunds, and account controls.</li>
                <li><strong className="text-white">4. Test with a small amount.</strong> Learn the funding and exit workflow before relying on the card.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Why people compare it</p>
              <p className="mt-4 text-base leading-8 text-slate-800">{card.headline}</p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">Main caution</p>
              <p className="mt-4 text-base leading-8 text-slate-800">{card.checkFirst}</p>
            </div>
          </div>
        </section>

        <section className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Related cards</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">Continue the comparison</h2>
              </div>
              <Link href="/crypto-cards" className="text-sm font-bold text-indigo-700 hover:underline">View full directory →</Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedCards.map((related) => (
                <Link key={related.slug} href={`/crypto-cards/${related.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{related.category}</p>
                  <h3 className="mt-2 font-black text-slate-900">{related.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{related.headline}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-indigo-700">Read profile →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Questions people ask about {card.name}</h2>
          <div className="mt-6 space-y-3">
            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold">What is the KYC status?</summary><p className="mt-3 text-sm leading-7 text-slate-600">{card.kyc}. The exact onboarding requirement can depend on country, product tier, issuer, payment rail, and applicable law.</p></details>
            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold">What fees should I check?</summary><p className="mt-3 text-sm leading-7 text-slate-600">{card.feeSummary ?? "Start with the official fee schedule, conversion spread, FX fee, top-up fee, ATM fee, subscription cost, and any inactivity or dispute fee."}</p></details>
            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold">Who controls the funds?</summary><p className="mt-3 text-sm leading-7 text-slate-600">{card.custody}. Confirm the practical custody model, freeze powers, recovery process, and whether spending requires a provider-operated balance.</p></details>
            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold">Where can I verify the current details?</summary><p className="mt-3 text-sm leading-7 text-slate-600">Use the official provider source linked above. CryptosBeginner’s page is a comparison aid, not a replacement for the provider’s current legal terms.</p></details>
          </div>
        </section>

        <section className="border-t bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="text-sm leading-7 text-slate-300"><strong className="text-white">Editorial note:</strong> This page is educational and not financial, legal, tax, or security advice. Product availability, fees, rewards, limits, custody, KYC, and eligibility can change. Verify current information with the provider and relevant authorities before applying or using a service.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
