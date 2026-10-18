export interface CardNewsEntry {
  date: string; // YYYY-MM-DD
  type: "fee-change" | "promo" | "launch" | "catalog-update" | "market";
  cardName: string;
  cardSlug?: string;
  title: string;
  details: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

// Newest first. Only entries verifiable against an official source or our own
// published catalog changes are listed here. Third-party claims are attributed.
export const CARD_NEWS: CardNewsEntry[] = [
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Gnosis Pay",
    cardSlug: "gnosis-pay-card",
    title: "Gnosis Pay consumer card shuts down December 20",
    details:
      "Gnosis Pay notified cardholders on September 21 that the consumer card and web app stop working on December 20, 2026 at 23:59 UTC. Users keep their self-custodial Safe and all assets inside it, with no withdrawal deadline. New sign-ups closed September 30; GNO cashback ended with final distribution October 7. The company is pivoting to B2B white-label card infrastructure.",
    sourceLabel: "Multiple secondary reports (Crypto Briefing, Binance Square); original cardholder notice not directly retrievable",
  },
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Bitget",
    title: "Bitget adds Russia and Belarus to prohibited countries",
    details:
      "Bitget's updated Terms of Use (October 16, 2026) added Russia and Belarus to its prohibited-country list. Thailand was already prohibited in earlier versions, contrary to some social media reports. Affected users receive individual deadlines and withdrawal instructions; there is no universal cutoff date. Note: this concerns the Bitget exchange; no official notice links the separate Bitget Wallet Card to this offboarding.",
    sourceLabel: "Bitget official Terms of Use; crypto.news, TronWeekly",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Worked cost examples added to card pages",
    details:
      "Five cards with published fee schedules (Tria, Solid, RedotPay, Bybit, DogPay) now show line-by-line worked examples: ATM withdrawals and FX purchases with each fee shown separately, so readers can see exactly where the money goes before applying.",
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Effective cashback rankings launched",
    details:
      "A new ranking computes each card's net effective cashback at $500, $1,000 and $2,000 monthly spend after monthly caps and annual fees. 29 cards rank on a base rate; 22 more publish only promotional maximums and are listed separately so headline rates cannot win by omission.",
    cardSlug: undefined,
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Kraken",
    title: "Kraken referral link updated site-wide",
    details:
      "All Kraken links across exchange reviews, card listings, region guides and tools now use the current referral link (up to $200 each for referrer and referee). The previous masked redirect was retired.",
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-17",
    type: "fee-change",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "New official fee schedule (effective December 1, 2025)",
    details:
      "RedotPay published a new fee schedule: $10 virtual card, $100 physical card, $5 first replacement then $10, 1.20% non-default currency fee, 1.00% transaction (conversion) fee, USD ATM 2% up to $10k/month then 3%. Our listing and fee table were rebuilt from the official image.",
    sourceLabel: "RedotPay official fee schedule",
  },
  {
    date: "2026-10-17",
    type: "launch",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "RedotPay Pro tiers documented",
    details:
      "RedotPay Pro: Monthly $12.90 (free virtual card, 3% cashback on Apple/Google Pay) and Annual $129 (free physical card, $1,000/month fee-free ATM, +1% Earn APY boost). The 18 USDs/month Pro cashback cap is reported by third-party reviewers, not confirmed in official terms.",
    sourceLabel: "RedotPay official terms; third-party reviewers for the cap",
  },
  {
    date: "2026-10-17",
    type: "launch",
    cardName: "Tria",
    cardSlug: "tria-card",
    title: "Tria card review published",
    details:
      "Full review of the self-custodial Tria Visa card: Lite $20/year (1.5% on first $1,000/month), Pro $109/year (4.5% on first $1,000/month), Max $250/year (6% on first $2,000/month). ATM costs $1.00 plus 1% per withdrawal.",
    sourceLabel: "Tria app (verified from in-app images)",
  },
  {
    date: "2026-10-15",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Card catalog rebuilt to 183 listings",
    details:
      "The directory was overhauled to 183 cards with official issuer artwork, verified fees and limits, and duplicate listings merged. Each listing carries a 'facts checked' date and a source link.",
    sourceLabel: "CryptosBeginner catalog",
  },
];

export function getNewsByType(type: CardNewsEntry["type"]): CardNewsEntry[] {
  return CARD_NEWS.filter((entry) => entry.type === type);
}
