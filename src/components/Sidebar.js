import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaUsers,
  FaSignOutAlt,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaChartBar />, label: 'Analytics' },
    { icon: <FaUsers />, label: 'Users' },
    { icon: <FaCog />, label: 'Settings' },
    { icon: <FaSignOutAlt />, label: 'Logout' },
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-700 to-indigo-900 text-white shadow-lg ${
        isOpen ? 'w-64' : 'w-16'
      } p-4 overflow-hidden`}
    >
      {/* Sidebar Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 p-2 rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-500 focus:outline-none transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaArrowRight /> : <FaArrowLeft/>}
        </motion.div>
      </motion.button>

      {/* Sidebar Items */}
      <div className="mt-16 space-y-4">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-4 p-3 rounded-md cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-indigo-800 text-gray-300'
            }`}
          >
            <span
              className={`text-2xl transition-all duration-300 ${
                activeIndex === index ? 'text-white' : 'text-gray-400'
              }`}
            >
              {item.icon}
            </span>
            {isOpen && (
              <span className="text-base font-medium transition-all duration-300">
                {item.label}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
