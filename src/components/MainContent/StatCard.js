import React from 'react';
import SubtitleText from '../LeftSidebar/SubtitleText';
  
  // StatCard Component
 export const StatCard = ({ title, value, change, isPositive, bgColor }) => (
    <div style={{ height: '140px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', backgroundColor: bgColor }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <SubtitleText title={title}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto' }}>
        <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '28px', lineHeight: 1 }}>{value}</span>
        <div style={{ backgroundColor: "tranparent", color: '#1C1C1C' , fontWeight: 500, fontSize: '12px', height: '24px', padding: '0 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"  style={{
      transform: isPositive ? 'rotate(0deg)' : 'rotate(180deg)',
      transition: 'transform 0.3s ease', // smooth rotation
    }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isPositive ? "M7 17L17 7M17 7H7M17 7V17" : "M17 7L7 17M7 17H17M7 17V7"} transform={isPositive ? "none" : "rotate(180 12 12)"} />
          </svg>
          {change}
        </div>
      </div>
    </div>
  );