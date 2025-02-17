import React from 'react';
import safaribooking from './top-places/safaribooking.png';
import tripcrafters from './top-places/tripcrafters.png';

const Partners = () => {
  return (
    <div className="text-center">
      <h2 className="text-sm font-medium mb-4">
        WE ARE PARTNERED WITH
      </h2>

      {/* Horizontal Partner Logos Container */}
      <div className="flex justify-center items-center gap-4 mb-2">
        {/* Safari Booking Logo */}
        <div className="bg-orange-600 p-4 rounded-lg w-32 hover:shadow-lg transition-all duration-300">
          <img 
            src={safaribooking}
            alt="Safari Booking" 
            className="w-full h-auto"
          />
        </div>

        {/* Trip Crafters Logo */}
        <div className="bg-orange-600 rounded-lg w-32 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-3">
          <img 
            src={tripcrafters}
            alt="Trip Crafters" 
            className="w-24 h-auto"
          />
        </div>
      </div>

      {/* Horizontal Links */}
      <div className="flex justify-center items-center gap-2 text-xs">
        <a
          href="https://www.safaribookings.com/p6036"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
        >
          VIEW US ON SAFARI BOOKING.COM
        </a>
        <span className="text-orange-600">•</span>
        <a
          href="https://www.tripcrafters.com/travel-agent-details/danil-scenic-tours-limited-72564"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
        >
          VIEW US ON TRIP CRAFTERS
        </a>
      </div>
    </div>
  );
};

export default Partners;