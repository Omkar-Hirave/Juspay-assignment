import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  WbSunny as SunIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon,
  Menu as MenuIcon,
  Star as StarIcon,
  History as HistoryIcon
} from '@mui/icons-material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import SearchInput from './Header/SearchInput';
import SidebarIconButton from './Header/SidebarIcon';
import CustomBreadcrumb from './Header/CustomBreadcrumb';
import { getPageTitle } from '../utility/navigation';
const Header = ({ onMenuClick, isMobile }) => {
  const theme = useTheme();
  const location = useLocation();
  
  // Get page title based on current route
  const currentPageTitle = getPageTitle(location.pathname);

  return (
    <Box 
      sx={{ 
        width: '100%',
        bgcolor: 'white',
        borderBottom: '1px solid #f0f0f0',
        px: 3,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '56px'
      }}
    >
      {/* Left Side - Menu and Breadcrumb */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ p: 0.5 }}
          >
            <MenuIcon sx={{ fontSize: 20, color: '#666' }} />
          </IconButton>
        )}

        {/* Menu Icon */}
        <Box sx={{
          width: 20,
          height: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <Box sx={{
            width: 16,
            height: 16,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px'
          }}>
            <Box sx={{ width: '6px', height: '6px', bgcolor: '#666', borderRadius: '1px' }} />
            <Box sx={{ width: '6px', height: '6px', bgcolor: '#666', borderRadius: '1px' }} />
            <Box sx={{ width: '6px', height: '6px', bgcolor: '#666', borderRadius: '1px' }} />
            <Box sx={{ width: '6px', height: '6px', bgcolor: '#666', borderRadius: '1px' }} />
          </Box>
        </Box>

        {/* Star Icon */}
        <StarBorderRoundedIcon sx={{ 
          fontSize: 18, 
          color: '#666',
          cursor: 'pointer'
        }} />

        {/* Breadcrumb */}
        <CustomBreadcrumb
          items={[
            { label: 'Dashboards', onClick: () => console.log('Dashboards clicked') },
            { label: currentPageTitle, color: '#000', fontWeight: 500, onClick: () => console.log('Current page clicked') },
          ]}
        />

      </Box>

      {/* Right Side - Search and Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Search Bar */}
        <SearchInput placeholder="Search items..." shortcutKeys={['⌘', '/']} />


        {/* Action Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Sun/Theme Icon */}

          <SidebarIconButton icon={<SunIcon />}  />

          <SidebarIconButton icon={<HistoryIcon />}  />

          <SidebarIconButton icon={<NotificationsIcon />}  />

        <SidebarIconButton icon={<MoreVertIcon />}  />

        </Box>
      </Box>
    </Box>
  );
};

export default Header;