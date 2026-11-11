// Monthly crypto card spend data, compiled from PaymentScan (paymentscan.xyz)
// as republished in table form by Castle Labs (castlelabs.io/research/crypto-cards).
// Figures are settled card payments, not top-ups. Updated by hand each month;
// see /crypto-cards/spending for methodology and caveats.

export type SpendBasis = "onchain" | "issuer-reported" | "daily-batches";

export const SPEND_BASIS_LABELS: Record<SpendBasis, string> = {
  onchain: "Onchain",
  "issuer-reported": "Issuer-reported",
  "daily-batches": "Onchain, daily batches",
};

export interface ProgramSpend {
  program: string;
  slug?: string; // our directory slug, when the card is listed
  spendUsd: number;
  sharePct: number; // as published, rounded
  vsPrevPct: number | null; // vs previous month, as published
  basis: SpendBasis;
  avgPaymentUsd?: number;
  payingUsers?: number;
  monthToDateUsd?: number; // following month, partial, as published
}

export interface IssuerSpend {
  issuer: string;
  spendUsd: number;
  vsPrevPct: number | null;
}

export interface MonthSpend {
  month: string; // YYYY-MM
  label: string;
  redotpay: number;
  etherfi: number;
  kast: number;
  wirexOne: number;
  karta: number;
  plasmaOne: number;
  allOther: number; // every other program plus unattributed issuer flows
}

export const LATEST_SPEND_MONTH = "October 2026";
export const LATEST_SPEND_MONTH_ISO = "2026-10";
export const SPEND_DATA_UPDATED = "12 November 2026";
export const OCTOBER_2026_TOTAL_USD = 1_370_000_000; // as published, rounded
export const OCTOBER_2026_VS_SEP_PCT = 11;
export const OCTOBER_2026_UNATTRIBUTED_USD = 448_100_000;
export const NOVEMBER_2026_MTD_LABEL = "November so far (to 6 Nov)";

export const OCTOBER_2026_PROGRAMS: ProgramSpend[] = [
  { program: "RedotPay", slug: "redotpay-card", spendUsd: 423_500_000, sharePct: 31, vsPrevPct: 5.0, basis: "issuer-reported", monthToDateUsd: 74_900_000 },
  { program: "ether.fi Cash", slug: "etherfi-cash-card", spendUsd: 141_900_000, sharePct: 10, vsPrevPct: 10, basis: "onchain", avgPaymentUsd: 76, payingUsers: 51_839, monthToDateUsd: 26_700_000 },
  { program: "KAST", slug: "kast-card", spendUsd: 121_000_000, sharePct: 8.8, vsPrevPct: 6.3, basis: "daily-batches", monthToDateUsd: 19_500_000 },
  { program: "Wirex One", slug: "wirex-one-card", spendUsd: 54_800_000, sharePct: 4.0, vsPrevPct: 15, basis: "onchain", avgPaymentUsd: 97, payingUsers: 23_608, monthToDateUsd: 11_300_000 },
  { program: "Karta", spendUsd: 53_600_000, sharePct: 3.9, vsPrevPct: 8.4, basis: "daily-batches", monthToDateUsd: 8_300_000 },
  { program: "Plasma One", slug: "plasma-one-card", spendUsd: 30_200_000, sharePct: 2.2, vsPrevPct: 18, basis: "onchain", avgPaymentUsd: 182, payingUsers: 22_636, monthToDateUsd: 4_800_000 },
  { program: "Kolo", slug: "kolo-card", spendUsd: 20_500_000, sharePct: 1.5, vsPrevPct: 4.4, basis: "onchain", avgPaymentUsd: 249, monthToDateUsd: 3_900_000 },
  { program: "Karta.io", spendUsd: 18_000_000, sharePct: 1.3, vsPrevPct: 8.1, basis: "daily-batches", monthToDateUsd: 2_800_000 },
  { program: "Tria", slug: "tria-card", spendUsd: 15_800_000, sharePct: 1.2, vsPrevPct: -5.7, basis: "onchain", avgPaymentUsd: 147, payingUsers: 11_580, monthToDateUsd: 2_500_000 },
  { program: "Coca", spendUsd: 7_800_000, sharePct: 0.6, vsPrevPct: -16, basis: "onchain", avgPaymentUsd: 57, payingUsers: 12_199, monthToDateUsd: 1_400_000 },
  { program: "Gnosis Pay", slug: "gnosis-pay-card", spendUsd: 6_100_000, sharePct: 0.4, vsPrevPct: -20, basis: "onchain", avgPaymentUsd: 48, payingUsers: 6_266, monthToDateUsd: 855_000 },
  { program: "Gate Card", slug: "gate-card", spendUsd: 3_800_000, sharePct: 0.3, vsPrevPct: 40, basis: "issuer-reported", monthToDateUsd: 649_500 },
  { program: "Avici", slug: "avici-card", spendUsd: 3_700_000, sharePct: 0.3, vsPrevPct: -3.0, basis: "onchain", avgPaymentUsd: 149, payingUsers: 3_196, monthToDateUsd: 793_500 },
  { program: "DogPay", slug: "dogpay-card", spendUsd: 3_400_000, sharePct: 0.3, vsPrevPct: 8.1, basis: "issuer-reported", monthToDateUsd: 796_900 },
  { program: "MetaMask Card", slug: "metamask-card", spendUsd: 3_400_000, sharePct: 0.2, vsPrevPct: 1.0, basis: "onchain", avgPaymentUsd: 52, payingUsers: 4_076, monthToDateUsd: 546_700 },
  { program: "Ethena Pay", slug: "ethena-pay-card", spendUsd: 3_100_000, sharePct: 0.2, vsPrevPct: 97, basis: "onchain", avgPaymentUsd: 75, payingUsers: 1_255, monthToDateUsd: 703_600 },
  { program: "Avalanche Card", slug: "avalanche-card", spendUsd: 2_800_000, sharePct: 0.2, vsPrevPct: 1.8, basis: "onchain", avgPaymentUsd: 40, payingUsers: 10_465, monthToDateUsd: 414_100 },
  { program: "Tuyo", spendUsd: 2_100_000, sharePct: 0.2, vsPrevPct: -0.8, basis: "daily-batches", monthToDateUsd: 306_600 },
  { program: "Bitget Wallet", slug: "bitget-wallet-card", spendUsd: 1_800_000, sharePct: 0.1, vsPrevPct: -2.1, basis: "onchain", avgPaymentUsd: 38, payingUsers: 10_991, monthToDateUsd: 304_300 },
  { program: "Exa", spendUsd: 1_700_000, sharePct: 0.1, vsPrevPct: 0.0, basis: "onchain", avgPaymentUsd: 80, payingUsers: 1_557, monthToDateUsd: 229_800 },
  { program: "Solayer Pay", slug: "solayer-card", spendUsd: 1_300_000, sharePct: 0.1, vsPrevPct: -5.0, basis: "daily-batches", monthToDateUsd: 229_000 },
  { program: "BFinance", spendUsd: 1_100_000, sharePct: 0.1, vsPrevPct: 9.1, basis: "issuer-reported", monthToDateUsd: 177_200 },
  { program: "Phantom Cash", slug: "phantom-cash-card", spendUsd: 1_100_000, sharePct: 0.1, vsPrevPct: -2.5, basis: "onchain", avgPaymentUsd: 40, payingUsers: 2_663, monthToDateUsd: 183_900 },
  { program: "Hyperbeat", spendUsd: 691_200, sharePct: 0.1, vsPrevPct: -4.9, basis: "onchain", avgPaymentUsd: 35, payingUsers: 560, monthToDateUsd: 164_000 },
  { program: "Solid", slug: "solid-card", spendUsd: 689_700, sharePct: 0.1, vsPrevPct: 148, basis: "onchain", avgPaymentUsd: 50, payingUsers: 425, monthToDateUsd: 136_100 },
  { program: "SafePal", slug: "safepal-card", spendUsd: 296_600, sharePct: 0.0, vsPrevPct: -29, basis: "onchain", avgPaymentUsd: 14, payingUsers: 6_010, monthToDateUsd: 45_600 },
  { program: "VaultLeap", spendUsd: 34_200, sharePct: 0.0, vsPrevPct: 26, basis: "onchain", avgPaymentUsd: 40, payingUsers: 158, monthToDateUsd: 6_354 },
  { program: "Send", spendUsd: 32_200, sharePct: 0.0, vsPrevPct: -58, basis: "onchain", avgPaymentUsd: 42, payingUsers: 37, monthToDateUsd: 3_478 },
];

// Tracked by PaymentScan with under $10,000 of October 2026 spend (no figures published).
export const OCTOBER_2026_UNDER_10K = ["Ready", "Solflare"];

export const OCTOBER_2026_ISSUERS: IssuerSpend[] = [
  { issuer: "Rain", spendUsd: 204_400_000, vsPrevPct: 23 },
  { issuer: "Wirex", spendUsd: 172_300_000, vsPrevPct: 11 },
  { issuer: "Immersve", spendUsd: 67_700_000, vsPrevPct: 62 },
  { issuer: "Monavate", spendUsd: 2_000_000, vsPrevPct: 8.0 },
  { issuer: "Bridge", spendUsd: 1_700_000, vsPrevPct: 22 },
  { issuer: "UR", spendUsd: 117_900, vsPrevPct: -37 },
];

// Monthly series for the six largest programs plus everything else combined.
// Complete calendar months, as published by Castle Labs from PaymentScan data.
export const MONTHLY_SERIES: MonthSpend[] = [
  { month: "2025-11", label: "Nov 2025", redotpay: 275_000_000, etherfi: 36_840_000, kast: 37_200_000, wirexOne: 0, karta: 6_520_000, plasmaOne: 0, allOther: 126_000_000 },
  { month: "2025-12", label: "Dec 2025", redotpay: 282_000_000, etherfi: 55_810_000, kast: 42_690_000, wirexOne: 0, karta: 7_150_000, plasmaOne: 0, allOther: 134_000_000 },
  { month: "2026-01", label: "Jan 2026", redotpay: 282_000_000, etherfi: 54_290_000, kast: 57_710_000, wirexOne: 0, karta: 9_170_000, plasmaOne: 128_000, allOther: 172_000_000 },
  { month: "2026-02", label: "Feb 2026", redotpay: 269_000_000, etherfi: 53_190_000, kast: 56_000_000, wirexOne: 0, karta: 8_050_000, plasmaOne: 259_000, allOther: 229_000_000 },
  { month: "2026-03", label: "Mar 2026", redotpay: 309_000_000, etherfi: 62_600_000, kast: 60_090_000, wirexOne: 0, karta: 17_190_000, plasmaOne: 1_100_000, allOther: 286_000_000 },
  { month: "2026-04", label: "Apr 2026", redotpay: 316_000_000, etherfi: 65_670_000, kast: 66_610_000, wirexOne: 0, karta: 27_650_000, plasmaOne: 766_000, allOther: 293_000_000 },
  { month: "2026-05", label: "May 2026", redotpay: 340_000_000, etherfi: 80_400_000, kast: 76_240_000, wirexOne: 0, karta: 34_320_000, plasmaOne: 3_410_000, allOther: 330_000_000 },
  { month: "2026-06", label: "Jun 2026", redotpay: 357_000_000, etherfi: 83_440_000, kast: 77_270_000, wirexOne: 1_890_000, karta: 39_060_000, plasmaOne: 8_970_000, allOther: 327_000_000 },
  { month: "2026-07", label: "Jul 2026", redotpay: 395_000_000, etherfi: 100_000_000, kast: 89_600_000, wirexOne: 24_980_000, karta: 58_390_000, plasmaOne: 15_180_000, allOther: 360_000_000 },
  { month: "2026-08", label: "Aug 2026", redotpay: 404_000_000, etherfi: 110_000_000, kast: 105_000_000, wirexOne: 34_940_000, karta: 43_690_000, plasmaOne: 19_900_000, allOther: 406_000_000 },
  { month: "2026-09", label: "Sep 2026", redotpay: 403_000_000, etherfi: 129_000_000, kast: 114_000_000, wirexOne: 47_560_000, karta: 49_490_000, plasmaOne: 25_640_000, allOther: 464_000_000 },
  { month: "2026-10", label: "Oct 2026", redotpay: 424_000_000, etherfi: 142_000_000, kast: 121_000_000, wirexOne: 54_830_000, karta: 53_630_000, plasmaOne: 30_150_000, allOther: 547_000_000 },
];

export function monthTotal(m: MonthSpend): number {
  return m.redotpay + m.etherfi + m.kast + m.wirexOne + m.karta + m.plasmaOne + m.allOther;
}

export function formatSpend(usd: number): string {
  if (usd >= 1_000_000_000) return `$${(usd / 1_000_000_000).toFixed(2)}B`;
  if (usd >= 100_000_000) return `$${(usd / 1_000_000).toFixed(1)}M`;
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(1)}M`;
  if (usd >= 100_000) return `$${(usd / 1_000).toFixed(0)}K`;
  if (usd >= 1_000) return `$${(usd / 1_000).toFixed(1)}K`;
  return `$${usd.toLocaleString("en-US")}`;
}

export function formatSignedPct(pct: number | null): string {
  if (pct === null) return "n/a";
  const sign = pct > 0 ? "+" : "";
  return `${sign}${pct}%`;
}
