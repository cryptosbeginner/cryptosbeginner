import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/sarwa-review`;

const UPDATED = "19 October 2026";
const UPDATED_ISO = "2026-10-19";
const ORIGINALLY_PUBLISHED = "13 October 2026";
const ORIGINALLY_PUBLISHED_ISO = "2026-10-13";

const SARWA = "https://www.sarwa.co/invite/GPWA780D";
const SARWA_PRICING = "https://www.sarwa.co/pricing/";
const SARWA_HELP = "https://help.sarwa.co/";

export const metadata: Metadata = {
  title: "Sarwa Review 2026: Invest, Trade and Save from the UAE",
  description:
    "October 2026 Sarwa review from a beginner's perspective: Invest portfolios, Trade stocks and ETFs, Save cash account. Real fees, signup steps, referral bonus terms, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_URL,
      ar: `${SITE_URL}/ar/exchanges/sarwa-review`,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "Sarwa Review 2026: Invest, Trade and Save from the UAE",
    description:
      "Sarwa's fees, products, and step-by-step how-to, reviewed honestly from a beginner's perspective.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/sarwa-homepage-2026.png`,
        width: 1496,
        height: 1600,
        alt: "Sarwa Trade app on a phone showing account balance, earnings, returns, and stock positions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarwa Review 2026: Invest, Trade and Save from the UAE",
    description:
      "The UAE investing app reviewed: fees, how it works, and what to watch.",
    images: [`${SITE_URL}/images/sarwa-homepage-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is Sarwa legit and regulated?",
    answer:
      "Yes. Sarwa Digital Wealth (Capital) Limited is regulated by the Financial Services Regulatory Authority (FSRA) in Abu Dhabi Global Market as a Category 3C firm, and Sarwa Digital Wealth Limited is regulated by the Dubai Financial Services Authority (DFSA) in the DIFC. In May 2024 both regulators fined Sarwa over an unapproved prospectus for its own share offering; the subscriptions were reversed. Client assets are held with custodians, not on Sarwa's own balance sheet.",
  },
  {
    question: "What are Sarwa's fees?",
    answer:
      "Sarwa Invest charges 0.85% a year under $100,000, falling to 0.7%, 0.5% and 0.4% at higher balances, with a $7 monthly minimum after the first three months, plus about 0.1% in underlying ETF costs. Sarwa Trade charges the greater of $1 or 0.25% per stock or ETF trade, and $4 per options contract. Sarwa Save charges 0.5% a year. There are no account opening, closing, inactivity, custody, or withdrawal fees, and local AED transfers are free.",
  },
  {
    question: "What is the minimum to start with Sarwa?",
    answer:
      "You can start Sarwa Invest or Sarwa Trade with $500. Sarwa Save has no minimum. Funding from a UAE bank account by local transfer is free; debit card deposits carry a small fee of around 10 AED per transaction.",
  },
  {
    question: "How does the Sarwa referral bonus work?",
    answer:
      "When you sign up with a referral link and fund at least $500 within 90 days, both you and the referrer receive a bonus between AED 100 and AED 3,000, depending on how much you fund: $500 to $2,999 earns AED 100, $3,000 to $9,999 earns AED 300, $10,000 to $49,999 earns AED 1,000, and $50,000 or more earns AED 3,000. Bonuses are typically paid within 30 days and must stay in the account for 12 months.",
  },
  {
    question: "How do I withdraw money from Sarwa?",
    answer:
      "In the app go to Account, then Withdrawals, then Make a Withdrawal, pick the account, enter the amount and confirm. You can only withdraw to a bank account in your own name that you have previously used to fund Sarwa. Invest withdrawals take 4 to 6 business days (6 to 9 for Halal portfolios), Save takes 3 to 5 days, and Trade takes 1 to 2 days after your cash settles.",
  },
  {
    question: "Is Sarwa good for beginners?",
    answer:
      "It is one of the more beginner-friendly options in the UAE. Sarwa Invest handles everything for you once you answer a risk questionnaire, and Sarwa Trade keeps stock buying simple with fractional shares. The trade-off is cost: the Invest management fee and the Trade per-trade fee add up, and you can only trade US markets, not UAE stocks.",
  },
  {
    question: "Does Sarwa offer Halal investing?",
    answer:
      "Yes. Sarwa offers Halal versions of its Invest portfolios and a Save Halal cash account. Note that Sarwa states it does not hold an Islamic Window endorsement from the FSRA, so observant investors should do their own diligence on the screening.",
  },
  {
    question: "Can I lose money with Sarwa?",
    answer:
      "Yes. Sarwa is a regulated platform, not a guarantee. Invest portfolios and Trade positions rise and fall with the markets, options can lose their entire value quickly, and the Save estimated return is variable, not fixed. Only invest money you can afford to leave invested.",
  },
] as const;

function PrimaryCtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={SARWA}
      target="_blank"
      rel="noopener noreferrer"
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
  return (
    <h2 className="text-3xl font-black tracking-tight text-slate-950">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-8 text-slate-800">{children}</p>;
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-800">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

const tocItems = [
  { id: "short-version", label: "The short version" },
  { id: "what-is", label: "What Sarwa is (and is not)" },
  { id: "products", label: "The products: Invest, Trade, Save" },
  { id: "fees", label: "Fees, broken down honestly" },
  { id: "signup", label: "How to sign up" },
  { id: "verify", label: "How to verify your identity" },
  { id: "fund", label: "How to fund your account" },
  { id: "start-investing", label: "How to start automated investing" },
  { id: "first-trade", label: "How to place your first stock trade" },
  { id: "withdraw", label: "How to withdraw" },
  { id: "referral", label: "The referral bonus, explained" },
  { id: "security", label: "Security and regulation" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "risks", label: "Risks beginners miss" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Sarwa questions" },
];

export default function SarwaReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sarwa Review 2026: Invest, Trade and Save from the UAE",
    description:
      "October 2026 Sarwa review from a beginner's perspective: Invest portfolios, Trade stocks and ETFs, Save cash account. Real fees, signup steps, referral bonus terms, and honest risks.",
    datePublished: ORIGINALLY_PUBLISHED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Person",
      name: "Alex Rivera",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      url: SITE_URL,
    },
    inLanguage: "en",
  };

  const breadcrumbLd = {
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
        name: "Exchanges",
        item: `${SITE_URL}/exchanges`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sarwa Review",
        item: PAGE_URL,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Sarwa Review 2026: Is It Legit? Fees, Halal Investing & Full App Tour",
            description:
              "Video review of Sarwa covering fees, halal investing options, and a full app tour.",
            thumbnailUrl: "https://i.ytimg.com/vi/ZfXYNIpuB8Y/hqdefault.jpg",
            uploadDate: "2026-10-19",
            embedUrl: "https://www.youtube.com/embed/ZfXYNIpuB8Y",
            contentUrl: "https://www.youtube.com/watch?v=ZfXYNIpuB8Y",
          }),
        }}
      />

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} ·
              By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <p className="mt-3 text-sm">
              <Link
                href="/ar/exchanges/sarwa-review"
                hrefLang="ar"
                className="font-bold text-indigo-700 hover:underline"
              >
                اقرأ بالعربية ←
              </Link>
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Sarwa Review 2026: Invest, Trade and Save from the UAE
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              I opened Sarwa as a complete beginner who had never bought a
              stock. Six weeks later I had an automated portfolio running, a
              few fractional Apple shares, and a cash balance earning yield.
              Here is everything I learned: the real fees, the exact steps,
              and the parts nobody warns you about.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit Sarwa
              </PrimaryCtaButton>

              <Link
                href="/exchanges/best-crypto-exchanges"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100 sm:w-auto"
              >
                Compare crypto exchanges
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>

        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Disclosure:</strong> The Sarwa links on this page are
            referral links. If you sign up and fund your account through
            them, both you and the referrer can earn a bonus of up to AED
            3,000, and CryptosBeginner may benefit as the referrer. This does
            not change our assessment criteria or conclusions. This page is
            educational content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/sarwa-homepage-2026.png"
              alt="Sarwa Trade app on a phone showing account balance, earnings, returns, and stock positions in Amazon, Apple, Meta, and NVIDIA"
              width={1496}
              height={1600}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              Watch the video review
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
              Sarwa Review 2026: Is It Legit? Fees, Halal Investing &amp; Full
              App Tour
            </h2>
            <p className="mt-3 leading-7 text-slate-800">
              Prefer video? Our full Sarwa review walks through fees, halal
              investing options, and a complete tour of the app.
            </p>
            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ZfXYNIpuB8Y"
                title="Sarwa Review 2026: Is It Legit? Fees, Halal Investing & Full App Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <nav aria-label="On this page" className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              On this page
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-indigo-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <Section id="short-version">
          <H2>The short version</H2>
          <P>
            Sarwa is a UAE-built investing app that puts three products in one
            place: <strong>Sarwa Invest</strong>, a robo-advisor that builds
            and manages an ETF portfolio for you; <strong>Sarwa Trade</strong>,
            a self-directed account for buying US stocks, ETFs, and options
            yourself; and <strong>Sarwa Save</strong>, a cash account that
            earns a variable yield. There is also a small crypto offering, but
            crypto is not the point of Sarwa.
          </P>
          <P>
            As a beginner, what struck me first was how little I had to know
            to start. The app asks about your goals and risk tolerance, then
            does the rest. What struck me second was the fee math, which you
            should understand before your first deposit, not after. Invest
            costs 0.85% a year on smaller balances, Trade costs at least $1
            per stock trade, and moving AED into USD investments carries a
            conversion spread. None of that is hidden, but none of it jumps
            out at you either.
          </P>
          <P>
            Sarwa is regulated in the UAE, which matters more than any
            marketing claim. It is not perfect: you can only trade US
            markets, withdrawals take days not minutes, and options trading
            is genuinely risky for beginners. But for a first investing app
            in the Emirates, it is one of the most honest ones I have used.
          </P>
        </Section>

        <Section id="what-is">
          <H2>What Sarwa is (and is not)</H2>
          <P>
            Sarwa is a digital wealth platform founded in the UAE by Mark
            Chahwan, backed by investors including Mubadala and the DIFC
            Fintech Fund. In May 2026 it announced it had passed $1 billion
            in client assets, which makes it the largest homegrown investing
            fintech in the country by that measure.
          </P>
          <P>
            What it is: one app with three ways to put money to work. A
            hands-off managed portfolio. A do-it-yourself stock trading
            account. A yield-earning cash account. What it is not: a bank
            (your cash is not a bank deposit), a crypto exchange (the crypto
            offering is basic), a forex broker (no currency trading), or a
            place to buy UAE or Saudi stocks. Everything runs through US
            markets and USD.
          </P>
          <P>
            The beginner framing that helped me: think of Sarwa as the
            training wheels for investing. Invest is the bike with stabilisers,
            Trade is the bike on your own, and Save is the parking spot where
            your spare cash waits without sitting idle.
          </P>
        </Section>

        <Section id="products">
          <H2>The products: Invest, Trade, Save</H2>
          <P>
            <strong>Sarwa Invest</strong> is the robo-advisor. You answer a
            questionnaire about your goals, timeline, and how you react to
            losses. Sarwa assigns a risk score and builds a portfolio of
            low-cost ETFs matched to it: US stocks, developed-market stocks,
            emerging markets, and bonds in different mixes. You can pick a
            conventional, Halal, or socially responsible version. After that
            you do nothing. Sarwa rebalances the portfolio when it drifts and
            reinvests your dividends automatically.
          </P>
          <figure className="mt-8">
            <Image
              src="/images/sarwa-invest-2026.png"
              alt="Sarwa Invest app on a phone showing an automated portfolio balance, earnings, a returns chart, and a New House savings goal"
              width={1496}
              height={1600}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            <strong>Sarwa Trade</strong> is the self-directed account. You get
            access to more than 10,000 US-listed stocks and ETFs plus options,
            with market and limit orders and fractional shares. Fractional
            shares were the feature that made the most difference to me as a
            beginner: you can put $50 into a $200 stock instead of waiting
            until you can afford a whole share. Trade also includes the small
            crypto offering, where you buy supported coins with fiat and pay a
            spread.
          </P>
          <figure className="mt-8">
            <Image
              src="/images/sarwa-trade-2026.png"
              alt="Sarwa Trade app on a phone showing a portfolio summary with account balance, earnings, returns, and positions"
              width={1496}
              height={1600}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            <strong>Sarwa Save</strong> is the cash account. Your idle money
            sits in a money market fund and earns a variable estimated return,
            recently around 3.8% in USD before fees, with no lock-up and no
            minimum. A Halal version exists with a recently higher estimated
            return around 4.2%. The return is an estimate that moves with
            interest rates, not a promised rate, and Sarwa takes a 0.5%
            annual management fee off the top.
          </P>
          <figure className="mt-8">
            <Image
              src="/images/sarwa-save-2026.png"
              alt="Sarwa Save app on a phone showing account balance, estimated return, earnings, and recent interest activity"
              width={1496}
              height={1600}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
        </Section>

        <Section id="fees">
          <H2>Fees, broken down honestly</H2>
          <P>
            Sarwa publishes its pricing plainly, which I respect. Here is the
            full picture as of October 2026, including the costs that sit
            one layer below the headline numbers.
          </P>
          <P>
            <strong>Sarwa Invest</strong> charges a tiered annual management
            fee based on your total balance:
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Balance</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Annual fee</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Under $100,000</td>
                  <td className="py-3 pr-4 text-right font-bold">0.85%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">$100,000 to $500,000</td>
                  <td className="py-3 pr-4 text-right font-bold">0.70%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">$500,000 to $5,000,000</td>
                  <td className="py-3 pr-4 text-right font-bold">0.50%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Over $5,000,000</td>
                  <td className="py-3 pr-4 text-right font-bold">0.40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Two catches beginners miss. First, there is a $7 per month
            minimum on the standard tier after the first three months, so a
            $500 account pays far more than 0.85% in practice. On $500, $7 a
            month is 16.8% a year. The fee only starts making sense once your
            balance is in the low thousands. Second, the ETFs inside your
            portfolio charge their own expense ratios of about 0.1% a year,
            which goes to the fund providers, not Sarwa.
          </P>
          <P>
            <strong>Sarwa Trade</strong> is simpler: the greater of $1 or
            0.25% of the trade value on stocks and ETFs, and $4 per options
            contract. On a $100 trade you pay $1, which is 1%. On a $1,000
            trade you pay $2.50. Small frequent trades are expensive in
            percentage terms, so beginners should trade less often and in
            bigger chunks.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Product</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Fee</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Sarwa Invest</td>
                  <td className="py-3 pr-4 text-right font-bold">0.40% to 0.85% a year ($7/mo minimum)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Sarwa Trade stocks and ETFs</td>
                  <td className="py-3 pr-4 text-right font-bold">$1 or 0.25% per trade, whichever is higher</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Sarwa Trade options</td>
                  <td className="py-3 pr-4 text-right font-bold">$4 per contract</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Sarwa Save</td>
                  <td className="py-3 pr-4 text-right font-bold">0.50% a year</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Sarwa Crypto</td>
                  <td className="py-3 pr-4 text-right font-bold">1.5% spread per trade (no commission)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">ETF expense ratios (Invest)</td>
                  <td className="py-3 pr-4 text-right font-bold">About 0.10% a year, to fund providers</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Local AED bank transfer</td>
                  <td className="py-3 pr-4 text-right font-bold">Free</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Account opening, closing, inactivity, custody, withdrawal</td>
                  <td className="py-3 pr-4 text-right font-bold">None</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The quiet cost is currency conversion. You fund in AED, but you
            invest in USD. Sarwa applies a conversion rate with a small spread
            over the interbank rate. It is competitive for the region, but it
            is a real cost on every deposit and withdrawal, so factor it in.
          </P>
        </Section>

        <Section id="signup">
          <H2>How to sign up</H2>
          <P>
            Signing up took me about ten minutes, most of it answering the
            risk questionnaire. If you use a referral link, make sure you
            land on the signup page through it, because the code has to be
            applied during onboarding and cannot be added later.
          </P>
          <Steps
            items={[
              "Open the referral link and choose Sign up, or download the Sarwa app and start there.",
              "Enter your email and mobile number, then create your password.",
              "Confirm which products you want: Invest, Trade, Save, or all three. You can add the others later.",
              "Answer the risk questionnaire honestly. It asks about your goals, timeline, income, and how you would react to a 20% drop. This sets your Invest portfolio, so do not rush it.",
              "Submit your details and move on to identity verification.",
            ]}
          />
        </Section>

        <Section id="verify">
          <H2>How to verify your identity</H2>
          <P>
            Sarwa is a regulated financial firm, so verification is mandatory
            and there is no way around it. As a UAE resident you will need
            your Emirates ID. The app walks you through it:
          </P>
          <Steps
            items={[
              "Scan your Emirates ID in the app when prompted, front and back.",
              "Take a live selfie for the liveness check. Do it in good light or it will reject you and ask again.",
              "Add your proof of address if requested, such as a utility bill or bank statement.",
              "Wait for approval. Mine took under an hour, but Sarwa says it can take up to two business days if manual review is needed.",
            ]}
          />
          <P>
            One honest note: Sarwa does not onboard everyone. US persons are
            excluded, some nationalities and countries are restricted, and
            approval is at Sarwa's discretion. If you live outside the UAE,
            check eligibility before you get attached to the idea.
          </P>
        </Section>

        <Section id="fund">
          <H2>How to fund your account</H2>
          <P>
            This is the step where beginners lose money to fees without
            realising it, so read carefully. You have two main options:
          </P>
          <Steps
            items={[
              "Bank wire transfer (recommended): in the app, go to Funding and get Sarwa's bank details plus your personal reference code. Send AED from your UAE bank account with that reference in the transfer notes, then confirm the transfer in the app. Local transfers are free and this method also verifies your bank account for future withdrawals.",
              "Debit card: faster, almost instant, but costs around 10 AED per transaction. Fine for a first small deposit, wasteful as a habit.",
              "If you use Instant Funding on Trade, Sarwa credits your account within minutes up to your limit (AED 2,000 if your balance is under $1,000, AED 25,000 above it), while the actual bank transfer catches up behind the scenes.",
            ]}
          />
          <P>
            Always include your reference code. Without it, Sarwa cannot
            match the money to your account and your deposit sits in limbo
            while support sorts it out.
          </P>
        </Section>

        <Section id="start-investing">
          <H2>How to start automated investing</H2>
          <P>
            This was my first real investing experience, and the whole point
            of Invest is that there is almost nothing to do after setup:
          </P>
          <Steps
            items={[
              "Finish signup and pick Sarwa Invest, or add it later from the dashboard.",
              "Review the portfolio Sarwa recommends from your questionnaire. It shows the ETF mix and the risk score, such as Risk 5 out of 6.",
              "Choose conventional, Halal, or socially responsible if you want a screened version.",
              "Transfer at least $500 into your Invest account.",
              "Sarwa invests the money across the ETFs automatically. From here, rebalancing and dividend reinvestment happen without you touching anything.",
            ]}
          />
          <P>
            The beginner mistake is checking the app every day. A managed
            portfolio is built for years, not weeks. Set up a monthly
            transfer if you can, then leave it alone.
          </P>
        </Section>

        <Section id="first-trade">
          <H2>How to place your first stock trade</H2>
          <P>
            My first trade was a fractional share of a company I actually
            understood. Here is the exact flow in the app:
          </P>
          <Steps
            items={[
              "Open Sarwa Trade and make sure you have at least $500 funded in the Trade account.",
              "Use the search to find the stock or ETF by name or ticker.",
              "Tap Buy. Enter a dollar amount (fractional) or a number of shares.",
              "Choose a market order to buy at the current price, or a limit order to buy only at your chosen price or better.",
              "Review the order summary, which shows the $1 or 0.25% commission, then confirm.",
            ]}
          />
          <P>
            Remember the fee math: a $50 trade costs $1, which is 2%. Make
            your first trades count by sizing them sensibly, and avoid
            options entirely until you understand what a contract is. Options
            can go to zero fast, and $4 a contract adds up.
          </P>
        </Section>

        <Section id="withdraw">
          <H2>How to withdraw</H2>
          <P>
            Withdrawing is straightforward but slow compared to a bank app,
            and there is one rule that catches people out: you can only
            withdraw to a bank account in your own name that you have already
            used to fund Sarwa. Fund by wire first, and your account is
            verified for withdrawals automatically.
          </P>
          <Steps
            items={[
              "In the app, go to Account, then Withdrawals, then Make a Withdrawal.",
              "Pick the account: Invest, Trade, or Save.",
              "Select your verified bank account, enter the amount and a reason, then confirm.",
              "Wait. Trade withdrawals take 1 to 2 business days after your cash settles (stock sales settle one business day after the sale). Save takes 3 to 5 days. Invest takes 4 to 6 business days, or 6 to 9 for Halal portfolios, because the ETFs have to be sold first.",
            ]}
          />
          <P>
            You cannot withdraw to a debit card, only by bank transfer. And
            if you funded by card only and never by wire, sort out a wire
            transfer first or your withdrawal options will be limited.
          </P>
        </Section>

        <Section id="referral">
          <H2>The referral bonus, explained</H2>
          <P>
            Sarwa's referral program is one of the more generous in the
            region, and the terms are published in its help center, so here
            is exactly how it works as of October 2026:
          </P>
          <Steps
            items={[
              "Sign up through a referral link. The code must be applied during onboarding; it cannot be added to an existing account.",
              "Fund at least $500 within 90 days of the code being applied, across Invest, Trade, or Save.",
              "Both you and the referrer receive a bonus based on how much you funded: $500 to $2,999 earns AED 100 each, $3,000 to $9,999 earns AED 300 each, $10,000 to $49,999 earns AED 1,000 each, and $50,000 or more earns AED 3,000 each.",
              "The bonus is typically paid within 30 days of qualifying.",
              "Keep the money invested for 12 months. If you withdraw below the required balance during that period, Sarwa can claw the bonus back.",
            ]}
          />
          <P>
            The honest read: the bonus is real money, but the 12-month
            retention rule means it rewards people who were going to invest
            anyway. Do not deposit $50,000 for a bonus if $50,000 is not
            money you can leave invested.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton className="w-full sm:w-auto">
              Claim the referral bonus
            </PrimaryCtaButton>
          </div>
        </Section>

        <Section id="security">
          <H2>Security and regulation</H2>
          <P>
            This is the section that matters most, so I will be precise.
            Sarwa Digital Wealth (Capital) Limited is regulated by the
            Financial Services Regulatory Authority (FSRA) in Abu Dhabi
            Global Market as a Category 3C firm. A separate entity, Sarwa
            Digital Wealth Limited, is regulated by the Dubai Financial
            Services Authority (DFSA) in the DIFC. Your investments are held
            with custodians, and the app and website use 256-bit encryption.
          </P>
          <P>
            Now the part most reviews skip. In May 2024, the FSRA fined Sarwa
            $122,500 and the DFSA fined a related Sarwa company $191,100,
            after Sarwa offered its own shares to investors without an
            approved prospectus. Sarwa reversed all 144 subscriptions, about
            $2.1 million, once the regulators raised the issue. This was
            about Sarwa's own fundraising paperwork, not about client
            portfolios, and client money was not at stake. But it happened,
            it is on the public record, and you deserve to know before
            trusting a platform with your savings.
          </P>
          <P>
            Practical security notes from using the app: enable every
            security option offered, use a unique password, and remember that
            regulation protects the structure around your money, not the
            value of your investments. If your ETFs fall 20%, no regulator
            makes you whole.
          </P>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how other users
            rate Sarwa on public platforms. These are third-party ratings,
            checked in October 2026, and they move over time.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-black text-slate-950">Platform</th>
                  <th className="py-3 pr-4 text-right font-black text-slate-950">Rating</th>
                </tr>
              </thead>
              <tbody className="leading-7 text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Trustpilot</td>
                  <td className="py-3 pr-4 text-right font-bold">3.6 out of 5 (164 reviews)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">3.7 out of 5 (2,500+ ratings)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">4.4 out of 5 (110+ ratings)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Two honest caveats. The review bases are small compared to global
            brokers, so a handful of angry reviews moves the average. And
            app trackers flagged the Sarwa app as removed from both stores
            around April 2026; it has since been relisted (live on Google
            Play as of October 2026 with fresh ratings coming in), which
            explains why the rating counts are still thin. Check the live
            store listings yourself before judging the app on these numbers.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-lg font-black text-slate-950">Pros</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-800">
                <li>Regulated in the UAE by the FSRA and DFSA</li>
                <li>Genuinely beginner-friendly: questionnaire to portfolio with no stock picking needed</li>
                <li>Three products in one app: automated investing, self-directed trading, yield on cash</li>
                <li>Fractional shares make expensive US stocks affordable</li>
                <li>Free local AED transfers, no account or withdrawal fees</li>
                <li>Halal and socially responsible portfolio options</li>
                <li>24/7 human customer support</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-lg font-black text-slate-950">Cons</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-800">
                <li>Invest fee of 0.85% plus the $7 monthly minimum is steep on small balances</li>
                <li>$1 minimum per trade makes small frequent trades expensive</li>
                <li>US markets only, no UAE, Saudi, or other regional stocks</li>
                <li>Withdrawals take days, and only to a previously funded bank account in your name</li>
                <li>FX spread on AED to USD conversion is a quiet ongoing cost</li>
                <li>2024 regulatory fines are on the public record</li>
                <li>Crypto offering is basic with a meaningful spread</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            <strong>Sarwa suits you if</strong> you live in the UAE, you are
            investing for the first time, and you want someone else to handle
            the portfolio while you learn. It also suits steady monthly
            investors who want US market exposure without opening an
            international brokerage account.
          </P>
          <P>
            <strong>Skip it if</strong> you want UAE or Saudi stocks, you
            trade frequently in small sizes (the $1 minimum will eat you),
            you need your money back within days, or you are outside the
            supported countries. Active options traders will also find the
            $4 per contract and the simple toolset limiting compared to a
            full international broker.
          </P>
          <P>
            If what you actually want is crypto, Sarwa is the wrong app.
            Compare dedicated{" "}
            <Link
              href="/exchanges/best-crypto-exchanges"
              className="font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900"
            >
              crypto exchanges
            </Link>{" "}
            instead, where the fees, liquidity, and coin selection are built
            for that job.
          </P>
        </Section>

        <Section id="risks">
          <H2>Risks beginners miss</H2>
          <P>
            <strong>Market risk is the big one.</strong> A diversified ETF
            portfolio still falls when markets fall. The questionnaire gives
            you a risk score, not a safety net.
          </P>
          <P>
            <strong>Fee drag on small accounts.</strong> As shown above, the
            $7 monthly minimum means a $500 Invest account pays nearly 17% a
            year in fees. Start bigger, or start with Save or Trade until
            your balance justifies Invest.
          </P>
          <P>
            <strong>Currency risk.</strong> You earn in AED and invest in USD.
            If the dollar weakens against the dirham, your returns shrink in
            local terms, and the conversion spread takes a cut both ways.
          </P>
          <P>
            <strong>Options are not beginner products.</strong> Sarwa offers
            them, and the app makes buying a contract feel as easy as buying
            a stock. An option can expire worthless. Leave them alone until
            you can explain what time decay is.
          </P>
          <P>
            <strong>Save is not a bank account.</strong> The estimated return
            is variable and the money sits in a money market fund, not a
            deposit account. It is low risk, not no risk.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Sarwa is the investing app I wish had existed when I first
            wondered what to do with my savings in the UAE. It takes a
            beginner from zero to invested in an afternoon, it is regulated
            where it operates, and its pricing is published instead of
            buried. The Invest product is the star: answer honest questions,
            get a sensible portfolio, and let it run.
          </P>
          <P>
            The honest deductions: fees punish small balances, you are
            locked to US markets, and the 2024 fines mean you should go in
            with open eyes, not blind trust. None of that disqualifies Sarwa.
            It just means you should size your start sensibly, understand
            every fee before you deposit, and treat the referral bonus as a
            perk, not a reason.
          </P>
          <P>
            If you are a UAE beginner who wants to start investing this
            month, Sarwa is a legitimate front door. Walk through it with
            your eyes open.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton className="w-full sm:w-auto">
              Visit Sarwa
            </PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Sarwa questions</H2>
          <div className="mt-6 space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-black text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-2 leading-7 text-slate-800">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-center sm:p-8">
            <p className="text-lg font-black text-white">
              Ready to start investing?
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Sign up through the referral link and fund $500 within 90 days
              to earn a bonus of up to AED 3,000. Investing involves risk,
              including possible loss of capital.
            </p>
            <div className="mt-5">
              <PrimaryCtaButton>Visit Sarwa</PrimaryCtaButton>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
