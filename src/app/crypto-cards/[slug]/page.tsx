import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDetail from "../CardDetail";
import EditorialCardsPage from "../EditorialCardsPage";
import { cardListings, getCardBySlug } from "../cards-data";
import { editorialPages, getEditorialCards, getEditorialPage } from "../editorial-data";

const SITE_URL = "https://www.cryptosbeginner.com";
type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export function generateStaticParams() { return [...cardListings.map((card) => ({ slug: card.slug })), ...editorialPages.map((page) => ({ slug: page.slug }))]; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const card = getCardBySlug(decodedSlug);
  const editorial = getEditorialPage(decodedSlug);
  if (!card && !editorial) return { title: "Crypto Card Guide Not Found | CryptosBeginner" };
  if (editorial) return { title: `${editorial.title} | CryptosBeginner`, description: editorial.description, alternates: { canonical: `${SITE_URL}/crypto-cards/${encodeURIComponent(editorial.slug)}` }, openGraph: { title: editorial.title, description: editorial.description, url: `${SITE_URL}/crypto-cards/${encodeURIComponent(editorial.slug)}`, type: "article" } };
  if (!card) return { title: "Crypto Card Not Found | CryptosBeginner" };
  return { title: `${card.name}: Fees, Regions & Card Details`, description: `${card.name} card profile: compare its funding model, card formats, regions, pricing, rewards, and provider terms.`, alternates: { canonical: `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}` }, openGraph: { title: `${card.name} Card Profile | CryptosBeginner`, description: `Source-backed research on ${card.name}, including fees, availability, funding, rewards, and card type.`, url: `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`, type: "article" } };
}

export default async function CryptoCardDetailPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const card = getCardBySlug(decodedSlug);
  const editorial = getEditorialPage(decodedSlug);
  if (!card && !editorial) notFound();
  if (editorial) {
    const pageUrl = `${SITE_URL}/crypto-cards/${encodeURIComponent(editorial.slug)}`;
    const cards = getEditorialCards(editorial);
    return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", url: pageUrl, name: editorial.title, description: editorial.description, datePublished: "2026-08-25", dateModified: "2026-08-27", mainEntity: { "@type": "ItemList", numberOfItems: cards.length, itemListElement: cards.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: `${SITE_URL}/crypto-cards/${item.slug}` })) } }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: editorial.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }) }} /><Header /><EditorialCardsPage page={editorial} cards={cards} /><Footer /></>;
  }
  if (!card) notFound();
  const pageUrl = `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: pageUrl, name: `${card.name}: Fees, Regions & Card Details`, description: `Source-backed educational profile for ${card.name}.`, datePublished: "2026-08-25", dateModified: card.reviewedAt, isPartOf: { "@type": "CollectionPage", name: "Crypto Cards Directory", url: `${SITE_URL}/crypto-cards` }, about: { "@type": "Thing", name: card.name } }) }} /><Header /><CardDetail card={card} /><Footer /></>;
}
