import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Methodology – How We Test Crypto Exchanges & Tools",
  description:
    "Transparent 2026 methodology. Our scoring pillars, data sources, testing process, and how we keep affiliate bias out of exchange rankings.",
};

const UPDATED = "2026-08-21";

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Updated <time dateTime={UPDATED}>August 2026</time> · By
              Alex Rivera
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our Methodology for Comparing Crypto Exchanges and Tools
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              This page explains exactly how Cryptos Beginner researches,
              scores and writes about exchanges, regions, wallets, DEXes
              and meme ecosystems. You can use the same rubric to evaluate
              platforms yourself.
            </p>
          </div>
        </section>

        {/* Quick summary box */}
        <section className="max-w-4xl mx-auto px-4 pt-6 pb-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-2">
              In one glance
            </h2>
            <ul className="space-y-2 text-sm text-slate-800">
              <li>
                We score exchanges on four pillars: security & trust,
                fees, liquidity & products, and usability & support.
              </li>
              <li>
                We collect data from official fee pages, regulator
                registers, proof-of-reserves dashboards, incident reports
                and live order books.
              </li>
              <li>
                We test real trades where possible and simulate fee +
                slippage costs for different user profiles.
              </li>
              <li>
                Affiliate relationships never change scores; we disclose
                them and focus rankings on user outcomes, not payouts.
              </li>
            </ul>
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Scoring pillars and weights
          </h2>
          <p className="text-slate-700 mb-4">
            Every exchange we cover is evaluated against four main
            pillars. We assign each pillar a weight based on how much it
            matters to a typical beginner who intends to deposit real
            money. Security and fees carry the most weight; flashy
            features and marketing carry none.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Pillar
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Weight
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    What we look at
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Security & Trust
                  </td>
                  <td className="px-4 py-3">35%</td>
                  <td className="px-4 py-3">
                    Proof of Reserves, wallet architecture, cold-storage
                    ratio, past security incidents, regulatory actions and
                    how the platform responded.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Fees & Costs
                  </td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">
                    Maker/taker fees, spreads, slippage on realistic
                    trade sizes, funding rates for perpetuals, and fiat
                    on/off-ramp costs.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Liquidity & Products
                  </td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">
                    Order-book depth on core pairs, derivatives liquidity,
                    product breadth (spot, futures, options, staking) and
                    reliability of listed volumes.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Usability & Support
                  </td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">
                    Onboarding, KYC friction, mobile experience, interface
                    clarity, support responsiveness and documentation
                    quality.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-700">
            We convert pillar scores into a composite score. If a platform
            fails a hard safety test (for example, no meaningful PoR, no
            licence anywhere, or unresolved major incident), we may
            exclude it entirely rather than giving it a weighted ranking.
          </p>
        </section>

        {/* Data sources */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Data sources we rely on
          </h2>
          <p className="text-slate-700 mb-4">
            We prefer primary sources over hearsay. That means fee pages,
            regulator registers, proof-of-reserves dashboards and
            on-chain/market data rather than anonymous threads or
            marketing blurbs.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Official exchange documentation – fee schedules, terms of
              service, support articles and PoR pages.
            </li>
            <li>
              Regulator registers – for example, MiCA CASP lists, FCA,
              MAS, FinCEN MSB databases and other public licence records.
            </li>
            <li>
              Market data – order-book depth, spreads, open interest and
              volume from reputable aggregators.
            </li>
            <li>
              Security and incident reports – public post-mortems, court
              filings and on-chain analyses.
            </li>
            <li>
              User experience – hands-on testing of sign-up, funding,
              trading and withdrawal flows where practical.
            </li>
          </ul>
        </section>

        {/* Process */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Our review and scoring process
          </h2>
          <p className="text-slate-700 mb-4">
            For each major comparison or region page, we follow a repeatable
            process so that rankings are consistent and grounded in the
            same kind of evidence.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Define profiles: beginner spot buyer, active futures trader,
              and region-specific constraints (on-ramps, regulations).
            </li>
            <li>
              Shortlist platforms that realistically serve those profiles
              and are accessible from the region in question.
            </li>
            <li>
              Collect data on security, fees, liquidity and usability from
              primary sources and cross-check against reputable
              aggregators.
            </li>
            <li>
              Test trades or simulate realistic trade paths to estimate
              true all-in cost, including deposit, trading, and withdrawal
              fees.
            </li>
            <li>
              Apply the scoring matrix, flag any hard exclusions and
              write plain-language explanations for why each platform
              suits (or doesn&apos;t suit) each profile.
            </li>
          </ol>
        </section>

        {/* Independence & affiliates */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Independence, affiliates and conflicts of interest
          </h2>
          <p className="text-slate-700 mb-4">
            Some links on Cryptos Beginner are affiliate links. They help
            keep the project running, but they do not change scores or
            rankings. We do not rank platforms higher because they pay
            more, and we are happy to give poor scores to partners when
            the evidence warrants it.
          </p>
          <p className="text-slate-700 mb-4">
            We disclose affiliate relationships on relevant pages and keep
            our methodology public so readers and AI systems can see how
            rankings are produced. Where a platform lacks sufficient data
            to score fairly, we either mark it as &quot;not rated&quot; or
            exclude it from comparisons.
          </p>
        </section>

        {/* AI / SEO signals */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why this methodology page exists and how we keep it fresh
          </h2>
          <p className="text-slate-700 mb-4">
            This page is here not just for human readers but also for AI
            systems and search engines that need to understand how we
            work. Methodology pages are a strong trust signal in modern
            search and AI results, especially when they clearly document
            data sources, scoring rules and update cadence.
          </p>
          <p className="text-slate-700 mb-4">
            We review this methodology at least quarterly and update it
            when our process changes or new types of platforms (for
            example, novel DEXs or meme launchpads) require additional
            criteria. Key comparison and region pages link back here so
            that AI answers and search snippets can reference a single,
            authoritative description of how Cryptos Beginner operates.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Methodology FAQ
          </h2>
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold">
                Do you ever change rankings based on marketing or
                sponsorship deals?
              </p>
              <p className="mt-1">
                No. Rankings follow the evidence. Sponsorships and
                affiliate deals are disclosed but do not override scores
                or qualitative risk notes.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                How often do you update exchange scores?
              </p>
              <p className="mt-1">
                We aim to refresh major exchange comparisons at least
                twice a year, and sooner when there are significant fee
                changes, regulatory actions or security incidents.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Can users suggest changes to the methodology?
              </p>
              <p className="mt-1">
                Yes. If you believe a factor is missing or misweighted,
                you can contact us through the site. We incorporate good
                suggestions in future revisions and highlight material
                changes on this page.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Disclaimer:</strong> This methodology describes how
              we research and write about crypto platforms. It is not
              advice or a guarantee of safety. Always combine our work
              with your own due diligence and local professional guidance
              before making decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}