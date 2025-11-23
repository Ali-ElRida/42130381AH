import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#438cb5] text-white px-4 py-3 shadow sticky top-0 z-50 font-['JannaLt']">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT SIDE (Logo + Title) */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
          <Link to="/" className="text-2xl font-bold">Passport App</Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:opacity-80 transition">Home</Link>
          <Link to="/register" className="hover:opacity-80 transition">Register</Link>
          <Link to="/login" className="hover:opacity-80 transition">Login</Link>
          <Link to="/dashboard" className="hover:opacity-80 transition">Dashboard</Link>
          <Link to="/appointments" className="hover:opacity-80 transition">Appointments</Link>
          <Link to="/upload" className="hover:opacity-80 transition">Docs</Link>
          <Link to="/payment" className="hover:opacity-80 transition">Payments</Link>
        </div>

        {/* HAMBURGER BUTTON (Mobile Only) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#367a9d] rounded-lg p-4 space-y-4 text-lg shadow-lg animate-fadeIn">

          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Home
          </Link>

          <Link to="/register" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Register
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Login
          </Link>

          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Dashboard
          </Link>

          <Link to="/appointments" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Appointments
          </Link>

          <Link to="/upload" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Docs
          </Link>

          <Link to="/payment" onClick={() => setIsOpen(false)} className="block hover:opacity-80">
            Payments
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
