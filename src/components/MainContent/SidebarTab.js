import React from 'react';
import { Typography } from '@mui/material';

const SidebarTab = ({ label, active = false, onClick }) => {
  return (
    <Typography
      sx={{
        color: active ? '#000000' : '#9ca3af',
        fontWeight: active ? 500 : 400,
        fontSize: '13px',
        cursor: 'pointer',
        paddingBottom: '4px',
        textTransform: 'none',
      }}
      onClick={onClick}
    >
      {label}
    </Typography>
  );
};

export default SidebarTab;
