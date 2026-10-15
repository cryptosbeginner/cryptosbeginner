import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/what-is-zcash`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "What Is Zcash (ZEC)? The Beginner's Guide to Shielded Crypto (2026)",
  description:
    "October 2026 beginner guide to Zcash (ZEC): how shielded and transparent transactions work, the 2026 governance shakeup and Orchard bug, where to buy ZEC, and the risks to know.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Is Zcash (ZEC)? A Beginner's Guide",
    description:
      "How Zcash's shielded transactions work, what happened in its wild 2026, where to buy ZEC, and the risks.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/privacy-coins/zcash-logo.svg`, alt: "Official Zcash logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Zcash (ZEC)? A Beginner's Guide",
    description:
      "Zcash's shielded transactions explained simply, the 2026 shakeup, where to buy ZEC, and the risks.",
  },
};

const faqItems = [
  {
    question: "What is the difference between Zcash and Monero?",
    answer:
      "The biggest difference is that Monero is private by default on every transaction, while Zcash lets users choose between transparent transactions (like Bitcoin) and shielded private transactions. Zcash uses zero-knowledge proofs called zk-SNARKs for its shielded pool, which is arguably stronger cryptography, but because most users historically chose transparent transactions, the privacy set was smaller. That is changing: by early 2026, nearly 60% of Zcash transactions were shielded.",
  },
  {
    question: "Is Zcash more regulator-friendly than Monero?",
    answer:
      "It has positioned itself that way. Because Zcash supports transparent transactions and selective disclosure (viewing keys that let you prove a payment to an auditor), it has survived on major exchanges like Coinbase and Binance while Monero was delisted. US regulators have treated its optional-privacy model more leniently. That said, the EU's 2027 rules target anonymity-enhancing coins broadly, and Zcash is named alongside Monero.",
  },
  {
    question: "What happened with the Zcash team in 2026?",
    answer:
      "In January 2026, the entire core development team of the Electric Coin Company resigned after a dispute with the Zcash Foundation and reformed as an independent organization called ZODL, backed by $25 million in funding from Paradigm, a16z, and Coinbase Ventures. Development continued under the new structure, and the community voted to extend protocol funding through 2028. It was messy, but the chain never stopped.",
  },
  {
    question: "Was there really a bug that could have created infinite Zcash?",
    answer:
      "In May 2026, an independent researcher disclosed a critical flaw in the Orchard shielded pool that could theoretically have allowed unlimited counterfeit ZEC inside shielded transactions. Developers coordinated an emergency fix with miners and exchanges, and the patched Ironwood upgrade went live in July 2026. No exploit was ever confirmed, but it was a serious reminder that even advanced cryptography can have implementation bugs.",
  },
  {
    question: "Where can I buy Zcash in 2026?",
    answer:
      "Zcash remains listed on major exchanges including Coinbase, Binance, Kraken, and MEXC in most regions, which is a significant advantage over Monero. Availability varies by country: it is delisted or restricted in the EU (ahead of the 2027 rules), South Korea, and Japan. Always check live markets for your region rather than trusting an old article.",
  },
  {
    question: "Is Zcash a good investment?",
    answer:
      "Nobody can answer that for you. Zcash had a spectacular 2026 rally, rising over 600% at its peak, but it is extremely volatile and faces real regulatory risk. Weigh the technology and adoption trends against the governance drama and the delisting pressure. Never invest more than you can afford to lose.",
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

export default function WhatIsZcashPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Zcash (ZEC)? The Beginner's Guide to Shielded Crypto (2026)",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · cryptocurrencies</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              What is Zcash (ZEC)? The beginner's guide to shielded crypto
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Zcash lets you choose: transparent like Bitcoin, or fully shielded with cutting-edge
              zero-knowledge cryptography. After a chaotic 2026 of team resignations, a critical bug,
              and a 600% price rally, here is where the project stands.
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
          <Section id="basics">
            <H2>The core idea: privacy as a choice</H2>
            <div className="relative mx-auto mt-6 h-24 w-24">
              <Image
                src="/images/learn/privacy-coins/zcash-logo.svg"
                alt="Official Zcash logo"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <P>
              Launched in October 2016 by cryptographers including founder Zooko Wilcox, Zcash is built
              on Bitcoin's codebase with one radical addition: transactions can be{" "}
              <strong className="text-slate-900">shielded</strong>, hiding the sender, receiver, and
              amount using zero-knowledge proofs called zk-SNARKs. Or they can be transparent, working
              exactly like Bitcoin. The user decides, transaction by transaction.
            </P>
            <P>
              This optional model is Zcash's defining trade-off. It made the coin palatable to
              exchanges and regulators: Zcash stayed listed on Coinbase and Binance while Monero was
              shown the door. But for years, most users picked the easy transparent option, which
              meant the shielded pool stayed small and private users stood out more. That pattern
              finally broke in 2026, when shielded transactions surged to nearly 60% of all Zcash
              activity and around 30% of the circulating supply sat in shielded pools.
            </P>
            <P>
              Like Bitcoin, Zcash has a 21 million coin cap and uses proof-of-work mining. Unlike
              Bitcoin, its cryptography pioneered techniques that now power Ethereum's Layer 2
              rollups and much of the zero-knowledge industry.
            </P>
          </Section>

          <Section id="shielded-flow">
            <H2>Shielded vs transparent: how it looks</H2>
            <P>
              Here is the practical difference between the two transaction types on the same network.
            </P>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 800 420" className="h-auto w-full" role="img" aria-label="Diagram comparing a transparent Zcash transaction, where sender receiver and amount are all visible on the blockchain, with a shielded transaction, where all three are hidden and only a validity proof is visible">
                <rect x="0" y="0" width="800" height="420" fill="#f8fafc" />
                <text x="400" y="32" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">Same network, two very different transactions</text>

                <g>
                  <rect x="20" y="50" width="370" height="340" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <text x="40" y="80" fontSize="15" fontWeight="800" fill="#475569">Transparent transaction</text>
                  <text x="40" y="102" fontSize="12" fill="#64748b">t-address to t-address (like Bitcoin)</text>

                  <rect x="40" y="120" width="330" height="52" rx="8" fill="#f1f5f9" />
                  <text x="56" y="142" fontSize="12" fontWeight="700" fill="#334155">From: t1abc...9xyz</text>
                  <text x="56" y="160" fontSize="12" fill="#64748b">fully visible</text>

                  <text x="205" y="196" fontSize="22" fill="#94a3b8">↓</text>

                  <rect x="40" y="208" width="330" height="52" rx="8" fill="#f1f5f9" />
                  <text x="56" y="230" fontSize="12" fontWeight="700" fill="#334155">To: t1def...4uvw</text>
                  <text x="56" y="248" fontSize="12" fill="#64748b">fully visible</text>

                  <rect x="40" y="272" width="330" height="52" rx="8" fill="#f1f5f9" />
                  <text x="56" y="294" fontSize="12" fontWeight="700" fill="#334155">Amount: 12.5 ZEC</text>
                  <text x="56" y="312" fontSize="12" fill="#64748b">fully visible</text>

                  <text x="40" y="356" fontSize="12" fontWeight="700" fill="#b45309">Anyone can audit it. Anyone can trace it.</text>
                </g>

                <g>
                  <rect x="410" y="50" width="370" height="340" rx="12" fill="#ffffff" stroke="#6d28d9" strokeWidth="2" />
                  <text x="430" y="80" fontSize="15" fontWeight="800" fill="#6d28d9">Shielded transaction</text>
                  <text x="430" y="102" fontSize="12" fill="#64748b">z-address to z-address (zk-SNARKs)</text>

                  <rect x="430" y="120" width="330" height="52" rx="8" fill="#ede9fe" />
                  <text x="446" y="142" fontSize="12" fontWeight="700" fill="#4c1d95">From: hidden</text>
                  <text x="446" y="160" fontSize="12" fill="#6d28d9">encrypted</text>

                  <text x="595" y="196" fontSize="22" fill="#8b5cf6">↓</text>

                  <rect x="430" y="208" width="330" height="52" rx="8" fill="#ede9fe" />
                  <text x="446" y="230" fontSize="12" fontWeight="700" fill="#4c1d95">To: hidden</text>
                  <text x="446" y="248" fontSize="12" fill="#6d28d9">encrypted</text>

                  <rect x="430" y="272" width="330" height="52" rx="8" fill="#ede9fe" />
                  <text x="446" y="294" fontSize="12" fontWeight="700" fill="#4c1d95">Amount: hidden</text>
                  <text x="446" y="312" fontSize="12" fill="#6d28d9">proof of validity only</text>

                  <text x="430" y="356" fontSize="12" fontWeight="700" fill="#047857">Valid and private. Optional viewing keys allow audits.</text>
                </g>
              </svg>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              Transparent Zcash transactions work like Bitcoin: everything visible. Shielded
              transactions hide sender, receiver, and amount while still proving validity.
            </p>

            <P>
              One more thing that matters: Zcash supports{" "}
              <strong className="text-slate-900">viewing keys</strong>, which let you selectively
              reveal transaction details to someone you choose, like an auditor or a tax authority,
              without making them public. This is the feature that lets Zcash argue it can satisfy
              compliance without sacrificing user privacy. Monero has no equivalent.
            </P>
          </Section>

          <Section id="2026">
            <H2>Zcash's wild 2026: what actually happened</H2>
            <P>
              If you only read one section, make it this one. Zcash went through more upheaval in a
              single year than most projects see in a decade.
            </P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">January: the team walks out.</strong> The entire
                core development team of the Electric Coin Company resigned after a governance dispute
                with the Zcash Foundation, then reformed as an independent organization called ZODL,
                raising $25 million from Paradigm, a16z, and Coinbase Ventures. Founder Zooko Wilcox
                had already stepped down in late 2023. Development continued, and the community voted
                to extend protocol funding through November 2028.
              </Li>
              <Li>
                <strong className="text-slate-900">May to July: the Orchard bug.</strong> An
                independent researcher found a critical flaw in the Orchard shielded pool that could
                theoretically have allowed unlimited counterfeit ZEC. Developers coordinated an
                emergency fix with miners and exchanges, and the Ironwood upgrade shipped in July
                with corrected cryptography. No exploit was confirmed, but it dented confidence in
                shielded supply integrity.
              </Li>
              <Li>
                <strong className="text-slate-900">The rally.</strong> Through it all, ZEC surged more
                than 600% to around $700 at its peak, briefly becoming the largest privacy coin by
                market value. Drivers included rising shielded adoption, institutional interest (a
                Winklevoss-backed treasury company accumulated over 1% of supply), and Grayscale
                filing the first US spot privacy-coin ETF.
              </Li>
              <Li>
                <strong className="text-slate-900">The product push.</strong> The Zashi mobile wallet
                added Tor support and hardware wallet integration, making shielded transactions usable
                on a phone for the first time in a serious way.
              </Li>
            </ul>
            <P>
              Our take: the technology proved resilient and adoption of shielded transactions is
              genuinely improving, but the governance drama and the bug are reminders that Zcash
              carries organizational risk on top of market risk.
            </P>
          </Section>

          <Section id="buy">
            <H2>Where to buy ZEC</H2>
            <P>
              Zcash's biggest practical advantage over Monero is availability. It remains listed on
              Coinbase, Binance, Kraken, and MEXC in most regions. That said, it is delisted or
              restricted in South Korea and Japan, and EU exchanges face the 2027
              anonymity-enhancing-coin rules. If you are in Europe, check whether your exchange still
              lists ZEC and have a backup plan.
            </P>
            <P>
              After buying, consider moving ZEC to a shielded address in a wallet like Zashi or
              Zingo to actually use the privacy you came for. Coins sitting on an exchange in a
              transparent address have no privacy at all.
            </P>
          </Section>

          <Section id="risks">
            <H2>Risks to understand</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Regulatory pressure:</strong> the EU's 2027 rules
                name anonymity-enhancing coins explicitly. Zcash's optional model helps, but it is not
                immune.
              </Li>
              <Li>
                <strong className="text-slate-900">Governance concentration:</strong> the 2026 split
                showed how much depends on a small group of people and funders. Watch whether ZODL
                delivers on its roadmap.
              </Li>
              <Li>
                <strong className="text-slate-900">Cryptographic risk:</strong> the Orchard bug proved
                that implementation flaws can threaten even the best-designed privacy. Shielded supply
                integrity is a risk transparent chains do not face in the same way.
              </Li>
              <Li>
                <strong className="text-slate-900">Volatility:</strong> a 600% rally can reverse just as
                fast. Size any position accordingly.
              </Li>
            </ul>
            <P>
              Want the full picture on privacy in crypto? Start at our{" "}
              <Link href="/learn/privacy-coins" className="font-bold text-indigo-700 hover:underline">
                privacy coins hub
              </Link>
              , compare with{" "}
              <Link href="/learn/what-is-monero" className="font-bold text-indigo-700 hover:underline">
                Monero
              </Link>
              , or read how{" "}
              <Link href="/learn/tornado-cash-explained" className="font-bold text-indigo-700 hover:underline">
                Tornado Cash
              </Link>{" "}
              took a different approach entirely.
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
