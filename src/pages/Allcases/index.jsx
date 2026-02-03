import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AllCases.css";

const allCases = [
  {
    id: "case1",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    title: "زراعة الأسنان الرقمية",
    description:
      "تعويض سن مفقود مع الحصول على مظهر طبيعي يستمر مدى الحياة بتقنية رقمية.",
  },
  {
    id: "case2",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
    title: "تبييض الأسنان بالليزر",
    description:
      "إزالة التصبغات العنيدة والحصول على ابتسامة ناصعة بجلسة واحدة فقط.",
  },
  {
    id: "case3",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    title: "تقويم الأسنان الشفاف",
    description:
      "تعديل اصطفاف الأسنان بطريقة غير مرئية ومريحة خلال فترة قصيرة.",
  },
  {
    id: "case4",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
    title: "ابتسامة هوليوود (فينير)",
    description:
      "تحويل شامل للابتسامة باستخدام القشور الخزفية عالية الجودة والمظهر الطبيعي.",
  },
  {
    id: "case5",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    title: "علاج اللثة وتجميلها",
    description:
      "علاج أمراض اللثة وإعادة تشكيلها للحصول على ابتسامة متناسقة وصحية.",
  },
  {
    id: "case6",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
    title: "حشوات تجميلية",
    description:
      "إصلاح الأسنان التالفة باستخدام حشوات تجميلية بلون الأسنان الطبيعية.",
  },
];

export default function AllCases() {
  return (
    <>
      <Navbar />
      <main className="all-cases" id="all-cases">
        <div className="all-cases__inner">
          <header className="all-cases__header">
            <h1 className="all-cases__title">نتائج الحالات</h1>
            <p className="all-cases__subtitle">
              نستعرض لكم بعض من نتائج التحول التي حققناها مع مرضانا الكرام.
              شهادات حقيقية تتحدث عن نفسها.
            </p>
          </header>

          <div className="all-cases__grid">
            {allCases.map(
              ({ id, beforeImage, afterImage, title, description }) => (
                <article key={id} className="all-cases__card">
                  <div className="all-cases__images">
                    <div className="all-cases__image-block">
                      <img src={beforeImage} alt="قبل العلاج" />
                      <span className="all-cases__tag all-cases__tag--before">
                        قبل
                      </span>
                    </div>
                    <div className="all-cases__image-block">
                      <img src={afterImage} alt="بعد العلاج" />
                      <span className="all-cases__tag all-cases__tag--after">
                        بعد
                      </span>
                    </div>
                  </div>
                  <div className="all-cases__card-content">
                    <h3 className="all-cases__card-title">{title}</h3>
                    <p className="all-cases__card-desc">{description}</p>
                  </div>
                </article>
              )
            )}
          </div>

          <section className="all-cases__cta">
            <h2 className="all-cases__cta-title">
              هل ترغب في الحصول على نتائج مماثلة؟
            </h2>
            <p className="all-cases__cta-text">
              تواصل معنا للحصول على استشارة أولية مجانية أو لإجابة أي تساؤلات
              لديك. نحن هنا لمساعدتك.
            </p>
            <a href="#contact" className="all-cases__cta-btn">
              تواصل معنا الآن
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
