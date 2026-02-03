import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./OurServices.css";

const services = [
  {
    id: "implants",
    icon: MedicalServicesIcon,
    title: "زراعة الأسنان",
    description:
      "تعويض الأسنان المفقودة بأحدث التقنيات الألمانية لضمان ديمومة وجمالية طبيعية.",
  },
  {
    id: "cosmetic",
    icon: AutoAwesomeIcon,
    title: "تجميل الأسنان",
    description:
      "ابتسامة هوليوود، القشور الخزفية (فينير) وتبييض الأسنان بالليزر للحصول على مظهر مثالي.",
  },
  {
    id: "ortho",
    icon: CompareArrowsIcon,
    title: "تقويم الأسنان",
    description:
      "تقويم الأسنان التقليدي والشفاف (Invisalign) لتعديل اصطفاف الأسنان لجميع الأعمار.",
  },
];

export default function OurServices() {
  return (
    <section className="our-services" id="services">
      <div className="our-services__inner">
        <p className="our-services__subtitle">ماذا نقدم لكم</p>
        <h2 className="our-services__title">خدماتنا العلاجية والتجميلية</h2>
        <div className="our-services__grid">
          {services.map(({ id, icon, title, description }) => {
            const IconEl = icon;
            return (
              <article key={id} className="our-services__card">
                <div className="our-services__icon-wrap">
                  <IconEl className="our-services__icon" fontSize="medium" />
                </div>
                <h3 className="our-services__card-title">{title}</h3>
                <p className="our-services__card-desc">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
