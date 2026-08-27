import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DexDetail from "../DexDetail";
import { dexServices, getDexService } from "../dex-data";

const siteUrl = "https://www.cryptosbeginner.com";

export function generateStaticParams() {
  return dexServices.filter((service) => service.isDex || service.kind === "prediction-market").map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getDexService(slug);
    if (!service || (!service.isDex && service.kind !== "prediction-market")) return {};
    const title = service.kind === "prediction-market" ? `${service.name}: Prediction Market Fees, Rules & Risks | CryptosBeginner` : `${service.name}: Fees, Networks & Risks | CryptosBeginner`;
    const description = `${service.name} profile: ${service.shortDescription} Compare fees, access model, product mechanics, risks, and official sources.`;
    const canonical = `${siteUrl}/dexes/${service.slug}`;
    return {
      title: { absolute: title },
      description,
      alternates: { canonical },
      robots: { index: true, follow: true },
      openGraph: { title, description, url: canonical, type: "article", images: [{ url: service.imageUrl, alt: service.imageAlt }] },
      twitter: { card: "summary_large_image", title, description, images: [service.imageUrl] },
    };
  });
}

export default async function DexDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDexService(slug);
  if (!service || (!service.isDex && service.kind !== "prediction-market")) notFound();
  const canonical = `${siteUrl}/dexes/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: service.kind === "prediction-market" ? `${service.name}: Prediction Market Fees, Rules & Risks` : `${service.name}: Fees, Networks & Risks`, description: service.shortDescription, about: service.kind === "prediction-market" ? "Decentralized prediction market" : "Decentralized exchange profile", image: { "@id": `${canonical}#image` }, dateModified: service.reviewedAt, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "ImageObject", "@id": `${canonical}#image`, url: service.imageUrl, contentUrl: service.imageUrl, caption: service.imageAlt },
      { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumbs`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: service.kind === "prediction-market" ? "DEXes & adjacent markets" : "DEXes", item: `${siteUrl}/dexes` }, { "@type": "ListItem", position: 3, name: service.name, item: canonical }] },
      { "@type": "FAQPage", "@id": `${canonical}#faq`, mainEntity: service.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };
  return <><Header /><DexDetail service={service} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Footer /></>;
}
