import React, { useState } from "react";

function Faq() {
  const faqData = [
    {
      question: "What are the popular tourist destinations in Kenya?",
      answer:
        "Some popular tourist destinations in Kenya are Maasai Mara National Reserve, Amboseli National Park, Tsavo National Park, and the coastal cities of Mombasa and Malindi.",
    },
    {
      question: "Is it safe to visit Kenya?",
      answer:
        "Yes, Kenya is generally safe for tourists. However, like any other destination, it is essential to take necessary precautions and be aware of your surroundings.",
    },
    {
      question: "What is the best time to visit Kenya?",
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
