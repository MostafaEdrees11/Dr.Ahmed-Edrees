import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import "./ContactUs.css";

const contactInfo = [
  {
    icon: LocationOnIcon,
    label: "الموقع",
    value: "شارع التخصصي، الرياض، المملكة العربية السعودية",
  },
  {
    icon: PhoneIcon,
    label: "الهاتف",
    value: "+966 50 123 4567",
  },
  {
    icon: ScheduleIcon,
    label: "ساعات العمل",
    value: "السبت - الخميس 9:00 ص - 10:00 م",
  },
];

// رقم الواتساب الخاص بالدكتور (غير الرقم ده برقم الدكتور الحقيقي)
const DOCTOR_WHATSAPP = "201017653879";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace("contact-", "");
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من البيانات المطلوبة
    if (!formData.name || !formData.phone || !formData.service) {
      alert("من فضلك املأ جميع الحقول المطلوبة");
      return;
    }

    // الخدمات بالعربي
    const servicesMap = {
      implants: "زراعة الأسنان",
      cosmetic: "تجميل الأسنان",
      ortho: "تقويم الأسنان",
      consultation: "استشارة عامة",
      other: "أخرى",
    };

    const serviceName = servicesMap[formData.service] || formData.service;

    // تكوين الرسالة
    let whatsappMessage = `السلام عليكم ورحمة الله وبركاته\nأخبار حضرتك يا دكتور\n\nأنا ${formData.name}\nكان عندي استفسار من حضرتك عن ${serviceName}`;

    // إضافة الرسالة الإضافية إذا كانت موجودة
    if (formData.message.trim()) {
      whatsappMessage += `\n\n${formData.message}`;
    }

    // إضافة رقم الهاتف
    whatsappMessage += `\n\nرقم الهاتف: ${formData.phone}`;

    // تحويل الرسالة إلى URL encoded
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // فتح الواتساب
    const whatsappURL = `https://wa.me/${DOCTOR_WHATSAPP}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // إعادة تعيين النموذج
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contact-us__inner">
        <div className="contact-us__info-card">
          <h2 className="contact-us__info-title">معلومات التواصل</h2>
          <ul className="contact-us__info-list">
            {contactInfo.map(({ icon, label, value }) => {
              const IconComponent = icon;
              return (
                <li key={label} className="contact-us__info-item">
                  <span className="contact-us__info-icon">
                    <IconComponent fontSize="small" />
                  </span>
                  <div className="contact-us__info-text">
                    <span className="contact-us__info-label">{label}</span>
                    <span className="contact-us__info-value">{value}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact-us__form-card">
          <h2 className="contact-us__form-title">تواصل معنا</h2>
          <p className="contact-us__form-desc">
            املأ النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن
            للإجابة على جميع استفساراتك.
          </p>
          <form className="contact-us__form" onSubmit={handleSubmit} noValidate>
            <div className="contact-us__field">
              <label htmlFor="contact-name">الاسم الكامل</label>
              <input
                id="contact-name"
                type="text"
                placeholder="أدخل اسمك"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-us__field">
              <label htmlFor="contact-phone">رقم الهاتف</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="05xxxxxxxx"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-us__field">
              <label htmlFor="contact-service">الخدمة المطلوبة</label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  اختر الخدمة....
                </option>
                <option value="implants">زراعة الأسنان</option>
                <option value="cosmetic">تجميل الأسنان</option>
                <option value="ortho">تقويم الأسنان</option>
                <option value="consultation">استشارة عامة</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            <div className="contact-us__field">
              <label htmlFor="contact-message">رسالة إضافية (اختياري)</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="كيف يمكننا مساعدتك؟"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="contact-us__submit">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
