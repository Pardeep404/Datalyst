import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaBullseye, FaUserTie } from "react-icons/fa";

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="relative container mx-auto max-w-7xl px-4 py-10 flex flex-col items-center"
    >
      {/* Background Animation with Icons */}
      <motion.div 
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-blue-300 text-6xl opacity-30"
      >
        <FaUsers />
      </motion.div>

      <motion.div 
        animate={{ x: [-15, 20, -20, 15], y: [20, -15, 15, -20] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-green-300 text-6xl opacity-30"
      >
        <FaLightbulb />
      </motion.div>

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Who We Are Section */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaUsers className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Who We Are</h3>
          <p className="text-gray-700">
            Datalyst is a data-driven consulting firm helping businesses unlock growth through structured analytics and CRM solutions.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaLightbulb className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To bridge the gap between data insights and business success by providing tailored analytical and CRM solutions.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaBullseye className="text-5xl text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
          <div className="text-gray-700 space-y-2">
            <p>✅ Empower businesses with data-backed decision-making</p>
            <p>✅ Simplify CRM management for startups and growing businesses</p>
            <p>✅ Offer scalable and flexible data analysis solutions</p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaUserTie className="text-5xl text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
          <div className="text-gray-700 space-y-2">
            <p>👨‍💻 Data Analysts & Business Analysts</p>
            <p>📊 CRM Experts</p>
            <p>🔍 Market Researchers</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
