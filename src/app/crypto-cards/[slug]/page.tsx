import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDetail from "../CardDetail";
import { cardListings, getCardBySlug } from "../cards-data";

const SITE_URL = "https://www.cryptosbeginner.com";
type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export function generateStaticParams() { return cardListings.map((card) => ({ slug: card.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const card = getCardBySlug(decodeURIComponent(slug));
  if (!card) return { title: "Crypto Card Not Found | CryptosBeginner" };
  return { title: `${card.name}: Fees, Regions & Card Details`, description: `${card.name} card profile: compare its funding model, card formats, regions, pricing, rewards, and provider terms.`, alternates: { canonical: `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}` }, openGraph: { title: `${card.name} Card Profile | CryptosBeginner`, description: `Source-backed research on ${card.name}, including fees, availability, funding, rewards, and card type.`, url: `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`, type: "article" } };
}

export default async function CryptoCardDetailPage({ params }: Props) {
  const { slug } = await params;
  const card = getCardBySlug(decodeURIComponent(slug));
  if (!card) notFound();
  const pageUrl = `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: pageUrl, name: `${card.name}: Fees, Regions & Card Details`, description: `Source-backed educational profile for ${card.name}.`, datePublished: "2026-08-25", dateModified: card.reviewedAt, isPartOf: { "@type": "CollectionPage", name: "Crypto Cards Directory", url: `${SITE_URL}/crypto-cards` }, about: { "@type": "Thing", name: card.name } }) }} /><Header /><CardDetail card={card} /><Footer /></>;
}
