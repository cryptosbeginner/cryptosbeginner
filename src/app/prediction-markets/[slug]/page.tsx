import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PredictionDetail from "../PredictionDetail";
import { getPredictionPlatform, predictionPlatforms } from "../prediction-data";

const siteUrl = "https://www.cryptosbeginner.com";

export function generateStaticParams() {
  return predictionPlatforms.map((platform) => ({ slug: platform.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
  const platform = getPredictionPlatform(slug);
  if (!platform) return {};
  const title = `${platform.name}: Fees, Markets & Resolution Rules | CryptosBeginner`;
  const description = `${platform.name} explained for beginners: compare its market model, collateral, fees, access, resolution process, pros, cons, and provider sources.`;
  return { title: { absolute: title }, description, alternates: { canonical: `${siteUrl}/prediction-markets/${platform.slug}` }, openGraph: { title, description, url: `${siteUrl}/prediction-markets/${platform.slug}`, type: "article" } };
  });
}

export default async function PredictionPlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPredictionPlatform(slug);
  if (!platform) notFound();
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${siteUrl}/prediction-markets/${platform.slug}#webpage`, url: `${siteUrl}/prediction-markets/${platform.slug}`, name: `${platform.name}: Fees, Markets & Resolution Rules`, description: platform.shortDescription, isPartOf: { "@id": `${siteUrl}/prediction-markets#webpage` }, about: { "@type": "Thing", name: `${platform.name} prediction-market platform` } },
    { "@type": "BreadcrumbList", "@id": `${siteUrl}/prediction-markets/${platform.slug}#breadcrumbs`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Prediction Markets", item: `${siteUrl}/prediction-markets` }, { "@type": "ListItem", position: 3, name: platform.name, item: `${siteUrl}/prediction-markets/${platform.slug}` }] },
    { "@type": "FAQPage", "@id": `${siteUrl}/prediction-markets/${platform.slug}#faq`, mainEntity: platform.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ] };
  return <><Header /><PredictionDetail platform={platform} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Footer /></>;
}
