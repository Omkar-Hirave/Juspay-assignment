import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CollapsiblePageSection = ({ 
  label, 
  icon, 
  isActive, 
  onClick 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: '6px',
        cursor: 'pointer',
        borderRadius: '4px',
        px: 1,
        mb: '2px',
        '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' },
        bgcolor: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
      }}
      onClick={onClick}
    >
      {!isActive && (
        <ExpandMore
          sx={{
            fontSize: 16,
            color: '#9ca3af',
            mr: 1,
            transform: 'rotate(-90deg)',
          }}
        />
      )}

      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: '14px',
          color: isActive ? '#000000' : '#4b5563',
          fontWeight: isActive ? 500 : 400,
          lineHeight: 1.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CollapsiblePageSection;
