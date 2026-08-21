import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const PUBLISHED = "2026-06-18";
const UPDATED = "2026-08-21";

export const metadata: Metadata = {
  title: "پاکستان میں Bitcoin کیسے خریدیں 2026: PKR، P2P اور سکیورٹی",
  description:
    "پاکستان میں PKR کے ذریعے Bitcoin خریدنے کا عملی گائیڈ: PVARA اور SBP کا تناظر، P2P escrow، JazzCash اور Easypaisa کے خطرات، KYC، فیس اور wallet security۔",
  alternates: {
    canonical: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
    languages: {
      en: `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
      ur: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
      "x-default": `${SITE_URL}/regions/pakistan/how-to-buy-bitcoin`,
    },
  },
  openGraph: {
    title: "پاکستان میں Bitcoin کیسے خریدیں 2026",
    description:
      "PKR P2P، KYC، فیس، scams اور Bitcoin wallet security کا beginner guide۔",
    url: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
    type: "article",
  },
};

const faqs = [
  {
    q: "کیا 2026 میں پاکستان میں Bitcoin قانونی ہے؟",
    a: "Bitcoin پاکستان میں قانونی کرنسی نہیں ہے۔ پاکستان میں اب ورچوئل اثاثوں کا قانونی فریم ورک اور سروس فراہم کنندگان کے لیے PVARA licensing path موجود ہے، مگر ہر accessible global exchange کو مکمل پاکستانی لائسنس یافتہ نہ سمجھیں۔ PVARA، SBP اور دیگر سرکاری ہدایات کی تازہ صورتحال چیک کریں۔",
  },
  {
    q: "پاکستان میں Bitcoin خریدنے کا آسان طریقہ کیا ہے؟",
    a: "بہت سے beginners verified global exchange پر PKR کے ذریعے platform کے P2P escrow میں USDT خریدتے ہیں، پھر spot market میں USDT کو BTC میں تبدیل کرتے ہیں۔ availability، payment methods اور قانونی صورتحال بدل سکتی ہے۔",
  },
  {
    q: "کیا JazzCash یا Easypaisa استعمال کیا جا سکتا ہے؟",
    a: "کچھ P2P listings میں JazzCash یا Easypaisa دکھائی دے سکتے ہیں۔ صرف exchange کے اپنے escrow اور chat استعمال کریں، payment account name ملائیں، order کی درست رقم ادا کریں اور کسی off-platform broker سے معاملہ نہ کریں۔",
  },
  {
    q: "کیا CNIC KYC ضروری ہے؟",
    a: "بڑی platforms عام طور پر account features، withdrawals یا زیادہ limits کے لیے identity verification مانگتی ہیں۔ درست معلومات دیں اور CNIC اور matching selfie صرف official app یا website کے ذریعے submit کریں۔",
  },
  {
    q: "PKR 50,000 کی Bitcoin خریداری پر کتنی لاگت آ سکتی ہے؟",
    a: "حتمی لاگت P2P spread، payment charges، spot commission اور withdrawal fee پر منحصر ہے۔ کسی بھی percentage کو fixed quote نہ سمجھیں۔ order confirm کرنے سے پہلے live price اور total amount چیک کریں۔",
  },
  {
    q: "کیا Bitcoin کو exchange پر چھوڑنا چاہیے؟",
    a: "Exchange پر صرف وہ رقم رکھیں جو active trading کے لیے ہو۔ بڑی یا طویل مدتی holding کے لیے self-custody پر غور کریں، مگر پہلے wallet security اور recovery phrase کا طریقہ اچھی طرح سمجھیں۔",
  },
];

function AffiliateButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
    >
      {children}
    </a>
  );
}

export default function HowToBuyBitcoinPakistanUrduPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "پاکستان میں Bitcoin کیسے خریدیں 2026",
      description:
        "PKR P2P، KYC، فیس اور wallet security کے ذریعے پاکستان میں Bitcoin خریدنے کا step-by-step گائیڈ۔",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Taimoor Chaudhry",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
      inLanguage: "ur",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ہوم",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "پاکستان",
          item: `${SITE_URL}/ur/regions/pakistan`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bitcoin کیسے خریدیں",
          item: `${SITE_URL}/ur/regions/pakistan/how-to-buy-bitcoin`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <Header />

      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main dir="rtl" lang="ur" className="bg-white">
        <article>
          <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
            <div className="mx-auto max-w-5xl px-4 py-14">
              <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
                <span>اردو</span>
                <span className="text-slate-500">·</span>
                <Link
                  href="/regions/pakistan/how-to-buy-bitcoin"
                  className="text-white underline-offset-4 hover:underline"
                >
                  English version
                </Link>
              </div>

              <p className="mb-3 text-sm font-medium text-emerald-300">
                پاکستان گائیڈ · تازہ کاری:{" "}
                <time dateTime={UPDATED}>21 اگست 2026</time>
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                پاکستان میں PKR کے ذریعے Bitcoin کیسے خریدیں؟
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                KYC، P2P escrow، JazzCash، Easypaisa، فیس اور wallet security
                کے ذریعے beginners کے لیے عملی راستہ—پاکستان کے نئے PVARA
                framework کے مطابق تازہ کاری شدہ۔
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#steps"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
                >
                  پانچ steps دیکھیں
                </a>

                <a
                  href="#safety"
                  className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  safety rules پڑھیں
                </a>
              </div>

              <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  اداریاتی جائزہ
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-200">
                  پاکستان کے مقامی تناظر کے لیے یہ مواد{" "}
                  <span className="font-semibold text-white">
                    تیمور چوہدری
                  </span>{" "}
                  نے تحریر اور review کیا ہے۔
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-bold text-emerald-800">
                  عام طریقہ
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-950">
                  PKR → exchange escrow کے ذریعے USDT → spot پر BTC۔
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-800">
                  بنیادی لاگت
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-950">
                  P2P spread کے ساتھ trading، payment اور ممکنہ withdrawal
                  fees۔
                </p>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="text-sm font-bold text-rose-800">
                  بنیادی اصول
                </p>

                <p className="mt-2 text-sm leading-6 text-rose-950">
                  payment یا support conversation کو platform سے باہر منتقل
                  نہ کریں۔
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-amber-950">
                خریدنے سے پہلے
              </h2>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-amber-950">
                Bitcoin پاکستان میں قانونی کرنسی نہیں ہے۔ P2P کا دستیاب ہونا
                seller، exchange یا payment route کے مقامی طور پر licensed
                ہونے کا ثبوت نہیں ہے۔ Official platform استعمال کریں، KYC
                اور payment instructions پر عمل کریں، اور deposit سے پہلے
                PVARA اور SBP کی تازہ معلومات چیک کریں۔
              </p>
            </div>
          </section>

          <section id="steps" className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Step-by-step
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Bitcoin خریدنے کے پانچ steps
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
              {[
                "اکاؤنٹ بنائیں اور secure کریں۔",
                "CNIC identity verification مکمل کریں۔",
                "PKR P2P escrow کے ذریعے USDT خریدیں۔",
                "Spot پر USDT کو BTC میں تبدیل کریں۔",
                "Holding کو withdraw یا secure کریں۔",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-3xl font-black text-emerald-600">
                    0{index + 1}
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  1۔ اکاؤنٹ بنائیں اور secure کریں
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Official exchange website یا app کے ذریعے register کریں۔
                  Two-factor authentication کے لیے authenticator app استعمال
                  کریں اور support یا P2P seller کے ساتھ one-time code شیئر
                  نہ کریں۔
                </p>

                <div className="mt-4">
                  <AffiliateButton href="https://go.cryptosbeginner.com/binance">
                    Binance کا تقابل کریں
                  </AffiliateButton>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  2۔ CNIC KYC مکمل کریں
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Official platform کے ذریعے صاف CNIC image اور matching selfie
                  submit کریں۔ معلومات درست اور account اور payment details
                  کے ساتھ consistent ہونی چاہییں۔
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  3۔ PKR P2P کے ذریعے USDT خریدیں
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Platform کے P2P market میں Buy منتخب کریں، USDT چنیں اور
                  currency PKR رکھیں۔ وہ payment method منتخب کریں جسے آپ
                  قانونی طور پر استعمال کر سکتے ہیں، completion history دیکھیں
                  اور چھوٹی test order سے آغاز کریں۔
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                  <li>صرف order میں دکھائی گئی درست رقم ادا کریں۔</li>
                  <li>Order میں درج account name اور payment method استعمال کریں۔</li>
                  <li>Transfer کی تفصیل درست لکھیں اور bank instructions پر عمل کریں۔</li>
                  <li>Transaction کامیاب ہونے کے بعد ہی payment mark کریں۔</li>
                  <li>Merchant مسئلہ کرے تو exchange کا appeal system استعمال کریں۔</li>
                </ul>

                <p className="mt-4 leading-7 text-slate-700">
                  مزید وضاحت کے لیے{" "}
                  <Link
                    href="/learn/how-p2p-escrow-works"
                    className="font-semibold text-indigo-700 hover:underline"
                  >
                    P2P escrow کیسے کام کرتا ہے؟
                  </Link>{" "}
                  پڑھیں۔
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  4۔ USDT کو BTC میں تبدیل کریں
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Spot trading کھولیں اور BTC/USDT pair منتخب کریں۔ پہلی چھوٹی
                  transaction کے لیے market order آسان ہو سکتا ہے، جبکہ limit
                  order قیمت پر زیادہ control دیتا ہے۔
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900">
                  5۔ اکاؤنٹ اور holding secure کریں
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Withdrawal whitelist، anti-phishing tools اور login alerts
                  فعال کریں۔ طویل مدتی holding کے لیے hardware wallet استعمال
                  کرنے سے پہلے self-custody اور recovery phrase کی حفاظت اچھی
                  طرح سیکھیں۔
                </p>

                <Link
                  href="/learn/crypto-exchange-security-checklist"
                  className="mt-4 inline-flex font-semibold text-indigo-700 hover:underline"
                >
                  Exchange security checklist پڑھیں →
                </Link>
              </section>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                  قانونی تناظر
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  پاکستان میں کیا بدلا ہے؟
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  پاکستان میں اب Virtual Assets Act اور PVARA موجود ہیں،
                  جبکہ Pakistan Virtual Asset Services Regulations 2026
                  licensing framework کی عملی تفصیلات فراہم کرتے ہیں۔
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  NOC کو مکمل VASP licence نہ سمجھیں۔ اسی طرح کسی international
                  exchange کا پاکستانی صارف کو accept کرنا بھی مکمل local
                  authorisation کا ثبوت نہیں ہے۔
                </p>
              </div>

              <aside className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-lg font-bold">
                  دعویٰ ماننے سے پہلے چیک کریں
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>کیا provider licensed، NOC-stage یا offshore ہے؟</li>
                  <li>کیا status exchange، custody یا کسی اور service پر لاگو ہے؟</li>
                  <li>کیا status retail customers کو cover کرتا ہے؟</li>
                  <li>کیا معلومات PVARA سے ہیں یا affiliate page سے؟</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://www.pvara.gov.pk/licensing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-300 hover:underline"
                  >
                    PVARA licensing →
                  </a>

                  <a
                    href="https://www.sbp.org.pk/circulars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-300 hover:underline"
                  >
                    SBP circulars →
                  </a>
                </div>
              </aside>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Exchange comparison
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                PKR کے لیے عام تقابلی platforms
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  name: "Binance",
                  best: "پہلا account اور وسیع P2P",
                  rail: "PKR P2P میں bank transfer اور mobile-wallet offers دکھائی دے سکتے ہیں۔",
                  href: "https://go.cryptosbeginner.com/binance",
                },
                {
                  name: "Bybit",
                  best: "Backup exchange اور active trading",
                  rail: "موجودہ PKR P2P availability اور derivatives restrictions چیک کریں۔",
                  href: "https://go.cryptosbeginner.com/Bybit",
                },
                {
                  name: "OKX",
                  best: "متبادل P2P book اور Web3 tools",
                  rail: "P2P offers، customer eligibility اور withdrawal access verify کریں۔",
                  href: "https://go.cryptosbeginner.com/OKX",
                },
                {
                  name: "Bitget",
                  best: "Copy-trading comparison",
                  rail: "Lead traders، risk settings، fees اور liquidity کا جائزہ لیں۔",
                  href: "https://go.cryptosbeginner.com/Bitget-Bonus",
                },
              ].map((exchange) => (
                <article
                  key={exchange.name}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {exchange.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-emerald-700">
                    {exchange.best}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {exchange.rail}
                  </p>

                  <a
                    href={exchange.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-5 inline-flex font-semibold text-emerald-700 hover:underline"
                  >
                    {exchange.name} کا تقابل کریں →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Cost example
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                PKR 50,000 کی خریداری پر کیا لاگت ہو سکتی ہے؟
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                حتمی لاگت P2P spread، payment charges، spot commission اور
                withdrawal fee پر منحصر ہے۔ کسی headline percentage پر
                انحصار نہ کریں؛ order confirm کرنے سے پہلے live total چیک
                کریں۔
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    P2P spread
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Quoted PKR price اور reference market price کا فرق۔
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Spot fee
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    USDT کو BTC میں convert کرنے کی commission۔
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Withdrawal fee
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    External wallet میں BTC منتقل کرنے پر لاگو ہو سکتی ہے۔
                  </p>
                </div>
              </div>

              <Link
                href="/tools/fee-calculator"
                className="mt-6 inline-flex font-semibold text-emerald-300 hover:underline"
              >
                Fee calculator استعمال کریں →
              </Link>
            </div>
          </section>

          <section id="safety" className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-rose-700">
                  Safety
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Scams، bank reviews اور account security
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  <li>WhatsApp یا Instagram کے “agents” استعمال نہ کریں۔</li>
                  <li>Exchange escrow سے باہر ادائیگی نہ کریں۔</li>
                  <li>Recovery phrase، password یا one-time code کبھی شیئر نہ کریں۔</li>
                  <li>Payment details درست رکھیں اور bank instructions پر عمل کریں۔</li>
                  <li>Receipts اور order records محفوظ رکھیں۔</li>
                  <li>Liquidation سمجھے بغیر leverage استعمال نہ کریں۔</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-lg font-bold text-rose-950">
                  سب سے عام غلطی
                </h3>

                <p className="mt-3 text-sm leading-7 text-rose-950">
                  صارف بہتر rate کے وعدے پر platform escrow کے باہر کسی شخص
                  کو payment کر دیتا ہے۔ اس کے بعد exchange کے لیے payment
                  reverse یا investigate کرنا مشکل ہو جاتا ہے۔ بہتر price کے
                  لیے escrow protection قربان نہ کریں۔
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Storage
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Trading funds اور long-term holdings الگ رکھیں
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-700">
                Exchange پر صرف trading amount رکھیں۔ Long-term holdings کے
                لیے self-custody پر غور کریں، مگر recovery phrase کی حفاظت اور
                ہر transaction verify کرنے کا طریقہ پہلے سیکھیں۔
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <AffiliateButton href="https://go.cryptosbeginner.com/LedgerWallet">
                  Ledger کا تقابل کریں
                </AffiliateButton>

                <AffiliateButton href="https://go.cryptosbeginner.com/TrezorSafe">
                  Trezor کا تقابل کریں
                </AffiliateButton>

                <Link
                  href="/wallets"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Wallets guide
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                براہِ راست جوابات
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                پاکستان میں Bitcoin خریدنے کے سوالات
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <summary className="cursor-pointer font-bold text-slate-900">
                    {item.q}
                  </summary>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 pb-14">
            <div className="rounded-2xl bg-emerald-50 p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                پہلی transaction
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                ایک account کھولیں، KYC مکمل کریں اور بڑی خریداری سے پہلے
                چھوٹی P2P test transaction کریں۔ Records محفوظ رکھیں اور
                long-term holdings exchange پر نہ چھوڑیں۔
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <AffiliateButton href="https://go.cryptosbeginner.com/binance">
                  Binance کا تقابل کریں
                </AffiliateButton>

                <Link
                  href="/ur/regions/pakistan"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
                >
                  پاکستان exchanges guide
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
              <p>
                <strong>ڈسکلیمر:</strong> یہ مواد صرف تعلیمی مقصد کے لیے ہے۔
                یہ قانونی، ٹیکس یا مالی مشورہ نہیں ہے۔ پاکستان کا
                virtual-asset framework، PVARA licensing، SBP rules، payment
                policies اور exchange availability تبدیل ہو سکتے ہیں۔ رقم
                جمع کرنے سے پہلے سرکاری تازہ guidance verify کریں۔ کچھ links
                affiliate links ہو سکتے ہیں۔
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}