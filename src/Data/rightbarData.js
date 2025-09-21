import React from 'react';
import { BugReport as BugIcon, PersonAdd as PersonAddIcon, Wifi as WifiIcon } from '@mui/icons-material';

// Sample Data
export const notifications = [
    { text: 'You have a bug that needs...', time: 'Just now', icon: <BugIcon sx={{ fontSize: 16, color: '#10b981' }} /> },
    { text: 'New user registered', time: '59 minutes ago', icon: <PersonAddIcon sx={{ fontSize: 16, color: '#6366f1' }} /> },
    { text: 'You have a bug that needs...', time: '12 hours ago', icon: <BugIcon sx={{ fontSize: 16, color: '#10b981' }} /> },
    { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', icon: <WifiIcon sx={{ fontSize: 16, color: '#8b5cf6' }} /> }
  ];

  export const activities = [
    { 
      text: 'You have a bug that needs...', 
      time: 'Just now', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' 
    },
    { 
      text: 'Released a new version', 
      time: '59 minutes ago', 
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face' 
    },
    { 
      text: 'Submitted a bug', 
      time: '12 hours ago', 
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face' 
    },
    { 
      text: 'Modified data in Page X', 
      time: 'Today, 11:59 AM', 
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' 
    },
    { 
      text: 'Deleted a page in Project X', 
      time: 'Feb 2, 2023', 
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face' 
    }
  ];
  


export const contacts = [
    { name: 'Natali Craig', avatar: 'https://images.unsplash.com/photo-1494790108755-2616c8584d7b?w=100&h=100&fit=crop&crop=face' },
    { name: 'Drew Cano', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { name: 'Orlando Diggs', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Andi Lane', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { name: 'Kate Morrison', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' }
  ];



  export const orders = [
    { id: '#CM9801', user: { name: 'Natali Craig', avatar: 'https://i.pravatar.cc/100?img=1' }, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: { name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/100?img=2' }, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: { name: 'Drew Cano', avatar: 'https://i.pravatar.cc/100?img=3' }, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: { name: 'Andi Lane', avatar: 'https://i.pravatar.cc/100?img=4' }, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/100?img=5' }, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    { id: '#CM9806', user: { name: 'John Doe', avatar: 'https://i.pravatar.cc/100?img=6' }, project: 'E-commerce Website', address: 'Elm St, Dallas', date: '2 hours ago', status: 'In Progress' },
    { id: '#CM9807', user: { name: 'Sarah Lee', avatar: 'https://i.pravatar.cc/100?img=7' }, project: 'Blog Redesign', address: 'Main St, Austin', date: '3 hours ago', status: 'Complete' },
    { id: '#CM9808', user: { name: 'Peter Chen', avatar: 'https://i.pravatar.cc/100?img=8' }, project: 'Social Media App', address: 'Oak Blvd, San Diego', date: '5 hours ago', status: 'Pending' },
    { id: '#CM9809', user: { name: 'Emily Carter', avatar: 'https://i.pravatar.cc/100?img=9' }, project: 'Dashboard UI', address: '6th Ave, Seattle', date: '1 day ago', status: 'Approved' },
    { id: '#CM9810', user: { name: 'David Miller', avatar: 'https://i.pravatar.cc/100?img=10' }, project: 'Landing Page', address: 'Sunset Blvd, LA', date: '1 day ago', status: 'Rejected' },
    { id: '#CM9811', user: { name: 'Megan Harris', avatar: 'https://i.pravatar.cc/100?img=11' }, project: 'Admin Panel', address: 'Park St, NYC', date: '2 days ago', status: 'In Progress' },
    { id: '#CM9812', user: { name: 'Chris Johnson', avatar: 'https://i.pravatar.cc/100?img=12' }, project: 'App Design', address: 'Broadway, Boston', date: '2 days ago', status: 'Complete' },
    { id: '#CM9813', user: { name: 'Laura Smith', avatar: 'https://i.pravatar.cc/100?img=13' }, project: 'Marketing Website', address: '2nd Ave, Chicago', date: '3 days ago', status: 'Pending' },
    { id: '#CM9814', user: { name: 'Jake White', avatar: 'https://i.pravatar.cc/100?img=14' }, project: 'Restaurant Website', address: 'Pine St, Miami', date: '3 days ago', status: 'Approved' },
    { id: '#CM9815', user: { name: 'Nina Harris', avatar: 'https://i.pravatar.cc/100?img=15' }, project: 'Educational App', address: '1st St, Atlanta', date: '4 days ago', status: 'Rejected' },
    { id: '#CM9816', user: { name: 'Sophia Martin', avatar: 'https://i.pravatar.cc/100?img=16' }, project: 'Product Landing Page', address: 'Cedar Rd, Houston', date: '5 days ago', status: 'In Progress' },
    { id: '#CM9817', user: { name: 'Oliver King', avatar: 'https://i.pravatar.cc/100?img=17' }, project: 'Business Website', address: 'Main St, Denver', date: '6 days ago', status: 'Complete' },
    { id: '#CM9818', user: { name: 'Zoe Johnson', avatar: 'https://i.pravatar.cc/100?img=18' }, project: 'Photography Portfolio', address: 'River Rd, Phoenix', date: '1 week ago', status: 'Pending' },
    { id: '#CM9819', user: { name: 'Liam Brown', avatar: 'https://i.pravatar.cc/100?img=19' }, project: 'Non-profit Website', address: '7th Ave, Portland', date: '2 weeks ago', status: 'Approved' },
    { id: '#CM9820', user: { name: 'Grace Miller', avatar: 'https://i.pravatar.cc/100?img=20' }, project: 'Real Estate Site', address: 'Maple St, Dallas', date: '2 weeks ago', status: 'Rejected' },
    { id: '#CM9821', user: { name: 'Mason Clark', avatar: 'https://i.pravatar.cc/100?img=21' }, project: 'Personal Blog', address: 'Walnut St, Austin', date: '2 weeks ago', status: 'In Progress' },
    { id: '#CM9822', user: { name: 'Ella Lewis', avatar: 'https://i.pravatar.cc/100?img=22' }, project: 'Corporate Website', address: 'Highland Dr, Salt Lake City', date: '3 weeks ago', status: 'Complete' },
    { id: '#CM9823', user: { name: 'Alexander Harris', avatar: 'https://i.pravatar.cc/100?img=23' }, project: 'Shopify Store', address: 'Elm St, NYC', date: '3 weeks ago', status: 'Pending' },
    { id: '#CM9824', user: { name: 'Madeline Walker', avatar: 'https://i.pravatar.cc/100?img=24' }, project: 'Portfolio Website', address: 'Cherry St, San Francisco', date: '1 month ago', status: 'Approved' },
    { id: '#CM9825', user: { name: 'Isaac Carter', avatar: 'https://i.pravatar.cc/100?img=25' }, project: 'Fashion Website', address: 'Lakeview St, Orlando', date: '1 month ago', status: 'Rejected' },
    { id: '#CM9826', user: { name: 'Lily Mitchell', avatar: 'https://i.pravatar.cc/100?img=26' }, project: 'Tech Blog', address: 'Springfield Ave, Cleveland', date: '2 months ago', status: 'In Progress' },
    { id: '#CM9827', user: { name: 'Gabriel Taylor', avatar: 'https://i.pravatar.cc/100?img=27' }, project: 'Fitness App', address: 'Main St, Chicago', date: '3 months ago', status: 'Complete' },
    { id: '#CM9828', user: { name: 'Victoria Garcia', avatar: 'https://i.pravatar.cc/100?img=28' }, project: 'Restaurant Website', address: 'Sunset Blvd, LA', date: '3 months ago', status: 'Pending' },
    { id: '#CM9829', user: { name: 'Ethan Green', avatar: 'https://i.pravatar.cc/100?img=29' }, project: 'Travel Blog', address: 'Baker St, London', date: '4 months ago', status: 'Approved' },
    { id: '#CM9830', user: { name: 'Chloe Johnson', avatar: 'https://i.pravatar.cc/100?img=30' }, project: 'Photography Portfolio', address: 'Cedar St, Seattle', date: '6 months ago', status: 'Rejected' }
  ];