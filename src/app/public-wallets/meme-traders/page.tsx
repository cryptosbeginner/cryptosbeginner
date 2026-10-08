import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemeTraders, { memeTraderFaqs } from "./MemeTraders";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/public-wallets/meme-traders`;

const TITLE = "Meme Coin Trader Lookup 2026: Research Any Public Trader Wallet";
const DESCRIPTION =
  "Look up any public Solana or Ethereum meme coin trader wallet, open it on GMGN and block explorers, and learn how to verify trader claims before you trust them. No signups, no fake profiles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MemeTradersPage() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: memeTraderFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <Header />
      <MemeTraders />
      <Footer />
    </>
  );
}
