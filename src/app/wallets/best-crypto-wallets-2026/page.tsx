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
    "Compare crypto wallets for 2026: Ledger, Trezor, SafePal, Tangem, SecuX, CoolWallet, MetaMask, Phantom, Trust Wallet, Backpack, OKX Wallet, Base Wallet and Bitget Wallet.",
  alternates: { canonical: `${SITE_URL}/wallets/best-crypto-wallets-2026` },
  openGraph: {
    title: "Best Crypto Wallets 2026",
    description: "Hardware, mobile and extension wallets compared in plain language.",
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
      dateModified: UPDATED,
      inLanguage: "en",
      author: { "@type": "Organization", name: "CryptosBeginner", url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: "CryptosBeginner" },
      mainEntityOfPage: `${SITE_URL}/wallets/best-crypto-wallets-2026`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
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
              Wallets · Updated <time dateTime={UPDATED}>27 August 2026</time>
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Crypto wallets in 2026
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Hardware for savings. Phone and browser wallets for daily use. The right choice depends on how you store keys, not on a ranking.
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300">
              Some links are affiliate links. If you buy through them, we may earn a commission at no extra cost to you. That helps keep this site running.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <Image src="/images/wallets/wallet-types.svg" alt="Hardware, mobile, extension and desktop wallets compared by where keys live" width={1200} height={520} priority unoptimized className="w-full rounded-3xl border border-slate-200" />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Wallet list</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Filter by hardware, mobile or browser extension. Brand images are used to identify each product.
          </p>
          <div className="mt-6">
            <WalletExplorer />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">If you buy a hardware wallet</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Using the links below may earn CryptosBeginner a commission. The price you pay does not go up. The commission helps cover hosting, research and updates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://go.cryptosbeginner.com/LedgerWallet" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Ledger</a>
              <a href="https://go.cryptosbeginner.com/Trezor" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Trezor</a>
              <a href="https://go.cryptosbeginner.com/SafePal" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">SafePal</a>
              <a href="https://www.coolwallet.io/products/coolwallet-pro/?ref=ywvizdk" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">CoolWallet Pro</a>
              <a href="https://web3.bitget.com/share/h0Nk8?inviteCode=pC8Hzp" target="_blank" rel="noopener noreferrer sponsored" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Bitget Wallet</a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Backup basics</h2>
          <Image src="/images/wallets/seed-phrase-tips.svg" alt="Seed phrase rules: write offline, never share, never type into websites, test a restore" width={1200} height={420} unoptimized className="mt-6 w-full rounded-3xl border border-slate-200" />
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Download apps only from the official site or store listing.</li>
            <li>Buy hardware new and sealed.</li>
            <li>Keep savings on hardware and a small amount in a hot wallet.</li>
            <li>Exchange failures are a reason for self-custody, not for putting everything in one phone app. See the <Link href="/projects/dead" className="font-semibold text-indigo-700 hover:underline">failed-projects directory</Link>.</li>
          </ul>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Questions</h2>
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
            <p>Educational content only. Not financial advice. Brand and product images identify the wallets discussed. Some links are affiliate links.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
