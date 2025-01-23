import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email logic here (you'll need backend logic)
    // Example: You can use a service like Nodemailer to send emails from your backend
    // Example: You'll need to set up a backend route to handle form submission and email sending
    // Example: Upon successful form submission, you can redirect the user to a thank you page
  };

  const handleGetQuoteClick = () => {
    // Open the default email client with the predefined email address, subject, and body
    window.location.href = 'mailto:danilscenic@gmail.com?subject=Quote%20Request&body=Hello%20Danil,%0D%0A%0D%0AI%20am%20interested%20in%20getting%20a%20quote.%20Please%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you.';
  };

  return (
    <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 my-5">Get a Free Quote for This Tour</h2>
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country of Residence:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-orange-500"
          rows="5"
        />
      </div>
      <button type="button" onClick={handleGetQuoteClick} className="bg-green-500 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Quote</button>
    </form>
    </div>
  );
};

export default QuoteForm;
