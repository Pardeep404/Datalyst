import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container mx-auto md:px-4 relative">
      <nav className="bg-white text-gray-900 py-3 rounded-lg shadow-md px-6 flex justify-between items-center w-full top-0 z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-violet-500 via-purple-500 to-orange-400 text-transparent bg-clip-text tracking-wide transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]"
          >
            Datalyst
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
            { name: "Privacy", path: "/privacy" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 transition duration-300 ease-in-out ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-900"
                  } hover:text-black hover:after:w-full after:w-0 after:h-[2px] after:bg-orange-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 text-2xl focus:outline-none transition-transform transform hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden z-50`}
      >
        <div className="p-6">
          <button
            className="text-gray-900 text-2xl focus:outline-none mb-4"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
          <ul className="space-y-4 text-lg">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
              { name: "Privacy", path: "/privacy" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="text-gray-900 hover:text-orange-300 transition-all duration-300 block py-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="flex justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
