import React from 'react';
import bogoria from './day2day/bogoria.jpg'
import lavish from './day2day/lavish.jpg'
import crescent from './day2day/crescent1.jpg'
import masimara from './day2day/masimara.jpg'
import mara from './day2day/3mara.jpg'
import extension from './day2day/extension.jpg'
import sevenday from './day2day/sevenday.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from 'react-router-dom'

const Pricing = ({ setIsPricingOpen }) => {

  


    const topPlacesPricing = [
       
      {
        place: '3-Day Exploring Maasai Mara',
        description: 'This is a 3 day extensive tour to explore the world renowned Masai Mara in Kenya, Africa...',
        price: '$982 to $1297pp(USD)',
        image: mara,
        id: 'maasai-mara' // Unique ID for the place
      },
      {
        place: '10-Day Extensive Tour in Kenya',
        description: 'A thrilling adventure through Kenya/s magnificent National parks -Tsavo East and West, Amboseli, Samburu and Masai Mara...',
        price: '$3515 to $4622pp(USD)',
        image: extension,
        id: 'extensive-tour' // Unique ID for the place
      },
      {
        place: '7-Day Adventure- Amboseli, Naivasha, Nakuru & Maasai Mara',
        description: 'During the trip, you will be taken to various destinations namely: Amboseli National Park where you shall get a clear view photo of the snow capped Mt Kilimanjaro...',
        price: '$1576 to $2175pp(USD)',
        image: masimara,
        id: 'adventure-amboseli' // Unique ID for the place
      },
      {
        place: '6-Day Budget Tour - Amboseli, Crescent, Nakuru and Mara',
        description: 'Experience a thrilling safari in Kenya at Amboseli, Lake Nakuru and Masai Mara National Parks where you shall encounter...',
        price: '$1,903 to $2,275 pp (USD)',
        image: crescent,
        id: 'budget-tour' // Unique ID for the place
      },
      {
        place: '3-Day Lavish Safari - Amboseli National Park',
        description: 'This is a lavish three-day safari into the heart of Amboseli National Park in Kenya, where untamed wilderness meets unparalleled luxury.',
        price: '$1,301 to $1,984 pp (USD)',
        image: lavish,
        id: 'lavish'
      },
      {
        place: '6-Day Mid Range Safari - Bogoria, Nakuru, Naivasha, Mara',
        description: 'An exclusive safari through Kenyas natural wonders to Lake Bogoria, Lake Nakuru, Lake Naivasha, and Masai Mara',
        price: '$2,295 to $3,037 pp (USD)',
        image: bogoria,
        id: 'bogoria'
      },
      {
        place: '7-Day Budget -Amboseli, Naivasha, Bogoria, Nakuru, Mara',
        description: 'A 7-day trip to Kenyas game parks and scenery: Amboseli, Lake Naivasha, Lake Bogoria, Lake Nakuru, and Masai Mara',
        price: '$2,110 to $2,509 pp (USD)',
        image: sevenday,
        id: 'seven'
      },

          
                
      ];
    const handleViewPricing = () => {
        // Simulate a process with a delay (replace with your logic)
        console.log("View Pricing process initiated...");
        setTimeout(() => {
          console.log("View Pricing successful!");
          setIsPricingOpen(true);
          // You can add a redirect here if needed
        }, 1500);
      };

  return (
    
    <div className="p-8 bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Tour Rates</h1>
      <p className="text-lg text-gray-700 mb-2">
        Please note that these rates are approximate and may vary depending on factors such as the season, group size, and specific accommodations
      </p>
      <h3 className="text-orange-500 font-semibold mb-8">Contact us for precise pricing.</h3>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-orange-500 mb-2">Payment Options:</h3>
      <p className="text-lg text-gray-700 mb-4">
        For payment, you can do a direct bank transfer (USD account). For safari confirmation, a 30% deposit of the total safari cost is required, and the balance should be cleared three weeks before the safari.
      </p>
      <p className="text-gray-600">
        Note: A supplementary cost may be involved for certain services.
      </p>
    </div>
    <button className="w-full py-2 mb-8 bg-orange-500 text-white rounded hover:bg-orange-600">
      <Link to="/calendar" className="text-white">BOOK A CUSTOM TOUR</Link>
    </button>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {topPlacesPricing.map((placeData, index) => (
        <div key={index} className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Link to={`/${placeData.id}`}>
            <LazyLoadImage src={placeData.image} alt={placeData.place} className="w-full h-64 object-cover rounded-t-lg" />
            <h2 className="text-2xl font-bold text-blue-600 mt-4">{placeData.place}</h2>
            <p className="text-gray-700 mb-4">{placeData.description}</p>
            <p className="text-gray-700 font-bold text-2xl">{placeData.price}</p>
            {/* <LazyLoadImage
            alt={placeData.place}
            src={placeData.image} 
            effect="blur"
          /> */}
          </Link>
        </div>
      ))}
    </div>
   
  </div>
);
};

export default Pricing;