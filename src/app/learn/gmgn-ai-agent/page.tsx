import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/gmgn-ai-agent`;
const UPDATED = "2026-08-30";
const GMGN_AFFILIATE = "https://gmgn.ai/r/XPS1eXg4";
const GMGN_DOCS = "https://docs.gmgn.ai/index/gmgn-agent-api";
const GMGN_KEYS = "https://docs.gmgn.ai/index/generate-public-key";
const GMGN_SKILLS = "https://github.com/GMGNAI/gmgn-skills";

export const metadata: Metadata = {
  title: "GMGN AI Agent Tutorial – Research Meme Coins With Natural Language",
  description:
    "Learn how to use GMGN AI Agent and Skills to research meme coins, track wallets, and query on-chain data. Educational guide, not financial advice.",
  keywords:
    "GMGN AI Agent, GMGN Skills, meme coin research, wallet tracker, Solana trending tokens, smart money, KOL trades",
  authors: [{ name: "Crypto's Beginner" }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "GMGN AI Agent Tutorial",
    description:
      "Step-by-step guide to GMGN Skills for token, wallet, and market research.",
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
  [
    "Do I need to know how to code?",
    "No. You install GMGN Skills, add an API key, then talk to your AI client in plain English. Coding is optional.",
  ],
  [
    "Is the GMGN private key a wallet seed?",
    "No. GMGN_PRIVATE_KEY is a request-signing key for API calls, not a blockchain wallet seed phrase. Keep it secret because a leak can allow authenticated requests.",
  ],
  [
    "Which chains work today?",
    "Coverage is strongest on Solana, BSC, and Base. Confirm current support in the official docs before trading.",
  ],
  [
    "Can IPv6 users connect?",
    "GMGN currently documents IPv4-only API access. If a valid key produces 401 or 403 errors, check the network path and IP whitelist.",
  ],
  [
    "Is this financial advice?",
    "No. This page is educational. Meme coins can go to zero and AI can make mistakes. Verify every address, amount, and action yourself.",
  ],
] as const;

const prompts = [
  ["Trending scan", "Show me the trending tokens on Solana in the last 1 hour."],
  ["Token safety", "Check the contract security and pool status for <token_address>."],
  ["Smart money", "Show smart money holdings of <token_address>, sorted by buy volume."],
  ["Wallet check", "Show trading stats and recent trades for wallet <wallet_address> on Solana."],
  ["New launches", "Show newly launched Pump.fun tokens on Solana from the last 6 hours."],
  ["Daily brief", "Give me a daily brief: Solana trending, smart-money buys, and high-risk flags."],
] as const;

function AffiliateButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={GMGN_AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`inline-flex max-w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold transition ${className}`}
    >
      {children}
    </a>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-slate-950 p-3 text-xs leading-6 text-emerald-100 sm:p-4 sm:text-sm">
      <code>{children}</code>
    </pre>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-6xl overflow-hidden px-4 py-8 sm:px-6 sm:py-10 ${className}`}>{children}</section>;
}

export default function GmgnAiAgentTutorialPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
        { "@type": "ListItem", position: 3, name: "GMGN AI Agent Tutorial", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "GMGN AI Agent Tutorial",
      description: "Educational tutorial on using GMGN Skills to research meme coins and wallets.",
      url: PAGE_URL,
      dateModified: UPDATED,
      inLanguage: "en",
      author: { "@type": "Organization", name: "Crypto's Beginner" },
      publisher: { "@type": "Organization", name: "Crypto's Beginner" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  return (
    <>
      <Header />
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <main className="min-w-0 overflow-x-hidden bg-white">
        <section className="min-w-0 border-b bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-300 sm:text-sm">Learn · Draft tutorial</p>
            <h1 className="mt-3 max-w-4xl break-words text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">GMGN AI Agent tutorial</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Use an AI agent to research meme coins, inspect wallets, and read smart-money flow in plain English. This draft walks through GMGN Skills without turning the agent loose on your funds.
            </p>
            <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
              Updated {UPDATED}. Educational only. Not financial, legal, or tax advice. We may earn a commission if you sign up through our GMGN link.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <AffiliateButton className="w-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 sm:w-auto">Open GMGN with our link</AffiliateButton>
              <a href={GMGN_DOCS} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">Official GMGN docs</a>
            </div>
          </div>
        </section>

        <section className="border-b bg-amber-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-3 text-xs leading-5 text-amber-950 sm:px-6 sm:py-4 sm:text-sm sm:leading-6">Draft for review. Tell us what to change in layout, wording, steps, or CTAs. Trading examples stay read-first on purpose.</div>
        </section>

        <Section>
          <div className="grid min-w-0 gap-4 md:grid-cols-3">
            {[
              ["What it is", "GMGN Skills plug into Claude Code, Cursor, Cline, OpenClaw, and similar clients so an agent can call GMGN instead of scraping websites."],
              ["Best first use", "Read-only research: trending tokens, token security, holders, and wallet stats. Add trading credentials only after that feels safe."],
              ["What it is not", "It is not guaranteed alpha, not auto-profit, and not a replacement for checking the token address yourself."],
            ].map(([title, text]) => (
              <div key={title} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"><p className="text-sm font-bold text-slate-900">{title}</p><p className="mt-2 text-sm leading-6 text-slate-700">{text}</p></div>
            ))}
          </div>
        </Section>

        <Section className="py-4 sm:py-6">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 sm:text-sm">Start here</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Set up GMGN Skills</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">Follow GMGN&apos;s order: account and key first, then Skills, then a tiny read-only query. Trading stays optional.</p>
          <ol className="mt-6 min-w-0 space-y-4 sm:mt-8 sm:space-y-6">
            <li className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 1</p><h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Create your GMGN account</h3><p className="mt-3 text-sm leading-6 text-slate-700">Open GMGN through our referral link, then go to the AI / API key area.</p><AffiliateButton className="mt-4 w-full bg-slate-900 text-white hover:bg-slate-800 sm:w-auto">Continue to GMGN</AffiliateButton></li>
            <li className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 2</p><h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Install Skills in your agent</h3><p className="mt-3 text-sm leading-6 text-slate-700">Paste this into a skills-capable client:</p><div className="mt-4"><CodeBlock>{`npx skills add GMGNAI/gmgn-skills`}</CodeBlock></div><p className="mt-3 break-words text-sm leading-6 text-slate-600">Source repo: <a href={GMGN_SKILLS} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-800 underline">GMGNAI/gmgn-skills</a>.</p></li>
            <li className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 3</p><h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Generate an Ed25519 key pair</h3><p className="mt-3 text-sm leading-6 text-slate-700">Generate a public/private pair, then paste the entire public key into GMGN.</p><div className="mt-4"><CodeBlock>{`Generate an Ed25519 key pair for me using OpenSSL`}</CodeBlock></div><p className="mt-3 text-sm leading-6 text-slate-700">Keep the private key on your machine only. See the <a href={GMGN_KEYS} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-800 underline">official key guide</a>.</p></li>
            <li className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 4</p><h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Store the API key locally</h3><p className="mt-3 text-sm leading-6 text-slate-700">Query skills need <code>GMGN_API_KEY</code>. Skip <code>GMGN_PRIVATE_KEY</code> until you actually want trading.</p><div className="mt-4"><CodeBlock>{`mkdir -p ~/.config/gmgn
cat > ~/.config/gmgn/.env << 'EOF'
GMGN_API_KEY=your_api_key_here
EOF
chmod 600 ~/.config/gmgn/.env`}</CodeBlock></div><p className="mt-3 text-sm leading-6 text-slate-600">Add <code>.env</code> to <code>.gitignore</code>. Never paste keys into chat, screenshots, or this website.</p></li>
            <li className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 5</p><h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Run a read-only test</h3><p className="mt-3 text-sm leading-6 text-slate-700">Ask your agent:</p><div className="mt-4"><CodeBlock>{`Show me the trending tokens on Solana in the last 1 hour.`}</CodeBlock></div><p className="mt-3 text-sm leading-6 text-slate-700">Confirm that data is returned before adding any trading credentials.</p></li>
          </ol>
        </Section>

        <Section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Prompts worth copying</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">Replace placeholders with real addresses. Tell the agent to use gmgn-cli, not scrape gmgn.ai directly.</p>
          <div className="mt-5 grid min-w-0 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
            {prompts.map(([title, text]) => <div key={title} className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-5"><p className="text-sm font-bold text-slate-900">{title}</p><div className="mt-3"><CodeBlock>{text}</CodeBlock></div></div>)}
          </div>
        </Section>

        <Section className="py-4 sm:py-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Skills and workflows</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">These names come from the public gmgn-skills repo.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 sm:mt-6"><table className="w-full min-w-[520px] divide-y divide-slate-200 text-left text-sm"><thead className="bg-slate-50"><tr><th className="px-4 py-3 font-bold uppercase tracking-wider text-slate-500">Skill</th><th className="px-4 py-3 font-bold uppercase tracking-wider text-slate-500">Use it for</th></tr></thead><tbody className="divide-y divide-slate-200 bg-white"><tr><td className="px-4 py-3 font-semibold">/gmgn-token</td><td className="px-4 py-3 text-slate-700">Info, security, pool, holders, traders</td></tr><tr><td className="px-4 py-3 font-semibold">/gmgn-market</td><td className="px-4 py-3 text-slate-700">K-line, trending, trenches, hot searches</td></tr><tr><td className="px-4 py-3 font-semibold">/gmgn-portfolio</td><td className="px-4 py-3 text-slate-700">Holdings, activity, PnL, created tokens</td></tr><tr><td className="px-4 py-3 font-semibold">/gmgn-wallet-score</td><td className="px-4 py-3 text-slate-700">Copy-trade quality and wallet reputation</td></tr><tr><td className="px-4 py-3 font-semibold">/gmgn-track</td><td className="px-4 py-3 text-slate-700">Followed wallets and smart money</td></tr><tr><td className="px-4 py-3 font-semibold">/gmgn-swap</td><td className="px-4 py-3 text-slate-700">Quotes, swaps, limits, TP/SL; needs extra keys</td></tr></tbody></table></div>
        </Section>

        <Section>
          <div className="min-w-0 rounded-2xl border border-rose-200 bg-rose-50 p-5 sm:p-7"><h2 className="text-xl font-bold text-rose-950 sm:text-2xl">Trading is a later step</h2><p className="mt-3 text-sm leading-6 text-rose-950">Verify chain, wallet, token mint, amount, and slippage yourself. AI can invent a similar-looking contract. Test with an amount you can lose.</p></div>
        </Section>

        <Section className="py-4 sm:py-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">FAQ</h2>
          <div className="mt-5 min-w-0 space-y-3 sm:mt-6 sm:space-y-4">{faqs.map(([q, a]) => <div key={q} className="min-w-0 rounded-2xl border border-slate-200 p-4 sm:p-5"><h3 className="break-words text-base font-bold text-slate-900 sm:text-lg">{q}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{a}</p></div>)}</div>
        </Section>

        <Section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Related pages</h2>
          <div className="mt-5 grid min-w-0 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3"><Link href="/wallet-tracker" className="min-w-0 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 sm:p-5"><p className="font-bold text-slate-900">Wallet tracker</p><p className="mt-2 text-sm text-slate-600">Our on-site wallet tracking work in progress.</p></Link><Link href="/meme-coin-research" className="min-w-0 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 sm:p-5"><p className="font-bold text-slate-900">Meme coin research</p><p className="mt-2 text-sm text-slate-600">Research notes before you chase a ticker.</p></Link><Link href="/learn" className="min-w-0 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 sm:p-5"><p className="font-bold text-slate-900">Learn hub</p><p className="mt-2 text-sm text-slate-600">Beginner security and market explainers.</p></Link></div>
          <div className="mt-6 min-w-0 rounded-2xl bg-slate-900 p-5 text-white sm:mt-8 sm:p-7"><p className="text-xs uppercase tracking-wider text-emerald-300 sm:text-sm">Affiliate disclosure</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">Ready to try GMGN?</h2><p className="mt-3 break-words text-sm leading-6 text-slate-200">Crypto&apos;s Beginner may earn a commission from <a href={GMGN_AFFILIATE} target="_blank" rel="sponsored noopener noreferrer" className="underline">gmgn.ai/r/XPS1eXg4</a>. That does not change the price you pay.</p><AffiliateButton className="mt-5 w-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 sm:w-auto">Open GMGN</AffiliateButton></div>
        </Section>

        <section className="border-t bg-slate-50"><div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs leading-5 text-slate-600 sm:px-6 sm:py-8 sm:text-sm sm:leading-6">Educational tutorial only. Not financial, legal, or tax advice. Meme coins, copy trading, and AI-assisted execution can result in total loss. GMGN is a third-party product. See our <Link href="/disclaimer" className="font-semibold underline">disclaimer</Link>.</div></section>
      </main>
      <Footer />
    </>
  );
}
