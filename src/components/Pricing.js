import React from 'react';
import olpegeta from './top-places/olpegeta.png'
import amboseli from './top-places/amboseli.jpeg'
import diani from './top-places/dianibeach.jpeg'
import naivasha from './top-places/lakenaivasha.jpeg'
import nakuru from './top-places/lakenakuru.jpeg'
import maasaimara from './top-places/maasaimara.jpeg'
import mtkenya from './top-places/mtkenya.jpeg'
import big5 from './top-places/big5.jpg'
import kenyabeach from './top-places/kenya-beach.jpg'
import mm from './top-places/mm.jpg'
import sk from './top-places/southkenya.jpg'
import tm from './top-places/tailor-made.jpg'
import nm from './top-places/nm.jpg'
const Pricing = ({ setIsPricingOpen }) => {

    const topPlacesPricing = [
        // {
        //     place: 'Ol Pejeta Conservancy',
        //     description: 'Boasting the largest rhinoceros population in Kenya...',
        //     price: '$50/person',
        //     image: olpegeta, 
        //   },
          // {
          //   place: 'Amboseli National Park',
          //   description: 'With the majestic silhouette of Mount Kilimanjaro as its backdrop...',
          //   price: '$50/person',
          //   image: amboseli,
          // },
          {
            place: 'Cultural Exploration in Samburu (7 days)',
            description: 'An authentic journey to experience the traditions of Samburu people',
            price: 'starting at $2499 per person',
            image: naivasha,
          },
          {
            place: 'Maasai Mara Safari (4 days)',
            description: 'Includes game drives, accomodations, and all meals',
            price: 'starting at $1599 per person',
            image: maasaimara,
          },
          {
            place: 'Adventuire Safari in the Great Rift Valley (6 days)',
            description: 'Combines thrilling activities like hiking and biking with wildlife viewing',
            price: 'starting at $1899 per person',
            image: nakuru,
          },
          {
            place: 'Kenyan Coastal Retreat (5 Days)',
            description: 'Luxury beachfront accomodations and water sports',
            price: 'starting at $1799 per person',
            image: diani,
          },
          // {
          //   place: 'Mount Kenya National Park',
          //   description: 'Nestled within the picturesque landscapes of East Africa...',
          //   price: '$120/person',
          //   image: mtkenya,
          // },
          {
            place: 'Custom Safari Adventures',
            description: 'Pricing varies based on your preferences and itenerary',
            // price: 'from $250',
            image: tm,
            
          },
          // {
          //   place: '10 day Kenya and Beach',
          //   description: 'Go south and swim golden',
          //   price: 'from $1700',
          //   image: kenyabeach
           
          // },
          // {
          //   place: '5 day Kenya: A Beautiful Road Trip',
          //   description: 'Lake Nakuru + Maasai Mara',
          //   price: 'from $800',
          //   // description: 'Extension with Diani Beach Possible',
          //   image: nm,
            
          // },
          // {
          //   place: '4 Day Kenya: Maasai Mara Exploration',
          //   description: 'Maasai Mara Game Reserve, Combination with Diani Beach possible'  ,
          //   price: 'from $623',
          //   // description: ,
          //   image: mm,
           
          // },
          // {
          //   place: '8 Day Kenya: Big 5 Special Golden',
          //   description: 'OlPegeta + Lake Nakuru + Lake Naivasha + Maasai Mara , Combination with Diani Beach possible', 
          //   price: 'from $1200',
            
          //   image: big5
           
          // },
          // {
          //   place: '7 Day Kenya: Go South Golden',
          //   description: 'Maasai Mara + Lake Naivasha + Amboseli, Combination with Diani Beach possible' , 
          //   price: 'from $1000',
            
          //   image: sk
           
          // },
          
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
    
    <div>
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold text-orange-700 mt-10 mb-4 text-center">
        Tour Rates
      </h1>
      <p>
        Please note that these rates are approximate and may vary depending on factors such as the season, group size, and specific accomodations
      </p>
      <h3>Contact us for precise pricing.</h3>
       {/* Payment Information */}
  <div className="mt-8">
    <h3 className="text-lg font-bold text-orange-700 mb-2">Payment Options:</h3>
    <p className="mb-4">
      For payment, you can do a direct bank transfer (USD account). For safari confirmation, a 30% deposit of the total safari cost is required, and the balance should be cleared three weeks before the safari.
    </p>
    <p className="text-gray-600">
      Note: A supplementary cost may be involved for certain services.
    </p>
  </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {topPlacesPricing.map((placeData, index) => (
          <div key={index} className="bg-white p-6 border rounded-lg shadow-lg">
            <img
              src={placeData.image} // Use the image filename as the source
              alt={placeData.place}
              className="h-32 w-32 mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600">{placeData.place}</h2>
            <p className="text-gray-700 mb-4">{placeData.description}</p>
            <p className="text-gray-700 font-bold text-2xl">{placeData.price}</p>
            {/* <button
              onClick={() => {
                setIsPricingOpen(true);
              }}
              className="cta-button mt-4 bg-customWhite text-brown-600 underline font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
            >
              View Pricing
            </button> */}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Pricing;