import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="text-slate-900">Cryptos</span>
          <span className="text-indigo-600">Beginner</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/exchanges/best-crypto-exchanges-2026" className="hover:text-indigo-600">
            Exchanges
          </Link>
          <Link href="/regions" className="hover:text-indigo-600">
  Regions
</Link>
          <Link href="/tools/exchange-finder" className="hover:text-indigo-600">
            Quiz
          </Link>
          <Link href="/tools/fee-calculator" className="hover:text-indigo-600">
            Fee Calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}