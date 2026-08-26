import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-white text-lg mb-3">CryptosBeginner</div>
          <p>Independent crypto education and exchange comparisons for beginners.</p>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link href="/exchanges/best-crypto-exchanges-2026">Best Exchanges</Link></li>
            <li><Link href="/regions">Regions</Link></li>
            <li><Link href="/tools/exchange-finder">Exchange Quiz</Link></li>
            <li><Link href="/learn">Learn hub</Link></li>
            <li><Link href="/security/exchange-incidents">Security incidents</Link></li>
            <li><Link href="/wallets/best-crypto-wallets-2026">Wallets</Link></li>
            <li><Link href="/dexes">DEXes</Link></li>
            <li><Link href="/exchanges/no-kyc">No KYC exchanges</Link></li>
            <li><Link href="/meme-coins">Meme coins</Link></li>
            <li><Link href="/tools/bitcoin-halving">Bitcoin Halving</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link href="/methodology">Methodology</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Contact</div>
          <p>admin@cryptosbeginner.com</p>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-6 text-xs">
        © 2026 CryptosBeginner. Educational content only. Not financial advice.
      </div>
    </footer>
  );
}
