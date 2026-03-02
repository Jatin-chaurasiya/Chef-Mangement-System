import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ThemeContext = createContext();


export const DARK = {
  mode: "dark",

  bg:           "#080808",
  bgAlt:        "#0d0d0d",
  surface:      "#131313",
  surfaceAlt:   "#1a1a1a",

  text:         "#F5F0E8",
  textSub:      "rgba(245,240,232,0.6)",
  textMuted:    "rgba(245,240,232,0.28)",

  border:       "rgba(255,255,255,0.07)",
  borderMid:    "rgba(255,255,255,0.14)",

  gold:         "#D4AF37",

  navScrollBg:      "rgba(8,8,8,0.92)",
  navScrollBorder:  "rgba(212,175,55,0.12)",

  toggleBg:     "rgba(255,255,255,0.08)",
  toggleBorder: "rgba(255,255,255,0.18)",
  toggleColor:  "rgba(245,240,232,0.75)",

  inputBg:      "rgba(255,255,255,0.05)",
  inputBorder:  "rgba(255,255,255,0.12)",

  cardBg:       "#131313",
  cardBorder:   "rgba(255,255,255,0.06)",

  modalBg:      "#131313",
  modalOverlay: "rgba(0,0,0,0.9)",
};

export const LIGHT = {
  mode: "light",

  bg:           "#F5F0E8",
  bgAlt:        "#EDE8DF",
  surface:      "#FFFFFF",
  surfaceAlt:   "#F9F6F1",

  text:         "#0F0C08",
  textSub:      "rgba(15,12,8,0.58)",
  textMuted:    "rgba(15,12,8,0.35)",

  border:       "rgba(0,0,0,0.09)",
  borderMid:    "rgba(0,0,0,0.15)",

  gold:         "#D4AF37",

  navScrollBg:      "rgba(245,240,232,0.94)",
  navScrollBorder:  "rgba(212,175,55,0.25)",

  toggleBg:     "rgba(0,0,0,0.07)",
  toggleBorder: "rgba(0,0,0,0.15)",
  toggleColor:  "rgba(15,12,8,0.65)",

  inputBg:      "rgba(0,0,0,0.04)",
  inputBorder:  "rgba(0,0,0,0.14)",

  cardBg:       "#FFFFFF",
  cardBorder:   "rgba(0,0,0,0.08)",

  modalBg:      "#FFFFFF",
  modalOverlay: "rgba(15,12,8,0.82)",
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DARK);

  useEffect(() => {
    const saved = localStorage.getItem("cc-theme");
    if (saved === "light") setTheme(LIGHT);
    else if (saved === "dark") setTheme(DARK);
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? DARK : LIGHT);
    }
  }, []);

  useEffect(() => {
    const t = theme;
    const root = document.documentElement;

    root.setAttribute("data-theme", t.mode);

    root.style.setProperty("--bg",                t.bg);
    root.style.setProperty("--bg-alt",            t.bgAlt);
    root.style.setProperty("--surface",           t.surface);
    root.style.setProperty("--surface-alt",       t.surfaceAlt);
    root.style.setProperty("--text",              t.text);
    root.style.setProperty("--text-sub",          t.textSub);
    root.style.setProperty("--text-muted",        t.textMuted);
    root.style.setProperty("--border",            t.border);
    root.style.setProperty("--border-mid",        t.borderMid);
    root.style.setProperty("--gold",              t.gold);
    root.style.setProperty("--input-bg",          t.inputBg);
    root.style.setProperty("--input-border",      t.inputBorder);
    root.style.setProperty("--card-bg",           t.cardBg);
    root.style.setProperty("--card-border",       t.cardBorder);
    root.style.setProperty("--modal-bg",          t.modalBg);
    root.style.setProperty("--nav-scroll-bg",     t.navScrollBg);
    root.style.setProperty("--nav-scroll-border", t.navScrollBorder);

    document.body.style.background  = t.bg;
    document.body.style.color       = t.text;
    document.body.style.transition  = "background 0.45s ease, color 0.45s ease";

    localStorage.setItem("cc-theme", t.mode);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev.mode === "dark" ? LIGHT : DARK));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);