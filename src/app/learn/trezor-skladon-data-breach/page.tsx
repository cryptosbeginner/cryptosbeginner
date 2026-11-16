import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/trezor-skladon-data-breach`;
const UPDATED = "17 November 2026";
const UPDATED_ISO = "2026-11-17";
const IMG = "/images/learn/trezor-skladon/what-leaked.png";

export const metadata: Metadata = {
  title: "Trezor Skladon Data Breach: 27,000 Orders Exposed, What Leaked and What Did Not",
  description:
    "An attacker breached Skladon, a Trezor delivery partner, and exported data for about 27,000 orders placed between 9 August and 7 November 2026: names, addresses, phone numbers, emails and order details. No seed phrases, PINs or devices were involved. Who is affected, the scam call risk, and what Trezor is changing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Trezor Skladon Data Breach: 27,000 Orders Exposed | CryptosBeginner",
    description:
      "The device did not leak. The delivery database did. What the Skladon breach exposed, who is affected, why scam calls are the real risk, and Trezor's response.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMG}`, alt: "Diagram of the Trezor Skladon breach showing what was exported, about 27,000 orders with names, phone numbers, delivery addresses, emails and order details, versus what was never touched: wallet backups, PINs, passphrases and Trezor's own systems, plus the November 2026 timeline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trezor Skladon Data Breach: 27,000 Orders Exposed",
    description:
      "Names, addresses, phone numbers and order details for about 27,000 Trezor orders were exported from a delivery partner. Seeds and devices were not involved. Here is the full picture.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Was my seed phrase or wallet backup leaked in the Trezor breach?",
    answer:
      "No. The breach hit Skladon, a delivery partner, and the data it held was order data: names, phone numbers, delivery and email addresses, and order details. Trezor says no wallet backups, PINs or passphrases were involved, and that is consistent with how hardware wallets work: your backup is created on your device and Trezor never receives or stores it.",
  },
  {
    question: "Am I affected by the Skladon breach?",
    answer:
      "You are in the affected set if you ordered a Trezor between 9 August and 7 November 2026 and Skladon handled the delivery. Trezor emailed the customers it can reach. Skladon does not ship to the United States, so US customers are not affected by this incident. A small number of customers who ordered between 9 and 14 August cannot be emailed because Trezor had already anonymized their details.",
  },
  {
    question: "Is my Trezor device still safe to use?",
    answer:
      "Yes, on everything Trezor has disclosed. Trezor says its own systems were not compromised and the device is secure. The breach exposed who bought devices and where they live, not anything that can unlock a device. The risk to manage is contact and targeting, not the hardware.",
  },
  {
    question: "What should I do if I get a call or message about my Trezor order?",
    answer:
      "Treat it as hostile. Trezor says it will never cold-call you or ask for your wallet backup, and it has warned that some customers have already reported scam calls. Do not share your backup, PIN or passphrase with anyone, do not follow links in unexpected messages about your order, and check anything important through Trezor's official site or app, typed in yourself.",
  },
  {
    question: "Why did a delivery company have my name and address at all?",
    answer:
      "Because someone has to ship the box. Fulfilment partners hold the order data needed to deliver: who you are, where it goes, and what you bought. That data normally sits with the partner until it is deleted. Trezor says it is shortening how long order data is kept, from 90 days to 45, and requiring its shipping partners to follow the same policy.",
  },
];

export default function TrezorSkladonDataBreachPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Trezor Skladon Data Breach: 27,000 Orders Exposed, What Leaked and What Did Not",
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
      { "@type": "ListItem", position: 3, name: "Trezor Skladon Data Breach", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Link href="/learn/how-to-anonymize-bitcoin" className="text-sm font-black text-amber-200 hover:text-white">
              ← Back to the Bitcoin privacy guide
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Wallet security news
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Trezor's delivery partner was breached: 27,000 orders exposed, and your seed was not in it
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              On 16 November 2026, Trezor disclosed that an attacker had gained unauthorized
              access to Skladon, one of the delivery partners that ships its hardware wallets,
              and exported the data it held for about 27,000 orders placed between 9 August and
              7 November: full names, phone numbers, delivery addresses, email addresses and
              order details. The distinction that matters: Trezor's own systems were not
              compromised, and no wallet backups, PINs or passphrases were involved, because
              Trezor never holds them. What leaked is a list of people who own crypto, with the
              addresses where they live.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            An attacker breached Skladon, a company that delivers Trezor orders, on 7 November
            2026. Skladon notified Trezor on 15 November and Trezor disclosed it the next day.
            About 27,000 orders are affected. The exposed data identifies buyers and where their
            devices were delivered; it cannot unlock any wallet. The practical risks are scam
            calls and physical targeting, and Trezor says scam calls have already been reported.
            US customers are not affected, because Skladon does not ship to the United States.
          </Callout>

          <figure className="mt-8">
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 aspect-[1600/980]">
              <Image
                src={IMG}
                alt="Diagram of the Trezor Skladon breach showing what was exported, about 27,000 orders with names, phone numbers, delivery addresses, emails and order details, versus what was never touched: wallet backups, PINs, passphrases and Trezor's own systems, plus the November 2026 timeline"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </figure>

          <GuideH2>What happened</GuideH2>
          <GuideP>
            Skladon is a fulfilment and delivery partner: to ship a hardware wallet, it holds the
            order record, who bought it, where it is going, and how to reach them. Trezor says
            Skladon notified it on 15 November that an attacker had gained unauthorized access to
            that order data, with the intrusion itself dated to 7 November. Trezor believes the
            attacker exported the data for about 27,000 orders placed between 9 August and 7
            November 2026, and says it is still investigating with Skladon. Trezor emailed the
            affected customers it can reach and, per reporting on the disclosure, notified the
            data protection authority.
          </GuideP>
          <GuideP>
            One group cannot be reached at all: customers who ordered between 9 and 14 August
            and whose details Trezor had already anonymized in its own systems. There is a bleak
            irony in that. The anonymization worked exactly as intended, and it also means those
            buyers cannot be warned, even though the partner's copy of their data was exposed.
          </GuideP>

          <GuideH2>What leaked, and what did not</GuideH2>
          <GuideP>
            The exported records cover the order, not the wallet: full names, phone numbers,
            delivery addresses, email addresses, and order details such as the product bought and
            its price. Nothing in the dataset can move funds. Wallet backups, PINs and
            passphrases were not part of it, and Trezor's own systems and devices were not
            compromised. That is not luck; it is the hardware wallet model working as designed.
            Your backup is generated on the device in your hand, and no copy exists on a company
            server to steal.
          </GuideP>
          <GuideP>
            What the data does enable is targeting. A name, a home address, a phone number and
            proof that the person at that address bought a hardware wallet is precisely the raw
            material for convincing phishing, for scam calls that open with accurate details, and
            in the worst case for physical extortion. Trezor's own disclosure tells customers to
            be alert to risks to their physical security, and that is the sentence to take
            seriously.
          </GuideP>

          <GuideH2>The real risk is contact, not coins</GuideH2>
          <GuideP>
            Trezor says some customers have already reported scam calls. Expect the standard
            script, upgraded with real data: a caller who knows your name, your address and the
            exact device you bought, claiming there is a problem with your order or a security
            issue with your wallet, and walking you toward revealing your backup or moving funds
            to a "safe" address. Every part of that call is the attack. The defenses are boring
            and complete:
          </GuideP>
          <BulletList
            items={[
              <span key="1"><strong>Trezor will never cold-call you.</strong> Any unsolicited call, text, email or letter about your order should be treated as suspicious by default, however accurate its details sound. Accuracy is what the breach provides.</span>,
              <span key="2"><strong>Your backup is yours alone.</strong> No company, support agent or "security team" will ever legitimately ask for your wallet backup, PIN or passphrase. Anyone who does is the thief.</span>,
              <span key="3"><strong>Go direct, never via the message.</strong> If something about your order genuinely needs attention, open Trezor's official site or app yourself rather than following a link or number you were sent.</span>,
              <span key="4"><strong>Think about the address on the order.</strong> If your home address is in this dataset, you cannot un-leak it. What you can do is raise the bar: be discreet about holding crypto, and consider a pickup point or work address for future orders.</span>,
            ]}
          />

          <GuideH2>The second shipping partner breach since August</GuideH2>
          <GuideP>
            This is not Trezor's first partner problem, and the pattern is the story. In August
            2026, a breach at ShipMonk, another Trezor shipping partner, exposed personal
            information for about 13,700 customers across seven countries. Two different partners,
            the same dataset, the same lesson: the strongest part of the hardware wallet model is
            the device, and the weakest part is everything around it. The order database is, in
            effect, a registry of crypto owners with home addresses, maintained by logistics
            companies whose security standards the buyer never sees.
          </GuideP>
          <GuideP>
            Trezor's response addresses that layer directly. Anonymous pickup is now live in 18
            European countries, letting customers collect a device without giving a real name,
            home address or phone number, with a US rollout reported as planned. The company is
            also shortening how long it keeps order data, from 90 days to 45, and says it will
            require its shipping partners to follow the same retention policy. Shorter retention
            is the unglamorous fix that actually shrinks the next breach: data that no longer
            exists cannot be exported.
          </GuideP>

          <GuideH2>What this means when you buy a hardware wallet</GuideH2>
          <GuideP>
            Every hardware wallet purchase creates a record somewhere: with the maker, with a
            retailer, or with a delivery partner. This breach is a reminder that the record, not
            the device, is the attack surface. The habits that help are the same ones behind our
            guide to{" "}
            <Link href="/learn/how-to-anonymize-bitcoin" className="font-bold text-indigo-700 underline">
              anonymizing Bitcoin
            </Link>
            : assume records persist, minimize the ones you create, and keep the records you do
            control in order, the same discipline Germany's new{" "}
            <Link href="/learn/germany-crypto-seizure-law" className="font-bold text-indigo-700 underline">
              crypto seizure law
            </Link>{" "}
            rewards from the other direction. Order with a dedicated email, use pickup or an
            alternate delivery address where the option exists, and do not announce purchases
            publicly. None of that makes the next partner breach impossible. All of it makes you
            a smaller line in the spreadsheet when it happens.
          </GuideP>

          <GuideH2>Frequently asked questions</GuideH2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-slate-950">{item.question}</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <GuideH2>Sources</GuideH2>
          <GuideP>
            This article is based on Trezor's own disclosure of 16 November 2026 and on reporting
            that works from it, including{" "}
            <a href="https://decrypt.co/383397/bitcoin-wallet-trezor-third-party-breach-customer-data" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              Decrypt
            </a>
            ,{" "}
            <a href="https://www.theblock.co/news/business/2026-11-16-trezor-hit-another-shipping-partner-data-leak-affecting-27000-skladon-orders-441524" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              The Block
            </a>{" "}
            and{" "}
            <a href="https://crypto.news/trezor-skladon-data-breach-27000-orders-scam-calls/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              crypto.news
            </a>
            . The support article linked from Trezor's post was returning a 404 when this article
            was published; if Trezor publishes more detail there, we will update this page.
            Nothing here is financial advice.
          </GuideP>
        </article>
      </main>
      <Footer />
    </>
  );
}
