import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Mejores exchanges de criptomonedas en España 2026",
  description:
    "Guía 2026 de exchanges crypto en España: CNMV, MiCA, Banco de España, fiscalidad, Modelo 100, Modelo 721, Bit2Me, Coinbase y Kraken.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/es/regiones/espana",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/spain",
      es: "https://www.cryptosbeginner.com/es/regiones/espana",
      "x-default":
        "https://www.cryptosbeginner.com/regions/spain",
    },
  },
};

const UPDATED = "2026-08-07";

const platforms = [
  {
    name: "Bit2Me",
    bestFor: "Usuarios españoles y soporte en español",
    note:
      "Plataforma enfocada en el mercado español y un punto de comparación natural para clientes que buscan atención local. Comprueba su autorización MiCA, tarifas, custodia, depósitos y activos disponibles.",
    href: "https://bit2me.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Principiantes y compras periódicas",
    note:
      "Exchange internacional conocido para compras sencillas y trading spot. Compara el spread, las comisiones Advanced, los depósitos SEPA, la custodia y la entidad europea aplicable.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Traders spot con experiencia",
    note:
      "Ofrece herramientas de trading y liquidez internacional. Revisa los pares EUR, las comisiones maker/taker, el staking y los productos disponibles en España.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Crypto.com",
    bestFor: "Usuarios móviles y productos variados",
    note:
      "Ecosistema de aplicaciones con varios productos. Las recompensas, el staking, las tarjetas y las stablecoins pueden tener condiciones específicas para clientes españoles.",
    href: "https://go.cryptosbeginner.com/CryptoCom",
    affiliate: true,
  },
  {
    name: "Bitpanda",
    bestFor: "Inversores minoristas europeos",
    note:
      "Plataforma europea con soporte para euros. Comprueba la disponibilidad en España, los spreads, la custodia y la autorización europea actual.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
  {
    name: "Bitstamp",
    bestFor: "Trading spot europeo",
    note:
      "Exchange europeo con una oferta relativamente concentrada. Comprueba la disponibilidad en España, los depósitos EUR, las tarifas y el estado regulatorio actual.",
    href: "https://www.bitstamp.net",
    affiliate: false,
  },
];

export default function SpainSpanishPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Español</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/spain"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Actualizado el{" "}
              <time dateTime={UPDATED}>7 de agosto de 2026</time> · Por
              Santiago Belmonte Vega
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Mejores exchanges de criptomonedas en España en 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              España es un mercado europeo de criptoactivos sujeto al
              reglamento MiCA. La Comisión Nacional del Mercado de Valores
              (CNMV) tiene un papel central en la autorización y supervisión
              de los proveedores de servicios sobre criptoactivos, mientras
              que el Banco de España mantiene responsabilidades relacionadas
              con determinados tokens y servicios de pago. Los residentes
              españoles también deben considerar el IRPF, el Modelo 100,
              el Modelo 721 y las nuevas obligaciones de intercambio de
              información.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Revisión editorial española
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Contenido revisado y adaptado para lectores españoles por{" "}
                <span className="font-semibold text-slate-900">
                  Santiago Belmonte Vega
                </span>
                , revisor editorial de activos digitales y finanzas
                personales.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Este contenido es educativo y no sustituye el asesoramiento
                financiero, jurídico o fiscal personalizado.
              </p>
            </div>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Respuesta rápida: ¿qué exchange es mejor?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Bit2Me es la comparación más natural para quienes buscan
              soporte en español y presencia en el mercado local. Coinbase
              suele ser sencillo para principiantes, Kraken puede encajar
              mejor con traders spot activos y Crypto.com ofrece un
              ecosistema móvil más amplio. Bitpanda y Bitstamp son
              alternativas europeas. Compara la autorización, los depósitos
              en euros, el coste total, la custodia, los retiros y la
              documentación fiscal.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Que una plataforma sea accesible desde España no demuestra
              que todos sus productos estén autorizados para residentes
              españoles. Comprueba la entidad jurídica y el servicio
              concreto antes de depositar.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              En resumen
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                España aplica el reglamento europeo sobre mercados de
                criptoactivos, conocido como MiCA.
              </li>

              <li>
                La CNMV supervisa funciones importantes relacionadas con
                los proveedores de servicios sobre criptoactivos y la
                conducta de mercado.
              </li>

              <li>
                El Banco de España mantiene responsabilidades relacionadas
                con determinados tokens y cuestiones de pagos.
              </li>

              <li>
                El periodo transitorio español terminó el 30 de junio de
                2026. Los proveedores deben contar con autorización MiCA o
                una vía válida de passporting europeo.
              </li>

              <li>
                Bit2Me, Coinbase, Kraken, Crypto.com, Bitpanda y Bitstamp
                son plataformas relevantes para comparar.
              </li>

              <li>
                Las ganancias crypto suelen tributar en la base del ahorro
                del IRPF con tipos progresivos del 19% al 30%, según la
                base imponible y el ejercicio fiscal.
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              En esta guía
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regulacion" className="hover:underline">
                  CNMV, Banco de España y MiCA
                </a>
              </li>

              <li>
                <a href="#plataformas" className="hover:underline">
                  Exchanges relevantes
                </a>
              </li>

              <li>
                <a href="#fiscalidad" className="hover:underline">
                  Fiscalidad crypto en España
                </a>
              </li>

              <li>
                <a href="#declaracion" className="hover:underline">
                  Modelo 100 y Modelo 721
                </a>
              </li>

              <li>
                <a href="#financiacion" className="hover:underline">
                  Depósitos y retiros en euros
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Regulation */}
        <section id="regulacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            CNMV, Banco de España y MiCA
          </h2>

          <p className="text-slate-700 mb-4">
            España aplica MiCA como marco europeo principal para numerosos
            servicios sobre criptoactivos. El reglamento cubre actividades
            como la custodia, la gestión de plataformas de negociación,
            el intercambio de criptoactivos, la ejecución de órdenes, las
            transferencias, el asesoramiento y la gestión de carteras.
          </p>

          <p className="text-slate-700 mb-4">
            La CNMV es la autoridad española con funciones importantes en
            la autorización de proveedores de servicios sobre criptoactivos,
            la conducta de mercado, la información a inversores y la
            supervisión de determinadas actividades.
          </p>

          <p className="text-slate-700 mb-4">
            El Banco de España mantiene responsabilidades relacionadas con
            determinados tokens referenciados a activos, tokens de dinero
            electrónico y cuestiones de pagos. Por eso no conviene tratar
            todas las autorizaciones como si fueran idénticas.
          </p>

          <p className="text-slate-700 mb-4">
            El periodo transitorio español finalizó el 30 de junio de
            2026. Desde el 1 de julio, los proveedores necesitan la
            autorización correspondiente o una autorización europea
            passportada para continuar ofreciendo los servicios regulados
            aplicables.
          </p>

          <p className="text-sm text-slate-700">
            Fuentes oficiales:{" "}
            <a
              href="https://www.cnmv.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CNMV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.bde.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banco de España
            </a>{" "}
            ·{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Reglamento MiCA
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plataformas" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchanges de criptomonedas relevantes en España
          </h2>

          <p className="text-slate-700 mb-6">
            Los usuarios españoles suelen buscar depósitos en euros,
            soporte en español, informes fiscales claros y una autorización
            europea verificable. Las siguientes plataformas son puntos de
            comparación, no una clasificación permanente.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Mercado español
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bit2Me
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma orientada al mercado español y un punto de
                comparación natural para usuarios que prefieren soporte en
                español. Comprueba autorización MiCA, comisiones, custodia
                y activos disponibles.
              </p>

              <a
                href="https://bit2me.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Web oficial de Bit2Me →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Principiantes
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exchange internacional para compras sencillas y trading
                spot. Compara spread, comisiones Advanced, depósitos SEPA,
                custodia y entidad europea aplicable.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Web oficial de Coinbase →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Traders spot activos
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Kraken
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Herramientas de trading y liquidez internacional. Comprueba
                pares EUR, comisiones maker/taker, staking y productos
                disponibles en España.
              </p>

              <a
                href="https://go.cryptosbeginner.com/Kraken"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Descubrir Kraken →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Alternativas europeas
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitpanda y Bitstamp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dos referencias europeas para comparar trading spot y
                depósitos en euros. Utiliza sus webs oficiales para
                comprobar acceso desde España, custodia, comisiones y
                autorización vigente.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.bitpanda.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitpanda oficial →
                </a>

                <a
                  href="https://www.bitstamp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  Bitstamp oficial →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tax */}
        <section id="fiscalidad" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Fiscalidad de las criptomonedas en España
          </h2>

          <p className="text-slate-700 mb-4">
            Los residentes fiscales españoles suelen declarar las
            operaciones con criptomonedas como ganancias o pérdidas
            patrimoniales integradas en la base del ahorro del IRPF.
            Vender crypto por euros, intercambiar un token por otro o usar
            crypto para comprar bienes y servicios puede generar una
            operación fiscalmente relevante.
          </p>

          <p className="text-slate-700 mb-4">
            Para el ejercicio fiscal correspondiente, los tipos de la base
            del ahorro se sitúan generalmente entre el 19% y el 30%:
            19% hasta 6.000 euros, 21% entre 6.000 y 50.000 euros, 23%
            entre 50.000 y 200.000 euros, 27% entre 200.000 y 300.000
            euros y 30% por encima de 300.000 euros. Comprueba siempre el
            ejercicio y las reglas aplicables.
          </p>

          <p className="text-slate-700 mb-4">
            España suele aplicar criterios FIFO para determinar qué unidades
            se consideran vendidas cuando existen compras realizadas en
            fechas y precios distintos. Por eso debes conservar el historial
            completo de compras, ventas, swaps y comisiones.
          </p>

          <p className="text-slate-700 mb-4">
            El staking, el mining, los airdrops, el lending, la provisión
            de liquidez y las criptomonedas recibidas como salario o pago
            pueden tener un tratamiento distinto al de una inversión
            privada.
          </p>

          <p className="text-slate-700 mb-4">
            Las reglas autonómicas y el impuesto sobre el patrimonio pueden
            ser relevantes para grandes patrimonios. Si utilizas DeFi,
            múltiples wallets o realizas muchas operaciones, busca un
            asesor fiscal español con experiencia en criptoactivos.
          </p>

          <p className="text-sm text-slate-700">
            Fuente fiscal oficial:{" "}
            <a
              href="https://sede.agenciatributaria.gob.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Agencia Tributaria
            </a>
          </p>
        </section>

        {/* Reporting */}
        <section id="declaracion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Modelo 100, Modelo 721 y DAC8
          </h2>

          <p className="text-slate-700 mb-4">
            Las ganancias crypto se incluyen normalmente en la declaración
            anual del IRPF, Modelo 100, dentro de las secciones aplicables
            de la base del ahorro.
          </p>

          <p className="text-slate-700 mb-4">
            El Modelo 721 puede ser obligatorio cuando un residente fiscal
            español mantiene criptoactivos en custodia de proveedores
            extranjeros y el valor agregado supera el umbral aplicable de
            50.000 euros a 31 de diciembre. Es una declaración informativa:
            presentarla no crea por sí sola un impuesto adicional.
          </p>

          <p className="text-slate-700 mb-4">
            La Agencia Tributaria también recibe información a través de
            obligaciones nacionales de reporting. Además, DAC8 amplía el
            intercambio automático de información sobre determinados
            criptoactivos y clientes de proveedores europeos.
          </p>

          <p className="text-slate-700">
            Guarda exportaciones de los exchanges, historial de wallets,
            costes de adquisición, valores en euros, comisiones, fechas de
            venta y saldos de fin de año. Los informes del exchange pueden
            no incluir todas las operaciones DeFi o self-custody.
          </p>
        </section>

        {/* Funding */}
        <section id="financiacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Depósitos y retiros en euros
          </h2>

          <p className="text-slate-700 mb-4">
            Los residentes españoles suelen utilizar transferencias SEPA,
            tarjetas u otros métodos ofrecidos por cada plataforma. La
            disponibilidad depende del exchange, el banco, el perfil del
            cliente y las comprobaciones de cumplimiento.
          </p>

          <p className="text-slate-700 mb-4">
            Compara el coste completo: comisión de depósito, coste de
            tarjeta, spread, comisión de trading, coste de retiro y
            comisión de red.
          </p>

          <p className="text-slate-700">
            Utiliza una cuenta de pago a tu nombre, conserva los justificantes
            y responde correctamente a las preguntas sobre el origen de los
            fondos. Los bancos y exchanges pueden retrasar operaciones
            inusuales por controles contra el fraude y el blanqueo de
            capitales.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custodia y riesgos para el usuario
          </h2>

          <p className="text-slate-700 mb-4">
            MiCA establece requisitos para los proveedores autorizados,
            pero no convierte las criptomonedas en depósitos bancarios
            garantizados. El precio puede caer, los retiros pueden
            interrumpirse y una plataforma puede sufrir insolvencia,
            hackeos o fallos operativos.
          </p>

          <p className="text-slate-700 mb-4">
            Comprueba si realmente eres propietario de los criptoactivos,
            si puedes retirarlos a una wallet externa, si los activos de
            clientes están segregados y si el proveedor los presta o los
            reutiliza.
          </p>

          <p className="text-slate-700">
            Proof of Reserves puede ser una señal de transparencia, pero no
            demuestra automáticamente que todas las obligaciones estén
            cubiertas ni que los clientes tengan prioridad en una
            insolvencia.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              ¿Qué es Proof of Reserves? →
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              Check-list de seguridad →
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              Guía de wallets →
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparativa" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Comparativa práctica para España
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Plataforma
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Mejor para
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Controles en España
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Acción
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bit2Me
                  </td>

                  <td className="px-4 py-3">
                    Usuarios españoles y soporte local.
                  </td>

                  <td className="px-4 py-3">
                    Estado CNMV/MiCA, depósitos EUR, tarifas, custodia y
                    activos disponibles.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bit2me.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Web oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Principiantes y compras periódicas.
                  </td>

                  <td className="px-4 py-3">
                    Entidad europea, spread, custodia y registros fiscales.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Web oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Kraken
                  </td>

                  <td className="px-4 py-3">
                    Traders spot activos.
                  </td>

                  <td className="px-4 py-3">
                    Pares EUR, comisiones, staking y passporting europeo.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Kraken"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Descubrir Kraken →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Crypto.com
                  </td>

                  <td className="px-4 py-3">
                    Usuarios móviles y más productos.
                  </td>

                  <td className="px-4 py-3">
                    Rewards, staking, tarjetas, custodia y restricciones
                    españolas.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/CryptoCom"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visitar Crypto.com →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Autocustodia
                  </td>

                  <td className="px-4 py-3">
                    Inversión a largo plazo y uso on-chain.
                  </td>

                  <td className="px-4 py-3">
                    Registros para Modelo 721, valoración en euros y
                    seguridad de la frase de recuperación.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Guía de wallets →
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
            Preguntas frecuentes sobre crypto en España
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Son legales las criptomonedas en España?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                La tenencia y el trading de criptoactivos son generalmente
                posibles. Las plataformas que atienden a residentes
                españoles deben cumplir las obligaciones aplicables de
                MiCA, AML, conducta y reporting.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Cuánto se paga de impuestos por las criptomonedas?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Las ganancias suelen tributar en la base del ahorro del IRPF,
                con tipos progresivos que normalmente van del 19% al 30%,
                según la base imponible y el ejercicio fiscal.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Qué es el Modelo 721?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                El Modelo 721 es una declaración informativa para ciertos
                criptoactivos custodiados por proveedores extranjeros cuando
                se supera el umbral aplicable de 50.000 euros. Presentarlo no
                crea por sí mismo un impuesto adicional.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Los swaps entre criptomonedas tributan en España?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Un swap puede constituir una transmisión fiscalmente
                relevante. Conserva el valor en euros, la fecha, el coste de
                adquisición, las comisiones y los datos de la operación.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Bit2Me es relevante para usuarios españoles?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Bit2Me es un punto de comparación natural por su orientación
                al mercado español y su soporte en español. Comprueba siempre
                el estado MiCA, las tarifas, la custodia y los activos
                disponibles.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿MiCA garantiza la seguridad de las criptomonedas?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. MiCA regula determinados servicios, pero no elimina la
                volatilidad, la insolvencia, los hackeos, el phishing, los
                fallos de smart contracts ni la pérdida de claves privadas.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list antes de elegir un exchange
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verifica la autorización CNMV o el passporting europeo válido.
            </li>

            <li>
              Confirma que el proveedor puede atender a clientes españoles
              después del final del periodo transitorio.
            </li>

            <li>
              Compara depósitos EUR, spread, comisión de trading y costes
              de retiro.
            </li>

            <li>
              Conserva los datos de todas las compras, ventas, swaps,
              rewards y transferencias de wallets.
            </li>

            <li>
              Comprueba si debes presentar Modelo 100, Modelo 721,
              declaraciones patrimoniales u otros formularios.
            </li>

            <li>
              Trata staking, mining, airdrops y DeFi como posibles hechos
              fiscales diferentes.
            </li>

            <li>
              Utiliza 2FA, contraseñas únicas y copias offline de la frase
              de recuperación.
            </li>

            <li>
              Consulta nuestra{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                check-list de seguridad
              </Link>{" "}
              y nuestra{" "}
              <Link href="/methodology" className="text-indigo-700">
                metodología
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Cómo elegir desde España
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Empieza por un proveedor que admita depósitos en euros,
              ofrezca un historial completo de operaciones y tenga una
              autorización CNMV o un passporting europeo verificable.
              Organiza la información del Modelo 100 y el Modelo 721 antes
              de vender, intercambiar o recibir criptomonedas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://bit2me.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bit2Me oficial
              </a>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Coinbase oficial
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
              <strong>Aviso:</strong> Contenido exclusivamente educativo.
              No constituye asesoramiento financiero, jurídico o fiscal.
              La regulación española y la fiscalidad de los criptoactivos
              pueden cambiar. Comprueba la información vigente de la CNMV,
              el Banco de España y la Agencia Tributaria antes de depositar
              fondos, hacer trading o presentar una declaración. Algunos
              enlaces pueden ser de afiliación.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}