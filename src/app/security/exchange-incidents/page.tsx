import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Exchange and Wallet Security Incidents Timeline (Updated 2026)",
  description:
    "A curated timeline of notable crypto exchange, bridge, and wallet security incidents from Mt. Gox to the 2026 Bitget hack, with impact, response, and practical lessons for beginners.",
};

type IncidentSeverity = "low" | "medium" | "high";

type IncidentType =
  | "exchange-hack"
  | "bridge-exploit"
  | "defi-exploit"
  | "wallet-exploit"
  | "data-breach"
  | "oracle-exploit"
  | "misuse-of-funds";

interface Incident {
  id: string;
  year: number;
  date: string;
  platform: string;
  incidentType: IncidentType;
  severity: IncidentSeverity;
  title: string;
  description: string;
  impact: string;
  response: string;
  lessons: string;
  amountUsd?: number;
  amountNote?: string;
  sourceUrl?: string;
  relatedSlug?: string;
}

const incidents: Incident[] = [
  // Mt. Gox 2014
  {
    id: "mtgox-2014",
    year: 2014,
    date: "2014-02-28",
    platform: "Mt. Gox",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Mt. Gox collapse after years of undetected hot wallet thefts",
    description:
      "Launched in 2010, Mt. Gox grew into the dominant Bitcoin exchange before collapsing in early 2014. Later analysis suggested that most of the missing coins had been leaking from its hot wallet since late 2011, far beyond a single one-off hack.",
    impact:
      "Around 744,408 customer bitcoins and 100,000 company-held bitcoins were lost. Trading halted, the site was taken offline and the company entered bankruptcy, leaving many early users locked in multi-year recovery proceedings.",
    response:
      "The company first blamed transaction malleability, then entered civil rehabilitation. Ongoing court-supervised processes aim to redistribute remaining assets to creditors and former customers.",
    lessons:
      "Mt. Gox showed that basic hot-wallet security failures could silently drain an exchange over years. It is one reason modern platforms lean heavily on cold storage, multi-signature controls and external audits.",
    amountUsd: 450,
    amountNote: "at 2014 prices",
    sourceUrl: "https://en.wikipedia.org/wiki/Mt._Gox",
  },

  // Bitfinex 2016
  {
    id: "bitfinex-2016",
    year: 2016,
    date: "2016-08-02",
    platform: "Bitfinex",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Bitfinex loses 119,756 BTC from multisig hot wallets",
    description:
      "Attackers breached Bitfinex's hot wallet infrastructure, which used BitGo multisignature wallets, and stole close to 120,000 bitcoin in a single incident.",
    impact:
      "Around 72 million dollars at the time. Bitfinex socialized the loss with a 36 percent haircut across all customer balances and issued BFX recovery tokens.",
    response:
      "Bitfinex repaid all BFX tokens within eight months through trading profits and equity conversion, an unusually complete recovery for an exchange hack.",
    lessons:
      "Multisig alone does not guarantee safety if the signing flow is compromised. Bitfinex also showed that transparent loss-sharing plus a credible repayment plan can preserve a platform, though users should never count on being made whole.",
    amountUsd: 72,
    sourceUrl: "https://en.wikipedia.org/wiki/Bitfinex",
  },

  // Coincheck 2018
  {
    id: "coincheck-2018",
    year: 2018,
    date: "2018-01-26",
    platform: "Coincheck",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Coincheck loses $530M in NEM from a hot wallet without multisig",
    description:
      "Attackers stole roughly 523 million NEM (XEM) tokens from Coincheck. The funds sat in a hot wallet that did not use multisignature protection, making a single breach catastrophic.",
    impact:
      "Around 530 million dollars, affecting about 260,000 users. At the time it was the largest single crypto theft on record.",
    response:
      "Coincheck reimbursed all affected users from its own funds, about 425 million dollars, and was later acquired by Monex Group, which invested heavily in security upgrades.",
    lessons:
      "Storing large balances in a hot wallet without multisig is a basic failure. Full reimbursement came from company reserves, a privilege of a profitable operator, not something users should expect elsewhere.",
    amountUsd: 530,
  },

  // KuCoin 2020 (merged entry)
  {
    id: "kucoin-2020",
    year: 2020,
    date: "2020-09-25",
    platform: "KuCoin",
    incidentType: "exchange-hack",
    severity: "high",
    title: "KuCoin hot wallet compromise and rapid token reissues",
    description:
      "In September 2020, KuCoin detected unauthorised outflows from its hot wallets. Private keys controlling those wallets had been exposed, allowing attackers to move funds into their own addresses and immediately begin swapping assets on on-chain markets. Investigators later traced the laundering trail through decentralised exchanges and mixing services.",
    impact:
      "Roughly 281 million dollars across Bitcoin, Ether and many ERC-20 tokens. Cold wallets stayed intact. Coordination with token issuers let a majority of stolen ERC-20 tokens be frozen and reissued, while base-layer coins proved irrecoverable.",
    response:
      "KuCoin moved remaining hot wallet funds to new wallets, paused deposits and withdrawals, and worked with law enforcement and analytics firms. An insurance fund and issuer support eventually covered most user losses.",
    lessons:
      "KuCoin underlined strict hot wallet key management and fast incident response. It also showed the practical difference between token contracts that can be frozen or reissued and base-layer coins that cannot be rolled back.",
    amountUsd: 281,
    sourceUrl: "https://www.coindesk.com/markets/2020/09/26/over-280m-drained-in-kucoin-crypto-exchange-hack",
  },

  // Ledger data breach 2020
  {
    id: "ledger-data-2020",
    year: 2020,
    date: "2020-07-28",
    platform: "Ledger (e-commerce and marketing data)",
    incidentType: "data-breach",
    severity: "medium",
    title: "Ledger customer contact data breach and leak",
    description:
      "An attacker gained access to Ledger's e-commerce and marketing database via a leaked API key. A later incident involving a rogue partner support agent compounded the problem and led to a large set of customer records being exposed online.",
    impact:
      "Around one million email addresses and more than 270,000 detailed records, including names, postal addresses and phone numbers, were leaked. Hardware wallets and private keys remained secure, but affected customers faced waves of phishing and extortion attempts.",
    response:
      "Ledger patched the underlying issues, notified authorities and users, and published several updates explaining what happened. The company increased focus on data minimisation and partner oversight.",
    lessons:
      "The Ledger breach highlighted that data about who owns hardware wallets can be almost as sensitive as private keys themselves. Users should expect phishing after such breaches and never type recovery phrases into software or forms that claim to be checking wallet safety.",
    sourceUrl:
      "https://www.ledger.com/addressing-the-july-2020-e-commerce-and-marketing-data-breach",
  },

  // Poly Network 2021
  {
    id: "polynetwork-2021",
    year: 2021,
    date: "2021-08-10",
    platform: "Poly Network",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "Poly Network loses $611M to a cross-chain contract flaw",
    description:
      "An attacker exploited a cryptography flaw in Poly Network's cross-chain message verification, tricking the contract into authorising transfers, and drained funds across Ethereum, BNB Chain and Polygon.",
    impact:
      "Around 611 million dollars, then the largest DeFi exploit on record. Unusually, the attacker later returned nearly all of it, claiming white-hat motives.",
    response:
      "Poly Network publicly negotiated with the attacker, offered a 500,000 dollar bug bounty, and recovered the bulk of the funds over several weeks.",
    lessons:
      "Cross-chain message verification is extremely hard to get right. Recovery here depended on the attacker's cooperation, an outcome nobody should plan around.",
    amountUsd: 611,
  },

  // Ronin 2022
  {
    id: "ronin-2022",
    year: 2022,
    date: "2022-03-23",
    platform: "Ronin Network (Axie Infinity)",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "Ronin bridge drained of $625M after validator keys compromised",
    description:
      "Attackers compromised five of the nine Ronin validator private keys, reportedly through a social-engineered fake job offer to an Axie Infinity developer, then approved fraudulent withdrawals from the Ronin bridge. The theft went unnoticed for nearly a week.",
    impact:
      "About 173,600 ETH and 25.5 million USDC, roughly 625 million dollars at the time. US authorities attributed the attack to North Korea's Lazarus Group.",
    response:
      "Sky Mavis raised a 150 million dollar round led by Binance to help reimburse users, hardened validator operations, and worked with law enforcement to trace and seize laundered funds over the following years.",
    lessons:
      "Five-of-nine multisig means little when four keys sit with one organisation. Operational security around people, not just code, decides bridge safety.",
    amountUsd: 625,
  },

  // Wormhole 2022
  {
    id: "wormhole-2022",
    year: 2022,
    date: "2022-02-02",
    platform: "Wormhole",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "Wormhole loses $325M to a signature verification flaw",
    description:
      "An attacker exploited a missing signature check in Wormhole's Solana program, minting 120,000 wrapped ETH on Solana without depositing collateral on Ethereum.",
    impact:
      "Around 325 million dollars. Jump Crypto, Wormhole's parent backer, immediately backfilled the missing ETH so users were made whole.",
    response:
      "Jump Crypto replaced the stolen funds within a day and Wormhole patched the vulnerability, later launching a large bug bounty program.",
    lessons:
      "Audits do not catch everything, especially in complex cross-chain code. A deep-pocketed backstop saved users here, which is the exception rather than the rule.",
    amountUsd: 325,
  },

  // BNB Chain bridge 2022
  {
    id: "bnbchain-2022",
    year: 2022,
    date: "2022-10-06",
    platform: "BNB Chain (BSC Token Hub)",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "BSC Token Hub exploit mints 2M BNB",
    description:
      "An attacker exploited a bug in the BSC Token Hub's cross-chain proof verification, forging proofs to mint two million BNB directly.",
    impact:
      "Roughly 560 million dollars minted. Validators halted the chain within hours, so most of the minted BNB never moved; just over 100 million dollars was actually taken cross-chain.",
    response:
      "BNB Chain validators coordinated a chain halt, froze the attacker's accounts, and later voted through governance to handle the frozen funds and reimburse affected parties.",
    lessons:
      "The ability to halt a chain is itself a form of centralisation. It limited losses here, but users of supposedly decentralised networks should know who can pull that lever.",
    amountUsd: 560,
  },

  // Mango Markets 2022
  {
    id: "mango-2022",
    year: 2022,
    date: "2022-10-11",
    platform: "Mango Markets",
    incidentType: "oracle-exploit",
    severity: "high",
    title: "Mango Markets drained of $110M via oracle price manipulation",
    description:
      "Trader Avraham Eisenberg used large orders to pump the thinly traded MNGO perpetual price, then borrowed against the inflated collateral and drained the protocol's treasury.",
    impact:
      "Around 110 million dollars. Eisenberg publicly called it a legal trading strategy, but was later convicted of fraud in the United States.",
    response:
      "Mango's DAO negotiated a partial return of funds and pursued legal action alongside federal prosecutors.",
    lessons:
      "Oracles that read thin markets can be weaponised. And as Eisenberg learned, calling an exploit a trading strategy does not make it legal.",
    amountUsd: 110,
  },

  // FTX 2022
  {
    id: "ftx-2022",
    year: 2022,
    date: "2022-11-11",
    platform: "FTX and Alameda Research",
    incidentType: "misuse-of-funds",
    severity: "high",
    title: "FTX and Alameda collapse after secret use of customer assets",
    description:
      "From 2019 to 2022, FTX marketed itself as a safe and liquid exchange while its affiliate Alameda Research quietly drew billions of dollars of customer assets via hidden credit lines and bank accounts. Special code paths exempted Alameda from standard risk controls, letting it run a large negative balance backed by user deposits.",
    impact:
      "Regulators later alleged that over 8 billion dollars of customer deposits had been misappropriated or lost. When confidence broke in November 2022, withdrawal requests revealed a massive shortfall and both companies filed for bankruptcy.",
    response:
      "New management began forensic work inside the bankruptcy estate. The SEC, CFTC and other regulators filed civil charges, and criminal proceedings targeted the former leadership. Recovery efforts continue with partial distributions to creditors.",
    lessons:
      "FTX showed that financial failure can come not only from external hacks but from internal misuse and commingling of funds. Transparent proof of reserves, clear segregation of customer assets and strong governance are critical when choosing an exchange.",
    sourceUrl: "https://www.sec.gov/newsroom/press-releases/2022-219",
  },

  // Euler Finance 2023
  {
    id: "euler-2023",
    year: 2023,
    date: "2023-03-13",
    platform: "Euler Finance",
    incidentType: "defi-exploit",
    severity: "high",
    title: "Euler Finance loses $197M to a flash-loan logic flaw",
    description:
      "An attacker used flash loans to exploit a flawed donation and liquidation mechanism in Euler's lending markets, draining funds across several asset pools.",
    impact:
      "Around 197 million dollars. After on-chain negotiations, the attacker returned the majority of the funds.",
    response:
      "Euler negotiated publicly with the attacker, offered a bounty, recovered most assets, and later relaunched with a redesigned protocol and bug bounty program.",
    lessons:
      "Complex DeFi lending logic needs formal verification, not just audits. Negotiation recovered funds here, but it only works when the attacker is willing to talk.",
    amountUsd: 197,
  },

  // Ledger Connect Kit 2023
  {
    id: "ledger-connect-kit-2023",
    year: 2023,
    date: "2023-12-14",
    platform: "Ledger Connect Kit",
    incidentType: "wallet-exploit",
    severity: "medium",
    title: "Ledger Connect Kit library compromise and DeFi wallet drainer",
    description:
      "A former Ledger employee's credentials were compromised, allowing attackers to push malicious versions of the Ledger Connect Kit JavaScript library to npm. Many DeFi frontends loaded that library directly, and the poisoned versions injected wallet drainer logic into dApps.",
    impact:
      "Around 600,000 dollars in crypto was stolen as users connected hardware wallets to compromised DeFi sites and signed transactions that had been silently altered.",
    response:
      "Ledger and affected dApps pulled and replaced the malicious library versions, coordinated with WalletConnect to cut off the rogue project, and published technical incident reports for developers.",
    lessons:
      "Protecting self-custody involves both wallet firmware and the web applications people use. Projects benefit from pinning dependencies, using integrity checks and reacting quickly to upstream compromises.",
    amountUsd: 0.6,
    sourceUrl: "https://www.ledger.com/blog/security-incident-report",
  },

  // Bybit 2025
  {
    id: "bybit-2025",
    year: 2025,
    date: "2025-02-21",
    platform: "Bybit",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Bybit Ethereum wallet compromise and multi-billion dollar loss",
    description:
      "Attackers compromised the signing flow for Bybit's main Ethereum wallet and associated contracts. They tricked signers into approving changes that moved control to a malicious implementation, then drained large holdings of Ether and staked Ether in a short period.",
    impact:
      "Roughly 1.4 to 1.5 billion dollars in Ether and related assets, the largest single exchange theft on record at the time. The FBI attributed the attack to North Korea's TraderTraitor group.",
    response:
      "Bybit processed an intense wave of withdrawals, secured emergency funding and loans, and worked to restore reserves. The platform launched bounty offers and detailed post incident communications while regulators and law enforcement investigated.",
    lessons:
      "Bybit's loss highlighted that custody risk remains central even for large and well-known exchanges. Blind signing defeating a multisig shows that the human approval step is itself an attack surface.",
    amountUsd: 1500,
    sourceUrl: "https://rekt.news/bybit-rekt",
    relatedSlug: "/exchanges/best-crypto-exchanges-2026",
  },

  // Drift Protocol 2026
  {
    id: "drift-2026",
    year: 2026,
    date: "2026-04-01",
    platform: "Drift Protocol",
    incidentType: "defi-exploit",
    severity: "high",
    title: "Drift Protocol loses $285M after months of social engineering",
    description:
      "Attackers posed as a quantitative trading firm and built trust with Drift contributors over several months, including in-person meetings. They obtained pre-signed authority from Drift's Security Council using a Solana durable nonce, whitelisted a fake CVT token with a self-controlled oracle, deposited it as collateral, and withdrew funds in 128 seconds.",
    impact:
      "Around 285 million dollars, drained using only legitimate Solana features and admin permissions. No smart contract bug was exploited, which made the attack especially hard to detect in advance.",
    response:
      "Drift disclosed the incident, worked with investigators and law enforcement, and reviewed its admin key and listing processes.",
    lessons:
      "Social engineering can defeat technical controls entirely. Admin actions need multi-party verification with out-of-band confirmation, and pre-signed authority should expire quickly.",
    amountUsd: 285,
    sourceUrl: "https://crypto.news/defi-hacks-2026-billion-lost-same-attack-keeps-working/",
  },

  // KelpDAO 2026
  {
    id: "kelpdao-2026",
    year: 2026,
    date: "2026-04-18",
    platform: "KelpDAO",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "KelpDAO loses $291M through compromised bridge infrastructure",
    description:
      "Attackers compromised a LayerZero developer's session keys in March, poisoned the RPC infrastructure feeding the bridge's verifier network, and minted 116,500 unbacked rsETH on April 18. No smart contract was exploited.",
    impact:
      "Around 291 million dollars, the largest DeFi hack of 2026's first half. The stolen tokens were funneled into Aave as collateral, triggering a 6.28 billion dollar TVL drop and market freezes at nine DeFi platforms. KelpDAO later fully re-backed rsETH.",
    response:
      "KelpDAO paused the protocol, executed a recovery plan that re-backed every minted token, and worked with bridge and infrastructure providers on verifier security.",
    lessons:
      "Bridge security lives in off-chain infrastructure, RPC nodes, verifier keys, failover design, as much as in contracts. A single compromised operator key can be enough.",
    amountUsd: 291,
    sourceUrl: "https://crypto.news/defi-hacks-2026-billion-lost-same-attack-keeps-working/",
  },

  // Coldcard 2026
  {
    id: "coldcard-2026",
    year: 2026,
    date: "2026-07-30",
    platform: "Coldcard (Coinkite)",
    incidentType: "wallet-exploit",
    severity: "high",
    title: "Coldcard firmware bug and large self-custody losses",
    description:
      "A bug introduced in March 2021 reduced seed randomness on some Coldcard devices by falling back to a predictable software random number generator. In 2026, attackers exploited that weakness to brute force keys and drain funds from addresses created on vulnerable firmware.",
    impact:
      "Across multiple waves, more than one thousand bitcoins, about 116 million dollars, were taken from thousands of wallets, making this one of the largest hardware wallet failures recorded. Only wallets seeded on fixed firmware or other devices were unaffected.",
    response:
      "Coinkite released patched firmware and urged users to move funds to wallets generated with corrected randomness. However, upgrading firmware could not repair seeds that had already been created under the flawed generator.",
    lessons:
      "Even specialised hardware can have subtle cryptographic bugs. For large holdings, many users now consider multi-signature setups, diverse vendors and occasional migrations to fresh seeds as part of defence in depth.",
    amountUsd: 116,
    sourceUrl:
      "https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack",
  },

  // Ostium 2026
  {
    id: "ostium-2026",
    year: 2026,
    date: "2026-07-15",
    platform: "Ostium (Arbitrum perp DEX)",
    incidentType: "oracle-exploit",
    severity: "high",
    title: "Ostium price signer compromise and vault drain",
    description:
      "Ostium, a perpetuals protocol on Arbitrum, suffered an exploit after an attacker compromised its off chain price reporting system. They submitted forged but validly signed oracle prices and routed them through a task scheduler to manufacture artificial trading profits.",
    impact:
      "Around 18 to 24 million dollars in stablecoins were drained from the liquidity vault backing trader positions. Trader collateral remained safe, but liquidity providers bore the loss.",
    response:
      "The protocol paused trading, brought in external investigators, hardened its off chain price signing environment and began to design recovery options for affected liquidity providers.",
    lessons:
      "Ostium's experience showed that DeFi risk is not limited to smart contracts. Off chain infrastructure such as oracle signers and automation keys must be treated as critical security components.",
    amountUsd: 21,
    sourceUrl: "https://www.blockchainbreaches.com/en/breaches/ostium-2026",
  },

  // SafePal / Trezor 2026 data leaks
  {
    id: "safepal-2026",
    year: 2026,
    date: "2026-08-16",
    platform: "SafePal and Trezor",
    incidentType: "data-breach",
    severity: "medium",
    title: "SafePal and Trezor customer data exposures and phishing risk",
    description:
      "Separate incidents at SafePal and a Trezor shipping provider exposed tens of thousands of customer order records, including names, email addresses and home addresses. The leaks did not reveal recovery phrases or keys but made hardware wallet buyers more visible to attackers.",
    impact:
      "Around fifty thousand records were exposed across both companies, raising the risk of targeted phishing, extortion attempts and physical threats against self-custody users.",
    response:
      "SafePal and Trezor fixed the underlying issues, notified customers and authorities, and worked to remove malicious phishing sites and communications that used the leaked lists.",
    lessons:
      "These incidents showed that privacy around who owns hardware wallets is itself a safety issue. Users benefit from treating any breach-linked email or message as suspect and keeping recovery phrases completely offline.",
    sourceUrl:
      "https://www.forbes.com/sites/boazsobrado/2026/08/17/fraudulent-letters-trezor-safepal-warning-as-53487-owners-exposed/",
  },

  // Liquid Network 2026
  {
    id: "liquid-2026",
    year: 2026,
    date: "2026-09-06",
    platform: "Liquid Network (bridge)",
    incidentType: "bridge-exploit",
    severity: "high",
    title: "Liquid Network bridge exploit drains about $319M",
    description:
      "Attackers exploited the Liquid Network bridge in early September 2026, moving roughly 4,000 BTC out of the protocol. It became the second largest incident of the year by value.",
    impact:
      "Around 319 million dollars, the second biggest single loss of 2026 after Bitget, according to CertiK's quarterly figures.",
    response:
      "Investigators traced the flows as the industry coordinated on freezing and monitoring the stolen funds. Details of the exploit vector were still being established in the weeks after the incident.",
    lessons:
      "Bridges remain the highest-value targets in crypto. Until details are public, the standing lesson holds: bridge deposits are among the riskiest positions in DeFi.",
    amountUsd: 319,
    sourceUrl:
      "https://news.leodex.io/news/crypto-hacks-top-2-68-billion-in-2026-as-five-incidents-drive-59-of-losses",
  },

  // Bitget 2026
  {
    id: "bitget-2026",
    year: 2026,
    date: "2026-09-24",
    platform: "Bitget",
    incidentType: "exchange-hack",
    severity: "high",
    title: "Bitget loses $387M after backend wallet system compromise",
    description:
      "On September 24, 2026, attackers compromised a critical backend system inside Bitget's wallet infrastructure, spoofed transaction data, and triggered the authorisation process to move funds from hot and warm wallets. Bitget said no private keys were stolen and cold wallets stayed untouched.",
    impact:
      "About 387.5 million dollars across ETH, XRP, BNB, AVAX, USDT, USDC and other assets, moved across seven blockchains within hours. Chainalysis and Elliptic linked the laundering patterns to North Korea-linked actors. Customer balances were reported intact and withdrawals were paused as a precaution.",
    response:
      "Bitget paused withdrawals, engaged Mandiant and SlowMist for investigation, patched the exploited third-party security product flaw, resumed withdrawals in phases from September 28, and pointed to its 464 million dollar User Protection Fund.",
    lessons:
      "Backend authorisation systems are as critical as key storage. Forged internal commands bypassed risk checks without any key theft, which is why withdrawal anomaly detection and rapid pause procedures matter.",
    amountUsd: 387,
    sourceUrl:
      "http://thehackernews.com/2026/09/bitget-says-suspected-north-korean.html",
  },
];

const faqs = [
  {
    question: "Why include both exchanges and wallets on this incidents page?",
    answer:
      "Beginners face risk from both custodial exchanges and self-custody tools. Seeing incidents side by side helps you understand trade offs between keeping funds on platforms and managing your own keys.",
  },
  {
    question: "Does one incident mean a platform or wallet is forever unsafe?",
    answer:
      "Not automatically. The key questions are how the team responded, whether users were made whole, what changed afterwards and whether similar patterns repeat over time.",
  },
  {
    question: "Where does the incident data on this page come from?",
    answer:
      "Entries are cross-checked against public incident trackers, principally DeFiLlama's hacks dashboard and the de.fi Rekt Database, plus primary reports from the affected teams, security firms like CertiK, Chainalysis, TRM Labs and SlowMist, and reputable news outlets. Each entry links its main source.",
  },
  {
    question: "Is this all of the crypto security incidents that happened?",
    answer:
      "No. This is a curated educational timeline focusing on notable events with clear public documentation. It is not a complete, real time feed. CertiK recorded 658 incidents in 2026 alone through September.",
  },
  {
    question: "How often will this incidents timeline be updated?",
    answer:
      "It is updated periodically as significant incidents occur, especially ones that teach new lessons for beginners and long term holders. The page shows its last update date at the top.",
  },
];

function ExchangeIncidentsJsonLd() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cryptosbeginner.com/security/exchange-incidents",
    },
    headline: "Crypto Exchange and Wallet Security Incidents Timeline",
    description:
      "Curated overview of notable crypto exchange, bridge, and wallet security incidents from Mt. Gox to the 2026 Bitget hack, with context, impact and user focused lessons.",
    image:
      "https://cryptosbeginner.com/images/exchange-incidents-hero.png",
    datePublished: "2026-07-18",
    dateModified: "2026-10-08",
    author: [
      {
        "@type": "Person",
        name: "Alex Rivera",
        url: "https://cryptosbeginner.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CryptosBeginner",
      logo: {
        "@type": "ImageObject",
        url:
          "https://cryptosbeginner.com/images/logo-cryptosbeginner.png",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const safeArticle = JSON.stringify(articleLd).replace(/</g, "\\u003c");
  const safeFaq = JSON.stringify(faqLd).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeArticle }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeFaq }}
      />
    </>
  );
}

function formatIncidentType(type: IncidentType) {
  switch (type) {
    case "exchange-hack":
      return "Exchange hack";
    case "bridge-exploit":
      return "Bridge exploit";
    case "defi-exploit":
      return "DeFi protocol exploit";
    case "wallet-exploit":
      return "Wallet or self custody exploit";
    case "data-breach":
      return "Data breach";
    case "oracle-exploit":
      return "Oracle or price feed exploit";
    case "misuse-of-funds":
      return "Misuse of customer funds";
    default:
      return type;
  }
}

function formatAmount(millions: number) {
  if (millions >= 1000) {
    return `$${(millions / 1000).toFixed(1)}B`;
  }
  return `$${millions}M`;
}

export default function ExchangeIncidentsPage() {
  const years = Array.from(new Set(incidents.map((i) => i.year))).sort(
    (a, b) => b - a,
  );

  const thefts = incidents
    .filter(
      (i) =>
        typeof i.amountUsd === "number" &&
        i.incidentType !== "misuse-of-funds" &&
        i.incidentType !== "data-breach",
    )
    .sort((a, b) => (b.amountUsd ?? 0) - (a.amountUsd ?? 0))
    .slice(0, 8);
  const maxTheft = Math.max(...thefts.map((t) => t.amountUsd ?? 0));

  return (
    <>
      <Header />

      <main className="bg-white">
        <ExchangeIncidentsJsonLd />

        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Security · Incidents timeline
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Crypto Exchange and Wallet Security Incidents
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                  From Mt. Gox in 2014 to the Bitget hack in September 2026,
                  this timeline shows where things have gone wrong, how teams
                  responded and what you can learn as a beginner. It is a
                  curated timeline, not a complete record, designed to help
                  you ask better safety questions.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span>Editor: Alex Rivera</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Published: 18 July 2026</span>
                  <span className="hidden h-4 w-px bg-slate-300 sm:inline" />
                  <span>Last updated: 8 October 2026</span>
                </div>
              </div>
              <div className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  How to read this timeline
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Each entry summarises what happened, how users were affected,
                  how the platform responded and a simple lesson. Use it
                  together with our safety guides before deciding where and how
                  to store your funds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-900">
                  {incidents.length}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Incidents tracked on this page, from 2014 to 2026
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-900">$1.5B</p>
                <p className="mt-1 text-sm text-slate-600">
                  Largest single theft tracked: the Bybit hack, February 2025
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-900">$2.68B</p>
                <p className="mt-1 text-sm text-slate-600">
                  Industry-wide crypto losses in 2026 through September,
                  per CertiK
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Largest thefts chart */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Largest direct thefts on this page
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Ranked by approximate value at the time of the incident. The FTX
              collapse is excluded here because it was misuse of customer
              funds rather than a theft, and data breaches involve no direct
              fund loss.
            </p>
            <div className="mt-6 space-y-4">
              {thefts.map((t) => (
                <div key={t.id}>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <p className="font-semibold text-slate-900">
                      {t.platform}
                      <span className="ml-2 font-normal text-slate-500">
                        {t.year}
                      </span>
                    </p>
                    <p className="shrink-0 font-bold text-slate-900">
                      {formatAmount(t.amountUsd ?? 0)}
                      {t.amountNote && (
                        <span className="ml-1 text-xs font-normal text-slate-500">
                          {t.amountNote}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500"
                      style={{
                        width: `${Math.max(
                          4,
                          ((t.amountUsd ?? 0) / maxTheft) * 100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <nav
              aria-label="Quick links"
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Connect with other trust and safety guides
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  What is Proof of Reserves
                </Link>
                <Link
                  href="/learn/how-to-check-exchange-proof-of-reserves"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How to check PoR
                </Link>
                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Security checklist
                </Link>
                <Link
                  href="/learn/seed-phrase-security"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Seed phrase security
                </Link>
                <Link
                  href="/learn/how-p2p-escrow-works"
                  className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  How P2P escrow works
                </Link>
              </div>
            </nav>
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="max-w-none text-slate-900 text-sm sm:text-base leading-relaxed">
            <h2 className="text-lg font-semibold text-slate-900">
              Curated incidents by year
            </h2>
            <p className="mt-2">
              For each incident we highlight user impact and platform response,
              then pull out a simple lesson you can apply in your own setup,
              whether you use exchanges, hardware wallets or DeFi protocols.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {years.map((year) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {year}
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-8">
              {years.map((year) => {
                const yearIncidents = incidents.filter((i) => i.year === year);
                return (
                  <section key={year} id={`year-${year}`} className="scroll-mt-24">
                    <h3 className="text-base font-semibold text-slate-900">
                      {year}
                      <span className="ml-2 text-sm font-normal text-slate-500">
                        {yearIncidents.length}{" "}
                        {yearIncidents.length === 1 ? "incident" : "incidents"}
                      </span>
                    </h3>
                    <div className="mt-3 border-l border-slate-200">
                      {yearIncidents.map((incident) => (
                        <div
                          key={incident.id}
                          className="relative ml-4 flex gap-4 pb-6"
                        >
                          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                          <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  {incident.date} · {incident.platform}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                  {incident.title}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-white">
                                  {formatIncidentType(incident.incidentType)}
                                </span>
                                <span
                                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                    incident.severity === "high"
                                      ? "bg-rose-600 text-white"
                                      : incident.severity === "medium"
                                      ? "bg-amber-500 text-white"
                                      : "bg-slate-300 text-slate-900"
                                  }`}
                                >
                                  {incident.severity.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            <p className="mt-2 text-sm text-slate-800">
                              {incident.description}
                            </p>

                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              User impact
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.impact}
                            </p>

                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              Platform response
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.response}
                            </p>

                            <p className="mt-2 text-xs font-semibold text-slate-900">
                              Lesson for beginners
                            </p>
                            <p className="mt-1 text-sm text-slate-800">
                              {incident.lessons}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                              {incident.sourceUrl && (
                                <a
                                  href={incident.sourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                                >
                                  View source or post incident report
                                </a>
                              )}
                              {incident.relatedSlug && (
                                <Link
                                  href={incident.relatedSlug}
                                  className="inline-flex items-center rounded-md border border-emerald-600 px-2 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                                >
                                  Read our exchange review
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            <h2 className="mt-8 text-lg font-semibold text-slate-900">
              Data sources
            </h2>
            <p className="mt-2">
              Incident figures on this page are cross-checked against public
              trackers. For the full, continuously updated record, see the{" "}
              <a
                href="https://defillama.com/hacks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                DeFiLlama hacks dashboard
              </a>{" "}
              and the{" "}
              <a
                href="https://de.fi/rekt-database"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                de.fi Rekt Database
              </a>
              . Aggregate 2026 loss figures cited here come from{" "}
              <a
                href="https://news.leodex.io/news/crypto-hacks-top-2-68-billion-in-2026-as-five-incidents-drive-59-of-losses"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                CertiK&apos;s quarterly reporting
              </a>
              .
            </p>

            <h2 className="mt-8 text-lg font-semibold text-slate-900">
              How we curate and update incidents
            </h2>
            <p className="mt-2">
              We prioritise incidents with clear public documentation from
              multiple sources. The goal is not to track every minor issue but
              to build an educational overview of major events and patterns
              that beginners should know about. Incidents range from early
              exchange failures like Mt. Gox to bridge exploits and recent
              wallet bugs.
            </p>
            <p className="mt-2">
              When new, well documented incidents occur, we may add them to
              this page along with links to our reviews and safety guides.
              Details here can evolve over time as the crypto ecosystem
              learns and improves.
            </p>

            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              FAQ: Exchange and wallet security incidents
            </h2>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group mt-3 rounded-lg border border-slate-200 bg-slate-50"
              >
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-900">
                  {faq.question}
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-800">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}

            <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-xs sm:flex-row sm:items-center sm:justify-between text-slate-600">
              <p>
                This timeline simplifies complex situations and focuses on
                education. Always read primary sources and consider your own
                risk tolerance and local regulations before using any platform
                or hardware wallet.
              </p>
              <p>
                Spot an error or missing context. Email{" "}
                <a
                  href="mailto:admin@cryptosbeginner.com"
                  className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  admin@cryptosbeginner.com
                </a>{" "}
                so we can review and improve it.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
