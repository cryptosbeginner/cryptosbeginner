export interface FeaturedTrader {
  label: string;
  address: string;
  chain: "Solana" | "Ethereum";
  sourceUrl: string;
  sourceNote: string;
  addedAt: string;
}

// Curated directory of meme coin traders whose wallets were disclosed by
// the traders themselves on their own verified channels.
//
// Policy: an entry is only added when the wallet address appears in the
// trader's OWN public disclosure (their verified X profile, an official post
// from their account, or their project's official docs). Third-party claims,
// screenshots, and "doxxed by" threads do not qualify.
//
// As of 8 October 2026 no entries have met this bar, so the array ships
// empty. The component renders an honest empty state with a suggestion link
// instead of inventing data.
export const featuredTraders: FeaturedTrader[] = [];

export const suggestTraderEmail = "admin@cryptosbeginner.com";
