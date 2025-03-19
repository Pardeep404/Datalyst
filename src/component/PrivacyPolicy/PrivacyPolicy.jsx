import React from "react";
import { motion } from "framer-motion";

function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto md:px-4 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Privacy Policy</h2>
      
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h3>
        <p className="text-gray-700">
          At Datalyst, we are committed to protecting your privacy. This Privacy Policy outlines
          how we collect, use, and safeguard your information.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Data Collection Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What Data We Collect</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal information (name, email, phone)</li>
            <li>Usage data & analytics</li>
            <li>Customer interactions & preferences</li>
          </ul>
        </motion.div>

        {/* Data Usage Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Data</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>To provide and improve our services</li>
            <li>To communicate with customers</li>
            <li>To analyze trends and enhance user experience</li>
          </ul>
        </motion.div>
      </div>

      {/* Security & Contact */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 1 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mt-8"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security & Contact</h3>
        <p className="text-gray-700">
          We take data security seriously and implement measures to protect your information.
          If you have any questions, contact us at privacy@datalyst.com.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default PrivacyPolicy;