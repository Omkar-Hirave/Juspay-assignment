import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({
  placeholder = 'Search',
  shortcutKeys = [],
  width = '240px',
  sx: customSx = {},
  onChange, 
}) => {
  return (
    <Box sx={{ position: 'relative', width, ...customSx }}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        onChange={onChange}
        size="small"
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            height: '30px', // reduced height
            borderRadius: '8px',
            bgcolor: '#f8f9fa',
            border: '1px solid #e5e7eb',
            fontSize: '14px',
            '& fieldset': { border: 'none' },
            '&:hover': { bgcolor: '#f3f4f6' },
            '&.Mui-focused': {
              bgcolor: 'white',
              boxShadow: '0 0 0 2px rgba(0,0,0,0.05)',
            },
            '& input': {
              padding: '6px 12px 6px 34px', 
              fontSize: '14px',
              color: '#374151',
              '&::placeholder': {
                color: '#9ca3af',
                opacity: 1,
              },
            },
          },
        }}
      />
      <SearchIcon
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 14,
          color: '#9ca3af',
          pointerEvents: 'none',
        }}
      />
      {shortcutKeys?.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {shortcutKeys.map((key, index) => (
            <Box
              key={index}
              sx={{
                fontSize: '11px',
                color: '#9ca3af',
                bgcolor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '3px',
                px: 0.5,
                py: 0.25,
                lineHeight: 1,
              }}
            >
              {key}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchInput;
