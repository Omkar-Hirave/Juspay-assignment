import { Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';

import React from 'react';

import { motion } from 'framer-motion';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartsSection = () => {
  const theme = useTheme();

  // Bar Chart Data (Projections vs Actuals)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actuals',
        data: [12, 19, 15, 25, 22, 30],
        backgroundColor: '#60A5FA',
        borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: 'Projections',
        data: [15, 22, 18, 28, 25, 32],
        backgroundColor: '#7C3AED',
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: 'Inter'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Inter'
        },
        bodyFont: {
          family: 'Inter'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 12
          },
          color: theme.palette.text.secondary
        }
      },
      y: {
        beginAtZero: true,
        max: 35,
        ticks: {
          font: {
            family: 'Inter',
            size: 12
          },
          color: theme.palette.text.secondary,
          callback: function(value) {
            return value + 'M';
          }
        },
        grid: {
          color: theme.palette.grey[200]
        }
      },
    },
  };

  // Line Chart Data (Revenue)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week $58,211',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: '#1F2937',
        backgroundColor: 'rgba(31, 41, 55, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#7C3AED',
        pointHoverBorderColor: '#7C3AED',
        pointHoverBorderWidth: 3
      },
      {
        label: 'Previous Week $68,768',
        data: [15, 22, 18, 28, 25, 32],
        borderColor: '#D1D5DB',
        backgroundColor: 'rgba(209, 213, 219, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: 'Inter'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Inter'
        },
        bodyFont: {
          family: 'Inter'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 12
          },
          color: theme.palette.text.secondary
        }
      },
      y: {
        beginAtZero: true,
        max: 35,
        ticks: {
          font: {
            family: 'Inter',
            size: 12
          },
          color: theme.palette.text.secondary,
          callback: function(value) {
            return value + 'M';
          }
        },
        grid: {
          color: theme.palette.grey[200]
        }
      },
    },
  };

  return (
    <Grid container spacing={2}>
      {/* Projections vs Actuals Chart */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -2 }}
        >
          <Card sx={{ height: 400 }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Projections vs Actuals
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={barChartData} options={barChartOptions} />
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

      {/* Revenue Chart */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -2 }}
        >
          <Card sx={{ height: 400 }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Revenue
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={lineChartData} options={lineChartOptions} />
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ChartsSection;
