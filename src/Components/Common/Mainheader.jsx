import React, { useState } from "react";
import { Link } from "react-router-dom";
// if you prefer not to install lucide-react, replace icons with simple svg or text
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo/logo.png"; // if this fails, see notes below

const Mainheader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Defensive: ensure logo exists (if using public folder, prefer process.env.PUBLIC_URL)
  const logoSrc = logo || `${process.env.PUBLIC_URL}/logo/logo.png`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-[1000] w-full">
      <div className="flex justify-between items-center max-w-[1293px] mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Logo"
            className="h-8 sm:h-10 w-auto"
            // use React prop name srcSet if you need it: srcSet=""
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="text-[#1E88E5] hover:text-[#26A69A]">Home</Link>
          <Link to="/about" className="text-[#1E88E5]">About Us</Link>
          <Link to="/specialties" className="text-[#1E88E5]">Specialties</Link>
          <Link to="/doctors" className="text-[#1E88E5]">Find Doctor</Link>
          <Link to="/patients" className="text-[#1E88E5]">Patients</Link>
          <Link to="/contact" className="text-[#1E88E5]">Contact</Link>
          <Link
            to="/appointment"
            className="text-white py-2 px-5 rounded-md bg-[#1E88E5] hover:bg-[#1565C0]"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-[#1E88E5]"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg border-t transform transition-transform duration-200 ${
          isOpen ? "max-h-[800px]" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 text-gray-600 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">About Us</Link>
          <Link to="/specialties" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">Specialties</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">Find Doctor</Link>
          <Link to="/patients" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">Patients</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#1E88E5]">Contact</Link>
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="text-center text-white py-3 rounded-md bg-[#1E88E5]"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Mainheader;
