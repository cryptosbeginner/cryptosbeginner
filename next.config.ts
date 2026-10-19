import type { NextConfig } from "next";
import { wpRedirects } from "./wp-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...wpRedirects,
      {
        source: "/wallets/best-crypto-wallets-2026",
        destination: "/wallets/best-crypto-wallets",
        permanent: true,
      },
      {
        source: "/exchanges/best-crypto-exchanges-2026",
        destination: "/exchanges/best-crypto-exchanges",
        permanent: true,
      },
      {
        source: "/tools/dogpay-review",
        destination: "/crypto-cards/dogpay-review",
        permanent: true,
      },
      {
        source: "/tools/kast-review",
        destination: "/crypto-cards/kast-review",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        pathname: "/coins/images/**",
      },
    ],
  },
};

export default nextConfig;
