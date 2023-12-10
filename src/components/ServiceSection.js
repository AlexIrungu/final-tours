import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  
 
  faCar,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

import { faBinoculars, faGlobeAfrica, faLandmark, faUsers, faMap, faHiking, faUmbrellaBeach, faSun, faCogs, faWrench } from '@fortawesome/free-solid-svg-icons';

import carImage from "./hireee.jpg";
import { Link } from "react-router-dom";
import safaritours from './safaritours.jpg'
import cultural from './culturalexpeditions.jpg'
import adventuresafari from './adventuresafari1.jpg'
import beaches from './beachescapes.avif'
import custom from './customizedsafari.jpg'

const ServiceSection = () => {
  const services = [
    {
      icon: faBinoculars,
      title: "Safari Tours",
      description:
        "Explore Kenya's world-renowned national parks, including Maasai Mara, Amboseli, Tsavo and Samburu, on our guided safari tours. Witness the Big Five and countless other species in their natural habitats.",
      image: safaritours,
    },
    {
      icon: faLandmark,
      title: "Cultural Expeditions",
      description:
        "Immerse yourself in the vibrant traditions and daily life of Kenya's diverse cultures. Meet local communities, learn about their customs, and savor traditional cuisine.",
      image: cultural,
    },
    {
      icon: faCar,
      title: "Car Hire",
      description:
        "The company has a diverse fleet of well-maintained vehicles. We provide both residents and tourists the freedom to explore Kenya's scenic landscapes, cities and attractionsat their own pace. Our fleet comprises of; Economy Cars, SUVs, Luxury Cars, Vans and 4x4 Off-Road Vehicles",
      image: carImage ,
    },
    {
      icon: faMap,
      title: "Adventure Safaris",
      description:
        "For the thrill-seekers, we offer adventure safaris that include activities like hiking, biking, and hot air ballooning.",
      image: adventuresafari,
    },
    {
      icon: faCogs,
      title: "Customized Safaris",
      description:
        "We tailor itineraries to match your preferences, whether you're travelling with family, friends, or as a solo-adventurer.",
      image: custom ,
    },
    {
      icon: faUmbrellaBeach,
      title: "Beach Escapes",
      description:
        "Unwind on the pristine shores of the Kenyan Coast in Diani, Watamu, or Malindi. Relax in luxury beach resorts and explore marine life through snorkeling and diving.",
      image: beaches,
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
    <section className="py-20 bg-gray-100 " id="service" >
      <div className="container mx-auto  ">
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
