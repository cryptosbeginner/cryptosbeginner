import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Meilleures plateformes crypto en France en 2026",
  description:
    "Comparatif 2026 des plateformes crypto en France : AMF, ACPR, agrément MiCA, fiscalité française, Coinhouse, Coinbase, Kraken et sécurité.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/fr/regions/france",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/france",
      fr: "https://www.cryptosbeginner.com/fr/regions/france",
      "x-default":
        "https://www.cryptosbeginner.com/regions/france",
    },
  },
};

const UPDATED = "2026-08-10";

export default function FranceFrenchPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Français</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/france"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Mis à jour le{" "}
              <time dateTime={UPDATED}>10 août 2026</time>
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Meilleures plateformes crypto en France en 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              La France a terminé la transition entre son ancien régime
              national PSAN et le cadre européen MiCA. L&apos;AMF
              supervise les prestataires de services sur crypto-actifs,
              tandis que l&apos;ACPR reste importante pour les aspects
              prudentiels et les acteurs financiers. Ce guide compare les
              plateformes pertinentes pour les résidents français,
              explique la fiscalité et présente les principaux contrôles
              à effectuer avant un dépôt en euros.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Co-auteur francophone
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Coécrit et relu en français par{" "}
                <span className="font-semibold text-slate-900">
                  Antoine Rousseau
                </span>
                , auteur éditorial francophone spécialisé dans les actifs
                numériques et les sujets financiers.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Cet article est un contenu pédagogique et ne constitue pas
                un conseil financier, juridique ou fiscal personnalisé.
              </p>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              L&apos;essentiel en bref
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                La France applique le règlement européen MiCA. L&apos;AMF
                est l&apos;autorité française principale pour
                l&apos;agrément et la supervision des prestataires crypto.
              </li>

              <li>
                La période de transition du régime PSAN s&apos;est terminée
                le 1er juillet 2026. Les prestataires doivent désormais
                disposer d&apos;un agrément MiCA ou d&apos;une procédure
                européenne valable.
              </li>

              <li>
                Coinhouse est une plateforme particulièrement pertinente
                pour la France. Coinbase, Kraken, Bitpanda, Bitstamp et
                Crypto.com sont d&apos;autres points de comparaison.
              </li>

              <li>
                Les plus-values crypto des particuliers sont généralement
                calculées avec la formule française fondée sur la valeur
                globale du portefeuille.
              </li>

              <li>
                En 2026, la flat tax applicable à de nombreuses plus-values
                crypto est généralement de 31,4 %, selon les conditions
                fiscales concernées.
              </li>

              <li>
                Le staking, le mining, les airdrops, le lending, la DeFi
                et le trading professionnel peuvent être traités
                différemment.
              </li>
            </ul>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Quelle plateforme crypto choisir en France ?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Coinhouse constitue un point de comparaison naturel pour les
              utilisateurs qui recherchent une présence française et un
              accompagnement en français. Coinbase et Kraken sont des
              références internationales pour les achats en euros et le
              trading au comptant. Bitpanda, Bitstamp et Crypto.com peuvent
              aussi être étudiés selon les frais, la conservation, les
              produits et les autorisations applicables.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Vérifie toujours l&apos;entité juridique, l&apos;agrément
              MiCA ou la notification européenne et le produit précis que
              tu souhaites utiliser.
            </p>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Sommaire
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#reglementation" className="hover:underline">
                  AMF, ACPR et MiCA
                </a>
              </li>

              <li>
                <a href="#plateformes" className="hover:underline">
                  Plateformes pertinentes
                </a>
              </li>

              <li>
                <a href="#fiscalite" className="hover:underline">
                  Fiscalité crypto française
                </a>
              </li>

              <li>
                <a href="#financement" className="hover:underline">
                  Dépôts et retraits en euros
                </a>
              </li>

              <li>
                <a href="#comparatif" className="hover:underline">
                  Comparatif pratique
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Questions fréquentes
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Regulation */}
        <section
          id="reglementation"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            AMF, ACPR et règlement MiCA
          </h2>

          <p className="text-slate-700 mb-4">
            La France avait instauré le régime PSAN avec la loi PACTE de
            2019. Ce régime national a encadré certains prestataires de
            services sur actifs numériques avant l&apos;entrée en
            application complète du règlement européen MiCA.
          </p>

          <p className="text-slate-700 mb-4">
            MiCA constitue désormais le cadre européen principal pour
            plusieurs services crypto : conservation, exploitation d&apos;une
            plateforme de négociation, échange de crypto-actifs, exécution
            d&apos;ordres, transfert, conseil et gestion de portefeuille.
          </p>

          <p className="text-slate-700 mb-4">
            L&apos;AMF est l&apos;autorité compétente pour les agréments
            français de prestataires de services sur crypto-actifs. 
            L&apos;ACPR peut intervenir lorsque l&apos;activité concerne
            des établissements financiers, des services de paiement ou
            d&apos;autres aspects prudentiels.
          </p>

          <p className="text-slate-700 mb-4">
            La période transitoire française a pris fin le 1er juillet
            2026. Une ancienne inscription PSAN ne doit donc pas être
            confondue avec un agrément CASP obtenu au titre de MiCA.
          </p>

          <p className="text-sm text-slate-700">
            Sources officielles :{" "}
            <a
              href="https://www.amf-france.org/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              AMF France
            </a>{" "}
            ·{" "}
            <a
              href="https://www.amf-france.org/fr/actualites-publications/actualites/lamf-rappelle-que-la-periode-transitoire-pour-les-psan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Transition PSAN et MiCA
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Règlement MiCA
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plateformes" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Plateformes crypto pertinentes en France
          </h2>

          <p className="text-slate-700 mb-6">
            Ces plateformes sont présentées comme des points de
            comparaison pour les résidents français. Les frais, la
            conservation, les retraits, le staking et les actifs
            disponibles peuvent varier selon l&apos;entité juridique et
            la résidence du client.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Plateforme orientée France
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinhouse
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Un acteur français pertinent pour les utilisateurs qui
                recherchent un service en français et une présence locale.
                Vérifie l&apos;agrément MiCA, les frais, la conservation et
                les actifs pris en charge.
              </p>

              <a
                href="https://www.coinhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Site officiel de Coinhouse →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Débutants et achats en euros
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Une plateforme internationale accessible pour les achats
                en euros et le trading au comptant. Compare les spreads,
                les frais, la conservation et l&apos;entité européenne.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Site officiel de Coinbase →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Trading au comptant actif
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Des outils de trading complets et une liquidité
                internationale. Vérifie les paires en euros, les frais
                maker/taker, le staking et les restrictions applicables en
                France.
              </p>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Découvrir Kraken →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Comparaison européenne
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitpanda et Bitstamp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Deux références européennes utiles pour comparer le
                trading au comptant et les dépôts en euros. Utilise leurs
                sites officiels pour vérifier l&apos;accès depuis la
                France, les frais et la conservation.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.bitpanda.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitpanda officiel →
                </a>

                <a
                  href="https://www.bitstamp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitstamp officiel →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tax */}
        <section id="fiscalite" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Fiscalité des crypto-actifs en France
          </h2>

          <p className="text-slate-700 mb-4">
            Les résidents fiscaux français calculent généralement leurs
            plus-values crypto privées selon les règles prévues par le
            Code général des impôts. Une cession contre des euros,
            l&apos;utilisation de crypto pour acheter un bien ou un service
            et certaines autres opérations peuvent constituer un fait
            imposable.
          </p>

          <p className="text-slate-700 mb-4">
            Le calcul français tient compte de la valeur globale du
            portefeuille. La plus-value imposable est généralement
            déterminée en comparant le prix de cession au coût
            d&apos;acquisition proportionnel du portefeuille total.
          </p>

          <p className="text-slate-700 mb-4">
            En 2026, la flat tax applicable à de nombreuses plus-values
            privées est généralement de 31,4 %, soit 12,8 % d&apos;impôt
            sur le revenu et 18,6 % de prélèvements sociaux. Le seuil
            annuel de cessions de 305 € doit être apprécié selon les
            conditions fiscales applicables.
          </p>

          <p className="text-slate-700 mb-4">
            Le formulaire 2086 sert généralement à calculer les plus-values
            sur actifs numériques. Le formulaire 3916-bis peut être
            nécessaire pour certains comptes d&apos;actifs numériques
            ouverts à l&apos;étranger.
          </p>

          <p className="text-slate-700 mb-4">
            Le staking, le mining, les airdrops, le lending, la DeFi et
            les revenus professionnels en crypto nécessitent une analyse
            distincte. Ne suppose pas qu&apos;un revenu crypto sera toujours
            traité comme une plus-value privée.
          </p>

          <p className="text-sm text-slate-700">
            Source fiscale officielle :{" "}
            <a
              href="https://www.impots.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              impots.gouv.fr
            </a>
          </p>
        </section>

        {/* Funding */}
        <section id="financement" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Dépôts et retraits en euros
          </h2>

          <p className="text-slate-700 mb-4">
            Les résidents français utilisent généralement les virements
            SEPA, les cartes ou les moyens de paiement proposés par
            chaque plateforme. La disponibilité dépend de l&apos;exchange,
            de la banque, du profil du compte et des contrôles de
            conformité.
          </p>

          <p className="text-slate-700 mb-4">
            Compare le coût total : frais de dépôt, spread, commission de
            trading, frais de retrait et frais réseau. Une commission de
            trading faible ne signifie pas forcément que l&apos;achat final
            est le moins cher.
          </p>

          <p className="text-slate-700">
            Utilise un compte de paiement à ton nom, conserve les
            confirmations et ne donne pas une fausse description à une
            transaction. Une banque ou une plateforme peut demander
            l&apos;origine des fonds pour des opérations importantes ou
            inhabituelles.
          </p>
        </section>

        {/* Comparison */}
        <section id="comparatif" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Comparatif pratique pour la France
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Plateforme
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Pour quel profil ?
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Vérifications France
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinhouse
                  </td>

                  <td className="px-4 py-3">
                    Service orienté France et accompagnement en français.
                  </td>

                  <td className="px-4 py-3">
                    Agrément MiCA actuel, frais, conservation et actifs
                    disponibles.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinhouse.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Site officiel →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Débutants et achats récurrents en euros.
                  </td>

                  <td className="px-4 py-3">
                    Entité européenne, spread, conservation et historique
                    exploitable pour la fiscalité.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Site officiel →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Traders actifs au comptant.
                  </td>

                  <td className="px-4 py-3">
                    Paires en euros, frais, staking et statut MiCA.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Découvrir Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitpanda / Bitstamp
                  </td>

                  <td className="px-4 py-3">
                    Comparaison européenne du trading au comptant.
                  </td>

                  <td className="px-4 py-3">
                    Accès France, conservation, frais et autorisation
                    actuelle.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.bitpanda.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Sites officiels →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Portefeuille personnel
                  </td>

                  <td className="px-4 py-3">
                    Conservation à long terme et usage on-chain.
                  </td>

                  <td className="px-4 py-3">
                    Sécurité des clés, sauvegardes et documentation fiscale.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Guide wallets →
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
            Questions fréquentes sur les crypto-actifs en France
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Les cryptomonnaies sont-elles légales en France ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Oui. La détention et le trading de crypto-actifs sont
                généralement possibles. Les prestataires qui servent des
                clients français doivent toutefois respecter les
                obligations MiCA applicables. La période transitoire PSAN
                a pris fin le 1er juillet 2026.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Quel est le taux d&apos;imposition des cryptos en France ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Pour de nombreuses plus-values crypto privées, la flat tax
                applicable en 2026 est généralement de 31,4 %. Le calcul
                exact dépend de l&apos;opération et de la situation fiscale
                du contribuable.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Un échange crypto-crypto est-il imposable ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Certains échanges entre crypto-actifs peuvent recevoir un
                traitement différent d&apos;une vente contre des euros ou
                d&apos;un achat de biens et services. Conserve les données de
                chaque opération et vérifie les règles fiscales actuelles.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                À quoi sert le formulaire 2086 ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Le formulaire 2086 sert généralement à calculer les
                plus-values réalisées sur les actifs numériques. Certains
                comptes ouverts à l&apos;étranger peuvent nécessiter une
                déclaration complémentaire.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Coinhouse est-elle pertinente pour les résidents français ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Coinhouse est un point de comparaison pertinent grâce à
                son orientation française et son service en français.
                Vérifie néanmoins son agrément MiCA actuel, ses frais, sa
                conservation et les actifs disponibles.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                MiCA garantit-il la sécurité des investisseurs ?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Non. MiCA encadre certaines activités et impose des
                obligations aux prestataires, mais ne supprime ni la
                volatilité, ni les faillites, ni les piratages, ni le
                phishing, ni la perte des clés privées.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list avant de choisir une plateforme
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Vérifie l&apos;agrément MiCA ou la procédure européenne
              applicable.
            </li>

            <li>
              Ne confonds pas une ancienne inscription PSAN avec un
              agrément CASP actuel.
            </li>

            <li>
              Compare les frais de dépôt, le spread, la commission de
              trading, les retraits et les frais réseau.
            </li>

            <li>
              Conserve les données de chaque achat, vente, échange,
              reward, airdrop, opération de lending et transfert de wallet.
            </li>

            <li>
              Familiarise-toi avec le formulaire 2086 et les éventuelles
              déclarations de comptes étrangers.
            </li>

            <li>
              Active la double authentification et conserve la phrase de
              récupération hors ligne.
            </li>

            <li>
              Consulte notre{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                check-list de sécurité
              </Link>{" "}
              et notre{" "}
              <Link href="/methodology" className="text-indigo-700">
                méthodologie
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Comment choisir depuis la France ?
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Commence par un prestataire européen autorisé ou clairement
              éligible, avec des dépôts en euros et un historique complet
              des transactions. Sépare les fonds de trading des avoirs
              conservés à long terme et prépare ta documentation fiscale
              avant toute vente importante.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.coinhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinhouse officiel
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase officiel
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
              <strong>Avertissement :</strong> contenu informatif
              uniquement, sans conseil financier, juridique ou fiscal
              personnalisé. La réglementation française et la fiscalité
              des crypto-actifs peuvent évoluer. Vérifie les informations
              actuelles auprès de l&apos;AMF, de l&apos;ACPR et de
              l&apos;administration fiscale avant d&apos;agir. Certains liens
              peuvent être affiliés.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}