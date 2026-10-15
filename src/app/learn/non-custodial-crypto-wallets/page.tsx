import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/non-custodial-crypto-wallets`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2025";

export const metadata: Metadata = {
  title: "Non-Custodial Crypto Wallets Explained 2026: Self-Custody, Seed Phrases, Hot vs Cold",
  description:
    "October 2026 beginner guide to non-custodial crypto wallets: what self-custody really means, how seed phrases work, hot vs cold wallets compared, and how to choose a wallet that fits your habits.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Non-Custodial Crypto Wallets Explained",
    description:
      "Self-custody without the fear: seed phrases, hot vs cold wallets, and how to choose the right non-custodial wallet.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/non-custodial-wallets/hero.png`, alt: "Illustration of a hand holding a glowing golden key, representing crypto self-custody" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Custodial Crypto Wallets Explained",
    description:
      "What self-custody means, how seed phrases work, and hot vs cold wallets for beginners.",
  },
};

const faqItems = [
  {
    question: "What happens if I lose my seed phrase?",
    answer:
      "If you lose your seed phrase and have no other backup, your funds are almost certainly gone forever. There is no customer support to reset it, because no company controls your wallet. That is why multiple physical backups in different safe locations are the single most important habit in self-custody.",
  },
  {
    question: "Are non-custodial wallets safer than keeping crypto on an exchange?",
    answer:
      "They remove one risk and add another. On an exchange, you trust the company with your funds: hacks, freezes, and bankruptcies are real risks. With self-custody, you remove the company from the equation but become fully responsible for backups and security. Many beginners use both: a wallet for long-term holdings and a reputable exchange for active trading.",
  },
  {
    question: "Do I need a hardware wallet?",
    answer:
      "Not for small amounts you are learning with. A free hot wallet is fine for getting started. A hardware wallet becomes worth it when the amount you hold is large enough that losing it to malware or a phone hack would genuinely hurt. A common rule of thumb: if the device costs less than 1% of what it protects, it pays for itself in peace of mind.",
  },
  {
    question: "Can someone steal my crypto if they see my wallet address?",
    answer:
      "No. Your wallet address is like an email address: anyone can send to it, but nobody can take from it. What must stay secret are your seed phrase and private keys. Never share them with anyone, never type them into a website, and never send them to 'support'. No legitimate support agent will ever ask for them.",
  },
  {
    question: "What is the difference between a seed phrase and a private key?",
    answer:
      "Your seed phrase, usually 12 or 24 words, is the master backup that can regenerate all the private keys in your wallet. Each private key controls one address. Think of the seed phrase as the master key to the building and private keys as the keys to individual rooms. Protect the seed phrase and you protect everything.",
  },
  {
    question: "Should I store my seed phrase digitally?",
    answer:
      "Avoid it. Screenshots, notes apps, emails, and cloud drives are all one hack, sync error, or malware infection away from exposure. Write it on paper or stamp it on metal, keep copies in separate physical locations, and never photograph it. Boring beats clever here.",
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

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mt-3 text-base leading-8 text-slate-600">{children}</li>;
}

export default function NonCustodialWalletsPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Non-Custodial Crypto Wallets Explained 2026: Self-Custody, Seed Phrases, Hot vs Cold",
    description:
      "October 2026 beginner guide to non-custodial crypto wallets: what self-custody really means, how seed phrases work, hot vs cold wallets compared, and how to choose a wallet that fits your habits.",
    datePublished: "2025-05-17",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · wallet safety</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Non-custodial crypto wallets: your keys, your coins, your responsibility
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              "Not your keys, not your coins." A non-custodial wallet gives you complete control of your
              crypto, with no bank, exchange, or company in between. This guide explains what that control
              really means, how seed phrases work, the honest differences between hot and cold wallets, and
              how to pick the right one for how you actually use crypto.
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
          <Section id="self-custody">
            <H2>What self-custody actually means</H2>
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/non-custodial-wallets/hero.png"
                alt="Illustration of a hand holding a glowing golden key, representing crypto self-custody"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
            <P>
              When you keep crypto on an exchange, the exchange holds the private keys and you hold an
              account. When you use a non-custodial wallet, <strong className="text-slate-900">you</strong>{" "}
              hold the private keys, the cryptographic codes that prove ownership and authorize every
              transaction. Nobody can freeze your funds, nobody can deny you a withdrawal, and no company
              failure can take them from you.
            </P>
            <P>
              The trade is total accountability. Lose your seed phrase and there is no password reset, no
              support ticket, no recovery process. Send coins to the wrong address and there is no undo.
              Self-custody is genuinely empowering, and it is genuinely unforgiving. Going in with that
              clear-eyed is the whole game.
            </P>
          </Section>

          <Section id="seed-phrases">
            <H2>Seed phrases: the master key to everything</H2>
            <P>
              When you create a wallet, it generates a <strong className="text-slate-900">seed phrase</strong>,
              usually 12 or 24 ordinary words in a specific order. Those words can regenerate every
              private key in the wallet, which means whoever has them owns everything in it. Full stop.
            </P>
            <P>
              Treat your seed phrase like the combination to a safe holding your life savings, because that
              is functionally what it is:
            </P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Write it down by hand.</strong> Paper, or better, a
                metal backup plate that survives fire and water. Make at least two copies and store them
                in different physical locations.
              </Li>
              <Li>
                <strong className="text-slate-900">Never store it digitally.</strong> No screenshots, no
                notes apps, no emails to yourself, no cloud drives. Every digital copy is a hack or a
                sync mistake away from exposure.
              </Li>
              <Li>
                <strong className="text-slate-900">Never share it with anyone.</strong> No support agent,
                no giveaway, no "verification" will ever legitimately ask for it. Anyone who does is a
                scammer.
              </Li>
              <Li>
                <strong className="text-slate-900">Test your backup.</strong> When setting up a wallet,
                practice restoring from the seed phrase on a second device before moving real money in.
              </Li>
            </ul>
            <P>
              For a deeper dive, read our full guide on{" "}
              <Link href="/learn/seed-phrase-security" className="text-blue-600 hover:underline">
                seed phrase security
              </Link>
              .
            </P>
          </Section>

          <Section id="hot-vs-cold">
            <H2>Hot wallets vs. cold wallets</H2>
            <P>
              The wallet world splits into two families. <strong className="text-slate-900">Hot wallets</strong>{" "}
              live on an internet-connected device: a phone app or browser extension.{" "}
              <strong className="text-slate-900">Cold wallets</strong> keep your keys offline on dedicated
              hardware. Here is the honest comparison:
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 font-black text-slate-950"></th>
                    <th className="p-4 font-black text-slate-950">Hot wallets</th>
                    <th className="p-4 font-black text-slate-950">Cold wallets</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-bold text-slate-900">Examples</td>
                    <td className="p-4">MetaMask, Trust Wallet, Phantom</td>
                    <td className="p-4">Ledger, Trezor, SafePal S1, Tangem</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-bold text-slate-900">Security</td>
                    <td className="p-4">Good, but exposed to malware and phishing on your device</td>
                    <td className="p-4">Keys stay offline; much harder to steal remotely</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-bold text-slate-900">Convenience</td>
                    <td className="p-4">Instant access, great for daily use and DeFi</td>
                    <td className="p-4">Slower; you confirm on the device each time</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-bold text-slate-900">Cost</td>
                    <td className="p-4">Free</td>
                    <td className="p-4">Roughly $50 to $150</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Best for</td>
                    <td className="p-4">Small amounts, daily spending, trying DeFi</td>
                    <td className="p-4">Long-term holdings you do not touch often</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Most experienced users run both: a hot wallet as a spending account and a cold wallet as a
              vault. That split gives you convenience for daily life and real security for the stack that
              matters.
            </P>
          </Section>

          <Section id="how-to-choose">
            <H2>How to choose the right wallet</H2>
            <P>
              Ignore the top-10 lists and answer four questions honestly:
            </P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Which blockchains do you use?</strong> Phantom is
                excellent for Solana but will not hold your Bitcoin. Multi-chain wallets like Trust Wallet
                cover more ground but can be less polished on any single chain.
              </Li>
              <Li>
                <strong className="text-slate-900">How often do you transact?</strong> Daily DeFi users
                need the speed of a hot wallet. Long-term holders should accept the friction of cold
                storage.
              </Li>
              <Li>
                <strong className="text-slate-900">Do you use dApps or NFTs?</strong> Some wallets
                integrate beautifully with decentralized apps; others are storage-only. Match the wallet
                to your actual habits.
              </Li>
              <Li>
                <strong className="text-slate-900">What is your technical comfort level?</strong> The best
                wallet is the one you will back up properly and use correctly, not the one with the most
                features.
              </Li>
            </ul>
            <P>
              We have reviewed several hardware wallets hands-on if you want specifics:{" "}
              <Link href="/wallets/safepal-s1-review" className="text-blue-600 hover:underline">
                SafePal S1 review
              </Link>
              ,{" "}
              <Link href="/wallets/secux-nifty-review" className="text-blue-600 hover:underline">
                SecuX Nifty review
              </Link>
              , and{" "}
              <Link href="/wallets/prokey-review" className="text-blue-600 hover:underline">
                Prokey review
              </Link>
              . For a broader comparison, see our{" "}
              <Link href="/wallets/best-crypto-wallets" className="text-blue-600 hover:underline">
                best crypto wallets
              </Link>{" "}
              guide.
            </P>
          </Section>

          <Section id="getting-started">
            <H2>Getting started without the fear</H2>
            <P>
              Self-custody gets less scary with a calm first setup. Download the wallet only from the
              official website or app store, write down your seed phrase on paper before doing anything
              else, and send a tiny test amount first. Practice restoring from the seed phrase on another
              device. Only when the backup works should you move meaningful funds in.
            </P>
            <P>
              Then build the habits that protect you long-term: keep wallet software updated, double-check
              every address before confirming, revoke dApp permissions you no longer use, and stay
              skeptical of anyone offering help with your wallet. The technology is solid. The weak point,
              as always, is us. Stay vigilant and self-custody is genuinely freeing.
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
