import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/what-is-monero`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2025";

export const metadata: Metadata = {
  title: "What Is Monero (XMR)? The Beginner's Guide to Privacy Coins 2026",
  description:
    "October 2026 beginner guide to Monero (XMR): how ring signatures, stealth addresses, and RingCT keep transactions private, real use cases, where to buy XMR, and the regulatory and security risks to know.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Is Monero (XMR)? A Beginner's Guide",
    description:
      "How Monero keeps transactions private by default, why that matters, where to buy XMR, and the risks to understand first.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/what-is-monero/hero.png`, alt: "Illustration of the Monero XMR coin logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Monero (XMR)? A Beginner's Guide",
    description:
      "Monero's privacy features explained simply: ring signatures, stealth addresses, where to buy XMR, and the risks.",
  },
};

const faqItems = [
  {
    question: "Is Monero really untraceable?",
    answer:
      "Monero is designed so that sender, receiver, and amount are hidden on every transaction by default, which makes tracing far harder than with transparent blockchains like Bitcoin. Independent research has repeatedly found it extremely difficult to trace. That said, no privacy tool is magic: mistakes like reusing addresses elsewhere, IP leaks, or poor operational security can still expose you. Treat it as strong privacy, not a guarantee.",
  },
  {
    question: "Why do some exchanges not list XMR?",
    answer:
      "Monero's privacy makes compliance harder for exchanges, since they cannot monitor transactions the way regulators expect. Several major exchanges have limited or removed XMR support in certain regions as regulations tightened. Availability varies a lot by country, so always check your local exchange's current listing status before assuming you can buy there.",
  },
  {
    question: "What is fungibility, and why does Monero have it?",
    answer:
      "Fungibility means every unit is interchangeable: one dollar is one dollar, no questions about where it has been. On transparent blockchains, coins can be 'tainted' by association with past activity, and some services refuse them. Because Monero hides transaction history, every XMR is identical to every other XMR, just like physical cash.",
  },
  {
    question: "Is Monero only used for illegal activity?",
    answer:
      "No. Privacy has plenty of legitimate uses: journalists protecting sources, businesses keeping financial details private, and ordinary people who simply do not want their entire financial life visible to anyone who knows their address. It is true that illicit actors also use Monero, which is the source of the regulatory scrutiny. The technology itself is neutral.",
  },
  {
    question: "Can I mine Monero on a regular computer?",
    answer:
      "Yes, and that is by design. Monero uses the RandomX mining algorithm, which is optimized for general-purpose CPUs and resists the specialized ASIC hardware that dominates Bitcoin mining. A modern desktop CPU can participate. Do not expect big profits on most electricity prices, but it is one of the few coins where home mining still technically works.",
  },
  {
    question: "Is Monero a good investment?",
    answer:
      "Nobody can answer that for you, and anyone who tries is selling something. What you can do is weigh the trade-offs: strong privacy tech and a dedicated community on one side, regulatory pressure, exchange delistings, and volatility on the other. Never invest more than you can afford to lose, and never buy a coin you do not understand.",
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

export default function WhatIsMoneroPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Monero (XMR)? The Beginner's Guide to Privacy Coins 2026",
    description:
      "October 2026 beginner guide to Monero (XMR): how ring signatures, stealth addresses, and RingCT keep transactions private, real use cases, where to buy XMR, and the regulatory and security risks to know.",
    datePublished: "2025-05-23",
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
              What is Monero (XMR)? The beginner's guide to privacy coins
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Bitcoin lets anyone see every transaction you have ever made. Monero (XMR) takes the opposite
              approach: sender, receiver, and amount are hidden on every transaction, by default, using
              real cryptography. Here is how it works in plain language, what it is good for, where you
              can buy it, and the risks you should understand first.
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
          <Section id="privacy-trio">
            <H2>How Monero keeps transactions private</H2>
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/what-is-monero/hero.png"
                alt="Illustration of the Monero XMR coin logo"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
            <P>
              Monero's privacy comes from three technologies working together. You do not need to
              understand the math, but the mental picture helps:
            </P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Ring signatures hide the sender.</strong> When you send
                XMR, your transaction is bundled with a group of decoy transactions, so an outside
                observer cannot tell which one actually sent the funds. Think of signing a document as one
                of a crowd: everyone can see a signature happened, but nobody can prove it was yours.
              </Li>
              <Li>
                <strong className="text-slate-900">RingCT hides the amount.</strong> Short for Ring
                Confidential Transactions, this uses zero-knowledge proofs to verify that a transaction is
                valid without revealing how much moved. The blockchain confirms the math checks out while
                keeping the numbers private.
              </Li>
              <Li>
                <strong className="text-slate-900">Stealth addresses hide the receiver.</strong> Every
                transaction generates a fresh one-time address for the recipient, so your public wallet
                address never appears on the blockchain. Nobody can look up your address and see your
                balance or history.
              </Li>
            </ul>
            <P>
              Crucially, all of this is mandatory. On some coins, privacy is an optional feature that most
              people never turn on, which makes the few who use it stand out. On Monero, everyone is
              private, so nobody stands out.
            </P>
          </Section>

          <Section id="fungibility">
            <H2>Fungibility: why "clean" coins matter</H2>
            <P>
              On transparent blockchains like Bitcoin, every coin carries its history. If coins passed
              through a hack or a sanctioned address years ago, some services may refuse them, meaning
              "tainted" coins are worth less to you in practice than "clean" ones. A currency where some
              units are worth less than others is broken as money.
            </P>
            <P>
              Monero fixes this by making history invisible. Since nobody can trace where an XMR has been,
              every XMR is identical to every other XMR. That is what <strong className="text-slate-900">fungibility</strong>{" "}
              means, and it is the property that makes Monero behave like actual digital cash.
            </P>
          </Section>

          <Section id="use-cases">
            <H2>Legitimate uses of financial privacy</H2>
            <P>
              Privacy coins get painted as criminal tools, but financial privacy has everyday uses that
              have nothing to do with crime. A freelancer who does not want clients seeing their total
              income. A business negotiating a deal that does not want competitors reading its treasury.
              A journalist or activist in a country where financial surveillance is dangerous. And simply
              ordinary people who believe their spending habits should not be public information.
            </P>
            <P>
              Monero is also genuinely useful as a currency, not just a speculation vehicle. Its tail
              emission, a small permanent block reward of 0.6 XMR per block after the main supply was
              issued, keeps miners incentivized long-term, and its community keeps upgrading the protocol
              through the Monero Research Lab.
            </P>
          </Section>

          <Section id="where-to-buy">
            <H2>Where to buy XMR</H2>
            <P>
              This is where things get complicated. Because regulators dislike untraceable transactions,
              several major exchanges have restricted or removed XMR in certain regions, and availability
              varies a lot depending on where you live. Some regions have easy access; others have almost
              none. Always check your local exchange's current listing status rather than assuming from an
              old article.
            </P>
            <P>
              Start by checking which exchanges still support XMR in your country and comparing their fees
              and safety. Our reviews of{" "}
              <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
                Kraken
              </Link>
              ,{" "}
              <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
                Binance
              </Link>
              , and{" "}
              <Link href="/exchanges/bybit-review" className="text-blue-600 hover:underline">
                Bybit
              </Link>{" "}
              are checked against official sources, and our{" "}
              <Link href="/learn/crypto-exchange-security-checklist" className="text-blue-600 hover:underline">
                exchange security checklist
              </Link>{" "}
              walks you through choosing a safe place to buy any crypto.
            </P>
          </Section>

          <Section id="risks">
            <H2>Risks and trade-offs you should know</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Regulatory pressure:</strong> the same privacy that
                makes Monero valuable also makes it a target. Delistings can reduce liquidity and make XMR
                harder to buy or sell in your region with little warning.
              </Li>
              <Li>
                <strong className="text-slate-900">Volatility:</strong> XMR is still a crypto asset. Its
                price swings hard, and privacy narratives do not protect you from market crashes.
              </Li>
              <Li>
                <strong className="text-slate-900">Technical complexity:</strong> Monero wallets take
                longer to sync, transactions are larger than Bitcoin's, and using it well requires more
                learning than a standard wallet.
              </Li>
              <Li>
                <strong className="text-slate-900">Privacy is not automatic invincibility:</strong> the
                protocol hides a lot, but your own behavior can leak information. Exchanges still record
                who bought what, and sloppy handling of addresses or IP data can undo the on-chain
                privacy. Learn the basics properly before moving serious money.
              </Li>
            </ul>
            <P>
              Monero's own motto sums up the promise: money that is secure, private, and untraceable.
              Whether that is worth the trade-offs is your call, made with eyes open.
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
