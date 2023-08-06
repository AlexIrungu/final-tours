import React, { useState, useEffect } from "react";
import park from './assets/park.jpeg';
import truck from './assets/danil scenic tours.jpg';
import lake from './assets/lake bogoria.jpg';
import guide from './assets/guides.jpeg';
import kulture from './kulture.jpg';
import adventure from './adventure.jpg';
import tailor from './tailor-made.jpg';
import Modal from "./Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import nick from './nick.jpg'
import muze from './muze.jpg'
import orphan from './orphan.jpg'
import reserve from './reserve.jpg'
import safari from './saf-car.jpeg'
import car from './hireee.jpg'
import booking from './acc-book.jpeg'
import tick from './tick.jpeg'
import sun from './sun-airport.jpg'
import excursion from './lifeee.jpg'
import people from './assets/people.jpg'
import watamu from './watamu.jpeg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jioni from './linktoplaces.jpg'
// import Map from "./Map";
import { CSSTransition } from "react-transition-group";
import Places from "./Places";

function Service() {
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

  const backgroundStyle = {
    backgroundImage: `url(${jioni})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
    width: '400px',
    height: '300px',
  };
  
  const cardStyle = {
    width: '400px', // Adjust the width of the card as per your preference
    height: '300px', // Adjust the height of the card as per your preference
  };

  // Simulate the fade-in effect by updating the opacity in the useEffect hook
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTextStyle((prevStyle) => ({
  //       ...prevStyle,
  //       opacity: 1,
  //     }));
  //   }, 100);
  // }, []);



  return (
    <div className="service-page">
      <main className="service-section">
        <div className="service-container">
          <h1 className="text-3xl font-bold text-orange-700 mb-4">Our Services</h1>
          <p className="text-gray-700 mb-6">At our company, we pride ourselves on providing a comprehensive range of services to cater to all your travel needs.
						 Whether you're arriving at an airport, looking for exciting excursions, seeking thrilling safaris, requiring car hire, accommodation bookings, or assistance with air tickets, we've got you covered!</p>

          <div className="grid grid-cols-1 gap-4">
            <ServiceCard
              image={sun}
              title="Airport Transfers"
              description="When you step off your flight, our friendly and reliable team will be there to welcome you at the airport. We offer seamless airport transfers, ensuring that you and your luggage are taken care of as we transport you comfortably to your chosen destination. Whether it's a hotel, resort, or any other location, our professional drivers will ensure you have a smooth and safe journey."
            />

            <ServiceCard
              image={excursion}
              title="Excursions"
              description="For those looking to explore the wonders of our destinations, we provide exciting excursions to places of interest. These short trips are designed for your pleasure and convenience, allowing you to immerse yourself in the local culture, history, and beauty of the region. After an enjoyable time at the excursion, we will return you to your original pick-up location."
            />

            <ServiceCard
              image={people}
              title="Tours & Safaris"
              description="For the adventurous souls, we offer a range of tailor-made safari packages that cater to everyone's preferences. Whether you're an individual traveler, a family, a couple, or a group, we have safari experiences to suit all. Our experienced tour drivers and guides will take you on unforgettable journeys through the wilderness, offering you thrilling encounters with wildlife and the opportunity to witness nature's marvels up close."
            />

            <ServiceCard
              image={car}
              title="Car Hire"
              description="To give you the freedom to explore at your own pace, we provide top-notch 4*4 jeep safari land cruisers with pop-up roofs for game viewing. These vehicles are available for hire individually or as part of a package for your group or safari adventure. Our competent tour drivers and guides will ensure that you have a safe and informative journey, making your experience even more enjoyable."
            />

            <ServiceCard
              image={booking}
              title="Accomodation Bookings"
              description="We understand that finding the right accommodation is essential for a comfortable and enjoyable trip. That's why we assist you in booking accommodations tailored to your specific needs. Whether you prefer hotels, campsites, short-term furnished accommodations, holiday homes, or resorts, we will ensure that your stay is well-suited to your preferences and budget. "
            />

            <ServiceCard
              image={tick}
              title="Air Tickets"
              description="Booking flights can be a daunting task, but our team of travel experts is here to make it hassle-free for you. We assist in booking flights with the best airlines, taking into account your travel dates, preferences, and budget. Our aim is to secure the most affordable and convenient air tickets, allowing you to focus on the excitement of your upcoming journey.
              At our travel agency, customer satisfaction is our top priority. We strive to make your travel experiences smooth, enjoyable, and unforgettable. So, whether you're embarking on a safari adventure, exploring new destinations, or simply need help with your travel arrangements, we are here to turn your travel dreams into reality. "
            />
          </div>

          {/* <h1 className="text-3xl font-bold text-orange-700 mt-10 mb-4">Places to Visit</h1>
          <p className="text-gray-700 mb-6">Explore the top tourist destinations in Kenya that will captivate your heart and soul. Discover the best of the country's natural beauty, rich culture, and awe-inspiring landmarks.</p>

          <div className="grid grid-cols-1 gap-4">
            
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

            
          </div> */}
          <div className="py-10 flex justify-center items-center" >
         <div className="flex justify-center items-center h-screen" style={backgroundStyle}>
  <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg max-w-md w-full" style={cardStyle}>
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600 cursor-pointer hover:text-blue-800">
        Click Here to View Places to Visit
      </h1>
      <Link to="/places">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
          Places to Visit
        </button>
      </Link>
    </div>
  </div>
</div>
</div>
          
           {/* Display the selected service image */}
           {/* {selectedServiceImage && (
            <div className="selected-service-image fixed top-9 left-9 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75">
              <img src={selectedServiceImage} alt="Selected Service" className="max-w-full max-h-full" />
            </div>
          )} */}
        </div>
      </main>
      {/* <Calendar handleBookingSuccess={handleBookingSuccess} />
      <CSSTransition in={bookingSuccess} timeout={300} classNames="modal-animation" unmountOnExit>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Booking is Successful!</h2>
        </div>
      </CSSTransition> */}
      <Modal showModal={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default Service;
