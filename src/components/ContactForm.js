import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import PrivacyPolicy from "./PrivacyPolicy";
import './fonts/miandra-gd.ttf'
import './font.css'

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
    const emailTo = "danilscenic@gmail.com";
    const subject = "Feedback from Tourism Website";
    // const emailBody = `
    //   Name: ${formData.name}
    //   Email: ${formData.email}
    //   Feedback: ${formData.feedback}
    // `;
    window.location.href = "mailto:danilscenic@gmail.com";

  };

  return (
    <div className="contact-form  rounded-lg p-4">
      <h2 className="text-center text-2xl font-bold mb-4">
        <Fade top>Let's Chat</Fade>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Use the Fade animation for the form fields */}
        <Fade bottom>
        <div className="form-group mb-4 ">
  <label htmlFor="name" className="block mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full px-3 py-2 border rounded-md border-solid border-brown-600 border-opacity-75"
  />
</div>
<div className="form-group mb-4">
  <label htmlFor="email" className="block mb-2">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full px-3 py-2 border rounded-md border-solid border-brown-600 border-opacity-75"
  />
</div>
<div className="form-group mb-4">
  <label htmlFor="feedback" className="block mb-2">
    Feedback
  </label>
  <textarea
    id="feedback"
    name="feedback"
    value={formData.feedback}
    onChange={handleChange}
    required
    className="w-full px-3 py-2 border rounded-md border-solid border-brown-600 border-opacity-75"
    rows="6"
  ></textarea>
</div>

          <Zoom cascade>
        <button
          type="submit"
          className="w-full bg-brown-600 hover:bg-green-600 active:bg-orange-700 text-white font-bold py-2 rounded-lg focus:outline-none shadow-md transition-all"
        >
          Send
        </button>
      </Zoom>

        </Fade>
      </form>
      {/* Additional contact details section */}
      <div className="contact-details mt-6">
        <h3 className="text-center text-xl font-bold">
          <Fade bottom>Contact Details</Fade>
        </h3>
        <Fade bottom>
          <div className="text-center">
            <p>
              <FaMapMarkerAlt className="inline-block mr-2 text-brown-600" />
              <span>
                Address: P.O Box 49377-00100, Nairobi
              </span>
            </p>
            <p>
              <FaPhone className="inline-block mr-2 text-brown-600" />
              <span>Phone: +254 723 453 576/+254 777 984 249</span>
            </p>
            <p>
          <FaWhatsapp className="inline-block mr-2 text-green-600" />
          <span>WhatsApp: +254 723 453 576</span>
        </p>
            <p>
              <FaEnvelope className="inline-block mr-2 text-brown-600" />
              <span>Email: danilscenic@gmail.com</span>
            </p>
            <p className="mt-4">
          <FaLock className="inline-block mr-2 text-brown-600" />
          <span>
            By using this form you agree with the storage and handling of your data by this website in accordance with our{" "}
            <Link to="/privacy" className="text-brown-600 underline">
              Privacy Policy
            </Link>
          </span>
        </p>

          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactForm;
