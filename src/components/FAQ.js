import React, { useState } from "react";

function Faq() {
  const faqData = [
    {
      question: "CAN I CUSTOMIZE MY ITINERARY?",
      answer:
        "Yes, absolutely! At Danil Scenic Tours, we specialize in creating customized itineraries tailored to your preferences. We work closely with you to understand your interests, travel goals, and budget, and then design a personalized itinerary that suits your needs. Your trip to Kenya will be crafted according to your preferences, ensuring an unforgettable experience.",
    },
    {
      question: "WHAT DESTINATIONS IN KENYA DO YOU OFFER TOURS TO?",
      answer:
        "Our tour packages are designed to provide a comprehensive and hassle-free experience. Depending on the specific itinerary, our packages typically include accommodations, meals as specified, transportation within Kenya, park and entrance fees, experienced guides, and activities mentioned in the itinerary. Any additional inclusions or exclusions will be clearly outlined in the tour package details provided to you.",
    },
    {
      question: "WHAT IS INCLUDED IN YOUR TOUR PACKAGES?",
      answer:
        "Our tour packages are designed to provide a comprehensive and hassle-free experience. Depending on the specific itinerary, our packages typically include accommodations, meals as specified, transportation within Kenya, park and entrance fees, experienced guides, and activities mentioned in the itinerary. Any additional inclusions or exclusions will be clearly outlined in the tour package details provided to you.",
    },
    {
      question: "HOW DO I BOOK A TOUR WITH DANIL SCENIC TOURS?",
      answer:
        "Booking a tour with us is easy. Simply get in touch with our team through our website, email, or phone. Let us know your travel dates, preferences, and any specific requirements you may have. Our friendly and knowledgeable staff will assist you in choosing the right tour package and guide you through the booking process, ensuring a smooth and enjoyable experience from start to finish.",
    },
    {
      question: "IS DANIL SCENIC TOURS A SUSTAINABLE AND RESPONSIBLE TRAVEL COMPANY?",
      answer:
        "Yes, sustainability and responsible travel are core values at Danil Scenic Tours. We are committed to minimizing our impact on the environment and supporting local communities. We follow sustainable tourism practices, work with accommodations and partners that share our values, and prioritize responsible wildlife viewing and cultural interactions. By choosing Danil Scenic Tours, you can be assured of an ethical and environmentally conscious travel experience in Kenya.",
    },
    {
      question: "CAN I MODIFY OR CANCEL MY BOOKING?",
      answer:
        "Yes, you can modify or cancel your booking, but it is subject to our cancellation policy. To modify your booking, please contact our customer support team at least 48 hours before the scheduled tour date. Cancellation policies may vary depending on the tour package, so kindly refer to the terms and conditions or contact our support team for more information.",
    },
    // Add more questions and answers as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-20">
      <main className="faq-section">
        <div className="faq-container">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-item-header flex justify-between items-center cursor-pointer border-b py-4"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <span className={`transition-transform transform ${activeIndex === index ? "rotate-45" : "rotate-0"
                    } text-xl font-bold`}>
                    +
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="py-4 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
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
}

export default Faq;
