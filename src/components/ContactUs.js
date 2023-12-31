import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <main className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
      <footer className="footer bg-brown-600 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center font-bold">&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
