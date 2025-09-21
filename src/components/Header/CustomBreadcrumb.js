import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomBreadcrumb = ({ items = [], separator = '/', sx = {} }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Typography
            sx={{
              fontSize: '14px',
              color: item.color || '#666',
              fontWeight: item.fontWeight !== undefined ? item.fontWeight : 400,
              cursor: item.onClick ? 'pointer' : 'default',
              '&:hover': item.onClick ? { textDecoration: 'underline' } : {},
            }}
            onClick={item.onClick ? () => item.onClick(item, index) : undefined}
          >
            {item.label}
          </Typography>

          {index < items.length - 1 && (
            <Typography sx={{ fontSize: '14px', color: '#666', fontWeight: 400 }}>
              {separator}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CustomBreadcrumb;
