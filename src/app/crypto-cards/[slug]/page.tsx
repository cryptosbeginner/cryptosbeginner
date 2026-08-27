import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDetail from "../CardDetail";
import EditorialCardsPage from "../EditorialCardsPage";
import { cardListings, getCardBySlug, getCardFaqs } from "../cards-data";
import { editorialPages, getEditorialCards, getEditorialPage } from "../editorial-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PUBLISHED_DATE = "2026-08-25";
type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export function generateStaticParams() {
  return [...cardListings.map((card) => ({ slug: card.slug })), ...editorialPages.map((page) => ({ slug: page.slug }))];
}

function cardTitle(name: string) {
  return `${name}: Fees & Eligibility | CryptosBeginner`;
}

function cardDescription(card: { name: string; editorialSummary: string }) {
  const description = `${card.name} card guide: ${card.editorialSummary}`;
  if (description.length <= 160) return description;
  return `${description.slice(0, 157).replace(/\s+\S*$/, "")}...`;
}

function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const card = getCardBySlug(decodedSlug);
  const editorial = getEditorialPage(decodedSlug);
  if (!card && !editorial) return { title: "Crypto Card Guide Not Found | CryptosBeginner", robots: { index: false, follow: false } };
  if (editorial) {
    const title = `${editorial.title} | CryptosBeginner`;
    return {
      title: { absolute: title },
      description: editorial.description,
      alternates: { canonical: `${SITE_URL}/crypto-cards/${encodeURIComponent(editorial.slug)}` },
      openGraph: { title, description: editorial.description, url: `${SITE_URL}/crypto-cards/${encodeURIComponent(editorial.slug)}`, type: "article" },
      twitter: { card: "summary_large_image", title, description: editorial.description },
      robots: { index: true, follow: true },
    };
  }
  if (!card) return { title: "Crypto Card Not Found | CryptosBeginner", robots: { index: false, follow: false } };
  const title = cardTitle(card.name);
  const description = cardDescription(card);
  const pageUrl = `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, type: "article", images: [{ url: card.imageUrl, alt: card.imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [card.imageUrl] },
    robots: { index: true, follow: true },
  };
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
    return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: editorial.title, description: editorial.description, datePublished: PUBLISHED_DATE, dateModified: "2026-08-27", mainEntity: { "@id": `${pageUrl}#itemlist` }, breadcrumb: breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Crypto Cards", url: `${SITE_URL}/crypto-cards` }, { name: editorial.title, url: pageUrl }]) }, { "@type": "ItemList", "@id": `${pageUrl}#itemlist`, numberOfItems: cards.length, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: cards.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: `${SITE_URL}/crypto-cards/${item.slug}` })) }] }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "@id": `${pageUrl}#faq`, url: pageUrl, mainEntity: editorial.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }) }} /><Header /><EditorialCardsPage page={editorial} cards={cards} /><Footer /></>;
  }
  if (!card) notFound();
  const pageUrl = `${SITE_URL}/crypto-cards/${encodeURIComponent(card.slug)}`;
  const title = cardTitle(card.name);
  const description = cardDescription(card);
  const faqs = getCardFaqs(card);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: title, description, datePublished: PUBLISHED_DATE, dateModified: card.reviewedAt, isPartOf: { "@type": "CollectionPage", "@id": `${SITE_URL}/crypto-cards#webpage`, name: "Crypto Cards Directory", url: `${SITE_URL}/crypto-cards` }, about: { "@type": "Thing", name: card.name }, primaryImageOfPage: { "@id": `${pageUrl}#image` }, mainEntity: { "@id": `${pageUrl}#faq` }, breadcrumb: breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Crypto Cards", url: `${SITE_URL}/crypto-cards` }, { name: card.name, url: pageUrl }]) }, { "@type": "ImageObject", "@id": `${pageUrl}#image`, contentUrl: card.imageUrl, url: card.imageUrl, caption: card.imageAlt, representativeOfPage: true }, { "@type": "FAQPage", "@id": `${pageUrl}#faq`, url: pageUrl, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }) }} /><Header /><CardDetail card={card} /><Footer /></>;
}
