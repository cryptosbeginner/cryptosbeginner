import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/axiom-trade-tutorial`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2025";
const AFFILIATE = "https://go.cryptosbeginner.com/Axiom";

export const metadata: Metadata = {
  title: "Axiom Trade Tutorial 2026: Solana Meme Coin Trading Guide",
  description:
    "October 2026 Axiom tutorial: getting access, funding, dashboard tour, trackers, perps, buying and selling, bubblemaps, and honest risk notes for Solana traders.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Axiom Trade Tutorial 2026: Solana Meme Coin Trading Guide",
    description:
      "Step-by-step Axiom tutorial: access, funding, dashboard, trackers, perps, trade execution, and risk management for Solana meme coin traders.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/axiom-app-overview.png`,
        width: 1024,
        height: 469,
        alt: "Axiom Trade app overview showing the trading dashboard for Solana meme coins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom Trade Tutorial 2026",
    description: "Axiom tutorial: access, funding, dashboard tour, trackers, perps, and trade execution.",
    images: [`${SITE_URL}/images/tools/axiom-app-overview.png`],
  },
};

const faqItems = [
  {
    question: "What is Axiom?",
    answer:
      "Axiom (axiom.trade) is an all-in-one Solana trading terminal for meme coins. It bundles token discovery, fast execution, wallet trackers, filters, perpetuals, and yield features into one dashboard, so traders do not need to juggle multiple tools.",
  },
  {
    question: "How do I get access to Axiom?",
    answer:
      "Axiom has used an invite-gated model: you typically need an access code or referral link to skip the waitlist. Once in, you create an account, complete any required steps, and fund your Axiom wallet to start trading.",
  },
  {
    question: "What are Axiom trackers?",
    answer:
      "Trackers let you follow specific wallets and get alerted when they trade. It is the same smart-money concept other terminals offer: watch wallets with a history of good entries. Tracked wallets can still be wrong, lucky, or trading size you cannot see.",
  },
  {
    question: "Does Axiom support perpetuals?",
    answer:
      "Yes, Axiom includes a perpetuals section for trading beyond spot meme coins. Perps use leverage, which multiplies both gains and losses, and funding rates apply on held positions. Beginners should master spot before touching perps.",
  },
  {
    question: "What is the Axiom bubblemap?",
    answer:
      "The bubblemap visualizes token holder distribution, showing how concentrated the supply is across wallets. Heavy concentration in a few wallets is a red flag: those holders can dump on everyone else. It is a quick visual audit before you buy.",
  },
  {
    question: "Is Axiom safe?",
    answer:
      "Axiom is a trading tool, not a bank. You deposit funds into its trading infrastructure, which carries custodial and smart contract risk. Only keep what you are actively trading with. And meme coin trading itself is extremely risky regardless of the tool.",
  },
];

function PrimaryAffiliateButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{ color: "#ffffff", textDecoration: "none" }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

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

function Figure({ src, alt, caption, width = 1024, height = 500 }: { src: string; alt: string; caption: string; width?: number; height?: number }) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
      />
      <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

export default function AxiomTutorialPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Axiom Trade Tutorial 2026: Solana Meme Coin Trading Guide",
    description:
      "Step-by-step Axiom tutorial: access, funding, dashboard tour, trackers, perps, trade execution, bubblemaps, and risk notes.",
    datePublished: "2025-05-19",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · tutorials</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Axiom Trade tutorial: your Solana meme coin command center
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · A CryptosBeginner guide
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Axiom packs discovery, execution, trackers, perps, and yield into one Solana terminal.
              This tutorial walks through getting access, funding, the dashboard tour, making trades,
              and the risk habits that keep you alive in meme coin markets.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Axiom</PrimaryAffiliateButton>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4 text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">Affiliate disclosure:</strong> links to Axiom may earn us
          a commission at no extra cost to you. <strong className="text-slate-700">Risk warning:</strong>{" "}
          meme coin trading is extremely risky. This is educational content, not financial advice.
          Never trade money you cannot afford to lose.
        </div>

        <div className="py-10">
          <Section id="access">
            <H2>Step 1: getting access</H2>
            <P>
              Axiom has operated on an invite model: heading to the site without a code can land you
              on a waitlist. An access code or referral link gets you in directly. Once inside you
              will see login and sign-up options; create your account and secure it before funding
              anything.
            </P>
            <Figure
              src="/images/tools/axiom-app-overview.png"
              alt="Axiom Trade app overview showing the main trading dashboard"
              caption="The Axiom trading dashboard: your starting point."
            />
          </Section>

          <Section id="funding">
            <H2>Step 2: account basics and funding</H2>
            <P>
              Before trading, lock down account security: strong unique password, two-factor
              authentication, and a clear understanding of where your funds sit. Axiom is trading
              infrastructure, not a bank. Deposit only what you plan to actively trade with.
            </P>
            <Figure
              src="/images/tools/axiom-account-security.png"
              alt="Axiom Trade account security settings tutorial"
              caption="Secure your account before depositing anything."
            />
            <P>
              Funding and withdrawals run through the wallet section. Double-check addresses, start
              with a small test deposit, and confirm it lands before moving larger amounts. In meme
              coin trading, a wrong address is gone forever.
            </P>
            <Figure
              src="/images/tools/axiom-deposit-withdraw.png"
              alt="Axiom Trade tutorial showing deposit and withdrawal screens"
              caption="Deposit and withdrawal flow in Axiom."
            />
          </Section>

          <Section id="dashboard">
            <H2>Step 3: the dashboard tour</H2>
            <P>
              The Axiom Pro dashboard is the command center: token discovery feeds, charts,
              positions, and quick-trade controls in one view. Spend time clicking around with no
              money at risk before your first real trade. Learn where everything lives so you are
              not hunting for the sell button during a dump.
            </P>
            <Figure
              src="/images/tools/axiom-pro-dashboard.png"
              alt="Axiom Pro tutorial showing the main dashboard layout"
              caption="Axiom Pro dashboard tour."
            />
            <P>
              <strong className="text-slate-900">Filters</strong> narrow the firehose: set minimum
              liquidity, volume, holder counts, and age to surface only tokens worth a look. Good
              filters are a trading edge on their own.
            </P>
            <Figure
              src="/images/tools/axiom-filters.png"
              alt="Axiom Pro filters tutorial for screening meme coins"
              caption="Filters cut the noise: liquidity, volume, holders, age."
            />
            <P>
              <strong className="text-slate-900">Trackers</strong> follow wallets you choose and ping
              you when they trade. Same discipline as anywhere: a tracked wallet's history is not a
              promise about its next trade.
            </P>
            <Figure
              src="/images/tools/axiom-trackers.png"
              alt="Axiom Pro trackers tutorial showing wallet tracking setup"
              caption="Trackers alert you when followed wallets trade."
            />
            <P>
              <strong className="text-slate-900">Perpetuals</strong> take you beyond spot meme coins
              into leveraged trading. Leverage multiplies losses as fast as gains, and funding rates
              bleed slow positions. Master spot first.
            </P>
            <Figure
              src="/images/tools/axiom-perpetuals.png"
              alt="Axiom Pro perpetuals tutorial showing leveraged trading interface"
              caption="Perpetuals: leverage for experienced traders only."
            />
          </Section>

          <Section id="trading">
            <H2>Step 4: making trades</H2>
            <P>
              <strong className="text-slate-900">Buy presets</strong> are your speed edge: preset
              amounts so one click fires a sized position. In fast markets, the seconds you save
              with presets are the difference between catching a move and chasing it.
            </P>
            <Figure
              src="/images/tools/axiom-buy-presets.png"
              alt="Axiom Trade buy presets tutorial for fast trade execution"
              caption="Buy presets: one-click sized entries."
            />
            <P>
              <strong className="text-slate-900">Selling</strong> deserves more planning than buying.
              Set your exits before you enter: take-profit levels, stop-loss levels, and how much to
              sell at each. The traders who survive meme coin markets are the ones with an exit
              plan, not the ones with the best entries.
            </P>
            <Figure
              src="/images/tools/axiom-selling.png"
              alt="Axiom Pro selling tutorial showing exit controls"
              caption="Plan your exits before you enter."
            />
            <P>
              <strong className="text-slate-900">The bubblemap</strong> is your thirty-second audit:
              it visualizes how concentrated a token's supply is across wallets. A few giant bubbles
              means a few wallets can nuke the price. Spread-out holders are healthier. Check it
              before every buy.
            </P>
            <Figure
              src="/images/tools/axiom-bubblemap.png"
              alt="Axiom Pro bubblemap tutorial visualizing token holder concentration"
              caption="The bubblemap exposes holder concentration at a glance."
            />
          </Section>

          <Section id="risk">
            <H2>Risk habits that matter</H2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
              <li><strong className="text-slate-900">Size small.</strong> No single trade should hurt if it goes to zero, because sometimes it will.</li>
              <li><strong className="text-slate-900">Verify before you buy.</strong> Bubblemap, holder count, liquidity lock status. Thirty seconds of checks filters most disasters.</li>
              <li><strong className="text-slate-900">Withdraw profits.</strong> Do not let a winning session sit in a hot trading wallet. Bank it.</li>
              <li><strong className="text-slate-900">Trackers are signal, not gospel.</strong> Wallets you follow can be wrong, early, or trading against you.</li>
            </ul>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Axiom</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="videos">
            <H2>Video tutorials</H2>
            <P>
              Video walkthroughs of the Axiom trading platform. These are
              third-party tutorials, not affiliated with CryptosBeginner.
            </P>
            <div className="mt-6 grid gap-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/c0jfxKdraPI"
                    title="Axiom trading platform tutorial"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/xyKLNK0ee2U?start=14"
                    title="Axiom platform walkthrough"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
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
