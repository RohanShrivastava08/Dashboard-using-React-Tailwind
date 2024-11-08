import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaDollarSign, FaChartLine, FaSignInAlt } from 'react-icons/fa';

const stats = [
  { title: 'Total Users', value: '24.5K', color: 'bg-blue-500', icon: <FaUserAlt /> },
  { title: 'Revenue', value: '$54,300', color: 'bg-green-500', icon: <FaDollarSign /> },
  { title: 'Active Sessions', value: '1,200', color: 'bg-purple-500', icon: <FaChartLine /> },
  { title: 'New Signups', value: '320', color: 'bg-pink-500', icon: <FaSignInAlt /> },
];

const StatCards = () => (
  <div className="grid grid-cols-4 gap-4 mb-6">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className={`p-6 text-white rounded-lg shadow-xl flex items-center space-x-4 ${stat.color}`}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-3xl">{stat.icon}</div>
        <div>
          <h4 className="text-lg font-semibold">{stat.title}</h4>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default StatCards;
