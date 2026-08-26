import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicWallets from "./PublicWallets";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/public-wallets`;
export const metadata: Metadata = { title: "Public Wallet Research Board | Track On-Chain Activity", description: "Save public wallet addresses locally, add neutral research labels, and open read-only wallet snapshots without connecting a wallet or sharing private keys.", alternates: { canonical: PAGE_URL }, openGraph: { title: "Public Wallet Research Board | CryptosBeginner", description: "A privacy-conscious public-wallet observation board for research—not copy trading or alpha claims.", url: PAGE_URL, type: "website" } };
const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Is a public wallet tracker the same as a trader leaderboard?", acceptedAnswer: { "@type": "Answer", text: "No. A public address does not prove ownership, strategy, skill, or repeatability. CryptosBeginner uses local labels and read-only observation rather than an unexplained ranking of supposed smart-money wallets." } },
  { "@type": "Question", name: "Are saved addresses uploaded?", acceptedAnswer: { "@type": "Answer", text: "In this demo, labels and addresses are stored in the browser's local storage. The product does not need a private key or wallet connection. A production alert service would require a documented retention policy and account controls." } },
  { "@type": "Question", name: "Can this board copy a wallet's trades?", acceptedAnswer: { "@type": "Answer", text: "No. It is an observation and research interface. It does not place orders, connect to a wallet, or promise that mirroring a public address would be profitable." } },
] };
export default function PublicWalletsPage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: PAGE_URL, name: metadata.title, description: metadata.description }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><Header /><PublicWallets /><Footer /></>; }
