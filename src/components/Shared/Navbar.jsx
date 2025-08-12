import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import NetflixButton from "../NetflixButton";

const navLinks = [
  { name: "Home", path: "home" },
  { name: "Projects", path: "projects" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Contact", path: "contact" },
  { name: "Education", path: "experience" },
];

export default function CyberpunkNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className="
          sticky top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-lg border-b border-orange-200/40
          px-6 py-4
          flex items-center justify-between flex-wrap
          min-h-[64px]
        "
      >
        {/* Large screens: logo left, nav center, button right */}
        <div className="hidden lg:flex items-center flex-grow">
          <div className="text-3xl font-bold tracking-widest prime-color flex-shrink-0">
            RAFI▒░
          </div>

          <nav className="flex flex-grow justify-center space-x-10 text-lg font-semibold">
            {navLinks.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                className="prime-color border-b-2 border-transparent hover:border-orange-300 transition-all duration-300 cursor-pointer"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <a href="/resume1.pdf" download>
              <NetflixButton></NetflixButton>
            </a>
          </div>
        </div>

        {/* Medium screens: two columns, left: logo + button spaced, right: nav links in row */}
        <div className="hidden sm:flex lg:hidden w-full max-w-screen-md mx-auto items-center justify-between">
          <div className="flex items-center space-x-6 flex-shrink-0">
            <div className="text-3xl font-bold tracking-widest prime-color">
              RAFI▒░
            </div>
           <a href="/resume1.pdf" download>
              <NetflixButton></NetflixButton>
            </a>
          </div>
          <nav className="flex space-x-6 text-lg font-semibold">
            {navLinks.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                className="prime-color border-b-2 border-transparent hover:border-orange-300 transition-all duration-300 cursor-pointer"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile: logo left + hamburger right */}
        <div className="flex items-center justify-between w-full sm:hidden">
          <div className="text-3xl font-bold tracking-widest prime-color flex-shrink-0">
            RAFI▒░
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`relative w-10 h-10 flex flex-col justify-between items-center group ${
              menuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur z-40 transition-opacity duration-700 flex flex-col items-center justify-center space-y-14 font-extrabold uppercase text-4xl tracking-widest font-[Orbitron,sans-serif] sm:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-5">
          {navLinks.map(({ name, path }, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="prime-color relative group cursor-pointer"
            >
              <span className="menu-item">{name}</span>
              <span className="menu-underline"></span>
            </Link>
          ))}
          <div>
            <a href="/resume1.pdf" download>
              <NetflixButton></NetflixButton>
            </a>
          </div>
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
