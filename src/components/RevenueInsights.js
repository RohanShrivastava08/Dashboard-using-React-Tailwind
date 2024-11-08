import React from "react";
import { motion } from "framer-motion";

const RevenueInsights = () => {
  return (
    <motion.div
      className="mt-8 p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-white text-2xl font-bold mb-4">Revenue Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue Summary Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 border-t-4 border-indigo-700"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-indigo-700 font-semibold text-lg">Total Revenue</h3>
          <p className="text-gray-800 text-2xl font-bold">₹4,50,00,000</p>
          <p className="text-green-600 mt-1 text-sm">+15% from last month</p>
        </motion.div>

        {/* Monthly Growth Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 border-t-4 border-purple-700"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-purple-700 font-semibold text-lg">Monthly Growth</h3>
          <p className="text-gray-800 text-2xl font-bold">₹38,00,000</p>
          <p className="text-green-600 mt-1 text-sm">+10% from last month</p>
        </motion.div>

        {/* Revenue by Region Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 border-t-4 border-pink-700"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-pink-700 font-semibold text-lg">Top Region</h3>
          <p className="text-gray-800 text-2xl font-bold">Mumbai, Maharashtra</p>
          <p className="text-gray-600 mt-1 text-sm">₹1,50,00,000 this month</p>
        </motion.div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Average Revenue Per User */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 border-t-4 border-green-600"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-green-600 font-semibold text-lg">Avg Revenue Per User</h3>
          <p className="text-gray-800 text-2xl font-bold">₹2,000</p>
          <p className="text-blue-600 mt-1 text-sm">+8% from last month</p>
        </motion.div>

        {/* Revenue by Product Category */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-blue-600 font-semibold text-lg">Top Product Category</h3>
          <p className="text-gray-800 text-2xl font-bold">Electronics</p>
          <p className="text-gray-600 mt-1 text-sm">₹75,00,000 this month</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevenueInsights;
