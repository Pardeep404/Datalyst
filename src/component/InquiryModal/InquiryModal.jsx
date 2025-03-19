import React, { useState, useEffect } from "react";
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "", address: "" });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("hasSeenPopup", "true"); // Store that popup has been seen
      }, 5000); // Delay of 5 seconds before showing
    
      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, []);
  

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Contact Info:", formData);
    setFormData({ name: "", email: "", message: "", phone: "", address: "" });
    setShowModal(false);
    onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-white bg-opacity-60">
      <>
        {/* Animated Background with Moving Shapes */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-300 via-indigo-200 to-teal-300 opacity-50 blur-xl"
        ></motion.div>
        
        {/* Floating Animated Shapes */}
        <motion.div 
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-24 h-24 bg-blue-400 opacity-40 rounded-full"
        ></motion.div>
        
        <motion.div 
          animate={{ x: [-15, 20, -20, 15], y: [20, -15, 15, -20] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400 opacity-40 rounded-full"
        ></motion.div>
        
        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-4 relative z-10 text-center border-2 border-indigo-400"
        >
          <button className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-all" onClick={() => { setShowModal(false); onClose(); }}>
            <FaTimes size={24} />
          </button>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form below and we'll get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border p-2 rounded-md">
              <FaUser className="text-gray-500 mr-2" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full outline-none" required />
            </div>
            <div className="flex items-center border p-2 rounded-md">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full outline-none" required />
            </div>
            <div className="flex items-center border p-2 rounded-md">
              <FaPhone className="text-gray-500 mr-2" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full outline-none" required />
            </div>
            <div className="flex items-center border p-2 rounded-md">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address" className="w-full outline-none" required />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded-md outline-none" rows="4" required></textarea>
            <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full p-3 rounded-lg shadow-md hover:opacity-90 transition-all">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </>
    </div>
  );
}

export default InquiryModal;