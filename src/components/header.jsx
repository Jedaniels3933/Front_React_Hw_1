import React from 'react';


const Header = () => {
  return (
    <header style={{ 
      backgroundImage: `url('src/components/pic.jpg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px', // Adjust as needed
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white' // Adjust text color as needed
    }}>
      <h1>This is the Header </h1>
    </header>
  );
};

export default Header;