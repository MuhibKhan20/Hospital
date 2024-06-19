import React from 'react';

const Events = () => {
  return (
    <>
      <div style={{ 
        position: 'relative', 
        height: '300px', 
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/2645.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        width: '85%', // Adjusted width
        marginLeft: '7.5%', // Centering the background image
        marginRight: '7.5%', // Centering the background image
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '@media (max-width: 992px)': {
          height: '100px !important', // Apply !important
        },
        // Media query for small devices only
        '@media (max-width: 576px)': {
          height: '100px !important', // Apply !important
        }
      }}>
        <h2 style={{ color: 'white', fontWeight: 'bold', marginRight: '20px', marginLeft: '20px' }}>Events</h2>
        <p style={{ color: 'white', marginRight: '20px', marginLeft: '20px' }}>Explore our upcoming events calendar</p>
      </div>
      
    </>
  );
};


export default Events;
