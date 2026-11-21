export interface CardNewsEntry {
  date: string; // YYYY-MM-DD
  type: "fee-change" | "promo" | "launch" | "catalog-update" | "market";
  cardName: string;
  cardSlug?: string;
  title: string;
  details: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

// Newest first. Only entries verifiable against an official source or our own
// published catalog changes are listed here. Third-party claims are attributed.
export const CARD_NEWS: CardNewsEntry[] = [
  {
    date: "2026-11-22",
    type: "catalog-update",
    cardName: "Card issuance costs",
    title: "Virtual vs physical: what it costs to get 18 popular crypto cards, checked against our listings",
    details:
      "A widely shared comparison of virtual and physical card issuance costs lines up with this directory's audited figures on almost every row: RedotPay is the most expensive card to get ($10 virtual, $100 physical), KAST's physical card is free but delivery is $40, Bybit's physical card runs from free to $29.99 depending on region, and ether.fi Cash costs $10 virtual and $50 physical on its Core tier. The best deal on pure issuance is Krak: free virtual, free physical, no delivery charge published, and only a \u00a34.99/\u20ac4.99 replacement fee. Oobit also issues both formats free but charges 1% on every payment. Two rows we could not confirm stay as our official-source figures: Avici's first virtual Platinum is $15 in Avici's own docs (two current roundups report it free for new customers), and Trustee's \u20ac25 physical card does not appear on trustee.io, which currently lists the Trustee Plus physical card as unavailable. Structured issuance data has been added to 13 listings so the figures now drive our ratings and filters, not just the listing text.",
    sourceUrl: "https://x.com/Nikitont/status/2122679701445488644",
    sourceLabel: "@Nikitont, November 2026",
  },
  {
    date: "2026-11-22",
    type: "catalog-update",
    cardName: "Bitrefill Card",
    cardSlug: "bitrefill-card",
    title: "Bitrefill Card checked: the 2% cashback is real, and so is the 1.99% deposit fee behind it",
    details:
      "The Bitrefill Card's headline 2% cashback is two separate 1% rewards: 1% when you deposit crypto and 1% when you spend, with no cap, paid in EUR, credited the same day the payment settles and with no expiry. The card itself is free, with no issuing or monthly fee, and the \u20ac10 monthly inactivity fee only starts after 12 months with no spending or cash-out. What the headline leaves out is now on the listing: each crypto deposit costs 1.99% plus a variable exchange spread, so depositing costs more than the deposit cashback returns; the cashback converts to Bitrefill store credit rather than withdrawable cash; ATM withdrawals cost 2.49%; and USDT deposits are no longer supported. Availability is EU/EEA residents only, and the issuer is Wallester AS of Estonia. Figures verified against Bitrefill's card page, pricing page and terms, following the summary posted by @Cardipays.",
    sourceUrl: "https://x.com/Cardipays/status/2122684963153981946",
    sourceLabel: "@Cardipays, November 2026",
  },
  {
    date: "2026-11-18",
    type: "catalog-update",
    cardName: "Kraken Debit Card",
    cardSlug: "kraken-debit-card",
    title: "Krak Card's US Visa programme added to the Kraken Debit Card listing",
    details:
      "The Krak Card sold in the UK and EEA is the same Monavate-issued Mastercard programme as this directory's Kraken Debit Card listing, so it does not get a separate listing. What was missing is the separate US programme, now added: a Visa debit card issued by Lead Bank with Stripe running the programme, launched 18 August 2026, free to order with no monthly or annual fees, a 1% foreign currency transaction fee, replacement cards at $4.99 (plastic) and $60 (metal), and no availability in New York, Maine, Massachusetts or Indiana. US cashback pays up to 2% in USD or BTC. Verified against the Kraken blog, the kraken.com card page and the Lead Bank cardholder agreement on stripe.com.",
  },
  {
    date: "2026-11-18",
    type: "catalog-update",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST listing now shows real card designs",
    details:
      "The KAST Card listing previously showed an app home screen capture. It now carries official KAST card art: the black Visa Infinite design as the main image, with the gold Visa Infinite and grey Visa Platinum Business designs in the gallery.",
  },
  {
    date: "2026-11-18",
    type: "catalog-update",
    cardName: "Directory audit",
    title: "Full directory source-check completed: 47 more listings corrected or filled",
    details:
      "The remaining 135 listings have now been checked against official provider pages, completing the source audit of all 203 cards. 47 listings were corrected or completed: placeholder fee text was replaced with published schedules on more than 20 cards (including Deblock, Zypto, ZEN, NoOnes, PEXX and SolCard), Nebeus moved to a three-plan structure, Bitunix raised its USD cross-border fee to 0.9%, ether.fi cashback is confirmed as paid in ETHFI, COCA is a Wirex-issued prepaid Mastercard rather than a Visa card, Bitget Card applications moved to Bitget Wallet, Holyheld no longer presents a consumer card, and Fizen paused new card creation. 16 listings could not be verified because their official pages block or fail automated reads; they stay queued for manual recheck.",
  },
  {
    date: "2026-11-18",
    type: "market",
    cardName: "MEXC Card",
    cardSlug: "mexc-card",
    title: "MEXC suspends Global Card payments and ends its APAC Card",
    details:
      "MEXC discontinued its separate APAC Card outright on 11 November 2026, and from 14 November it suspended Global Card payments and deposits in an issuer maintenance window announced to run to 18 November, with balances movable only to a MEXC Fiat Account. MEXC blames service adjustments by its third-party card issuer. The pause lands on top of the US FinCEN order against MEXC, which takes effect on 10 December 2026 and is covered in full on the MEXC Card listing.",
    sourceLabel: "MEXC notices, as reported November 2026",
  },
  {
    date: "2026-11-18",
    type: "fee-change",
    cardName: "Bleap Card",
    cardSlug: "bleap-card",
    title: "Bleap adds a \u20ac200 spending goal before cashback can be withdrawn",
    details:
      "Under Bleap's updated Cashback Terms (12 November 2026), cashback can only be withdrawn once you have \u20ac200 of everyday card spending in the previous 30 days, and unwithdrawn cashback can expire under a 67-day rule. The rule applies to new members from their first payment and to existing members from 10 December 2026, with a grace period to 16 December. We also confirmed Bleap's rates and caps from its help centre: 1% on everyday purchases, 3% on transport and delivery, and 20% on listed streaming, AI and gaming subscriptions, paid in USDC. The card itself stays free, with no FX markup and free ATM withdrawals up to \u20ac400 a month.",
    sourceUrl: "https://www.bleap.finance/legal-agreements/cashback-terms-and-conditions",
    sourceLabel: "Bleap Cashback Terms and help centre, November 2026",
  },
  {
    date: "2026-11-18",
    type: "fee-change",
    cardName: "Plasma One Card",
    cardSlug: "plasma-one-card",
    title: "Plasma One's November reset pays new members less cashback",
    details:
      "Plasma's 11 November tier reset (Lite to Standard, Core to Premium at $600 a year, Platinum at $2,500 a year) also set lower cashback bands for anyone joining from that date: Standard pays 1% on the first $500 a month, Premium pays 2% on the first $1,000 then 1% and 0.25%, and Platinum pays 3% on the first $3,000, then 2% and 1%. Members who joined before 11 November keep their previous, higher bands until their current term ends. The Plasma One listing now shows both sets of bands.",
    sourceUrl: "https://intercom.help/plasma-6c43763cd799/en/articles/18351908-what-changes-for-my-membership-on-11-november",
    sourceLabel: "Plasma support, November 2026",
  },
  {
    date: "2026-11-18",
    type: "catalog-update",
    cardName: "Directory audit",
    title: "Directory audit: dead and pivoted cards flagged, nine fee schedules added",
    details:
      "A full audit of the directory against official provider pages found several cards that no longer exist in their listed form. The BitPay Card program is discontinued and has been added to the card graveyard. Stables and Decaf have both pivoted to business payments and no longer offer consumer cards. The new Cardano Card is waitlist-only with applications not open, and Fiat24 is in maintenance mode and not accepting new applications. On the positive side, nine listings gained published fee schedules that were previously undisclosed: Keytom (full schedule, including a 10 USDC monthly fee), Cryptomus ($4 issuance, 3.2% top-ups), Trustee Plus ($10 virtual card, issuer named as Wirex Limited), Kite (top-ups now 0%), Privacy Gateway (one-time $60 fee replaces the $5 monthly subscription), Avalanche (1% FX fee published), Ripio and ARQ (no maintenance or annual fees), and Grey (zero account and card maintenance fees). The Elios listing was also rebuilt from its full help centre: Rain is named as the card-issuing partner, beta card spending is capped at $20,000 a month, ATM withdrawals are not yet enabled, and deposits are USDC-only across seven networks with bridge fees covered by Elios.",
    sourceLabel: "Official provider pages checked November 2026",
  },
  {
    date: "2026-11-18",
    type: "fee-change",
    cardName: "Fee schedule checks",
    title: "Fee schedules rechecked against official pages: Infini, Oobit and Tangem Pay",
    details:
      "We rechecked three listings against the providers' own fee documents. Infini's pricing page corrects its own help centre: there is no cross-border fee on the Lite, Lite Plus or Pro cards (the help table lists 1% for Pro and 3% for Lite); only Max charges 1%, on transactions outside Hong Kong, and Lite, Lite Plus and Pro carry a $0.10 transaction reversal fee. Oobit's full personal schedule is now on its listing from the official fees page: the card is free with no monthly fee, card payments cost 1%, non-USD payments carry a 1.5% conversion fee, and ATM withdrawals cost 2.5%. Tangem Pay's tariffs (applicable 8 October 2026) add a Plus plan at $29.99 a month, ATM fees of 4% on Basic and 2% on Plus capped at $250 per withdrawal, and a $30 dispute fee. All three listings now carry worked examples showing what the fees do to a real transaction.",
    sourceUrl: "https://www.infini.money/en/pricing?type=personal#personal-card-fees",
    sourceLabel: "Infini, Oobit and Tangem Pay official fee documents, November 2026",
  },
  {
    date: "2026-11-17",
    type: "catalog-update",
    cardName: "New listings",
    title: "Two new listings: Elios Card and Infini Card",
    details:
      "The directory now lists 203 cards. Elios Card is a self-custodial Visa card built on Hyperliquid's HyperEVM, currently in early access with invited beta users: 3% cashback on the first $1,000 of spend and 1% after, and no FX markup of its own (Visa's fee of up to 1% passes through, though its card terms list higher caps of up to 3%). Infini Card covers Infini's consumer prepaid line (Lite, Lite Plus, Pro and Max), which our directory previously only listed in its corporate form: all four cards earn 1.5% cashback since November 1, 2026, with FX from 0% on Lite Plus and Max to 3% on Lite, and up to 50% back on AI subscriptions at the higher membership tiers. Both listings carry their official card art.",
    sourceUrl: "https://www.eliospay.com/",
    sourceLabel: "Elios and Infini official pages, November 2026",
  },
  {
    date: "2026-11-17",
    type: "market",
    cardName: "FX fees abroad",
    title: "Your crypto card takes up to 7% abroad: the FX fees on 13 cards, checked",
    details:
      "@xKseilas checked what 13 cards add to purchases outside USD (November 2026). The most expensive: Infini Lite at 3%, Oobit at 1% plus up to 1.5% for conversion, Bybit at 2% in most regions and 7% in Argentina, Plasma Lite at 1% plus about 1% Visa network fee, and Jupiter at 1.8% on DCS-issued cards. In the middle: Tangem Pay and Solid at 1.5%, Infini Pro and Jupiter on Rain-issued cards at 1%, Pulsar up to 1%, and Ethena Pay and Elios passing through Visa's roughly 1% with no markup of their own. The cheapest: ether.fi (0.5% Core, 0.25% Luxe, 0% Pinnacle, with USD and EUR purchases free on every tier), Plasma Platinum at 0%, OKX in Europe at 0% on top of the Mastercard rate, and MetaMask Metal with no cross-border fee. On $1,000 spent in Japan that is $30 on Infini Lite against $0 on Plasma Platinum. We have added the missing figures to the Oobit, Bybit, Tangem Pay, Ethena Pay, MetaMask, Pulsar and ether.fi listings; Solid, Plasma and Jupiter already matched.",
    sourceUrl: "https://x.com/xKseilas/status/2120519064955068541",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-17",
    type: "market",
    cardName: "ATM fees",
    title: "Taking $200 out of an ATM on a crypto card costs $0 to $10 plus interest, depending on the card",
    details:
      "A fee-page review by @sweepbaseHQ (terms read October 2026) ranked what issuers charge for one $200 ATM withdrawal on entry tiers. Kraken charges nothing, ether.fi is free up to 10 withdrawals a month on Core, and Revolut, Crypto.com, Nexo and Wise are free up to a monthly cap. KAST charges $3 plus 2% ($7 on $200), and the Gemini and Venmo credit cards treat ATM use as a cash advance at $10 or 5% plus interest. Sweepbase also found that about a third of the cards it tracks cannot take cash out at all. The ATM owner's own fee comes on top of every figure here. We have added the numbers to the ether.fi, KAST, Crypto.com, Nexo, COCA, Gemini and Venmo listings; Kraken and RedotPay (2%) already matched.",
    sourceUrl: "https://x.com/sweepbaseHQ/status/2120164827704520821",
    sourceLabel: "@sweepbaseHQ, November 2026",
  },
  {
    date: "2026-11-17",
    type: "catalog-update",
    cardName: "Bitstack Card",
    cardSlug: "bitstack-card",
    title: "Bitstack Card listing corrected: France-only, full fee schedule, current yellow card artwork",
    details:
      "TODEY named the Bitstack Card its crypto card of the day on November 11, 2026, and its profile (updated November 5) gives the full picture our listing was missing. The card is France-only: the app runs in about 20 European countries, the card does not. It costs €9.99 plus delivery and pays Stackback in Bitcoin at 0.1% to 1% on the free Standard plan and 0.15% to 1.5% on Plus (€2.99/month), with the top rates requiring recurring Bitcoin buys or round-ups. We have corrected the availability, added the fees, limits and FX allowances, and replaced the outdated black card artwork with the current yellow design.",
    sourceUrl: "https://www.todey.xyz/card/bitstack-card/",
    sourceLabel: "TODEY card profile, November 2026",
  },
  {
    date: "2026-11-17",
    type: "market",
    cardName: "Physical card costs",
    title: "The price of plastic: a physical crypto card costs from $0 to $100 before you spend a cent",
    details:
      "@0xVishnya checked card fees and delivery in the apps and docs (November 16, 2026), and the spread is the story. Avalanche Card and Tria (on Pro and Max) charge nothing for the card or its delivery. Wirex delivery starts at €5 in Europe and Krak at $5 (Krak itself replied that its cards are free, with a $4.99 replacement fee). Plasma One charges $20 delivery, free on Platinum. Jupiter charges $13.13 for the card plus $7.50 to $75 delivery, COCA $1 plus $26 DHL, KAST $40 delivery, ether.fi $50 on Core with free delivery, Avici $50 to $75, Solayer $59.99 all in, and RedotPay $100 for the card. The figures are now on each card's listing. Delivery is the quiet fee most comparisons skip.",
    sourceUrl: "https://x.com/0xVishnya/status/2122346266172465387",
    sourceLabel: "@0xVishnya, November 2026",
  },
  {
    date: "2026-11-17",
    type: "promo",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST is paying picked users 4% USD cashback, uncapped, until December 31",
    details:
      "KAST has quietly switched on a targeted promotion: randomly selected users are being notified that their card purchases earn 4% cashback in USD, with no cap, through December 31, 2026. There is no way to sign up or opt in; if KAST picked you, you will be told. The 4% replaces the normal plan rate (1.5% on Standard, 2% on Premium, 3% on Private) on qualifying settled purchases. Withdrawals and top-ups do not count. As reported by @Cardipays and tracked by cryptocard.guide on November 16; if you hold a KAST card, the app is where you will find out whether you are in.",
    sourceUrl: "https://x.com/Cardipays/status/2122396987412668746",
    sourceLabel: "@Cardipays, November 2026",
  },
  {
    date: "2026-11-16",
    type: "launch",
    cardName: "Binance Card",
    cardSlug: "binance-card",
    title: "Binance launches Pay Later: borrow USDC against BTC, ETH or BNB at the checkout",
    details:
      "Binance launched Pay Later on 16 November 2026, initially for eligible users in Argentina and Mexico, with more markets promised. It lets you pay with the Binance Card or QR Pay by borrowing USDC against BTC, ETH or BNB rather than selling them: up to 1,000 USDC, capped at 50% of the collateral value, and you only borrow what you spend. Repay by the 1st of the following month and interest is 0%. Miss the due date and, after a one-day grace period, overdue balances accrue interest of 0.1% per day, compounding. The catch is liquidation risk: Binance issues a margin call at 75% loan-to-value and can sell the pledged collateral at 90%. The Binance Card listing now carries the full terms.",
    sourceUrl: "https://www.binance.com/en/square/post/388885759732711",
    sourceLabel: "Binance announcement, 16 November 2026",
  },
  {
    date: "2026-11-14",
    type: "fee-change",
    cardName: "Declined payment fees",
    title: "An empty crypto card can still cost you $10 a month in decline fees",
    details:
      "Visa lets a merchant retry the same charge up to 20 times in 30 days, and some cards bill you for every failure, as compiled by @xKseilas. KAST charges $0.50 each time a payment is declined for insufficient balance, and its help page says subscriptions count, so 20 retries on an empty card is $10. RedotPay gives 3 free declines per card a month, then $0.50 each (20 declines is $8.50), and a frozen card or a wrong card number counts as a decline. Tria charges up to $2 when an ATM declines you. We now count decline fees as part of a card's price and have added them to the KAST, RedotPay and Tria listings.",
    sourceUrl: "https://x.com/xKseilas/status/2120958487329198142",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-14",
    type: "market",
    cardName: "AI subscription cashback",
    title: "Ten crypto cards now pay cashback on AI subscriptions, from 5% to 50%",
    details:
      "@0xVishnya rounded up the cards that rebate ChatGPT, Claude and other AI subscriptions. Wirex One and COCA pay 50% (Wirex: ChatGPT from the Elite tier, Claude from Private; COCA: from Standard+, one subscription up to $70). Infini pays 30% on its free tier and 50% from Professional, capped at $10 a month. Bleap pays 20% on its free card, on up to EUR 23 per service. ether.fi Cash pays 10% on Luxe, 20% on Pinnacle and 30% on VIP; Solid pays 10% on Prime and 20% on Ultra; Xplace pays 5% on Gold and 10% on Platinum on up to $250 a month; Pulsar Money pays 8% in points on Pro this November; Lava pays 5% in bitcoin on a free card. Plasma One takes the other route: no rate, a fixed AI spend credit of $200 a year on Premium and $500 a year on Platinum. Each rate is now on the card's listing.",
    sourceUrl: "https://x.com/0xVishnya/status/2121166180627173875",
    sourceLabel: "@0xVishnya, November 2026",
  },
  {
    date: "2026-11-14",
    type: "promo",
    cardName: "Avici Card",
    cardSlug: "avici-card",
    title: "Avici pays 5% back in SOL on London spending during Breakpoint, November 14 to 18",
    details:
      "For Solana Breakpoint week, Avici is paying 5% back in SOL on in-person spending at merchants recorded in London, Transport for London included, from November 14 to 18, 2026: up to $100 per user while a $10,000 campaign budget lasts, as reported by @SuriyaXBT. Online orders and ATM withdrawals do not count. The same roundup notes ether.fi Travel's standing offer of up to 65% off eligible flights and hotels plus 5% cashback on eligible hotel bookings, which is already on the ether.fi Cash listing.",
    sourceUrl: "https://x.com/SuriyaXBT/status/2121183037916647850",
    sourceLabel: "@SuriyaXBT, November 2026",
  },
  {
    date: "2026-11-14",
    type: "promo",
    cardName: "Deblock Card",
    cardSlug: "deblock-card",
    title: "Deblock will refund GTA 6 for new users who spend 1,000 euros in 90 days",
    details:
      "In @xKseilas's price comparison of buying GTA 6 (79.99 euros on the PlayStation Store EU) with a crypto card, Deblock comes out at zero: new accounts using the code PAYDAY that spend 1,000 euros with the card within 90 days get the game refunded up to 79.99 euros, and pre-orders count. The same comparison notes that Nexo pays 10% back in NEXO on a first PlayStation or Microsoft Store purchase (capped at $8, to December 31), COCA's Elite tier pays 8% but needs 30,000 COCA staked, Oobit pays 10% in OOB that cannot be withdrawn, and Tria, Solid and PayitFast exclude games from their 3% cashback entirely. The exclusions are now noted on the Tria and Solid listings.",
    sourceUrl: "https://x.com/xKseilas/status/2121195736746410124",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-13",
    type: "promo",
    cardName: "Plasma One Card",
    cardSlug: "plasma-one-card",
    title: "Plasma ends the free Core year early, on November 16",
    details:
      "Members who joined Core free for the first year under Plasma's June 2026 promotion are being emailed that the free period ends on November 16, 2026, roughly five months into the promised year, as reported by @xKseilas. On $1,000 of monthly spend, the cashback math drops from $30 to about $10.50. Subscriptions paid with the card, such as ChatGPT or Claude, keep charging after the 16th, just without the extra cashback the free Core period carried. The news lands days after Core was renamed Premium at $600 a year.",
    sourceUrl: "https://x.com/xKseilas/status/2118635020587774448",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-13",
    type: "catalog-update",
    cardName: "VaultLeap Card",
    title: "VaultLeap cards close on December 1, points and tiers end with them",
    details:
      "VaultLeap has told users its cards close on December 1, 2026, and its points and tiers end the same day. In the company's own words, quoted by @xKseilas in a roundup of perks cut in 2026: \"Points have no cash value.\" Spend or withdraw balances before the closure date. The card joins our graveyard of discontinued crypto cards.",
    sourceUrl: "https://x.com/xKseilas/status/2118635020587774448",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-13",
    type: "catalog-update",
    cardName: "Crypto cards in India",
    title: "Most crypto cards no longer work for Indian residents; three still do, with caveats",
    details:
      "An issuer-page review by @xKseilas (November 2026) found India on RedotPay's card issuance restriction list, with existing Indian users reporting rupee payments and ATM withdrawals declined since late October amid reports that the RBI and FIU are looking into offshore crypto cards. Of the cards checked, Onboard is the only one that says yes to India in writing (online payments only, $0.50 + 2.5% per rupee payment). Kolo does not ban India but publishes no allowed-country list and warns that passing KYC does not guarantee the card. Pionex does not ban India either, but its own blog says KYC alone does not unlock the card, and on September 9, 2026 FIU-IND named Pionex among 15 platforms it called non-compliant. Based's own docs list India as restricted despite threads claiming it works. MEXC, Exa, Solid, Avici, OKX, Nexo, Wirex, Binance, Crypto.com, Gnosis Pay and Bitget Wallet are closed or not listed for India.",
    sourceUrl: "https://x.com/xKseilas/status/2119012949402517738",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-12",
    type: "launch",
    cardName: "Karta Personal",
    cardSlug: "karta-card",
    title: "Karta is building a card that pays straight from your own wallet, on Tempo",
    details:
      "Karta, which @xKseilas puts at more than 25,000 monthly cardholders, is building a wallet-direct version of its Visa card on Tempo, the payments chain from Stripe and Paradigm. Instead of sending USDC to the card company first, you approve the card once with a spending limit (Tempo Access Keys) and each payment debits your own wallet at the terminal: nothing to sign, settlement final in about 500 ms, a chain fee of about $0.001 paid in stablecoins, and part of every block reserved for payments so a memecoin rush cannot slow card traffic. Karta's treasury already runs on Tempo and the user app is moving over; the same report says Wirex already lets the card programs it operates for other companies settle on Tempo. Tempo also launched credit this week, with borrowing against card settlements as one use case. Our Karta listing is updated, with the standing catch: the chain costs a tenth of a cent, but Karta's 1.5% fee per card payment is still what you pay.",
    sourceUrl: "https://x.com/xKseilas/status/2119160658369638778",
    sourceLabel: "Tempo and Karta wallet-direct card build, via @xKseilas, November 2026",
  },
  {
    date: "2026-11-12",
    type: "promo",
    cardName: "Kraken Debit Card (Krak)",
    cardSlug: "kraken-debit-card",
    title: "Krak salary rewards launch in the US: up to 1% back on your paycheck",
    details:
      "Krak, Kraken's money app, has quietly extended its salary rewards to the US under Krak Paycheck, as spotted by @0xDani in Krak's US support pages. Direct-deposit your paycheck (minimum $2,500 of qualifying payroll a month) and Krak pays up to 1% back, capped at $250 a month, paid monthly in BTC or USD, with no fee for receiving your salary. It is not available in New York, Maine, Indiana or Massachusetts. US paychecks land in virtual accounts provided by Citibank, and the minimum single paycheck is $10. The program has run in the UK and EEA as Salary Match since the card's launch; Krak's official support article confirms the European version pays 0.25% to 1% depending on the 30-day average balance held across Krak, Kraken and Kraken Pro (£/€200 to £/€50,000), on salary of at least £/€2,500 a month, with eligible salary capped at £/€25,000 a month. Our Kraken Debit Card listing now carries both versions in full.",
    sourceUrl: "https://x.com/0xDani/status/2119825618980196758",
    sourceLabel: "Krak US support pages via @0xDani, and Krak Salary Match support article, November 2026",
  },
  {
    date: "2026-11-12",
    type: "market",
    cardName: "Crypto card spending tracker",
    title: "New monthly spend tracker: $1.37B spent on crypto cards in October 2026",
    details:
      "We have launched a monthly crypto card spending tracker built on PaymentScan data, compiled from the tables republished by Castle Labs. October 2026: $1.37B of settled spend across 30 tracked programs, up 11% on September. RedotPay leads at $423.5M (31% of the total, and issuer-reported, so not onchain-verifiable), followed by ether.fi Cash at $141.9M and KAST at $121.0M; the fastest growers were Solid (+148%), Ethena Pay (+97%) and Gate Card (+40%). About $448.1M (33%) of October spend is not tied to a named card and sits with issuers such as Rain and Wirex. The tracker carries the full October table for all 28 named programs, a November month-to-date column, twelve months of history for the six largest programs, and the full methodology and caveats. It will be updated by hand in the first week of each month.",
    sourceUrl: "https://paymentscan.xyz",
    sourceLabel: "PaymentScan data via paymentscan.xyz and Castle Labs research, November 2026",
  },
  {
    date: "2026-11-12",
    type: "fee-change",
    cardName: "Plasma One Card",
    cardSlug: "plasma-one-card",
    title: "Plasma One renames Core to Premium and triples the price to $600 a year",
    details:
      "Plasma has emailed Core members that their membership became Premium on 11 November 2026. The price rises from $199 to $600 per year when the current term ends; complimentary Core benefits run until the term ends, with at least 30 days notice before the renewal price changes. Premium adds 0% FX on the first $3,000 of monthly card spend (Core charged 0.5% plus about 1% Visa network FX), replaces the AI cashback and ChatGPT Go rebate with one $200 per year AI spend credit allocated monthly across an expanded list of providers, and adds local merchant rewards in Dubai, London and New York. The alternative 20,000 XPL lock for 12 months is unchanged (about $1,050 at November 2026 prices), and the cashback bands did not move, so at the new price cashback alone covers the fee from about $2,000 of monthly spend, or about $1,170 per month if the full AI credit is used. Our listing, review, and Plasma One vs Tria comparison have been updated.",
    sourceUrl: "https://x.com/0xVishnya/status/2119866246933983513",
    sourceLabel: "Plasma One member email, reported by @0xVishnya, November 2026",
  },
  {
    date: "2026-11-12",
    type: "market",
    cardName: "Crypto card cashback payouts",
    title: "Top single cashback payouts in 72 hours: Plasma One $3,724, EtherFi Cash $2,953, Ethena Pay $1,493",
    details:
      "Tracking by @0xDani of the largest single-user cashback payouts across crypto cards over a 72-hour window puts Plasma One on top: one user received $3,724, paid as 70,055 XPL. EtherFi Cash follows with $2,953 paid as 4,952 ETHFI to one user, and Ethena Pay is third with $1,493 paid as 174.33 AVAX, which matches the AVAX cashback in our Ethena Pay listing. Read these as ceiling stories, not expectations: they are the single biggest payouts in the window, earned on spending volumes far beyond a typical month, and the dollar figures move with the XPL, ETHFI, and AVAX prices because the rewards are paid in tokens. The band tables and caps in our listings are the better guide to what a given level of spending actually returns.",
    sourceUrl: "https://x.com/0xDani/status/2119781988022554893",
    sourceLabel: "Top payout tracking by @0xDani, November 2026",
  },
  {
    date: "2026-11-12",
    type: "launch",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "RedotPay adds one-tap card purchases of USDT and USDC in the app",
    details:
      "RedotPay has launched Buy Crypto inside its app: open the app, tap More, choose Buy Crypto, pick USDT or USDC, and pay with a credit or debit card, the same way you shop online. Save the card once and later purchases take a single tap. RedotPay markets the flow as lower fees than before, but the worked example in its own launch video charges a $5.64 network and card fee on a $188 purchase, which works out to 3%, the same rate as the published bank-card top-up fee in our listing. On-chain crypto deposits remain free, and Binance Pay top-ups remain 1%. Our RedotPay review now embeds the official walkthrough video in the top-up section.",
    sourceUrl: "https://x.com/RedotPay/status/2119745857016811846",
    sourceLabel: "Official @RedotPay announcement and video, November 2026",
  },
  {
    date: "2026-11-12",
    type: "market",
    cardName: "Crypto card funding costs",
    title: "Top-up costs compared across 8 cards: 5 charge no deposit fee",
    details:
      "A funding-cost comparison by @xKseilas, checked against our listings, breaks down what it costs to top up eight major crypto cards. Jupiter now tops the value table on its home network: USDC and USDT deposits on Solana are free after this week's fee page update, while other networks pay a bridge charge of at least $0.30 plus gas, with minimums of $3 ($10 on Ethereum). Plasma One is the outlier that charges on the way in, at 0.15% to 0.75% per crypto deposit plus network and bridge fees, with a swap fee on USDC that USDT skips. Tria charges nothing itself but passes on a variable provider fee for swaps and routing. ether.fi, KAST, RedotPay, Bitget Wallet, and Tangem Pay charge no top-up fee on stablecoins. The costs that bite sit elsewhere: Bitget Wallet activation is 0.10 USDC inside a 72-hour post-KYC window and 10 USDC after it, KAST withdrawals cost $1 + 0.1% on Solana and $6 + 0.1% on Ethereum, RedotPay issuance is $10 virtual and $100 physical and cannot be paid from the $5 welcome reward, and Tangem Pay delivery runs $28.82 to $79.94 on the free plan. Network choice dominates small top-ups: a USDT transfer on TRON without staked energy costs about $2, which is roughly 10% of a $20 top-up gone before you spend anything. All eight listings have been updated with the funding detail.",
    sourceUrl: "https://x.com/xKseilas/status/2119362799159624017",
    sourceLabel: "Funding-cost comparison by @xKseilas, November 2026",
  },
  {
    date: "2026-11-11",
    type: "catalog-update",
    cardName: "Utorg Card",
    cardSlug: "utorg-card",
    title: "Utorg Card verified in full: zero-fee USDC spending for the EEA",
    details:
      "Our Utorg listing previously carried placeholder text. It is now verified against Utorg's card page, its published terms, and issuer help material, following the zero-fee summary by @Nikitont. The card is a non-custodial virtual Visa for EEA residents (Ukraine is also on the issuer grid), funded with USDC top-ups that are gasless on Ethereum, Polygon, Arbitrum, and Solana. Since the August 2026 migration, cards are USD Visa cards provided by Chain Valley with Wirex Pay and Wirex Limited. There are no issuance, monthly, annual, or replacement fees and no cashback, monthly limits run up to €30,000, and the headline zero payment and FX fees are a limited-time promotion: Visa or provider fees may still apply to non-USD payments, and top-ups credit at 1 USDC = $0.9995.",
    sourceLabel: "@Nikitont summary plus the Utorg card page and terms",
  },
  {
    date: "2026-11-11",
    type: "catalog-update",
    cardName: "Plasma One Card",
    cardSlug: "plasma-one-card",
    title: "Plasma One Core in full: stepped cashback bands and the $199 break-even",
    details:
      "With free Core periods ending, analyst breakdowns of Plasma app data by @xKseilas and @vuirew_ set out the full Core math. Core cashback steps down in bands: 3% on the first $1,000/mo, 2% on the next $1,000, 1% on the next $1,000, then 0.25%. Core AI cashback pays 5% on the first $250/mo of AI spend and 4% on the next $250, and Core now includes its physical card alongside 2 virtual cards and a ChatGPT Go credit. At $3,000/mo of spend, Lite returns about $150/yr against roughly $816/yr on Core including ChatGPT Go, with XPL value held constant. Core covers its $199 fee from about $900/mo of spend on cashback alone, or about $625/mo if you would pay for ChatGPT Go anyway. Our listing and review now carry the full band tables.",
    sourceLabel: "Analyst breakdowns by @xKseilas and @vuirew_, November 2026",
  },
  {
    date: "2026-11-06",
    type: "catalog-update",
    cardName: "MEXC Card",
    cardSlug: "mexc-card",
    title: "US Treasury cuts MEXC off from the US financial system",
    details:
      "On November 6, 2026, FinCEN ordered US financial institutions to stop processing fund transfers to and from MEXC Global, accusing the exchange of facilitating at least $16 billion in illicit transactions tied to Iranian, North Korean, and Russian sanctions evasion between May 2021 and May 2026. The order takes effect 30 days after publication in the Federal Register and does not itself freeze customer deposits, but it changes the risk profile of holding a balance or a loaded MEXC Card. Our news article on the order has the full breakdown and sources.",
    sourceLabel: "US Treasury press release, November 6, 2026",
  },
  {
    date: "2026-11-04",
    type: "market",
    cardName: "Rain-issued cards",
    title: "Rain is the biggest crypto card issuer: $584.2M spent in October",
    details:
      "Cards issued by Rain processed $584.2M of spending in October 2026, making Rain the largest crypto card issuer by volume, as tracked and reported by @0xVishnya. Rain issues cards for a growing list of programs, including ether.fi Cash, Plasma One, and XPlace. Figures are the researcher's tracking; issuer-reported totals can differ.",
    sourceLabel: "@0xVishnya, November 4, 2026",
  },
  {
    date: "2026-11-04",
    type: "market",
    cardName: "Crypto card market",
    title: "October 2026 tracker: $1.37B spent across crypto card programs",
    details:
      "PaymentScan's October 2026 tracker puts total crypto card spending at $1.37B for the month. The largest named programs are RedotPay, ether.fi Cash, KAST, Wirex One, Karta, Plasma One, and Kolo, with a further $524.9M spread across 28 other programs. That is up from the $1.22B tracked for September 2026.",
    sourceLabel: "paymentscan.xyz, October 2026 tracker",
    sourceUrl: "https://paymentscan.xyz",
  },
  {
    date: "2026-11-03",
    type: "market",
    cardName: "Card tokens",
    title: "Crypto card tokens are down a median 94% from their peaks",
    details:
      "@xKseilas ranked the tokens crypto cards pay cashback in or stake for tiers on November 3, 2026: XPL down 96% from its peak, CRO down 94%, ETHFI down 93%, NEXO down about 81%, with a median drop of 94% against Bitcoin's 39%. His corrected breakdown: Plasma, Crypto.com, and Nexo pay rewards in their own token; Tria, ether.fi, and COCA use a token to unlock better tiers while paying cashback in dollars or stablecoins; OKX, MEXC, and Kraken need no token at all. Cashback paid in the card's own token means you carry its drop.",
    sourceLabel: "@xKseilas analysis and corrections, November 3, 2026",
  },
  {
    date: "2026-11-03",
    type: "market",
    cardName: "Crypto card market",
    title: "October 2026 was the biggest month ever: $1.69B including top-ups",
    details:
      "Crypto card volume reached $1.69B in October 2026 with top-ups included, up 7% on September, per @0xVishnya's PaymentScan-based tracking. RedotPay topped up $555.5M and spent $423.5M, both records; KAST topped up $230.3M; ether.fi topped up $172.4M and spent a record $141.9M; Plasma One spend hit a record $29.8M; Wirex One spent $54.8M and has grown every month since its June launch; Kolo spent a record $20.5M. Spend-only, PaymentScan's tracker puts the month at $1.37B.",
    sourceLabel: "@0xVishnya with PaymentScan data, November 3, 2026",
  },
  {
    date: "2026-11-03",
    type: "catalog-update",
    cardName: "Card BINs",
    title: "Some personal crypto cards run on company card BINs",
    details:
      "BIN research published by @xKseilas on November 3, 2026 found cards sold to individuals running on business ranges: Gate Essential on a Mastercard Purchasing BIN (Sutton Bank, US), GMGN on a Mastercard Corporate BIN (Hong Kong), Infini Lite on a Visa Business BIN (US), and Rain's issuer range on Visa Corporate T&E. The card type matters: EU interchange caps and the EU surcharge ban cover consumer cards only, and some merchants block business or prepaid BINs. Our BIN guide has the full explanation.",
    sourceLabel: "@xKseilas BIN research, November 3, 2026",
  },
  {
    date: "2026-11-03",
    type: "market",
    cardName: "Gnosis Pay",
    cardSlug: "gnosis-pay-card",
    title: "Gnosis Pay emails cardholders about a data breach: names and shipping addresses taken",
    details:
      "On November 3, 2026 Gnosis Pay emailed card users that their names and shipping addresses were taken in a breach of the card system; funds were not affected. Rotki founder Lefteris Karapetsas said his email also listed his card number and every wallet linked to the account, a combination that lets anyone check those wallets onchain. It is the fourth crypto card hack since June 2026 and Gnosis Pay's second incident of the year. The consumer card closes on December 20, 2026, and its help pages say KYC and transaction records are kept for five more years. Our security incidents guide now covers the breach and what each card's terms say about who pays for unauthorized use.",
    sourceUrl: "https://x.com/xKseilas/status/2118801142830502358",
    sourceLabel: "@xKseilas, November 2026",
  },
  {
    date: "2026-11-02",
    type: "catalog-update",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST Points end November 30: the Pioneer Units deadlines that matter",
    details:
      "@xKseilas laid out the fine print on November 2, 2026: KAST Points stop being earned on November 30, allocations are revealed in the first week of December, and holders who miss the in-app acknowledgement before the December deadline have their units cancelled with no points back. Too few points, the wrong country, or a low balance means spending vouchers instead of units. Cash-outs are planned with no dates or amounts. Our KAST Points and Pioneer Units guide has the full breakdown, including how the July pitch of 10,000 points as two shares became a unit with no ownership and no guaranteed cash value.",
    sourceLabel: "@xKseilas report, November 2, 2026",
  },
  {
    date: "2026-11-02",
    type: "catalog-update",
    cardName: "RedotPay Card",
    cardSlug: "redotpay-card",
    title: "RedotPay cards are not issued for India, even though the app allows sign-up",
    details:
      "RedotPay's Card Issuance Restrictions, updated August 28, 2026, state that Indian residents are not eligible for virtual or physical cards and that India is not accepted as a billing address, as highlighted by @xKseilas on November 2, 2026. The app still allows registration, KYC, and balances, and Indian users have recently reported failed card payments while Indian regulators are reportedly examining offshore crypto cards. If you are in India, do not load a RedotPay card expecting it to keep working.",
    sourceLabel: "RedotPay Card Issuance Restrictions via @xKseilas, November 2, 2026",
  },
  {
    date: "2026-11-02",
    type: "promo",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi refunds bank deposit fees for paid tiers until December 31",
    details:
      "ether.fi is refunding fees on ACH, wire, SEPA, PIX, and Faster Payments deposits until December 31, 2026, paid back after each month ends. Monthly covered deposit caps: Luxe $3,000, Pinnacle $15,000, VIP $150,000. Core members get nothing unless they upgrade to Luxe or Pinnacle by December 31, which backdates refunds to deposits made from November 1. The FX spread on deposits is not refunded.",
    sourceLabel: "ether.fi announcement and promotion terms, November 2, 2026",
  },
  {
    date: "2026-11-01",
    type: "catalog-update",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST drops its token plan and replaces KAST Points with Pioneer Units",
    details:
      "KAST has dropped its planned token and replaced KAST Points with KAST Pioneer Units, as reported by @0xDani and @xKseilas on November 1, 2026. Holders who farmed Points expecting a token conversion are the most affected. We explain what changed and what it means in our guide to the KAST Points change. Treat program rewards as changeable until a token or cash value actually exists.",
    sourceLabel: "@0xDani and @xKseilas reports, November 1, 2026",
  },
  {
    date: "2026-11-01",
    type: "fee-change",
    cardName: "MEXC Card",
    cardSlug: "mexc-card",
    title: "MEXC cashback caps clarified: $50 a month Standard, $150 Premier",
    details:
      "MEXC's cashback FAQ puts monthly cashback caps at $50 on the Standard tier and $150 on Premier, as highlighted by @xKseilas on November 1, 2026. The headline rate of up to 10% cashback only matters until the cap is hit, so heavy spenders should plan around the cap, not the rate. We have updated the MEXC listing with both caps.",
    sourceLabel: "MEXC cashback FAQ, via @xKseilas, November 1, 2026",
  },
  {
    date: "2026-10-30",
    type: "catalog-update",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash: rent and tax payments now earn cashback, full ZCHF support",
    details:
      "From October 30, 2026, rent and tax payments made with the ether.fi Cash card earn cashback, and the card fully supports spending in ZCHF, the Swiss franc stablecoin, per the ether.fi Help Center. Two of the most common reasons a card payment earned nothing, rent and tax categories, are now covered.",
    sourceLabel: "ether.fi Help Center, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "catalog-update",
    cardName: "KardPay",
    cardSlug: "kardpay-card",
    title: "KardPay opens physical cards to everyone, with worldwide shipping",
    details:
      "KardPay opened physical card ordering to all users on October 30, 2026, with worldwide shipping, as reported by @0xVishnya. Physical cards were previously tied to an Elite pre-order, so this widens access to the plastic card considerably.",
    sourceLabel: "@0xVishnya report, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "market",
    cardName: "MoonPay partnerships",
    title: "MoonPay expands card partnerships: ether.fi, XPlace, Moto, and Avici",
    details:
      "MoonPay announced expanded partnerships with ether.fi, XPlace, Moto, and Avici on October 30, 2026, per the MoonPay newsroom. On-ramp and payments infrastructure deals like these usually show up later as smoother funding inside each card app.",
    sourceLabel: "MoonPay newsroom, October 30, 2026",
  },
  {
    date: "2026-10-30",
    type: "market",
    cardName: "Visa and Mesh",
    title: "Visa and Mesh: stablecoin spending at 175M+ merchants, no crypto card needed",
    details:
      "Visa and Mesh announced stablecoin spending support across more than 175 million merchants, as reported by Cointelegraph on October 30, 2026. If paying with stablecoins from a regular wallet becomes normal at Visa checkout, dedicated crypto cards face a new kind of competition.",
    sourceLabel: "Cointelegraph, October 30, 2026",
  },
  {
    date: "2026-10-29",
    type: "fee-change",
    cardName: "Bitget Wallet Card",
    cardSlug: "bitget-wallet-card",
    title: "Bitget Wallet cuts physical card fee to $25, adds USD and EUR virtual accounts",
    details:
      "Bitget Wallet cut its physical card fee to $25 on October 29, 2026 and added USD and EUR virtual accounts, as reported by @0xVishnya. The virtual accounts make it easier to hold and move between dollars, euros, and the card balance.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "launch",
    cardName: "Solid Card",
    cardSlug: "solid-card",
    title: "Solid launches a euro yield account with its own IBAN",
    details:
      "Solid launched a euro yield account with a personal IBAN on October 29, 2026, as reported by @0xVishnya. Until now the app centered on dollar balances and SoUSD yield; a euro account with an IBAN makes SEPA transfers in and out far simpler for European users.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "catalog-update",
    cardName: "XPlace Card",
    cardSlug: "xplace-card",
    title: "XPlace credit mode paused for a day after Kamino halted SOL and BTC borrowing",
    details:
      "XPlace paused its card's credit mode on October 29 to 30, 2026 after Kamino, the lending market behind its USDC credit line, halted SOL and BTC borrowing, as reported by @0xVishnya. It is a clear example of how a DeFi-backed card inherits the risks of the protocol underneath it.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-29",
    type: "launch",
    cardName: "Exa Card",
    cardSlug: "exa-card",
    title: "Exa launches Exa Blue, a credit card backed by Coinbase tokenized stocks",
    details:
      "Exa launched Exa Blue on October 29, 2026, reported by @0xVishnya as the first credit card backed by Coinbase tokenized stocks. Instead of crypto collateral alone, the credit line is backed by tokenized equity held on Coinbase's platform.",
    sourceLabel: "@0xVishnya report, October 29, 2026",
  },
  {
    date: "2026-10-28",
    type: "launch",
    cardName: "Ethena Pay",
    cardSlug: "ethena-pay-card",
    title: "Ethena Pay launches Earn+: up to 12% APY on USD in an external vault",
    details:
      "Ethena Pay launched Earn+ on October 28, 2026, offering up to 12% APY on USD balances held in an external vault, as reported by @0xVishnya. The rate is a vault yield, variable and strategy-dependent, not a guaranteed deposit rate.",
    sourceLabel: "@0xVishnya report, October 28, 2026",
  },
  {
    date: "2026-10-28",
    type: "catalog-update",
    cardName: "Plasma One",
    cardSlug: "plasma-one-card",
    title: "Plasma One adds direct ETH and HYPE deposits and spending",
    details:
      "Plasma One added direct ETH and HYPE deposits and spending on October 28, 2026, as reported by @0xVishnya. The card program started stablecoin-only, so volatile-asset support widens what holders can fund it with, at the cost of price risk between deposit and spend.",
    sourceLabel: "@0xVishnya report, October 28, 2026",
  },
  {
    date: "2026-10-27",
    type: "market",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "RedotPay passes 9 million users; reports of a possible confidential US IPO filing",
    details:
      "RedotPay passed 9 million users in October 2026, and Bloomberg reported the company may have made a confidential filing for a US IPO, as summarized by @0xVishnya on October 27, 2026. A listing would make RedotPay one of the first crypto card companies to face public-market disclosure.",
    sourceLabel: "Bloomberg via @0xVishnya, October 27, 2026",
  },
  {
    date: "2026-10-26",
    type: "promo",
    cardName: "Tangem Pay",
    cardSlug: "tangem-pay-card",
    title: "Tangem Pay ran 10% cashback through November 2",
    details:
      "Tangem Pay offered 10% cashback on card spending in a promotion that ran through November 2, 2026, as reported by @0xVishnya. The promotion has now ended; Tangem Pay's standard terms advertise no cashback, so do not plan spending around the promo rate.",
    sourceLabel: "@0xVishnya report, October 26, 2026",
  },
  {
    date: "2026-10-26",
    type: "fee-change",
    cardName: "Slash Card",
    cardSlug: "slash-card",
    title: "Slash cuts its physical card fee in half, to $35",
    details:
      "Slash cut its physical card fee in half to $35 on October 26, 2026, as reported by @0xVishnya. Physical card fees have been falling across the market this quarter as issuers compete on sign-up cost.",
    sourceLabel: "@0xVishnya report, October 26, 2026",
  },
  {
    date: "2026-10-21",
    type: "catalog-update",
    cardName: "1inch Card",
    cardSlug: "1inch-card",
    title: "1inch Card program closes December 18, 2026",
    details:
      "As reported in October 2026, the 1inch Card program closes on December 18, 2026. New sign-ups are already closed, and cardholders have been told to spend or withdraw their balances before the shutdown date. The Mastercard was issued by Monavate and powered by Crypto Life and Baanx. This is based on reports, not an issuer notice we could retrieve directly.",
    sourceLabel: "Reports, October 2026; issuer notice not directly retrievable",
  },
  {
    date: "2026-10-21",
    type: "catalog-update",
    cardName: "Holyheld Card",
    cardSlug: "holyheld-card",
    title: "Holyheld personal accounts and cards closing as issuer Unlimit exits",
    details:
      "As reported in October 2026, issuer Unlimit is closing Holyheld personal accounts and cards. New personal accounts are now invitation-only, and Holyheld is pivoting to business accounts and APIs. Personal cardholders should move spending and any partner-held balances to another card. Based on reports; no issuer notice was directly retrievable.",
    sourceLabel: "Reports, October 2026; issuer notice not directly retrievable",
  },
  {
    date: "2026-10-21",
    type: "promo",
    cardName: "KAST Card",
    cardSlug: "kast-card",
    title: "KAST Uber cashback promo in Latin America, plus 0% FX in 16 LATAM currencies",
    details:
      "Reported promotion, October 19 to November 18, 2026: 50% cashback on the first Uber ride and 10% on following rides, capped at $10 (Latin America excluding Brazil), $15 in Brazil, and $8 for existing Brazil users. KAST also advertises 0% FX fees on purchases in 16 Latin American currencies until the end of 2027. Promotion as reported by @0xDani; confirm current terms in the KAST app.",
    sourceLabel: "@0xDani report, October 2026",
  },
  {
    date: "2026-10-21",
    type: "launch",
    cardName: "Pulsar Money Card",
    cardSlug: "pulsar-money-card",
    title: "Pulsar Money launches with 0% swap fees on EUR and USD conversions",
    details:
      "Pulsar Money (@PulsarMoneyApp) has launched with 0% swap fees on EUR to USD and USD to USDT conversions via StableFX, EUR card spending, and SEPA payouts in euros. Card network, issuer, and a full fee schedule are not published yet, so the listing marks those fields as unpublished.",
    sourceLabel: "Pulsar Money (@PulsarMoneyApp) launch reports, October 2026",
  },
  {
    date: "2026-10-21",
    type: "promo",
    cardName: "Kolo Card",
    cardSlug: "kolo-card",
    title: "Kolo EUR card promo: $20 back on $100 of spending until November 15",
    details:
      "Kolo is running a sign-up promotion until November 15, 2026: spend $100 on the EUR card and get $20 back on the card, as reported in @0xVishnya's Kolo review. The review also confirms the card setup in our listing: USD virtual Visa Platinum issued through Rain, EUR card through Wirex, 1% BTC cashback as standard, and 5% in BTC for the first two months via invite.",
    sourceLabel: "@0xVishnya Kolo review, October 21, 2026",
  },
  {
    date: "2026-10-20",
    type: "market",
    cardName: "EEA exchange cards",
    title: "EEA cards face a USDT funding wind-down by January",
    details:
      "On October 8, 2026 ESMA told regulators that MiCA-licensed platforms should stop all services for non-MiCA stablecoins, with leftover balances wound down around January 8, as compiled by @xKseilas. For cardholders the practical effect: the Bybit EU card already spends USDC, BTC, ETH, MNT, GRAM and XRP rather than USDT; OKX Europe converts USDT deposits one way into USDC; Kraken and Wirex have USDT on their EEA delisted lists. If your EEA card is funded from an exchange USDT balance, plan the move to USDC or EURC now.",
    sourceLabel: "@xKseilas compilation, October 20, 2026",
  },
  {
    date: "2026-10-20",
    type: "promo",
    cardName: "Wirex One",
    cardSlug: "wirex-one-card",
    title: "Wirex One rebates 50% of AI subscription costs, paid in USD",
    details:
      "Wirex One pays back 50% of eligible subscription costs in USD, as reported by @Nikitont on October 20, 2026: ChatGPT Plus on the Elite tier, Claude Pro and Perplexity Pro added on Private, and Whoop, Bloomberg and Financial Times on Bespoke. The rebate lands automatically at month end, in USD rather than tokens, on top of regular cashback, and is calculated against the standard plan price.",
    sourceLabel: "@Nikitont report, October 20, 2026",
  },
  {
    date: "2026-10-19",
    type: "market",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash passes $1B in total card spend",
    details:
      "The ether.fi Cash card passed $1B in total spend in the week of October 11 to 17, 2026, per @xKseilas's weekly Cash v3 tracking: $31.46M of spend across 404,831 payments that week, with 620,250 ETHFI (about $400K) claimed in cashback by 6,894 recipients. Weekly spend has held in a $28M to $33M band for six straight weeks.",
    sourceLabel: "@xKseilas Cash v3 tracking, October 19, 2026",
  },
  {
    date: "2026-10-19",
    type: "market",
    cardName: "Crypto card market",
    title: "Crypto card spending tripled in a year: $403M to $1.22B",
    details:
      "Per-card figures from researcher @0xVishnya (Oct 14, 2026) show September 2026 spend at $1.22B vs $403M a year earlier. Fastest growers: Tria 108x, Kolo/Karta/Avici 16x each, Tuyo 9.4x, ether.fi 5.4x. RedotPay still leads absolute volume at $537.9M topped up. Full breakdown in our market article. Figures are the researcher's tracking; his methodology is not published.",
    sourceUrl: "https://www.cryptosbeginner.com/crypto-cards/news/crypto-card-spending-tripled-2026",
    sourceLabel: "CryptosBeginner market article; data attributed to @0xVishnya",
  },
  {
    date: "2026-10-19",
    type: "launch",
    cardName: "AnomaPay Card",
    cardSlug: "anomapay-card",
    title: "AnomaPay Card announced, waitlist open",
    details:
      "AnomaPay, the non-custodial privacy-preserving payments app built on Anoma's intent architecture, has announced a crypto card with a waitlist signup. Planned features include referral bonuses and reward earning, but no card network, issuer, fee schedule, or launch date is published. Added to the catalog as a pre-launch listing.",
    sourceUrl: "https://anomapay.app/",
    sourceLabel: "AnomaPay official site",
  },
  {
    date: "2026-10-19",
    type: "launch",
    cardName: "Plasma One",
    cardSlug: "plasma-one-card",
    title: "Plasma One Card review published with full fee tables",
    details:
      "Full review of the self-custodial Plasma One Visa card: Lite free (2% XPL on first $500/month), Core $199/year or 20,000 XPL lock (3% base), Platinum 100,000 XPL lock promo (4% base, 0% FX). Real fee tables from the help center, deposit networks, ATM limits, and country availability, tested on the live app.",
    sourceLabel: "Plasma help center; Plasma One app (verified from in-app images)",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Wirex One",
    cardSlug: "wirex-one-card",
    title: "Wirex One adds Apple Pay top-ups (Google Pay may have followed)",
    details:
      "Wirex One quietly added Apple Pay top-ups, as reported by @0xDani on October 18, 2026: local card top-ups carry no Wirex fee and land instantly, while USD top-ups carry a conversion fee because payments are processed in EUR. Google Pay top-ups may have been added at the same time. Availability depends on region.",
    sourceLabel: "@0xDani report, October 18, 2026",
  },
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Onchain neobanks",
    title: "Eight onchain neobanks spent $45.26M in one week",
    details:
      "Users of ether.fi Cash, Plasma One, Ethena Pay, Bleap, Kolo, Tuyo, Hyperbeat, and BFinance spent about $45.26M in the week to October 18, 2026, per PaymentScan and DeFiLlama figures shared by @0xDani. Weekly snapshots like this are the run-up to the $1.37B monthly total PaymentScan tracked for October.",
    sourceLabel: "PaymentScan and DeFiLlama via @0xDani, October 18, 2026",
  },
  {
    date: "2026-10-18",
    type: "launch",
    cardName: "ether.fi Cash",
    cardSlug: "etherfi-cash-card",
    title: "ether.fi Cash review published with full fee tables",
    details:
      "Our hands-on ether.fi Cash review is live, built from in-app screenshots: all four membership tiers (Core, Luxe, Pinnacle, VIP), 3% cashback with monthly caps, borrow mode from 1.43%, ATM and FX fee tables, and bank transfer availability across 162 countries.",
    sourceLabel: "CryptosBeginner review",
  },
  {
    date: "2026-10-18",
    type: "launch",
    cardName: "Plasma One vs Tria",
    title: "Plasma One vs Tria comparison published",
    details:
      "New comparison guide: two self-custodial Visa cards on Rain infrastructure compared side by side on cashback tiers, monthly caps, FX fees, and app features. Includes corrections to viral social media claims (Tria perps are 40x, not 50x).",
    sourceLabel: "CryptosBeginner guide",
  },
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Gnosis Pay",
    cardSlug: "gnosis-pay-card",
    title: "Gnosis Pay consumer card shuts down December 20",
    details:
      "Gnosis Pay notified cardholders on September 21 that the consumer card and web app stop working on December 20, 2026 at 23:59 UTC. Users keep their self-custodial Safe and all assets inside it, with no withdrawal deadline. New sign-ups closed September 30; GNO cashback ended with final distribution October 7. The company is pivoting to B2B white-label card infrastructure.",
    sourceLabel: "Multiple secondary reports (Crypto Briefing, Binance Square); original cardholder notice not directly retrievable",
  },
  {
    date: "2026-10-18",
    type: "market",
    cardName: "Bitget",
    title: "Bitget adds Russia and Belarus to prohibited countries",
    details:
      "Bitget's updated Terms of Use (October 16, 2026) added Russia and Belarus to its prohibited-country list. Thailand was already prohibited in earlier versions, contrary to some social media reports. Affected users receive individual deadlines and withdrawal instructions; there is no universal cutoff date. Note: this concerns the Bitget exchange; no official notice links the separate Bitget Wallet Card to this offboarding.",
    sourceLabel: "Bitget official Terms of Use; crypto.news, TronWeekly",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Worked cost examples added to card pages",
    details:
      "Five cards with published fee schedules (Tria, Solid, RedotPay, Bybit, DogPay) now show line-by-line worked examples: ATM withdrawals and FX purchases with each fee shown separately, so readers can see exactly where the money goes before applying.",
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Effective cashback rankings launched",
    details:
      "A new ranking computes each card's net effective cashback at $500, $1,000 and $2,000 monthly spend after monthly caps and annual fees. 29 cards rank on a base rate; 22 more publish only promotional maximums and are listed separately so headline rates cannot win by omission.",
    cardSlug: undefined,
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-18",
    type: "catalog-update",
    cardName: "Kraken",
    title: "Kraken referral link updated site-wide",
    details:
      "All Kraken links across exchange reviews, card listings, region guides and tools now use the current referral link (up to $200 each for referrer and referee). The previous masked redirect was retired.",
    sourceLabel: "CryptosBeginner catalog",
  },
  {
    date: "2026-10-17",
    type: "fee-change",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "New official fee schedule (effective December 1, 2025)",
    details:
      "RedotPay published a new fee schedule: $10 virtual card, $100 physical card, $5 first replacement then $10, 1.20% non-default currency fee, 1.00% transaction (conversion) fee, USD ATM 2% up to $10k/month then 3%. Our listing and fee table were rebuilt from the official image.",
    sourceLabel: "RedotPay official fee schedule",
  },
  {
    date: "2026-10-17",
    type: "launch",
    cardName: "RedotPay",
    cardSlug: "redotpay-card",
    title: "RedotPay Pro tiers documented",
    details:
      "RedotPay Pro: Monthly $12.90 (free virtual card, 3% cashback on Apple/Google Pay) and Annual $129 (free physical card, $1,000/month fee-free ATM, +1% Earn APY boost). The 18 USDs/month Pro cashback cap is reported by third-party reviewers, not confirmed in official terms.",
    sourceLabel: "RedotPay official terms; third-party reviewers for the cap",
  },
  {
    date: "2026-10-17",
    type: "launch",
    cardName: "Tria",
    cardSlug: "tria-card",
    title: "Tria card review published",
    details:
      "Full review of the self-custodial Tria Visa card: Lite $20/year (1.5% on first $1,000/month), Pro $109/year (4.5% on first $1,000/month), Max $250/year (6% on first $2,000/month). ATM costs $1.00 plus 1% per withdrawal.",
    sourceLabel: "Tria app (verified from in-app images)",
  },
  {
    date: "2026-10-15",
    type: "catalog-update",
    cardName: "Site-wide",
    title: "Card catalog rebuilt to 183 listings",
    details:
      "The directory was overhauled to 183 cards with official issuer artwork, verified fees and limits, and duplicate listings merged. Each listing carries a 'facts checked' date and a source link.",
    sourceLabel: "CryptosBeginner catalog",
  },
];

export function getNewsByType(type: CardNewsEntry["type"]): CardNewsEntry[] {
  return CARD_NEWS.filter((entry) => entry.type === type);
}

