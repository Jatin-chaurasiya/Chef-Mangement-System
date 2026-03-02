import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function RegisterModal() {

  const { theme } = useTheme();
  const { authPage, authError, register, closeAuth } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    document.body.style.overflow =
      authPage === "register" ? "hidden" : "";
  }, [authPage]);

  if (authPage !== "register") return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, confirm);
  };

  return (
    <div
      onClick={closeAuth}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 420,
          background: theme.surface,
          border: `1px solid ${theme.border}`,
          borderRadius: 8,
          padding: "2rem",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={closeAuth}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "transparent",
            border: "none",
            color: theme.text,
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <h3
          style={{
            marginBottom: 20,
            color: theme.text,
            fontFamily: "Cormorant Garamond",
          }}
        >
          Create Account
        </h3>

        {authError && (
          <div
            style={{
              marginBottom: 12,
              color: "#ff6b6b",
              fontSize: 14,
            }}
          >
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="auth-input"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="auth-input"
          />

          <button className="btn-gold w-full mt-3">
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default RegisterModal;