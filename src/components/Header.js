import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => (
  <motion.div
    className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg flex justify-between items-center rounded-b-lg"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 60 }}
  >
    {/* Logo or Title */}
    <h1 className="text-3xl font-extrabold text-white">DashboardX</h1>
    
    {/* Search Bar */}
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 rounded-full bg-white text-gray-700 shadow-md outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      />
      <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
    </div>
    
    {/* Icon Buttons */}
    <div className="flex items-center space-x-6 text-white">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <FaBell size={24} />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <FaUserCircle size={28} />
      </motion.div>
    </div>
  </motion.div>
);

export default Header;
