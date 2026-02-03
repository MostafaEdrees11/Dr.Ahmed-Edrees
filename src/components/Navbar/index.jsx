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

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
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
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/201156958788">
          <button type="button" className="navbar__cta navbar__cta--desktop">
            تواصل معى
          </button>
        </a>

        <div className="navbar__mobile-actions">
          <a href="#contact">
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

      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="إغلاق القائمة"
        >
          <div
            className="navbar__drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal
            aria-label="قائمة التنقل"
          >
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
                  onClick={() => handleLinkClick(link.id)}
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
