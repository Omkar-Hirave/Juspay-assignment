import React from 'react';
import { StackedBarChart } from './MainContent/StackedBarChart';
import { StatCard } from './MainContent/StatCard';
import { SimpleDonutChart } from './MainContent/DonutChart';
import { products, projectionsData, salesBreakdown } from '../Data/chartData';
import  ProductTable  from './MainContent/ProductTable';
import SubtitleText from './LeftSidebar/SubtitleText';
import RevenueChart from './MainContent/LineChart';
import RevenueByLocation from './MainContent/WorldMap';

const columns = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'price', label: 'Price', align: 'center' },
  { key: 'quantity', label: 'Quantity', align: 'center' },
  { key: 'amount', label: 'Amount', align: 'right', bold: true },
];

const data = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];


const MainContent = () => {
  return (
    <div style={{ flexGrow: 1, padding: '24px', backgroundColor: 'white', height : '94vh', minHeight: '95vh', width: '100%', overflowY:"scroll"}}>
      <SubtitleText title={"eCommerce"} />
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 0.8fr 1.4fr', gridTemplateRows: '1fr 1fr', gap: '24px', marginBottom: '32px', height: '320px' }}>
        <StatCard title="Customers" value="3,781" change="+11.01%" isPositive={true} bgColor="#e3f5ff"/>
        <StatCard title="Orders" value="1,219" change="-0.03%" isPositive={false} bgColor="#f7f9fb" />
        <div style={{ gridColumn: '3', gridRow: '1 / 3', backgroundColor: 'white', borderRadius: '12px', padding: '24px', backgroundColor: '#F7F9FB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <SubtitleText
              title={"Projections vs Actuals"} />
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#6b7db3', borderRadius: '2px', marginRight: '6px' }} />
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Projections</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#a3bffa', borderRadius: '2px', marginRight: '6px' }} />
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Actuals</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', height: '220px' }}>
            <div style={{ position: 'absolute', left: '0', top: '0', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '12px', zIndex: 1 }}>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>30M</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>20M</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>10M</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>0</span>
            </div>
            <div style={{ paddingLeft: '28px', height: '100%' }}>
              <StackedBarChart data={projectionsData} />
            </div>
          </div>
        </div>
        <StatCard title="Revenue" value="$695" change="+15.03%" isPositive={true} bgColor="#f7f9fb"  />
        <StatCard title="Growth" value="30.1%" change="+6.08%" isPositive={true} bgColor="#e5ecf6" />
      </div>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        <div style={{ flex: '0 0 70%' }}>
          <RevenueChart />
        </div>
        <div style={{ flex: '0 0 calc(30% - 24px)' }}>
          <RevenueByLocation 
            title="Revenue By Location"
            locations={[
              { name: 'New York', value: '72K', highlighted: true, color: '#cfdeea' },
              { name: 'San Francisco', value: '39K', color: '#10b981' },
              { name: 'Sydney', value: '25K', color: '#10b981' },
              { name: 'Singapore', value: '61K', color: '#10b981' }
            ]}
            height="390px"
            mapHeight="160px"
            backgroundColor="#f9fafb"
            highlightColor="#10b981"
            textColor="#374151"
            secondaryTextColor="#6b7280"
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        <div style={{ flex: '0 0 65%' }}>
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '24px', height: '100%', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '24px', color: '#1f2937', fontSize: '16px', margin: '0 0 24px 0' }}>Top Selling Products</h3>
            <div style={{ maxHeight: '280px', overflowY: 'auto', overflowX: 'auto' }}>
            <ProductTable title="Top Selling Products" columns={columns} data={data} maxHeight="280px" />
            </div>
          </div>
        </div>
        
        <div style={{ flex: '0 0 calc(35% - 24px)' }}>
          <div style={{ backgroundColor: '#f7f9fb', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', height: '100%' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '24px', color: '#1f2937', fontSize: '16px', margin: '0 0 24px 0' }}>Total Sales</h3>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <SimpleDonutChart percentage={38.6} />
            </div>
            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#1f2937', borderRadius: '50%', marginRight: '8px' }} />
                  <span style={{ color: '#6b7280', fontSize: '13px' }}>Direct</span>
                </div>
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '13px' }}>$300.56</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#a3bffa', borderRadius: '50%', marginRight: '8px' }} />
                  <span style={{ color: '#6b7280', fontSize: '13px' }}>Affiliate</span>
                </div>
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '13px' }}>$135.18</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#86efac', borderRadius: '50%', marginRight: '8px' }} />
                  <span style={{ color: '#6b7280', fontSize: '13px' }}>Sponsored</span>
                </div>
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '13px' }}>$154.02</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#bfdbfe', borderRadius: '50%', marginRight: '8px' }} />
                  <span style={{ color: '#6b7280', fontSize: '13px' }}>E-mail</span>
                </div>
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '13px' }}>$48.96</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;