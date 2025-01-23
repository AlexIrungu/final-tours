import React from 'react';
import safaribooking from './top-places/safaribooking.png';

const Partners = () => {
    const divStyle = {
        backgroundColor: 'green',
        padding: '10px', // Adjust the padding as needed
        borderRadius: '8px', // Optional: Add rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
        width: '200px', // Adjust the width as needed
        margin: 'auto', // Center the box horizontally
      };

      const linkStyle = {
        color: 'green', // Set the text color
        textDecoration: 'underline', // Add an underline
        cursor: 'pointer', // Change the cursor to a pointer on hover
      };

      const mainStyle = {
        border: '2px solid #000',  
        padding: '10px',          
        width: '500px'
       
      };
    
  return (
    <div >
      <p>WE ARE PARTNERED WITH</p>
      <div style={divStyle}>
      <img src={safaribooking} alt="Safari Booking" />
    </div>
    <a
        href="https://www.safaribookings.com/p6036"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        VIEW US ON SAFARI BOOKING.COM
      </a>
    </div>
  );
};

export default Partners;
