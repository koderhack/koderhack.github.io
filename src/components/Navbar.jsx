import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "O mnie", href: "#about" },
  { label: "Projekty", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-bg/70 backdrop-blur-md border-b border-cyber-accent/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-cyber-accent font-bold text-lg tracking-widest">
          Kacper Sikora
        </span>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-cyber-neon font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger button */}
        <button
          className={`md:hidden ml-2 p-2 rounded-full bg-cyber-bg/60 hover:bg-cyber-accent/20 transition
            ${menuOpen ? "transform-gpu rotate-90 scale-110" : "transform-gpu rotate-0 scale-100"}
            duration-300`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Otwórz menu"
          style={{
            perspective: "600px",
            // Możesz dodać dodatkowe efekty 3D tutaj
          }}
        >
          <span
            className={`inline-block transition-transform duration-300
              ${menuOpen ? "rotate-y-180" : "rotate-y-0"}`}
            style={{
              display: "inline-block",
              transform: menuOpen
                ? "rotateY(180deg) scale(1.1) translateZ(10px)"
                : "rotateY(0deg) scale(1) translateZ(0)",
              transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
        {/* Dark mode button */}
       
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-accent/20"
          style={{
            transform: "perspective(800px) rotateX(0deg) translateZ(0)",
            animation: "navbar3dIn 0.5s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 transition-colors duration-200 hover:text-cyber-neon font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Dodaj animację 3D do globalnego CSS (np. w tailwind.config.js lub styles/globals.css):
// @keyframes navbar3dIn {
//   from { transform: perspective(800px) rotateX(-60deg) translateZ(-80px); opacity: 0; }
//   to   { transform: perspective(800px) rotateX(0deg) translateZ(0); opacity: 1; }
// }
