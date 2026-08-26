import type { Metadata } from "next";
import PrivacyDirectory from "./PrivacyDirectory";

const PAGE_URL = "https://www.cryptosbeginner.com/crypto-privacy-directory";

export const metadata: Metadata = {
  title: "Privacy & No-KYC Crypto Directory 2026",
  description:
    "Browse privacy-focused crypto exchanges, wallets, DEXes and tools with clear identity, custody and risk notes. Verify every service before use.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy & No-KYC Crypto Directory 2026",
    description:
      "A source-aware directory of privacy-focused crypto services, self-custody tools, P2P markets and DEXes.",
    url: PAGE_URL,
    type: "website",
  },
};

const directorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Privacy & No-KYC Crypto Directory",
  description:
    "A beginner-friendly directory of privacy-focused crypto services and tools.",
  url: PAGE_URL,
};

export default function PrivacyDirectoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorySchema) }}
      />
      <PrivacyDirectory />
    </>
  );
}
