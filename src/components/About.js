import React, { useState } from 'react';
import Service from './ServiceSection'
import family from './shiftedfrommain/family.png'
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Partners from './Partners';

function About() {
  const { t } = useTranslation(); // Use useTranslation hook to access translations
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
          <h1 className="text-4xl font-bold mb-8 text-gray-800">{t('Who We Are')}</h1>

            <p className=" text-gray-700">
           {t('DANIL SCENIC TOURS is a private limited company registered in Kenya and licensed by the Tourism Regulatory Authority as a Tour operator. It provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on). The company has competent staff members with requisite knowledge and skills in tourism. The staff members include; Tour guide/drivers, Tour consultants, and Project Managers.')}
            </p>
            <p className=" text-gray-700 mt-4">
              Our team of passionate experts is committed to curating tailor-made itineraries, providing exceptional service, and ensuring responsible and sustainable travel. Whether you're seeking thrilling wildlife encounters, serene beach retreats, or cultural explorations, Danil Scenic Tours is here to make your dream adventure a reality.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="relative">
            <img src={family} className="rounded-lg w-full" alt="Exploring Kenya" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            </div>
          </div>

          {/* Text Card */}
          <div>
            <div className="text-3xl font-bold mb-6">Join Us on a Journey</div>
            <p className=" text-gray-700 mb-4">
              Embark on a transformative adventure with Danil Scenic Tours and immerse yourself in the heart of Kenya's natural wonders and cultural treasures.
            </p>
            <p className=" text-gray-700 mb-4">
              Our meticulously designed experiences are a gateway to authentic encounters, unforgettable memories, and a deeper connection with the remarkable landscapes and communities of Kenya.
            </p>
          </div>
        </div>


<div className='py-10'>
        {/* <div className='text-4xl font-bold mb-8 text-gray-800 mission-container'> */}
  <h2 className="text-3xl font-bold mb-4 ">Our Mission</h2>
  <div>
    <p className=" text-gray-700 mb-4">
      To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
    </p>
  </div>

<div>
<Service />
</div>

</div>
 <Partners /> 
      </div>
    </div>
  );
}

export default About;
