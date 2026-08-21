import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-05";

export const metadata = {
  title: "أفضل منصات العملات الرقمية في الإمارات 2026: دبي وأبوظبي وDIFC",
  description:
    "دليل عربي عملي لمنصات العملات الرقمية في الإمارات لعام 2026: VARA وADGM وFSRA وDFSA وتمويل الدرهم والضرائب وأمان الحفظ.",
  alternates: {
    canonical: `${SITE_URL}/ar/regions/uae`,
    languages: {
      en: `${SITE_URL}/regions/uae`,
      ar: `${SITE_URL}/ar/regions/uae`,
      "x-default": `${SITE_URL}/regions/uae`,
    },
  },
  openGraph: {
    title: "أفضل منصات العملات الرقمية في الإمارات 2026",
    description:
      "مقارنة منصات العملات الرقمية في الإمارات حسب الجهة التنظيمية وتمويل الدرهم والحفظ والضرائب.",
    url: `${SITE_URL}/ar/regions/uae`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Rain",
    fit: "الوصول الإقليمي في الخليج",
    regulator:
      "تحقق من الجهة الإماراتية ووضعها الحالي لدى VARA أو الجهة المختصة.",
    detail:
      "خيار إقليمي للمقارنة بين تمويل الدرهم وإجراءات التسجيل في الخليج. تحقق من الجهة القانونية والخدمات المسموح بها والرسوم والسحب.",
    href: "https://go.cryptosbeginner.com/Rain",
    affiliate: true,
  },
  {
    name: "BitOasis",
    fit: "الاستثمار في منطقة الشرق الأوسط",
    regulator:
      "تحقق من الجهة الإماراتية ونطاق الترخيص وما إذا كانت الخدمة متاحة لإمارتك ونوع حسابك.",
    detail:
      "منصة إقليمية مناسبة للمقارنة في الشراء والبيع البسيط. لا تنظر إلى العمولة فقط؛ تحقق من السبريد والحفظ وطرق تمويل الدرهم.",
    href: "https://bitoasis.net",
    affiliate: false,
  },
  {
    name: "Binance",
    fit: "السيولة والأسواق المتنوعة",
    regulator:
      "تحقق من الجهة التي تخدم المستخدم الإماراتي والمنتجات المسموح بها والوضع التنظيمي الحالي.",
    detail:
      "منصة عالمية يقارنها المستخدمون بسبب السيولة وتنوع الأسواق. قد تختلف المنتجات وطرق دفع الدرهم والوضع المحلي من مستخدم إلى آخر.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "OKX",
    fit: "أدوات التداول المتقدمة",
    regulator:
      "تحقق من الجهة الإماراتية والمنتجات المتاحة وما إذا كانت المشتقات متاحة للمستخدم الفرد.",
    detail:
      "مناسبة للمستخدم ذي الخبرة الذي يقارن التداول الفوري والمشتقات وWeb3. تحقق من الحفظ والسحب والضوابط وتحويل الدرهم.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
];

const jurisdictionRows = [
  {
    area: "دبي خارج DIFC",
    authority: "VARA",
    answer:
      "تخضع أنشطة الأصول الافتراضية في دبي عمومًا لإطار VARA، مع استثناء منطقة DIFC.",
    href: "https://www.vara.ae",
  },
  {
    area: "سوق أبوظبي العالمي ADGM",
    authority: "ADGM / FSRA",
    answer:
      "لدى ADGM إطار خاص للخدمات المالية وقواعد مستقلة للأصول الافتراضية.",
    href: "https://www.adgm.com/operating-in-adgm/financial-services-regulatory-authority",
  },
  {
    area: "مركز دبي المالي العالمي DIFC",
    authority: "DFSA",
    answer:
      "يُعد DIFC منطقة مالية حرة منفصلة ولديه نظام خاص بالرموز المشفرة.",
    href: "https://www.dfsa.ae",
  },
  {
    area: "النطاق الاتحادي والمدفوعات",
    authority: "الجهات الاتحادية / المصرف المركزي",
    answer:
      "قد تخضع رموز الدفع والعملات المستقرة والأنشطة المصرفية لقواعد اتحادية خارج ترخيص دبي أو أبوظبي.",
    href: "https://www.centralbank.ae",
  },
];

const faqs = [
  {
    question: "ما الجهة التي تنظم العملات الرقمية في الإمارات؟",
    answer:
      "يعتمد ذلك على مكان عمل الشركة ونوع النشاط. تختص VARA بأنشطة الأصول الافتراضية في دبي خارج DIFC، بينما تختص FSRA في ADGM وDFSA في DIFC. وقد تدخل الأنشطة الاتحادية أو المرتبطة بالمدفوعات ضمن اختصاص الجهات الاتحادية والمصرف المركزي.",
  },
  {
    question: "هل العملات الرقمية قانونية في الإمارات؟",
    answer:
      "يمكن أن تكون أنشطة الأصول الافتراضية قانونية عندما تتم ضمن الإطار التنظيمي الإماراتي المناسب. لكن يجب أن يملك مقدم الخدمة الترخيص الملائم للنشاط والمكان ونوع العميل.",
  },
  {
    question: "ما أفضل منصة عملات رقمية للمقيم في الإمارات؟",
    answer:
      "لا توجد منصة واحدة مناسبة للجميع. قد يركز المبتدئ على تمويل الدرهم والشراء الفوري، بينما يهتم المتداول النشط بالسيولة والأدوات، وتهتم الشركة بالترخيص والحفظ والامتثال المصرفي والضرائب.",
  },
  {
    question: "هل توجد ضريبة على العملات الرقمية في الإمارات؟",
    answer:
      "لا تفرض الإمارات عادة ضريبة دخل شخصية أو ضريبة أرباح رأسمالية شخصية. لكن قد تنطبق ضريبة الشركات أو ضريبة القيمة المضافة أو التزامات التسجيل والمحاسبة على الشركات والأنشطة التجارية.",
  },
  {
    question: "هل يمكن شراء العملات الرقمية بالدرهم الإماراتي؟",
    answer:
      "تدعم بعض المنصات ومزودي الدفع الإيداع أو التحويل بالدرهم. تختلف الحدود والرسوم والتحويلات البنكية والبطاقات، لذلك تحقق من طريقة الدفع الحالية قبل الإيداع.",
  },
];

export default function UAEArabicPage() {
  const itemList = platforms.map((platform, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: platform.name,
    url: platform.href,
  }));

  const faqSchema = faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "المناطق",
          item: `${SITE_URL}/ar/regions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "الإمارات العربية المتحدة",
          item: `${SITE_URL}/ar/regions/uae`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "منصات العملات الرقمية التي يقارنها المستخدم الإماراتي",
      itemListElement: itemList,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSchema,
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

      <main dir="rtl" lang="ar" className="bg-white">
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>العربية</span>
              <span className="text-slate-500">·</span>
              <Link
                href="/regions/uae"
                className="text-white underline-offset-4 hover:underline"
              >
                English version
              </Link>
            </div>

            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium text-indigo-300">
                نُشر ووُجِع في{" "}
                <time dateTime={UPDATED}>5 أغسطس 2026</time> · مراجعة عربية
                بواسطة يوسف الراشدي
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                منصات العملات الرقمية في الإمارات حسب الجهة التنظيمية
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                اختيار المنصة المناسبة في الإمارات يبدأ من معرفة الجهة
                التنظيمية، وليس من الرسوم أو عدد العملات فقط. يوضح هذا
                الدليل الفرق بين دبي وADGM وDIFC والنطاق الاتحادي قبل مقارنة
                المنصات وطرق تمويل الحساب بالدرهم.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#مسارك"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  اعرف المسار المناسب
                </a>

                <a
                  href="#المنصات"
                  className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  قارن المنصات
                </a>
              </div>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                مراجعة المحتوى العربي
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-200">
                تمت مراجعة النص عربيًا وتحريره للسياق المحلي بواسطة{" "}
                <span className="font-semibold text-white">
                  يوسف الراشدي
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-indigo-600">
                إذا كنت في دبي
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                ابدأ بالتحقق من وضع VARA، ثم تأكد من أن المنصة تخدم موقعك
                ونوع حسابك.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-indigo-600">
                إذا كنت تستخدم ADGM أو DIFC
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                راجع قواعد FSRA أو DFSA. ترخيص دبي لا يغطي تلقائيًا هذه
                المناطق المالية الحرة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-indigo-600">
                إذا كنت مبتدئًا
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                أعط الأولوية لتمويل الدرهم والرسوم الواضحة وإمكانية السحب
                والشراء الفوري البسيط.
              </p>
            </div>
          </div>
        </section>

        <section id="مسارك" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                الإجابة المختصرة
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                اختر الجهة التنظيمية قبل اختيار المنصة
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                الإمارات ليست ولاية تنظيمية واحدة للعملات الرقمية. قد
                تختلف القواعد بين دبي وADGM وDIFC والنشاط الاتحادي المرتبط
                بالمدفوعات. وقد تستخدم العلامة التجارية نفسها جهة قانونية
                أو مجموعة منتجات أو إجراءات تسجيل مختلفة حسب المستخدم.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                بالنسبة للمستثمر الفرد، ركز على تمويل الدرهم والتكلفة
                الإجمالية والسحب والحفظ وما إذا كان المنتج فوريًا أو
                برافعة مالية. أما الشركة، فيجب أن تبدأ بالترخيص والبنوك
                ومكافحة غسل الأموال والحفظ والضرائب.
              </p>
            </div>

            <aside className="rounded-2xl bg-indigo-50 p-6">
              <h3 className="text-lg font-bold text-indigo-950">
                قائمة مقارنة عملية
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-950">
                <li>
                  <span className="font-semibold">الوصول الإقليمي:</span>{" "}
                  Rain أو BitOasis بعد التحقق من الوضع الحالي في الإمارات.
                </li>

                <li>
                  <span className="font-semibold">السيولة:</span>{" "}
                  Binance بعد التحقق من الجهة والمنتجات المتاحة.
                </li>

                <li>
                  <span className="font-semibold">الأدوات المتقدمة:</span>{" "}
                  OKX بعد التحقق من أهلية المستخدم الإماراتي.
                </li>

                <li>
                  <span className="font-semibold">الحفظ طويل الأجل:</span>{" "}
                  قارن بين حفظ المنصة والمحفظة الذاتية.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                خريطة الجهات التنظيمية في الإمارات
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                أي جهة يجب أن تبحث عنها؟
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {jurisdictionRows.map((row) => (
                <div
                  key={row.area}
                  className="grid gap-3 px-6 py-5 md:grid-cols-[1fr_170px_1.5fr]"
                >
                  <div>
                    <p className="font-semibold text-slate-900">
                      {row.area}
                    </p>
                  </div>

                  <div>
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-indigo-700 hover:underline"
                    >
                      {row.authority}
                    </a>
                  </div>

                  <p className="text-sm leading-6 text-slate-700">
                    {row.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            قد تتغير الحدود التنظيمية، خصوصًا عندما تشمل الخدمة رموز
            الدفع أو العملات المستقرة أو الحفظ أو المشتقات أو النشاط
            العابر للحدود. راجع سجل الجهة التنظيمية قبل الاعتماد على
            العبارات التسويقية للمنصة.
          </p>
        </section>

        <section id="المنصات" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                دليل المنصات
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                أربع منصات تستحق المقارنة
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              هذه نقاط للمقارنة وليست ترتيبًا شاملًا. تحقق من الجهة
              القانونية ونطاق الترخيص وتوفر المنتجات في الإمارات.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {platform.name}
                    </h3>
                  </div>

                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.detail}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    تحقق تنظيمي
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {platform.regulator}
                  </p>
                </div>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-5 inline-flex text-sm font-bold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `زيارة ${platform.name} ←`
                    : `الموقع الرسمي لـ ${platform.name} ←`}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                التمويل والتكلفة
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                دعم الدرهم ليس التكلفة الكاملة
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                تدعم بعض المنصات الإيداع بالدرهم أو التحويل البنكي المحلي أو
                البطاقات، بينما تمرر منصات أخرى العملية عبر الدولار أو
                اليورو أو مزود دفع خارجي. قارن المبلغ النهائي بالدرهم،
                وليس العمولة المعلنة فقط.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    افحص المسار كاملًا
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    رسوم الإيداع والسبريد وعمولة التداول ورسوم السحب.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    احتفظ بالأدلة
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    الفواتير والتأكيدات وعناوين المحافظ ومعرفات المعاملات.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                تذكير مصرفي
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                استخدم حسابًا باسمك وأجب بدقة عن أسئلة مصدر الأموال. قد
                تخضع وسيلة الدفع التي تعمل اليوم للمراجعة أو التقييد لاحقًا.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
              الضرائب في دقيقة
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              الاستثمار الشخصي يختلف عن تشغيل نشاط تجاري
            </h2>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">
                  المستثمر الفرد
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  لا تفرض الإمارات عادة ضريبة دخل شخصية أو ضريبة أرباح
                  رأسمالية شخصية. لكن قد تنشأ التزامات في دولة أخرى إذا
                  كنت مقيمًا ضريبيًا فيها.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  الشركة أو النشاط المهني
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  قد تنطبق ضريبة الشركات وضريبة القيمة المضافة والترخيص
                  والمحاسبة والإبلاغ حسب الكيان وحجم النشاط وطبيعته.
                  لا تطبق قاعدة الفرد تلقائيًا على الشركة.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-400">
              تعتمد المعالجة الضريبية على الوقائع وقد تتغير. تحقق من أحدث
              إرشادات الهيئة الاتحادية للضرائب قبل تقديم الإقرار أو إنشاء
              نشاط تجاري.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                الأمان
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                الترخيص ليس ضمانًا
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                قد يحسن التنظيم الحوكمة وحماية العملاء، لكنه لا يلغي
                تقلب الأسعار أو الإفلاس أو الاختراق أو التصيد أو أخطاء
                العقود الذكية أو فقدان المفتاح الخاص.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>هل تستطيع السحب إلى محفظة خارجية؟</li>
                <li>هل أصول العملاء منفصلة؟</li>
                <li>هل تقرض المنصة أصول العملاء أو تعيد استخدامها؟</li>
                <li>ماذا يحدث عند إيقاف السحوبات؟</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-6">
              <h3 className="text-lg font-bold text-indigo-950">
                افصل الأصول طويلة الأجل
              </h3>

              <p className="mt-3 text-sm leading-6 text-indigo-950">
                قد تكون المنصة مناسبة للتداول، بينما تقلل المحفظة الذاتية
                الاعتماد على المنصة. لكن المحفظة الذاتية تنقل مسؤولية عبارة
                الاسترداد وتوقيع المعاملات إليك.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/wallets"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  دليل المحافظ ←
                </Link>

                <Link
                  href="/learn/what-is-proof-of-reserves"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  إثبات الاحتياطيات ←
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              طريقة بسيطة للاختيار
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              ابدأ من استخدامك الفعلي
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  شراء من حين لآخر
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  اختر الشراء الفوري البسيط وتكلفة الدرهم الواضحة وسجلات
                  السحب السهلة.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  التداول النشط
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  قارن السيولة والتنفيذ وعمولات maker/taker وما إذا كانت
                  الرافعة متاحة لحسابك.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  تشغيل نشاط تجاري
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  ابدأ بالترخيص والبنوك ومكافحة غسل الأموال والحفظ والضرائب،
                  وليس بزر الإحالة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              إجابات مباشرة
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              أسئلة عن العملات الرقمية في الإمارات
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

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-2xl bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              قائمة التحقق لاختيار منصة في الإمارات
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "حدد الجهة التنظيمية للنشاط والجهة القانونية.",
                "تأكد من أن المنصة تخدم إمارتك ونوع حسابك.",
                "قارن تمويل الدرهم والسبريد والرسوم والسحب.",
                "تحقق من توفر التداول الفوري أو التخزين أو الإقراض أو المشتقات.",
                "احتفظ بسجلات المعاملات ومصدر الأموال.",
                "استخدم المصادقة الثنائية ونسخًا احتياطية آمنة.",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  ✓ {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/Rain"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                قارن Rain
              </a>

              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                قارن Binance
              </a>

              <Link
                href="/methodology"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white"
              >
                اقرأ منهجيتنا
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-slate-600">
            <p>
              <strong>إخلاء مسؤولية:</strong> هذا المحتوى تعليمي فقط ولا
              يمثل استشارة مالية أو قانونية أو ضريبية. قد تتغير قواعد
              الأصول الافتراضية في الإمارات ونطاقات التراخيص وطرق الدفع
              والمعالجة الضريبية وتوفر المنصات. تحقق من أحدث المعلومات لدى
              VARA وFSRA وDFSA والجهة الاتحادية المختصة والهيئة الاتحادية
              للضرائب قبل إيداع الأموال أو تشغيل نشاط تجاري. بعض الروابط
              قد تكون روابط تابعة.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}