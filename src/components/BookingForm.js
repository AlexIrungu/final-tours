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
    // Use the mailto: URL scheme to open the user's default email client with the email pre-filled
    const subject = encodeURIComponent(`Booking Request for ${service}`);
    const body = encodeURIComponent(`I would like to book the ${service} service. Company Email: danilscenic@gmail.com .\n\nMy email: ${email}`);
    const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    window.location.href = "mailto:danilscenic@gmail.com";
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
          className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
          className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
