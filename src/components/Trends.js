import React from 'react';
import { motion } from 'framer-motion';

const Trends = () => {
  const trends = [
    { id: 1, trend: 'E-commerce: Up by 25% this quarter' },
    { id: 2, trend: 'Social Media: Engagement up by 40%' },
    { id: 3, trend: 'EdTech: Steady user growth at 5%' },
  ];

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-4">Market Trends</h3>
      <ul className="space-y-3">
        {trends.map((trend) => (
          <li key={trend.id} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow-sm">
            {trend.trend}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Trends;
