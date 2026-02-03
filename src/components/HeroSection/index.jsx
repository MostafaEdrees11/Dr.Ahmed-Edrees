import "./HeroSection.css";

const heroImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__card">
        <div className="hero__image-wrap">
          <img
            src={heroImage}
            alt="عيادة أسنان حديثة"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="hero__slogan">نحن نهتم بابتسامتك</p>
          <h1 className="hero__title">ابتسامتك هي شغفنا ومهمتنا الأولى</h1>
          <p className="hero__text">
            نقدم أحدث الحلول الطبية لتجميل وزراعة الأسنان بخبرة تزيد عن 15 عاما
            في تقديم الرعاية الصحية المتميزة لآلاف المرضى.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              تواصل معى
            </a>
            <a href="#cases" className="hero__btn hero__btn--secondary">
              مشاهدة أعمالى
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
