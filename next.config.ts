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
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "www.winity.life" },
      { protocol: "https", hostname: "oppiwallet.com" },
      { protocol: "https", hostname: "kiteapp.xyz" },
      { protocol: "https", hostname: "www.kiteapp.xyz" },
      { protocol: "https", hostname: "defi.com" },
      { protocol: "https", hostname: "westernunion.com" },
      { protocol: "https", hostname: "www.westernunion.com" },
      { protocol: "https", hostname: "privacygateway.io" },
      { protocol: "https", hostname: "peanut.me" },
      { protocol: "https", hostname: "paybis.com" },
      { protocol: "https", hostname: "wallet.blofin.com" },
      { protocol: "https", hostname: "whop.com" },
      { protocol: "https", hostname: "static.mocortech.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "dogpay.com" },
      { protocol: "https", hostname: "tevau.io" },
      { protocol: "https", hostname: "uploads.bydfi.in" },
    ],
  },
};

export default nextConfig;
