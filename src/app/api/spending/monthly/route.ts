import {
  LATEST_SPEND_MONTH_ISO,
  MONTHLY_SERIES,
  SPEND_DATA_UPDATED,
  monthTotal,
} from "@/app/crypto-cards/spend-data";

export function GET() {
  const body = {
    source:
      "PaymentScan (paymentscan.xyz), compiled from monthly tables republished by Castle Labs. Figures are settled card payments, not top-ups. See https://www.cryptosbeginner.com/crypto-cards/spending/methodology for basis labels and caveats. Free to quote with a link.",
    updated: SPEND_DATA_UPDATED,
    latestMonth: LATEST_SPEND_MONTH_ISO,
    months: MONTHLY_SERIES.map((m) => ({
      month: m.month,
      label: m.label,
      totalUsd: monthTotal(m),
      programsUsd: {
        redotpay: m.redotpay,
        etherfiCash: m.etherfi,
        kast: m.kast,
        wirexOne: m.wirexOne,
        karta: m.karta,
        plasmaOne: m.plasmaOne,
        allOther: m.allOther,
      },
    })),
  };
  return Response.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
