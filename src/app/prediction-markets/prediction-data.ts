export type PredictionPlatform = {
  slug: string;
  name: string;
  provider: string;
  model: "CLOB" | "Exchange" | "Hybrid" | "Infrastructure/API";
  categories: string[];
  shortDescription: string;
  editorialSummary: string;
  bestFor: string;
  collateral: string;
  access: string;
  verification: string;
  availability: string;
  fees: string;
  feeSourceUrl?: string;
  resolution: string;
  resolutionSourceUrl?: string;
  sourceUrl: string;
  sourceLabel: string;
  imageUrl: string;
  imageAlt: string;
  imageSourceNote: string;
  galleryImages?: { url: string; alt: string; source: string }[];
  reviewedAt: string;
  caution: string;
  partnerUrl?: string;
  partnerPerpsUrl?: string;
  partnerLabel?: string;
  isFeatured?: boolean;
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
};

const platform = (entry: Omit<PredictionPlatform, "faqs">): PredictionPlatform => ({ ...entry, faqs: [] });

export const predictionPlatforms: PredictionPlatform[] = [
  platform({
    slug: "polymarket",
    name: "Polymarket",
    provider: "Polymarket",
    model: "CLOB",
    categories: ["Crypto", "Politics", "Sports", "Culture", "Technology"],
    shortDescription: "A crypto-collateralized prediction market where users trade outcome shares on future events.",
    editorialSummary: "Polymarket presents event questions as tradable outcome shares rather than conventional sportsbook odds. Its central limit order book lets participants post or take prices, while market-specific rules and UMA-based resolution determine what winning shares redeem for. The public documentation also exposes a separate Perps product, which should be evaluated independently from prediction markets.",
    bestFor: "Readers comparing a broad on-chain event-market catalogue and learning how outcome-share order books work.",
    collateral: "USDC and related settlement assets described by the selected market or product.",
    access: "Wallet and platform access vary by product and jurisdiction",
    verification: "Read the market’s resolution source, end date, edge cases, and platform availability notice before taking a position.",
    availability: "Market and jurisdiction dependent; availability can differ between Polymarket Predictions and Polymarket Perps.",
    fees: "The official documentation states that makers are not charged and that taker fees apply only to certain markets. The fee formula and rates vary by category; geopolitical and world-events markets are listed as fee-free in the reviewed documentation.",
    feeSourceUrl: "https://docs.polymarket.com/trading/fees",
    resolution: "Markets use pre-defined rules and a UMA Optimistic Oracle process. Anyone may propose an outcome and anyone may dispute it; winning tokens can redeem for $1 after resolution while losing tokens become worthless.",
    resolutionSourceUrl: "https://docs.polymarket.com/concepts/resolution",
    sourceUrl: "https://polymarket.com/",
    sourceLabel: "Polymarket official site",
    imageUrl: "https://mintcdn.com/polymarket-292d1b1b/FOMte3ewbG-LVy3k/images/banner.png?fit=max&auto=format&n=FOMte3ewbG-LVy3k&q=85&s=d83f2f21e8474e998d8ba0f45810d978",
    imageAlt: "Polymarket documentation banner showing the platform’s prediction-market developer tools",
    imageSourceNote: "Official Polymarket documentation banner reviewed 27 August 2026; provider visual, not independent evidence of market performance.",
    galleryImages: [{ url: "https://mintcdn.com/polymarket-292d1b1b/FOMte3ewbG-LVy3k/images/core-concepts/resolution-lifecycle.png?fit=max&auto=format&n=FOMte3ewbG-LVy3k&q=85&s=6726569af3efd6f4fda54528c8eb0d0a", alt: "Polymarket resolution lifecycle diagram showing proposal, challenge, dispute, and redemption stages", source: "Official Polymarket documentation diagram reviewed 27 August 2026; it explains the provider’s documented resolution flow." }],
    reviewedAt: "2026-08-27",
    caution: "Outcome shares are not guaranteed investments or ordinary token balances. A position can lose its purchase price, liquidity can be limited, and the market rules—not the headline question alone—control resolution. Check country eligibility, collateral, order price, spread, and the exact resolution source.",
    partnerUrl: "https://polymarket.com?via=cryptosbeginner",
    partnerPerpsUrl: "https://polymarket.com/perps?via=perps-trading",
    partnerLabel: "Explore Polymarket",
    isFeatured: true,
    pros: ["Broad event-market coverage", "Published documentation for orders, fees, and resolution", "Order-book pricing makes the bid/ask visible"],
    cons: ["Rules and availability vary by market and jurisdiction", "Taker fees can vary by category", "Resolution and liquidity risks remain even when an event seems obvious"],
  }),
  platform({
    slug: "kalshi",
    name: "Kalshi",
    provider: "KalshiEX LLC",
    model: "Exchange",
    categories: ["Politics", "Sports", "Weather", "Economics"],
    shortDescription: "An event-contract exchange where participants trade contracts tied to real-world outcomes.",
    editorialSummary: "Kalshi frames its product around event contracts and an exchange-style order book. Its Help Center explains that settlement depends on the official outcome, the market rules, and the relevant source agency; contract fees can differ by market, so a single universal rate would be misleading.",
    bestFor: "Readers comparing an event-contract exchange with provider-published market rules and settlement explanations.",
    collateral: "Cash balance and contract terms shown in the Kalshi account and market interface.",
    access: "Account-based access; eligibility and verification depend on current provider terms",
    verification: "Market pages identify the official source and determination rules; account access and eligibility are separate questions.",
    availability: "Eligibility, location, and product availability are provider-controlled and can change.",
    fees: "Kalshi states that it charges transaction fees based on expected contract earnings; some markets can have different schedules, and some maker fees may apply when resting orders execute.",
    feeSourceUrl: "https://help.kalshi.com/en/articles/13823805-fees",
    resolution: "Kalshi says markets settle after the official outcome is confirmed and its markets team finalizes the result. Settlement may take longer when official data or a market’s determination time is delayed.",
    resolutionSourceUrl: "https://help.kalshi.com/en/articles/13823821-market-faqs",
    sourceUrl: "https://kalshi.com/",
    sourceLabel: "Kalshi official site",
    imageUrl: "https://kalshi.com/favicon.ico",
    imageAlt: "Kalshi logo",
    imageSourceNote: "Official Kalshi favicon used as the provider mark; the public homepage was protected by a browser checkpoint during review.",
    reviewedAt: "2026-08-27",
    caution: "The contract’s rules and official source control settlement. Prices represent market-implied expectations, not certainty, and access can depend on jurisdiction and account eligibility.",
    pros: ["Clear event-contract terminology", "Provider Help Center explains settlement timing", "Wide range of real-world event categories"],
    cons: ["Fee schedules can vary by market", "Account eligibility is separate from market mechanics", "Settlement may wait for official source data"],
  }),
  platform({
    slug: "predictfun",
    name: "Predict.fun",
    provider: "Predict",
    model: "Hybrid",
    categories: ["Crypto", "Sports", "Multi-outcome"],
    shortDescription: "A prediction-market platform for trading YES and NO shares, including multi-outcome markets.",
    editorialSummary: "Predict explains event markets in beginner-friendly terms: a YES or NO share trades at a price that can be read as an approximate probability, and the winning share can redeem for $1 after expiry. The platform also documents Smart Wallet-sponsored trading gas, taker fees, maker rebates, and multi-outcome markets.",
    bestFor: "Beginners who want a plain-language introduction to binary and multi-outcome outcome shares.",
    collateral: "Provider-specified settlement asset and Smart Wallet flow; confirm the live market before funding.",
    access: "Smart Wallet or supported account flow; current eligibility varies",
    verification: "Predict documents AI-assisted outcome proposals reviewed by an in-house team using trusted sources; read each market’s rules and source.",
    availability: "Network, account, market, and jurisdiction dependent.",
    fees: "Predict documents gasless trading through its Smart Wallet, taker-only fees that vary with share price, maker rebates, and possible invite discounts. Deposits, withdrawals, bridging, and yield-bearing products can have separate costs.",
    feeSourceUrl: "https://predict.fun/learn/how-prediction-market-fees-work",
    resolution: "Predict’s official guide says market outcomes are proposed through AI workflows and reviewed by its in-house team against trusted sources; winning shares redeem for $1 and losing shares become valueless.",
    resolutionSourceUrl: "https://docs.predict.fun/the-basics/quickstart",
    sourceUrl: "https://predict.fun/",
    sourceLabel: "Predict.fun official site",
    imageUrl: "https://predict.fun/favicon.ico",
    imageAlt: "Predict.fun logo",
    imageSourceNote: "Official Predict.fun favicon used as the provider mark.",
    reviewedAt: "2026-08-27",
    caution: "A price near $1 is not a guarantee. Thin liquidity, rule interpretation, expiry timing, platform changes, bridge costs, and outcome-review risk can affect a position.",
    pros: ["Accessible binary-market explanation", "Supports multi-outcome markets", "Provider documents gas sponsorship and fee mechanics"],
    cons: ["Outcome review involves provider workflows", "Taker fees depend on price and product details", "Bridging, withdrawals, and yield features add separate complexity"],
  }),
  platform({
    slug: "limitless",
    name: "Limitless Exchange",
    provider: "Limitless",
    model: "Hybrid",
    categories: ["Base", "CLOB", "AMM"],
    shortDescription: "A Base-based decentralized prediction market with outcome shares, AMM markets, and an order-book interface.",
    editorialSummary: "Limitless combines AMM and CLOB market types. Its documentation separates a flat AMM fee from dynamic CLOB fee curves and explains that makers and takers are treated differently. This is a prediction market—not a token-swap DEX—and every market still depends on its stated resolution rules.",
    bestFor: "Users comparing Base-based prediction markets with both pool and order-book mechanics.",
    collateral: "USDC or the collateral specified by the selected market.",
    access: "Wallet-based access; market availability and terms vary",
    verification: "Read the individual market’s resolution source, close time, and dispute or security documentation.",
    availability: "Base network, market, wallet, and jurisdiction dependent.",
    fees: "Limitless documents a 0.40% AMM fee, possible promotional or market-specific reductions, and dynamic CLOB fee ranges; resting makers pay no fee while instantly matched takers pay according to the market and side.",
    feeSourceUrl: "https://docs.limitless.exchange/user-guide/fees",
    resolution: "The provider publishes a separate Market Resolution guide; settlement is governed by each market’s rules and the platform’s resolution process.",
    resolutionSourceUrl: "https://docs.limitless.exchange/user-guide/market-resolution",
    sourceUrl: "https://limitless.exchange/",
    sourceLabel: "Limitless official site",
    imageUrl: "https://limitless.exchange/favicon.ico",
    imageAlt: "Limitless Exchange logo",
    imageSourceNote: "Official Limitless favicon used as the provider mark.",
    reviewedAt: "2026-08-27",
    caution: "Prediction-market outcome shares are not ordinary spot tokens. Review the resolution rule, collateral, spread, fee curve, contract risk, and Base network assumptions before taking a position.",
    partnerUrl: "https://limitless.exchange?r=JDDJ4LOQ9T",
    partnerLabel: "Explore Limitless",
    pros: ["Clearly separates AMM and CLOB fee models", "Base-native market experience", "Provider documentation covers maker and taker mechanics"],
    cons: ["CLOB fees can vary materially by side and price", "Resolution rules are market-specific", "Wallet, smart-contract, liquidity, and collateral risks remain"],
  }),
  platform({
    slug: "opinion",
    name: "Opinion Trade",
    provider: "Opinion Labs",
    model: "CLOB",
    categories: ["Opinion AI", "CLOB", "Multi-outcome"],
    shortDescription: "A prediction exchange for creating, trading, and resolving real-world event markets.",
    editorialSummary: "Opinion’s documentation presents a CLOB-oriented prediction exchange with wallet and social-account connection options. Its fee curve is designed to vary with the market’s mid-price, while its resolution documentation states that most markets are currently resolved through Opinion AI.",
    bestFor: "Readers comparing a documented CLOB and provider-specific AI-assisted resolution approach.",
    collateral: "Settlement asset such as USDT, according to the provider’s fee documentation.",
    access: "Web3 wallet or social-account connection described in provider docs",
    verification: "Each market page specifies its resolution method; most reviewed documentation says Opinion AI is the primary mechanism.",
    availability: "Market, account, network, and jurisdiction dependent.",
    fees: "Opinion documents taker-only fees that range from 0% to 1% and rise as probability approaches 50%, with a $5 minimum order and $0.25 minimum fee; discounts and gas treatment are subject to provider terms.",
    feeSourceUrl: "https://docs.opinion.trade/trade-on-opinion.trade/fees",
    resolution: "Opinion’s resolution page states that the method is specified on each market page and that most markets are currently resolved through Opinion AI.",
    resolutionSourceUrl: "https://docs.opinion.trade/trade-on-opinion.trade/resolution",
    sourceUrl: "https://app.opinion.trade/",
    sourceLabel: "Opinion Trade official app",
    imageUrl: "https://app.opinion.trade/favicon.ico",
    imageAlt: "Opinion Trade logo",
    imageSourceNote: "Official Opinion Trade favicon used as the provider mark.",
    reviewedAt: "2026-08-27",
    caution: "Fee curves and resolution methods are product-specific. Read the market page, source criteria, order type, collateral, and any dispute process before taking a position.",
    pros: ["Provider documents its fee curve in detail", "Supports CLOB-style market trading", "Offers wallet and social-account onboarding paths"],
    cons: ["Resolution may rely on Opinion AI", "Minimum order and fee rules matter for small positions", "Provider terms and market availability can change"],
  }),
  platform({
    slug: "sx-bet",
    name: "SX Bet",
    provider: "SX Bet",
    model: "Exchange",
    categories: ["Sports", "Peer-to-peer", "Parlays"],
    shortDescription: "A peer-to-peer betting exchange where makers post odds and takers accept available market orders.",
    editorialSummary: "SX Bet describes itself as an exchange rather than a sportsbook: makers post limit orders and takers fill them at available odds. The platform’s documentation distinguishes single bets from parlays and describes non-custodial USDC escrow and provider-covered betting gas.",
    bestFor: "Readers comparing peer-to-peer sports event markets with maker/taker order-book mechanics.",
    collateral: "USDC in the supported betting wallet flow.",
    access: "Wallet-based, non-custodial flow described by provider documentation",
    verification: "Read the event rules, market status, and settlement conditions before placing a bet.",
    availability: "Sports, network, wallet, and jurisdiction dependent.",
    fees: "SX Bet’s current documentation states 0% for single bets and a 5% fee on winning parlays; its fee page separately describes a 1% net-profit taker fee in the current schedule, so users should confirm the live market and applicable product terms.",
    feeSourceUrl: "https://docs.sx.bet/user-guides/trading/fees",
    resolution: "The provider describes event escrow and payout mechanics in its getting-started documentation; the event’s betting rules and market state govern the result.",
    resolutionSourceUrl: "https://docs.sx.bet/user-guides/getting-started/how-it-works",
    sourceUrl: "https://sx.bet/",
    sourceLabel: "SX Bet official site",
    imageUrl: "https://sx.bet/favicon.ico",
    imageAlt: "SX Bet logo",
    imageSourceNote: "Official SX Bet favicon used as the provider mark.",
    reviewedAt: "2026-08-27",
    caution: "Sports-event outcomes, odds, market liquidity, and rules can change. Betting involves loss risk; check the exact fee schedule, event rules, wallet, and jurisdiction before using the platform.",
    pros: ["Clear peer-to-peer exchange model", "Provider documents maker and taker roles", "USDC and betting-gas treatment are described in official guides"],
    cons: ["Sports-focused rather than broad event coverage", "Fee wording differs by bet type and current schedule", "Outcome and counterparty risks remain"],
  }),
  platform({
    slug: "xo-market",
    name: "XO Market",
    provider: "XO Markets",
    model: "Infrastructure/API",
    categories: ["Infrastructure", "API", "Event markets"],
    shortDescription: "An event-market infrastructure and API product identified in the provider’s public documentation.",
    editorialSummary: "The reviewed XO documentation presents XO Markets primarily as an API and infrastructure provider for embedded prediction-market trading. It describes market data, order books, positions, and settlement concepts, but the public material reviewed was not sufficient to treat XO Market as a standard retail venue without qualification.",
    bestFor: "Readers researching prediction-market infrastructure, data feeds, or embedded trading products.",
    collateral: "Product and integration terms require confirmation from XO Markets.",
    access: "API-account flow described in public documentation; retail access is not assumed",
    verification: "Confirm the actual consumer product, account requirements, market rules, and settlement documentation directly with the provider.",
    availability: "Public documentation and product availability require direct provider confirmation.",
    fees: "The reviewed public API documentation says XO Markets charges no commission on trades but may include a spread; this older documentation should be verified against current terms before publication as a trading-cost claim.",
    feeSourceUrl: "https://xotrade.co/documentation.html",
    resolution: "The public API documentation describes event-market statuses and an oracle-based settlement architecture, but the documentation is dated and should not be treated as current retail-market policy without confirmation.",
    resolutionSourceUrl: "https://xotrade.co/documentation.html",
    sourceUrl: "https://xo.market/",
    sourceLabel: "XO Market official site",
    imageUrl: "https://xo.market/favicon.ico",
    imageAlt: "XO Market logo",
    imageSourceNote: "Official XO Market favicon candidate; public product coverage was limited during review.",
    reviewedAt: "2026-08-27",
    caution: "This is a research-profile listing, not a recommendation to trade. Verify that the public product, operator, fees, access model, and settlement rules match the documentation before relying on it.",
    pros: ["Useful infrastructure/API perspective", "Public documentation describes market and order concepts", "Highlights the separation between trading and settlement layers"],
    cons: ["Retail product status was not independently confirmed", "Public documentation reviewed is dated", "Fee and resolution claims need current provider verification"],
  }),
];

export const predictionDirectoryPlatforms = predictionPlatforms;
export const getPredictionPlatform = (slug: string) => predictionPlatforms.find((item) => item.slug === slug);

for (const item of predictionPlatforms) {
  if (item.faqs.length === 0) {
    item.faqs = [
      { question: `How do ${item.name} markets work?`, answer: `${item.name} presents a question about a future event and lets users trade one or more possible outcomes. The displayed price can be read as a market-implied probability, not a guaranteed forecast; the market rules define the final result.` },
      { question: `How are ${item.name} outcomes decided?`, answer: item.resolution },
      { question: `What fees does ${item.name} charge?`, answer: item.fees },
      { question: `What should beginners check before using ${item.name}?`, answer: `${item.caution} This directory is educational comparison content, not a personal recommendation or betting advice.` },
    ];
  }
}
