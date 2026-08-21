import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Mejores exchanges de criptomonedas en Argentina 2026",
  description:
    "Guía 2026 de exchanges crypto en Argentina: CNV, registro PSAV, ARCA, stablecoins, pesos argentinos, P2P, Lemon, Ripio, Bitso y seguridad.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/es/regiones/argentina",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/argentina",
      es: "https://www.cryptosbeginner.com/es/regiones/argentina",
      "x-default":
        "https://www.cryptosbeginner.com/regions/argentina",
    },
  },
};

const UPDATED = "2026-08-13";

const platforms = [
  {
    name: "Lemon",
    bestFor: "Usuarios argentinos y acceso en ARS",
    note:
      "Aplicación argentina de pagos y cripto con fuerte relevancia local. Comprueba su registro PSAV vigente, depósitos en pesos, custodia, tarifas, activos y retiros.",
    href: "https://lemon.me",
    affiliate: false,
  },
  {
    name: "Ripio",
    bestFor: "Usuarios minoristas de Argentina y Latinoamérica",
    note:
      "Plataforma regional con raíces argentinas. Verifica su registro PSAV, métodos de pago en ARS, custodia, comisiones y productos disponibles.",
    href: "https://www.ripio.com",
    affiliate: false,
  },
  {
    name: "Bitso",
    bestFor: "Liquidez regional y stablecoins",
    note:
      "Exchange latinoamericano con relevancia en Argentina. Comprueba la conversión ARS, la entidad aplicable, las tarifas, la custodia y el registro PSAV.",
    href: "https://bitso.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Trading spot internacional",
    note:
      "Exchange internacional conocido para custodia y trading spot. Comprueba disponibilidad en Argentina, métodos de financiación, comisiones y entidad responsable.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Binance",
    bestFor: "Liquidez, stablecoins y mercados P2P",
    note:
      "Plataforma global frecuentemente comparada por usuarios argentinos. Comprueba P2P, métodos de pago, registro PSAV, custodia y restricciones de producto.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Kraken",
    bestFor: "Traders spot con experiencia",
    note:
      "Herramientas de trading y liquidez internacional. Revisa conversión ARS/USD, comisiones, staking, retiros y disponibilidad para Argentina.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
];

export default function ArgentinaSpanishPage() {
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
                href="/regions/argentina"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Actualizado el{" "}
              <time dateTime={UPDATED}>13 de agosto de 2026</time> · Por
              Jose Maria
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Mejores exchanges de criptomonedas en Argentina en 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Argentina tiene uno de los mercados crypto más prácticos de
              Latinoamérica. La inestabilidad del peso, la demanda de valor
              vinculado al dólar, las stablecoins y los pagos
              transfronterizos impulsan el uso de activos digitales. La CNV
              regula a los proveedores de servicios de activos virtuales
              (PSAV), mientras que ARCA aplica las reglas fiscales
              generales. Esta guía compara Lemon, Ripio, Bitso, Coinbase,
              Binance y Kraken.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Revisión editorial argentina
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Contenido revisado y adaptado para lectores argentinos por{" "}
                <span className="font-semibold text-slate-900">
                  Jose Maria
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
              Lemon, Ripio y Bitso son las comparaciones locales más
              naturales para usuarios que buscan acceso en pesos,
              stablecoins o soporte regional. Coinbase es útil para trading
              spot internacional, Binance suele compararse por liquidez y
              P2P, y Kraken puede encajar con traders spot activos. Compara
              registro PSAV, métodos ARS, spread, custodia, retiros y
              documentación fiscal.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              Una plataforma puede estar disponible online sin estar
              registrada para todos los servicios incluidos en el marco
              argentino. Comprueba la entidad aplicable y el registro CNV
              antes de depositar.
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
                En general, es posible mantener, comprar y vender crypto en
                Argentina, pero no es moneda de curso legal.
              </li>

              <li>
                La Ley 27.739 creó la base legal para los activos virtuales
                y los PSAV, bajo la supervisión de la Comisión Nacional de
                Valores (CNV).
              </li>

              <li>
                La Resolución General CNV 1058/2025 establece obligaciones
                de registro, conducta, custodia, ciberseguridad, información
                y gobierno para los PSAV incluidos.
              </li>

              <li>
                Lemon, Ripio y Bitso son comparaciones locales o regionales.
                Coinbase, Binance y Kraken son alternativas internacionales.
              </li>

              <li>
                ARCA aplica reglas fiscales generales; Argentina no utiliza
                una única tasa crypto válida para todas las situaciones.
              </li>

              <li>
                Las stablecoins son especialmente importantes, pero tienen
                riesgos de emisor, reservas, custodia, depeg, impuestos y
                regulación.
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
                  CNV y marco PSAV
                </a>
              </li>

              <li>
                <a href="#plataformas" className="hover:underline">
                  Plataformas relevantes
                </a>
              </li>

              <li>
                <a href="#stablecoins" className="hover:underline">
                  Stablecoins y valor vinculado al dólar
                </a>
              </li>

              <li>
                <a href="#fiscalidad" className="hover:underline">
                  Fiscalidad crypto
                </a>
              </li>

              <li>
                <a href="#financiacion" className="hover:underline">
                  ARS, P2P y pagos
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
            CNV y marco regulatorio de los PSAV
          </h2>

          <p className="text-slate-700 mb-4">
            La Ley 27.739 incorporó definiciones para los activos virtuales
            y los proveedores de servicios de activos virtuales, conocidos
            como PSAV. La norma asignó a la Comisión Nacional de Valores
            (CNV) funciones de registro, supervisión, regulación y sanción.
          </p>

          <p className="text-slate-700 mb-4">
            La Resolución General CNV 1058/2025 desarrolló el marco para
            empresas que ofrecen servicios como el intercambio de activos
            virtuales por dinero fiat, el intercambio entre criptoactivos,
            las transferencias, la custodia y servicios relacionados.
          </p>

          <p className="text-slate-700 mb-4">
            Los PSAV incluidos deben atender cuestiones como gobierno
            corporativo, ciberseguridad, información al cliente,
            reclamaciones, custodia, manejo de activos de clientes,
            sistemas y prevención de lavado de dinero.
          </p>

          <p className="text-slate-700 mb-4">
            La obligación de registro afecta al proveedor que presta el
            servicio, no a todas las personas que poseen crypto. Una
            plataforma extranjera que atiende a argentinos puede quedar
            vinculada al marco argentino dependiendo de sus actividades,
            publicidad, volumen y conexión local.
          </p>

          <p className="text-sm text-slate-700">
            Fuentes oficiales:{" "}
            <a
              href="https://www.cnv.gov.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CNV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.argentina.gob.ar/uif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              UIF
            </a>{" "}
            ·{" "}
            <a
              href="https://www.argentina.gob.ar/arca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ARCA
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plataformas" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Plataformas crypto relevantes en Argentina
          </h2>

          <p className="text-slate-700 mb-6">
            Los usuarios argentinos suelen priorizar el acceso a pesos,
            stablecoins, liquidez, métodos de pago locales y retiros
            flexibles. Las siguientes plataformas son puntos de comparación
            y no una clasificación permanente.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Usuarios locales y ARS
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Lemon
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Aplicación argentina de pagos y crypto con fuerte presencia
                local. Comprueba registro PSAV, depósitos en pesos,
                custodia, comisiones, activos y retiros.
              </p>

              <a
                href="https://lemon.me"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sitio oficial de Lemon →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Usuarios de Argentina y Latinoamérica
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Ripio
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma regional con raíces argentinas. Verifica registro
                PSAV, pagos en ARS, custodia, comisiones y productos.
              </p>

              <a
                href="https://www.ripio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Sitio oficial de Ripio →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Liquidez regional y stablecoins
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitso
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exchange latinoamericano relevante para Argentina. Comprueba
                conversión ARS, entidad jurídica, custodia, comisiones y
                registro aplicable.
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
                Liquidez y P2P
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Binance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma global utilizada para liquidez, stablecoins y
                mercados P2P. Comprueba el registro PSAV, los métodos de
                pago, la custodia y las restricciones.
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

        {/* Stablecoins */}
        <section id="stablecoins" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Stablecoins y valor vinculado al dólar
          </h2>

          <p className="text-slate-700 mb-4">
            Las stablecoins ocupan un lugar importante en el mercado
            argentino. Algunos usuarios las utilizan para reducir la
            exposición a la depreciación del peso, mover valor entre
            plataformas o acceder a mercados internacionales.
          </p>

          <p className="text-slate-700 mb-4">
            Una stablecoin no equivale a tener dólares en una cuenta
            bancaria. Existen riesgos de emisor, reservas, pérdida de
            paridad, blockchain, custodia, liquidez y regulación.
          </p>

          <p className="text-slate-700 mb-4">
            Las compras, ventas, conversiones y swaps de stablecoins pueden
            tener consecuencias fiscales. No asumas que un token vinculado
            al dólar queda fuera del alcance de ARCA o de las reglas de
            declaración de activos.
          </p>

          <p className="text-slate-700">
            Antes de utilizar una stablecoin, revisa el emisor, el modelo de
            reservas, la posibilidad de redención, la red utilizada, los
            retiros disponibles y el historial de transacciones que ofrece
            la plataforma.
          </p>
        </section>

        {/* Tax */}
        <section id="fiscalidad" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Fiscalidad de las crypto en Argentina
          </h2>

          <p className="text-slate-700 mb-4">
            Argentina no tiene un único código fiscal dedicado a las
            criptomonedas. ARCA aplica las normas fiscales generales, y el
            resultado depende de la residencia, frecuencia, propósito,
            tipo de ingreso, venta y carácter privado o comercial de la
            actividad.
          </p>

          <p className="text-slate-700 mb-4">
            Las ventas de crypto pueden ser relevantes para el impuesto a
            las ganancias. Según los hechos, el resultado puede tratarse
            como una ganancia de capital o como ingreso ordinario, con
            diferentes cálculos y tasas.
          </p>

          <p className="text-slate-700 mb-4">
            Las criptomonedas también pueden ser relevantes para el impuesto
            sobre los bienes personales. Los activos en exchanges,
            stablecoins y fondos en autocustodia no deben ignorarse al
            analizar las obligaciones de declaración a la fecha aplicable.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mining, airdrops, lending, provisión de liquidez y
            crypto recibida por servicios pueden generar ingresos sujetos a
            impuestos. Si realizas operaciones importantes, consulta a un
            contador argentino familiarizado con activos virtuales.
          </p>

          <p className="text-sm text-slate-700">
            Autoridad fiscal:{" "}
            <a
              href="https://www.argentina.gob.ar/arca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              ARCA
            </a>
          </p>
        </section>

        {/* Funding */}
        <section id="financiacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ARS, P2P y métodos de pago
          </h2>

          <p className="text-slate-700 mb-4">
            Los usuarios argentinos pueden utilizar transferencias
            bancarias, billeteras fintech, tarjetas, exchanges locales y
            mercados P2P para comprar y vender crypto. La disponibilidad
            depende de la plataforma y de las políticas bancarias vigentes.
          </p>

          <p className="text-slate-700 mb-4">
            P2P puede facilitar la conversión entre pesos y stablecoins,
            pero introduce riesgos de contraparte, fraude, pagos revertidos
            y bloqueos de cuentas. Utiliza el escrow de la plataforma,
            mantén la conversación dentro del exchange y no consideres una
            captura de pantalla como prueba de pago.
          </p>

          <p className="text-slate-700">
            Utiliza cuentas a tu nombre, conserva comprobantes y responde
            correctamente a las preguntas sobre el origen de los fondos.
            Evita operaciones OTC fuera de la plataforma y cualquier
            instrucción para evitar controles bancarios o de cumplimiento.
          </p>
        </section>

        {/* Comparison */}
        <section id="comparacion" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Comparativa práctica para Argentina
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
                    Controles argentinos
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Acción
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Lemon
                  </td>

                  <td className="px-4 py-3">
                    Usuarios locales y acceso en ARS.
                  </td>

                  <td className="px-4 py-3">
                    Registro PSAV, financiación ARS, custodia y tarifas.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://lemon.me"
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
                    Ripio
                  </td>

                  <td className="px-4 py-3">
                    Acceso regional latinoamericano.
                  </td>

                  <td className="px-4 py-3">
                    Estado CNV, pagos locales, custodia y activos.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.ripio.com"
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
                    Bitso
                  </td>

                  <td className="px-4 py-3">
                    Liquidez regional y stablecoins.
                  </td>

                  <td className="px-4 py-3">
                    Conversión ARS, entidad, custodia, tarifas y registro.
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
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    Liquidez, stablecoins y P2P.
                  </td>

                  <td className="px-4 py-3">
                    P2P, registro PSAV, canales de pago y custodia.
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
                    Valoración ARS/USD, registros fiscales y seguridad de
                    la frase de recuperación.
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
            Preguntas frecuentes sobre crypto en Argentina
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Son legales las criptomonedas en Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                En general, se pueden mantener, comprar y vender. No son
                moneda de curso legal y los proveedores que ofrecen servicios
                incluidos en el marco deben cumplir el registro PSAV de la
                CNV y las normas aplicables de prevención de lavado.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Qué es un PSAV?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                PSAV significa Proveedor de Servicios de Activos Virtuales.
                El registro de la CNV cubre empresas que ofrecen servicios
                como intercambio, transferencias, custodia y operaciones
                relacionadas.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Cómo se declaran las criptomonedas en Argentina?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ARCA aplica reglas fiscales generales. Dependiendo de la
                actividad, las ganancias pueden ser relevantes para el
                impuesto a las ganancias y los activos pueden influir en
                el impuesto sobre los bienes personales.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Por qué son populares las stablecoins?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Pueden ofrecer acceso a valor vinculado al dólar y facilitar
                transferencias. También tienen riesgos de emisor, reservas,
                pérdida de paridad, custodia, impuestos y regulación.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Lemon es relevante para usuarios argentinos?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Lemon es una comparación local natural por su enfoque en
                Argentina y su acceso relacionado con ARS. Comprueba registro
                PSAV, tarifas, custodia, activos y retiros.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿El registro CNV garantiza la seguridad?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. El registro puede mejorar el cumplimiento y la
                transparencia, pero no elimina volatilidad, insolvencia,
                hackeos, fraude, phishing ni pérdida de claves privadas.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list para elegir un exchange en Argentina
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verifica el registro PSAV vigente de la CNV y la entidad
              jurídica exacta.
            </li>

            <li>
              Comprueba qué servicios están cubiertos: custodia,
              transferencias, intercambio y stablecoins.
            </li>

            <li>
              Compara financiación ARS, conversión a stablecoins, spreads,
              comisiones y retiros.
            </li>

            <li>
              Conserva datos de compras, ventas, swaps, stablecoins,
              rewards y transferencias de wallets.
            </li>

            <li>
              Considera impuesto a las ganancias, bienes personales y
              posible actividad comercial.
            </li>

            <li>
              Usa el escrow de la plataforma en P2P y no muevas la operación
              a WhatsApp antes de verificar el pago.
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
              Cómo elegir desde Argentina
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Empieza por una plataforma que explique su registro PSAV,
              admita tu método de financiación en ARS o stablecoins y
              entregue un historial completo de operaciones. Utiliza escrow
              en P2P, separa el ahorro de los fondos de trading y organiza
              la documentación de ARCA desde el primer movimiento.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://lemon.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Lemon oficial
              </a>

              <a
                href="https://www.ripio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Ripio oficial
              </a>

              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Binance
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
              La regulación argentina y el tratamiento fiscal de los
              activos virtuales pueden cambiar. Comprueba la información
              vigente de la CNV, UIF y ARCA antes de depositar fondos,
              operar o presentar una declaración. Algunos enlaces pueden
              ser de afiliación.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}