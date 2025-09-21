export const ROUTES = {
  DASHBOARD: '/dashboard',
  ORDERS: '/orders',
  ORDERLIST: '/orderlist',
  HOME: '/'
};

export const getPageTitle = (pathname) => {
  switch (pathname) {
    case ROUTES.ORDERS:
    case ROUTES.ORDERLIST:
      return 'Orders';
    case ROUTES.DASHBOARD:
    case ROUTES.HOME:
      return 'Dashboard';
    default:
      return 'Dashboard';
  }
};

export const getActiveSidebarItem = (pathname) => {
  switch (pathname) {
    case ROUTES.ORDERS:
    case ROUTES.ORDERLIST:
      return 'projects';
    case ROUTES.DASHBOARD:
    case ROUTES.HOME:
      return 'default';
    default:
      return 'default';
  }
};

export const getNavigationPath = (itemName) => {
  switch (itemName) {
    case 'default':
    case 'ecommerce':
    case 'courses':
      return ROUTES.DASHBOARD;
    case 'projects':
      return ROUTES.ORDERS;
    default:
      return ROUTES.DASHBOARD;
  }
};
