import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import Header from './Header';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import OrderList from './MainTable';

// Check if we're on the mainTable route (or any route that shouldn't show the RightSidebar)
const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const { pathname } = useLocation();
  const shouldRenderRightSidebar = pathname !== '/orders';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ height: '100vh', display: 'flex', overflow: 'hidden' }}
    >
      {/* Left Sidebar */}
      <motion.div variants={itemVariants}>
        <LeftSidebar 
          open={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
        />
      </motion.div>


      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        minWidth: 0,
        transition: 'margin-left 0.3s ease',
        bgcolor : 'white'
      }}>
        {/* Header */}
        <motion.div variants={itemVariants}>
          <Header 
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            isMobile={isMobile}
          />
        </motion.div>

        {/* Main Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          overflow: 'hidden',
          gap: 2,
          p: 2
        }}>
          <motion.div 
            variants={itemVariants}
            style={{ flex: 1, minWidth: 0 }}
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/dashboard" element={<MainContent />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="*" element={<MainContent />} />
            </Routes>
          </motion.div>

          {/* Right Sidebar */}
          {!isMobile && shouldRenderRightSidebar && (
  <motion.div variants={itemVariants}>
    <RightSidebar />
  </motion.div>
)}
        </Box>
      </Box>

      {/* Bottom Action Bar */}
    </motion.div>
  );
};

export default Dashboard;

