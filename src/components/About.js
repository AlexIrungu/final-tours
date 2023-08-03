import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlay } from 'react-icons/fa';
import aboutImage from './aboutImage.jpeg';

function About() {
  const [isPlayIconOpen, setPlayIconOpen] = useState(false);
  const [isBookAdventureOpen, setBookAdventureOpen] = useState(false);

  // Function to handle opening and closing the Play Icon modal
  const togglePlayIconModal = () => {
    setPlayIconOpen((prevState) => !prevState);
  };

  // Function to handle opening and closing the Book Adventure modal
  const toggleBookAdventureModal = () => {
    setBookAdventureOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-green-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">About Danil Scenic Tours</h1>
            <p className="text-lg text-gray-700">
              DANIL SCENIC TOURS is a private limited company registered in Kenya, licensed by the Tourism Regulatory Authority as a Tour operator. It provides practical support to local and foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on).
            </p>
            <p className="text-lg text-gray-700">
              The company has competent staff members with requisite knowledge and skills in tourism, including tour guide/drivers, tour consultants, and project managers.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="relative">
            <img src={aboutImage} className="rounded-lg w-full" alt="" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <button
                onClick={togglePlayIconModal}
                className="text-white font-bold underline bg-blue-400 rounded-full p-4 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                <FaPlay className="text-white text-3xl" />
              </button>
            </div>
          </div>

          {/* Text Card */}
          <div>
            <div className="text-3xl font-bold mb-6">Join Us at Danil Tours</div>
            <p className="text-lg text-gray-700 mb-4">
              Join us on a Danil Scenic Tours adventure and allow us to unlock the wonders of Kenya for you.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Get ready to create cherished memories, forge new connections, and discover the true essence of this magnificent country.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Get ready to create cherished memories, forge new connections, and discover the true essence of this magnificent country.
            </p>
            <button
              onClick={toggleBookAdventureModal}
              className="cta-button mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
            >
              Book Your Adventure
            </button>
          </div>
        </div>
      </div>

      {/* Play Icon Modal */}
    <ModalVideo
      channel="youtube"
      isOpen={isPlayIconOpen}
      videoId="OUNCrtxLMLM"
      onClose={togglePlayIconModal}
    />

    {/* Book Adventure Modal */}
    <ModalVideo
      channel="youtube"
      isOpen={isBookAdventureOpen}
      videoId="ZFSZb-P4noU"
      onClose={toggleBookAdventureModal}
    />
    </div>
  );
}

export default About;
