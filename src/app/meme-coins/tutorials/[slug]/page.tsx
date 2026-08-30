import { notFound } from "next/navigation";
import { platforms, videoSources } from "../../content";
import { PlatformProfile } from "../../MemeArticle";
import type { Metadata } from "next";

export function generateStaticParams() {
  return platforms.map((platform) => ({
    slug: platform.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((item) => item.slug === slug);

  if (!platform) {
    return {};
  }

  const title = `${platform.name} Review 2026: Features, Fees & Risk Checks`;

  const description = `${platform.summary} Review fee layers, custody, limitations, and practical checks before using ${platform.name}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.cryptosbeginner.com/meme-coins/reviews/${platform.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.cryptosbeginner.com/meme-coins/reviews/${platform.slug}`,
      type: "article",
    },
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platforms.find((item) => item.slug === slug);

  if (!platform) {
    notFound();
  }

  if (platform.slug === "gmgn-ai") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What GMGN shows</h2>

        <p>
          The supplied videos show Trenches and Trending discovery, token cards,
          chart timeframes, RSI and volume indicators, bubble maps, holders,
          token-audit surfaces, developer history, presets, Snipe X,
          Copywallet, and Buy/Sell panels. These features organize evidence;
          they do not certify a token.
        </p>

        <h2>Research workflow</h2>

        <ol>
          <li>
            Start in Trenches or Trending and use age, market-cap, liquidity,
            volume, transaction, and network filters to reduce noise.
          </li>
          <li>
            Open the token-detail page and review chart context, recent volume,
            liquidity, holder activity, and visible transaction patterns.
          </li>
          <li>
            Check holders, bubble maps, developer history, and linked-wallet
            activity where available. A label is a reason to investigate, not a
            final verdict.
          </li>
          <li>
            Confirm the exact token contract through primary sources and assess
            whether the token remains sellable through the expected route.
          </li>
          <li>
            Review amount, slippage, priority fee, tip, Anti-MEV settings, and
            the final wallet prompt before signing.
          </li>
        </ol>

        <h2>What to check before copy trading</h2>

        <p>
          Copy-style workflows add latency, selection bias, timing mismatch,
          position-size mismatch, and an exit problem. Treat a wallet&apos;s
          displayed P&amp;L as historical context. Ask whether the result is
          realized, what period it covers, and whether you can independently
          verify the token and liquidity.
        </p>

        <p>
          A profitable wallet can have a different entry price, token allocation,
          time horizon, route, and ability to exit than you. Copying a visible
          trade does not recreate the original trade conditions.
        </p>

        <h2>Fee stack</h2>

        <p>
          GMGN documentation describes a 1% handling fee per single transaction.
          Gas, priority fees, tips, venue fees, launchpad fees, slippage, and
          price impact remain separate layers. Check live settings and the
          transaction preview before relying on a headline fee number.
        </p>

        <h2>Who should avoid GMGN</h2>

        <p>
          A reader looking for an automatic safe-token signal, a guaranteed
          fill, or a way to copy a high-performing wallet without understanding
          timing and risk should avoid using GMGN as a shortcut.
        </p>

        <h2>Video references</h2>

        {videoSources
          .filter((video) => video.platform === "GMGN.ai")
          .map((video) => (
            <p key={video.id}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the original GMGN video on YouTube ↗
              </a>{" "}
              {video.caveat}
            </p>
          ))}
      </PlatformProfile>
    );
  }

  if (platform.slug === "fomo-photon") {
    return (
      <PlatformProfile platform={platform}>
        <h2>FOMO and Photon: different tools, different workflows</h2>

        <p>
          FOMO and Photon are separate products that solve different parts of a
          meme-coin workflow. FOMO focuses on social discovery, trader activity,
          leaderboards, alerts, and feed-based market context. Photon is
          primarily a Solana-oriented trading terminal for token discovery,
          charts, wallet activity, and execution controls.
        </p>

        <p>
          Neither platform verifies that a token is legitimate, liquid,
          sellable, or suitable for you. Treat social activity, trending feeds,
          visible wallet performance, and fast trading controls as research
          inputs. Verify the exact contract, holders, liquidity, route, and
          transaction details before signing.
        </p>

        <h2>FOMO: social discovery and alerts</h2>

        <p>
          The supplied FOMO video shows Trending and Leaderboard discovery,
          Thesis posts, trader profiles with average entry, investment,
          transactions, P&amp;L, and hold time, plus Holders and Swaps tabs,
          followed-trader alerts, and Buy/Sell controls. It also shows filters
          such as My Swaps, Friends Only, and minimum trade size.
        </p>

        <p>
          Use profiles, leaderboards, and alerts to create a research queue.
          A positive P&amp;L may reflect timing, size, unrealized positions,
          selection bias, and conditions you cannot reproduce. The visible
          “0% fee” label in a video should not be treated as an all-in cost
          statement. Routing, spread, slippage, network costs, and other charges
          require separate verification.
        </p>

        <h2>Photon: Solana discovery and execution</h2>

        <p>
          Photon is presented as a browser-based terminal for Solana token
          discovery and execution. The supplied token-detail, Memescope,
          settings, and XTracker screenshots illustrate visible workflow
          surfaces. They can help organize research and trading controls, but
          they do not validate a token or prove expected performance.
        </p>

        <p>
          Use a discovery feed to create a short list, then investigate the
          exact contract address, token age, liquidity, holder concentration,
          developer or linked-wallet activity, recent swaps, and sellability.
          A token can move quickly while exit liquidity remains thin.
        </p>

        <h2>Photon fees and real execution cost</h2>

        <p>
          Photon is commonly described as charging a 1% platform fee on each buy
          and each sell. A full buy-and-sell round trip can therefore include
          roughly 2% in stated platform fees before network fees, priority fees,
          optional tips, spread, price impact, and slippage. Verify the current
          fee schedule and live trade preview before submitting any transaction.
        </p>

        <p>
          For illustration only, a 5 SOL buy at a 1% platform fee would produce
          a 0.05 SOL fee. If you later sold for 5 SOL and the same schedule
          applied, the sale could add another 0.05 SOL fee. This does not include
          other costs and is not a prediction of results.
        </p>

        <h2>Social proof is not due diligence</h2>

        <p>
          The FOMO video warns against blindly copy-trading and notes that some
          traders may farm followers. The same caution applies to a trending
          Photon token or a wallet with a strong recent record. Social momentum
          can be a reason to investigate; it cannot prove creator intent,
          contract quality, liquidity durability, or your ability to exit.
        </p>

        <h2>First-use checklist</h2>

        <ul>
          <li>Use only verified official domains and bookmark them yourself.</li>
          <li>Use a separate, low-balance wallet for speculative activity.</li>
          <li>Never enter a seed phrase or private key into a website.</li>
          <li>Confirm the exact token contract from a primary source.</li>
          <li>Check liquidity, holders, recent swaps, and sellability.</li>
          <li>
            Review the wallet prompt, route, amount, slippage, and priority
            settings before signing.
          </li>
        </ul>

        <h2>Who should be especially cautious</h2>

        <p>
          Avoid treating either product as a safe-token list, a guaranteed
          performance tool, or a substitute for independent research. Beginners
          who do not understand contracts, wallet prompts, liquidity, slippage,
          price impact, and local tax or legal duties should learn those basics
          before risking funds.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>Is Photon the same as FOMO?</h3>

        <p>
          No. They are separate products with different interface and workflow
          priorities. Photon is generally associated with Solana trading-terminal
          functionality, while FOMO emphasizes social discovery, trader
          activity, and feed-based market context.
        </p>

        <h3>Does Photon verify whether a meme coin is safe?</h3>

        <p>
          No terminal can independently prove that a meme coin is safe. Use data
          surfaces to investigate, then confirm the contract, liquidity, holders,
          sellability, and transaction route through primary blockchain
          information and independent tools.
        </p>

        <h3>Can a trader&apos;s positive P&amp;L be treated as a buy signal?</h3>

        <p>
          No. Displayed performance can be incomplete or impossible to reproduce
          because of timing, position size, unrealized results, liquidity, and
          changing market conditions. Treat it as context for research, not a
          trading instruction.
        </p>

        <h2>Video reference</h2>

        <p>
          <a
            href="https://www.youtube.com/watch?v=PA4GoJvc5ls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the original FOMO video on YouTube ↗
          </a>{" "}
          The observed workflow is useful as a feature demonstration. Its social
          and fee implications still require independent checks.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "pump-fun") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What Pump.fun does</h2>

        <p>
          Pump.fun lowers the technical barrier to creating and trading tokens
          through a Solana launch flow. A visible launch list, social attention,
          recent buy, or market-cap figure is not token due diligence.
        </p>

        <h2>How to assess a Pump.fun token</h2>

        <ol>
          <li>
            Confirm the official domain, correct wallet, and exact token contract.
          </li>
          <li>
            Review creator activity, token age, holder concentration, recent
            swaps, and early-wallet behavior.
          </li>
          <li>
            Check the current liquidity path, bonding-curve or graduation
            status, and whether a realistic exit route exists.
          </li>
          <li>
            Model the likely price impact and slippage at your intended trade
            size before signing.
          </li>
          <li>
            Use a small, predefined risk amount and set an exit condition before
            entering.
          </li>
        </ol>

        <h2>Fee structure and uncertainty</h2>

        <p>
          Pump.fun has published different fee layers for token creation,
          graduation, bonding-curve activity, and canonical PumpSwap pools.
          Network fees, wallet charges, spread, price impact, and slippage can
          be separate. The live fee page and transaction preview are the source
          of truth because conditions may change.
        </p>

        <h2>Who should avoid Pump.fun</h2>

        <p>
          Readers who cannot tolerate a complete loss, cannot verify a contract,
          or treat launchpad activity as evidence of token quality should avoid
          using permissionless token creation and early trading as a shortcut.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "padre-terminal") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What Padre is for</h2>

        <p>
          Padre is presented as a trading-terminal workflow for meme-coin
          discovery, charting, wallet monitoring, and execution. A terminal can
          make research and order placement faster, but it does not remove token,
          liquidity, smart-contract, or execution risk.
        </p>

        <h2>What the supplied interface shows</h2>

        <p>
          The supplied screenshots show a homepage, terminal interface, tracking
          surface, and Trenches-style view. They support descriptions of visible
          product surfaces, but they do not independently prove execution speed,
          uptime, fee savings, connected trading performance, or results.
        </p>

        <h2>Before using Padre</h2>

        <ol>
          <li>Verify the official domain and the connected wallet.</li>
          <li>
            Confirm the network, exact token contract, available liquidity, and
            expected route.
          </li>
          <li>
            Review amount, slippage, priority settings, price impact, and every
            wallet prompt before signing.
          </li>
          <li>
            Check the current terms, eligible jurisdictions, fee basis, and any
            cashback conditions directly with the provider.
          </li>
        </ol>

        <h2>Cashback and fee claims</h2>

        <p>
          Public Padre marketing has referenced cashback and execution-related
          benefits. Treat these as provider claims rather than independently
          verified outcomes. Confirm eligibility, calculation method, fees,
          settlement timing, exclusions, and current terms before relying on a
          promotional figure.
        </p>

        <h2>Who should avoid Padre</h2>

        <p>
          A reader who needs a guaranteed fee, guaranteed fill, or a platform
          that removes liquidity and smart-contract risk should not treat a
          terminal as a safety layer.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "axiom-trade") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What Axiom is for</h2>

        <p>
          Axiom is a meme-coin trading terminal built around token discovery,
          market monitoring, wallet activity, and execution workflows. It can
          bring research tools into one interface, but it cannot determine that
          a token is legitimate or that a trade will be profitable.
        </p>

        <h2>How to use Axiom as a research workflow</h2>

        <ol>
          <li>
            Start with discovery surfaces to build a small research queue instead
            of reacting immediately to every new token.
          </li>
          <li>
            Open the token page and check liquidity, market activity, holder
            concentration, recent swaps, and visible wallet behavior.
          </li>
          <li>
            Confirm the exact contract through a primary source and check
            sellability through independent on-chain tools.
          </li>
          <li>
            Review order size, slippage, route, network fee, priority settings,
            and the final signing request before execution.
          </li>
          <li>
            Set a maximum position size, invalidation point, and exit rule before
            the market moves.
          </li>
        </ol>

        <h2>What terminal data cannot prove</h2>

        <p>
          Charts, trending lists, displayed wallet results, and social activity
          can help identify questions to investigate. They cannot independently
          establish creator intent, contract safety, liquidity durability, or
          the price at which you will be able to exit.
        </p>

        <h2>Fees and execution cost</h2>

        <p>
          Check Axiom&apos;s current fee schedule, route preview, and transaction
          prompt before trading. A platform fee is only one layer of cost;
          network fees, priority settings, spread, price impact, slippage, and
          token-level restrictions can materially change the outcome.
        </p>

        <h2>Who should be especially cautious</h2>

        <p>
          Axiom is not a shortcut for beginners seeking a safe-token list,
          guaranteed results, or automatic wallet-copying success. If you cannot
          explain the contract, liquidity situation, transaction route, and exit
          condition, skipping the trade is usually the lower-risk choice.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "bags-fm") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What Bags.fm does</h2>

        <p>
          Bags.fm is a Solana-native launchpad and creator-monetization product.
          Its public site combines token discovery with a launch flow, while its
          documentation describes token launch configuration, metadata creation,
          fee-share setup, transaction generation, signing, and broadcast.
        </p>

        <p>
          This makes it different from a terminal such as GMGN or Axiom. Its
          main purpose is launching and configuring a token workflow, not merely
          presenting a market-monitoring interface.
        </p>

        <h2>Launch workflow</h2>

        <ol>
          <li>
            Prepare the token name, symbol, description, image, and optional
            social links.
          </li>
          <li>
            Use a Solana wallet with sufficient SOL for network transactions and
            any chosen launch configuration.
          </li>
          <li>
            Configure creator and optional fee claimers before generating the
            launch transaction.
          </li>
          <li>
            Review the transaction, sign it in the correct wallet, and confirm
            the resulting mint address and metadata independently.
          </li>
        </ol>

        <h2>What fee sharing does not prove</h2>

        <p>
          Royalties or fee sharing can explain how trading fees are allocated.
          They do not prove that a token has organic demand, sustainable
          liquidity, a credible creator, or a market in which you can exit.
        </p>

        <h2>Checks before trading a launch</h2>

        <p>
          Confirm the mint address, authority settings, holder concentration,
          liquidity path, creator-linked wallets, social authenticity, and
          sellability. A launch page is not a token audit or investment thesis.
        </p>

        <h2>Who Bags.fm may fit</h2>

        <p>
          Bags.fm may be more relevant to a creator or researcher who wants a
          documented Solana launch workflow than to a beginner seeking a safe
          token signal. Some product features may be developer-oriented rather
          than one-click consumer tools.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "four-meme") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What Four.meme does</h2>

        <p>
          Four.meme is a BNB Chain launchpad for creating and discovering meme
          tokens. It can reduce deployment and market-creation steps, but it
          does not replace contract review, holder analysis, liquidity checks,
          or a plan for what happens after launch.
        </p>

        <h2>How to assess a Four.meme launch</h2>

        <ol>
          <li>
            Confirm that you are on the intended Four.meme domain and that the
            connected wallet is using BNB Chain.
          </li>
          <li>
            Record the token contract, creator address, launch time, and any
            displayed bonding-curve or graduation information.
          </li>
          <li>
            Check holder concentration, creator-linked wallets, liquidity
            destination, sell transactions, and whether the expected route works.
          </li>
          <li>
            Separate BNB Chain gas and platform charges from the token&apos;s
            displayed market activity.
          </li>
        </ol>

        <h2>Fees and uncertainty</h2>

        <p>
          Launch charges, graduation rules, creator fees, gas, routing, and
          liquidity conditions can change. Check the live provider documentation
          and transaction preview instead of relying on a single claimed all-in
          fee.
        </p>

        <h2>Who should avoid Four.meme</h2>

        <p>
          Four.meme is a poor fit for anyone treating a low-cost launch as
          evidence of quality or assuming that a token will graduate, retain
          liquidity, or remain sellable. Permissionless access makes independent
          checks more important.
        </p>
      </PlatformProfile>
    );
  }

  if (platform.slug === "sunpump") {
    return (
      <PlatformProfile platform={platform}>
        <h2>What SunPump does</h2>

        <p>
          SunPump is a TRON-based launchpad and discovery market. Its public
          interface exposes Home, Launch, Ranking, SunAI, Campaigns, and
          Explorer surfaces, with activity commonly shown in TRX.
        </p>

        <h2>Practical launch and discovery workflow</h2>

        <ol>
          <li>
            Open the official SunPump domain and confirm the correct wallet
            network before connecting.
          </li>
          <li>
            For a new launch, review the token metadata, creator address, launch
            conditions, and displayed market or graduation information.
          </li>
          <li>
            Copy the contract address from the official page and verify it using
            an independent TRON explorer.
          </li>
          <li>
            Inspect holders, creator-linked activity, liquidity, sellability,
            and transaction cost in TRX before considering a position.
          </li>
        </ol>

        <h2>Fees and network context</h2>

        <p>
          SunPump activity may be displayed in TRX, but launch fees, transaction
          fees, burns, and market or graduation rules should be checked in the
          current product documentation. A displayed market cap or recent buy is
          not proof that the token can be sold at the expected price.
        </p>

        <h2>Who SunPump may fit</h2>

        <p>
          SunPump may be useful for researching the TRON meme-token launch
          ecosystem or for creators who understand TRON wallet and contract
          workflows. It is not a safety filter, and visible ranking or activity
          should not be treated as a recommendation.
        </p>
      </PlatformProfile>
    );
  }

  return (
    <PlatformProfile platform={platform}>
      <h2>What {platform.name} is for</h2>

      <p>
        {platform.summary} The platform should be evaluated as a workflow tool,
        not as a token-validation service.
      </p>

      <h2>Features and limitations</h2>

      <p>{platform.caution}</p>

      <h2>Fees and real execution cost</h2>

      <p>
        {platform.fee} Check the current provider documentation and transaction
        receipt for the actual cost of any trade.
      </p>

      <h2>First-use checklist</h2>

      <ol>
        <li>Use a dedicated low-balance wallet.</li>
        <li>Verify the contract from an independent source.</li>
        <li>Inspect holders, liquidity, and token sellability.</li>
        <li>Set an explicit slippage ceiling where applicable.</li>
        <li>Test a small transaction when appropriate.</li>
        <li>Write an exit rule before signing.</li>
      </ol>
    </PlatformProfile>
  );
}
