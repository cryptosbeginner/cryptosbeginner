import type { MetadataRoute } from "next";
import { allCryptoCards } from "./crypto-cards/card-data";

const SITE_URL = "https://www.cryptosbeginner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/crypto-cards",
    "/crypto-privacy-directory",
    ...allCryptoCards.map((card) => `/crypto-cards/${card.slug}`),
    "/exchanges/best-crypto-exchanges-2026",
    "/exchanges/no-kyc",
    "/wallets",
    "/dexes",
    "/regions",
    "/learn",
    "/methodology",
    "/disclaimer",
  ];

  return routes.map((route) => {
    const isCardDetail = route.startsWith("/crypto-cards/");
    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: route === "/crypto-cards" || route === "/crypto-privacy-directory" || isCardDetail ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/crypto-cards" || route === "/crypto-privacy-directory" ? 0.9 : isCardDetail ? 0.75 : 0.7,
    };
  });
}
