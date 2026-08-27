import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMarketData } from "../api/crypto/markets/market-data";
import MarketScreener from "./MarketScreener";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-screener`;

export const metadata: Metadata = {
  title: "Crypto Market Screener | Momentum, Volume & Rank",
  description: "Filter a live crypto market snapshot by 24-hour change, market rank, and volume. A research tool for organizing crypto data without trading signals.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "Crypto Market Screener | CryptosBeginner", description: "Organize live crypto market data by momentum, rank, and volume with transparent research context.", url: PAGE_URL, type: "website" },
  twitter: { card: "summary_large_image", title: "Crypto Market Screener | CryptosBeginner", description: "Filter a live market snapshot by change, rank, and volume." },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What does the crypto screener filter?", acceptedAnswer: { "@type": "Answer", text: "The screener filters the configured market snapshot by token name or symbol, minimum 24-hour change, maximum market-cap rank, positive change, and ordering by change, volume, or rank." } },
    { "@type": "Question", name: "Does the screener recommend coins?", acceptedAnswer: { "@type": "Answer", text: "No. It is a descriptive research interface. A result can reflect volatility, thin liquidity, a new listing, or unusual market activity and is not a recommendation or trading signal." } },
    { "@type": "Question", name: "Where does the market data come from?", acceptedAnswer: { "@type": "Answer", text: "CryptosBeginner requests market data server-side from CoinStats first and uses CoinGecko as a fallback when the primary provider is unavailable." } },
  ],
};

export const revalidate = 60;

export default async function CryptoScreenerPage() {
  const initialPayload = await getMarketData(100, "usd");
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: PAGE_URL, name: metadata.title, description: metadata.description }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><Header /><MarketScreener initialPayload={initialPayload} /><Footer /></>;
}
