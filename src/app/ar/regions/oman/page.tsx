import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const SITE_URL = "https://www.cryptosbeginner.com";
const UPDATED = "2026-08-05";

export const metadata = {
  title: "منصات العملات الرقمية في سلطنة عُمان 2026: الريال والقواعد والمخاطر",
  description:
    "دليل عربي للعملات الرقمية في عُمان لعام 2026: تحذيرات البنك المركزي، هيئة الخدمات المالية، تمويل الريال العُماني، Rain وBinance والحفظ والضرائب.",
  alternates: {
    canonical: `${SITE_URL}/ar/regions/oman`,
    languages: {
      en: `${SITE_URL}/regions/oman`,
      ar: `${SITE_URL}/ar/regions/oman`,
      "x-default": `${SITE_URL}/regions/oman`,
    },
  },
  openGraph: {
    title: "منصات العملات الرقمية في سلطنة عُمان 2026",
    description:
      "قارن منصات العملات الرقمية في عُمان حسب تمويل الريال والوضع التنظيمي والحفظ وإمكانية الوصول.",
    url: `${SITE_URL}/ar/regions/oman`,
    type: "article",
  },
};

const platforms = [
  {
    name: "Rain",
    fit: "مقارنة إقليمية وخليجية",
    detail:
      "منصة إقليمية يقارنها مستخدمو الخليج. تحقق من قبول المقيمين في عُمان، وتوفر تمويل الريال العُماني، والجهة القانونية التي تقدم الخدمة.",
    check:
      "تحقق من الترخيص المعني وطريقة الدفع بالريال والسبريد والحفظ والسحب.",
    href: "https://go.cryptosbeginner.com/Rain",
    affiliate: true,
  },
  {
    name: "Binance",
    fit: "السيولة ومقارنة P2P",
    detail:
      "منصة عالمية ذات أسواق متنوعة ونشاط P2P. قد تتغير إمكانية الوصول من عُمان وطرق الدفع والمنتجات المتاحة والمسارات المصرفية.",
    check:
      "تحقق من الجهة القانونية وتوفر الخدمة في عُمان وحماية الطرف المقابل وتكلفة تحويل الريال.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "OKX",
    fit: "أدوات التداول المتقدمة",
    detail:
      "منصة عالمية تُستخدم للمقارنة بين التداول الفوري والمشتقات وWeb3. قبول المستخدم العُماني لا يعني تلقائيًا وجود ترخيص محلي.",
    check:
      "تحقق من منتجات الأفراد وقيود المشتقات وطريقة تمويل الريال والحفظ والسحب.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
  {
    name: "BitOasis",
    fit: "مقارنة إقليمية في الشرق الأوسط",
    detail:
      "منصة ذات توجه خليجي يمكن مقارنتها من حيث التسجيل الإقليمي والشراء الفوري. تحقق من دعم الريال العُماني بشكل مباشر قبل التسجيل.",
    check:
      "تحقق من قبول المستخدم العُماني وتحويل الريال أو الدرهم والرسوم والحفظ والجهة القانونية.",
    href: "https://bitoasis.net",
    affiliate: false,
  },
];

const faqs = [
  {
    question: "هل العملات الرقمية قانونية في سلطنة عُمان؟",
    answer:
      "العملات الرقمية ليست عملة قانونية في عُمان ولا تتمتع بحماية منتجات البنوك العادية. ويجب التفريق بين امتلاك الفرد أو وصوله إلى منصة وبين ترخيص الشركة التي تقدم خدمات التبادل أو الحفظ أو غيرها من خدمات الأصول الافتراضية.",
  },
  {
    question: "هل توجد رخصة لمنصات العملات الرقمية في عُمان؟",
    answer:
      "تعمل عُمان على تطوير إطار للأصول الافتراضية ومتطلبات التسجيل أو مكافحة غسل الأموال لمزودي الخدمات. ويجب التمييز بين التسجيل أو الالتزام بمتطلبات AML وبين وجود رخصة شاملة ونهائية لمنصة تجزئة.",
  },
  {
    question: "هل يمكن شراء العملات الرقمية بالريال العُماني؟",
    answer:
      "قد تدعم بعض الخدمات الإيداع بالريال أو البطاقات أو التحويلات البنكية أو التحويل عبر عملة أخرى. تحقق من المسار الحالي والرسوم والحدود وسياسة البنك قبل إرسال الأموال.",
  },
  {
    question: "هل توجد ضريبة على العملات الرقمية في عُمان؟",
    answer:
      "لا تفرض عُمان عادة ضريبة دخل شخصية على الأفراد في النظام الحالي. لكن وضع الإقامة الضريبية والنشاط التجاري والشركات وضريبة القيمة المضافة والتغييرات المستقبلية قد تؤدي إلى نتائج مختلفة.",
  },
  {
    question: "هل يستطيع المقيمون في عُمان استخدام Binance أو OKX أو Rain؟",
    answer:
      "قد تتغير الإتاحة حسب المنصة والمنتج ونوع العميل. تحقق مباشرة من التسجيل وتمويل الريال والجهة القانونية والمنتجات المقيدة وإمكانية السحب قبل الإيداع.",
  },
];

export default function OmanArabicPage() {
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
          name: "سلطنة عُمان",
          item: `${SITE_URL}/ar/regions/oman`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "منصات العملات الرقمية التي يقارنها المستخدم العُماني",
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
        <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>العربية</span>
              <span className="text-slate-500">·</span>
              <Link
                href="/regions/oman"
                className="text-white underline-offset-4 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="mb-3 text-sm font-medium text-amber-300">
              نُشر ووُجِع في{" "}
              <time dateTime={UPDATED}>5 أغسطس 2026</time> · مراجعة عربية
              بواسطة يوسف الراشدي
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              منصات العملات الرقمية في عُمان: ما الذي يجب التحقق منه أولًا؟
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              عُمان ليست سوقًا محلية مفتوحة ومحمية بالكامل للعملات الرقمية.
              فالعملات الرقمية ليست عملة قانونية، ولا يضمنها البنك المركزي،
              كما أن قواعد مزودي الخدمات لا تزال في طور التطور. يركز هذا
              الدليل على الوصول العملي وتمويل الريال العُماني ومخاطر الاعتماد
              على المنصات الخارجية.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ابدأ-هنا"
                className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                ابدأ من هنا
              </a>

              <a
                href="#المنصات"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                قارن المنصات
              </a>
            </div>

            <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
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
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
              قبل الإيداع
            </p>

            <h2 className="mt-2 text-2xl font-bold text-amber-950">
              الوصول التقني لا يساوي الترخيص المحلي
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-amber-950">
              قد يفتح الموقع أو يقبل وثيقة الهوية أو يعرض خيارًا بالريال،
              لكن ذلك لا يثبت أن المنصة مؤسسة مالية مرخصة في عُمان. تحقق من
              الوضع الحالي لدى هيئة الخدمات المالية والبنك المركزي والبنك
              الذي تستخدمه.
            </p>
          </div>
        </section>

        <section id="ابدأ-هنا" className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                الإجابة المختصرة
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                لا توجد منصة واحدة هي الأفضل في عُمان
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                يعتمد الاختيار العملي على حاجتك إلى تمويل مباشر بالريال أو
                شراء فوري بسيط أو P2P أو أدوات تداول متقدمة. السؤال الأهم
                هو ما إذا كان المسار واضحًا ومتاحًا لك، وليس أي منصة تنفق
                أكثر على التسويق.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                يمكن مقارنة Rain وBinance وOKX وBitOasis، لكن يجب التحقق من
                الجهة القانونية والمنتجات المقيدة وطريقة الدفع وحقوق السحب
                وقت الاستخدام.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">
                عُمان في أربع نقاط
              </h3>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">1.</span>{" "}
                  هل الخدمة أو الأصل معترف به لدى الجهة العُمانية المختصة؟
                </li>

                <li>
                  <span className="font-semibold text-white">2.</span>{" "}
                  كيف يدخل الريال العُماني إلى المنصة ويخرج منها؟
                </li>

                <li>
                  <span className="font-semibold text-white">3.</span>{" "}
                  هل تستطيع سحب الأصل إلى محفظتك؟
                </li>

                <li>
                  <span className="font-semibold text-white">4.</span>{" "}
                  ماذا يحدث إذا تمت مراجعة الحساب أو التحويل البنكي؟
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                صورة التنظيم في عُمان
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                ثلاث جهات وثلاثة أسئلة مختلفة
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[180px_1fr]">
                <a
                  href="https://cbo.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  البنك المركزي العُماني
                </a>

                <p className="text-sm leading-6 text-slate-700">
                  حذر البنك المركزي من أن العملات الرقمية ليست عملة قانونية
                  ولا مضمونة أو محمية مثل المنتجات المصرفية العادية.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[180px_1fr]">
                <a
                  href="https://fsa.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:underline"
                >
                  هيئة الخدمات المالية
                </a>

                <p className="text-sm leading-6 text-slate-700">
                  تختص الهيئة بالإطار المتعلق بتسجيل مزودي خدمات الأصول
                  الافتراضية وتطوير قواعد هذا القطاع.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[180px_1fr]">
                <span className="font-bold text-slate-900">
                  الجهة الضريبية
                </span>

                <p className="text-sm leading-6 text-slate-700">
                  يجب فصل المعالجة الضريبية للفرد عن الشركة والنشاط المهني،
                  مع الانتباه إلى التغييرات المستقبلية.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            يوصف الإطار العُماني بأنه في طور التطور، وليس بالضرورة مماثلًا
            لنظام شامل وناضج لمنصات التجزئة. افصل بين التسجيل ومتطلبات
            مكافحة غسل الأموال وبين الرخصة النهائية الشاملة.
          </p>
        </section>

        <section id="المنصات" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                دليل المنصات
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                منصات قد يقارنها المستخدم العُماني
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              قد تتغير الإتاحة. تعامل مع كل منصة كنقطة بداية للتحقق، وليس
              كتوصية بأنها مرخصة محليًا.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-lg"
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

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    {platform.fit}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-700">
                  {platform.detail}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    تحقق قبل الاستخدام
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {platform.check}
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
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                تمويل الريال
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                طريقة الدفع أهم من الشعار
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                قد تعلن بعض المنصات عن التحويل البنكي أو البطاقات أو التحويل
                عبر الدولار أو الدرهم أو عملة أخرى. دعم الريال العُماني
                مباشرة ليس متاحًا دائمًا. تحقق من الجهة التي تستلم المال
                والرسوم وسياسة البنك الحالية.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    قارن المبلغ النهائي
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    السبريد ورسوم البطاقة والإيداع والتحويل والتداول والسحب.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    احتفظ بسجل واضح
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    تأكيدات التحويل وعناوين المحافظ ومعرفات المعاملات ومصدر
                    الأموال.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-lg font-bold text-rose-950">
                تجنب ترتيبات الدفع خارج المنصة
              </h3>

              <p className="mt-3 text-sm leading-6 text-rose-950">
                لا تستخدم حساب شخص آخر ولا تكتب وصفًا غير صحيح للتحويل ولا
                تنقل معاملة P2P إلى واتساب أو النقد. تزيد هذه الترتيبات من
                مخاطر الاحتيال وعكس الدفع ومراجعة الحساب.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
              السياق الضريبي
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              عدم وجود ضريبة دخل شخصية لا يعني عدم وجود التزامات تجارية
            </h2>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">
                  المستخدم الفرد
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  لا تفرض عُمان عادة ضريبة دخل شخصية على الأفراد في النظام
                  الحالي. وقد يعتمد الوضع على الإقامة الضريبية وطبيعة النشاط
                  والإصلاحات المستقبلية.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  الشركة أو النشاط المهني
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  قد تواجه الشركة أو نشاط التعدين أو المنصة أو المتداول
                  المحترف مسائل مختلفة تتعلق بالضرائب والقيمة المضافة
                  والمحاسبة والتسجيل والإبلاغ.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-400">
              هذه معلومات عامة وليست رأيًا ضريبيًا في عُمان. تحقق من أحدث
              إرشادات الجهة الضريبية قبل تقديم الإقرار أو إنشاء نشاط تجاري.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              قبل الاختيار
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              أربعة أسئلة تغير الإجابة
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="divide-y divide-slate-200">
              <div className="grid gap-3 px-6 py-5 md:grid-cols-[250px_1fr]">
                <p className="font-bold text-slate-900">
                  هل تحتاج إلى تمويل بالريال؟
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  تحقق من مسار البنك أو البطاقة أو التحويل. تستخدم منصات
                  كثيرة الدولار أو الدرهم أو مزودًا خارجيًا بدل سوق مباشر
                  بالريال.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[250px_1fr]">
                <p className="font-bold text-slate-900">
                  هل تستخدم بنكًا عُمانيًا؟
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  اسأل البنك عن سياسته الحالية. نجاح تحويل معين لا يثبت أن
                  المنصة أو مسار الدفع مرخص في عُمان.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[250px_1fr]">
                <p className="font-bold text-slate-900">
                  هل تتداول المشتقات؟
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  تحقق من توفر المنتج للمستخدم الفرد العُماني وافهم مخاطر
                  التصفية والرافعة والطرف المقابل.
                </p>
              </div>

              <div className="grid gap-3 px-6 py-5 md:grid-cols-[250px_1fr]">
                <p className="font-bold text-slate-900">
                  هل تدير نشاطًا تجاريًا؟
                </p>

                <p className="text-sm leading-6 text-slate-700">
                  قد تختلف متطلبات التسجيل ومكافحة غسل الأموال والترخيص
                  والضرائب والقيمة المضافة عن حالة الاحتفاظ الشخصي.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                الحفظ
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                الوصول إلى منصة خارجية يعني مخاطر خارجية
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                قد تقبل المنصة الدولية المستخدم العُماني دون أن تخضع لإشراف
                جهة عُمانية. تبقى مخاطر تقييد الحساب وإيقاف السحب والإفلاس
                والاختراق قائمة.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>هل تستطيع السحب إلى محفظة تتحكم فيها؟</li>
                <li>هل أصول العملاء منفصلة؟</li>
                <li>هل تقرض المنصة أصول العملاء أو تعيد استخدامها؟</li>
                <li>كيف تتعامل مع الشكاوى وتجميد الحساب؟</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                فكر في الحفظ الذاتي بحذر
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                تقلل المحفظة الذاتية الاعتماد على المنصة، لكنها تجعلك
                مسؤولًا عن عبارة الاسترداد وأمان الجهاز وكل معاملة توقعها.
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

        <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              إجابات مباشرة
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              أسئلة عن العملات الرقمية في عُمان
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
              قائمة التحقق قبل استخدام منصة في عُمان
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "راجع أحدث معلومات البنك المركزي وهيئة الخدمات المالية.",
                "تحقق هل الخدمة مسجلة أو مرخصة أو خارجية.",
                "تأكد من مسار إيداع وسحب الريال العُماني.",
                "قارن السبريد ورسوم البطاقة والتحويل والتداول.",
                "احتفظ بسجلات المعاملات والمحافظ ومصدر الأموال.",
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
              العملات الرقمية وسياسات الدفع وإطار التسجيل والمعالجة
              الضريبية وتوفر المنصات في عُمان. تحقق من أحدث المعلومات لدى
              البنك المركزي العُماني وهيئة الخدمات المالية والجهة الضريبية
              والبنك الذي تتعامل معه قبل الإيداع أو التداول. بعض الروابط قد
              تكون روابط تابعة.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}