import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "What Are DEXes? On-Chain Trading Basics for 2026",
  description:
    "Detailed beginner guide to decentralised exchanges. How DEXes work, AMMs vs order books, risks, meme coin launchpads and safety tips.",
};

export default function DexesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              On-chain trading · Updated 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Decentralised Exchanges (DEXes) Explained
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              A decentralised exchange lets you trade directly from your
              wallet using smart contracts, not a centralised account.
              Understanding how DEXes work is key to using meme coins,
              yield strategies and on-chain tools safely.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="max-w-4xl mx-auto px-4 pt-6">
          <Image
            src="/images/dexes-hero.png"
            alt="Illustration of a user trading through a decentralised exchange from their wallet"
            width={1200}
            height={630}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
            priority
          />
        </section>

        {/* What is a DEX */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is a decentralised exchange?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            A decentralised exchange is a protocol that lets people swap
            crypto assets directly from their own wallets. Instead of
            sending funds to a company and trading inside its internal
            ledger, you interact with smart contracts that hold pooled
            liquidity or on-chain order books. You stay in self custody
            while trades are settled on the underlying blockchain.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            The two main designs are automated market maker DEXes, which
            use formulas to price swaps from token pools, and order book
            DEXes, which store limit orders and match them on-chain.
            Both types rely on other users or market makers supplying
            liquidity for you to trade against.
          </p>
        </section>

        {/* How DEXes work */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How a DEX works step by step
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Liquidity pools and AMMs
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                On an AMM DEX, pairs like ETH/USDC live in liquidity
                pools. Liquidity providers deposit both tokens and earn
                fees when traders swap. A pricing formula adjusts the
                pool price as trades change each token’s balance.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                You connect your wallet, choose a pair, enter the amount
                and sign a transaction. The contract pulls your input
                token, returns the output token and updates the pool.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Order books and on-chain matching
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Some DEXes use on-chain order books. You place a limit
                order specifying price and size, and the protocol matches
                you with other orders. This feels closer to a
                centralised exchange experience but relies on on-chain
                matching engines instead of internal databases.
              </p>
            </div>
          </div>

          {/* Diagram image */}
          <div className="mt-8">
            <Image
              src="/images/dexes-flow-diagram.png"
              alt="Diagram showing the flow of a swap on a decentralised exchange from wallet to smart contract and liquidity pool"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
            />
          </div>
        </section>

        {/* Why use DEXes */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why traders use DEXes
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            <li>
              Self custody. You keep control of your keys and funds at
              all times.
            </li>
            <li>
              Permissionless listings. New tokens can trade as soon as a
              pool exists, without a central listing process.
            </li>
            <li>
              Composability. DEXes plug into wallets, aggregators,
              launchpads and yield protocols.
            </li>
            <li>
              Global access. If you can connect a wallet, you can
              usually trade, regardless of local exchange access.
            </li>
          </ul>
        </section>

        {/* Risks */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Risks and what can go wrong
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            <li>
              Smart contract bugs and exploits that drain pools or lock
              funds.
            </li>
            <li>
              Liquidity manipulation, thin pools and slippage on large
              orders.
            </li>
            <li>
              Sandwich attacks and other MEV behaviour that worsen fill
              prices.
            </li>
            <li>
              Rug pulls, where creators yank liquidity from meme coin
              pools and leave buyers unable to sell.
            </li>
          </ul>
        </section>

        {/* Meme launchpads and terminals */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            DEXes, meme coin launchpads and trading terminals
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Modern meme ecosystems tie launchpads, DEXes and trading
            terminals together. Pump.fun is a Solana memecoin launchpad
            where tokens start on a bonding curve and graduate to DEX
            trading once they hit a threshold, which moves liquidity to
            pools on platforms like Raydium.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            Padre, now branded Terminal after its acquisition by
            Pump.fun, offers a multi-chain trading terminal that routes
            orders across Solana, Ethereum, Base and BNB Chain, giving
            meme traders a faster interface over DEX liquidity.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            Tools such as GMGN.ai scan launchpads including Pump.fun and
            other platforms, track smart wallets and provide one-click
            trading across DEXes and new listings.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            Use this page together with our meme coins, wallets and
            incidents guides before connecting a wallet to any new
            protocol.
          </p>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              Educational content only. Not financial advice. Test small
              trades first and treat new DEXes and meme coin pools as
              high risk until you understand them fully.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}