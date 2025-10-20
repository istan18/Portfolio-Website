import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-nunito bg-gradient-to-br from-cream via-[#fffbf0] to-[#fff5e6]">
      <Navbar onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />

      <HomePage />

      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-7 right-7 w-[55px] h-[55px] rounded-full border-2 border-white text-white text-lg shadow-lg transition transform hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #ffe3bf 0%, #f3b49a 100%)",
            boxShadow: "0 6px 25px rgba(243,180,154,0.28)",
            zIndex: 1000,
          }}
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </div>
  );
}

export default App;
