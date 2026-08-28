export type WalletCategory = "corporate" | "government" | "public-figure" | "provider-labeled";
export type AttributionStatus = "Company disclosed" | "Government documented" | "Provider-labeled" | "Unverified reference";

export type PopularWallet = {
  slug: string;
  name: string;
  shortName: string;
  category: WalletCategory;
  categoryLabel: string;
  attribution: AttributionStatus;
  network: string;
  provider: "CoinStats" | "Arkham";
  providerUrl: string;
  primarySources: { label: string; href: string }[];
  summary: string;
  whyItMatters: string;
  caveat: string;
  snapshot?: { value: string; asset: string; asOf: string; detail: string };
  holdings: { asset: string; share: string; note: string }[];
  related: string[];
};

export const popularWallets: PopularWallet[] = [
  {
    slug: "strategy",
    name: "Strategy / MicroStrategy",
    shortName: "Strategy",
    category: "corporate",
    categoryLabel: "Corporate treasury",
    attribution: "Company disclosed",
    network: "Bitcoin",
    provider: "CoinStats",
    providerUrl: "https://coinstats.app/p/MicroStrategy",
    primarySources: [
      { label: "Strategy investor relations", href: "https://www.strategy.com/investor-relations" },
      { label: "Strategy SEC filing exhibit", href: "https://www.sec.gov/Archives/edgar/data/1050446/000105044626000024/mstr-20260505x8kxex991.htm" },
    ],
    summary: "A Bitcoin treasury reference for Strategy, with the provider page labeled Saylor / Strategy and a Bitcoin-only portfolio view.",
    whyItMatters: "The company’s filings are the authority for corporate Bitcoin ownership and reporting. A portfolio page can help readers observe a provider’s wallet view, but it should not replace the filing.",
    caveat: "The displayed address mapping and portfolio value come from the provider snapshot. They can differ from the company’s reported holdings, custody structure, or accounting period.",
    snapshot: { value: "738,742 BTC", asset: "BTC", asOf: "29 August 2026 provider snapshot", detail: "CoinStats displayed a Bitcoin-only public portfolio labeled Saylor / Strategy." },
    holdings: [{ asset: "Bitcoin", share: "100% shown", note: "Provider page displayed BTC as the visible asset." }],
    related: ["tesla", "metaplanet"],
  },
  {
    slug: "tesla",
    name: "Tesla",
    shortName: "Tesla",
    category: "corporate",
    categoryLabel: "Corporate digital assets",
    attribution: "Company disclosed",
    network: "Bitcoin reference",
    provider: "CoinStats",
    providerUrl: "https://coinstats.app/p/Tesla",
    primarySources: [{ label: "Tesla investor relations", href: "https://ir.tesla.com/" }],
    summary: "A corporate digital-asset reference profile connecting Tesla’s public reporting with a CoinStats portfolio page labeled Tesla.",
    whyItMatters: "Public-company filings provide a better basis for understanding reported digital assets than a third-party wallet label alone.",
    caveat: "The CoinStats page could not be fully extracted in the research pass. No live balance is hardcoded here; visitors should open the provider page and current Tesla filing.",
    holdings: [{ asset: "Digital assets", share: "Provider view", note: "Review the current company filing and provider profile together." }],
    related: ["strategy", "metaplanet"],
  },
  {
    slug: "metaplanet",
    name: "Metaplanet",
    shortName: "Metaplanet",
    category: "corporate",
    categoryLabel: "Corporate Bitcoin treasury",
    attribution: "Company disclosed",
    network: "Bitcoin",
    provider: "CoinStats",
    providerUrl: "https://coinstats.app/p/Metaplanet",
    primarySources: [{ label: "Metaplanet investor relations", href: "https://metaplanet.jp/en/ir" }],
    summary: "A Bitcoin-treasury reference profile for Metaplanet, with a CoinStats page showing a Bitcoin-only provider portfolio.",
    whyItMatters: "It illustrates the difference between a company’s disclosed treasury strategy and the address-level view offered by an analytics provider.",
    caveat: "The provider balance is a point-in-time snapshot and may not match the latest company announcement or custody arrangement.",
    snapshot: { value: "32,201.78 BTC", asset: "BTC", asOf: "29 August 2026 provider snapshot", detail: "CoinStats displayed BTC as the visible asset in the public Metaplanet portfolio." },
    holdings: [{ asset: "Bitcoin", share: "100% shown", note: "Provider page displayed BTC as the visible asset." }],
    related: ["strategy", "tesla"],
  },
  {
    slug: "silk-road",
    name: "U.S. Government: Silk Road",
    shortName: "Silk Road seizures",
    category: "government",
    categoryLabel: "Government / seized assets",
    attribution: "Government documented",
    network: "Bitcoin",
    provider: "CoinStats",
    providerUrl: "https://coinstats.app/p/SilkRoad",
    primarySources: [{ label: "U.S. Department of Justice seizure announcement", href: "https://www.justice.gov/usao-sdny/pr/us-attorney-announces-historic-336-billion-cryptocurrency-seizure-and-conviction" }],
    summary: "A public-asset reference for Bitcoin associated with documented Silk Road seizures and the U.S. government custody history.",
    whyItMatters: "Seized assets are a useful case study in why custody, court records, disposal decisions, and on-chain balances must be shown separately.",
    caveat: "A provider portfolio label does not establish the government’s current custody, liquidation plans, or the exact balance on every date.",
    snapshot: { value: "69,370.18 BTC", asset: "BTC", asOf: "29 August 2026 provider snapshot", detail: "CoinStats displayed a Bitcoin portfolio labeled U.S. Government: Silk Road." },
    holdings: [{ asset: "Bitcoin", share: "100% shown", note: "Provider page displayed BTC as the visible asset." }],
    related: ["strategy", "clifton-collins"],
  },
  {
    slug: "trump",
    name: "CoinStats portfolio labeled Trump",
    shortName: "Trump label",
    category: "public-figure",
    categoryLabel: "Public-figure reference",
    attribution: "Unverified reference",
    network: "Multi-chain provider portfolio",
    provider: "CoinStats",
    providerUrl: "https://coinstats.app/p/Trump",
    primarySources: [],
    summary: "A CoinStats public portfolio labeled Trump, shown here as a provider reference rather than a verified personal wallet.",
    whyItMatters: "The profile demonstrates why a name attached to a public portfolio must not be treated as proof of personal ownership or control.",
    caveat: "The label alone does not prove control by Donald Trump, a campaign, a company, or any related organization. The page includes mixed assets and should not be used as an identity claim.",
    holdings: [{ asset: "Mixed assets", share: "Provider view", note: "CoinStats displayed TROG, USDC, WFI, PUPPIES, POL, ETH, TRUMP, and other assets." }],
    related: ["clifton-collins", "silk-road"],
  },
  {
    slug: "clifton-collins",
    name: "Clifton Collins",
    shortName: "Clifton Collins",
    category: "provider-labeled",
    categoryLabel: "Arkham entity label",
    attribution: "Provider-labeled",
    network: "Multi-chain Arkham entity",
    provider: "Arkham",
    providerUrl: "https://arkm.com/explorer/entity/clifton-collins",
    primarySources: [],
    summary: "An Arkham entity profile with multiple associated addresses and a provider-supplied identity label.",
    whyItMatters: "Arkham’s entity-first model is useful for observing address clusters, balances, counterparties, and history while keeping attribution probabilistic.",
    caveat: "The Arkham label is not an independent legal-identity determination. Address clustering, confidence, and balances can change as intelligence is updated.",
    snapshot: { value: "$309.42M", asset: "BTC shown", asOf: "29 August 2026 Arkham snapshot", detail: "Arkham displayed 14 addresses and a provider-labeled entity profile." },
    holdings: [{ asset: "Bitcoin", share: "Visible major position", note: "Arkham displayed roughly 4K BTC in the extracted public profile." }],
    related: ["silk-road", "trump"],
  },
];

export const walletCategories = [
  { id: "all", label: "All profiles", description: "Every curated public-wallet reference." },
  { id: "corporate", label: "Corporate", description: "Company treasury and reporting references." },
  { id: "government", label: "Government", description: "Documented seizures and public custody records." },
  { id: "public-figure", label: "Public-figure references", description: "Provider-labeled profiles with strict attribution caveats." },
  { id: "provider-labeled", label: "Provider-labeled", description: "Entity labels supplied by analytics providers." },
] as const;

export const asOfDate = "29 August 2026";
