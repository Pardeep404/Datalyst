import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container mx-auto  md:px-4">
      <nav className="bg-gray-100 text-gray-900 py-3 rounded-lg shadow-md px-6 flex justify-between items-center">
        {/* Column 1: Logo + Company Name */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-xl font-semibold">
            Datalyst
          </a>
        </div>

        {/* Column 2: Centered Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Column 3: Inquiry Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <a
            href="/inquiry"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
          >
            <FaEnvelope className="mr-2" /> Inquiry
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button
            className="text-gray-900 text-2xl focus:outline-none mb-4"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
          <ul className="space-y-4 text-lg">
            <li>
              <Link to="/" className="block" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            {/* Inquiry Button in Mobile Menu */}
            <li>
              <a
                href="/inquiry"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700"
                onClick={toggleMenu}
              >
                <FaEnvelope className="mr-2" /> Inquiry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
