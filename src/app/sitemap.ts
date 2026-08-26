import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cryptosbeginner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/cards",
    "/privacy-directory",
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
    changeFrequency: route === "/cards" || route === "/privacy-directory" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/cards" || route === "/privacy-directory" ? 0.9 : 0.7,
  }));
}
