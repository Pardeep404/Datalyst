import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import InquiryModal from "../InquiryModal/InquiryModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Auto-open modal on homepage load
  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <div className="container mx-auto md:px-4">
      <nav className="bg-gray-100 text-gray-900 py-3 rounded-lg shadow-md px-6 flex justify-between items-center">
        {/* Column 1: Logo + Company Name */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-semibold">
            Datalyst
          </Link>
        </div>

        {/* Column 2: Centered Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Inquiry Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
          >
            <FaEnvelope /> Inquiry
          </button>
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
              <NavLink
                to="/"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="flex justify-center">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  toggleMenu();
                }}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                <FaEnvelope /> Inquiry
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Header;