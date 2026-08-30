import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/gmgn-ai-agent`;
const UPDATED = "31 August 2026";
const UPDATED_ISO = "2026-08-31";

const GMGN_AFFILIATE = "https://gmgn.ai/r/XPS1eXg4";
const GMGN_DOCS = "https://docs.gmgn.ai/index/gmgn-agent-api";
const GMGN_KEYS = "https://docs.gmgn.ai/index/generate-public-key";
const GMGN_SKILLS = "https://github.com/GMGNAI/gmgn-skills";
const GMGN_DEMO = "https://gmgnai.github.io/skillmarket-demos/aitrader/";

const IMAGE_BASE = "/images/meme-coins/tutorials/gmgn";

export const metadata: Metadata = {
  title:
    "GMGN AI Agent Tutorial: API Keys, Wallet Research & Safe Workflows",
  description:
    "Learn how GMGN AI Agent and GMGN Skills work, how query access differs from signed trading access, how to protect API credentials, and how to research tokens and wallets safely.",
  authors: [{ name: "CryptosBeginner editorial team" }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "GMGN AI Agent Tutorial: API Keys, Wallet Research & Safe Workflows",
    description:
      "A research-first GMGN AI Agent tutorial covering query access, credential safety, token checks, wallet analysis, and the GMGN AI Trader demo.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMGN AI Agent Tutorial for Beginners",
    description:
      "Learn how to use GMGN Skills for read-only token and wallet research before enabling signed or trading workflows.",
  },
};

const permissionRows = [
  {
    workflow: "Query and research",
    examples:
      "Market quotes, token information, holders, wallet activity, portfolio data, K-lines, and analytics",
    credentials: "GMGN API key",
  },
  {
    workflow: "Signed or execution-related actions",
    examples:
      "Swaps, strategy orders, and certain signed quote or order operations",
    credentials: "GMGN API key plus the required private-key authentication",
  },
] as const;

const safePrompts = [
  [
    "Trending scan",
    "Show the trending tokens on Solana from the last hour. Include the chain, token address, liquidity, volume, token age, and any missing fields. Do not recommend a trade.",
  ],
  [
    "Token check",
    "Check the contract security, pool status, holders, and recent activity for <token_address>. Separate verifiable data from interpretation.",
  ],
  [
    "Wallet check",
    "Show holdings, recent trades, realized P&L, and activity for wallet <wallet_address> on Solana. Explain what the data does not prove.",
  ],
  [
    "Holder analysis",
    "Show the top holders for <token_address>, including concentration and any suspicious wallet groups where available.",
  ],
  [
    "New-launch review",
    "Show newly launched Pump.fun tokens from the last six hours. Filter for the selected chain and list the information that still needs manual verification.",
  ],
  [
    "Research summary",
    "Create a neutral research summary for <token_address>. Include liquidity, holders, security fields, recent trades, unknowns, and a skip/watchlist recommendation framework.",
  ],
] as const;

const skills = [
  ["/gmgn-token", "Token information, contract security, pool status, holders, and traders"],
  ["/gmgn-market", "K-line data, trending tokens, Trenches, token signals, and hot searches"],
  ["/gmgn-portfolio", "Wallet holdings, activity, statistics, token balances, and P&L"],
  ["/gmgn-wallet-score", "Track record, copy-tradeability, backtesting, and developer reputation"],
  ["/gmgn-track", "Followed-wallet, KOL, and Smart Money trade activity"],
  ["/gmgn-swap", "Quotes, swaps, limit orders, strategy orders, and order status"],
  ["/gmgn-cooking", "Combined buy and condition-order workflows for advanced users"],
  ["/gmgn-kline-pattern", "Chart-pattern reading and pattern scoring"],
] as const;

const troubleshooting = [
  [
    "API key rejected",
    "Confirm the API key is active, check that the complete public key was used during creation, and verify that the request uses the expected credential format.",
  ],
  [
    "401 or 403 with a valid-looking key",
    "GMGN documentation currently says IPv4 requests are supported and IPv6 is not supported for the Agent API. Check whether your environment is routing through IPv6 and review the provider’s current network requirements.",
  ],
  [
    "Empty wallet result",
    "Confirm the chain and address. A provider may not have synchronized every wallet or may not have data for the requested period.",
  ],
  [
    "Rate-limit response",
    "Stop repeated retries, respect the reset window, reduce polling, and batch requests where the provider supports it.",
  ],
  [
    "Missing field in a result",
    "Treat the value as unavailable. Do not infer, invent, or fill in a contract, holder count, liquidity figure, or score.",
  ],
  [
    "Agent suggests a trade",
    "Stop before signing. Manually verify the chain, token contract, wallet, amount, slippage, route, and intended action.",
  ],
  [
    "Secret appears in a log or screenshot",
    "Treat it as exposed. Revoke or rotate the API key and signing key through the provider rather than trying to hide the screenshot afterward.",
  ],
] as const;

const faqs = [
  [
    "What is GMGN AI Agent?",
    "GMGN AI Agent is a way for compatible AI clients to call GMGN’s token, market, wallet, portfolio, tracking, and trading capabilities. It can speed up research, but it does not verify a token or predict a profitable trade.",
  ],
  [
    "Is GMGN_PRIVATE_KEY a wallet seed phrase?",
    "No. The current GMGN skills repository describes GMGN_PRIVATE_KEY as a request-signing key for GMGN OpenAPI authentication, not a blockchain wallet seed phrase. Keep it secret because a compromise could allow authenticated API requests.",
  ],
  [
    "Can I use GMGN AI Agent without a private key?",
    "You can begin with query and research workflows using a personal API key. Trading and certain signed operations require additional private-key authentication. Check the current command documentation because requirements can vary by command.",
  ],
  [
    "Which chains are supported?",
    "GMGN’s Agent API documentation currently lists SOL, BSC, and Base, while the gmgn-skills repository documents broader command-level support that includes ETH and other identifiers for certain workflows. Confirm the exact chain for your chosen command before using it.",
  ],
  [
    "Is Smart Money a guarantee that a token will rise?",
    "No. Smart Money is a provider classification. Review the underlying observations, time period, position sizes, liquidity, holder concentration, and whether the activity can realistically be copied.",
  ],
  [
    "Can an AI agent trade automatically?",
    "GMGN supports trading and automated workflows, but real on-chain transactions are irreversible and can be affected by model errors, prompt injection, slippage, and incorrect parameters. Beginners should start with read-only research and manually verify every transaction prompt.",
  ],
] as const;

function AffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={GMGN_AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`inline-flex min-h-11 max-w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold transition ${className}`}
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

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl overflow-hidden px-4 py-10 sm:px-6 sm:py-14 ${className}`}
    >
      {children}
    </section>
  );
}

function TutorialFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="not-prose my-8">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full rounded-2xl border border-slate-200 bg-slate-950 shadow-sm"
      />

      <figcaption className="mt-3 text-center text-sm leading-6 text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function GmgnAiAgentTutorialPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
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
      headline:
        "GMGN AI Agent Tutorial: API Keys, Wallet Research and Safe Workflows",
      description:
        "A research-first guide to GMGN AI Agent and GMGN Skills, including credential safety, token analysis, wallet research, and read-only setup.",
      url: PAGE_URL,
      dateModified: UPDATED_ISO,
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to set up GMGN AI Agent for read-only research",
      description:
        "Install GMGN Skills, create a personal API key, store credentials safely, and run a read-only market or wallet research query.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Install GMGN Skills",
          text: "Install the GMGN Skills package or CLI using the official repository instructions.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Create a personal API key",
          text: "Generate an Ed25519 key pair locally and upload the full public key in GMGN’s API-key creation flow.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Store credentials safely",
          text: "Store the API key in a protected environment file that is excluded from Git and never exposed in logs, screenshots, chats, or frontend code.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Run a read-only query",
          text: "Start with market, token, holder, portfolio, or wallet queries and manually verify important results.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Learn · GMGN AI tutorial · Updated {UPDATED}
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              GMGN AI Agent Tutorial: API Keys, Wallet Research and Safe
              Workflows
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              GMGN AI Agent connects compatible AI tools to GMGN market, token,
              wallet, portfolio, tracking, and trading capabilities. This
              tutorial focuses on safer read-only research first: checking token
              data, reviewing wallet activity, protecting API credentials, and
              documenting what still needs manual verification.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AffiliateButton className="w-full bg-emerald-600 text-white hover:bg-emerald-700 sm:w-auto">
                Open GMGN through the partner link
              </AffiliateButton>

              <a
                href={GMGN_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Official Agent API documentation
              </a>

              <a
                href={GMGN_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                View the official AI Trader demo
              </a>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
              Educational content only. This page is not financial, investment,
              legal, or tax advice. CryptosBeginner may earn a commission if you
              use the GMGN partner link.
            </p>
          </div>
        </section>

        <Section>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
                What the agent can do
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Start with read-only research, not automated trading
              </h2>

              <p className="mt-4 leading-8 text-slate-800">
                GMGN Skills can expose real-time token data, trending markets,
                wallet activity, holder information, portfolio statistics,
                tracking workflows, and execution commands through a compatible
                AI client. That can shorten research time, but it cannot prove
                that a meme coin is legitimate or that a wallet’s past results
                can be copied.
              </p>

              <p className="mt-4 leading-8 text-slate-800">
                The safest first use is to ask for market and token context,
                identify missing information, and manually verify the contract,
                chain, liquidity, holders, route, and transaction details before
                signing anything.
              </p>
            </div>

            <TutorialFigure
              src={`${IMAGE_BASE}/gmgn-ai-agent-tutorial.png`}
              alt="GMGN AI Agent tutorial overview showing how an AI client can connect to GMGN market, wallet and token data"
              caption="GMGN AI Agent overview: connect a compatible AI client to GMGN research and trading capabilities while keeping sensitive actions under explicit review."
            />
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Query access versus signed or trading access
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            GMGN documents different credential requirements for different
            workflows. Query-oriented skills such as market, token, and
            portfolio operations use an API key. Swap functionality requires
            the API key plus the corresponding private-key authentication.
            Command-level requirements can change, so check the current
            documentation before running a workflow.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th className="px-5 py-4 text-sm font-black">Workflow</th>
                  <th className="px-5 py-4 text-sm font-black">Examples</th>
                  <th className="px-5 py-4 text-sm font-black">
                    Credential boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {permissionRows.map((row, index) => (
                  <tr
                    key={row.workflow}
                    className={
                      index % 2 === 0
                        ? "border-t border-slate-200 bg-white"
                        : "border-t border-slate-200 bg-slate-50"
                    }
                  >
                    <td className="px-5 py-4 font-black text-slate-950">
                      {row.workflow}
                    </td>
                    <td className="px-5 py-4 leading-7 text-slate-800">
                      {row.examples}
                    </td>
                    <td className="px-5 py-4 leading-7 text-slate-800">
                      {row.credentials}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <h3 className="text-xl font-black text-amber-950">
              Important key distinction
            </h3>

            <p className="mt-3 leading-8 text-slate-900">
              `GMGN_PRIVATE_KEY` is described in the current GMGN skills
              repository as a request-signing key for GMGN OpenAPI
              authentication. It is not a blockchain wallet seed phrase or a
              blockchain wallet private key. It is still a high-risk secret
              because an exposed signing key could allow authenticated requests
              on your behalf.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Review the available skillset before installing
              </h2>

              <p className="mt-4 leading-8 text-slate-800">
                The official `GMGNAI/gmgn-skills` repository provides skills for
                token research, market data, portfolio review, wallet scoring,
                tracked-wallet activity, swaps, strategy orders, combined
                condition-order workflows, and chart-pattern reading.
              </p>

              <p className="mt-4 leading-8 text-slate-800">
                Review the current repository version before following any old
                command example. The package can change independently from this
                tutorial, including supported chains, command names, credential
                requirements, and workflow behavior.
              </p>
            </div>

            <TutorialFigure
              src={`${IMAGE_BASE}/gmgn-ai-agent-skillset.png`}
              alt="GMGN AI Agent skillset showing available token, market, portfolio, wallet tracking and trading skills"
              caption="GMGN skillset overview: separate read-only research skills from signed or execution-related commands before enabling credentials."
            />
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 font-black uppercase tracking-wide text-slate-700">
                    Skill
                  </th>
                  <th className="px-5 py-4 font-black uppercase tracking-wide text-slate-700">
                    Use it for
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                {skills.map(([skill, description]) => (
                  <tr key={skill}>
                    <td className="px-5 py-4 font-black text-slate-950">
                      {skill}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-700">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Set up the API key safely
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            GMGN documents a locally generated Ed25519 key pair. The public key
            is uploaded during API-key creation, and the private key remains
            confidential. GMGN also says that API-key creation currently
            requires IPv4 requests and does not currently support IPv6 for the
            Agent API.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
            <TutorialFigure
              src={`${IMAGE_BASE}/gmgn-ai-api-tutorial.png`}
              alt="GMGN Agent API setup page showing the API key creation and key-pair workflow"
              caption="GMGN Agent API setup: upload the complete public key when creating your personal API key, and never publish a private signing key."
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-xl font-black text-slate-950">
                Safe setup sequence
              </h3>

              <ol className="mt-5 list-decimal space-y-4 pl-5 leading-7 text-slate-800">
                <li>
                  Install GMGN Skills or `gmgn-cli` using the current official
                  repository instructions.
                </li>
                <li>
                  Generate an Ed25519 key pair locally and upload the complete
                  public key, including its BEGIN and END lines.
                </li>
                <li>
                  Create a personal GMGN API key from the official GMGN AI
                  setup page.
                </li>
                <li>
                  Store the API key in a protected local or server-side
                  environment file that is excluded from Git.
                </li>
                <li>
                  Begin with market, token, holder, portfolio, or wallet queries.
                  Do not add private-key credentials merely to test a command.
                </li>
              </ol>

              <CodeBlock>
{`mkdir -p ~/.config/gmgn

cat > ~/.config/gmgn/.env << 'EOF'
GMGN_API_KEY=your_api_key_here
EOF

chmod 600 ~/.config/gmgn/.env`}
              </CodeBlock>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Add `.env` to `.gitignore`. Do not put keys in frontend code,
                browser storage, logs, screenshots, prompts, chats, or public
                repositories.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Review the API pricing and current limits
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            Review GMGN’s live API setup and pricing information before
            building a workflow. Do not rely on old screenshots for current
            quotas, plan names, rate limits, supported chains, or included
            credits. If the provider shows a plan or request limit, apply it to
            your polling interval, batching, and troubleshooting plan.
          </p>

          <TutorialFigure
            src={`${IMAGE_BASE}/gmgn-ai-api-pricing.png`}
            alt="GMGN AI API pricing page showing available plans, request limits or credit information"
            caption="GMGN API pricing and limits: confirm the current plan, quotas, and request limits before running repeated queries."
          />
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Explore the official AI Trader demo safely
              </h2>

              <p className="mt-4 leading-8 text-slate-800">
                GMGN’s public AI Trader demo shows how deterministic screening,
                wallet evaluation, machine-learning scoring, LLM explanation,
                and manual trade confirmation can fit into one interface. It
                also makes an important distinction between simulation and live
                execution.
              </p>

              <p className="mt-4 leading-8 text-slate-800">
                Treat the demo as a product and workflow reference. Do not
                paste real credentials into an unfamiliar environment. If you
                test with a local backend, confirm exactly where keys are sent,
                whether they remain local, whether they are written to storage,
                and whether the mode is simulation or live.
              </p>

              <a
                href={GMGN_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
              >
                Open the GMGN AI Trader demo ↗
              </a>
            </div>

            <TutorialFigure
              src={`${IMAGE_BASE}/gmgn-ai-agent-demo.png`}
              alt="GMGN AI Trader demo interface showing token screening, wallet evaluation and manual trade confirmation controls"
              caption="GMGN AI Trader demo: use demo or simulation controls to understand the workflow before considering any live trading feature."
            />
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Safe prompts for research
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            These prompts are designed to return useful data without asking the
            agent to trade. Replace placeholders with addresses you have
            independently verified.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {safePrompts.map(([title, prompt]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <div className="mt-4">
                  <CodeBlock>{prompt}</CodeBlock>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            How to interpret wallet and Smart Money data
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            A wallet page can show useful context such as holdings, activity,
            realized or unrealized P&amp;L, win-rate distributions, trade
            counts, hold time, and recent entries. It can also mislead if the
            sample is small, the positions are unmatched, transfers or airdrops
            are mixed with trades, or the wallet’s timing and liquidity cannot
            be reproduced.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            A Smart Money or KOL label is a provider classification, not proof
            of skill, identity, independence, or future performance. If several
            tracked wallets buy the same token in a short period, treat it as a
            research event that requires contract, liquidity, holder, timing,
            and execution verification—not as a buy signal.
          </p>
        </Section>

        <Section>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Security fields are checks, not guarantees
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            Contract-security indicators, honeypot checks, authority status,
            holder concentration, bundler exposure, sniper activity, and
            liquidity data are useful inputs. No single field proves that a
            token is safe or that you can sell at a displayed price. Token
            metadata, social accounts, volume, and visible activity can be
            manipulated.
          </p>

          <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-5 sm:p-6">
            <h3 className="text-xl font-black text-rose-950">
              Before any signed or trading action
            </h3>

            <p className="mt-3 leading-8 text-rose-950">
              Manually verify the chain, token contract, wallet, amount,
              slippage, route, and intended order. An AI agent can produce a
              similar-looking address or misunderstand an instruction. Real
              on-chain transactions are irreversible once confirmed.
            </p>
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Troubleshooting and safety checks
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-black">Symptom</th>
                  <th className="px-5 py-4 font-black">Safer diagnostic path</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {troubleshooting.map(([symptom, action]) => (
                  <tr key={symptom}>
                    <td className="px-5 py-4 font-black text-slate-950">
                      {symptom}
                    </td>
                    <td className="px-5 py-4 leading-7 text-slate-800">
                      {action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Frequently asked questions
          </h2>

          <div className="mt-8 grid gap-4">
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {question}
                </h3>

                <p className="mt-3 leading-8 text-slate-800">{answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className="border-y border-slate-200 bg-slate-50">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Official sources and verification
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-800">
            This tutorial was reviewed on {UPDATED}. GMGN can change its
            credentials, supported chains, command behavior, pricing, rate
            limits, security controls, and demos. Check the current first-party
            material before creating credentials or enabling any signed
            workflow.
          </p>

          <ul className="mt-6 space-y-4 leading-8 text-slate-800">
            <li>
              <a
                href={GMGN_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-800 underline underline-offset-4"
              >
                GMGN Agent API documentation ↗
              </a>{" "}
              — API-key setup, query and trading credential requirements,
              supported Agent API chains, and usage examples.
            </li>

            <li>
              <a
                href={GMGN_KEYS}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-800 underline underline-offset-4"
              >
                GMGN public-key generation guide ↗
              </a>{" "}
              — Ed25519 key-pair and public-key upload instructions.
            </li>

            <li>
              <a
                href={GMGN_SKILLS}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-800 underline underline-offset-4"
              >
                GMGNAI/gmgn-skills repository ↗
              </a>{" "}
              — Current skills, CLI installation, command matrix, workflows,
              and security notes.
            </li>

            <li>
              <a
                href={GMGN_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-800 underline underline-offset-4"
              >
                GMGN AI Trader demo ↗
              </a>{" "}
              — Public demo of token screening, wallet evaluation, simulation,
              and manual confirmation workflows.
            </li>
          </ul>
        </Section>

        <Section>
          <div className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
              Disclosed partner link
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Ready to explore GMGN?
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              CryptosBeginner may earn a commission if you use the GMGN partner
              link. It does not change the review, setup guidance, credential
              warnings, or the risks of using meme-coin tools and AI-assisted
              workflows.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AffiliateButton className="w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 sm:w-auto">
                Open GMGN through the partner link
              </AffiliateButton>

              <Link
                href="/meme-coin-research"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Read our meme-coin research guide
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700 sm:p-6">
            Educational tutorial only. Not financial, investment, legal, or tax
            advice. Meme coins, copy trading, automated trading, and AI-assisted
            execution can result in total loss. GMGN is a third-party product.
            Review the{" "}
            <Link href="/disclaimer" className="font-bold underline">
              CryptosBeginner disclaimer
            </Link>
            .
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
