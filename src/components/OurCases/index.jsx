import "./OurCases.css";
import b1 from "../../assets/b1.JPG";
import a1 from "../../assets/a1.JPG";

import b2 from "../../assets/b2.JPG";
import a2 from "../../assets/a2.JPG";

import { Link } from "react-router-dom";

const cases = [
  {
    id: "implants",
    beforeImage: b1,
    // "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    afterImage: a1,
    // "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    title: "زراعة الأسنان الرقمية",
    description: "استبدال الأسنان المفقودة بجودة فائقة.",
  },
  {
    id: "whitening",
    beforeImage: b2,
    // "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    afterImage: a2,
    // "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
    title: "تبييض الأسنان بالليزر",
    description: "جلسة واحدة لمدة 45 دقيقة فقط.",
  },
];

export default function OurCases() {
  return (
    <section className="our-cases" id="cases">
      <div className="our-cases__inner">
        <div className="our-cases__header">
          <div className="our-cases__titles">
            <p className="our-cases__subtitle">معرض الأعمال</p>
            <h2 className="our-cases__title">نتائج تتحدث عن نفسها</h2>
          </div>
          {/* <a href="#all-cases" className="our-cases__btn">
            مشاهدة جميع الحالات
          </a> */}
          <Link to="/cases" className="our-cases__btn">
            مشاهدة جميع الحالات
          </Link>
        </div>
        <div className="our-cases__grid">
          {cases.map(({ id, beforeImage, afterImage, title, description }) => (
            <article key={id} className="our-cases__card">
              <div className="our-cases__images">
                <div className="our-cases__image-block our-cases__image-block--before">
                  <img src={beforeImage} alt="قبل" />
                  <span className="our-cases__tag our-cases__tag--before">
                    قبل
                  </span>
                </div>
                <div className="our-cases__image-block our-cases__image-block--after">
                  <img src={afterImage} alt="بعد" />
                  <span className="our-cases__tag our-cases__tag--after">
                    بعد
                  </span>
                </div>
              </div>
              <div className="our-cases__card-content">
                <h3 className="our-cases__card-title">{title}</h3>
                <p className="our-cases__card-desc">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
