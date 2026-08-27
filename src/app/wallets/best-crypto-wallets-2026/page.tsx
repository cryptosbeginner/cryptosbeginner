import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WalletExplorer from "./WalletExplorer";
import { wallets } from "./wallets-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-27";

export const metadata: Metadata = {
  title: "Best Crypto Wallets 2026 | Hardware, Mobile and Extensions",
  description:
    "Compare hardware, mobile and browser wallets for 2026. Ledger, Trezor, SafePal, MetaMask, Phantom, Trust Wallet and Backpack, with self-custody tips.",
  alternates: { canonical: `${SITE_URL}/wallets/best-crypto-wallets-2026` },
  openGraph: {
    title: "Best Crypto Wallets 2026",
    description: "Hardware, mobile and extension wallets compared by use case, not hype.",
    url: `${SITE_URL}/wallets/best-crypto-wallets-2026`,
    type: "article",
    images: [`${SITE_URL}/images/wallets/wallet-types.svg`],
  },
};

const faqs = [
  {
    q: "What is the best crypto wallet in 2026?",
    a: "There is no single best wallet. Hardware wallets such as Ledger, Trezor and SafePal are better for long-term savings. Mobile and extension wallets such as Phantom, MetaMask, Trust Wallet and Backpack are better for small daily amounts.",
  },
  {
    q: "Is an exchange account a wallet?",
    a: "No. An exchange balance is an IOU. If you do not control the seed phrase or device, you do not control the keys.",
  },
  {
    q: "Should I keep all my crypto on MetaMask or Phantom?",
    a: "No. Hot wallets are convenient and more exposed to phishing and malware. Keep only working capital there.",
  },
  {
    q: "What happens if I lose my seed phrase?",
    a: "In self-custody, losing the recovery phrase usually means losing the funds. There is no reset button.",
  },
];

export default function BestWallets2026Page() {
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
      author: { "@type": "Organization", name: "CryptosBeginner" },
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
      mainEntity: faqs.map((item) => ({
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
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">Wallets guide · Updated 27 August 2026</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Best crypto wallets in 2026: hardware, mobile and extensions</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Compare wallets by where the keys live. Ledger, Trezor and SafePal are for savings. MetaMask, Phantom, Trust Wallet and Backpack are for daily use. This is not a universal ranking.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-amber-200">Some hardware-wallet links are affiliate links. We may earn a commission if you buy. That does not change the security advice.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <Image src="/images/wallets/wallet-types.svg" alt="Hardware, mobile, extension and desktop wallet types" width={1200} height={520} unoptimized className="w-full rounded-3xl border border-slate-200" />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <a href="https://go.cryptosbeginner.com/LedgerWallet" target="_blank" rel="noopener noreferrer sponsored" className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-300">
              <img src="/images/wallets/ledger.svg" alt="Ledger logo" className="h-10 w-10 rounded-lg" />
              <h2 className="mt-3 text-xl font-bold">Ledger</h2>
              <p className="mt-2 text-sm text-slate-600">Hardware for long-term self-custody.</p>
            </a>
            <a href="https://go.cryptosbeginner.com/Trezor" target="_blank" rel="noopener noreferrer sponsored" className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-300">
              <img src="/images/wallets/trezor.svg" alt="Trezor logo" className="h-10 w-10 rounded-lg" />
              <h2 className="mt-3 text-xl font-bold">Trezor</h2>
              <p className="mt-2 text-sm text-slate-600">Open-source hardware alternative.</p>
            </a>
            <a href="https://go.cryptosbeginner.com/SafePal" target="_blank" rel="noopener noreferrer sponsored" className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-300">
              <img src="/images/wallets/safepal.svg" alt="SafePal logo" className="h-10 w-10 rounded-lg" />
              <h2 className="mt-3 text-xl font-bold">SafePal</h2>
              <p className="mt-2 text-sm text-slate-600">Air-gapped and budget hardware option.</p>
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Compare wallets</h2>
          <p className="mt-3 max-w-3xl text-slate-700">Filter by hardware, mobile or extension. Check official download pages for software wallets.</p>
          <div className="mt-6"><WalletExplorer /></div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Useful 2026 facts</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">12 or 24</p><p className="mt-2 text-sm text-slate-600">Typical BIP39 recovery-phrase length. Anyone with those words can move the funds.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">Hot vs cold</p><p className="mt-2 text-sm text-slate-600">Phone and browser wallets are hot. Hardware wallets keep keys offline until you approve a transaction.</p></div>
            <div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">No reset</p><p className="mt-2 text-sm text-slate-600">Self-custody has no customer-support recovery. That is the point, and the risk.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-slate-900">Tips that prevent most wallet losses</h2>
          <Image src="/images/wallets/seed-phrase-tips.svg" alt="Seed phrase safety rules" width={1200} height={420} unoptimized className="mt-6 w-full rounded-3xl border border-slate-200" />
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Download software wallets only from the official domain, not from ads or DMs.</li>
            <li>Verify receive addresses on a hardware screen before sending large amounts.</li>
            <li>Keep a small hot-wallet balance and a separate hardware savings wallet.</li>
            <li>Never type a seed phrase into Google, ChatGPT, Discord, Telegram or a “support” form.</li>
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Wallet questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="flex flex-wrap gap-3">
            <Link href="/wallets" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700">All wallets</Link>
            <Link href="/learn/seed-phrase-security" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700">Seed phrase guide</Link>
            <Link href="/projects/dead" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white">Why exchanges fail</Link>
          </div>
        </section>
        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            <p><strong>Disclaimer:</strong> Educational content only. Not financial advice. Self-custody can mean total loss if you lose keys, approve a malicious transaction or buy a fake device. Ledger, Trezor and SafePal links may be affiliate links. Software wallets link to official sites.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
