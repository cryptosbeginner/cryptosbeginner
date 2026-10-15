import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/exchange-insurance-funds`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";
const ORIGINALLY_PUBLISHED = "May 2025";

export const metadata: Metadata = {
  title: "Exchange Insurance Funds Explained 2026: What They Cover and Their Limits",
  description:
    "October 2026 beginner guide to crypto exchange insurance funds: what they are, how they are funded, which exchanges have them, what they do not cover, and how they differ from proof of reserves.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Exchange Insurance Funds Explained 2026",
    description:
      "What crypto exchange insurance funds cover, where they come from, their limits, and how they differ from proof of reserves.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exchange Insurance Funds Explained 2026",
    description:
      "Crypto exchange insurance funds: what they cover, their limits, and how they differ from proof of reserves.",
  },
};

const faqItems = [
  {
    question: "What is an exchange insurance fund?",
    answer:
      "An exchange insurance fund is a pool of capital an exchange sets aside to cover specific losses, most often the shortfalls left when leveraged positions are liquidated at worse prices than expected during volatile markets. It protects traders from negative balances and protects other users from clawbacks, where winners' profits would otherwise be taken to cover losers' debts.",
  },
  {
    question: "Which crypto exchanges have insurance funds?",
    answer:
      "Two well-documented examples: Binance maintains the SAFU (Secure Asset Fund for Users) emergency fund, reported at 15,000 BTC in our October 2026 review, which fully covered the May 2019 theft of 7,000 BTC. Deribit publishes its insurance fund balance and has a long record of absorbing liquidation losses without socialized losses. Other major derivatives exchanges also maintain such funds; check each exchange's transparency pages for the current balance.",
  },
  {
    question: "Do insurance funds protect me if an exchange is hacked?",
    answer:
      "Usually not. A standard derivatives insurance fund is designed for liquidation shortfalls, not security incidents. Binance's SAFU is a notable exception: it is an emergency fund that has been used to cover a hack in full. A dedicated emergency fund is not the same as the routine liquidation buffer, so check what each fund is actually meant to cover.",
  },
  {
    question: "Can an insurance fund run out?",
    answer:
      "Yes. In an extreme market event, a fund can be depleted if many liquidations close far below bankruptcy price at once. That is why traders watch the published balance: a large, growing fund suggests the exchange can handle significant liquidation events, while a small one may not survive a severe crash.",
  },
  {
    question: "What is the difference between an insurance fund and proof of reserves?",
    answer:
      "Proof of reserves verifies the present: it aims to show the exchange currently holds the assets customers are owed. An insurance fund protects against specific future events: liquidation shortfalls in margin and futures markets. They address different risks, which is why a trustworthy exchange takes both seriously. Read our guides on what proof of reserves is and how to check exchange proof of reserves for the other half of the picture.",
  },
  {
    question: "Does an insurance fund mean my money is safe?",
    answer:
      "No. An insurance fund reduces one specific risk, liquidation shortfalls being passed on to you. It does not remove market risk, leverage risk, or the risk of a hack, fraud or insolvency. Keep position sizes small, use stop losses, and never leave more on an exchange than you can afford to lose.",
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

export default function ExchangeInsuranceFundsPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Exchange Insurance Funds Explained 2026: What They Cover and Their Limits",
    description:
      "October 2026 beginner guide to crypto exchange insurance funds: what they are, how they are funded, which exchanges have them, what they do not cover, and how they differ from proof of reserves.",
    datePublished: "2025-05-05",
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · exchange safety</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Exchange insurance funds explained: the safety net behind leveraged trading
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              When a leveraged position blows up in a fast market, someone has to absorb the loss. An
              insurance fund is the exchange's answer: a capital buffer that stops one trader's disaster
              from becoming everyone else's. Here is what it covers, where its limits are, and how it
              differs from proof of reserves.
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
          <Section id="what-it-is">
            <H2>What an insurance fund actually is</H2>
            <P>
              Think of it as a buffer account the exchange keeps for trading emergencies. Its main job is
              tied to <strong className="text-slate-900">liquidations</strong>. When you trade with leverage,
              your position is backed by collateral. If the market moves against you, the exchange closes
              your position automatically at the liquidation price. But in a violent move, a flash crash or a
              thin order book, the position can close at a price worse than the point where your collateral
              runs out. That gap between what your collateral covered and what the position lost is the
              shortfall, and the insurance fund pays it.
            </P>
            <P>
              Why does that matter to you? Without the fund, the exchange would have to eat the loss itself
              or resort to <strong className="text-slate-900">socialized losses</strong> (also called
              clawbacks), where profits are taken from winning traders to cover the losers' debts. The fund
              protects both sides: the liquidated trader does not end up owing money, and profitable traders
              keep their profits.
            </P>
          </Section>

          <Section id="how-funded">
            <H2>Where the money comes from</H2>
            <P>
              Exchanges usually build these pools from a share of the fees collected on liquidations
              themselves, plus allocations from general trading revenue. Many exchanges publish the fund
              balance in real time, denominated in BTC, USDT or similar assets. A large and growing balance
              is a positive sign: it suggests the venue can absorb a serious liquidation event without
              passing losses on to other users. A small or opaque fund deserves skepticism.
            </P>
          </Section>

          <Section id="who-has-them">
            <H2>Which exchanges actually have them</H2>
            <P>
              Two of the best-documented examples:{" "}
              <strong className="text-slate-900">Binance's SAFU (Secure Asset Fund for Users)</strong>, an
              emergency fund reported at 15,000 BTC in our October 2026 review. It proved its purpose in
              May 2019, when Binance covered the theft of 7,000 BTC in full through SAFU, with no user
              losses. And <strong className="text-slate-900">Deribit's insurance fund</strong>, whose balance
              is reported publicly and which has a long record of covering liquidation losses without ever
              socializing losses onto other traders.
            </P>
            <P>
              Other major derivatives exchanges maintain similar funds, but names and balances change, so
              always check the exchange's own transparency or proof-of-reserves hub rather than relying on
              memory. A fund that existed in a 2025 blog post may have been renamed, resized or retired.
            </P>
            <P>
              <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
                Binance review 2026 →
              </Link>{" "}
              ·{" "}
              <Link href="/exchanges/deribit-review" className="text-blue-600 hover:underline">
                Deribit review 2026 →
              </Link>
            </P>
          </Section>

          <Section id="limits">
            <H2>The limits: what insurance funds do not cover</H2>
            <P>
              A standard insurance fund has a narrow job description:{" "}
              <strong className="text-slate-900">liquidation shortfalls in margin and futures markets</strong>.
              It typically does not cover you if the exchange is hacked, if the company goes bankrupt for
              other reasons, or if you lose funds to your own mistakes like phishing, a leaked key or a
              wrong-address transfer. Binance's SAFU is a notable exception because it is a dedicated
              emergency fund with a broader mandate, which is exactly why it could be used after the 2019
              hack. Do not assume every fund has that mandate.
            </P>
            <P>
              Size and transparency are the other caveats. A fund can be exhausted in a truly extreme event,
              and how it is managed and deployed is not always fully disclosed. An insurance fund is one
              signal among many: security practices, incident history, reserves transparency and regulation
              all matter too. Our{" "}
              <Link href="/learn/crypto-exchange-security-checklist" className="text-blue-600 hover:underline">
                exchange security checklist
              </Link>{" "}
              puts the full picture in one place.
            </P>
          </Section>

          <Section id="vs-por">
            <H2>Insurance funds vs. proof of reserves: different jobs</H2>
            <P>
              It helps to keep these two ideas separate.{" "}
              <strong className="text-slate-900">Proof of reserves</strong> verifies the present: it aims to
              show that the exchange currently holds the crypto its customers are owed. An{" "}
              <strong className="text-slate-900">insurance fund</strong> protects against specific future
              events: liquidation shortfalls in leveraged markets. One checks the vault today; the other is
              the airbag for tomorrow's trading accident.
            </P>
            <P>
              Because they address different risks, a trustworthy exchange takes both seriously, and a
              serious beginner checks both. Start with{" "}
              <Link href="/learn/what-is-proof-of-reserves" className="text-blue-600 hover:underline">
                what proof of reserves is
              </Link>
              , then read{" "}
              <Link href="/learn/how-to-check-exchange-proof-of-reserves" className="text-blue-600 hover:underline">
                how to check an exchange's proof of reserves
              </Link>{" "}
              for the practical steps.
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
        </div>
      </main>
      <Footer />
    </>
  );
}
