import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Mejores exchanges de criptomonedas en México 2026",
  description:
    "Guía 2026 para elegir exchanges crypto en México: CNBV, Banco de México, SAT, Bitso, SPEI, impuestos, custodia y seguridad.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/es/regiones/mexico",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/mexico",
      es: "https://www.cryptosbeginner.com/es/regiones/mexico",
      "x-default":
        "https://www.cryptosbeginner.com/regions/mexico",
    },
  },
};

const UPDATED = "2026-08-07";

const platforms = [
  {
    name: "Bitso",
    bestFor: "Usuarios mexicanos y acceso en MXN",
    note:
      "Plataforma fundada en México y muy relevante para el mercado local. Comprueba la entidad aplicable, las transferencias SPEI, las tarifas, la custodia, los activos disponibles y las condiciones de retiro.",
    href: "https://bitso.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Principiantes y trading spot internacional",
    note:
      "Exchange internacional conocido para compras sencillas y custodia. Compara disponibilidad en MXN, costes de conversión, comisiones, custodia y entidad que atiende a México.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Kraken",
    bestFor: "Traders spot con experiencia",
    note:
      "Ofrece herramientas de trading y liquidez internacional. Revisa la conversión MXN/USD, las comisiones, el staking, los retiros y los productos disponibles en México.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
  {
    name: "Binance",
    bestFor: "Liquidez y mayor variedad de tokens",
    note:
      "Plataforma internacional con una amplia oferta de mercados. Comprueba los métodos de pago disponibles, la entidad aplicable, las restricciones de producto y la custodia.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Bitpanda",
    bestFor: "Comparación europea",
    note:
      "Plataforma minorista europea con soporte para euros. Verifica si acepta usuarios mexicanos, las vías de financiación, los spreads, la custodia y la entidad jurídica.",
    href: "https://www.bitpanda.com/en",
    affiliate: false,
  },
];

export default function MexicoSpanishPage() {
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
                href="/regions/mexico"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Actualizado el{" "}
              <time dateTime={UPDATED}>7 de agosto de 2026</time> · Por
              Javier Giancarlo
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Mejores exchanges de criptomonedas en México en 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              México tiene un mercado crypto importante, impulsado por el
              peso mexicano, las remesas, las stablecoins y el acceso a
              mercados vinculados al dólar. La Ley Fintech, Banco de
              México, CNBV y SAT son referencias importantes, aunque los
              usuarios también deben comprobar quién procesa sus depósitos
              y qué entidad ofrece realmente el servicio. Esta guía
              compara Bitso, Coinbase, Kraken, Binance y otras alternativas.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Revisión editorial mexicana
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Contenido revisado y adaptado para lectores mexicanos por{" "}
                <span className="font-semibold text-slate-900">
                  Javier Giancarlo
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
              Respuesta rápida: ¿qué exchange elegir?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              Bitso es el punto de comparación más natural para quienes
              buscan acceso en pesos mexicanos y una plataforma orientada al
              mercado local. Coinbase suele ser sencillo para principiantes,
              Kraken puede encajar mejor con traders spot activos y Binance
              ofrece liquidez y una amplia variedad de tokens. Compara
              depósitos SPEI, costes de conversión, spread, custodia, retiros
              y la entidad que presta el servicio en México.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Que una plataforma sea técnicamente accesible desde México no
              demuestra que todos sus productos estén autorizados, disponibles
              o protegidos por las normas mexicanas. Comprueba la entidad y
              el método de pago antes de depositar.
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
                En general, es posible comprar, mantener y vender crypto en
                México, pero las criptomonedas no son moneda de curso legal
                ni están respaldadas por Banco de México.
              </li>

              <li>
                La Ley Fintech reconoce los activos virtuales dentro del
                marco de las instituciones de tecnología financiera.
              </li>

              <li>
                Banco de México establece las condiciones bajo las cuales
                las instituciones financieras autorizadas pueden operar con
                determinados activos virtuales.
              </li>

              <li>
                La CNBV supervisa aspectos relevantes de las instituciones
                de tecnología financiera y sus controles de cumplimiento.
              </li>

              <li>
                Bitso, Coinbase, Kraken y Binance son plataformas importantes
                para comparar en el mercado mexicano.
              </li>

              <li>
                El SAT aplica reglas generales del ISR; México no tiene un
                único capítulo fiscal dedicado exclusivamente a las
                criptomonedas.
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
                  Marco regulatorio mexicano
                </a>
              </li>

              <li>
                <a href="#plataformas" className="hover:underline">
                  Exchanges relevantes
                </a>
              </li>

              <li>
                <a href="#fiscalidad" className="hover:underline">
                  Fiscalidad y SAT
                </a>
              </li>

              <li>
                <a href="#registros" className="hover:underline">
                  Registros y documentación
                </a>
              </li>

              <li>
                <a href="#financiacion" className="hover:underline">
                  MXN, SPEI y pagos
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

        {/* Framework */}
        <section id="regulacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ley Fintech, CNBV y Banco de México
          </h2>

          <p className="text-slate-700 mb-4">
            La Ley para Regular las Instituciones de Tecnología Financiera,
            conocida como Ley Fintech, establece un marco para las
            instituciones de tecnología financiera, los fondos de pago
            electrónico, el crowdfunding y determinados servicios
            relacionados con activos virtuales.
          </p>

          <p className="text-slate-700 mb-4">
            Banco de México tiene autoridad para determinar las condiciones
            bajo las cuales las instituciones financieras autorizadas pueden
            utilizar o prestar servicios relacionados con activos virtuales.
            Esta facultad no significa que todas las criptomonedas puedan
            ser ofrecidas por cualquier banco, fintech o exchange.
          </p>

          <p className="text-slate-700 mb-4">
            La CNBV supervisa aspectos importantes de las instituciones de
            tecnología financiera, incluyendo autorización, capital,
            contabilidad, controles y obligaciones de prevención de lavado
            de dinero.
          </p>

          <p className="text-slate-700 mb-4">
            Para un usuario mexicano hay que separar tres preguntas:
            primero, si una plataforma se puede abrir técnicamente; segundo,
            si está autorizada para prestar ese servicio en México; y tercero,
            si el depósito en pesos es procesado por una entidad regulada.
          </p>

          <p className="text-slate-700 mb-4">
            Los activos virtuales no son moneda de curso legal y no están
            garantizados por el Gobierno de México ni por Banco de México.
            El usuario asume riesgo de mercado, custodia, contraparte y
            regulación.
          </p>

          <p className="text-sm text-slate-700">
            Fuentes oficiales:{" "}
            <a
              href="https://www.banxico.org.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banco de México
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gob.mx/cnbv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CNBV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.sat.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              SAT
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plataformas" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchanges de criptomonedas relevantes en México
          </h2>

          <p className="text-slate-700 mb-6">
            Los usuarios mexicanos suelen buscar depósitos en MXN, transferencias
            SPEI, liquidez en stablecoins, remesas y acceso a mercados
            vinculados al dólar. Las plataformas siguientes son puntos de
            comparación y no una clasificación permanente.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Mercado mexicano
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitso
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma fundada en México y muy relevante para el mercado
                local. Comprueba depósitos SPEI, tarifas, custodia, activos
                compatibles, retiros y la entidad que procesa los fondos.
              </p>

              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sitio oficial de Bitso →
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
                Exchange internacional para compras sencillas y custodia.
                Compara disponibilidad en MXN, costes de conversión,
                comisiones, custodia y entidad aplicable.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sitio oficial de Coinbase →
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
                Herramientas de trading y liquidez internacional. Revisa la
                conversión MXN/USD, las comisiones, el staking, los retiros
                y los productos disponibles en México.
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
                Liquidez y variedad de tokens
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Binance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma internacional con una amplia variedad de mercados.
                Comprueba los métodos de pago, la entidad aplicable, las
                restricciones de producto y la custodia.
              </p>

              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
              >
                Visitar Binance →
              </a>
            </div>
          </div>
        </section>

        {/* Tax */}
        <section id="fiscalidad" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Fiscalidad de las criptomonedas en México
          </h2>

          <p className="text-slate-700 mb-4">
            México no cuenta con un único régimen fiscal dedicado
            exclusivamente a las criptomonedas. El SAT aplica los
            principios generales de la Ley del Impuesto sobre la Renta,
            conocidos como ISR.
          </p>

          <p className="text-slate-700 mb-4">
            Las ganancias crypto pueden tratarse como ingresos derivados de
            la enajenación de bienes intangibles. Vender criptomonedas por
            pesos, intercambiar un activo por otro o utilizar crypto para
            comprar bienes o servicios puede generar un hecho fiscal cuando
            existe una ganancia.
          </p>

          <p className="text-slate-700 mb-4">
            Las tasas individuales de ISR son progresivas y pueden ir
            aproximadamente del 1,92% al 35%, dependiendo de los ingresos
            totales y del régimen fiscal del contribuyente. Las empresas
            tienen un tratamiento fiscal distinto.
          </p>

          <p className="text-slate-700 mb-4">
            El cálculo puede requerir el valor de venta, el coste de
            adquisición, los gastos relacionados y la situación fiscal
            general del contribuyente. No debes ignorar los intercambios
            crypto-crypto solo porque no recibiste pesos en tu cuenta
            bancaria.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, lending, rendimiento de stablecoins y
            criptomonedas recibidas por servicios pueden tratarse como
            ingresos. Si realizas muchas operaciones o actúas como negocio,
            la clasificación fiscal puede ser diferente.
          </p>

          <p className="text-sm text-slate-700">
            Fuente fiscal oficial:{" "}
            <a
              href="https://www.sat.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Servicio de Administración Tributaria
            </a>
          </p>
        </section>

        {/* Records */}
        <section id="registros" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Registros, documentación y SAT
          </h2>

          <p className="text-slate-700 mb-4">
            Guarda los registros en pesos mexicanos: precio de compra,
            valor de venta, fecha, tipo de cambio, comisiones, dirección de
            wallet e identificador de la transacción. El informe de una
            plataforma puede no incluir operaciones realizadas mediante
            autocustodia o DeFi.
          </p>

          <p className="text-slate-700 mb-4">
            Conserva también evidencia del origen de los fondos y de la
            relación entre transferencias bancarias, depósitos en el exchange
            y retiros a wallets. Esa documentación puede ser útil para
            cuestiones fiscales, bancarias y de prevención de lavado.
          </p>

          <p className="text-slate-700">
            Las normas internacionales de intercambio de información están
            aumentando. No asumas que utilizar una plataforma extranjera
            impide que el SAT pueda recibir información a través de
            instituciones financieras o futuros sistemas de reporting.
          </p>
        </section>

        {/* Funding */}
        <section id="financiacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            MXN, SPEI y métodos de pago
          </h2>

          <p className="text-slate-700 mb-4">
            SPEI es uno de los principales canales de transferencia para
            los usuarios crypto en México. Las plataformas locales pueden
            conectar depósitos y retiros en MXN mediante una entidad o
            socio de pagos mexicano, mientras que las plataformas globales
            pueden utilizar proveedores externos.
          </p>

          <p className="text-slate-700 mb-4">
            Comprueba quién recibe realmente tus pesos, si la entidad de
            pagos está regulada, cuánto tarda el depósito y si el tipo de
            cambio incluye un margen adicional.
          </p>

          <p className="text-slate-700">
            Utiliza una cuenta bancaria a tu nombre, conserva los comprobantes
            de SPEI y responde correctamente a las preguntas sobre el
            origen de los fondos. Evita cuentas de terceros, operaciones
            OTC fuera de la plataforma y cualquier instrucción para ocultar
            el objetivo de una transferencia.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custodia y riesgos para el usuario
          </h2>

          <p className="text-slate-700 mb-4">
            La conexión con un sistema de pagos o una inscripción fintech
            no convierte las criptomonedas en depósitos garantizados por el
            Gobierno de México. El precio puede caer, los retiros pueden
            interrumpirse y las plataformas pueden sufrir insolvencia,
            hackeos o fallos operativos.
          </p>

          <p className="text-slate-700 mb-4">
            Comprueba si realmente eres propietario de los criptoactivos, si
            puedes retirarlos a una wallet externa, si los activos de los
            clientes están segregados y si la plataforma presta o reutiliza
            los fondos.
          </p>

          <p className="text-slate-700">
            Proof of Reserves puede aportar transparencia, pero no demuestra
            automáticamente que todas las obligaciones estén cubiertas ni
            que los clientes mexicanos tengan prioridad en una insolvencia.
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
            Comparativa práctica para México
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
                    Controles en México
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Acción
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitso
                  </td>

                  <td className="px-4 py-3">
                    Acceso en MXN y usuarios mexicanos.
                  </td>

                  <td className="px-4 py-3">
                    Entidad de pagos, estado relacionado con CNBV, tarifas,
                    custodia y retiros.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bitso.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Sitio oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Principiantes y trading spot internacional.
                  </td>

                  <td className="px-4 py-3">
                    Disponibilidad en MXN, conversión, entidad europea y
                    custodia.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Sitio oficial →
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
                    Conversión MXN/USD, tarifas, staking y productos.
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
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    Liquidez y variedad de tokens.
                  </td>

                  <td className="px-4 py-3">
                    Proveedor SPEI, entidad mexicana, restricciones de
                    productos y custodia.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/binance"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      Visitar Binance →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Autocustodia
                  </td>

                  <td className="px-4 py-3">
                    Inversiones a largo plazo.
                  </td>

                  <td className="px-4 py-3">
                    Registros en MXN, documentación del origen de fondos y
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
            Preguntas frecuentes sobre crypto en México
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Son legales las criptomonedas en México?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                En general, se pueden mantener, comprar, vender y transferir
                criptoactivos. Sin embargo, no son moneda de curso legal ni
                están respaldados por Banco de México. Las instituciones
                financieras están sujetas a requisitos y restricciones
                específicos.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Cómo se declaran las criptomonedas ante el SAT?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                El SAT aplica principios generales del ISR. Las ganancias
                crypto pueden considerarse ingresos derivados de la
                enajenación de bienes intangibles. La forma correcta depende
                de la operación, los ingresos y el régimen fiscal.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Los swaps entre criptomonedas tributan en México?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Un intercambio crypto-crypto puede tratarse como una operación
                de disposición o permuta. Conserva el valor en MXN, el coste
                de adquisición, la fecha, la comisión y el ID de la operación.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Qué es SPEI?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                SPEI es el sistema mexicano de transferencias electrónicas
                interbancarias. Algunos exchanges y socios de pago lo utilizan
                para depósitos y retiros en pesos. Comprueba qué entidad
                procesa realmente el pago.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Bitso es relevante para usuarios mexicanos?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Bitso es una comparación natural por su origen mexicano,
                relevancia en MXN e infraestructura local. Comprueba tarifas,
                custodia, activos, retiros y estado regulatorio antes de usarlo.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿México tiene una ley fiscal específica para crypto?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                México aplica principalmente reglas generales del ISR en lugar
                de un régimen individual único dedicado exclusivamente a las
                criptomonedas. Las actividades complejas deben revisarse con
                un contador mexicano.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list para elegir un exchange en México
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verifica la entidad, el método de pago y el estado relacionado
              con CNBV o Banco de México.
            </li>

            <li>
              Comprueba si los depósitos en MXN utilizan SPEI y qué entidad
              procesa la transferencia.
            </li>

            <li>
              Compara conversión MXN, spread, comisiones y retiros.
            </li>

            <li>
              Conserva datos de compras, ventas, swaps, rewards y movimientos
              entre wallets en pesos mexicanos.
            </li>

            <li>
              Trata staking, mining, lending, airdrops y actividad comercial
              como posibles hechos fiscales distintos.
            </li>

            <li>
              Guarda documentación del origen de los fondos para operaciones
              importantes.
            </li>

            <li>
              Utiliza 2FA, contraseñas únicas y una copia offline de la frase
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
              Cómo elegir desde México
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Empieza por una plataforma que admita tu método de pago en MXN
              o SPEI, explique quién procesa los depósitos y entregue un
              historial completo. Organiza la documentación del SAT antes de
              vender, intercambiar o recibir criptomonedas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bitso oficial
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
              La regulación mexicana y el tratamiento fiscal de los
              criptoactivos pueden cambiar. Comprueba la información vigente
              de Banco de México, CNBV y SAT antes de depositar fondos,
              hacer trading o presentar una declaración. Algunos enlaces
              pueden ser de afiliación.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}