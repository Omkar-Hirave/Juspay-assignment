import React from 'react';

const ProductTable = ({ title, columns = [], data = [], maxHeight = '280px' }) => {
  return (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                style={{
                  textAlign: col.align || 'left',
                  padding: '8px 0px',
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#9ca3af',
                  letterSpacing: '0.5px',
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} style={{ borderBottom: idx < data.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
              {columns.map((col, cIdx) => (
                <td
                  key={cIdx}
                  style={{
                    padding: '12px 0px',
                    fontSize: '13px',
                    color: '#1c1c1c',
                    fontWeight: col.bold ? '600' : '500',
                    textAlign: col.align || 'left',
                  }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default ProductTable;
