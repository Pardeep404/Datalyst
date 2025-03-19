import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container mx-auto md:px-4 ">
      <footer className="bg-gray-100 text-gray-900 py-10 rounded-lg shadow-md px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Datalyst</h2>
            <p className="text-sm mt-2 text-gray-600">
              Empowering Businesses with Data-Driven Insights & CRM Optimization
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <div className="mt-3 space-y-3 text-gray-600">
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-blue-600" />{" "}
                contact@company.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-green-600" /> +123 456 7890
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-red-600" /> 123 Street,
                City, Country
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-pink-600 hover:text-pink-800 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-400 pt-4 text-gray-600">
          &copy; {new Date().getFullYear()} Datalyst. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
