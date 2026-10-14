/**
 * Crypto cards data: single source of truth for the /cards section.
 *
 * Every fee/limit figure carries a `verifiedOn` date and links to the
 * official fee page. Availability uses a tristate model per card:
 * "available" (issuer publishes the country), "unavailable" (issuer
 * excludes it), "unclear" (no published list). Never claim "global"
 * without a published country list.
 */

export type CardNetwork = "Visa" | "Mastercard" | "Amex";
export type CardType = "virtual" | "physical";

export interface CashbackInfo {
  rate: string;
  cap?: string;
  token?: string;
  conditions?: string;
}

export interface CryptoCard {
  slug: string;
  name: string;
  tagline: string;
  cardNetwork: CardNetwork;
  cardTypes: CardType[];
  issuer?: string;
  custody: "custodial" | "self-custody" | "hybrid";
  kycRequired: boolean;
  issuanceFee: { virtual?: string; physical?: string };
  annualFee: string;
  cashback: CashbackInfo;
  fxFee: string;
  topUpFee: string;
  atmFee: string;
  atmDailyLimit?: string;
  spendDailyLimit?: string;
  regions: {
    /** ISO country codes the issuer confirms as supported */
    available: string[];
    /** ISO country codes the issuer confirms as excluded */
    excluded: string[];
    /** free-text note when no published list exists */
    note?: string;
  };
  networks: string[];
  applePay: boolean;
  googlePay: boolean;
  affiliateUrl?: string;
  affiliate: boolean;
  ratings?: {
    trustpilot?: string;
    googlePlay?: string;
    appStore?: string;
  };
  pros: string[];
  cons: string[];
  verifiedOn: string;
  officialFeesUrl: string;
  reviewUrl: string;
}

export const cards: CryptoCard[] = [
  {
    slug: "redotpay",
    name: "RedotPay",
    tagline: "High-limit Visa card for spending crypto in 100+ countries",
    cardNetwork: "Visa",
    cardTypes: ["virtual", "physical"],
    issuer: "Licensed Visa issuer (Hong Kong)",
    custody: "custodial",
    kycRequired: true,
    issuanceFee: { virtual: "$10 one-time", physical: "$100 one-time" },
    annualFee: "None",
    cashback: {
      rate: "None on standard cards",
      conditions: "Promotional cashback campaigns run from time to time",
    },
    fxFee: "1% conversion + 1.2% FX markup (2.2% total on non-USD spend)",
    topUpFee: "Free via on-chain crypto deposit; 3% via bank card; 1% via Binance Pay",
    atmFee: "2% (physical card only)",
    atmDailyLimit: "Up to $1,000,000 reported (varies by KYC level)",
    spendDailyLimit: "Up to $1,000,000 reported (varies by KYC level)",
    regions: {
      available: [],
      excluded: ["US"],
      note:
        "RedotPay reports 100+ supported countries. No public country list found, so availability outside the US exclusion is unclear: check the app before relying on it.",
    },
    networks: ["TRC20", "ERC20", "BEP20", "Polygon", "Arbitrum", "Solana", "Bitcoin"],
    applePay: true,
    googlePay: true,
    affiliateUrl: "https://go.cryptosbeginner.com/RedotPay",
    affiliate: true,
    ratings: {
      trustpilot: "3.0 out of 5 (800+ reviews)",
      googlePlay: "4.5 out of 5 (68,000+ reviews)",
      appStore: "4.8 out of 5 (3,700+ ratings)",
    },
    pros: [
      "Very high spending limits for a crypto card",
      "Fast virtual card setup after KYC",
      "Free on-chain crypto top-ups",
      "No monthly or annual fee",
    ],
    cons: [
      "No cashback on standard cards",
      "2.2% total cost on non-USD spending",
      "Full KYC required",
      "Not officially available in the US",
    ],
    verifiedOn: "2026-10-14",
    officialFeesUrl: "https://www.redotpay.com",
    reviewUrl: "/cards/redotpay-review",
  },
  {
    slug: "tevau",
    name: "Tevau",
    tagline: "USDT-first Visa card with low top-up fees",
    cardNetwork: "Visa",
    cardTypes: ["virtual", "physical"],
    issuer: "Not disclosed",
    custody: "custodial",
    kycRequired: true,
    issuanceFee: { virtual: "$20 one-time", physical: "$100 one-time" },
    annualFee: "None",
    cashback: {
      rate: "None",
      conditions: "Tevau Earn offers up to 4.49% APR on idle USDT (promotional)",
    },
    fxFee: "1.2%",
    topUpFee: "~1% to move USDT to card balance",
    atmFee: "1.9%",
    atmDailyLimit: "Not disclosed",
    spendDailyLimit: "Up to $3,000,000 reported by reviewers",
    regions: {
      available: [],
      excluded: ["US", "DZ", "EG", "TR"],
      note:
        "Tevau claims 180-200+ countries but publishes no full list. Virtual cards were removed for Algeria, Egypt, and Turkey around August 2026 (Visa compliance). Community reports of issues in Bangladesh and Thailand. Treat availability as unclear unless confirmed in the app.",
    },
    networks: ["TRC20", "BEP20"],
    applePay: true,
    googlePay: true,
    affiliateUrl: "https://go.cryptosbeginner.com/Tevau",
    affiliate: true,
    ratings: {
      googlePlay: "3.4 out of 5 (700+ ratings)",
      appStore: "Not enough ratings to display",
    },
    pros: [
      "Simple, transparent fee structure",
      "Low 1% top-up fee",
      "Fast virtual card issuance after KYC",
      "Tevau Earn yield on idle USDT",
    ],
    cons: [
      "Virtual cards removed in Algeria, Egypt, Turkey",
      "USDT/USDC only for top-ups",
      "Thin public review base",
      "$3 inactivity fee after 90 days",
    ],
    verifiedOn: "2026-10-14",
    officialFeesUrl: "https://www.tevau.co/faqs/",
    reviewUrl: "/cards/tevau-review",
  },
];

/** Cards with published reviews, shown in the comparison table. */
export const liveCards = cards.filter((c) => c.reviewUrl);

/** Country names for the region filter (ISO code -> display name). */
export const regionFilterCountries: { code: string; name: string }[] = [
  { code: "US", name: "United States" },
  { code: "DZ", name: "Algeria" },
  { code: "EG", name: "Egypt" },
  { code: "TR", name: "Turkey" },
  { code: "AE", name: "UAE" },
  { code: "GB", name: "United Kingdom" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "PH", name: "Philippines" },
  { code: "NG", name: "Nigeria" },
];

/**
 * Tristate availability check for a card in a country.
 * "available" = issuer confirms support; "unavailable" = issuer excludes it;
 * "unclear" = no published information either way.
 */
export function availabilityFor(
  card: CryptoCard,
  countryCode: string
): "available" | "unavailable" | "unclear" {
  if (card.regions.excluded.includes(countryCode)) return "unavailable";
  if (card.regions.available.includes(countryCode)) return "available";
  return "unclear";
}
