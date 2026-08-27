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
    ],
  },
};

export default nextConfig;
