import React from 'react';
import { Typography } from '@mui/material';

const SidebarSectionTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        color: '#9ca3af',
        fontSize: '14px',
        fontWeight: 400,
        mt: 2,
        mb: 1,
      }}
    >
      {title}
    </Typography>
  );
};

export default SidebarSectionTitle;
