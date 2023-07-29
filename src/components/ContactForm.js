import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace 'your_company_email' with the actual email address where you want to receive the feedback
    const emailTo = "aleaxmuiruri@gmail.com";
    const subject = "Feedback from Tourism Website";
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
    `;
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="contact-form p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-medium text-gray-800">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>

      {/* Additional contact details section */}
      <div className="contact-details mt-8">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <p className="mt-2 text-gray-700">
          Address: DanilScenicTours, Nairobi, Kenya
          <br />
          Phone: +254 123 456 789
          <br />
          Email: danilscenictours@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
