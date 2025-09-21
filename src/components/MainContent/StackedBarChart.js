export const StackedBarChart = ({ data }) => {
    const maxValue = 30;
    const chartHeight = 180;
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: chartHeight + 'px', gap: '12px', padding: '0 16px' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px', position: 'relative' }}>
              <div style={{ width: '25px', height: `${((item.actual + item.projection) / maxValue) * chartHeight}px`, backgroundColor: '#a3bffa', borderRadius: '4px 4px 0 0', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease' }} title={`Total: ${item.actual + item.projection}`}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: `${(item.projection / (item.actual + item.projection)) * 100}%`, backgroundColor: '#A8C5DA', borderRadius: '0 0 0 0' }} />
              </div>
            </div>
            <span style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '400' }}>{item.name}</span>
          </div>
        ))}
      </div>
    );
  };