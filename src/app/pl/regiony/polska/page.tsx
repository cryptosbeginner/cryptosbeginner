import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Najlepsze giełdy kryptowalut w Polsce 2026",
  description:
    "Porównanie giełd kryptowalut w Polsce 2026: MiCA, KNF, podatek od kryptowalut, PIT-38, DAC8, PLN, EUR, Kraken, OKX i Coinbase.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/pl/regiony/polska",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/poland",
      pl: "https://www.cryptosbeginner.com/pl/regiony/polska",
      "x-default":
        "https://www.cryptosbeginner.com/regions/poland",
    },
  },
};

const UPDATED = "2026-08-19";

const platforms = [
  {
    name: "Kraken",
    bestFor: "Handel spot na rynku europejskim",
    note:
      "Platforma z narzędziami tradingowymi i dostępem do rynku europejskiego. Sprawdź przewalutowanie PLN, finansowanie EUR/SEPA, prowizje maker/taker, staking i dostępne produkty.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "OKX",
    bestFor: "Aktywni traderzy i zaawansowane narzędzia",
    note:
      "Międzynarodowa platforma z szerokim zakresem produktów. Zweryfikuj autoryzację w EOG, dostępność dla polskich klientów, instrumenty pochodne i model przechowywania aktywów.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
  {
    name: "Coinbase",
    bestFor: "Początkujący i regularne zakupy",
    note:
      "Znana międzynarodowa platforma do prostych zakupów spot. Porównaj przewalutowanie PLN, finansowanie EUR, spread, custody i jednostkę obsługującą Polskę.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Bitpanda",
    bestFor: "Europejscy inwestorzy detaliczni",
    note:
      "Europejska platforma detaliczna. Sprawdź dostępność w Polsce, finansowanie PLN lub EUR, spread, custody i aktualną autoryzację w UE.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Bitstamp",
    bestFor: "Prosty handel spot w Europie",
    note:
      "Doświadczona europejska giełda przydatna jako punkt odniesienia. Sprawdź dostępność w Polsce, finansowanie EUR, prowizje i aktualny status MiCA.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function PolandPolishPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Polski</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/poland"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Aktualizacja:{" "}
              <time dateTime={UPDATED}>13 sierpnia 2026 r.</time> ·
              Recenzja językowa: Dariusz Kowalczyk
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Najlepsze giełdy kryptowalut w Polsce w 2026 roku
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Polska ma aktywny rynek detaliczny kryptowalut, ale użytkownicy
              muszą uwzględnić przewalutowanie PLN na EUR, onboarding zgodny
              z regulacjami UE, MiCA oraz polskie zasady podatkowe. Kraken,
              OKX, Coinbase, Bitpanda i Bitstamp to ważne punkty porównania,
              jednak kluczowe znaczenie ma dostępność konta i dokładna
              jednostka prawna obsługująca polskich klientów.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Polska redakcja językowa
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Tekst został sprawdzony i dostosowany językowo do polskich
                czytelników przez{" "}
                <span className="font-semibold text-slate-900">
                  Dariusza Kowalczyka
                </span>
                , recenzenta treści dotyczących aktywów cyfrowych i finansów
                osobistych.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Materiał ma charakter edukacyjny i nie zastępuje indywidualnej
                porady finansowej, prawnej ani podatkowej.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Szybka odpowiedź: którą giełdę wybrać?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Kraken to praktyczny punkt porównania dla europejskiego handlu
              spot, a OKX może zainteresować doświadczonych użytkowników
              potrzebujących zaawansowanych narzędzi. Coinbase jest często
              prostszy dla początkujących. Bitpanda i Bitstamp to kolejne
              europejskie alternatywy. Porównaj przewalutowanie PLN, przelewy
              EUR/SEPA, całkowity koszt, custody, wypłaty i aktualną
              autoryzację MiCA.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Przed wpłatą sprawdź stanowisko KNF i dokładną jednostkę EOG
              obsługującą polskiego klienta. Nie opieraj się wyłącznie na
              ogólnym komunikacie „dostępne w Europie”.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              Najważniejsze informacje
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                Rozporządzenie MiCA obowiązuje w Polsce jako bezpośrednio
                stosowane prawo Unii Europejskiej.
              </li>

              <li>
                KNF jest głównym polskim punktem odniesienia dla rozwijającego
                się systemu autoryzacji i nadzoru nad dostawcami usług
                związanych z kryptoaktywami.
              </li>

              <li>
                Okres przejściowy dla dotychczasowych dostawców zakończył się
                1 lipca 2026 r., z uwzględnieniem polskich przepisów
                przejściowych.
              </li>

              <li>
                Dochód z odpłatnego zbycia walut wirtualnych jest zwykle
                opodatkowany stawką 19% i wykazywany w formularzu PIT-38.
              </li>

              <li>
                Zamiana jednej kryptowaluty na inną jest co do zasady neutralna
                podatkowo w standardowym rozliczeniu osoby fizycznej.
              </li>

              <li>
                Przepisy DAC8 zwiększają zakres informacji przekazywanych
                polskim organom podatkowym.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Spis treści
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regulacje" className="hover:underline">
                  MiCA i Polska
                </a>
              </li>

              <li>
                <a href="#gieldy" className="hover:underline">
                  Najważniejsze giełdy
                </a>
              </li>

              <li>
                <a href="#podatki" className="hover:underline">
                  Podatek od kryptowalut
                </a>
              </li>

              <li>
                <a href="#pit" className="hover:underline">
                  PIT-38 i DAC8
                </a>
              </li>

              <li>
                <a href="#platnosci" className="hover:underline">
                  PLN, EUR i SEPA
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Najczęstsze pytania
                </a>
              </li>
            </ol>
          </div>
        </section>

        <section id="regulacje" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            MiCA, KNF i okres przejściowy w Polsce
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA obowiązuje w Polsce jako rozporządzenie unijne. Obejmuje
            między innymi przechowywanie kryptoaktywów, prowadzenie platform
            obrotu, wymianę kryptowalut na waluty fiat i inne kryptoaktywa,
            realizację zleceń, transfery, doradztwo i zarządzanie portfelem.
          </p>

          <p className="text-slate-700 mb-4">
            Polska wolniej niż niektóre państwa UE finalizowała krajową
            architekturę wdrażającą MiCA. KNF jest najważniejszym polskim
            punktem odniesienia dla systemu autoryzacji i nadzoru nad
            dostawcami usług związanych z kryptoaktywami.
          </p>

          <p className="text-slate-700 mb-4">
            Dostawcy działający wcześniej na podstawie krajowych zasad musieli
            uwzględnić termin przejściowy przypadający na 1 lipca 2026 r.
            Po zakończeniu okresu przejściowego dostawca potrzebuje polskiego
            zezwolenia CASP albo kwalifikującego się zezwolenia
            passportowanego z innego państwa UE.
          </p>

          <p className="text-slate-700 mb-4">
            Polski użytkownik powinien sprawdzić jednostkę prawną, kraj
            właściwego nadzoru, sposób przechowywania aktywów i procedurę
            reklamacyjną. Nie zakładaj, że stare krajowe zgłoszenie oznacza
            aktualne zezwolenie MiCA.
          </p>

          <p className="text-sm text-slate-700">
            Oficjalne źródła:{" "}
            <a
              href="https://www.knf.gov.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              KNF
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.pl/web/finanse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Ministerstwo Finansów
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Rozporządzenie MiCA
            </a>
          </p>
        </section>

        <section id="gieldy" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Najważniejsze giełdy kryptowalut dla Polski
          </h2>

          <p className="text-slate-700 mb-6">
            Polscy użytkownicy często porównują obsługę PLN z finansowaniem
            w EUR przez SEPA. Giełda może mieć lepszą płynność w euro niż w
            złotówkach, dlatego warto porównać cały proces wpłaty i zakupu.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Handel spot w UE
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Narzędzia tradingowe i dostęp do europejskiego rynku.
                Sprawdź przewalutowanie PLN, EUR/SEPA, prowizje maker/taker,
                staking i produkty dostępne w Polsce.
              </p>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Odwiedź Kraken →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Aktywni traderzy
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                OKX
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Międzynarodowa platforma z zaawansowanymi produktami.
                Zweryfikuj autoryzację w EOG, dostępność instrumentów
                pochodnych, custody i opcje finansowania dla Polski.
              </p>

              <a
                href="https://go.cryptosbeginner.com/OKX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Odwiedź OKX →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Początkujący
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Proste zakupy spot i regularne inwestowanie. Porównaj
                finansowanie EUR, spread, custody, jednostkę EOG i dokumenty
                potrzebne do PIT-38.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Oficjalna strona Coinbase →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Europejskie alternatywy
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitpanda i Bitstamp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Przydatne punkty porównania dla handlu spot w Europie.
                Sprawdź dostępność w Polsce, koszty PLN/EUR, custody i
                aktualny status MiCA.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.bitpanda.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitpanda oficjalnie →
                </a>

                <a
                  href="https://www.bitstamp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitstamp oficjalnie →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="podatki" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Podatek od kryptowalut w Polsce
          </h2>

          <p className="text-slate-700 mb-4">
            Dochód osoby fizycznej z odpłatnego zbycia waluty wirtualnej jest
            co do zasady opodatkowany stawką 19%. Przychód z tego tytułu jest
            rozliczany odrębnie od typowego dochodu z pracy.
          </p>

          <p className="text-slate-700 mb-4">
            Odpłatne zbycie może obejmować sprzedaż kryptowaluty za PLN, EUR,
            USD lub inną walutę fiat, zapłatę za towary lub usługi oraz
            uregulowanie zobowiązania za pomocą kryptowaluty.
          </p>

          <p className="text-slate-700 mb-4">
            Zamiana jednej kryptowaluty na inną jest co do zasady neutralna
            podatkowo w standardowym rozliczeniu osoby fizycznej. Mimo to
            każdą zamianę należy udokumentować, ponieważ historia nabycia i
            przyszłe koszty mają znaczenie.
          </p>

          <p className="text-slate-700 mb-4">
            Polska nie stosuje ogólnego zwolnienia po roku przechowywania
            kryptowaluty. Koszty przewyższające bieżący dochód mogą być
            rozliczane w kolejnych latach zgodnie z obowiązującymi zasadami.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, lending, airdropy, DeFi i kryptowaluty otrzymane
            jako zapłata mogą wymagać odrębnej analizy podatkowej. Działalność
            gospodarcza i profesjonalny trading mogą mieć inne obowiązki.
          </p>

          <p className="text-sm text-slate-700">
            Źródło podatkowe:{" "}
            <a
              href="https://www.podatki.gov.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              podatki.gov.pl
            </a>
          </p>
        </section>

        <section id="pit" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            PIT-38, DAC8 i raportowanie
          </h2>

          <p className="text-slate-700 mb-4">
            Osoby fizyczne rozliczają dochód z odpłatnego zbycia walut
            wirtualnych w formularzu PIT-38. W zeznaniu wykazuje się
            przychody z odpłatnego zbycia oraz koszty nabycia, także gdy
            powstała strata.
          </p>

          <p className="text-slate-700 mb-4">
            Polska wdrożyła przepisy DAC8 dotyczące raportowania aktywów
            crypto. Objęci nimi operatorzy muszą rejestrować się u Szefa KAS
            i przekazywać dane klientów oraz transakcji.
          </p>

          <p className="text-slate-700 mb-4">
            Pierwszy okres raportowania obejmuje aktywność od 1 stycznia
            2026 r. Zbiorcze raporty dotyczące 2026 r. mają być składane
            zgodnie z polskim harmonogramem do 30 czerwca 2027 r.
          </p>

          <p className="text-slate-700">
            Raport giełdy nie zastępuje własnego obowiązku podatkowego.
            Zachowuj daty, wartości w PLN, koszty nabycia, prowizje,
            wyciągi, adresy walletów i identyfikatory transakcji.
          </p>
        </section>

        <section id="platnosci" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            PLN, EUR i przelewy SEPA
          </h2>

          <p className="text-slate-700 mb-4">
            Niektóre platformy obsługują PLN bezpośrednio, a inne korzystają
            z euro i przelewów SEPA. Polski użytkownik może więc ponieść
            koszt przewalutowania przed zakupem crypto.
          </p>

          <p className="text-slate-700 mb-4">
            Porównaj kurs PLN/EUR, opłaty za wpłatę, opłaty kartowe, spread,
            prowizję maker/taker, koszt wypłaty oraz opłatę sieciową.
          </p>

          <p className="text-slate-700">
            Korzystaj z rachunku bankowego na własne nazwisko, zachowuj
            potwierdzenia i odpowiadaj zgodnie z prawdą na pytania o źródło
            środków. Nie używaj rachunków osób trzecich ani mylących opisów
            przelewów w celu obejścia kontroli.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custody i ryzyko dla użytkownika
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA tworzy wspólne europejskie ramy, ale nie sprawia, że
            kryptowaluty stają się gwarantowanym depozytem bankowym. Ceny
            mogą spaść, wypłaty mogą zostać wstrzymane, a platforma może
            mieć problemy z wypłacalnością, bezpieczeństwem lub działaniem.
          </p>

          <p className="text-slate-700 mb-4">
            Sprawdź, czy faktycznie posiadasz crypto, czy możesz wypłacić je
            do zewnętrznego walleta, czy aktywa klientów są oddzielone i czy
            dostawca pożycza lub ponownie wykorzystuje środki.
          </p>

          <p className="text-slate-700">
            Proof of Reserves może być sygnałem przejrzystości, ale nie
            dowodzi automatycznie pełnego pokrycia zobowiązań ani pierwszeństwa
            klientów w przypadku niewypłacalności.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              Czym jest Proof of Reserves? →
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              Checklista bezpieczeństwa →
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              Przewodnik po walletach →
            </Link>
          </div>
        </section>

        <section id="porownanie" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Praktyczne porównanie dla Polski
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Platforma
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Najlepsza dla
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Sprawdź w Polsce
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Akcja
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Handel spot w UE.
                  </td>

                  <td className="px-4 py-3">
                    PLN, EUR/SEPA, prowizje, staking i aktualne zezwolenie.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Odwiedź Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    OKX
                  </td>

                  <td className="px-4 py-3">
                    Aktywni traderzy i zaawansowane narzędzia.
                  </td>

                  <td className="px-4 py-3">
                    Autoryzacja w EOG, instrumenty pochodne, custody i
                    dostępność w Polsce.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/OKX"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Odwiedź OKX →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Początkujący i regularne zakupy.
                  </td>

                  <td className="px-4 py-3">
                    EUR, spread, jednostka EOG i dokumentacja PIT-38.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Oficjalna strona →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitpanda / Bitstamp
                  </td>

                  <td className="px-4 py-3">
                    Europejskie alternatywy spot.
                  </td>

                  <td className="px-4 py-3">
                    Dostępność w Polsce, koszty PLN/EUR, custody i status
                    MiCA.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.bitpanda.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Oficjalne strony →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Autocustody
                  </td>

                  <td className="px-4 py-3">
                    Długoterminowe aktywa.
                  </td>

                  <td className="px-4 py-3">
                    Wycena w PLN, dokumentacja PIT-38 i bezpieczeństwo frazy
                    odzyskiwania.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Przewodnik po walletach →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Najczęstsze pytania o kryptowaluty w Polsce
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Czy kryptowaluty są legalne w Polsce?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Posiadanie i handel crypto są co do zasady możliwe. MiCA
                obowiązuje bezpośrednio jako prawo UE, a polski system
                autoryzacji i nadzoru jest rozwijany przez krajowe przepisy
                wdrażające.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Ile wynosi podatek od kryptowalut w Polsce?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Dochód osoby fizycznej z odpłatnego zbycia waluty wirtualnej
                jest zwykle opodatkowany stawką 19%. Szczegóły zależą od
                transakcji i aktualnych przepisów podatkowych.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Czy zamiana kryptowaluty na inną podlega opodatkowaniu?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Zamiana jednej kryptowaluty na inną jest co do zasady neutralna
                podatkowo w standardowym rozliczeniu osoby fizycznej. Sprzedaż
                za fiat, zakup towaru lub usługi albo spłata zobowiązania może
                być odpłatnym zbyciem.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Do czego służy PIT-38?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                PIT-38 służy do wykazywania przychodów z określonych odpłatnych
                zbyć, w tym opodatkowanych zbyć walut wirtualnych. Zachowaj
                przychody, koszty nabycia i prowizje.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Czy Kraken jest odpowiedni dla polskich traderów?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Kraken jest istotnym punktem porównania dla europejskiego
                handlu spot. Polski użytkownik powinien sprawdzić PLN,
                EUR/SEPA, prowizje, produkty i aktualne zezwolenie.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Czy MiCA gwarantuje bezpieczeństwo kryptowalut?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Nie. MiCA reguluje określone usługi, ale nie eliminuje
                zmienności, niewypłacalności, hacków, phishingu, błędów
                smart contractów ani utraty kluczy prywatnych.
              </p>
            </details>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Checklista wyboru giełdy w Polsce
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Sprawdź autoryzację MiCA lub ważny europejski passporting.
            </li>

            <li>
              Potwierdź, że dostawca może legalnie i operacyjnie obsługiwać
              klientów z Polski.
            </li>

            <li>
              Porównaj przewalutowanie PLN, EUR/SEPA, spread, prowizje i
              wypłaty.
            </li>

            <li>
              Zachowuj dane zakupów, sprzedaży, swapów, rewards i transferów
              między walletami.
            </li>

            <li>
              Prowadź dokumentację zgodną z PIT-38 i odróżniaj transfer
              walletowy od odpłatnego zbycia.
            </li>

            <li>
              Traktuj staking, mining, lending, airdropy i działalność
              gospodarczą jako potencjalnie odrębne zdarzenia podatkowe.
            </li>

            <li>
              Używaj 2FA, unikalnych haseł i offline’owej kopii frazy
              odzyskiwania.
            </li>

            <li>
              Przeczytaj naszą{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                checklistę bezpieczeństwa giełd
              </Link>{" "}
              oraz{" "}
              <Link href="/methodology" className="text-indigo-700">
                metodologię
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Jak wybrać platformę jako mieszkaniec Polski?
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Zacznij od dostawcy obsługującego preferowaną wpłatę w PLN lub
              EUR, zapewniającego pełną historię transakcji i posiadającego
              weryfikowalne zezwolenie MiCA lub status passportingu w UE.
              Dokumentuj transakcje od początku i nie wybieraj platformy
              wyłącznie na podstawie minimalnej różnicy w prowizji.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Kraken
              </a>

              <a
                href="https://go.cryptosbeginner.com/OKX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                OKX
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase oficjalnie
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>Uwaga:</strong> Treść ma charakter edukacyjny i nie
              stanowi porady finansowej, prawnej ani podatkowej. Polskie
              regulacje crypto, opodatkowanie i raportowanie DAC8 mogą się
              zmieniać. Przed wpłatą środków, tradingiem lub złożeniem PIT-38
              sprawdź aktualne informacje KNF i polskich organów podatkowych.
              Niektóre linki mogą być afiliacyjne.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}