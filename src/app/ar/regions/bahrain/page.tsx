import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "أفضل منصات تداول العملات الرقمية في البحرين 2026",
  description:
    "دليل عربي لعام 2026 لمقارنة منصات العملات الرقمية في البحرين: مصرف البحرين المركزي، وحدة الأصول المشفرة، الدينار البحريني، Rain وBinance وBitOasis.",
  alternates: {
    canonical: "https://www.cryptosbeginner.com/ar/regions/bahrain",
    languages: {
      en: "https://www.cryptosbeginner.com/regions/bahrain",
      ar: "https://www.cryptosbeginner.com/ar/regions/bahrain",
      "x-default":
        "https://www.cryptosbeginner.com/regions/bahrain",
    },
  },
};

const UPDATED = "2026-08-05";

const platforms = [
  {
    name: "Rain",
    bestFor: "الوصول الإقليمي في البحرين والخليج",
    note:
      "منصة إقليمية مرتبطة بالسوق البحريني وتُعد نقطة مقارنة مهمة. تحقق من فئة الترخيص الحالية لدى مصرف البحرين المركزي، وطريقة تمويل الحساب بالدينار، وشروط الحفظ والرسوم.",
    href: "https://go.cryptosbeginner.com/Rain",
    affiliate: true,
  },
  {
    name: "Binance",
    bestFor: "السيولة وتنوع الأصول",
    note:
      "منصة عالمية يقارنها المستخدمون بسبب السيولة والأسواق الفورية وP2P. تحقق من توفر الخدمة في البحرين، والجهة القانونية، ووسائل الدفع بالدينار والمنتجات المقيدة.",
    href: "https://go.cryptosbeginner.com/binance",
    affiliate: true,
  },
  {
    name: "BitOasis",
    bestFor: "المقارنة الإقليمية في الشرق الأوسط",
    note:
      "منصة إقليمية يمكن استخدامها للمقارنة بين خدمات الخليج. تحقق من شروط التسجيل في البحرين، وتمويل الحساب بالدينار، والحفظ والرسوم والترخيص المحلي.",
    href: "https://bitoasis.net",
    affiliate: false,
  },
  {
    name: "OKX",
    bestFor: "أدوات التداول المتقدمة",
    note:
      "منصة عالمية تقدم التداول الفوري والمشتقات وخدمات Web3. تحقق من أهلية المستخدم البحريني وتحويل الدينار وتوفر المنتجات والجهة القانونية.",
    href: "https://go.cryptosbeginner.com/OKX",
    affiliate: true,
  },
];

export default function BahrainArabicPage() {
  return (
    <>
      <Header />

      <main dir="rtl" lang="ar" className="bg-white">
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-4 flex flex-wrap gap-3 text-sm">
              <span className="text-slate-600">العربية</span>
              <span className="text-slate-400">·</span>
              <Link
                href="/regions/bahrain"
                className="text-indigo-700 hover:underline"
              >
                English version
              </Link>
            </div>

            <p className="text-sm font-medium text-indigo-600 mb-2">
              نُشر وحُدّث في{" "}
              <time dateTime={UPDATED}>5 أغسطس 2026</time> · مراجعة عربية
              بواسطة يوسف الراشدي
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              أفضل منصات تداول العملات الرقمية في البحرين 2026
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              تُعد البحرين من أسواق العملات الرقمية الأكثر تنظيمًا في منطقة
              الخليج. وينظم مصرف البحرين المركزي خدمات الأصول المشفرة من
              خلال وحدة الأصول المشفرة ضمن المجلد السادس من دليل المصرف.
              ومع ذلك، ينبغي للمستخدم مقارنة نطاق الترخيص، وتمويل الحساب
              بالدينار البحريني، والحفظ، والرسوم، وما إذا كانت المنصة
              مصرحًا لها بخدمة العملاء في البحرين.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                مراجعة المحتوى العربي
              </p>

              <p className="mt-1 text-sm text-slate-700">
                تمت مراجعة هذا المحتوى لغويًا وتحريره للسياق المحلي العربي
                بواسطة{" "}
                <span className="font-semibold text-slate-900">
                  يوسف الراشدي
                </span>
                ، مراجع محتوى متخصص في الأصول الرقمية والتمويل الشخصي.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                هذا المحتوى تعليمي ولا يُعد استشارة مالية أو قانونية أو
                ضريبية أو شرعية مخصصة.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-950 mb-3">
              الخلاصة السريعة: ما أفضل منصة؟
            </h2>

            <p className="text-sm leading-7 text-emerald-950">
              تُعد Rain نقطة المقارنة الأولى الطبيعية للمستخدم البحريني
              بسبب ارتباطها بالسوق الإقليمي وإطار مصرف البحرين المركزي.
              وقد تناسب Binance من يبحث عن السيولة وتنوع الأسواق، بينما
              توفر BitOasis وOKX مقارنات إقليمية وعالمية إضافية. لا تعتمد
              على اسم العلامة التجارية وحده؛ تحقق من الترخيص والجهة
              القانونية وطريقة الدفع بالدينار ونموذج الحفظ والتكلفة
              الإجمالية.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              أهم النقاط
            </h2>

            <ul className="space-y-2 text-slate-800 text-sm">
              <li>
                مصرف البحرين المركزي هو الجهة الرئيسية لتنظيم خدمات الأصول
                المشفرة داخل البحرين أو منها.
              </li>

              <li>
                توجد وحدة الأصول المشفرة ضمن المجلد السادس من دليل مصرف
                البحرين المركزي.
              </li>

              <li>
                قد تشمل الأنشطة المنظمة تشغيل المنصة والحفظ والوساطة
                وإدارة المحافظ وتقديم المشورة.
              </li>

              <li>
                Rain هي المقارنة الأساسية في البحرين، مع Binance وBitOasis
                وOKX كبدائل إقليمية وعالمية.
              </li>

              <li>
                قارن بين الإيداع بالدينار والتحويلات البنكية والبطاقات
                والسبريد والعمولات ورسوم السحب.
              </li>

              <li>
                لا يضمن الترخيص انخفاض الأسعار أو استمرار السحوبات أو عدم
                حدوث الاختراق أو فقدان المفاتيح الخاصة.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              محتويات الدليل
            </h2>

            <ol className="grid sm:grid-cols-2 gap-2 text-sm text-indigo-700">
              <li>
                <a href="#التنظيم" className="hover:underline">
                  تنظيم مصرف البحرين المركزي
                </a>
              </li>

              <li>
                <a href="#المنصات" className="hover:underline">
                  المنصات المهمة
                </a>
              </li>

              <li>
                <a href="#التمويل" className="hover:underline">
                  تمويل الحساب بالدينار
                </a>
              </li>

              <li>
                <a href="#الضرائب" className="hover:underline">
                  السياق الضريبي
                </a>
              </li>

              <li>
                <a href="#الحفظ" className="hover:underline">
                  الحفظ والمخاطر
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

        <section id="التنظيم" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            تنظيم العملات الرقمية في البحرين
          </h2>

          <p className="text-slate-700 mb-4">
            ينظم مصرف البحرين المركزي خدمات الأصول المشفرة من خلال وحدة
            الأصول المشفرة، المعروفة باسم CRA، ضمن المجلد السادس من دليل
            مصرف البحرين المركزي.
          </p>

          <p className="text-slate-700 mb-4">
            يشمل الإطار أنشطة مثل تشغيل منصة لتبادل الأصول المشفرة،
            واستقبال وإرسال الأوامر، والتعامل، والحفظ، وإدارة المحافظ
            وتقديم المشورة. وتختلف فئة الترخيص المطلوبة بحسب الخدمات التي
            تقدمها الشركة فعليًا.
          </p>

          <p className="text-slate-700 mb-4">
            لذلك لا ينبغي اعتبار عبارة «مرخصة في البحرين» وصفًا موحدًا
            لكل الخدمات. تحقق من اسم الجهة القانونية، وفئة الترخيص،
            والأنشطة المسموح بها، وما إذا كان الترخيص يشمل العملاء الأفراد.
          </p>

          <p className="text-slate-700 mb-4">
            توجد أيضًا قواعد منفصلة لبعض أنشطة إصدار وعرض العملات المستقرة.
            وتنطبق هذه القواعد على الجهات المصدرة، ولا تعني تلقائيًا أن
            كل عملة مستقرة أو منتج تداول معتمد.
          </p>

          <p className="text-sm text-slate-700">
            المصادر الرسمية:{" "}
            <a
              href="https://www.cbb.gov.bh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              مصرف البحرين المركزي
            </a>{" "}
            ·{" "}
            <a
              href="https://www.cbb.gov.bh/rulebook/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              دليل مصرف البحرين المركزي
            </a>
          </p>
        </section>

        <section id="المنصات" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            أهم منصات العملات الرقمية للمستخدم البحريني
          </h2>

          <p className="text-slate-700 mb-6">
            المنصات التالية نقاط للمقارنة وليست ترتيبًا أو تزكية شاملة.
            قد تتغير الإتاحة والمنتجات والرسوم وطرق الدفع.
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

        <section id="التمويل" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            تمويل الحساب بالدينار البحريني
          </h2>

          <p className="text-slate-700 mb-4">
            قد يقارن المستخدم البحريني بين التحويلات البنكية والبطاقات
            ووسائل الدفع المحلية مثل BenefitPay أو Fawri وFawri+. ويعتمد
            توفر هذه الطرق على المنصة ومزود الدفع والتحقق من الحساب
            وسياسات البنوك الحالية.
          </p>

          <p className="text-slate-700 mb-4">
            قارن سعر التحويل الفعلي من الدينار إلى العملة الرقمية بدلًا من
            النظر إلى عمولة التداول المعلنة فقط. قد تكون المنصة ذات
            العمولة المنخفضة أكثر تكلفة بسبب السبريد أو رسوم البطاقة أو سعر
            التحويل أو رسوم السحب.
          </p>

          <p className="text-slate-700">
            استخدم حسابًا مصرفيًا باسمك، واحتفظ بتأكيدات الإيداع، وأجب
            بدقة عن أسئلة مصدر الأموال. لا تستخدم حسابات أشخاص آخرين أو
            أوصافًا مضللة للمدفوعات.
          </p>
        </section>

        <section id="الضرائب" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            السياق الضريبي للعملات الرقمية في البحرين
          </h2>

          <p className="text-slate-700 mb-4">
            لا تفرض البحرين عادة ضريبة دخل شخصية على الأفراد. لكن ذلك لا
            يعني أن كل نشاط مرتبط بالعملات الرقمية معفى تلقائيًا من
            الالتزامات الضريبية أو المحاسبية أو التنظيمية.
          </p>

          <p className="text-slate-700 mb-4">
            قد تحتاج الشركة أو المتداول المحترف أو نشاط التعدين أو مزود
            خدمات الأصول الرقمية إلى تحليل مسائل ضريبة الشركات أو ضريبة
            القيمة المضافة أو السجل التجاري أو المتطلبات المحاسبية.
          </p>

          <p className="text-slate-700 mb-4">
            قد ينطبق نظام ضريبة القيمة المضافة في البحرين عندما يقدم نشاط
            تجاري سلعًا أو خدمات خاضعة للضريبة. وتعتمد المعالجة على طبيعة
            المعاملة ووضع المكلف.
          </p>

          <p className="text-slate-700">
            احتفظ بسجلات كاملة للمشتريات والمبيعات والرسوم والمكافآت
            والتحويلات بين العملات وتحويلات المحافظ ونفقات النشاط التجاري.
            استشر الجهاز الوطني للإيرادات أو مستشارًا مؤهلًا في البحرين
            للحصول على إجابة مرتبطة بمعاملة محددة.
          </p>

          <p className="mt-4 text-sm text-slate-700">
            المرجع الضريبي:{" "}
            <a
              href="https://www.nbr.gov.bh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              الجهاز الوطني للإيرادات
            </a>
          </p>
        </section>

        <section id="الحفظ" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الحفظ ومخاطر المستهلك
          </h2>

          <p className="text-slate-700 mb-4">
            يمكن أن يؤدي إشراف مصرف البحرين المركزي إلى تحسين الحوكمة
            والامتثال، لكنه لا يلغي مخاطر سوق العملات الرقمية. قد تنخفض
            الأسعار بشدة، وقد تتوقف عمليات السحب، وقد تواجه المنصة الإفلاس
            أو الاختراق أو عطلًا تشغيليًا.
          </p>

          <p className="text-slate-700 mb-4">
            تحقق مما إذا كانت الخدمة تمنحك حق السحب إلى محفظة خارجية،
            وما إذا كانت أصول العملاء منفصلة، وما إذا كانت المنصة تقرض
            الأصول أو تعيد استخدامها، وكيف يتم التعامل مع الشكاوى.
          </p>

          <p className="text-slate-700">
            إثبات الاحتياطيات إشارة واحدة إلى الشفافية، لكنه لا يثبت
            بالضرورة تغطية كامل الالتزامات أو جودة الأصول أو أولوية العملاء
            في حالة الإفلاس.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-proof-of-reserves"
              className="text-indigo-700 hover:underline"
            >
              ما هو إثبات الاحتياطيات؟ ←
            </Link>

            <Link
              href="/learn/crypto-exchange-security-checklist"
              className="text-indigo-700 hover:underline"
            >
              قائمة أمان المنصات ←
            </Link>

            <Link href="/wallets" className="text-indigo-700 hover:underline">
              دليل المحافظ ←
            </Link>
          </div>
        </section>

        <section id="المقارنة" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            مقارنة عملية للمستخدم البحريني
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
                    الوصول البحريني والإقليمي.
                  </td>

                  <td className="px-4 py-3">
                    فئة ترخيص CBB، طريقة الدينار، الحفظ والسبريد.
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
                    السيولة والأسواق المتنوعة.
                  </td>

                  <td className="px-4 py-3">
                    قبول المستخدم البحريني، مدفوعات الدينار، الجهة القانونية
                    والمنتجات المقيدة.
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
                    BitOasis
                  </td>

                  <td className="px-4 py-3">
                    المقارنة الإقليمية.
                  </td>

                  <td className="px-4 py-3">
                    التسجيل في البحرين، تمويل الدينار، الحفظ والوضع المحلي.
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href="https://bitoasis.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium hover:underline"
                    >
                      الموقع الرسمي ←
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
                    الوصول من البحرين، تحويل الدينار، المنتجات والحفظ.
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
                    أمان المحفظة وعبارة الاسترداد وسجلات المعاملات.
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

        <section id="faq" className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            الأسئلة الشائعة حول العملات الرقمية في البحرين
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل العملات الرقمية قانونية في البحرين؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لدى البحرين إطار تنظيمي مخصص لخدمات الأصول المشفرة. وتحتاج
                الشركات التي تمارس خدمات منظمة داخل البحرين أو منها عادة إلى
                ترخيص مناسب من مصرف البحرين المركزي. ولا يعني ذلك أن
                العملات الرقمية خالية من المخاطر.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                من الجهة التي تنظم العملات الرقمية في البحرين؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                مصرف البحرين المركزي هو الجهة الرئيسية لخدمات الأصول
                المشفرة، من خلال وحدة الأصول المشفرة ضمن المجلد السادس من
                دليل المصرف.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل Rain مرخصة في البحرين؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Rain من أهم نقاط المقارنة في السوق البحريني وترتبط بإطار
                ترخيص الأصول المشفرة لدى مصرف البحرين المركزي. تحقق من فئة
                الترخيص الحالية والجهة القانونية والخدمات المسموح بها قبل
                الاعتماد على هذه المعلومة.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل يمكن شراء العملات الرقمية بالدينار البحريني؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                قد تدعم بعض المنصات ومزودي الدفع الإيداع أو التحويل بالدينار.
                تحقق من الطريقة الحالية والحدود والرسوم ووقت المعالجة
                وسياسة البنك قبل الإيداع.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل توجد ضريبة أرباح شخصية على العملات الرقمية في البحرين؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لا تفرض البحرين عادة ضريبة دخل شخصية على الأفراد. وقد تثير
                الأنشطة التجارية مسائل منفصلة تتعلق بالشركات وضريبة القيمة
                المضافة والمحاسبة والتنظيم.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                هل يضمن ترخيص مصرف البحرين المركزي أموالي؟
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                لا. قد يقلل التنظيم بعض المخاطر التشغيلية ومخاطر السلوك،
                لكنه لا يضمن الأسعار أو السحوبات أو الملاءة أو التعويض عن
                الاختراق وفقدان المفاتيح الخاصة.
              </p>
            </details>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            قائمة التحقق قبل اختيار منصة في البحرين
          </h2>

          <ul className="list-disc space-y-2 pr-5 text-sm leading-7 text-slate-700">
            <li>
              تحقق من المنصة في السجل الحالي أو المواد الرسمية لمصرف البحرين
              المركزي.
            </li>

            <li>
              تأكد من أن فئة الترخيص تغطي الخدمة الفعلية مثل التبادل أو
              الحفظ أو الوساطة أو المشتقات.
            </li>

            <li>
              قارن تحويل الدينار والتحويلات البنكية والبطاقات ووسائل الدفع
              المحلية والسبريد والسحب.
            </li>

            <li>
              تحقق من إمكانية سحب الأصول إلى محفظة خارجية.
            </li>

            <li>
              احتفظ بسجلات الشراء والبيع والرسوم والمكافآت والتحويلات بين
              العملات وتحويلات المحافظ.
            </li>

            <li>
              استخدم المصادقة الثنائية وكلمة مرور فريدة ونسخًا احتياطية
              آمنة لعبارة الاسترداد.
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

        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              كيف يختار المبتدئ البحريني منصة؟
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              ابدأ بالتحقق من وضع المنصة ونطاق ترخيصها لدى مصرف البحرين
              المركزي، ثم قارن تمويل الحساب بالدينار والتكلفة الإجمالية
              وحقوق السحب ونموذج الحفظ. قد تكون المنصة المنظمة محليًا نقطة
              مقارنة مناسبة، لكن التنظيم لا يلغي مخاطر السوق أو الحفظ.
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

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              <strong>إخلاء مسؤولية:</strong> هذا المحتوى تعليمي فقط ولا
              يمثل استشارة مالية أو قانونية أو ضريبية. قد تتغير أنظمة
              البحرين وترخيص مصرف البحرين المركزي وطرق الدفع وتوفر المنصات
              والمعالجة الضريبية. تحقق من أحدث المعلومات لدى مصرف البحرين
              المركزي والجهاز الوطني للإيرادات قبل الإيداع أو التداول أو
              تشغيل نشاط متعلق بالأصول الرقمية. بعض الروابط قد تكون روابط
              تابعة.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}