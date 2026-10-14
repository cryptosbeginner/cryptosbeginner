"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cardListings, type CardListing } from "../cards-data";

type Priority = "cashback" | "low-fees" | "travel" | "simple";
type Willingness = "yes" | "no" | "maybe";
type Format = "virtual" | "physical" | "any";

type Answers = {
  priority: Priority | null;
  region: string;
  willingness: Willingness | null;
  format: Format | null;
};

const initialAnswers: Answers = { priority: null, region: "any", willingness: null, format: null };

const priorities: { value: Priority; title: string; description: string }[] = [
  { value: "cashback", title: "Maximize cashback", description: "I want the highest rewards on my spending, even if it takes some setup." },
  { value: "low-fees", title: "Keep fees minimal", description: "I want the cheapest overall card with no surprises." },
  { value: "travel", title: "Travel and international use", description: "Low FX fees and wide acceptance matter most to me." },
  { value: "simple", title: "Simple everyday spending", description: "Easy to get, easy to use, no complicated tiers or lockups." },
];

const willingnessOptions: { value: Willingness; title: string; description: string }[] = [
  { value: "yes", title: "Yes, worth it", description: "I will pay a subscription or lock tokens for better rates." },
  { value: "maybe", title: "Only if the math works", description: "Show me premium options, but flag the true cost." },
  { value: "no", title: "No, keep it free", description: "I want no subscriptions and no token lockups." },
];

const formatOptions: { value: Format; title: string; description: string }[] = [
  { value: "virtual", title: "Virtual is fine", description: "I mostly pay online or with my phone." },
  { value: "physical", title: "I want a physical card", description: "I need something to tap and swipe in person." },
  { value: "any", title: "No preference", description: "Either works for me." },
];

function parseRate(rewards: string): number | null {
  const lower = rewards.toLowerCase();
  if (/no cashback|no rewards|not advertised/.test(lower)) return null;
  const match = lower.match(/(\d+(?:\.\d+)?)\s*%/);
  if (!match) return null;
  const rate = parseFloat(match[1]);
  return rate > 0 && rate <= 10 ? rate : null;
}

function hasSubscriptionOrLockup(card: CardListing): boolean {
  const text = `${card.pricing} ${card.rewards}`.toLowerCase();
  return /subscription|\$\d+\/month|per month|lockup|stake|staking|lock /.test(text);
}

function hasLowFx(card: CardListing): boolean {
  const text = `${card.pricing} ${card.rewards}`.toLowerCase();
  return /no fx|0% fx|no foreign|zero fx/.test(text);
}

function scoreCard(card: CardListing, answers: Answers): { score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  if (answers.region !== "any") {
    const needle = answers.region.toLowerCase();
    const matches = card.regions.some((r) => r.toLowerCase().includes(needle)) || card.availability.toLowerCase().includes(needle);
    if (!matches) return { score: -1000, reasons: [] };
    score += 20;
    reasons.push(`Available in your region`);
  }

  if (answers.format === "virtual" && !card.cardFormats.includes("Virtual")) {
    return { score: -1000, reasons: [] };
  }
  if (answers.format === "physical" && !card.cardFormats.includes("Physical") && !card.cardFormats.includes("Metal")) {
    return { score: -1000, reasons: [] };
  }

  const needsPremium = hasSubscriptionOrLockup(card);
  if (answers.willingness === "no" && needsPremium) {
    return { score: -1000, reasons: [] };
  }

  const rate = parseRate(card.rewards);

  switch (answers.priority) {
    case "cashback":
      if (rate !== null) {
        score += rate * 10;
        reasons.push(`${rate}% advertised cashback rate`);
      } else {
        score -= 10;
      }
      if (needsPremium && answers.willingness === "maybe") {
        reasons.push("Premium tier: check the true cost before committing");
      }
      break;
    case "low-fees":
      if (/no annual fee|no issuance fee|no monthly/.test(card.pricing.toLowerCase())) {
        score += 15;
        reasons.push("Low headline fees");
      }
      if (!needsPremium) {
        score += 10;
        reasons.push("No subscription or lockup required");
      }
      if (rate !== null && rate >= 1) {
        score += 5;
        reasons.push(`${rate}% cashback on top`);
      }
      break;
    case "travel":
      if (hasLowFx(card)) {
        score += 20;
        reasons.push("Low or zero FX fees advertised");
      }
      if (card.regions.length >= 3) {
        score += 10;
        reasons.push("Broad regional coverage");
      }
      if (card.network.toLowerCase().includes("visa") || card.network.toLowerCase().includes("mastercard")) {
        score += 5;
      }
      break;
    case "simple":
      if (!needsPremium) {
        score += 20;
        reasons.push("No tiers, subscriptions, or lockups to manage");
      }
      if (card.cardFormats.includes("Virtual")) {
        score += 5;
        reasons.push("Virtual card for quick setup");
      }
      break;
  }

  if (card.fullReviewUrl) {
    score += 3;
  }

  return { score, reasons };
}

const steps = ["Priority", "Region", "Premium?", "Format", "Results"];

export default function CardFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const regions = useMemo(() => {
    const set = new Set<string>();
    for (const card of cardListings) {
      for (const r of card.regions) set.add(r);
    }
    return [...set].sort();
  }, []);

  const results = useMemo(() => {
    if (step < 4) return [];
    return cardListings
      .map((card) => ({ card, ...scoreCard(card, answers) }))
      .filter((r) => r.score > -1000)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [step, answers]);

  const canContinue = useMemo(() => {
    if (step === 0) return answers.priority !== null;
    if (step === 2) return answers.willingness !== null;
    if (step === 3) return answers.format !== null;
    return true;
  }, [step, answers]);

  function reset() {
    setAnswers(initialAnswers);
    setStep(0);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-10">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Card finder quiz</p>
          <p className="text-xs font-bold text-slate-400">Step {Math.min(step + 1, 5)} of 5</p>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 transition-all duration-500"
            style={{ width: `${((Math.min(step + 1, 5)) / 5) * 100}%` }}
          />
        </div>

        <div key={step} className="animate-[fadeIn_0.4s_ease-out]">
          {step === 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">What matters most to you?</h2>
              <p className="mt-2 text-sm text-slate-600">Pick the one that best describes your goal.</p>
              <div className="mt-6 grid gap-3">
                {priorities.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setAnswers({ ...answers, priority: p.value })}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      answers.priority === p.value
                        ? "border-fuchsia-600 bg-fuchsia-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="font-black text-slate-950">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="mt-8">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Where do you live?</h2>
              <p className="mt-2 text-sm text-slate-600">We will only show cards available in your region.</p>
              <select
                value={answers.region}
                onChange={(e) => setAnswers({ ...answers, region: e.target.value })}
                className="mt-6 w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-base font-bold text-slate-900 focus:border-fuchsia-600 focus:outline-none"
              >
                <option value="any">Anywhere / not sure yet</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Would you pay extra for higher rewards?</h2>
              <p className="mt-2 text-sm text-slate-600">Some cards offer better rates with a monthly subscription or token lockup.</p>
              <div className="mt-6 grid gap-3">
                {willingnessOptions.map((w) => (
                  <button
                    key={w.value}
                    onClick={() => setAnswers({ ...answers, willingness: w.value })}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      answers.willingness === w.value
                        ? "border-fuchsia-600 bg-fuchsia-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="font-black text-slate-950">{w.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{w.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-8">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Virtual or physical?</h2>
              <p className="mt-2 text-sm text-slate-600">Do you need a card you can hold?</p>
              <div className="mt-6 grid gap-3">
                {formatOptions.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setAnswers({ ...answers, format: f.value })}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      answers.format === f.value
                        ? "border-fuchsia-600 bg-fuchsia-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="font-black text-slate-950">{f.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{f.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mt-8">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Your top matches</h2>
              <p className="mt-2 text-sm text-slate-600">
                Based on your answers. Always verify current fees and eligibility on the provider page before applying.
              </p>
              {results.length === 0 ? (
                <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-center">
                  <p className="font-bold text-slate-700">No cards match all your filters.</p>
                  <p className="mt-2 text-sm text-slate-500">Try loosening the region or premium preferences.</p>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {results.map(({ card, reasons }, i) => (
                    <div key={card.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-fuchsia-900">
                          <Image
                            src={card.imageUrl}
                            alt={card.imageAlt}
                            fill
                            className="object-contain p-1"
                            sizes="96px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            {i === 0 && (
                              <span className="rounded-full bg-fuchsia-600 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                                Best match
                              </span>
                            )}
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{card.network}</span>
                          </div>
                          <Link href={`/crypto-cards/${card.slug}`} className="mt-1 block truncate text-lg font-black text-slate-950 hover:text-fuchsia-700">
                            {card.name}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {reasons.slice(0, 3).map((reason) => (
                              <li key={reason} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="mt-0.5 text-emerald-600">✓</span>
                                {reason}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Link
                              href={`/crypto-cards/${card.slug}`}
                              className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-black text-white hover:bg-slate-800"
                            >
                              View details
                            </Link>
                            {card.referralUrl && (
                              <a
                                href={card.referralUrl}
                                target="_blank"
                                rel="sponsored nofollow noreferrer"
                                className="rounded-lg bg-fuchsia-600 px-4 py-2 text-xs font-black text-white hover:bg-fuchsia-700"
                              >
                                {card.referralLabel ?? "Check card"} ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={reset}
                className="mt-6 w-full rounded-2xl border-2 border-slate-200 p-4 text-sm font-black text-slate-700 hover:border-slate-300"
              >
                Start over
              </button>
            </div>
          )}
        </div>

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="rounded-xl px-5 py-3 text-sm font-black text-slate-500 hover:text-slate-800 disabled:opacity-30"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canContinue}
              className="rounded-xl bg-fuchsia-600 px-8 py-3 text-sm font-black text-white hover:bg-fuchsia-700 disabled:opacity-40"
            >
              {step === 3 ? "See my matches" : "Continue →"}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
