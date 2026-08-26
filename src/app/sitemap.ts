import type { MetadataRoute } from "next";
import { allCryptoCards } from "./crypto-cards/card-data";

const SITE_URL = "https://www.cryptosbeginner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/crypto-cards",
    "/crypto-prices",
    "/crypto-screener",
    "/wallet-tracker",
    "/public-wallets",
    "/wallet-alerts",
    "/meme-coin-research",
    "/crypto-prices/coin/bitcoin",
    "/crypto-prices/coin/ethereum",
    "/crypto-prices/coin/solana",
    "/crypto-prices/coin/tether",
    "/crypto-prices/coin/binance-coin",
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
    const isCoinDetail = route.startsWith("/crypto-prices/coin/");
    const isResearchTool = ["/crypto-screener", "/wallet-tracker", "/public-wallets", "/wallet-alerts", "/meme-coin-research"].includes(route);
    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: route === "/crypto-cards" || route === "/crypto-prices" || route === "/crypto-privacy-directory" || isResearchTool || isCardDetail || isCoinDetail ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/crypto-cards" || route === "/crypto-prices" || route === "/crypto-privacy-directory" ? 0.9 : isResearchTool ? 0.82 : isCardDetail || isCoinDetail ? 0.75 : 0.7,
    };
  });
}
