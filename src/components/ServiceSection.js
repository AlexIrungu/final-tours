import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faHiking,
  faGlobeAfrica,
  faCar,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

import carImage from "./hireee.jpg";
import bookingImage from "./acc-book.jpeg";
import tickImage from "./tick.jpeg";
import sunImage from "./cropped.jpeg";
import excursionImage from "./lifeee.jpg";
import peopleImage from "./people.jpg";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const services = [
    {
      icon: faPlane,
      title: "Airport Transfers",
      description:
        "When you step off your flight, our friendly and reliable team will be there to welcome you at the airport. We offer seamless airport transfers, ensuring that you and your luggage are taken care of as we transport you comfortably to your chosen destination. Whether it's a hotel, resort, or any other location, our professional drivers will ensure you have a smooth and safe journey.",
      image: sunImage,
    },
    {
      icon: faHiking,
      title: "Excursions",
      description:
        "For those looking to explore the wonders of our destinations, we provide exciting excursions to places of interest. These short trips are designed for your pleasure and convenience, allowing you to immerse yourself in the local culture, history, and beauty of the region. After an enjoyable time at the excursion, we will return you to your original pick-up location.",
      image: excursionImage,
    },
    {
      icon: faCar,
      title: "Car Hire",
      description:
        "To give you the freedom to explore at your own pace, we provide top-notch 4x4 jeep safari land cruisers with pop-up roofs for game viewing. These vehicles are available for hire individually or as part of a package for your group or safari adventure. Our competent tour drivers and guides will ensure that you have a safe and informative journey, making your experience even more enjoyable.",
      image: carImage,
    },
    {
      icon: faHotel,
      title: "Accommodation Bookings",
      description:
        "We understand that finding the right accommodation is essential for a comfortable and enjoyable trip. That's why we assist you in booking accommodations tailored to your specific needs. Whether you prefer hotels, campsites, short-term furnished accommodations, holiday homes, or resorts, we will ensure that your stay is well-suited to your preferences and budget.",
      image: bookingImage,
    },
    {
      icon: faPlane,
      title: "Air Tickets",
      description:
        "Booking flights can be a daunting task, but our team of travel experts is here to make it hassle-free for you. We assist in booking flights with the best airlines, taking into account your travel dates, preferences, and budget. Our aim is to secure the most affordable and convenient air tickets, allowing you to focus on the excitement of your upcoming journey.",
      image: tickImage,
    },
    {
      icon: faGlobeAfrica,
      title: "Tours & Safaris",
      description:
        "For the adventurous souls, we offer a range of tailor-made safari packages that cater to everyone's preferences. Whether you're an individual traveler, a family, a couple, or a group, we have safari experiences to suit all. Our experienced tour drivers and guides will take you on unforgettable journeys through the wilderness, offering you thrilling encounters with wildlife and the opportunity to witness nature's marvels up close.",
      image: peopleImage,
    },
    // ... add other services
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + services.length) % services.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const handleBookNow = () => {
    console.log("Book Now clicked!");
  };

  return (
    <section className="py-20 bg-gray-100" id="service">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Services we offer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-12">
            At our company, we pride ourselves in providing a comprehensive range of services to cater to all your travel needs. Whether you're arriving at an airport, looking for exciting excursions, seeking thrilling safaris, requiring car hire, accommodation bookings, or assistance with air tickets, we've got you covered!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          {services.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <div className="relative mx-auto w-5/6 md:w-4/6 lg:w-3/6 mt-12">
          {/* <div className="flex justify-between items-center">
            <div className="w-1/6">
              <button
                className="bg-gray-800 text-white px-3 py-2 rounded"
                onClick={goToPreviousSlide}
              >
                <FontAwesomeIcon icon="arrow-left" />
              </button>
            </div>
            <div className="w-4/6">
              <ServiceCard {...services[currentSlide]} />
            </div>
            <div className="w-1/6">
              <button
                className="bg-gray-800 text-white px-3 py-2 rounded"
                onClick={goToNextSlide}
              >
                <FontAwesomeIcon icon="arrow-right" />
              </button>
            </div>
          </div> */}
          
          <div className="mt-8">
            <ServiceCard {...services[currentSlide]} />
          </div>
          {/* <div className="w-1/6">
              <button
                className="bg-gray-800 text-white px-3 py-2 rounded"
                onClick={goToPreviousSlide}
              >
                <FontAwesomeIcon icon="arrow-left" />
              </button>
            </div> */}
          <div className="w-1/6">
              <button
                className="bg-orange-600 text-white px-3 py-2 rounded"
                onClick={goToNextSlide}
              >
                <FontAwesomeIcon icon="arrow-right" />
              </button>
            </div>
            
        </div>
        <div className="text-center mt-12">
          <Link to="/calendar">
            <button
              className="bg-brown-600 text-customWhite px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, image }) => (
  <div className="bg-white rounded-lg p-8 shadow-md">
    <div className="mt-6">
      <img
        src={image}
        alt={title}
        className="rounded-md shadow-md w-full h-80 object-cover"
      />
    </div>
    <div className="mb-6 mt-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-green-600" />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-l text-gray-600">{description}</p>
  </div>
);

export default ServiceSection;
