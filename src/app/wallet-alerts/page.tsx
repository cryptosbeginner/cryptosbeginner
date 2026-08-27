import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlertBoard from "./AlertBoard";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/wallet-alerts`;
export const metadata: Metadata = { title: "Crypto Price Alerts | Local Watchlist Rules", description: "Create browser-local crypto price threshold rules for research. See what a responsible alert experience needs before adding accounts, background jobs, and notifications.", alternates: { canonical: PAGE_URL }, openGraph: { title: "Crypto Price Alerts | CryptosBeginner", description: "A transparent browser-local alert foundation for crypto research, without trading recommendations.", url: PAGE_URL, type: "website" } };
const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Do these alerts run when the browser is closed?", acceptedAnswer: { "@type": "Answer", text: "No. This demo stores rules in the browser and does not run a background process or send notifications. A production version would need server-side storage, scheduled checks, delivery integrations, and user consent." } },
  { "@type": "Question", name: "Are crypto price alerts trading advice?", acceptedAnswer: { "@type": "Answer", text: "No. A threshold crossing is a data event. It does not establish that an asset is safe, liquid, undervalued, or suitable for a particular person." } },
] };
export default function WalletAlertsPage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: PAGE_URL, name: metadata.title, description: metadata.description }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><Header /><AlertBoard /><Footer /></>; }
