// src/components/Navbar/index.jsx
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const navLinks = [
  { label: "الرئيسية", href: "#home", id: "home" },
  { label: "عن الدكتور", href: "#about", id: "about" },
  { label: "الخدمات", href: "#services", id: "services" },
  { label: "نتائج المرضى", href: "#cases", id: "cases" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    // إغلاق القائمة في الموبايل إذا كانت مفتوحة
    setMenuOpen(false);

    // تحديث الحالة النشطة
    setActiveLink(id);

    // محاولة السكرول داخل الصفحة الحالية
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // لو القسم مش موجود (يعني إحنا في صفحة /cases مثلاً)
    // نروح للصفحة الرئيسية + نضيف الـ hash
    window.location.href = `/${
      navLinks.find((link) => link.id === id)?.href || "#home"
    }`;
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // منع السلوك الافتراضي للـ <a>
    scrollToSection(id);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* اللوجو + الاسم */}
        <div className="navbar__brand">
          <span className="navbar__logo">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/connect-color/100/tooth.png"
              alt="tooth"
            />
          </span>
          <span className="navbar__name">د. أحمد إدريس</span>
        </div>

        {/* روابط سطح المكتب */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                activeLink === link.id
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* زر التواصل - سطح المكتب */}
        <a
          href="https://wa.me/201156958788"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="navbar__cta navbar__cta--desktop">
            تواصل معى
          </button>
        </a>

        {/* أزرار الموبايل (CTA + Burger) */}
        <div className="navbar__mobile-actions">
          <a
            href="https://wa.me/201156958788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="navbar__cta navbar__cta--mobile">
              تواصل معى
            </button>
          </a>

          <button
            type="button"
            className="navbar__burger"
            onClick={() => setMenuOpen(true)}
            aria-label="فتح القائمة"
          >
            <MenuIcon fontSize="medium" />
          </button>
        </div>
      </div>

      {/* القائمة الجانبية (Drawer) للموبايل */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="إغلاق القائمة"
        >
          <div className="navbar__drawer" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="navbar__drawer-close"
              onClick={() => setMenuOpen(false)}
              aria-label="إغلاق"
            >
              <CloseIcon fontSize="medium" />
            </button>

            <nav className="navbar__drawer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={
                    activeLink === link.id
                      ? "navbar__drawer-link navbar__drawer-link--active"
                      : "navbar__drawer-link"
                  }
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
