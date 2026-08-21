import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Melhores exchanges de criptomoedas no Brasil em 2026",
  description:
    "Guia 2026 de exchanges crypto no Brasil: Banco Central, CVM, Lei 14.478, DeCripto, Pix, Mercado Bitcoin, Bitso, Coinbase e Binance.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/pt/regioes/brasil",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/brazil",
      pt: "https://www.cryptosbeginner.com/pt/regioes/brasil",
      "x-default":
        "https://www.cryptosbeginner.com/regions/brazil",
    },
  },
};

const UPDATED = "2026-08-13";

const platforms = [
  {
    name: "Mercado Bitcoin",
    bestFor: "Usuários brasileiros e acesso em BRL",
    note:
      "Uma das principais plataformas brasileiras de ativos digitais, com forte relevância local. Verifique a autorização atual do Banco Central, depósitos em BRL, Pix, custódia, tarifas e produtos disponíveis.",
    href: "https://www.mercadobitcoin.com.br",
    affiliate: false,
  },
  {
    name: "Bitso",
    bestFor: "Liquidez regional e stablecoins",
    note:
      "Exchange latino-americana com presença relevante no Brasil. Confira suporte a BRL, Pix, custódia, tarifas, ativos disponíveis e o status regulatório da entidade aplicável.",
    href: "https://bitso.com",
    affiliate: false,
  },
  {
    name: "Coinbase",
    bestFor: "Iniciantes e acesso internacional",
    note:
      "Uma plataforma internacional conhecida para compras simples e trading spot. Compare disponibilidade em BRL, custos de conversão, taxas, custódia e a entidade que atende ao Brasil.",
    href: "https://www.coinbase.com",
    affiliate: false,
  },
  {
    name: "Binance",
    bestFor: "Liquidez e variedade de tokens",
    note:
      "Uma plataforma global frequentemente comparada por traders brasileiros. Verifique Pix/BRL, autorização do Banco Central, restrições de produtos, custódia e canais de pagamento.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Kraken",
    bestFor: "Traders spot experientes",
    note:
      "Ferramentas de trading e liquidez internacional. Confira conversão BRL/USD, tarifas, staking, saques e disponibilidade para clientes brasileiros.",
    href: "https://go.cryptosbeginner.com/Kraken",
    affiliate: true,
  },
];

export default function BrazilPortuguesePage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">Português</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/brazil"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              Atualizado em{" "}
              <time dateTime={UPDATED}>13 de agosto de 2026</time> · Por
              Alexandre Barros
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Melhores exchanges de criptomoedas no Brasil em 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              O Brasil tem um dos mercados de criptoativos mais desenvolvidos
              da América Latina. A Lei 14.478 criou o marco legal dos ativos
              virtuais, o Banco Central do Brasil passou a autorizar e
              supervisionar os principais prestadores de serviços de ativos
              virtuais e a CVM continua responsável pelos tokens que
              se enquadram como valores mobiliários. A nova declaração
              DeCripto também muda a forma como as operações são reportadas
              à Receita Federal.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Revisão editorial brasileira
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Conteúdo revisado e adaptado para leitores brasileiros por{" "}
                <span className="font-semibold text-slate-900">
                  Alexandre Barros
                </span>
                , revisor editorial de ativos digitais e finanças pessoais.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Este conteúdo é educativo e não substitui aconselhamento
                financeiro, jurídico ou tributário personalizado.
              </p>
            </div>
          </div>
        </section>

        {/* Quick answer */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              Resposta rápida: qual exchange escolher?
            </h2>

            <p className="text-sm leading-7 text-indigo-950">
              O Mercado Bitcoin é uma comparação natural para quem busca
              acesso em reais e infraestrutura brasileira. A Bitso é uma
              alternativa regional, a Coinbase pode ser mais simples para
              iniciantes, a Binance costuma ser comparada por liquidez e
              variedade de tokens, e a Kraken pode atender traders spot
              experientes. Compare Pix, custos totais, custódia, saques,
              autorização do Banco Central e documentação para a Receita
              Federal.
            </p>

            <p className="mt-3 text-sm leading-7 text-indigo-950">
              O acesso técnico a uma plataforma não significa que todos os
              seus produtos estejam autorizados ou disponíveis para clientes
              brasileiros. Verifique a entidade jurídica e o serviço
              específico antes de depositar.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">
              Em resumo
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                O Brasil regulamenta os criptoativos por meio da Lei
                14.478/2022, conhecida como Marco Legal dos Ativos Virtuais.
              </li>

              <li>
                O Banco Central do Brasil autoriza e supervisiona os
                prestadores de serviços de ativos virtuais, enquanto a CVM
                trata dos tokens que se enquadram como valores mobiliários.
              </li>

              <li>
                As Resoluções BCB 519, 520 e 521 operacionalizaram o novo
                regime de autorização e supervisão a partir de 2 de fevereiro
                de 2026.
              </li>

              <li>
                O Mercado Bitcoin, Bitso, Coinbase, Binance e Kraken são
                plataformas importantes para comparação.
              </li>

              <li>
                A DeCripto substituiu o modelo anterior de reporte para as
                operações aplicáveis a partir de 1º de julho de 2026.
              </li>

              <li>
                DeCripto é principalmente um sistema de reporte. Não deve ser
                confundido automaticamente com uma nova alíquota de imposto.
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Nesta página
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#regulamentacao" className="hover:underline">
                  Banco Central, CVM e Lei 14.478
                </a>
              </li>

              <li>
                <a href="#plataformas" className="hover:underline">
                  Exchanges relevantes
                </a>
              </li>

              <li>
                <a href="#tributacao" className="hover:underline">
                  Tributação de criptoativos
                </a>
              </li>

              <li>
                <a href="#decripto" className="hover:underline">
                  DeCripto e obrigações de reporte
                </a>
              </li>

              <li>
                <a href="#financiamento" className="hover:underline">
                  BRL, Pix e pagamentos
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  Perguntas frequentes
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Regulation */}
        <section
          id="regulamentacao"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Banco Central, CVM e o marco regulatório brasileiro
          </h2>

          <p className="text-slate-700 mb-4">
            A Lei 14.478/2022 criou o marco legal dos ativos virtuais e dos
            prestadores de serviços de ativos virtuais. Entre as atividades
            abrangidas estão a troca, a transferência e a custódia de
            criptoativos para terceiros.
          </p>

          <p className="text-slate-700 mb-4">
            O Decreto 11.563/2023 designou o Banco Central do Brasil como
            principal autoridade para os prestadores de serviços de ativos
            virtuais. As regras do Banco Central que operacionalizaram o
            regime entraram em vigor em 2 de fevereiro de 2026.
          </p>

          <p className="text-slate-700 mb-4">
            O Banco Central trata de autorização, supervisão prudencial,
            governança, capital, custódia, pagamentos, cibersegurança,
            prevenção à lavagem de dinheiro e outros controles. A CVM
            continua responsável quando o token ou a estrutura se enquadra
            como valor mobiliário ou contrato de investimento.
          </p>

          <p className="text-slate-700 mb-4">
            Empresas que já atuavam no mercado podem estar em período de
            transição e migração para o novo regime. Antes de usar uma
            plataforma, consulte as informações atuais do Banco Central e
            identifique se o provedor já está autorizado, se está em processo
            de autorização ou se trabalha por meio de outra entidade.
          </p>

          <p className="text-sm text-slate-700">
            Fontes oficiais:{" "}
            <a
              href="https://www.bcb.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Banco Central do Brasil
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.br/cvm/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              CVM
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.br/receitafederal/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Receita Federal
            </a>
          </p>
        </section>

        {/* Platforms */}
        <section id="plataformas" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Exchanges de criptomoedas relevantes no Brasil
          </h2>

          <p className="text-slate-700 mb-6">
            Os usuários brasileiros normalmente valorizam depósitos em BRL,
            Pix, liquidez local, stablecoins e documentação tributária clara.
            As plataformas abaixo são pontos de comparação, não uma
            classificação definitiva.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Usuários brasileiros e BRL
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Mercado Bitcoin
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Uma das principais plataformas brasileiras de ativos digitais.
                Verifique autorização atual do Banco Central, depósitos em
                BRL, Pix, custódia, tarifas e produtos disponíveis.
              </p>

              <a
                href="https://www.mercadobitcoin.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Site oficial do Mercado Bitcoin →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Liquidez regional e stablecoins
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Bitso
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Exchange latino-americana com relevância no Brasil. Confira
                BRL, Pix, custódia, tarifas, ativos disponíveis e a situação
                regulatória da entidade aplicável.
              </p>

              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Site oficial da Bitso →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Iniciantes
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Coinbase
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma internacional para compras simples e custódia.
                Compare disponibilidade em BRL, conversão, tarifas, custódia
                e a entidade que atende ao Brasil.
              </p>

              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:underline"
              >
                Site oficial da Coinbase →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-indigo-600">
                Liquidez e variedade de tokens
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Binance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plataforma global frequentemente comparada por traders
                brasileiros. Verifique Pix/BRL, autorização do Banco Central,
                restrições de produtos e custódia.
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
        <section id="tributacao" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tributação de criptoativos no Brasil
          </h2>

          <p className="text-slate-700 mb-4">
            O Brasil aplica regras tributárias gerais aos criptoativos. O
            tratamento correto depende de a operação ser um investimento
            pessoal, uma venda, uma atividade empresarial, uma renda, um
            investimento no exterior ou outro tipo de transação.
          </p>

          <p className="text-slate-700 mb-4">
            A venda de cripto, a troca de um token por outro ou o uso de
            cripto para pagar bens e serviços pode gerar um evento tributável.
            O cálculo depende do custo de aquisição, do valor da venda, do
            tipo de ativo, do volume mensal e do canal utilizado.
          </p>

          <p className="text-slate-700 mb-4">
            Resumos atuais descrevem faixas progressivas para determinados
            ganhos de capital, incluindo alíquotas de 15%, 17,5%, 20% e
            22,5%. A alíquota, a isenção e o procedimento corretos dependem
            da operação e da regra aplicável ao contribuinte.
          </p>

          <p className="text-slate-700 mb-4">
            Staking, mineração, airdrops, lending, provisão de liquidez, DeFi
            e cripto recebida por trabalho podem ser tratados de forma
            diferente. Empresas e traders profissionais também podem ter
            obrigações fiscais e contábeis específicas.
          </p>

          <p className="text-sm text-slate-700">
            Fonte oficial:{" "}
            <a
              href="https://www.gov.br/receitafederal/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Receita Federal do Brasil
            </a>
          </p>
        </section>

        {/* DeCripto */}
        <section id="decripto" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            DeCripto e os reportes a partir de julho de 2026
          </h2>

          <p className="text-slate-700 mb-4">
            A DeCripto é o novo sistema da Receita Federal para o reporte de
            operações com criptoativos. Ela atualiza o modelo anterior de
            informações e aproxima o Brasil do padrão internacional CARF da
            OCDE.
          </p>

          <p className="text-slate-700 mb-4">
            A obrigatoriedade começou para as operações aplicáveis a partir
            de 1º de julho de 2026. O sistema pode alcançar prestadores de
            serviços de ativos virtuais, exchanges estrangeiras, operações
            P2P e determinadas atividades realizadas por meio de protocolos
            descentralizados quando os limites e condições aplicáveis forem
            atingidos.
          </p>

          <p className="text-slate-700 mb-4">
            A DeCripto é principalmente uma obrigação de informação. Ela não
            substitui automaticamente a análise do imposto devido sobre
            ganhos, renda, ativos no exterior ou atividade empresarial.
          </p>

          <p className="text-slate-700">
            Guarde IDs das transações, valores em reais, extratos de
            exchanges, endereços de wallets, taxas, custos de aquisição e
            datas. Um relatório de plataforma pode não incluir todas as
            transações DeFi, P2P ou de autocustódia.
          </p>
        </section>

        {/* Funding */}
        <section id="financiamento" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            BRL, Pix e métodos de pagamento
          </h2>

          <p className="text-slate-700 mb-4">
            Plataformas focadas no Brasil normalmente oferecem depósitos em
            reais por Pix ou outros meios locais. Exchanges internacionais
            podem usar provedores de pagamento terceirizados ou exigir
            conversão por outra moeda.
          </p>

          <p className="text-slate-700 mb-4">
            Compare o custo total: tarifa de Pix ou transferência, conversão
            de BRL, spread, comissão de trading, taxa de saque e tarifa de
            rede blockchain.
          </p>

          <p className="text-slate-700">
            Use contas de pagamento em seu próprio nome, guarde os
            comprovantes de Pix e responda corretamente às perguntas sobre a
            origem dos recursos. Evite contas de terceiros e operações OTC
            fora da plataforma.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Custódia e riscos para o consumidor
          </h2>

          <p className="text-slate-700 mb-4">
            A autorização do Banco Central pode melhorar a supervisão, mas
            não transforma cripto em depósito bancário garantido. Os preços
            podem cair, os saques podem ser interrompidos e uma plataforma
            pode sofrer insolvência, ataques ou falhas operacionais.
          </p>

          <p className="text-slate-700 mb-4">
            Verifique se você realmente possui os criptoativos, se pode
            sacá-los para uma wallet externa, se os ativos dos clientes são
            segregados e se a plataforma empresta ou reutiliza os ativos.
          </p>

          <p className="text-slate-700">
            Proof of Reserves pode ser um sinal de transparência, mas não
            comprova automaticamente que todas as obrigações estão cobertas
            ou que os clientes terão prioridade em uma insolvência.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              O que é Proof of Reserves? →
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              Check-list de segurança →
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              Guia de wallets →
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparacao" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Comparação prática para o Brasil
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Plataforma
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Melhor para
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Controles brasileiros
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Ação
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Mercado Bitcoin
                  </td>

                  <td className="px-4 py-3">
                    Usuários brasileiros e acesso em BRL.
                  </td>

                  <td className="px-4 py-3">
                    Autorização do Banco Central, Pix/BRL, custódia e taxas.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.mercadobitcoin.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Site oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bitso
                  </td>

                  <td className="px-4 py-3">
                    Liquidez regional e stablecoins.
                  </td>

                  <td className="px-4 py-3">
                    BRL/Pix, entidade, custódia e reporting.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bitso.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Site oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Coinbase
                  </td>

                  <td className="px-4 py-3">
                    Iniciantes e acesso internacional.
                  </td>

                  <td className="px-4 py-3">
                    BRL, conversão, entidade responsável e custódia.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://www.coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      Site oficial →
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    Liquidez e variedade de tokens.
                  </td>

                  <td className="px-4 py-3">
                    Pix/BRL, Banco Central, custódia e restrições de produtos.
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
                    Autocustódia
                  </td>

                  <td className="px-4 py-3">
                    Investimentos de longo prazo.
                  </td>

                  <td className="px-4 py-3">
                    Valores em BRL, registros para DeCripto e segurança da
                    frase de recuperação.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      Guia de wallets →
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
            Perguntas frequentes sobre cripto no Brasil
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Criptomoedas são legais no Brasil?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                A posse e a negociação de criptoativos são geralmente
                possíveis. A Lei 14.478 criou um marco específico, o Banco
                Central regula os prestadores relevantes e a CVM supervisiona
                os criptoativos que se enquadram como valores mobiliários.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                O que é a DeCripto?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                A DeCripto é o sistema de reporte da Receita Federal para
                operações com criptoativos. Ela altera a forma de prestar
                informações a partir de 1º de julho de 2026, mas não
                substitui automaticamente as regras do imposto devido.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Operações em exchanges estrangeiras precisam ser reportadas?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Residentes brasileiros podem ter obrigações de DeCripto para
                operações fora de exchanges brasileiras quando os limites
                aplicáveis forem superados. Consulte as instruções atuais da
                Receita Federal.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                É possível usar Pix para comprar cripto?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Algumas plataformas brasileiras e parceiros de pagamento
                aceitam Pix ou depósitos em BRL. Disponibilidade, limites e
                tarifas variam. Confirme quem processa o pagamento antes de
                enviar recursos.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                O Mercado Bitcoin é relevante para brasileiros?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                O Mercado Bitcoin é uma comparação natural para acesso em
                BRL e infraestrutura local. Verifique o status atual no
                Banco Central, as tarifas, a custódia, os ativos e os saques.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                A autorização do Banco Central garante segurança?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Não. A autorização pode reduzir determinados riscos de
                conformidade e do provedor, mas não elimina volatilidade,
                insolvência, hacks, phishing ou perda de chaves privadas.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Check-list para escolher uma exchange no Brasil
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Verifique a autorização do Banco Central e se a CVM se aplica
              ao produto.
            </li>

            <li>
              Confirme quem processa os depósitos em Pix ou BRL e se o
              provedor de pagamento é autorizado.
            </li>

            <li>
              Compare conversão BRL, spread, taxas de trading e saques.
            </li>

            <li>
              Guarde registros de compras, vendas, swaps, rewards e
              transferências entre wallets.
            </li>

            <li>
              Verifique se a DeCripto se aplica a exchanges estrangeiras,
              DeFi ou operações P2P.
            </li>

            <li>
              Trate staking, mineração, lending, airdrops e atividade
              empresarial como possíveis eventos tributários diferentes.
            </li>

            <li>
              Use 2FA, senhas exclusivas e backup offline da frase de
              recuperação.
            </li>

            <li>
              Consulte nossa{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                check-list de segurança
              </Link>{" "}
              e nossa{" "}
              <Link href="/methodology" className="text-indigo-700">
                metodologia
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Como escolher como residente no Brasil
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Comece por uma plataforma que aceite sua rota preferida em BRL
              ou Pix, explique sua autorização e forneça registros completos.
              Separe a análise tributária do reporte DeCripto e mantenha
              investimentos de longo prazo separados do saldo de trading.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.mercadobitcoin.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Mercado Bitcoin oficial
              </a>

              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                Bitso oficial
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
              <strong>Aviso:</strong> Conteúdo exclusivamente educativo. Não
              constitui aconselhamento financeiro, jurídico ou tributário. A
              regulamentação brasileira, o tratamento tributário e as
              obrigações da DeCripto podem mudar. Verifique as orientações
              atuais do Banco Central, da CVM e da Receita Federal antes de
              depositar fundos, fazer trading ou apresentar uma declaração.
              Alguns links podem ser de afiliados.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}