import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cards, availabilityFor, regionFilterCountries } from "@/data/cards";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/cards`;
const UPDATED = "14 October 2026";
const UPDATED_ISO = "2026-10-14";

export const metadata: Metadata = {
  title: "Best Crypto Cards 2026: Compare Fees, Limits & Availability",
  description:
    "Compare crypto debit cards by fees, ATM limits, cashback, and country availability. Every figure verified October 2026 with honest availability ratings.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best Crypto Cards 2026",
    description:
      "Crypto cards compared honestly: fees, limits, availability, and what they really cost.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a crypto card?",
    answer:
      "A crypto card is a prepaid debit card (usually Visa or Mastercard) that lets you spend cryptocurrency at regular merchants. You top it up with crypto, the provider converts it at the point of sale, and the merchant receives fiat. You never spend directly from a blockchain wallet.",
  },
  {
    question: "Do crypto cards require KYC?",
    answer:
      "Yes. Every legitimate Visa or Mastercard crypto card requires identity verification, because the card networks require it of issuers. Any card marketed as no-KYC operates in a regulatory gray zone and we do not recommend it.",
  },
  {
    question: "Are crypto card fees higher than normal debit cards?",
    answer:
      "Usually, yes. Expect a crypto conversion fee (often around 1%), an FX markup on foreign spending, and ATM fees around 2%. The honest way to compare is the total cost per purchase, not any single headline fee.",
  },
  {
    question: "Is spending crypto with a card a taxable event?",
    answer:
      "In many countries, yes. Converting crypto to fiat at the point of sale counts as a disposal and may trigger capital gains tax. This page is educational, not tax advice: check your local rules or ask a tax professional.",
  },
  {
    question: "How current is the data on this page?",
    answer:
      "Every card lists a verified-on date. Card fees and country availability change often, so always confirm the live fee schedule in the provider's app before signing up.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Crypto cards compared",
  itemListElement: cards.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: `${SITE_URL}${c.reviewUrl}`,
  })),
};

function AvailabilityBadge({ status }: { status: "available" | "unavailable" | "unclear" }) {
  const styles = {
    available: "bg-emerald-100 text-emerald-800",
    unavailable: "bg-red-100 text-red-800",
    unclear: "bg-amber-100 text-amber-800",
  } as const;
  const labels = {
    available: "Available",
    unavailable: "Not available",
    unclear: "Unclear",
  } as const;
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function CardsHubPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <main className="min-w-0 overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <p className="text-sm font-bold text-indigo-700">
              Updated {UPDATED} · Every figure verified October 2026
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Best Crypto Cards 2026: Compare Fees, Limits and Availability
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">
              Crypto cards let you spend Bitcoin, stablecoins, and other
              crypto anywhere Visa or Mastercard is accepted. This page
              compares the cards we have verified ourselves, with honest
              availability ratings: we only mark a country as supported
              when the issuer publishes it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/cards/redotpay-review"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-emerald-700"
              >
                Read the RedotPay review
              </Link>
              <Link
                href="/cards/tevau-review"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 no-underline transition hover:bg-slate-100"
              >
                Read the Tevau review
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Comparison
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Cards compared
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Filter by your country to see honest availability.{" "}
              <strong>Unclear</strong> means the issuer publishes no country
              list, so we cannot confirm support: check the app before
              relying on it.
            </p>
          </div>

          <form
            id="card-filters"
            className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-end"
          >
            <div className="flex-1">
              <label
                htmlFor="filter-country"
                className="text-xs font-bold uppercase tracking-wide text-slate-500"
              >
                Your country
              </label>
              <select
                id="filter-country"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900"
                defaultValue=""
              >
                <option value="">All countries</option>
                {regionFilterCountries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="filter-type"
                className="text-xs font-bold uppercase tracking-wide text-slate-500"
              >
                Card type
              </label>
              <select
                id="filter-type"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900"
                defaultValue=""
              >
                <option value="">Virtual and physical</option>
                <option value="virtual">Virtual only</option>
                <option value="physical">Physical available</option>
              </select>
            </div>
            <p className="text-xs leading-5 text-slate-500 sm:max-w-[220px]">
              Filters apply instantly in your browser. No data leaves your
              device.
            </p>
          </form>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-black text-slate-950">Card</th>
                  <th className="px-4 py-3 font-black text-slate-950">Issuance</th>
                  <th className="px-4 py-3 font-black text-slate-950">Spend cost</th>
                  <th className="px-4 py-3 font-black text-slate-950">ATM</th>
                  <th className="px-4 py-3 font-black text-slate-950">Cashback</th>
                  <th
                    className="px-4 py-3 font-black text-slate-950"
                    data-availability-header="true"
                  >
                    Availability
                  </th>
                  <th className="px-4 py-3 font-black text-slate-950">Review</th>
                </tr>
              </thead>
              <tbody className="leading-6 text-slate-800">
                {cards.map((card) => (
                  <tr
                    key={card.slug}
                    className="border-b border-slate-100 align-top"
                    data-card-types={card.cardTypes.join(",")}
                    data-card-slug={card.slug}
                  >
                    <td className="px-4 py-4">
                      <p className="font-black text-slate-950">{card.name}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {card.tagline}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {card.cardNetwork} · {card.cardTypes.join(" + ")} ·{" "}
                        {card.kycRequired ? "KYC required" : "KYC status unclear"}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      {card.issuanceFee.virtual && (
                        <p>Virtual: {card.issuanceFee.virtual}</p>
                      )}
                      {card.issuanceFee.physical && (
                        <p>Physical: {card.issuanceFee.physical}</p>
                      )}
                      <p className="text-xs text-slate-500">
                        Annual fee: {card.annualFee}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p>{card.fxFee}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Top-up: {card.topUpFee}
                      </p>
                    </td>
                    <td className="px-4 py-4">{card.atmFee}</td>
                    <td className="px-4 py-4">
                      <p>{card.cashback.rate}</p>
                      {card.cashback.conditions && (
                        <p className="mt-1 text-xs text-slate-500">
                          {card.cashback.conditions}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4" data-availability-cell="true">
                      <AvailabilityBadge
                        status={availabilityFor(card, "")}
                      />
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Select your country above for an honest check.
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={card.reviewUrl}
                        className="font-bold text-indigo-700 hover:underline"
                      >
                        Full review
                      </Link>
                      <p className="mt-1 text-xs text-slate-500">
                        Verified {card.verifiedOn}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
(function () {
  var country = document.getElementById('filter-country');
  var type = document.getElementById('filter-type');
  if (!country || !type) return;
  var DATA = ${JSON.stringify(
    cards.map((c) => ({
      slug: c.slug,
      types: c.cardTypes,
      excluded: c.regions.excluded,
      available: c.regions.available,
    }))
  )};
  function badge(status) {
    var map = {
      available: ['bg-emerald-100 text-emerald-800', 'Available'],
      unavailable: ['bg-red-100 text-red-800', 'Not available'],
      unclear: ['bg-amber-100 text-amber-800', 'Unclear']
    };
    var s = map[status];
    return '<span class="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ' + s[0] + '">' + s[1] + '</span>';
  }
  function apply() {
    var cc = country.value;
    var tt = type.value;
    DATA.forEach(function (d) {
      var row = document.querySelector('tr[data-card-slug="' + d.slug + '"]');
      if (!row) return;
      var typeOk = !tt || (tt === 'virtual' ? d.types.indexOf('virtual') !== -1 : d.types.indexOf('physical') !== -1);
      row.style.display = typeOk ? '' : 'none';
      var cell = row.querySelector('[data-availability-cell]');
      if (cell && cc) {
        var status = d.excluded.indexOf(cc) !== -1 ? 'unavailable' : (d.available.indexOf(cc) !== -1 ? 'available' : 'unclear');
        cell.innerHTML = badge(status) + '<p class="mt-2 text-xs leading-5 text-slate-500">' +
          (status === 'unclear' ? 'No published country list: confirm in the app.' :
           status === 'unavailable' ? 'Issuer excludes this country.' : 'Issuer confirms support.') + '</p>';
      } else if (cell) {
        cell.innerHTML = badge('unclear') + '<p class="mt-2 text-xs leading-5 text-slate-500">Select your country above for an honest check.</p>';
      }
    });
  }
  country.addEventListener('change', apply);
  type.addEventListener('change', apply);
})();
              `,
            }}
          />

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-slate-800">
            <p>
              <strong>Disclosure:</strong> The card links on this page are
              affiliate links. If you sign up through them, CryptosBeginner
              may earn a commission at no extra cost to you. Rankings and
              comparisons are data-driven: nobody pays for placement. This
              page is educational content, not financial advice.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-black text-slate-950">
              More cards coming soon
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We are verifying Rizon, Bitget, Solid.xyz, Avici.money, Bybit,
              and Binance cards next. Each card is only listed here after
              its fees and availability are checked against official
              sources, so this table stays honest instead of growing fast.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            How to choose
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            What actually matters in a crypto card
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-black text-slate-950">Total cost per purchase</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Add the crypto conversion fee and the FX markup together.
                A card advertising 1% can cost 2.2% on foreign spending once
                both are stacked.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-black text-slate-950">Availability honesty</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Marketing says worldwide; the issuer's country list says
                otherwise. We mark countries as available only when the
                issuer publishes them.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-black text-slate-950">Cashback with caps</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A cashback rate means nothing without its monthly cap and
                conditions. We always show the cap next to the rate, or say
                when there is no cashback at all.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-black text-slate-950">Tax on every swipe</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Spending crypto is a taxable disposal in many countries.
                Keep records of every card purchase; the app history export
                is your friend at tax time.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            FAQ
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Crypto cards: common questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-black text-slate-950">{f.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Page updated {UPDATED}. Card data verified October 2026.
            Figures change: always confirm the live fee schedule in the
            provider's app before signing up.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
