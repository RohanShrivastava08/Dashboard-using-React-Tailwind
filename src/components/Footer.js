import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-6">
    <div className="container mx-auto text-center space-y-4">
      {/* Footer Text */}
      <p className="text-lg font-semibold">&copy; 2024 Company Name. All rights reserved.</p>
      
      {/* Links with Hover Effect */}
      <div className="flex justify-center space-x-8">
        <motion.a
          href="#"
          className="hover:text-indigo-300 transition duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Privacy Policy
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-indigo-300 transition duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Terms of Service
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-indigo-300 transition duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.a>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <motion.a href="#" className="text-white hover:text-indigo-300 transition duration-200" whileHover={{ scale: 1.1 }}>
          <FaFacebookF size={20} />
        </motion.a>
        <motion.a href="#" className="text-white hover:text-indigo-300 transition duration-200" whileHover={{ scale: 1.1 }}>
          <FaTwitter size={20} />
        </motion.a>
        <motion.a href="#" className="text-white hover:text-indigo-300 transition duration-200" whileHover={{ scale: 1.1 }}>
          <FaLinkedinIn size={20} />
        </motion.a>
        <motion.a href="#" className="text-white hover:text-indigo-300 transition duration-200" whileHover={{ scale: 1.1 }}>
          <FaInstagram size={20} />
        </motion.a>
      </div>
    </div>
  </div>
);

export default Footer;
