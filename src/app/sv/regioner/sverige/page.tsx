import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Bästa kryptobörserna i Sverige 2026",
  description:
    "Jämför kryptobörser i Sverige 2026: Finansinspektionen, MiCA, Safello, Coinbase, Kraken, svensk kryptoskatt, K4 och säker handel.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/sv/regioner/sverige",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/sweden",
      sv: "https://www.cryptosbeginner.com/sv/regioner/sverige",
      "x-default":
        "https://www.cryptosbeginner.com/regions/sweden",
    },
  },
};

const UPDATED = "2026-08-14";

const platforms = [
  {
    name: "Safello",
    bestFor: "Svenska användare och lokal marknad",
    note:
      "En svensk kryptoplattform med lokal marknadsinriktning. Kontrollera aktuell MiCA-behörighet, SEK-betalningar, avgifter, spread, förvaring och tillgängliga tillgångar.",
    href: "https://www.safello.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Nybörjare och regelbundna köp",
    note:
      "En internationell plattform för enklare köp och spot-handel. Jämför euroinsättningar, kortavgifter, spread, förvaring och den EES-enhet som betjänar Sverige.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Erfarna spot-traders",
    note:
      "Handelsverktyg och internationell likviditet. Kontrollera euroinsättningar, maker/taker-avgifter, staking och vilka produkter som är tillgängliga i Sverige.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Bitpanda",
    bestFor: "Europeiska småsparare",
    note:
      "En bred europeisk investeringsplattform. Kontrollera tillgänglighet i Sverige, SEK- eller eurofinansiering, spread, förvaring och aktuell EES-behörighet.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Bitstamp",
    bestFor: "Enkel europeisk spot-handel",
    note:
      "En etablerad europeisk börs med ett relativt fokuserat utbud. Kontrollera svensk tillgänglighet, euroinsättningar, avgifter och aktuell MiCA-status.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function SwedenSwedishPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Svenska</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/sweden"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Uppdaterad{" "}
              <time dateTime={UPDATED}>21 augusti 2026</time> · Av
              Elise Morgan
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Bästa kryptobörserna i Sverige 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Sverige är en EU-marknad för kryptotillgångar som omfattas
              av MiCA. Finansinspektionen är den svenska behöriga
              myndigheten för relevanta kryptotjänster. Svenska användare
              jämför lokala aktörer som Safello med internationella
              plattformar som Coinbase och Kraken. SEK-betalningar,
              svensk deklaration, förvaring och aktuell MiCA-behörighet är
              minst lika viktiga som handelsavgiften.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Svensk språkgranskning
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Språkgranskad och lokalt anpassad av{" "}
                <span className="font-semibold text-slate-900">
                  Erik Berg
                </span>
                , svensk redaktör med fokus på digitala tillgångar och
                privatekonomi.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Innehållet är pedagogiskt och utgör inte finansiell,
                juridisk eller skattemässig rådgivning.
              </p>
            </div>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Snabbt svar: vilken kryptobörs är bäst?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Safello är den naturliga lokala jämförelsen för svenska
              användare som vill ha svensk marknadsnärvaro och lokala
              betalningsalternativ. Coinbase passar ofta nybörjare,
              Kraken passar aktiva spot-traders och Bitpanda eller
              Bitstamp kan fungera som europeiska alternativ. Det bästa
              valet beror på SEK- eller eurofinansiering, totalkostnad,
              skattedokumentation, förvaring och vilka produkter du
              behöver.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Kontrollera alltid den juridiska enheten och aktuell
              MiCA-behörighet innan du sätter in pengar. Att en webbplats
              går att använda från Sverige betyder inte automatiskt att
              alla produkter är godkända eller tillgängliga.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              Sammanfattning
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                Det är i regel tillåtet att äga och handla med
                kryptotillgångar i Sverige, men krypto är inte lagligt
                betalningsmedel eller en garanterad bankinsättning.
              </li>

              <li>
                Finansinspektionen, FI, ansvarar för tillsynen över
                relevanta MiCA-reglerade kryptotjänster i Sverige.
              </li>

              <li>
                Safello blev det första svenska företaget att få
                MiCA-behörighet som leverantör av kryptotillgångstjänster.
              </li>

              <li>
                Coinbase, Kraken, Bitpanda och Bitstamp är relevanta
                internationella jämförelser, men kontrollera alltid
                aktuell svensk tillgänglighet.
              </li>

              <li>
                Privata kryptovinster beskattas normalt med 30 %. Som
                huvudregel får bara 70 % av en kryptoförlust dras av.
              </li>

              <li>
                Försäljningar och byten redovisas normalt med K4-bilagan.
                Staking, mining och verksamhet kan beskattas på annat sätt.
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              På den här sidan
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regelverk" className="hover:underline">
                  MiCA och Finansinspektionen
                </a>
              </li>

              <li>
                <a href="#plattformar" className="hover:underline">
                  Relevanta kryptobörser
                </a>
              </li>

              <li>
                <a href="#skatt" className="hover:underline">
                  Svensk kryptoskatt
                </a>
              </li>

              <li>
                <a href="#rapportering" className="hover:underline">
                  DAC8 och rapportering
                </a>
              </li>

              <li>
                <a href="#finansiering" className="hover:underline">
                  SEK, euro och betalningar
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Vanliga frågor
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Framework */}
        <section id="regelverk" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            MiCA och Finansinspektionen
          </h2>

          <p className="text-slate-700 mb-4">
            Sverige tillämpar EU:s förordning om marknader för
            kryptotillgångar, MiCA. Regelverket omfattar bland annat
            förvaring, drift av handelsplattformar, växling av
            kryptotillgångar, orderutförande, överföringar, rådgivning
            och portföljförvaltning.
          </p>

          <p className="text-slate-700 mb-4">
            Finansinspektionen är Sveriges behöriga myndighet för
            relevanta MiCA-tillstånd och tillsyn. Myndighetens arbete
            omfattar bland annat reglerade kryptotjänster, kundskydd,
            styrning och tillämpliga krav på penningtvättskontroll.
          </p>

          <p className="text-slate-700 mb-4">
            Sverige hade en relativt kort övergång från tidigare nationella
            regler till MiCA. Från den 1 juli 2026 behöver leverantörer i
            regel ha MiCA-tillstånd eller giltig gränsöverskridande
            EES-anmälan för att fortsätta erbjuda reglerade tjänster i
            Sverige.
          </p>

          <p className="text-slate-700 mb-4">
            Safello har fått tillstånd från Finansinspektionen för bland
            annat handel, förvaring och överföring av kryptotillgångar.
            Andra plattformar kan betjäna svenska kunder från ett annat
            EES-land. Kontrollera därför alltid hemlandets tillsynsmyndighet
            och vilken juridisk enhet du faktiskt ingår avtal med.
          </p>

          <p className="text-sm text-slate-700">
            Officiella källor:{" "}
            <a
              href="https://www.fi.se/sv/betalningar/sok-tillstand/kryptotillgangar-och-kryptotillgangstjanster/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Finansinspektionen
            </a>{" "}
            ·{" "}
            <a
              href="https://www.skatteverket.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Skatteverket
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              MiCA-förordningen
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plattformar" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Relevanta kryptobörser för svenska användare
          </h2>

          <p className="text-slate-700 mb-6">
            Svenska användare prioriterar ofta SEK, Swish eller lokala
            banklösningar. Internationella börser använder i stället ofta
            euro och SEPA. Jämför betalningsalternativ, växlingskostnad,
            förvaring och den juridiska enhet som betjänar Sverige.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-indigo-600">
                  {platform.bestFor}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {platform.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-4 inline-flex text-sm font-semibold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `Besök ${platform.name} →`
                    : `Officiell webbplats för ${platform.name} →`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tax */}
        <section id="skatt" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Svensk kryptoskatt och K4
          </h2>

          <p className="text-slate-700 mb-4">
            Skatteverket behandlar normalt kryptovaluta som en annan
            tillgång, inte som vanlig valuta. Försäljning, byte mellan
            tokens eller betalning med krypto kan innebära en skattepliktig
            avyttring.
          </p>

          <p className="text-slate-700 mb-4">
            Kapitalvinster beskattas normalt med 30 %. Som huvudregel får
            endast 70 % av en förlust på kryptovaluta dras av, enligt de
            regler som gäller för övriga tillgångar.
          </p>

          <p className="text-slate-700 mb-4">
            Privata användare redovisar normalt avyttringar i K4-bilagan,
            avsnitt D för övriga tillgångar. Beräkningen blir svårare om
            du använder flera börser, plånböcker, stablecoins eller
            decentraliserade tjänster.
          </p>

          <p className="text-slate-700 mb-4">
            Genomsnittsmetoden är central vid beräkning av omkostnadsbelopp
            för varje kryptovaluta. Spara därför köp, försäljningar,
            byten, avgifter och överföringar i stället för att enbart
            lita på börsens årsrapport.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, utlåning, likviditets-providing och
            krypto som ersättning kan beskattas på ett annat sätt.
            Omfattande och organiserad handel kan också bedömas som
            näringsverksamhet.
          </p>

          <p className="text-sm text-slate-700">
            Officiell skatteinformation:{" "}
            <a
              href="https://www.skatteverket.se/privat/skatter/vardepapperkryptovalutaochandrainvesteringar/kryptovaluta.4.233f91de16a57d9b90d2b.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Skatteverket om kryptovaluta
            </a>
          </p>
        </section>

        {/* DAC8 */}
        <section id="rapportering" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DAC8 och svensk rapportering
          </h2>

          <p className="text-slate-700 mb-4">
            Sverige har infört europeiska regler om rapportering och
            informationsutbyte för kryptotillgångar. Berörda
            kryptotjänsteleverantörer ska samla in och rapportera vissa
            kund- och transaktionsuppgifter.
          </p>

          <p className="text-slate-700 mb-4">
            Den första rapporteringsperioden gäller kalenderåret 2026.
            De första uppgifterna ska enligt den svenska tidsplanen
            lämnas till Skatteverket under 2027. Privatpersoner lämnar
            ingen separat DAC8-deklaration; rapporteringsskyldigheten
            ligger på tjänsteleverantören.
          </p>

          <p className="text-slate-700">
            Din egen deklarationsskyldighet kvarstår. Spara
            börsexporter, plånbokshistorik, SEK- eller eurovärden, avgifter,
            omkostnadsbelopp och avyttringsdatum under hela året.
          </p>
        </section>

        {/* Funding */}
        <section id="finansiering" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            SEK, euro, Swish och betalningsmetoder
          </h2>

          <p className="text-slate-700 mb-4">
            Sverigeinriktade plattformar kan erbjuda SEK- eller
            Swishrelaterade betalningsalternativ. Internationella börser
            använder ofta euro via SEPA. Tillgängligheten beror på
            plattform, bank, konto och kontroll av kundprofilen.
          </p>

          <p className="text-slate-700 mb-4">
            Jämför hela växlingskedjan. En låg handelsavgift kan ätas upp
            av en hög SEK-till-euro-spread, kortavgift, instant-buy-spread
            eller uttagsavgift.
          </p>

          <p className="text-slate-700">
            Använd ett betalningskonto i ditt eget namn, spara
            betalningsbekräftelser och svara korrekt på frågor om
            pengarnas ursprung. Banker och börser kan fördröja ovanliga
            transaktioner vid bedrägeri- eller AML-kontroller.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Förvaring och konsumentrisk
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA skapar tydligare krav på auktoriserade leverantörer, men
            gör inte krypto till en garanterad bankinsättning. Kurser kan
            falla, uttag kan stoppas och en plattform kan drabbas av
            konkurs, hackning eller tekniska problem.
          </p>

          <p className="text-slate-700 mb-4">
            Kontrollera om du äger riktiga kryptotillgångar, om uttag
            till extern plånbok är möjliga, om kundtillgångar hålls
            åtskilda och om leverantören lånar ut eller återanvänder
            tillgångarna.
          </p>

          <p className="text-slate-700">
            Proof of Reserves kan vara en transparenssignal, men bevisar
            inte automatiskt att alla skulder är täckta eller att kunder
            har företräde vid en konkurs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              Vad är Proof of Reserves? →
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              Säkerhetschecklista för börser →
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              Plånboksguide →
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="jämförelse" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Praktisk jämförelse för Sverige
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Plattform
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Passar bäst för
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Svenska kontroller
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Åtgärd
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Safello
                  </td>

                  <td className="px-4 py-3">
                    Svenska användare och lokal betalning.
                  </td>

                  <td className="px-4 py-3">
                    Kontrollera FI-tillstånd, SEK/Swish, avgifter,
                    spread och förvaring.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.safello.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Officiell webbplats →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Nybörjare och regelbundna köp.
                  </td>

                  <td className="px-4 py-3">
                    Eurofinansiering, spread, EES-enhet, förvaring och
                    skattedata.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Officiell webbplats →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Aktiva spot-traders.
                  </td>

                  <td className="px-4 py-3">
                    Europapar, avgifter, staking och aktuell EES-behörighet.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Besök Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitpanda / Bitstamp
                  </td>

                  <td className="px-4 py-3">
                    Europeiska spot-alternativ.
                  </td>

                  <td className="px-4 py-3">
                    Kontrollera svensk tillgång, förvaring, avgifter och
                    aktuell EES-behörighet.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.bitpanda.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Officiella webbplatser →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Egen förvaring
                  </td>

                  <td className="px-4 py-3">
                    Långsiktigt innehav och on-chain-användning.
                  </td>

                  <td className="px-4 py-3">
                    K4-underlag, SEK-värdering och säker hantering av
                    återställningsfrasen.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Plånböcker →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Vanliga frågor om krypto i Sverige
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Är kryptovaluta lagligt i Sverige?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Ja, det är i regel möjligt att äga och handla med
                kryptotillgångar. Krypto är inte lagligt betalningsmedel,
                och leverantörer måste följa tillämpliga MiCA-, AML- och
                uppförandekrav.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Hur beskattas krypto i Sverige?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Privata kryptovinster beskattas normalt med 30 %. Försäljning,
                byte eller betalning med krypto kan vara en skattepliktig
                avyttring. Som huvudregel får endast 70 % av en kryptoförlust
                dras av.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Vad är K4-bilagan?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                K4 används för att redovisa vissa avyttringar av övriga
                tillgångar, däribland kryptorelaterade avyttringar.
                Beräkningen beror på transaktionen och din situation.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Är krypto skattefritt efter ett år?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Nej, det finns ingen generell svensk ettårsregel som gör
                krypto skattefritt. Avyttringar ska beräknas enligt
                Skatteverkets regler oavsett hur länge tillgången hållits.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Är Safello relevant för svenska användare?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Safello är en naturlig svensk jämförelse eftersom
                plattformen riktar sig till svenska användare och har
                svensk MiCA-behörighet enligt aktuell offentlig
                information. Kontrollera ändå produktutbud, avgifter,
                förvaring och betalningsalternativ.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Garanterar MiCA att krypto är säkert?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Nej. MiCA reglerar vissa tjänster men eliminerar inte
                volatilitet, konkurs, hackning, phishing, smarta
                kontraktsfel eller förlust av privata nycklar.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Checklista för svenska kryptoanvändare
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Kontrollera leverantörens FI-tillstånd eller giltiga
              EES-passportering.
            </li>

            <li>
              Ta reda på vilken juridisk enhet som ansvarar för
              förvaring och kundklagomål.
            </li>

            <li>
              Jämför SEK-växling, eurofinansiering, spread,
              handelsavgifter och uttagskostnader.
            </li>

            <li>
              Spara uppgifter om alla köp, försäljningar, byten, rewards
              och överföringar mellan plånböcker.
            </li>

            <li>
              Förbered K4-underlaget och lita inte enbart på börsens
              årsrapport.
            </li>

            <li>
              Behandla staking, mining, airdrops och DeFi som möjliga
              separata skattehändelser.
            </li>

            <li>
              Använd 2FA, unika lösenord och offline-backup av
              återställningsfrasen.
            </li>

            <li>
              Läs vår{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                säkerhetschecklista för kryptobörser
              </Link>{" "}
              och vår{" "}
              <Link href="/methodology" className="text-indigo-700">
                metodik
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Så väljer du som svensk användare
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Börja med en plattform som stöder din föredragna SEK- eller
              eurobetalning, ger dig fullständiga transaktionsunderlag
              och har verifierbar MiCA- eller EES-behörighet. Håll
              långsiktiga innehav åtskilda från tradingmedel och bygg
              K4-underlaget löpande.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.safello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Safello officiellt
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase officiellt
              </a>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Kraken
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Ansvarsfriskrivning:</strong> Innehållet är endast
              utbildande och utgör inte finansiell, juridisk eller
              skattemässig rådgivning. Svensk kryptoreglering och
              skattebehandling kan ändras. Kontrollera aktuell information
              från Finansinspektionen och Skatteverket innan du sätter in
              pengar, handlar eller lämnar in K4. Vissa länkar kan vara
              affiliatelänkar.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}