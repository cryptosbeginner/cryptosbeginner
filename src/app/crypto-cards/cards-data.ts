export type CardCategory = "prepaid" | "debit" | "dual-mode" | "self-custody";

export type CardListing = {
  slug: string;
  name: string;
  provider: string;
  network: string;
  categories: CardCategory[];
  shortDescription: string;
  editorialSummary: string;
  bestFor: string;
  availability: string;
  regions: string[];
  pricing: string;
  rewards: string;
  funding: string;
  cardFormats: string[];
  sourceUrl: string;
  sourceLabel: string;
  imageUrl: string;
  imageAlt: string;
  imageSourceNote: string;
  reviewedAt: string;
  caution: string;
};

export const cardListings: CardListing[] = [
  {
    slug: "coinbase-card",
    name: "Coinbase Card",
    provider: "Coinbase",
    network: "Visa",
    categories: ["prepaid", "debit"],
    shortDescription: "A US-focused Visa prepaid debit card that converts crypto to USD when you spend.",
    editorialSummary: "Coinbase positions this card as a bridge between a Coinbase balance and everyday Visa purchases. The important detail is that crypto is converted to USD for spending; the reward rate is an optional, variable US offer rather than a permanent universal rate.",
    bestFor: "People who already use Coinbase and want a familiar cash-or-crypto spending rail.",
    availability: "United States; Coinbase says all states except Hawaii on the reviewed page.",
    regions: ["United States"],
    pricing: "No Coinbase transaction fees or annual fee are advertised on the reviewed page; a spread may apply when crypto is bought, sold, or traded.",
    rewards: "Optional crypto rewards for eligible US card users; the rate is variable and should be checked in the Coinbase app.",
    funding: "Coinbase balance, bank account funding, or eligible paycheck deposit; crypto is converted to USD for purchases and ATM withdrawals.",
    cardFormats: ["Virtual", "Physical"],
    sourceUrl: "https://www.coinbase.com/card",
    sourceLabel: "Coinbase Card product page",
    imageUrl: "https://images.ctfassets.net/o10es7wu5gm1/4AsEsKXTMmSVky9wG1MNqM/1ceaf6ca937f526948ea3b909edb2e71/landing_hero_white_bg.png",
    imageAlt: "Blue Coinbase Visa debit card on a white background",
    imageSourceNote: "Official Coinbase-hosted product image",
    reviewedAt: "2026-08-27",
    caution: "Eligibility, limits, rewards, and account verification requirements apply. This is not a credit card recommendation.",
  },
  {
    slug: "crypto-com-visa-card",
    name: "Crypto.com Visa Card",
    provider: "Crypto.com",
    network: "Visa",
    categories: ["prepaid"],
    shortDescription: "A prepaid Visa card with tiered CRO rewards, subscription options, or CRO lockup requirements.",
    editorialSummary: "Crypto.com publishes multiple card tiers rather than one flat product. The cost-and-benefit trade-off depends on the selected tier, CRO subscription or lockup route, reward caps, ATM allowance, and the country-specific cardholder agreement.",
    bestFor: "Users comparing a tiered prepaid card model and willing to read the current regional terms.",
    availability: "Jurisdiction-dependent; Crypto.com publishes separate regional disclosures.",
    regions: ["United States", "Europe", "Canada", "Australia", "Brazil", "Singapore", "United Kingdom"],
    pricing: "The reviewed USD table showed free Midnight Blue, $4.99/month or $49.90/year Ruby Steel, and $29.99/month or $299.90/year Jade Green; higher tiers use CRO lockup requirements. Terms vary by region.",
    rewards: "The reviewed USD table showed 0% to 5% CRO rewards on everyday spending by tier, with caps on some tiers; offers can change.",
    funding: "Crypto is converted to the applicable market currency before loading and spending; cardholders cannot load cryptocurrency directly onto the prepaid card.",
    cardFormats: ["Virtual", "Physical"],
    sourceUrl: "https://crypto.com/en/cards/",
    sourceLabel: "Crypto.com Cards page",
    imageUrl: "https://mkt-site-asset.crypto.com/assets/card-page/tiers/Midnight_2.webp",
    imageAlt: "Crypto.com Midnight Blue Visa prepaid card",
    imageSourceNote: "Official Crypto.com-hosted tier image",
    reviewedAt: "2026-08-27",
    caution: "Rewards, lockups, limits, fees, issuers, and availability vary by country and card tier. Verify the applicable cardholder agreement before applying.",
  },
  {
    slug: "wirex-one-card",
    name: "Wirex One Card",
    provider: "Wirex",
    network: "Visa or Mastercard",
    categories: ["debit", "prepaid"],
    shortDescription: "A virtual, physical, or metal card tied to the Wirex One spending platform.",
    editorialSummary: "Wirex One is presented as a multi-format spending product for crypto and fiat users. Wirex advertises zero FX fees and cashback by membership tier, but the headline reward range should be read alongside eligibility, tier rules, and jurisdictional availability.",
    bestFor: "People looking for a broad international card proposition with virtual, physical, and metal formats.",
    availability: "Wirex advertises availability in 150+ countries, subject to product and jurisdictional restrictions.",
    regions: ["150+ countries advertised; verify residence eligibility"],
    pricing: "The reviewed product page advertises no monthly or annual card fee; applicable terms and regional charges should be checked with Wirex.",
    rewards: "Wirex advertises 0.5% to 8% cashback in USD depending on membership tier.",
    funding: "Spend crypto and fiat through the Wirex One app; conversion and supported-asset details depend on the account and region.",
    cardFormats: ["Virtual", "Physical", "Visa Signature Metal"],
    sourceUrl: "https://www.wirexapp.com/stablecoin-and-crypto-card",
    sourceLabel: "Wirex One product page",
    imageUrl: "https://static.wixstatic.com/media/f627bc_55b10739e1a34d64a4e43c3dbfa09e3c~mv2.png",
    imageAlt: "Wirex physical crypto card",
    imageSourceNote: "Official Wirex-hosted product image",
    reviewedAt: "2026-08-27",
    caution: "Wirex states that availability and features are subject to jurisdictional limitations. Headline cashback is not a guaranteed rate for every user.",
  },
  {
    slug: "metamask-card",
    name: "MetaMask Card",
    provider: "MetaMask",
    network: "Mastercard",
    categories: ["debit", "self-custody"],
    shortDescription: "A crypto debit card connected to a MetaMask wallet, with Virtual and Metal options.",
    editorialSummary: "MetaMask emphasizes that users retain control of supported wallet assets until payment. The product has a free Virtual option and a paid Metal option, with supported networks, tokens, regions, and transaction fees that need to be checked before sign-up.",
    bestFor: "Self-custody users who want a wallet-linked spending experience instead of a conventional exchange balance.",
    availability: "Country and territory dependent; the reviewed page listed supported countries and noted temporarily closed US and UK signups.",
    regions: ["Selected countries in Europe and Latin America; verify current list"],
    pricing: "Virtual is listed as free; Metal is listed at $199/year. A minimal transaction fee may apply.",
    rewards: "The reviewed page lists 1% mUSD back for Virtual and 3% for Metal on the first $10,000 of spend, then 1% for Metal; terms apply.",
    funding: "Supported assets can be managed from MetaMask on Linea, Solana, Monad, and Base, with conversion at checkout.",
    cardFormats: ["Virtual", "Metal"],
    sourceUrl: "https://metamask.io/card",
    sourceLabel: "MetaMask Card product page",
    imageUrl: "https://images.ctfassets.net/clixtyxoaeas/5VagZ4WBPVakQ7kz8uqo23/6788ca0e712c6c8a5f87ea7d5a1fc187/card-hero.png?w=2048&q=75&fm=avif",
    imageAlt: "MetaMask Card product image",
    imageSourceNote: "Official MetaMask-hosted product image",
    reviewedAt: "2026-08-27",
    caution: "Self-custody does not remove smart-contract, wallet, conversion, tax, or payment-rail risk. Do not enter a seed phrase anywhere to obtain a card.",
  },
  {
    slug: "nexo-card",
    name: "Nexo Card",
    provider: "Nexo",
    network: "Mastercard",
    categories: ["dual-mode", "debit"],
    shortDescription: "A dual-mode card that can spend digital assets or access credit against collateral.",
    editorialSummary: "Nexo’s defining distinction is the switch between Debit Mode and Credit Mode. That flexibility also adds complexity: borrowing against crypto introduces collateral and liquidation considerations, while physical-card access and rewards depend on balance, loyalty tier, and region.",
    bestFor: "Eligible users who understand the difference between spending assets and borrowing against them.",
    availability: "Selected European countries including the EEA and UK, subject to identity verification and eligibility.",
    regions: ["EEA and United Kingdom, selected countries"],
    pricing: "Nexo states no monthly, annual, or inactivity card fees; FX charges and other terms vary by region, tier, and usage.",
    rewards: "Up to 2% crypto cashback in Credit Mode, with published tier and balance requirements.",
    funding: "Debit Mode spends eligible digital assets; Credit Mode borrows against collateral without selling the collateral asset.",
    cardFormats: ["Virtual", "Physical"],
    sourceUrl: "https://nexo.com/crypto-card",
    sourceLabel: "Nexo Card product page",
    imageUrl: "https://content.nexo.com/media/crypto_card-atf_full-card-d-row.jpg",
    imageAlt: "Nexo crypto card",
    imageSourceNote: "Official Nexo-hosted product image",
    reviewedAt: "2026-08-27",
    caution: "Credit Mode is borrowing, not free spending. Collateral, interest, liquidation, eligibility, and tax considerations require separate review.",
  },
  {
    slug: "ledger-cl-card",
    name: "CL Card, Ledger-compatible",
    provider: "Baanx, designed for Ledger",
    network: "Visa",
    categories: ["debit", "self-custody"],
    shortDescription: "A provider-issued crypto debit card designed to work with Ledger Wallet and Ledger signers.",
    editorialSummary: "Ledger’s card program is a partner marketplace rather than a Ledger-issued card. The CL Card page attributes the product to Baanx and explains that regional providers and account arrangements can differ, while Ledger Wallet provides the funding workflow.",
    bestFor: "Ledger users who want to connect hardware-wallet workflows with a card provider.",
    availability: "Country-dependent; the provider and underlying account arrangement vary by residence.",
    regions: ["Country-dependent; check the card flow in Ledger Wallet"],
    pricing: "The reviewed product page does not present one universal fee schedule; provider and country terms apply.",
    rewards: "1% cashback in BTC, USDC, or USDT depending on country of residence; no staking required is advertised.",
    funding: "Ledger Wallet can fund the card with BTC, ETH, SOL, stablecoins, and other supported assets; Apple Pay and Google Pay are listed.",
    cardFormats: ["Virtual", "Physical"],
    sourceUrl: "https://shop.ledger.com/pages/cl-card-crypto-card",
    sourceLabel: "Ledger CL Card product page",
    imageUrl: "https://ledger.com/cdn-cgi/image/width=3840,format=auto/https://images.ctfassets.net/ge894kijjvls/1LCkGVxczDIXQIfcXJJn5i/d33ec47a90536b2dc859a00f21b2f0b7/hero_cl_card_desktop__2_.webp",
    imageAlt: "Ledger-compatible CL Card with Ledger device",
    imageSourceNote: "Official Ledger-hosted product image",
    reviewedAt: "2026-08-27",
    caution: "Ledger is not the card issuer. Provider, fee, issuer, and country-specific terms must be verified before applying.",
  },
];

export function getCardBySlug(slug: string) {
  return cardListings.find((card) => card.slug === slug);
}

export const cardCategories: { value: "all" | CardCategory; label: string }[] = [
  { value: "all", label: "All approaches" },
  { value: "prepaid", label: "Prepaid" },
  { value: "debit", label: "Debit" },
  { value: "dual-mode", label: "Dual-mode" },
  { value: "self-custody", label: "Self-custody" },
];
