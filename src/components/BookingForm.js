import React, { useState } from 'react';



function BookingForm({ handleBookNow }) {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const companyEmail = 'danilscenic@gmail.com'; // Remove the companyEmail state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform validation on the form fields before proceeding with booking.
    // Once validated, you can call the handleBookNow function with the email and service values.
    handleBookNow(email, service);
  };

  const handleSendEmail = () => {
    // Use the mailto: URL scheme to open the user's default email client with the email pre-filled
    const from = encodeURIComponent(`${email}`)
    const to = encodeURIComponent(`${companyEmail}`)
    const subject = encodeURIComponent(`Booking Request for ${service}`);
    const body = encodeURIComponent(`I would like to book the ${service} service.\n\nMy email: ${email}`);
    const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
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
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSendEmail}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Book Now
        </button>
        {/* <button
          type="button"
          onClick={handleSendEmail}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-4 focus:outline-none"
        >
          Book Now
        </button> */}
      </div>
    </form>
  );
}

export default BookingForm;
