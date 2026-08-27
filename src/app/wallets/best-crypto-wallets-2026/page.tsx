import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WalletExplorer from "./WalletExplorer";
import { walletFaqs, wallets } from "./wallets-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-27";

export const metadata: Metadata = {
  title: "Best Crypto Wallets 2026 | Hardware, Mobile and Extensions",
  description:
    "Compare 2026 crypto wallets by type: Ledger, Trezor, SafePal, MetaMask, Phantom, Trust Wallet and Backpack. Learn seed-phrase safety, self-custody and which wallet fits which job.",
  alternates: { canonical: `${SITE_URL}/wallets/best-crypto-wallets-2026` },
  openGraph: {
    title: "Best Crypto Wallets 2026",
    description: "Hardware, mobile and extension wallets compared without hype.",
    url: `${SITE_URL}/wallets/best-crypto-wallets-2026`,
    type: "article",
    images: [`${SITE_URL}/images/wallets/wallet-types.svg`],
  },
};

export default function BestWalletsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Wallets", item: `${SITE_URL}/wallets` },
        { "@type": "ListItem", position: 3, name: "Best crypto wallets 2026", item: `${SITE_URL}/wallets/best-crypto-wallets-2026` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Crypto Wallets 2026",
      description: "Compare hardware, mobile and extension wallets by fit, chains and key storage.",
      dateModified: UPDATED,
      inLanguage: "en",
      author: { "@type": "Organization", name: "CryptosBeginner", url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: "CryptosBeginner" },
      mainEntityOfPage: `${SITE_URL}/wallets/best-crypto-wallets-2026`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto wallets compared for 2026",
      itemListElement: wallets.map((wallet, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: wallet.name,
        url: wallet.href,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: walletFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <main className="bg-white">
        <section className="border-b bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
              Wallets guide · Updated <time dateTime={UPDATED}>27 August 2026</time>
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Best crypto wallets in 2026: hardware, mobile and extensions
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A wallet is the software or device that holds your keys. There is no universal best wallet. Match the product to the job: savings, daily spending or DeFi.
            </p>
            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-200">
              Some hardware-wallet links are affiliate links. We may earn a commission if you buy through them. That does not change the security advice: never share a seed phrase.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <Image src="/images/wallets/wallet-types.svg" alt="Hardware, mobile, extension and desktop wallets compared by where keys live" width={1200} height={520} priority unoptimized className="w-full rounded-3xl border border-slate-200" />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <p className="text-sm font-bold text-cyan-900">Keys, not coins</p>
              <p className="mt-2 text-sm leading-6 text-cyan-950">The wallet stores keys. The coins stay on the blockchain.</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">12 or 24 words</p>
              <p className="mt-2 text-sm leading-6 text-amber-950">BIP39 seed phrases are the backup. Lose both device and phrase and the funds are usually gone.</p>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-bold text-rose-900">Hot vs cold</p>
              <p className="mt-2 text-sm leading-6 text-rose-950">Phone and extension wallets are convenient and online. Hardware wallets keep keys offline until you sign.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">Compare</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Choose by wallet type</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">Ledger, Trezor and SafePal are hardware options. MetaMask, Phantom, Trust Wallet and Backpack are hot wallets for daily use.</p>
          <div className="mt-6">
            <WalletExplorer />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-3xl font-bold">Hardware wallet CTAs</h2>
            <p className="mt-3 max-w-3xl text-slate-300">Affiliate links. Confirm the official domain before you pay.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://go.cryptosbeginner.com/LedgerWallet" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900">Compare Ledger</a>
              <a href="https://go.cryptosbeginner.com/Trezor" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950">Compare Trezor</a>
              <a href="https://go.cryptosbeginner.com/SafePal" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-bold text-white">Compare SafePal</a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Tips that prevent most wallet losses</h2>
          <Image src="/images/wallets/seed-phrase-tips.svg" alt="Seed phrase rules: write offline, never share, never type into websites, test a restore" width={1200} height={420} unoptimized className="mt-6 w-full rounded-3xl border border-slate-200" />
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Download MetaMask, Phantom, Trust Wallet and Backpack only from their official sites or store listings.</li>
            <li>Buy hardware wallets new and sealed. A cheap used Ledger or Trezor can already contain a known seed.</li>
            <li>Keep savings on hardware and a small amount in a hot wallet.</li>
            <li>If an exchange failed in 2022, that is an argument for self-custody, not for putting every coin in one phone app. See the <Link href="/projects/dead" className="font-semibold text-indigo-700 hover:underline">dead-projects directory</Link>.</li>
          </ul>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Wallet questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {walletFaqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p><strong>Disclaimer:</strong> Educational content only. Not financial advice. Self-custody makes you responsible for backups, phishing and every transaction you approve. Brand names are used for identification. Ledger, Trezor and SafePal links may be affiliate links.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
