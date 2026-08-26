import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WalletTracker from "./WalletTracker";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/wallet-tracker`;

export const metadata: Metadata = { title: "Public Wallet Tracker | Balances, P/L & DeFi Research", description: "Review a public blockchain address with read-only CoinStats balance, performance, and DeFi snapshots—without submitting a seed phrase, private key, or exchange secret.", alternates: { canonical: PAGE_URL }, openGraph: { title: "Public Wallet Tracker | CryptosBeginner", description: "Read-only wallet research for public addresses, with clear privacy, source, and provider-cost boundaries.", url: PAGE_URL, type: "website" } };

const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Do I need to connect my wallet?", acceptedAnswer: { "@type": "Answer", text: "No. The tracker accepts a public blockchain address and requests a read-only provider snapshot. It never asks for a seed phrase, private key, exchange secret, or wallet connection." } },
  { "@type": "Question", name: "What can the public wallet tracker show?", acceptedAnswer: { "@type": "Answer", text: "Depending on the selected provider mode and network, it can return token balances, quantities, current values, provider-reported performance, or DeFi protocol positions." } },
  { "@type": "Question", name: "Is wallet P/L investment advice?", acceptedAnswer: { "@type": "Answer", text: "No. Wallet P/L is a provider calculation that depends on transaction history, synchronization, token identification, and price data. It does not predict future results or recommend an action." } },
  { "@type": "Question", name: "How much does a CoinStats wallet lookup cost?", acceptedAnswer: { "@type": "Answer", text: "CoinStats documents balance lookups at 40 credits, wallet P/L at 25 credits, and DeFi lookups at 400 credits, with multipliers for multiple networks or connections. CryptosBeginner keeps requests explicit and limited to one selected network." } },
] };

export default function WalletTrackerPage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: PAGE_URL, name: metadata.title, description: metadata.description }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><Header /><WalletTracker /><Footer /></>; }
