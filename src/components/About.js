import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlay } from 'react-icons/fa';
import aboutImage from './aboutImage.jpeg';

function About() {
  const [isPlayIconOpen, setPlayIconOpen] = useState(false);
  const [isBookAdventureOpen, setBookAdventureOpen] = useState(false);

  const togglePlayIconModal = () => {
    setPlayIconOpen((prevState) => !prevState);
  };

  const toggleBookAdventureModal = () => {
    setBookAdventureOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Who We Are</h1>
            <p className="text-lg text-gray-700">
            DANIL SCENIC TOURS is a private limited company registered in Kenya licensed by the Tourism Regulatory Authority as a Tour operator. 
            It provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on).
The company has competent staff members with requisite knowledge and skills in tourism.

The staff members include; Tour guide/drivers, Tour consultants, and Project Managers.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our team of passionate experts is committed to curating tailor-made itineraries, providing exceptional service, and ensuring responsible and sustainable travel. Whether you're seeking thrilling wildlife encounters, serene beach retreats, or cultural explorations, Danil Scenic Tours is here to make your dream adventure a reality.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="relative">
            <img src={aboutImage} className="rounded-lg w-full" alt="Exploring Kenya" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              {/* <button
                onClick={togglePlayIconModal}
                className="text-white font-bold underline bg-blue-400 rounded-full p-4 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                <FaPlay className="text-white text-3xl" />
              </button> */}
            </div>
          </div>

          {/* Text Card */}
          <div>
            <div className="text-3xl font-bold mb-6">Join Us on a Journey</div>
            <p className="text-lg text-gray-700 mb-4">
              Embark on a transformative adventure with Danil Scenic Tours and immerse yourself in the heart of Kenya's natural wonders and cultural treasures.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our meticulously designed experiences are a gateway to authentic encounters, unforgettable memories, and a deeper connection with the remarkable landscapes and communities of Kenya.
            </p>
            {/* <button
              onClick={toggleBookAdventureModal}
              className="cta-button mt-6 bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-orange-800"
            >
              Discover Top Places To Visit
            </button> */}
          </div>
        </div>
      </div>
      <div className="py-10">
        {/* Play Icon Modal */}
        {/* <ModalVideo
          channel="youtube"
          isOpen={isPlayIconOpen}
          videoId="OUNCrtxLMLM"
          onClose={togglePlayIconModal}
        /> */}
      </div>
    </div>
  );
}

export default About;
