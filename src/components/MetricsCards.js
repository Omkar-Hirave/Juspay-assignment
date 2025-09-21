import { Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon
} from '@mui/icons-material';

import React from 'react';

import { motion } from 'framer-motion';

const MetricsCards = () => {
  const theme = useTheme();

  const metrics = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      isPositive: true,
      icon: <TrendingUpIcon />
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      isPositive: false,
      icon: <TrendingDownIcon />
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      isPositive: true,
      icon: <TrendingUpIcon />
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      isPositive: true,
      icon: <TrendingUpIcon />
    }
  ];

  return (
    <Grid container spacing={2}>
      {metrics?.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      fontWeight: 500
                    }}
                  >
                    {metric.title}
                  </Typography>
                  <Box
                    sx={{
                      color: metric.isPositive ? theme.palette.secondary.main : theme.palette.text.secondary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    {metric.icon}
                  </Box>
                </Box>
                
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    mb: 1,
                    fontSize: '2rem'
                  }}
                >
                  {metric.value}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: metric.isPositive ? theme.palette.secondary.main : theme.palette.text.secondary,
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {metric.change}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsCards;
