import type { CardListing } from "./cards-data";

export type RatingStatus = "verified" | "provisional";

export type RatingBreakdownItem = {
  category: string;
  score: number;
  weight: number;
};

export type CardRating = {
  score: number;
  status: RatingStatus;
  breakdown: RatingBreakdownItem[];
};

export const RATING_METHODOLOGY: Array<{ title: string; text: string }> = [
  {
    title: "Rewards, 30%",
    text: "From the card's structured cashback tiers. The headline rate is normalized so 6% or more scores 10, then adjusted by cap generosity: a $3,000 or higher monthly band keeps full credit, a $500 or lower band keeps half credit, with a sliding scale between.",
  },
  {
    title: "Fees, 25%",
    text: "From the structured fee breakdown where present, otherwise parsed from the published pricing text. Annual or membership fees and FX markups reduce the score; an explicit no-annual-fee statement scores well. Cards with no parseable fee data score neutral.",
  },
  {
    title: "Availability, 20%",
    text: "From the regions data. 100 or more advertised countries scores 10, fewer countries scale down, a single region scores 4. Vague eligibility wording without a concrete country count is capped at 6.",
  },
  {
    title: "Custody and trust, 15%",
    text: "Self-custody cards score 8. Custodial cards score 6 when the listing documents insurance, segregation, or licensing, and 4 when it does not. Pre-launch and waitlist cards score 3 because terms are not final.",
  },
  {
    title: "Features, 10%",
    text: "Counts Apple Pay, Google Pay, virtual plus physical formats, a metal option, and app-level controls such as borrowing or yield. Four or more scores 10, none scores 2.",
  },
];

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function scoreRewards(card: CardListing): number {
  const bands = card.cashbackBands;
  if (!bands || bands.length === 0) return 0;
  const maxRate = Math.max(...bands.map((b) => b.ratePct));
  const base = clamp((maxRate / 6) * 10, 0, 10);
  const topBands = bands.filter((b) => b.ratePct === maxRate);
  let cap: number | undefined;
  for (const b of topBands) {
    if (typeof b.bandCapUsd === "number") cap = Math.max(cap ?? 0, b.bandCapUsd);
  }
  let factor: number;
  if (typeof cap === "number") {
    if (cap >= 3000) factor = 1;
    else if (cap <= 500) factor = 0.5;
    else factor = 0.5 + 0.5 * ((cap - 500) / 2500);
  } else {
    const parsed = topBands
      .map((b) => b.spendBand.match(/\$([\d,]+)/))
      .filter((m): m is RegExpMatchArray => m !== null)
      .map((m) => parseInt(m[1].replace(/,/g, ""), 10));
    if (parsed.length > 0) {
      const c = Math.max(...parsed);
      if (c >= 3000) factor = 1;
      else if (c <= 500) factor = 0.5;
      else factor = 0.5 + 0.5 * ((c - 500) / 2500);
    } else {
      factor = 0.75;
    }
  }
  return clamp(base * factor, 0, 10);
}

function parseMoneyAmount(text: string): number | null {
  const m = text.replace(/,/g, "").match(/\$([\d]+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

function scoreFees(card: CardListing): number {
  const fb = card.feeBreakdown;
  const pricing = card.pricing;
  let annualFee: number | null = null;
  let noAnnualFee = false;

  if (fb) {
    if (typeof fb.annualFeeUsd === "number" && fb.annualFeeUsd > 0) annualFee = fb.annualFeeUsd;
    else if (fb.annualFeeUsd === 0 || fb.annualFeeUsd === null) noAnnualFee = true;
  }
  if (annualFee === null && !noAnnualFee) {
    if (/no\s+(annual|yearly)\s+fee|no\s+monthly\s+fee|\$0\s+annual|annual\s+fee[^.]{0,30}free/i.test(pricing)) {
      noAnnualFee = true;
    } else {
      const annualMatch = pricing.match(/\$([\d,.]+)\s*(?:\/\s*|per\s+)?year/i);
      const memberMatch = pricing.match(/(?:annual|membership)[^.]{0,60}?\$([\d,.]+)/i);
      const monthlyMatch = pricing.match(/\$([\d,.]+)\s*\/\s*month/i);
      if (annualMatch) annualFee = parseFloat(annualMatch[1].replace(/,/g, ""));
      else if (memberMatch) annualFee = parseFloat(memberMatch[1].replace(/,/g, ""));
      else if (monthlyMatch) annualFee = parseFloat(monthlyMatch[1].replace(/,/g, "")) * 12;
    }
  }

  let fxPct: number | null = null;
  const fxSources = [fb?.fxFeeNote ?? "", pricing];
  for (const srcText of fxSources) {
    const m1 = srcText.match(/(\d+(?:\.\d+)?)\s*%\s*(?:FX|foreign|exchange)/i);
    const m2 = srcText.match(/FX[^.\n]{0,50}?(\d+(?:\.\d+)?)\s*%/i);
    const m = m1 ?? m2;
    if (m) {
      fxPct = parseFloat(m[1]);
      break;
    }
  }

  let atmFee = 0;
  const atmSources = [fb?.atmFeeNote ?? "", pricing];
  for (const srcText of atmSources) {
    if (/\$\d[^.\n]{0,40}atm|atm[^.\n]{0,40}\$\d/i.test(srcText)) {
      const amt = parseMoneyAmount(srcText);
      if (amt !== null && amt > 0) {
        atmFee = Math.min(1.5, amt / 4);
        break;
      }
    }
  }

  if (annualFee === null && fxPct === null && !noAnnualFee) return 5;

  let score = noAnnualFee ? 8 : 10;
  if (annualFee !== null && annualFee > 0) score -= Math.min(5, annualFee / 60);
  if (fxPct !== null && fxPct > 0) score -= Math.min(3, fxPct * 1.5);
  score -= atmFee;
  return clamp(score, 0, 10);
}

function scoreAvailability(card: CardListing): number {
  const regionText = card.regions.join(" | ");
  const availText = card.availability;
  const combined = `${regionText} ${availText}`;

  let score: number;
  const countryMatch = regionText.match(/(\d+)\+\s*countries/i);
  if (countryMatch) {
    const n = parseInt(countryMatch[1], 10);
    if (n >= 100) score = 10;
    else if (n >= 50) score = 8;
    else if (n >= 30) score = 7;
    else score = 6;
  } else if (/global/i.test(regionText)) {
    score = 8;
  } else {
    const count = card.regions.filter((r) => r.trim().length > 0).length;
    if (count === 0) score = 2;
    else if (count === 1) score = 4;
    else if (count <= 3) score = 6;
    else score = 7;
  }

  const vague = /verify|not publish|subject to|check the|consult/i.test(combined);
  const hasNumber = /\d+\+?\s*countries|\d+\s*states/i.test(combined);
  if (vague && !hasNumber) score = Math.min(score, 6);
  return clamp(score, 0, 10);
}

function scoreCustody(card: CardListing): number {
  const text = `${card.caution} ${card.editorialSummary} ${card.cardFormats.join(" ")} ${card.regions.join(" ")}`;
  if (/pre-launch|waitlist|coming soon|planned/i.test(text)) return 3;
  if (card.categories.includes("self-custody")) return 8;
  if (/insur|segregat|licensed|regulated|trust/i.test(text)) return 6;
  return 4;
}

function scoreFeatures(card: CardListing): number {
  let count = 0;
  const flags = card.featureFlags;
  if (flags?.applePay) count += 1;
  if (flags?.googlePay) count += 1;
  const formats = card.cardFormats.join(" ");
  if (/virtual/i.test(formats) && /physical/i.test(formats)) count += 1;
  if (/metal/i.test(formats)) count += 1;
  if (flags?.borrowAgainstCrypto || flags?.earnYield) count += 1;
  else if ((card.featureTags ?? []).some((t) => /app|control/i.test(t))) count += 1;

  if (count >= 4) return 10;
  if (count === 3) return 8;
  if (count === 2) return 6;
  if (count === 1) return 4;
  return 2;
}

export function getCardRating(card: CardListing): CardRating {
  const rewards = scoreRewards(card);
  const fees = scoreFees(card);
  const availability = scoreAvailability(card);
  const custody = scoreCustody(card);
  const features = scoreFeatures(card);

  const breakdown: RatingBreakdownItem[] = [
    { category: "Rewards", score: rewards, weight: 30 },
    { category: "Fees", score: fees, weight: 25 },
    { category: "Availability", score: availability, weight: 20 },
    { category: "Custody and trust", score: custody, weight: 15 },
    { category: "Features", score: features, weight: 10 },
  ];

  const raw = breakdown.reduce((sum, b) => sum + (b.score * b.weight) / 100, 0);
  const score = Math.round(raw * 10) / 10;

  const hasBands = !!card.cashbackBands && card.cashbackBands.length > 0;
  const hasFees = !!card.feeBreakdown;
  const status: RatingStatus = hasBands && hasFees ? "verified" : "provisional";

  return { score, status, breakdown };
}
