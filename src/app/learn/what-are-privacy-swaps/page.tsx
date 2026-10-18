import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/what-are-privacy-swaps`;
const UPDATED = "18 October 2026";
const UPDATED_ISO = "2026-10-18";

export const metadata: Metadata = {
  title: "What Are Privacy Swaps? The 3 Types Explained (2026 Guide)",
  description:
    "Privacy swaps break the on-chain trail between your wallet and your payment. The three types explained: privacy-route aggregators, intent-based swaps, and shielded pools, with real cases and honest limitations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Are Privacy Swaps? The 3 Types Explained",
    description:
      "Privacy-route aggregators, intent-based swaps, and shielded pools: how each breaks the on-chain trail, and what they cannot do.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are Privacy Swaps? The 3 Types Explained",
    description:
      "The three kinds of privacy swaps, explained with real cases and honest limitations.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What is a privacy swap?",
    answer:
      "A privacy swap is a cryptocurrency exchange designed to break the visible on-chain link between the coins you send and the coins someone receives. Normal transfers leave a permanent public trail from your wallet to the recipient. Privacy swaps route the exchange through mechanisms, Monero hops, intent networks, or shielded pools, that make that trail hard or impossible to follow.",
  },
  {
    question: "Are privacy swaps legal?",
    answer:
      "Privacy software itself is not banned in most countries, but using it to launder money, evade sanctions, or commit crimes is illegal everywhere. Some jurisdictions treat privacy tools with extra scrutiny, and several services have faced enforcement action. You remain responsible for tax reporting and local laws wherever you live. This is general information, not legal advice.",
  },
  {
    question: "Do privacy swaps require KYC?",
    answer:
      "It depends on the type. Shielded pools like Zcash and Privacy Pools are protocol-level and require no account at all. Intent-based services like DarkSwap do not ask you to connect a wallet. Swap aggregators with privacy routes generally do not ask for ID upfront, but many run automated screening that can trigger a KYC demand after you have sent funds. No service's no-logs claim can be independently verified.",
  },
  {
    question: "Can a privacy swap be traced?",
    answer:
      "Sometimes. Swap aggregators hold your funds briefly while the swap runs, and the partner exchanges they route through can freeze flagged coins. Amount and timing analysis can sometimes link deposits to payouts. Shielded pools using zero-knowledge cryptography are far harder to trace, which is why newer ones add deposit screening to keep stolen funds out. No method makes the recipient forget they were paid.",
  },
  {
    question: "What is the difference between a privacy swap and a mixer?",
    answer:
      "A mixer takes one coin in and returns the same coin, only obscuring its history. A privacy swap exchanges one coin for a different one, so the recipient gets a different asset at a different address. Mixers like Tornado Cash were sanctioned in 2022 and later delisted; the newer shielded-pool designs build in compliance screening from the start.",
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

export default function WhatArePrivacySwapsPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Are Privacy Swaps? The 3 Types Explained (2026 Guide)",
    description: metadata.description,
    datePublished: UPDATED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: "Alex Rivera", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · privacy</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              What are privacy swaps? The 3 types explained
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A normal crypto transfer leaves a permanent public trail from your wallet to the
              recipient. Privacy swaps break that trail, three different ways.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <div className="py-10">
          <Section id="definition">
            <H2>The problem privacy swaps solve</H2>
            <P>
              Bitcoin, Ethereum, and most other blockchains are public ledgers. When you send coins
              from your wallet to someone, the transaction records your address permanently. Anyone
              with that transaction can paste your address into a block explorer and see your
              balance, your history, and everyone you have ever paid. A privacy swap removes the
              direct on-chain link between your wallet and the recipient's, so the payment cannot be
              clicked back to your funds.
            </P>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Normal transfer</p>
                <div className="mt-4 flex items-center justify-between gap-2 text-center">
                  <div className="flex-1 rounded-xl bg-slate-100 p-3">
                    <p className="text-sm font-black">Your wallet</p>
                    <p className="text-xs text-slate-500">balance visible</p>
                  </div>
                  <span className="text-xl font-black text-slate-400">→</span>
                  <div className="flex-1 rounded-xl bg-slate-100 p-3">
                    <p className="text-sm font-black">Their wallet</p>
                    <p className="text-xs text-slate-500">trail is public</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">One permanent public link. Anyone can follow it both ways.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">Privacy swap</p>
                <div className="mt-4 flex items-center justify-between gap-2 text-center">
                  <div className="flex-1 rounded-xl bg-white p-3">
                    <p className="text-sm font-black">Your wallet</p>
                    <p className="text-xs text-slate-500">you pay in</p>
                  </div>
                  <span className="text-xl font-black text-emerald-600">⇄</span>
                  <div className="flex-1 rounded-xl bg-slate-950 p-3">
                    <p className="text-sm font-black text-white">Privacy layer</p>
                    <p className="text-xs text-slate-400">trail broken here</p>
                  </div>
                  <span className="text-xl font-black text-emerald-600">→</span>
                  <div className="flex-1 rounded-xl bg-white p-3">
                    <p className="text-sm font-black">Their wallet</p>
                    <p className="text-xs text-slate-500">paid from elsewhere</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">The recipient is paid from an address that never touched yours.</p>
              </div>
            </div>
          </Section>

          <Section id="type-1">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Type 1</p>
            <H2>Swap aggregators with a privacy route</H2>
            <P>
              You send coin A to the service and get coin B at a new address. Their privacy mode
              routes your funds through Monero and back out, which cuts the trail on the blockchain:
              Monero hides the sender, receiver, and amount by default, so the coins that come out
              the other side cannot be linked to the coins that went in.
            </P>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-7" role="img" aria-label="Infographic: how a Monero privacy hop breaks the on-chain trail">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-300">How the Monero hop works</p>
              <div className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                {[
                  { label: "You send BTC", sub: "public trail starts", tone: "bg-white/10" },
                  { label: "Swapped to XMR", sub: "trail disappears", tone: "bg-fuchsia-500/25 border border-fuchsia-400/40" },
                  { label: "Swapped to ETH", sub: "new coins, new trail", tone: "bg-white/10" },
                ].map((s, i) => (
                  <div key={s.label} className="flex flex-1 items-center gap-2">
                    <div className={`flex-1 rounded-xl p-4 text-center ${s.tone}`}>
                      <p className="text-sm font-black">{s.label}</p>
                      <p className="mt-1 text-xs text-slate-400">{s.sub}</p>
                    </div>
                    {i < 2 && <span className="font-black text-slate-500">→</span>}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The middle step happens inside Monero's opaque ledger. An observer sees BTC go in
                and ETH come out, but cannot prove they are the same money.
              </p>
            </div>
            <P>
              <strong className="text-slate-950">Example:</strong> PrivataSwap offers an XMR
              privacy hop for non-Monero pairs. One correction worth making: RocketX also markets a
              Private Swap, but per its own documentation it uses split-route execution across
              regulated exchange partners, not Monero. The mechanism matters more than the
              marketing label.
            </P>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-amber-800">The catch</p>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                While the swap runs, the service holds your funds, and the partner exchanges it
                routes through can freeze flagged coins. And no service's no-logs claim can be
                independently verified. You are trusting their word.
              </p>
            </div>
          </Section>

          <Section id="type-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Type 2</p>
            <H2>Intent-based swaps</H2>
            <P>
              Instead of connecting your wallet to a trading interface, you state what you want
              (your intent), and a third party fills the order. You manually send a deposit; the
              service never signs transactions on your behalf and never takes custody of your
              wallet.
            </P>
            <P>
              <strong className="text-slate-950">Example:</strong> DarkSwap runs on NEAR Intents.
              Per its own documentation, users send deposits manually with no wallet connection,
              and the service does not custody funds. Its docs are unusually honest: no anonymity
              or unlinkability guarantee applies, and the absence of a wallet connection does not
              by itself establish privacy.
            </P>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" role="img" aria-label="Infographic: intent-based swap flow, from stating intent to filled order">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-700">How intent swaps work</p>
              <ol className="mt-4 space-y-0">
                {[
                  ["You state an intent", "I want to trade 1 ETH for USDC at market rate."],
                  ["Solvers compete", "Third parties bid to fill your order at the best price."],
                  ["You send the deposit", "Manually, to a one-time address. No wallet connection."],
                  ["Solver delivers", "USDC arrives at your address from the solver's funds."],
                ].map(([title, body], i, arr) => (
                  <li key={title} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < arr.length - 1 && <span className="absolute left-[17px] top-10 h-full w-0.5 bg-slate-200" aria-hidden="true" />}
                    <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-black text-white">{i + 1}</span>
                    <div className="pt-1">
                      <p className="font-black text-slate-950">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-slate-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <P>
              Intent networks have become infrastructure that both sides use. The Ledger CryptoBilis
              hack in October 2026 (~$102M drained via compromised devices) saw stolen funds routed
              through NEAR Intents into and out of Zcash's shielded pool. But the same screening
              infrastructure cuts the other way: when the Bitget exchange was hacked in September
              2026 (~$387.5M), NEAR Intents' automated SHIELD system blocked over $50M in attempted
              swaps and froze around $503K mid-execution. The network is neutral plumbing; its
              screening decides who gets to use it.
            </P>
          </Section>

          <Section id="type-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Type 3</p>
            <H2>Shielded pools</H2>
            <P>
              You hold, send, or swap assets inside a pool that hides the amounts and the people
              involved using zero-knowledge cryptography. Unlike the first two types, there is no
              company in the middle holding your funds: the privacy is enforced by mathematics, not
              by a service's promise.
            </P>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-black text-slate-950">Zcash shielded pool</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">The original · since 2016</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Shielded (z-) addresses hide sender, receiver, and amount via zk-SNARKs. The
                  current Ironwood pool holds over $1B, about 29% of all ZEC. Privacy is optional:
                  transparent addresses work like Bitcoin.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-black text-slate-950">Privacy Pools</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">Ethereum · launched March 2025</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Every deposit is screened. Flagged money can only be withdrawn back to its
                  original address, in public, so stolen funds cannot exit anonymously. Compliance
                  built into the cryptography.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-black text-slate-950">Umbra</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">Solana · launched March 2026</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mixer pool plus encrypted token accounts with hidden amounts. Users get viewing
                  keys to selectively show an auditor their transactions, alongside risk screening
                  and geo-blocking.
                </p>
              </div>
            </div>
            <P>
              The newer pools are built to keep stolen funds out, which is the industry's answer to
              the Tornado Cash sanctions saga. Old-style mixers asked no questions; the new
              generation screens deposits so legitimate users keep privacy while illicit funds hit
              a wall. Whether regulators accept the compromise is still an open question.
            </P>
          </Section>

          <Section id="limitations">
            <H2>What privacy swaps cannot do</H2>
            <div className="mt-6 space-y-3">
              {[
                ["They cannot make the recipient forget.", "The person you paid still knows they were paid, and when, and how much (on transparent chains)."],
                ["They cannot guarantee no logs.", "No service's logging claims can be independently verified. Seized servers have yielded terabytes of data before."],
                ["They cannot protect sloppy operations.", "Reusing addresses, posting transaction IDs publicly, or funding a private wallet from a KYC exchange can undo everything."],
                ["They cannot remove legal obligations.", "Tax reporting and sanctions laws apply regardless of which tool you used."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
            <P>
              For the broader landscape of no-KYC trading, including the honest risks of instant
              swap services, see our guide to{" "}
              <Link href="/learn/no-kyc-exchanges-explained" className="font-black text-fuchsia-700 hover:text-fuchsia-900">
                no-KYC exchanges explained
              </Link>
              .
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Last updated {UPDATED}. Educational content only, not financial or legal advice.
              Claims verified against project documentation and incident reporting, October 2026.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
