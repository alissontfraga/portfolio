import { useState, useEffect } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        {/* Brand */}
        <div className="brand">
          <h1 className="project-name">Alisson Teles Fraga</h1>
        </div>

        {/* Desktop menu */}
        <nav className="menu-desktop">
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>

          {/* Hamburger */}
          <button
            className="hamburger mobile-only"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
      </header>

      {/* Sidebar Backdrop */}
      {isOpen && (
        <div className="backdrop" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <button
            className="btn-outline"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            Fechar ✕
          </button>
        </div>
        <nav className="sidebar-menu">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>

        </nav>
      </aside>  
    </div>
  );
}
