import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#fff' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>DataWarehouse</div>
      <button style={{ backgroundColor: '#a259ff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Sign In
      </button>
    </header>
  );
};

export default Header;
