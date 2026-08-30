import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_PATH = "/learn/gmgn-ai-agent";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const UPDATED = "2026-08-30";
const GMGN_AFFILIATE = "https://gmgn.ai/r/XPS1eXg4";
const GMGN_DOCS = "https://docs.gmgn.ai/index/gmgn-agent-api";
const GMGN_KEYS = "https://docs.gmgn.ai/index/generate-public-key";
const GMGN_SKILLS = "https://github.com/GMGNAI/gmgn-skills";

export const metadata: Metadata = {
  title: "GMGN AI Agent Tutorial – Research Meme Coins With Natural Language",
  description:
    "Learn how to use the GMGN AI Agent and Skills to research meme coins, track wallets, and query on-chain data with natural language. Educational guide, not financial advice.",
  keywords:
    "GMGN AI Agent, GMGN Skills, meme coin research, wallet tracker, Solana trending tokens, smart money, KOL trades, gmgn-cli",
  authors: [{ name: "Crypto's Beginner" }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "GMGN AI Agent Tutorial",
    description:
      "Step-by-step guide to GMGN Skills: query tokens, wallets, and trending meme coins with an AI agent.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMGN AI Agent Tutorial",
    description:
      "Research meme coins and wallets with GMGN Skills using natural language.",
  },
};

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You install GMGN Skills, add an API key, then talk to your AI client in plain English. Coding is optional and only needed if you want the CLI yourself.",
  },
  {
    q: "Is the GMGN private key a wallet seed?",
    a: "No. GMGN_PRIVATE_KEY is a request-signing key for API calls. It is not a blockchain wallet seed phrase and does not directly hold coins. Still keep it secret, because a leaked signing key can let someone send authenticated API requests as you.",
  },
  {
    q: "Which chains work today?",
    a: "Query and trading coverage is strongest on Solana, BSC, and Base. ETH and extra chains appear in the Skills repo, but GMGN still lists some as in progress. Always confirm the chain in the official docs before you trade.",
  },
  {
    q: "Can IPv6 users connect?",
    a: "GMGN currently supports IPv4 requests only. If you get 401 or 403 errors with a valid key, your traffic may be leaving over IPv6.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This page is educational. Meme coins can go to zero. AI agents can hallucinate token addresses, amounts, and risk scores. You are responsible for every click and every trade.",
  },
];

const prompts = [
  {
    title: "Trending scan",
    text: "Show me the trending tokens on Solana in the last 1 hour.",
  },
  {
    title: "Token safety",
    text: "Check the contract security and pool status for <token_address>.",
  },
  {
    title: "Smart money",
    text: "Show smart money holdings of <token_address>, sorted by buy volume.",
  },
  {
    title: "Wallet check",
    text: "Show trading stats and recent trades for wallet <wallet_address> on Solana.",
  },
  {
    title: "New launches",
    text: "Show newly launched Pump.fun tokens on Solana from the last 6 hours.",
  },
  {
    title: "Daily brief",
    text: "Give me a daily brief: Solana trending, notable smart money buys, and any high-risk flags.",
  },
];

function AffiliateButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={GMGN_AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function GmgnAiAgentTutorialPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Learn",
          item: `${SITE_URL}/learn`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GMGN AI Agent Tutorial",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "GMGN AI Agent Tutorial",
      description:
        "Educational tutorial on using GMGN Skills and the GMGN AI Agent to research meme coins and wallets.",
      url: PAGE_URL,
      dateModified: UPDATED,
      inLanguage: "en",
      author: { "@type": "Organization", name: "Crypto's Beginner" },
      publisher: { "@type": "Organization", name: "Crypto's Beginner" },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Set up the GMGN AI Agent",
      description:
        "Install GMGN Skills, create an API key, and run your first read-only meme coin query.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Create a GMGN account",
          text: "Open GMGN with the affiliate link and create an account.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Install GMGN Skills",
          text: "Run npx skills add GMGNAI/gmgn-skills in your AI client.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Generate an Ed25519 key pair",
          text: "Create a public and private key pair, then paste the full public key into GMGN AI.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Save the API key locally",
          text: "Store GMGN_API_KEY in ~/.config/gmgn/.env and never commit that file.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Run a read-only query",
          text: "Ask your agent to show Solana trending tokens for the last hour.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
              Learn · Draft tutorial
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              GMGN AI Agent tutorial
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Use an AI agent to research meme coins, inspect wallets, and read
              smart-money flow in plain English. This draft walks through GMGN
              Skills without turning the agent loose on your funds.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Updated {UPDATED}. Educational only. Not financial, legal, or tax
              advice. We may earn a commission if you sign up through our GMGN
              link.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AffiliateButton className="inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-300">
                Open GMGN with our link
              </AffiliateButton>
              <a
                href={GMGN_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Official GMGN docs
              </a>
            </div>
          </div>
        </section>

        <section className="border-b bg-amber-50">
          <div className="mx-auto max-w-6xl px-4 py-4 text-sm leading-6 text-amber-950">
            Draft for review. Tell us what to change in layout, wording, steps,
            or CTAs. Trading examples stay read-first on purpose.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">What it is</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                GMGN Skills plug into Claude Code, Cursor, Cline, OpenClaw, and
                similar clients so the agent can call GMGN instead of scraping
                websites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">Best first use</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Read-only research: trending tokens, token security, holders,
                and wallet stats. Add trading credentials only after that feels
                boringly safe.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">What it is not</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                It is not a guaranteed alpha feed, not auto-profit, and not a
                replacement for checking the token address yourself.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Start here
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Set up GMGN Skills
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Follow GMGN&apos;s own order: account and key first, then Skills,
            then a tiny read-only query. Trading stays optional.
          </p>

          <ol className="mt-8 space-y-6">
            <li className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 1
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Create your GMGN account
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Open GMGN through our referral link, then go to the AI / API key
                area. This is the signup path we can attribute. After that, the
                product is GMGN&apos;s.
              </p>
              <AffiliateButton className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                Continue to GMGN
              </AffiliateButton>
            </li>
            <li className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 2
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Install Skills in your agent
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Paste this into Claude Code, Cursor, OpenClaw, or another skills-capable client:
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-100">
                {`npx skills add GMGNAI/gmgn-skills`}
              </pre>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Source repo:{" "}
                <a
                  href={GMGN_SKILLS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline"
                >
                  GMGNAI/gmgn-skills
                </a>
                .
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 3
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Generate an Ed25519 key pair
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                GMGN authenticates with a public/private key pair. Ask your agent:
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-100">
                {`Generate an Ed25519 key pair for me using OpenSSL and show me`}
              </pre>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Paste the entire public key, including the BEGIN and END lines,
                into GMGN. Keep the private key on your machine only. Full
                screenshots live in the{" "}
                <a
                  href={GMGN_KEYS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline"
                >
                  Generate Public Key
                </a>{" "}
                docs.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 4
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Store the API key locally
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Query skills need <code>GMGN_API_KEY</code>. Swap skills also
                need <code>GMGN_PRIVATE_KEY</code>. Skip the private key until
                you actually want trading.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-6 text-emerald-100">
                {`mkdir -p ~/.config/gmgn
cat > ~/.config/gmgn/.env << 'EOF'
GMGN_API_KEY=your_api_key_here
EOF
chmod 600 ~/.config/gmgn/.env`}
              </pre>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Add <code>.env</code> to <code>.gitignore</code>. Never paste
                keys into Slack, Discord, screenshots, or this website.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 5
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Run a read-only test
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Ask your agent:
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-100">
                {`Show me the trending tokens on Solana in the last 1 hour.`}
              </pre>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                If you only want to confirm the CLI, GMGN publishes a public
                demo key for a tiny trending call. It is for install testing,
                not real research or trading. After that, use your own key.
              </p>
            </li>
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Prompts worth copying
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Replace placeholders with real addresses. If the agent tries to
            scrape gmgn.ai, tell it: use gmgn-cli, do not hit the website
            directly.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {prompts.map((prompt) => (
              <div
                key={prompt.title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <p className="text-sm font-bold text-slate-900">{prompt.title}</p>
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-800">
                  {prompt.text}
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Skills and workflows
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            These names come from the public gmgn-skills repo. Your agent can
            call them as slash commands or as normal chat.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-slate-500">
                    Skill
                  </th>
                  <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-slate-500">
                    Use it for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-token</td>
                  <td className="px-4 py-3 text-slate-700">
                    Info, security, pool, holders, traders
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-market</td>
                  <td className="px-4 py-3 text-slate-700">
                    K-line, trending, trenches, hot searches
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-portfolio</td>
                  <td className="px-4 py-3 text-slate-700">
                    Holdings, activity, PnL, created tokens
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-wallet-score</td>
                  <td className="px-4 py-3 text-slate-700">
                    Copy-trade quality and wallet reputation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-track</td>
                  <td className="px-4 py-3 text-slate-700">
                    Followed wallets, KOL prints, smart money
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">/gmgn-swap</td>
                  <td className="px-4 py-3 text-slate-700">
                    Quotes, swaps, limits, TP/SL. Needs extra keys.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Built-in workflow docs include token research, wallet analysis,
            smart-money profiling, early launch screening, risk warning, and a
            daily brief. Ask the agent to run the matching workflow by name.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-7">
            <h2 className="text-2xl font-bold text-rose-950">
              Trading is a later step
            </h2>
            <p className="mt-3 text-sm leading-6 text-rose-950">
              GMGN can route swaps through a hosted-wallet flow. The CLI also
              forces a typed yes before swap, multi-swap, strategy, and cooking
              commands unless you explicitly enable automation. Do not enable
              that until you understand the risk.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-rose-950">
              <li>
                Verify chain, wallet, token mint, amount, and slippage yourself.
              </li>
              <li>
                AI can invent a similar-looking contract. Copy the address from
                a source you trust.
              </li>
              <li>
                Test with an amount you can lose. On-chain fills do not unwind.
              </li>
              <li>
                IPv4 only. Whitelist your egress IP if you turn swap on.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-bold text-slate-900">Related pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/wallet-tracker"
              className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
            >
              <p className="font-bold text-slate-900">Wallet tracker</p>
              <p className="mt-2 text-sm text-slate-600">
                Our on-site wallet tracking work in progress.
              </p>
            </Link>
            <Link
              href="/meme-coin-research"
              className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
            >
              <p className="font-bold text-slate-900">Meme coin research</p>
              <p className="mt-2 text-sm text-slate-600">
                Broader research notes before you chase a ticker.
              </p>
            </Link>
            <Link
              href="/learn"
              className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
            >
              <p className="font-bold text-slate-900">Learn hub</p>
              <p className="mt-2 text-sm text-slate-600">
                Other beginner security and market explainers.
              </p>
            </Link>
          </div>
          <div className="mt-8 rounded-2xl bg-slate-900 p-7 text-white">
            <p className="text-sm uppercase tracking-wider text-emerald-300">
              Affiliate disclosure
            </p>
            <h2 className="mt-2 text-2xl font-bold">Ready to try GMGN?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
              Crypto&apos;s Beginner may earn a commission from{" "}
              <a
                href={GMGN_AFFILIATE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="underline"
              >
                gmgn.ai/r/XPS1eXg4
              </a>
              . That does not change the price you pay. Compare the live product
              against the docs before you fund anything.
            </p>
            <AffiliateButton className="mt-5 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-300">
              Open GMGN
            </AffiliateButton>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              Educational tutorial only. Not financial, legal, or tax advice.
              Meme coins, copy trading, and AI-assisted execution can result in
              total loss. GMGN is a third-party product. Features, chains, and
              rate limits can change. See our{" "}
              <Link href="/disclaimer" className="font-semibold underline">
                disclaimer
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
