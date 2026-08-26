import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceTracker from "./PriceTracker";
import { getMarketData } from "../api/crypto/markets/market-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-prices`;

export const metadata: Metadata = {
  title: "Live Crypto Prices & Market Tracker",
  description: "Track live cryptocurrency prices, market cap, 24-hour volume, price changes, and a personal watchlist with time-stamped provider data.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Live Crypto Prices & Market Tracker",
    description: "A clear, time-stamped crypto market tracker with search, quote currencies, sorting, and a local watchlist.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Crypto Prices & Market Tracker",
    description: "Track crypto prices and market metrics with provider status and time-stamped updates.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Live Crypto Prices & Market Tracker",
    description: metadata.description,
    isPartOf: { "@type": "WebSite", name: "CryptosBeginner", url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often does the crypto price tracker refresh?",
        acceptedAnswer: { "@type": "Answer", text: "The page refreshes automatically about every 60 seconds and displays the provider and last checked time. You can also request a manual refresh." },
      },
      {
        "@type": "Question",
        name: "What data does the tracker show?",
        acceptedAnswer: { "@type": "Answer", text: "The tracker shows provider-supplied price, market rank, market capitalization, 24-hour volume, and recent percentage changes for the assets returned by the configured market-data provider." },
      },
      {
        "@type": "Question",
        name: "Is this crypto tracker financial advice?",
        acceptedAnswer: { "@type": "Answer", text: "No. It is an educational market-data interface. Prices and market statistics are time-stamped snapshots and do not establish suitability, future performance, liquidity, or safety." },
      },
    ],
  },
];

export const revalidate = 60;

export default async function CryptoPricesPage() {
  const initialPayload = await getMarketData(100, "usd");

  return (
    <>
      {structuredData.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Header />
      <PriceTracker initialPayload={initialPayload} />
      <Footer />
    </>
  );
}
