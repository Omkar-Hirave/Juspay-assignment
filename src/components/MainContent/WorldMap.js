import SubtitleText from "../LeftSidebar/SubtitleText";
const RevenueByLocation = ({ 
    title = "Revenue by Location", 
    locations = [
      { name: 'New York', value: '72K', highlighted: true, color: '#3b82f6' },
      { name: 'San Francisco', value: '39K', color: '#3b82f6' },
      { name: 'Sydney', value: '25K', color: '#3b82f6' },
      { name: 'Singapore', value: '61K', color: '#3b82f6' }
    ],
    height = '100%',
    mapHeight = '140px',
    backgroundColor = 'white',
    mapBackgroundColor = '#f8fafc',
    highlightColor = '#cfdeea',
    textColor = '#1f2937',
    secondaryTextColor = '#6b7280'
  }) => {
    return (
      <div style={{ 
        backgroundColor: backgroundColor, 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
        borderRadius: '12px', 
        padding: '24px', 
        height: height 
      }}>
        <SubtitleText title={title} />
        
        {/* World Map */}
        <div style={{ 
          height: mapHeight, 
          backgroundColor: mapBackgroundColor, 
          borderRadius: '8px', 
          position: 'relative', 
          overflow: 'hidden', 
          marginBottom: '20px' 
        }}>
          <svg width="100%" height="100%" viewBox="0 0 300 140" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* World map continents */}
            {/* North America */}
            <path d="M20 30 L25 25 L35 25 L45 30 L55 25 L65 30 L70 40 L75 50 L70 60 L65 65 L55 60 L45 65 L35 60 L25 55 L20 45 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            <path d="M30 65 L40 60 L50 65 L55 70 L50 75 L40 75 L30 70 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* South America */}
            <path d="M45 75 L50 70 L55 75 L60 85 L58 100 L55 110 L50 115 L45 110 L42 100 L40 85 L42 80 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Europe */}
            <path d="M90 25 L100 22 L110 25 L115 30 L110 35 L105 40 L95 38 L88 35 L85 30 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Africa */}
            <path d="M95 45 L105 40 L115 45 L120 55 L118 70 L115 85 L110 95 L105 100 L95 95 L90 85 L88 70 L90 55 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Asia */}
            <path d="M120 20 L140 18 L160 20 L180 25 L200 22 L220 25 L230 30 L225 40 L220 50 L210 55 L200 50 L180 45 L160 40 L140 35 L120 30 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            <path d="M140 55 L160 50 L180 55 L200 60 L210 70 L205 80 L195 85 L180 80 L160 75 L140 70 L135 60 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Australia */}
            <path d="M190 95 L210 90 L230 95 L240 100 L235 110 L225 115 L210 112 L195 108 L185 105 Z" fill="#e2e8f0" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Location dots with labels */}
            {/* New York */}
            <circle cx="62" cy="40" r="4" fill={"#cfdeea"} stroke="white" strokeWidth="2" />
            <text x="62" y="35" textAnchor="middle" fontSize="8" fill={textColor} fontWeight="600">NY</text>
            
            {/* San Francisco */}
            <circle cx="35" cy="45" r="4" fill={highlightColor} stroke="white" strokeWidth="2" />
            <text x="35" y="40" textAnchor="middle" fontSize="8" fill={textColor} fontWeight="600">SF</text>
            
            {/* Singapore */}
            <circle cx="195" cy="75" r="4" fill={highlightColor} stroke="white" strokeWidth="2" />
            <text x="195" y="70" textAnchor="middle" fontSize="8" fill={textColor} fontWeight="600">SG</text>
            
            {/* Sydney */}
            <circle cx="215" cy="105" r="4" fill={highlightColor} stroke="white" strokeWidth="2" />
            <text x="215" y="100" textAnchor="middle" fontSize="8" fill={textColor} fontWeight="600">SY</text>
          </svg>
        </div>
        
        {/* Location List */}
        <div>
          {locations.map((location, index) => (
            <div 
              key={index}
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '8px 0', 
                borderBottom: index < locations.length - 1 
                  ? location.highlighted 
                    ? `2px solid ${highlightColor}` 
                    : '1px solid #f3f4f6' 
                  : 'none'
              }}
            >
              <span style={{ 
                fontSize: '14px', 
                color: location.highlighted ? highlightColor : secondaryTextColor,
                fontWeight: location.highlighted ? '600' : '400'
              }}>
                {location.name}
              </span>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: textColor 
              }}>
                {location.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RevenueByLocation;