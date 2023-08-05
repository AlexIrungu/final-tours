import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import nick from './nick.jpg'
import muze from './muze.jpg'
import watamu from './watamu.jpeg'
import park from './assets/park.jpeg';
import orphan from './orphan.jpg'
import reserve from './reserve.jpg'

function Places(){
    const [activeCard, setActiveCard] = useState(null);
    // Add new state variable for selected service image
    const [selectedServiceImage, setSelectedServiceImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const history = useHistory(); // Use the useHistory hook
    const [searchLocation, setSearchLocation] = useState([-1.2921, 36.8219]);
  
  
    const toggleCard = (title, image) => {
      setActiveCard((prevActiveCard) => (prevActiveCard === title ? null : title));
      // Set the selected service image when the card is clicked
      setSelectedServiceImage(activeCard === title ? null : image);
    };
  
    const handleBookNow = () => {
      // Simulating a booking process with a 1.5-second delay
      // Replace this with your actual booking logic (e.g., API calls, database updates, etc.)
      console.log("Booking process initiated...");
      setTimeout(() => {
        console.log("Booking successful!");
        setBookingSuccess(true);
        setShowModal(true);
        history.push("/calendar"); // Replace "/calendar" with the URL of the page you want to redirect to
      }, 1500);
    };
  
    const handleBookingSuccess = () => {
      // Redirect the user to the calendar page after the booking is successful
      history.push("/calendar");
      setBookingSuccess(false);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const ServiceCard = ({ image, title, description }) => (
      <div className={`service-card bg-white rounded-lg shadow-lg ${activeCard === title ? "active" : ""}`}>
        <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(title)}>
          <h2 className="text-l font-semibold text-brown-600">{title}</h2>
          <img src={image} alt={title} className="h-32 w-32" />
        </div>
        <div className={`service-card-content px-4 pb-4 ${activeCard === title ? "block" : "hidden"}`}>
          <p className="text-gray-700">{description}</p>
          {/* Book Now button */}
          <button
            onClick={handleBookNow}
            className="mt-4 bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    );
    return(
        <div>
            <h1 className="text-3xl font-bold text-orange-700 mt-10 mb-4">Places to Visit</h1>
          <p className="text-gray-700 mb-6">Explore the top tourist destinations in Kenya that will captivate your heart and soul. Discover the best of the country's natural beauty, rich culture, and awe-inspiring landmarks.</p>

          <div className="grid grid-cols-1 gap-4">
            {/* <Map searchLocation={searchLocation} /> */}
          <ServiceCard
              image={park}
              title="National Parks"
              description="Kenya boasts a diverse range of national parks, each offering a unique wildlife and nature experience. Explore the Nairobi National Park, Aberdare National Park, Amboseli National Park, South Island National Park, Hells Gate National Park, Sibiloi National Park, Ruma National Park, Ol Donyo Sabuk National Park, Ndere Island National Park, Mount Longonot National Park, Kora National Park, Meru National Park, Marsabit National Park & Reserve, Mount Kenya National Park & Reserve, Lake Nakuru National Park, Chyulu Hills National Park, Central Island National Park, Arabuko Sokoke National Park, Tsavo East, Tsavo West National Parks, Mount Elgon National Park, and Saiwa Swamp National Park."
            />

            <ServiceCard
              image={reserve}
              title="National Reserves"
              description="Discover the beauty of Kenya's national reserves, home to various wildlife and stunning landscapes. Visit the Masai Mara National Reserve, Malka Mari National Park, Mwingi Game Reserve, Nasolot National Reserve, Samburu National Reserve, Kakamega Forest National Reserve, Bisanadi National Reserve, Shimba Hills National Reserve, Mwea National Reserve, Rahole National Reserve, Arawale National Reserve, Boni National Reserve, Buffalo Springs National Reserve, Dodori National Reserve, Lake Bogoria National Reserve, and Rimoi National Reserve."
            />

            <ServiceCard
              image={watamu}
              title="National Marine Parks and Reserves"
              description="Explore the mesmerizing marine life and underwater wonders of Kenya's marine parks and reserves. Dive into the Mombasa Marine National Park & Reserve, Kisite Mpunguti Marine Park, Malindi Marine National Park & Reserve, Watamu Marine National Park & Reserve, Kiunga Marine National Reserve, and Diani-Chale Marine Reserve."
            />

            <ServiceCard
              image={orphan}
              title="Animal Orphanages and Sanctuaries"
              description="Get up close with Kenya's wildlife conservation efforts by visiting animal orphanages and sanctuaries. Visit the Nairobi Animal Orphanage, Nairobi Safari Walk, Lake Simbi National Sanctuary, Kisumu Impala Sanctuary, and Mwaluganje Elephant Sanctuary."
            />

            <ServiceCard
              image={nick}
              title="Scenic Spots"
              description="Immerse yourself in the breathtaking beauty of Kenya's scenic spots. Witness God’s Footprint (Lwayo Lwa Mulungu), The Mbaraki Pillar, Marafa’s Hell's Kitchen, Lake Kapedo, Eliye Beach, Kyamwilu Hill, Takawiri Island, and Mzima Springs, and experience the magic of nature."
            />

            <ServiceCard
              image={muze}
              title="Museums"
              description="Delve into Kenya's rich history and cultural heritage by visiting its museums. Discover the Nairobi National Museum, Nairobi Gallery, Karen Blixen Museum, Uhuru Gardens National Monument, Hyrax Hill Museum, Kariandusi Archaeological Site, Nyeri Museum, Olorgesailie Pre-historic Site, Thimlich Ohinga Archaeological Site, Fort Jesus, Gede Ruins, Kapenguria Museum, Bomas of Kenya, Lamu Museum, National Archives, Nairobi Railway Museum, and Oloolua Nature Trail."
            />

            {/* Add more ServiceCard components for other places to visit */}
          </div>
        </div>
    )
}
export default Places