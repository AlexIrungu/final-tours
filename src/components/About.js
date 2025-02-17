import React, { useState } from 'react';
import Service from './ServiceSection';
import family from './shiftedfrommain/family.png';
import { useTranslation } from 'react-i18next';
import Partners from './Partners';
import { Link } from "react-router-dom";

function About() {
  const { t } = useTranslation();
  const [isBookAdventureOpen, setBookAdventureOpen] = useState(false);

  const toggleBookAdventureModal = () => {
    setBookAdventureOpen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section with Geometric Patterns */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-600 mb-6 animate-fade-in">
              {t('Who We Are')}
            </h1>
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('DANIL SCENIC TOURS is a private limited company registered in Kenya and licensed by the Tourism Regulatory Authority as a Tour operator. It provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on). The company has competent staff members with requisite knowledge and skills in tourism. The staff members include; Tour guide/drivers, Tour consultants, and Project Managers.')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of passionate experts is committed to curating tailor-made itineraries, providing exceptional service, and ensuring responsible and sustainable travel.
                Whether you're seeking thrilling wildlife encounters, serene beach retreats, or cultural explorations, Danil Scenic Tours is here to make your dream adventure a reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image and Text Section with Parallax Effect */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={family}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                alt="Exploring Kenya"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Experience Kenya</h3>
                <p className="text-gray-200">Discover the magic of East Africa with our expert guides</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Join Us on a
                <span className="block text-orange-600">Remarkable Journey</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Embark on a transformative adventure with Danil Scenic Tours and immerse yourself in the heart of Kenya's natural wonders and cultural treasures.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our meticulously designed experiences are a gateway to authentic encounters, unforgettable memories, and a deeper connection with the remarkable landscapes and communities of Kenya.
                </p>
              </div>
              <Link 
      to="/calendar"
      className="mt-auto self-start px-6 py-3 bg-orange-600 text-white font-medium rounded-lg
        hover:bg-orange-700 active:bg-orange-800 
        transform hover:scale-105 
        transition-all duration-200 ease-in-out
        shadow-md hover:shadow-lg
        flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      Book Now
    </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with Card Design */}
      <div className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Experiences",
                description: "We craft genuine, immersive journeys that showcase the real Kenya."
              },
              {
                title: "Sustainable Tourism",
                description: "Committed to preserving Kenya's natural beauty for future generations."
              },
              {
                title: "Local Expertise",
                description: "Our knowledgeable team ensures you experience the best of Kenya."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section with Enhanced Styling */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Partners />
        </div>
      </div>
    </div>
  );
}

export default About;