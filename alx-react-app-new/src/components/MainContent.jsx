import React from 'react';

function MainContent() {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'lightgray', 
      color: 'black',
      margin: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    }}>
      <h2 style={{ textAlign: 'center', color: 'darkblue' }}>Welcome to My Favorite Cities</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Explore some of the most beautiful cities in the world!</p>
      {/* Add more content as needed */}
    </div>
  );
}

export default MainContent;
