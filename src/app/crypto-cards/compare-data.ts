import { getCardBySlug, type CardListing } from "./cards-data";
import { OCTOBER_2026_PROGRAMS } from "./spend-data";

// Programmatic head-to-head comparisons for the most-used cards in the
// directory. Pairs are built from the latest monthly spend table: the eight
// highest-spend programs that have a listing, in spend order. The first slug
// in a pair is always the higher-spend card.
export const COMPARE_CARD_SLUGS: string[] = OCTOBER_2026_PROGRAMS.filter(
  (p) => p.slug,
)
  .slice(0, 8)
  .map((p) => p.slug as string);

export interface ComparePair {
  a: CardListing;
  b: CardListing;
  pairSlug: string;
}

export function pairSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

export const COMPARE_PAIRS: ComparePair[] = (() => {
  const pairs: ComparePair[] = [];
  for (let i = 0; i < COMPARE_CARD_SLUGS.length; i++) {
    for (let j = i + 1; j < COMPARE_CARD_SLUGS.length; j++) {
      const a = getCardBySlug(COMPARE_CARD_SLUGS[i]);
      const b = getCardBySlug(COMPARE_CARD_SLUGS[j]);
      if (a && b) pairs.push({ a, b, pairSlug: pairSlug(a.slug, b.slug) });
    }
  }
  return pairs;
})();

export function getComparePair(slug: string): ComparePair | null {
  return COMPARE_PAIRS.find((p) => p.pairSlug === slug) ?? null;
}

/** Pairs involving one card, highest-spend rival first. */
export function getPairsForCard(slug: string): ComparePair[] {
  return COMPARE_PAIRS.filter((p) => p.a.slug === slug || p.b.slug === slug);
}

export function otherCard(pair: ComparePair, slug: string): CardListing {
  return pair.a.slug === slug ? pair.b : pair.a;
}
