import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import mtkenya from './nature/mtkenya.jpg';
import riftvalley from './nature/riftvalley.jpg';
import diani from './nature/diani.jpg';
import mara from './nature/mara.jpg';
import lewa from './nature/lewa.jpeg';
import turkana from './nature/turkana.jpeg';
import kenya from './nature/kenyaaa.jpeg';
import mara2 from './nature/mara2.jpg'
import valey1 from './nature/valley1.jpeg'
import valey2 from './nature/valley2.jpeg'
import valey3 from './nature/valley3.jpeg'
import valey4 from './nature/valey4.jpeg'
import kenya1 from './nature/kenya1.jpeg'
import kenya2 from './nature/kenya2.jpeg'
import kenya3 from './nature/kenya3.jpeg'
import kenya4 from './nature/kenya4.jpeg'
import mara3 from './nature/mara3.jpeg'
import mara4 from './nature/mara4.jpeg'
import mara5 from './nature/mara5.jpeg'
import elgon1 from './nature/elgon1.jpeg'
import elgon2 from './nature/elgon2.jpeg'
import elgon3 from './nature/elgon3.jpeg'
import elgon4 from './nature/elgon4.jpeg'
import coast from './nature/coast.jpg'
import coast1 from './nature/coast1.jpeg'
import coast2 from './nature/coast2.jpeg'
import coast3 from './nature/coast3.jpeg'
import coast4 from './nature/coast4.jpeg'
import tuk1 from './nature/turkana1.jpeg'
import tuk2 from './nature/tuk2.jpeg'
import tuk3 from './nature/tuk3.jpeg'
import tuk4 from './nature/tuk4.jpeg'
import lewa1 from './nature/lewa1.jpeg'
import lewa2 from './nature/lewa2.jpeg'
import lewa3 from './nature/lewa3.jpeg'
import lewa4 from './nature/lewa4.jpeg'

const ExploreNature = ({ selectedRegion, setSelectedRegion, hideDetails = false }) => {
  const regions = [
    {
      name: 'Great Rift Valley',
      image: [riftvalley, valey1, valey2, valey3, valey4],
      description: 'Discover the stunning landscapes of the Great Rift Valley, where you can witness the dramatic escarpments, freshwater lakes, and vibrant wildlife.',
    },
    {
      name: 'Mount Kenya',
      image: [mtkenya, kenya1, kenya2, kenya3, kenya4],
      description: 'Embark on a virtual ascent of Mount Kenya, the second-highest mountain in Africa. Explore its diverse ecosystems, from lush rainforests to icy peaks.',
    },
    {
      name: 'Maasai Mara',
      image: [mara,mara2, mara3, mara4, mara5],
      description: 'Experience the iconic Maasai Mara, renowned for its rich biodiversity and the annual Great Migration of wildebeest, zebras, and other wildlife.',
    },
    {
      name: 'Kenyan Coast',
      image: [diani, coast, coast1, coast2, coast3, coast4],
      description: 'Relax on the pristine beaches of the Kenyan Coast, where turquoise waters meet white sandy shores, and explore coral reefs teeming with marine life.',
    },
    {
      name: 'Mount Elgon',
      image: [kenya, elgon1, elgon2, elgon3, elgon4],
      description: 'Discover Mount Elgon, an extinct shield volcano and the fourth-highest mountain in Africa. Explore its diverse ecosystems, caves, and hot springs in the surrounding area.',
    },
    {
      name: 'Lake Turkana',
      image: [turkana, tuk1, tuk2, tuk3, tuk4],
      description: 'Explore the largest desert lake in the world, Lake Turkana, with its unique landscapes, volcanic islands, and archaeological sites that provide insights into early human history.',
    },
    {
      name: 'Lewa Wildlife Conservancy',
      image: [lewa, lewa1, lewa2, lewa3, lewa4],
      description: 'Support conservation efforts at Lewa Wildlife Conservancy, a private reserve known for its success in protecting endangered species, including rhinos and Grevy\'s zebras.',
    },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div className={hideDetails ? "" : "min-h-screen bg-gradient-to-b from-amber-50 to-white py-12"}>
      <div className={hideDetails ? "" : "container mx-auto px-4"}>
        {!hideDetails && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Explore Kenya's Natural Wonders
            </h2>
            <p className="text-lg text-amber-700">
              Discover the breathtaking landscapes and wildlife across different regions
            </p>
          </div>
        )}
        
        <div className={hideDetails ? "space-y-4" : "grid md:grid-cols-12 gap-8"}>
          {/* Regions List */}
          <div className={hideDetails ? "" : "md:col-span-4 space-y-4"}>
            {regions.map((region) => (
              <motion.div
                key={region.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedRegion?.name === region.name
                    ? 'bg-amber-800 text-white shadow-lg'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                onClick={() => {
                  setSelectedRegion(region);
                  setActiveImageIndex(0);
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{region.name}</h3>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform ${
                      selectedRegion?.name === region.name ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Region Details - only shown if hideDetails is false */}
          {!hideDetails && (
            <div className="md:col-span-8">
              {selectedRegion ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  {/* Image Gallery */}
                  <div className="relative h-[400px]">
                    <img
                      src={selectedRegion.image[activeImageIndex]}
                      alt={selectedRegion.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Navigation */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedRegion.image.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeImageIndex === index
                              ? 'bg-white w-4'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      {selectedRegion.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedRegion.description}
                    </p>
                    
                    {/* Thumbnail Gallery */}
                    <div className="mt-6 grid grid-cols-5 gap-2">
                      {selectedRegion.image.map((img, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative rounded-lg overflow-hidden ${
                            activeImageIndex === index
                              ? 'ring-2 ring-amber-500'
                              : ''
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${selectedRegion.name} ${index + 1}`}
                            className="w-full h-16 object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p className="text-xl">Select a region to explore</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreNature;