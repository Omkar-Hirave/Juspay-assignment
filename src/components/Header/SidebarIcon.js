import React from 'react';
import { IconButton, Tooltip } from '@mui/material';

const SidebarIconButton = ({ icon, onClick, sx = {}, tooltip }) => {
  const button = (
    <IconButton
      onClick={onClick}
      sx={{
        width: 36,
        height: 36,
        color: '#666',
        '&:hover': { bgcolor: '#f3f4f6' },
        ...sx,
      }}
    >
      {React.cloneElement(icon, { sx: { fontSize: 18 } })}
    </IconButton>
  );

  if (tooltip) {
    return <Tooltip title={tooltip}>{button}</Tooltip>;
  }

  return button;
};

export default SidebarIconButton;
