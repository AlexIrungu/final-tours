import React, { useState } from 'react';

const BookingForm = ({ handleBookNow }) => {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const companyEmail = 'danilscenic@gmail.com';

  const serviceOptions = [    
    'Safari Tours',
    'Cultural Expeditions',
    'Adventure Safaris',
    'Beach Escapes',
    'Customized Safaris',
    'Car Hire',
    'Mount Kenya National Park',
    'Diani Beach',
    'Lake Nakuru',
    'Masai Mara Game reserve',
    'Lake Naivasha',
    'Amboseli National Park',
    'Ol pejeta conservancy',
    // Add more service options as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform validation on the form fields before proceeding with booking.
    // Once validated, you can call the handleBookNow function with the email and service values.
    handleBookNow(email, service);
  };

  const handleSendEmail = () => {
    const companyEmail = "danilscenic@gmail.com";
    const subject = `Booking Request for ${service}`;
    const body = `I would like to book the ${service} service. Company Email: ${companyEmail}.\n\nMy email: ${email}`;
  
    const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the default email client with a new email draft
    const emailWindow = window.open(mailtoLink, "_blank");
  
    // If the window wasn't blocked by a popup blocker, focus on it
    if (emailWindow && emailWindow.focus) {
      emailWindow.focus();
    } else {
      // Handle the case where the popup was blocked
      console.error("Unable to open email window. Please check your browser settings.");
      // You can provide alternative instructions or a fallback solution here
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">
          Email: "Your Email"
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="service" className="block text-gray-800 font-semibold mb-1">
          Service:
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-600"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSendEmail}
          className="bg-brown-600 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
