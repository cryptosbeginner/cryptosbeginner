import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Migliori exchange crypto in Italia 2026",
  description:
    "Confronto 2026 degli exchange crypto in Italia: MiCA, CONSOB, Banca d’Italia, transizione OAM, Young Platform, Coinbase, Kraken, tassazione e Quadro RW.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/it/regini/italia",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/italy",
      it: "https://www.cryptosbeginner.com/it/regini/italia",
      "x-default":
        "https://www.cryptosbeginner.com/regions/italy",
    },
  },
};

const UPDATED = "2026-08-07";

export default function ItalyItalianPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Italiano</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/italy"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Aggiornato il{" "}
              <time dateTime={UPDATED}>7 agosto 2026</time> · Di
              Giulia Bianchi
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Migliori exchange crypto in Italia nel 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              L&apos;Italia è un mercato europeo per le criptovalute e
              applica il regolamento MiCA. CONSOB e Banca d&apos;Italia
              condividono importanti responsabilità di vigilanza, mentre
              il precedente sistema di registrazione OAM è confluito nel
              nuovo quadro europeo. Questa guida confronta Young Platform,
              Coinbase, Kraken, Crypto.com, Bitpanda e Bitstamp, con
              particolare attenzione a fiscalità, dichiarazione e sicurezza.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Revisione editoriale italiana
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Contenuto revisionato e adattato per il pubblico italiano
                da{" "}
                <span className="font-semibold text-slate-900">
                  Giulia Bianchi
                </span>
                , revisore editoriale per temi legati agli asset digitali
                e alla finanza personale.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Il contenuto è informativo e non sostituisce una consulenza
                finanziaria, legale o fiscale personalizzata.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Risposta rapida: quale exchange scegliere?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Young Platform è il confronto più naturale per chi cerca
              un operatore orientato al mercato italiano e assistenza in
              lingua. Coinbase è spesso semplice per i principianti,
              Kraken è più adatto a chi fa trading spot attivo e
              Crypto.com offre un ecosistema mobile più ampio. Bitpanda e
              Bitstamp sono alternative europee da valutare. Prima di
              depositare, confronta autorizzazione MiCA, costi, spread,
              custodia, prelievi e documentazione fiscale.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Una vecchia iscrizione al registro OAM non equivale
              automaticamente a un&apos;autorizzazione MiCA attuale. Verifica
              sempre l&apos;entità giuridica, l&apos;autorità competente e i
              servizi effettivamente autorizzati.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              In breve
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                L&apos;Italia applica il regolamento europeo sui mercati
                delle cripto-attività, noto come MiCA.
              </li>

              <li>
                CONSOB e Banca d&apos;Italia hanno ruoli diversi nel quadro
                italiano di autorizzazione e vigilanza.
              </li>

              <li>
                Il precedente registro OAM per i VASP apparteneva al
                vecchio quadro nazionale. Gli operatori devono ora
                rispettare il regime MiCA applicabile.
              </li>

              <li>
                Young Platform, Coinbase, Kraken, Crypto.com, Bitpanda e
                Bitstamp sono piattaforme utili da confrontare.
              </li>

              <li>
                Dal 1° gennaio 2026, per molte plusvalenze crypto è
                prevista un&apos;aliquota sostitutiva generale del 33%,
                rispetto al precedente 26%.
              </li>

              <li>
                Quadro RW, Quadro RT, monitoraggio fiscale e comunicazioni
                DAC8 possono essere rilevanti.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              In questa guida
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regolamentazione" className="hover:underline">
                  MiCA, CONSOB e OAM
                </a>
              </li>

              <li>
                <a href="#piattaforme" className="hover:underline">
                  Exchange rilevanti
                </a>
              </li>

              <li>
                <a href="#fiscalita" className="hover:underline">
                  Tassazione crypto
                </a>
              </li>

              <li>
                <a href="#dichiarazione" className="hover:underline">
                  Quadro RW, Quadro RT e DAC8
                </a>
              </li>

              <li>
                <a href="#confronto" className="hover:underline">
                  Confronto pratico
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Domande frequenti
                </a>
              </li>
            </ol>
          </div>
        </section>

        <section
          id="regolamentazione"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            MiCA, CONSOB, Banca d&apos;Italia e transizione OAM
          </h2>

          <p className="text-slate-700 mb-4">
            L&apos;Italia applica MiCA come quadro europeo per molti servizi
            relativi alle cripto-attività. Tra questi rientrano custodia,
            gestione di piattaforme di negoziazione, scambio di crypto,
            esecuzione di ordini, trasferimento, consulenza e gestione di
            portafogli.
          </p>

          <p className="text-slate-700 mb-4">
            CONSOB e Banca d&apos;Italia condividono importanti funzioni
            nell&apos;attuazione italiana del regolamento. CONSOB è
            particolarmente rilevante per autorizzazioni, condotta di
            mercato e tutela degli investitori, mentre Banca d&apos;Italia
            interviene negli aspetti prudenziali, nei pagamenti e per
            determinati emittenti.
          </p>

          <p className="text-slate-700 mb-4">
            In passato l&apos;Italia utilizzava il registro OAM per i
            prestatori di servizi relativi alle valute virtuali. Quel
            registro apparteneva al precedente quadro nazionale. Gli
            operatori che volevano continuare a offrire servizi regolamentati
            dovevano passare al regime MiCA entro le scadenze applicabili,
            inclusa la scadenza del 30 giugno 2026.
          </p>

          <p className="text-slate-700 mb-4">
            Un exchange autorizzato in un altro Paese UE può, in
            determinate condizioni, offrire servizi in Italia tramite
            passporting. L&apos;utente deve comunque verificare entità
            giuridica, autorità di vigilanza, custodia e procedura per i
            reclami.
          </p>

          <p className="text-sm text-slate-700">
            Fonti ufficiali:{" "}
            <a
              href="https://www.consob.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CONSOB
            </a>{" "}
            ·{" "}
            <a
              href="https://www.bancaditalia.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banca d&apos;Italia
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Regolamento MiCA
            </a>
          </p>
        </section>

        <section id="piattaforme" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchange crypto rilevanti in Italia
          </h2>

          <p className="text-slate-700 mb-6">
            Gli utenti italiani cercano spesso depositi in euro,
            assistenza in italiano, documentazione fiscale chiara e
            un&apos;autorizzazione europea verificabile. Le piattaforme
            sotto sono punti di confronto e non costituiscono una
            classifica permanente.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Mercato italiano
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Young Platform
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Piattaforma orientata al mercato italiano e alla lingua
                locale. Verifica autorizzazione MiCA, depositi in euro,
                commissioni, custodia, asset disponibili e prelievi.
              </p>

              <a
                href="https://www.youngplatform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sito ufficiale Young Platform →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Principianti
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exchange internazionale adatto ad acquisti semplici e
                trading spot. Confronta spread, commissioni, custodia,
                depositi SEPA e documentazione utile per la fiscalità
                italiana.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sito ufficiale Coinbase →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Trader spot attivi
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Strumenti di trading e liquidità internazionale. Verifica
                coppie in euro, commissioni maker/taker, staking e
                prodotti disponibili per i residenti italiani.
              </p>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Scopri Kraken →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Alternative europee
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitpanda e Bitstamp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Due punti di confronto europei per trading spot e depositi
                in euro. Usa i siti ufficiali per verificare accesso
                dall&apos;Italia, custodia, commissioni e autorizzazione
                corrente.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.bitpanda.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitpanda ufficiale →
                </a>

                <a
                  href="https://www.bitstamp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitstamp ufficiale →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="fiscalita" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tassazione delle crypto in Italia nel 2026
          </h2>

          <p className="text-slate-700 mb-4">
            L&apos;Italia ha modificato il regime fiscale delle
            cripto-attività per le operazioni dal 1° gennaio 2026.
            L&apos;aliquota generale dell&apos;imposta sostitutiva su molte
            plusvalenze crypto è passata dal 26% al 33%.
          </p>

          <p className="text-slate-700 mb-4">
            La precedente soglia di 2.000 euro per le plusvalenze crypto
            è stata eliminata nel nuovo regime. Non bisogna quindi
            presumere che piccoli guadagni siano automaticamente esenti.
          </p>

          <p className="text-slate-700 mb-4">
            Alcuni token elettronici denominati in euro e conformi a MiCA
            possono avere un trattamento diverso, con aliquota del 26%
            secondo le regole applicabili. Questa distinzione è
            specifica del prodotto e non deve essere estesa a tutte le
            stablecoin.
          </p>

          <p className="text-slate-700 mb-4">
            Vendite in euro, pagamenti con crypto e altre cessioni
            richiedono una documentazione completa. Staking, mining,
            airdrop, lending, DeFi e attività professionale possono avere
            un trattamento fiscale diverso.
          </p>

          <p className="text-slate-700 mb-4">
            Chi svolge molte operazioni o gestisce importi rilevanti
            dovrebbe rivolgersi a un commercialista italiano con
            esperienza specifica in cripto-attività.
          </p>

          <p className="text-sm text-slate-700">
            Fonte fiscale ufficiale:{" "}
            <a
              href="https://www.agenziaentrate.gov.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Agenzia delle Entrate
            </a>
          </p>
        </section>

        <section id="dichiarazione" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Quadro RW, Quadro RT e DAC8
          </h2>

          <p className="text-slate-700 mb-4">
            I residenti fiscali italiani possono dover dichiarare
            cripto-attività e account detenuti all&apos;estero attraverso i
            quadri fiscali applicabili. Il Quadro RW può essere rilevante
            per il monitoraggio fiscale, mentre il Quadro RT può essere
            necessario per alcune plusvalenze.
          </p>

          <p className="text-slate-700 mb-4">
            Il quadro corretto dipende dall&apos;asset, dall&apos;account,
            dall&apos;operazione e dalla situazione del contribuente. Un
            exchange estero, un wallet self-custody e una piattaforma
            italiana non devono essere trattati automaticamente nello
            stesso modo.
          </p>

          <p className="text-slate-700 mb-4">
            L&apos;Italia ha inoltre attuato gli obblighi di reporting
            collegati a DAC8. Gli operatori interessati devono raccogliere
            e trasmettere determinati dati identificativi, saldi e
            informazioni sulle transazioni. Il primo ciclo riguarda le
            operazioni del 2026, con le prime comunicazioni previste nel
            2027 secondo il calendario italiano.
          </p>

          <p className="text-slate-700">
            Conserva esportazioni degli exchange, indirizzi dei wallet,
            ID delle transazioni, valori in euro, costi di acquisto,
            commissioni e saldi di fine anno.
          </p>
        </section>

        <section id="confronto" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Confronto pratico per l&apos;Italia
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Piattaforma
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Ideale per
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Controlli italiani
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Azione
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Young Platform
                  </td>

                  <td className="px-4 py-3">
                    Utenti italiani e assistenza in italiano.
                  </td>

                  <td className="px-4 py-3">
                    MiCA, depositi in euro, commissioni, custodia e asset
                    disponibili.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.youngplatform.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Sito ufficiale →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Principianti e acquisti ricorrenti.
                  </td>

                  <td className="px-4 py-3">
                    Entità EEA, spread, custodia e documentazione fiscale.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Sito ufficiale →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Trader spot attivi.
                  </td>

                  <td className="px-4 py-3">
                    Coppie EUR, commissioni, staking e passporting MiCA.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Scopri Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Crypto.com
                  </td>

                  <td className="px-4 py-3">
                    Utenti mobile e prodotti più ampi.
                  </td>

                  <td className="px-4 py-3">
                    Rewards, staking, carte, custodia e restrizioni italiane.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/CryptoCom"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visita Crypto.com →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Self-custody
                  </td>

                  <td className="px-4 py-3">
                    Investimenti a lungo termine.
                  </td>

                  <td className="px-4 py-3">
                    Quadro RW, valori in euro e sicurezza della frase di
                    recupero.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Guide ai wallet →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Domande frequenti sulle crypto in Italia
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Le criptovalute sono legali in Italia?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Il possesso e il trading di crypto sono generalmente
                possibili. I prestatori che servono clienti italiani devono
                però rispettare MiCA, AML, condotta e reporting. Verifica
                sempre l&apos;autorizzazione attuale.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Qual è la tassazione crypto in Italia nel 2026?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Per molte plusvalenze realizzate dal 1° gennaio 2026
                l&apos;aliquota generale dell&apos;imposta sostitutiva è del
                33%, rispetto al precedente 26%. Alcuni token elettronici
                in euro possono avere regole diverse.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Che cosa è successo al registro OAM?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Il registro OAM apparteneva al precedente quadro nazionale.
                Gli operatori devono ora rispettare l&apos;autorizzazione
                MiCA o un valido passporting europeo per offrire servizi
                regolamentati.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Che cosa sono Quadro RW e Quadro RT?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Il Quadro RW può essere rilevante per il monitoraggio
                fiscale di asset e conti esteri, mentre il Quadro RT può
                riguardare alcune plusvalenze. Il quadro corretto dipende
                dall&apos;asset e dalla situazione del contribuente.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Young Platform è rilevante per gli utenti italiani?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Young Platform è un confronto naturale per il mercato
                italiano e per il supporto in lingua. Verifica comunque
                MiCA, commissioni, custodia, asset disponibili e prelievi.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                MiCA garantisce la sicurezza delle crypto?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regola determinati servizi, ma non elimina
                volatilità, insolvenza, hacking, phishing, problemi degli
                smart contract o perdita delle chiavi private.
              </p>
            </details>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list per scegliere un exchange in Italia
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verifica autorizzazione MiCA o valido passporting europeo.
            </li>

            <li>
              Non considerare una vecchia iscrizione OAM come prova di
              autorizzazione attuale.
            </li>

            <li>
              Confronta depositi EUR, spread, commissioni e prelievi.
            </li>

            <li>
              Conserva dati di acquisti, vendite, swap, rewards e
              trasferimenti tra wallet.
            </li>

            <li>
              Verifica se Quadro RW, Quadro RT o altri adempimenti si
              applicano alla tua situazione.
            </li>

            <li>
              Tratta staking, mining, lending, airdrop e DeFi come
              potenziali eventi fiscali distinti.
            </li>

            <li>
              Attiva 2FA, usa password uniche e conserva offline la frase
              di recupero.
            </li>

            <li>
              Consulta la nostra{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                check-list di sicurezza
              </Link>{" "}
              e la nostra{" "}
              <Link href="/methodology" className="text-indigo-700">
                metodologia
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Come scegliere dall&apos;Italia
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Inizia con un provider che supporta depositi in euro,
              fornisce uno storico completo delle transazioni e dispone di
              un&apos;autorizzazione MiCA o di un passporting UE verificabile.
              Organizza la documentazione per Quadro RW e Quadro RT prima
              di vendere, scambiare o ricevere crypto.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youngplatform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Young Platform ufficiale
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase ufficiale
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

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Avvertenza:</strong> contenuto esclusivamente
              informativo. Non costituisce consulenza finanziaria, legale o
              fiscale. La regolamentazione italiana e il trattamento fiscale
              delle cripto-attività possono cambiare. Verifica le indicazioni
              aggiornate di CONSOB, Banca d&apos;Italia e Agenzia delle Entrate
              prima di depositare fondi, fare trading o presentare la
              dichiarazione. Alcuni link possono essere affiliati.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}