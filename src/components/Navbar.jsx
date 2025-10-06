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
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 shadow-md"
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
                `text-sm transition ${
                  isActive
                    ? "text-nexura-gradient  font-semibold"
                    : "text-[rgba(255, 255, 255, 1)] hover:text-pink-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Right: CTA pill (desktop only) */}
      <div className="hidden md:block">
        <Button className="rounded-full !px-5 !py-2 bg-[#0f0d1a]/70 backdrop-blur-md border border-white/10 shadow-md">
          Contact Us
        </Button>
      </div>

      {/* Mobile: Hamburger pill */}
      <button
        className="md:hidden ml-auto px-4 py-2 bg-[#0f0d1a]/70 backdrop-blur-md  shadow-md text-gray-300 hover:text-white transition"
        onClick={() => setMenuOpen((s) => !s)}
        aria-label="Toggle menu"
      >
        ☰
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
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block btn-gradient rounded-full px-5 py-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
