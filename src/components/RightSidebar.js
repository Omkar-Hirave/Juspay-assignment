import { Box,  List, Avatar, ListItem, ListItemText } from '@mui/material';

import React from 'react';

import { motion } from 'framer-motion';
import { activities, contacts, notifications } from '../Data/rightbarData';
import SubtitleText from './LeftSidebar/SubtitleText';


const SidebarItem = ({ item, type, index }) => {
  const motionProps = {
    transition: { type: 'spring', stiffness: 300 }
  };

  if (type === 'notification') {
    return (
      <ListItem component={motion.li} {...motionProps} sx={{ px: 0, py: 0.5 }}>
        <Box sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          bgcolor: 'rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 1.5
        }}>
          {item.icon}
        </Box>
        <ListItemText
          primary={item.text}
          secondary={item.time}
          primaryTypographyProps={{ fontSize: 13 }}
          secondaryTypographyProps={{ fontSize: 11, color: '#9ca3af' }}
        />
      </ListItem>
    );
  }

  if (type === 'activity') {
    return (
      <ListItem component={motion.li} {...motionProps} sx={{ px: 0, py: 0.5 }}>
        <motion.div
          animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
          style={{ marginRight: 8 }}
        >
          <Avatar src={item.avatar} sx={{ width: 28, height: 28 }} />
        </motion.div>
        <ListItemText
          primary={item.text}
          secondary={item.time}
          primaryTypographyProps={{ fontSize: 13 }}
          secondaryTypographyProps={{ fontSize: 11, color: '#9ca3af' }}
        />
      </ListItem>
    );
  }

  if (type === 'contact') {
    return (
      <ListItem component={motion.li} {...motionProps} sx={{ px: 0, py: 0.8 }}>
        <Avatar src={item.avatar} sx={{ width: 28, height: 28, mr: 1.5 }} />
        <ListItemText
          primary={item.name}
          primaryTypographyProps={{ fontSize: 13 }}
        />
      </ListItem>
    );
  }
};

// Generic Sidebar Section
const SidebarSection = ({ title, items, type }) => (
  <Box sx={{ mb: 2 }}>
    <SubtitleText 
  title={title} 
/>
    <List sx={{ p: 0 }}>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} type={type} index={index} />
      ))}
    </List>
  </Box>
);

const RightSidebar = () => {
  return (
    <Box sx={{
      width: 280,
      height: '100%',
      overflowY: 'auto',
      p: 2,
      bgcolor: 'white',
      borderLeft: '1px solid #f0f0f0'
    }}>
      <SidebarSection title="Notifications" items={notifications} type="notification" />
      <SidebarSection title="Activities" items={activities} type="activity" />
      <SidebarSection title="Contacts" items={contacts} type="contact" />
    </Box>
  );
};

export default RightSidebar;
