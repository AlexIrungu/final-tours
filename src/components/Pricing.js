import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight, Calendar } from 'lucide-react';
import bogoria from './day2day/bogoria.jpg'
import lavish from './day2day/lavish.jpg'
import crescent from './day2day/crescent1.jpg'
import masimara from './day2day/masimara.jpg'
import mara from './day2day/3mara.jpg'
import extension from './day2day/extension.jpg'
import sevenday from './day2day/sevenday.jpg'

const Pricing = ({ setIsPricingOpen }) => {
  const topPlacesPricing = [
    {
      place: '3-Day Exploring Maasai Mara',
      description: 'This is a 3 day extensive tour to explore the world renowned Masai Mara in Kenya, Africa...',
      price: '$982 to $1297pp(USD)',
      image: mara,
      id: 'maasai-mara'
    },
    {
      place: '10-Day Extensive Tour in Kenya',
      description: 'A thrilling adventure through Kenya/s magnificent National parks -Tsavo East and West, Amboseli, Samburu and Masai Mara...',
      price: '$3515 to $4622pp(USD)',
      image: extension,
      id: 'extensive-tour'
    },
    {
      place: '7-Day Adventure- Amboseli, Naivasha, Nakuru & Maasai Mara',
      description: 'During the trip, you will be taken to various destinations namely: Amboseli National Park where you shall get a clear view photo of the snow capped Mt Kilimanjaro...',
      price: '$1576 to $2175pp(USD)',
      image: masimara,
      id: 'adventure-amboseli'
    },
    {
      place: '6-Day Budget Tour - Amboseli, Crescent, Nakuru and Mara',
      description: 'Experience a thrilling safari in Kenya at Amboseli, Lake Nakuru and Masai Mara National Parks where you shall encounter...',
      price: '$1,903 to $2,275 pp (USD)',
      image: crescent,
      id: 'budget-tour'
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 mb-6">
            Tour Rates & Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Experience the beauty of Kenya with our carefully curated tour packages. 
            Rates may vary based on season, group size, and accommodation preferences.
          </p>
          <div className="text-amber-600 font-medium text-lg">
            Contact us for personalized pricing and custom tour options
          </div>
        </motion.div>

        {/* Payment Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Payment Information</h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Direct bank transfer available (USD account)
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                30% deposit required for safari confirmation
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Balance due three weeks before safari
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Note: Additional costs may apply for certain services
              </p>
            </div>
          </div>
        </motion.div>

        {/* Book Custom Tour Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mb-16"
        >
          <Link 
            to="/calendar" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Custom Tour
          </Link>
        </motion.div>

        {/* Tour Packages Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {topPlacesPricing.map((placeData, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/${placeData.id}`}>
                <div className="relative">
                  <LazyLoadImage
                    src={placeData.image}
                    alt={placeData.place}
                    effect="blur"
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {placeData.place}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {placeData.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-amber-600">
                      {placeData.price}
                    </span>
                    <ArrowRight className="h-5 w-5 text-amber-600 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;