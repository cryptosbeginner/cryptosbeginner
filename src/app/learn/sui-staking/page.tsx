import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/sui-staking`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "April 2025";

export const metadata: Metadata = {
  title: "SUI Staking: The Complete Beginner's Guide 2026 (How It Works, APY, Risks)",
  description:
    "October 2026 beginner guide to SUI staking: how Delegated Proof-of-Stake works, current APY around 1.5%, where to stake (wallets vs exchanges), risks, and a step-by-step staking walkthrough.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "SUI Staking: The Complete Beginner's Guide",
    description:
      "How SUI staking works, what APY to expect, where to stake, the risks, and a step-by-step walkthrough for beginners.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/sui-staking/hero.png`, alt: "SUI Staking Guide title card with the Sui coin logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUI Staking: The Complete Beginner's Guide",
    description:
      "SUI staking explained: how it works, current APY, where to stake, risks, and step-by-step instructions.",
  },
};

const faqItems = [
  {
    question: "How does SUI's Delegated Proof-of-Stake work?",
    answer:
      "SUI uses Delegated Proof-of-Stake, which means you do not run a validator yourself. You delegate your tokens to a validator, a network operator that processes transactions and keeps the chain secure. The validator shares the staking rewards with you in proportion to your stake, keeping a small commission. You can switch validators or withdraw at the end of each 24-hour epoch.",
  },
  {
    question: "What APY can I earn staking SUI?",
    answer:
      "Network staking rewards sit around 1.5% APY as of October 2026, varying slightly between validators based on their commission and performance. Exchange products may show different figures, sometimes higher, but promotional rates often come with lock-ups, eligibility limits, or campaign terms, so always read the fine print instead of chasing the headline number.",
  },
  {
    question: "Is there a minimum amount of SUI needed to stake?",
    answer:
      "It depends on the platform. Self-custody wallets typically let you stake from as little as 1 SUI, while exchanges often allow even smaller amounts. The practical minimum is whatever leaves enough unstaked SUI to cover transaction gas fees, so never stake your entire balance down to zero.",
  },
  {
    question: "Can I unstake my SUI anytime?",
    answer:
      "On the network itself, unstaking takes effect at the end of the current 24-hour epoch, so you are never locked for weeks the way some chains require. Exchange products are different: locked or campaign products can hold your SUI for a fixed term, so check the redemption terms before you commit.",
  },
  {
    question: "Do I lose my SUI if my validator misbehaves?",
    answer:
      "SUI's design is forgiving here: there is no slashing of your staked principal the way some chains do it. The real risk from a bad validator is underperformance, meaning you earn fewer rewards because the validator misses its duties or charges high commission. Picking validators with strong uptime and reasonable commission protects your yield.",
  },
  {
    question: "Is staking SUI on an exchange or in a wallet better?",
    answer:
      "A wallet keeps you in self-custody: you hold your keys, choose your validator, and earn the network rate directly. An exchange is simpler but means trusting the company, accepting their terms, and sometimes earning less. Beginners often start on an exchange and move to a wallet once they are comfortable holding their own keys.",
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

export default function SuiStakingPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SUI Staking: The Complete Beginner's Guide 2026 (How It Works, APY, Risks)",
    description:
      "October 2026 beginner guide to SUI staking: how Delegated Proof-of-Stake works, current APY around 1.5%, where to stake (wallets vs exchanges), risks, and a step-by-step staking walkthrough.",
    datePublished: "2025-04-29",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · staking guides</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              SUI staking: the complete beginner's guide
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Sui is a fast Layer 1 blockchain, and your SUI tokens can earn rewards while helping secure
              the network. No trading, no complex strategies, just staking. This guide explains how SUI
              staking works, what APY to expect right now, where to stake, the real risks, and a
              step-by-step walkthrough to get you started.
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
          <Section id="what-is">
            <H2>What is SUI staking?</H2>
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/sui-staking/hero.png"
                alt="SUI Staking Guide title card with the Sui coin logo"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
            <P>
              Staking SUI means locking up your tokens to help secure the Sui blockchain, and earning
              rewards in return. Think of it like earning interest at a bank, except the "bank" is a
              decentralized network and the interest comes from protocol rewards.
            </P>
            <P>
              Sui uses <strong className="text-slate-900">Delegated Proof-of-Stake (DPoS)</strong>. You do
              not need to run a server or be technical. Instead, you delegate your tokens to a{" "}
              <strong className="text-slate-900">validator</strong>, a network operator that processes
              transactions and keeps the chain running. The validator shares the rewards with you and keeps
              a small commission for its work.
            </P>
          </Section>

          <Section id="how-it-works">
            <H2>How SUI staking works, step by step</H2>
            <P>Here is the simple version of what happens under the hood:</P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">You choose a validator</strong> based on its
                commission, performance, and reputation.
              </Li>
              <Li>
                <strong className="text-slate-900">You delegate your SUI</strong> to that validator from
                your wallet or exchange account.
              </Li>
              <Li>
                <strong className="text-slate-900">The validator uses your stake</strong> to help secure
                the network and process transactions.
              </Li>
              <Li>
                <strong className="text-slate-900">You earn rewards</strong> paid out at the end of every
                24-hour "epoch," Sui's daily reward cycle.
              </Li>
              <Li>
                <strong className="text-slate-900">You stay flexible:</strong> switch validators or
                unstake at the end of an epoch. There is no weeks-long lock-up on the network itself.
              </Li>
            </ul>
            <P>
              Rewards compound automatically: each epoch's earnings get added to your stake, so your
              position grows a little faster over time without you doing anything.
            </P>
          </Section>

          <Section id="apy">
            <H2>What APY can you expect? (checked October 2026)</H2>
            <P>
              Network staking rewards currently sit <strong className="text-slate-900">around 1.5% APY</strong>,
              varying slightly between validators depending on their commission (typically 2% to 10%) and
              performance. That is modest compared to some chains, but it comes with short unstaking and
              no slashing of your principal.
            </P>
            <P>
              Exchange products sometimes advertise higher figures, but read the fine print: promotional
              rates often depend on lock-up terms, new-user campaigns, or eligibility rules, and the rate
              can change when the campaign ends. A wallet earning the steady network rate in self-custody
              is often the better deal for beginners once you are comfortable holding your own keys.
            </P>
          </Section>

          <Section id="where-to-stake">
            <H2>Where to stake SUI</H2>
            <P>You have two main routes, and the right one depends on your comfort level:</P>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Self-custody wallets:</strong> the official Sui wallet
                and multi-chain wallets like Trust Wallet let you pick your own validator, keep your
                keys, and earn the network rate directly. This is the option we recommend once you are
                comfortable with seed phrase basics (see our{" "}
                <Link href="/learn/non-custodial-crypto-wallets" className="text-blue-600 hover:underline">
                  non-custodial wallets guide
                </Link>
                ).
              </Li>
              <Li>
                <strong className="text-slate-900">Exchanges:</strong> major exchanges including Binance
                offer SUI staking or earn products with flexible and locked options. Easier to start, but
                you trust the exchange with custody and accept their terms and rates.
              </Li>
              <Li>
                <strong className="text-slate-900">Banking and broker apps:</strong> platforms like
                Revolut have added SUI staking for their users, which can be the simplest entry point if
                you already use one, though rates and terms vary.
              </Li>
            </ul>
            <P>
              Compare platforms on three things before committing: the real APY after fees, whether your
              SUI is locked and for how long, and who holds custody. Highest headline rate usually loses
              to the best combination of those three.
            </P>
          </Section>

          <Section id="step-by-step">
            <H2>How to stake SUI: step-by-step</H2>
            <ol className="mt-4 list-decimal pl-6">
              <Li>
                <strong className="text-slate-900">Get SUI tokens:</strong> buy SUI on a trusted exchange.
                Start with our{" "}
                <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
                  Binance review
                </Link>{" "}
                or{" "}
                <Link href="/exchanges/bybit-review" className="text-blue-600 hover:underline">
                  Bybit review
                </Link>{" "}
                if you need a venue.
              </Li>
              <Li>
                <strong className="text-slate-900">Choose your platform:</strong> a wallet for self-custody
                or an exchange for simplicity.
              </Li>
              <Li>
                <strong className="text-slate-900">Set up and secure your wallet:</strong> download from
                the official source, back up your seed phrase on paper, and verify the backup before
                moving funds.
              </Li>
              <Li>
                <strong className="text-slate-900">Go to the staking section:</strong> look for "Stake" or
                "Stake and Earn" in the wallet or exchange app.
              </Li>
              <Li>
                <strong className="text-slate-900">Pick a validator:</strong> compare commission and
                performance. Lower commission is not always better if uptime is poor; mid-range commission
                with strong performance is a solid default.
              </Li>
              <Li>
                <strong className="text-slate-900">Enter your amount:</strong> leave a little SUI unstaked
                for gas fees on future transactions.
              </Li>
              <Li>
                <strong className="text-slate-900">Confirm and stake:</strong> approve the transaction and
                you are done.
              </Li>
              <Li>
                <strong className="text-slate-900">Track your rewards:</strong> rewards land each epoch
                (every 24 hours) and compound automatically. You can watch them grow in your wallet.
              </Li>
            </ol>
          </Section>

          <Section id="risks">
            <H2>The real risks</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Price volatility:</strong> a 1.5% yield means nothing
                if SUI drops 20%. Staking rewards are paid in SUI, so your total return moves with the
                token price.
              </Li>
              <Li>
                <strong className="text-slate-900">Lock-up terms on exchanges:</strong> the network itself
                unstakes in about a day, but exchange products can lock your SUI for fixed terms. Check
                before you commit.
              </Li>
              <Li>
                <strong className="text-slate-900">Validator underperformance:</strong> a validator with
                poor uptime or high commission quietly eats your yield. SUI does not slash your principal,
                which limits the damage, but your rewards still suffer.
              </Li>
              <Li>
                <strong className="text-slate-900">Platform security:</strong> exchange hacks and wallet
                malware are the classic ways staked funds get lost. Use reputable platforms, enable every
                security feature, and keep your seed phrase offline.
              </Li>
            </ul>
            <P>
              SUI staking is one of the more beginner-friendly ways to earn yield in crypto: simple
              mechanics, short unstaking, no slashing. Just remember the golden rule and never stake more
              than you can afford to lose.
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
