import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home","Our Chefs","Recipes","Favorites","News","Notes","Contact"];

  return (
    <nav
      id="navbar"
      className={`${scrolled ? "scrolled" : ""} fixed top-0 left-0 right-0 z-[9000] transition-all duration-500`}
    >
      <div className="container-fluid px-4 px-lg-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] tracking-[0.5px]"
              style={{
                background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                fontFamily: "'Cormorant Garamond',serif",
                color: "#080808"
              }}>
              CC
            </div>

            <span
              className="uppercase tracking-[3px] text-[1.42rem] font-semibold text-white"
              style={{ fontFamily: "'Cormorant Garamond',serif" }}
            >
              Club Chefs
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-[2.2rem] m-0 p-0 list-none">
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

          {/* Mobile Toggle */}
          <button
            className="lg:hidden border px-3 py-1 rounded text-[#D4AF37]"
            style={{
              borderColor: "rgba(212,175,55,0.45)"
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden mt-3 p-4 rounded"
            style={{
              background: "rgba(8,8,8,0.97)",
              border: "1px solid rgba(212,175,55,0.14)"
            }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b text-[0.78rem] tracking-[2.5px] uppercase"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontFamily: "'Poppins',sans-serif",
                  borderBottom: "1px solid rgba(255,255,255,0.07)"
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