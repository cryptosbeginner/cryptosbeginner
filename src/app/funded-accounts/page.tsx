import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/funded-accounts`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "Funded Crypto Trading Accounts Explained: How Prop Firms Work",
  description:
    "What are funded crypto trading accounts? How the evaluation works, profit splits, costs, risks and red flags. A plain-English guide for beginners.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Funded Crypto Trading Accounts Explained",
    description:
      "Trade with a firm's capital, keep most of the profit. How funded crypto accounts work, what they cost, and the red flags to watch for.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqItems = [
  {
    question: "What is a funded crypto trading account?",
    answer:
      "It is a trading account where the capital belongs to a prop trading firm, not to you. You trade their money, follow their risk rules, and keep an agreed share of the profits, usually 80 to 90 percent. Your personal risk is limited to the one-time evaluation fee you paid to qualify.",
  },
  {
    question: "How do you get a funded account?",
    answer:
      "You pay a challenge fee, then trade a simulated evaluation account against a profit target (often 6 to 10 percent) while staying inside daily and total drawdown limits. Pass the evaluation and the firm gives you a funded account. Fail or break a rule and you lose the fee, nothing more.",
  },
  {
    question: "Do funded account providers actually pay out?",
    answer:
      "Some do, reliably and on schedule. Others pay with friction, delays, or reinterpreted rules. A few never pay at all. Payout reliability varies enormously between firms, which is why firm selection matters at least as much as trading skill. Always check independent payout evidence before paying a challenge fee.",
  },
  {
    question: "What does a challenge cost?",
    answer:
      "Entry-level challenges for a $5,000 account typically run $40 to $150. Larger accounts cost more, roughly scaling with size: a $100,000 challenge often costs $500 to $1,000. Fees are usually non-refundable, though some firms refund the fee with your first payout.",
  },
  {
    question: "What are the red flags of a scam funded account firm?",
    answer:
      "Guaranteed funding with no evaluation, pressure to pay immediately, no clear company information or address, profit splits that sound too generous (100 percent forever), no independent payout proof, and rules that change after you pay. Legitimate firms publish their full rulebook before you pay a cent.",
  },
  {
    question: "Can I lose more than the challenge fee?",
    answer:
      "With reputable firms, no. If you blow a funded account, you simply lose access to it. You do not owe the firm for the losses. That is the core appeal of the model. But read the terms: shady firms may have clauses that differ, which is itself a red flag.",
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

function Infographic() {
  return (
    <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <svg viewBox="0 0 800 560" className="h-auto w-full" role="img" aria-label="How funded crypto trading accounts work: pay a challenge fee, pass the evaluation, get funded, trade and earn profit splits">
        <defs>
          <linearGradient id="fa-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#1e1b4b" />
          </linearGradient>
          <linearGradient id="fa-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>
        <rect width="800" height="560" fill="url(#fa-bg)" />
        <text x="400" y="44" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="system-ui">
          How a funded account works
        </text>
        <text x="400" y="70" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="system-ui">
          Four steps from challenge fee to payout
        </text>

        {/* Step 1 */}
        <g>
          <rect x="40" y="100" width="160" height="150" rx="16" fill="url(#fa-card)" />
          <circle cx="120" cy="140" r="24" fill="#10b981" />
          <text x="120" y="149" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="system-ui">1</text>
          <text x="120" y="185" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">Pay the</text>
          <text x="120" y="205" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">challenge fee</text>
          <text x="120" y="230" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">$40 to $1,000</text>
        </g>
        {/* Arrow */}
        <text x="212" y="180" fill="#34d399" fontSize="28" fontWeight="900">&#8594;</text>

        {/* Step 2 */}
        <g>
          <rect x="240" y="100" width="160" height="150" rx="16" fill="url(#fa-card)" />
          <circle cx="320" cy="140" r="24" fill="#3b82f6" />
          <text x="320" y="149" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="system-ui">2</text>
          <text x="320" y="185" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">Pass the</text>
          <text x="320" y="205" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">evaluation</text>
          <text x="320" y="230" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">Hit target, respect</text>
          <text x="320" y="246" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">drawdown limits</text>
        </g>
        <text x="412" y="180" fill="#34d399" fontSize="28" fontWeight="900">&#8594;</text>

        {/* Step 3 */}
        <g>
          <rect x="440" y="100" width="160" height="150" rx="16" fill="url(#fa-card)" />
          <circle cx="520" cy="140" r="24" fill="#8b5cf6" />
          <text x="520" y="149" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="system-ui">3</text>
          <text x="520" y="185" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">Get funded</text>
          <text x="520" y="210" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">$5K to $200K</text>
          <text x="520" y="226" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">firm capital</text>
        </g>
        <text x="612" y="180" fill="#34d399" fontSize="28" fontWeight="900">&#8594;</text>

        {/* Step 4 */}
        <g>
          <rect x="640" y="100" width="120" height="150" rx="16" fill="url(#fa-card)" />
          <circle cx="700" cy="140" r="24" fill="#f59e0b" />
          <text x="700" y="149" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="system-ui">4</text>
          <text x="700" y="185" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">Trade and</text>
          <text x="700" y="205" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800" fontFamily="system-ui">get paid</text>
          <text x="700" y="230" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui">Keep 80-90%</text>
        </g>

        {/* Risk note */}
        <rect x="40" y="290" width="720" height="110" rx="16" fill="#0b1226" stroke="#334155" />
        <text x="70" y="322" fill="#fbbf24" fontSize="15" fontWeight="800" fontFamily="system-ui">Your max loss is capped</text>
        <text x="70" y="348" fill="#cbd5e1" fontSize="13" fontFamily="system-ui">Blow the evaluation or the funded account and you lose the challenge fee.</text>
        <text x="70" y="370" fill="#cbd5e1" fontSize="13" fontFamily="system-ui">You never owe the firm for trading losses. That is the whole point.</text>

        {/* Rules strip */}
        <text x="40" y="440" fill="#94a3b8" fontSize="13" fontWeight="700" fontFamily="system-ui">THE RULES THAT MATTER MOST</text>
        <g fontFamily="system-ui">
          <rect x="40" y="452" width="230" height="72" rx="12" fill="#132038" />
          <text x="60" y="480" fill="#ffffff" fontSize="13" fontWeight="800">Profit target</text>
          <text x="60" y="502" fill="#94a3b8" fontSize="12">Usually 6 to 12%</text>
          <rect x="285" y="452" width="230" height="72" rx="12" fill="#132038" />
          <text x="305" y="480" fill="#ffffff" fontSize="13" fontWeight="800">Daily drawdown</text>
          <text x="305" y="502" fill="#94a3b8" fontSize="12">Often 4 to 6% max</text>
          <rect x="530" y="452" width="230" height="72" rx="12" fill="#132038" />
          <text x="550" y="480" fill="#ffffff" fontSize="13" fontWeight="800">Total drawdown</text>
          <text x="550" y="502" fill="#94a3b8" fontSize="12">Often 8 to 12% max</text>
        </g>
      </svg>
      <figcaption className="border-t border-slate-200 px-4 py-3 text-center text-xs leading-5 text-slate-500">
        The funded account model in four steps. Typical figures; every firm sets its own targets, limits, and splits.
      </figcaption>
    </figure>
  );
}

export default function FundedAccountsPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Funded Crypto Trading Accounts Explained: How Prop Firms Work",
    description:
      "A plain-English guide to funded crypto trading accounts: the evaluation, profit splits, costs, risks and red flags.",
    datePublished: "2026-10-15",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · trading</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Funded crypto trading accounts, explained properly
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · A CryptosBeginner guide
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Trade with someone else's money, keep most of the profit, and never risk more than a
              one-time fee. That is the pitch behind funded crypto accounts. Here is how the model
              actually works, what it costs, where traders get tripped up, and how to spot the firms
              you should avoid.
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
          <Section>
            <Infographic />
          </Section>

          <Section id="what-they-are">
            <H2>What funded accounts actually are</H2>
            <P>
              A funded crypto trading account is an account where the capital belongs to a proprietary
              trading firm, a prop firm, not to you. You trade their money on crypto markets, follow
              their risk rules, and take home an agreed share of whatever profit you make. The usual
              split lands between 80 and 90 percent in the trader's favor.
            </P>
            <P>
              Think of it as the firm renting you buying power. A retail trader with $2,000 of their
              own money can only take small positions and one bad week can wipe them out. The same
              trader with a $100,000 funded account can size positions properly, and the worst case is
              losing the challenge fee, not their savings. The firm absorbs the trading losses within
              its own risk budget.
            </P>
            <P>
              This is not a loan and not an investment product. You are not borrowing money and you
              are not depositing anything beyond the evaluation fee. If you blow the account, you walk
              away. You owe the firm nothing.
            </P>
          </Section>

          <Section id="how-it-works">
            <H2>How the model works, step by step</H2>
            <P>
              <strong className="text-slate-900">Step 1: pay the challenge fee.</strong> You pick an
              account size, say $10,000 or $100,000, and pay a one-time fee to enter the evaluation.
              Small accounts run roughly $40 to $150; a $100,000 challenge is usually $500 to $1,000.
              The fee is almost always non-refundable, though some firms refund it with your first
              payout.
            </P>
            <P>
              <strong className="text-slate-900">Step 2: pass the evaluation.</strong> You trade a
              simulated account under live market conditions. To pass, you hit a profit target,
              commonly 6 to 12 percent, without breaking the risk rules. The rules that end most
              attempts are the drawdown limits: a daily loss cap (often 4 to 6 percent) and a total
              drawdown cap (often 8 to 12 percent). You also need a minimum number of trading days to
              prove consistency. One-step and two-step evaluations are the most common formats.
            </P>
            <P>
              <strong className="text-slate-900">Step 3: get funded.</strong> Pass, and the firm hands
              you a funded account, usually at or above the evaluation size. Now you are trading with
              real payout potential.
            </P>
            <P>
              <strong className="text-slate-900">Step 4: trade and get paid.</strong> You keep trading
              inside the rules. On payout day, commonly weekly, bi-weekly, or even within 24 hours at
              the faster firms, you request your share. Payouts usually land in USDT or USDC.
              Consistent traders can scale into larger accounts over time.
            </P>
          </Section>

          <Section id="crypto-differences">
            <H2>How crypto funded accounts differ from forex ones</H2>
            <P>
              Crypto markets run 24 hours a day, 7 days a week, so unlike forex firms there is no
              weekend flat rule in most cases; your positions stay open through Saturday and Sunday.
              Leverage is usually lower than forex, often capped around 5:1 on majors like BTC and
              ETH and 2:1 on altcoins, depending on the firm.
            </P>
            <P>
              The instrument that matters most is the perpetual futures contract, the default at most
              crypto prop firms. Perps charge a funding rate every 8 hours. Hold a position for days
              and that rate quietly eats into your profit, which catches out traders who learned on
              spot markets. Factor it into every swing trade.
            </P>
          </Section>

          <Section id="costs">
            <H2>What it really costs</H2>
            <P>
              The honest math: most traders do not pass on the first attempt. Industry experience
              suggests the majority of evaluations end in a rule breach, not a payout. If a $100
              challenge takes you three attempts to pass, your real entry cost is $300, not $100.
              Budget for multiple attempts or the model stops making sense.
            </P>
            <P>
              Beyond the fee, the hidden cost is time. Minimum trading day requirements mean you
              cannot rush an evaluation in an afternoon. And while funded, consistency rules at some
              firms penalize erratic profit patterns, so you cannot just gamble once and coast.
            </P>
          </Section>

          <Section id="red-flags">
            <H2>Risks and red flags</H2>
            <P>
              The funded account space has a real scam problem. Firms can collect challenge fees
              indefinitely while making payouts nearly impossible through vague rules or moving
              goalposts. Before paying any firm a cent, check these:
            </P>
            <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
              <li><strong className="text-slate-900">No independent payout proof.</strong> Look for verifiable payout evidence from real traders, not testimonials on the firm's own site.</li>
              <li><strong className="text-slate-900">Vague or changing rules.</strong> Legitimate firms publish the complete rulebook before you pay. If drawdown is defined three different ways in three places, walk away.</li>
              <li><strong className="text-slate-900">Guaranteed funding.</strong> Any firm promising funding with no evaluation is selling something else, usually just the fee.</li>
              <li><strong className="text-slate-900">No company behind it.</strong> No legal entity, no address, no named people, support only via Telegram. Real firms are findable.</li>
              <li><strong className="text-slate-900">Payout friction stories.</strong> Search for the firm name plus "payout" or "scam" and read what funded traders say, not affiliates.</li>
              <li><strong className="text-slate-900">KYC surprises.</strong> Some firms demand documents only at payout time, after you have already paid and traded. Know the KYC policy before the challenge.</li>
            </ul>
            <P>
              A note on honesty: payout reliability varies enormously. In independent sampling of
              crypto prop firms, a meaningful share paid reliably, some paid with friction, and some
              never paid at all. Firm selection matters at least as much as trading skill in the
              short run. We are not recommending any specific firm here; when we have vetted
              platforms properly, we will review them individually.
            </P>
          </Section>

          <Section id="who-for">
            <H2>Who funded accounts suit, and who should skip</H2>
            <P>
              They suit consistently profitable traders who lack capital: you have an edge and a
              track record, just not the account size to make it pay. They also suit disciplined
              traders who perform better under external rules than on their own.
            </P>
            <P>
              Skip them if you are still learning to trade, if you cannot afford to lose several
              challenge fees, or if you chafe at rules. The evaluation punishes exactly the habits
              beginners have: oversizing, revenge trading, and holding losers. Learn on a demo or
              with tiny size first.
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

          <Section>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
              <strong className="text-slate-950">Editorial note.</strong> This is educational content
              about the funded account model, not a recommendation of any firm and not financial
              advice. We have not vetted individual crypto prop firms for this guide. Challenge fees
              are at risk the moment you pay them. Never pay a fee you cannot afford to lose.
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
