import { footerLinks } from "../data/footerData"; // optional

function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 pb-8"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div className="container-xl px-4 px-lg-5">

        <div className="row g-5 mb-5">

          {/* Brand */}
          <div className="col-lg-4">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                  fontFamily: "'Cormorant Garamond',serif",
                  color: "#080808",
                }}
              >
                CC
              </div>

              <span
                className="uppercase tracking-[3px] text-[1.42rem] font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}
              >
                Club Chefs
              </span>
            </div>

            <p
              className="mb-8 max-w-[295px]"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.35)",
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

          {/* Navigation */}
          <div className="col-6 col-lg-2">
            <p className="eyebrow mb-4 text-[0.58rem] tracking-[3px]">
              Navigation
            </p>

            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-1 text-[0.78rem] transition-colors"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  color: "rgba(255,255,255,0.38)",
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="col-6 col-lg-3">
            <p className="eyebrow mb-4 text-[0.58rem] tracking-[3px]">
              Get In Touch
            </p>

            {[
              ["✦", "hello@clubchefs.com"],
              ["✦", "+1 (212) 555 0198"],
              ["✦", "New York · Paris · Tokyo"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-2 py-1 text-[0.79rem]"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                <span className="text-[0.55rem] text-[#D4AF37]">
                  {icon}
                </span>
                {text}
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="col-lg-3">
            <p className="eyebrow mb-4 text-[0.58rem] tracking-[3px]">
              Newsletter
            </p>

            <p
              className="mb-4 text-[0.79rem]"
              style={{
                fontFamily: "'Poppins',sans-serif",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.75,
              }}
            >
              Subscribe for recipes, chef profiles, and culinary insights
              delivered monthly.
            </p>

            <div className="flex gap-2">
              <input id="footer-input" placeholder="Your email address" />

              <button
                className="px-4 py-2 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg,#D4AF37,#B8962A)",
                  border: "none",
                  borderRadius: 2,
                  color: "#0a0a0a",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "1px",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-wrap justify-between items-center gap-4 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="m-0 text-[0.68rem]"
            style={{
              fontFamily: "'Poppins',sans-serif",
              color: "rgba(255,255,255,0.22)",
              letterSpacing: "0.5px",
            }}
          >
            © 2026 Club Chefs. All rights reserved. Crafted with passion.
          </p>

          <div className="flex gap-8 flex-wrap">
            {["Privacy Policy", "Terms of Use", "Cookies"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[0.65rem]"
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    color: "rgba(255,255,255,0.22)",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;