import type { MetadataRoute } from "next";
import { glossaryTerms } from "./learn/crypto-glossary/glossary-data";

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
    "/meme-coins",
    "/regions",
  ];
  const routes = [...coreRoutes, ...glossaryTerms.map((term) => `/learn/crypto-glossary/${term.slug}`)];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route.includes("crypto-glossary") ? "monthly" : "weekly",
    priority: route === "/learn/crypto-glossary" || route === "/crypto-research" ? 0.8 : route.startsWith("/learn/crypto-glossary/") ? 0.6 : ["/crypto-prices", "/crypto-screener", "/wallet-tracker"].includes(route) ? 0.75 : 0.7,
  }));
}
