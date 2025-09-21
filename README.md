# ByeWind Dashboard

A modern, pixel-perfect React dashboard built with Material-UI and Framer Motion, featuring a comprehensive e-commerce analytics interface.

## 🚀 Features

### Layout & Design
- **Three-column responsive layout** with collapsible sidebar
- **Pixel-perfect design** matching the provided specifications
- **Modern UI/UX** with clean typography and consistent spacing
- **Cross-browser compatible** with smooth animations

### Components
- **Left Sidebar**: Navigation with collapsible sections, active states, and user profile
- **Header Bar**: Search functionality, user avatars, and action buttons
- **Main Content Area**: 
  - Key metrics cards with trend indicators
  - Interactive charts (Bar chart for projections vs actuals, Line chart for revenue)
  - Revenue by location with animated world map
  - Top selling products table
  - Total sales donut chart
- **Right Sidebar**: Notifications, activities, and contacts list
- **Bottom Action Bar**: Quick access tools and edit functionality

### Animations & Interactions
- **Framer Motion** for smooth page transitions and micro-interactions
- **Hover effects** on cards, buttons, and interactive elements
- **Staggered animations** for list items and components
- **Scale and lift effects** for enhanced user feedback

### Responsive Design
- **Mobile-first approach** with breakpoint-based layouts
- **Collapsible sidebar** for mobile devices
- **Flexible grid system** that adapts to different screen sizes
- **Touch-friendly** interface elements

## 🛠️ Technology Stack

- **React 19.1.1** - Modern React with hooks
- **Material-UI (MUI) 5** - Component library and theming
- **Framer Motion** - Animation library
- **Chart.js** - Data visualization
- **React Chart.js 2** - React wrapper for Chart.js
- **CSS3** - Custom styles and animations

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Design System

### Color Palette
- **Primary Purple**: #7C3AED
- **Secondary Green**: #10B981
- **Background**: #F8FAFC
- **Text Primary**: #1F2937
- **Text Secondary**: #6B7280

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** with consistent line heights

### Spacing & Layout
- **8px grid system** for consistent spacing
- **12px border radius** for cards and components
- **Material Design** elevation and shadows

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implemented

### Data Visualization
- **Bar Chart**: Projections vs Actuals with dual datasets
- **Line Chart**: Revenue comparison with current vs previous week
- **Donut Chart**: Total sales breakdown by channel
- **Interactive tooltips** and legends

### User Experience
- **Smooth transitions** between states
- **Loading animations** for better perceived performance
- **Accessible design** with proper focus states
- **Keyboard navigation** support

### Performance
- **Optimized animations** with hardware acceleration
- **Efficient re-renders** with React best practices
- **Lazy loading** for better initial load times

## 🔧 Customization

The dashboard is built with a comprehensive theme system that allows easy customization:

- **Color scheme** can be modified in `App.js`
- **Typography** settings in the MUI theme
- **Component styles** can be overridden
- **Animation timings** are configurable

## 📄 File Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard layout
│   ├── LeftSidebar.js        # Navigation sidebar
│   ├── Header.js             # Top header bar
│   ├── MainContent.js        # Main content area
│   ├── MetricsCards.js       # Key metrics display
│   ├── ChartsSection.js      # Chart components
│   ├── RevenueByLocation.js  # Location revenue card
│   ├── TopSellingProducts.js # Products table
│   ├── TotalSalesChart.js    # Donut chart
│   ├── RightSidebar.js       # Notifications & contacts
│   └── BottomActionBar.js    # Bottom action bar
├── App.js                    # Main app component with theme
├── App.css                   # Global styles
├── index.js                  # App entry point
└── index.css                 # Base styles
```

## 🚀 Deployment

The app is ready for deployment to any static hosting service:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 License

This project is created for demonstration purposes.