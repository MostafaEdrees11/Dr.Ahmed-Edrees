import StarIcon from "@mui/icons-material/Star";
import "./Feedback.css";

const testimonials = [
  {
    id: "1",
    quote:
      "كانت تجربتي مع الدكتور أحمد مذهلة. لم أشعر بأي ألم أثناء عملية الزراعة والنتيجة كانت طبيعية جداً.",
    name: "محمد القحطاني",
    condition: "مريض زراعة أسنان",
  },
  {
    id: "2",
    quote:
      "أفضل عيادة أسنان زرتها على الإطلاق. الطاقم متعاون جداً والدكتور محترف للغاية ويهتم بأدق التفاصيل التجميلية.",
    name: "سارة العامري",
    condition: "مريضة تقويم",
  },
  {
    id: "3",
    quote:
      "خدمة متميزة وسرعة في المواعيد. شكراً دكتور أحمد على الابتسامة الجديدة والثقة التي منحتني إياها.",
    name: "فهد العتيبي",
    condition: "مريض تجميل اسنان",
  },
];

export default function Feedback() {
  return (
    <section className="feedback">
      <div className="feedback__inner">
        <div className="feedback__header">
          <h2 className="feedback__title">ماذا يقول مرضانا</h2>
          <div className="feedback__stars" aria-label="تقييم 5 نجوم">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="feedback__star" fontSize="small" />
            ))}
          </div>
        </div>
        <div className="feedback__grid">
          {testimonials.map(({ id, quote, name, condition }) => (
            <article key={id} className="feedback__card">
              <p className="feedback__quote">
                <span className="feedback__quote-mark">"</span>
                {quote}
                <span className="feedback__quote-mark">"</span>
              </p>
              <p className="feedback__name">{name}</p>
              <p className="feedback__condition">{condition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
