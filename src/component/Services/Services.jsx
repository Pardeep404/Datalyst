import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaCog } from "react-icons/fa";

function Services() {
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
        <FaDatabase />
      </motion.div>

      <motion.div 
        animate={{ x: [-15, 20, -20, 15], y: [20, -15, 15, -20] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-green-300 text-6xl opacity-30"
      >
        <FaCog />
      </motion.div>

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* DAaaS Service */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaDatabase className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analyst as a Service (DAaaS)</h3>
          <p className="text-gray-700 mb-4">
            We deploy expert data analysts to study your business, conduct market research,
            analyze operations, and provide actionable insights.
          </p>
          <div className="text-gray-700 space-y-2">
            <p>📊 Market research & competitor analysis</p>
            <p>📈 Custom dashboards & reports</p>
            <p>⚙️ Scalable and flexible solutions</p>
          </div>
        </motion.div>
        
        {/* CRMSync Service */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaCog className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">CRMSync - CRM Setup & Optimization</h3>
          <p className="text-gray-700 mb-4">
            Our team helps businesses set up, organize, and optimize CRM systems for better
            client data management and streamlined operations.
          </p>
          <div className="text-gray-700 space-y-2">
            <p>🛠️ CRM setup for startups & businesses</p>
            <p>🔗 Automated sales pipelines & lead tracking</p>
            <p>🔄 Seamless integration with existing tools</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;