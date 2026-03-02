import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [authPage, setAuthPage] = useState(null); 
  const [authError, setAuthError] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("cc-user")) || null
  );

  const openRegister = () => {
    setAuthError(null);
    setAuthPage("register");
  };

  const openLogin = () => {
    setAuthError(null);
    setAuthPage("login");
  };

  const closeAuth = () => {
    setAuthPage(null);
    setAuthError(null);
  };

// Register
  const register = (name, email, password, confirm) => {

    if (!name || !email || !password) {
      setAuthError("All fields are required");
      return false;
    }

    if (password !== confirm) {
      setAuthError("Passwords do not match");
      return false;
    }

    if (password.length < 6) {
      setAuthError("Password must be at least 6 characters");
      return false;
    }

    const fakeUser = { name, email };

    setUser(fakeUser);
    localStorage.setItem("cc-user", JSON.stringify(fakeUser));
    setAuthPage(null);

    return true;
  };

// Login
  const login = (email, password) => {

    if (!email || !password) {
      setAuthError("Email and password required");
      return false;
    }

    if (password.length < 6) {
      setAuthError("Invalid credentials");
      return false;
    }

    const fakeUser = { name: "Chef", email };

    setUser(fakeUser);
    localStorage.setItem("cc-user", JSON.stringify(fakeUser));
    setAuthPage(null);

    return true;
  };
// Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("cc-user");
  };

  return (
    <AuthContext.Provider
      value={{
        authPage,
        authError,
        user,
        openRegister,
        openLogin,
        closeAuth,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);