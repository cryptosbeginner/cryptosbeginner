import Link from "next/link";

type FooterLink = { label: string; href: string };

const footerGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Compare",
    links: [
      { label: "Best Exchanges", href: "/exchanges/best-crypto-exchanges-2026" },
      { label: "Exchange Finder", href: "/tools/exchange-finder" },
      { label: "Crypto Cards", href: "/crypto-cards" },
      { label: "No-KYC Exchanges", href: "/exchanges/no-kyc" },
      { label: "Prediction Markets", href: "/prediction-markets" },
      { label: "Regions", href: "/regions" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Live Crypto Prices", href: "/crypto-prices" },
      { label: "Research Desk", href: "/crypto-research" },
      { label: "Crypto Screener", href: "/crypto-screener" },
      { label: "Wallet Tracker", href: "/wallet-tracker" },
      { label: "Popular Wallets", href: "/wallets/popular" },
      { label: "Wallet Alerts", href: "/wallet-alerts" },
      { label: "Meme Coins", href: "/meme-coins" },
      { label: "Meme Coin Research", href: "/meme-coin-research" },
    ],
  },
  {
    title: "Learn & Tools",
    links: [
      { label: "Learn Hub", href: "/learn" },
      { label: "Wallets", href: "/wallets/best-crypto-wallets-2026" },
      { label: "DEXes", href: "/dexes" },
      { label: "Crypto Glossary", href: "/learn/crypto-glossary" },
      { label: "Bitcoin Forks", href: "/learn/bitcoin-forks" },
      { label: "Bitcoin Halving", href: "/tools/bitcoin-halving" },
      { label: "Fee Calculator", href: "/tools/fee-calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Methodology", href: "/methodology" },
      { label: "Security Incidents", href: "/security/exchange-incidents" },
      { label: "Crypto Projects", href: "/projects" },
      { label: "Public Wallet Explorer", href: "/public-wallets" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_2fr] lg:px-8">
        <div className="max-w-xs">
          <div className="mb-3 text-lg font-black tracking-[-0.03em] text-white">CryptosBeginner</div>
          <p className="leading-7">Independent crypto education, comparisons, research tools, and regional guides for beginners.</p>
          <p className="mt-5 text-xs leading-6 text-slate-500">Educational content only. Provider terms, availability, fees, rewards, and regulations can change.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => <div key={group.title}><div className="mb-3 font-black text-white">{group.title}</div><ul className="space-y-2.5">{group.links.map((link) => <li key={link.href}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}</ul></div>)}
        </div>
      </div>

      <div className="border-t border-slate-800"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>© 2026 CryptosBeginner. Educational content only. Not financial advice.</span><span>admin@cryptosbeginner.com</span></div></div>
    </footer>
  );
}
