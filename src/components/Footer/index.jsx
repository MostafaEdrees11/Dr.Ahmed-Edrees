import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";

function ToothIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
      height="32"
      aria-hidden
    >
      <path d="M12 2C16 2 19 4 19 7L19 11C19 14 17 16 15 17L15 21C15 22 12 22.5 9 21L9 17C7 16 5 14 5 11L5 7C5 4 8 2 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            {/* <ToothIcon /> */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/connect-color/100/tooth.png"
              alt="tooth"
            />
          </span>
          <span className="footer__name">د. أحمد إدريس</span>
        </div>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=61560335867204"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="صفحة الفيسبوك"
          >
            <FacebookIcon fontSize="medium" />
          </a>
          <a
            href="https://wa.me/201156958788"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link footer__social-link--whatsapp"
            aria-label="واتساب"
          >
            <WhatsAppIcon fontSize="medium" />
          </a>
        </div>

        <div className="footer__divider" />

        <p className="footer__copyright">
          © 2026 جميع الحقوق محفوظة لعيادة الدكتور أحمد إدريس
        </p>
      </div>
    </footer>
  );
}
