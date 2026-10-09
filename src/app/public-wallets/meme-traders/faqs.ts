export interface FaqItem {
  question: string;
  answer: string;
}

export const memeTraderFaqs: FaqItem[] = [
  {
    question: "Can I look up a trader by their X (Twitter) handle?",
    answer:
      "No. This tool only accepts a public wallet address that you paste in yourself. Handle-to-wallet mapping is exactly the mechanism impersonation scams use: anyone can claim an address belongs to a famous trader. Only trust a wallet that the trader disclosed on their own verified channel.",
  },
  {
    question: "Does this tool show a trader's profit and loss?",
    answer:
      "No. It does not calculate or display PnL, win rates, or returns. The result card links the address out to GMGN and block explorers, where you can inspect on-chain activity yourself. Any site that shows you a trader's PnL without explaining its data source should be treated with skepticism.",
  },
  {
    question: "Is a wallet labeled as a famous trader really theirs?",
    answer:
      "Not necessarily. Labels on this site are hypotheses you attach for your own research, never verified identities. A wallet can be shared, automated, custodial, or part of a larger strategy you cannot see. Treat every label as unproven until the owner confirms it publicly.",
  },
  {
    question: "Is it safe to paste a wallet address into this tool?",
    answer:
      "Yes. A public address is designed to be shared and reveals nothing that lets anyone move your funds. This tool runs entirely in your browser and sends the address nowhere except the explorer links you choose to open. Never paste a private key or seed phrase into any website, including this one.",
  },
  {
    question: "Will saving a wallet notify me when the trader buys or sells?",
    answer:
      "No. Saving an address only stores it on your local research board on the /public-wallets page. This tool creates no alerts, no orders, and no copy-trading positions. It is an observation aid, not a trading system.",
  },
  {
    question: "Should I copy a meme coin trader's trades?",
    answer:
      "Copying trades you find online is extremely risky and this page is not financial advice. Public wallets can be cherry-picked, front-run, hedged off-chain, or simply lucky for a stretch. Most meme coins go to zero. If you trade at all, risk only money you can afford to lose completely and never mirror strangers with real capital.",
  },
  {
    question: "How often is the featured trader directory updated?",
    answer:
      "The directory reflects KOLlector's most-searched ranking for the seven days before 8 October 2026, and each entry shows how the wallet-to-handle link is recorded. We refresh the ranking monthly and date every refresh on the page, so you can always see how current the snapshot is.",
  },
  {
    question: "Can I practice trading before risking real money?",
    answer:
      "Yes. Our paper trading simulator gives you a free $10,000 virtual account to practice buying and selling Solana memecoins against live indicative quotes. It runs entirely in your browser with no sign-up, and it is the safest place to learn how entries, exits, and position sizing feel before you consider real funds.",
  },
];
