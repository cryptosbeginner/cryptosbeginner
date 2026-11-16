import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/how-to-anonymize-bitcoin`;
const UPDATED = "16 November 2026";
const UPDATED_ISO = "2026-11-16";
const IMG = "/images/learn/bitcoin-privacy";

export const metadata: Metadata = {
  title: "Can You Anonymize Bitcoin? CoinJoin, Lightning, Monero and Liquid Rated (2026)",
  description:
    "November 2026 explainer: the four methods people use to break Bitcoin's public trail, CoinJoin, a Lightning round trip, a Monero round trip and a Liquid round trip, how each one works, what it costs, and how well it actually works after the 2024 to 2026 crackdowns.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Can You Anonymize Bitcoin? Four Methods, Honestly Rated",
    description:
      "CoinJoin, Lightning, Monero and Liquid can all break Bitcoin's trail, to very different degrees. Here is how each works in 2026, and where each one leaks.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMG}/hero-problem.png`, alt: "Diagram of the Bitcoin privacy problem: a KYC exchange purchase links a name to a chain of addresses with visible amounts, ending at a merchant who can see the whole trail" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can You Anonymize Bitcoin? Four Methods, Honestly Rated",
    description:
      "CoinJoin, Lightning, Monero and Liquid round trips explained and rated, with the 2026 status of every major tool.",
  },
};

const faqItems = [
  {
    question: "Is it illegal to anonymize your own Bitcoin?",
    answer:
      "Using privacy software on your own coins is not banned in most countries, and financial privacy itself is legal. Laundering money, evading sanctions and hiding criminal proceeds are illegal everywhere, and prosecutors have gone after the people running privacy services: Samourai Wallet's founders pleaded guilty in July 2025 to running an unlicensed money transmitting business and were sentenced that November. Rules also differ by country and are tightening in the EU, where from July 2027 regulated platforms are barred from offering accounts that anonymize transactions. This is general information, not legal advice.",
  },
  {
    question: "Does CoinJoin still work in 2026?",
    answer:
      "Yes, but the tools changed. Samourai's Whirlpool is gone, Wasabi's original coordinator shut down in June 2024 and the wallet now uses independent coordinators you choose yourself, and the original JoinMarket software was archived in April 2026 with a warning not to use it. The maintained routes are JoinMarket NG (with the Jam interface), Wasabi with a third-party coordinator, Ginger Wallet, and the Ashigaru revival of Whirlpool. All are more technical than the 2023 versions.",
  },
  {
    question: "Which method breaks the trail best?",
    answer:
      "The Monero round trip. It is the only method where the middle leg is private by protocol: sender, receiver and amount are all hidden on Monero's ledger, so there is nothing public to correlate. Its weak points are the two swaps at the edges, where a service sees an amount and a timestamp. CoinJoin ranks second if you remix and handle the outputs carefully. A Lightning round trip hides you from the public chain but not from the swap service. A Liquid round trip hides amounts only, and the transaction graph stays public.",
  },
  {
    question: "Can an exchange tell that coins were CoinJoined?",
    answer:
      "Usually, yes. A CoinJoin is a recognizable pattern on the blockchain: many inputs, many equal outputs. Some exchanges ask about the source of funds or restrict accounts that deposit recently mixed coins, and policies vary and change. Coins that arrive from a Lightning or Monero swap look like an ordinary payment from whoever sent them, but the sending service may still have records, and an exchange can always ask questions later. Assume anything you do can be examined, and keep your own records.",
  },
  {
    question: "Is using a fresh address for every payment enough?",
    answer:
      "It helps, and every good wallet does it by default, but it is hygiene, not anonymity. The moment two of your addresses appear as inputs in the same transaction, analysis software treats them as one wallet. Change addresses, round payment amounts and reused deposit addresses link the rest. Fresh addresses stop a casual looker; they do not break a funded trail, which is what the four methods in this guide are for.",
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mt-3 text-base leading-8 text-slate-600">{children}</li>;
}

function Figure({ src, alt, tall }: { src: string; alt: string; tall?: boolean }) {
  return (
    <figure className="mt-6">
      <div className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 ${tall ? "aspect-[1600/1090]" : "aspect-[1600/900]"}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
      </div>
    </figure>
  );
}

function Verdict({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
      <p className="text-base leading-8 text-slate-700">{children}</p>
    </div>
  );
}

export default function HowToAnonymizeBitcoinPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can You Anonymize Bitcoin? CoinJoin, Lightning, Monero and Liquid Rated (2026)",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Learn · privacy</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Can you anonymize Bitcoin? Four methods, honestly rated
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <div className="mt-4">
              <AuthorByline updated={UPDATED} />
            </div>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A short post by Bitcoin security educator Schnuartz listed four ways to anonymize
              Bitcoin: CoinJoin, swapping to Lightning and back, swapping to Monero and back, and
              swapping to Liquid and back. The list is real. What it leaves out is everything that
              decides whether the trick works: what each method actually hides, what it costs, and
              what the 2024 to 2026 crackdowns did to the tools. This guide fills that in, with the
              status of every method checked in November 2026.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <div className="py-10">
          <Section id="short-version">
            <H2>The short version</H2>
            <ul className="mt-2 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">All four methods work, none makes you anonymous.</strong>{" "}
                Each one breaks the public trail between the Bitcoin you have and the Bitcoin you end
                up with. None of them erases the record of you buying it, which for most people is
                the link that matters.
              </Li>
              <Li>
                <strong className="text-slate-900">Strongest: the Monero round trip.</strong> Monero
                hides sender, receiver and amount by protocol, so the middle leg leaves nothing
                public to follow. The weak points are the two swaps at the edges.
              </Li>
              <Li>
                <strong className="text-slate-900">CoinJoin still works, but 2023 guides are dangerous.</strong>{" "}
                Samourai is gone and its founders are in prison, Wasabi's coordinator is shut, and
                the original JoinMarket code is archived with a do-not-use warning. The surviving
                tools are named below.
              </Li>
              <Li>
                <strong className="text-slate-900">Lightning is fast and cheap, but the swap service sees both sides,</strong>{" "}
                and its biggest service, Boltz, suspended swaps in August 2026.
              </Li>
              <Li>
                <strong className="text-slate-900">Liquid is the weakest of the four for this job.</strong>{" "}
                It hides amounts, not the transaction graph, and you wait about 17 hours to get in.
              </Li>
            </ul>
          </Section>

          <Section id="how-tracing-works">
            <H2>First, what you are hiding from</H2>
            <Figure
              src={`${IMG}/hero-problem.png`}
              alt="Diagram of the Bitcoin privacy problem: a KYC exchange purchase links a name to a chain of addresses with visible amounts, ending at a merchant who can see the whole trail"
            />
            <P>
              Bitcoin's ledger is public and permanent. Every transaction shows its inputs, its
              outputs and its amounts, forever, to anyone with a browser. Analysis firms turn that
              into identity with two heuristics and one database. The first heuristic is
              common-input ownership: if a transaction spends from five addresses at once, those
              five addresses almost certainly belong to one wallet, because spending them together
              required all five private keys. The second is change detection: pay 0.61 BTC for
              something that costs 0.4 and the leftover output that returns to a fresh address in
              the same transaction is probably yours too. Apply both across years of transactions
              and millions of addresses collapse into clusters, one per wallet or service.
            </P>
            <P>
              The database is the exchanges. A cluster is just a shape until one address in it
              touches a regulated exchange, at which point the shape gets a name, an email and a
              passport scan. That is the on-ramp problem, and it is why the honest word for
              everything in this guide is <em>trail-breaking</em>, not anonymity. The four methods
              below attack the trail in the middle. The purchase record at the start is yours to
              live with, and no technique in this guide deletes it. Anyone who sells you a method
              that promises otherwise is selling you something.
            </P>
            <P>
              Why bother at all, then? Because the trail is what strangers use. Once your name is
              attached to a cluster, anyone you pay can walk backwards through your balances and
              salary, and anyone who sees a large balance can find a target. Breaking the forward
              trail is a legitimate safety measure, the same reason you would not want your bank
              statements pinned to your front door. It is not a cloak for crime, and used that way
              it tends to fail anyway, because investigators start from the ends, not the middle.
            </P>
          </Section>

          <Section id="coinjoin">
            <H2>Method 1: CoinJoin, share one big transaction</H2>
            <Figure
              tall
              src={`${IMG}/method-coinjoin.png`}
              alt="Three step diagram of a CoinJoin: several users contribute coins to one shared transaction and each receives an equal output, with a 2026 status note on Samourai, Wasabi and JoinMarket"
            />
            <P>
              A CoinJoin is a transaction built by strangers together. Each participant contributes
              inputs, each participant receives outputs of identical size, and everyone signs only
              their own part, so no coordinator or fellow participant can steal anything. The trick
              is aimed straight at the first heuristic: a transaction with forty inputs no longer
              implies one owner, and forty identical 0.1 BTC outputs cannot be matched to their
              owners better than a one-in-forty guess. Run the outputs through a second and third
              round, a remix, and the guessing compounds. Whirlpool, the strictest design, used
              fixed pools of 0.001, 0.01, 0.05 and 0.5 BTC with five participants per round, so
              every output in a pool was perfectly interchangeable.
            </P>
            <P>
              What CoinJoin does not hide is almost as important. Amounts that do not fit the
              denominations stay linkable: deposit 0.73 BTC into a 0.5 pool and the remainder needs
              handling that can point back at you. And the privacy is perishable. Merge a mixed
              coin with an unmixed one in a later payment, or spend two mixed outputs together in a
              way that recombines them, and an analyst can re-stitch what you paid to separate.
              CoinJoin is a discipline, not a button.
            </P>
            <P>
              The tooling is where 2026 readers get hurt, because the famous names are gone or
              changed. Samourai Wallet's founders were arrested in April 2024, pleaded guilty in
              July 2025 to conspiring to operate an unlicensed money transmitting business, and
              were sentenced in November 2025 to five and four years, with a forfeiture order of
              about $237.8 million. Whirlpool died with the service, although a separate project,
              Ashigaru, revived the design in June 2025 behind its own coordinator. zkSNACKs shut
              down Wasabi's coordinator on 1 June 2024; the wallet lives on as a community project
              and you now supply an independent coordinator yourself, with rounds that charge no
              coordinator fee. Ginger Wallet, a Wasabi fork with its own coordinator, charges 0.3%
              on inputs above 0.03 BTC and excludes US users in its terms. JoinMarket, the design
              with no coordinator at all, survived untouched, but its original software was
              archived in April 2026 with an explicit warning that it has vulnerabilities that will
              not be fixed. The maintained implementation is JoinMarket NG, with the Jam web
              interface in beta. If a guide tells you to download the old JoinMarket or open
              Samourai, close the guide.
            </P>
            <Verdict>
              <strong>Verdict:</strong> a real break, scored 3 of 5. It keeps you in Bitcoin, costs
              little more than mining fees plus small coordinator or maker fees, and works today if
              you use the maintained tools. It asks the most of you afterwards: careless spending
              undoes it, and the CoinJoin pattern itself is visible on chain, which some exchanges
              treat as a reason to ask questions.
            </Verdict>
          </Section>

          <Section id="lightning">
            <H2>Method 2: the Lightning round trip</H2>
            <Figure
              tall
              src={`${IMG}/method-lightning.png`}
              alt="Three step diagram of a Lightning round trip: submarine swap in, onion routed payment across Lightning nodes, reverse swap out to a fresh address, with notes on who sees what and the Boltz suspension"
            />
            <P>
              Lightning payments do not touch the blockchain at all while they move, and they are
              onion-routed: a payment is wrapped in layers so each node along the path can see only
              the node before it and the node after it, never the sender, the receiver and the
              amount in one place. To use that as a trail-breaker you need a way in and a way out,
              and that is the submarine swap. In a normal submarine swap you lock on-chain BTC into
              a hash time-locked contract and the service pays your Lightning invoice; the secret
              that settles the Lightning payment is the same secret that lets the service claim your
              locked coins, so the exchange is atomic: both legs complete, or both refund. A
              reverse submarine swap runs it backwards and pays out to any on-chain address you
              name. On the public ledger, the deposit and the payout are two ordinary, unrelated
              transactions.
            </P>
            <P>
              The catch is the counterparty. The swap service necessarily sees both sides of its
              own swap: your locked coins in, your payout address out. Running the service over Tor
              hides your IP address; it does not hide the link the service itself processed. Your
              channel partners on Lightning likewise see your channel balances. Amounts are also
              capped by available liquidity: the category's standard service, Boltz, charged 0.1%
              and accepted swaps between 25,000 and 25,000,000 sats, and large payments still fail
              or split when routes cannot carry them.
            </P>
            <P>
              Then 2026 happened to this method too. On 3 August 2026 Boltz suspended all of its
              swaps, on-chain, Lightning and Liquid, saying months of AI-assisted attacks had
              outpaced its small team's ability to patch. Boltz was plumbing, not just a website:
              wallets such as Aqua, Bull Bitcoin and Zeus routed ordinary users through it without
              naming it. What remains is Lightning Labs' Loop, built mainly for node operators, the
              peer-to-peer Peerswap, and SATS Routing, an unaffiliated fork of the Boltz model that
              launched after the shutdown with per-swap limits of 50,000 to 5,000,000 sats at
              launch. The technique is unchanged; the front doors are fewer and newer, which is
              itself a risk factor worth weighing.
            </P>
            <Verdict>
              <strong>Verdict:</strong> scored 3 of 5. The fastest and cheapest break on this list,
              minutes and about 0.1% plus network fees when services are running, and strong
              against anyone watching only the public chain. Weak against the one party who
              matters most in the design, the swap service, and currently short on established
              services.
            </Verdict>
          </Section>

          <Section id="monero">
            <H2>Method 3: the Monero round trip</H2>
            <Figure
              tall
              src={`${IMG}/method-monero.png`}
              alt="Three step diagram of a Monero round trip: swap Bitcoin to XMR, move it between your own wallets where sender, receiver and amount are hidden, then swap back to a fresh Bitcoin address"
            />
            <P>
              Monero is the only entry on the list where privacy is the protocol rather than a
              procedure. Every Monero transaction mixes the real input among decoys in a ring
              signature, pays a one-time stealth address that cannot be linked to the receiver's
              public address, and encrypts the amount with RingCT. There is no public trail inside
              Monero to follow, not a weakened one, none. So the round trip is simple in outline:
              swap BTC for XMR, send the XMR to a second wallet of your own, then swap back to BTC
              paid out to a fresh address. The two Bitcoin transactions share no address, no amount
              fingerprint on any public ledger, and no counterparty in common unless you reuse the
              same swap service twice.
            </P>
            <P>
              The work has moved to the edges. Each swap sees one amount and one timestamp, and an
              amount that goes in and comes back out nearly unchanged, minutes apart, is a
              correlation an analyst can make from the services' records or from watching the
              services' wallets. The Monero leg in the middle stays opaque; the doors at either end
              are where this method leaks. Treat the edges with the same respect you would give the
              CoinJoin outputs: the middle is strong precisely so that sloppy edges stand out.
            </P>
            <P>
              Getting XMR is the practical hurdle, because the big exchanges left. OKX delisted
              Monero on 5 January 2024, Binance followed on 20 February 2024, and Kraken withdrew
              it region by region: Ireland and Belgium in June 2024, the whole EEA on 31 October
              2024, Canada in September 2025. Kraken still lists it in some regions, and the
              Monero project's own directory now points to accountless swap services (SimpleSwap,
              ChangeNOW, Godex and StealthEX among them), peer-to-peer markets such as Haveno's
              RetoSwap network and Bisq, and atomic swaps, where EigenWallet swaps BTC to XMR and
              BasicSwap works in both directions with no service holding funds at all. Atomic swaps
              and peer-to-peer markets remove the record-keeping middleman entirely, at the price
              of thinner liquidity and more technical setup. Expect the two swaps together to cost
              noticeably more than an ordinary exchange trade once spreads are counted, and expect
              the whole trip to take an hour or two with confirmations. In the EU the direction of
              travel is explicit: from 10 July 2027 the Anti-Money Laundering Regulation bars
              regulated platforms from keeping accounts that allow anonymization at all.
            </P>
            <Verdict>
              <strong>Verdict:</strong> scored 5 of 5, the strongest break available, because it is
              the only method whose middle leg is private by mathematics rather than by a
              coordinator's, federation's or service's behavior. Its costs are practical, not
              cryptographic: shrinking exchange access, swap spreads, and edges that punish hurry.
            </Verdict>
          </Section>

          <Section id="liquid">
            <H2>Method 4: the Liquid round trip</H2>
            <Figure
              tall
              src={`${IMG}/method-liquid.png`}
              alt="Three step diagram of a Liquid round trip: peg in with 102 confirmations, transact with blinded amounts on the Liquid sidechain, peg out to a fresh address, with notes on federation trust"
            />
            <P>
              Liquid is a Bitcoin sidechain run by a federation of companies, 87 members as of
              early 2026, with 15 of them, the functionaries, signing blocks in an 11-of-15
              arrangement and guarding the bitcoin that backs the sidechain one to one. You peg in
              by sending BTC to a federation address and, after 102 Bitcoin confirmations, roughly
              17 hours, claim the same amount as L-BTC. You peg out by burning L-BTC and having a
              federation member release BTC on the main chain; services such as SideSwap run both
              directions for a 0.1% fee, and swaps between Liquid and Lightning exist for smaller,
              faster hops.
            </P>
            <P>
              Inside Liquid, every transaction uses Confidential Transactions by default, which
              blind the amount and the asset type so that only sender and receiver can see them.
              That is a genuine improvement over Bitcoin's glass ledger, and for traders moving
              funds between exchanges it is the entire point. But read the fine print of the
              design: addresses and the transaction graph on Liquid are still public. An observer
              cannot see how much moved, yet can see which address paid which, and your peg-in and
              peg-out both happen on the Bitcoin chain in the clear. Peg 2 BTC in on Monday and
              peg about 2 BTC out on Tuesday, and the blinded middle has not stopped anyone from
              making the obvious guess. Liquid hides the numbers on the parcels; it does not hide
              that the parcels traveled, or between whom.
            </P>
            <P>
              There is also a trust trade the other three methods mostly avoid. Your L-BTC is a
              claim on bitcoin held by the federation's multisig, and peg-outs are processed by
              federation members rather than by you unilaterally. The federation has operated since
              2018 without a peg failure, and its members are named companies with reputations to
              lose, but the model is a committee, not a proof.
            </P>
            <Verdict>
              <strong>Verdict:</strong> scored 2 of 5 for trail-breaking. As a confidentiality
              tool for amounts it works exactly as advertised; as an anonymity method it is the
              weakest here, slow to enter, graph-visible throughout, and dependent on the
              federation honoring the peg.
            </Verdict>
          </Section>

          <Section id="scorecard">
            <H2>All four, side by side</H2>
            <Figure
              src={`${IMG}/scorecard.png`}
              alt="Scorecard comparing CoinJoin, a Lightning round trip, a Monero round trip and a Liquid round trip on trail break strength, cost, speed and main weakness"
            />
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm leading-6">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-950">
                    <th className="px-4 py-3 font-black">Method</th>
                    <th className="px-4 py-3 font-black">Trail break</th>
                    <th className="px-4 py-3 font-black">Typical cost</th>
                    <th className="px-4 py-3 font-black">Speed</th>
                    <th className="px-4 py-3 font-black">Main weakness</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">CoinJoin</td>
                    <td className="px-4 py-3">3 of 5</td>
                    <td className="px-4 py-3">Mining fees, plus 0% to 0.3% coordinator or maker fees</td>
                    <td className="px-4 py-3">Hours, longer with remixes</td>
                    <td className="px-4 py-3">Post-mix mistakes undo it; the pattern is visible</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Lightning round trip</td>
                    <td className="px-4 py-3">3 of 5</td>
                    <td className="px-4 py-3">About 0.1% plus network fees</td>
                    <td className="px-4 py-3">Minutes</td>
                    <td className="px-4 py-3">The swap service sees both sides; Boltz suspended since Aug 2026</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Monero round trip</td>
                    <td className="px-4 py-3">5 of 5</td>
                    <td className="px-4 py-3">Swap spreads on both legs</td>
                    <td className="px-4 py-3">About 1 to 2 hours</td>
                    <td className="px-4 py-3">The swap edges: amounts and timing; delistings shrink access</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Liquid round trip</td>
                    <td className="px-4 py-3">2 of 5</td>
                    <td className="px-4 py-3">0.1% peg fee via SideSwap</td>
                    <td className="px-4 py-3">About 17 hours to peg in</td>
                    <td className="px-4 py-3">Amounts hidden, graph public; federation trust</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              One honest footnote to the whole table: the trail break column is scored against an
              observer working from public data, a chain analysis firm, a nosy counterparty, a data
              broker. Against the services you personally used, every score drops, because each
              service holds its own records. That asymmetry is the real lesson of the list this
              guide started from: these methods decide <em>who</em> can follow your money, they do
              not make following it impossible for everyone.
            </P>
          </Section>

          <Section id="risks">
            <H2>The risks the short posts skip</H2>
            <ul className="mt-2 list-disc pl-6">
              <Li>
                <strong className="text-slate-900">Exchanges ask questions.</strong> A CoinJoin is
                visible as a pattern, and some exchanges restrict or interrogate deposits with
                recent mixing history. Coins returning from swaps can draw source-of-funds checks
                too. Policies differ per platform and change without notice, so never route money
                you urgently need through any of these methods.
              </Li>
              <Li>
                <strong className="text-slate-900">Tax records are still yours.</strong> In many
                countries each swap is a taxable disposal, including BTC to XMR and back. Privacy
                from the public is not privacy from your tax authority, and reconstructing records
                afterwards is far harder than keeping them as you go.
              </Li>
              <Li>
                <strong className="text-slate-900">The swap layer is scam country.</strong>{" "}
                Accountless swap sites are trivial to clone, and fake versions harvest deposits.
                Reach services through the Monero project's directory, the tool's own
                documentation or your wallet's built-in integration, never through a search ad,
                and test with a small amount first.
              </Li>
              <Li>
                <strong className="text-slate-900">Everything here is irreversible.</strong> A
                CoinJoin sent to a bad coordinator choice, a submarine swap abandoned mid-flight, a
                peg sent to a wrong address: none of it has a support desk. Small test amounts are
                not paranoia, they are the procedure.
              </Li>
              <Li>
                <strong className="text-slate-900">The law is moving.</strong> The Samourai
                sentences tell service operators exactly where US prosecutors stand, and the EU's
                2027 rule tells platforms where Europe stands. Using privacy tools on your own
                coins and running them for others are very different legal positions, and this
                guide describes the first, as information only.
              </Li>
            </ul>
          </Section>

          <Section id="verdict">
            <H2>So, can you anonymize Bitcoin?</H2>
            <P>
              Not in the strong sense the word promises. You can, today, break the public trail
              between your named purchase and your later spending, and the four methods do it to
              measurably different degrees: Monero by protocol, CoinJoin by crowd, Lightning by
              leaving the ledger, Liquid by blinding the amounts. What survives every one of them
              is the ends: the exchange that sold you the coins knows, the services you swapped
              through know their half, and the person you finally pay sees a payment arrive. Used
              with that understanding, these are reasonable tools for keeping your finances off
              public display. Used with any other understanding, they are a way to pay fees for a
              false sense of security.
            </P>
            <P>
              If you want the broader landscape, read{" "}
              <Link href="/learn/privacy-coins-vs-mixers" className="font-bold text-indigo-700 underline">
                privacy coins vs mixers
              </Link>{" "}
              for how Monero's built-in privacy compares with add-on mixers,{" "}
              <Link href="/learn/what-is-monero" className="font-bold text-indigo-700 underline">
                what is Monero
              </Link>{" "}
              for the protocol itself,{" "}
              <Link href="/learn/what-are-privacy-swaps" className="font-bold text-indigo-700 underline">
                what are privacy swaps
              </Link>{" "}
              for the swap layer in depth, and{" "}
              <Link href="/learn/tornado-cash-explained" className="font-bold text-indigo-700 underline">
                Tornado Cash explained
              </Link>{" "}
              for the legal saga that reshaped this whole field.
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-base leading-8 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="sources">
            <H2>Sources and further reading</H2>
            <P>
              Tool status, fees and dates in this guide were checked in November 2026 against the
              projects' own pages and reporting close to the events. The Samourai pleas and
              sentences are US Department of Justice announcements (July and November 2025). The
              CoinJoin tool status reflects the projects' own repositories and November 2026 status
              checks at{" "}
              <a href="https://knowingbitcoin.com/lesson/coinjoin-explained/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Knowing Bitcoin
              </a>{" "}
              and{" "}
              <a href="https://coldcard.com/learn/bitcoin-privacy/what-is-coinjoin" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Coldcard's CoinJoin explainer
              </a>
              . Liquid mechanics follow{" "}
              <a href="https://github.com/blockstream/docs/blob/HEAD/liquid/technical_overview.rst" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Blockstream's Liquid documentation
              </a>{" "}
              and{" "}
              <a href="https://atlas21.com/guide-to-using-the-liquid-network/" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Atlas21's Liquid guide
              </a>
              . Submarine swap mechanics follow{" "}
              <a href="https://github.com/boltzexchange/boltz-backend/blob/HEAD/docs/lifecycle.md" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Boltz's own lifecycle documentation
              </a>
              , and the August 2026 suspension and the SATS Routing fork are covered at{" "}
              <a href="https://massmux.org/p/a-new-boltzs-fork-is-running-sats" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">
                Massmux
              </a>
              . Monero routes and delisting dates follow the Monero project's merchant directory
              and the exchanges' own delisting notices. Nothing here is legal, tax or financial
              advice.
            </P>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
