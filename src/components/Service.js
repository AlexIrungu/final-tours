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

            <h1 className="text-3xl font-bold text-blue-500 mt-10 mb-4">Places to Visit</h1>
          <p className="text-gray-700 mb-6">Explore the top tourist destinations in Kenya that will captivate your heart and soul. Discover the best of the country's natural beauty, rich culture, and awe-inspiring landmarks.</p>

          <div className="accordion">
            {/* Places to Visit */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 8 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(8)}>
                <h2 className="text-xl font-bold text-gray-800">National Parks</h2>
                <img src={park} alt="National Parks" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 8 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Being one of the best travel destinations in Africa, Kenya has about 8% of the total land mass protected area for wildlife conservation. These areas are gazetted landscapes or seascapes. This means that they have been surveyed, demarcated, and gazetted in either of the four categories namely; Marine Parks and Reserves, National Parks, National Game Reserves, and National sanctuaries.
                  <br /><br />
                  At Danil Scenic Tours Limited we work round the clock to ensure our clients (both local and foreign tourists) have value for money by giving them the most breathtaking and memorable travel experience in Kenya.
                  <br /><br />
                  Though the list is not exhaustive, some of the best places to visit are as categorized below:
                  <br /><br />
                  <ul>
                    <li>Nairobi National ParK</li>
                    <li>Aberdare National Park</li>
                    <li>Amboseli National ParK</li>
                    <li>South Island National Park</li>
                    <li>Hells Gate National Park</li>
                    {/* Add more national parks here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>

            {/* National Reserves */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 8 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(8)}>
                <h2 className="text-xl font-bold text-gray-800">National Reserves</h2>
                <img src={truck} alt="National Reserves" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 8 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Some of the best National Reserves in Kenya include:
                  <br /><br />
                  <ul>
                    <li>Masai Mara National Reserve</li>
                    <li>Malka Mari National Park</li>
                    <li>Mwingi Game Reserve</li>
                    <li>Nasolot National Reserve</li>
                    <li>Samburu National Reserve</li>
                    {/* Add more National Reserves here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>

            {/* National Marine Parks and Reserves */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 9 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(9)}>
                <h2 className="text-xl font-bold text-gray-800">National Marine Parks and Reserves</h2>
                <img src={truck} alt="National Marine Parks" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 9 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Some of the best National Marine Parks and Reserves in Kenya include:
                  <br /><br />
                  <ul>
                    <li>Mombasa Marine National Park & Reserve</li>
                    <li>Kisite Mpunguti Marine Park</li>
                    <li>Malindi Marine National Park & Reserve</li>
                    <li>Watamu Marine National Park & Reserve</li>
                    {/* Add more National Marine Parks and Reserves here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>

            {/* Animal Orphanages and Sanctuaries */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 10 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(10)}>
                <h2 className="text-xl font-bold text-gray-800">Animal Orphanages and Sanctuaries</h2>
                <img src={truck} alt="Animal Orphanages and Sanctuaries" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 10 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Some of the best Animal Orphanages and Sanctuaries in Kenya include:
                  <br /><br />
                  <ul>
                    <li>Nairobi Animal Orphanage</li>
                    <li>Nairobi Safari Walk</li>
                    <li>Lake Simbi National Sanctuary</li>
                    <li>Kisumu Impala Sanctuary</li>
                    {/* Add more Animal Orphanages and Sanctuaries here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>

            {/* Sceneries */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 11 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(11)}>
                <h2 className="text-xl font-bold text-gray-800">Sceneries</h2>
                <img src={truck} alt="Sceneries" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 11 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Some of the best sceneries to visit in Kenya include:
                  <br /><br />
                  <ul>
                    <li>God’s Footprint (Lwayo Lwa Mulungu)</li>
                    <li>The Mbaraki Pillar</li>
                    <li>Marafa’s Hell Kitchen</li>
                    <li>Lake Kapedo</li>
                    {/* Add more sceneries here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>

            {/* Museums */}
            <div className={`service-card bg-white rounded-lg shadow-lg mb-4 ${activeCard === 12 ? "active" : ""}`}>
              <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(12)}>
                <h2 className="text-xl font-bold text-gray-800">Museums</h2>
                <img src={truck} alt="Museums" className="h-12 w-12" />
              </div>
              <div className={`service-card-content px-4 pb-4 ${activeCard === 12 ? "block" : "hidden"}`}>
                <p className="text-gray-700">
                  Some of the best museums to visit in Kenya include:
                  <br /><br />
                  <ul>
                    <li>Nairobi National Museum</li>
                    <li>Nairobi Gallery</li>
                    <li>Karen Blixen Museum</li>
                    <li>Uhuru Gardens National Monument</li>
                    {/* Add more museums here */}
                  </ul>
                </p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
              </div>
            </div>
            
            </div>

            

          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
