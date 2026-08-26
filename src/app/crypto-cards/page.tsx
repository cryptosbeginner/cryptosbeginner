import type { Metadata } from "next";
import CardsDirectory from "./CardsDirectory";
import { allCryptoCards, cardFaqs } from "./card-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards`;
const UPDATED = "2026-08-26";

export const metadata: Metadata = {
  title: "Best Crypto Cards Directory 2026 | Compare Fees, KYC & Custody",
  description:
    "Compare crypto cards by country, KYC level, custody model, card network, funding assets, rewards and fees. Independent educational directory updated for 2026.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Crypto Cards Directory 2026",
    description:
      "A practical crypto-card directory for comparing availability, KYC, custody, supported assets, fees, rewards and card networks.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Cards Directory 2026",
    description:
      "Compare crypto cards by region, KYC, custody, network, funding assets and rewards.",
  },
};

export default function CardsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Crypto Cards Directory 2026",
      description:
        "An independent educational directory comparing crypto card programs by availability, KYC, custody, networks, funding assets, fees and rewards.",
      dateModified: UPDATED,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: [
        { "@type": "Thing", name: "Crypto cards" },
        { "@type": "Thing", name: "Digital asset payments" },
        { "@type": "Thing", name: "Self-custody" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Crypto Cards", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Crypto card directory",
      numberOfItems: allCryptoCards.length,
      itemListElement: allCryptoCards.map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: card.name,
        url: `${PAGE_URL}#${card.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: cardFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CardsDirectory />
    </>
  );
}
