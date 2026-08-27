import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "files.manuscdn.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "mkt-site-asset.crypto.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "content.nexo.com" },
      { protocol: "https", hostname: "ledger.com" },
      { protocol: "https", hostname: "staticsource1.redotpay.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "kardpay.app" },
      { protocol: "https", hostname: "web3.bitget.com" },
      { protocol: "https", hostname: "www.bybit.com" },
      { protocol: "https", hostname: "www.bingcard.com" },
      { protocol: "https", hostname: "home.kripicard.com" },
    ],
  },
};

export default nextConfig;
