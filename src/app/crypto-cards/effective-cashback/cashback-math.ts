import type { CardListing } from "../cards-data";

export type RateKind = "base" | "max-only" | "none" | "unknown";

export type CashbackModel = {
  card: CardListing;
  /** Cashback rate used in the math, as a percent (e.g. 1.5). */
  rate: number;
  /** How the rate was derived. */
  rateKind: RateKind;
  /** Short human label for the published rate, e.g. "up to 10%", "1.5% (Ruby tier)". */
  rateLabel: string;
  /** Monthly reward cap in USD, when explicitly published. */
  monthlyCap: number | null;
  /** Annual fee in USD. 0 when the listing states no annual fee. null when not published. */
  annualFee: number | null;
};

const NO_CASHBACK =
  /no cashback|standard cards? (?:have|has) no cashback|does not (?:offer|pay|advertise)[^.]{0,50}cashback|cashback[^.]{0,40}not (?:offered|available)/i;
const UNDISCLOSED =
  /no universal.*stated|not published|to be announced|no .*programme is stated|not shown|not yet|TBA|rate not disclosed/i;

function firstRateText(rewards: string): string {
  const m = rewards.match(/up to (\d+(?:\.\d+)?)\s*%/i);
  if (m) return `up to ${m[1]}%`;
  const r = rewards.match(/(\d+(?:\.\d+)?)\s*%\s*(?:to|-)\s*(\d+(?:\.\d+)?)\s*%/i);
  if (r) return `${r[1]}% to ${r[2]}%`;
  const t = rewards.match(/tier 1 pays (\d+(?:\.\d+)?)\s*%/i);
  if (t) return `${t[1]}% (lowest paid tier)`;
  const f = rewards.match(/(\d+(?:\.\d+)?)\s*%/);
  if (f) return `${f[1]}%`;
  return "Not published";
}

/**
 * Derives the base cashback rate from a listing's free-text rewards field.
 * Priority: lowest paid tier ("Tier 1 pays X%") > base of an "X% to Y%" range >
 * first stated rate. A lone "up to X%" is flagged as max-only, not a base rate.
 */
export function modelCashback(card: CardListing): CashbackModel | null {
  const rewards = card.rewards ?? "";
  if (NO_CASHBACK.test(rewards)) {
    return {
      card,
      rate: 0,
      rateKind: "none",
      rateLabel: "No cashback",
      monthlyCap: null,
      annualFee: modelAnnualFee(card.pricing ?? ""),
    };
  }
  if (UNDISCLOSED.test(rewards)) return null;

  let rate: number | null = null;
  let rateKind: RateKind = "base";
  let m = rewards.match(/tier 1 pays (\d+(?:\.\d+)?)\s*%/i);
  if (m) {
    rate = parseFloat(m[1]);
  } else if (
    (m = rewards.match(/(\d+(?:\.\d+)?)\s*%\s*(?:to|-)\s*(\d+(?:\.\d+)?)\s*%/i))
  ) {
    rate = parseFloat(m[1]);
  } else {
    // First stated rate that is not a yield figure ("5% APY" is not cashback).
    // A leading "up to" marks it as a promotional maximum, not a base rate.
    const re = /(\d+(?:\.\d+)?)\s*%/g;
    let m2: RegExpExecArray | null;
    while ((m2 = re.exec(rewards)) !== null) {
      const after = rewards.slice(
        m2.index + m2[0].length,
        m2.index + m2[0].length + 4,
      );
      if (/^\s*apy/i.test(after)) continue;
      rate = parseFloat(m2[1]);
      const before = rewards.slice(Math.max(0, m2.index - 12), m2.index);
      if (/up to\s*$/i.test(before)) rateKind = "max-only";
      break;
    }
  }
  if (rate === null) return null;

  return {
    card,
    rate,
    rateKind,
    rateLabel: firstRateText(rewards),
    monthlyCap: modelMonthlyCap(rewards),
    annualFee: modelAnnualFee(card.pricing ?? ""),
  };
}

function modelMonthlyCap(rewards: string): number | null {
  const patterns = [
    /monthly cap\s*\(?USD\s*([\d,]+(?:\.\d+)?)/i,
    /monthly cap[^\$]{0,30}\$\s?([\d,]+(?:\.\d+)?)/i,
    /\$\s?([\d,]+(?:\.\d+)?)\s*(?:USD\s*)?(?:per|\/)\s*months?\b(?!\s*limit)/i,
    /up to \$\s?([\d,]+(?:\.\d+)?)\s*(?:a|per)\s*month\b/i,
    /(?:capped at|cap of)\s*(?:USD\s*)?([\d,]+(?:\.\d+)?)\s*(?:USD\s*)?per month/i,
  ];
  for (const p of patterns) {
    const m = rewards.match(p);
    if (m) return parseFloat(m[1].replace(/,/g, ""));
  }
  return null;
}

function modelAnnualFee(pricing: string): number | null {
  if (
    /no (?:monthly|annual)(?: or |, )?(?:monthly|annual)? (?:card )?fees?/i.test(
      pricing,
    )
  )
    return 0;
  if (/no annual fee/i.test(pricing)) return 0;
  let m =
    pricing.match(/\$\s?([\d,]+(?:\.\d+)?)\s*\/\s*year\b(?!\s*limit)/i) ||
    pricing.match(/\$\s?([\d,]+(?:\.\d+)?)\s*(?:per year|a year|annual)\b(?!\s*limit)/i) ||
    pricing.match(/annual[^.${]{0,60}?(\d+(?:,\d+)?(?:\.\d+)?)\s*USD/i);
  if (m) return parseFloat(m[1].replace(/,/g, ""));
  m = pricing.match(/\$\s?([\d,]+(?:\.\d+)?)\s*\/\s*months?\b(?!\s*limit)/i);
  if (m) return parseFloat(m[1].replace(/,/g, "")) * 12;
  return null;
}

export type EffectiveResult = CashbackModel & {
  /** Net dollars back at the given monthly spend. */
  netBack: number;
  /** Net effective rate as a percent of spend. */
  effectivePct: number;
};

/**
 * Effective cashback = (min(spend * rate, monthlyCap) - annualFee/12) / spend.
 * Tiered "first $X at Y% then Z%" programs are simplified to the base rate;
 * staking, lockups, excluded categories and regional terms are not modeled.
 */
export function effectiveAt(model: CashbackModel, spend: number): EffectiveResult {
  const gross = Math.min((spend * model.rate) / 100, model.monthlyCap ?? Infinity);
  const netBack = gross - (model.annualFee ?? 0) / 12;
  return { ...model, netBack, effectivePct: (netBack / spend) * 100 };
}

export const SPEND_LEVELS = [500, 1000, 2000] as const;

export function fmtUsd(n: number): string {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

export function fmtPct(n: number): string {
  return `${n.toFixed(2)}%`;
}
