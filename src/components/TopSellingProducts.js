import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';

import React from 'react';

import { motion } from 'framer-motion';

const TopSellingProducts = () => {
  const theme = useTheme();

  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ p: 3, height: '100%' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 3
            }}
          >
            Top Selling Products
          </Typography>
          
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ 
                    fontWeight: 600, 
                    color: theme.palette.text.secondary,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                    py: 2
                  }}>
                    Name
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    fontWeight: 600, 
                    color: theme.palette.text.secondary,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                    py: 2
                  }}>
                    Price
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    fontWeight: 600, 
                    color: theme.palette.text.secondary,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                    py: 2
                  }}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    fontWeight: 600, 
                    color: theme.palette.text.secondary,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                    py: 2
                  }}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      backgroundColor: theme.palette.grey[50],
                      transition: { duration: 0.2 }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <TableCell 
                      component="th" 
                      scope="row"
                      sx={{ 
                        borderBottom: `1px solid ${theme.palette.grey[100]}`,
                        py: 2
                      }}
                    >
                      <Typography variant="body2" sx={{ 
                        color: theme.palette.text.primary,
                        fontWeight: 500
                      }}>
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell 
                      align="right"
                      sx={{ 
                        borderBottom: `1px solid ${theme.palette.grey[100]}`,
                        py: 2
                      }}
                    >
                      <Typography variant="body2" sx={{ 
                        color: theme.palette.text.secondary
                      }}>
                        {product.price}
                      </Typography>
                    </TableCell>
                    <TableCell 
                      align="right"
                      sx={{ 
                        borderBottom: `1px solid ${theme.palette.grey[100]}`,
                        py: 2
                      }}
                    >
                      <Typography variant="body2" sx={{ 
                        color: theme.palette.text.secondary
                      }}>
                        {product.quantity}
                      </Typography>
                    </TableCell>
                    <TableCell 
                      align="right"
                      sx={{ 
                        borderBottom: `1px solid ${theme.palette.grey[100]}`,
                        py: 2
                      }}
                    >
                      <Typography variant="body2" sx={{ 
                        color: theme.palette.text.primary,
                        fontWeight: 600
                      }}>
                        {product.amount}
                      </Typography>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TopSellingProducts;
