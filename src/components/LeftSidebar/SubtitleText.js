import React from 'react';
import { Typography } from '@mui/material';

const SubtitleText = ({ title, sx = {} }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        mb: 1,
        fontWeight: 600,
        fontSize: 15,
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};

export default SubtitleText;
