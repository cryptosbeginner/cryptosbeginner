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
    date: "2026-10-21",
    type: "catalog-update",
    cardName: "1inch Card",
    cardSlug: "1inch-card",
    title: "1inch Card program closes December 18, 2026",
    details:
      "As reported in October 2026, the 1inch Card program closes on December 18, 2026. New sign-ups are already closed, and cardholders have been told to spend or withdraw their balances before the shutdown date. The Mastercard was issued by Monavate and powered by Crypto Life and Baanx. This is based on reports, not an issuer notice we could retrieve directly.",
    sourceLabel: "Reports, October 2026; issuer notice not directly retrievable",
  },
  {
    date: "2026-10-21",
    type: "catalog-update",
    cardName: "Holyheld Card",
    cardSlug: "holyheld-card",
    title: "Holyheld personal accounts and cards closing as issuer Unlimit exits",
    details:
      "As reported in October 2026, issuer Unlimit is closing Holyheld personal accounts and cards. New personal accounts are now invitation-only, and Holyheld is pivoting to business accounts and APIs. Personal cardholders should move spending and any partner-held balances to another card. Based on reports; no issuer notice was directly retrievable.",
    sourceLabel: "Reports, October 2026; issuer notice not directly retrievable",
  },
  {
    date: "2026-10-21",
    type: "promo",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST Uber cashback promo in Latin America, plus 0% FX in 16 LATAM currencies",
    details:
      "Reported promotion, October 19 to November 18, 2026: 50% cashback on the first Uber ride and 10% on following rides, capped at $10 (Latin America excluding Brazil), $15 in Brazil, and $8 for existing Brazil users. KAST also advertises 0% FX fees on purchases in 16 Latin American currencies until the end of 2027. Promotion as reported by @0xDani; confirm current terms in the KAST app.",
    sourceLabel: "@0xDani report, October 2026",
  },
  {
    date: "2026-10-21",
    type: "launch",
    cardName: "Pulsar Money Card",
    cardSlug: "pulsar-money-card",
    title: "Pulsar Money launches with 0% swap fees on EUR and USD conversions",
    details:
      "Pulsar Money (@PulsarMoneyApp) has launched with 0% swap fees on EUR to USD and USD to USDT conversions via StableFX, EUR card spending, and SEPA payouts in euros. Card network, issuer, and a full fee schedule are not published yet, so the listing marks those fields as unpublished.",
    sourceLabel: "Pulsar Money (@PulsarMoneyApp) launch reports, October 2026",
  },
  {
    date: "2026-10-19",
    type: "market",
    cardName: "Crypto card market",
    title: "Crypto card spending tripled in a year: $403M to $1.22B",
    details:
      "Per-card figures from researcher @0xVishnya (Oct 14, 2026) show September 2026 spend at $1.22B vs $403M a year earlier. Fastest growers: Tria 108x, Kolo/Karta/Avici 16x each, Tuyo 9.4x, ether.fi 5.4x. RedotPay still leads absolute volume at $537.9M topped up. Full breakdown in our market article. Figures are the researcher's tracking; his methodology is not published.",
    sourceUrl: "https://www.cryptosbeginner.com/crypto-cards/news/crypto-card-spending-tripled-2026",
    sourceLabel: "CryptosBeginner market article; data attributed to @0xVishnya",
  },
  {
    date: "2026-10-19",
    type: "launch",
    cardName: "AnomaPay Card",
    cardSlug: "anomapay-card",
    title: "AnomaPay Card announced, waitlist open",
    details:
      "AnomaPay, the non-custodial privacy-preserving payments app built on Anoma's intent architecture, has announced a crypto card with a waitlist signup. Planned features include referral bonuses and reward earning, but no card network, issuer, fee schedule, or launch date is published. Added to the catalog as a pre-launch listing.",
    sourceUrl: "https://anomapay.app/",
    sourceLabel: "AnomaPay official site",
  },
  {
    date: "2026-10-19",
    type: "launch",
    cardName: "Plasma One",
    cardSlug: "plasma-one-card",
    title: "Plasma One Card review published with full fee tables",
    details:
      "Full review of the self-custodial Plasma One Visa card: Lite free (2% XPL on first $500/month), Core $199/year or 20,000 XPL lock (3% base), Platinum 100,000 XPL lock promo (4% base, 0% FX). Real fee tables from the help center, deposit networks, ATM limits, and country availability, tested on the live app.",
    sourceLabel: "Plasma help center; Plasma One app (verified from in-app images)",
  },
  {
    date: "2026-10-18",
    type: "launch",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash review published with full fee tables",
    details:
      "Our hands-on ether.fi Cash review is live, built from in-app screenshots: all four membership tiers (Core, Luxe, Pinnacle, VIP), 3% cashback with monthly caps, borrow mode from 1.43%, ATM and FX fee tables, and bank transfer availability across 162 countries.",
    sourceLabel: "CryptosBeginner review",
  },
  {
    date: "2026-10-18",
    type: "launch",
    cardName: "Plasma One vs Tria",
    title: "Plasma One vs Tria comparison published",
    details:
      "New comparison guide: two self-custodial Visa cards on Rain infrastructure compared side by side on cashback tiers, monthly caps, FX fees, and app features. Includes corrections to viral social media claims (Tria perps are 40x, not 50x).",
    sourceLabel: "CryptosBeginner guide",
  },
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

