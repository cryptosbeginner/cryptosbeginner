import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/what-is-a-neobank`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "What Is a Neobank? The 2026 Guide to Digital Banks and How to Launch One",
  description:
    "October 2026 guide: what neobanks are, how banking-as-a-service works, crypto and stablecoin neobanks, how they make money, and a realistic tutorial on launching your own.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Is a Neobank? The Complete 2026 Guide",
    description:
      "Neobanks explained in plain English: how they work, crypto neobanks, revenue models, and how to launch your own branded neobank.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/neobank/neobank-hero.svg`, alt: "Neobank hero graphic showing a smartphone banking app with balance, virtual card and stablecoin transactions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Neobank? The Complete 2026 Guide",
    description:
      "How neobanks work, crypto neobanks, and how to launch your own. Plain English, no jargon.",
  },
};

const faqItems = [
  {
    question: "What is a neobank?",
    answer:
      "A neobank is a bank that exists only as an app or website, with no physical branches. Around 90 percent of neobanks do not hold a banking license of their own; instead they partner with a licensed bank that holds customer deposits and provides access to payment rails, while the neobank builds the app, the brand, and the customer experience on top.",
  },
  {
    question: "Is a neobank the same as a traditional bank?",
    answer:
      "No. A traditional bank holds its own banking license, takes deposits onto its own balance sheet, and usually operates branches. A neobank typically rents the regulated layer from a licensed partner bank through banking-as-a-service, and focuses on software, design, and serving a specific audience. A challenger bank sits in between: digital-first, but holding its own license.",
  },
  {
    question: "Are neobanks safe?",
    answer:
      "It depends on the setup. When a neobank partners with an FDIC-member bank in the US (or equivalent protection elsewhere), customer deposits are generally insured up to the usual limits through that partner. The risk is partner risk: if the banking-as-a-service provider or sponsor bank runs into trouble, customers can face frozen funds and messy migrations, as the Synapse collapse showed. Always check which licensed institution actually holds the money.",
  },
  {
    question: "What is a crypto neobank?",
    answer:
      "A crypto neobank is a neobank built around stablecoins and crypto rails alongside, or instead of, traditional banking rails. Users can hold USDC or USDT balances, deposit via bank transfer or on-chain, swap between fiat and crypto, and spend with a linked card. Examples include RedotPay, Gnosis Pay, and newer stablecoin-native players like Plasma One.",
  },
  {
    question: "How much does it cost to launch a neobank?",
    answer:
      "A white-label or template-based launch can start around $25,000 to $100,000 and go live in weeks. A custom build on banking-as-a-service infrastructure typically runs $100,000 to $500,000 and takes 3 to 6 months. Getting your own e-money license pushes costs to $300,000 to $700,000 plus regulatory capital, and a full banking charter starts around $2 million and can reach $20 million. Figures verified October 2026.",
  },
  {
    question: "Do I need a banking license to launch a neobank?",
    answer:
      "Not necessarily. Most neobanks launch without their own license by using a banking-as-a-service provider and a licensed sponsor bank. You still need a compliance program, KYC and AML processes, and legal review, and your provider will scrutinize your business before onboarding you. This is general information, not legal advice; talk to a fintech lawyer before building.",
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
  return <h3 className="mt-8 text-xl font-black text-slate-950">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mt-3 text-base leading-8 text-slate-600">{children}</li>;
}

function Figure({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {children}
      <figcaption className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-sm leading-6 text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function WhatIsANeobankPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Neobank? The 2026 Guide to Digital Banks and How to Launch One",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-white text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · banking</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.02em] sm:text-5xl">
              What is a neobank?
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              The complete 2026 guide: how neobanks work, how banking-as-a-service lets startups offer
              accounts without a license, where crypto and stablecoins fit in, how neobanks make money,
              and a realistic tutorial on launching your own.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-8">
          <AuthorByline updated={UPDATED} />
        </div>

        <div className="pt-6">
          <Section id="intro">
            <Figure caption="A modern neobank app: balance overview, virtual card, and recent activity covering fiat deposits, stablecoin swaps, and payouts. This is the entire bank, no branch required.">
              <Image
                src="/images/learn/neobank/neobank-hero.svg"
                alt="Neobank hero graphic showing a smartphone banking app with balance, virtual card and stablecoin transactions alongside the three jobs of a neobank"
                width={1200}
                height={630}
                className="h-auto w-full"
                priority
              />
            </Figure>
            <P>
              A neobank is a bank that lives entirely in an app. No branches, no queues, no marble lobbies.
              You open an account from your phone in minutes, get a virtual card instantly, and manage
              everything from one screen. Companies like Chime, Revolut, and Monzo proved the model:
              good software beats a branch network.
            </P>
            <P>
              Here is the part most people miss. Around 90 percent of neobanks do not actually hold a
              banking license. They rent the regulated parts from a licensed partner bank and focus on
              what they are good at: the app, the brand, and the customer. That rental model is called
              banking-as-a-service, and it is the reason a small team can now launch something that
              looks and feels like a bank.
            </P>
            <P>
              Add stablecoins to the mix and the idea gets even more interesting. A new wave of crypto
              neobanks runs on USDC and USDT rails alongside traditional payment networks, giving users
              one balance that works for both dollars and digital dollars. This guide explains the whole
              picture, and then walks through what it would actually take to launch your own.
            </P>
          </Section>

          <Section id="neobank-vs-bank">
            <H2>Neobank vs traditional bank vs challenger bank</H2>
            <P>
              People use these terms loosely, but they describe genuinely different things. The key
              question is always the same: who holds the banking license, and who holds the customer?
            </P>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-950 text-white">
                      <th className="px-5 py-4 font-black"></th>
                      <th className="px-5 py-4 font-black">Traditional bank</th>
                      <th className="px-5 py-4 font-black">Challenger bank</th>
                      <th className="px-5 py-4 font-black">Neobank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Banking license</td>
                      <td className="px-5 py-4 text-slate-600">Own license</td>
                      <td className="px-5 py-4 text-slate-600">Own license (usually)</td>
                      <td className="px-5 py-4 text-slate-600">Usually rented from a partner bank</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Branches</td>
                      <td className="px-5 py-4 text-slate-600">Yes, physical network</td>
                      <td className="px-5 py-4 text-slate-600">Few or none</td>
                      <td className="px-5 py-4 text-slate-600">None, app only</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Who holds deposits</td>
                      <td className="px-5 py-4 text-slate-600">The bank itself</td>
                      <td className="px-5 py-4 text-slate-600">The bank itself</td>
                      <td className="px-5 py-4 text-slate-600">The licensed partner bank</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Account opening</td>
                      <td className="px-5 py-4 text-slate-600">Days, often in person</td>
                      <td className="px-5 py-4 text-slate-600">Minutes, digital</td>
                      <td className="px-5 py-4 text-slate-600">Minutes, digital</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Typical strengths</td>
                      <td className="px-5 py-4 text-slate-600">Trust, lending, full services</td>
                      <td className="px-5 py-4 text-slate-600">UX plus regulated independence</td>
                      <td className="px-5 py-4 text-slate-600">Speed, niche focus, low fees</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Typical weaknesses</td>
                      <td className="px-5 py-4 text-slate-600">Slow, expensive, dated apps</td>
                      <td className="px-5 py-4 text-slate-600">Costly to build and license</td>
                      <td className="px-5 py-4 text-slate-600">Dependent on partner bank</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Examples</td>
                      <td className="px-5 py-4 text-slate-600">JPMorgan, HSBC</td>
                      <td className="px-5 py-4 text-slate-600">Monzo, Starling, N26</td>
                      <td className="px-5 py-4 text-slate-600">Chime, Current, RedotPay</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <P>
              The bottom row is the one that matters for this guide. Chime and Current are neobanks:
              beloved apps running on partner banks. Monzo and Starling went further and earned their
              own licenses, which makes them challenger banks. In practice the line blurs, and many
              companies start as neobanks and pursue licenses later as they grow.
            </P>
          </Section>

          <Section id="three-jobs">
            <H2>How neobanks work: the three jobs</H2>
            <P>
              Strip away the branding and every neobank does the same three jobs. This framing comes
              from Whop's neobank blueprint writeup, and it is the clearest way to think about the
              whole category:
            </P>
            <Figure caption="The three jobs of a neobank: accept payments so money can come in, hold balances so money has somewhere to sit, and pay out so money can leave to a bank account or wallet.">
              <svg viewBox="0 0 800 340" className="h-auto w-full" role="img" aria-label="Flow diagram of the three jobs of a neobank: money in through deposits, held as a balance, and paid out through withdrawals">
                <rect x="0" y="0" width="800" height="340" fill="#f8fafc" />
                <text x="400" y="34" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a" fontFamily="system-ui,sans-serif">The three jobs of a neobank</text>

                <g fontFamily="system-ui,sans-serif">
                  <rect x="30" y="70" width="210" height="200" rx="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="135" cy="120" r="26" fill="#e0f2fe" />
                  <text x="135" y="130" textAnchor="middle" fontSize="22" fill="#0369a1">↓</text>
                  <text x="135" y="168" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">1. Money in</text>
                  <text x="135" y="192" textAnchor="middle" fontSize="12" fill="#475569">Bank transfers</text>
                  <text x="135" y="210" textAnchor="middle" fontSize="12" fill="#475569">Card payments</text>
                  <text x="135" y="228" textAnchor="middle" fontSize="12" fill="#475569">Crypto on-ramps</text>
                  <text x="135" y="246" textAnchor="middle" fontSize="12" fill="#475569">Invoices</text>

                  <rect x="295" y="70" width="210" height="200" rx="14" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="400" cy="120" r="26" fill="#ede9fe" />
                  <text x="400" y="130" textAnchor="middle" fontSize="22" fill="#6d28d9">◈</text>
                  <text x="400" y="168" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">2. Money sits</text>
                  <text x="400" y="192" textAnchor="middle" fontSize="12" fill="#475569">Fiat balances</text>
                  <text x="400" y="210" textAnchor="middle" fontSize="12" fill="#475569">Stablecoin balances</text>
                  <text x="400" y="228" textAnchor="middle" fontSize="12" fill="#475569">Activity feed</text>
                  <text x="400" y="246" textAnchor="middle" fontSize="12" fill="#475569">Cards and limits</text>

                  <rect x="560" y="70" width="210" height="200" rx="14" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="665" cy="120" r="26" fill="#dcfce7" />
                  <text x="665" y="130" textAnchor="middle" fontSize="22" fill="#15803d">↑</text>
                  <text x="665" y="168" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">3. Money out</text>
                  <text x="665" y="192" textAnchor="middle" fontSize="12" fill="#475569">Bank withdrawals</text>
                  <text x="665" y="210" textAnchor="middle" fontSize="12" fill="#475569">Wallet off-ramps</text>
                  <text x="665" y="228" textAnchor="middle" fontSize="12" fill="#475569">Peer transfers</text>
                  <text x="665" y="246" textAnchor="middle" fontSize="12" fill="#475569">Bill payments</text>

                  <line x1="240" y1="170" x2="295" y2="170" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
                  <polygon points="295,162 309,170 295,178" fill="#94a3b8" />
                  <line x1="505" y1="170" x2="560" y2="170" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
                  <polygon points="560,162 574,170 560,178" fill="#94a3b8" />
                </g>
                <text x="400" y="312" textAnchor="middle" fontSize="12" fill="#64748b" fontFamily="system-ui,sans-serif">Every feature a neobank ships serves one of these three jobs.</text>
              </svg>
            </Figure>
            <P>
              <strong className="text-slate-900">Money in.</strong> The neobank accepts payments so
              funds can arrive: bank transfers, card top-ups, crypto on-ramps, or invoices and checkout
              links that land straight in the user's balance.
            </P>
            <P>
              <strong className="text-slate-900">Money sits.</strong> The neobank holds a balance, in
              fiat, stablecoins, or both, with an activity feed showing every dollar in and out. This
              is the account itself, and it is where the user relationship lives.
            </P>
            <P>
              <strong className="text-slate-900">Money out.</strong> The neobank pays out: withdrawals
              to a linked bank account, off-ramps to a crypto wallet, transfers to other users, and
              card spending.
            </P>
            <P>
              If you understand these three jobs, you understand every neobank product decision. New
              features are just better ways to do one of the three: faster on-ramps, nicer balance
              views, cheaper payouts. Keep this model in mind; the launch tutorial later in this guide
              is organized around it.
            </P>
            <Figure caption="Whop's neobank blueprint feature overview: balance management in fiat and stablecoin, deposits via bank transfer or crypto on-ramp, invoicing with checkout links, user-to-user transfers, withdrawals to bank or wallet, full activity feed, built-in KYC, and currency swaps. Image courtesy of Whop.">
              <img src="/images/learn/neobank/whop-features.png" alt="Whop neobank blueprint features diagram showing balance, deposits, invoicing, transfers, withdrawals, activity feed, KYC verification, and swap capabilities" className="h-auto w-full rounded-xl" loading="lazy" />
            </Figure>
          </Section>

          <Section id="baas">
            <H2>Banking-as-a-service: how startups offer banking without a license</H2>
            <P>
              The trick behind most neobanks is banking-as-a-service, usually shortened to BaaS. A
              licensed bank (the sponsor bank) holds the deposits and connects to payment networks.
              A technology company (the BaaS provider) wraps that bank's capabilities in clean APIs.
              Your neobank calls those APIs, and your users see your brand, your app, and your fees.
              The license never touches your company.
            </P>
            <Figure caption="The banking-as-a-service stack: your brand and app sit on top, calling a BaaS provider's APIs, which route through a licensed sponsor bank to payment rails like ACH, FedNow, and card networks.">
              <svg viewBox="0 0 800 400" className="h-auto w-full" role="img" aria-label="Layered diagram of the banking-as-a-service stack from your brand at top through the BaaS provider and sponsor bank down to payment rails">
                <rect x="0" y="0" width="800" height="400" fill="#f8fafc" />
                <text x="400" y="34" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a" fontFamily="system-ui,sans-serif">The BaaS stack: who does what</text>
                <g fontFamily="system-ui,sans-serif">
                  <rect x="150" y="60" width="500" height="64" rx="12" fill="#6366f1" />
                  <text x="400" y="86" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ffffff">Your brand and app</text>
                  <text x="400" y="108" textAnchor="middle" fontSize="12" fill="#e0e7ff">What users see: design, features, fees, support</text>

                  <line x1="400" y1="124" x2="400" y2="146" stroke="#94a3b8" strokeWidth="2" />
                  <text x="416" y="140" fontSize="11" fill="#64748b">APIs</text>

                  <rect x="150" y="146" width="500" height="64" rx="12" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
                  <text x="400" y="172" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">BaaS provider</text>
                  <text x="400" y="194" textAnchor="middle" fontSize="12" fill="#475569">Ledger, KYC tooling, card issuing, compliance ops (e.g. Unit, Column, Treasury Prime)</text>

                  <line x1="400" y1="210" x2="400" y2="232" stroke="#94a3b8" strokeWidth="2" />
                  <text x="416" y="226" fontSize="11" fill="#64748b">regulated link</text>

                  <rect x="150" y="232" width="500" height="64" rx="12" fill="#0f766e" />
                  <text x="400" y="258" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ffffff">Licensed sponsor bank</text>
                  <text x="400" y="280" textAnchor="middle" fontSize="12" fill="#ccfbf1">Holds deposits, FDIC insurance, regulatory accountability</text>

                  <line x1="400" y1="296" x2="400" y2="318" stroke="#94a3b8" strokeWidth="2" />

                  <rect x="150" y="318" width="500" height="52" rx="12" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="400" y="340" textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">Payment rails: ACH · FedNow · RTP · Visa · Mastercard · SWIFT</text>
                </g>
                <text x="400" y="388" textAnchor="middle" fontSize="12" fill="#64748b" fontFamily="system-ui,sans-serif">You own the customer. The sponsor bank owns the regulatory responsibility.</text>
              </svg>
            </Figure>
            <P>
              This stack is powerful, but it has a failure mode worth knowing about. In 2024 the BaaS
              provider Synapse collapsed, and the mess that followed left customers of several fintech
              apps locked out of their money for months while banks, the provider, and courts argued
              over whose ledger was right. The lesson is not that BaaS is broken; the survivors
              invested heavily in reconciliation and direct bank relationships afterward. The lesson is
              that founders must know exactly which bank holds their users' money, how records
              reconcile, and what the migration plan is if a partner fails. Ask these questions before
              you sign anything.
            </P>
            <H3>Major BaaS and infrastructure providers in 2026</H3>
            <ul className="mt-4 list-disc pl-6">
              <Li><strong className="text-slate-900">Unit:</strong> one of the largest BaaS platforms, reporting over $100 billion in annual volume, covering accounts, cards, payments, and lending.</Li>
              <Li><strong className="text-slate-900">Column:</strong> developer-focused, runs on its own bank charter, which removes the sponsor-bank layer and the revenue share that usually comes with it.</Li>
              <Li><strong className="text-slate-900">Treasury Prime:</strong> known for its bank network and matching marketplace, useful if you want choice over which bank sits underneath.</Li>
              <Li><strong className="text-slate-900">Increase:</strong> engineering-led provider that became a bank itself in 2026 with Increase Bank, an FDIC-member institution, collapsing the middleware layer.</Li>
              <Li><strong className="text-slate-900">Synctera:</strong> strong on sponsor-bank management and compliance; acquired the compliance firm Cable in 2026.</Li>
              <Li><strong className="text-slate-900">Marqeta:</strong> the go-to for modern card issuing, processing $291 billion in total payment volume in 2024.</Li>
              <Li><strong className="text-slate-900">Solaris:</strong> licensed European banking platform for accounts, cards, and compliance across the EU.</Li>
            </ul>
          </Section>

          <Section id="crypto-neobanks">
            <H2>Crypto neobanks: where stablecoins enter the picture</H2>
            <P>
              A crypto neobank does the same three jobs, but the balance can hold stablecoins next to
              fiat, and money can move on blockchain rails next to bank rails. A user deposits dollars
              by bank transfer or USDC on-chain; either way it settles into one balance. They can swap
              between currencies, send to another user, off-ramp to a wallet, or spend with a card.
              For freelancers paid across borders, or businesses operating in high-inflation
              economies, a dollar balance that moves at internet speed is the whole pitch.
            </P>
            <P>
              The market is moving fast. Industry estimates put the global neobanking market at about
              $211 billion in 2025, growing over 60 percent a year, and stablecoin settlement is
              becoming the default backend for cross-border neobank products. Here are the names that
              matter in 2026:
            </P>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-950 text-white">
                      <th className="px-5 py-4 font-black">Neobank</th>
                      <th className="px-5 py-4 font-black">Model</th>
                      <th className="px-5 py-4 font-black">Standout features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">RedotPay</td>
                      <td className="px-5 py-4 text-slate-600">Stablecoin neobank</td>
                      <td className="px-5 py-4 text-slate-600">5M+ users, $10B annual volume, crypto card spending. <Link href="/crypto-cards/redotpay-review" className="font-bold text-indigo-700 hover:text-indigo-900">Read our review</Link></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Gnosis Pay</td>
                      <td className="px-5 py-4 text-slate-600">Self-custodial</td>
                      <td className="px-5 py-4 text-slate-600">User-controlled funds with a Visa debit card, no custodial account</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Revolut</td>
                      <td className="px-5 py-4 text-slate-600">Hybrid fintech</td>
                      <td className="px-5 py-4 text-slate-600">40M+ customers, crypto trading and stablecoin features inside a full banking app</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Wirex / Xapo</td>
                      <td className="px-5 py-4 text-slate-600">Hybrid</td>
                      <td className="px-5 py-4 text-slate-600">Long-running crypto-friendly accounts bridging fiat and digital assets</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Plasma One</td>
                      <td className="px-5 py-4 text-slate-600">Stablecoin-native</td>
                      <td className="px-5 py-4 text-slate-600">Yield-bearing dollar balances, cashback, self-custody, Visa card; backed by Founders Fund</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">Dakota</td>
                      <td className="px-5 py-4 text-slate-600">Business infrastructure</td>
                      <td className="px-5 py-4 text-slate-600">Stablecoin treasury and payouts for businesses, own DKUSD stablecoin, $12.5M Series A</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Bleap</td>
                      <td className="px-5 py-4 text-slate-600">Stablecoin-native</td>
                      <td className="px-5 py-4 text-slate-600">USDC-native accounts with instant global transfers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <P>
              The pattern is consistent: crypto-native players build on stablecoin settlement from day
              one, while hybrids like Revolut add it incrementally for FX and cross-border transfers.
              For a beginner choosing one, the questions are the same as with any neobank: who holds
              the license, where does the money sit, and what happens if the provider disappears.
            </P>
          </Section>

          <Section id="revenue">
            <H2>How neobanks make money</H2>
            <P>
              Neobanks look free because the app is free. The money is made in the plumbing, on every
              dollar that moves through the three jobs. The standard revenue streams:
            </P>
            <ul className="mt-4 list-disc pl-6">
              <Li><strong className="text-slate-900">Interchange:</strong> every card swipe earns the issuer a small cut of the transaction, typically the single biggest revenue line for consumer neobanks.</Li>
              <Li><strong className="text-slate-900">FX and swap markups:</strong> converting currencies or swapping stablecoins at a rate slightly worse than wholesale. High volume, nearly invisible per transaction.</Li>
              <Li><strong className="text-slate-900">Subscription tiers:</strong> premium plans with higher limits, better rates, and perks. This is where many neobanks finally turn profitable.</Li>
              <Li><strong className="text-slate-900">Float and yield:</strong> balances sitting in accounts can earn interest or stablecoin yield; the neobank keeps some or all of the spread.</Li>
              <Li><strong className="text-slate-900">Lending:</strong> licensed players lend deposits out and earn the interest margin. Unlicensed neobanks usually cannot do this directly.</Li>
              <Li><strong className="text-slate-900">Crypto fees:</strong> trading spreads and swap fees on crypto and stablecoin conversions.</Li>
            </ul>
            <Figure caption="How a neobank earns on money movement: the infrastructure provider charges a base fee, you set the fee your users pay, and the difference is your revenue. Small markups at scale become the business.">
              <svg viewBox="0 0 800 380" className="h-auto w-full" role="img" aria-label="Bar chart showing the neobank revenue model: base infrastructure fee versus user fee, with the markup between them as revenue">
                <rect x="0" y="0" width="800" height="380" fill="#f8fafc" />
                <text x="400" y="34" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a" fontFamily="system-ui,sans-serif">The markup model: base fee vs your fee</text>
                <g fontFamily="system-ui,sans-serif">
                  <text x="120" y="90" fontSize="14" fontWeight="800" fill="#0f172a">Transfer fees</text>
                  <rect x="120" y="104" width="140" height="34" rx="6" fill="#cbd5e1" />
                  <text x="130" y="126" fontSize="12" fill="#475569">Base: $0.30</text>
                  <rect x="120" y="146" width="330" height="34" rx="6" fill="#6366f1" />
                  <text x="130" y="168" fontSize="12" fontWeight="700" fill="#ffffff">You charge: $1.00 → you keep $0.70</text>

                  <text x="120" y="212" fontSize="14" fontWeight="800" fill="#0f172a">Swap fees</text>
                  <rect x="120" y="226" width="100" height="34" rx="6" fill="#cbd5e1" />
                  <text x="130" y="248" fontSize="12" fill="#475569">Base: 0.2%</text>
                  <rect x="120" y="268" width="250" height="34" rx="6" fill="#8b5cf6" />
                  <text x="130" y="290" fontSize="12" fontWeight="700" fill="#ffffff">You charge: 0.5% → you keep 0.3%</text>
                </g>
                <g fontFamily="system-ui,sans-serif">
                  <rect x="520" y="80" width="230" height="230" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="635" y="108" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f172a">Scale math</text>
                  <text x="635" y="136" textAnchor="middle" fontSize="12" fill="#475569">2,000 payouts / month</text>
                  <text x="635" y="158" textAnchor="middle" fontSize="12" fill="#475569">× $0.70 markup</text>
                  <line x1="560" y1="176" x2="710" y2="176" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="635" y="204" textAnchor="middle" fontSize="20" fontWeight="800" fill="#16a34a">$1,400 / month</text>
                  <text x="635" y="228" textAnchor="middle" fontSize="12" fill="#475569">on money moving anyway</text>
                  <text x="635" y="256" textAnchor="middle" fontSize="12" fill="#475569">Grow volume or markup,</text>
                  <text x="635" y="274" textAnchor="middle" fontSize="12" fill="#475569">revenue grows with it.</text>
                </g>
                <text x="400" y="352" textAnchor="middle" fontSize="12" fill="#64748b" fontFamily="system-ui,sans-serif">Illustrative example. Real base fees vary by provider, volume, and region.</text>
              </svg>
            </Figure>
            <P>
              The blueprint model makes this explicit: the infrastructure provider charges a base fee
              whenever money moves, and you decide what your users pay on top. The difference is your
              revenue. Add a dollar to each of 2,000 monthly payouts and that is $2,000 a month on
              volume that was moving anyway. The honest caveat: BaaS partners typically take 20 to 40
              percent of transaction economics through revenue shares and platform fees, so model your
              unit economics with the partner's cut included, not just the headline base fee.
            </P>
            <Figure caption="Whop's fee configuration screen: operators set their own fees on deposits, payments, transfers, and swaps. Whop charges a base fee underneath; the markup between the two is the operator's revenue. Every fee appears in the activity feed so nothing is hidden. Image courtesy of Whop.">
              <img src="/images/learn/neobank/whop-fees.png" alt="Whop neobank fee settings showing configurable deposit, transfer, and swap fees with transparent activity feed" className="h-auto w-full rounded-xl" loading="lazy" />
            </Figure>
          </Section>

          <Section id="launch">
            <H2>How to launch your own neobank: a realistic tutorial</H2>
            <P>
              Launching a neobank used to mean raising tens of millions and spending years on
              licensing. The BaaS stack and template platforms have compressed that dramatically, but
              the compliance and economics are still real. Here is the honest path, step by step.
            </P>

            <H3>Step 1: Define your use case</H3>
            <P>
              The neobanks that work serve a specific money flow, not "banking for everyone." A
              marketplace paying sellers, a gig platform paying workers, an agency invoicing clients
              and paying contractors, a creator platform with payouts across borders. If money already
              moves through your product, you have a candidate. If it does not, a neobank is a
              solution looking for a problem.
            </P>

            <H3>Step 2: Choose your licensing model</H3>
            <P>Three routes, in order of cost and control:</P>
            <ul className="mt-4 list-disc pl-6">
              <Li><strong className="text-slate-900">BaaS partnership (no own license):</strong> fastest and cheapest. A sponsor bank and BaaS provider carry the regulated layer. You build the brand, app, and operations. This is how roughly 90 percent of neobanks operate.</Li>
              <Li><strong className="text-slate-900">E-money or payment institution license:</strong> you can hold customer funds and execute payments yourself, but not lend deposits out. Adds 6 to 18 months and typically €350,000 to €500,000 in initial capital in the EU, plus the compliance program.</Li>
              <Li><strong className="text-slate-900">Full banking charter:</strong> maximum control, maximum cost. Starts around $2 million and commonly reaches $5 to $20 million with regulatory capital, legal work, and teams. Timelines run 18 to 36 months.</Li>
            </ul>

            <H3>Step 3: Pick your infrastructure</H3>
            <P>
              If you go the BaaS route, you are choosing a stack: a BaaS provider for accounts, ledger,
              and APIs; a KYC vendor (Persona, Alloy, Socure, Stripe Identity); a card issuer (often
              via the BaaS provider, or Marqeta for custom programs); and payment rail access (ACH,
              FedNow, RTP). For crypto features, add on/off-ramp providers and wallet infrastructure.
              Evaluate providers on the regulated coverage, sandbox quality, compliance support, and
              pricing, and always identify the actual sponsor bank underneath.
            </P>

            <H3>Step 4: Brand it and build the product</H3>
            <P>
              Three ways to get from infrastructure to a live product. You can build custom apps on
              the BaaS APIs, which gives full control at full cost. You can white-label an existing
              neobank platform, which gets you live in 8 to 16 weeks. Or you can start from a working
              template: Whop's <a href="https://whop.com/blog/neobank-blueprint/" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 hover:text-indigo-900">Neobank blueprint</a> ships
              payments, balances, payouts, and stablecoin rails as a deployable product, which you then
              rebrand with AI tooling, edit via CLI, or embed piece by piece into your own app. The
              blueprint route is the fastest way to test whether your users actually want a neobank
              from you before committing serious capital.
            </P>
            <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">How Whop's neobank works</p>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                Whop is not a bank. Licensed partners move the money while Whop provides the
                white-label template and infrastructure. Here is what actually happens under the hood:
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <Li><strong className="text-slate-900">Where money sits:</strong> User payments land in a Whop Balance held in pooled FBO (for-benefit-of) accounts. US funds sit at an FDIC-member bank; non-US funds sit at ClearBank, JP Morgan, or Bank Frick. Note that these balances are not themselves FDIC insured.</Li>
                <Li><strong className="text-slate-900">How users cash out:</strong> Withdrawals run via ACH, wire, PayPal, or crypto through Coinbase Commerce. Crypto deposits come in via MoonPay.</Li>
                <Li><strong className="text-slate-900">Stablecoin rails:</strong> Every account also gets a self-custodial wallet (via Privy). Moving dollars into the wallet converts them to USDT. An opt-in Treasury feature routes balances through a Veda vault into Aave for yield.</Li>
                <Li><strong className="text-slate-900">How you earn:</strong> You set fees on deposits, transfers, card spend, and swaps. Whop charges a base fee when money moves; the difference between your fee and their base is your revenue. For example, add $1 to each of 2,000 monthly seller payouts and that is $2,000 a month on money already moving through your platform.</Li>
                <Li><strong className="text-slate-900">Customization:</strong> Deploy the blueprint, then rebrand with Whop AI (describe your colors and features), edit code directly via the Whop CLI with versioned deploys, or embed individual elements into an existing app.</Li>
              </ul>
            <Figure caption="Whop's neobank dashboard: a single reports view showing all money moving through your neobank, including balances, transaction volume, and fee revenue. Image courtesy of Whop.">
              <img src="/images/learn/neobank/whop-reports.png" alt="Whop neobank reports dashboard showing transaction activity, balances, and revenue from money moving through the platform" className="h-auto w-full rounded-xl" loading="lazy" />
            </Figure>
              <P>
                Tether invested $200 million in Whop in February 2026, which explains the deep
                stablecoin integration. If you want to try the blueprint yourself, you can{' '}
                <a href="https://whop.com/start/?code=CRYPTOSBEGINNER" target="_blank" rel="noopener noreferrer sponsored" className="font-bold text-indigo-700 hover:text-indigo-900">get started on Whop here</a>.
              </P>
              <p className="mt-3 text-xs leading-6 text-slate-500">Affiliate disclosure: CryptosBeginner may earn a commission if you sign up through this link, at no extra cost to you.</p>
            </div>

            <H3>Step 5: Set your fee structure</H3>
            <P>
              Decide what you charge on deposits, payments, transfers, and swaps, against the base
              fees your infrastructure charges you. Keep fees visible in the activity feed; hidden fees
              destroy trust faster than high fees do. Model the partner's revenue share (often 20 to
              40 percent) into every calculation.
            </P>

            <H3>Step 6: Compliance, launch, operate</H3>
            <P>
              Before launch: legal review, KYC and AML program configuration, sanctions screening,
              fraud tooling, and a customer support operation. Budget for ongoing compliance ($500 to
              $2,000 a month at small scale) and regulatory change. After launch, the unglamorous work
              is reconciliation: your ledger must match the bank's ledger every day. The Synapse
              disaster was, at its core, a reconciliation failure.
            </P>

            <H3>Realistic costs and timelines</H3>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-950 text-white">
                      <th className="px-5 py-4 font-black">Approach</th>
                      <th className="px-5 py-4 font-black">Typical cost</th>
                      <th className="px-5 py-4 font-black">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Template / blueprint</td>
                      <td className="px-5 py-4 text-slate-600">$25K to $100K</td>
                      <td className="px-5 py-4 text-slate-600">Weeks</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">BaaS-led custom build</td>
                      <td className="px-5 py-4 text-slate-600">$100K to $500K</td>
                      <td className="px-5 py-4 text-slate-600">3 to 6 months</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">White-label platform</td>
                      <td className="px-5 py-4 text-slate-600">$200K to $800K</td>
                      <td className="px-5 py-4 text-slate-600">8 to 16 weeks to MVP</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-bold text-slate-900">E-money licensed</td>
                      <td className="px-5 py-4 text-slate-600">$300K to $700K+ plus capital</td>
                      <td className="px-5 py-4 text-slate-600">6 to 18 months for license</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-900">Full bank charter</td>
                      <td className="px-5 py-4 text-slate-600">$2M to $20M+</td>
                      <td className="px-5 py-4 text-slate-600">18 to 36 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <P>
              Figures compiled from 2026 industry guides and verified October 2026. The most
              underestimated line items are always the same: KYC at scale, customer support, and
              user acquisition, which commonly runs $50,000 to $200,000 for the first cohort.
            </P>
          </Section>

          <Section id="risks">
            <H2>Risks and things to watch</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li><strong className="text-slate-900">Partner bank risk:</strong> your neobank is only as stable as the licensed institution underneath it. Sponsor banks face regulatory enforcement actions; if yours does, your program can be frozen or forced to migrate. Know your sponsor bank by name.</Li>
              <Li><strong className="text-slate-900">Reconciliation risk:</strong> your ledger and the bank's ledger must agree daily. The Synapse collapse stranded users for months over exactly this. Own your ledger of record and reconcile continuously.</Li>
              <Li><strong className="text-slate-900">Regulatory risk:</strong> BaaS regulation tightened significantly after 2024, and crypto features add another layer of scrutiny. Rules differ by country and keep changing; budget for ongoing legal review.</Li>
              <Li><strong className="text-slate-900">Unit economics:</strong> interchange alone rarely covers costs at small scale, and BaaS revenue shares of 20 to 40 percent compress margins further. Most neobanks need premium tiers or lending to reach profitability.</Li>
              <Li><strong className="text-slate-900">Stablecoin risk:</strong> crypto neobanks add issuer risk (the stablecoin itself), smart contract risk, and on/off-ramp availability risk. A depeg or frozen bridge becomes your customer support problem.</Li>
              <Li><strong className="text-slate-900">Trust deficit:</strong> with no branches, trust is built entirely through the app, support quality, and transparency. One hidden fee scandal or outage can undo years of growth.</Li>
            </ul>
            <P>
              None of these are reasons not to build. They are reasons to build with your eyes open,
              starting from a real money flow, with the compliance work treated as product work
              rather than paperwork.
            </P>
          </Section>

          <Section id="faq">
            <H2>Related guides</H2>
            <P>
              Continue learning with these guides from CryptosBeginner:
            </P>
            <ul className="mt-4 space-y-3 text-sm leading-7">
              <Li><a href="/learn/what-is-monero" className="font-bold text-indigo-700 hover:text-indigo-900">What is Monero?</a> Privacy-focused cryptocurrency explained</Li>
              <Li><a href="/learn/privacy-coins" className="font-bold text-indigo-700 hover:text-indigo-900">Privacy Coins Hub</a> Compare Monero, Zcash, and other privacy assets</Li>
              <Li><a href="/learn/non-custodial-crypto-wallets" className="font-bold text-indigo-700 hover:text-indigo-900">Non-Custodial Wallets</a> How self-custody wallets work</Li>
              <Li><a href="/exchanges/best-crypto-exchanges" className="font-bold text-indigo-700 hover:text-indigo-900">Best Crypto Exchanges</a> Compare exchanges for buying crypto</Li>
              <Li><a href="/tools/fee-calculator" className="font-bold text-indigo-700 hover:text-indigo-900">Fee Calculator</a> Compare trading costs across exchanges</Li>
              <Li><a href="/crypto-cards" className="font-bold text-indigo-700 hover:text-indigo-900">Crypto Cards</a> Spend crypto with debit cards</Li>
            </ul>

            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none text-base font-bold text-slate-950">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section id="sources">
            <H2>Sources and further reading</H2>
            <ul className="mt-4 list-disc pl-6">
              <Li>Whop, <a href="https://whop.com/blog/neobank-blueprint/" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-700 hover:text-indigo-900">"Launch your own neobank in one click"</a> (September 2026): the blueprint concept behind the three-jobs framing used in this guide.</Li>
              <Li>Our <Link href="/crypto-cards/redotpay-review" className="font-bold text-indigo-700 hover:text-indigo-900">RedotPay review</Link>: a stablecoin neobank examined in depth.</Li>
              <Li>Our <Link href="/learn/privacy-coins" className="font-bold text-indigo-700 hover:text-indigo-900">privacy coins guide</Link>: for the privacy side of digital money.</Li>
            </ul>
            <P>
              This guide is educational content, not legal or financial advice. Banking regulation
              varies by jurisdiction and changes frequently; consult qualified professionals before
              launching any financial product.
            </P>
          </Section>
        </div>
      
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">Important disclosure</p>
              <p className="mt-3 text-sm leading-7 text-amber-950/80">
                This guide is for educational purposes only and is not financial, legal, or investment advice.
                Launching a neobank involves significant regulatory requirements that vary by jurisdiction.
                Always consult qualified legal and compliance professionals before offering financial services.
                CryptosBeginner may earn a commission from affiliate links on this page.
              </p>
            </div>
</main>
      <Footer />
    </>
  );
}
