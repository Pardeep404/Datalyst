import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaDatabase, FaLock, FaEnvelope } from "react-icons/fa";

function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Privacy Policy</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Introduction Section */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaShieldAlt className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Introduction</h3>
          <p className="text-gray-700">
            At Datalyst, we are committed to protecting your privacy. This Privacy Policy outlines
            how we collect, use, and safeguard your information.
          </p>
        </motion.div>

        {/* Data Collection Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaDatabase className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">What Data We Collect</h3>
          <ul className="text-gray-700 space-y-2">
            <li>📌 Personal information (name, email, phone)</li>
            <li>📊 Usage data & analytics</li>
            <li>📞 Customer interactions & preferences</li>
          </ul>
        </motion.div>

        {/* Data Usage Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaLock className="text-5xl text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">How We Use Your Data</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ To provide and improve our services</li>
            <li>✅ To communicate with customers</li>
            <li>✅ To analyze trends and enhance user experience</li>
          </ul>
        </motion.div>

        {/* Security & Contact */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <FaEnvelope className="text-5xl text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security & Contact</h3>
          <p className="text-gray-700">
            We take data security seriously and implement measures to protect your information.
            If you have any questions, contact us at <span className="font-semibold">privacy@datalyst.com</span>.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicy;