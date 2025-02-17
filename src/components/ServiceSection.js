import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faLandmark,
  faMap,
  faUmbrellaBeach,
  faCogs,
  faCar,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import safaritours from "./shiftedfrommain/safaritours.jpg";
import cultural from "./shiftedfrommain/culturalexpeditions.jpg";
import adventuresafari from "./shiftedfrommain/adventuresafari1.jpg";
import beaches from "./shiftedfrommain/beachescapes.avif";
import custom from "./shiftedfrommain/customizedsafari.jpg";
import carImage from "./shiftedfrommain/hireee.jpg";

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

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
      image: carImage,
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
      image: custom,
    },
    {
      icon: faUmbrellaBeach,
      title: "Beach Escapes",
      description:
        "Unwind on the pristine shores of the Kenyan Coast in Diani, Watamu, or Malindi. Relax in luxury beach resorts and explore marine life through snorkeling and diving.",
      image: beaches,
    },
  ];

  return (
    <section className="py-16 bg-white" id="service">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Services we offer
          </h1>
          <p className="text-gray-600">
            At our company, we pride ourselves in providing a comprehensive range
            of services to cater to all your travel needs. Whether you're arriving
            at an airport, looking for exciting excursions, seeking thrilling
            safaris, requiring car hire, accommodation bookings, or assistance
            with air tickets, we've got you covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isSelected={selectedService === index}
              onClick={() => setSelectedService(index)}
              onClose={() => setSelectedService(null)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/calendar">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, isSelected, onClick, onClose }) => {
  return (
    <div 
      className="relative group cursor-pointer h-96 rounded-xl overflow-hidden"
      onClick={onClick}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />

      {/* Default Content (Visible when not selected) */}
      {!isSelected && (
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
          <div className="mb-4">
            <FontAwesomeIcon icon={service.icon} className="text-3xl mb-2" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to learn more
          </p>
        </div>
      )}

      {/* Expanded Content (Visible when selected) */}
      {isSelected && (
        <div className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col text-white">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xl" />
          </button>
          
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={service.icon} className="text-3xl mr-3" />
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
          
          <p className="text-gray-200 leading-relaxed overflow-y-auto">
            {service.description}
          </p>
          
          <Link 
            to="/calendar" 
            className="mt-auto self-start px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Book Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceSection;