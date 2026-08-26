export type CardCategory =
  | "Everyday spending"
  | "Self-custody"
  | "Rewards"
  | "Credit"
  | "Bitcoin"
  | "Provider ecosystem";

export type KycLevel = "No KYC claim" | "Verification required" | "Provider-dependent";
export type CustodyModel = "Self-custody until payment" | "Account-based" | "Provider-dependent";

export type CryptoCard = {
  slug: string;
  name: string;
  issuer: string;
  category: CardCategory;
  network: string;
  kyc: KycLevel;
  custody: CustodyModel;
  regions: string[];
  regionLabel: string;
  funding: string;
  headline: string;
  summary: string;
  standout: string;
  checkFirst: string;
  officialUrl: string;
  sourceUrl: string;
  lastReviewed: string;
  tags: string[];
  logoUrl?: string;
  imageUrl?: string;
  visualCredit?: string;
};

export const cardCategories: Array<"All" | CardCategory> = [
  "All",
  "Everyday spending",
  "Self-custody",
  "Rewards",
  "Credit",
  "Bitcoin",
  "Provider ecosystem",
];

export const kycFilters: Array<"All" | KycLevel> = [
  "All",
  "No KYC claim",
  "Verification required",
  "Provider-dependent",
];

export const custodyFilters: Array<"All" | CustodyModel> = [
  "All",
  "Self-custody until payment",
  "Account-based",
  "Provider-dependent",
];

export const cryptoCards: CryptoCard[] = [
  {
    slug: "coinbase-card",
    name: "Coinbase Card",
    issuer: "Coinbase",
    category: "Rewards",
    network: "Visa debit",
    kyc: "Verification required",
    custody: "Account-based",
    regions: ["United States"],
    regionLabel: "United States; Hawaii excluded on the current product page",
    funding: "Cash or crypto balances; crypto is converted to USD at purchase",
    headline: "A straightforward US crypto-rewards debit card",
    summary:
      "Coinbase describes its card as a Visa prepaid debit card that lets eligible US users spend cash or crypto and receive variable crypto rewards.",
    standout: "No annual fee stated on the current issuer page; reward rate and terms can change.",
    checkFirst:
      "The issuer says it must collect identifying information to open a card account. Check current state availability, limits, spreads, and the Cardholder Agreement before applying.",
    officialUrl: "https://www.coinbase.com/card",
    sourceUrl: "https://www.coinbase.com/card",
    lastReviewed: "2026-08-26",
    tags: ["US", "Visa", "Rewards", "Debit"],
    logoUrl: "https://cdn.simpleicons.org/coinbase/ffffff",
    imageUrl: "/images/cards/coinbase-card.png",
    visualCredit: "Issuer-hosted product visual",
  },
  {
    slug: "metamask-card",
    name: "MetaMask Card",
    issuer: "MetaMask",
    category: "Self-custody",
    network: "Mastercard",
    kyc: "Verification required",
    custody: "Self-custody until payment",
    regions: ["Europe", "Latin America", "Canada", "Selected markets"],
    regionLabel: "Selected countries; eligibility changes by region",
    funding: "Supported tokens from a connected MetaMask wallet",
    headline: "Spend from a wallet without moving funds to a conventional exchange",
    summary:
      "MetaMask says its card connects to supported wallet networks and keeps users in control of their funds until the payment is made.",
    standout: "A free virtual tier is shown alongside a paid Metal tier; rewards and limits differ by tier.",
    checkFirst:
      "The issuer lists supported countries, networks, tokens, fees, and card limits separately. Confirm current availability and onboarding requirements in the MetaMask app.",
    officialUrl: "https://metamask.io/card",
    sourceUrl: "https://metamask.io/card",
    lastReviewed: "2026-08-26",
    tags: ["Self-custody", "Mastercard", "Virtual", "Apple Pay"],
    logoUrl: "https://cdn.simpleicons.org/metamask/ffffff",
    imageUrl: "/images/cards/metamask-card.png",
    visualCredit: "Issuer-hosted product visual",
  },
  {
    slug: "wirex-one",
    name: "Wirex One",
    issuer: "Wirex",
    category: "Everyday spending",
    network: "Visa or Mastercard, depending on program",
    kyc: "Provider-dependent",
    custody: "Provider-dependent",
    regions: ["Global", "Selected markets"],
    regionLabel: "Available countries, card types, and tiers vary",
    funding: "Digital assets and fiat balances through the Wirex platform",
    headline: "A multi-currency spending product with virtual and physical options",
    summary:
      "Wirex presents Wirex One as a card and payments product with virtual, physical, and premium metal options, plus support for digital and traditional assets.",
    standout: "The issuer advertises zero FX fees in selected contexts and rewards that vary by membership tier.",
    checkFirst:
      "Availability, fees, reward tiers, custody, and regional rules are product- and country-specific. Read the current fee schedule and account terms rather than relying on headline rewards.",
    officialUrl: "https://www.wirexapp.com/stablecoin-and-crypto-card",
    sourceUrl: "https://www.wirexapp.com/stablecoin-and-crypto-card",
    lastReviewed: "2026-08-26",
    tags: ["Multi-currency", "Virtual", "Physical", "Rewards"],
    logoUrl: "https://cdn.simpleicons.org/wirex/ffffff",
  },
  {
    slug: "crypto-com-visa-signature",
    name: "Crypto.com Visa Signature Credit Card",
    issuer: "Crypto.com",
    category: "Credit",
    network: "Visa Signature",
    kyc: "Verification required",
    custody: "Account-based",
    regions: ["United States"],
    regionLabel: "US product page; jurisdictional availability applies",
    funding: "Crypto.com App account and credit-card balance repayment",
    headline: "A crypto-rewards credit-card product with tiered benefits",
    summary:
      "Crypto.com describes this US product as a Visa Signature credit card with BTC or CRO rewards and multiple Level Up tiers.",
    standout: "The current issuer page describes tiered rewards, possible subscriptions or lockups, and credit approval requirements.",
    checkFirst:
      "Credit approval, APR, reward caps, tier costs, lockup or subscription terms, and jurisdictional availability all matter. Review the issuer’s current agreements before applying.",
    officialUrl: "https://crypto.com/us/cards",
    sourceUrl: "https://crypto.com/us/cards",
    lastReviewed: "2026-08-26",
    tags: ["US", "Visa", "Credit", "BTC rewards"],
    logoUrl: "https://cdn.simpleicons.org/crypto-dot-com/ffffff",
    imageUrl: "/images/cards/crypto-com-card.webp",
    visualCredit: "Issuer-hosted product visual",
  },
  {
    slug: "gnosis-pay-card",
    name: "Gnosis Card",
    issuer: "Gnosis Pay",
    category: "Self-custody",
    network: "Visa debit",
    kyc: "Verification required",
    custody: "Self-custody until payment",
    regions: ["Europe", "Latin America", "Selected markets"],
    regionLabel: "Selected countries; confirm eligibility before ordering",
    funding: "Stablecoins and supported assets through a Safe account",
    headline: "A self-custody-oriented Visa card for supported markets",
    summary:
      "Gnosis Pay’s documentation describes Gnosis Card as a stablecoin-based Visa debit card that uses the Gnosis Pay network and a Safe account.",
    standout: "The documentation emphasizes self-custody and describes partner APIs for card programs and onboarding.",
    checkFirst:
      "The documentation and help center separate card availability, identity checks, and partner requirements. Confirm the current country list, supported assets, fees, and Safe setup.",
    officialUrl: "https://gnosispay.com/",
    sourceUrl: "https://docs.gnosispay.com/",
    lastReviewed: "2026-08-26",
    tags: ["Self-custody", "Visa", "Stablecoins", "Safe"],
    logoUrl: "https://cdn.simpleicons.org/gnosis/ffffff",
  },
  {
    slug: "ledger-compatible-card-program",
    name: "Ledger-compatible card programs",
    issuer: "Ledger partners",
    category: "Provider ecosystem",
    network: "Visa or Mastercard, depending on provider",
    kyc: "Provider-dependent",
    custody: "Provider-dependent",
    regions: ["Selected markets"],
    regionLabel: "Country and provider dependent",
    funding: "Digital assets or fiat, depending on the provider program",
    headline: "Card options designed to work with the Ledger ecosystem",
    summary:
      "Ledger explains that compatible crypto cards are provided by partners, while Ledger Live can help users manage transfers or delegated assets for supported programs.",
    standout: "This is an ecosystem category, not a single card issuer or universal product.",
    checkFirst:
      "Do not assume Ledger issues the card. Read the named provider’s requirements, custody model, fees, country coverage, and cardholder agreement.",
    officialUrl: "https://www.ledger.com/card-program",
    sourceUrl: "https://www.ledger.com/card-program",
    lastReviewed: "2026-08-26",
    tags: ["Ledger", "Partner-issued", "Visa", "Mastercard"],
    logoUrl: "https://cdn.simpleicons.org/ledger/ffffff",
  },
];

export const cardFaqs = [
  {
    question: "What is a crypto card?",
    answer:
      "A crypto card is a payment card connected to a crypto account, wallet, or stablecoin balance. Depending on the product, crypto may be converted to local currency at checkout or moved into a card balance before spending.",
  },
  {
    question: "Do crypto cards require KYC?",
    answer:
      "Many card programs require identity verification because card issuance, payments, and regulated financial services are jurisdiction-sensitive. A marketing label such as no KYC should never be treated as proof that an issuer collects no identity, payment, device, or transaction data.",
  },
  {
    question: "Which crypto cards support self-custody?",
    answer:
      "Some products are designed to keep assets in a user-controlled wallet until payment, while others use an account balance or custodial platform. The directory labels the stated custody model and flags provider-dependent programs for separate checking.",
  },
  {
    question: "What should I compare before choosing a crypto card?",
    answer:
      "Compare country eligibility, card network, custody, KYC requirements, funding assets, conversion and FX costs, ATM rules, spending limits, reward conditions, tax records, support, and how easily you can freeze or exit the product.",
  },
];
