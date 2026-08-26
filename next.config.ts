import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["3000-i4o7vj9mq4ge1zhr592l0-d515a91f.us3.manus.computer"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "files.manuscdn.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
