import React from 'react';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa';

const NotificationCard = () => {
  const notifications = [
    { id: 1, message: 'India GDP growth rate revised to 7.5% for FY2023' },
    { id: 2, message: 'IT exports reach a record 150 billion USD in 2023' },
    { id: 3, message: 'Agriculture sector grows by 5.3% driven by monsoon' },
    { id: 4, message: 'Healthcare investment increased by 12% this year' },
    { id: 5, message: 'Education reforms target increased literacy rates' },
  ];

  return (
    <motion.div
      className="p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4 text-white">
        <FaBell className="text-yellow-300 mr-2 text-2xl" />
        <h3 className="text-xl font-bold">Latest Updates</h3>
      </div>
      <ul className="list-inside space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="text-white font-medium">
            • {notification.message}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NotificationCard;
