import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./ui/Button";
import navLinks from "../config/navLinks";
import logo from "../assets/logos/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] flex items-center justify-between md:border-none border border-white/10 rounded-full px-3 py-2">
      {/* Left: Logo pill */}
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 shadow-md hover:border-white/20 transition-all"
      >
        <img src={logo} alt="Nexura" className="h-6 w-auto" />
        <span className="font-semibold text-white">Nexura</span>
      </Link>

      {/* Center: Nav pill (desktop only) */}
      <nav className="hidden md:flex px-6 py-2 rounded-full bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 shadow-md">
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-sm transition-all duration-300 ${
                  isActive
                    ? "text-nexura-gradient font-semibold"
                    : "text-white hover:text-[var(--nexura-purple)]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Right: CTA pill (desktop only) - FIXED LINK HERE */}
      <div className="hidden md:block">
        <Link to="/contact">
          <Button className="rounded-full !px-5 !py-2 bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/5 hover:border-white/30 transition-all">
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Mobile: Hamburger pill */}
      <button
        className="md:hidden ml-auto px-4 py-2 bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 rounded-full shadow-md text-gray-300 hover:text-white transition"
        onClick={() => setMenuOpen((s) => !s)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-[#120717]/95 border border-white/10 shadow-lg p-4 md:hidden">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm py-2 transition ${
                    isActive ? "text-nexura-gradient font-bold" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block bg-gradient-to-r from-[var(--nexura-purple)] to-[var(--nexura-yellow)] text-white font-bold rounded-full px-5 py-3 shadow-lg"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}