import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/padre-review`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const AFFILIATE = "https://trade.padre.gg/rk/1000xgems";

export const metadata: Metadata = {
  title: "Padre (Terminal) Review 2026: Fees, SOL Cashback, Features Tested",
  description:
    "October 2026 Padre Terminal review: 1% flat fees, up to 35% SOL cashback, Inferno Mode speed, EVA audits, wallet tracking. Plus the honest $PADRE token story.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Padre (Terminal) Review 2026: Fees, SOL Cashback, Features Tested",
    description:
      "Hands-on Padre Terminal review: flat 1% fees, SOL cashback locked at signup, wallet tracking, the $PADRE token crash, and how it compares to Axiom and GMGN.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/padre-review/padre-trending.png`,
        width: 886,
        height: 1920,
        alt: "Padre Terminal trending tokens view inside the live trading app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padre (Terminal) Review 2026",
    description: "Padre Terminal tested: 1% fees, SOL cashback, speed, audits, and the $PADRE story.",
    images: [`${SITE_URL}/images/tools/padre-review/padre-trending.png`],
  },
};

const faqItems = [
  {
    question: "What is Padre (Terminal)?",
    answer:
      "Padre, now branded as Terminal after its acquisition by Pump.fun in October 2025, is a multi-chain trading terminal for meme coins and small-cap tokens. It runs as a web app with a CEX-style order panel, covering Solana, Ethereum, Base, and BNB Chain. It is built for high-volume traders who want execution speed, deep order types, and on-chain analytics in one interface.",
  },
  {
    question: "How much does Padre charge per trade?",
    answer:
      "Padre charges a flat 1% per trade, confirmed in the app's own code (feeBps: 100), with no volume tiers. Some guides report 0.5% on limit orders, but we could not confirm that in the code, so treat the 1% flat rate as the number to plan around. On top of the platform fee you also pay network gas, your own priority fee, slippage, and on Pump.fun bonding curve trades, Pump.fun's separate 1.25% curve fee.",
  },
  {
    question: "How does the SOL cashback work?",
    answer:
      "Cashback is a rebate on the 1% platform fee, paid in SOL and claimed from the Rewards page. Accounts created through a referral link earn up to 35% cashback on their own fees. The default rate for direct signups was documented at 10% in mid-2025, though we could not confirm that figure in the current app. Either way, the rate is fixed at signup and cannot be changed later, so use a referral link before you register.",
  },
  {
    question: "Why is my cashback rate locked at signup?",
    answer:
      "The app decides your rate based on whether a referral code was stored in your browser when you first landed on the site. That decision is permanent. If you sign up directly and later find a referral link, you cannot upgrade your rate. This is the single most important thing to know before creating an account.",
  },
  {
    question: "Is Padre self-custodial?",
    answer:
      "Yes. Padre generates a trading wallet encrypted with a password you set, which the app says it never stores, and you can export your private keys at any time. You can also sign in with Telegram, Google, or X, or import an existing wallet. Because the app needs to sign transactions on your behalf, use a dedicated trading wallet and never your main holdings.",
  },
  {
    question: "What happened to the $PADRE token?",
    answer:
      "When Pump.fun acquired Padre in October 2025, it declared the $PADRE token would have no further utility on the platform. The token crashed roughly 78 to 80 percent within hours, and holders accused the team of a rug pull. Pump.fun later offered PUMP token compensation at the pre-announcement PADRE value, with a claim deadline of 30 December 2025. As a utility token, $PADRE is effectively dead. Do not buy it expecting fee discounts or perks.",
  },
  {
    question: "Does Padre have copy trading?",
    answer:
      "No, not anymore. Copy trading and automation existed before the Pump.fun acquisition and were removed afterward. If copy trading matters to you, Axiom and GMGN still offer it. Padre's edge is execution speed and analytics, not automation.",
  },
  {
    question: "Is there a Padre mobile app?",
    answer:
      "There is no native iOS or Android app. Padre ships as an installable progressive web app (PWA) with full desktop parity, and you can sign in on your phone via a QR code from your desktop session. Do not confuse it with Pump.fun's own mobile app, which is the launchpad, not this terminal.",
  },
  {
    question: "Who should use Padre, and who should skip it?",
    answer:
      "Padre suits high-volume Solana trench traders who value execution speed above everything and trade enough size for the SOL cashback to matter. Skip it if you are a complete beginner who wants hand-holding, if you need copy trading or perps, or if a flat 1% fee is too steep for your trade sizes. The learning curve is real.",
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

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={540}
        height={1170}
        className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
      />
      <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <p className="text-sm font-bold text-slate-700">{title}</p>
      <p className="mt-2 text-xs leading-6 text-slate-500">
        Video review coming soon. The full walkthrough is being finalized and will be embedded here.
      </p>
    </div>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <p className="font-black text-amber-900">{title}</p>
      <div className="mt-2 text-sm leading-7 text-amber-950/80">{children}</div>
    </div>
  );
}

export default function PadreReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Padre (Terminal) Review 2026: Fees, SOL Cashback, Features Tested",
    description:
      "Hands-on Padre Terminal review: flat 1% fees, SOL cashback locked at signup, Inferno Mode speed, EVA audits, wallet tracking, the $PADRE token crash, and comparison vs Axiom and GMGN.",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · trading terminals</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Padre (Terminal) review 2026: the terminal Pump.fun bought
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Flat 1% fees, real SOL cashback, sub-second execution, and a token story you need to
              hear before you touch it. Tested screen by screen, here is the honest breakdown of
              Padre, now called Terminal after the Pump.fun acquisition.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Padre Terminal</PrimaryAffiliateButton>
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
          <strong className="text-slate-700">Affiliate disclosure:</strong> our referral link may give
          you up to 35% cashback on fees in SOL and may earn us a share of fees at no extra cost to
          you. The cashback rate is locked at signup and cannot be changed later.{" "}
          <strong className="text-slate-700">Risk warning:</strong> meme coin trading can lose money
          fast. Educational content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="video">
            <VideoPlaceholder title="Padre Terminal video review" />
          </Section>

          <Section id="what-it-is">
            <H2>What Padre (Terminal) is</H2>
            <P>
              Padre started around 2024 as an independent trading terminal for meme coins and
              small-cap tokens. On 24 October 2025, Pump.fun acquired it for an undisclosed sum and
              rebranded it as Terminal, though it still lives at trade.padre.gg and is mirrored at
              terminal.pump.fun. It runs under its own brand with its own operating company named in
              the terms.
            </P>
            <P>
              The pitch is simple: a multi-chain on-chain terminal with a CEX-style order panel,
              built for traders who live in the trenches. Solana is where it is most optimized, but
              it also covers Ethereum, Base, and BNB Chain. The team leans into the trader-forged
              branding, and Pump.fun co-founder Alon Cohen publicly praised their execution at the
              acquisition.
            </P>
            <Callout title="The one thing to know before anything else">
              <p>
                Your cashback rate is decided the moment you sign up, based on whether a referral
                code was in your browser. It cannot be changed later. If you plan to use Padre, sign
                up through a referral link on day one or you leave real money on the table forever.
              </p>
            </Callout>
          </Section>

          <Section id="setup">
            <H2>Getting set up: wallets, password, gas first</H2>
            <P>
              You can sign in with Telegram, Google, or X, or import an existing wallet via private
              key. Padre then generates a trading wallet encrypted with a password you set. The app
              says it never stores that password, and you can export your private keys at any time,
              which is the right trust model for a trading terminal.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-settings.png"
              alt="Padre Terminal trade settings screen with slippage and priority fee controls"
              caption="Trade settings: slippage, priority fees, and presets live here."
            />
            <P>
              The settings screen is where you configure slippage, priority fees, and trading
              presets. Take this seriously before your first trade, because the defaults are not
              built for sniping new launches.
            </P>
            <Callout title="Fund your gas token first">
              <p>
                A documented community case: a user deposited only USDT, then could not trade or
                withdraw because they had no SOL for gas, and support was slow to respond. The fix
                was exporting the key to Phantom. Do not be that person. On every chain you trade,
                hold the native gas token before you deposit anything else.
              </p>
            </Callout>
          </Section>

          <Section id="fees">
            <H2>Fees: the honest math</H2>
            <P>
              The platform fee is 1% per trade, flat, on buys and sells. This is confirmed in the
              app's own code (feeBps: 100), with no volume tiers and no discount tables. Some guides
              report 0.5% on limit orders, but we could not confirm that in the code, so plan around
              1% flat.
            </P>
            <P>
              On top of the platform fee, you always pay network gas, your own priority fee or Jito
              tip, and slippage. On Pump.fun bonding curve trades, Pump.fun's separate 1.25%
              bonding curve fee also applies. These stack, so your true cost per trade is the 1%
              platform fee plus everything else.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Cost</th>
                    <th className="px-4 py-3 font-black text-slate-950">$500 market buy</th>
                    <th className="px-4 py-3 font-black text-slate-950">$1,000 market buy</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">Padre platform fee (1%)</td>
                    <td className="px-4 py-3">$5.00</td>
                    <td className="px-4 py-3">$10.00</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">Cashback at 35% referral rate</td>
                    <td className="px-4 py-3 text-emerald-700">-$1.75 in SOL</td>
                    <td className="px-4 py-3 text-emerald-700">-$3.50 in SOL</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Effective platform cost</td>
                    <td className="px-4 py-3 font-bold text-slate-900">$3.25</td>
                    <td className="px-4 py-3 font-bold text-slate-900">$6.50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Plus gas, priority fee, slippage</td>
                    <td className="px-4 py-3" colSpan={2}>Varies by network conditions</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              The hidden cost most traders miss is failed transactions. New launches fail constantly,
              and every failed attempt still costs you the priority fee. At 0.01 SOL per attempt,
              five failures burn 0.05 SOL (around $7.50 at $150/SOL), more than the platform fee on a
              successful $500 trade. That is why the snipe preset matters: slippage 15 to 25%,
              high priority fee, small size until you see the first one land.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-pnl.png"
              alt="Padre Terminal PnL view showing profit and loss with and without fees"
              caption="The PnL view shows your real numbers, fees included."
            />
          </Section>

          <Section id="cashback">
            <H2>Cashback in SOL: how it actually works</H2>
            <P>
              Cashback is a rebate against the 1% platform fee, paid in SOL, not points. You claim
              it from the Rewards page, where an unclaimed balance accrues per trade. Accounts
              created through a referral link earn up to 35% cashback on their own fees. The live
              in-app copy confirms the 35% figure.
            </P>
            <P>
              The default rate for direct signups was documented at 10% in mid-2025, but that
              documentation is from before the Pump.fun acquisition and we could not confirm the
              figure in the current app. What is confirmed: the rate is fixed at signup by whether a
              referral code was stored in your browser, and it cannot be changed later. Do not sign
              up directly planning to add a referral code later. It will not work.
            </P>
            <P>
              On the referrer side, the in-app referral dashboard says referrers earn up to 40% of
              the fees from their referred traders' volume, excluding gas and taxes. Other sources
              cite 35% as the starting commission, so treat the exact tier as variable.
            </P>
          </Section>

          <Section id="interface">
            <H2>The trading interface</H2>
            <P>
              The terminal gives you market and limit orders on all chains, plus stop-loss,
              take-profit, trailing stop-loss, and multi-exit plans (for example, sell 25% at +30%).
              Position-based take-profit and stop-loss scale with your holdings, and there are
              pre-migration limit orders for Pump.fun tokens about to graduate to Raydium. Custom
              trading presets let you switch slippage and tip profiles in one click.
            </P>
            <P>
              The layout is customizable, charts are TradingView, and there is hotkey search. It is
              a serious terminal, and the learning curve is real. If you have never used a trading
              terminal before, expect to feel overwhelmed for the first hour.
            </P>
          </Section>

          <Section id="inferno">
            <H2>Inferno Mode: the speed pitch</H2>
            <P>
              Inferno Mode is Padre's headline feature: it fires multiple simultaneous transactions
              and the fastest one wins, with fills cited around 300 milliseconds even in congestion.
              That is the core reason high-volume traders stay. Note the tradeoff flagged by rival
              comparisons: priority tips are charged on all sent transactions, not just the one
              that lands, so Inferno Mode costs more in tips during failed attempts.
            </P>
            <P>
              There is also anti-MEV protection and transaction simulation, though MEV protection is
              reportedly not available on Base. Solana-first optimization means the EVM chains get
              less love.
            </P>
          </Section>

          <Section id="discovery">
            <H2>Discovery: trending and the Trenches</H2>
            <P>
              The trending view ranks tokens by real activity across all four chains. This is your
              morning scan: what is moving, what is new, where the volume actually is. Forty seconds
              here replaces an hour of scrolling social media.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-trending.png"
              alt="Padre Terminal trending tokens list ranked by live activity"
              caption="Trending view: your morning scan across all four chains."
            />
            <P>
              The Trenches page is the bonding-curve view: live Pump.fun launches with Almost Bonded
              sorting and dev-signal and liquidity filters. The filters panel runs deeper than it
              looks. Filter by migration status, protocols, audit results, metrics, and socials. You
              can build a view that only shows migrated tokens with clean audits and real socials,
              for example. Most users never touch these. The ones who do stop drowning in noise.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-filters.png"
              alt="Padre Terminal filters panel with migration, audit, and social options"
              caption="Filters: build a view that cuts the noise."
            />
          </Section>

          <Section id="token-page">
            <H2>Token pages: audits, Jeet Grid, holder clusters</H2>
            <P>
              Click any token and you get the full terminal view: chart, orders, holders,
              transactions. The relationship mapping traces connections between wallets, showing
              proxy nodes and intermediary wallets. When a token's holders are all connected to each
              other, that is not a community, that is a coordinated group. This view exposes it in
              seconds.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-token-page.png"
              alt="Padre Terminal token page with chart, holders, and relationship mapping"
              caption="Token deep dive: chart, holders, and wallet relationships."
            />
            <P>
              The safety layer is Quick Intel: contract audits right on the token page, flagging
              freezable tokens, dev allocation, and revocable permissions before you spend a cent.
              The panel itself warns that audits are not 100% accurate, which is honest. No audit
              catches everything, but going in blind when this exists is a choice.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-audit.png"
              alt="Padre Terminal Quick Intel audit panel with contract risk flags"
              caption="Quick Intel: contract risk flags before you buy."
            />
            <P>
              The Jeet Grid visualizes early-holder behavior as color-coded squares: red for wallets
              that fully exited, blue for wallets that accumulated, purple and yellow for transfers
              and partial sells. It answers one question fast: is this dip a buying opportunity or
              the start of a slow dump?
            </P>
            <P>
              The clusters view breaks holders into groups: deployer address, market makers, hidden
              wallets, each with their percentage. If a couple of clusters control the supply, you
              are not trading a market, you are playing someone else's exit liquidity. Ten seconds
              here saves you from the most common memecoin death.
            </P>
          </Section>

          <Section id="wallet-tracking">
            <H2>Wallet tracking and the X Tracker</H2>
            <P>
              This is the feature that keeps people here. Follow thousands of wallets, and their
              buys and sells plot directly on your charts. See a wallet with a real track record
              accumulating? You see it live. The tracked wallets view ranks them by PnL, so you are
              following proven winners, not loud accounts. In memecoins, information is the entire
              edge, and this is the closest thing to seeing everyone's cards.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-wallet-tracking.png"
              alt="Padre Terminal wallet tracking view with tracked wallets ranked by PnL"
              caption="Wallet tracking: follow thousands of wallets, ranked by PnL."
            />
            <P>
              The X Tracker links X (Twitter) accounts to wallets, so when an influencer calls a
              token, you can check whether their wallet actually bought it or dumped into their own
              call. Import tracked accounts, build your list. This is how you separate signal from
              shill. If someone's calls do not match their chain activity, you unfollow with
              confidence.
            </P>
            <P>
              There is also an Alpha Tracker that aggregates calls from paid alpha groups onto the
              chart, so you can see group calls against price action in one view.
            </P>
          </Section>

          <Section id="portfolio">
            <H2>Portfolio and PnL</H2>
            <P>
              The portfolio view tracks everything across your wallets: balances, realized PnL, and
              performance charts. Clean, honest numbers with fees included, so you always know what
              you actually made versus what the chart says you made.
            </P>
            <Figure
              src="/images/tools/padre-review/padre-portfolio.png"
              alt="Padre Terminal portfolio view with balances and PnL performance chart"
              caption="Portfolio: balances and real PnL across all wallets."
            />
          </Section>

          <Section id="getting-started">
            <H2>How to get started, step by step</H2>
            <P>
              1. Open Padre through a referral link first, before anything else. Your cashback rate
              locks at signup, and this step cannot be done later. 2. Sign in with Telegram, Google,
              or X, or import an existing wallet. 3. Set your wallet password and export your
              private keys somewhere safe immediately. 4. Deposit the native gas token of the chain
              you will trade (SOL for Solana) before depositing anything else. 5. Configure your
              trade settings: set a snipe preset (slippage 15 to 25%, high priority fee, small size)
              and an established-token preset (low slippage, low tip). 6. Start with the trending
              view and the thirty-second audit ritual: liquidity, holders, clusters, Quick Intel.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Open Padre with up to 35% cashback</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="what-it-lost">
            <H2>What it lost after the acquisition</H2>
            <P>
              Two features were removed after Pump.fun took over: copy trading and automation. If
              you wanted to follow top traders automatically, that is gone, and Axiom and GMGN still
              have it. There are also no perps, no DCA, and no native mobile app. It is a web app
              you install as a PWA, with phone sign-in via QR code from your desktop session.
            </P>
            <P>
              The post-acquisition roadmap is also a genuine unknown. Pump.fun's backing brings
              ecosystem integration and deep pockets, but the docs are thinner than competitors and
              the future development direction is unclear. That is not a reason to avoid it, but it
              is a reason to keep your keys exported and your funds in a dedicated trading wallet.
            </P>
          </Section>

          <Section id="padre-token">
            <H2>The $PADRE token story, told honestly</H2>
            <P>
              $PADRE was an ERC-20 token on Ethereum with a 100 million max supply, raised in a
              token sale on Fjord Foundry in early 2024. Its utility was fee discounts, token-gated
              features, and holder rewards. Then the acquisition happened.
            </P>
            <P>
              On 24 October 2025, Pump.fun declared that PADRE would no longer have utility on the
              platform, with no further plans. The token crashed roughly 78 to 80 percent within
              hours. Holders called it a rug pull, alleged promised revenue sharing and buybacks
              that never materialized, and some claimed critics were banned from the Discord. Two
              days later, Pump.fun promised PUMP token compensation at the pre-announcement PADRE
              value, with a snapshot on 24 October 2025 and a claim deadline of 30 December 2025.
            </P>
            <P>
              The terminal itself kept running and kept its speed. But the lesson stands: do not buy
              $PADRE expecting perks, discounts, or a comeback. As a utility token it is effectively
              dead, down around 97% year over year. Any review that presents PADRE holder benefits
              as live is lying to you. This one is not.
            </P>
          </Section>

          <Section id="comparison">
            <H2>Padre vs Axiom vs GMGN vs Photon vs BullX</H2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Feature</th>
                    <th className="px-4 py-3 font-black text-slate-950">Padre</th>
                    <th className="px-4 py-3 font-black text-slate-950">Axiom</th>
                    <th className="px-4 py-3 font-black text-slate-950">GMGN</th>
                    <th className="px-4 py-3 font-black text-slate-950">Photon / BullX</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Base fee</td>
                    <td className="px-4 py-3">1% flat</td>
                    <td className="px-4 py-3">~1%, tiers to ~0.75%</td>
                    <td className="px-4 py-3">1.5%</td>
                    <td className="px-4 py-3">1%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Cashback</td>
                    <td className="px-4 py-3">Up to 35% in SOL via referral</td>
                    <td className="px-4 py-3">Volume tiers + referral discount</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Chains</td>
                    <td className="px-4 py-3">SOL, ETH, Base, BNB</td>
                    <td className="px-4 py-3">SOL, ETH, BNB</td>
                    <td className="px-4 py-3">Multi-chain</td>
                    <td className="px-4 py-3">Multi-chain</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Copy trading</td>
                    <td className="px-4 py-3">Removed post-acquisition</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes (BullX)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Perps</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Yes (Hyperliquid)</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">No</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Speed claim</td>
                    <td className="px-4 py-3">Inferno Mode, ~300ms</td>
                    <td className="px-4 py-3">Sub-second, volume leader</td>
                    <td className="px-4 py-3">Fast</td>
                    <td className="px-4 py-3">Fast</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Backing</td>
                    <td className="px-4 py-3">Owned by Pump.fun</td>
                    <td className="px-4 py-3">Y Combinator-backed</td>
                    <td className="px-4 py-3">Independent</td>
                    <td className="px-4 py-3">Independent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Padre's edge is speed plus real SOL cashback. Axiom is the volume leader with deeper
              features like perps and copy trading. GMGN wins on smart-money analytics but charges
              the highest fee at 1.5%. Photon and BullX are solid 1% alternatives without cashback.
              Pick based on what you actually do: sniping speed (Padre), feature depth (Axiom), or
              research analytics (GMGN).
            </P>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Inferno Mode execution, ~300ms fills in congestion</li>
                  <li>Up to 35% cashback in SOL, real money not points</li>
                  <li>Deep order types: trailing stops, position-based exits</li>
                  <li>Wallet tracking on thousands of wallets, plotted on charts</li>
                  <li>EVA audits, Jeet Grid, holder clusters, X Tracker</li>
                  <li>Self-custodial with exportable keys</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>1% flat fee is high vs Axiom's effective rate</li>
                  <li>Copy trading and automation removed post-acquisition</li>
                  <li>Cashback rate locked at signup, no second chances</li>
                  <li>Steep learning curve for beginners</li>
                  <li>$PADRE token utility killed, trust dent from 2025</li>
                  <li>No perps, no DCA, no native mobile app</li>
                  <li>MEV protection gaps on Base</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              Padre is a serious terminal for serious traders, not a beginner's first app. The speed
              is the pitch: Inferno Mode around 300ms fills when congestion kills everything else.
              The SOL cashback is real money that narrows the 1% fee gap if you trade size, but only
              if you sign up through a referral link, because that rate locks forever. The analytics
              stack, wallet tracking, EVA audits, Jeet Grid, holder clusters, is genuinely deep.
            </P>
            <P>
              The honest downsides: the fee is high next to Axiom's effective rate, copy trading is
              gone, the learning curve is steep, and the $PADRE token saga left a trust dent that
              Pump.fun's ownership has not fully repaired. If you are a high-volume Solana trench
              trader who values execution speed above everything, it belongs on your shortlist. If
              you are new, learn spot trading basics on something simpler first.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try Padre Terminal</PrimaryAffiliateButton>
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
