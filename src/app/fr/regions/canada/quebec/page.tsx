import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-22";

export const metadata: Metadata = {
  title:
    "Meilleures plateformes crypto au Québec en 2026 : AMF, CAD et impôts",
  description:
    "Guide québécois 2026 des plateformes crypto : inscription auprès de l’AMF, FINTRAC, dépôts en dollars canadiens, Interac, impôts, garde et sécurité.",
  alternates: {
    canonical: `${SITE_URL}/fr/regions/canada/quebec`,
    languages: {
      en: `${SITE_URL}/regions/canada/quebec`,
      fr: `${SITE_URL}/fr/regions/canada/quebec`,
      "x-default": `${SITE_URL}/regions/canada/quebec`,
    },
  },
  openGraph: {
    title: "Meilleures plateformes crypto au Québec en 2026",
    description:
      "Comparez les plateformes crypto au Québec selon l’AMF, les dépôts en CAD, les frais, la garde et les obligations fiscales.",
    url: `${SITE_URL}/fr/regions/canada/quebec`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Kraken",
    fit: "Trading actif et liquidité",
    note:
      "Une plateforme internationale souvent comparée par les traders canadiens. Vérifiez la situation actuelle auprès de l’AMF ou de la CSA, l’entité canadienne et les produits offerts au Québec.",
    check:
      "Vérifiez les dépôts en CAD, les paliers de frais, le staking, les produits dérivés et les retraits vers un portefeuille externe.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Coinbase",
    fit: "Achats simples et achats récurrents",
    note:
      "Une marque américaine qui exerce des activités au Canada. Comparez l’accès au Québec, les dépôts en CAD, l’écart achat-vente et les frais de trading avancé.",
    check:
      "Vérifiez l’entité canadienne, les conditions AMF ou CSA, les actifs disponibles et les modalités de staking.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Newton",
    fit: "Achats simples en dollars canadiens",
    note:
      "Une plateforme canadienne souvent considérée pour les achats de crypto. Comparez son écart achat-vente avec celui des plateformes qui affichent une commission distincte.",
    check:
      "Vérifiez l’accès au Québec, les dépôts en CAD, l’écart achat-vente, les actifs offerts et les transferts.",
    href: "https://newton.co",
    affiliate: false,
  },
  {
    name: "Wealthsimple Crypto",
    fit: "Crypto et autres placements canadiens",
    note:
      "Une option intégrée à une plateforme d’investissement canadienne. Son modèle de garde et de transfert peut différer de celui d’une plateforme crypto classique.",
    check:
      "Vérifiez l’accès au Québec, la structure du compte, les frais, les transferts d’actifs et les modalités de garde.",
    href: "https://www.wealthsimple.com/en-ca/crypto",
    affiliate: false,
  },
  {
    name: "Shakepay",
    fit: "Bitcoin et ether simplement",
    note:
      "Une plateforme canadienne à comparer pour les achats simples et les dépôts en CAD. Vérifiez l’accès actuel au Québec et l’étendue des services.",
    check:
      "Vérifiez l’écart achat-vente, les dépôts en CAD, les retraits, les actifs offerts et les conditions réglementaires.",
    href: "https://shakepay.com",
    affiliate: false,
  },
];

const faqs = [
  {
    q: "Quelle est la meilleure plateforme crypto au Québec?",
    a: "Il n’existe pas une seule meilleure plateforme pour tous les Québécois. Comparez la situation auprès de l’AMF ou de la CSA, les dépôts en CAD, l’écart achat-vente, les commissions, les actifs, la garde, les retraits et les documents fiscaux.",
  },
  {
    q: "L’AMF réglemente-t-elle les plateformes crypto au Québec?",
    a: "L’Autorité des marchés financiers est le régulateur québécois des marchés financiers. Les plateformes qui servent des clients québécois peuvent être assujetties à des exigences liées aux valeurs mobilières, aux produits dérivés, aux services monétaires et à la protection des consommateurs. Consultez les informations officielles et les conditions propres à chaque plateforme.",
  },
  {
    q: "Puis-je acheter du Bitcoin en dollars canadiens au Québec?",
    a: "Plusieurs plateformes offrent des dépôts en CAD par virement Interac, virement bancaire ou d’autres méthodes. Vérifiez la méthode disponible, les limites, le délai, l’écart achat-vente et les frais de retrait.",
  },
  {
    q: "Les transactions crypto sont-elles imposables au Québec?",
    a: "Les transactions crypto peuvent avoir des conséquences fiscales fédérales et québécoises. L’ARC considère généralement les cryptoactifs comme des marchandises aux fins de l’impôt. Le résultat peut être un gain en capital ou un revenu d’entreprise selon la nature de l’activité.",
  },
  {
    q: "Un échange crypto contre une autre crypto doit-il être déclaré?",
    a: "Un échange crypto contre une autre crypto peut constituer une disposition aux fins fiscales canadiennes. Notez la valeur, la date, la quantité, le coût de base rajusté et les frais, même si aucun dollar canadien n’est reçu.",
  },
  {
    q: "Puis-je utiliser une plateforme étrangère au Québec?",
    a: "L’accès technique ne prouve pas l’inscription locale ni la protection du consommateur. L’AMF recommande la prudence à l’égard des plateformes situées à l’extérieur du Canada. N’utilisez pas de VPN pour contourner une restriction et vérifiez l’accès actuel au Québec.",
  },
];

const sources = [
  {
    label: "Conseils de l’AMF sur les fraudes crypto",
    href: "https://lautorite.qc.ca/grand-public/types-de-fraude/fraudes-cryptos",
  },
  {
    label: "Site officiel de l’AMF",
    href: "https://lautorite.qc.ca",
  },
  {
    label: "Obligations fiscales liées aux cryptoactifs — ARC",
    href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html",
  },
  {
    label: "Monnaie virtuelle — FINTRAC",
    href: "https://fintrac-canafe.canada.ca",
  },
];

export default function QuebecFrenchPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Meilleures plateformes crypto au Québec en 2026 : AMF, CAD et impôts",
      description:
        "Guide pratique des plateformes crypto au Québec, de l’AMF, des dépôts en CAD, des impôts et de la garde.",
      datePublished: "2026-01-22",
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Alex Rivera",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/fr/regions/canada/quebec`,
      inLanguage: "fr-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Canada",
          item: `${SITE_URL}/fr/regions/canada`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Québec",
          item: `${SITE_URL}/fr/regions/canada/quebec`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Plateformes crypto comparées pour le Québec",
      itemListElement: platforms.map((platform, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: platform.name,
        url: platform.href,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main dir="ltr" lang="fr-CA" className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>Français</span>
              <span className="text-slate-500">·</span>
              <Link
                href="/regions/canada/quebec"
                className="text-white underline-offset-4 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="mb-3 text-sm font-medium text-blue-300">
              Guide Québec · Mis à jour le{" "}
              <time dateTime={UPDATED}>22 août 2026</time>
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Meilleures plateformes crypto au Québec : vérifiez l’AMF avant de déposer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Pour les résidents du Québec, les frais ne sont qu’un élément
              de la décision. Vérifiez la situation actuelle de la plateforme
              auprès de l’AMF ou de la CSA, le mode de dépôt en dollars
              canadiens, la garde des actifs, les produits offerts et les
              documents nécessaires à vos déclarations fiscales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#choisir"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Trouver votre profil
              </a>

              <a
                href="#plateformes"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Comparer les plateformes
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                Note de révision québécoise
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                Les inscriptions et les conditions applicables peuvent
                changer. Vérifiez les informations actuelles de l’AMF et des
                autorités canadiennes avant de vous fier à une affirmation
                publiée par une plateforme.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                Vérification AMF
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-950">
                Vérifiez la plateforme et toute personne qui en fait la
                promotion dans les registres officiels.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-800">
                Coût en CAD
              </p>

              <p className="mt-2 text-sm leading-6 text-red-950">
                Incluez Interac, les frais bancaires, l’écart achat-vente,
                la commission et le retrait.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                Dossiers fiscaux
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                Conservez le coût de base rajusté et chaque disposition.
              </p>
            </div>
          </div>
        </section>

        <section id="choisir" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Réponse courte
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Au Québec, vérifiez la plateforme avant de comparer le prix
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                La première question n’est pas « quelle plateforme a les
                frais les plus bas? », mais plutôt : « cette plateforme peut-elle
                légalement me servir au Québec et quelles conditions
                s’appliquent au produit que je veux utiliser? »
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Comparez ensuite les dépôts en CAD, l’écart achat-vente, la
                commission, la garde, les retraits et les relevés
                téléchargeables. Bitbuy, Kraken, Coinbase, NDAX, Newton,
                Wealthsimple Crypto et Shakepay sont des points de comparaison
                utiles, mais leurs produits ne sont pas identiques.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                Choisissez selon votre priorité
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">
                    Achat simple en CAD :
                  </span>{" "}
                  cotation claire et dépôts Interac ou bancaires.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Trading actif :
                  </span>{" "}
                  liquidité, types d’ordres et paliers de frais.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Déclaration fiscale :
                  </span>{" "}
                  relevés complets et export des transactions.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Conservation à long terme :
                  </span>{" "}
                  retraits externes et options d’autogarde.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Cadre AMF et canadien
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Ce qu’une inscription ne garantit pas
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Inscription AMF ou CSA
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Elle indique une relation réglementaire ou une décision.
                  Lisez l’entité exacte, la catégorie et les conditions.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Inscription FINTRAC
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Elle concerne certaines obligations de lutte contre le
                  blanchiment et de services monétaires. Elle n’approuve pas
                  automatiquement tous les produits de trading ou de garde.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Accès aux produits
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  Les cryptos au comptant, les stablecoins, le staking, le
                  prêt et les dérivés peuvent avoir des conditions différentes.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr]">
                <p className="font-bold text-slate-900">
                  Protection du consommateur
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  La réglementation ne garantit ni le prix, ni la liquidité,
                  ni la solvabilité, ni les retraits continus.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://lautorite.qc.ca/grand-public/types-de-fraude/fraudes-cryptos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-indigo-700 hover:underline"
          >
            Lire les conseils de l’AMF contre les fraudes crypto →
          </a>
        </section>

        <section id="plateformes" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Guide des plateformes
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Plateformes souvent comparées au Québec
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Il s’agit de points de comparaison et non d’une recommandation
              générale. Vérifiez la situation actuelle au Québec, l’entité
              juridique et les produits autorisés.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {platform.name}
                    </h3>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Vérification Québec
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {platform.check}
                  </p>
                </div>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-5 inline-flex text-sm font-bold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `Comparer ${platform.name} →`
                    : `Site officiel de ${platform.name} →`}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Dépôts en CAD
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Interac est pratique, mais pas automatiquement économique
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Comparez le virement Interac, le virement bancaire et les
                cartes. Ajoutez ensuite l’écart achat-vente, la commission et
                les frais de retrait. La quantité de crypto reçue est le
                chiffre qui compte.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Avant l’achat
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Comparez la cotation finale en CAD et la quantité reçue.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    Avant le retrait
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Vérifiez le réseau, le minimum et les frais de retrait.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Gardez vos informations exactes
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Utilisez un compte de paiement à votre nom et répondez
                correctement aux contrôles d’identité et de provenance des
                fonds. N’utilisez pas de VPN, de fausse adresse ou de compte
                tiers pour contourner une restriction québécoise.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Dossiers fiscaux ARC et Québec
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Un échange crypto-crypto peut être une disposition
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              L’ARC considère généralement les cryptoactifs comme des
              marchandises aux fins de l’impôt. La vente, l’échange, la
              dépense ou la réception de crypto peuvent avoir des conséquences
              différentes selon que l’activité est un investissement ou une
              entreprise.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Coût de base rajusté
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Notez les unités, le coût, les dates et les frais.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Valeur de disposition
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Conservez la valeur au moment de la vente ou de l’échange.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-semibold text-blue-300">
                  Fédéral et Québec
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tenez compte des obligations fédérales et provinciales.
                </p>
              </div>
            </div>

            <a
              href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/compliance/cryptocurrency-guide/crypto-assets-tax-obligations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-blue-300 hover:underline"
            >
              Consulter les obligations fiscales de l’ARC →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Garde
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Une plateforme canadienne n’est pas un dépôt bancaire
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Les exigences réglementaires peuvent améliorer la gouvernance,
                mais elles n’éliminent ni la volatilité, ni le piratage, ni
                l’insolvabilité, ni les restrictions de compte ou les délais
                de retrait.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>Pouvez-vous retirer les actifs vers un portefeuille externe?</li>
                <li>Les actifs des clients sont-ils séparés?</li>
                <li>Quels produits sont offerts au Québec?</li>
                <li>Pouvez-vous exporter vos dossiers fiscaux?</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-950">
                Envisagez l’autogarde avec prudence
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-950">
                Un portefeuille matériel peut réduire la dépendance envers
                une plateforme, mais la phrase de récupération devient votre
                responsabilité. Sa perte peut entraîner une perte permanente
                d’accès.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://go.cryptosbeginner.com/LedgerWallet"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Comparer Ledger
                </a>

                <Link
                  href="/wallets"
                  className="rounded-lg border border-blue-200 px-5 py-3 text-sm font-bold text-blue-900 hover:bg-white"
                >
                  Guide des portefeuilles
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Réponses directes
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Questions sur les plateformes crypto au Québec
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  {item.q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Liste de vérification pour le Québec
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Vérifiez la plateforme dans les registres de l’AMF et du Canada.",
                "Lisez l’entité, la catégorie et les conditions exactes.",
                "Confirmez l’admissibilité au Québec et aux produits visés.",
                "Comparez Interac, banque, carte, écart achat-vente et retraits.",
                "Exportez vos dossiers pour l’ARC et le Québec.",
                "Utilisez la 2FA et ne contournez pas les restrictions avec un VPN.",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  ✓ {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                Comparer Kraken
              </a>

              <Link
                href="/fr/regions/canada"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Guide crypto du Canada
              </Link>

              <Link
                href="/methodology"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                Lire notre méthodologie
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Sources principales
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les inscriptions et les conditions peuvent changer. Vérifiez
              les sources officielles avant d’ouvrir un compte ou de produire
              une déclaration.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {sources.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-700 hover:underline"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>Avertissement :</strong> Contenu éducatif seulement.
              Il ne constitue pas un conseil financier, juridique ou fiscal.
              Le statut des plateformes crypto au Québec, les conditions de
              l’AMF, les produits, les frais, la garde et la fiscalité peuvent
              changer. Vérifiez les informations actuelles de l’AMF, de l’ARC,
              de FINTRAC et de la plateforme avant de déposer des fonds ou de
              produire une déclaration. Certains liens peuvent être affiliés.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}