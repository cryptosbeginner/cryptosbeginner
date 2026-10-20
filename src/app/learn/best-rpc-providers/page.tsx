import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/best-rpc-providers`;
const UPDATED = "21 October 2026";
const UPDATED_ISO = "2026-10-21";

export const metadata: Metadata = {
  title: "Best RPC Node Providers: 7 Compared on Price, Free Tiers and Chains",
  description:
    "The 7 best RPC node providers compared on published pricing, free tiers, and chains: Alchemy, Infura, QuickNode, Chainstack, Ankr, GetBlock, dRPC.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best RPC Node Providers: 7 Compared on Price and Free Tiers",
    description:
      "Alchemy, Infura, QuickNode, Chainstack, Ankr, GetBlock, and dRPC compared on what they publish: pricing, free tiers, chains, and archive access.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best RPC Node Providers: 7 Compared",
    description:
      "Published pricing, free tiers, and chain coverage for 7 RPC providers, explained in plain English for beginners.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What is an RPC node provider?",
    answer:
      "An RPC node provider runs blockchain nodes and sells or gives away access to them through an endpoint URL. Your wallet or app sends requests to that URL (what is my balance, send this transaction, what is the price in this pool) and the provider's node answers from the blockchain's records. You get the data without running a node yourself.",
  },
  {
    question: "Do I need an RPC provider if I only use a wallet?",
    answer:
      "You already use one. MetaMask and most other wallets ship connected to a default provider, usually Infura. You only need to think about it if your balance loads slowly, swaps keep failing, or you want a provider that does not log as much about your activity. Changing the RPC URL in your wallet settings takes about a minute.",
  },
  {
    question: "What is the best free RPC provider?",
    answer:
      "For raw free volume, dRPC's free tier offers 210M compute units a month on public nodes, and Ankr's Freemium plan offers 200M API credits a month across 65+ chains. For learning and building, Alchemy's free plan (30M compute units a month) pairs a decent quota with the friendliest dashboard and docs. Chainstack's free 3M request units are the easiest to understand because one standard request costs one unit.",
  },
  {
    question: "Why do providers charge in compute units or credits instead of requests?",
    answer:
      "Because requests are not equal. Reading a balance is cheap; scanning a year of event logs is expensive. Providers weight each method so heavy calls cost more units. That keeps light users from subsidising heavy ones, but it also makes your bill harder to predict. Before paying, check the provider's method weight table for the calls your app makes most.",
  },
  {
    question: "What is archive access, and do I need it?",
    answer:
      "A normal full node can tell you the current state and recent history. An archive node can answer questions about any past block, such as what an address held two years ago. Most DeFi users and most apps never need it. Analytics tools, tax software, and researchers do. Several providers charge extra for it or only include it on paid plans.",
  },
  {
    question: "Can I use more than one RPC provider?",
    answer:
      "Yes, and serious projects do. A second endpoint acts as a backup when the first one slows down or goes offline. Some tools, including dRPC, are built to route requests across several node operators automatically. For a personal wallet, keeping a spare RPC URL noted down is enough.",
  },
  {
    question: "Is a public RPC endpoint safe to use?",
    answer:
      "It is safe in the sense that an RPC provider cannot move your funds; it only reads data and relays the transactions you sign. The trade-offs are privacy and reliability. The provider can see your IP address and the addresses you query, and public endpoints slow down or drop requests when the network is busy.",
  },
  {
    question: "What does RPC stand for?",
    answer:
      "Remote Procedure Call. It is an old computing term for asking another computer to do something and send back the result. In crypto, your app calls a function on a node (get balance, get block, send transaction) and the node returns the answer, usually in JSON format, which is why you will also see the term JSON-RPC.",
  },
];

type Provider = {
  name: string;
  site: string;
  pricing: string;
  pick: string;
  overview: string[];
  params: [string, string][];
  strengths: string[];
  limitations: string[];
};

const providers: Provider[] = [
  {
    name: "Alchemy",
    site: "https://www.alchemy.com",
    pricing: "https://www.alchemy.com/pricing",
    pick: "Best for beginners",
    overview: [
      "Alchemy is the name most Ethereum developers learn first, and it earned that spot with good documentation and a dashboard that does not assume you already know everything. If you are setting up your first endpoint, this is the gentlest on-ramp of the seven.",
      "Pricing runs on compute units. A simple call might cost 10 units, a heavy one 100 or more, and Alchemy's own docs suggest budgeting around 27 units for an average request. The free plan's 30M units a month works out to roughly a million typical requests, which is plenty for learning and small projects.",
    ],
    params: [
      ["Chains", "Dozens of networks: Ethereum, Solana, Base, Polygon, Arbitrum, Optimism, BNB Chain, Avalanche and more"],
      ["Free tier", "30M compute units per month"],
      ["Entry price", "Pay as you go, no monthly minimum; $0.525 per 1M compute units"],
      ["Pricing model", "Compute units, weighted by method"],
      ["Archive access", "Yes, full and archive nodes offered"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Beginner-friendly dashboard, docs and tutorials",
      "Pay as you go with no monthly fee once you outgrow free",
    ],
    limitations: [
      "Compute unit weights make bills hard to forecast exactly",
      "Extra throughput capacity is sold in blocks on top of usage",
    ],
  },
  {
    name: "Infura",
    site: "https://www.infura.io",
    pricing: "https://www.infura.io/pricing",
    pick: "The default inside MetaMask",
    overview: [
      "Infura is owned by Consensys and is the default RPC provider inside MetaMask, which means millions of people already use it without knowing its name. That default status is its biggest strength: battle-tested at wallet scale, with a long track record on Ethereum.",
      "Infura bills in credits, with each method assigned a credit cost. The free Core plan carries a daily credit quota (3M credits a day in the pricing table), and paid plans start at $50 a month for the Developer tier. Its focus stays close to Ethereum and the major EVM networks rather than chasing every chain.",
    ],
    params: [
      ["Chains", "Ethereum-first: Ethereum and major EVM networks, plus file storage APIs"],
      ["Free tier", "Core plan, free, with a daily credit quota (3M credits/day per the pricing table)"],
      ["Entry price", "$50/month (Developer plan)"],
      ["Pricing model", "Credits, weighted by method"],
      ["Archive access", "Listed as a plan feature; availability depends on tier"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Proven at huge scale as MetaMask's default provider",
      "Simple plan ladder if your needs stay inside the EVM world",
    ],
    limitations: [
      "Narrower chain coverage than the multi-chain specialists",
      "Committed uptime SLAs sit on the custom Enterprise plan",
    ],
  },
  {
    name: "QuickNode",
    site: "https://www.quicknode.com",
    pricing: "https://www.quicknode.com/pricing",
    pick: "Best toolkit around the endpoint",
    overview: [
      "QuickNode sells more than raw node access. Streams (blockchain data pipelines), webhooks and a marketplace of add-ons sit around the core RPC product. If your project grows into that tooling, having it under one account is genuinely convenient.",
      "Billing uses API credits, calculated as method responses multiplied by a method multiplier, so a heavy call costs more than a light one. The free trial includes 10M credits, and the Build plan at $49 a month raises that to 80M credits with 50 requests per second.",
    ],
    params: [
      ["Chains", "Dozens of chains across EVM networks and Solana"],
      ["Free tier", "Free trial with 10M API credits, 15 requests/second"],
      ["Entry price", "$49/month (Build plan)"],
      ["Pricing model", "API credits: responses multiplied by method multipliers"],
      ["Archive access", "Yes, listed across plans"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Streams, webhooks and add-ons in the same account",
      "Lets you pay in crypto on paid plans",
    ],
    limitations: [
      "Method multipliers mean two similar apps can see very different bills",
      "The extra tooling only pays off if you actually use it",
    ],
  },
  {
    name: "Chainstack",
    site: "https://chainstack.com",
    pricing: "https://chainstack.com/pricing",
    pick: "Most predictable billing",
    overview: [
      "Chainstack's pitch is calm, predictable infrastructure, and its billing matches the pitch. One standard request costs one request unit. Archive requests cost two. That is the easiest pricing on this page to model in a spreadsheet before you spend anything.",
      "The free Developer plan includes 3M request units a month at 25 requests per second, with WebSockets included. Archive data starts on the Growth plan at $49 a month. Chainstack also sells dedicated nodes if you later need hardware of your own.",
    ],
    params: [
      ["Chains", "25+ protocols, including Ethereum, Solana, BNB Chain, Polygon and Base"],
      ["Free tier", "3M request units per month, 25 requests/second"],
      ["Entry price", "$49/month (Growth plan)"],
      ["Pricing model", "Request units: 1 per standard request, 2 per archive request"],
      ["Archive access", "Paid plans (Growth and up); not on the free plan"],
      ["WebSocket", "Yes, included on the free plan"],
    ],
    strengths: [
      "Flat, easy to predict pricing with no method weight surprises",
      "Dedicated node upgrade path inside the same platform",
    ],
    limitations: [
      "Free plan has no archive access",
      "Chain list is shorter than GetBlock or dRPC",
    ],
  },
  {
    name: "Ankr",
    site: "https://www.ankr.com",
    pricing: "https://www.ankr.com/pricing",
    pick: "Best multi-chain value",
    overview: [
      "Ankr casts the widest free net. Its public endpoints need no sign-up at all, and the Freemium plan adds 200M API credits a month across 65+ chains once you create an account. If you hop between ecosystems, that breadth is hard to beat at zero cost.",
      "Paid usage is pay as you go at $0.10 per 1M credits. Ankr keeps its per-request prices flat by chain family rather than by method weight: an EVM request costs 200 credits ($0.00002), a Solana request 500. Ankr also states that archive access is included on every tier, free included, which is unusual.",
    ],
    params: [
      ["Chains", "65+ chains on Freemium; 100+ across the platform"],
      ["Free tier", "Public endpoints free with no sign-up (20 requests/second); Freemium adds 200M credits/month"],
      ["Entry price", "Pay as you go; $0.10 per 1M API credits"],
      ["Pricing model", "API credits, flat per request by chain family"],
      ["Archive access", "Included on every tier, per Ankr"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Widest free multi-chain coverage on this list",
      "Flat per-request pricing is simpler than method weights",
    ],
    limitations: [
      "Free tiers run at modest requests-per-second caps",
      "The full SLA and dedicated setup are Enterprise conversations",
    ],
  },
  {
    name: "GetBlock",
    site: "https://getblock.io",
    pricing: "https://getblock.io/pricing",
    pick: "Widest chain catalogue",
    overview: [
      "GetBlock has run nodes since 2019 and lists 130+ blockchains, including plenty of networks the bigger names skip. For a wallet or app that needs an unusual chain, it is often the first place that has it.",
      "It bills in compute units, where heavy methods like eth_getLogs cost more than simple lookups. The free plan renews daily at 50,000 compute units, and paid shared plans start at $49 a month. Dedicated nodes are priced publicly from $1,000 a month, which is refreshingly upfront for this market.",
    ],
    params: [
      ["Chains", "130+ blockchains, EVM and non-EVM"],
      ["Free tier", "50,000 compute units per day"],
      ["Entry price", "$49/month (Starter shared plan)"],
      ["Pricing model", "Compute units, weighted by method and chain"],
      ["Archive access", "On selected networks; broader access on paid plans"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Huge chain catalogue, including less common networks",
      "Public pricing for dedicated nodes, no sales call needed",
    ],
    limitations: [
      "Daily free quota does not roll over, so bursty testing eats it fast",
      "Archive coverage varies by network rather than applying everywhere",
    ],
  },
  {
    name: "dRPC",
    site: "https://drpc.org",
    pricing: "https://drpc.org/pricing",
    pick: "Best free tier, decentralised routing",
    overview: [
      "dRPC does not run one big fleet of nodes. It routes your request across a network of independent node providers (60+ of them, across 8 geographic clusters) behind a load balancer. If one operator stumbles, traffic moves to another. That design makes it a natural backup provider as well as a main one.",
      "Its pricing is the simplest here after Chainstack: every request costs a flat 20 compute units on the paid Growth plan, any method, any chain, archive and trace included, at $6 per 1M requests with no monthly commitment. The free tier is generous too, 210M units a month served from public nodes.",
    ],
    params: [
      ["Chains", "130+ chains across 230+ networks"],
      ["Free tier", "210M compute units per month on public nodes, 100 requests/second"],
      ["Entry price", "Pay as you go; $6 per 1M requests"],
      ["Pricing model", "Flat 20 compute units per request, any method"],
      ["Archive access", "Yes, at the same flat rate as normal calls"],
      ["WebSocket", "Yes"],
    ],
    strengths: [
      "Routing across many operators removes a single point of failure",
      "Flat pricing covers archive and trace calls, no method weight maths",
    ],
    limitations: [
      "Free tier runs on public nodes and skips some advanced methods",
      "You do not choose which operator answers a given request",
    ],
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

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-black tracking-tight text-slate-950">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

export default function BestRpcProvidersPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best RPC Node Providers: 7 Compared on Price, Free Tiers and Chains",
    description: metadata.description,
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
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      { "@type": "ListItem", position: 3, name: "Best RPC Node Providers", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · DeFi infrastructure</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Best RPC node providers, compared honestly
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Every time your wallet shows a balance or a DeFi app quotes a swap, an RPC endpoint did
              the fetching. Here are the seven providers worth knowing, compared on the things they
              actually publish: price, free tiers, chains, and what is hiding in the fine print.
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
          <Section id="quick-picks">
            <H2>Quick picks</H2>
            <P>
              Short on time? These three cover most people. The full reviews below explain the
              trade-offs, and the pricing table further down has the numbers.
            </P>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">Best for beginners</p>
                <p className="mt-2 text-lg font-black text-slate-950">Alchemy</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Friendly dashboard, strong documentation, 30M free compute units a month, and pay
                  as you go after that. The easiest first endpoint to set up.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Best free tier</p>
                <p className="mt-2 text-lg font-black text-slate-950">dRPC</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  210M compute units a month free on public nodes, roughly ten million typical calls.
                  Ankr's Freemium plan (200M credits, 65+ chains) is a close second.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Best multi-chain</p>
                <p className="mt-2 text-lg font-black text-slate-950">Ankr</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  65+ chains on the free Freemium plan and 100+ across the platform, with flat
                  per-request pricing. Chainstack is the pick if predictable billing matters more.
                </p>
              </div>
            </div>
          </Section>

          <Section id="what-is-rpc">
            <H2>What is an RPC node, in plain English?</H2>
            <P>
              A blockchain is kept by thousands of computers called nodes. Each node holds a copy of
              the ledger: every balance, every transaction, every smart contract. Your wallet is not
              a node. It is a small app on your phone or browser, and it cannot store or check that
              ledger by itself.
            </P>
            <P>
              So your wallet asks a node to do it. The asking happens through an RPC endpoint, which
              is just a web address connected to someone else's node. Think of it as a waiter
              between you and the kitchen. You say "what is my balance?" The waiter carries the
              question to the kitchen, the kitchen checks its records, and the waiter brings the
              answer back. When you send a swap, the same waiter carries your signed order in.
            </P>
            <P>
              An RPC provider is a company that runs a lot of these waiters and kitchens, and rents
              you an address. Instead of buying hardware and keeping a node synced around the clock,
              you paste their URL into your wallet or app and get on with your day.
            </P>
            <figure className="mt-6">
              <Image
                src="/images/learn/rpc-providers/rpc-flow.svg"
                alt="Flow diagram showing a wallet or DeFi app sending a request through an RPC endpoint to blockchain nodes and receiving the answer back"
                width={1200}
                height={640}
                className="h-auto w-full rounded-3xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
                Every balance check and swap quote follows this path. The endpoint in the middle is
                the part you can choose.
              </figcaption>
            </figure>
          </Section>

          <Section id="why-it-matters">
            <H2>Why your RPC choice matters, even if you never write code</H2>
            <P>
              Most people meet their RPC provider by accident. Your wallet came pre-connected to
              one, probably Infura if you use MetaMask, and it worked, so you never thought about
              it again. Fair enough. But the endpoint quietly shapes three things you do notice.
            </P>
            <div className="mt-6 space-y-3">
              {[
                ["How fresh your wallet feels", "A slow or congested endpoint means balances that lag a block behind, prices that look stale, and a wallet that feels broken when the chain is fine. During a busy NFT mint or a market crash, public endpoints are the first thing to buckle."],
                ["Whether swaps go through", "When a DeFi app cannot reach its endpoint, quotes fail, transactions time out, or the app shows a price that has already moved. People often blame the DEX or the chain when the real problem is a rate-limited RPC in the middle."],
                ["Who sees your activity", "Your endpoint can log your IP address alongside the wallet addresses you ask about. That does not put your funds at risk, but it does link your identity to your addresses in someone's database. Privacy-conscious users pick providers, or run setups, that log less."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
            <P>
              Changing the endpoint in a wallet like MetaMask is a settings change, not a migration.
              Your funds, addresses and history stay exactly where they are. You are just choosing a
              different waiter.
            </P>
          </Section>

          <Section id="endpoint-types">
            <H2>Endpoint types, explained</H2>
            <P>
              Providers sell the same data through four kinds of endpoint. The differences are who
              shares the node, how hard you can push it, and what it costs.
            </P>
            <figure className="mt-6">
              <Image
                src="/images/learn/rpc-providers/endpoint-types.svg"
                alt="Comparison graphic of public, shared, private and dedicated RPC endpoints showing cost, speed and limits for each type"
                width={1200}
                height={700}
                className="h-auto w-full rounded-3xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
                The four endpoint types side by side. Most readers will live in the middle two.
              </figcaption>
            </figure>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="px-5 py-4 font-black">Type</th>
                    <th className="px-5 py-4 font-black">How it works</th>
                    <th className="px-5 py-4 font-black">Cost</th>
                    <th className="px-5 py-4 font-black">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Public", "Open endpoints anyone can call, no account or key", "Free", "Testing, light personal wallet use"],
                    ["Shared", "Your requests share a pool of nodes with other customers, separated by your API key", "Free tier, then paid plans", "Most apps and most people"],
                    ["Private", "A paid endpoint with your own key, higher limits and priority over public traffic", "Monthly plan or per-request billing", "Production apps, active traders"],
                    ["Dedicated", "A node (or cluster) provisioned only for you, in a region you choose", "Priced per node, often $1,000/month and up", "Exchanges, indexers, heavy workloads"],
                  ].map(([type, how, cost, best], i) => (
                    <tr key={type} className={i % 2 === 0 ? "border-t border-slate-200 bg-white" : "border-t border-slate-200 bg-slate-50"}>
                      <td className="px-5 py-4 font-black text-slate-950">{type}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{how}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{cost}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              One naming warning: providers use these words loosely. A "private" endpoint at one
              company can be the same shared pool as another company's standard plan, just with your
              own key. Read the requests-per-second and quota numbers, not the label.
            </P>
          </Section>

          <Section id="methodology">
            <H2>How we compared these providers</H2>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-700">Our method, stated plainly</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                We read each provider's official documentation and pricing page on 21 October 2026
                and recorded what they publish: chain coverage, free tier allowances, entry prices,
                how usage is billed, archive access and WebSocket support. Every figure in this
                guide traces back to one of those pages, linked in the sources section.
              </p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                We did not run load tests, and we are not going to dress up other people's
                benchmarks as our own. You will find no latency or error-rate league table here,
                because we cannot stand behind numbers we did not measure. Where a provider's own
                pages disagreed with each other, we say so and use the more conservative figure.
              </p>
            </div>
            <P>
              Prices and free tiers in this industry change often, sometimes monthly. Treat the
              numbers below as a snapshot from October 2026 and check the linked pricing page
              before you commit to anything.
            </P>
          </Section>

          <Section id="providers">
            <H2>The 7 providers, reviewed</H2>
            <P>
              Each review follows the same shape: what the provider is like to use, a parameter
              table from its published material, and two honest strengths and limitations.
            </P>
            <div className="mt-8 space-y-10">
              {providers.map((provider) => (
                <article key={provider.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-2xl font-black tracking-tight text-slate-950">{provider.name}</h3>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-indigo-700">
                      {provider.pick}
                    </span>
                  </div>
                  {provider.overview.map((para) => (
                    <P key={para.slice(0, 32)}>{para}</P>
                  ))}
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-full border-collapse text-left text-sm">
                      <tbody>
                        {provider.params.map(([label, value], i) => (
                          <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="w-40 px-5 py-3 align-top font-black text-slate-950">{label}</td>
                            <td className="px-5 py-3 leading-6 text-slate-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-emerald-800">Strengths</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {provider.strengths.map((s) => (
                          <li key={s}>+ {s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-amber-800">Limitations</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {provider.limitations.map((l) => (
                          <li key={l}>- {l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    Official site:{" "}
                    <a href={provider.site} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900">
                      {provider.name}
                    </a>{" "}
                    ·{" "}
                    <a href={provider.pricing} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900">
                      Pricing page
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="pricing-snapshot">
            <H2>Pricing snapshot</H2>
            <P>
              The headline numbers, side by side. Remember that a "unit" means something different
              at every provider, so the free tier column compares each company's own allowance, not
              a converted equivalent.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="px-5 py-4 font-black">Provider</th>
                    <th className="px-5 py-4 font-black">Free tier (published)</th>
                    <th className="px-5 py-4 font-black">First paid step</th>
                    <th className="px-5 py-4 font-black">How you are billed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Alchemy", "30M compute units/month", "Pay as you go, $0.525 per 1M units", "Compute units, weighted by method"],
                    ["Infura", "Free Core plan, daily credit quota", "$50/month (Developer)", "Credits, weighted by method"],
                    ["QuickNode", "Free trial, 10M API credits", "$49/month (Build)", "API credits, method multipliers"],
                    ["Chainstack", "3M request units/month", "$49/month (Growth)", "Request units, 1 per standard call"],
                    ["Ankr", "Public free; Freemium 200M credits/month", "Pay as you go, $0.10 per 1M credits", "Credits, flat per request by chain"],
                    ["GetBlock", "50,000 compute units/day", "$49/month (Starter)", "Compute units, weighted by method"],
                    ["dRPC", "210M compute units/month (public nodes)", "Pay as you go, $6 per 1M requests", "Flat 20 units per request, any method"],
                  ].map(([name, free, paid, billing], i) => (
                    <tr key={name} className={i % 2 === 0 ? "border-t border-slate-200 bg-white" : "border-t border-slate-200 bg-slate-50"}>
                      <td className="px-5 py-4 font-black text-slate-950">{name}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{free}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{paid}</td>
                      <td className="px-5 py-4 leading-6 text-slate-600">{billing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              Snapshot taken from official pricing pages on 21 October 2026. Providers adjust
              quotas and prices without much warning, so confirm before you build a budget on
              these numbers.
            </P>
          </Section>

          <Section id="budget-traps">
            <H2>Five budget traps to check before you pay</H2>
            <P>
              Nobody gets surprised by the monthly plan price. They get surprised by these.
            </P>
            <div className="mt-6 space-y-3">
              {[
                ["Method weight multipliers", "A plan that advertises millions of units can drain fast if your app leans on heavy methods like eth_getLogs or trace calls. Check the provider's weight table against your three most common calls before comparing headline quotas."],
                ["Low requests-per-second on free tiers", "A generous monthly quota with a 15 to 25 requests-per-second cap still fails a busy app. Bursts matter more than monthly totals for anything user-facing."],
                ["Archive sold as an add-on", "Historical state queries often sit behind a higher plan or a per-call premium (Chainstack charges 2 units for an archive call; its free plan has none). If your tool reads old blocks, price that in from the start."],
                ["SLAs reserved for Enterprise", "The uptime guarantee and the fast support response usually live on custom contracts. Self-serve plans are best-effort, however polished the marketing page looks."],
                ["Regional throttling", "Endpoints are served from specific regions. An app whose users are in Asia but whose endpoint sits in the US will feel slow no matter the plan. Check where you can deploy before you pay."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="how-to-choose">
            <H2>How to choose, by what you actually do</H2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Casual DeFi user</p>
                <p className="mt-2 font-black text-slate-950">You probably need nothing new</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Your wallet's default endpoint is fine for checking balances and the odd swap. If
                  it feels slow at peak times, add a free Ankr or dRPC public endpoint as an
                  alternative network RPC in your wallet settings. Cost: zero.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Hobby developer</p>
                <p className="mt-2 font-black text-slate-950">Start on Alchemy or Chainstack free</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Alchemy if you want the best tutorials and dashboard while you learn. Chainstack
                  if you want billing you can predict to the unit. Both free tiers are big enough
                  to build and launch a small project.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Active trader or bot</p>
                <p className="mt-2 font-black text-slate-950">Pay for headroom, keep a backup</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Requests per second and WebSocket stability matter more than monthly quota. A paid
                  QuickNode or Chainstack plan near your users, with dRPC set up as automatic
                  failover, covers both speed and the day your main provider has an outage.
                </p>
              </div>
            </div>
          </Section>

          <Section id="risks">
            <H2>Risk checklist before you commit</H2>
            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <ul className="space-y-3 text-sm leading-7 text-slate-800">
                <li><strong className="text-slate-950">Vendor lock-in:</strong> provider-specific APIs (enhanced token or NFT endpoints) are handy and sticky. Plain JSON-RPC calls move between providers in minutes; proprietary extras do not.</li>
                <li><strong className="text-slate-950">No failover:</strong> one endpoint means one point of failure. Keep a second provider's URL configured, even on a free tier, so an outage is an inconvenience rather than downtime.</li>
                <li><strong className="text-slate-950">Single region:</strong> if all your traffic routes through one continent, latency and regional outages both hit harder. Prefer providers that let you pick or spread regions.</li>
                <li><strong className="text-slate-950">Key exposure:</strong> an API key pasted into frontend code or a public repo will be found and abused, and the usage lands on your bill. Restrict keys by domain or IP where the provider allows it.</li>
                <li><strong className="text-slate-950">Privacy:</strong> your provider sees your IP and the addresses you query. That is inherent to the service. If it matters to you, say so in your choice rather than discovering it later.</li>
              </ul>
            </div>
            <P>
              None of this makes RPC providers risky in the way a shady exchange is risky. They
              cannot touch your funds. The risks are operational: downtime, surprise bills, and
              building on features you cannot take with you.
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-indigo-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section id="sources">
            <H2>Sources</H2>
            <P>
              All pricing, free tier and feature claims in this guide come from the providers'
              official pages, checked on 21 October 2026:
            </P>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {providers.map((provider) => (
                <li key={provider.name}>
                  {provider.name}:{" "}
                  <a href={provider.site} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900">
                    official site
                  </a>{" "}
                  and{" "}
                  <a href={provider.pricing} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900">
                    pricing page
                  </a>
                  {provider.name === "Ankr" ? (
                    <>
                      , plus its{" "}
                      <a href="https://www.ankr.com/docs/rpc-service/service-plans/" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900">
                        service plans documentation
                      </a>
                    </>
                  ) : null}
                  .
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Last updated {UPDATED}. Educational content only, not financial advice. Providers
              change pricing and quotas over time; verify on the official pricing page before
              paying. For more on how DeFi apps fit together, see our{" "}
              <Link href="/learn/rwa-crypto-projects" className="font-bold text-indigo-700 hover:text-indigo-900">
                guide to RWA crypto projects
              </Link>{" "}
              and the rest of the{" "}
              <Link href="/learn" className="font-bold text-indigo-700 hover:text-indigo-900">
                Learn hub
              </Link>
              .
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
