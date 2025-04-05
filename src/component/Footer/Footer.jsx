import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container mx-auto md:px-4">
      <footer className="bg-white text-gray-900 py-10 rounded-lg shadow-md px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-violet-500 via-purple-500 to-orange-400 text-transparent bg-clip-text tracking-wide transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]"
            >
              Datalyst
            </Link>

            <p className="text-sm mt-2 text-gray-700">
              Empowering Businesses with Data-Driven Insights & CRM
              Optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-orange-500 ${
                        isActive
                          ? "text-orange-500 font-semibold"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
            <div className="mt-3 space-y-3 text-gray-700">
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-red-600" /> contact@company.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-green-600" /> +123 456 7890
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-blue-600" /> 123 Street,
                City, Country
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="#"
                className="text-[#1DA1F2] hover:text-blue-600 text-2xl transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[#E1306C] hover:text-pink-700 text-2xl transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-[#0077B5] hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-300 pt-4 text-gray-700">
          &copy; {new Date().getFullYear()} Datalyst. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
