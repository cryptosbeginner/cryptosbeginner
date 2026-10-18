import { cardListings, type CardListing } from "../cards-data";

export type CollectionCard = {
  slug: string;
  /** 1-2 sentence original editorial reasoning for this card's rank. */
  reasoning: string;
};

export type CollectionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  /** Meta description. */
  description: string;
  /** 2-3 sentence intro. */
  intro: string;
  /** How we picked, as bullets. */
  methodology: string[];
  /** Honest note when our data is thin for this criterion. */
  thinDataNote?: string;
  cards: CollectionCard[];
  faq: { question: string; answer: string }[];
};

export const collections: CollectionPage[] = [
  {
    slug: "best-metal-crypto-cards",
    title: "Best Metal Crypto Cards in 2026",
    eyebrow: "Premium formats · ranked",
    description:
      "The best metal crypto cards in 2026, ranked from our card data: metal tiers from Xapo, Uphold, MetaMask, BingX, BitMart, Tria, Wirex One, and Winity compared by rewards and real cost.",
    intro:
      "Metal crypto cards are almost always the top tier of a tiered product, not a separate product. The card feels premium, but what you are really buying is a higher reward rate, higher limits, or a membership bundle. We ranked the eight metal formats in our 132-card database by what the provider data actually promises: reward rates, published fees, and availability.",
    methodology: [
      "The card's formats field must include a metal variant, such as Metal, Premium metal, Executive metal, or Visa Signature Metal.",
      "Cards are ranked by provider-stated rewards and the clarity of the published fee and tier terms.",
      "Availability wording comes from the provider's reviewed page; where it is jurisdiction-dependent, that stays visible.",
    ],
    cards: [
      {
        slug: "xapo-bank-card",
        reasoning:
          "The Xapo Bank Card is issued by a licensed private bank and pairs its metal card with no FX fees on international spending, the closest thing in our data to a premium bank card. The $1,000 annual membership is the real filter: this is built for heavy spenders, not curious beginners.",
      },
      {
        slug: "uphold-debit-card",
        reasoning:
          "Uphold's metal format sits on the Elite tier, which advertises up to 4% back in XRP and removes the FX and ATM fees charged on the free Essential tier. That tiered structure makes the metal card feel like an upgrade path rather than just a heavier piece of plastic.",
      },
      {
        slug: "metamask-card",
        reasoning:
          "MetaMask's Metal tier advertises 3% back in mUSD on the first $10,000 of annual spend, triple the 1% on the virtual card. For self-custody fans, it is the most interesting metal option because the rewards stack on top of balances you already control.",
      },
      {
        slug: "bingx-card",
        reasoning:
          "BingX ties its metal format to an exchange account and advertises up to 5% cashback on eligible purchases plus 20% on selected subscriptions. The metal tier is earned through activity rather than bought outright, which suits active traders better than casual spenders.",
      },
      {
        slug: "bitmart-card",
        reasoning:
          "BitMart's metal option advertises 1% to 10% cashback depending on transaction type, merchant category, and loyalty tier. That wide range is the catch: the headline rate only matters if your spending actually matches the high-rate categories.",
      },
      {
        slug: "tria-card",
        reasoning:
          "Tria's Premium metal tier advertises 6% cashback, the highest metal-tier rate in our data, on a self-custodial card that can load 1,000+ assets. The rewards are provider-advertised and conditional, but the self-custody angle is genuinely rare among metal cards.",
      },
      {
        slug: "wirex-one-card",
        reasoning:
          "The Wirex One Visa Signature Metal is the legacy premium option here, with up to 8% cashback advertised by membership tier across 150+ advertised countries. It reads as a status card first and a rewards card second, so weigh the tier requirements against what you would actually spend.",
      },
      {
        slug: "winity-card",
        reasoning:
          "Winity's Executive metal earns points at 1 point per $10 spent on the Exclusive tier. It is the weakest rewards story in this shortlist, included because the metal format exists in our data, with redemption terms you should confirm before valuing those points.",
      },
    ],
    faq: [
      {
        question: "Are metal crypto cards worth it?",
        answer:
          "Only if the tier behind the metal earns its keep. A metal card usually unlocks a higher reward rate or higher limits, and the metal itself adds no spending power. Compare the tier's fees, reward caps, and requirements against the free tier before paying for prestige.",
      },
      {
        question: "Do metal crypto cards have annual fees?",
        answer:
          "Some do and some do not. Xapo charges a $1,000 annual membership, Uphold's Elite tier costs $99.99 a year, and others gate the metal format behind spending, loyalty, or membership tiers. The pricing field of each card profile shows the provider's stated terms.",
      },
      {
        question: "Is this ranking financial advice?",
        answer:
          "No. It is an editorial curation from our own card data, with provider wording kept intact. Reward rates, fees, tiers, and availability can change, so verify the current terms on the provider's site before applying.",
      },
    ],
  },
  {
    slug: "high-limit-crypto-cards",
    title: "High Limit Crypto Cards for Larger Spenders",
    eyebrow: "Spending power · ranked",
    description:
      "Crypto cards for larger spenders, curated from our 132-card database: published monthly ceilings, premium membership tiers, and business options from ether.fi, Coinbase One, Xapo, Whop, Uphold, and Crypto.com.",
    intro:
      "Most crypto card providers do not publish simple spending-limit tables, so this collection ranks cards where larger spending is a visible part of the product design: published monthly ceilings, premium membership tiers, and business products. We would rather show you six honest options than ten padded ones.",
    methodology: [
      "Cards are included when our data shows a published monthly spending or reward ceiling, a premium membership tier aimed at larger spenders, or a business product with stated limits.",
      "We did not infer limits from marketing language; if the provider did not state a figure, we say so.",
      "Cards are ranked by the clarity of the published ceiling and the overall suitability for high-volume spending.",
    ],
    thinDataNote:
      "Our data is thin on hard spending limits. Most providers publish limits only inside the application flow or the cardholder agreement, so this shortlist reflects what was verifiable in our reviewed fields, not a complete market picture.",
    cards: [
      {
        slug: "etherfi-cash-card",
        reasoning:
          "ether.fi publishes its monthly reward limits per tier, and the Pinnacle tier stretches to $50,000 a month, the largest published figure in our data. A card that discloses its ceilings is easier to trust than one that hides them.",
      },
      {
        slug: "coinbase-one-card",
        reasoning:
          "The Coinbase One Card caps its 2.5% to 4% bitcoin tiers at $10,000 in eligible purchases per month, and that published ceiling lets a higher spender do real math. It also pays unlimited 5% on travel booked through its own portal.",
      },
      {
        slug: "xapo-bank-card",
        reasoning:
          "A $1,000 annual membership and 100+ country availability position this as the private-banking answer for large spenders. The product is built for people moving serious money, even though Xapo does not publish a simple limit table in our data.",
      },
      {
        slug: "whop-card",
        reasoning:
          "Whop's business card advertises a $50,000 monthly cap on its up to 5% cashback in selected business categories. It is a business product rather than a personal one, but it carries one of the largest published ceilings we found.",
      },
      {
        slug: "uphold-debit-card",
        reasoning:
          "The Elite tier costs $99.99 a year, removes FX and ATM fees, and advertises up to $300 in XRP rewards per month, a structure that assumes real volume. The card itself does not publish spending limits in our data, so confirm them before moving large amounts.",
      },
      {
        slug: "crypto-com-visa-card",
        reasoning:
          "The top Crypto.com tiers are built around CRO lockups and higher reward caps, making them the natural entry for spenders who outgrow the free Midnight Blue tier. Exact limits are jurisdiction and tier dependent, so read the regional agreement.",
      },
    ],
    faq: [
      {
        question: "What counts as a high limit crypto card?",
        answer:
          "In practice, a card with a published monthly spending or reward ceiling that comfortably covers five-figure monthly spend, or a premium tier that removes the caps applied to free tiers. Most providers disclose exact limits only in the application flow.",
      },
      {
        question: "Do higher limits mean higher fees?",
        answer:
          "Usually, yes, in some form. Premium tiers carry annual fees, membership costs, or token lockup requirements. The pricing field of each card profile shows the provider's stated terms so you can compare the cost of the ceiling.",
      },
      {
        question: "Why are there only six cards here?",
        answer:
          "Because our data only supported six verifiable picks. We rank from what providers actually published rather than filling the list with cards whose limits we could not confirm.",
      },
    ],
  },
  {
    slug: "self-custodial-debit-cards",
    title: "Self-Custodial Debit Cards: Spend Without the Middleman",
    eyebrow: "Self custody · ranked",
    description:
      "Self-custodial crypto debit cards ranked from our 132-card database: spend from wallets you control with Gnosis Pay, MetaMask, ether.fi, 1inch, Holyheld, Bleap, wavecard, and BloFin.",
    intro:
      "Most crypto cards sit on top of an exchange or fintech account. Self-custodial cards spend directly from a wallet you control, no exchange balance in the middle. Nineteen of the 132 cards in our database carry the self-custody category; these eight are the strongest combinations of custody model, verifiable detail, and usability.",
    methodology: [
      "Cards must carry the self-custody category in our data, meaning the provider describes spending from a user-controlled wallet or smart account.",
      "We ranked by the clarity of the custody model, the completeness of the published fee and reward terms, and regional usability.",
      "Cards with almost no published fee detail are flagged as watchlist picks rather than value verdicts.",
    ],
    cards: [
      {
        slug: "gnosis-pay-card",
        reasoning:
          "Gnosis Pay connects a Safe smart account holding stablecoins directly to Visa spending, the cleanest self-custody model we verified in our data. The up to 5% cashback scales with GNO held, so the rewards have a visible on-chain logic.",
      },
      {
        slug: "metamask-card",
        reasoning:
          "Spending straight from MetaMask balances on Linea, Solana, and Monad is the definition of self-custodial convenience. The card layers a metal tier with 3% back in mUSD on top, so you are not trading rewards for custody.",
      },
      {
        slug: "etherfi-cash-card",
        reasoning:
          "ether.fi Cash spends from deposits in a non-custodial ether.fi Safe and pays 3% cashback on all tiers. The tier structure is unusually transparent, with published monthly limits from $2,000 to $50,000.",
      },
      {
        slug: "1inch-card",
        reasoning:
          "The 1inch Card spends crypto wallet balances converted to fiat at the point of purchase across the UK and EEA. Cashback terms are not confirmed in our data, so this pick is about the custody model and the 1inch brand rather than the rewards.",
      },
      {
        slug: "holyheld-card",
        reasoning:
          "Holyheld's Mastercard spends connected self-custody wallet balances at the point of sale for residents of 30 European countries. Purchase rewards are not the pitch here; direct wallet spending without an exchange in the middle is.",
      },
      {
        slug: "bleap-card",
        reasoning:
          "Bleap runs under a MiCA licence and spends stablecoin balances from a self-custodial wallet across Europe. Cashback is advertised but the rate is not confirmed in our data, so treat the regulatory footing as the stronger signal.",
      },
      {
        slug: "wavecard",
        reasoning:
          "wavecard is one of the few self-custody cards handling on-chain Bitcoin and Lightning payments inside the EEA, with a personal vIBAN for EUR. The 1% Bitcoin conversion fee is published, which makes the real cost easy to model.",
      },
      {
        slug: "blofin-card",
        reasoning:
          "BloFin's Wallet Card is funded with USDT or USDC from a self-custodial wallet and lists Apple Pay support. A referral route is available. It is one of the few self-custody cards with explicit phone-wallet support in our data.",
      },
    ],
    faq: [
      {
        question: "What does self-custodial mean for a crypto card?",
        answer:
          "The card spends from a wallet whose keys you control, such as a smart account or a connected wallet, instead of from a balance held by an exchange. You keep custody; the card provider only handles the payment rail.",
      },
      {
        question: "Are self-custodial cards safer?",
        answer:
          "They remove exchange counterparty risk, but they add wallet responsibility: lost keys can mean lost funds, and smart contracts carry their own risk. Custody model is one risk factor among many, alongside issuer, region, and terms.",
      },
      {
        question: "Do self-custodial cards pay rewards?",
        answer:
          "Some do. Gnosis Pay ties cashback to GNO holdings, MetaMask pays up to 3% in mUSD on its metal tier, and ether.fi pays a flat 3%. Others offer no purchase rewards at all, so check the rewards field of each profile.",
      },
    ],
  },
  {
    slug: "best-rebates-perks",
    title: "Best Rebates & Perks: Crypto Cards That Pay You Back",
    eyebrow: "Rebates & perks · ranked",
    description:
      "Crypto cards with the best rebates and perks from our 132-card database: subscription rebates, category cashback, lounge access, and activation rebates from Plutus, WhiteBIT Nova, BingX, Spritz, and more.",
    intro:
      "Beyond flat cashback, the most interesting cards rebate specific spending: subscriptions, categories, travel perks, and even activation fees. We ranked seven cards where the provider data shows a real rebate or perk mechanic, not just a higher headline rate.",
    methodology: [
      "Cards are included when our data shows a rebate-style mechanic: subscription rebates, category cashback, travel perks, activation rebates, or balance credits.",
      "We quote the provider's caps, minimums, and expiry terms alongside the headline so the perk can be valued honestly.",
      "Cards are ranked by how usable the perk is for normal spending, not by the size of the headline alone.",
    ],
    cards: [
      {
        slug: "plutus-card",
        reasoning:
          "Plutus is the clearest rebates play in our data: monthly Perks that rebate popular subscriptions sit next to 3% back in PLUS on daily spend, climbing to 9% via loyalty tiers. The catch is the published reward-eligible spend cap, from GBP/EUR 250 to 1,000 a month depending on plan.",
      },
      {
        slug: "whitebit-nova-card",
        reasoning:
          "WhiteBIT Nova pays up to 10% back in BTC or WBT on subscriptions, 5% on taxis, and 1% on groceries: category-level rebate thinking rather than flat cashback. It is capped at EUR 25 a month with a EUR 5 minimum claim, so it favors steady small spenders.",
      },
      {
        slug: "bingx-card",
        reasoning:
          "BingX advertises up to 20% cashback on selected subscriptions on top of up to 5% on eligible purchases. The subscription figure is the perk headline here; the eligible subscription list is what you should verify.",
      },
      {
        slug: "spritz-card",
        reasoning:
          "The Spritz Card carries Visa Signature perks like lounge access and travel insurance, the most traditional premium perks in this collection. Its 5% back in Spritz Credits applies only during 3-day spree windows on travel and dining, so the perks are steadier than the rewards.",
      },
      {
        slug: "oppiwallet-card",
        reasoning:
          "Oppi's dedicated card page publishes an activation rebate: a $10 activation fee with $5 credited back. It is a small perk, but it is one of the few rebates stated plainly in provider data, and Apple Pay and Google Pay support are listed too.",
      },
      {
        slug: "etoro-money-card",
        reasoning:
          "eToro Money advertises cashback rewards for Platinum Club members and above, though the offer is described as a limited-time promotion ending December 31, 2026. Zero FX fees abroad is the longer-lived perk here.",
      },
      {
        slug: "swissquote-card",
        reasoning:
          "Swissquote's Bright package earns Trading Credit cashback on payments, a rebate that feeds back into the brokerage account. Crypto payment fees of 1%, 0.75%, or 0.5% by size apply, so model your real spend before counting the credit.",
      },
    ],
    faq: [
      {
        question: "What is the difference between cashback and a rebate perk?",
        answer:
          "Cashback usually returns a percentage of all spending. A rebate perk targets specific spending, such as refunding a streaming subscription or paying a bonus rate in one category. Rebates can beat flat cashback if your spending matches the categories.",
      },
      {
        question: "Are subscription rebates permanent?",
        answer:
          "Not necessarily. Providers change perk lineups, and some offers are explicitly limited-time, like eToro Money's promotion ending December 31, 2026. Treat every perk as current marketing until you confirm it in the provider's terms.",
      },
      {
        question: "Do rebates have caps?",
        answer:
          "Almost always. WhiteBIT Nova caps at EUR 25 a month, Plutus caps reward-eligible spend by plan, and BingX limits its top rate to selected subscriptions. The cap is usually more important than the rate.",
      },
    ],
  },
  {
    slug: "best-cashback-crypto-cards",
    title: "Best Cashback Crypto Cards: Top Reward Rates Compared",
    eyebrow: "Cashback rates · ranked",
    description:
      "The best cashback crypto cards from our 132-card database: reward rates compared with caps and conditions kept visible, featuring MEXC, Oobit, WhiteBIT Nova, Bybit, Tria, BingX, Gemini, and more.",
    intro:
      "Fifty-six of the 132 cards in our database advertise some form of cashback, but headline rates are almost never the whole story. Every card below is shown with its caps, tiers, and conditions from the provider's reviewed page, ranked by the best realistic earning potential rather than the biggest number.",
    methodology: [
      "Cards are included when our data shows a provider-stated cashback or crypto-back rate on purchases.",
      "We parsed the rewards text for the advertised rate and kept the provider's caps, eligible categories, tier requirements, and time limits visible.",
      "Ranking favors rates that apply to broad everyday spending over narrow category or promotional rates.",
    ],
    cards: [
      {
        slug: "mexc-card",
        reasoning:
          "MEXC advertises up to 10% cashback, the highest headline in our cashback data, with tier, spending, cap, and eligible-transaction conditions. Google Pay support is listed and a referral route is available. High headline, heavy conditions: confirm the tiers before comparing.",
      },
      {
        slug: "oobit-card",
        reasoning:
          "Oobit advertises up to 10% cashback with base rates and token-holder tiers, on a card that also supports direct spending from self-custody wallets. Our data does not pin down the base rate, so treat the 10% as a ceiling, not a promise.",
      },
      {
        slug: "whitebit-nova-card",
        reasoning:
          "WhiteBIT Nova pays cashback in BTC or WBT up to 10% by category: 10% on subscriptions, 5% on taxis, 1% on groceries, capped at EUR 25 per month with a EUR 5 minimum claim. It is the most detailed category structure in this collection, with a 0% service fee behind it.",
      },
      {
        slug: "bybit-card",
        reasoning:
          "Bybit advertises 2% to 10% cashback on everyday spending plus a welcome package with up to 110 USDT cashback in the first 30 days. It is excluded from the EEA in the reviewed notice, so check the supported-country list before counting this one.",
      },
      {
        slug: "tria-card",
        reasoning:
          "Tria advertises 1.5% cashback for Virtual, 4.5% for Signature, and 6% for Premium metal, the steepest tier ladder in our data. It is also self-custodial, which makes the rewards unusual: you earn while holding your own keys.",
      },
      {
        slug: "bingx-card",
        reasoning:
          "BingX advertises up to 5% cashback on eligible purchases and up to 20% on selected subscriptions, with no card issuance fee and no annual fee in the official announcement. The subscription rate is promotional by nature, so value the 5% first.",
      },
      {
        slug: "gemini-credit-card",
        reasoning:
          "Gemini's credit card pays 4% crypto rewards in a top category capped at $300 of monthly spend, then 1% beyond that, with 1% back on everything else. No annual fee and no foreign transaction fees keep the math clean for US spenders.",
      },
      {
        slug: "coinbase-one-card",
        reasoning:
          "The Coinbase One Card pays 2% to 4% back in bitcoin based on assets held, with the upper tiers capped at $10,000 in eligible purchases per month. It requires a paid Coinbase One membership and credit approval, so the rewards sit behind two gates.",
      },
      {
        slug: "etherfi-cash-card",
        reasoning:
          "ether.fi Cash pays a flat 3% cashback on purchases on all tiers, which is unusually simple. The tiers differ by monthly limit, $2,000 to $50,000, so the card rewards consistency more than category games.",
      },
      {
        slug: "metamask-card",
        reasoning:
          "MetaMask's Metal tier pays 3% back in mUSD on the first $10,000 of annual spend, with 1% on the virtual card. It is the best cashback story among self-custodial cards, though the top rate is tier-gated.",
      },
    ],
    faq: [
      {
        question: "Is the highest cashback rate the best deal?",
        answer:
          "Rarely. A 10% headline usually applies to narrow categories, requires a token tier, or sits under a low monthly cap. Compare the rate you would actually earn on your own spending pattern, including caps and tier costs.",
      },
      {
        question: "Are crypto cashback rewards taxable?",
        answer:
          "They can be, depending on your country. Rewards, conversions, and disposals may each have tax consequences. Our tax guide explains the mechanics, but a qualified tax professional is the right source for your situation.",
      },
      {
        question: "Do cashback rates change?",
        answer:
          "Yes, frequently. Providers revise tiers, caps, and reward assets. We show the rate from the reviewed page with its review date; always confirm the current rate in the provider's app or terms before applying.",
      },
    ],
  },
  {
    slug: "crypto-cards-europe",
    title: "Crypto Cards Available in Europe: EEA & UK Shortlist",
    eyebrow: "Regional guide · Europe / EEA / UK",
    description:
      "Crypto cards available in Europe, curated from our 132-card database: eligibility-first picks from WhiteBIT Nova, Nexo, Kraken, Gnosis Pay, SwissBorg, Bitpanda, wavecard, and Bit2Me.",
    intro:
      "Europe is not one market for crypto cards. Issuers, country lists, and fee tables vary by country, and a card available in France may not onboard in Germany. Forty-one cards in our database carry European availability signals; these nine combine the clearest eligibility wording with usable fee and reward detail.",
    methodology: [
      "Cards are included when our data shows Europe, EEA, EU, or UK availability in the regions or availability fields.",
      "Cards that explicitly exclude the EEA, such as Bybit, are left out even when the brand is well known.",
      "We ranked by the clarity of the eligibility wording first, then by fee and reward detail.",
    ],
    cards: [
      {
        slug: "whitebit-nova-card",
        reasoning:
          "WhiteBIT Nova lists 31 countries across the EU plus Norway, Iceland, Liechtenstein, and Ukraine: the most specific European country coverage in our data. A 0% service fee and category cashback up to 10% make it the strongest eligibility-plus-value pick.",
      },
      {
        slug: "nexo-card",
        reasoning:
          "Nexo states no monthly, annual, or inactivity fees and offers up to 2% crypto cashback in Credit Mode for selected European countries including the EEA and UK. A referral route is available. The fee headline is the cleanest in this collection; verify the tier and balance requirements behind the 2%.",
      },
      {
        slug: "kraken-debit-card",
        reasoning:
          "The Kraken Debit Card is built for the UK and Europe, paying up to 2% cashback in Bitcoin, euros, or pounds tiered by 30-day balance. New users get 30 days of Max-tier rewards as a welcome. It is strictly limited to verified personal accounts, so business users should look elsewhere.",
      },
      {
        slug: "gnosis-pay-card",
        reasoning:
          "Gnosis Pay is a self-custodial Visa spending from a Safe smart account, available in the UK, Brazil, and EU countries. Cashback of up to 5% scales with GNO held. It is the strongest pick for Europeans who want custody and rewards in one product.",
      },
      {
        slug: "swissborg-card",
        reasoning:
          "SwissBorg's card serves residents in 30+ regions across the EEA, UK, Switzerland, and beyond. Our data is lighter on fees and rewards here, so use this pick as an eligibility starting point rather than a value verdict.",
      },
      {
        slug: "crypto-com-visa-card",
        reasoning:
          "Crypto.com publishes separate regional disclosures and cardholder agreements, with Europe among its covered regions. A referral route is available. The tiered CRO reward model rewards research: read the agreement for your country before applying.",
      },
      {
        slug: "bitpanda-card",
        reasoning:
          "Bitpanda's card is for verified residents of euro-area countries, with the provider excluding Cyprus and Liechtenstein. A tight geographic focus usually means fewer eligibility surprises.",
      },
      {
        slug: "wavecard",
        reasoning:
          "wavecard is EEA-only by design, with on-chain Bitcoin and Lightning support plus a personal vIBAN for EUR. The 1% Bitcoin conversion fee is published, which makes the real cost easy to model for European spenders.",
      },
      {
        slug: "bit2me-card",
        reasoning:
          "Bit2Me serves EEA tax residents only. The narrow eligibility is the point: residency-first products tend to have clearer tax and compliance footing.",
      },
    ],
    faq: [
      {
        question: "Does EEA availability mean every EU country?",
        answer:
          "No. EEA access, EU membership, UK access, and issuer licensing are not interchangeable. Providers publish country lists, and cards like Bitpanda exclude specific countries. Confirm your exact residence with the provider.",
      },
      {
        question: "Which European card has the lowest fees?",
        answer:
          "WhiteBIT Nova advertises a 0% service fee and Nexo states no monthly, annual, or inactivity fees, but FX, conversion spreads, ATM, and top-up fees can still apply. Compare the full fee picture for your usage, not one headline.",
      },
      {
        question: "Can I use a US crypto card while traveling in Europe?",
        answer:
          "Sometimes, but availability at signup is about residence, not travel. A US-only card generally requires US residence to apply. Our travelers collection covers cards with traveler-friendly fees instead.",
      },
    ],
  },
  {
    slug: "crypto-cards-us",
    title: "Crypto Cards Available in the US",
    eyebrow: "Regional guide · United States",
    description:
      "Crypto cards available in the US, curated from our 132-card database: eligibility-first picks from Gemini, Coinbase One, Coinbase, Fold, Uphold, Venmo, Blockchain.com, BitPay, and Rizon.",
    intro:
      "US availability is product-specific: state exclusions, credit approval, and membership requirements all sit between you and the card. Eighteen cards in our database carry US availability signals; these nine combine the clearest eligibility wording with usable fee and reward detail.",
    methodology: [
      "Cards are included when our data shows United States availability in the regions field.",
      "State exclusions are kept visible, since several US cards exclude specific states or territories.",
      "We ranked by the clarity of eligibility and terms first, then by reward value for US spending.",
    ],
    cards: [
      {
        slug: "gemini-credit-card",
        reasoning:
          "The Gemini Credit Card is available in all 50 US states with no annual fee and no foreign transaction fees. Category-tiered crypto rewards peak at 4%, capped at $300 of monthly category spend. It is the cleanest all-states option in our data.",
      },
      {
        slug: "coinbase-one-card",
        reasoning:
          "The Coinbase One Card pays 2% to 4% back in bitcoin based on assets held, capped at $10,000 in eligible purchases per month on the upper tiers. It is US-only excluding territories, and it requires a paid Coinbase One membership plus credit approval.",
      },
      {
        slug: "coinbase-card",
        reasoning:
          "The Coinbase Card works across the US except Hawaii and advertises no Coinbase transaction fees and no annual fee. Crypto converts to USD when you spend, so it behaves like a normal Visa funded by your Coinbase balance.",
      },
      {
        slug: "fold-bitcoin-card",
        reasoning:
          "Fold pays 1.5% back in bitcoin uncapped, rising to 5% on the first $5,000 of monthly spend with a $100,000 Reserve balance. The uncapped base rate is the standout for steady bitcoin stackers.",
      },
      {
        slug: "uphold-debit-card",
        reasoning:
          "Uphold's debit card is US-focused, with an Elite tier at $99.99 a year that removes FX and ATM fees and pays up to 4% back in XRP. Note the state exclusions on the fuller Elite profile before applying.",
      },
      {
        slug: "venmo-credit-card",
        reasoning:
          "Venmo's credit card pays 3% in your top spend category, 2% in the second, and 1% on the rest, with an optional auto-purchase of crypto with cashback. No annual fee, but it is a standard credit card with APR and fees per cardholder terms.",
      },
      {
        slug: "blockchain-com-card",
        reasoning:
          "Blockchain.com's Visa card pays 1% back in crypto on all purchases. The rate is modest but simple, which makes it a baseline rather than a contender.",
      },
      {
        slug: "bitpay-card",
        reasoning:
          "BitPay's card advertises no rewards, but it is one of the longest-running US crypto spending rails, US-only for applicants 18 and older. It belongs here for availability and track record, not for earning.",
      },
      {
        slug: "rizon-card",
        reasoning:
          "Rizon's Visa card serves the US and selected Latin American countries, with advertised cashback whose rate and conditions should be confirmed. A referral route is available. Cross-border availability is the differentiator here.",
      },
    ],
    faq: [
      {
        question: "Which US crypto card is best?",
        answer:
          "There is no universal best. Gemini covers all 50 states with clean terms, Fold suits bitcoin stackers, and Coinbase One suits heavy Coinbase users. Eligibility, credit approval, fees, and your spending pattern decide.",
      },
      {
        question: "Do US crypto cards work in every state?",
        answer:
          "Not always. Coinbase Card excludes Hawaii, the Uphold Elite profile excludes LA, NY, and territories, and Phantom's card excludes New York. State exclusions are kept visible on each card profile.",
      },
      {
        question: "Are crypto card rewards taxable in the US?",
        answer:
          "Do not assume rewards are tax-free. Rewards, conversions, and disposals can each have tax consequences. Consult a qualified tax professional for your circumstances.",
      },
    ],
  },
  {
    slug: "crypto-cards-apple-google-pay",
    title: "Crypto Cards with Apple Pay & Google Pay",
    eyebrow: "Phone wallets · ranked",
    description:
      "Crypto cards with Apple Pay and Google Pay support from our 132-card database: phone-wallet picks from Ledger, BloFin, MEXC, Phantom, OppiWallet, Wallbit, and Privacy Gateway.",
    intro:
      "A crypto card you cannot add to your phone is half a product in 2026. Only seven cards in our database explicitly mention Apple Pay or Google Pay support in their reviewed fields, so this is a short, honest shortlist: every card below states wallet support in provider data, not in our assumptions.",
    methodology: [
      "Cards are included only when Apple Pay or Google Pay support is explicitly stated in our reviewed fields: funding, rewards, pricing, short description, feature tags, or pros.",
      "We did not assume wallet support from a card being virtual or NFC-capable.",
      "Ranking favors cards that combine wallet support with verifiable rewards and fee detail.",
    ],
    thinDataNote:
      "This is the thinnest collection on the site. Many more cards probably support phone wallets, but our data only confirms seven. If wallet support matters to you, confirm it in the provider's current flow before applying.",
    cards: [
      {
        slug: "ledger-cl-card",
        reasoning:
          "The Ledger-compatible CL Card lists both Apple Pay and Google Pay and pays 1% cashback in BTC, USDC, or USDT with no staking required. Hardware-wallet brand trust plus phone-wallet convenience is a strong combination.",
      },
      {
        slug: "blofin-card",
        reasoning:
          "BloFin's Wallet Card lists Apple Pay support and is funded with USDT or USDC from a self-custodial wallet. A referral route is available. It is one of the few self-custody cards with explicit phone-wallet support in our data.",
      },
      {
        slug: "mexc-card",
        reasoning:
          "The MEXC Card lists Google Pay support alongside up to 10% advertised cashback and a clear KYC application sequence. A referral route is available. Rewards and wallet support in one product make this the most complete pick for phone-first spenders.",
      },
      {
        slug: "phantom-cash-card",
        reasoning:
          "Phantom's card can be funded via Apple Pay, bank transfer, or direct deposit, and charges no fees on funding, ACH withdrawals, or wires up to $1 million. No rewards are advertised, so this is a funding-convenience pick for US users outside New York.",
      },
      {
        slug: "oppiwallet-card",
        reasoning:
          "Oppi lists Apple Pay and Google Pay support on a dedicated card page that also publishes a $10 activation fee with $5 credited back. The 210+ country marketing needs residence verification, but the wallet support is stated plainly.",
      },
      {
        slug: "wallbit-card",
        reasoning:
          "Wallbit's card links to Apple Pay or Google Pay and spends from a US dollar account. It is not presented as a crypto-only rail in our data, so treat it as a fiat card with crypto-adjacent branding rather than a crypto spending tool.",
      },
      {
        slug: "privacy-gateway-card",
        reasoning:
          "The Privacy Gateway Card is marketed around name-and-email onboarding with crypto reloads and Google Pay support. The 3.5% reload fee is published, which lets you price the convenience honestly.",
      },
    ],
    faq: [
      {
        question: "Do most crypto cards support Apple Pay and Google Pay?",
        answer:
          "Probably more than our data confirms, but we only list cards where support is explicitly stated in reviewed fields. Phone-wallet support depends on the issuer's tokenization setup, which varies by region.",
      },
      {
        question: "Do I need a physical card if I have Apple Pay?",
        answer:
          "Not necessarily. Virtual cards with phone-wallet support cover most in-store and online spending. Physical cards still matter for ATMs and merchants without contactless terminals.",
      },
      {
        question: "Can I add any Visa or Mastercard crypto card to my phone wallet?",
        answer:
          "No. The issuer must support tokenization for Apple Pay or Google Pay, and support can vary by country. Check the specific card's features rather than assuming the network logo is enough.",
      },
    ],
  },
  {
    slug: "best-crypto-cards-travelers",
    title: "Best Crypto Cards for Travelers",
    eyebrow: "Travel spending · ranked",
    description:
      "The best crypto cards for travelers from our 132-card database: zero FX fees, lounge perks, and travel rewards from Gemini, OKX, ether.fi, Xapo, eToro Money, Uphold, Spritz, and Coinbase One.",
    intro:
      "Travelers care about two things: what it costs to spend abroad, and what the card gives back. We ranked eight cards where our data shows zero or no FX fees, travel perks like lounge access, or travel-specific rewards, with the usual warning that a 0% FX claim is not the same as 0 cost.",
    methodology: [
      "Cards are included when our data shows no or zero FX or foreign transaction fees, travel perks such as lounge access or insurance, or travel-specific rewards.",
      "We kept the provider's exact FX wording visible, since conversion spreads can sit alongside a 0% FX headline.",
      "Ranking favors cards that combine low FX costs with usable rewards or perks.",
    ],
    cards: [
      {
        slug: "gemini-credit-card",
        reasoning:
          "No foreign transaction fees on a card paying up to 4% category crypto rewards is the textbook traveler setup. Available in all 50 US states with no annual fee.",
      },
      {
        slug: "okx-card",
        reasoning:
          "OKX advertises no transaction fees and no FX fees on its card, exactly the fee pair travelers care about. The product is rolling out region by region, so confirm your region before planning around it.",
      },
      {
        slug: "etherfi-cash-card",
        reasoning:
          "Zero FX fees on EUR and USD transactions plus 3% flat cashback make this a simple traveler card. The 2% ATM withdrawal fee is the line to watch if you take cash abroad.",
      },
      {
        slug: "xapo-bank-card",
        reasoning:
          "No FX fees on international spending, a metal card, and 100+ country availability: this is the premium travel build. The $1,000 annual membership means it only makes sense if your travel spend is substantial.",
      },
      {
        slug: "etoro-money-card",
        reasoning:
          "Zero FX fees abroad are advertised on eToro Money's free card, which is linked to an investment account rather than a crypto wallet. It is a fiat-first traveler card with crypto-adjacent branding.",
      },
      {
        slug: "uphold-debit-card",
        reasoning:
          "The Elite tier drops FX and ATM fees entirely for $99.99 a year. For frequent cross-border spenders, that flat fee can be cheaper than percentage FX fees elsewhere.",
      },
      {
        slug: "spritz-card",
        reasoning:
          "Visa Signature perks like lounge access and travel insurance plus 5% back in Spritz Credits on travel and dining during spree windows. The perks outlast the promotional reward windows.",
      },
      {
        slug: "coinbase-one-card",
        reasoning:
          "Unlimited 5% back on travel booked through Coinbase One Card Travel is the strongest travel-specific reward in our data. It is a credit card requiring a paid Coinbase One membership, so factor in both.",
      },
    ],
    faq: [
      {
        question: "Does 0% FX mean spending abroad is free?",
        answer:
          "No. A provider can advertise 0% FX while separately charging a conversion fee or applying a spread between the market rate and your rate. Read the funding and pricing sections together.",
      },
      {
        question: "Which is better for travel: no FX fees or travel rewards?",
        answer:
          "No FX fees save money on every foreign transaction, while travel rewards pay you back on specific bookings. For heavy travelers, the combination, like Spritz's perks or Coinbase One's 5% travel rate, usually wins.",
      },
      {
        question: "Do crypto cards work abroad?",
        answer:
          "Wherever Visa or Mastercard is accepted, in theory. In practice, your country of residence, the issuer, and the merchant's country can all affect whether a transaction goes through. Carry a backup card.",
      },
    ],
  },
  {
    slug: "crypto-cards-staking-rewards",
    title: "Crypto Cards with Staking Rewards",
    eyebrow: "Hold-to-earn mechanics · ranked",
    description:
      "Crypto cards with staking-style rewards from our 132-card database: token lockups, holding tiers, and balance yield from Crypto.com, Gnosis Pay, OKX, Brighty, and Solid.",
    intro:
      "Some cards pay you for holding or locking tokens, not just for spending. To be honest, our data contains almost no verified on-chain staking programs tied to cards. This collection covers the closest real mechanics we found: token lockup tiers, holding-based cashback, and yield on card balances, each labeled for what it actually is.",
    methodology: [
      "Cards are included when our data shows a reward mechanic tied to holding, locking, or staking tokens, or yield paid on balances linked to the card.",
      "We distinguish balance APY from on-chain staking in the reasoning; a 10% APY on a card balance is not the same as staking rewards.",
      "Cards are ranked by the clarity and verifiability of the mechanic.",
    ],
    thinDataNote:
      "Our data is thin here. Most cards advertise cashback, not staking rewards, and providers rarely publish the full staking terms on card pages. These five are the strongest holding-to-earn mechanics we could verify, not a complete market picture.",
    cards: [
      {
        slug: "crypto-com-visa-card",
        reasoning:
          "Crypto.com's card tiers are the classic staking-gated model: CRO subscription or lockup requirements unlock higher reward rates, up to 5% in the reviewed USD table. The rewards are tiered and capped, and terms vary by region. A referral route is available.",
      },
      {
        slug: "gnosis-pay-card",
        reasoning:
          "Cashback of up to 5% scales with the amount of GNO held in the wallet, the closest thing in our data to staking directly driving card rewards. The holding requirement is the price of the higher rate.",
      },
      {
        slug: "okx-card",
        reasoning:
          "OKX advertises up to 10% APY on the card balance. That is balance yield rather than on-chain staking, but it is the highest advertised balance rate in our card data. The card is rolling out region by region.",
      },
      {
        slug: "brighty-card",
        reasoning:
          "Brighty's Earning Cards pay up to 5% APY on linked stablecoin balances, EEA only. Subscription plans affect the earning rates, so the headline and the plan need to be read together.",
      },
      {
        slug: "solid-card",
        reasoning:
          "Solid advertises up to 6% APY on dollar balances alongside up to 5% cashback. Availability is limited and EU payments are still launching per the official page, so this is a watchlist pick rather than a verified value play.",
      },
    ],
    faq: [
      {
        question: "Do any crypto cards pay real staking rewards?",
        answer:
          "In our data, the closest mechanics are holding-based: GNO holdings driving Gnosis Pay cashback, and CRO lockups unlocking Crypto.com tiers. Balance APY, like OKX's advertised 10%, is yield on a balance, not on-chain staking rewards.",
      },
      {
        question: "What is the risk of locking tokens for card rewards?",
        answer:
          "Locked tokens can fall in value while you cannot sell them, and reward terms can change. A higher card tier funded by a token lockup is a bet on both the card and the token.",
      },
      {
        question: "Why are there only five cards here?",
        answer:
          "Because our data only supported five verifiable picks. We rank from what providers actually published rather than stretching the definition of staking to fill the list.",
      },
    ],
  },
  {
    slug: "privacy-focused-crypto-cards",
    title: "Privacy-Focused Crypto Cards in 2026",
    eyebrow: "Privacy features · honestly labeled",
    description:
      "Privacy-focused crypto cards in 2026, ranked from our card data: BingCard, Kite, Peanut, Kripicard, KardPay, SolCard, and Laso compared by what their privacy claims actually cover, with the fine print kept visible.",
    intro:
      "Privacy is the most overstated claim in crypto cards. A provider saying no KYC for its wallet is not the same as no verification for its Visa card, and no credit check is not the same as no identity check. We ranked the privacy-relevant cards in our database by what providers actually published, keeping the card-versus-wallet distinction and every AML caveat visible.",
    methodology: [
      "Cards qualify through a provider-stated privacy claim in our data (noKycStatus field), a non-custodial architecture where the user controls funds, or a minimal-data onboarding claim.",
      "Each pick states exactly what the privacy claim covers: the card, the wallet, or the signup flow, and what it does not cover.",
      "Provider claims are labeled as provider claims. Card issuers are regulated entities, so verification requirements can change and regional rules apply.",
    ],
    thinDataNote:
      "No-KYC positioning is provider marketing, not a verified fact, and it usually describes the wallet or a specific signup flow rather than the card itself. Treat every claim here as a starting point to verify on the provider's current terms.",
    cards: [
      {
        slug: "bingcard",
        reasoning:
          "The most direct no-KYC card claim in our data: the official page states no photo ID or verified address for the stated flow. The same page makes it subject to AML and regulatory requirements, so read it as lighter onboarding with limits, not verification-free spending.",
      },
      {
        slug: "kite-card",
        reasoning:
          "Kite's privacy story is architectural: a non-custodial stablecoin card where licensed third-party partners handle issuance. The provider's no-KYC positioning sits alongside verification for card provisioning, so confirm which step requires what before funding.",
      },
      {
        slug: "peanut-card",
        reasoning:
          "Peanut separates its non-custodial smart-account wallet from its card programme, and the distinction matters: the site states verification is required for all cardholders even where core wallet functions onboard differently. Included for the architecture, not as a no-verification card.",
      },
      {
        slug: "kripicard",
        reasoning:
          "The fine-print example: Kripicard advertises no credit check, which is not the same as no KYC. Its own site describes identity verification, sanctions screening, and AML monitoring with regulated partners. Included so readers see how these claims are actually worded.",
      },
      {
        slug: "kardpay-card",
        reasoning:
          "KardPay appears on independent researchers' privacy and minimal-KYC shortlists for crypto cards. Our data does not verify a no-KYC claim on its official page, so treat the privacy angle as community reputation to confirm, not a published term.",
      },
      {
        slug: "solcard",
        reasoning:
          "A Solana-native virtual card that keeps the funding step on-chain in SOL, USDC, or USDT. The privacy angle is structural: less fiat-rail involvement than a bank-linked card. Verification and regional eligibility still apply through the provider flow.",
      },
      {
        slug: "laso-card",
        reasoning:
          "Laso's virtual Visa is built for crypto-native spending with a light app onboarding story, which is why it lands on minimal-KYC watchlists. Our listing carries the standard caution: verify the current verification terms on the official site before applying.",
      },
    ],
    faq: [
      {
        question: "Is there really a crypto card with no KYC?",
        answer:
          "Providers sometimes advertise lighter onboarding for a wallet or a specific signup flow, but the card itself runs on regulated Visa or Mastercard rails, and issuers must meet AML rules. In our data, every no-KYC claim comes with caveats or applies to the wallet rather than the card. Verify the current terms before relying on any claim.",
      },
      {
        question: "What actually gives a crypto card privacy?",
        answer:
          "Self-custody architecture matters more than marketing: when funds stay in your wallet or contract until the moment of spend, the card company never holds your balance. Minimal-data signup helps at the margins, but the issuer and the card network still see transactions.",
      },
      {
        question: "Why is Goblin not on this list?",
        answer:
          "Goblin appears on some researchers' minimal-KYC lists, but it is not in our card database, and independent coverage flags it as an unregulated operator with higher counterparty risk. We only rank cards we have reviewed data for.",
      },
    ],
  },
];

export function getCollection(slug: string): CollectionPage | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionCards(collection: CollectionPage): (CardListing & { reasoning: string })[] {
  return collection.cards
    .map((entry) => {
      const card = cardListings.find((c) => c.slug === entry.slug);
      if (!card) return null;
      return { ...card, reasoning: entry.reasoning };
    })
    .filter((card): card is CardListing & { reasoning: string } => card !== null);
}
