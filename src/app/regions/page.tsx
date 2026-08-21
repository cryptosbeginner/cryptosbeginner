import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegionsDirectory from "./RegionsDirectory";

export const metadata = {
  title: "Crypto Exchange Guides by Country 2026 | Regional Guides",
  description:
    "Find country-specific crypto exchange guides covering regulation, taxes, payment methods, local platforms, P2P, custody and security.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/regions",
  },
};

export default function RegionsPage() {
  return (
    <>
      <Header />
      <RegionsDirectory />
      <Footer />
    </>
  );
}