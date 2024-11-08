import React from 'react';
import { motion } from 'framer-motion';

const ActivityFeed = () => {
  const activities = [
    { id: 1, activity: '1 hour ago: Processed 50M digital payments' },
    { id: 2, activity: '3 hours ago: Onboarded 10,000 new users' },
    { id: 3, activity: 'Today: Monthly revenue reached ₹1.2 Cr' },
  ];

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-purple-600 mb-4">Recent Activities</h3>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow-sm">
            {activity.activity}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ActivityFeed;
