import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/exchanges/paybis-review`;

const UPDATED = "27 September 2026";
const UPDATED_ISO = "2026-09-27";
const ORIGINALLY_PUBLISHED = "19 June 2024";
const ORIGINALLY_PUBLISHED_ISO = "2024-06-19";

const PAYBIS = "https://go.cryptosbeginner.com/paybis";

export const metadata: Metadata = {
  title: "Paybis Review 2026: Fees, How to Buy Crypto & Is It Legit?",
  description:
    "October 2026 Paybis review: the fiat on-ramp broker for buying crypto with cards in 180+ countries. Real fee breakdown, step-by-step how-to, and honest risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Paybis Review 2026: Fees, How to Buy Crypto & Is It Legit?",
    description:
      "Paybis's fees, verification, and step-by-step how-to, reviewed honestly.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/paybis-homepage-2026.png`,
        width: 1919,
        height: 998,
        alt: "Paybis homepage with the buy Bitcoin with credit card headline and purchase widget",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paybis Review 2026: Fees, How to Buy Crypto & Is It Legit?",
    description:
      "The fiat on-ramp reviewed: fees, how it works, and what to watch.",
    images: [`${SITE_URL}/images/paybis-homepage-2026.png`],
  },
};

const faqItems = [
  {
    question: "Is Paybis legit and safe?",
    answer:
      "Yes. Paybis has operated since 2014 and is registered with FinCEN in the US as a money services business, with FINTRAC in Canada, and holds a MiCA CASP licence in Latvia since May 2026. It carries a 4.1 out of 5 Trustpilot rating across 31,000-plus reviews. It is a broker, not an exchange, so your main risk is the fee premium, not platform legitimacy.",
  },
  {
    question: "What are Paybis's fees?",
    answer:
      "Paybis stacks two fees: a service fee of about 1.49% plus a processing fee of roughly 4.5% to 8.5% on card purchases, with a $10 minimum on card transactions. Card buys are convenient but expensive compared to an exchange. Paybis often waives its own fee on your first card purchase.",
  },
  {
    question: "Does Paybis require ID verification?",
    answer:
      "Mostly. You can buy up to $1,000 without verification in most regions, but anything beyond that needs a quick ID check that usually takes a couple of minutes. Larger purchases always require full KYC.",
  },
  {
    question: "How do I buy Bitcoin on Paybis?",
    answer:
      "Enter your email to sign up, verify your identity if needed, pick Bitcoin in the homepage widget, enter how much you want to spend, choose your payment method, and paste the wallet address where you want the coins sent. Click Buy and the crypto is sent to your wallet.",
  },
  {
    question: "Can I sell crypto on Paybis?",
    answer:
      "Yes. Paybis works as an off-ramp too: sell your crypto and receive fiat to your bank account or card, depending on your region and payment method.",
  },
  {
    question: "Is Paybis available in the US?",
    answer:
      "Yes, in 48 states, excluding New York and Hawaii. Availability and payment methods vary by state and country, so check at signup.",
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
      href={PAYBIS}
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
  { id: "what-is", label: "What Paybis is (and is not)" },
  { id: "fees", label: "Fees, broken down honestly" },
  { id: "signup", label: "How to sign up and verify" },
  { id: "buy", label: "How to buy crypto step by step" },
  { id: "sell", label: "How to sell and cash out" },
  { id: "payments", label: "Payment methods and coverage" },
  { id: "security", label: "Security and regulation" },
  { id: "ratings", label: "What users say: ratings" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "who", label: "Who it suits, and who should skip it" },
  { id: "alternatives", label: "Alternatives" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "Paybis questions" },
];

export default function PaybisReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Paybis Review 2026: Fees, How to Buy Crypto & Is It Legit?",
    description:
      "October 2026 Paybis review: the fiat on-ramp broker for buying crypto with cards in 180+ countries. Real fee breakdown, step-by-step how-to, and honest risks.",
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
        name: "Paybis Review",
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

      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · Originally published {ORIGINALLY_PUBLISHED} ·
              By Alex Rivera · Reviewed for CryptosBeginner
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Paybis Review 2026: Fees, How to Buy Crypto &amp; Is It Legit?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Paybis is not an exchange. It is a fiat on-ramp: the fastest way
              to turn your card or bank payment into crypto in your own
              wallet, running since 2014 across 180-plus countries. The
              convenience is real, and so is the fee premium. Here is the full
              breakdown, step by step.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCtaButton className="w-full sm:w-auto">
                Visit Paybis
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

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <strong>Disclosure:</strong> The Paybis links on this page are
            affiliate links. If you sign up through them, CryptosBeginner
            may earn a commission at no extra cost to you. This does not
            change our assessment criteria or conclusions. This page is
            educational content, not financial advice.
          </div>

          <figure className="mt-8">
            <Image
              src="/images/paybis-homepage-2026.png"
              alt="Paybis homepage with the buy Bitcoin with credit card headline and purchase widget"
              width={1919}
              height={998}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              priority
            />
          </figure>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
              The short version
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-800">
              <li>
                <strong className="text-slate-950">A broker, not an exchange.</strong>{" "}
                No order books, no trading pairs, no leverage. You buy crypto
                with fiat, straight to your wallet.
              </li>
              <li>
                <strong className="text-slate-950">Fast and simple.</strong>{" "}
                Running since 2014, 90-plus cryptos, 20-plus payment methods,
                180-plus countries.
              </li>
              <li>
                <strong className="text-slate-950">Stacked fees.</strong>{" "}
                About 1.49% service fee plus 4.5% to 8.5% card processing.
                Convenient, not cheap.
              </li>
              <li>
                <strong className="text-slate-950">Quick verification.</strong>{" "}
                Up to $1,000 without verification in most regions, then a
                couple of minutes with an ID.
              </li>
              <li>
                <strong className="text-slate-950">Regulated.</strong>{" "}
                FinCEN in the US, FINTRAC in Canada, MiCA CASP licence in
                Latvia since May 2026.
              </li>
              <li>
                <strong className="text-slate-950">Your wallet, your coins.</strong>{" "}
                Crypto goes to your external wallet or a Paybis wallet. No
                exchange balance to get stuck.
              </li>
            </ul>
          </div>

          <nav aria-label="On this page" className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              On this page
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm font-semibold text-indigo-700 no-underline hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <Section id="what-is">
          <H2>What Paybis is (and is not)</H2>
          <P>
            Paybis launched in 2014 in Glasgow, Scotland, founded by
            Innokenty Isers and Konstantin Vasilenko. Twelve years later it
            is one of the longest-running crypto on-ramps in the business,
            and the distinction matters: Paybis is a broker, not an
            exchange. There are no order books, no limit orders, no
            crypto-to-crypto trading, and no leverage.
          </P>
          <P>
            Instead, you pick a coin, pick a payment method, and receive
            crypto at your wallet address. That is the whole product, and
            for a first-time buyer who just wants Bitcoin in their own
            wallet tonight, it is exactly the right shape. You pay for that
            simplicity in fees, which we will break down honestly below.
          </P>
        </Section>

        <Section id="fees">
          <H2>Fees, broken down honestly</H2>
          <P>
            Paybis does not charge one fee. It stacks two: a service fee of
            around 1.49% plus a payment processing fee that runs roughly
            4.5% to 8.5% on card purchases, with a $10 minimum on card
            transactions. Put together, a card buy can cost you somewhere in
            the high single digits in total fees. That is the honest number,
            and it is a lot compared to the 0.1% you would pay on an
            exchange.
          </P>
          <P>
            Two things soften the blow: Paybis frequently waives its own
            service fee on your first card purchase, and bank transfer
            options are cheaper than cards where available. One honest note
            on our process: Paybis hosts its fee details on a support page
            protected by a bot check that our systems could not get past, so
            these figures come from Paybis's published materials and
            independent reviews rather than a live capture of the fee page.
            Always check the final quote in the purchase widget before you
            confirm, because the widget shows you the exact amount of crypto
            you will receive.
          </P>
        </Section>

        <Section id="signup">
          <H2>How to sign up and verify</H2>
          <P>
            Signing up is quick. Verification is where Paybis is pleasantly
            reasonable: you can buy up to $1,000 without verification in
            most regions, which is perfect for a first small purchase, and
            the full check takes just a couple of minutes when you need it.
          </P>
          <Steps
            items={[
              "Go to the Paybis homepage and click Sign up, then enter your email address and create a strong password.",
              "Check your inbox for the verification code and enter it to activate your account.",
              "For purchases over $1,000, click Start Verification, choose your country and ID type, and upload clear photos of your ID plus a selfie.",
              "Verification usually completes in a few minutes, and then your limits open up.",
            ]}
          />
        </Section>

        <Section id="buy">
          <H2>How to buy crypto step by step</H2>
          <figure className="mt-6">
            <Image
              src="/images/paybis-cryptos-2026.png"
              alt="Paybis supported cryptocurrencies section showing buy options for Ethereum, Tether, BNB, and other coins"
              width={1919}
              height={998}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            This is where Paybis shines for beginners. The whole purchase
            happens in one widget on the homepage, and the crypto goes
            straight to a wallet you control. No trading interface to learn,
            no order types to get wrong.
          </P>
          <Steps
            items={[
              "In the homepage widget, choose the cryptocurrency you want, for example Bitcoin or Ethereum.",
              "Enter how much you want to spend in your currency. The widget shows the live price and exactly how much crypto you will receive, fees included.",
              "Pick your payment method: credit or debit card, bank transfer, Apple Pay, Google Pay, PayPal, or Skrill, depending on your region.",
              "Enter the wallet address where you want the crypto sent. Use your own external wallet if you have one, or Paybis can provide one.",
              "Double-check the amount and the wallet address, then click Buy. The crypto is sent to your wallet, usually within minutes.",
            ]}
          />
          <P>
            The wallet address step deserves emphasis: Paybis sends crypto
            to an address you provide, it does not hold a trading balance
            for you by default. Copy your address carefully, and for a first
            purchase, consider a small test amount.
          </P>
        </Section>

        <Section id="sell">
          <H2>How to sell and cash out</H2>
          <P>
            Paybis works in reverse too. If you hold crypto and want fiat
            back in your bank account, the sell flow mirrors the buy flow:
            choose Sell Crypto, pick the coin and amount, select where the
            money should go, and send your crypto to the address Paybis
            shows you. Once it arrives, the fiat is released to your payment
            method. Availability of sell options varies by country, so check
            what your region supports.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Paybis</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="payments">
          <H2>Payment methods and coverage</H2>
          <figure className="mt-6">
            <Image
              src="/images/paybis-faq-2026.png"
              alt="Paybis FAQ page with expandable questions about support, exchanging currency, and verification"
              width={1919}
              height={998}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
          </figure>
          <P>
            Paybis supports over 20 payment methods, which is one of its
            genuine advantages: credit and debit cards, SEPA bank transfers,
            ACH, Apple Pay, Google Pay, PayPal, Skrill, and Neteller,
            depending on where you live. It operates in over 180 countries
            with 48-plus fiat currencies, and in the US it serves 48 states
            excluding New York and Hawaii. If your country has awkward
            banking rails, Paybis probably has a way in.
          </P>
        </Section>

        <Section id="security">
          <H2>Security and regulation</H2>
          <P>
            Paybis's regulatory footprint is solid for a broker: registered
            with FinCEN in the US as a money services business, with
            FINTRAC in Canada, and holding a MiCA CASP licence in Latvia
            since May 2026. Verification follows standard KYC, and the
            platform holds a 4.1 out of 5 Trustpilot rating across more than
            31,000 reviews.
          </P>
          <P>
            The structural safety point is worth making: because Paybis
            sends crypto to your wallet rather than holding an exchange
            balance, there is no big honeypot of customer funds sitting on
            the platform. Your main job is keeping your own wallet secure.
          </P>
        </Section>

        <Section id="ratings">
          <H2>What users say: ratings</H2>
          <P>
            Our verdict is our own, but it is worth seeing how other users
            rate Paybis on public platforms. These are third-party ratings,
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
                  <td className="py-3 pr-4 text-right font-bold">4.1 out of 5 (31,000+ reviews)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google Play</td>
                  <td className="py-3 pr-4 text-right font-bold">4.7 out of 5</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Apple App Store</td>
                  <td className="py-3 pr-4 text-right font-bold">5.0 out of 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            The Trustpilot score comes from tens of thousands of
            independent reviews, with users most often praising transaction
            speed and support responsiveness. The app store scores are as
            reported on Paybis's own site.
          </P>
        </Section>

        <Section id="pros-cons">
          <H2>Pros and cons</H2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">Pros</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Operating since 2014, long track record</li>
                <li>Dead simple: buy in one widget, no trading UI</li>
                <li>20+ payment methods, 180+ countries</li>
                <li>Crypto goes straight to your own wallet</li>
                <li>Up to $1,000 without verification in most regions</li>
                <li>FinCEN, FINTRAC, and MiCA CASP licensing</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="font-black text-rose-900">Cons</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                <li>Stacked fees: ~1.49% plus 4.5-8.5% on cards</li>
                <li>Not an exchange: no trading, no limit orders</li>
                <li>No leverage or advanced features</li>
                <li>Fee details sit behind a bot-checked support page</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who">
          <H2>Who it suits, and who should skip it</H2>
          <P>
            Paybis suits first-time buyers who want crypto in their own
            wallet tonight with minimum fuss, and anyone in a country where
            the big exchanges have thin payment options. If your priority
            is speed and simplicity over price, this is your product.
          </P>
          <P>
            Skip it if you care about fees, because an exchange will always
            be cheaper, or if you want to actually trade. For cheaper
            buying with a real exchange behind it, see{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            or{" "}
            <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
              Binance
            </Link>
            .
          </P>
        </Section>

        <Section id="alternatives">
          <H2>Alternatives</H2>
          <P>
            For cheaper fiat on-ramps with full exchanges attached,{" "}
            <Link href="/exchanges/kraken-review" className="text-blue-600 hover:underline">
              Kraken
            </Link>{" "}
            and{" "}
            <Link href="/exchanges/binance-review" className="text-blue-600 hover:underline">
              Binance
            </Link>{" "}
            both take cards and bank transfers at a fraction of the cost.
            For Australians,{" "}
            <Link href="/exchanges/coinspot-review" className="text-blue-600 hover:underline">
              CoinSpot
            </Link>{" "}
            has free PayID deposits. Our{" "}
            <Link href="/exchanges/best-crypto-exchanges" className="text-blue-600 hover:underline">
              best crypto exchanges
            </Link>{" "}
            guide compares the leading venues side by side.
          </P>
        </Section>

        <Section id="verdict">
          <H2>Verdict</H2>
          <P>
            Paybis is the honest convenience play: the easiest way to turn
            fiat into crypto in your own wallet, from a company that has
            been doing it since 2014. You pay for that ease with some of the
            highest fees in the business, so use it for what it is good at,
            a first purchase or an awkward payment rail, and graduate to an
            exchange when the training wheels come off.
          </P>
          <div className="mt-7">
            <PrimaryCtaButton>Visit Paybis</PrimaryCtaButton>
          </div>
        </Section>

        <Section id="faq">
          <H2>Paybis questions</H2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-800">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
