import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideH3, GuideP, Callout, BulletList } from "../GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/crypto-cards/guides/crypto-card-bin-by-bin`;
const HUB_URL = `${SITE_URL}/crypto-cards`;

const UPDATED = "5 November 2026";
const UPDATED_ISO = "2026-11-05";

export const metadata: Metadata = {
  title: "Who Issues Your Crypto Card? The BIN Guide to Issuers Behind the Brands",
  description:
    "The name on your crypto card is a brand. The licensed issuer behind it, identified by the card number's BIN, decides whether your card survives a shutdown, a freeze, or a compliance order. Here is the brand to issuer map for the major programs in our directory, November 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Who Issues Your Crypto Card, BIN by BIN | CryptosBeginner",
    description: "Why the issuer behind your card brand matters, and which issuers sit behind the biggest crypto card programs.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Who Issues Your Crypto Card, BIN by BIN",
    description: "The brand is marketing. The issuer is the risk. A brand to issuer map of the major crypto card programs.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "What is a BIN on a card?",
    answer:
      "BIN stands for Bank Identification Number. It is the first six to eight digits of a card number, and it identifies the institution that issued the card, the card network, and the card type. When a payment terminal reads your card, the BIN is how the network knows which issuer stands behind it.",
  },
  {
    question: "Can I find my crypto card's issuer from the card number?",
    answer:
      "Partly. A BIN lookup can point to the issuing institution, but crypto card programs layer brands, program managers, and issuers on top of each other, and public BIN databases are often stale for these programs. The reliable source is your cardholder agreement, which names the legal issuer. We map brands to issuers from those agreements and issuer disclosures rather than from BIN databases.",
  },
  {
    question: "Why do card brands not advertise their issuer?",
    answer:
      "Because the brand is the product they sell. The issuer is regulated infrastructure in the background. Most brands would rather you think about cashback than about which licensed entity actually settles your transactions, holds the card program's regulatory permissions, and can freeze or close the program.",
  },
  {
    question: "What happens to my card if the issuer fails or is ordered to stop?",
    answer:
      "Usually the card stops working, even if the brand is healthy. When a regulator restricts an issuer, or an issuer exits a market, every brand running on that issuer is affected at the same time. Your path to any remaining balance then runs through the wind-down terms of the program, which is why we track discontinued cards on our graveyard page.",
  },
  {
    question: "Does the issuer hold my crypto?",
    answer:
      "That depends on the program, not the BIN. With custodial cards, balances sit with the provider. With self-custody cards like ether.fi Cash, Plasma One, or Tria, assets stay in your own vault or wallet until you spend, and the issuer side handles card settlement. Either way, the issuer is the regulated entity your card depends on to function.",
  },
];

const issuerRows = [
  {
    issuer: "Rain (cards issued by Third National, its licensed issuer entity)",
    brands: "ether.fi Cash, KAST, Avici, Plasma One, Solayer, Exa, Ethena Pay, Tuyo, Jupiter, Tangem Pay, Western Union Stablecard, and Solid in some countries",
    note: "The biggest single issuer group in the self-custody card market. When people say a card is 'issued by Rain', cards are legally issued by Third National under Rain's program infrastructure.",
  },
  {
    issuer: "Monavate (formerly Baanx)",
    brands: "MetaMask Card, Gnosis Pay, OKX Card, Ledger CL Card, 1inch Card, Exodus Card",
    note: "UK based e-money issuer behind many self-custody and wallet native cards. In December 2025 the Bank of Lithuania barred Monavate from serving six named partner companies, a reminder that issuer level orders land on every brand at once.",
  },
  {
    issuer: "Wirex",
    brands: "Wirex One, Pulsar Money, COCA, BingX, and Solid in some countries",
    note: "Wirex is both a brand and a licensed issuer for other programs in the UK and Europe.",
  },
  {
    issuer: "Pathward (with Marqeta processing)",
    brands: "Coinbase Card",
    note: "A classic US split: a national bank issues, a processing platform runs the technology. Paysafe has also acted as a program partner on the Coinbase Card.",
  },
  {
    issuer: "DiPocket",
    brands: "Nexo Card (Europe)",
    note: "Lithuanian e-money institution issuing Nexo's crypto backed card in the EEA and UK.",
  },
  {
    issuer: "PhotonPay",
    brands: "GMGN Card",
    note: "Hong Kong headquartered Mastercard issuer named as the issuer behind the GMGN Card.",
  },
  {
    issuer: "DCS Card Centre",
    brands: "DeCard, Jupiter Card (Singapore and parts of APAC)",
    note: "Singapore regulated issuer with over 50 years of card issuing history. Jupiter also uses Rain for some markets, so one brand can sit on two issuers.",
  },
  {
    issuer: "US partner banks",
    brands: "Gemini Credit Card (WebBank), Coinbase One Card (First Electronic Bank), Crypto.com Visa Signature credit card in the US (Comenity Capital Bank), Robinhood Gold and Platinum (Coastal Community Bank), Kraken Card (Lead Bank)",
    note: "US credit and debit programs almost always run on a chartered bank you have never heard of. The bank, not the app, is the lender and issuer of record.",
  },
  {
    issuer: "Issuer partners and BIN sponsors in Asia",
    brands: "RedotPay (Xfers and Reap named as issuer partners, StraitsX as BIN sponsor for the Singapore launch), Backpack Card (Bano)",
    note: "In Asia, programs often stack a local licensed partner under the global brand. RedotPay's three named partners show how layered this can get.",
  },
  {
    issuer: "Others in our directory",
    brands: "WhiteBIT Nova (Wallester), SafePal Card (Fiat24), Fastex Card (Alchemy Pay), Trade Republic Card (Trade Republic Bank)",
    note: "Smaller issuers still carry the same weight for their cardholders: if they stop, the card stops.",
  },
];

export default function CryptoCardBinByBinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Who Issues Your Crypto Card, BIN by BIN",
            url: PAGE_URL,
            datePublished: "2026-11-05",
            dateModified: UPDATED_ISO,
            author: { "@type": "Person", name: "Alex Rivera" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="bg-[#0b0820] text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Card guide
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Who Issues Your Crypto Card, BIN by BIN
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              The logo on your card is a brand. Behind it sits a licensed issuer, identified by the first digits of your card number, and that issuer decides whether your card keeps working when something goes wrong. Here is who actually issues the major cards in our directory.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            A BIN is the first six to eight digits of a card number, and it points to the issuing institution, not the brand on the plastic. A handful of issuers sit behind most crypto cards: Rain's group alone issues for ether.fi, KAST, Avici, Plasma One, and many more. If your issuer is frozen, restricted, or shut down, your card dies with it, whatever the app says. This guide maps brands to issuers at the level the evidence supports, and says plainly where it stops.
          </Callout>

          <GuideH2>What a BIN is, in plain terms</GuideH2>
          <GuideP>
            Every card number starts with a BIN, short for Bank Identification Number. Visa and Mastercard allocate BIN ranges to licensed issuers, and the first six to eight digits of your number tell the network which institution issued the card, which network it runs on, and roughly what kind of card it is. The brand printed on the front, the app you downloaded, and the company whose ads you saw may all be different companies from the issuer those digits name.
          </GuideP>
          <GuideP>
            One honest limit before we go further. This guide works at brand to issuer level, using cardholder agreements, issuer disclosures, and the issuer information stated in our own directory listings. We are not printing specific BIN digit ranges for these programs. Public BIN databases are frequently out of date for crypto card programs, ranges get reassigned when programs move issuers, and publishing a wrong range would be worse than publishing none. This piece was prompted by the BIN by BIN issuer research shared by @0xVishnya on X, which pushed the same point: the issuer map is public information if you read the agreements, and almost nobody reads the agreements.
          </GuideP>

          <GuideH2>Why the issuer matters more than the brand</GuideH2>
          <BulletList
            items={[
              "Freezes happen at issuer level. Compliance holds, sanctions screening, and account closures are executed by the regulated issuer and its processors, not by the app's marketing team.",
              "Shutdowns cascade. When an issuer exits a market or a regulator restricts it, every brand on that issuer is hit at the same time. Our graveyard page is full of cards that died because a partner behind them stopped, not because the brand ran out of users.",
              "Support has a ceiling. When a transaction is stuck, the brand's support team often cannot move money the issuer is holding. Knowing the issuer tells you who actually has the lever.",
              "Terms are the issuer's terms. The cardholder agreement that governs your balance, your dispute rights, and what happens in a wind-down is written by or for the issuer entity named in it.",
            ]}
          />
          <GuideP>
            None of this makes brands irrelevant. The brand runs the app, sets the fees you see, and chooses the issuer. But when something breaks, it breaks along issuer lines. Two cards that look like competitors can be the same program underneath, and two versions of the same brand in different countries can run on different issuers entirely. Solid is a clean example from our own listings: its card is issued by Rain or Wirex depending on your country of residence. Same app, same brand, different issuer, different risk.
          </GuideP>

          <GuideH2>The map: who issues what</GuideH2>
          <GuideP>
            The table below is built from our directory's issuer records and the issuer statements inside individual card listings. It covers the programs where an issuer is publicly named. Where a listing does not name an issuer, we leave it off rather than guess.
          </GuideP>
          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-black">Issuer</th>
                  <th className="px-5 py-4 font-black">Card brands on it</th>
                  <th className="px-5 py-4 font-black">Worth knowing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {issuerRows.map((row) => (
                  <tr key={row.issuer}>
                    <td className="px-5 py-4 font-bold">{row.issuer}</td>
                    <td className="px-5 py-4">{row.brands}</td>
                    <td className="px-5 py-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GuideP>
            Read the Rain row twice. One issuer group sits behind a large share of the self-custody card market, including several cards that market themselves against each other. That concentration is not automatically bad: Rain is a Visa and Mastercard principal member with real infrastructure, and scale brings competence. But it does mean an issuer level problem at Rain would not be one card's problem. In August 2026 an outdated Rain card contract was exploited and the losses landed on Avici and Tria users at the same time, which we cover in our guide to crypto card security incidents. Different brands, same plumbing, same bad day.
          </GuideP>

          <GuideH2>How to find your own card's issuer</GuideH2>
          <GuideH3>Read the cardholder agreement</GuideH3>
          <GuideP>
            The agreement you accepted at signup names the legal issuer, usually in the first paragraph or the definitions section. ether.fi's materials, for example, state plainly that the card is issued by Third National, a Rain group company, under a Visa license. KAST's listing says the same. If your agreement names a company you have never heard of, that company is your issuer.
          </GuideP>
          <GuideH3>Check the back of the card and the app's legal pages</GuideH3>
          <GuideP>
            Physical cards often print the issuing bank's name in small type on the back. Apps bury the same information in legal or regulatory pages. Our issuer directory collects the ones we have verified, and each card listing in the directory repeats the issuer where the provider states it.
          </GuideP>
          <GuideH3>Treat BIN lookup sites as a hint, not proof</GuideH3>
          <GuideP>
            A BIN lookup can confirm the network and sometimes the issuing institution, but crypto programs move between issuers and share program managers, so databases lag reality. Use a lookup to form a suspicion, then confirm it in the agreement.
          </GuideP>

          <GuideH2>When the BIN says your personal card is a company card</GuideH2>
          <GuideP>
            A BIN lookup can also reveal something the marketing never mentions: the card type. In November 2026, @xKseilas published BIN research showing several cards sold to regular people running on business card ranges. Gate Essential's BIN 53710074 reads as a Mastercard Purchasing Card issued by Sutton Bank in the US. GMGN's card BIN 52401394 reads as a Mastercard Corporate card from Hong Kong. Infini's Lite card BIN 44135765 reads as a Visa Business card in the US, and Rain's issuer range beginning 454988 reads as Visa Corporate T&E. You opened these with your own passport; the network sees an employee expense card.
          </GuideP>
          <GuideP>
            The type is not trivia. In the EU, the interchange caps that limit what shops pay to accept a card cover consumer cards only, so a business BIN costs the shop more. The EU ban on checkout surcharges also covers consumer cards only, which means a shop may legally add a fee for yours. And some merchants read the card type at checkout and block business or prepaid BINs outright. Your card app shows the full number: put the first eight digits into any BIN checker and see what type your card claims to be.
          </GuideP>

          <GuideH2>What to do with this information</GuideH2>
          <BulletList
            items={[
              "Diversify across issuers, not just brands. A backup card only protects you if it runs on different infrastructure. Two Rain issued cards are one point of failure wearing two logos.",
              "Keep card balances small. The issuer layer is one more reason to top up close to spending rather than parking a month of expenses on any card.",
              "Save your cardholder agreement when you sign up. It is the document that tells you your rights if the program winds down, and it is much harder to find after the app closes.",
              "Watch issuer news, not just brand news. A regulator's order against an issuer you have never heard of can be the first warning that your card is about to stop working.",
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/crypto-cards/issuers"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white hover:bg-slate-800"
            >
              Browse the issuer directory
            </Link>
            <Link
              href="/crypto-cards/guides/crypto-card-security-incidents"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Read the security incidents history
            </Link>
            <Link
              href="/crypto-cards/graveyard"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              See the card graveyard
            </Link>
            <Link
              href={HUB_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-100"
            >
              Browse all cards
            </Link>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-black">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {faqItems.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-slate-900">{f.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
