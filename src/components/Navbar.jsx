import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  const { theme, toggle }                       = useTheme();
  const { user, openLogin, openRegister, logout } = useAuth();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home","Our Chefs","Recipes","Favorites","News","Notes","Contact"];

  return (
    <nav
      id="navbar"
      className={`${scrolled ? "scrolled" : ""} fixed top-0 left-0 right-0 z-[9000]`}
      style={{
        background:    scrolled ? theme.navScrollBg     : "transparent",
        borderBottom:  scrolled ? `1px solid ${theme.navScrollBorder}` : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        padding:       scrolled ? "10px 0" : "18px 0",
        transition:    "all 0.45s ease",
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <div className="flex items-center justify-between">

          {/* ── LOGO ── */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                fontFamily: "'Cormorant Garamond',serif",
                color: "#080808",
                fontSize: 13,
              }}
            >
              CC
            </div>
            <span
              className="uppercase tracking-[3px] text-[1.4rem] font-semibold"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                color: theme.text,
                transition: "color 0.4s",
              }}
            >
              Club Chefs
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-5">

            <ul className="flex items-center gap-7 m-0 p-0 list-none">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="nav-link-item"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {user ? (
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.72rem",
                    color: "#D4AF37",
                    letterSpacing: "1px",
                  }}
                >
                  👤 {user.name}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded"
                  style={{
                    background: "none",
                    border: "1px solid rgba(212,175,55,0.4)",
                    color: "#D4AF37",
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.66rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 2,
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={openLogin}
                  style={{
                    background: "none",
                    border: "1px solid rgba(212,175,55,0.45)",
                    color: "#D4AF37",
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.66rem",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "8px 18px",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(212,175,55,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.background = "none"}
                >
                  Login
                </button>

                <button
                  onClick={openRegister}
                  style={{
                    background: "linear-gradient(135deg,#D4AF37,#B8962A)",
                    border: "none",
                    color: "#080808",
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.66rem",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "8px 18px",
                    borderRadius: 2,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(212,175,55,0.3)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,175,55,0.45)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(212,175,55,0.3)"; }}
                >
                  Register
                </button>
              </div>
            )}

\            <button
              onClick={toggle}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: theme.toggleBg,
                border: `1px solid ${theme.toggleBorder}`,
                color: theme.toggleColor,
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {theme.mode === "dark" ? "🌙" : "☀️"}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">

            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: theme.toggleBg,
                border: `1px solid ${theme.toggleBorder}`,
                color: theme.toggleColor,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              {theme.mode === "dark" ? "🌙" : "☀️"}
            </button>

            {!user && (
              <button
                onClick={openLogin}
                style={{
                  background: "none",
                  border: "1px solid rgba(212,175,55,0.5)",
                  color: "#D4AF37",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 2,
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            )}

            {!user && (
              <button
                onClick={openRegister}
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#B8962A)",
                  border: "none",
                  color: "#080808",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 2,
                  cursor: "pointer",
                }}
              >
                Join
              </button>
            )}

            {user && (
              <button
                onClick={logout}
                style={{
                  background: "none",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "#D4AF37",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 2,
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            )}

            <button
              className="border px-3 py-1 rounded"
              style={{
                borderColor: "rgba(212,175,55,0.45)",
                color: "#D4AF37",
                background: "none",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden mt-3 p-4 rounded"
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              animation: "fadeIn 0.25s ease",
            }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 uppercase text-[0.75rem] tracking-[2px]"
                style={{
                  color: theme.textSub,
                  textDecoration: "none",
                  fontFamily: "'Poppins',sans-serif",
                  borderBottom: `1px solid ${theme.border}`,
                  transition: "color 0.3s",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;