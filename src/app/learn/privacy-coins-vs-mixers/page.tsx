import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/privacy-coins-vs-mixers`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "Privacy Coins vs Mixers: What Is the Difference? (2026 Guide)",
  description:
    "October 2026 explainer: how privacy coins like Monero differ from mixers like Tornado Cash, when each approach makes sense, and the trade-offs in privacy, usability, and legal risk.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Privacy Coins vs Mixers: What Is the Difference?",
    description:
      "Monero builds privacy into the currency. Tornado Cash adds it on top. Here is when each approach makes sense.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/privacy-coins/privacy-vs-mixers-hero.svg`, alt: "Privacy coins versus mixers hero comparing a shielded network with a mixing process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Coins vs Mixers: What Is the Difference?",
    description:
      "Privacy coins vs mixers explained: the technology, the trade-offs, and when each makes sense.",
  },
};

const faqItems = [
  {
    question: "Which is more private: Monero or Tornado Cash?",
    answer:
      "They protect different things. Monero hides every transaction on its network by default, so the entire blockchain is opaque. Tornado Cash only protects the specific funds you route through it, but it can break links on Ethereum where Monero cannot go. For holding and spending private money, Monero is simpler and more comprehensive. For obscuring the trail of ETH you already own, a mixer is the tool that exists.",
  },
  {
    question: "Can I use a mixer legally?",
    answer:
      "Privacy software itself is not banned in most countries, but using it to launder money, evade sanctions, or commit crimes is illegal everywhere, and prosecutors have pursued mixer developers and operators aggressively. The legal landscape is unsettled and varies by jurisdiction. This is general information, not legal advice.",
  },
  {
    question: "Why not just use a privacy coin for everything?",
    answer:
      "Practical reasons: privacy coins have been delisted from most major exchanges, so converting in and out is harder and more expensive. Liquidity is thinner, fewer merchants accept them, and some wallets and services do not support them. Mixers let you keep using the Ethereum ecosystem while adding privacy to specific transfers.",
  },
  {
    question: "What are the new compliance-friendly privacy tools?",
    answer:
      "Projects like Railgun and Privacy Pools try to split the difference: your transactions stay private, but the protocol screens out sanctioned funds or lets you prove your funds are clean. The idea is to give regulators less reason to attack the tool while preserving privacy for legitimate users. It is too early to say whether regulators will accept the compromise.",
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

export default function PrivacyCoinsVsMixersPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Privacy Coins vs Mixers: What Is the Difference? (2026 Guide)",
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
              Privacy coins vs mixers: what is the difference?
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Two different answers to the same question: how do you transact privately on a public
              ledger? One rebuilds the money. The other scrubs the trail.
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
          <Section id="core-difference">
            <H2>The core difference in one paragraph</H2>
            <div className="relative mx-auto mt-6 aspect-[1200/630] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/privacy-coins/privacy-vs-mixers-hero.svg"
                alt="Privacy coins versus mixers hero comparing a shielded network with a mixing process"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <P>
              A <strong className="text-slate-900">privacy coin</strong> like Monero is a separate
              blockchain where privacy is built into every transaction by the protocol itself. A{" "}
              <strong className="text-slate-900">mixer</strong> like Tornado Cash is a smart contract
              running on a transparent blockchain (usually Ethereum) that you use for specific
              transfers you want to obscure. Privacy coins change the money. Mixers add a privacy
              step on top of existing money.
            </P>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 800 400" className="h-auto w-full" role="img" aria-label="Side by side diagram: on the left, a privacy coin network where every transaction between users is encrypted by default; on the right, a transparent blockchain where most transactions are visible, with one user routing funds through a mixer to break the trail">
                <rect x="0" y="0" width="800" height="400" fill="#f8fafc" />
                <text x="400" y="32" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">Two architectures, one goal</text>

                <g>
                  <rect x="20" y="50" width="370" height="320" rx="12" fill="#ffffff" stroke="#6d28d9" strokeWidth="2" />
                  <text x="40" y="80" fontSize="15" fontWeight="800" fill="#6d28d9">Privacy coin network</text>
                  <text x="40" y="102" fontSize="12" fill="#64748b">e.g. Monero: private by default</text>
                  <circle cx="110" cy="170" r="24" fill="#ede9fe" />
                  <text x="110" y="176" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">A</text>
                  <circle cx="205" cy="150" r="24" fill="#ede9fe" />
                  <text x="205" y="156" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">B</text>
                  <circle cx="300" cy="170" r="24" fill="#ede9fe" />
                  <text x="300" y="176" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">C</text>
                  <circle cx="155" cy="250" r="24" fill="#ede9fe" />
                  <text x="155" y="256" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">D</text>
                  <circle cx="255" cy="250" r="24" fill="#ede9fe" />
                  <text x="255" y="256" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">E</text>
                  <path d="M134 170 L181 156 M229 156 L276 166 M124 192 L148 228 M216 172 L244 230" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,4" />
                  <text x="40" y="316" fontSize="12" fontWeight="700" fill="#047857">Every link encrypted.</text>
                  <text x="40" y="336" fontSize="12" fill="#475569">No transparent history exists</text>
                  <text x="40" y="354" fontSize="12" fill="#475569">to analyze in the first place.</text>
                </g>

                <g>
                  <rect x="410" y="50" width="370" height="320" rx="12" fill="#ffffff" stroke="#0369a1" strokeWidth="2" />
                  <text x="430" y="80" fontSize="15" fontWeight="800" fill="#0369a1">Transparent chain + mixer</text>
                  <text x="430" y="102" fontSize="12" fill="#64748b">e.g. Ethereum + Tornado Cash</text>
                  <circle cx="500" cy="160" r="24" fill="#e0f2fe" />
                  <text x="500" y="166" textAnchor="middle" fontSize="12" fontWeight="700" fill="#075985">A</text>
                  <circle cx="595" cy="160" r="24" fill="#e0f2fe" />
                  <text x="595" y="166" textAnchor="middle" fontSize="12" fontWeight="700" fill="#075985">B</text>
                  <circle cx="690" cy="160" r="24" fill="#e0f2fe" />
                  <text x="690" y="166" textAnchor="middle" fontSize="12" fontWeight="700" fill="#075985">C</text>
                  <path d="M524 160 L571 160 M619 160 L666 160" stroke="#38bdf8" strokeWidth="2" />
                  <text x="595" y="196" textAnchor="middle" fontSize="11" fill="#0369a1">visible transfers</text>
                  <rect x="520" y="220" width="150" height="56" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                  <text x="595" y="243" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400e">MIXER</text>
                  <text x="595" y="261" textAnchor="middle" fontSize="11" fill="#b45309">optional step</text>
                  <path d="M500 184 L560 220 M690 184 L630 220" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />
                  <text x="430" y="316" fontSize="12" fontWeight="700" fill="#b45309">Base layer stays transparent.</text>
                  <text x="430" y="336" fontSize="12" fill="#475569">Privacy only for funds you</text>
                  <text x="430" y="354" fontSize="12" fill="#475569">actively route through the mixer.</text>
                </g>
              </svg>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              Left: a privacy coin hides everything by default. Right: a mixer is an optional privacy
              step on an otherwise transparent chain.
            </p>
          </Section>

          <Section id="comparison">
            <H2>Head-to-head comparison</H2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950"></th>
                    <th className="px-4 py-3 font-black text-slate-950">Privacy coins</th>
                    <th className="px-4 py-3 font-black text-slate-950">Mixers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Examples</td>
                    <td className="px-4 py-3">Monero, Zcash (shielded)</td>
                    <td className="px-4 py-3">Tornado Cash, Railgun, Privacy Pools</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Privacy scope</td>
                    <td className="px-4 py-3">Entire network, all transactions</td>
                    <td className="px-4 py-3">Only funds routed through the mixer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Default or opt-in</td>
                    <td className="px-4 py-3">Monero: default. Zcash: opt-in.</td>
                    <td className="px-4 py-3">Always opt-in per transfer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Ecosystem</td>
                    <td className="px-4 py-3">Standalone chain; limited DeFi and apps</td>
                    <td className="px-4 py-3">Lives on Ethereum; full DeFi access before/after mixing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Exchange access</td>
                    <td className="px-4 py-3">Heavily delisted (Monero); patchy (Zcash)</td>
                    <td className="px-4 py-3">You mix coins you already hold; no special listing needed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Legal risk profile</td>
                    <td className="px-4 py-3">Holding is legal most places; exchange access shrinking</td>
                    <td className="px-4 py-3">Tool itself contested; developers prosecuted; usage scrutinized</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Anonymity set</td>
                    <td className="px-4 py-3">Every transaction on the network (Monero)</td>
                    <td className="px-4 py-3">Only the mixer's pool; small pools mean weak privacy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="when">
            <H2>When each approach makes sense</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Choose a privacy coin</strong> when you want
                ongoing private money: receiving payments, holding savings, or spending without
                building a visible financial history. It is simpler (no extra steps) and the
                anonymity set is the whole network.
              </Li>
              <Li>
                <strong className="text-slate-900">Choose a mixer</strong> when your wealth already
                lives on Ethereum and you want to obscure specific transfers without leaving the
                ecosystem. It is a tactical tool, not a lifestyle.
              </Li>
              <Li>
                <strong className="text-slate-900">Consider compliance-oriented tools</strong> like
                Railgun or Privacy Pools if you want privacy but also want to be able to prove your
                funds are clean. This middle path is where the industry is heading.
              </Li>
            </ul>
            <P>
              Dive deeper: our{" "}
              <Link href="/learn/privacy-coins" className="font-bold text-indigo-700 hover:underline">
                privacy coins hub
              </Link>
              , the{" "}
              <Link href="/learn/what-is-monero" className="font-bold text-indigo-700 hover:underline">
                Monero guide
              </Link>
              , the{" "}
              <Link href="/learn/what-is-zcash" className="font-bold text-indigo-700 hover:underline">
                Zcash guide
              </Link>
              , and{" "}
              <Link href="/learn/tornado-cash-explained" className="font-bold text-indigo-700 hover:underline">
                the Tornado Cash story
              </Link>
              .
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
