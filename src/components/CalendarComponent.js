import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import booking from './shiftedfrommain/booking.jpg'
import { InlineWidget, PopupWidget } from 'react-calendly';

function CalendarComponent() {
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  

  const handleBookNow = (email, service) => {
    // Simulating a booking process with a 1.5-second delay
    // Replace this with your actual booking logic (e.g., API calls, database updates, etc.)
    console.log("Booking process initiated...");
    setTimeout(() => {
      console.log("Booking successful!");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // Hide the success message after 3 seconds
    }, 1500);

    // You can use the 'email' and 'service' variables to send the booking details to the company email
    const subject = encodeURIComponent(`Booking Request for ${service}`);
    const body = encodeURIComponent(`I would like to book the ${service} service.\n\nMy email: ${email}`);
    const mailtoLink = `mailto:company@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-10">
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-8 text-orange-600">Welcome to Our Booking Service</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md transition-all duration-500 ease-in-out">
          <InlineWidget url='https://calendly.com/danilscenic' />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={booking}
            alt="Booking Service"
            className="w-full rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default CalendarComponent;
