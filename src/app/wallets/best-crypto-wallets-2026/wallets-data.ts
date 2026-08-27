export type WalletCategory = "hardware" | "mobile" | "extension" | "desktop";

export type Wallet = {
  slug: string;
  name: string;
  category: WalletCategory;
  fit: string;
  chains: string;
  security: string;
  note: string;
  check: string;
  officialUrl: string;
  href: string;
  affiliate: boolean;
  logo: string;
  color: string;
};

export const wallets: Wallet[] = [
  {
    slug: "ledger",
    name: "Ledger",
    category: "hardware",
    fit: "Long-term self-custody",
    chains: "Bitcoin, Ethereum, Solana and thousands of tokens via Ledger Live",
    security: "Keys stay on a dedicated device and transactions are confirmed on the screen",
    note: "Ledger is useful when you want savings off an exchange. Compare the exact model, coin support and recovery options before buying.",
    check: "Buy from the official or disclosed partner link. Set a PIN. Write the recovery phrase offline. Verify every receive address on the device screen.",
    officialUrl: "https://www.ledger.com",
    href: "https://go.cryptosbeginner.com/LedgerWallet",
    affiliate: true,
    logo: "/images/wallets/ledger.svg",
    color: "#000000",
  },
  {
    slug: "trezor",
    name: "Trezor",
    category: "hardware",
    fit: "Open-source hardware preference",
    chains: "Bitcoin, Ethereum and a broad desktop-app asset list",
    security: "Open-source firmware model with on-device confirmation and optional passphrase",
    note: "Trezor is often compared with Ledger by people who want to inspect firmware and use a passphrase as a hidden wallet.",
    check: "Confirm you are on trezor.io or the disclosed partner link. Enable PIN and consider a passphrase only if you can remember it.",
    officialUrl: "https://trezor.io",
    href: "https://go.cryptosbeginner.com/Trezor",
    affiliate: true,
    logo: "/images/wallets/trezor.svg",
    color: "#16c784",
  },
  {
    slug: "safepal",
    name: "SafePal",
    category: "hardware",
    fit: "Air-gapped or budget hardware",
    chains: "Wide multi-chain support through the SafePal app",
    security: "Air-gapped QR signing on some models keeps the device off USB",
    note: "SafePal is commonly compared as a lower-cost hardware option. Check whether you want USB, Bluetooth or QR-only signing.",
    check: "Buy a sealed device from a trusted source. Pair it only with the official SafePal app. Back up the phrase offline.",
    officialUrl: "https://www.safepal.com",
    href: "https://go.cryptosbeginner.com/SafePal",
    affiliate: true,
    logo: "/images/wallets/safepal.svg",
    color: "#4c6fff",
  },
  {
    slug: "metamask",
    name: "MetaMask",
    category: "extension",
    fit: "Ethereum and EVM dApps",
    chains: "Ethereum and EVM networks, plus mobile",
    security: "Hot wallet. Keys live in the browser or phone. Strong against convenience, weaker against malware and fake sites.",
    note: "MetaMask is the default way many people connect to Ethereum apps. Use it for small working balances, not life savings.",
    check: "Install only from metamask.io. Pin the extension. Check the URL before connecting. Use a hardware wallet for large amounts.",
    officialUrl: "https://metamask.io",
    href: "https://metamask.io",
    affiliate: false,
    logo: "/images/wallets/metamask.svg",
    color: "#f6851b",
  },
  {
    slug: "phantom",
    name: "Phantom",
    category: "mobile",
    fit: "Solana, plus growing multichain use",
    chains: "Solana first, with Ethereum, Base and others in current apps",
    security: "Hot wallet on phone or extension. Convenient for NFTs, swaps and staking. Phishing risk is high.",
    note: "Phantom is a practical daily wallet for Solana. It is not a substitute for hardware storage of large holdings.",
    check: "Download from phantom.app. Enable biometric lock. Never type a seed phrase into a site that pops up in Discord or X.",
    officialUrl: "https://phantom.app",
    href: "https://phantom.app",
    affiliate: false,
    logo: "/images/wallets/phantom.svg",
    color: "#ab9ff2",
  },
  {
    slug: "trust-wallet",
    name: "Trust Wallet",
    category: "mobile",
    fit: "Beginner mobile multi-chain access",
    chains: "Many mobile networks, including Bitcoin, EVM and others",
    security: "Hot wallet. Easy to use, so fake Trust Wallet apps are a common scam.",
    note: "Trust Wallet is useful for small mobile balances. Confirm you installed the official app, not a store clone.",
    check: "Use the official trustwallet.com download links. Enable extra authentication. Move long-term funds to hardware.",
    officialUrl: "https://trustwallet.com",
    href: "https://trustwallet.com",
    affiliate: false,
    logo: "/images/wallets/trustwallet.svg",
    color: "#3375bb",
  },
  {
    slug: "backpack",
    name: "Backpack",
    category: "extension",
    fit: "Solana apps and xNFTs",
    chains: "Solana-focused, with additional network support in current versions",
    security: "Hot wallet. Verify the extension source. Treat connected dApps as untrusted until proven.",
    note: "Backpack is often compared with Phantom by Solana users who want an app-centric wallet.",
    check: "Install from backpack.app. Review every signature. Do not keep large balances in a hot wallet.",
    officialUrl: "https://backpack.app",
    href: "https://backpack.app",
    affiliate: false,
    logo: "/images/wallets/backpack.svg",
    color: "#e11d48",
  },
];

export const categoryLabels: Record<WalletCategory, string> = {
  hardware: "Hardware",
  mobile: "Mobile",
  extension: "Extension",
  desktop: "Desktop",
};
