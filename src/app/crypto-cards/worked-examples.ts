export interface ExampleLine {
  label: string;
  amount: number; // signed dollars; negative = cost
}

export interface WorkedExample {
  title: string;
  scenario: string;
  lines: ExampleLine[];
  result: string;
  sourceNote: string;
}

// Hand-verified worked examples for cards with published fee schedules.
// Amounts are rounded to cents. Do not invent fees: only cards with a
// published schedule are listed here.
export const WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
  "tria-card": [
    {
      title: "ATM withdrawal: $200",
      scenario:
        "You withdraw $200 at an ATM. Tria charges $1.00 plus 1% of the amount per withdrawal.",
      lines: [
        { label: "Withdrawal amount", amount: 200 },
        { label: "Flat ATM fee", amount: -1 },
        { label: "1% of $200", amount: -2 },
      ],
      result: "You receive $200 in cash; the total cost to your balance is $203.00.",
      sourceNote: "Based on Tria in-app fee display: $1.00 + 1% per ATM withdrawal, max $750 per transaction.",
    },
    {
      title: "ATM withdrawal: $750 (max per transaction)",
      scenario:
        "You take the maximum $750 in one transaction. The 1% scales with the amount.",
      lines: [
        { label: "Withdrawal amount", amount: 750 },
        { label: "Flat ATM fee", amount: -1 },
        { label: "1% of $750", amount: -7.5 },
      ],
      result: "You receive $750 in cash; the total cost to your balance is $758.50.",
      sourceNote: "Based on Tria in-app fee display: $1.00 + 1% per ATM withdrawal, max $750 per transaction.",
    },
  ],
  "solid-card": [
    {
      title: "Spending $500 in euros",
      scenario:
        "You spend the equivalent of $500 in EUR. Solid charges 1% provider FX plus 0.5% Solid FX on non-USD spending, 1.5% total at every tier.",
      lines: [
        { label: "Purchase amount", amount: 500 },
        { label: "Provider FX (1%)", amount: -5 },
        { label: "Solid FX (0.5%)", amount: -2.5 },
      ],
      result: "The purchase effectively costs you $507.50.",
      sourceNote: "Based on Solid published fees: 1% provider FX + 0.5% Solid FX = 1.5% on non-USD spending.",
    },
    {
      title: "Spending $500 in US dollars",
      scenario: "You spend $500 in USD. USD spending is free at every Solid tier.",
      lines: [{ label: "Purchase amount", amount: 500 }],
      result: "The purchase costs you $500.00. No FX fee applies.",
      sourceNote: "Based on Solid published fees: USD spending free at all tiers.",
    },
  ],
  "redotpay-card": [
    {
      title: "Spending $500 in a non-default currency",
      scenario:
        "Your card's default currency is USD and you spend the equivalent of $500 in EUR. The official schedule lists a 1.00% transaction (conversion) fee and a 1.20% non-default currency fee.",
      lines: [
        { label: "Purchase amount", amount: 500 },
        { label: "Conversion fee (1.00%)", amount: -5 },
        { label: "Non-default currency fee (1.20%)", amount: -6 },
      ],
      result: "The purchase effectively costs you $511.00.",
      sourceNote:
        "Based on the RedotPay official fee schedule effective December 1, 2025: 1.00% transaction fee, 1.20% non-default currency fee.",
    },
    {
      title: "ATM withdrawal: $200 in USD",
      scenario:
        "You withdraw $200 from a USD ATM. The schedule lists a 2% fee on USD ATM withdrawals up to $10,000 per month, then 3%.",
      lines: [
        { label: "Withdrawal amount", amount: 200 },
        { label: "ATM fee (2%)", amount: -4 },
      ],
      result: "You receive $200 in cash; the total cost to your balance is $204.00.",
      sourceNote:
        "Based on the RedotPay official fee schedule effective December 1, 2025: 2% USD ATM fee up to $10,000/month.",
    },
  ],
  "bybit-card": [
    {
      title: "ATM withdrawal: $300 in a month",
      scenario:
        "You withdraw $300 in one month. Bybit gives $100 of free ATM withdrawals per month; a 2% fee applies after that.",
      lines: [
        { label: "Withdrawal amount", amount: 300 },
        { label: "Free monthly allowance", amount: 0 },
        { label: "2% on the $200 above $100", amount: -4 },
      ],
      result: "You receive $300 in cash; the total cost to your balance is $304.00.",
      sourceNote:
        "Based on the Bybit Card product page: 100 USD (or equivalent) free ATM withdrawals per month, 2% after.",
    },
  ],
  "dogpay-card": [
    {
      title: "Topping up $200 on the Basic plan",
      scenario:
        "You top up $200 on the free Basic plan. DogPay charges a 1% card top-up fee on Basic (0.8% Premium, 0.5% Platinum, 0.3% Ultra).",
      lines: [
        { label: "Top-up amount", amount: 200 },
        { label: "Top-up fee (1%)", amount: -2 },
      ],
      result: "$198.00 lands on your card.",
      sourceNote: "Based on DogPay published pricing: 1% top-up fee on the Basic plan.",
    },
  ],
  "oobit-card": [
    {
      title: "A $100 purchase in US dollars",
      scenario:
        "You pay $100 with the Oobit card. Oobit charges a 1% fee on card payments; the card itself is free and has no monthly fee.",
      lines: [
        { label: "Purchase amount", amount: 100 },
        { label: "Card payment fee (1%)", amount: -1 },
      ],
      result: "The purchase effectively costs you $101.00.",
      sourceNote: "Based on Oobit's official fees page: 1% on card payments, card free, no monthly fee.",
    },
    {
      title: "A $100 purchase in euros",
      scenario:
        "You pay the equivalent of $100 in euros. The card is denominated in USD, so the 1% card payment fee and the 1.5% currency conversion fee both apply.",
      lines: [
        { label: "Purchase amount", amount: 100 },
        { label: "Card payment fee (1%)", amount: -1 },
        { label: "Conversion fee (1.5%)", amount: -1.5 },
      ],
      result: "The purchase effectively costs you $102.50.",
      sourceNote: "Based on Oobit's official fees page: 1% on card payments plus a 1.5% conversion fee on non-USD payments.",
    },
    {
      title: "ATM withdrawal: $200",
      scenario: "You withdraw $200 at an ATM. Oobit charges 2.5% on ATM withdrawals.",
      lines: [
        { label: "Withdrawal amount", amount: 200 },
        { label: "ATM fee (2.5%)", amount: -5 },
      ],
      result: "You receive $200 in cash; the total cost to your balance is $205.00.",
      sourceNote: "Based on Oobit's official fees page: 2.5% on ATM withdrawals. ATM operator surcharges can add more.",
    },
  ],
  "tangem-pay-card": [
    {
      title: "ATM withdrawal: $200 on the free Basic plan",
      scenario:
        "You withdraw $200 at an ATM on Tangem Pay's free Basic plan, which charges 4% per withdrawal. Withdrawals are capped at $250 each, 3 per 24 hours.",
      lines: [
        { label: "Withdrawal amount", amount: 200 },
        { label: "ATM fee (4%)", amount: -8 },
      ],
      result: "You receive $200 in cash; the total cost to your balance is $208.00.",
      sourceNote: "Based on Tangem Pay's official tariffs (applicable 8 October 2026): ATM fee 4% on Basic.",
    },
    {
      title: "ATM withdrawal: $200 on the Plus plan",
      scenario:
        "The same $200 withdrawal on the Plus plan ($29.99 a month) is charged at 2% instead of 4%.",
      lines: [
        { label: "Withdrawal amount", amount: 200 },
        { label: "ATM fee (2%)", amount: -4 },
      ],
      result: "You receive $200 in cash; the total cost to your balance is $204.00.",
      sourceNote: "Based on Tangem Pay's official tariffs (applicable 8 October 2026): ATM fee 2% on Plus.",
    },
    {
      title: "Spending $500 in euros",
      scenario:
        "You spend the equivalent of $500 in EUR. Tangem Pay converts at the Visa exchange rate plus a 1.5% FX fee on non-USD transactions, the same on both plans.",
      lines: [
        { label: "Purchase amount", amount: 500 },
        { label: "FX fee (1.5%)", amount: -7.5 },
      ],
      result: "The purchase effectively costs you $507.50.",
      sourceNote: "Based on Tangem Pay's official tariffs (applicable 8 October 2026): FX is the Visa exchange rate plus 1.5%.",
    },
  ],
  "infini-card": [
    {
      title: "A $100 purchase in euros on Infini Lite",
      scenario:
        "You pay the equivalent of $100 in euros on the Lite card. Lite charges 3% FX on non-USD spend and no cross-border fee.",
      lines: [
        { label: "Purchase amount", amount: 100 },
        { label: "FX fee (3%)", amount: -3 },
      ],
      result: "The purchase effectively costs you $103.00.",
      sourceNote: "Based on Infini's official pricing page: Lite FX fee 3%, cross-border fee 0%.",
    },
    {
      title: "A $100 purchase in euros on Infini Pro",
      scenario:
        "The same $100 euro purchase on the Pro card is charged at Pro's 1% FX rate, with no cross-border fee.",
      lines: [
        { label: "Purchase amount", amount: 100 },
        { label: "FX fee (1%)", amount: -1 },
      ],
      result: "The purchase effectively costs you $101.00.",
      sourceNote: "Based on Infini's official pricing page: Pro FX fee 1%, cross-border fee 0%.",
    },
    {
      title: "A $20 purchase outside Hong Kong on Infini Max",
      scenario:
        "Max charges no FX fee, but a $20 purchase outside Hong Kong picks up Max's 1% cross-border fee and its $0.30 small-transaction fee for purchases under $50.",
      lines: [
        { label: "Purchase amount", amount: 20 },
        { label: "Cross-border fee (1%)", amount: -0.2 },
        { label: "Small-transaction fee", amount: -0.3 },
      ],
      result: "The purchase effectively costs you $20.50.",
      sourceNote: "Based on Infini's official pricing page: Max FX 0%, cross-border 1% outside Hong Kong, $0.30 on transactions under $50.",
    },
    {
      title: "Refunding a $100 purchase on Infini Pro",
      scenario:
        "You return a $100 purchase paid with the Pro card. Infini charges a 1% refund fee on all four personal cards.",
      lines: [
        { label: "Refund amount", amount: 100 },
        { label: "Refund fee (1%)", amount: -1 },
      ],
      result: "You receive $99.00 back.",
      sourceNote: "Based on Infini's official pricing page: refund fee 1% on Lite, Lite Plus, Pro and Max.",
    },
  ],
};

export function getWorkedExamples(slug: string): WorkedExample[] {
  return WORKED_EXAMPLES[slug] ?? [];
}
