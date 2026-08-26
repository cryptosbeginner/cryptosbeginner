import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HalvingCountdown from "./HalvingCountdown";
import { getBitcoinTipHeight } from "./halving-data";
import { getMiningSnapshot } from "./mining-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/bitcoin-halving`;
export const revalidate = 300;
export const metadata: Metadata = { title: "Bitcoin Halving Countdown 2028 | Block Height, Reward & History", description: "Track the next Bitcoin halving by block height, see the estimated 2028 date, understand the subsidy reduction, and review the history without price-prediction hype.", alternates: { canonical: PAGE_URL }, openGraph: { title: "Bitcoin Halving Countdown 2028 | CryptosBeginner", description: "A block-based Bitcoin halving countdown with reward math, history, and clear assumptions about date uncertainty.", url: PAGE_URL, type: "website" } };
const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "When is the next Bitcoin halving?", acceptedAnswer: { "@type": "Answer", text: "The next Bitcoin halving is scheduled for block 1,050,000. Its calendar date is estimated because blocks are targeted at an average of ten minutes rather than produced on an exact schedule." } },
  { "@type": "Question", name: "What will the Bitcoin block reward be after the next halving?", acceptedAnswer: { "@type": "Answer", text: "The current 3.125 BTC block subsidy is scheduled to fall to 1.5625 BTC when the network reaches block 1,050,000. Transaction fees are separate from the block subsidy." } },
  { "@type": "Question", name: "Does the Bitcoin halving guarantee a price increase?", acceptedAnswer: { "@type": "Answer", text: "No. The halving changes scheduled new issuance. It does not guarantee a price outcome, demand response, miner profitability, or trading result." } },
  { "@type": "Question", name: "How is this countdown calculated?", acceptedAnswer: { "@type": "Answer", text: "The page reads the current Bitcoin tip height, subtracts it from block 1,050,000, and estimates time using a 600-second average block interval. The block target is more precise than the calendar projection." } },
] };
export default async function BitcoinHalvingPage() { const [snapshot, mining] = await Promise.all([getBitcoinTipHeight(), getMiningSnapshot()]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: PAGE_URL, name: metadata.title, description: metadata.description }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><Header /><HalvingCountdown initialHeight={snapshot.height} initialCheckedAt={snapshot.checkedAt} initialMining={mining} /><Footer /></>; }
