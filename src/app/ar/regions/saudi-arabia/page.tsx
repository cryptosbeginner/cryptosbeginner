import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "منصات تداول العملات الرقمية في السعودية 2026",
  description:
    "دليل 2026 لمنصات تداول العملات الرقمية في السعودية: ساما، هيئة السوق المالية، الريال السعودي، مخاطر المنصات الخارجية، Rain وBinance وBybit.",
  alternates: {
    canonical:
      "https://www.cryptosbeginner.com/ar/regions/saudi-arabia",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/saudi-arabia",
      ar: "https://www.cryptosbeginner.com/ar/regions/saudi-arabia",
      "x-default":
        "https://www.cryptosbeginner.com/regions/saudi-arabia",
    },
  },
};

const UPDATED = "2026-08-13";

const platforms = [
  {
    name: "Rain",
    bestFor: "مقارنة إقليمية في منطقة الخليج",
    note:
      "منصة إقليمية يقارنها المستخدمون في دول الخليج. تحقق من توفر الخدمة للمقيمين في السعودية، وطريقة تمويل الحساب بالريال، والجهة القانونية التي تقدم الخدمة.",
    href: "https://go.cryptosbeginner.com/Rain",
    affiliate: true,
  },
  {
    name: "Binance",
    bestFor: "السيولة والأسواق المتنوعة",
    note:
      "منصة عالمية يقارنها المستخدمون بسبب السيولة وخيارات التداول وP2P. تحقق من توفر الريال، وسياسات البنوك، وأهلية المنتجات والجهة القانونية.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "Bybit",
    bestFor: "المتداولون النشطون والمشتقات",
    note:
      "منصة عالمية تقدم التداول الفوري والمشتقات وP2P. تحقق من قبول المستخدمين في السعودية، وتمويل الحساب، والقيود على المنتجات.",
    href: "https://go.cryptosbeginner.com/Bybit",
    affiliate: true,
  },
  {
    name: "OKX",
    bestFor: "أدوات التداول المتقدمة",
    note:
      "منصة عالمية تقدم التداول الفوري والمشتقات وخدمات Web3. يجب التأكد من توفر كل منتج للمستخدم السعودي قبل التسجيل أو الإيداع.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
  {
    name: "BitOasis",
    bestFor: "مقارنة منصات منطقة الشرق الأوسط وشمال أفريقيا",
    note:
      "منصة إقليمية يقارنها المستخدمون في الخليج. تحقق من شروط قبول المقيمين في السعودية، وطريقة الدفع بالريال، والحفظ والرسوم.",
    href: "https://bitoasis.net",
    affiliate: false,
  },
];

export default function SaudiArabiaArabicPage() {
  return (
    <>
      <Header />

      <main dir="rtl" lang="ar" className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">العربية</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/saudi-arabia"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              آخر تحديث:{" "}
              <time dateTime={UPDATED}>13 أغسطس 2026</time> · مراجعة
              عربية بواسطة يوسف الراشدي
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              منصات تداول العملات الرقمية في السعودية 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              لا تُعد المملكة العربية السعودية سوقًا تجزئة للعملات الرقمية
              ذات إطار ترخيص شامل مثل إطار MiCA الأوروبي. وقد حذرت ساما
              وهيئة السوق المالية من أن العملات الافتراضية ليست عملة قانونية
              أو منتجًا ماليًا معتمدًا بشكل عام. قد يتمكن بعض المستخدمين من
              الوصول إلى منصات خارجية أو أسواق P2P، لكن تمويل الحسابات
              بالريال وسياسات البنوك والمخاطر التنظيمية تحتاج إلى تحقق دقيق.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                مراجعة المحتوى العربي
              </p>

              <p className="mt-1 text-sm text-slate-700">
                تمت مراجعة هذا المحتوى لغويًا وتحريره للسياق العربي المحلي
                بواسطة{" "}
                <span className="font-semibold text-slate-900">
                  يوسف الراشدي
                </span>
                ، مراجع محتوى متخصص في الأصول الرقمية والتمويل الشخصي.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                هذا المحتوى تعليمي ولا يُعد استشارة مالية أو قانونية أو ضريبية
                أو شرعية مخصصة.
              </p>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-amber-950 mb-3">
              تنبيه مهم للمستخدمين في السعودية
            </h2>

            <p className="text-sm leading-7 text-amber-950">
              لا يوصي هذا الدليل بتجاوز الأنظمة المصرفية أو أنظمة الصرف
              الأجنبي أو المتطلبات التنظيمية في المملكة. تحميل الموقع أو فتح
              الحساب أو إتمام صفقة P2P لا يعني أن النشاط مصرح به محليًا.
              استشر مختصًا قانونيًا أو ضريبيًا في السعودية قبل إيداع مبالغ
              كبيرة أو تشغيل خدمة متعلقة بالأصول الرقمية.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              الخلاصة
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                العملات الرقمية ليست عملة قانونية في السعودية وليست منتجًا
                ماليًا معتمدًا بشكل عام أو وديعة مصرفية مضمونة.
              </li>

              <li>
                تختص ساما بالمدفوعات والسياسة النقدية والعملات المستقرة أو
                الأصول الرقمية ذات الخصائص المرتبطة بالدفع.
              </li>

              <li>
                تختص هيئة السوق المالية بالأنشطة التي تدخل في نطاق الأوراق
                المالية أو أسواق رأس المال.
              </li>

              <li>
                لا يوجد حتى الآن إطار سعودي شامل لمنصات تداول العملات
                الرقمية للأفراد مماثل للإطار الأوروبي.
              </li>

              <li>
                يمكن مقارنة Binance وBybit وOKX وRain وBitOasis، لكن يجب
                التحقق من قبول العملاء السعوديين وطرق الدفع بالريال لكل
                منصة.
              </li>

              <li>
                لا يطبق نظام ضريبة دخل شخصي شامل على الأفراد، لكن أنشطة
                الشركات والأعمال والزكاة والضريبة المضافة والإبلاغ قد تكون
                ذات صلة.
              </li>
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              محتويات الدليل
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#الوضع-القانوني" className="hover:underline">
                  الوضع القانوني الحالي
                </a>
              </li>

              <li>
                <a href="#الجهات-التنظيمية" className="hover:underline">
                  ساما وهيئة السوق والدفعات
                </a>
              </li>

              <li>
                <a href="#المنصات" className="hover:underline">
                  المنصات التي يقارنها المستخدمون
                </a>
              </li>

              <li>
                <a href="#الضرائب" className="hover:underline">
                  السياق الضريبي
                </a>
              </li>

              <li>
                <a href="#التمويل" className="hover:underline">
                  تمويل الحساب بالريال وP2P
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:underline">
                  الأسئلة الشائعة
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Legal status */}
        <section
          id="الوضع-القانوني"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الوضع القانوني للعملات الرقمية في السعودية
          </h2>

          <p className="text-slate-700 mb-4">
            لا تطبق السعودية حاليًا إطارًا شاملاً لمنصات تداول العملات
            الرقمية للأفراد مشابهًا لنظام MiCA الأوروبي. وقد أوضحت الجهات
            السعودية أن العملات الافتراضية ليست عملة قانونية وليست مضمونة
            من الدولة أو من البنك المركزي.
          </p>

          <p className="text-slate-700 mb-4">
            لا يعني ذلك بالضرورة وجود نص جنائي واحد يجرّم كل حالة من حالات
            امتلاك أو تداول العملات الرقمية من قبل الأفراد. الموقف العملي
            أكثر تعقيدًا: قد يتمكن المستخدم من الوصول إلى منصات دولية، لكن
            البنوك ومؤسسات الدفع والجهات المالية المحلية تخضع لقيود ولا
            يمكنها تقديم خدمات العملات الرقمية دون الموافقات المطلوبة.
          </p>

          <p className="text-slate-700 mb-4">
            لذلك يجب التمييز بين الوصول التقني إلى موقع، والترخيص المحلي
            لتقديم خدمة مالية، والحماية النظامية للمستهلك. قبول منصة خارجية
            للمستخدم السعودي لا يعني أنها خاضعة لإشراف جهة سعودية.
          </p>

          <p className="text-sm text-slate-700">
            مصادر رسمية:{" "}
            <a
              href="https://www.sama.gov.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              البنك المركزي السعودي
            </a>{" "}
            ·{" "}
            <a
              href="https://cma.org.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              هيئة السوق المالية
            </a>{" "}
            ·{" "}
            <a
              href="https://zatca.gov.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              هيئة الزكاة والضريبة والجمارك
            </a>
          </p>
        </section>

        {/* Regulators */}
        <section
          id="الجهات-التنظيمية"
          className="max-w-4xl mx-auto px-4 pb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            دور ساما وهيئة السوق والقيود على المدفوعات
          </h2>

          <p className="text-slate-700 mb-4">
            يرتبط دور ساما بالمدفوعات والنطاق النقدي. ويشمل ذلك مؤسسات
            الدفع والقيمة المخزنة والعملات المستقرة والأصول الرقمية التي
            تحمل خصائص مرتبطة بالمدفوعات. لا يمكن للبنوك ومؤسسات الدفع
            المرخصة تقديم خدمات العملات الرقمية دون الموافقات اللازمة.
          </p>

          <p className="text-slate-700 mb-4">
            تصبح هيئة السوق المالية ذات صلة عندما يُصنف الأصل الرقمي كأداة
            مالية أو عندما يدخل النشاط ضمن نطاق أسواق رأس المال. لا يكفي
            الاسم الذي يطلقه المشروع على الرمز؛ بل يجب النظر إلى خصائصه
            الاقتصادية والحقوق التي يمنحها لحامليه.
          </p>

          <p className="text-slate-700 mb-4">
            توجد مبادرات وتجارب مرتبطة بالتقنية المالية وترميز الأصول، لكن
            المشاركة في بيئة تجريبية أو مبادرة محدودة لا تعني وجود ترخيص
            عام لمنصة تداول للأفراد.
          </p>

          <p className="text-slate-700">
            يجب اعتبار أي خطط مستقبلية للعملات المستقرة أو الأصول الرقمية
            مقترحات إلى أن تصدر عنها قواعد نهائية واضحة من الجهات المختصة.
          </p>
        </section>

        {/* Platforms */}
        <section id="المنصات" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            المنصات التي يقارنها المستخدمون في السعودية
          </h2>

          <p className="text-slate-700 mb-6">
            يقارن المستخدمون السعوديون بين المنصات العالمية والمنصات
            الإقليمية في الشرق الأوسط وشمال أفريقيا. القائمة التالية
            للمقارنة فقط ولا تؤكد أن كل منتج متاح أو مرخص داخل المملكة.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-indigo-600">
                  {platform.bestFor}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {platform.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {platform.note}
                </p>

                <a
                  href={platform.href}
                  target="_blank"
                  rel={
                    platform.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className={`mt-4 inline-flex text-sm font-semibold hover:underline ${
                    platform.affiliate
                      ? "text-emerald-700"
                      : "text-slate-700"
                  }`}
                >
                  {platform.affiliate
                    ? `زيارة ${platform.name} ←`
                    : `الموقع الرسمي لـ ${platform.name} ←`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tax */}
        <section id="الضرائب" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الضرائب والزكاة المتعلقة بالعملات الرقمية
          </h2>

          <p className="text-slate-700 mb-4">
            لا تطبق السعودية نظامًا عامًا لضريبة الدخل الشخصي يشبه الأنظمة
            الموجودة في كثير من الدول الأوروبية. ولذلك لا يخضع المستثمر
            الفرد عادة لضريبة أرباح رأسمالية شخصية منفصلة وفق جدول خاص
            بالعملات الرقمية.
          </p>

          <p className="text-slate-700 mb-4">
            لا يعني ذلك أن كل نشاط مرتبط بالعملات الرقمية معفى من أي
            التزام. يمكن أن تثير عمليات التداول والتعدين والتخزين بعائد
            والأنشطة التجارية أسئلة تتعلق بضريبة الشركات أو الزكاة أو ضريبة
            القيمة المضافة أو المحاسبة أو الترخيص.
          </p>

          <p className="text-slate-700 mb-4">
            يختلف وضع الفرد عن وضع الشركة أو النشاط التجاري. كما قد تختلف
            المعالجة بحسب ملكية الشركة، وطبيعة الأصل، وهل يمثل النشاط
            استثمارًا أم تجارة أو خدمة.
          </p>

          <p className="text-slate-700">
            تزداد أهمية تبادل المعلومات المالية دوليًا. احتفظ بسجلات دقيقة
            حتى في حال عدم وجود نموذج ضريبي شخصي خاص بالعملات الرقمية.
          </p>
        </section>

        {/* Funding */}
        <section id="التمويل" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            تمويل الحساب بالريال وعمليات P2P
          </h2>

          <p className="text-slate-700 mb-4">
            يعتمد تمويل الحساب بالريال على المنصة وشريك الدفع. قد تعلن
            بعض الخدمات عن دعم البطاقات أو التحويلات البنكية، بينما تعتمد
            خدمات أخرى على P2P أو مزودي دفع خارجيين أو التحويل من عملة
            أخرى.
          </p>

          <p className="text-slate-700 mb-4">
            تحقق من الجهة التي تستلم الريالات فعليًا، وما إذا كانت مؤسسة
            الدفع مرخصة، وكيف يتعامل البنك مع التحويل المرتبط بالمنصة.
          </p>

          <p className="text-slate-700 mb-4">
            قد يوفر P2P وصولًا عمليًا إلى الريال أو العملات المستقرة، لكنه
            يضيف مخاطر الاحتيال والطرف المقابل وعكس المدفوعات ومراجعة
            الحساب. استخدم خدمة الضمان داخل المنصة ولا تنقل الصفقة إلى
            واتساب أو التعامل النقدي خارج المنصة.
          </p>

          <p className="text-slate-700">
            لا تستخدم حسابًا مصرفيًا لشخص آخر، ولا تقدم وصفًا غير صحيح
            للتحويل، ولا تعتمد على لقطات شاشة مزيفة لإثبات الدفع.
          </p>
        </section>

        {/* Custody */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الحفظ ومخاطر المستخدم
          </h2>

          <p className="text-slate-700 mb-4">
            المنصة الخارجية لا تخضع بالضرورة لتأمين الودائع أو الحماية
            المصرفية السعودية. قد يتم تقييد الحساب أو إيقاف السحوبات، وقد
            تتعرض المنصة للإفلاس أو الاختراق.
          </p>

          <p className="text-slate-700 mb-4">
            اسأل ما إذا كنت تملك عملات رقمية فعلية، وما إذا كان بإمكانك
            سحبها إلى محفظة خارجية، وما إذا كانت أصول العملاء منفصلة، وما
            إذا كانت المنصة تقرض أصول العملاء أو تعيد استخدامها.
          </p>

          <p className="text-slate-700">
            قد يكون إثبات الاحتياطيات إشارة مفيدة إلى الشفافية، لكنه لا
            يثبت تلقائيًا تغطية جميع الالتزامات أو أولوية العملاء في حال
            الإفلاس.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              ما هو إثبات الاحتياطيات؟ ←
            </Link>

            <Link
              href="/learn/how-p2p-escrow-works"
              className="text-indigo-700 hover:underline"
            >
              كيف يعمل ضمان P2P؟ ←
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              قائمة أمان المنصات ←
            </Link>
          </div>
        </section>

        {/* Comparison */}
        <section id="المقارنة" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            مقارنة عملية للمستخدمين في السعودية
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-right">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    المنصة
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    مناسبة لـ
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    ما يجب التحقق منه
                  </th>

                  <th className="px-4 py-3 font-semibold text-slate-800">
                    الإجراء
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Rain
                  </td>

                  <td className="px-4 py-3">
                    مقارنة إقليمية في الخليج.
                  </td>

                  <td className="px-4 py-3">
                    أهلية المستخدم السعودي، طريقة الريال، الجهة القانونية
                    والحفظ.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Rain"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      زيارة Rain ←
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Binance
                  </td>

                  <td className="px-4 py-3">
                    السيولة ومقارنة P2P.
                  </td>

                  <td className="px-4 py-3">
                    وسائل الدفع بالريال، دعم البنوك، المنتجات والجهة
                    القانونية.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/binance"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      زيارة Binance ←
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Bybit
                  </td>

                  <td className="px-4 py-3">
                    المتداولون النشطون والمشتقات.
                  </td>

                  <td className="px-4 py-3">
                    التسجيل السعودي، التمويل، P2P، المشتقات والحفظ.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/Bybit"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      زيارة Bybit ←
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    OKX
                  </td>

                  <td className="px-4 py-3">
                    أدوات التداول المتقدمة.
                  </td>

                  <td className="px-4 py-3">
                    أهلية المنتجات، تحويل الريال، الحفظ ومخاطر المنصات
                    الخارجية.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://go.cryptosbeginner.com/OKX"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-700 font-medium hover:underline"
                    >
                      زيارة OKX ←
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    الحفظ الذاتي
                  </td>

                  <td className="px-4 py-3">
                    الأصول طويلة الأجل.
                  </td>

                  <td className="px-4 py-3">
                    أمان المفاتيح، مصدر الأموال والسجلات المستقبلية.
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href="/wallets"
                      className="text-indigo-700 font-medium hover:underline"
                    >
                      دليل المحافظ ←
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الأسئلة الشائعة حول العملات الرقمية في السعودية
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل العملات الرقمية قانونية في السعودية؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                العملات الرقمية ليست عملة قانونية أو منتجًا ماليًا معتمدًا
                بشكل عام. لا يوجد نص واحد واضح يجرّم كل حالة من حالات
                الاحتفاظ الشخصي، لكن الوصول إلى المنصات والخدمات المصرفية
                يحمل مخاطر تنظيمية مهمة.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل يستطيع المقيمون في السعودية استخدام Binance أو Bybit أو OKX؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                قد يتغير الوصول التقني وسياسات التسجيل. يجب التحقق من قبول
                المستخدمين السعوديين، وطرق التمويل بالريال، وقيود المنتجات،
                وسياسات البنوك، والجهة القانونية التي تقدم الخدمة.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل توجد ضريبة أرباح شخصية على العملات الرقمية؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لا تطبق السعودية عمومًا نظام ضريبة دخل شخصي شاملًا على
                الأفراد. لكن أنشطة الشركات والأعمال قد تخضع لضريبة الشركات
                أو الزكاة أو ضريبة القيمة المضافة أو التزامات الإبلاغ.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل تستطيع البنوك السعودية معالجة مدفوعات العملات الرقمية؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لا يمكن للبنوك ومؤسسات الدفع تقديم خدمات العملات الرقمية
                دون الموافقات المطلوبة. نجاح تحويل معين لا يثبت أن المسار
                مصرح به محليًا.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل Rain منصة مرخصة في السعودية؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Rain منصة إقليمية في الخليج، لكن لا ينبغي الخلط بين ترخيص
                في دولة خليجية أخرى وبين الترخيص السعودي. تحقق من أهلية
                المستخدم السعودي والجهة القانونية قبل استخدامها.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل تنطبق قواعد MiCA على السعودية؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لا. MiCA إطار أوروبي. قد تكون للمنصة جهة أوروبية حاصلة على
                ترخيص MiCA، لكن ذلك لا ينشئ ترخيصًا سعوديًا.
              </p>
            </details>
          </div>
        </section>

        {/* Checklist */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            قائمة التحقق قبل استخدام منصة في السعودية
          </h2>

          <ul className="list-disc space-y-2 pr-5 text-sm leading-7 text-slate-700">
            <li>
              تحقق من أهلية المستخدم السعودي ولا تعتمد فقط على إمكانية فتح
              الموقع.
            </li>

            <li>
              اعرف ما إذا كانت قواعد ساما أو هيئة السوق المالية تنطبق على
              المنتج أو مسار الدفع.
            </li>

            <li>
              تحقق من إيداعات الريال والجهة البنكية أو مؤسسة الدفع المشاركة.
            </li>

            <li>
              استخدم خدمة الضمان داخل منصة P2P ولا تنقل الصفقة خارج المنصة
              قبل التأكد من الدفع.
            </li>

            <li>
              احتفظ بسجلات مصدر الأموال والمعاملات والمحافظ.
            </li>

            <li>
              افصل بين الاحتفاظ الشخصي والنشاط التجاري أو المهني.
            </li>

            <li>
              استخدم المصادقة الثنائية وكلمات مرور فريدة ونسخًا احتياطية
              offline.
            </li>

            <li>
              اقرأ{" "}
              <Link
                href="/learn/crypto-exchange-security-checklist"
                className="text-indigo-700"
              >
                قائمة أمان منصات التداول
              </Link>{" "}
              و{" "}
              <Link href="/methodology" className="text-indigo-700">
                منهجيتنا
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              ماذا يفعل المبتدئ السعودي؟
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              ابدأ بالتعلم قبل إيداع مبلغ كبير. تحقق من أهلية المستخدم
              السعودي، وتمويل الريال، وسياسات البنوك والجهة القانونية
              للمنصة. استخدم أرصدة التداول فقط في المنصات التي تفهم مخاطرها
              وافصل الأموال طويلة الأجل عن التداول.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/Rain"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Rain
              </a>

              <a
                href="https://go.cryptosbeginner.com/binance"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700"
              >
                Binance
              </a>

              <a
                href="https://bitoasis.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800"
              >
                BitOasis رسميًا
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>إخلاء مسؤولية:</strong> هذا المحتوى تعليمي فقط ولا
              يمثل استشارة مالية أو قانونية أو ضريبية أو شرعية. قد تتغير
              قواعد العملات الرقمية وسياسات البنوك وتوفر المنصات والمعالجة
              الضريبية في السعودية. تحقق من أحدث معلومات ساما وهيئة السوق
              المالية وهيئة الزكاة والضريبة والجمارك واستشر مختصًا محليًا
              قبل إيداع الأموال أو التداول. بعض الروابط قد تكون روابط
              تابعة.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}