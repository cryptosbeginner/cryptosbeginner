import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/privacy-coins`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "Privacy Coins Explained: Monero, Zcash, Tornado Cash and the Fight for Financial Privacy (2026)",
  description:
    "October 2026 guide to privacy coins: how Monero, Zcash, Tornado Cash and newer privacy tools work, the technology behind them, the regulatory crackdown timeline, and what it all means for you.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Privacy Coins Explained: The Complete 2026 Guide",
    description:
      "How privacy coins work, why they matter, and the regulatory battles shaping their future. Monero, Zcash, Tornado Cash and more.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/privacy-coins/privacy-coins-hero.svg`, alt: "Privacy coins hub hero showing shield symbols for Monero, Zcash, and Tornado Cash" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Coins Explained: The Complete 2026 Guide",
    description:
      "Monero, Zcash, Tornado Cash: how privacy tech works and the regulatory battles shaping it.",
  },
};

const faqItems = [
  {
    question: "Are privacy coins legal?",
    answer:
      "Owning and using privacy coins is legal in most countries, including the United States, where no federal law bans holding Monero or Zcash. What is restricted is how regulated businesses can handle them: exchanges in the EU will be barred from listing anonymity-enhancing coins once the EU's anti-money-laundering regulation takes full effect in July 2027, and many exchanges worldwide have already delisted Monero voluntarily. Using privacy tools to commit crimes, evade sanctions, or launder money remains illegal everywhere. This is general information, not legal advice.",
  },
  {
    question: "What is the difference between a privacy coin and a mixer?",
    answer:
      "A privacy coin like Monero builds privacy into the currency itself: every transaction is private by default through cryptography. A mixer like Tornado Cash is a separate tool that takes coins from a transparent blockchain and breaks the link between sender and receiver. Privacy coins protect the whole network's transactions; mixers are an add-on step that only protects the users who choose to use them. Our full comparison is at /learn/privacy-coins-vs-mixers.",
  },
  {
    question: "Why do regulators target privacy coins?",
    answer:
      "Regulators worry that untraceable transactions make it harder to detect money laundering, sanctions evasion, and terrorist financing. Because exchanges cannot monitor Monero transactions the way they monitor Bitcoin, many have decided the compliance risk is not worth it. Supporters argue this punishes a technology for its potential misuse, and point out that cash has the same properties. The debate is ongoing and the rules keep shifting.",
  },
  {
    question: "Is it safe to buy privacy coins in 2026?",
    answer:
      "The technology itself works, but there are real practical risks: delistings can strand your coins on exchanges with little warning, liquidity is thinner than for major coins, and regulations in your country may change. If you buy, use reputable venues, move coins to a wallet you control, and never invest money you cannot afford to lose. Check your local laws first.",
  },
  {
    question: "What is fungibility and why does it matter?",
    answer:
      "Fungibility means every unit of a currency is interchangeable: one dollar equals any other dollar. On transparent blockchains, coins can be 'tainted' by their history, and some services refuse coins linked to hacks or sanctions. Privacy coins hide transaction history, so every coin is identical to every other. That is why supporters call privacy a requirement for sound digital money, not just a feature.",
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

function TechCard({ title, how, example, strength }: { title: string; how: string; example: string; strength: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600"><strong className="text-slate-900">How it works:</strong> {how}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600"><strong className="text-slate-900">Used by:</strong> {example}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600"><strong className="text-slate-900">Strength:</strong> {strength}</p>
    </div>
  );
}

function TimelineEvent({ date, title, detail }: { date: string; title: string; detail: string }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 h-full w-px bg-slate-300" aria-hidden="true" />
      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white" aria-hidden="true" />
      <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">{date}</p>
      <h3 className="mt-1 text-base font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-7 text-slate-600">{detail}</p>
    </div>
  );
}

export default function PrivacyCoinsHubPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Privacy Coins Explained: Monero, Zcash, Tornado Cash and the Fight for Financial Privacy (2026)",
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
              Privacy coins explained: the complete 2026 guide
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Every Bitcoin transaction is public forever. Privacy coins take the opposite bet: that
              financial privacy is a right, not a loophole. Here is how the technology works, who is
              building it, and why regulators around the world are pushing back.
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
          <Section id="why">
            <H2>Why financial privacy matters</H2>
            <div className="relative mx-auto mt-6 aspect-[1200/630] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/privacy-coins/privacy-coins-hero.svg"
                alt="Privacy coins hub hero showing shield symbols for Monero, Zcash, and Tornado Cash"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <P>
              On Bitcoin and Ethereum, anyone with your wallet address can see your entire financial
              history: every payment you have received, every purchase you have made, your current
              balance. Blockchain analytics companies sell this data to exchanges, governments, and
              corporations. That is not a bug. It is how transparent blockchains are designed.
            </P>
            <P>
              Privacy coins exist because many people find that unacceptable. The legitimate reasons are
              easy to list: a business that does not want competitors reading its supplier payments, a
              journalist protecting a source, a dissident in an authoritarian country, or simply anyone
              who believes their salary and spending are nobody else's business. Cash has always offered
              this. Privacy coins try to offer it digitally.
            </P>
            <P>
              The same properties attract criminals, which is the honest tension at the center of this
              topic. Regulators focus on the crime. Privacy advocates focus on the right. Both are
              describing something real, and the rules being written right now will decide how much
              financial privacy survives in crypto.
            </P>
          </Section>

          <Section id="how-it-works">
            <H2>How privacy technology actually works</H2>
            <P>
              There are four main approaches. They solve different parts of the problem, and the best
              privacy coins combine several of them.
            </P>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 800 460" className="h-auto w-full" role="img" aria-label="Diagram comparing four privacy technologies: ring signatures hide the sender among decoys, stealth addresses give the receiver a fresh one time address, zero knowledge proofs hide the amount, and mixers break the link between deposit and withdrawal">
                <rect x="0" y="0" width="800" height="460" fill="#f8fafc" />
                <text x="400" y="32" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">Four ways to hide a transaction</text>

                <g>
                  <rect x="20" y="50" width="370" height="180" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />
                  <text x="40" y="78" fontSize="15" fontWeight="800" fill="#4338ca">Ring signatures: hide the sender</text>
                  <circle cx="90" cy="140" r="22" fill="#c7d2fe" />
                  <circle cx="150" cy="140" r="22" fill="#e0e7ff" />
                  <circle cx="210" cy="140" r="22" fill="#e0e7ff" />
                  <circle cx="270" cy="140" r="22" fill="#e0e7ff" />
                  <circle cx="330" cy="140" r="22" fill="#e0e7ff" />
                  <text x="90" y="146" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e1b4b">You</text>
                  <text x="205" y="146" textAnchor="middle" fontSize="12" fill="#475569">decoys</text>
                  <text x="40" y="192" fontSize="12" fill="#475569">Your signature hides in a crowd of decoys.</text>
                  <text x="40" y="210" fontSize="12" fill="#475569">Observers see a payment happened, not who sent it.</text>
                </g>

                <g>
                  <rect x="410" y="50" width="370" height="180" rx="12" fill="#ffffff" stroke="#a7f3d0" strokeWidth="2" />
                  <text x="430" y="78" fontSize="15" fontWeight="800" fill="#047857">Stealth addresses: hide the receiver</text>
                  <rect x="450" y="118" width="150" height="44" rx="8" fill="#d1fae5" />
                  <text x="525" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill="#065f46">your public address</text>
                  <text x="640" y="146" fontSize="20" fill="#047857">→</text>
                  <rect x="665" y="118" width="95" height="44" rx="8" fill="#a7f3d0" />
                  <text x="712" y="137" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065f46">one-time</text>
                  <text x="712" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065f46">address</text>
                  <text x="430" y="192" fontSize="12" fill="#475569">Every payment creates a fresh address for the receiver.</text>
                  <text x="430" y="210" fontSize="12" fill="#475569">Your real address never appears on chain.</text>
                </g>

                <g>
                  <rect x="20" y="250" width="370" height="180" rx="12" fill="#ffffff" stroke="#fde68a" strokeWidth="2" />
                  <text x="40" y="278" fontSize="15" fontWeight="800" fill="#b45309">Zero-knowledge proofs: hide the amount</text>
                  <rect x="60" y="300" width="120" height="44" rx="8" fill="#fef3c7" />
                  <text x="120" y="327" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">5.2 XMR</text>
                  <text x="215" y="327" fontSize="20" fill="#b45309">→</text>
                  <rect x="245" y="300" width="120" height="44" rx="8" fill="#fde68a" />
                  <text x="305" y="327" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">proof ✓</text>
                  <text x="40" y="372" fontSize="12" fill="#475569">The network verifies the math is valid without</text>
                  <text x="40" y="390" fontSize="12" fill="#475569">ever seeing the number. Amount stays secret.</text>
                </g>

                <g>
                  <rect x="410" y="250" width="370" height="180" rx="12" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2" />
                  <text x="430" y="278" fontSize="15" fontWeight="800" fill="#be185d">Mixers: break the link</text>
                  <circle cx="480" cy="330" r="16" fill="#fbcfe8" />
                  <circle cx="540" cy="315" r="16" fill="#f9a8d4" />
                  <circle cx="600" cy="330" r="16" fill="#fbcfe8" />
                  <circle cx="660" cy="315" r="16" fill="#f9a8d4" />
                  <circle cx="720" cy="330" r="16" fill="#fbcfe8" />
                  <text x="430" y="372" fontSize="12" fill="#475569">Many users deposit into one pool, then withdraw</text>
                  <text x="430" y="390" fontSize="12" fill="#475569">to fresh addresses. The trail goes cold.</text>
                </g>
              </svg>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              The four building blocks of crypto privacy: ring signatures, stealth addresses,
              zero-knowledge proofs, and mixing. Monero combines the first three by default.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <TechCard
                title="Ring signatures"
                how="Your transaction is bundled with decoy transactions, so observers cannot tell which input actually sent the funds."
                example="Monero (mandatory on every transaction)"
                strength="Strong sender privacy with no trusted setup"
              />
              <TechCard
                title="Stealth addresses"
                how="Each payment generates a unique one-time address for the recipient, unlinkable to their public address."
                example="Monero"
                strength="Receiver privacy that works automatically"
              />
              <TechCard
                title="Zero-knowledge proofs"
                how="zk-SNARKs prove a transaction is valid (no double spend, amounts balance) without revealing sender, receiver, or amount."
                example="Zcash shielded transactions, Aztec, Aleo"
                strength="The strongest cryptography, mathematically verifiable"
              />
              <TechCard
                title="Mixing"
                how="Users pool funds together and withdraw to new addresses, breaking the on-chain link between deposit and withdrawal."
                example="Tornado Cash, Railgun"
                strength="Works on top of transparent chains like Ethereum"
              />
            </div>
          </Section>

          <Section id="projects">
            <H2>The major privacy projects</H2>
            <P>
              Privacy in crypto is not one coin. It is a spectrum from fully private currencies to
              optional privacy tools to experimental infrastructure. Here is the landscape as of
              October 2026.
            </P>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Project</th>
                    <th className="px-4 py-3 font-black text-slate-950">Type</th>
                    <th className="px-4 py-3 font-black text-slate-950">Privacy model</th>
                    <th className="px-4 py-3 font-black text-slate-950">Status (Oct 2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Monero (XMR)</td>
                    <td className="px-4 py-3">Currency</td>
                    <td className="px-4 py-3">Private by default: ring signatures, RingCT, stealth addresses</td>
                    <td className="px-4 py-3">Active. Delisted from most major exchanges; trades on smaller venues and DEXs.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Zcash (ZEC)</td>
                    <td className="px-4 py-3">Currency</td>
                    <td className="px-4 py-3">Optional: transparent or shielded (zk-SNARK) transactions</td>
                    <td className="px-4 py-3">Active. New ZODL dev team, shielded adoption rising, spot ETF filed in the US.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Tornado Cash</td>
                    <td className="px-4 py-3">Mixer (Ethereum)</td>
                    <td className="px-4 py-3">Zero-knowledge mixing pools; breaks deposit-to-withdrawal links</td>
                    <td className="px-4 py-3">Protocol unsanctioned since 2025, but developer prosecutions continue.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Railgun</td>
                    <td className="px-4 py-3">Privacy system (multi-chain)</td>
                    <td className="px-4 py-3">ZK private balances and DeFi with proof-of-innocence screening</td>
                    <td className="px-4 py-3">Active. $5B+ cumulative volume; compliance-friendly design.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Aztec</td>
                    <td className="px-4 py-3">ZK rollup (Ethereum)</td>
                    <td className="px-4 py-3">Private smart contracts via zero-knowledge proofs</td>
                    <td className="px-4 py-3">In development. Ignition upgrade live since late 2025.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Aleo</td>
                    <td className="px-4 py-3">Layer 1 blockchain</td>
                    <td className="px-4 py-3">Zero-knowledge execution for private applications</td>
                    <td className="px-4 py-3">Live. Circle launched privacy-preserving USDCx on Aleo in Dec 2025.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Secret Network</td>
                    <td className="px-4 py-3">Smart contract platform</td>
                    <td className="px-4 py-3">Encrypted computation via trusted execution environments</td>
                    <td className="px-4 py-3">Live on Cosmos. Niche but operational.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-950">Dash</td>
                    <td className="px-4 py-3">Currency</td>
                    <td className="px-4 py-3">Optional PrivateSend coin mixing</td>
                    <td className="px-4 py-3">Active, but privacy is a secondary feature and weaker than Monero or Zcash.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link href="/learn/what-is-monero" className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="relative h-16 w-40">
                  <Image src="/images/learn/privacy-coins/monero-logo.png" alt="Official Monero logo" fill sizes="160px" className="object-contain" />
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-950 group-hover:text-indigo-700">What is Monero?</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">The private-by-default currency: ring signatures, stealth addresses, and real-world trade-offs.</p>
              </Link>
              <Link href="/learn/what-is-zcash" className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="relative h-16 w-16">
                  <Image src="/images/learn/privacy-coins/zcash-logo.svg" alt="Official Zcash logo" fill sizes="64px" className="object-contain" />
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-950 group-hover:text-indigo-700">What is Zcash?</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">Optional privacy with zk-SNARKs, the 2026 governance shakeup, and the road ahead.</p>
              </Link>
              <Link href="/learn/tornado-cash-explained" className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 64 64" className="h-16 w-16" role="img" aria-label="Tornado Cash swirl symbol">
                    <circle cx="32" cy="32" r="30" fill="#1e1b4b" />
                    <path d="M32 10c12 0 22 10 22 22s-10 22-22 22c-8 0-15-4-19-11l5-3c3 5 8 8 14 8 9 0 16-7 16-16s-7-16-16-16c-6 0-11 3-14 8l-5-3c4-7 11-11 19-11z" fill="#a5b4fc" />
                    <circle cx="32" cy="32" r="5" fill="#e0e7ff" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-950 group-hover:text-indigo-700">Tornado Cash explained</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">How the mixer works, the sanctions saga, and the ongoing developer trials.</p>
              </Link>
            </div>
            <P>
              Also in this section: our explainer on{" "}
              <Link href="/learn/privacy-coins-vs-mixers" className="font-bold text-indigo-700 hover:underline">
                privacy coins vs mixers
              </Link>
              , which walks through when each approach makes sense and how they differ technically.
            </P>
          </Section>

          <Section id="regulation">
            <H2>The regulatory crackdown: a timeline</H2>
            <P>
              Privacy coins have been squeezed from two directions: exchanges delisting them
              voluntarily, and governments writing explicit bans. Here are the key moments.
            </P>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div role="img" aria-label="Timeline of privacy coin regulation: 2021 Kraken UK delisting, 2022 Tornado Cash sanctions, 2024 Binance and OKX Monero delistings, 2024 Tornado Cash sanctions vacated, 2025 Treasury removes sanctions, 2026 FinCEN drops mixer rule, 2027 EU ban takes effect">
                <TimelineEvent
                  date="2021"
                  title="Kraken delists Monero in the UK"
                  detail="An early sign of the pressure to come: Kraken removes XMR for UK customers ahead of tighter British rules."
                />
                <TimelineEvent
                  date="August 2022"
                  title="US sanctions Tornado Cash"
                  detail="The Treasury's OFAC sanctions the mixer protocol itself, a first: code, not people, placed on the sanctions list."
                />
                <TimelineEvent
                  date="February 2024"
                  title="Binance and OKX drop Monero"
                  detail="The two largest exchanges delist XMR within weeks of each other, cratering its liquidity on major venues."
                />
                <TimelineEvent
                  date="October 2024"
                  title="Kraken delists XMR across the EEA"
                  detail="European users lose another major venue as MiCA-era compliance pressure builds."
                />
                <TimelineEvent
                  date="November 2024"
                  title="US court vacates Tornado Cash sanctions"
                  detail="The Fifth Circuit rules OFAC overstepped by sanctioning immutable smart contracts. A landmark win for code as speech."
                />
                <TimelineEvent
                  date="2025"
                  title="Treasury removes Tornado Cash from sanctions list"
                  detail="The government abandons its appeal and drops the sanctions, though criminal cases against developers continue."
                />
                <TimelineEvent
                  date="October 2026"
                  title="FinCEN withdraws proposed mixer rules"
                  detail="US regulators quietly drop a 2023 proposal that would have imposed reporting rules on crypto mixers."
                />
                <TimelineEvent
                  date="July 2027"
                  title="EU ban on privacy coins takes effect"
                  detail="Under the EU Anti-Money-Laundering Regulation, licensed exchanges and custodians must stop handling anonymity-enhancing coins. Self-custody by individuals is not banned."
                />
              </div>
            </div>
            <P>
              The pattern is clear: regulators are not banning the math, which would be nearly
              impossible. They are squeezing the on-ramps and off-ramps, making privacy coins harder
              to buy and sell through regulated businesses. The coins themselves keep working.
            </P>
          </Section>

          <Section id="tradeoffs">
            <H2>Honest trade-offs</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Liquidity risk:</strong> delistings mean thinner
                markets, wider spreads, and the chance your exchange drops the coin with little
                warning. Have a backup venue and preferably self-custody.
              </Li>
              <Li>
                <strong className="text-slate-900">Regulatory risk:</strong> rules are still being
                written. What is legal today may be restricted tomorrow, especially in the EU.
              </Li>
              <Li>
                <strong className="text-slate-900">Privacy is not invisibility:</strong> chain analysis
                keeps improving, and operational mistakes (reusing addresses, IP leaks, exchange KYC
                records) can undo on-chain privacy. No tool makes you untouchable.
              </Li>
              <Li>
                <strong className="text-slate-900">Volatility:</strong> privacy coins swing hard, and
                regulatory headlines move prices fast in both directions.
              </Li>
            </ul>
            <P>
              None of this is legal advice. If you are unsure about the rules where you live, talk to
              a qualified professional before touching privacy coins.
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
