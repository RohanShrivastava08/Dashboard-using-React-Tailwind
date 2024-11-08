import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav
    className="bg-gray-200 p-4 shadow-md flex justify-between items-center"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 50 }}
  >
    <h1 className="text-lg font-semibold">Dashboard</h1>
    <div className="flex space-x-4">
      <motion.button whileHover={{ scale: 1.05 }} className="p-2 rounded bg-gray-300">
        Notifications
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} className="p-2 rounded bg-gray-300">
        Profile
      </motion.button>
    </div>
  </motion.nav>
);

export default Navbar;
