// src/pages/AllCasesPage.jsx
import "./Allcases.css"; // تأكد من المسار الصحيح

const allCases = [
  {
    id: "case1",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    title: "زراعة الأسنان الرقمية",
    description:
      "تعويض سن مفقود مع الحصول على مظهر طبيعي يستمر مدى الحياة بتقنية رقمية.",
  },
  {
    id: "case2",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    title: "تبييض الأسنان بالليزر",
    description:
      "إزالة التصبغات العنيدة والحصول على ابتسامة ناصعة بجلسة واحدة فقط.",
  },
  {
    id: "case3",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    title: "تقويم الأسنان الشفاف",
    description:
      "تعديل اصطفاف الأسنان بطريقة غير مرئية ومريحة خلال فترة قصيرة.",
  },
  // أضف باقي الحالات اللي عندك (أو من assets)
  // مثال:
  // {
  //   id: "case4",
  //   beforeImage: b3,
  //   afterImage: a3,
  //   title: "...",
  //   description: "..."
  // },
];

export default function AllCasesPage() {
  return (
    <main className="all-cases">
      <div className="all-cases__inner">
        <div className="all-cases__header">
          <h1 className="all-cases__title">جميع حالاتنا</h1>
          <p className="all-cases__subtitle">
            مجموعة مختارة من أفضل النتائج التي حققناها لمرضانا باستخدام أحدث
            التقنيات
          </p>
        </div>

        <div className="all-cases__grid">
          {allCases.map((item) => (
            <article key={item.id} className="all-cases__card">
              <div className="all-cases__images">
                <div className="all-cases__image-block all-cases__image-block--before">
                  <img src={item.beforeImage} alt="قبل" loading="lazy" />
                  <span className="all-cases__tag all-cases__tag--before">
                    قبل
                  </span>
                </div>
                <div className="all-cases__image-block all-cases__image-block--after">
                  <img src={item.afterImage} alt="بعد" loading="lazy" />
                  <span className="all-cases__tag all-cases__tag--after">
                    بعد
                  </span>
                </div>
              </div>
              <div className="all-cases__card-content">
                <h3 className="all-cases__card-title">{item.title}</h3>
                <p className="all-cases__card-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* قسم الـ CTA في الأسفل */}
        <section className="all-cases__cta">
          <h2 className="all-cases__cta-title">
            هل ترغب في الحصول على نتائج مماثلة؟
          </h2>
          <p className="all-cases__cta-text">
            تواصل معنا للحصول على استشارة أولية مجانية أو لإجابة أي تساؤلات
            لديك.
          </p>
          <a
            href="https://wa.me/201156958788"
            target="_blank"
            className="all-cases__cta-btn"
          >
            تواصل معى الآن
          </a>
        </section>
      </div>
    </main>
  );
}
