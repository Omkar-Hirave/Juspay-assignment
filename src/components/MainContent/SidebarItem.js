import React from 'react';
import { Box, Typography } from '@mui/material';

const SidebarItem = ({ label, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: '6px',
        cursor: 'pointer',
        '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          bgcolor: '#d1d5db',
          mr: 2,
          ml: 0.5,
        }}
      />
      <Typography
        sx={{
          fontSize: '14px',
          color: '#4b5563',
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default SidebarItem;
