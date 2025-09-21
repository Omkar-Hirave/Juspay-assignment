import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, useTheme } from '@mui/material';

import React from 'react';

import { motion } from 'framer-motion';

import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalSalesChart = () => {
  const theme = useTheme();

  const data = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        data: [38.6, 17.3, 19.7, 6.3],
        backgroundColor: [
          theme.palette.text.primary,
          '#60A5FA',
          theme.palette.primary.main,
          theme.palette.secondary.main
        ],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Inter'
        },
        bodyFont: {
          family: 'Inter'
        },
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  const salesData = [
    { label: 'Direct', value: '$300.56', color: theme.palette.text.primary },
    { label: 'Affiliate', value: '$135.18', color: '#60A5FA' },
    { label: 'Sponsored', value: '$154.02', color: theme.palette.primary.main },
    { label: 'E-mail', value: '$48.96', color: theme.palette.secondary.main }
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
            Total Sales
          </Typography>
          
          {/* Doughnut Chart */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 200
          }}>
            <Box sx={{ width: 180, height: 180 }}>
              <Doughnut data={data} options={options} />
            </Box>
            
            {/* Center Text */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: '1.5rem'
                }}
              >
                38.6%
              </Typography>
            </Box>
          </Box>

          {/* Legend */}
          <List sx={{ p: 0, mt: 2 }}>
            {salesData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem sx={{ px: 0, py: 0.5 }}>
                  <Box sx={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: '50%', 
                    bgcolor: item.color,
                    mr: 2,
                    flexShrink: 0
                  }} />
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
                          {item.label}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontWeight: 600
                          }}
                        >
                          {item.value}
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

export default TotalSalesChart;
