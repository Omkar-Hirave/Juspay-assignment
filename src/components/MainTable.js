import React, { useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  Chip,
  Typography,
  Box,
  IconButton,
  Pagination,
  Stack,
  Toolbar
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  MoreHoriz as MoreHorizIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import SearchInput from './Header/SearchInput';
import SidebarIconButton from './Header/SidebarIcon';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SubtitleText from './LeftSidebar/SubtitleText';
import { searchFtn, sortFtn } from '../utility/utility';
import { orders } from '../Data/rightbarData';

export const OrderList = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({
    column: null,      // column key to sort
    direction: 'asc',  // 'asc' or 'desc'
  });

  const sidebarCommonStyles = { color: 'black' , borderRadius: 2, 
    width: 35, 
    height: 35,}
          
      
      
  const allOrders = [...orders, ...orders];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const filteredOrders = useMemo(() => {
    return searchFtn(allOrders, searchTerm);
  }, [searchTerm]);


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = allOrders.map((order) => order.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const getStatusColor = (status) => {
    const statusColors = {
      'In Progress': { bgcolor: '#E3F2FD', color: '#1976D2' },
      'Complete': { bgcolor: '#E8F5E8', color: '#2E7D32' },
      'Pending': { bgcolor: '#FFF3E0', color: '#F57C00' },
      'Approved': { bgcolor: '#FFF8E1', color: '#F9A825' },
      'Rejected': { bgcolor: '#FFEBEE', color: '#D32F2F' }
    };
    return statusColors[status] || { bgcolor: '#F5F5F5', color: '#666' };
  };


  const [displayedOrders , setDisplayedOrders] = useState(filteredOrders)

  const handleSortClick = (column) => {
    let direction = 'asc';
  
    if (sortConfig.column === column) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }
  
    const sortedOrders = sortFtn(displayedOrders, column, direction);
  
    setDisplayedOrders(sortedOrders);        
    setSortConfig({ column, direction });    
  };


  useEffect(() => {
    setDisplayedOrders(filteredOrders);
  }, [filteredOrders]);

  const ordersPerPage = 10; // Show 10 orders per page
  const paginatedOrders = useMemo(() => {
    const startIndex = (page - 1) * ordersPerPage;
    return displayedOrders.slice(startIndex, startIndex + ordersPerPage);
  }, [page, displayedOrders]);
  const pageCount = Math.ceil(displayedOrders.length / ordersPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', borderRadius: 2 }}>
      <Box sx={{ p: 3, pb: 0}}>
        <SubtitleText 
  title={"Order List"} 
/>
        
        {/* Toolbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 , bgcolor : '#f7f9fb' , padding : 0.7 , borderRadius : '8px' , mt : 3}}>
          <Box sx={{ display: 'flex', gap: 1 }}>
          <SidebarIconButton icon={<AddIcon />} sx={sidebarCommonStyles} />
             <SidebarIconButton icon={<FilterListIcon />} sx={sidebarCommonStyles} /> 
                <SidebarIconButton icon={<SwapVertIcon />} sx={sidebarCommonStyles} 
                  onClick={() => handleSortClick('status')} tooltip={"Search by Status"}
                />     
          </Box>
          
          <SearchInput placeholder = 'Search' width='200px' value={searchTerm} onChange={handleSearchChange}/>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer>
  <Table 
    sx={{ minWidth: 750 ,height : 'auto', maxHeight: '200px', overflowY: 'auto' }}
    size="medium" 
  >
    <TableHead>
      <TableRow sx={{ padding: 0 }}> {/* ✅ remove row padding */}
        <TableCell
          padding="checkbox"
          sx={{ 
            borderBottom: '1px solid #d2d2d2', 
            p: 1 ,// ✅ remove padding ,
          }}
        >
  <Checkbox
  color="primary"
  indeterminate={selected.length > 0 && selected.length < paginatedOrders.length}
  checked={paginatedOrders.length > 0 && selected.length === paginatedOrders.length}
  onChange={handleSelectAllClick}
  sx={{
    p: 0.5,
    '&.MuiCheckbox-root': {
      padding: 0,
      margin: 0,
    },
    // Hide the default checkbox completely
    '& .MuiSvgIcon-root': {
      display: 'none',
    },
    // Create our custom checkbox
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: 16,
                      height: 16,
      borderRadius: '3px',
      border: '1.5px solid #D1D5DB',
      backgroundColor: 'transparent',
    },
    // Checked state - BLACK checkmark on WHITE background
    '&.Mui-checked:before': {
      backgroundColor: '#1C1C1C', // BLACK background
      borderColor: '#1C1C1C',
      // WHITE checkmark
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffffff\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/%3E%3C/svg%3E")',
      backgroundSize: '16px 16px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    // Indeterminate state - BLACK minus on WHITE background
    '&.MuiCheckbox-indeterminate:before': {
      backgroundColor: '#1C1C1C', // BLACK background
      borderColor: '#1C1C1C',
      // WHITE minus line
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffffff\'%3E%3Cpath d=\'M19 13H5v-2h14v2z\'/%3E%3C/svg%3E")',
      backgroundSize: '16px 16px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    // Hover state
    '&:hover:before': {
      borderColor: '#1C1C1C',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    // Hover state for checked checkbox
    '&.Mui-checked:hover:before': {
      backgroundColor: '#1C1C1C', // Keep black background on hover
      opacity: 0.9, // Slightly lighter on hover
    },
    // Hover state for indeterminate checkbox
    '&.MuiCheckbox-indeterminate:hover:before': {
      backgroundColor: '#1C1C1C', // Keep black background on hover
      opacity: 0.9, // Slightly lighter on hover
    },
  }}
/>
        </TableCell>
        <TableCell 
          sx={{ 
            borderBottom: '1px solid #d2d2d2', 
            color: '#6C757D', 
            fontWeight: 400,
            p: 0 // ✅ remove cell padding
          }}
        >
          Order ID
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', color: '#6C757D', fontWeight: 400, p: 0 }}>
          User
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', color: '#6C757D', fontWeight: 400, p: 0 }}>
          Project
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', color: '#6C757D', fontWeight: 400, p: 0 }}>
          Address
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', color: '#6C757D', fontWeight: 400, p: 0 }}>
          Date
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', color: '#6C757D', fontWeight: 400, p: 0 }}>
          Status
        </TableCell>
        <TableCell sx={{ fontSize : "14px",borderBottom: '1px solid #d2d2d2', p: 0 }}></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {paginatedOrders.map((order, index) => {
        const isItemSelected = isSelected(order.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, order.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={`${order.id}-${index}`}
            selected={isItemSelected}
            sx={{ 
              cursor: 'pointer',
              padding: 1, // ✅ remove row padding
              '&.Mui-selected': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
              },
            }}
          >
            <TableCell padding="checkbox" sx={{ p: 1 ,borderBottom : '1px solid #f3f3f3' }}>
              <Checkbox
                color="primary"
                checked={isItemSelected}
                sx={{
                    p: 0.5,
                    '&.MuiCheckbox-root': {
                      padding: 0,
                      margin: 0,
                    },
                    // Hide the default checkbox completely
                    '& .MuiSvgIcon-root': {
                      display: 'none',
                    },
                    // Create our custom checkbox
                    '&:before': {
                      content: '""',
                      display: 'inline-block',
                      width: 16,
                      height: 16,
                      borderRadius: '3px',
                      border: '1.5px solid #D1D5DB',
                      backgroundColor: 'transparent',
                    },
                    // Checked state - BLACK checkmark on WHITE background
                    '&.Mui-checked:before': {
                      backgroundColor: '#1C1C1C', // BLACK background
                      borderColor: '#1C1C1C',
                      // WHITE checkmark
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffffff\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/%3E%3C/svg%3E")',
                      backgroundSize: '16px 16px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    },
                    // Indeterminate state - BLACK minus on WHITE background
                    '&.MuiCheckbox-indeterminate:before': {
                      backgroundColor: '#1C1C1C', // BLACK background
                      borderColor: '#1C1C1C',
                      // WHITE minus line
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffffff\'%3E%3Cpath d=\'M19 13H5v-2h14v2z\'/%3E%3C/svg%3E")',
                      backgroundSize: '16px 16px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    },
                    // Hover state
                    '&:hover:before': {
                      borderColor: '#1C1C1C',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    // Hover state for checked checkbox
                    '&.Mui-checked:hover:before': {
                      backgroundColor: '#1C1C1C', // Keep black background on hover
                      opacity: 0.9, // Slightly lighter on hover
                    },
                    // Hover state for indeterminate checkbox
                    '&.MuiCheckbox-indeterminate:hover:before': {
                      backgroundColor: '#1C1C1C', // Keep black background on hover
                      opacity: 0.9, // Slightly lighter on hover
                    },
                  }}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: 500, color: '#212529', p: 1 , borderBottom : '1px solid #f3f3f3' }}>
              {order.id}
            </TableCell>
            <TableCell sx={{ p: 1 ,  borderBottom : '1px solid #f3f3f3'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
      src={order.user.avatar} // use the URL
      alt={order.user.name}
      sx={{ width: 20, height: 20, bgcolor: '#E3F2FD', color: '#1976D2', fontSize: '14px' }}
      // adjust size as needed
    />
                <Typography sx={{ fontSize : '14px', fontWeight: 400, color: '#212529' }}>
                  {order.user.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#1C1C1C', p: 0 , borderBottom : '1px solid #f3f3f3'}}>
              {order.project}
            </TableCell>
            <TableCell sx={{ color: '#1C1C1C', fontSize : '13px', p: 0 , borderBottom : '1px solid #f3f3f3' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {order.address}
                {order.id === '#CM9805' && (
                  <LocationIcon sx={{ fontSize: 16, color: '#6C757D' }} />
                )}
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#1C1C1C', p: 0 , borderBottom : '1px solid #f3f3f3'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarIcon sx={{ fontSize: 16, color: '#6C757D' }} />
                {order.date}
              </Box>
            </TableCell>
            <TableCell sx={{ p: 0 , borderBottom : '1px solid #f3f3f3'}}>
              <Chip
                label={order.status}
                size="small"
                sx={{
                  ...getStatusColor(order.status),
                  fontWeight: 500,
                  fontSize: '12px',
                  height: 24,
                  borderRadius: 6,
                  m: 0, // ✅ no chip margin
                }}
              />
            </TableCell>
            <TableCell sx={{ p: 0 , borderBottom : '1px solid #f3f3f3'}}>
              <IconButton size="small" sx={{ p: 0 }}> {/* ✅ no padding */}
                <MoreHorizIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</TableContainer>


      {/* Pagination */}
      <Box sx={{ width:'100%',display: 'flex', justifyContent: 'flex-end', p: 3 }}>
      {paginatedOrders.length !== 0 && (<Pagination 
  page={page} 
  onChange={handlePageChange}
  count={pageCount} // CHANGE: dynamic page count
  color="grey"
  sx={{
    '& .MuiPaginationItem-root': {
      borderRadius: 1,
      minWidth: 32,
      height: 32,
      margin: '0 4px',
    },
    '& .MuiPaginationItem-firstLast': {
      // More pronounced first/last buttons
      minWidth: 48,
      height: 48,
      fontSize: '1.2rem',
      fontWeight: 600,
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      }
    },
    '& .MuiPaginationItem-previousNext': {
      // Style previous/next buttons differently if desired
      minWidth: 36,
      height: 36,
    }
  }}
/>)}
      </Box>
    </Box>
  );
};

export default OrderList;

