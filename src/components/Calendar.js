import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({ handleBookingSuccess }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookNow = () => {
    // Perform any additional booking-related logic here if needed
    // For this example, we'll just set a timeout to simulate booking success
    setTimeout(() => {
      handleBookingSuccess();
    }, 1500);
  };

  return (
    <div className="calendar-container">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Select a Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        placeholderText="Select a date"
      />
      <button onClick={handleBookNow} className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        Book Now
      </button>
    </div>
  );
}

export default Calendar;
