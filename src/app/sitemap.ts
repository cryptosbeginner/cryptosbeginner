import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cryptosbeginner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/crypto-cards",
    "/crypto-privacy-directory",
    "/exchanges/best-crypto-exchanges-2026",
    "/exchanges/no-kyc",
    "/wallets",
    "/dexes",
    "/regions",
    "/learn",
    "/methodology",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-26"),
    changeFrequency: route === "/crypto-cards" || route === "/crypto-privacy-directory" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/crypto-cards" || route === "/crypto-privacy-directory" ? 0.9 : 0.7,
  }));
}
