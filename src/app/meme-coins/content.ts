export const reviewedDate = "28 August 2026";

export type Platform = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  fee: string;
  caution: string;
  affiliate?: { href: string; label: string };
  images: { src: string; alt: string; caption: string }[];
  sources: { label: string; href: string }[];
};

export const platforms: Platform[] = [
  {
    slug: "axiom-trade",
    name: "Axiom",
    role: "Solana-focused discovery and trading workspace",
    summary: "Axiom places charts, wallet and token tracking, holders, execution controls, and saved presets in one dense workspace.",
    fee: "The fee stack can include venue fees, Solana gas, priority fees, bribes or tips, slippage, and price impact.",
    caution: "Controls can make an untested thesis execute faster; a bundle signal or MEV mode is not a safety guarantee.",
    affiliate: { href: "https://axiom.trade/@taimoor", label: "Explore Axiom" },
    sources: [{ label: "Axiom Solana fees and MEV documentation", href: "https://docs.axiom.trade/getting-started/fees/solana-fees" }],
    images: [
      { src: "/images/meme-coins/platforms/axiom-homepage.png", alt: "Axiom public landing page showing discovery, Pulse, trackers, predictions, portfolio and rewards navigation", caption: "Axiom public landing screen; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/axiom-interface.png", alt: "Axiom trading workspace showing a token chart, liquidity metrics, holder tabs, buy and sell controls and preset tabs", caption: "Axiom trading workspace showing chart, holder, token-metric, buy/sell, and preset surfaces; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/axiom-pulse.png", alt: "Axiom Pulse discovery surface showing token discovery information", caption: "Axiom Pulse discovery surface; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/axiom-tracker.png", alt: "Axiom Tracker surface showing wallet or token tracking information", caption: "Axiom Tracker surface; wallet activity is historical context, not a forecast." },
      { src: "/images/meme-coins/platforms/axiom-presets.png", alt: "Axiom preset controls showing saved execution settings", caption: "Axiom preset controls; saved settings are instructions, not a safety system." },
    ],
  },
  {
    slug: "gmgn-ai",
    name: "GMGN.ai",
    role: "Multi-chain meme-coin research, monitoring, and trading toolkit",
    summary: "GMGN combines token discovery, wallet analytics, holder and developer signals, monitoring, presets, and copy-style workflows.",
    fee: "GMGN’s official documentation states a 1% handling fee per single transaction; gas, priority fees, tips, venue charges, slippage, and price impact remain separate.",
    caution: "Wallet P&L, insider labels, bundles, and security badges are signals to investigate—not proof of safety or future performance.",
    affiliate: { href: "https://gmgn.ai/r/XPS1eXg4", label: "Open GMGN" },
    sources: [{ label: "GMGN fees and settings documentation", href: "https://docs.gmgn.ai/index/gmgn-fees-settings" }],
    images: [
      { src: "/images/meme-coins/platforms/gmgn-homepage.png", alt: "GMGN homepage showing research and trading entry points", caption: "GMGN homepage showing research and trading entry points; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/gmgn-interface.png", alt: "GMGN token workspace showing Trenches and Trending navigation, chart metrics, wallet tracking panels, holder tabs and market controls", caption: "GMGN token workspace showing discovery, chart, holder, wallet-tracking, and market-order surfaces; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/gmgn-radar-feature.png", alt: "GMGN Radar discovery surface showing token-finding controls and market candidates", caption: "GMGN Radar discovery surface; discovery labels do not independently verify a contract." },
      { src: "/images/meme-coins/platforms/gmgn-monitor-feature.png", alt: "GMGN Monitor surface showing activity monitoring controls", caption: "GMGN Monitor surface; use alerts to observe activity rather than chase every notification." },
      { src: "/images/meme-coins/platforms/gmgn-settings.png", alt: "GMGN settings panel showing execution controls and Anti-MEV-related options", caption: "GMGN settings panel; defaults and availability may change." },
      { src: "/images/meme-coins/platforms/gmgn-presets.png", alt: "GMGN presets screen showing saved execution settings", caption: "GMGN saved preset controls; defaults can change and can repeat mistakes." },
      { src: "/images/meme-coins/platforms/gmgn-snipe-x-feature.png", alt: "GMGN Snipe X feature showing a speed-sensitive trading workflow", caption: "GMGN Snipe X surface; speed does not remove adverse-selection or liquidity risk." },
      { src: "/images/meme-coins/platforms/gmgn-copywallet.png", alt: "GMGN Copywallet feature showing wallet-following controls", caption: "GMGN Copywallet surface; displayed wallet P&L is historical context, not a promise of equal fills." },
    ],
  },
  {
    slug: "pump-fun",
    name: "pump.fun",
    role: "Solana token launchpad and market interface",
    summary: "pump.fun lowers the technical barrier to creating and trading tokens through a bonding-curve launch flow, with graduated coins associated with PumpSwap pools.",
    fee: "The official fee page lists free coin creation, a 0.015 SOL graduation fee, and separate creator, protocol, and LP fee layers that vary by market type and band.",
    caution: "Permissionless creation, a launch list, or visible activity does not validate a token’s identity, liquidity, team, or exit prospects.",
    affiliate: { href: "https://join.pump.fun/HSag/kjs0qp0n", label: "Visit pump.fun" },
    sources: [{ label: "pump.fun official fee documentation", href: "https://pump.fun/docs/fees" }],
    images: [
      { src: "/images/meme-coins/platforms/pumpfun-homepage.png", alt: "pump.fun homepage showing token discovery, feed, trending movers and launch navigation", caption: "pump.fun homepage and discovery feed; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/pumpfun-create.png", alt: "pump.fun create flow showing token-launch fields and submission controls", caption: "pump.fun create flow; permissionless creation does not establish legitimacy." },
      { src: "/images/meme-coins/platforms/pumpfun-launches.png", alt: "pump.fun launches view showing newly created token listings", caption: "pump.fun launches view; a launch list is not due diligence." },
      { src: "/images/meme-coins/platforms/pumpfun-mayhem.png", alt: "pump.fun market-activity surface showing live meme-coin activity", caption: "pump.fun market-activity surface; exact labels and market conditions can change." },
    ],
  },
  {
    slug: "padre-terminal",
    name: "Padre / Terminal",
    role: "Trading terminal with claims requiring current verification",
    summary: "The public product page presents a trading terminal with execution and cashback messaging; the review separates observable product positioning from claims that require terms-level verification.",
    fee: "Do not publish an all-in fee until the current fee schedule, route charges, and cashback conditions are verified.",
    caution: "The public landing page advertises ‘up to 35% cashback’ and ‘fastest execution’; these are not guarantees of eligibility, speed, cost, or results.",
    affiliate: { href: "https://trade.padre.gg/rk/1000xgems", label: "Visit Padre / Terminal" },
    sources: [{ label: "Padre / Terminal official public site", href: "https://trade.padre.gg/" }],
    images: [
      { src: "/images/meme-coins/platforms/padre-homepage.png", alt: "Padre public homepage showing the trading-terminal sign-in screen", caption: "Padre public homepage; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/padre-interface.png", alt: "Padre terminal interface showing trading and market-analysis panels", caption: "Padre terminal interface; feature reference, not a connected execution test." },
      { src: "/images/meme-coins/platforms/padre-track.png", alt: "Padre tracking feature showing tracked wallet or token activity", caption: "Padre tracking surface; tracking is not proof of a safe trade." },
      { src: "/images/meme-coins/platforms/padre-trenches.png", alt: "Padre Trenches view showing meme-coin discovery information", caption: "Padre Trenches view; speed increases the need for verification and sizing." },
    ],
  },
  {
    slug: "fomo-photon",
    name: "FOMO vs Photon Comparison",
    role: "Social-first and Solana token-discovery comparison",
    summary: "FOMO emphasizes feeds, trader profiles, alerts, and social discovery, while Photon emphasizes Solana token discovery, monitoring, and quick buy and sell.",
    fee: "FOMO’s visible 0% label must not be treated as an all-in cost; Photon’s current fee schedule should be checked against its official documentation before publication.",
    caution: "Leaderboards, social posts, displayed gains, and speed are historical or promotional signals—not suitability, safety, or future performance evidence.",
    affiliate: { href: "https://fomo.family/r/cryptosbeginner", label: "Explore FOMO" },
    sources: [{ label: "FOMO official public site", href: "https://fomo.family/" }, { label: "FOMO Terms of Service", href: "https://fomo.family/terms" }, { label: "Photon official public site", href: "https://photon-sol.tinyastro.io/" }, { label: "Photon documentation", href: "https://pies-organization.gitbook.io/photon-trading/photon-on-sol" }],
    images: [
      { src: "/images/meme-coins/platforms/fomo-overview.png", alt: "FOMO public product overview showing social trading entry points", caption: "FOMO public product overview; supplied screenshot, reviewed 28 August 2026." },
      { src: "/images/meme-coins/platforms/fomo-interface.png", alt: "FOMO interface showing social posts, trader information and token activity", caption: "FOMO social trading interface; social discovery is an idea source, not a recommendation." },
      { src: "/images/meme-coins/platforms/fomo-features.png", alt: "FOMO features surface showing leaderboard and social trading controls", caption: "FOMO social features; leaderboard performance is historical context." },
      { src: "/images/meme-coins/platforms/fomo-web-terminal.png", alt: "FOMO browser terminal showing web trading controls", caption: "FOMO browser terminal; verify the domain and signing flow before connecting a wallet." },
      { src: "/images/meme-coins/platforms/photon-homepage.png", alt: "Photon homepage showing Solana token discovery and trading entry points", caption: "Photon homepage; public product reference, not a trade receipt." },
      { src: "/images/meme-coins/platforms/photon-detail-page.png", alt: "Photon token detail page showing token information and trading context", caption: "Photon token detail page; visible information has limits and should be independently checked." },
      { src: "/images/meme-coins/platforms/photon-memescope-feature.png", alt: "Photon MemeScope discovery feature showing meme-token candidates", caption: "Photon MemeScope discovery feature; discovery needs contract and liquidity checks." },
      { src: "/images/meme-coins/platforms/photon-settings.png", alt: "Photon settings screen showing configurable trading controls", caption: "Photon settings screen; use exact visible controls and verify current defaults." },
      { src: "/images/meme-coins/platforms/photon-xtracker.png", alt: "Photon XTracker surface showing wallet or social activity tracking", caption: "Photon XTracker surface; wallet activity is historical context, not a forecast." },
    ],
  },
];

export const guides = [
  { slug: "token-verification", title: "How to Check a Meme Coin Before You Trade It", description: "Verify contract identity, permissions, deployer history, holders, liquidity, sellability, and social authenticity before signing.", image: "/images/meme-coins/platforms/gmgn-radar-feature.png" },
  { slug: "slippage-mev", title: "Slippage, Priority Fees, Tips and MEV Protection Explained", description: "Understand execution settings without confusing faster inclusion with safer or more profitable trading.", image: "/images/meme-coins/platforms/axiom-interface.png" },
  { slug: "presets", title: "How Meme-Coin Trading Presets Work", description: "Review amount, slippage, priority, tips, routing, and exit fields before saving a repeatable instruction set.", image: "/images/meme-coins/platforms/axiom-presets.png" },
];

export const tutorials = [
  { slug: "gmgn-beginners", title: "GMGN Beginner Tutorial: Research Before You Trade", description: "A research-first GMGN workflow using Trenches, filters, charts, holders, wallet signals, presets, and an explicit exit plan.", video: "https://www.youtube.com/watch?v=Obu1fk_rqqY" },
  { slug: "fomo-beginners", title: "FOMO Beginner Tutorial: Feed, Alerts and Wallet Safety", description: "A cautious FOMO workflow for social discovery, trader profiles, alerts, independent verification, and wallet permissions.", video: "https://www.youtube.com/watch?v=PA4GoJvc5ls" },
];

export const videoSources = [
  { id: "Obu1fk_rqqY", platform: "GMGN.ai", url: "https://www.youtube.com/watch?v=Obu1fk_rqqY", supported: "Trenches and Trending discovery, token cards, age/market-cap/volume/fees filters, charts, RSI, volume, bubble maps, holders, scans, presets, and Buy/Sell panels.", caveat: "The narrator’s thresholds, 2x language, wave claims, and scam-certainty statements are personal heuristics, not universal rules or guarantees." },
  { id: "PA4GoJvc5ls", platform: "FOMO", url: "https://www.youtube.com/watch?v=PA4GoJvc5ls", supported: "Trending and Leaderboard discovery, Thesis posts, trader profiles, P&L and entry data, Holders, Alerts, Buy/Sell, My swaps, Friends only, Min size, and external GMGN filtering.", caveat: "The video’s visible 0% label is not an all-in cost statement; follower counts and social proof can be manipulated, and the narrator warns against blind copy trading." },
  { id: "Ybl1wQ--MsE", platform: "GMGN.ai", url: "https://www.youtube.com/watch?v=Ybl1wQ--MsE", supported: "Trenches, chain selection, token detail, candle and timeframe controls, RSI and Volume, Holders, Basic Data, Token Audit, bubble maps, dev history, trendlines, Fibonacci, Long position, Instant trade, and Limit orders.", caveat: "The video’s fee thresholds, 99% failure statement, wave theory, 3x–5x framing, and claim that low fees prove a scam are heuristics or promotion, not established facts." },
];

export const relatedLinks = [
  ["/dexes", "DEX directory"], ["/wallets/best-crypto-wallets-2026", "wallet safety guide"], ["/security/exchange-incidents", "security incidents"], ["/crypto-research", "crypto research"], ["/crypto-screener", "crypto screener"], ["/wallet-tracker", "wallet tracker"], ["/wallet-alerts", "wallet alerts"], ["/meme-coin-research", "meme-coin research"], ["/methodology", "editorial methodology"], ["/disclaimer", "disclaimer"], ["/learn/crypto-glossary", "crypto glossary"],
] as const;
