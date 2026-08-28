const SITE_URL = "https://www.cryptosbeginner.com";

export function ArticleJsonLd({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    dateModified: "2026-08-28",
    author: { "@type": "Organization", name: "CryptosBeginner editorial team", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
    inLanguage: "en",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function CollectionJsonLd({ title, description, path, items }: { title: string; description: string; path: string; items: { name: string; path: string }[] }) {
  const url = `${SITE_URL}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    dateModified: "2026-08-28",
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "CryptosBeginner", url: SITE_URL },
    mainEntity: { "@type": "ItemList", itemListElement: items.map((item, position) => ({ "@type": "ListItem", position: position + 1, name: item.name, url: `${SITE_URL}${item.path}` })) },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
