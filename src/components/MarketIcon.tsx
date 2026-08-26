"use client";

import { useState } from "react";

type MarketIconProps = {
  src?: string | null;
  name: string;
  symbol?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-14 w-14 text-sm",
};

export default function MarketIcon({ src, name, symbol = "?", size = "md" }: MarketIconProps) {
  const [failed, setFailed] = useState(false);
  const initials = symbol.replace(/[^a-z0-9]/gi, "").slice(0, 3).toUpperCase() || name.slice(0, 2).toUpperCase();

  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-black text-white shadow-lg shadow-violet-950/20 ${sizes[size]}`}>
      {src && !failed ? (
        // Provider image hosts are dynamic; a native image keeps the fallback resilient.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`${name} icon`} loading="lazy" className="h-full w-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
}
