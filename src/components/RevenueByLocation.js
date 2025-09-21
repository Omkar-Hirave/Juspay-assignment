import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Public as WorldIcon } from '@mui/icons-material';

import React from 'react';

import { motion } from 'framer-motion';

const RevenueByLocation = () => {
  const theme = useTheme();

  const locations = [
    { city: 'New York', revenue: '72K' },
    { city: 'San Francisco', revenue: '39K' },
    { city: 'Sydney', revenue: '25K' },
    { city: 'Singapore', revenue: '61K' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 3
            }}
          >
            Revenue by Location
          </Typography>
          
          {/* World Map Placeholder */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            position: 'relative',
            minHeight: 200
          }}>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <WorldIcon 
                sx={{ 
                  fontSize: 120,
                  color: theme.palette.primary.light,
                  opacity: 0.3
                }} 
              />
            </motion.div>
            
            {/* Floating dots representing cities */}
            {[
              { top: '20%', left: '25%', color: theme.palette.primary.main },
              { top: '15%', left: '15%', color: theme.palette.secondary.main },
              { top: '60%', left: '80%', color: theme.palette.primary.light },
              { top: '40%', left: '75%', color: theme.palette.secondary.light }
            ].map((dot, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  top: dot.top,
                  left: dot.left,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: dot.color,
                  boxShadow: `0 0 0 4px ${dot.color}20`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            ))}
          </Box>

          {/* Location List */}
          <List sx={{ p: 0 }}>
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem 
                  sx={{ 
                    px: 0,
                    py: 1,
                    '&:hover': {
                      bgcolor: theme.palette.grey[50],
                      borderRadius: 1
                    }
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontWeight: 500
                          }}
                        >
                          {location.city}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontWeight: 600
                          }}
                        >
                          {location.revenue}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RevenueByLocation;
