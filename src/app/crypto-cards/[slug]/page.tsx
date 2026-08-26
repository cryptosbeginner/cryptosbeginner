import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CardDetail from "./CardDetail";
import { allCryptoCards, type CryptoCard } from "../card-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const DIRECTORY_URL = `${SITE_URL}/crypto-cards`;

export function generateStaticParams() {
  return allCryptoCards.map((card) => ({ slug: card.slug }));
}

function getCard(slug: string) {
  return allCryptoCards.find((card) => card.slug === slug);
}

function detailDescription(card: CryptoCard) {
  return `${card.name} comparison: ${card.headline}. Review KYC, custody, availability, fees, rewards, limits, and official terms before applying.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card) return { title: "Crypto card profile not found | CryptosBeginner" };

  const url = `${DIRECTORY_URL}/${card.slug}`;
  return {
    title: `${card.name}: Fees, KYC, Rewards & Review`,
    description: detailDescription(card),
    alternates: { canonical: url },
    openGraph: {
      title: `${card.name}: Fees, KYC, Rewards & Review`,
      description: detailDescription(card),
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${card.name}: Fees, KYC, Rewards & Review`,
      description: detailDescription(card),
    },
  };
}

export default async function CardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card) notFound();

  const relatedCards = allCryptoCards
    .filter((related) => related.slug !== card.slug)
    .filter((related) => related.category === card.category || related.status === card.status)
    .slice(0, 4);
  const url = `${DIRECTORY_URL}/${card.slug}`;
  const faqEntries = [
    {
      question: `What is the KYC status of ${card.name}?`,
      answer: `${card.kyc}. Exact onboarding requirements can vary by country, issuer, product tier, payment rail, and applicable law.`,
    },
    {
      question: `What fees should I check for ${card.name}?`,
      answer: card.feeSummary ?? "Review the provider’s current fee schedule, conversion spread, FX fee, top-up fee, ATM fee, subscription cost, and any account or dispute fee.",
    },
    {
      question: `Who controls funds used with ${card.name}?`,
      answer: `${card.custody}. Confirm the practical custody model, freeze powers, recovery process, and whether spending requires a provider-operated balance.`,
    },
    {
      question: `Where can I verify ${card.name} details?`,
      answer: "Use the official provider source linked on this page. CryptosBeginner is a comparison aid, not a replacement for current provider terms.",
    },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${card.name}: Fees, KYC, Rewards & Review`,
      description: detailDescription(card),
      dateModified: card.lastReviewed,
      isPartOf: { "@id": `${DIRECTORY_URL}#webpage` },
      about: { "@type": "Thing", name: card.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Crypto Cards", item: DIRECTORY_URL },
        { "@type": "ListItem", position: 3, name: card.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntries.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <CardDetail card={card} relatedCards={relatedCards} />
    </>
  );
}
