import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMarketData } from "../../../api/crypto/markets/market-data";
import CoinDetail from "../CoinDetail";

const SITE_URL = "https://www.cryptosbeginner.com";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getMarketData(100, "usd");
  const coin = payload.data.find((item) => item.id === decodeURIComponent(slug));
  const name = coin?.name ?? "Crypto asset";
  const pageUrl = `${SITE_URL}/crypto-prices/coin/${encodeURIComponent(slug)}`;
  return { title: `${name} Price, Market Cap & Change`, description: `Review ${name} price, market rank, market cap, volume, and provider-reported change across multiple time horizons. Educational market context, not a trading signal.`, alternates: { canonical: pageUrl }, openGraph: { title: `${name} Market Profile | CryptosBeginner`, description: `A time-stamped research card for ${name} with live market metrics and change context.`, url: pageUrl, type: "website" } };
}

export default async function CoinDetailPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getMarketData(100, "usd");
  const coin = payload.data.find((item) => item.id === decodeURIComponent(slug));
  if (!coin) notFound();
  const related = payload.data.filter((item) => item.id !== coin.id).slice(0, 4);
  const pageUrl = `${SITE_URL}/crypto-prices/coin/${encodeURIComponent(slug)}`;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: pageUrl, name: `${coin.name} Price, Market Cap & Change`, description: `Provider-reported market context for ${coin.name}.` }) }} /><Header /><CoinDetail coin={coin} related={related} provider={payload.provider} checkedAt={payload.checkedAt} /><Footer /></>;
}
