import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Beste Krypto-Börsen in der Schweiz 2026",
  description:
    "Krypto-Börsen in der Schweiz vergleichen: FINMA, Schweizer Geldwäscheregeln, DLT-Regulierung, Bitcoin-Steuern, Vermögenssteuer und sichere Verwahrung.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/de/schweiz",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/switzerland",
      de: "https://www.cryptosbeginner.com/de/regionen/schweiz",
      "x-default":
        "https://www.cryptosbeginner.com/regions/switzerland",
    },
  },
};

const UPDATED = "2026-08-21";

export default function SwitzerlandGermanPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex flex-wrap gap-3 text-sm mb-4">
              <Link
                href="/regions/switzerland"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Deutsch</span>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Aktualisiert am{" "}
              <time dateTime={UPDATED}>21. August 2026</time> · Von
              Alex Rivera
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Beste Krypto-Börsen in der Schweiz 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Die Schweiz hat einen eigenständigen Krypto-Rechtsrahmen
              und ist nicht Teil von MiCA. FINMA, das Schweizer
              Geldwäschereigesetz und das DLT-Recht sind die wichtigsten
              Bezugspunkte. Private Kursgewinne können steuerfrei sein,
              während Krypto-Bestände der kantonalen Vermögenssteuer
              unterliegen können. Dieser Ratgeber vergleicht Schweizer
              und internationale Plattformen.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              Kurz erklärt
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                Die Schweiz ist nicht Teil des EU-MiCA-Systems. FINMA,
                Schweizer AML-Regeln und das DLT-Recht bilden den
                wesentlichen Rahmen.
              </li>

              <li>
                Bitcoin Suisse, Sygnum, Relai, Crypto Finance, Coinbase
                und Kraken sind relevante Vergleichspunkte.
              </li>

              <li>
                Private Kursgewinne sind grundsätzlich steuerfrei, wenn
                die Tätigkeit als private Vermögensverwaltung gilt.
              </li>

              <li>
                Krypto-Bestände können am Jahresende der kantonalen und
                kommunalen Vermögenssteuer unterliegen.
              </li>

              <li>
                Staking, Mining, Airdrops, Lohnzahlungen und professionelles
                Trading können Einkommensteuer auslösen.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Welche Plattform ist für die Schweiz sinnvoll?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Entscheide zuerst, ob du Schweizer Infrastruktur,
              regelmäßige Bitcoin-Käufe, internationales Spot-Trading
              oder Selbstverwahrung benötigst. Bitcoin Suisse, Sygnum und
              Crypto Finance sind stärker institutionell ausgerichtet.
              Relai ist ein Vergleichspunkt für regelmäßige Bitcoin-Käufe.
              Coinbase und Kraken bieten internationale Spot-Funktionen.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Prüfe immer die Schweizer Gesellschaft, FINMA-Informationen,
              Verwahrung und die Möglichkeit, echte Coins an eine externe
              Wallet auszuzahlen.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Inhalt dieses Ratgebers
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regulierung" className="hover:underline">
                  FINMA und Regulierung
                </a>
              </li>

              <li>
                <a href="#plattformen" className="hover:underline">
                  Relevante Plattformen
                </a>
              </li>

              <li>
                <a href="#steuern" className="hover:underline">
                  Krypto-Steuern und Vermögenssteuer
                </a>
              </li>

              <li>
                <a href="#verwahrung" className="hover:underline">
                  Verwahrung und Risiken
                </a>
              </li>

              <li>
                <a href="#vergleich" className="hover:underline">
                  Vergleich
                </a>
              </li>

              <li>
                <a href="#checkliste" className="hover:underline">
                  Sicherheits-Checkliste
                </a>
              </li>
            </ol>
          </div>
        </section>

        <section id="regulierung" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            FINMA, DLT-Recht und Geldwäscheregeln
          </h2>

          <p className="text-slate-700 mb-4">
            Die Schweiz hat einen eigenständigen Rechtsrahmen für
            digitale Vermögenswerte und ist nicht automatisch an
            EU-MiCA-Genehmigungen gebunden. Anbieter müssen die für ihr
            Geschäftsmodell geltenden Bewilligungen und
            Aufsichtsanforderungen erfüllen.
          </p>

          <p className="text-slate-700 mb-4">
            Je nach Tätigkeit können eine Bewilligung als
            Finanzintermediär, eine FinTech-Bewilligung, eine
            Effektenhaus- oder Bankbewilligung sowie die Mitgliedschaft
            bei einer anerkannten Selbstregulierungsorganisation relevant
            sein.
          </p>

          <p className="text-slate-700 mb-4">
            Das Schweizer Geldwäschereigesetz bringt KYC-,
            Transaktionsüberwachungs- und Meldepflichten. Eine Schweizer
            Gesellschaft ist jedoch nicht automatisch für jedes
            beworbene Krypto-Produkt vollständig zugelassen.
          </p>

          <p className="text-sm text-slate-700">
            Offizielle Quellen:{" "}
            <a
              href="https://www.finma.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              FINMA
            </a>{" "}
            ·{" "}
            <a
              href="https://www.estv.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Eidgenössische Steuerverwaltung
            </a>
          </p>
        </section>

        <section id="plattformen" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevante Krypto-Plattformen für die Schweiz
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-indigo-600">
                Institutionelle Infrastruktur
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitcoin Suisse und Sygnum
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Relevante Schweizer Anbieter für professionelle oder
                institutionelle Nutzer. Prüfe Bewilligung, Zielgruppe,
                Verwahrung, Mindestbeträge und Gebühren.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-indigo-600">
                Regelmäßige Bitcoin-Käufe
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Relai
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vergleichspunkt für regelmäßige Bitcoin-Käufe und
                mögliche Selbstverwahrung. Prüfe Gebühren, Spread,
                Auszahlungen und das Verwahrungsmodell.
              </p>

              <a
                href="https://relai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Offizielle Relai-Website →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-indigo-600">
                Internationale Spot-Plattformen
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase und Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Internationale Vergleichspunkte für Liquidität,
                Bedienung und Asset-Auswahl. Prüfe die Schweizer
                Vertragsgesellschaft, CHF-Unterstützung und Auszahlungen.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://go.cryptosbeginner.com/coinbase"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Coinbase →
                </a>

                <a
                  href="https://go.cryptosbeginner.com/Kraken"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Kraken →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-indigo-600">
                Schweizer Digital-Asset-Infrastruktur
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Crypto Finance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ein institutioneller Vergleichspunkt für Schweizer
                Digital-Asset-Dienstleistungen. Prüfe Zielgruppe,
                Produktumfang, Verwahrung und Gebühren.
              </p>
            </div>
          </div>
        </section>

        <section id="steuern" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Krypto-Steuern in der Schweiz
          </h2>

          <p className="text-slate-700 mb-4">
            Private Kursgewinne aus beweglichem Privatvermögen sind in
            der Schweiz grundsätzlich einkommenssteuerfrei, wenn die
            Tätigkeit als private Vermögensverwaltung gilt.
          </p>

          <p className="text-slate-700 mb-4">
            Wer sehr häufig, systematisch, mit hohem Fremdkapital oder
            professionell handelt, kann als gewerbsmäßiger Händler
            eingestuft werden. Dann können Gewinne als Einkommen
            steuerpflichtig sein.
          </p>

          <p className="text-slate-700 mb-4">
            Krypto-Bestände werden grundsätzlich zum Jahresendwert als
            Vermögen berücksichtigt. Die Vermögenssteuer wird kantonal
            und kommunal erhoben. Die Belastung kann daher je nach
            Wohnkanton und Gemeinde unterschiedlich ausfallen.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, Mining, Airdrops, Krypto als Lohn und laufende
            Rewards können Einkommensteuer auslösen. Dokumentiere daher
            Bestand, Anschaffungswerte, Rewards und Transaktionen.
          </p>

          <p className="text-sm text-slate-700">
            Steuerquelle:{" "}
            <a
              href="https://www.estv.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Eidgenössische Steuerverwaltung
            </a>
          </p>
        </section>

        <section id="verwahrung" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Verwahrung und Sicherheitsrisiken
          </h2>

          <p className="text-slate-700 mb-4">
            Schweizer Regulierung kann Vertrauen schaffen, ersetzt aber
            keine eigene Prüfung. Vergleiche Verwahrung, Auszahlungen,
            Kundengeldtrennung, Insolvenzbehandlung und die konkrete
            Vertragsgesellschaft.
          </p>

          <p className="text-slate-700">
            Proof of Reserves, Audits und ein Schweizer Sitz sind jeweils
            nur einzelne Signale. Sie beweisen nicht automatisch
            vollständige Deckung, rechtliche Trennung oder zukünftige
            Zahlungsfähigkeit.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              Proof of Reserves erklärt →
            </Link>

            <Link
              href="/learn/seed-phrase-security"
              className="text-indigo-700 hover:underline"
            >
              Seed-Phrase-Sicherheit →
            </Link>

            <Link
              href="/security/exchange-incidents"
              className="text-indigo-700 hover:underline"
            >
              Sicherheitsvorfälle →
            </Link>
          </div>
        </section>

        <section id="vergleich" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Vergleich für Schweizer Nutzer
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Plattform
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Geeignet für
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Schweizer Checks
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitcoin Suisse / Sygnum
                  </td>
                  <td className="px-4 py-3">
                    Institutionelle und professionelle Nutzer.
                  </td>
                  <td className="px-4 py-3">
                    Bewilligung, Verwahrung, Mindestbeträge und Gebühren.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Relai
                  </td>
                  <td className="px-4 py-3">
                    Regelmäßige Bitcoin-Käufe.
                  </td>
                  <td className="px-4 py-3">
                    Offizielle Website, Spread, Gebühren und Wallet-Modell.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase / Kraken
                  </td>
                  <td className="px-4 py-3">
                    Internationale Spot-Liquidität.
                  </td>
                  <td className="px-4 py-3">
                    Vertragsgesellschaft, CHF-Funding, Auszahlungen und
                    Steuerunterlagen.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Selbstverwahrung
                  </td>
                  <td className="px-4 py-3">
                    Langfristige Kontrolle über Schlüssel.
                  </td>
                  <td className="px-4 py-3">
                    Vermögenssteuer, Dokumentation und Schlüsselverlust.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="checkliste" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Sicherheits-Checkliste für die Schweiz
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Prüfe FINMA-Informationen und die konkrete
              Vertragsgesellschaft.
            </li>
            <li>
              Kläre, ob du echte Coins besitzt und sie auszahlen kannst.
            </li>
            <li>
              Dokumentiere Bestände am 31. Dezember für die
              Vermögenssteuer.
            </li>
            <li>
              Trenne private Anlage von professionellem Trading.
            </li>
            <li>
              Behandle Staking, Mining und Airdrops als mögliche
              Einkommensteuerereignisse.
            </li>
            <li>
              Nutze 2FA, Auszahlungs-Whitelists und Offline-Backups.
            </li>
            <li>
              Lies unsere{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                Sicherheits-Checkliste
              </Link>{" "}
              und{" "}
              <Link href="/methodology" className="text-indigo-700">
                Methodik
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              So wählen Schweizer Einsteiger
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Entscheide zwischen Schweizer Infrastruktur, regelmäßigen
              Bitcoin-Käufen, internationalem Spot-Trading und
              Selbstverwahrung. Prüfe Bewilligung, Verwahrung, CHF-Kosten
              und die kantonale Vermögenssteuer.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://relai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Relai offiziell
              </a>

              <a
                href="https://go.cryptosbeginner.com/coinbase"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Coinbase
              </a>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg"
              >
                Kraken
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Hinweis:</strong> Dieser Inhalt ist keine Finanz-,
              Rechts- oder Steuerberatung. Schweizer Regulierung und
              kantonale Steuerpraxis können sich ändern. Prüfe aktuelle
              FINMA-Informationen und hole bei Bedarf Beratung in deinem
              Wohnkanton ein. Einige Links können Affiliate-Links sein.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}