import "./AboutDoctor.css";

const doctorImage =
  "https://thumbs.dreamstime.com/b/male-dentist-doctor-dental-clinic-portrait-male-dentist-doctor-dental-clinic-portrait-happy-dentistry-doctor-wearing-115999694.jpg";
// "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80";

export default function AboutDoctor() {
  return (
    <section className="about-doctor" id="about">
      <div className="about-doctor__inner">
        <div className="about-doctor__image-wrap">
          <img
            src={doctorImage}
            alt="د. أحمد إدريس"
            className="about-doctor__image"
          />
        </div>
        <div className="about-doctor__content">
          <p className="about-doctor__heading">
            <span>عن الدكتور</span>
            <span className="about-doctor__heading-sep"> · </span>
            <span>خلفية طبية متميزة</span>
          </p>
          <h3 className="about-doctor__name">د. أحمد إدريس</h3>
          <p className="about-doctor__specialty">
            أخصائي جراحة وزراعة الأسنان وتجميلها
          </p>
          <p className="about-doctor__bio">
            حاصل على البورد العربي في جراحة وزراعة الأسنان، وزميل الجمعية
            العالمية لزراعة الأسنان (ICOI). نكرس جهدنا لتوفير تجربة علاجية مريحة
            وخالية من الألم باستخدام أحدث التقنيات الرقمية.
          </p>
          <div className="about-doctor__stats">
            <div className="about-doctor__stat">
              <span className="about-doctor__stat-number">15+</span>
              <span className="about-doctor__stat-label">سنة خبرة</span>
            </div>
            <div className="about-doctor__stat">
              <span className="about-doctor__stat-number">5000+</span>
              <span className="about-doctor__stat-label">حالة ناجحة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
