import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            ☰
          </button>
        )}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
