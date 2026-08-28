import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopularWalletDirectory from "./PopularWalletDirectory";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/wallets/popular`;

export const metadata: Metadata = {
  title: "Popular Crypto Wallet Tracker | Corporate, Government & Public Profiles",
  description: "Track curated public crypto-wallet profiles from CoinStats and Arkham with source labels, timestamps, holdings context, and attribution safeguards.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "Popular Crypto Wallet Tracker | CryptosBeginner", description: "A read-only public-wallet research directory with clear evidence and attribution labels.", url: PAGE_URL, type: "website" },
};

export default function PopularWalletsPage() {
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: String(metadata.title), description: String(metadata.description), url: PAGE_URL, isPartOf: { "@type": "WebSite", name: "CryptosBeginner", url: SITE_URL } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><PopularWalletDirectory /><Footer /></>;
}
