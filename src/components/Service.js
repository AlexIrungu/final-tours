import React, { useState } from "react";
import park from './assets/park.jpeg';
import truck from './assets/danil scenic tours.jpg';
import lake from './assets/lake bogoria.jpg';
import guide from './assets/guides.jpeg';
import kulture from './assets/kulture.jpg';
import adventure from './assets/adventure.jpg';
import tailor from './assets/tailor-made.jpg';

function Service() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="service-page">
      <main className="service-section">
        <div className="service-container">
          <h1 className="text-3xl font-bold text-blue-500 mb-4">Our Services</h1>
          <p className="text-gray-700 mb-6">Our mission is to showcase the breathtaking beauty and rich cultural heritage of Kenya, allowing you to explore its diverse landscapes and immerse yourself in the wonders of this enchanting country.</p>

          <div className="accordion">

            {/* National Parks and Game Reserves */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 1 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(1)}>
                <h2 className="text-xl font-bold text-gray-800">National Parks and Game Reserves</h2>
                <img src={park} alt="National Parks" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 1 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Embark on thrilling safaris to some of the world's most renowned national parks and game reserves. Witness the awe-inspiring wildlife in their natural habitats, from the majestic elephants roaming freely to the graceful big cats prowling the savannah. Our experienced guides will ensure you have a safe and rewarding encounter with Kenya's incredible wildlife.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Transport Services */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 2 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(2)}>
                <h2 className="text-xl font-bold text-gray-800">Transport Services</h2>
                <img src={truck} alt="Transport" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 2 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Sit back, relax, and enjoy the journey as we provide you with seamless and comfortable transport services. From airport transfers to road trips and inter-city travel, our modern and well-maintained vehicles will take you to your destination with ease. Travel hassle-free and make the most of your time exploring the beauty of Kenya.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Tour Guides */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 3 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(3)}>
                <h2 className="text-xl font-bold text-gray-800">Tour Guides</h2>
                <img src={guide} alt="Tour Guides" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 3 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Our knowledgeable and passionate tour guides will be your trusted companions on your Kenyan journey. They will share fascinating stories about the country's history, culture, and traditions, enriching your travel experience. With their expertise, you'll gain a deeper understanding of Kenya's heritage and the unique characteristics of each destination.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 4 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(4)}>
                <h2 className="text-xl font-bold text-gray-800">Cultural Experiences</h2>
                <img src={kulture} alt="Cultural Experiences" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 4 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Immerse yourself in the rich cultural diversity of Kenya through our cultural experiences. Engage with local communities, witness traditional ceremonies, and learn about age-old customs that have shaped the country's identity. These interactions will provide you with a genuine insight into the vibrant tapestry of Kenyan culture.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Adventure Activities */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 5 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(5)}>
                <h2 className="text-xl font-bold text-gray-800">Adventure Activities</h2>
                <img src={adventure} alt="Adventure Activities" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 5 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  For the thrill-seekers, we offer a range of exciting adventure activities. From hot air balloon safaris over the Maasai Mara to exhilarating hikes up Mount Kenya and thrilling water sports along the pristine coastline, there's something to get your adrenaline pumping while enjoying Kenya's stunning landscapes.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Tailor-Made Tours */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 6 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(6)}>
                <h2 className="text-xl font-bold text-gray-800">Tailor-Made Tours</h2>
                <img src={tailor} alt="Tailor-Made Tours" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 6 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  We understand that every traveler has unique preferences and interests. That's why we offer tailor-made tours, allowing you to design your dream itinerary. Whether you're a wildlife enthusiast, a cultural explorer, or a leisure traveler, we'll curate a personalized experience to match your desires.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

            {/* Accommodation */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 7 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(7)}>
                <h2 className="text-xl font-bold text-gray-800">Accommodation</h2>
                <img src={lake} alt="Accommodation" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 7 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Experience the utmost comfort and relaxation in our carefully selected accommodations. Whether you prefer luxury lodges with stunning views or cozy eco-friendly campsites close to nature, we have options to suit every traveler's preference. Our accommodations offer warm hospitality and modern amenities, ensuring you have a restful stay after exciting days of adventure.
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
