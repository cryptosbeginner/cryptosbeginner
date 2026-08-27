import type { MetadataRoute } from "next";
import { glossaryTerms } from "./learn/crypto-glossary/glossary-data";
import { cardListings } from "./crypto-cards/cards-data";
import { editorialPages } from "./crypto-cards/editorial-data";
import { dexServices } from "./dexes/dex-data";
import { predictionPlatforms } from "./prediction-markets/prediction-data";

const SITE_URL = "https://www.cryptosbeginner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "/",
    "/learn",
    "/learn/crypto-glossary",
    "/tools/bitcoin-halving",
    "/tools/exchange-finder",
    "/tools/fee-calculator",
    "/crypto-research",
    "/crypto-prices",
    "/crypto-screener",
    "/wallet-tracker",
    "/public-wallets",
    "/wallet-alerts",
    "/meme-coin-research",
    "/crypto-cards",
    "/learn/bitcoin-forks",
    "/learn/bitcoin-classic-hard-fork",
    "/learn/seed-phrase-security",
    "/learn/what-is-proof-of-reserves",
    "/learn/how-to-check-exchange-proof-of-reserves",
    "/learn/crypto-exchange-security-checklist",
    "/learn/how-p2p-escrow-works",
    "/exchanges/best-crypto-exchanges-2026",
    "/exchanges/no-kyc",
    "/wallets/best-crypto-wallets-2026",
    "/dexes",
    "/prediction-markets",
    "/meme-coins",
    "/regions",
  ];
  const routes = [
    ...coreRoutes,
    ...cardListings.map((card) => `/crypto-cards/${card.slug}`),
    ...editorialPages.map((page) => `/crypto-cards/${page.slug}`),
    ...dexServices.filter((service) => service.isDex).map((service) => `/dexes/${service.slug}`),
    ...predictionPlatforms.map((platform) => `/prediction-markets/${platform.slug}`),
    ...dexServices.filter((service) => !service.isDex && (service.isNoKycCandidate || service.isKycConditional)).map((service) => `/exchanges/no-kyc/${service.slug}`),
    ...glossaryTerms.map((term) => `/learn/crypto-glossary/${term.slug}`),
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route.includes("crypto-glossary") ? "monthly" : "weekly",
    priority: ["/learn/crypto-glossary", "/crypto-research", "/crypto-cards", "/dexes", "/prediction-markets", "/exchanges/no-kyc"].includes(route) ? 0.8 : route.startsWith("/learn/crypto-glossary/") ? 0.6 : route.startsWith("/crypto-cards/") ? (editorialPages.some((page) => `/crypto-cards/${page.slug}` === route) ? 0.8 : 0.75) : route.startsWith("/dexes/") || route.startsWith("/prediction-markets/") || route.startsWith("/exchanges/no-kyc/") ? 0.7 : ["/crypto-prices", "/crypto-screener", "/wallet-tracker"].includes(route) ? 0.75 : 0.7,
  }));
}
