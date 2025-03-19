import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto max-w-7xl md:px-4 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Us</h2>
      
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We Are</h3>
        <p className="text-gray-700">
          Datalyst is a data-driven consulting firm helping businesses unlock growth through
          structured analytics and CRM solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Vision Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-700">
            To bridge the gap between data insights and business success by providing tailored
            analytical and CRM solutions.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Empower businesses with data-backed decision-making</li>
            <li>Simplify CRM management for startups and growing businesses</li>
            <li>Offer scalable and flexible data analysis solutions</li>
          </ul>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 1 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mt-8"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Team</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Data Analysts & Business Analysts</li>
          <li>CRM Experts</li>
          <li>Market Researchers</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default About;
