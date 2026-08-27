import { cardListings, type CardListing } from "./cards-data";

export type EditorialPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  criteria: string[];
  cardSlugs: string[];
  excludedContext?: { name: string; reason: string }[];
  faq: { question: string; answer: string }[];
};

export const editorialPages: EditorialPage[] = [
  {
    slug: "best-crypto-no-kyc-cards",
    title: "Best No-KYC Crypto Cards: What the Claim Actually Means",
    eyebrow: "Privacy claims · verify the footnotes",
    description: "A cautious guide to crypto cards that advertise no-KYC or no-credit-check onboarding, with provider wording, AML caveats, fees, and regional limits kept visible.",
    intro: "No-KYC is not a universal product standard. Some providers mean no photo ID for one virtual-card flow; others mean no credit check, no bank account, or a lighter onboarding route. This shortlist only uses the strongest provider wording we could verify, and it does not promise anonymity, legality, acceptance, or permanent access.",
    criteria: [
      "The provider must make an explicit identity or onboarding statement on an official page.",
      "The exact scope must remain visible, including AML, sanctions, regulatory, BIN, and country caveats.",
      "Fees, funding method, card format, and limits must be clear enough to compare without guessing.",
      "Products with only a no-credit-check or no-bank-account claim are not presented as fully no-KYC.",
    ],
    cardSlugs: ["bingcard"],
    excludedContext: [
      { name: "Kripicard", reason: "The provider says no credit check but separately describes KYC/KYB, sanctions screening, and AML/CFT monitoring." },
      { name: "RedotPay", reason: "The provider describes account verification and regional restrictions, so it is not labeled no-KYC." },
      { name: "wavecard", reason: "The provider states verification is required for its personal vIBAN and Visa Bitcoin debit card." },
    ],
    faq: [
      { question: "Does no-KYC mean no compliance checks?", answer: "No. A provider may omit photo ID or proof of address for one route while still applying AML, sanctions, transaction monitoring, account limits, or other regulatory controls." },
      { question: "Can I use a no-KYC card in every country?", answer: "No. Card networks, issuers, provider policies, local law, BIN availability, merchant categories, and country restrictions can all limit access or acceptance." },
      { question: "Are no-KYC crypto cards anonymous?", answer: "A card transaction is not automatically anonymous. The issuer, processor, merchant, network, wallet, and provider may retain records, and legal obligations can change the information required." },
      { question: "Is this page a recommendation?", answer: "No. It is a source-backed research page. A referral link or inclusion does not guarantee approval, privacy, fees, rewards, security, or suitability." },
    ],
  },
  {
    slug: "best-crypto-cards-for-usa",
    title: "Crypto Cards for the USA: Eligibility Before Rewards",
    eyebrow: "Regional guide · United States",
    description: "A source-backed USA crypto-card shortlist covering eligibility, conversion mechanics, card type, fees, rewards, and issuer context.",
    intro: "US availability is product-specific rather than automatic. This page leads with provider-published eligibility and conversion mechanics, then leaves rewards and fees in their proper context. Check state, issuer, account, and current agreement terms before applying.",
    criteria: ["The official source identifies US availability or a US-specific route.", "The page explains the card type and whether crypto is converted before spending.", "Fees and rewards are described as variable, regional, or conditional where appropriate."],
    cardSlugs: ["coinbase-card", "crypto-com-visa-card", "metamask-card"],
    faq: [
      { question: "Which USA crypto card is best?", answer: "There is no universal best card. Eligibility, issuer, conversion method, fees, rewards, tax treatment, and personal spending needs determine which product deserves further research." },
      { question: "Are crypto-card rewards tax-free in the USA?", answer: "Do not assume that. Rewards, spending, conversions, and disposals can have tax consequences; consult current provider records and a qualified tax professional for your circumstances." },
      { question: "Does a US crypto card spend crypto directly?", answer: "Many products convert crypto to US dollars or another spending balance before or during a purchase. The funding section of each profile explains the provider’s stated model." },
    ],
  },
  {
    slug: "best-crypto-cards-for-eu",
    title: "Crypto Cards for Europe and the EEA: Compare the Rails",
    eyebrow: "Regional guide · Europe / EEA",
    description: "Compare crypto-card products for Europe and the EEA by residency, funding model, FX and conversion costs, verification, and card format.",
    intro: "European availability often depends on country, issuer, licensing route, and whether a provider serves the EEA or only selected markets. This shortlist keeps those conditions visible rather than treating Europe as one uniform market.",
    criteria: ["The provider publishes Europe or EEA eligibility on an official source.", "The profile distinguishes FX fees from crypto conversion or spread costs.", "Verification, card format, and country restrictions remain visible."],
    cardSlugs: ["wavecard", "wirex-one-card", "nexo-card", "crypto-com-visa-card"],
    faq: [
      { question: "Are all EU countries eligible for every card?", answer: "No. EEA access, EU membership, UK access, issuer licensing, and provider country lists are not interchangeable. Confirm your exact residence with the provider." },
      { question: "What fee is most important for European spending?", answer: "It depends on usage. Compare card issuance, subscription, FX, crypto conversion, spread, ATM, top-up, and any tier or lockup requirement rather than looking at one headline rate." },
      { question: "Does a 0% FX claim mean spending crypto is free?", answer: "No. A provider can advertise 0% FX while separately charging conversion fees or applying a spread. Read the funding and pricing sections together." },
    ],
  },
  {
    slug: "best-crypto-cards-for-apac",
    title: "Crypto Cards for APAC: Check Country Rollout and Funding",
    eyebrow: "Regional guide · Asia-Pacific",
    description: "A cautious APAC crypto-card shortlist with country rollout notes, funding mechanics, reward conditions, fees, and provider source links.",
    intro: "APAC is a group of markets, not one eligibility bucket. Provider rollout can differ between Singapore, Japan, South Korea, Australia, and other jurisdictions, so the cards below are research starting points rather than a universal availability claim.",
    criteria: ["The provider identifies APAC or specific Asia-Pacific markets in an official source.", "The product’s funding and reward model is described without turning marketing into a guarantee.", "Readers are directed to the provider’s current country and fee terms."],
    cardSlugs: ["bitget-wallet-card", "crypto-com-visa-card", "wirex-one-card", "redotpay-card"],
    faq: [
      { question: "Are APAC card launches available in every country?", answer: "No. Rollouts are often country-specific and can depend on licensing, issuer coverage, onboarding, and local restrictions." },
      { question: "Should cashback be the main comparison point?", answer: "No. Compare the source of funds, conversion path, FX and ATM charges, reward caps, expiry rules, and eligibility before considering rewards." },
      { question: "Can I rely on a directory for current availability?", answer: "Use the directory as a research index, then confirm the provider’s current application flow and terms for your exact country." },
    ],
  },
  {
    slug: "best-crypto-cards-for-latam",
    title: "Crypto Cards for LATAM: Country and Currency Context",
    eyebrow: "Regional guide · Latin America",
    description: "A regional crypto-card research guide for LATAM, with country caveats, stablecoin and crypto funding notes, fees, verification, and official sources.",
    intro: "Latin American card access varies by country, local currency, issuer, and provider rollout. This page highlights products with relevant regional signals but does not turn a broad marketing footprint into a promise that a card is available at your address.",
    criteria: ["The official source mentions Latin American access, a country route, or relevant regional service restriction.", "Funding and conversion mechanics are described in plain language.", "The page keeps issuer, verification, fee, and country checks ahead of referral CTAs."],
    cardSlugs: ["rizon-card", "crypto-com-visa-card", "redotpay-card", "kardpay-card"],
    faq: [
      { question: "Does a LATAM label mean the card works in every country?", answer: "No. It may describe a selected-country launch, marketing footprint, or a product family. Confirm your exact country, currency, issuer, and onboarding route." },
      { question: "What should I check beyond the card fee?", answer: "Check conversion spreads, FX, ATM charges, top-up methods, settlement currency, local tax treatment, limits, and whether the card is debit, prepaid, or collateral-backed." },
      { question: "Are stablecoin cards the same as bank accounts?", answer: "No. A card-linked balance, payment account, wallet, and bank account can have different legal, custody, safeguarding, and withdrawal characteristics." },
    ],
  },
];

export function getEditorialPage(slug: string) {
  return editorialPages.find((page) => page.slug === slug);
}

export function getEditorialCards(page: EditorialPage): CardListing[] {
  return page.cardSlugs.map((slug) => cardListings.find((card) => card.slug === slug)).filter((card): card is CardListing => Boolean(card));
}
