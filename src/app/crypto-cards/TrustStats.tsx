import { cardListings } from "./cards-data";

function countSources(): number {
  let n = 0;
  for (const card of cardListings) {
    if (card.sourceUrl) n += 1;
    if (card.feesUrl) n += 1;
    if (card.updateUrl) n += 1;
  }
  return n;
}

function countFacts(): number {
  let n = 0;
  for (const card of cardListings) {
    const fields = [
      card.name,
      card.provider,
      card.network,
      card.shortDescription,
      card.editorialSummary,
      card.bestFor,
      card.availability,
      card.pricing,
      card.rewards,
      card.funding,
      card.caution,
      card.reviewedAt,
    ];
    for (const f of fields) if (f && f.length > 3) n += 1;
    if (card.regions.length > 0) n += 1;
    if (card.cardFormats.length > 0) n += 1;
    if (card.cashbackBands && card.cashbackBands.length > 0)
      n += card.cashbackBands.length;
    if (card.featureFlags) n += Object.keys(card.featureFlags).length;
  }
  return n;
}

export default function TrustStats() {
  const cards = cardListings.length;
  const sources = countSources();
  const facts = countFacts();
  const stats: Array<[string, string]> = [
    [cards.toLocaleString(), "cards tracked"],
    [sources.toLocaleString(), "sources cited"],
    [facts.toLocaleString(), "reviewed facts"],
  ];
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
      aria-label="Catalog trust statistics"
    >
      {stats.map(([value, label]) => (
        <p key={label} className="text-sm text-slate-300">
          <strong className="text-xl font-black text-white">{value}</strong>{" "}
          {label}
        </p>
      ))}
    </div>
  );
}
