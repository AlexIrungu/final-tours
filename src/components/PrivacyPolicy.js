import React, { useState, useEffect } from "react";

function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("policyAccepted");
    if (accepted) setIsAccepted(true);
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
    localStorage.setItem("policyAccepted", "true");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-orange-700 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last updated: March 8, 2023</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Danil Scenic Tours ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and payment details</li>
                <li>Travel preferences and requirements</li>
                <li>Passport and visa information when necessary</li>
                <li>Emergency contact details</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800">2.2 Technical Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information</li>
                <li>Cookies and usage data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To process and manage your tour bookings</li>
              <li>To communicate important trip information</li>
              <li>To provide customer support</li>
              <li>To send relevant marketing communications (with your consent)</li>
              <li>To improve our services and website functionality</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Us</h2>
            <p className="text-gray-700">
              For any questions about this Privacy Policy, please contact us at:<br />
              Email: danilscenic@gmail.com<br />
              Phone: +254 123 456 789
            </p>
          </section>
        </div>

        {!isAccepted && (
          <div className="mt-8 border-t pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Accept Privacy Policy
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[480px] text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy Acceptance</h2>
            <p className="text-gray-600 mb-6">
              By accepting this privacy policy, you acknowledge that you have read and understood how we collect, use, and protect your personal information.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAccept}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300"
              >
                Accept Policy
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Review Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrivacyPolicy;