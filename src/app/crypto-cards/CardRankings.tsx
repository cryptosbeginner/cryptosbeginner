import Link from "next/link";
import { cardListings } from "./cards-data";

type RankedCard = {
  slug: string;
  name: string;
  provider: string;
  reason: string;
};

function rankByCashback(): RankedCard[] {
  return cardListings
    .map((card) => {
      const match = card.rewards.match(/(\d+(?:\.\d+)?)\s*%/);
      const rate = match ? parseFloat(match[1]) : 0;
      return { card, rate };
    })
    .filter(({ card, rate }) => rate > 0 && !/no cashback/i.test(card.rewards))
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 5)
    .map(({ card, rate }) => ({
      slug: card.slug,
      name: card.name,
      provider: card.provider,
      reason: `Advertised up to ${rate}% rewards. ${card.rewards.split(".")[0]}.`,
    }));
}

function rankByLowFees(): RankedCard[] {
  return cardListings
    .filter((card) => /no annual fee|no monthly fee|free/i.test(card.pricing))
    .filter((card) => !/subscription|\$\d+\/month/i.test(card.pricing))
    .slice(0, 5)
    .map((card) => ({
      slug: card.slug,
      name: card.name,
      provider: card.provider,
      reason: card.pricing.split(".")[0] + ".",
    }));
}

function rankByTravel(): RankedCard[] {
  return cardListings
    .filter((card) => /no fx|zero fx|0%.*fx|no foreign/i.test(card.pricing + " " + card.rewards))
    .slice(0, 5)
    .map((card) => ({
      slug: card.slug,
      name: card.name,
      provider: card.provider,
      reason: `Low or zero FX fees advertised. ${card.availability.split(".")[0]}.`,
    }));
}

function RankingBlock({ title, description, cards }: { title: string; description: string; cards: RankedCard[] }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/25">
      <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {cards.length > 0 ? (
        <ol className="mt-5 space-y-4">
          {cards.map((card, index) => (
            <li key={card.slug} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                {index + 1}
              </span>
              <div>
                <Link href={`/crypto-cards/${card.slug}`} className="font-black hover:text-fuchsia-700">
                  {card.name}
                </Link>
                <p className="text-xs font-semibold text-slate-500">{card.provider}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{card.reason}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          No cards currently meet the published criteria for this category.
        </p>
      )}
    </div>
  );
}

export default function CardRankings() {
  const cashback = rankByCashback();
  const lowFees = rankByLowFees();
  const travel = rankByTravel();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.17em] text-fuchsia-700">Rankings · October 2026</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Cards by use case</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Ranked by advertised figures only, not by endorsement. A higher cashback rate does not mean a lower total cost; check fees, caps, lockups, and eligibility for your country before applying.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <RankingBlock
          title="Highest advertised cashback"
          description="Sorted by the top reward rate each provider publishes, before caps and conditions."
          cards={cashback}
        />
        <RankingBlock
          title="Lowest headline fees"
          description="Cards advertising no annual or monthly fee on their reviewed product page."
          cards={lowFees}
        />
        <RankingBlock
          title="Best for travel spending"
          description="Cards advertising low or zero foreign-exchange fees for spending abroad."
          cards={travel}
        />
      </div>
      <p className="mt-6 text-xs leading-5 text-slate-500">
        <strong>Methodology:</strong> Rankings are generated from provider-published figures in this directory on the review date shown per card. They do not account for tiered rates, staking or lockup requirements, excluded categories, regional variation, or total cost of ownership. This is comparison data, not financial advice. Rankings updated October 2026.
      </p>
    </section>
  );
}
