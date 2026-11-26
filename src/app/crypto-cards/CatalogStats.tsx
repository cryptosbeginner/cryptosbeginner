import { cardListings } from "./cards-data";
import {
  modelCashback,
  type CashbackModel,
} from "./effective-cashback/cashback-math";

export default function CatalogStats() {
  const total = cardListings.length;
  const visa = cardListings.filter((c) => c.network.includes("Visa")).length;
  const mastercard = cardListings.filter((c) =>
    c.network.includes("Mastercard"),
  ).length;
  const selfCustody = cardListings.filter((c) =>
    c.categories.includes("self-custody"),
  ).length;
  const bothFormats = cardListings.filter(
    (c) => c.cardFormats.includes("Virtual") && c.cardFormats.includes("Physical"),
  ).length;
  const models = cardListings
    .map((c) => modelCashback(c))
    .filter((m): m is CashbackModel => m !== null);
  const withRate = models.filter(
    (m) => m.rateKind === "base" || m.rateKind === "max-only",
  ).length;
  const noAnnualFee = models.filter((m) => m.annualFee === 0).length;

  const stats = [
    { value: `${total}`, label: "cards tracked in our directory" },
    { value: `${withRate}`, label: "publish a cashback or rewards rate" },
    { value: `${noAnnualFee}`, label: "state no annual fee in their terms" },
    { value: `${selfCustody}`, label: "are self-custody, spending from your own wallet" },
    { value: `${visa} / ${mastercard}`, label: "run on Visa / run on Mastercard" },
    { value: `${bothFormats}`, label: "offer both virtual and physical cards" },
  ];

  return (
    <div className="my-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <p className="text-3xl font-black tracking-[-0.02em] text-slate-950">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">
        Counted from the CryptosBeginner card directory. These figures are
        calculated from the listings themselves, so they move as cards are
        added and terms are rechecked.
      </p>
    </div>
  );
}
