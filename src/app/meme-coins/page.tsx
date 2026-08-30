import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meme Coin Research Hub | Tools, Risks, and Beginner Workflow",
  description:
    "Learn a practical meme-coin research workflow. Understand trading terminals, launchpads, social discovery tools, charts, explorers, wallet checks, liquidity risks, and red flags before you trade.",
  alternates: {
    canonical: "/meme-coins",
  },
  openGraph: {
    title: "Meme Coin Research Hub",
    description:
      "A beginner-friendly process for researching meme coins before connecting a wallet or signing a trade.",
    type: "website",
    url: "/meme-coins",
  },
};

const toolCategories = [
  {
    title: "Trading terminals",
    description:
      "Trading terminals combine discovery, charts, wallet tracking, holder data, alerts, and execution controls. Use them to organize research, not as token-safety scanners.",
    examples: "Examples: GMGN, Axiom, Padre",
  },
  {
    title: "Social discovery tools",
    description:
      "Social feeds, trader profiles, leaderboards, and alerts can surface ideas. Treat activity and displayed P&L as research context because timing, liquidity, and incentives may not be visible.",
    examples: "Example: FOMO",
  },
  {
    title: "Launchpads",
    description:
      "Launchpads reduce the technical steps required to create or discover a token. They may make launching easier, but they do not establish that a token has sustainable liquidity, demand, or safe contract settings.",
    examples: "Examples: Pump.fun, Bags.fm, Four.meme, SunPump",
  },
  {
    title: "Charts and explorers",
    description:
      "Charts and blockchain explorers help validate addresses, transactions, holder concentration, liquidity activity, approvals, and wallet behavior. They are essential checks before you trust a ticker symbol or social post.",
    examples: "Examples: DexScreener, GeckoTerminal, Solscan, Etherscan",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Identify the exact token contract",
    description:
      "Do not rely only on a token name, ticker, logo, Telegram post, or influencer link. Copy the contract address from a trusted source and compare it across an explorer, charting tool, and the token’s official channels.",
  },
  {
    number: "02",
    title: "Check liquidity and realistic exit conditions",
    description:
      "Look at available liquidity, trade size, price impact, spread, route, and recent transaction activity. A chart can rise quickly while a meaningful sell order still causes major slippage.",
  },
  {
    number: "03",
    title: "Review holder and wallet concentration",
    description:
      "Check whether a small number of wallets controls a large share of supply. Research creator, deployer, early buyer, and large-holder behavior instead of treating a holder count alone as proof of decentralization.",
  },
  {
    number: "04",
    title: "Understand the transaction before signing",
    description:
      "Read the wallet prompt. Confirm the destination, token approval, amount, network, route, slippage, and fees. Do not sign a transaction simply because it appears inside a familiar dashboard.",
  },
  {
    number: "05",
    title: "Set risk and exit rules before entering",
    description:
      "Decide in advance what size you can afford to lose, what would invalidate the idea, and how you would exit if liquidity changes. Avoid treating fast-moving social activity as a substitute for a plan.",
  },
];

const redFlags = [
  "You cannot independently confirm the exact token contract.",
  "Liquidity appears too shallow for the position size you are considering.",
  "A small group of wallets controls a large share of the supply.",
  "The creator, deployer, or early wallets show repeated rapid selling.",
  "The trade depends mainly on urgency, a leaderboard, or a social-media claim.",
  "You do not understand the route, slippage, token approval, or wallet prompt.",
  "You have no realistic exit condition if the idea is wrong.",
];

const faqItems = [
  {
    question: "What is the safest way to research a meme coin?",
    answer:
      "There is no risk-free way to trade meme coins. A more careful process starts by verifying the exact contract address, checking liquidity and realistic price impact, reviewing holder concentration and wallet activity, and understanding the transaction before signing. If any part is unclear, the safer decision may be to avoid the trade.",
  },
  {
    question: "Can a trading terminal tell me whether a meme coin is safe?",
    answer:
      "No. A terminal can surface charts, wallet activity, holders, liquidity information, and execution settings. It cannot guarantee that a token is legitimate, liquid enough for your trade size, sellable later, or appropriate for your risk tolerance.",
  },
  {
    question: "Why is the contract address more important than the ticker?",
    answer:
      "Token names, tickers, logos, and social posts can be copied. The contract address identifies the specific on-chain token you are reviewing. Verify it independently before using a chart, terminal, launchpad, or swap interface.",
  },
  {
    question: "Does locked liquidity guarantee that a token is safe?",
    answer:
      "No. Locked liquidity may be one data point, but it does not eliminate risks involving holder concentration, creator behavior, token permissions, supply allocation, impersonation, market manipulation, or the ability to exit a position at a reasonable price.",
  },
  {
    question: "Should I copy successful wallets or leaderboard traders?",
    answer:
      "Treat displayed wallets and leaderboards as research prompts, not trading signals. You may not know when the wallet entered, whether it holds other positions, whether it can exit, whether it uses multiple addresses, or whether incentives affect the displayed activity.",
  },
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-black uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </p>
  );
}

function PageHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-slate-950 no-underline"
          aria-label="CryptosBeginner home"
        >
          Cryptos<span className="text-indigo-600">Beginner</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          <Link
            href="/crypto-research"
            className="text-sm font-bold text-slate-700 no-underline transition hover:text-indigo-600"
          >
            Compare
          </Link>

          <Link
            href="/crypto-research"
            className="text-sm font-bold text-slate-700 no-underline transition hover:text-indigo-600"
          >
            Research
          </Link>

          <Link
            href="/learn"
            className="text-sm font-bold text-slate-700 no-underline transition hover:text-indigo-600"
          >
            Learn
          </Link>

          <Link
            href="/regions"
            className="text-sm font-bold text-slate-700 no-underline transition hover:text-indigo-600"
          >
            Regions
          </Link>

          <Link
            href="/tools"
            className="text-sm font-bold text-slate-700 no-underline transition hover:text-indigo-600"
          >
            Tools
          </Link>

          <Link
            href="/crypto-cards"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-indigo-700"
          >
            Crypto Cards
          </Link>
        </nav>

        <Link
          href="/crypto-cards"
          className="inline-flex min-h-10 items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-black text-white no-underline lg:hidden"
        >
          Cards
        </Link>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-14 text-slate-300 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="max-w-sm">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white no-underline"
            aria-label="CryptosBeginner home"
          >
            Cryptos<span className="text-indigo-400">Beginner</span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Beginner-friendly crypto education, research frameworks, tool
            guides, and practical safety information.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            Educational content only. Nothing on this website is investment,
            legal, tax, or financial advice.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
            Research
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/crypto-research"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Crypto research
              </Link>
            </li>
            <li>
              <Link
                href="/meme-coins"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Meme coin research
              </Link>
            </li>
            <li>
              <Link
                href="/exchanges"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Exchange reviews
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
            Learn
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/learn"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Learn crypto
              </Link>
            </li>
            <li>
              <Link
                href="/learn/gmgn-ai-agent"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                GMGN AI Agent guide
              </Link>
            </li>
            <li>
              <Link
                href="/wallets"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Wallet guides
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
            Site information
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/about"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/methodology"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Methodology
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-400 no-underline transition hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} CryptosBeginner. All rights reserved.
      </div>
    </footer>
  );
}

export default function MemeCoinsPage() {
  return (
    <>
      <PageHeader />

      <main className="overflow-hidden bg-white text-slate-950">
        <Section className="bg-[#020617] text-white">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="max-w-3xl">
              <SectionLabel className="text-emerald-300">
                Meme Coins · Beginner Research Hub
              </SectionLabel>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Research Meme Coins Before You Trade Them
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200 sm:text-xl">
                Meme-coin tools can make discovery and execution faster. They
                cannot prove that a token is legitimate, liquid, sellable, or
                suitable for your risk tolerance. Start with a repeatable
                research process before you connect a wallet or sign a trade.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#research-workflow"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-black text-slate-950 no-underline transition hover:bg-emerald-300"
                >
                  Start the research workflow
                </a>

                <a
                  href="#tool-types"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-base font-black text-white no-underline transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Understand the tools
                </a>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400">
                Educational content only. Meme coins are highly speculative and
                can lose value rapidly. This page does not provide token picks,
                trading signals, or profit promises.
              </p>
            </div>

            <figure className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/30">
              <Image
                src="/images/meme-coins-hero.png"
                alt="Illustration of a meme coin market dashboard, token launchpad, charts, and community activity"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />

              <figcaption className="border-t border-slate-700 px-5 py-4 text-base leading-7 text-slate-300">
                Research tools can help organize market information. They do
                not replace contract checks, liquidity analysis, or a risk plan.
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section id="tool-types" className="bg-slate-50">
          <div className="max-w-4xl">
            <SectionLabel className="text-emerald-700">
              Start with the job
            </SectionLabel>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              A terminal, launchpad, chart, and explorer do different things
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-700">
              Most beginner mistakes start with using the wrong tool for the
              wrong question. A trading terminal may help you monitor and route
              a transaction. A launchpad may help create or discover a token. A
              charting tool or blockchain explorer can help verify activity.
              None of these tools independently validates a meme coin.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {toolCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-black tracking-tight">
                  {category.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {category.description}
                </p>

                <p className="mt-6 font-bold text-emerald-800">
                  {category.examples}
                </p>
              </article>
            ))}
          </div>

          <figure className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/meme-coin-tools-collage.png"
              alt="A collage illustrating meme coin trading terminals, social discovery tools, launchpads, charts, and blockchain explorers"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />

            <figcaption className="px-6 py-5 text-base leading-7 text-slate-600">
              Better research usually combines several sources: a verified
              contract address, an explorer, a liquidity and chart view, and a
              careful reading of the transaction you are about to sign.
            </figcaption>
          </figure>
        </Section>

        <Section id="research-workflow" className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <SectionLabel className="text-indigo-700">
                A repeatable process
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                A five-step meme-coin research workflow
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-700">
                You do not need to make every decision quickly. A disciplined
                process creates opportunities to stop before a small mistake
                turns into a wallet, approval, or liquidity problem.
              </p>

              <div className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-700">
                  The key principle
                </p>

                <p className="mt-3 text-lg font-bold leading-8 text-slate-900">
                  If you cannot verify the address, understand the transaction,
                  or explain how you would exit, you do not have enough
                  information to trade.
                </p>
              </div>
            </div>

            <ol className="space-y-5">
              {workflowSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-[auto_1fr]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black tracking-wider text-emerald-300">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-base leading-8 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <SectionLabel className="text-emerald-700">
                New tutorial
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                GMGN AI Agent: research wallets and tokens more carefully
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-700">
                Learn how GMGN Skills and the Agent API work, how query access
                differs from signed trading access, how to protect API
                credentials, and how to use AI-assisted research without
                handing over control of your funds.
              </p>
            </div>

            <Link
              href="/learn/gmgn-ai-agent"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-black text-white no-underline transition hover:bg-emerald-700"
            >
              Read the GMGN AI Agent guide →
            </Link>
          </div>
        </Section>

        <Section className="bg-[#fff5f3]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="max-w-xl">
              <SectionLabel className="text-rose-700">
                Reasons to pause
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Red flags that deserve more research or no trade
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-700">
                These signals do not automatically prove fraud. They do mean
                you should slow down, verify more information, use less
                exposure, or avoid the trade altogether.
              </p>
            </div>

            <ul className="space-y-4">
              {redFlags.map((flag) => (
                <li
                  key={flag}
                  className="rounded-2xl border border-rose-200 bg-white px-6 py-5 text-lg leading-8 text-slate-800 shadow-sm"
                >
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section className="bg-slate-950 text-white">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel className="text-emerald-300">
                Before you sign
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Wallet safety is part of meme-coin research
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-200">
                A correct token address is not enough if a wallet prompt
                requests an approval or transaction you do not understand.
                Review the network, asset, allowance, recipient, route, fees,
                and slippage before confirming anything.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">
                Quick wallet checklist
              </p>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-200">
                <li>Confirm you are on the intended network.</li>
                <li>Verify the token contract, not only the ticker or logo.</li>
                <li>
                  Read token approval requests and avoid unlimited approvals
                  when unnecessary.
                </li>
                <li>
                  Check the transaction destination, amount, route, and fees.
                </li>
                <li>
                  Use a separate wallet for experimentation where appropriate.
                </li>
                <li>Never share a seed phrase, private key, or API secret.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section className="bg-white">
          <div className="mx-auto max-w-4xl">
            <SectionLabel className="text-indigo-700">
              Common questions
            </SectionLabel>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Meme-coin research FAQ
            </h2>

            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"
                >
                  <summary className="cursor-pointer text-xl font-black text-slate-950">
                    {item.question}
                  </summary>

                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section className="border-t border-slate-200 bg-slate-50">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
            <SectionLabel className="text-slate-600">
              How CryptosBeginner reviews tools
            </SectionLabel>

            <p className="mt-4 max-w-5xl text-lg leading-9 text-slate-700">
              We separate visible product features, provider claims, published
              fees, and editorial interpretation. Platform pages may use
              official documentation, product screenshots, supplied videos, and
              on-chain research references. Features, fees, availability, and
              legal terms can change, so verify the provider before connecting a
              wallet or signing a transaction.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/methodology"
                className="inline-flex font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 transition hover:text-indigo-900"
              >
                Read our editorial methodology →
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex font-bold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
              >
                Read the financial disclaimer →
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <PageFooter />
    </>
  );
}