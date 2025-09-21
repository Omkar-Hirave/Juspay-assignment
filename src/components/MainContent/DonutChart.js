export const SimpleDonutChart = ({ percentage }) => (
    <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '12px solid #f3f4f6', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '100%', height: '100%', borderRadius: '50%', border: '12px solid transparent', borderTopColor: '#1f2937', borderRightColor: '#1f2937', transform: 'rotate(-90deg)' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '18px' }}>{percentage}%</span>
      </div>
    </div>
  );