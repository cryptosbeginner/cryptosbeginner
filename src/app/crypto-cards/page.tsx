import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardsDirectory from "./CardsDirectory";
import { cardListings } from "./cards-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const HUB_TITLE = "Crypto Cards: Fees, Regions & Card Types";
const HUB_DESCRIPTION = "Compare crypto debit, prepaid, self-custody, and dual-mode cards by funding model, fees, rewards, regions, and official provider terms.";
const HUB_URL = `${SITE_URL}/crypto-cards`;

export const metadata: Metadata = {
  title: { absolute: `${HUB_TITLE} | CryptosBeginner` },
  description: HUB_DESCRIPTION,
  alternates: { canonical: HUB_URL },
  openGraph: {
    title: "Crypto Cards Directory | CryptosBeginner",
    description: "A source-backed directory for comparing crypto card types, region limits, fees, rewards, and provider relationships.",
    url: HUB_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Cards Directory | CryptosBeginner",
    description: "Compare crypto card types, fees, funding models, regions, and provider terms.",
  },
  robots: { index: true, follow: true },
};

const faq = [
  { question: "What is a crypto card?", answer: "A crypto card is a payment card connected to a crypto platform, wallet, or credit facility. Depending on the product, crypto may be converted to fiat before spending, at checkout, or used as collateral for borrowing." },
  { question: "Are crypto cards debit cards or credit cards?", answer: "They can be prepaid, debit, or dual-mode. A prepaid or debit product generally spends a funded balance, while a credit-mode product may borrow against digital-asset collateral. Read the cardholder agreement instead of relying on the brand name." },
  { question: "Do crypto cards work in every country?", answer: "No. Availability, issuer, identity checks, supported assets, limits, and fees can vary by country, state, region, and product tier. The directory shows provider-published availability wording and links to the official source for verification." },
  { question: "Do crypto cards have hidden fees?", answer: "Costs can include spreads, foreign-exchange charges, ATM fees, top-up fees, subscription fees, staking or lockup requirements, borrowing interest, and taxes. A provider’s headline ‘no fee’ statement may apply only to a specific fee category or region." },
  { question: "Does CryptosBeginner rank or recommend these cards?", answer: "No. The directory is a factual research aid, not personalized financial advice or an endorsement. It separates provider claims from editorial context and encourages readers to verify current terms before applying." },
  { question: "Do referral links affect the card information?", answer: "Some check-card buttons use referral links that may benefit CryptosBeginner if a user signs up. The referral relationship does not change the inclusion criteria or guarantee approval, fees, rewards, availability, or suitability. Provider terms remain the authority." },
  { question: "How should I compare crypto-card fees?", answer: "Compare issuance, subscription, top-up, conversion spread, foreign-exchange, ATM, borrowing, and tax-related costs for your country and expected usage. A no-annual-fee headline can still coexist with other charges." },
];

export default function CryptoCardsPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "CollectionPage", "@id": `${HUB_URL}#webpage`, name: "Crypto Cards Directory", url: HUB_URL, description: HUB_DESCRIPTION, datePublished: "2026-08-25", dateModified: "2026-08-27", mainEntity: { "@id": `${HUB_URL}#itemlist` }, breadcrumb: { "@id": `${HUB_URL}#breadcrumb` } }, { "@type": "ItemList", "@id": `${HUB_URL}#itemlist`, numberOfItems: cardListings.length, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: cardListings.map((card, index) => ({ "@type": "ListItem", position: index + 1, name: card.name, url: `${SITE_URL}/crypto-cards/${card.slug}` })) }, { "@type": "BreadcrumbList", "@id": `${HUB_URL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Crypto Cards", item: HUB_URL }] }] }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "@id": `${HUB_URL}#faq`, url: HUB_URL, mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} /><Header /><CardsDirectory /><section className="border-t border-slate-200 bg-white"><div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-700">Crypto Cards FAQ</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">The short answers before the long terms</h2><div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">{faq.map((item) => <details key={item.question} className="group p-5"><summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">{item.question}<span className="float-right text-fuchsia-700 transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div></div></section><Footer /></>;
}
