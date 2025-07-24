import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", path: "home" },
  { name: "Projects", path: "projects" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

export default function CyberpunkNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/85 border-b border-orange-200/40">
        <div className="text-3xl md:text-4xl font-bold tracking-widest prime-color">
          RAFI▒░
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-semibold">
          {navLinks.map(({ name, path }, i) => (
            <Link
              key={i}
              to={path}
              className="prime-color border-b-2 border-transparent hover:border-orange-300 transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`relative w-10 h-10 flex flex-col justify-between items-center group md:hidden ${
            menuOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur z-40 transition-opacity duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-1/2 left-1/2 bg rounded-full transition-transform duration-[1000ms] ease-in-out origin-center
          ${menuOpen ? "scale-[80] opacity-10" : "scale-0 opacity-0"}`}
          style={{ width: 200, height: 200, marginTop: -100, marginLeft: -100 }}
        ></div>

        <nav className="fixed inset-0 flex flex-col justify-center items-center space-y-14 font-extrabold uppercase text-4xl md:text-5xl tracking-widest font-[Orbitron,sans-serif]">
          {navLinks.map(({ name, path }, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="prime-color relative group"
            >
              <span className="menu-item">{name}</span>
              <span className="menu-underline"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* CSS */}
      <style>{`
        /* Hamburger Lines */
        .hamburger-line {
          width: 100%;
          height: 3px;
          background-color: #fb923c; /* orange-300 */
          border-radius: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 0 4px #fb923c, 0 0 8px #fb923c99;
        }
        button.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        button.open span:nth-child(2) {
          opacity: 0;
        }
        button.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Menu Text Hover */
        .menu-item {
          position: relative;
          display: inline-block;
          color: #fb923c; /* orange-300 */
          text-shadow: 0 0 4px #fb923caa;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .group:hover .menu-item {
          transform: skewX(-8deg) scale(1.02);
          color: #fcd34d;
          text-shadow: 0 0 4px #fcd34daa;
        }
        .menu-underline {
          display: block;
          height: 2px;
          width: 0%;
          background: #fb923c;
          margin-top: 8px;
          border-radius: 1px;
          transition: width 0.3s ease;
        }
        .group:hover .menu-underline {
          width: 100%;
        }
      `}</style>
    </>
  );
}
