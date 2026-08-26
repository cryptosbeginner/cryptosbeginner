import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlossaryIndex from "./GlossaryIndex";
import { CATEGORIES, glossaryTerms, REVIEWED_AT } from "./glossary-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/crypto-glossary`;

export const metadata: Metadata = {
  title: "Crypto Glossary: Clear Definitions for Key Terms",
  description: "Search clear, neutral definitions of Bitcoin, blockchain, trading, DeFi, wallet security, regulation, taxes, and tokenomics terms.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Crypto Glossary | CryptosBeginner",
    description: "A plain-English crypto glossary for beginners and intermediate readers.",
    url: PAGE_URL,
    type: "website",
  },
};

function JsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      { "@type": "ListItem", position: 3, name: "Crypto Glossary", item: PAGE_URL },
    ],
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CryptosBeginner Crypto Glossary",
    numberOfItems: glossaryTerms.length,
    itemListElement: glossaryTerms.map((term, index) => ({ "@type": "ListItem", position: index + 1, name: term.term, url: `${PAGE_URL}/${term.slug}` })),
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    description: metadata.description,
    url: PAGE_URL,
    inLanguage: "en",
    dateModified: "2026-08-27",
    isPartOf: { "@type": "WebSite", name: "CryptosBeginner", url: SITE_URL },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Who is the CryptosBeginner glossary for?", acceptedAnswer: { "@type": "Answer", text: "It is for beginners and intermediate readers who want neutral, plain-English explanations of crypto terms before reading deeper guides or making a decision." } },
      { "@type": "Question", name: "How are glossary definitions reviewed?", acceptedAnswer: { "@type": "Answer", text: `Definitions are written in original editorial language and reviewed against official documentation or high-quality sources where relevant. The current review date is ${REVIEWED_AT}.` } },
    ],
  };
  return <>{[breadcrumb, itemList, webpage, faq].map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />)}</>;
}

export default function CryptoGlossaryPage() {
  return <><Header /><JsonLd /><GlossaryIndex terms={glossaryTerms} categories={CATEGORIES} /><Footer /></>;
}
