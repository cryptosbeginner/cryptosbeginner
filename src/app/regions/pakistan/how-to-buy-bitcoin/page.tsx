import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Buy Bitcoin in Pakistan (2026): P2P, PKR, Fees",
  description:
    "Step-by-step guide to buying Bitcoin in Pakistan with PKR via Binance, Bybit, and OKX P2P. JazzCash, Easypaisa, CNIC KYC, fees, and safety checks for beginners.",
};

const PUBLISHED = "2026-06-18";
const UPDATED = "2026-08-12";

const faqs = [
  {
    q: "Is Bitcoin legal in Pakistan in 2026?",
    a: "Owning and trading Bitcoin as an individual is widely practiced and is not treated as a criminal offense in the same way as using crypto as legal tender. Bitcoin is not legal tender. Banks often block crypto-related transfers. Always follow current SBP, SECP, and PVARA guidance. This is not legal advice.",
  },
  {
    q: "What is the easiest way to buy Bitcoin in Pakistan?",
    a: "Most beginners buy USDT on Binance P2P with JazzCash, Easypaisa, or bank transfer, then convert USDT to BTC on the BTC/USDT spot pair. Bybit and OKX P2P work the same way if you want a backup exchange.",
  },
  {
    q: "Can I buy Bitcoin with JazzCash or Easypaisa?",
    a: "Yes. Use the exchange P2P market, filter PKR + JazzCash or Easypaisa, pick a high-completion merchant, pay the exact amount, then wait for USDT or BTC to release into your exchange wallet. Never release payment outside the P2P chat.",
  },
  {
    q: "Do I need CNIC KYC?",
    a: "Yes for withdrawals and higher limits on Binance, Bybit, and OKX. Keep a clear CNIC photo and a matching selfie. Incomplete KYC is the main reason first deposits get stuck.",
  },
  {
    q: "How much does it cost to buy ₨50,000 of Bitcoin?",
    a: "Expect a P2P premium over the USDT rate (often 0.5–2% depending on the merchant) plus about 0.10% spot taker fee when you convert USDT to BTC. A ₨50,000 buy might cost roughly ₨250–1,100 extra versus the raw BTC price.",
  },
  {
    q: "Should I leave Bitcoin on the exchange?",
    a: "Small amounts can stay on a reputable exchange with 2FA enabled. For amounts you cannot afford to lose to a hack or freeze, withdraw to a hardware wallet such as Ledger or Trezor.",
  },
];

function AffiliateButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
    >
      {children}
    </a>
  );
}

export default function HowToBuyBitcoinPakistanPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Buy Bitcoin in Pakistan (2026)",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Hassan Malik" },
    publisher: { "@type": "Organization", name: "CryptosBeginner" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-4 py-10 text-slate-800">
          <p className="text-sm text-slate-500">
            Pakistan · Guides · Updated <time dateTime={UPDATED}>12 August 2026</time>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to Buy Bitcoin in Pakistan (2026)
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Buy BTC with PKR using P2P on Binance, Bybit, or OKX. JazzCash, Easypaisa, CNIC KYC, real fees, and the scams to skip.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            By <Link href="/about" className="font-medium text-indigo-700">Hassan Malik</Link> · First published 18 June 2026
          </p>

          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            Disclosure: We may earn a commission if you sign up via our exchange or wallet links. Not financial, legal, or tax advice. Crypto is volatile.
          </p>

          <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Bitcoin is not legal tender in Pakistan. Personal holding and trading sit in a fast-moving regulatory grey zone.</li>
              <li>Practical path: KYC on a global exchange → buy USDT with PKR on P2P → convert to BTC.</li>
              <li>Best first exchange for most beginners: <strong>Binance</strong>. Keep Bybit or OKX as backup.</li>
              <li>Pay only inside P2P. Never send JazzCash to a WhatsApp “broker.”</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <AffiliateButton href="https://go.cryptosbeginner.com/binance">Open Binance</AffiliateButton>
              <AffiliateButton href="https://go.cryptosbeginner.com/Bybit">Open Bybit</AffiliateButton>
              <AffiliateButton href="https://go.cryptosbeginner.com/OKX">Open OKX</AffiliateButton>
            </div>
          </section>

          <nav className="mt-10 rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">On this page</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-indigo-700">
              <li><a href="#legal">Is it legal?</a></li>
              <li><a href="#best-exchanges">Best exchanges for PKR</a></li>
              <li><a href="#steps">5 steps to buy BTC</a></li>
              <li><a href="#fees">What it actually costs</a></li>
              <li><a href="#scams">Scams and bank flags</a></li>
              <li><a href="#store">Where to store it</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            [Image placeholder: /images/how-to-buy-bitcoin-pakistan-hero.png — 1200×630]
          </div>

          <section id="legal" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Is Bitcoin legal in Pakistan?</h2>
            <p className="mt-4 leading-7">
              You can usually hold and trade Bitcoin as an individual, but you cannot treat it as rupees. It is not legal tender. Local banks often refuse or reverse transfers that mention “crypto,” “USDT,” or “Binance.”
            </p>
            <p className="mt-4 leading-7">
              Pakistan has been building a virtual-asset framework. Rules can change. For business or large volume, speak to a local lawyer.
            </p>
          </section>

          <section id="best-exchanges" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Best exchanges to buy Bitcoin in Pakistan</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border border-slate-200 px-3 py-2">Exchange</th>
                    <th className="border border-slate-200 px-3 py-2">Best for</th>
                    <th className="border border-slate-200 px-3 py-2">PKR rail</th>
                    <th className="border border-slate-200 px-3 py-2">Start</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-medium">Binance</td>
                    <td className="border border-slate-200 px-3 py-2">First account, deepest P2P</td>
                    <td className="border border-slate-200 px-3 py-2">JazzCash, Easypaisa, bank</td>
                    <td className="border border-slate-200 px-3 py-2">
                      <a href="https://go.cryptosbeginner.com/binance" target="_blank" rel="noopener noreferrer sponsored" className="font-semibold text-emerald-700">Sign up</a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium">Bybit</td>
                    <td className="border border-slate-200 px-3 py-2">Backup + futures later</td>
                    <td className="border border-slate-200 px-3 py-2">P2P PKR</td>
                    <td className="border border-slate-200 px-3 py-2">
                      <a href="https://go.cryptosbeginner.com/Bybit" target="_blank" rel="noopener noreferrer sponsored" className="font-semibold text-emerald-700">Sign up</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-medium">OKX</td>
                    <td className="border border-slate-200 px-3 py-2">Second P2P book</td>
                    <td className="border border-slate-200 px-3 py-2">P2P PKR</td>
                    <td className="border border-slate-200 px-3 py-2">
                      <a href="https://go.cryptosbeginner.com/OKX" target="_blank" rel="noopener noreferrer sponsored" className="font-semibold text-emerald-700">Sign up</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="steps" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">How to buy Bitcoin in Pakistan in 5 steps</h2>

            <h3 className="mt-6 text-xl font-semibold">1. Create the account</h3>
            <p className="mt-3 leading-7">Register with email, enable authenticator app 2FA, then complete KYC.</p>
            <div className="mt-4">
              <AffiliateButton href="https://go.cryptosbeginner.com/binance">Create Binance account</AffiliateButton>
            </div>

            <h3 className="mt-8 text-xl font-semibold">2. Finish CNIC KYC</h3>
            <p className="mt-3 leading-7">Upload a clear CNIC and matching selfie. KYC unlocks withdrawals.</p>

            <h3 className="mt-8 text-xl font-semibold">3. Buy USDT on P2P with PKR</h3>
            <p className="mt-3 leading-7">
              Open P2P → Buy USDT → PKR. Filter JazzCash, Easypaisa, or bank transfer. Prefer high-completion merchants. Start with a small test amount.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
              <li>Pay the exact amount shown</li>
              <li>Do not write “BTC” or “USDT” in bank remarks</li>
              <li>Mark paid only after the success screen</li>
              <li>Use in-app appeal if the merchant stalls</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold">4. Convert USDT to BTC</h3>
            <p className="mt-3 leading-7">Spot → BTC/USDT. Market order is simplest for a first buy.</p>

            <h3 className="mt-8 text-xl font-semibold">5. Secure the account</h3>
            <p className="mt-3 leading-7">Enable withdrawal whitelist and anti-phishing code. Move larger holdings off-exchange.</p>
          </section>

          <section id="fees" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">What a ₨50,000 buy can cost</h2>
            <p className="mt-4 leading-7">Example only. Assume ~1% P2P premium + ~0.10% spot taker:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
              <li>P2P premium: ~₨500</li>
              <li>Spot taker: ~₨50</li>
              <li>Network fee: only when you withdraw on-chain</li>
            </ul>
            <p className="mt-4 leading-7">
              Use the <Link href="/tools/fee-calculator" className="text-indigo-700">fee calculator</Link> or{" "}
              <Link href="/tools/exchange-finder" className="text-indigo-700">exchange quiz</Link>.
            </p>
          </section>

          <section id="scams" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Scams and bank flags</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
              <li>No WhatsApp / Instagram “agents”</li>
              <li>No payment outside exchange escrow</li>
              <li>Never share recovery phrases</li>
              <li>Keep bank transfer notes plain</li>
            </ul>
          </section>

          <section id="store" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Where to store Bitcoin</h2>
            <p className="mt-4 leading-7">
              Keep only trading amounts on an exchange. For longer-term holdings, use a hardware wallet.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AffiliateButton href="https://go.cryptosbeginner.com/LedgerWallet">Ledger</AffiliateButton>
              <AffiliateButton href="https://go.cryptosbeginner.com/TrezorSafe">Trezor</AffiliateButton>
            </div>
          </section>

          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
            <dl className="mt-4 space-y-6">
              {faqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-slate-900">{item.q}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Next step</h2>
            <p className="mt-2 leading-7">Open one account, pass KYC, then do a small P2P test.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AffiliateButton href="https://go.cryptosbeginner.com/binance">Start with Binance</AffiliateButton>
              <Link href="/regions/pakistan" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
                Pakistan exchanges guide
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}