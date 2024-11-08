import React from 'react';
import { motion } from 'framer-motion';

const Table = () => {
  const data = [
    { state: 'Maharashtra', population: 123, gdp: '14.1%', internet: '82%' },
    { state: 'Uttar Pradesh', population: 199, gdp: '8.9%', internet: '60%' },
    { state: 'Tamil Nadu', population: 77, gdp: '8.2%', internet: '75%' },
    { state: 'West Bengal', population: 91, gdp: '6.8%', internet: '65%' },
  ];

  return (
    <motion.div
      className="overflow-auto p-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-white text-xl font-semibold mb-4">State Demographics</h3>
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-3 px-4 text-left">State</th>
            <th className="py-3 px-4 text-left">Population (M)</th>
            <th className="py-3 px-4 text-left">GDP Contribution</th>
            <th className="py-3 px-4 text-left">Internet Users</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center text-gray-700 font-medium border-b hover:bg-gray-100">
              <td className="py-3 px-4">{row.state}</td>
              <td>{row.population}</td>
              <td>{row.gdp}</td>
              <td>{row.internet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
