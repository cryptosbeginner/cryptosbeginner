import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_PATH = "/learn/gmgn-ai-agent";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const UPDATED = "2026-08-30";
const GMGN_REF = "https://gmgn.ai/r/XPS1eXg4";
const GMGN_DOCS = "https://docs.gmgn.ai/index/gmgn-agent-api";
const GMGN_SKILLS = "https://github.com/GMGNAI/gmgn-skills";
const GMGN_KEY_DOCS = "https://docs.gmgn.ai/index/generate-public-key";

export const metadata: Metadata = {
  title: "GMGN AI Agent Tutorial – Research Meme Coins With Natural Language",
  description:
    "Learn how to set up the GMGN AI Agent, install GMGN Skills, create an API key, research meme tokens, analyze wallets, and trade only after you confirm the order. Educational guide, not financial advice.",
  keywords:
    "GMGN AI Agent, GMGN Skills, meme coin research, Solana wallet tracker, smart money, KOL trades, gmgn-cli, Pump.fun, copy trade",
  authors: [{ name: "Crypto's Beginner" }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "GMGN AI Agent Tutorial",
    description:
      "Step-by-step setup for GMGN Skills: query trending meme coins, analyze wallets, and keep trading behind a human confirmation.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMGN AI Agent Tutorial",
    description:
      "Use natural language to research tokens, wallets, and smart money on GMGN. Educational only.",
  },
};

const prompts = [
  {
    title: "Trending scan",
    text: "Show me the trending tokens on Solana in the last 1 hour. Filter out honeypots and sort by volume.",
  },
  {
    title: "Token check",
    text: "Is <token_address> safe to buy on Solana? Check contract security, pool, holders, smart money, and rug score.",
  },
  {
    title: "Wallet check",
    text: "Analyze wallet <wallet_address> on Solana. Show holdings, 7d PnL, win rate, recent buys, and whether it is worth following.",
  },
  {
    title: "Smart money tape",
    text: "Show the latest smart money buys on Solana over $1,000. Summarize which new tokens keep repeating.",
  },
  {
    title: "New launches",
    text: "Show newly launched Pump.fun tokens on Solana from the last 6 hours with at least 1 smart money buyer.",
  },
];

function AffiliateButton({
  children,
  extraClass = "",
}: {
  children: React.ReactNode;
  extraClass?: string;
}) {
  return (
    <a
      href={GMGN_REF}
      rel="sponsored noopener noreferrer"
      target="_blank"
      className={`inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 ${extraClass}`}
    >
      {children}
    </a>
  );
}

export default function GmgnAiAgentGuidePage() {
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
      "@type": "Article",
      headline: "GMGN AI Agent Tutorial",
      description:
        "A beginner-friendly walkthrough of GMGN Skills for meme-coin research, wallet analysis, and confirmed trading.",
      dateModified: UPDATED,
      author: { "@type": "Organization", name: "Crypto's Beginner" },
      publisher: { "@type": "Organization", name: "Crypto's Beginner" },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to set up the GMGN AI Agent",
      description:
        "Install GMGN Skills, create an API key, and run your first token or wallet research prompt.",
      totalTime: "PT20M",
      step: [
        {
          "@type": "HowToStep",
          name: "Open GMGN and create an account",
          text: "Open GMGN with the referral link, then go to the AI key page when you are ready to create credentials.",
        },
        {
          "@type": "HowToStep",
          name: "Install GMGN Skills",
          text: "Ask your AI client to run npx skills add GMGNAI/gmgn-skills.",
        },
        {
          "@type": "HowToStep",
          name: "Generate an Ed25519 public key",
          text: "Create an Ed25519 key pair with OpenSSL or the Binance key generator, then paste the full public key into GMGN.",
        },
        {
          "@type": "HowToStep",
          name: "Save the API key locally",
          text: "Store GMGN_API_KEY in ~/.config/gmgn/.env with file permissions set to 600. Add the private key only if you later enable trading.",
        },
        {
          "@type": "HowToStep",
          name: "Run a read-only prompt",
          text: "Ask for Solana 1-hour trending tokens or a token security check before you ever enable swaps.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need to code to use the GMGN AI Agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. After Skills are installed, you can ask in plain English. Coding is only needed if you later build your own tracker on the API.",
          },
        },
        {
          "@type": "Question",
          name: "Which chains does GMGN Skills support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read tools cover Solana, BSC, Base, and ETH. Swap support is strongest on SOL, BSC, and Base. ETH trading support is still expanding.",
          },
        },
        {
          "@type": "Question",
          name: "Is the GMGN private key my wallet seed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. GMGN_PRIVATE_KEY is a request-signing key for API calls. It is not your seed phrase. Still keep it secret, because a leaked signing key can let someone send trades in your name.",
          },
        },
        {
          "@type": "Question",
          name: "Is this financial advice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This page is educational. Meme coins can go to zero. Confirm every trade yourself.",
          },
        },
      ],
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
              Learn · Draft guide
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              GMGN AI Agent tutorial
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Use natural language to research meme coins, read wallet PnL, and
              watch smart money. Keep trading locked until you understand the
              risks and confirm every order yourself.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Updated {UPDATED}. This is a draft for review. We may earn a
              commission if you open GMGN through our link.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AffiliateButton>Open GMGN</AffiliateButton>
              <a
                href={GMGN_DOCS}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Official GMGN docs
              </a>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10 text-slate-800">
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <p className="font-bold">Affiliate disclosure</p>
            <p className="mt-2">
              Crypto&apos;s Beginner may earn a rebate if you sign up or trade
              through{" "}
              <a
                href={GMGN_REF}
                rel="sponsored noopener noreferrer"
                target="_blank"
                className="font-semibold underline"
              >
                gmgn.ai/r/XPS1eXg4
              </a>
              . That does not change the price you pay. Always verify contracts,
              amounts, and slippage yourself.
            </p>
          </aside>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            What the GMGN AI Agent actually is
          </h2>
          <p className="mt-4 leading-7">
            GMGN Skills sit between your AI client and GMGN&apos;s on-chain
            data. Instead of scraping the website, the agent calls commands such
            as <code>/gmgn-token</code>, <code>/gmgn-market</code>, and{" "}
            <code>/gmgn-portfolio</code>. You type a question. The agent fetches
            live trending tokens, holder mix, rug scores, and wallet activity.
          </p>
          <p className="mt-4 leading-7">
            Query skills need an API key. Swap skills also need the matching
            Ed25519 signing key. GMGN says IPv4 is required; IPv6 requests are
            rejected. Official sources:{" "}
            <a href={GMGN_DOCS} className="underline" rel="noopener noreferrer" target="_blank">
              Agent API docs
            </a>{" "}
            and{" "}
            <a href={GMGN_SKILLS} className="underline" rel="noopener noreferrer" target="_blank">
              GMGNAI/gmgn-skills
            </a>
            .
          </p>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            What you can ask it to do
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-900">Read-only research</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Trending tokens, Trenches launches, token security, top holders,
                KOL buys, smart money tape, and wallet holdings or PnL.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-900">Trading later, not first</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Market, limit, take-profit, stop-loss, and cooking orders exist.
                Leave them off until you can confirm token, size, and slippage
                without rushing.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Before you start
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
            <li>An AI client that can run Skills: Claude Code, Cursor, Cline, OpenClaw, or similar.</li>
            <li>Node.js so you can run <code>npx skills add GMGNAI/gmgn-skills</code>.</li>
            <li>A GMGN account created through our referral link if you want to support this site.</li>
            <li>A separate research wallet. Do not mix this with long-term savings.</li>
          </ul>
          <div className="mt-6">
            <AffiliateButton>Create a GMGN account</AffiliateButton>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Step 1 — Install GMGN Skills
          </h2>
          <p className="mt-4 leading-7">
            Paste this into your AI client:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-emerald-100">
            {`Install GMGN skills by running: npx skills add GMGNAI/gmgn-skills`}
          </pre>
          <p className="mt-4 leading-7">
            Optional smoke test with GMGN&apos;s public demo key (read-only,
            not for real use):
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-emerald-100">
            {`GMGN_API_KEY=gmgn_solbscbaseethmonadtron gmgn-cli market trending --chain sol --interval 1h --limit 3`}
          </pre>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Step 2 — Create your own API key
          </h2>
          <p className="mt-4 leading-7">
            The demo key is only a connection check. For real work, generate an
            Ed25519 key pair, then paste the full public key — including BEGIN
            and END lines — into{" "}
            <a href={GMGN_REF} rel="sponsored noopener noreferrer" target="_blank" className="underline">
              GMGN
            </a>
            . Details:{" "}
            <a href={GMGN_KEY_DOCS} rel="noopener noreferrer" target="_blank" className="underline">
              Generate Public Key
            </a>
            .
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-emerald-100">
            {`Generate an Ed25519 key pair for me using OpenSSL and show me:
1. The public key (for the GMGN API form)
2. The private key in PEM format (only if I later enable trading)`}
          </pre>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Step 3 — Save credentials on your machine
          </h2>
          <p className="mt-4 leading-7">
            Ask the agent to create <code>~/.config/gmgn/.env</code>. Start with
            the API key only. Add <code>GMGN_PRIVATE_KEY</code> later if you
            enable swaps. Then run <code>chmod 600 ~/.config/gmgn/.env</code> and
            keep that file out of git.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-emerald-100">
            {`mkdir -p ~/.config/gmgn
cat > ~/.config/gmgn/.env << 'EOF'
GMGN_API_KEY=your_api_key_here
EOF
chmod 600 ~/.config/gmgn/.env`}
          </pre>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Step 4 — Run a first research prompt
          </h2>
          <p className="mt-4 leading-7">
            If the agent tries to open gmgn.ai in a browser, tell it: &quot;Use
            gmgn-cli commands. Do not call gmgn.ai web endpoints directly.&quot;
          </p>
          <div className="mt-5 space-y-4">
            {prompts.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                  {item.title}
                </p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-slate-800">
                  {item.text}
                </pre>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Ready-made research workflows
          </h2>
          <p className="mt-4 leading-7">
            GMGN ships workflow docs you can point the agent at. Use these as
            checklists, not as buy buttons.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
            <li>Token research: address in, then buy / watch / skip with security, holders, and liquidity.</li>
            <li>Wallet analysis: holdings, stats, activity, then follow or skip.</li>
            <li>Smart money profile: style tags and whether copy-trading even makes sense.</li>
            <li>Early project screen: new launchpad tokens with smart money already in.</li>
            <li>Daily brief: trending, notable wallets, and risk scan in one pass.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Trading prompts (advanced)
          </h2>
          <p className="mt-4 leading-7">
            Swap, cooking, and strategy orders need the signing key. GMGN CLI
            asks you to type <code>yes</code> before it sends a live order.
            Automated mode needs both <code>GMGN_ALLOW_AUTOMATED_TRADES=1</code>{" "}
            and <code>--yes</code>. Leave automation off.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-emerald-100">
            {`Get a quote: how much of <token_address> can I get for 0.05 SOL?
Buy 0.05 SOL of <token_address> with 30% slippage.
Sell 50% of <token_address>.`}
          </pre>
          <p className="mt-4 leading-7">
            Confirm chain, wallet, token mint, amount, and slippage every time.
            AI models can invent addresses. On-chain fills are irreversible.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Safety rules we actually use
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
            <li>Research first. Do not paste a signing key until you have run read-only prompts for a few days.</li>
            <li>Never send API keys, PEM files, or seed phrases in chat screenshots.</li>
            <li>Test with dust sizes. Meme coins can rug, honeypot, or lose liquidity in minutes.</li>
            <li>If a prompt comes from a token website or Telegram group, treat it as hostile.</li>
            <li>GMGN_PRIVATE_KEY signs API requests. It is not your seed, but rotate it if it leaks.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Do I need to code?</h3>
              <p className="mt-2 leading-7">
                No for the agent workflow. Yes later if you want a public wallet
                tracker on this site that calls GMGN from a server.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Which chains work?</h3>
              <p className="mt-2 leading-7">
                SOL, BSC, Base, and ETH for most reads. Trading is documented
                mainly on SOL, BSC, and Base.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Can I use this on mobile?</h3>
              <p className="mt-2 leading-7">
                The GMGN website and Telegram bots work on phones. Skills and
                gmgn-cli are desktop / server tools.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Is this financial advice?</h3>
              <p className="mt-2 leading-7">
                No. Nothing here is a recommendation to buy, sell, or copy a
                wallet.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Related on this site
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
            <li>
              <Link href="/meme-coins" className="underline">
                Meme coins hub
              </Link>
            </li>
            <li>
              <Link href="/meme-coin-research" className="underline">
                Meme coin research
              </Link>
            </li>
            <li>
              <Link href="/wallet-tracker" className="underline">
                Wallet tracker
              </Link>
            </li>
            <li>
              <Link href="/tools/cfo-line-dashboard" className="underline">
                CFO Line dashboard
              </Link>
            </li>
            <li>
              <Link href="/learn" className="underline">
                All learn guides
              </Link>
            </li>
          </ul>

          <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-lg font-bold text-emerald-950">Try GMGN next</p>
            <p className="mt-2 text-sm leading-6 text-emerald-950">
              Open GMGN, create your API key, then come back to this page with
              notes. Tell us what to shorten, add, or rewrite.
            </p>
            <div className="mt-5">
              <AffiliateButton extraClass="bg-emerald-600 text-white hover:bg-emerald-500">
                Open GMGN with our link
              </AffiliateButton>
            </div>
          </div>
        </article>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm leading-6 text-slate-600">
            Educational content only. Not financial, legal, or tax advice. Meme
            coins are high risk. GMGN data can be wrong. Past wallet performance
            does not predict future results. Confirm every on-chain action
            yourself.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
