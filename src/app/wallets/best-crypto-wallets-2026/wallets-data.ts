export type WalletCategory = "hardware" | "mobile" | "extension" | "desktop";

export type Wallet = {
  slug: string;
  name: string;
  category: WalletCategory;
  fit: string;
  chains: string;
  security: string;
  watchFor: string;
  price: string;
  href: string;
  affiliate: boolean;
  officialName: string;
  color: string;
  mark: string;
};

export const categoryLabels: Record<WalletCategory, string> = {
  hardware: "Hardware",
  mobile: "Mobile",
  extension: "Browser extension",
  desktop: "Desktop",
};

export const wallets: Wallet[] = [
  {
    slug: "ledger",
    name: "Ledger",
    category: "hardware",
    fit: "Long-term holders who want a dedicated signing device and a large asset list",
    chains: "Bitcoin, Ethereum, Solana and many others via Ledger Live",
    security: "Keys stay on the device. Transactions are confirmed on the screen.",
    watchFor: "Buy only from the official shop or a trusted reseller. Never type a seed phrase into Ledger Live because of a popup.",
    price: "Paid device",
    href: "https://go.cryptosbeginner.com/LedgerWallet",
    affiliate: true,
    officialName: "Ledger",
    color: "#111827",
    mark: "Ld",
  },
  {
    slug: "trezor",
    name: "Trezor",
    category: "hardware",
    fit: "Users who want open-source firmware and a straightforward USB signing flow",
    chains: "Bitcoin, Ethereum and a wide software-wallet ecosystem",
    security: "Open-source model and on-device confirmation. Passphrase support for extra accounts.",
    watchFor: "Buy sealed from Trezor. A used or resealed device is not a bargain, it is a risk.",
    price: "Paid device",
    href: "https://go.cryptosbeginner.com/Trezor",
    affiliate: true,
    officialName: "Trezor",
    color: "#16a34a",
    mark: "Tz",
  },
  {
    slug: "safepal",
    name: "SafePal",
    category: "hardware",
    fit: "Budget hardware users who want QR or air-gapped signing",
    chains: "Multi-chain via the SafePal app",
    security: "Air-gapped models keep the seed off the internet during setup if you follow the official flow.",
    watchFor: "The companion app is still a hot-wallet surface. Treat the hardware device as the key vault.",
    price: "Paid device",
    href: "https://go.cryptosbeginner.com/SafePal",
    affiliate: true,
    officialName: "SafePal",
    color: "#4f46e5",
    mark: "SP",
  },
  {
    slug: "metamask",
    name: "MetaMask",
    category: "extension",
    fit: "Ethereum and EVM DeFi in the browser",
    chains: "Ethereum and EVM networks",
    security: "Non-custodial. You control the seed. Phishing sites are the main failure mode.",
    watchFor: "Fake extensions and signature requests. Verify the URL and what you are signing.",
    price: "Free app",
    href: "https://metamask.io",
    affiliate: false,
    officialName: "MetaMask",
    color: "#f6851b",
    mark: "MM",
  },
  {
    slug: "phantom",
    name: "Phantom",
    category: "mobile",
    fit: "Solana users who also want a clean mobile and extension wallet",
    chains: "Solana first, with additional networks in the current app",
    security: "Non-custodial. Convenient, so it is a daily-driver wallet, not a vault.",
    watchFor: "Download only from phantom.app or official stores. Blind-signing NFT mints is a common drain.",
    price: "Free app",
    href: "https://phantom.app",
    affiliate: false,
    officialName: "Phantom",
    color: "#ab9ff2",
    mark: "Ph",
  },
  {
    slug: "trust-wallet",
    name: "Trust Wallet",
    category: "mobile",
    fit: "Beginners who want a multi-chain phone wallet",
    chains: "Multi-chain mobile wallet",
    security: "Non-custodial if you create the wallet yourself and back up the phrase.",
    watchFor: "Clone apps in unofficial stores. Never restore a wallet from a Telegram link.",
    price: "Free app",
    href: "https://trustwallet.com",
    affiliate: false,
    officialName: "Trust Wallet",
    color: "#3375bb",
    mark: "TW",
  },
  {
    slug: "backpack",
    name: "Backpack",
    category: "extension",
    fit: "Solana users who want a wallet built around xNFTs and a simpler trading flow",
    chains: "Solana-focused",
    security: "Non-custodial. Still a hot wallet connected to the internet.",
    watchFor: "Use the official backpack.app download. Treat it as a spending wallet.",
    price: "Free app",
    href: "https://backpack.app",
    affiliate: false,
    officialName: "Backpack",
    color: "#e11d48",
    mark: "Bp",
  },
];

export const walletFaqs = [
  {
    q: "What is the best crypto wallet in 2026?",
    a: "There is no single best wallet. A hardware wallet fits long-term savings. A mobile or extension wallet fits daily DeFi. The best choice is the one whose key storage, chains and recovery process you actually understand.",
  },
  {
    q: "Is an exchange account a wallet?",
    a: "No. An exchange balance is an IOU. If the company pauses withdrawals, you cannot move the coins yourself. A self-custody wallet holds keys that you control.",
  },
  {
    q: "Should I keep all my crypto on a phone wallet?",
    a: "No. Phones get lost, cloned and phished. Keep a small spending amount on mobile or in an extension. Keep larger savings on a hardware wallet.",
  },
  {
    q: "What happens if I lose my seed phrase?",
    a: "In self-custody, the seed phrase is the backup. If the device and the phrase are both gone, the funds are usually unrecoverable. Ledger, Trezor or MetaMask support cannot recreate a lost phrase.",
  },
];
