import { cardListings } from "./cards-data";

type NetworkGroup = { label: string; count: number; color: string };

function networkGroup(network: string): string {
  const n = network.trim();
  if (/^visa$/i.test(n)) return "Visa";
  if (/^mastercard$/i.test(n)) return "Mastercard";
  if (/^visa[\s,/]*or[\s,/]*mastercard|^visa[\s,/]mastercard|^visa,/i.test(n)) return "Visa or Mastercard (varies)";
  if (/amex/i.test(n)) return "Amex";
  if (/lightning/i.test(n)) return "No card network";
  return "Varies / not disclosed";
}

const NETWORK_COLORS: Record<string, string> = {
  Visa: "#4f46e5",
  Mastercard: "#f59e0b",
  "Visa or Mastercard (varies)": "#06b6d4",
  Amex: "#a21caf",
  "No card network": "#10b981",
  "Varies / not disclosed": "#94a3b8",
};

const REGION_TESTS: Array<[string, RegExp]> = [
  ["United States", /\b(usa|united states)\b/i],
  ["Europe / EEA", /(europe|eea|\beu\b|european|euro area)/i],
  ["United Kingdom", /(united kingdom|\buk\b)/i],
  ["Global", /(global|\d+\+ countries advertised)/i],
  ["Latin America", /(latin america|\blatam\b|brazil|argentina|mexico|colombia|chile|peru|uruguay|venezuela|caribbean)/i],
  ["Asia", /(asia|singapore|japan|hong kong|philippines|taiwan|vietnam)/i],
  ["Canada", /canada/i],
  ["Africa", /(africa|nigeria|kenya|south africa)/i],
  ["Oceania", /(australia|new zealand)/i],
];

const REWARDS_UNDISCLOSED = /no universal.*stated|not published|to be announced|no .* programme is stated|not shown|not yet|TBA/i;

function headlineRate(rewards: string): number | null {
  if (REWARDS_UNDISCLOSED.test(rewards)) return null;
  const matches = [...rewards.matchAll(/(\d+(?:\.\d+)?)\s*%/g)].map((m) => parseFloat(m[1]));
  if (matches.length === 0) return null;
  return Math.max(...matches);
}

function computeStats() {
  const total = cardListings.length;

  // Networks
  const networkMap = new Map<string, number>();
  for (const card of cardListings) {
    const group = networkGroup(card.network);
    networkMap.set(group, (networkMap.get(group) ?? 0) + 1);
  }
  const networks: NetworkGroup[] = [...networkMap.entries()]
    .map(([label, count]) => ({ label, count, color: NETWORK_COLORS[label] ?? "#64748b" }))
    .sort((a, b) => b.count - a.count);

  // Regions (a card can appear in more than one bucket)
  const regions = REGION_TESTS.map(([label, rx]) => ({
    label,
    count: cardListings.filter((card) => rx.test(card.regions.join(" | "))).length,
  })).sort((a, b) => b.count - a.count);

  // Cashback buckets from the advertised headline rate
  const buckets = [
    { label: "0%", count: 0 },
    { label: "0.1-1%", count: 0 },
    { label: "1-2%", count: 0 },
    { label: "2-4%", count: 0 },
    { label: "4%+", count: 0 },
    { label: "Variable / undisclosed", count: 0 },
  ];
  const statedRates: number[] = [];
  for (const card of cardListings) {
    const rate = headlineRate(card.rewards);
    if (rate === null) {
      buckets[5].count += 1;
      continue;
    }
    statedRates.push(rate);
    if (rate === 0) buckets[0].count += 1;
    else if (rate <= 1) buckets[1].count += 1;
    else if (rate <= 2) buckets[2].count += 1;
    else if (rate <= 4) buckets[3].count += 1;
    else buckets[4].count += 1;
  }
  const meanRate =
    statedRates.length > 0
      ? statedRates.reduce((a, c) => a + c, 0) / statedRates.length
      : 0;

  // Formats
  let virtualOffered = 0;
  let physicalOffered = 0;
  let metalOffered = 0;
  let virtualOnly = 0;
  for (const card of cardListings) {
    const f = card.cardFormats;
    if (f.some((x) => /virtual/i.test(x))) virtualOffered += 1;
    if (f.some((x) => /physical/i.test(x))) physicalOffered += 1;
    if (f.some((x) => /metal/i.test(x))) metalOffered += 1;
    if (f.length > 0 && f.every((x) => /virtual/i.test(x))) virtualOnly += 1;
  }

  // Pricing: only cards that explicitly state no annual fee
  const noAnnualFee = cardListings.filter((card) =>
    /no annual fee|no monthly or annual|no monthly, annual|\$0 annual/i.test(card.pricing)
  ).length;

  // Most recent verification date
  const reviewed = cardListings.map((card) => card.reviewedAt).sort();
  const lastVerified = reviewed[reviewed.length - 1];
  const lastVerifiedLabel = (() => {
    const [y, m, d] = lastVerified.split("-").map(Number);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return `${d} ${months[m - 1]} ${y}`;
  })();

  return {
    total,
    networks,
    regions,
    buckets,
    statedRateCount: statedRates.length,
    meanRate,
    virtualOffered,
    physicalOffered,
    metalOffered,
    virtualOnly,
    noAnnualFee,
    lastVerifiedLabel,
  };
}

const stats = computeStats();

function Donut({ networks, total }: { networks: NetworkGroup[]; total: number }) {
  const size = 220;
  const stroke = 34;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const segments = networks.map((n) => {
    const frac = n.count / total;
    const seg = {
      label: n.label,
      count: n.count,
      color: n.color,
      dash: `${(frac * circumference).toFixed(2)} ${circumference.toFixed(2)}`,
      rotation: (offset / total) * 360 - 90,
    };
    offset += n.count;
    return seg;
  });
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Card network split: ${networks.map((n) => `${n.label} ${n.count}`).join(", ")}`}
        className="shrink-0"
      >
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f1f5f9" strokeWidth={stroke} />
        {segments.map((seg) => (
          <circle
            key={seg.label}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={seg.dash}
            transform={`rotate(${seg.rotation} ${size / 2} ${size / 2})`}
          />
        ))}
        <text x={size / 2} y={size / 2 - 4} textAnchor="middle" className="fill-slate-950" fontSize="30" fontWeight="900">
          {total}
        </text>
        <text x={size / 2} y={size / 2 + 18} textAnchor="middle" className="fill-slate-500" fontSize="12" fontWeight="700">
          cards
        </text>
      </svg>
      <ul className="grid w-full grid-cols-1 gap-2 sm:max-w-xs">
        {segments.map((seg) => (
          <li key={seg.label} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex min-w-0 items-center gap-2">
              <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: seg.color }} aria-hidden="true" />
              <span className="truncate font-semibold text-slate-700">{seg.label}</span>
            </span>
            <span className="shrink-0 font-black text-slate-950">
              {seg.count}
              <span className="ml-1 font-semibold text-slate-400">{((seg.count / total) * 100).toFixed(0)}%</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HorizontalBars({ items, max }: { items: Array<{ label: string; count: number }>; max: number }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-700">{item.label}</span>
            <span className="shrink-0 font-black text-slate-950">
              {item.count}
              <span className="ml-1 font-semibold text-slate-400">{((item.count / max) * 100).toFixed(0)}%</span>
            </span>
          </div>
          <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600"
              style={{ width: `${Math.max(2, (item.count / max) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function StatTile({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-3xl font-black tracking-[-0.03em] text-slate-950">{value}</p>
      <p className="mt-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-500">{label}</p>
      {note && <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p>}
    </div>
  );
}

export default function CardStats() {
  const maxCashback = Math.max(...stats.buckets.map((b) => b.count));
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/30 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Market statistics</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">What 132 listings look like in aggregate</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Based on CryptosBeginner directory data, verified October 2026. All figures are computed from the
            directory entries above, not from provider marketing pages.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatTile value={String(stats.total)} label="Cards tracked" />
          <StatTile
            value={`${stats.meanRate.toFixed(1)}%`}
            label="Avg. headline rate"
            note={`Across the ${stats.statedRateCount} cards with a stated rate. Headline rate, not typical rate.`}
          />
          <StatTile
            value={String(stats.noAnnualFee)}
            label="No annual fee"
            note="Cards that explicitly state no annual fee. Many listings do not publish one clear schedule."
          />
          <StatTile value={stats.lastVerifiedLabel} label="Most recent check" />
          <StatTile
            value={`${stats.virtualOffered}`}
            label="Offer a virtual card"
            note={`${stats.virtualOnly} of these are virtual-only.`}
          />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 p-6">
            <h3 className="text-lg font-black tracking-[-0.02em]">Cards by network</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Cards listed as working on either network, or varying by region, are grouped separately.
            </p>
            <div className="mt-5">
              <Donut networks={stats.networks} total={stats.total} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 p-6">
            <h3 className="text-lg font-black tracking-[-0.02em]">Cards by region availability</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              One card can count in several regions. Percentages use {stats.total} cards as the base.
            </p>
            <div className="mt-5">
              <HorizontalBars items={stats.regions} max={stats.total} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 p-6">
            <h3 className="text-lg font-black tracking-[-0.02em]">Advertised headline cashback</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Highest rate found in each listing. Tier caps, spend caps, and eligibility conditions are not reflected here.
            </p>
            <div className="mt-6 flex h-44 items-end justify-between gap-2 sm:gap-3">
              {stats.buckets.map((bucket) => (
                <div key={bucket.label} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2">
                  <span className="text-sm font-black text-slate-950">{bucket.count}</span>
                  <div
                    className={`w-full max-w-14 rounded-t-lg ${bucket.label === "Variable / undisclosed" ? "bg-slate-300" : "bg-gradient-to-t from-fuchsia-600 to-cyan-500"}`}
                    style={{ height: `${Math.max(4, (bucket.count / maxCashback) * 100)}%` }}
                    role="img"
                    aria-label={`${bucket.label}: ${bucket.count} cards`}
                  />
                  <span className="text-center text-[10px] font-black leading-tight text-slate-500 sm:text-xs">
                    {bucket.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 p-6">
            <h3 className="text-lg font-black tracking-[-0.02em]">Card formats</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              What each listing offers; formats often come in combination, so these overlap.
            </p>
            <div className="mt-5">
              <HorizontalBars
                items={[
                  { label: "Virtual offered", count: stats.virtualOffered },
                  { label: "Physical offered", count: stats.physicalOffered },
                  { label: "Metal offered", count: stats.metalOffered },
                  { label: "Virtual-only", count: stats.virtualOnly },
                ]}
                max={stats.total}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-fuchsia-200 bg-fuchsia-50 p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">What the numbers tell you</p>
          <div className="mt-3 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              Visa is the default rail of this market by a wide margin, which means acceptance is rarely the problem;
              the real differences between listings sit in regions, fees, and funding models. The region bars show why
              “global” marketing needs a second look: fewer than a third of listings name the US, and Europe/EEA leads
              the named regions, so always check your own country before comparing rewards.
            </p>
            <p>
              The headline cashback histogram is the most easily misread chart on this page. Most listings publish no
              universal rate at all, and the ones that do usually attach tier, cap, and eligibility conditions, so the
              5.4% average describes advertising, not what a typical user earns. Formats tell a similar story about
              positioning: virtual is nearly universal, physical is common, and metal is a small premium niche rather
              than a value signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
