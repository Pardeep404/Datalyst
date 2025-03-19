import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto md:px-4 py-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md h-full"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
            <form className="space-y-4">
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" className="w-full outline-none" placeholder="Your Name" required />
              </div>
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input type="email" className="w-full outline-none" placeholder="Your Email" required />
              </div>
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaPhone className="text-gray-500 mr-2" />
                <input type="text" className="w-full outline-none" placeholder="Your Phone" required />
              </div>
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaBuilding className="text-gray-500 mr-2" />
                <input type="text" className="w-full outline-none" placeholder="Company Name (Optional)" />
              </div>
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaGlobe className="text-gray-500 mr-2" />
                <input type="text" className="w-full outline-none" placeholder="Website (Optional)" />
              </div>
              <div className="flex items-center border border-gray-300 p-2 rounded-md">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input type="text" className="w-full outline-none" placeholder="Your Address" required />
              </div>
              <textarea className="w-full border border-gray-300 p-2 rounded-md outline-none" rows="4" placeholder="Your Message" required></textarea>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details & Google Map */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full flex flex-col justify-between"
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
              <p className="flex items-center text-gray-700 mb-2">
                <FaMapMarkerAlt className="text-red-600 mr-2" /> 123 Street, City, Country
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <FaPhone className="text-green-600 mr-2" /> +123 456 7890
              </p>
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="text-blue-600 mr-2" /> contact@company.com
              </p>
            </div>
            {/* Google Map */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="rounded-lg overflow-hidden shadow-md h-64"
            >
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086163!2d144.95592831550453!3d-37.81720974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775bb9cd7a4a99!2sYour%20Business%20Location!5e0!3m2!1sen!2us!4v1641234567890!5m2!1sen!2us"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;