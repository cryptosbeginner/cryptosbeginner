import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/axiom-pro`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const AFFILIATE = "https://go.cryptosbeginner.com/Axiom";

export const metadata: Metadata = {
  title: "Axiom Pro vs Photon, GMGN & Trading Bots 2026: Fees Compared",
  description:
    "October 2026 comparison: Axiom Pro vs Photon vs GMGN vs Telegram bots for Solana trading. Verified fee tiers (0.95% to 0.75%), features, and the BullX shutdown update.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Axiom Pro vs Photon, GMGN & Trading Bots 2026: Fees Compared",
    description:
      "Axiom vs Photon vs GMGN vs Telegram bots: fees, speed, leverage, and safety compared with verified 2026 numbers, plus what the old guides got wrong.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/axiom-pro/axiom-pro.png`,
        width: 1903,
        height: 862,
        alt: "Axiom Pro Solana trading terminal comparison overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom Pro vs Photon, GMGN & Trading Bots 2026",
    description: "Fees compared with verified 2026 numbers, features, safety, and the BullX shutdown.",
    images: [`${SITE_URL}/images/tools/axiom-pro/axiom-pro.png`],
  },
};

const faqItems = [
  {
    question: "What is Axiom Pro?",
    answer:
      "Axiom (branded Axiom Pro on its site) is a Y Combinator-backed web trading terminal for Solana meme coins and small-cap tokens, with a Telegram companion bot. It combines token discovery (Pulse), fast execution, wallet and social tracking, copy trading, migration sniping, and Hyperliquid perpetuals up to 50x in one interface. It is non-custodial: you control your keys.",
  },
  {
    question: "How much does Axiom charge per trade?",
    answer:
      "Axiom uses a volume-based tier system with SOL cashback. New users at the Wood tier pay a net 0.95% per trade; the rate improves as volume climbs, down to a net 0.75% at the top Champion tier. Signing up through a referral link can also give a fee discount (10% off per public referral documentation, though promotions can change). There is no monthly subscription.",
  },
  {
    question: "Is BullX still working?",
    answer:
      "No, not for trading. BullX disabled all trading on 1 June 2026 and is now wallet-only: withdrawals and wallet functions continue, but you cannot place new trades. The company has mentioned a future version with no public date. If you still have funds there, export your keys and withdraw. Do not pick BullX as an active trading platform in 2026.",
  },
  {
    question: "Axiom vs Photon: which is cheaper?",
    answer:
      "Axiom, in most cases. Axiom's net fee runs 0.95% down to 0.75% for high-volume traders, while recent reviews put Photon at roughly 1% with no cashback or tier system. Photon was reported around 2% in early 2025 guides, so its fee has changed since then; confirm live before trading.",
  },
  {
    question: "Axiom vs GMGN: which should I pick?",
    answer:
      "Pick Axiom if you want the lowest effective fees at volume, perps, and copy trading in a full terminal. Pick GMGN if your edge is smart-money research: its wallet and holder analytics are the industry benchmark, but you pay for it at 1.5% per trade, the highest fee of the four platforms compared here. Many serious traders use both: GMGN for research, Axiom for execution.",
  },
  {
    question: "Are Telegram bots like BONKbot and Trojan still relevant?",
    answer:
      "Yes, for pure sniping speed on new launches. Bots live inside Telegram, so they are faster to set up and can be very quick on entries, but they lack Axiom's analytics, bubble maps, and risk tools. The practical setup many traders use: a Telegram bot for quick snipes, then move profits to Axiom for safer holds and portfolio management.",
  },
  {
    question: "Is Axiom safe?",
    answer:
      "Axiom describes its wallet as non-custodial and uses Turnkey wallet infrastructure, with recovery information so you can access the wallet independently. There is no history of a platform hack that we are aware of. The real risks are the ones no terminal can remove: memecoin volatility, rug pulls, and smart contract or phishing risk. Use a dedicated trading wallet, never share your recovery phrase, and beware of fake browser extensions impersonating Axiom, which security researchers flagged in 2026.",
  },
  {
    question: "Can I use Axiom on my phone?",
    answer:
      "The core experience is desktop-first. Mobile access works through the browser and the Telegram companion bot handles alerts and quick trades on the go, but there is no native app. If you trade mostly from your phone, expect a compromise.",
  },
  {
    question: "Where is the full Axiom tutorial?",
    answer:
      "This page is the comparison. For the step-by-step walkthrough, settings, presets, and how-to, see our full Axiom trade tutorial on this site.",
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

function Figure({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
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

function Callout({ title, children, tone = "amber" }: { title: string; children: React.ReactNode; tone?: "amber" | "red" }) {
  const styles =
    tone === "red"
      ? "border-red-200 bg-red-50"
      : "border-amber-200 bg-amber-50";
  const titleStyles = tone === "red" ? "text-red-900" : "text-amber-900";
  const bodyStyles = tone === "red" ? "text-red-950/80" : "text-amber-950/80";
  return (
    <div className={`mt-6 rounded-2xl border p-5 ${styles}`}>
      <p className={`font-black ${titleStyles}`}>{title}</p>
      <div className={`mt-2 text-sm leading-7 ${bodyStyles}`}>{children}</div>
    </div>
  );
}

export default function AxiomProPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Axiom Pro vs Photon, GMGN & Trading Bots 2026: Fees Compared",
    description:
      "October 2026 comparison of Axiom Pro, Photon, GMGN, and Telegram trading bots: verified fee tiers, features, safety, and the BullX shutdown update.",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · platform comparison</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Axiom Pro vs Photon, GMGN, and trading bots: the 2026 comparison
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Researched for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              If you trade meme coins on Solana, you have heard the hype around Axiom. But how
              does it really stack up against Photon, GMGN, and Telegram bots in 2026? Fees
              compared with verified numbers, features tested side by side, and the BullX update
              every old guide misses.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Axiom with a fee discount</PrimaryAffiliateButton>
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
          <strong className="text-slate-700">Affiliate disclosure:</strong> our Axiom referral
          link may give you a fee discount and may earn us a commission at no extra cost to you.{" "}
          <strong className="text-slate-700">Risk warning:</strong> memecoin trading can lose
          money fast. Educational content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="stale-warning">
            <Callout title="What changed since the original April 2025 guide" tone="red">
              <p>
                The original comparison this page replaces was written in April 2025, and several
                of its figures are stale. BullX has disabled all trading (June 2026) and is
                wallet-only, so it is not an active option. Photon&apos;s fee has changed since
                the 2% reported in early 2025 guides. Axiom&apos;s fee structure is now a
                published 7-tier system with SOL cashback, not the flat 0.9% the old guide
                quoted. The comparison below uses verified 2026 numbers, and flags anything that
                comes from older sources.
              </p>
            </Callout>
          </Section>

          <Section id="short-version">
            <H2>The short version</H2>
            <P>
              <strong className="text-slate-950">Axiom</strong> is the 2026 volume leader among
              Solana trading terminals: the cheapest effective fees at volume (0.95% down to
              0.75% net), perps via Hyperliquid up to 50x, copy trading, and the deepest risk
              toolkit. <strong className="text-slate-950">GMGN</strong> wins on smart-money
              analytics but charges the highest fee at 1.5%.{" "}
              <strong className="text-slate-950">Photon</strong> is a solid simpler alternative
              around 1%. <strong className="text-slate-950">Telegram bots</strong> like BONKbot
              and Trojan still win for pure sniping speed but lack real risk tools. And{" "}
              <strong className="text-slate-950">BullX</strong> is out: trading disabled since
              June 2026.
            </P>
            <Figure
              src="/images/tools/axiom-pro/axiom-pro.png"
              alt="Axiom Pro Solana trading terminal comparison overview"
              caption="Axiom: the Y Combinator-backed terminal that became the 2025 volume leader."
              width={1903}
              height={862}
            />
          </Section>

          <Section id="axiom">
            <H2>Why traders picked Axiom</H2>
            <P>
              Axiom captured over half of Solana trading-tool market share at its 2025 peak, and
              the reasons are concrete. The fee structure is the most sophisticated of the group:
              instead of one flat rate, Axiom runs seven volume-based tiers where cashback paid in
              SOL improves as you trade more. New users at the Wood tier pay a net 0.95% per
              trade; the top Champion tier pays a net 0.75%. A referral signup can add a further
              fee discount on top.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Tier (multiplier)</th>
                    <th className="px-4 py-3 font-black text-slate-950">Net fee</th>
                    <th className="px-4 py-3 font-black text-slate-950">SOL cashback</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Wood (1x)</td>
                    <td className="px-4 py-3">0.95%</td>
                    <td className="px-4 py-3">0.05%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Bronze (2x)</td>
                    <td className="px-4 py-3">0.90%</td>
                    <td className="px-4 py-3">0.10%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Silver (2.5x)</td>
                    <td className="px-4 py-3">0.875%</td>
                    <td className="px-4 py-3">0.125%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Gold (3x)</td>
                    <td className="px-4 py-3">0.85%</td>
                    <td className="px-4 py-3">0.15%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Platinum (3.5x)</td>
                    <td className="px-4 py-3">0.825%</td>
                    <td className="px-4 py-3">0.175%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Diamond (4x)</td>
                    <td className="px-4 py-3">0.80%</td>
                    <td className="px-4 py-3">0.20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Champion (5x)</td>
                    <td className="px-4 py-3">0.75%</td>
                    <td className="px-4 py-3">0.25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Fees are only part of the story. Axiom&apos;s Pulse engine filters live token
              launches by liquidity, sniper percentage, holder concentration, age, and trending
              activity. The risk toolkit includes Twitter/X age checks that flag coins with brand
              new social accounts, bubble maps that expose when a few wallets hold most of the
              supply, dev migration alerts, and a bundle checker that spots coordinated buys.
              Add copy trading, a migration sniper, perps on Hyperliquid, and MEV protection
              modes, and you get why volume concentrated here.
            </P>
            <Figure
              src="/images/tools/axiom-pro/axiom-pro-social-monitor.png"
              alt="Axiom Pro social monitoring feature tracking X activity"
              caption="Social monitoring: track influencer activity with one-click execution."
              width={1024}
              height={457}
            />
            <Figure
              src="/images/tools/axiom-pro/axiom-pro-perpetuals.png"
              alt="Axiom Pro perpetuals trading with Hyperliquid leverage"
              caption="Perpetuals: leveraged exposure via Hyperliquid, up to 50x."
              width={1024}
              height={460}
            />
            <P>
              For the full step-by-step walkthrough, settings, and presets, see our{" "}
              <Link href="/tools/axiom-trade-tutorial" className="font-bold text-emerald-700 underline">
                Axiom trade tutorial
              </Link>
              .
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Open Axiom with a fee discount</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="comparison">
            <H2>Axiom vs Photon vs BullX vs GMGN: the 2026 comparison</H2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Feature</th>
                    <th className="px-4 py-3 font-black text-slate-950">Axiom</th>
                    <th className="px-4 py-3 font-black text-slate-950">Photon</th>
                    <th className="px-4 py-3 font-black text-slate-950">BullX</th>
                    <th className="px-4 py-3 font-black text-slate-950">GMGN</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Status</td>
                    <td className="px-4 py-3">Live</td>
                    <td className="px-4 py-3">Live</td>
                    <td className="px-4 py-3 font-bold text-red-700">Trading disabled June 2026</td>
                    <td className="px-4 py-3">Live</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Trading fee</td>
                    <td className="px-4 py-3">0.95% to 0.75% net (7 tiers)</td>
                    <td className="px-4 py-3">~1% (was ~2% in early 2025 guides)</td>
                    <td className="px-4 py-3">~1% historically; not tradeable now</td>
                    <td className="px-4 py-3">1.5%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Cashback / tiers</td>
                    <td className="px-4 py-3">SOL cashback 0.05% to 0.25%</td>
                    <td className="px-4 py-3">None reported</td>
                    <td className="px-4 py-3">N/A</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Leverage</td>
                    <td className="px-4 py-3">Up to 50x (Hyperliquid perps)</td>
                    <td className="px-4 py-3">Up to 10x (per 2025 guides)</td>
                    <td className="px-4 py-3">N/A</td>
                    <td className="px-4 py-3">5x (per 2025 guides)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Risk tools</td>
                    <td className="px-4 py-3">X age checks, bubble maps, bundle checker, dev alerts</td>
                    <td className="px-4 py-3">Volume and liquidity basics</td>
                    <td className="px-4 py-3">N/A</td>
                    <td className="px-4 py-3">Smart-money and holder analytics (best in class)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Copy trading</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Limited</td>
                    <td className="px-4 py-3">N/A</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Execution speed</td>
                    <td className="px-4 py-3">Sub-second, Turbo mode</td>
                    <td className="px-4 py-3">Fast</td>
                    <td className="px-4 py-3">N/A</td>
                    <td className="px-4 py-3">Fast</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Best for</td>
                    <td className="px-4 py-3">Volume traders wanting low fees and depth</td>
                    <td className="px-4 py-3">Simpler, fast terminal experience</td>
                    <td className="px-4 py-3">Withdrawals only</td>
                    <td className="px-4 py-3">Research-first traders (fee is the tradeoff)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout title="Reading this table honestly">
              <p>
                Axiom&apos;s fee tiers are from its published 2026 documentation and are the
                firmest numbers here. GMGN&apos;s 1.5% and Photon&apos;s ~1% come from recent
                third-party reviews, so confirm them in-app before trading size. Leverage and
                user figures from the April 2025 guide are marked where used and should be
                treated as dated.
              </p>
            </Callout>
          </Section>

          <Section id="bots">
            <H2>Telegram bots: the dark horse competition</H2>
            <P>
              While web terminals dominate the conversation, Telegram bots like BONKbot and Trojan
              held a meaningful share of Solana meme volume through 2025, and they are still
              relevant in 2026. Here is how they compare to Axiom:
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Feature</th>
                    <th className="px-4 py-3 font-black text-slate-950">Axiom</th>
                    <th className="px-4 py-3 font-black text-slate-950">BONKbot</th>
                    <th className="px-4 py-3 font-black text-slate-950">Trojan</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Fees</td>
                    <td className="px-4 py-3">0.95% to 0.75% net</td>
                    <td className="px-4 py-3">~1% (2025 guides)</td>
                    <td className="px-4 py-3">~1.2% (2025 guides)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Auto-snipe new coins</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Risk tools</td>
                    <td className="px-4 py-3">Deep (bubble maps, X checks, bundles)</td>
                    <td className="px-4 py-3">Minimal</td>
                    <td className="px-4 py-3">Minimal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Leverage</td>
                    <td className="px-4 py-3">Up to 50x perps</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              The verdict has not changed since the original guide: bots win for sniping new
              launches fast, but Axiom&apos;s analytics make it safer for holds longer than an
              hour. The practical setup many traders run is both: a bot for quick snipes, then
              shift profits to Axiom for safer holds. Note the bot fee figures come from 2025
              guides and should be confirmed in-bot.
            </P>
          </Section>

          <Section id="bullx">
            <H2>The BullX situation, explained</H2>
            <P>
              If you are reading older guides, BullX shows up as a top pick. Here is the 2026
              reality: BullX announced that trading was disabled at 12:00 AM UTC on 1 June 2026.
              The app is now wallet-only. Withdrawals and wallet functions continue, but you
              cannot place new trades. The company framed it as a pause while it builds a new
              version, with no public return date.
            </P>
            <P>
              If you still have funds there: export your private keys or seed phrase while you
              are logged in, and withdraw to a wallet you control. Do not leave assets sitting
              on a platform in wind-down. And do not choose BullX as your trading platform in
              2026, no matter what an old guide says.
            </P>
          </Section>

          <Section id="getting-started">
            <H2>Getting started on Axiom</H2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-8 text-slate-600">
              <li>Sign up through a referral link to lock in the fee discount.</li>
              <li>Deposit SOL or USDC: email signups get an auto-generated wallet, or connect Phantom or MetaMask directly.</li>
              <li>Set your presets first: start with safe mode, low slippage, and MEV protection on.</li>
              <li>
                Start small while you learn the interface: the terminal is powerful and the learning curve is real. The
                full walkthrough, including settings and advanced features, is in our{" "}
                <Link href="/tools/axiom-trade-tutorial" className="font-bold text-emerald-700 underline">
                  Axiom trade tutorial
                </Link>
                .
              </li>
            </ol>
            <div className="mt-6">
              <PrimaryAffiliateButton>Start on Axiom with a fee discount</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Axiom pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Lowest effective fees at volume: 0.95% to 0.75% net</li>
                  <li>SOL cashback that grows with your volume</li>
                  <li>Deep risk toolkit: bubble maps, X checks, bundle checker</li>
                  <li>Perps via Hyperliquid up to 50x, plus copy trading</li>
                  <li>Pulse engine for real-time discovery</li>
                  <li>Non-custodial with Turnkey wallet infrastructure</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>Desktop-first; mobile is a compromise</li>
                  <li>Steeper learning curve than Telegram bots</li>
                  <li>Analytics trail GMGN for pure smart-money research</li>
                  <li>US users face access restrictions</li>
                  <li>Beware fake browser extensions impersonating Axiom</li>
                  <li>Memecoin risk remains, no tool removes it</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              For traders who do real volume on Solana, Axiom is the 2026 pick: the tiered fee
              structure with SOL cashback undercuts Photon and GMGN meaningfully, the risk
              toolkit is the deepest of the group, and perps plus copy trading make it a full
              terminal rather than just a swap box. It is not perfect: mobile lags, the learning
              curve is steeper than a Telegram bot, and GMGN still wins for pure smart-money
              research.
            </P>
            <P>
              The honest stack for most serious traders: Axiom as the home base for execution
              and holds, GMGN alongside it for research when the 1.5% fee is worth the edge, and
              a Telegram bot for the fastest snipes. Forget BullX until it returns, if it ever
              does. And whatever you choose, start small: no fee discount saves a bad trade.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Axiom with a fee discount</PrimaryAffiliateButton>
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
