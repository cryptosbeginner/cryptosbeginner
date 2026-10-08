import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.cryptosbeginner.com/regions/south-korea";

export const metadata: Metadata = {
  title: "Best Crypto Exchanges in South Korea 2026: KRW Markets and Real-Name Rules",
  description:
    "South Korea's exchanges need FIU registration plus a real-name bank partnership to accept KRW deposits. This October 2026 guide explains the rules, lists the five banked exchanges, and covers what non-residents should know.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Can foreigners use South Korean crypto exchanges?",
    answer:
      "Effectively, no. Opening an account on a domestic exchange requires a Korean registration number and a local bank account in your legal name, which most foreigners do not have. If you are not a Korean resident with local banking, domestic exchanges are not a realistic option.",
  },
  {
    question: "Which Korean exchanges accept KRW deposits?",
    answer:
      "As of early 2026, five exchanges held verified real-name bank partnerships: Upbit with K-Bank, Bithumb with KB Kookmin Bank, Coinone with Kakao Bank, Korbit with Shinhan Bank, and Gopax with Jeonbuk Bank. Only exchanges with both FIU VASP registration and a bank partnership can legally offer KRW deposits.",
  },
  {
    question: "Why do Korean exchanges need bank partnerships?",
    answer:
      "Under the real-name account system, KRW deposits and withdrawals must flow through a verified bank account held in the trader's legal name at a partner bank. This links every fiat movement to a verified identity and is a core anti-money-laundering control supervised by the FIU.",
  },
  {
    question: "Are global exchanges like Binance available in Korea?",
    answer:
      "Many global platforms geo-block South Korea or restrict onboarding for Korean residents. Never assume a global account will work: check the platform's terms and country eligibility list before signing up, and expect that domestic KRW rails will not be available to you there.",
  },
  {
    question: "What is the 3 billion won safeguard requirement?",
    answer:
      "Under guidelines from the Korea Federation of Banks, exchanges must maintain minimum safeguard reserves, reported at 3 billion won, as a financial buffer. It is one of several measures meant to ensure exchanges can meet their obligations to users.",
  },
  {
    question: "I am not a Korean resident. What are my options?",
    answer:
      "Use an exchange licensed or explicitly available in your own country of residence, and verify its country eligibility before depositing. Do not try to open a Korean exchange account with borrowed documents or someone else's bank account: that breaks identity verification rules and puts any funds at risk.",
  },
];

function RegionJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    headline: "Best Crypto Exchanges in South Korea 2026: KRW Markets and Real-Name Rules",
    description:
      "South Korea's exchanges need FIU registration plus a real-name bank partnership to accept KRW deposits. This guide explains the rules, lists the five banked exchanges, and covers what non-residents should know.",
    datePublished: "2026-08-01",
    dateModified: "2026-10-08",
    author: [
      {
        "@type": "Person",
        name: "Alex Rivera",
        url: "https://www.cryptosbeginner.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cryptosbeginner.com/images/logo-cryptosbeginner.png",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const safeArticle = JSON.stringify(articleLd).replace(/</g, "\\u003c");
  const safeFaq = JSON.stringify(faqLd).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeArticle }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

export default function SouthKoreaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <RegionJsonLd />

        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <p className="mb-2 text-sm font-medium text-indigo-600">
              Updated October 2026 · By Alex Rivera
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Best Crypto Exchanges in South Korea 2026
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              South Korea has one of the world&apos;s most distinctive crypto
              market structures. To accept Korean won deposits, an exchange
              needs two things: registration as a virtual asset service
              provider with the Financial Intelligence Unit (FIU), and a
              real-name account partnership with a domestic bank. That dual
              requirement concentrates KRW trading on a handful of exchanges
              and effectively locks out anyone without Korean residency and
              local banking.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-emerald-900">TL;DR</h2>
            <ul className="space-y-2 text-slate-800">
              <li>
                KRW deposits require FIU VASP registration plus a real-name
                bank partnership. Only five exchanges held verified
                partnerships as of early 2026.
              </li>
              <li>
                The five are Upbit (K-Bank), Bithumb (KB Kookmin Bank), Coinone
                (Kakao Bank), Korbit (Shinhan Bank), and Gopax (Jeonbuk Bank).
              </li>
              <li>
                Foreigners are effectively locked out: you need a Korean
                registration number and a local bank account in your legal
                name.
              </li>
              <li>
                Exchanges face tightened reserve requirements, including a
                minimum 3 billion won safeguard under banking federation
                guidelines.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            How regulation works in South Korea
          </h2>
          <p className="mt-4 text-slate-700">
            The Financial Services Commission (FSC) and its Financial
            Intelligence Unit (FIU) supervise virtual asset service providers.
            The defining feature of the Korean system is the real-name account
            requirement: an exchange can only take KRW deposits if each
            customer&apos;s deposits flow through a verified bank account held
            in that customer&apos;s legal name at a partner bank. This ties
            every won movement to a verified identity and forms the backbone
            of the country&apos;s crypto anti-money-laundering framework.
          </p>
          <p className="mt-4 text-slate-700">
            Because bank partnerships are hard to secure, the market is highly
            concentrated. As of early 2026, five exchanges had verified
            partnerships: Upbit with K-Bank, Bithumb with KB Kookmin Bank,
            Coinone with Kakao Bank, Korbit with Shinhan Bank, and Gopax with
            Jeonbuk Bank. Exchanges without a banking partner can generally
            only offer crypto-to-crypto trading, which is a much thinner
            proposition for local users.
          </p>
          <p className="mt-4 text-slate-700">
            Oversight keeps getting stricter. Exchanges face tightened reserve
            requirements, including a minimum 3 billion won safeguard under
            Korea Federation of Banks guidelines, designed to make sure
            platforms can meet their obligations to users. For beginners, the
            practical message is reassuring but narrow: if you are a Korean
            resident, the banked exchanges operate under close supervision; if
            you are not, they are not an option for you.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Exchanges with KRW bank partnerships
          </h2>
          <p className="mt-4 text-slate-700">
            These are the five exchanges with verified real-name bank
            partnerships as of early 2026. Partnerships can change, so confirm
            the current banking relationship before relying on KRW rails.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Exchange
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Why it fits this market
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Upbit
                  </td>
                  <td className="px-4 py-3">
                    The dominant Korean exchange by volume, partnered with
                    K-Bank for real-name KRW accounts. The default choice for
                    most domestic traders.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://upbit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bithumb
                  </td>
                  <td className="px-4 py-3">
                    Long-established domestic exchange, partnered with KB
                    Kookmin Bank, with deep KRW order books on major pairs.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://www.bithumb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinone
                  </td>
                  <td className="px-4 py-3">
                    Partnered with Kakao Bank, appealing to users already in
                    the Kakao ecosystem, with a clean beginner interface.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://coinone.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Korbit
                  </td>
                  <td className="px-4 py-3">
                    One of Korea&apos;s earliest exchanges, partnered with
                    Shinhan Bank, known for a straightforward spot trading
                    experience.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://www.korbit.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Gopax
                  </td>
                  <td className="px-4 py-3">
                    Smaller venue partnered with Jeonbuk Bank, an alternative
                    for users who prefer a less crowded platform.
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://www.gopax.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Note: all five require Korean residency documents and a local bank
            account in your legal name. Non-residents should look to exchanges
            available in their own country instead.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            What to verify before you sign up
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <strong>FIU registration:</strong> confirm the exchange is a
              registered virtual asset service provider. Unregistered venues
              cannot legally offer KRW deposits.
            </li>
            <li>
              <strong>Bank partnership:</strong> check which bank provides the
              real-name accounts and that you can open an account there in your
              own name.
            </li>
            <li>
              <strong>Identity documents:</strong> have your Korean
              registration number and matching bank account ready. Mismatched
              names between exchange and bank accounts will block deposits.
            </li>
            <li>
              <strong>Fee schedule:</strong> compare trading fees, KRW
              deposit and withdrawal fees, and any minimums across the five
              banked exchanges.
            </li>
            <li>
              <strong>Global platform eligibility:</strong> if you are
              considering a global exchange instead, check its country
              eligibility list for Korea before signing up. Many restrict
              Korean residents.
            </li>
          </ul>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> Educational content only. This page
              is not financial advice. Availability depends on your residency,
              and Korean regulations and bank partnerships change over time.
              Verify the current registration and banking status of any
              exchange before depositing funds.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
