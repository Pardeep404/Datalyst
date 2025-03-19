import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container max-w-7xl mx-auto md:px-4 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DAaaS Service */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analyst as a Service (DAaaS)</h3>
          <p className="text-gray-700 mb-4">
            We deploy expert data analysts to study your business, conduct market research,
            analyze operations, and provide actionable insights.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Market research & competitor analysis</li>
            <li>Custom dashboards & reports</li>
            <li>Scalable and flexible solutions</li>
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get a Data Analyst Today!
          </motion.button>
        </motion.div>
        
        {/* CRMSync Service */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">CRMSync - CRM Setup & Optimization</h3>
          <p className="text-gray-700 mb-4">
            Our team helps businesses set up, organize, and optimize CRM systems for better
            client data management and streamlined operations.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>CRM setup for startups & businesses</li>
            <li>Automated sales pipelines & lead tracking</li>
            <li>Seamless integration with existing tools</li>
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Optimize Your CRM Now!
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;