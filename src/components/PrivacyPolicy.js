import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-gray-800 font-serif">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-4 text-lg">
        Effective date: 03/08/2023
      </p>
      <p className="mb-8 leading-relaxed">
        <span className="font-bold">Our Commitment to Privacy</span>
        <br />
        At Danil Scenic, we value and respect your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our website and services.
        By using our website and services, you agree to the practices described in this Privacy Policy.
      </p>
      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">1.1. Personal Information:</span>
        We may collect personally identifiable information from you, such as your name, email address, phone number, and any other information you voluntarily provide to us when you use our website, subscribe to our newsletter, or contact us.
      </p>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">1.2. Non-Personal Information:</span>
        We may also collect non-personal information, such as your IP address, browser type, operating system, and usage data, to improve our website's functionality and user experience.
      </p>
      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">2.1. Provide and Improve Services:</span>
        We use your personal information to provide the services you request from us, such as processing bookings, responding to inquiries, and improving our website's content and features.
      </p>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">2.2. Communication:</span>
        We may use your email address to send you updates, newsletters, promotional offers, and other information related to our services.
        You can opt-out of receiving these communications at any time by following the unsubscribe link provided in the emails or by contacting us directly.
      </p>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">2.3. Analytics:</span>
        We may use non-personal information for analytics purposes, such as analyzing user behavior and preferences on our website, to enhance our services and tailor our content to better serve our users.
      </p>
      <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">3.1. Third-Party Service Providers:</span>
        We may share your personal information with trusted third-party service providers who assist us in delivering our services, such as payment processors, email marketing services, and website analytics providers.
        These third parties are bound by confidentiality obligations and are prohibited from using your personal information for any other purposes.
      </p>
      <p className="mb-4 leading-relaxed">
        <span className="font-bold">3.2. Legal Requirements:</span>
        We may disclose your information in response to a subpoena, court order, or other legal process, or when we believe it is necessary to protect our rights, privacy, safety, or property, or that of others.
      </p>
      <h2 className="text-2xl font-bold mb-4">Security</h2>
      <p className="mb-4 leading-relaxed">
        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
        However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
      <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
      <p className="mb-4 leading-relaxed">
        Our website may contain links to third-party websites or services.
        We are not responsible for the privacy practices or content of these third-party sites.
        We recommend reviewing their respective privacy policies before providing any personal information.
      </p>
      <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
      <p className="mb-4 leading-relaxed">
        Our services are not intended for children under the age of 13.
        We do not knowingly collect or solicit personal information from children.
        If we learn that we have collected personal information from a child under the age of 13, we will promptly delete it.
      </p>
      <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-4 leading-relaxed">
        We reserve the right to update or modify this Privacy Policy at any time.
        Any changes will be posted on this page with a revised "Effective date."
        Your continued use of our website and services after such changes signify your acceptance of the updated Privacy Policy.
      </p>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how we handle your personal information,
        please contact us at danilscenic@gmail.com.
      </p>
      <footer className="footer bg-brown-600 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center font-bold">&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
