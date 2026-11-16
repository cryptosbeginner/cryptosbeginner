import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import { GuideH2, GuideP, Callout, BulletList } from "../../crypto-cards/guides/GuideStyles";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/germany-crypto-seizure-law`;
const UPDATED = "17 November 2026";
const UPDATED_ISO = "2026-11-17";
const IMG = "/images/learn/germany-seizure/process.png";

export const metadata: Metadata = {
  title: "Germany's Crypto Seizure Law Explained: What the €100,000 Rule Actually Allows",
  description:
    "On 12 November 2026 the Bundestag passed a customs law that lets authorities secure crypto and other assets worth over €100,000 of unclear origin for up to 30 days, without a criminal case. What the law does, what it does not do, why it is not in force yet, and the records holders should keep.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Germany's Crypto Seizure Law Explained | CryptosBeginner",
    description:
      "A 30 day customs hold, a possible 150 day court extension, and confiscation only by court judgment. The €100,000 rule, explained from the bill text, including the Bundesrat step that is still missing.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMG}`, alt: "Four step diagram of Germany's proposed crypto seizure process: factual indications over 100,000 euros, a 30 day customs hold, a 150 day finance court extension, and confiscation only by court judgment, with a status note that the Bundesrat has not yet approved it" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany's Crypto Seizure Law Explained",
    description:
      "The Bundestag passed it on 12 November. It is not law yet. Here is what the €100,000 rule actually allows, and what it does not.",
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: "Is Germany's crypto seizure law in force now?",
    answer:
      "No. The Bundestag passed the Customs Financial Justice Act on 12 November 2026, but the bill was drafted as a law requiring the consent of the Bundesrat, the chamber of Germany's 16 states. That consent had not been given as of 17 November 2026, and the law also needs formal promulgation before it can apply. The planned start date is 1 January 2027, with some provisions staged later.",
  },
  {
    question: "Can customs take my crypto just because it is worth more than €100,000?",
    answer:
      "No. The €100,000 figure only defines a significant asset. Section 53 of the amended law requires factual indications that the asset is not of lawful origin, meaning a lawful acquisition does not appear plausible. A large balance on its own does not meet that test, and permanent confiscation requires a finance court to be convinced the origin is unlawful.",
  },
  {
    question: "How long can customs hold an asset under this law?",
    answer:
      "Up to 30 days on customs' own authority, while they investigate the origin. A finance court can extend the hold once by up to 150 days, so the maximum under this administrative route is 180 days. Keeping the asset permanently is a separate step that requires a court judgment.",
  },
  {
    question: "Does the law only apply to cryptocurrency?",
    answer:
      "No. It is a general unexplained wealth procedure covering cash, vehicles, real estate and other property. Crypto is included expressly through the EU's MiCA definition of a crypto asset, which is why the €100,000 threshold rather than the €50,000 threshold for registered assets like land and cars applies to it.",
  },
  {
    question: "What records prove the origin of crypto holdings?",
    answer:
      "The law does not publish a checklist, and assessments are case by case, but the practical evidence is the paper trail of lawful acquisition: exchange account statements and trade history exports, bank statements showing the fiat used to buy, tax filings where they exist, and records of gifts, inheritance or mining income. The gap this law targets is holdings that are large and old enough that the owner never kept, or can no longer get, those records.",
  },
];

export default function GermanyCryptoSeizureLawPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Germany's Crypto Seizure Law Explained: What the €100,000 Rule Actually Allows",
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
      { "@type": "ListItem", position: 3, name: "Germany Crypto Seizure Law", item: PAGE_URL },
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
            <Link href="/learn/how-to-anonymize-bitcoin" className="text-sm font-black text-amber-200 hover:text-white">
              ← Back to the Bitcoin privacy guide
            </Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Policy news
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Germany's crypto seizure law, explained: what the €100,000 rule actually allows
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              On Thursday 12 November 2026, Germany's Bundestag passed the Customs Financial
              Justice Act, a customs reform that creates an administrative procedure for assets
              whose lawful origin appears implausible, crypto included. Under it, customs could
              secure an asset worth over €100,000 for up to 30 days without opening a criminal
              case, and a finance court could extend the hold by 150 days. Two things the viral
              posts leave out: customs still need factual indications of unlawful origin, not
              just a large balance, and the law is not in force. It still needs the Bundesrat's
              consent, and its planned start is 1 January 2027.
            </p>
            <AuthorByline updated={UPDATED} />
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Callout title="The short version">
            The Bundestag has passed a law that would let German customs investigate and
            temporarily secure significant assets of unclear origin, including crypto worth over
            €100,000, through an administrative procedure rather than a criminal one. The hold
            runs up to 30 days, extendable once by a finance court to 180 days in total, and
            permanent confiscation requires a court judgment. It is not a crypto ban, it is not
            automatic at €100,000, and it is not law yet: the Bundesrat must still consent, and
            no date for that vote had been announced as of 17 November 2026.
          </Callout>

          <figure className="mt-8">
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 aspect-[1600/980]">
              <Image
                src={IMG}
                alt="Four step diagram of Germany's proposed crypto seizure process: factual indications over 100,000 euros, a 30 day customs hold, a 150 day finance court extension, and confiscation only by court judgment, with a status note that the Bundesrat has not yet approved it"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </figure>

          <GuideH2>What happened on 12 November</GuideH2>
          <GuideP>
            The law's full title translates as the law for more fairness through strengthening
            the customs administration and combating financial crime; everyone calls it the
            Zollfinanzgerechtigkeitsgesetz, or Customs Financial Justice Act. The federal
            cabinet adopted the draft on 12 August 2026, the government submitted it to
            parliament on 30 September as Drucksache 21/8282, a 390 page bill, and the Finance
            Committee issued an amended version, Drucksache 21/9136, on 11 November. The
            Bundestag adopted that version the next day, with the CDU/CSU, SPD and AfD voting in
            favour, Die Linke against, and the Greens abstaining. The government presents the
            bill as part of its February 2026 action plan against organised crime and as
            implementing recommendations of the FATF and the Egmont Group, and it budgets
            roughly €308 million a year in expected revenue from 2028.
          </GuideP>
          <GuideP>
            Crypto is not the bill's target so much as its most visible passenger. The reform
            covers customs administration broadly, and the asset procedure inside it applies to
            property generally: cash, cars, real estate, and crypto assets as defined in Article
            3(1)(5) of the EU's Markets in Crypto-Assets Regulation, plus comparable digital
            representations of value. No coin, exchange or company is named.
          </GuideP>

          <GuideH2>How the procedure works</GuideH2>
          <GuideP>
            The mechanism is a new block of sections in the Finanzverwaltungsgesetz headed
            "administrative asset investigation and securing." Section 53 sets the trigger:
            customs may use the special measures when factual indications suggest that a
            significant asset is not of lawful origin, in the bill's phrasing, when a lawful
            acquisition does not appear plausible. Section 54 governs how the authorities assess
            whether reasonable doubts about the origin exist. An asset counts as significant
            above €100,000, or above €50,000 if it belongs in a public register, as land,
            vehicles, ships and aircraft do. Crypto sits in no such register, so €100,000 is the
            operative figure, about 1.7 BTC at mid-November 2026 prices.
          </GuideP>
          <GuideP>
            Section 56 sets the clock. Customs may seize and take custody of a qualifying asset
            for up to 30 days to clarify its origin. A finance court can then extend the hold
            once, by up to 150 days, at customs' request, which makes 180 days the maximum under
            this route. Confiscation is a separate, higher step: it requires a finance court to
            be convinced the origin is unlawful. One detailed reading of the adopted text notes
            a two year window for the holder to demonstrate a lawful origin before confiscation
            and public auction follow. Throughout, the procedure is administrative. It runs
            alongside, not instead of, ordinary criminal asset recovery, which continues to
            exist under its own rules.
          </GuideP>

          <GuideH2>What the law does not do</GuideH2>
          <BulletList
            items={[
              <span key="1"><strong>It does not ban or restrict holding crypto.</strong> Nothing in the act limits buying, selling or self-custody. It is an investigation and securing procedure for assets whose origin is in doubt.</span>,
              <span key="2"><strong>It does not trigger on size alone.</strong> The €100,000 threshold defines which assets are significant enough to examine. The examination itself requires factual indications of unlawful origin.</span>,
              <span key="3"><strong>It does not let customs confiscate on their own authority.</strong> Customs can hold for 30 days. Extensions and confiscation both run through a finance court.</span>,
              <span key="4"><strong>It is not in force.</strong> As of 17 November 2026 the Bundesrat has not consented and the law has not been promulgated, so none of these powers can be used yet.</span>,
              <span key="5"><strong>It does not change tax law.</strong> Germany's existing rules, including the one year holding period after which private crypto gains are tax free, are untouched. What changes is how much an undocumented holder may one day have to explain.</span>,
            ]}
          />

          <GuideH2>Where it stands: the Bundesrat step</GuideH2>
          <GuideP>
            The government drafted the act as a consent law, meaning the Bundesrat, the chamber
            representing Germany's 16 states, must approve it before it can be signed and
            published in the Bundesgesetzblatt. The Bundesrat already considered the government
            draft in a first review in September 2026, which is normal procedure, but its formal
            consent is still outstanding. Its next plenary session is on 20 November, and the
            agenda for that session, last updated on 13 November, does not list the customs law,
            though agendas can be supplemented. No date for the consent vote had been announced
            when this article was published. If consent and promulgation follow the government's
            timetable, Article 26 of the act sets entry into force for 1 January 2027, with
            several provisions staged to start later.
          </GuideP>
          <GuideP>
            The bill also has organised opposition. The German Federal Bar Association (BRAK)
            has spoken against it, arguing that it hands customs too much discretion to question
            how assets were acquired, and that there is a real risk of missing or incomplete
            records being treated as evidence of illegal origin. That criticism goes to the
            design's pressure point: the procedure is built for assets whose paperwork does not
            speak for itself, and in crypto, old paperwork is exactly what many honest holders
            do not have.
          </GuideP>

          <GuideH2>What it means if you hold crypto in Germany</GuideH2>
          <GuideP>
            Nothing changes today, and nothing in the bill asks holders to do anything yet. But
            the direction is unmistakable, and it rewards one habit above all others: being able
            to show where your coins came from. The exposure is not really about the €100,000
            figure. It is about the profile this procedure is designed for, large holdings whose
            origin cannot be documented. In Germany that profile includes plenty of ordinary
            people: early buyers whose exchange has since shut down, holders who bought over the
            counter or in person, people who received crypto as gifts or payment years ago, and
            long-term holders who, precisely because the one year rule made their gains tax
            free, never filed or kept anything.
          </GuideP>
          <GuideP>The records that close that gap are mundane, and most of them still exist if you gather them now:</GuideP>
          <BulletList
            items={[
              <span key="1"><strong>Exchange records:</strong> account statements, trade history exports and deposit and withdrawal logs from every exchange you have used, including closed accounts where the data is still retrievable.</span>,
              <span key="2"><strong>Fiat trail:</strong> bank statements showing the transfers that funded purchases, which connect the crypto to taxed, lawful income.</span>,
              <span key="3"><strong>Tax filings:</strong> any returns or assessments that mention crypto, even where the one year rule meant no tax was due.</span>,
              <span key="4"><strong>Origin documents for non-exchange coins:</strong> gift or inheritance paperwork, invoices for work paid in crypto, mining records, and dated wallet transaction histories that match them.</span>,
              <span key="5"><strong>A simple timeline:</strong> one page, written by you, that says when you bought, where, and how you paid. In an origin assessment, a coherent story backed by documents is the whole game.</span>,
            ]}
          />
          <GuideP>
            One connection worth making explicit: privacy tools and records pull in opposite
            directions, and this law is a reminder that both matter. Our guide to{" "}
            <Link href="/learn/how-to-anonymize-bitcoin" className="font-bold text-indigo-700 underline">
              anonymizing Bitcoin
            </Link>{" "}
            makes the same point from the other side: breaking the public trail decides who can
            follow your money, but your own records are what you would actually produce if the
            state ever asks. Keep the second even when you use the first.
          </GuideP>

          <GuideH2>Frequently asked questions</GuideH2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-slate-950">{item.question}</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <GuideH2>Sources</GuideH2>
          <GuideP>
            This article is based on the Bundestag's own documents, the government bill
            (Drucksache 21/8282) and the Finance Committee's amended version adopted on 12
            November 2026 (Drucksache 21/9136), and on reporting that works from the same text,
            including{" "}
            <a href="https://bitcoinmagazine.com/news/german-bundestag-crypto-over-100000" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              Bitcoin Magazine
            </a>
            ,{" "}
            <a href="https://www.coindaro.com/germany-customs-crypto-seizure-law/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              Coindaro's section-by-section explainer
            </a>{" "}
            and{" "}
            <a href="https://blockchainreporter.net/germany-crypto-confiscation-customs-law/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
              BlockchainReporter
            </a>
            . The Bundesrat consent was still outstanding when this article was published on 17
            November 2026; we will update it when the vote is scheduled. Nothing here is legal
            or tax advice.
          </GuideP>
        </article>
      </main>
      <Footer />
    </>
  );
}
