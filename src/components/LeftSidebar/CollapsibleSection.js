import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const expandIconStyle = { fontSize: 16, color: '#9ca3af', mr: 1 };
const parentIconStyle = { fontSize: 16, color: '#6b7280', mr: 1 };

const CollapsibleSection = ({ icon, label, items = [], onClick, sx = {} }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
    if (onClick) onClick();
  };

  const renderSubItem = (item, index) => {
    const labelText = typeof item === 'string' ? item : item.label;
    const itemOnClick = typeof item === 'object' && item.onClick ? item.onClick : undefined;

    return (
      <Typography
        key={index}
        onClick={itemOnClick}
        sx={{
          fontSize: '14px',
          color: '#1C1C1C',
          fontWeight: 400,
          py: '2px',
          cursor: 'pointer',
          '&:hover': { color: '#4b5563' },
        }}
      >
        {labelText}
      </Typography>
    );
  };

  return (
    <Box>
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
          ...sx,
        }}
        onClick={handleToggle}
      >
        {expanded ? <ExpandLess sx={expandIconStyle} /> : <ExpandMore sx={{ ...expandIconStyle, transform: 'rotate(-90deg)' }} />}

        {icon && <Box sx={{ mr: 1, display: 'flex', alignItems: 'center', ...parentIconStyle }}>{icon}</Box>}

        <Typography sx={{ fontSize: '14px', color: '#1C1C1C', fontWeight: 400, lineHeight: 1.2 }}>
          {label}
        </Typography>
      </Box>

      {expanded && items.length > 0 && <Box sx={{ ml: 3, mb: 1 }}>{items.map(renderSubItem)}</Box>}
    </Box>
  );
};

export default CollapsibleSection;
