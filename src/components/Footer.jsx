import { footerLinks } from "../data/footerData";

function Footer() {
  return (

    <footer id="contact" className="pt-20 pb-8">
      <div className="container-xl px-4 px-lg-5">

        <div className="row g-5 mb-5">

          <div className="col-lg-4">

            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                  fontFamily: "'Cormorant Garamond',serif",
                  color: "#080808",
                }}
              >
                CC
              </div>

              <span
                className="footer-brand-text uppercase tracking-[3px] text-[1.42rem] font-semibold"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}
              >
                Club Chefs
              </span>
            </div>

            <p
              className="footer-desc mb-8 max-w-[295px]"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.88,
              }}
            >
              A collective of the world's most celebrated culinary talents,
              curated for those who believe that great food is the highest form
              of art.
            </p>

            <div className="flex gap-2">
              {["𝕏", "IG", "FB", "YT"].map((icon) => (
                <a key={icon} href="#" className="social-icon">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <p className="eyebrow text-[0.58rem] tracking-[3px]">
              Navigation
            </p>

            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="footer-link block py-1 text-[0.78rem] transition-colors hover:text-[#D4AF37]"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="col-6 col-lg-3">
            <p className="eyebrow text-[0.58rem] tracking-[3px]">
              Get In Touch
            </p>

            {[
              ["✦", "hello@clubchefs.com"],
              ["✦", "+1 (212) 555 0198"],
              ["✦", "New York · Paris · Tokyo"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="footer-contact-row flex items-center gap-2 py-1 text-[0.79rem]"
                style={{ fontFamily: "'Poppins',sans-serif" }}
              >
                <span className="text-[0.55rem]" style={{ color: "#D4AF37" }}>
                  {icon}
                </span>
                {text}
              </div>
            ))}
          </div>

          <div className="col-lg-3">
            <p className="eyebrow text-[0.58rem] tracking-[3px]">
              Newsletter
            </p>

            <p
              className="footer-desc mb-4 text-[0.79rem]"
              style={{
                fontFamily: "'Poppins',sans-serif",
                lineHeight: 1.75,
              }}
            >
              Subscribe for recipes, chef profiles, and culinary insights
              delivered monthly.
            </p>

            <div className="flex gap-2">
              <input id="footer-input" placeholder="Your email address" />

              <button
                className="px-4 py-2 transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#B8962A)",
                  border: "none",
                  borderRadius: 2,
                  color: "#0a0a0a",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex flex-wrap justify-between items-center gap-4 pt-8">

          <p
            className="footer-copy m-0 text-[0.68rem]"
            style={{
              fontFamily: "'Poppins',sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            © 2026 Club Chefs. All rights reserved. Crafted with passion.
          </p>

          <div className="flex gap-8 flex-wrap">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="footer-copy text-[0.65rem] hover:text-[#D4AF37] transition-colors"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;