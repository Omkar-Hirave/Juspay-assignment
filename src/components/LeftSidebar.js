import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Folder as FolderIcon,
  School as SchoolIcon,
  Article as ArticleIcon,
  ExpandMore,
  ShoppingCart as ShoppingCartIcon,
  AccountBox as AccountBoxIcon,
  Work as WorkIcon,
  PieChart as PieChartIcon,
  Chat as ChatIcon // Added missing import
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CollapsibleSection from './LeftSidebar/CollapsibleSection';
import CollapsiblePageSection from './LeftSidebar/CollapsiblePageSection';
import SidebarSectionTitle from './Heading';
import SidebarTab from './MainContent/SidebarTab';
import SidebarItem from './MainContent/SidebarItem';
import { getActiveSidebarItem, getNavigationPath } from '../utility/navigation';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { Business as BusinessIcon } from '@mui/icons-material';
import { Group as GroupIcon } from '@mui/icons-material';

const LeftSidebar = ({ open, onToggle, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedAccount, setExpandedAccount] = useState(false);
  const [expandedBlog, setExpandedBlog] = useState(false);
  const [expandedSocial, setExpandedSocial] = useState(false);
  // Determine active item based on current route
  const activeItem = getActiveSidebarItem(location.pathname);
  const [openSection, setOpenSection] = useState(true);


  const handleExpandAccount = () => {
    setExpandedAccount(!expandedAccount);
  };

  const handleExpandBlog = () => {
    setExpandedBlog(!expandedBlog);
  };

  const handleExpandSocial = () => {
    setExpandedSocial(!expandedSocial);
  };

  // Helper function to handle dashboard item clicks
  const handleDashboardItemClick = (itemName) => {
    const path = getNavigationPath(itemName);
    navigate(path);
  };

  // Helper function to get item styles based on active state

  const sidebarContent = (
    <Box sx={{ 
      width: 240, 
      height: '100vh', 
      bgcolor: '#ffffff',
      borderRight: '1px solid #1C1C1C1A',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <Box sx={{ 
        px: 2,
        py: 1.5,
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5
      }}>
        <Box sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          fontWeight: '600',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          BW
        </Box>
        <Typography sx={{ 
          color: '#000000',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: 1
        }}>
          ByeWind
        </Typography>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ 
        px: 2,
        pt: 1,
        pb: 2,
        display: 'flex',
        gap: 3
      }}>
          <SidebarTab label="Favorites" active />
          <SidebarTab label="Recently" />        
      </Box>

      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: 'auto', px: 2 }}>
        {/* Overview */}
         <SidebarItem label="Overview" onClick={() => navigate('/dashboard')} />
         <SidebarItem label="Projects" onClick={() => navigate('/orders')} />

        {/* Dashboards Section */}
        <SidebarSectionTitle title="Dashboards" />

        <CollapsiblePageSection
  label="Default"
  icon={<PieChartIcon sx={{ fontSize: 16, color: activeItem === 'default' ? '#000000' : '#6b7280' }} />}
  isActive={activeItem === 'default'}
  onClick={() => handleDashboardItemClick('default')}
/>

<CollapsiblePageSection
  label="eCommerce"
  icon={<ShoppingCartIcon sx={{ fontSize: 16, color: activeItem === 'ecommerce' ? '#000000' : '#6b7280' }} />}
  isActive={activeItem === 'ecommerce'}
  onClick={() => handleDashboardItemClick('ecommerce')}
/>

<CollapsiblePageSection
  label="Projects"
  icon={<FolderIcon sx={{ fontSize: 16, color: activeItem === 'projects' ? '#000000' : '#6b7280' }} />}
  isActive={activeItem === 'projects'}
  onClick={() => handleDashboardItemClick('projects')}
/>

<CollapsiblePageSection
  label="Online Courses"
  icon={<SchoolIcon sx={{ fontSize: 16, color: activeItem === 'courses' ? '#000000' : '#6b7280' }} />}
  isActive={activeItem === 'courses'}
  onClick={() => handleDashboardItemClick('courses')}
/>


        {/* Pages Section */}
        <SidebarSectionTitle title="Dashboards" />
        {/* User Profile */}
        <CollapsibleSection
        icon={<AccountBoxIcon sx={{ fontSize: 16, color: '#6b7280' }} />}
        label="User Profile"
        items={[
          'Overview',
          'Projects',
          'Campaigns',
          'Documents',
          'Followers',
        ]}
      />
        {/* Account */}
        <CollapsibleSection
      expandIcon={
        <ExpandMore
          sx={{ fontSize: 16, color: '#9ca3af', transform: 'rotate(-90deg)' }}
        />
      }
      icon={<AccountCircleIcon sx={{ fontSize: 16, color: '#6b7280' }} />}
      label="Account"
      onClick={handleExpandAccount}
    />

        <CollapsibleSection
      icon={<GroupIcon sx={{ fontSize: 16, color: '#6b7280' }} />}
      label="Corporate"
      onClick={handleExpandAccount}
    />

        {/* Blog */}
        <CollapsibleSection
      expandIcon={
        <ExpandMore
          sx={{ fontSize: 16, color: '#9ca3af', transform: 'rotate(-90deg)' }}
        />
      }
      icon={<ArticleIcon sx={{ fontSize: 16, color: '#6b7280' }} />}
      label="Blog"
      onClick={handleExpandBlog}
    />
        {/* Social */}
        <CollapsibleSection
      expandIcon={
        <ExpandMore
          sx={{ fontSize: 16, color: '#9ca3af', transform: 'rotate(-90deg)' }}
        />
      }
      icon={<ChatIcon sx={{ fontSize: 16, color: '#6b7280' }} />}
      label="Social"
      onClick={handleExpandSocial}
    />
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240, 
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <motion.div
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {sidebarContent}
    </motion.div>
  );
};

export default LeftSidebar;