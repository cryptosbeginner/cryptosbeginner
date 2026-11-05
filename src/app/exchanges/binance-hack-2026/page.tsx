import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/binance-hack-2026`;

// Masked affiliate link (go.cryptosbeginner.com redirect).
const AFFILIATE = "https://go.cryptosbeginner.com/binance";

const UPDATED = "5 November 2026";
const UPDATED_ISO = "2026-11-05";

export const metadata: Metadata = {
  title: "Binance Hack 2026: $6.3 Billion Stolen in the Largest Crypto Theft in History",
  description:
    "On 29 October 2026, hackers drained about $6.3 billion from Binance hot wallets and the FBI blamed North Korea. The timeline, the recovery, and what it means if you hold funds on Binance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Binance Hack 2026: $6.3 Billion Stolen | CryptosBeginner",
    description:
      "The largest crypto theft in history hit Binance on 29 October 2026. Here is what happened, how the recovery unfolded day by day, and what remains unresolved.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Binance Hack 2026: $6.3 Billion Stolen",
    description:
      "About $6.3 billion drained in 20 minutes, about 98% replaced from company funds within a week. The full timeline and the open questions.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "How much was stolen in the Binance hack?",
    answer:
      "About $6.3 billion. Binance's own incident reporting puts the figure at about $6.34 billion. Independent estimates are in the same range: TRM Labs counted $6.36 billion in outflows across ten networks, Elliptic put it at $6.43 billion, and Chainalysis estimates ran from a preliminary $5.912 billion to about $6.4 billion. It is the largest single crypto theft on record.",
  },
  {
    question: "Did Binance users lose money in the hack?",
    answer:
      "According to Binance, no. The exchange set aside more than $6.34 billion of company money, drawn from its corporate treasury, a partial deployment of the SAFU emergency fund, and part of its futures insurance fund, and says it had replaced about 98% of the stolen assets by 4 November 2026. The unreplaced remainder is roughly $127 million in less liquid tokens that Binance says it is still sourcing. About $2.8 billion of the stolen crypto was frozen on chain, but frozen funds have not been returned to Binance, and that is separate from the replenishment Binance funded itself.",
  },
  {
    question: "Can I withdraw from Binance now?",
    answer:
      "Withdrawals began reopening in phases on 1 November 2026: a first batch of 15 networks, fiat withdrawals on 2 November, a second phase covering more than 100 asset and network combinations on 3 November, and a third batch on 5 November. As of 5 November, withdrawals were still reopening in batches rather than fully restored for every asset and network. Binance said on 3 November that withdrawals had normalized, while trade press reported on 4 November that they were not fully reopened. Check the withdrawal status for your specific asset and network in the app.",
  },
  {
    question: "Who carried out the Binance hack?",
    answer:
      "The FBI published a cyber alert on 31 October 2026 attributing the attack to TraderTraitor, a North Korea-linked hacking group. Blockchain analytics firms TRM Labs and Chainalysis reached the same attribution independently, both with high confidence. Binance says the attackers got in through a compromised DevOps engineer's laptop, which gave access to a service used to submit unauthorized withdrawal transactions, and that investigators later found additional points of breach.",
  },
];

const timeline: Array<{ date: string; body: string }> = [
  {
    date: "29 October 2026",
    body: "After smaller, discreet test withdrawals earlier in the day, attackers drain about $6.3 billion from Binance hot wallets across ten networks in roughly 20 minutes. Binance suspends withdrawals; deposits stay open. Bitcoin falls about 3 to 5% on the day and BNB about 8%.",
  },
  {
    date: "30 October 2026",
    body: "Binance publishes its first recovery update: more than $6.34 billion of company resources set aside, about 80% of the stolen assets already covered, with $5 billion of it already held in the same tokens that were taken. For context, the last pre-hack proof of reserves snapshot (1 October, 55 assets) had shown BTC at 100.35%, USDT at 103.88%, and total reserves of about $165 billion.",
  },
  {
    date: "31 October 2026",
    body: "The FBI publishes its cyber alert attributing the theft to North Korea's TraderTraitor group. Binance reports replenishment at about 90% and publishes a fresh proof of reserves snapshot (31 October, 10 major assets) showing thinner margins, including BTC at 100.04%. Binance says future withdrawals will route through new wallet addresses.",
  },
  {
    date: "1 November 2026",
    body: "Withdrawals reopen in phase one: 15 networks, Bitcoin first. Replenishment reaches about 95%. Binance commits to restoring the SAFU fund to around $1 billion after its partial deployment in the recovery.",
  },
  {
    date: "2 November 2026",
    body: "The zero-knowledge proof for the 31 October reserves snapshot is completed, so holders of those 10 tokens can verify their own balances. Fiat withdrawals reopen for USD, AED, VND, PHP, and IDR. Binance issues a scam advisory, warning that fraudsters are exploiting the phased reopening schedule.",
  },
  {
    date: "3 November 2026",
    body: "Phase two withdrawals open, covering more than 100 asset and network combinations across nine networks. Binance says withdrawals have normalized. Reuters tallies about $4.72 billion in net customer withdrawals since the reopening, roughly 3% of platform assets, while Binance's own figures show hourly deposits overtaking withdrawals from early on 3 November.",
  },
  {
    date: "4 November 2026",
    body: "Binance reports about 98% of the stolen assets replenished. A new proof of reserves snapshot is taken, this time covering 44 tokens. Trade press notes withdrawals are still not fully reopened, despite the normalized description the day before.",
  },
  {
    date: "5 November 2026",
    body: "A third batch of withdrawals opens, including AAVE and UNI. The full zero-knowledge proof for the 44-token snapshot is still being generated, and the audit time and verification fields on Binance's public proof of reserves page remain blank.",
  },
];

export default function BinanceHack2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Binance Hack 2026: $6.3 Billion Stolen in the Largest Crypto Theft in History",
            url: PAGE_URL,
            datePublished: UPDATED_ISO,
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
            publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Exchanges", item: `${SITE_URL}/exchanges` },
              { "@type": "ListItem", position: 3, name: "Binance Hack 2026", item: PAGE_URL },
            ],
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Link
              href="/exchanges/binance-review"
              className="text-sm font-black text-amber-200 hover:text-white"
            >
              ← Back to the Binance review
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Exchange news
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              The largest crypto theft in history: the Binance hack of October 2026
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Binance suffered the largest theft in crypto history on 29 October 2026, when
              attackers linked to North Korea drained about $6.3 billion from its hot wallets in
              roughly 20 minutes. The exchange suspended withdrawals, set aside more than $6.34
              billion of company money, and says it had replaced about 98% of the stolen assets by
              4 November, funded by its corporate treasury, part of the SAFU emergency fund and
              part of its futures insurance fund, with no losses passed to users. About $2.8
              billion of the stolen crypto has been frozen on chain with help from Tether, Circle
              and law enforcement, though frozen funds have not been returned. Withdrawals began
              reopening in phases on 1 November and were still expanding in batches on 5 November,
              and a fresh proof-of-reserves snapshot taken on 4 November covers 44 tokens while its
              full cryptographic proof is still being generated. The FBI formally attributed the
              attack to North Korea's TraderTraitor group on 31 October.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            About $6.3 billion was stolen from Binance hot wallets on 29 October 2026, the
            largest crypto theft ever recorded. Binance covered the hole from its own money
            (treasury, part of SAFU, part of its futures insurance fund) and reports about 98%
            replenished by 4 November, with no losses passed to users. Roughly $127 million in
            hard-to-source tokens is still outstanding. About $2.8 billion of the stolen crypto
            is frozen on chain, which is not the same as returned. Withdrawals are reopening in
            batches and were not fully restored as of 5 November.
          </Callout>

          <GuideH2>What happened on 29 October</GuideH2>
          <GuideP>
            The main drain took about 20 minutes on the evening of 29 October 2026, after
            smaller, discreet test withdrawals earlier that day. The targets were Binance's hot
            wallets, the online wallets an exchange uses for day-to-day withdrawals. Binance says
            most customer assets sit in cold wallets, which were not touched. The money moved out
            across ten networks. Independent estimates of the total are close to Binance's own
            figure: TRM Labs counted $6.36 billion in outflows, Elliptic $6.43 billion, and
            Chainalysis estimates ranged from a preliminary $5.912 billion to about $6.4 billion.
          </GuideP>
          <GuideP>
            On the entry point, Binance's account is specific: a compromised DevOps engineer's
            laptop gave the attackers access to a service container used to submit unauthorized
            withdrawal transactions. Binance later said investigators had found additional points
            of breach beyond that laptop. Attribution came fast. TRM Labs and Chainalysis both
            pointed to TraderTraitor, a North Korea-linked group, with high confidence, and on 31
            October the FBI made it official with a cyber alert titled "North Korea Responsible
            for $6 Billion+ Binance Attack."
          </GuideP>

          <GuideH2>The recovery, day by day</GuideH2>
          <ol className="mt-6 space-y-3">
            {timeline.map((item) => (
              <li
                key={item.date}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <p className="font-black text-slate-950">{item.date}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>

          <GuideH2>Frozen is not the same as recovered</GuideH2>
          <GuideP>
            Two different pots of money get conflated in most coverage, and the distinction
            matters. The first pot is the replenishment: Binance's own money, used to make
            customer balances whole again. That reached about 98% by 4 November, per Binance's
            recovery updates. The second pot is the stolen crypto itself. About $2.8 billion of
            it (Chainalysis's count as of 3 November; Binance says about $3 billion) has been
            frozen on chain with help from Tether, Circle, and other issuers. Frozen means the
            attacker cannot move it. It does not mean Binance has it back, and no issuer has said
            when or whether those funds will be returned. TRM Labs estimates the attacker still
            holds more than 420,000 ETH and 18,270 BTC, about $2.4 billion, beyond the reach of
            any issuer freeze.
          </GuideP>
          <GuideP>
            There is also an outflow story running underneath the recovery. Binance reported
            $3.64 billion in net outflows on the first day withdrawals reopened, and Reuters put
            net customer withdrawals at about $4.72 billion by 3 November, roughly 3% of platform
            assets. Across a wider window (1 to 3 November), Binance's own figures showed $10.97
            billion withdrawn against $5.695 billion deposited, with hourly deposits overtaking
            withdrawals from 03:00 UTC on 3 November. DefiLlama's seven-day tally still showed
            about $11.83 billion in cumulative net outflows as of 5 November. In plain terms:
            users are testing the exits, and money is also coming back. Both things are true at
            once.
          </GuideP>

          <GuideH2>What this means if you hold funds on Binance</GuideH2>
          <BulletList
            items={[
              "Your balance should be whole. Binance says the stolen assets were replaced from company funds, not from customer deposits, and no losses were passed to users. About $127 million in less liquid tokens was still being sourced as of 4 November, so if you hold an obscure token, check its withdrawal status specifically.",
              "Withdrawals are reopening in batches, not all at once. If a withdrawal is unavailable for your asset or network, that matches the phased schedule Binance has been publishing since 1 November. A third batch opened on 5 November.",
              "You can verify part of the reserves yourself. The zero-knowledge proof for the 31 October snapshot (10 major assets) was completed on 2 November. The wider 44-token snapshot from 4 November still had no completed proof as of 5 November, and Binance's reserves page showed blank verification fields for it.",
              "Expect scams. Binance itself issued an advisory warning that fraudsters are exploiting the reopening schedule with fake support messages and phishing. Binance will not contact you first to 'restore' a withdrawal. Only use the official app and site.",
              "The structural lesson is unchanged. Binance absorbed a $6.3 billion theft better than any exchange in history could have a few years ago, and that is genuinely reassuring. It is still a custodian holding your keys. Keep trading balances on the exchange if you must, and keep savings in a wallet you control.",
            ]}
          />

          <GuideH2>Sources</GuideH2>
          <GuideP>
            Recovery percentages, snapshot ratios, and reopening batches are from Binance's own
            Recovery Updates (30 October to 5 November 2026) and are attributed to Binance where
            they appear above. Analyst figures are attributed to their firms (TRM Labs,
            Chainalysis, Elliptic, DefiLlama). Independent reporting we relied on:
          </GuideP>
          <BulletList
            items={[
              <a
                key="coindesk"
                href="https://www.coindesk.com/business/2026/10/29/potential-multi-billion-binance-hack-hitting-crypto-markets"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-indigo-700 hover:text-indigo-900"
              >
                CoinDesk: Potential multi-billion Binance hack hitting crypto markets (29 October 2026)
              </a>,
              <a
                key="usatoday"
                href="https://www.usatoday.com/story/money/personal-finance/2026/10/30/binance-hack-crypto-wallet/92513984007/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-indigo-700 hover:text-indigo-900"
              >
                USA Today: Binance hack and crypto wallet explainer (30 October 2026)
              </a>,
              <a
                key="lemonde"
                href="https://www.lemonde.fr/en/pixels/article/2026/10/30/binance-hack-what-we-know-about-the-largest-cryptocurrency-theft-in-history_6767471_13.html"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-indigo-700 hover:text-indigo-900"
              >
                Le Monde: Binance hack, what we know about the largest cryptocurrency theft in history (30 October 2026)
              </a>,
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/exchanges/binance-review"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Read our full Binance review
            </Link>
            <a
              href={AFFILIATE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Visit Binance
            </a>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            The Visit Binance link is an affiliate link. CryptosBeginner may earn a commission if
            you sign up through it, at no extra cost to you. This article is educational content,
            not financial advice.
          </p>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {faqItems.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-slate-900">{f.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
