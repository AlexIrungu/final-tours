import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Transition } from '@headlessui/react';
import BookingForm from './BookingForm';
import booking from './booking.jpg'

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
    <div className="bg-gray-200">
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Booking Service</h1>
        <p className="text-xl text-gray-800 mb-6">
          Choose your preferred service and fill out the booking form below.
        </p>
        <div className="flex flex-wrap-reverse">
          {/* Booking Form */}
          <div className="w-full md:w-1/2 p-4">
            <BookingForm handleBookNow={handleBookNow} />
          </div>
          {/* Images */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={booking}
              alt="Booking Service"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Calendar */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Date for Service</h2>
          <Calendar onChange={handleDateChange} value={selectedDate} className="border p-4" />
        </div> */}
      </div>

      {/* Success Message */}
      <Transition
        show={showSuccessMessage}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Booking is Successful!</h2>
        </div>
      </Transition>
    </div>
  );
}

export default CalendarComponent;
