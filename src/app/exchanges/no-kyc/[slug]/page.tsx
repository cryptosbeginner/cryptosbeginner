import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DexDetail from "@/app/dexes/DexDetail";
import { getDexService, noKycDirectoryServices } from "@/app/dexes/dex-data";

const siteUrl = "https://www.cryptosbeginner.com";

export function generateStaticParams() {
  return noKycDirectoryServices.filter((service) => !service.isDex).map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getDexService(slug);
    if (!service || service.isDex || (!service.isNoKycCandidate && !service.isKycConditional)) return {};
    const title = `${service.name}: KYC, Fees & Access | CryptosBeginner`;
    const description = `${service.name} profile: ${service.shortDescription} Review access, KYC conditions, fees, supported assets, trade-offs and official sources.`;
    const canonical = `${siteUrl}/exchanges/no-kyc/${service.slug}`;
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

export default async function NoKycDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDexService(slug);
  if (!service || service.isDex || (!service.isNoKycCandidate && !service.isKycConditional)) notFound();
  const canonical = `${siteUrl}/exchanges/no-kyc/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: `${service.name}: KYC, Fees & Access`, description: service.shortDescription, image: { "@id": `${canonical}#image` }, dateModified: service.reviewedAt, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "ImageObject", "@id": `${canonical}#image`, url: service.imageUrl, contentUrl: service.imageUrl, caption: service.imageAlt },
      { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumbs`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "No-KYC Exchanges", item: `${siteUrl}/exchanges/no-kyc` }, { "@type": "ListItem", position: 3, name: service.name, item: canonical }] },
      { "@type": "FAQPage", "@id": `${canonical}#faq`, mainEntity: service.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };
  return <><Header /><DexDetail service={service} noKycMode /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Footer /></>;
}
