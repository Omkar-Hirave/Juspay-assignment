# Routing Implementation

This document describes the routing implementation in the ByeWind dashboard application.

## Overview

The application uses React Router DOM for client-side routing, allowing users to navigate between different pages within the dashboard.

## Routes

### Available Routes

- `/` - Home page (redirects to Dashboard)
- `/dashboard` - Main dashboard with analytics and charts
- `/orders` - Order list/management page
- `/orderlist` - Alternative route for order list (same as `/orders`)

### Route Components

- **Dashboard/MainContent** (`/dashboard`, `/`) - Shows the main dashboard with:
  - Statistics cards (Customers, Orders, Revenue, Growth)
  - Charts (Projections vs Actuals, Revenue)
  - Revenue by location
  - Total sales donut chart
  - Top selling products table

- **OrderList** (`/orders`, `/orderlist`) - Shows the order management interface

## Navigation

### Sidebar Navigation

The left sidebar provides navigation between pages:

- **Overview** - Navigates to `/dashboard`
- **Projects** - Navigates to `/orders`
- **Default** - Navigates to `/dashboard`
- **eCommerce** - Navigates to `/dashboard`
- **Projects** (in Dashboards section) - Navigates to `/orders`
- **Online Courses** - Navigates to `/dashboard`

### Active State Management

The sidebar automatically highlights the active item based on the current route:
- Dashboard routes highlight "Default" or "eCommerce"
- Order routes highlight "Projects"

### Header Breadcrumb

The header breadcrumb shows the current page:
- "Dashboards / Dashboard" for dashboard pages
- "Dashboards / Orders" for order pages

## Implementation Details

### Router Setup

The router is configured in `App.js`:
```jsx
<Router>
  <Routes>
    <Route path="/*" element={<Dashboard />} />
  </Routes>
</Router>
```

### Nested Routes

Routes are nested within the Dashboard component:
```jsx
<Routes>
  <Route path="/" element={<MainContent />} />
  <Route path="/dashboard" element={<MainContent />} />
  <Route path="/orders" element={<OrderList />} />
  <Route path="/orderlist" element={<OrderList />} />
  <Route path="*" element={<MainContent />} />
</Routes>
```

### Navigation Utilities

The `src/utility/navigation.js` file provides utility functions:
- `ROUTES` - Route constants
- `getPageTitle(pathname)` - Get page title from pathname
- `getActiveSidebarItem(pathname)` - Get active sidebar item from pathname
- `getNavigationPath(itemName)` - Get navigation path from item name

## Usage Examples

### Programmatic Navigation

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/orders'); // Navigate to orders page
```

### Getting Current Route

```jsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log(location.pathname); // Current path
```

### Using Navigation Utilities

```jsx
import { getPageTitle, getActiveSidebarItem } from '../utility/navigation';

const pageTitle = getPageTitle(location.pathname);
const activeItem = getActiveSidebarItem(location.pathname);
```

## Future Enhancements

- Add more routes for different dashboard sections
- Implement route-based data loading
- Add route guards for authentication
- Implement breadcrumb navigation with clickable items
- Add route transitions and animations
