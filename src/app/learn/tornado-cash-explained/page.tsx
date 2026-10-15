import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/learn/tornado-cash-explained`;
const UPDATED = "15 October 2026";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: "Tornado Cash Explained: How the Mixer Works and the Legal Saga (2026)",
  description:
    "October 2026 explainer: how Tornado Cash mixing works, the OFAC sanctions and court battles, the developer trials, and where things stand now. Factual overview, no legal advice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tornado Cash Explained: The Mixer and the Legal Saga",
    description:
      "How Tornado Cash works, why the US sanctioned code itself, and the court rulings that followed.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}/images/learn/privacy-coins/tornado-cash-hero.svg`, alt: "Tornado Cash hero showing a swirling vortex symbolizing transaction mixing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tornado Cash Explained: The Mixer and the Legal Saga",
    description:
      "How the mixer works and the sanctions saga, explained factually.",
  },
};

const faqItems = [
  {
    question: "Is Tornado Cash still sanctioned?",
    answer:
      "No. After the Fifth Circuit ruled in November 2024 that OFAC had overstepped by sanctioning immutable smart contracts, the Treasury removed Tornado Cash from the sanctions list in 2025 and abandoned its appeal. The protocol itself is no longer sanctioned, though criminal cases against individual developers continue separately.",
  },
  {
    question: "What happened to the Tornado Cash developers?",
    answer:
      "Alexey Pertsev was convicted in the Netherlands in May 2024 and sentenced to 64 months for money laundering. Roman Storm was convicted in New York in August 2025 on one count of conspiring to operate an unlicensed money-transmitting business; the jury deadlocked on money laundering and sanctions conspiracy charges, with a retrial scheduled. A third co-founder, Roman Semenov, was charged but remains at large as of our last check.",
  },
  {
    question: "Does using a mixer make me a criminal?",
    answer:
      "Using privacy software is not automatically illegal, but context matters enormously: using a mixer to launder stolen funds or evade sanctions is a crime, and prosecutors have argued that operating or promoting mixers can constitute money transmission offenses. Laws vary by country and are still evolving. This is general information, not legal advice. If you are unsure, consult a qualified attorney.",
  },
  {
    question: "How is Tornado Cash different from Monero?",
    answer:
      "Monero builds privacy into the currency itself: every transaction is private by default. Tornado Cash is a separate smart-contract tool on Ethereum that breaks the link between a deposit and a later withdrawal. Monero protects the whole network; Tornado Cash only protects users who actively use it, and only for the funds they route through it.",
  },
  {
    question: "Are there legal alternatives to Tornado Cash?",
    answer:
      "Yes, newer protocols have tried to build privacy with compliance features from the start. Railgun screens deposits against sanctions lists while keeping transactions private. Privacy Pools (0xbow) lets users prove their funds are not from illicit sources. These compliance-oriented designs are an attempt to offer privacy without repeating Tornado Cash's legal history.",
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

function TimelineEvent({ date, title, detail }: { date: string; title: string; detail: string }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 h-full w-px bg-slate-300" aria-hidden="true" />
      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white" aria-hidden="true" />
      <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700">{date}</p>
      <h3 className="mt-1 text-base font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-7 text-slate-600">{detail}</p>
    </div>
  );
}

export default function TornadoCashPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tornado Cash Explained: How the Mixer Works and the Legal Saga (2026)",
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
              Tornado Cash explained: the mixer and the legal saga
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Reviewed for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A piece of open-source code became the center of a global fight over whether software
              itself can be sanctioned. Here is how the mixer works and what the courts decided.
            </p>
            <div className="mt-6 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4">
              <p className="text-sm leading-7 text-amber-200">
                <strong>Important:</strong> this page is a factual overview for education. It is not
                legal advice, and it does not tell you how to use mixers. Laws differ by country and
                keep changing. Talk to a qualified attorney if you need legal guidance.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>

        <div className="py-10">
          <Section id="what">
            <H2>What Tornado Cash is</H2>
            <div className="relative mx-auto mt-6 aspect-[1200/630] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/learn/privacy-coins/tornado-cash-hero.svg"
                alt="Tornado Cash hero showing a swirling vortex symbolizing transaction mixing"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <P>
              Tornado Cash is a set of smart contracts on Ethereum that mix cryptocurrency to break
              the on-chain link between sender and receiver. You deposit ETH or tokens into a pool,
              wait, then withdraw to a fresh address. Because many users' funds sit in the same
              pool, an outside observer cannot connect your withdrawal to your deposit.
            </P>
            <P>
              The key technical detail: it uses zero-knowledge proofs. When you withdraw, you prove
              you made a valid deposit without revealing which one was yours. The contracts are
              non-custodial (nobody holds your funds but the code) and, crucially, immutable: once
              deployed, even the developers could not change or shut them down. That immutability
              became the center of the legal battle.
            </P>
          </Section>

          <Section id="how-mixer-works">
            <H2>How a mixer works, step by step</H2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 800 480" className="h-auto w-full" role="img" aria-label="Step by step diagram of how a crypto mixer works: three users deposit funds into a shared pool, the funds mix, then each user withdraws to a fresh address with no visible link to their deposit">
                <rect x="0" y="0" width="800" height="480" fill="#f8fafc" />
                <text x="400" y="32" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">How mixing breaks the trail</text>

                <text x="130" y="70" textAnchor="middle" fontSize="13" fontWeight="800" fill="#475569">STEP 1: DEPOSIT</text>
                <g>
                  <circle cx="70" cy="130" r="26" fill="#dbeafe" />
                  <text x="70" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">A</text>
                  <circle cx="130" cy="130" r="26" fill="#dbeafe" />
                  <text x="130" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">B</text>
                  <circle cx="190" cy="130" r="26" fill="#dbeafe" />
                  <text x="190" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">C</text>
                  <text x="130" y="180" textAnchor="middle" fontSize="12" fill="#475569">Three users deposit</text>
                  <text x="130" y="198" textAnchor="middle" fontSize="12" fill="#475569">1 ETH each</text>
                  <path d="M70 156 L300 240 M130 156 L330 240 M190 156 L360 240" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" />
                </g>

                <text x="400" y="70" textAnchor="middle" fontSize="13" fontWeight="800" fill="#6d28d9">STEP 2: THE POOL</text>
                <g>
                  <rect x="300" y="230" width="200" height="110" rx="16" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                  <text x="400" y="262" textAnchor="middle" fontSize="14" fontWeight="800" fill="#5b21b6">Mixer pool</text>
                  <text x="400" y="284" textAnchor="middle" fontSize="12" fill="#6d28d9">3 ETH mixed</text>
                  <text x="400" y="302" textAnchor="middle" fontSize="12" fill="#6d28d9">together</text>
                  <text x="400" y="324" textAnchor="middle" fontSize="11" fill="#7c3aed">zero-knowledge proofs</text>
                  <text x="400" y="384" textAnchor="middle" fontSize="12" fill="#475569">Wait. The longer funds sit,</text>
                  <text x="400" y="402" textAnchor="middle" fontSize="12" fill="#475569">the harder the trail is to follow.</text>
                </g>

                <text x="670" y="70" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">STEP 3: WITHDRAW</text>
                <g>
                  <path d="M500 260 L610 130 M500 290 L670 130 M500 320 L730 130" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" />
                  <circle cx="610" cy="130" r="26" fill="#d1fae5" />
                  <text x="610" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#065f46">X</text>
                  <circle cx="670" cy="130" r="26" fill="#d1fae5" />
                  <text x="670" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#065f46">Y</text>
                  <circle cx="730" cy="130" r="26" fill="#d1fae5" />
                  <text x="730" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#065f46">Z</text>
                  <text x="670" y="180" textAnchor="middle" fontSize="12" fill="#475569">Fresh addresses withdraw.</text>
                  <text x="670" y="198" textAnchor="middle" fontSize="12" fill="#475569">No link to A, B, or C.</text>
                </g>

                <rect x="180" y="424" width="440" height="36" rx="8" fill="#fef3c7" />
                <text x="400" y="447" textAnchor="middle" fontSize="12" fontWeight="700" fill="#92400e">Observers see deposits and withdrawals, but cannot match them.</text>
              </svg>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              The mixer model: deposits pool together, then withdrawals go to fresh addresses. The
              cryptographic proof confirms validity without revealing which deposit matches which
              withdrawal.
            </p>

            <P>
              Note the weakness: the privacy depends on the crowd. If only three people ever use a
              pool, matching deposits to withdrawals is trivial. Large, busy pools with long waiting
              times offer far stronger privacy than small, quiet ones. Timing analysis and
              distinctive amounts can also leak information, which is why serious users deposit
              standard denominations and wait.
            </P>
          </Section>

          <Section id="legal-saga">
            <H2>The legal saga: what happened</H2>
            <P>
              This is the part that made Tornado Cash famous far beyond crypto. Here is the factual
              timeline.
            </P>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <TimelineEvent
                date="August 2022"
                title="OFAC sanctions Tornado Cash"
                detail="The US Treasury's sanctions office places Tornado Cash on its sanctions list, arguing North Korean hackers laundered stolen funds through it. For the first time, the target is autonomous code rather than people or companies."
              />
              <TimelineEvent
                date="2022 to 2023"
                title="Developers arrested"
                detail="Alexey Pertsev is arrested in the Netherlands. Roman Storm and Roman Semenov are charged in the US. The crypto industry erupts over whether writing open-source code can be a crime."
              />
              <TimelineEvent
                date="May 2024"
                title="Pertsev convicted"
                detail="A Dutch court sentences Pertsev to 64 months for money laundering, ruling that building the tool with knowledge of its criminal use was enough."
              />
              <TimelineEvent
                date="November 2024"
                title="US appeals court vacates the sanctions"
                detail="The Fifth Circuit rules that OFAC overstepped: immutable smart contracts are not property of a sanctioned person and cannot be sanctioned. A landmark decision for code as speech."
              />
              <TimelineEvent
                date="2025"
                title="Treasury drops the sanctions"
                detail="Rather than fight the ruling, the Treasury removes Tornado Cash from the sanctions list and abandons its appeal. Related lawsuits are dismissed. The protocol itself is legally clear in the US."
              />
              <TimelineEvent
                date="August 2025"
                title="Storm convicted on one count"
                detail="A New York jury convicts Roman Storm of conspiring to operate an unlicensed money-transmitting business but deadlocks on the more serious money laundering and sanctions conspiracy charges."
              />
              <TimelineEvent
                date="October 2026"
                title="FinCEN withdraws mixer rules"
                detail="US regulators quietly drop a 2023 proposal that would have imposed new reporting requirements on crypto mixers, a further softening of the official stance."
              />
              <TimelineEvent
                date="April 2027 (scheduled)"
                title="Storm retrial"
                detail="A retrial on the deadlocked money laundering and sanctions conspiracy counts is scheduled, unless the judge grants Storm's pending acquittal motion first."
              />
            </div>
            <P>
              The split outcome is the honest summary: the <strong className="text-slate-900">code</strong> won
              in court, but the <strong className="text-slate-900">developers</strong> are still
              fighting criminal cases. Writing privacy software is not clearly illegal in the US, but
              it is clearly not safe either.
            </P>
          </Section>

          <Section id="alternatives">
            <H2>What came after: compliance-oriented privacy</H2>
            <P>
              The Tornado Cash saga pushed builders toward a middle path: privacy for users, with
              built-in safeguards against illicit use. Railgun screens deposits against sanctions
              lists while keeping transactions private, and has processed billions in volume. Privacy
              Pools lets users cryptographically prove their funds are clean without revealing their
              identity. The Ethereum Foundation itself is funding privacy research that includes both
              compliance-friendly and anonymity-preserving tools.
            </P>
            <P>
              Whether regulators accept this compromise will shape the next decade of financial
              privacy. For the broader landscape, see our{" "}
              <Link href="/learn/privacy-coins" className="font-bold text-indigo-700 hover:underline">
                privacy coins hub
              </Link>{" "}
              and our comparison of{" "}
              <Link href="/learn/what-is-monero" className="font-bold text-indigo-700 hover:underline">
                Monero
              </Link>{" "}
              and{" "}
              <Link href="/learn/what-is-zcash" className="font-bold text-indigo-700 hover:underline">
                Zcash
              </Link>
              .
            </P>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
