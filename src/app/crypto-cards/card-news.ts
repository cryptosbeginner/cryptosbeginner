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
    date: "2026-11-04",
    type: "market",
    cardName: "Rain-issued cards",
    title: "Rain is the biggest crypto card issuer: $584.2M spent in October",
    details:
      "Cards issued by Rain processed $584.2M of spending in October 2026, making Rain the largest crypto card issuer by volume, as tracked and reported by @0xVishnya. Rain issues cards for a growing list of programs, including ether.fi Cash, Plasma One, and XPlace. Figures are the researcher's tracking; issuer-reported totals can differ.",
    sourceLabel: "@0xVishnya, November 4, 2026",
  },
  {
    date: "2026-11-04",
    type: "market",
    cardName: "Crypto card market",
    title: "October 2026 tracker: $1.37B spent across crypto card programs",
    details:
      "PaymentScan's October 2026 tracker puts total crypto card spending at $1.37B for the month. The largest named programs are RedotPay, ether.fi Cash, KAST, Wirex One, Karta, Plasma One, and Kolo, with a further $524.9M spread across 28 other programs. That is up from the $1.22B tracked for September 2026.",
    sourceLabel: "paymentscan.xyz, October 2026 tracker",
    sourceUrl: "https://paymentscan.xyz",
  },
  {
    date: "2026-11-01",
    type: "catalog-update",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST drops its token plan and replaces KAST Points with Pioneer Units",
    details:
      "KAST has dropped its planned token and replaced KAST Points with KAST Pioneer Units, as reported by @0xDani and @xKseilas on November 1, 2026. Holders who farmed Points expecting a token conversion are the most affected. We explain what changed and what it means in our guide to the KAST Points change. Treat program rewards as changeable until a token or cash value actually exists.",
    sourceLabel: "@0xDani and @xKseilas reports, November 1, 2026",
  },
  {
    date: "2026-11-01",
    type: "fee-change",
    cardName: "MEXC Card",
    cardSlug: "mexc-card",
    title: "MEXC cashback caps clarified: $50 a month Standard, $150 Premier",
    details:
      "MEXC's cashback FAQ puts monthly cashback caps at $50 on the Standard tier and $150 on Premier, as highlighted by @xKseilas on November 1, 2026. The headline rate of up to 10% cashback only matters until the cap is hit, so heavy spenders should plan around the cap, not the rate. We have updated the MEXC listing with both caps.",
    sourceLabel: "MEXC cashback FAQ, via @xKseilas, November 1, 2026",
  },
  {
    date: "2026-10-30",
    type: "catalog-update",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash: rent and tax payments now earn cashback, full ZCHF support",
    details:
      "From October 30, 2026, rent and tax payments made with the ether.fi Cash card earn cashback, and the card fully supports spending in ZCHF, the Swiss franc stablecoin, per the ether.fi Help Center. Two of the most common reasons a card payment earned nothing, rent and tax categories, are now covered.",
    sourceLabel: "ether.fi Help Center, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "catalog-update",
    cardName: "KardPay",
    cardSlug: "kardpay-card",
    title: "KardPay opens physical cards to everyone, with worldwide shipping",
    details:
      "KardPay opened physical card ordering to all users on October 30, 2026, with worldwide shipping, as reported by @0xVishnya. Physical cards were previously tied to an Elite pre-order, so this widens access to the plastic card considerably.",
    sourceLabel: "@0xVishnya report, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "market",
    cardName: "MoonPay partnerships",
    title: "MoonPay expands card partnerships: ether.fi, XPlace, Moto, and Avici",
    details:
      "MoonPay announced expanded partnerships with ether.fi, XPlace, Moto, and Avici on October 30, 2026, per the MoonPay newsroom. On-ramp and payments infrastructure deals like these usually show up later as smoother funding inside each card app.",
    sourceLabel: "MoonPay newsroom, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "market",
    cardName: "Visa and Mesh",
    title: "Visa and Mesh: stablecoin spending at 175M+ merchants, no crypto card needed",
    details:
      "Visa and Mesh announced stablecoin spending support across more than 175 million merchants, as reported by Cointelegraph on October 30, 2026. If paying with stablecoins from a regular wallet becomes normal at Visa checkout, dedicated crypto cards face a new kind of competition.",
    sourceLabel: "Cointelegraph, October 30, 2026",
  },
  {
    date: "2026-10-29",
    type: "fee-change",
    cardName: "Bitget Wallet Card",
    cardSlug: "bitget-wallet-card",
    title: "Bitget Wallet cuts physical card fee to $25, adds USD and EUR virtual accounts",
    details:
      "Bitget Wallet cut its physical card fee to $25 on October 29, 2026 and added USD and EUR virtual accounts, as reported by @0xVishnya. The virtual accounts make it easier to hold and move between dollars, euros, and the card balance.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "launch",
    cardName: "Solid Card",
    cardSlug: "solid-card",
    title: "Solid launches a euro yield account with its own IBAN",
    details:
      "Solid launched a euro yield account with a personal IBAN on October 29, 2026, as reported by @0xVishnya. Until now the app centered on dollar balances and SoUSD yield; a euro account with an IBAN makes SEPA transfers in and out far simpler for European users.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "catalog-update",
    cardName: "XPlace Card",
    cardSlug: "xplace-card",
    title: "XPlace credit mode paused for a day after Kamino halted SOL and BTC borrowing",
    details:
      "XPlace paused its card's credit mode on October 29 to 30, 2026 after Kamino, the lending market behind its USDC credit line, halted SOL and BTC borrowing, as reported by @0xVishnya. It is a clear example of how a DeFi-backed card inherits the risks of the protocol underneath it.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "launch",
    cardName: "Exa Card",
    cardSlug: "exa-card",
    title: "Exa launches Exa Blue, a credit card backed by Coinbase tokenized stocks",
    details:
      "Exa launched Exa Blue on October 29, 2026, reported by @0xVishnya as the first credit card backed by Coinbase tokenized stocks. Instead of crypto collateral alone, the credit line is backed by tokenized equity held on Coinbase's platform.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-28",
    type: "launch",
    cardName: "Ethena Pay",
    cardSlug: "ethena-pay-card",
    title: "Ethena Pay launches Earn+: up to 12% APY on USD in an external vault",
    details:
      "Ethena Pay launched Earn+ on October 28, 2026, offering up to 12% APY on USD balances held in an external vault, as reported by @0xVishnya. The rate is a vault yield, variable and strategy-dependent, not a guaranteed deposit rate.",
    sourceLabel: "@0xVishnya report, October 28, 2026",
  },
  {
    date: "2026-10-28",
    type: "catalog-update",
    cardName: "Plasma One",
    cardSlug: "plasma-one-card",
    title: "Plasma One adds direct ETH and HYPE deposits and spending",
    details:
      "Plasma One added direct ETH and HYPE deposits and spending on October 28, 2026, as reported by @0xVishnya. The card program started stablecoin-only, so volatile-asset support widens what holders can fund it with, at the cost of price risk between deposit and spend.",
    sourceLabel: "@0xVishnya report, October 28, 2026",
  },
  {
    date: "2026-10-27",
    type: "market",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "RedotPay passes 9 million users; reports of a possible confidential US IPO filing",
    details:
      "RedotPay passed 9 million users in October 2026, and Bloomberg reported the company may have made a confidential filing for a US IPO, as summarized by @0xVishnya on October 27, 2026. A listing would make RedotPay one of the first crypto card companies to face public-market disclosure.",
    sourceLabel: "Bloomberg via @0xVishnya, October 27, 2026",
  },
  {
    date: "2026-10-26",
    type: "promo",
    cardName: "Tangem Pay",
    cardSlug: "tangem-pay-card",
    title: "Tangem Pay ran 10% cashback through November 2",
    details:
      "Tangem Pay offered 10% cashback on card spending in a promotion that ran through November 2, 2026, as reported by @0xVishnya. The promotion has now ended; Tangem Pay's standard terms advertise no cashback, so do not plan spending around the promo rate.",
    sourceLabel: "@0xVishnya report, October 26, 2026",
  },
  {
    date: "2026-10-26",
    type: "fee-change",
    cardName: "Slash Card",
    cardSlug: "slash-card",
    title: "Slash cuts its physical card fee in half, to $35",
    details:
      "Slash cut its physical card fee in half to $35 on October 26, 2026, as reported by @0xVishnya. Physical card fees have been falling across the market this quarter as issuers compete on sign-up cost.",
    sourceLabel: "@0xVishnya report, October 26, 2026",
  },
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
    date: "2026-10-21",
    type: "promo",
    cardName: "Kolo Card",
    cardSlug: "kolo-card",
    title: "Kolo EUR card promo: $20 back on $100 of spending until November 15",
    details:
      "Kolo is running a sign-up promotion until November 15, 2026: spend $100 on the EUR card and get $20 back on the card, as reported in @0xVishnya's Kolo review. The review also confirms the card setup in our listing: USD virtual Visa Platinum issued through Rain, EUR card through Wirex, 1% BTC cashback as standard, and 5% in BTC for the first two months via invite.",
    sourceLabel: "@0xVishnya Kolo review, October 21, 2026",
  },
  {
    date: "2026-10-20",
    type: "market",
    cardName: "EEA exchange cards",
    title: "EEA cards face a USDT funding wind-down by January",
    details:
      "On October 8, 2026 ESMA told regulators that MiCA-licensed platforms should stop all services for non-MiCA stablecoins, with leftover balances wound down around January 8, as compiled by @xKseilas. For cardholders the practical effect: the Bybit EU card already spends USDC, BTC, ETH, MNT, GRAM and XRP rather than USDT; OKX Europe converts USDT deposits one way into USDC; Kraken and Wirex have USDT on their EEA delisted lists. If your EEA card is funded from an exchange USDT balance, plan the move to USDC or EURC now.",
    sourceLabel: "@xKseilas compilation, October 20, 2026",
  },
  {
    date: "2026-10-20",
    type: "promo",
    cardName: "Wirex One",
    cardSlug: "wirex-one-card",
    title: "Wirex One rebates 50% of AI subscription costs, paid in USD",
    details:
      "Wirex One pays back 50% of eligible subscription costs in USD, as reported by @Nikitont on October 20, 2026: ChatGPT Plus on the Elite tier, Claude Pro and Perplexity Pro added on Private, and Whoop, Bloomberg and Financial Times on Bespoke. The rebate lands automatically at month end, in USD rather than tokens, on top of regular cashback, and is calculated against the standard plan price.",
    sourceLabel: "@Nikitont report, October 20, 2026",
  },
  {
    date: "2026-10-19",
    type: "market",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash passes $1B in total card spend",
    details:
      "The ether.fi Cash card passed $1B in total spend in the week of October 11 to 17, 2026, per @xKseilas's weekly Cash v3 tracking: $31.46M of spend across 404,831 payments that week, with 620,250 ETHFI (about $400K) claimed in cashback by 6,894 recipients. Weekly spend has held in a $28M to $33M band for six straight weeks.",
    sourceLabel: "@xKseilas Cash v3 tracking, October 19, 2026",
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
    type: "catalog-update",
    cardName: "Wirex One",
    cardSlug: "wirex-one-card",
    title: "Wirex One adds Apple Pay top-ups (Google Pay may have followed)",
    details:
      "Wirex One quietly added Apple Pay top-ups, as reported by @0xDani on October 18, 2026: local card top-ups carry no Wirex fee and land instantly, while USD top-ups carry a conversion fee because payments are processed in EUR. Google Pay top-ups may have been added at the same time. Availability depends on region.",
    sourceLabel: "@0xDani report, October 18, 2026",
  },
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Onchain neobanks",
    title: "Eight onchain neobanks spent $45.26M in one week",
    details:
      "Users of ether.fi Cash, Plasma One, Ethena Pay, Bleap, Kolo, Tuyo, Hyperbeat, and BFinance spent about $45.26M in the week to October 18, 2026, per PaymentScan and DeFiLlama figures shared by @0xDani. Weekly snapshots like this are the run-up to the $1.37B monthly total PaymentScan tracked for October.",
    sourceLabel: "PaymentScan and DeFiLlama via @0xDani, October 18, 2026",
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

