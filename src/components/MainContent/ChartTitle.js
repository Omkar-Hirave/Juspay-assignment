import React from 'react';
import { Typography } from '@mui/material';

const ChartTitle = ({ title, sx = {} }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: '18px',
        color: '#1f2937',
        fontWeight: 600,
        margin: '0 0 24px 0',
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};

export default ChartTitle;
