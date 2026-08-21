import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-21";

export const metadata = {
  title:
    "پاکستان میں بہترین کرپٹو ایکسچینجز 2026 | PVARA، SBP اور PKR P2P گائیڈ",
  description:
    "پاکستان میں کرپٹو کا 2026 گائیڈ: Virtual Assets Act، PVARA لائسنسنگ، اگست 2026 کے VASP ضوابط، SBP بینکنگ، PKR P2P، JazzCash اور Easypaisa کے خطرات۔",
  alternates: {
    canonical: `${SITE_URL}/ur/regions/pakistan`,
    languages: {
      en: `${SITE_URL}/regions/pakistan`,
      ur: `${SITE_URL}/ur/regions/pakistan`,
      "x-default": `${SITE_URL}/regions/pakistan`,
    },
  },
  openGraph: {
    title: "پاکستان میں بہترین کرپٹو ایکسچینجز 2026",
    description:
      "PVARA، SBP، PKR P2P فنڈنگ اور کرپٹو ایکسچینج کے محفوظ استعمال کا عملی گائیڈ۔",
    url: `${SITE_URL}/ur/regions/pakistan`,
    type: "article",
  },
};

const exchanges = [
  {
    name: "Binance",
    fit: "ابتدائی صارفین اور PKR P2P",
    note:
      "لیکویڈیٹی اور PKR P2P سرگرمی کی وجہ سے ایک عام تقابلی پلیٹ فارم۔ پاکستان میں موجودہ رسائی، متعلقہ قانونی ادارہ، محدود مصنوعات اور P2P سیلرز کا معیار ضرور چیک کریں۔",
    href: "https://go.cryptosbeginner.com/binance",
  },
  {
    name: "Bybit",
    fit: "فعال ٹریڈرز",
    note:
      "اسپاٹ، ڈیریویٹیوز اور P2P مصنوعات والی عالمی پلیٹ فارم۔ لیوریج اضافی لیکویڈیشن اور کاؤنٹر پارٹی رسک پیدا کرتا ہے۔",
    href: "https://go.cryptosbeginner.com/Bybit",
  },
  {
    name: "Bitget",
    fit: "کاپی ٹریڈنگ",
    note:
      "کاپی ٹریڈنگ کے لیے تقابل کا ایک آپشن۔ ماضی کی کارکردگی مستقبل کے نتائج کی ضمانت نہیں دیتی، اس لیے لیڈ ٹریڈر اور رسک سیٹنگز احتیاط سے دیکھیں۔",
    href: "https://go.cryptosbeginner.com/Bitget-Bonus",
  },
  {
    name: "OKX",
    fit: "وسیع ٹریڈنگ ٹولز",
    note:
      "اسپاٹ، ڈیریویٹیوز اور Web3 مصنوعات کے لیے عالمی متبادل۔ پاکستان میں آن بورڈنگ، P2P آفرز، کسٹوڈی اور رقم نکلوانے کی سہولت چیک کریں۔",
    href: "https://go.cryptosbeginner.com/OKX",
  },
  {
    name: "MEXC",
    fit: "Altcoin کا تقابل",
    note:
      "لسٹنگز اور فیس کے تقابل کے لیے ثانوی پلیٹ فارم۔ لیکویڈیٹی، رقم نکلوانے کی شرائط، محدود مصنوعات اور کاؤنٹر پارٹی رسک ضرور دیکھیں۔",
    href: "https://go.cryptosbeginner.com/MEXC-Bonus",
  },
];

const faqs = [
  {
    question: "کیا 2026 میں پاکستان میں کرپٹو قانونی ہے؟",
    answer:
      "پاکستان میں اب Virtual Assets Act اور ایک مخصوص ریگولیٹر PVARA موجود ہے۔ کرپٹو قانونی کرنسی نہیں ہے، جبکہ پاکستان میں یا پاکستان سے ریگولیٹڈ ورچوئل اثاثہ خدمات فراہم کرنے والے کاروبار کو مطلوبہ PVARA اجازت درکار ہوتی ہے۔ صرف یہ کہ کوئی بین الاقوامی ایکسچینج پاکستانی صارف کو رسائی دے رہا ہے، اس سے مکمل پاکستانی لائسنس ثابت نہیں ہوتا۔",
  },
  {
    question: "PVARA کا NOC اور مکمل لائسنس میں کیا فرق ہے؟",
    answer:
      "PVARA کا NOC لائسنسنگ کے عمل کا ابتدائی مرحلہ ہے۔ اسے مکمل VASP لائسنس کے برابر نہیں سمجھنا چاہیے۔ کسی فراہم کنندہ کی اصل حیثیت اور اجازت شدہ سرگرمی کے لیے PVARA کی تازہ معلومات چیک کریں۔",
  },
  {
    question: "کیا پاکستانی بینک اب کرپٹو سے متعلق ادائیگیاں کر سکتے ہیں؟",
    answer:
      "SBP کی ہدایات کے تحت ریگولیٹڈ ادارے مطلوبہ PVARA لائسنس رکھنے والے VASPs کے لیے اکاؤنٹس رکھ سکتے ہیں، بشرطیکہ لائسنس کی تصدیق، AML/CFT کنٹرولز، الگ کلائنٹ منی انتظامات اور نگرانی موجود ہو۔ بینک خود اپنی یا صارفین کی رقم سے ورچوئل اثاثے ٹریڈ یا ہولڈ نہیں کر سکتے۔ ریٹیل PKR رسائی کا انحصار عملی طور پر لائسنس یافتہ انفراسٹرکچر پر ہے۔",
  },
  {
    question: "کیا پاکستان میں P2P کرپٹو ٹریڈنگ غیر قانونی ہے؟",
    answer:
      "P2P سرگرمی عام ہے، مگر عام ہونا مکمل قانونی منظوری کے برابر نہیں ہے۔ کسی ٹرانزیکشن کی قانونی حیثیت اس کے حقائق، فریقین، ادائیگی کے طریقے اور فراڈ، منی لانڈرنگ، غیر مجاز کاروباری سرگرمی یا کسی دوسرے جرم کے امکان پر منحصر ہوتی ہے۔",
  },
  {
    question: "پاکستان میں کرپٹو خریدنے کا نسبتاً محفوظ عملی طریقہ کیا ہے؟",
    answer:
      "تصدیق شدہ اکاؤنٹ، صرف escrow کے ذریعے P2P، چھوٹی پہلی ٹرانزیکشن، درست KYC، مضبوط 2FA اور رقم نکلوانے کا واضح منصوبہ استعمال کریں۔ پلیٹ فارم کی تصدیق سے پہلے کرپٹو ریلیز نہ کریں اور ٹریڈ کو WhatsApp یا آف پلیٹ فارم نقد انتظام میں منتقل نہ کریں۔",
  },
];

export default function PakistanUrduPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "پاکستان میں بہترین کرپٹو ایکسچینجز 2026",
      description:
        "پاکستان میں PVARA، SBP، PKR P2P فنڈنگ اور کرپٹو ایکسچینج سکیورٹی کا عملی گائیڈ۔",
      datePublished: "2026-01-22",
      dateModified: UPDATED,
      author: {
        "@type": "Person",
        name: "Taimoor Chaudhry",
      },
      publisher: {
        "@type": "Organization",
        name: "CryptosBeginner",
      },
      mainEntityOfPage: `${SITE_URL}/ur/regions/pakistan`,
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
          name: "علاقے",
          item: `${SITE_URL}/ur/regions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "پاکستان",
          item: `${SITE_URL}/ur/regions/pakistan`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "پاکستان کے لیے کرپٹو ایکسچینجز کا تقابل",
      itemListElement: exchanges.map((exchange, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: exchange.name,
        url: exchange.href,
      })),
    },
    {
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>اردو</span>
              <span className="text-slate-500">·</span>
              <Link
                href="/regions/pakistan"
                className="text-white underline-offset-4 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="mb-3 text-sm font-medium text-emerald-300">
              تازہ کاری:{" "}
              <time dateTime={UPDATED}>21 اگست 2026</time> · تحریر اور
              مقامی جائزہ: تیمور چوہدری
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              پاکستان میں کرپٹو ایکسچینجز: PVARA، SBP اور PKR رسائی
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              پاکستان غیر رسمی کرپٹو مارکیٹ سے ایک باقاعدہ قانونی فریم ورک
              کی طرف بڑھ رہا ہے۔ Virtual Assets Act نے PVARA قائم کیا، SBP
              کی ہدایات نے لائسنس یافتہ VASPs کے لیے بینکنگ کا راستہ کھولا،
              اور 2026 کے Pakistan Virtual Asset Services Regulations نے
              لائسنسنگ کے عمل کو مزید تفصیل دی۔ عام صارف کے لیے، تاہم، PKR
              P2P اب بھی عملی داخلے کا اہم ذریعہ ہے۔
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#شروع-یہاں"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                یہاں سے شروع کریں
              </a>

              <a
                href="#تقابل"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                ایکسچینجز کا تقابل
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                مقامی اداریاتی جائزہ
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                پاکستان کے مقامی تناظر کے لیے یہ ایڈیشن{" "}
                <span className="font-semibold text-white">
                  تیمور چوہدری
                </span>{" "}
                نے تحریر اور جائزہ کیا ہے۔
              </p>
            </div>
          </div>
        </section>

        <section id="شروع-یہاں" className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                قانونی فریم ورک
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-950">
                Virtual Assets Act کے تحت PVARA VASPs کی نگرانی کرتا ہے۔
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">
                بینکنگ کی حقیقت
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-950">
                بینکنگ رسائی مطلوبہ لائسنس رکھنے والے VASPs اور سخت شرائط
                سے منسلک ہے، ہر عالمی ایکسچینج سے نہیں۔
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-bold text-rose-800">
                ریٹیل کی حقیقت
              </p>

              <p className="mt-2 text-sm leading-6 text-rose-950">
                P2P عام ہے، مگر escrow اور فراڈ سے بچاؤ بنیادی شرط ہے۔
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                مختصر جواب
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                پہلے لائسنسنگ اسٹیٹس، پھر PKR رسائی چیک کریں
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                پاکستانی صارف کے لیے مناسب ایکسچینج کا معیار صرف کم فیس نہیں
                ہے۔ یہ دیکھیں کہ پلیٹ فارم یا سروس فراہم کنندہ PVARA کے
                تحت کس حیثیت میں ہے، متعلقہ صارف کو قانونی طور پر سروس دے
                سکتا ہے یا نہیں، PKR پلیٹ فارم میں کیسے داخل ہوتا ہے اور
                کیا آپ اپنے اثاثے واپس نکال سکتے ہیں۔
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                Binance، Bybit، Bitget، OKX اور MEXC عملی عالمی تقابلی
                پلیٹ فارم ہیں۔ پاکستان میں موجودگی یا P2P رسائی کو مکمل
                پاکستانی لائسنس کا ثبوت نہ سمجھیں۔
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                پاکستان میں پانچ بنیادی چیکس
              </h3>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">1۔</span>{" "}
                  کیا فراہم کنندہ لائسنس یافتہ، NOC مرحلے میں یا بیرون ملک
                  قائم ہے؟
                </li>

                <li>
                  <span className="font-semibold text-white">2۔</span>{" "}
                  کیا PKR راستہ escrow استعمال کرتا ہے؟
                </li>

                <li>
                  <span className="font-semibold text-white">3۔</span>{" "}
                  کیا seller کا نام order میں دکھائے گئے نام سے ملتا ہے؟
                </li>

                <li>
                  <span className="font-semibold text-white">4۔</span>{" "}
                  کیا آپ اپنے wallet میں رقم نکال سکتے ہیں؟
                </li>

                <li>
                  <span className="font-semibold text-white">5۔</span>{" "}
                  کیا آپ نے source of funds کا ریکارڈ محفوظ کیا ہے؟
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                ضابطہ کاری
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Virtual Assets Act، PVARA اور 2026 کے ضوابط
              </h2>
            </div>

            <div className="space-y-5 px-6 py-6">
              <p className="leading-7 text-slate-700">
                Virtual Assets Act 2026 نے PVARA کو پاکستان میں ورچوئل
                اثاثوں سے متعلق سرگرمیوں کا قانونی ریگولیٹر بنایا ہے۔ PVARA
                پاکستان میں یا پاکستان سے کام کرنے والے VASPs کی لائسنسنگ،
                نگرانی اور نفاذ کی ذمہ داری رکھتا ہے۔
              </p>

              <p className="leading-7 text-slate-700">
                اس فریم ورک میں ایکسچینجز، custodians، wallet operators،
                token issuers اور ورچوئل اثاثوں سے متعلق دیگر کاروباری
                ماڈلز شامل ہو سکتے ہیں۔ مطلوبہ اجازت کے بغیر ریگولیٹڈ
                ورچوئل اثاثہ سروس چلانے کے سنگین نتائج ہو سکتے ہیں۔
              </p>

              <p className="leading-7 text-slate-700">
                PVARA کا لائسنسنگ عمل ابتدائی No Objection Certificate اور
                بعد کے مکمل VASP لائسنس میں فرق کرتا ہے۔ NOC کو مکمل لائسنس
                کے برابر نہ سمجھیں جب تک PVARA خود یہ حیثیت واضح نہ کرے۔
              </p>

              <p className="leading-7 text-slate-700">
                21 اگست 2026 کو شائع ہونے والے Pakistan Virtual Asset
                Services Regulations 2026 نے لائسنسنگ اور ریگولیٹری فریم
                ورک کی عملی تفصیلات میں اضافہ کیا ہے۔ صارفین اور فراہم
                کنندگان کو ابتدائی خبروں کے بجائے PVARA کا حتمی متن اور
                تازہ نوٹس دیکھنے چاہییں۔
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.pvara.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  PVARA →
                </a>

                <a
                  href="https://www.pvara.gov.pk/licensing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  PVARA لائسنسنگ →
                </a>

                <a
                  href="https://pvara.gov.pk/documents/Pakistan%20Virtual%20Asset%20Services%20Regulations,%202026%20-%20Notified%2021%20August%202026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  2026 ضوابط →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                بینکنگ
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                SBP میں کیا تبدیلی آئی؟
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                PKR رسائی کے لیے بینکنگ سب سے بڑا عملی مسئلہ رہی ہے۔ 2026
                کے فریم ورک کے تحت SBP کے زیرِ نگرانی ادارے مطلوبہ PVARA
                لائسنس رکھنے والے VASPs کے لیے اکاؤنٹس رکھ سکتے ہیں، بشرطیکہ
                لائسنس کی تصدیق، AML/CFT کنٹرولز، نگرانی اور الگ کلائنٹ منی
                انتظامات موجود ہوں۔
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                اس کا مطلب یہ نہیں کہ بینک خود اپنے یا صارفین کے فنڈز سے
                ورچوئل اثاثے خرید، فروخت یا ہولڈ کر سکتے ہیں۔ اس کا مطلب یہ
                بھی نہیں کہ ہر عالمی ایکسچینج کو براہِ راست PKR بینکنگ
                سہولت حاصل ہو گئی ہے۔
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                سرکاری حوالہ:{" "}
                <a
                  href="https://www.sbp.org.pk/circulars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  اسٹیٹ بینک آف پاکستان کے سرکلرز
                </a>
              </p>
            </div>

            <aside className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-lg font-bold text-emerald-950">
                ابتدائی صارف کے لیے مطلب
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                <li>لائسنس یافتہ VASP کی بینکنگ رسائی ہر ایکسچینج کی رسائی نہیں ہے۔</li>
                <li>براہِ راست PKR راستے محدود رہ سکتے ہیں۔</li>
                <li>ہر بینک، wallet اور P2P movement کا ریکارڈ رکھیں۔</li>
                <li>اکاؤنٹ کھل جانا قانونی منظوری کا ثبوت نہیں ہے۔</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              PKR آن ریمپ
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              P2P اب بھی مرکزی راستہ کیوں ہے؟
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              جب تک لائسنس یافتہ VASPs کو وسیع اور فعال PKR بینکنگ کنیکٹیویٹی
              حاصل نہیں ہوتی، بہت سے ریٹیل صارفین عالمی ایکسچینج پر USDT کو
              P2P کے ذریعے خریدتے ہیں، پھر اسے BTC یا کسی دوسرے spot asset
              میں تبدیل کرتے ہیں۔
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {[
                "ایکسچینج اکاؤنٹ کھولیں اور verification مکمل کریں۔",
                "تصدیق شدہ PKR P2P seller منتخب کریں۔",
                "Escrow میں دکھائے گئے درست طریقے سے ادائیگی کریں۔",
                "USDT کو spot پر تبدیل کریں یا محفوظ طریقے سے نکلوائیں۔",
              ].map((step, index) => (
                <div key={step} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-black text-emerald-600">
                    0{index + 1}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-700">
              P2P listings میں JazzCash، Easypaisa اور bank transfer نظر آ
              سکتے ہیں۔ ان کا موجود ہونا off-platform انتظام کو محفوظ یا
              سرکاری طور پر منظور شدہ نہیں بناتا۔
            </p>
          </div>
        </section>

        <section id="تقابل" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              پلیٹ فارم گائیڈ
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              پاکستانی صارفین عام طور پر کن ایکسچینجز کا تقابل کرتے ہیں؟
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              ان عالمی پلیٹ فارمز پر علاقائی P2P سرگرمی ہو سکتی ہے۔ یہ دعویٰ
              نہیں کیا جا رہا کہ ہر ایکسچینج کے پاس پاکستان کا مکمل
              لائسنس موجود ہے۔
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {exchanges.map((exchange, index) => (
              <article
                key={exchange.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {exchange.name}
                    </h3>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {exchange.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {exchange.note}
                </p>

                <a
                  href={exchange.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-5 inline-flex text-sm font-bold text-emerald-700 hover:underline"
                >
                  {exchange.name} دیکھیں →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                PKR فنڈنگ
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Escrow بنیادی شرط ہے
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li>ایکسچینج chat اور escrow سسٹم کے اندر رہیں۔</li>
                <li>Order میں دکھائی گئی رقم اور اکاؤنٹ نام ملائیں۔</li>
                <li>پلیٹ فارم کی تصدیق سے پہلے کرپٹو ریلیز نہ کریں۔</li>
                <li>پہلی ٹرانزیکشن چھوٹی رکھیں۔</li>
                <li>رسید اور order ID محفوظ رکھیں۔</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-lg font-bold text-rose-950">
                پاکستان میں عام P2P خطرات
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-950">
                <li>WhatsApp، Instagram یا Telegram پر جعلی support agents۔</li>
                <li>پلیٹ فارم escrow سے باہر ادائیگی۔</li>
                <li>ترمیم شدہ رسید یا mobile-wallet screenshot۔</li>
                <li>تیسرے شخص کے اکاؤنٹ سے ادائیگی اور reversal dispute۔</li>
                <li>جعلی support رابطے کے بعد recovery phrase phishing۔</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-rose-300">
              خطرات
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              قانونی اصلاحات عملی خطرات ختم نہیں کرتیں
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <h3 className="font-bold">Scams</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Social engineering، جعلی agents اور جعلی payment evidence
                  عام failure points ہیں۔
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <h3 className="font-bold">Leverage</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Futures میں اکاؤنٹ جلد liquidate ہو سکتا ہے۔ beginners
                  کو leverage سے پہلے spot سمجھنا چاہیے۔
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <h3 className="font-bold">Counterparty</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  ریگولیٹری فریم ورک exchange solvency، withdrawals یا
                  breach کے بعد recovery کی ضمانت نہیں دیتا۔
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              Shariah، speculative tokens اور asset-backed یا utility
              structures پر پالیسی بحث بھی جاری ہے۔ مذہبی یا product
              classification کو PVARA licence کے سوال سے الگ سمجھیں۔
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Beginner path
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                محتاط طریقے سے آغاز کیسے کریں؟
              </h2>

              <ol className="mt-5 space-y-4">
                {[
                  "ایسی ایک پلیٹ فارم منتخب کریں جہاں PKR P2P فعال اور account rules واضح ہوں۔",
                  "درست معلومات کے ساتھ KYC مکمل کریں۔",
                  "Exchange escrow کے ذریعے USDT کی چھوٹی مقدار خریدیں۔",
                  "USDT کو spot پر BTC یا اپنے مطلوبہ asset میں تبدیل کریں۔",
                  "Authenticator 2FA اور withdrawal whitelist فعال کریں۔",
                  "طویل مدتی holdings کو مناسب backup والے hardware wallet میں منتقل کریں۔",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 text-sm leading-7 text-slate-700"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                      {index + 1}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-7 text-slate-700">
                متعلقہ گائیڈ:{" "}
                <Link
                  href="/regions/pakistan/how-to-buy-bitcoin"
                  className="font-medium text-indigo-700 hover:underline"
                >
                  پاکستان میں Bitcoin کیسے خریدیں
                </Link>{" "}
                ·{" "}
                <Link
                  href="/tools/fee-calculator"
                  className="font-medium text-indigo-700 hover:underline"
                >
                  Fee calculator
                </Link>{" "}
                ·{" "}
                <Link
                  href="/tools/exchange-finder"
                  className="font-medium text-indigo-700 hover:underline"
                >
                  Exchange finder quiz
                </Link>
              </p>
            </div>

            <aside className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-lg font-bold text-emerald-950">
                یہ اصول یاد رکھیں
              </h3>

              <p className="mt-3 text-2xl font-black leading-tight text-emerald-950">
                صرف escrow۔ پہلی trade چھوٹی۔ طویل مدتی رقم exchange پر نہ
                چھوڑیں۔
              </p>
            </aside>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              براہِ راست جوابات
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              پاکستان میں کرپٹو سے متعلق سوالات
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  {faq.question}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-4 py-12 text-center">
            <h2 className="text-3xl font-bold">
              پاکستان کا licensing path آگے بڑھ رہا ہے، مگر ہر provider
              verify کریں
            </h2>

            <p className="mt-3 text-slate-300">
              Escrow استعمال کریں۔ چھوٹی trade سے شروع کریں۔ طویل مدتی
              holdings exchange پر نہ چھوڑیں۔
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold hover:bg-emerald-600"
              >
                Binance
              </a>

              <a
                href="https://go.cryptosbeginner.com/Bybit"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
              >
                Bybit
              </a>

              <a
                href="https://go.cryptosbeginner.com/Bitget-Bonus"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
              >
                Bitget
              </a>

              <a
                href="https://go.cryptosbeginner.com/LedgerWallet"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
              >
                Ledger
              </a>
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>ڈسکلیمر:</strong> یہ مواد صرف تعلیمی مقصد کے لیے ہے۔
              یہ قانونی، ٹیکس یا مالی مشورہ نہیں ہے۔ پاکستان کا
              virtual-asset framework، PVARA licensing، SBP rules، tax
              treatment اور exchange availability تیزی سے تبدیل ہو سکتے
              ہیں۔ رقم جمع کرنے سے پہلے PVARA اور SBP کی تازہ ہدایات خود
              verify کریں۔ کچھ links affiliate links ہو سکتے ہیں۔
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}