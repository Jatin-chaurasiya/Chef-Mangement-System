import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
          <LoginModal />
          <RegisterModal />

        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;