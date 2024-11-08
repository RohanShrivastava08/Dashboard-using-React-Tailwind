import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart"; // Importing the BarChart component
import Table from "./Table";
import StatCards from "./StatCards";
import ActivityFeed from "./ActivityFeed";
import Trends from "./Trends";
import Header from "./Header";
import Footer from "./Footer";
import RevenueInsights from "./RevenueInsights";
import NotificationCard from "./NotificationCard"; // Importing the NotificationCard component
import { motion } from "framer-motion";

const Dashboard = () => (
  <div className="w-full flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Header />
    <motion.div
      className="p-8 flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Overview Stats */}
      <StatCards />

      {/* Notifications */}
      <div className="mt-8">
        <motion.div
          className="bg-blue-100 p-4 rounded-lg shadow-md"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <NotificationCard />
        </motion.div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:border-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <LineChart />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:border-green-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <PieChart />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:border-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <BarChart />
        </motion.div>
      </div>

      {/* Secondary Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:border-yellow-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ActivityFeed />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500 hover:border-pink-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Trends />
        </motion.div>
      </div>

      {/* Revenue Insights */}
      <RevenueInsights />

      {/* Data Table */}
      <motion.div
        className="mt-8 bg-white p-6 rounded-lg shadow-lg overflow-auto border-l-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Table />
      </motion.div>
    </motion.div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Dashboard;
