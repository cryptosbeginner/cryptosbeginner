import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";
import { cardListings } from "../../crypto-cards/cards-data";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/crypto-card-list-49`;
const UPDATED = "26 November 2026";
const UPDATED_ISO = "2026-11-26";

export const metadata: Metadata = {
  title: "The 49-Card Crypto List, Checked Against 232 Verified Listings",
  description:
    "A widely shared table lists 49 crypto cards with one line of features each. We checked every row against our directory of 232 verified listings: 41 rows are already listed, where the one-liners mislead, and why eight names are not listed at all.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The 49-Card Crypto List, Checked | CryptosBeginner",
    description:
      "49 cards, one line each, checked against 232 verified listings. What holds up, where the headlines mislead, and the eight names we do not list.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 49-Card Crypto List, Checked",
    description:
      "A viral table lists 49 crypto cards in one line each. We checked all 49 against our verified directory. Here is what survives the check.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "How many of the 49 cards are already in the CryptosBeginner directory?",
    answer:
      "41 of the 49 rows match a card already listed in our directory of 232 crypto cards, including smaller programmes like Moto, Anodos, STEALF, El Dorado, Falcon Finance and Rebind. The remaining eight rows are issuers, infrastructure or non-crypto products, plus three candidates whose terms we are still verifying.",
  },
  {
    question: "Why are Wise and Nubank not listed as crypto cards?",
    answer:
      "Neither is a crypto card. Wise is a multi-currency fiat account that appears in our comparisons because cardholders weigh it against crypto cards, and Nubank is a Brazilian neobank whose crypto features are incidental to a general banking product. Listing either as a crypto card would mislabel what a reader is actually applying for.",
  },
  {
    question: "Are the one-line features in the shared table accurate?",
    answer:
      "Mostly traceable to provider pages, but one line cannot carry a fee schedule. The recurring pattern is a top-tier figure presented as the feature: a legacy maximum cashback rate, a VIP-only tier, or a points programme that is about to close. Each row in this article links to the full listing where the caps, tiers and fees are set out.",
  },
  {
    question: "Where can I see all 232 cards in this one-line format?",
    answer:
      "The at a glance page lists every card in the directory as a compact row with its checked one-line summary, headline cashback and rating, with search and filters for network and custody model. It is generated from the same data as the listings, so it never goes stale the way a shared image does.",
  },
];

// The 49 rows of the shared table, in its order. `line` is a short paraphrase of
// the table's own feature line; `slug` links the row we already list, or null.
const ROWS: { name: string; line: string; slug: string | null; note?: string }[] = [
  { name: "Wirex One", line: "Up to 8% cashback, tiered free ATM withdrawals", slug: "wirex-one-card" },
  { name: "KAST", line: "1.5% to 3% cashback by tier, KAST Points", slug: "kast-card" },
  { name: "Ethena Pay", line: "Up to 5% cashback, invite-only", slug: "ethena-pay-card" },
  { name: "Avici", line: "Visa secured by crypto, tiered ATM terms", slug: "avici-card" },
  { name: "Pulsar", line: "Pro cashback offers, promo rates vary", slug: "pulsar-money-card" },
  { name: "Krak", line: "0% Krak ATM fee, regional daily limits", slug: "kraken-debit-card" },
  { name: "Rain", line: "Card and payment infrastructure, AI agent vaults", slug: null, note: "Issuer and infrastructure provider, not a consumer card." },
  { name: "KardPay", line: "Virtual and physical, tiered top-up fees", slug: "kardpay-card" },
  { name: "RedotPay", line: "Stablecoin Visa, 2% USD ATM fee to a threshold", slug: "redotpay-card" },
  { name: "ether.fi", line: "Direct Pay or Borrow Mode, up to 3% Core cashback", slug: "etherfi-cash-card" },
  { name: "Trustee Plus", line: "Crypto account and card, availability varies", slug: "trustee-plus-card" },
  { name: "Oobit", line: "2.5% ATM fee, $250 per withdrawal", slug: "oobit-card" },
  { name: "Bybit", line: "Card rewards and lounge booking, terms vary by region", slug: "bybit-card" },
  { name: "OKX", line: "Cashback tiers up to 10% for eligible VIPs", slug: "okx-card" },
  { name: "Deblock", line: "Self-custody wallet plus EUR account, free ATM allowance by tier", slug: "deblock-card" },
  { name: "Kolo", line: "Card and payment account, limits need confirmation", slug: "kolo-card" },
  { name: "XPlace", line: "Non-custodial, up to 4% USDC cashback", slug: "xplace-card" },
  { name: "Goblin", line: "Physical Mastercard plus virtual Visa bundle, $500 a day ATM", slug: "goblin-card" },
  { name: "Laso", line: "Prepaid for people and AI agents, 0% US load fee", slug: "laso-card" },
  { name: "XHYPE", line: "Self-custody wallet and card, gift cards and eSIM", slug: "xkard-card" },
  { name: "Agora", line: "Physical Plus 2% ATM fee, $3,000 a day", slug: null, note: "Candidate: being verified against official terms before listing." },
  { name: "SolCard", line: "Virtual Visa, Apple and Google Pay on eligible tier", slug: "solcard" },
  { name: "Plasma", line: "Stablecoin account and card, cashback tiers", slug: "plasma-one-card" },
  { name: "MetaMask", line: "Virtual and Metal, Metal closed to new users", slug: "metamask-card" },
  { name: "Coinbase", line: "US debit, no Coinbase ATM fee", slug: "coinbase-card" },
  { name: "Bitpanda", line: "1% cashback, 2% ATM fee, 500 euro a day", slug: "bitpanda-card" },
  { name: "Trade Republic", line: "Saveback, free ATM withdrawals from 100 euro", slug: "trade-republic-card" },
  { name: "Moto", line: "Visa Infinite, up to 5x points, Full tier 0% FX", slug: "motocard" },
  { name: "Nora", line: "BRL stablecoin infrastructure on PIX rails", slug: null, note: "Infrastructure, not a standalone card, as the table itself notes." },
  { name: "Anodos", line: "Payment card announced, fees unconfirmed", slug: "anodos-card" },
  { name: "STEALF", line: "Stablecoin account and private wallet, card terms unconfirmed", slug: "stealf-card" },
  { name: "El Dorado", line: "USD virtual Visa from USDT, $3.99 issuance", slug: "el-dorado-card" },
  { name: "BFinance", line: "B2B card issuing, 8 currencies", slug: null, note: "Business-to-business issuer; it appears in our spend data, not the consumer directory." },
  { name: "Conkarta / Karta", line: "US premium charge card, $20K to $200K credit line, $300 a year", slug: "karta-card" },
  { name: "Infini", line: "Lite Plus 0% FX, higher tiers need $2K to $100K in assets", slug: "infini-card" },
  { name: "Wise", line: "Multi-currency debit, 250 euro a month free ATM in Germany", slug: null, note: "A fiat multi-currency account. Covered in comparisons only, never listed as a crypto card." },
  { name: "Elios", line: "Self-custodial, 3% cashback on the first $1,000", slug: "elios-card" },
  { name: "Solid", line: "Virtual Visa, up to 5% USDC cashback, Borrow Mode", slug: "solid-card" },
  { name: "Falcon Finance", line: "Virtual Visa funded with USDf, $25K a day online", slug: "falcon-card" },
  { name: "Rebind", line: "Lite and Premium plans", slug: "rebind-card" },
  { name: "Haven", line: "Privacy-focused Visa concept, launch needs confirmation", slug: "haven-card" },
  { name: "Pionex", line: "Exchange card, terms vary by region", slug: "pionex-card" },
  { name: "Another", line: "First virtual free, ATM 1.50 euro plus 1.5%", slug: "another-card" },
  { name: "X Money", line: "Payment account and card, up to 3% cashback", slug: null, note: "Candidate: being verified against official terms before listing." },
  { name: "Artisan", line: "US virtual Visa from self-custodial USDC, 0% spend fee", slug: null, note: "Candidate: being verified against official terms before listing." },
  { name: "Bitget Wallet", line: "Wallet card, multi-chain funding", slug: "bitget-wallet-card" },
  { name: "Nubank", line: "Brazilian neobank, account, Pix and card", slug: null, note: "A general neobank; its crypto features are incidental to the banking product." },
  { name: "Cashi", line: "Cash account and card, country-specific terms", slug: "cashi-card" },
  { name: "Jupiter", line: "Ecosystem mobile finance, card access by rollout", slug: "jupiter-card" },
];

export default function CryptoCardList49Page() {
  const bySlug = new Map(cardListings.map((c) => [c.slug, c]));
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The 49-Card Crypto List, Checked Against 232 Verified Listings",
    description: metadata.description,
    datePublished: UPDATED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: "Alex Rivera", url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      { "@type": "ListItem", position: 3, name: "The 49-Card Crypto List, Checked", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Link href="/learn" className="text-sm font-black text-amber-200 hover:text-white">
              ← Back to Learn
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Market check
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              The 49-card crypto list, checked against 232 verified listings
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              A table titled &quot;Crypto Card List x Main features&quot; is making the rounds: 49 projects,
              one line of features each. It is a genuinely useful format, so we did the obvious thing and
              checked every row against our directory. 41 of the 49 are already listed here. The interesting
              part is the other eight, and the places where one line is not enough.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            The shared table is a fair snapshot of the market's visible half. 41 of its 49 rows match cards
            already in our directory, most of its figures trace back to provider pages, and its one-line
            format is exactly how people actually compare cards. Where it misleads is where every one-line
            format misleads: top-tier numbers presented as the feature, and the price of the card itself
            left out. Our{" "}
            <Link href="/crypto-cards/at-a-glance" className="font-bold text-indigo-700 underline">
              at a glance page
            </Link>{" "}
            now lists all 232 cards in the same format, from checked data.
          </Callout>

          <GuideH2>What the table gets right</GuideH2>
          <GuideP>
            Credit where it is due. The table reaches beyond the exchange giants: it includes small and new
            programmes like Moto, Anodos, STEALF, El Dorado, Falcon Finance and Rebind, all of which are in
            our directory too, and it is honest about uncertainty in places, flagging cards whose limits or
            launch status still need confirmation. Its lines are mostly traceable to the providers' own
            pages rather than invented. As a discovery tool, it works.
          </GuideP>
          <GuideP>
            It is also, unavoidably, a snapshot. It was already ageing the week it was posted: tier names,
            prices and cashback bands in this market change monthly, and an image cannot be corrected. Two
            of its rows changed materially within days of publication, which is the strongest argument for
            keeping this format on a page that updates instead of in a picture that does not.
          </GuideP>

          <GuideH2>Where one line misleads</GuideH2>
          <BulletList
            items={[
              "Wirex One at \"up to 8% cashback\": the 8% figure belongs to legacy top-tier framing. The current programme's published base is far lower, and what a holder actually keeps after tiers and caps is on our effective cashback page, not in the headline.",
              "OKX at \"up to 10%\": that is the top VIP tier's rate. Most holders earn the base tier, which is a different number, and the listing sets out the ladder.",
              "KAST's \"Points programme\" is listed as a feature while KAST has announced the programme stops at the end of November 2026, with allocations following in December. A feature with an expiry date needs the date attached.",
              "Goblin's line covers limits and ATM terms but not the $350 one-time price of the bundle, which is the single most decision-relevant fact about that card.",
              "Ethena Pay's \"up to 5%\" is paid in AVAX and the card is invite-only, so the reachable rate for a new reader is currently zero. One line can hold the rate or the access condition; this format keeps choosing the rate.",
            ]}
          />
          <GuideP>
            None of this makes the table dishonest. It makes it a headline layer, and headline layers are
            where this site earns its keep: every row below links to the listing where the caps, tiers and
            fees behind the line are written out and sourced.
          </GuideP>

          <GuideH2>All 49 rows, checked</GuideH2>
          <GuideP>
            The table's rows in its order. The middle column paraphrases its feature line; the right column
            is our listing's own summary. Rows we do not list say why.
          </GuideP>
          <div className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {ROWS.map((row) => {
              const card = row.slug ? bySlug.get(row.slug) : undefined;
              return (
                <div key={row.name} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[10rem_1fr_1fr] sm:gap-4">
                  <p className="font-black text-slate-950">
                    {card ? (
                      <Link href={`/crypto-cards/${card.slug}`} className="text-indigo-700 hover:underline">
                        {row.name}
                      </Link>
                    ) : (
                      row.name
                    )}
                  </p>
                  <p className="text-sm leading-6 text-slate-500">{row.line}</p>
                  <p className="text-sm leading-6 text-slate-700">
                    {card ? card.shortDescription : row.note}
                  </p>
                </div>
              );
            })}
          </div>

          <GuideH2>The eight rows we do not list</GuideH2>
          <GuideP>
            Three of the eight are not consumer cards at all. Rain and BFinance are issuers and
            infrastructure: they power other brands' cards, and BFinance already appears in our spend
            tracking as a programme, but neither sells a card a reader can apply for. Nora is Brazilian
            stablecoin infrastructure on PIX rails, which the table itself concedes is not a standalone
            card.
          </GuideP>
          <GuideP>
            Two are not crypto cards. Wise is a fiat multi-currency account that readers weigh against
            crypto cards, so it appears in our comparisons and deliberately never as a listing. Nubank is a
            general Brazilian neobank whose crypto features are a side room in a banking product. Listing
            either here would mislabel the application a reader ends up making.
          </GuideP>
          <GuideP>
            The last three, Agora, X Money and Artisan, are real card candidates. Their published material
            does not yet meet the bar we apply to every listing, a verifiable fee schedule and terms from
            the provider itself, so they are being checked now and will be listed if the terms hold up. That
            is the same standard that has kept other announced cards on hold until their paperwork exists.
          </GuideP>

          <GuideH2>The other 183</GuideH2>
          <GuideP>
            The deepest problem with a 49-card table is arithmetic: the market it samples has at least 232
            live programmes in our directory alone, including regional cards, self-custody cards and
            long-running prepaid products a global snapshot tends to skip. If the one-line format is how
            you like to scan, the{" "}
            <Link href="/crypto-cards/at-a-glance" className="font-bold text-indigo-700 underline">
              at a glance page
            </Link>{" "}
            applies it to the whole directory, with search, network and custody filters, headline cashback
            and the{" "}
            <Link href="/crypto-cards/how-we-rate" className="font-bold text-indigo-700 underline">
              published rating formula
            </Link>{" "}
            beside every row. When a card's terms change, its line changes with the listing, which is the
            one thing a shared image can never do.
          </GuideP>

          <GuideH2>Frequently asked questions</GuideH2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-black text-slate-950 marker:hidden">
                  {item.question}
                  <span className="float-right text-indigo-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
