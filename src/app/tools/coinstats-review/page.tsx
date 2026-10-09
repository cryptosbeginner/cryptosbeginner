import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/coinstats-review`;

const UPDATED = "9 October 2026";
const UPDATED_ISO = "2026-10-09";
const ORIGINALLY_PUBLISHED = "April 2025";

// User-confirmed masked affiliate link (go.cryptosbeginner.com redirect).
const AFFILIATE = "https://go.cryptosbeginner.com/Coinstats";
const COINSTATS_PRICING = "https://coinstats.app/pricing/";
const YOUTUBE_VIDEO_ID = "XGbqxTJ5MJE";

export const metadata: Metadata = {
  title: "CoinStats Review 2026: Pricing, Features, Security & Verdict",
  description:
    "October 2026 CoinStats review: portfolio tracking across 300+ wallets and exchanges, read-only sync, AI insights, pricing plans, pros and cons, and who it suits.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "CoinStats Review 2026: Pricing, Features, Security & Verdict",
    description:
      "A research-led CoinStats review: what the portfolio tracker covers, what Premium and Degen cost, how the read-only model works, and whether it fits you.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/coinstats-app-hero.png`,
        width: 600,
        height: 600,
        alt: "CoinStats app on a phone showing portfolio value, asset chart, and tabs for assets, DeFi, NFTs, and history",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinStats Review 2026: Pricing, Features, Security & Verdict",
    description:
      "CoinStats portfolio tracker reviewed: coverage, pricing, AI features, pros, cons, and verdict.",
    images: [`${SITE_URL}/images/coinstats-app-hero.png`],
  },
};

const faqItems = [
  {
    question: "Is CoinStats free to use?",
    answer:
      "Yes, there is a free Basic plan covering 10 portfolios, 20,000 transactions, and 10 daily syncs per portfolio. Paid tiers (Premium, Degen, Team) raise portfolio, transaction, and sync limits and unlock advanced analytics, AI features, and priority support. Yearly plans include a 7-day free trial. Pricing changes over time, so check the live pricing page before deciding.",
  },
  {
    question: "Is CoinStats safe to connect to my exchange?",
    answer:
      "CoinStats connects to exchanges with read-only API keys, which means it can see balances and transactions but cannot withdraw funds. That non-custodial design removes the biggest risk of connecting a tracker. Safety still depends on your own habits: use unique API keys per service, never enable withdrawal permissions, and secure your CoinStats account with a strong password and two-factor authentication.",
  },
  {
    question: "Does CoinStats track DeFi and NFTs?",
    answer:
      "Yes. Beyond exchange and wallet balances, CoinStats tracks positions across thousands of DeFi protocols (staking, lending, liquidity provision) and NFT holdings, so yield positions do not disappear from your overview. Exact protocol coverage changes as integrations are added, and exotic positions can occasionally misclassify.",
  },
  {
    question: "Can CoinStats do my crypto taxes?",
    answer:
      "CoinStats offers tax reporting features, with deeper reporting on paid plans and integrations such as CoinLedger mentioned in third-party roundups. Treat any tracker's tax output as a first draft: verify cost basis, check how it classifies DeFi transactions, and confirm the reports suit your country's rules before filing.",
  },
  {
    question: "What is the CoinStats AI agent?",
    answer:
      "A newer feature that answers plain-language questions about your own portfolio, such as which holding drove today's move or what your exposure to a narrative is. It also offers AI price scenarios and an exit-strategy tool. Treat its outputs as research prompts, not predictions.",
  },
  {
    question: "Who should skip CoinStats?",
    answer:
      "Skip it if you only hold on one exchange (the exchange app already shows your balance), if you need exact accounting for complex DeFi activity without reconciliation, or if you are uncomfortable connecting any third-party service to your accounts. Manual spreadsheets remain a legitimate option for simple portfolios.",
  },
] as const;

function PrimaryAffiliateButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{
        color: "#ffffff",
        textDecoration: "none",
      }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12"
    >
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

export default function CoinStatsReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "CoinStats Review 2026: Pricing, Features, Security & Verdict",
    description:
      "A research-led CoinStats review covering portfolio tracking coverage, read-only sync, AI features, pricing plans, pros and cons, and who the tracker suits.",
    datePublished: "2025-04-07",
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
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

  const videoLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "CoinStats Review 2026: Best Crypto Portfolio Tracker & AI Features?",
    description:
      "Video walkthrough of the CoinStats app: token risk scanner, AI integration, connecting portfolios, wallet tracking, swaps, tax reporting, and pricing plans.",
    thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
    contentUrl: `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · portfolio trackers</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              CoinStats Review 2026: the all-in-one portfolio tracker, assessed
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              CoinStats connects your exchanges, wallets, DeFi positions, and NFTs into one dashboard
              with live prices, profit and loss, alerts, and newer AI features. This review covers what
              it tracks, what the plans cost, how the read-only security model works, and where it falls
              short, so you can decide if it fits your setup.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try CoinStats free</PrimaryAffiliateButton>
            </div>
            <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-400">
              <strong className="text-slate-200">Affiliate disclosure:</strong> Some links on this page
              are affiliate links. CryptosBeginner may earn a commission if you register through one.
              This does not change our assessment criteria or conclusions. This page is educational
              content, not financial advice.
            </p>
          </div>
        </section>

        <div className="py-10">
          <Section>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">TL;DR: our take</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  <strong className="text-slate-900">Best for:</strong> investors with crypto spread
                  across several exchanges, wallets, and DeFi positions who want one live dashboard.
                </li>
                <li>
                  <strong className="text-slate-900">Not ideal for:</strong> single-exchange holders,
                  anyone needing exact DeFi accounting without reconciliation, and people unwilling to
                  connect a third-party service to their accounts.
                </li>
                <li>
                  <strong className="text-slate-900">Pricing reality:</strong> a genuinely useful free
                  tier, with Premium around $13.99/month billed yearly and a Degen tier for heavy users.
                  Plan caps and prices change, so verify the live pricing page.
                </li>
                <li>
                  <strong className="text-slate-900">Security model:</strong> read-only API connections
                  that cannot withdraw funds. Sensible design, but your own key hygiene still matters.
                </li>
                <li>
                  <strong className="text-slate-900">Main caveat:</strong> breadth is both the strength
                  and the weakness. More integrations mean more chances of misclassified transactions
                  and small valuation mismatches.
                </li>
              </ul>
            </div>
          </Section>

          <Section id="video">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Video review</p>
            <H2>Watch: CoinStats review 2026</H2>
            <P>
              Our video walkthrough covers the mobile app and web terminal, the token risk scanner,
              AI integration, connecting portfolios, wallet tracking, swaps, tax reporting, and the
              pricing plans, in about six minutes.
            </P>
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="CoinStats Review 2026: Best Crypto Portfolio Tracker & AI Features?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Section>

          <Section>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">On this page</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-bold text-indigo-700">
              <li><a href="#video" className="hover:text-indigo-900">Video review</a></li>
              <li><a href="#what-is" className="hover:text-indigo-900">What CoinStats is</a></li>
              <li><a href="#features" className="hover:text-indigo-900">Features that matter</a></li>              <li><a href="#pricing" className="hover:text-indigo-900">Pricing plans</a></li>
              <li><a href="#pros-cons" className="hover:text-indigo-900">Pros and cons</a></li>
              <li><a href="#security" className="hover:text-indigo-900">Security: the read-only model</a></li>
              <li><a href="#who" className="hover:text-indigo-900">Who it suits, and who should skip it</a></li>
              <li><a href="#alternatives" className="hover:text-indigo-900">Alternatives</a></li>
              <li><a href="#verdict" className="hover:text-indigo-900">Verdict</a></li>
              <li><a href="#faq" className="hover:text-indigo-900">FAQ</a></li>
            </ol>
          </Section>

          <Section id="what-is">
            <H2>What is CoinStats?</H2>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <Image
                src="/images/coinstats-app-hero.png"
                alt="CoinStats app on a phone showing portfolio value, asset chart, and tabs for assets, DeFi, NFTs, and history"
                width={600}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <P>
              CoinStats is a crypto portfolio tracker: one dashboard that pulls together balances from
              your exchanges, wallets, DeFi positions, and NFTs, then shows live prices, allocation,
              and profit and loss. Instead of opening five apps to answer "where do I stand," you
              connect everything once and read one screen.
            </P>
            <P>
              The company has been building the product since 2017, led by founder and CEO Narek
              Gevorgyan. By its own reporting it serves around a million users, with coverage claims of
              300+ wallets and exchanges, 100+ blockchains, more than 10,000 DeFi protocols, and 20,000+
              tracked coins. Its pricing page reports 4.8 stars from 153,000 App Store reviews and 4.7
              stars from 57,000 Google Play reviews. It runs on web, iOS, Android, macOS, and Apple
              Watch, with widgets for quick glances at your portfolio.
            </P>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <Image
                src="/images/coinstats-app-ratings.png"
                alt="CoinStats app store ratings: 4.8 stars from 153,000 App Store reviews and 4.7 stars from 57,000 Google Play reviews"
                width={1353}
                height={547}
                className="h-auto w-full"
              />
            </div>
            <P>
              The core idea is simple and worth stating plainly: CoinStats watches your money, it never
              holds it. Connections are read-only, so the app can display your positions but cannot move
              funds. That separation is the single most important thing to understand before connecting
              anything.
            </P>
          </Section>

          <Section id="features">
            <H2>Features that matter</H2>
            <P>
              <strong className="text-slate-900">Track any wallet.</strong> You can paste any public
              wallet address and follow its balances, tokens, and activity without connecting anything
              or creating an account relationship with the owner. It is the fastest way to research a
              wallet you found elsewhere: no API keys, no permissions, just read-only observation of
              public on-chain data.
            </P>
            <P>
              <strong className="text-slate-900">Automatic sync.</strong> Add an exchange with a
              read-only API key or paste a wallet address, and CoinStats imports balances and
              transaction history by itself. For most users this replaces the spreadsheet they kept
              meaning to maintain. Sync frequency depends on your plan, and exchange APIs can lag
              during volatile periods, which is a limitation of the data source rather than the app.
            </P>
            <P>
              <strong className="text-slate-900">Live PnL and allocation.</strong> The dashboard shows
              total value, asset allocation, and profit and loss with historical performance charts. A
              portfolio heatmap and per-asset breakdowns help you see at a glance which positions are
              doing the work. Some users report cost-basis quirks on certain exchange imports, so treat
              the numbers as a strong first draft and reconcile anything that looks off.
            </P>
            <P>
              <strong className="text-slate-900">Alerts and news.</strong> Custom price, volume, and
              market-cap alerts plus a news feed filtered toward your actual holdings. Done well, this
              replaces doom-scrolling five different sites. Alert limits scale with the plan.
            </P>
            <P>
              <strong className="text-slate-900">DeFi and NFT tracking.</strong> Staking, lending, and
              liquidity positions across thousands of protocols appear alongside plain token balances,
              and NFT holdings are included too. This is where CoinStats pulls ahead of simpler
              trackers, though exotic positions sometimes show up as "unknown" until parsers catch up.
            </P>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <Image
                src="/images/coinstats-app-features.png"
                alt="CoinStats app views: a portfolio value alert, an ETH to USDT swap interface, and a wallet performance chart"
                width={1184}
                height={1100}
                className="h-auto w-full"
              />
            </div>
            <P>
              <strong className="text-slate-900">AI agent and insights.</strong> Newer additions include
              an AI agent that answers plain questions about your own holdings ("which coin drove
              today's move?"), AI price scenarios, an exit-strategy tool, and a token risk scanner.
              Useful as research prompts. Not predictions, and the deeper AI features sit on paid plans.
            </P>
            <P>
              <strong className="text-slate-900">Swap, wallet, and tax tools.</strong> CoinStats also
              offers built-in swaps, a non-custodial wallet, and tax reporting features, with deeper
              reporting on paid tiers. A purist note: putting fund-moving features inside a tracking
              tool mixes two jobs. If you prefer separation, use CoinStats for tracking only.
            </P>
          </Section>

          <Section id="pricing">
            <H2>Pricing plans</H2>
            <P>
              CoinStats sells tiers based on how much you track: portfolio count, transaction history,
              and sync frequency. The free Basic plan covers 10 portfolios, 20,000 transactions, and 10
              daily syncs per portfolio, which is genuinely enough for a casual holder with a few
              wallets. Yearly plans start with a 7-day free trial, and you are only charged if you stay
              past the trial.
            </P>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-black">Plan</th>
                    <th className="py-3 pr-4 font-black">Indicative price</th>
                    <th className="py-3 pr-4 font-black">Portfolios</th>
                    <th className="py-3 pr-4 font-black">Transactions</th>
                    <th className="py-3 font-black">Daily syncs</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Basic</td>
                    <td className="py-3 pr-4">Free</td>
                    <td className="py-3 pr-4">10</td>
                    <td className="py-3 pr-4">20,000</td>
                    <td className="py-3">10 per portfolio</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Premium</td>
                    <td className="py-3 pr-4">About $13.99/month, billed yearly</td>
                    <td className="py-3 pr-4">100</td>
                    <td className="py-3 pr-4">100,000</td>
                    <td className="py-3">200 per portfolio</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-black text-slate-900">Degen</td>
                    <td className="py-3 pr-4">About $63–89/month, billed yearly</td>
                    <td className="py-3 pr-4">500</td>
                    <td className="py-3 pr-4">1,000,000</td>
                    <td className="py-3">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-black text-slate-900">Team</td>
                    <td className="py-3 pr-4">Custom</td>
                    <td className="py-3 pr-4">Custom</td>
                    <td className="py-3 pr-4">Custom</td>
                    <td className="py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Two honest caveats. First, published prices move: third-party roundups quote Premium
              anywhere from about $8 to $14 monthly on yearly billing, and Degen anywhere from about
              $63 to $89, with lifetime one-time options sometimes offered. Always check the{" "}
              <a href={COINSTATS_PRICING} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 underline hover:text-indigo-900">
                live pricing page
              </a>{" "}
              before paying. Second, the binding constraint for most people is not the monthly price but
              the transaction cap: long-time traders with years of exchange history can blow past the
              free tier's 20,000 transactions faster than they expect.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Compare plans on CoinStats</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50/60 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">Strengths</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>Breadth: 300+ integrations across exchanges, wallets, chains, and DeFi</li>
                  <li>Read-only connections that cannot withdraw funds</li>
                  <li>Strong mobile apps with widgets and watch support</li>
                  <li>AI agent and risk scanner built around your actual holdings</li>
                  <li>Free tier covers casual holders properly</li>
                  <li>Building and updating since 2017, not a fly-by-night app</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-red-200 bg-red-50/60 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-800">Weaknesses</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>Free tier sync limits bite active users quickly</li>
                  <li>Cost-basis quirks reported on some exchange imports</li>
                  <li>Advanced analytics and AI depth locked behind paid plans</li>
                  <li>Sync lag possible during high-volatility periods</li>
                  <li>Exotic DeFi positions can misclassify or show as unknown</li>
                  <li>Swap and wallet features blur the tracker-only boundary</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="security">
            <H2>Security: the read-only model</H2>
            <P>
              The security story here is architectural. Exchange connections use API keys you create
              with trading and withdrawal permissions disabled, so even a full compromise of CoinStats
              could not drain your exchange accounts through those keys. Wallet tracking needs no keys
              at all: a public address is enough.
            </P>
            <P>
              That design removes the nightmare scenario, but it does not remove your homework. Create
              one API key per service so you can revoke individually, never enable withdrawals on a key
              used for tracking, and lock your CoinStats account itself with a unique password and
              two-factor authentication. Also remember what a tracker sees: your balances and history
              are sensitive financial information even when funds cannot move.
            </P>
          </Section>

          <Section id="who">
            <H2>Who it suits, and who should skip it</H2>
            <P>
              CoinStats suits investors whose crypto lives in more than two places: a couple of
              exchanges, a few wallets, some staked or LP positions. If that is you, the one-dashboard
              view genuinely saves time and surfaces positions you had forgotten about. Active traders
              who want alerts and AI-assisted review of their own history will get the most from the
              paid tiers.
            </P>
            <P>
              Skip it if everything you own sits on one exchange, where the exchange app already shows
              your balance. Skip it if you need audit-grade accounting for complex DeFi without doing
              reconciliation work. And skip it if connecting any third party to your financial accounts
              makes you uncomfortable: a well-kept spreadsheet is still a legitimate portfolio tracker.
            </P>
          </Section>

          <Section id="alternatives">
            <H2>Alternatives</H2>
            <P>
              <strong className="text-slate-900">CoinTracker</strong> leans harder into tax reporting,
              with pricing built around annual transaction counts rather than portfolio limits. If your
              main pain is tax season rather than daily tracking, it deserves a look.
            </P>
            <P>
              <strong className="text-slate-900">Delta</strong> is a mobile-first tracker with a loyal
              following and a cleaner scope: tracking without the swap, wallet, and AI extras. Worth
              comparing if you want the smallest possible attack surface and feature set.
            </P>
            <P>
              <strong className="text-slate-900">Manual tracking</strong> with a spreadsheet costs
              nothing, teaches you your own numbers intimately, and works fine until transaction volume
              makes it miserable. Many investors graduate from spreadsheets to CoinStats exactly when
              the spreadsheet starts lying by omission.
            </P>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              CoinStats is the safest default pick for anyone whose crypto is scattered: the breadth of
              integrations is real, the read-only model is the right architecture, and the free tier is
              honest about what it includes. Its weaknesses are the predictable costs of that breadth:
              occasional misclassification, sync limits on the free plan, and pricing details you should
              verify live rather than trust from any review, including this one.
            </P>
            <P>
              Start on the free tier, connect one exchange and one wallet, and check whether the
              imported history matches reality. If it does, you have found your dashboard. If the
              numbers look wrong, no feature list matters: reconcile first, pay later.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Try CoinStats free</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="faq">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">FAQ</p>
            <H2>CoinStats questions</H2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-black text-slate-950">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
              <p>
                <strong className="text-slate-900">Disclaimer:</strong> Educational content only. This
                page is not financial, investment, legal, or tax advice. Features, pricing, and
                availability change; verify the live provider terms before connecting accounts or
                paying for a plan. Availability of linked third-party sites depends on their own terms.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
                <Link href="/tools/paper-trading" className="text-indigo-700 hover:text-indigo-900">
                  Try the paper trading simulator →
                </Link>
                <Link href="/methodology" className="text-indigo-700 hover:text-indigo-900">
                  See our methodology →
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
