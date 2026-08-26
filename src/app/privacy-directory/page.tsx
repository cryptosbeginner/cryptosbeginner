import type { Metadata } from "next";
import PrivacyDirectory from "./PrivacyDirectory";

export const metadata: Metadata = {
  title: "Privacy & No-KYC Crypto Directory 2026",
  description:
    "Browse privacy-focused crypto exchanges, wallets, DEXes and tools with clear identity, custody and risk notes. Verify every service before use.",
};

const directorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Privacy & No-KYC Crypto Directory",
  description:
    "A beginner-friendly directory of privacy-focused crypto services and tools.",
  url: "https://cryptosbeginner.com/privacy-directory",
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
