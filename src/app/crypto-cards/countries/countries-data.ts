export type CountryInfo = {
  slug: string;
  name: string;
  matchTerms: string[];
  taxNote: string;
  overview: string;
};

export const countries: CountryInfo[] = [
  {
    slug: "united-states",
    name: "United States",
    matchTerms: ["united states", "united states and certain latin american countries"],
    taxNote: "The IRS treats crypto as property. Each card spend that converts crypto to dollars is generally a taxable disposal; you owe capital gains on any increase since you acquired the crypto.",
    overview: "The US has the widest selection of crypto cards, including several US-only products. State-level restrictions can apply (some cards exclude Hawaii or New York), so check the cardholder agreement for your state.",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    matchTerms: ["united kingdom", "eea and united kingdom", "eea, united kingdom"],
    taxNote: "HMRC treats crypto as property. Spending crypto via a card is generally a disposal for Capital Gains Tax purposes, though the annual exempt amount may cover small gains.",
    overview: "The UK has strong crypto card availability through both local fintech and international issuers. FCA regulations mean most cards require full identity verification.",
  },
  {
    slug: "european-union",
    name: "European Union",
    matchTerms: ["europe", "european economic area", "eea", "eea and united kingdom", "eea, united kingdom"],
    taxNote: "Tax treatment varies by member state. Many EU countries tax crypto disposals as capital gains; a few exempt long-held assets. Check your country's specific rules.",
    overview: "MiCA regulation is standardizing crypto services across the EU. Many cards passport across the EEA, but availability and terms can still differ by country.",
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    matchTerms: ["united arab emirates", "uae", "middle east"],
    taxNote: "The UAE generally does not levy personal income or capital gains tax on individuals, which simplifies crypto card use. Corporate and residency rules still apply; verify current regulations.",
    overview: "The UAE is positioning itself as a crypto hub with growing card availability. Several international card programs serve UAE residents.",
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    matchTerms: ["pakistan"],
    taxNote: "Pakistan's crypto tax framework is evolving. Keep records of all crypto disposals as if they were taxable, and consult a local tax professional for current guidance.",
    overview: "Crypto card options for Pakistani residents are limited but growing, primarily through international programs that accept Pakistani applicants.",
  },
  {
    slug: "india",
    name: "India",
    matchTerms: ["india"],
    taxNote: "India applies a flat 30% tax on crypto gains plus a 1% TDS on transfers. Crypto card spending that disposes of crypto likely falls under these rules.",
    overview: "India's strict crypto tax regime affects card economics significantly. Card availability for Indian residents varies by issuer.",
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    matchTerms: ["nigeria", "africa"],
    taxNote: "Nigeria's crypto tax framework is developing. Keep detailed records of all crypto spending and consult local guidance.",
    overview: "Nigeria has one of the highest crypto adoption rates globally. Several card programs target Nigerian users, though availability changes frequently.",
  },
  {
    slug: "brazil",
    name: "Brazil",
    matchTerms: ["brazil"],
    taxNote: "Brazil taxes crypto gains with monthly exempt thresholds. Card spending that disposes of crypto counts toward these calculations.",
    overview: "Brazil has a maturing crypto market with several local and international card options. Local programs may offer better terms for Brazilian residents.",
  },
  {
    slug: "australia",
    name: "Australia",
    matchTerms: ["australia"],
    taxNote: "The ATO treats crypto as property. Each card spend is a CGT event. Australia's personal use asset exemption is narrow and rarely applies to crypto card spending.",
    overview: "Australia has solid crypto card availability with clear AUSTRAC-regulated options. Tax record-keeping is important given the ATO's data matching.",
  },
  {
    slug: "canada",
    name: "Canada",
    matchTerms: ["canada"],
    taxNote: "The CRA treats crypto as a commodity. Disposing of crypto via card spending generally triggers capital gains (or business income if you trade frequently).",
    overview: "Canadian residents have access to several crypto cards, though fewer than the US. Interac integration varies by program.",
  },
  {
    slug: "turkey",
    name: "Turkey",
    matchTerms: ["turkey", "turkiye"],
    taxNote: "Turkey's crypto tax framework is evolving. Keep records of all crypto disposals and check current local guidance.",
    overview: "Turkey has high crypto adoption. Note that some card programs have restricted Turkish residents recently; verify current eligibility carefully.",
  },
  {
    slug: "philippines",
    name: "Philippines",
    matchTerms: ["philippines"],
    taxNote: "The Philippines taxes crypto gains under existing tax law. Keep records of card spending disposals.",
    overview: "The Philippines has active crypto card programs, partly driven by remittance use cases. Several cards specifically target Filipino users.",
  },
  {
    slug: "argentina",
    name: "Argentina",
    matchTerms: ["argentina", "latin america"],
    taxNote: "Argentina's crypto tax treatment is complex and evolving, with provincial variations. Professional advice is recommended.",
    overview: "Argentina's inflation history drives strong crypto card demand. Local programs offer cards designed for Argentine economic conditions.",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    matchTerms: ["south africa", "africa"],
    taxNote: "SARS treats crypto as an asset subject to capital gains or income tax depending on intent. Card spending disposals are generally taxable events.",
    overview: "South Africa has a growing crypto card market with both local and international options for residents.",
  },
];

export function getCountryBySlug(slug: string): CountryInfo | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCountriesForCard(cardRegions: string[], cardAvailability: string): string[] {
  const text = [...cardRegions, cardAvailability].join(" ").toLowerCase();
  const matched: string[] = [];
  for (const country of countries) {
    if (country.matchTerms.some((term) => text.includes(term))) {
      matched.push(country.slug);
    }
  }
  if (/global|worldwide|international|150\+|180\+|190\+|210\+|140\+/.test(text) && matched.length === 0) {
    return ["global"];
  }
  return matched;
}
