import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/ostium-review`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "Ostium Review 2026: RWA Perps, Fees, Pros and Cons",
  description:
    "October 2026 Ostium review: the Arbitrum perp DEX for gold, oil, forex, indices, and stocks. Up to 200x leverage, no KYC, no close fees, plus the honest story of the July 2026 $23.75M vault exploit and its recovery.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ostium Review 2026: RWA Perps, Fees, Pros and Cons",
    description:
      "Ostium brings real-world assets on-chain as perpetuals: forex, commodities, indices, stocks, and crypto, all from your own wallet. The honest breakdown.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/ostium-review/ostium-review.png`,
        width: 1805,
        height: 668,
        alt: "Ostium decentralized trading platform for real world asset perpetuals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostium Review 2026",
    description: "Ostium review: RWA perps on Arbitrum, up to 200x leverage, no KYC. Fees, pros, cons.",
    images: [`${SITE_URL}/images/tools/ostium-review/ostium-review.png`],
  },
};

const faqItems = [
  {
    question: "What is Ostium?",
    answer:
      "Ostium is a decentralized perpetual exchange on Arbitrum, an Ethereum Layer 2. It specializes in real-world asset (RWA) perpetuals: synthetic perpetual contracts that track the prices of forex, commodities like gold and oil, stock indices, and individual stocks, alongside crypto perps. You trade directly from your own wallet with no KYC and no minimum deposit.",
  },
  {
    question: "How does Ostium offer real-world assets on-chain?",
    answer:
      "Ostium does not tokenize the underlying assets or take delivery. It offers synthetic perpetual contracts that mirror the price of off-chain assets. Pricing comes from two oracle systems: Chainlink Data Streams for crypto (sub-second prices) and a custom Stork-based pull oracle that aggregates data from multiple real-world exchanges for forex, commodities, equities, and indices, handling market hours, price gaps at opens, and futures contract rolls.",
  },
  {
    question: "What are Ostium's fees?",
    answer:
      "Fees vary by market class. Crypto perps charge 0.03% maker and 0.10% taker to open; forex charges around 0.03%; indices around 0.05% taker; commodities range from 0.08% to 0.20% depending on the symbol. There are no closing fees. Crypto positions also pay zero-sum funding, while non-crypto positions pay rollover fees to the protocol instead. Withdrawals only cost the blockchain network fee.",
  },
  {
    question: "What is the maximum leverage on Ostium?",
    answer:
      "Up to 200x on select forex and commodities pairs, 50x on equities, and up to 100x on crypto. High leverage amplifies both gains and losses: a small adverse move can wipe out your collateral. Beginners should start with low leverage and size positions they can afford to lose.",
  },
  {
    question: "Is Ostium self-custodial and KYC-free?",
    answer:
      "Yes. Ostium is non-custodial: margin sits on-chain, positions execute through smart contracts, and there is no sign-up wall or identity check. You can even sign in with an email address and trade without holding ETH for gas, since gas is sponsored for most trades. You remain in full control of your funds throughout.",
  },
  {
    question: "What is the OLP vault, and is it safe to deposit now?",
    answer:
      "OLP (Ostium Liquidity Provider) vault is the protocol's counterparty mechanism: liquidity providers deposit USDC, receive OLP tokens for their share, and earn from opening fees, rollover fees, and liquidation rewards. But the OLP vault was drained in the July 2026 oracle exploit (about $23.75 million USDC), and it is impaired. As of October 2026, new OLP deposits remain paused and a recovery plan is still playing out: smaller LPs received a flat $1,000 payment each, while 345 larger LPs are choosing between a share of recovered funds plus a slice of future protocol revenue, or converting part of their loss into equity in Ostium Labs. Only a small fraction of the stolen funds has been recovered. Do not deposit into OLP until Ostium confirms the vault is healthy again.",
  },
  {
    question: "Is there a minimum deposit on Ostium?",
    answer:
      "No. Ostium has no minimum deposit requirement and no sign-up hurdles, so you can start with a small amount, test strategies, and learn the platform before committing real size.",
  },
  {
    question: "Is Ostium safe? Was it hacked?",
    answer:
      "Ostium was hacked on 15 July 2026. An attacker compromised an oracle signer key and pushed fake BTC price reports (pricing Bitcoin at $5,000 against a real price near $60,000) through a registered PriceUpKeep forwarder, manufacturing profitable trades that drained 23,752,746 USDC, about $23.75 million, from the OLP liquidity vault in roughly five minutes. Ostium's post-mortem blamed unauthorized access to off-chain signing infrastructure, not a flaw in the audited smart-contract code. Trader collateral sits in a separate contract and was untouched. Trading paused the same day and resumed in stages on 23 July 2026 after the team migrated to new systems. The honest read: the trading engine worked as designed, but the off-chain oracle plumbing was the weak point, and LPs took the loss. Verify the current status of the OLP vault and the recovery plan on Ostium's official channels before depositing anything.",
  },
  {
    question: "Who should use Ostium, and who should skip it?",
    answer:
      "Ostium suits experienced traders who want on-chain exposure to macro markets, gold, oil, forex, indices, stocks, without a broker account, and who are comfortable with wallets, leverage, and self-custody. Skip it if you are a complete beginner to leveraged trading, if you need a traditional broker with customer support and dispute resolution, or if you cannot handle the risk of liquidation at high leverage. Note that as of October 2026 Ostium has repositioned toward institutional and professional clients with a new API product (Gateway), so confirm the retail trading app is still available in your region before signing up.",
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

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <p className="font-black text-amber-900">{title}</p>
      <div className="mt-2 text-sm leading-7 text-amber-950/80">{children}</div>
    </div>
  );
}

export default function OstiumReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ostium Review 2026: RWA Perps, Fees, Pros and Cons",
    description:
      "October 2026 Ostium review: the Arbitrum perpetual DEX for real-world assets, gold, oil, forex, indices, stocks, and crypto, with up to 200x leverage, no KYC, and no closing fees. Covers the July 2026 $23.75M vault exploit and the ongoing recovery.",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · perpetual DEXs</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Ostium review 2026: gold, oil, forex, and stocks, all on-chain
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Researched for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Ostium is a decentralized perpetual exchange on Arbitrum that lets you trade
              real-world assets from your own wallet: forex, gold, oil, indices, stocks, and
              crypto, with up to 200x leverage, no KYC, and no closing fees. Here is the honest
              breakdown, fees, features, pros, cons, and verdict.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4 text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">Risk warning:</strong> leveraged perpetual trading
          can liquidate your position fast. High leverage is for experienced traders only.
          Educational content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What Ostium is</H2>
            <Callout title="Security update: the July 2026 exploit (checked October 2026)">
              <p>
                On 15 July 2026, Ostium lost about $23.75 million USDC from its OLP liquidity
                vault when an attacker used a compromised oracle signer key to push fake price
                reports through the protocol&apos;s own price-feed infrastructure. Trader
                collateral was not affected, and trading resumed in stages from 23 July. The OLP
                vault, however, remains impaired with a recovery plan still underway. This
                review reflects that reality: the trading product is real, but the incident is
                part of the story.
              </p>
            </Callout>
            <P>
              Ostium is a decentralized perpetual exchange built on Arbitrum, an Ethereum Layer 2
              known for speed and low fees. Launched in October 2024 by Kaledora Kiernan-Linn and
              Marco Antonio Ribeiro, it specializes in something most crypto exchanges cannot do: trade
              real-world assets, gold, oil, forex pairs, stock indices, and individual stocks,
              entirely on-chain as perpetual contracts.
            </P>
            <Figure
              src="/images/tools/ostium-review/ostium-review.png"
              alt="Ostium decentralized trading platform for real world asset perpetuals"
              caption="Ostium: real-world markets as on-chain perpetuals on Arbitrum."
              width={1805}
              height={668}
            />
            <P>
              Unlike tokenization projects that mint backed tokens for each asset, Ostium mirrors
              the price movements of real assets through synthetic perpetual contracts. There is
              no physical delivery and no wrapped token to bridge: you get price exposure, long
              or short, settled in USDC. The platform had grown fast before the July 2026
              exploit, with over $25 billion in cumulative volume, around $60 million in total
              value locked, and daily perp volume frequently exceeding $200 million by early
              2026. Those are pre-exploit figures: the vault attack and the company&apos;s
              October 2026 pivot to an institutional API product (Gateway) mean you should check
              a live dashboard for current numbers.
            </P>
          </Section>

          <Section id="assets">
            <H2>What you can trade</H2>
            <P>
              Ostium covers five asset classes in one interface:
            </P>
            <ul className="mt-4 space-y-4 text-base leading-8 text-slate-600">
              <li>
                <strong className="text-slate-950">Commodities.</strong> Gold (XAU), silver (XAG),
                crude oil (CL), copper (HG), platinum, and palladium. Gold is the headline market
                and historically the bulk of the platform&apos;s open interest.
              </li>
              <li>
                <strong className="text-slate-950">Forex.</strong> Major pairs like EUR/USD and
                USD/JPY, plus crosses like USD/MXN, tradeable with the highest leverage on the
                platform.
              </li>
              <li>
                <strong className="text-slate-950">Indices.</strong> S&amp;P 500, NASDAQ, Nikkei
                225, Hang Seng, and Dow Jones.
              </li>
              <li>
                <strong className="text-slate-950">Equities.</strong> Select US stocks such as
                NVDA, TSLA, MSFT, and AAPL, with up to 50x leverage.
              </li>
              <li>
                <strong className="text-slate-950">Crypto.</strong> BTC, ETH, SOL, and others,
                with up to 100x leverage.
              </li>
            </ul>
            <P>
              The ability to hedge or speculate on gold and oil directly from a crypto wallet,
              without a broker account, is Ostium&apos;s whole pitch. For a crypto-native trader
              who also watches macro markets, that is genuinely new territory.
            </P>
          </Section>

          <Section id="oracles">
            <H2>How the pricing works (and why it matters)</H2>
            <P>
              Pricing real-world assets on a blockchain is hard: traditional markets do not trade
              24/7, futures contracts expire, and prices gap at the open. Ostium runs two
              separate oracle systems to handle this. Crypto assets use Chainlink Data Streams,
              which deliver sub-second prices and are standard across institutional DeFi. For
              real-world assets, the team built a custom pull-based oracle on the Stork Network
              that aggregates data from multiple licensed exchange sources and explicitly handles
              market hours, opening gaps, and contract expirations.
            </P>
            <P>
              A Gelato-powered keeper system monitors on-chain price requests, delivers prices,
              and executes conditional orders: stop-losses, take-profits, limit orders, and
              liquidations. The architecture is deliberately decentralized across partners rather
              than run by the team alone. If you trade RWAs here, you are trusting these oracles
              to price assets that blockchains were never designed to price, so understanding
              this plumbing is part of the risk.
            </P>
          </Section>

          <Section id="leverage">
            <H2>Leverage: up to 200x, handle with care</H2>
            <P>
              Ostium&apos;s headline number is 200x leverage on select forex and commodities
              pairs, with 50x on equities and up to 100x on crypto. With $1,000 at 100x, you
              control a $100,000 position. When the market moves your way, the returns are
              dramatic. When it moves against you, a 0.5% move wipes the position out.
            </P>
            <Callout title="Beginner warning on leverage">
              <p>
                High leverage is the fastest way beginners lose everything in perps. At 200x, a
                tiny adverse move liquidates you, and funding or rollover fees eat small accounts
                overnight. If you are new to Ostium, start with 2x to 5x, small size, and a
                stop-loss on every trade until you understand how liquidations work.
              </p>
            </Callout>
          </Section>

          <Section id="fees">
            <H2>Fees: the honest breakdown</H2>
            <P>
              Ostium&apos;s fee structure is genuinely transparent and competitive: you pay to
              open a position, and closing costs nothing. Here is how it breaks down by market
              class, based on the platform&apos;s published fee schedule (confirm in-app before
              trading, since terms can change):
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Market class</th>
                    <th className="px-4 py-3 font-black text-slate-950">Open fee</th>
                    <th className="px-4 py-3 font-black text-slate-950">Close fee</th>
                    <th className="px-4 py-3 font-black text-slate-950">Ongoing</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Crypto</td>
                    <td className="px-4 py-3">0.03% maker / 0.10% taker</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Zero-sum funding</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Forex</td>
                    <td className="px-4 py-3">0.03% (USDMXN 0.05%)</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Rollover to protocol</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Indices</td>
                    <td className="px-4 py-3">0.05% taker</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Rollover to protocol</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Commodities</td>
                    <td className="px-4 py-3">0.08% to 0.20% by symbol</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Rollover to protocol</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Withdrawal</td>
                    <td className="px-4 py-3" colSpan={3}>Blockchain network fee only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Two things to understand: funding on crypto works like standard perp funding (longs
              pay shorts or vice versa, zero-sum), while non-crypto markets charge rollover fees
              paid to the protocol instead. Holding a gold long over the weekend costs you
              rollover. Also, maker orders reduce open interest imbalance and get the better rate,
              which rewards limit-order traders.
            </P>
          </Section>

          <Section id="self-custody">
            <H2>Self-custody, no KYC, no minimums</H2>
            <P>
              Ostium never holds your funds. Margin sits on-chain, positions execute through
              smart contracts, and you can move your capital or change strategy instantly without
              waiting for approval or hitting withdrawal limits. There is no sign-up wall, no
              identity check, and no minimum deposit: you can start with a tiny amount and learn
              the ropes.
            </P>
            <Figure
              src="/images/tools/ostium-review/ostium-account-funding.png"
              alt="Ostium account funding options with deposit methods"
              caption="Funding: deposits settle on-chain with no platform minimums."
              width={1024}
              height={571}
            />
            <P>
              Deposits and withdrawals are effectively instant, and you can fund via crypto or
              through fiat on-ramps like cards and bank transfers. One nice touch: gas is
              sponsored for most trades, so you can sign in with an email address and start
              trading without holding ETH for gas, which removes a classic onboarding headache.
            </P>
          </Section>

          <Section id="tools">
            <H2>Order types and trading tools</H2>
            <P>
              Ostium ships a full order suite: market, limit, stop, and trailing take-profit and
              stop-loss orders, with real-time PnL tracking and live data on trading volume and
              open interest for every pair. The interface is clean and beginner-friendly by perp
              DEX standards, though DeFi concepts like self-custody and funding rates still have
              a learning curve if you come from traditional brokers.
            </P>
            <Figure
              src="/images/tools/ostium-review/ostium-strategies.png"
              alt="Ostium trading strategies and automation options overview"
              caption="Strategies and automation: set conditions and let the keepers execute."
              width={1024}
              height={836}
            />
            <P>
              For automation, Ostium offers strategy tooling plus a Telegram bot with real-time
              trade automation and position insights. You can define entry and exit conditions
              and let the keeper system execute them, which is useful in fast markets and for
              traders who cannot watch charts all day.
            </P>
          </Section>

          <Section id="olp">
            <H2>The OLP vault and points program</H2>
            <P>
              The OLP vault is the counterparty to every trade on the platform: when you open a
              position, the vault is the house. Liquidity providers deposit USDC, receive OLP
              tokens for their share, and earn from opening fees, rollover fees, and liquidation
              rewards. In periods when traders lose, LPs earn more; in sustained trader-profit
              periods, LPs absorb outflows. Before the July 2026 exploit, the vault had
              historically paid strong APY, reported around 53% in early 2026, but that was a
              risk premium, not a savings rate.
            </P>
            <P>
              Then came 15 July 2026: an attacker drained roughly $23.75 million USDC from the
              OLP vault using a compromised oracle signer key. New OLP deposits remain paused,
              and a recovery plan is still playing out as of October 2026. Only a small share
              of the stolen funds (about 2.7%) has been recovered, smaller LPs received a flat
              $1,000 each, and 345 larger LPs are choosing between a pro-rata share of
              recovered funds plus a slice of future protocol revenue, or converting part of
              their loss into equity in Ostium Labs. A related $15 million loan dispute reached
              a New York federal court in September 2026. Bottom line: do not deposit into the
              OLP vault until Ostium confirms it is whole again.
            </P>
            <P>
              Ostium also runs a points program that rewards trading volume and OLP deposits
              with potential future airdrop eligibility. Points are a nice bonus, not a reason to
              overtrade: farming volume for points while paying fees and funding is a losing game
              unless you were trading anyway.
            </P>
          </Section>

          <Section id="community">
            <H2>Community and support</H2>
            <P>
              Ostium has an active community on Telegram and Discord, where traders share ideas
              and help newcomers navigate the platform, plus regular blog updates and
              announcements. The honest caveat: direct customer support does not match what a
              traditional broker offers. If something goes wrong with a position, you are largely
              relying on community knowledge and your own understanding of the docs. That is the
              standard DeFi tradeoff, and you should be comfortable with it before trading size.
            </P>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>RWA perps: forex, gold, oil, indices, stocks on-chain</li>
                  <li>Up to 200x leverage on select pairs</li>
                  <li>No KYC, no sign-up wall, no minimum deposit</li>
                  <li>No closing fees; low, transparent opening fees</li>
                  <li>Fully self-custodial with on-chain settlement</li>
                  <li>Dual oracle system built for real-world market quirks</li>
                  <li>Gas sponsored for most trades</li>
                  <li>OLP vault for liquidity providers</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>High leverage can liquidate beginners in minutes</li>
                  <li>Limited crypto pair selection vs crypto-native perps DEXs</li>
                  <li>Rollover and funding fees eat slow positions</li>
                  <li>No traditional broker support or dispute resolution</li>
                  <li>Smart contract and oracle risk on every trade; the July 2026 exploit ($23.75M) showed the off-chain oracle plumbing was the weak point</li>
                  <li>OLP vault impaired and new LP deposits paused; recovery plan still ongoing</li>
                  <li>Company pivoting to an institutional API product (Gateway); retail availability may change</li>
                  <li>Synthetic exposure, not ownership of the underlying asset</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              Ostium is doing something genuinely interesting: bringing gold, oil, forex,
              indices, and stocks into a wallet-native perpetual market with no broker, no KYC,
              and no minimums. The fee structure is transparent and fair, the oracle design takes
              real-world market quirks seriously, and the no-closing-fee model is trader-friendly.
              For an experienced trader who wants macro exposure without TradFi onboarding, it is
              one of the most compelling RWA perp venues live today.
            </P>
            <P>
              The honest downsides: leverage this high is a liquidation machine for beginners,
              crypto pair coverage is thinner than dedicated crypto perp DEXs, and you trade the
              broker safety net for self-custody. And the July 2026 exploit is now the
              elephant in the room: the team handled the aftermath transparently (published
              post-mortem, trader collateral untouched, trading resumed in a week), but LPs
              lost $23.75 million to a compromised oracle signer, and the vault is still not
              whole. Start small, use low leverage, put a stop-loss on everything, treat the
              points program as a bonus not a strategy, and do not touch the OLP vault until
              recovery is confirmed. If that sounds like your kind of trading, Ostium is worth
              your time, with eyes open.
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
