import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import image3 from "../assets/images/image-3.jpg";

function LoginModal() {

  const { theme } = useTheme();
  const { authPage, authError, login, openRegister, closeAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = authPage === "login" ? "hidden" : "";
  }, [authPage]);

  if (authPage !== "login") return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    login(email, password);
    setLoading(false);
  };

  return (
    <div
      onClick={closeAuth}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99990,
        background: theme.modalOverlay,
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 960,
          borderRadius: 10,
          overflow: "hidden",
          animation: "slideUp 0.45s cubic-bezier(.22,.68,0,1.1) both",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
      >

        <div
          className="d-none d-lg-flex"
          style={{
            flex: "0 0 45%",
            position: "relative",
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(0,0,0,0.82),rgba(0,0,0,0.5))",
            }}
          />

          <div style={{ position: "relative", padding: "3rem" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "2.6rem",
                color: "#fff",
                fontWeight: 300,
              }}
            >
              Welcome<br />
              <em style={{ color: "#D4AF37" }}>Back.</em>
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          style={{
            flex: 1,
            background: theme.modalBg,
            padding: "clamp(2rem,5vw,3rem)",
            position: "relative",
          }}
        >
          {/* Close */}
          <button
            onClick={closeAuth}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(128,128,128,0.12)",
              border: `1px solid ${theme.borderMid}`,
              color: theme.text,
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <p className="eyebrow">Member Access</p>

          <h3
            className="serif"
            style={{
              fontSize: "2.2rem",
              color: theme.text,
              marginBottom: "0.3rem",
            }}
          >
            Sign In
          </h3>

          <p
            style={{
              fontSize: "0.8rem",
              color: theme.textSub,
              marginBottom: "2rem",
            }}
          >
            New here?{" "}
            <button
              onClick={openRegister}
              style={{
                background: "none",
                border: "none",
                color: "#D4AF37",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Create account
            </button>
          </p>

          {authError && (
            <div
              style={{
                padding: "10px",
                marginBottom: "1rem",
                background: "rgba(224,85,85,0.1)",
                border: "1px solid rgba(224,85,85,0.3)",
                color: "#e05555",
                fontSize: "0.8rem",
              }}
            >
              ⚠ {authError}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <input
                className="auth-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: theme.inputBg,
                  borderColor: theme.inputBorder,
                  color: theme.text,
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem", position: "relative" }}>
              <input
                className="auth-input"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  background: theme.inputBg,
                  borderColor: theme.inputBorder,
                  color: theme.text,
                  paddingRight: 46,
                }}
              />

              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showPass ? "🙈" : "👁"}
              </button>
            </div>

            <button className="btn-gold" style={{ width: "100%" }}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;