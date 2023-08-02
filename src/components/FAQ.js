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
      question: "WHEN IS THE BEST TIME TO VISIT KENYA?",
      answer:
        "The best time to visit Kenya is during the dry season, which is from June to October and January to February. This period offers the best wildlife viewing and pleasant weather.",
    },
    // Add more questions and answers as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
    </div>
  );
}

export default Faq;
