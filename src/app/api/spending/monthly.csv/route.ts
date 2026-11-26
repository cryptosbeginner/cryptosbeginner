import { MONTHLY_SERIES, monthTotal } from "@/app/crypto-cards/spend-data";

export function GET() {
  const header =
    "month,label,total_usd,redotpay_usd,etherfi_cash_usd,kast_usd,wirex_one_usd,karta_usd,plasma_one_usd,all_other_usd";
  const lines = MONTHLY_SERIES.map((m) =>
    [
      m.month,
      `"${m.label}"`,
      monthTotal(m),
      m.redotpay,
      m.etherfi,
      m.kast,
      m.wirexOne,
      m.karta,
      m.plasmaOne,
      m.allOther,
    ].join(","),
  );
  const csv = [header, ...lines].join("\n") + "\n";
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="crypto-card-spend-monthly.csv"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
