import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, ChevronRight, Camera } from 'lucide-react';

const wildlifeFeatures = [
  {
    name: 'The Big Five',
    description: 'Encounter Africa\'s most iconic animals: the Lion, Leopard, Elephant, Rhino, and Cape Buffalo. Kenya is one of the few places where you can spot all of these magnificent creatures in their natural habitat.',
    imageFilter: 'big5',
    details: {
      locations: ['Masai Mara', 'Tsavo East', 'Amboseli'],
      bestTime: 'July to October (Migration Season)',
      highlights: ['Lion prides in Masai Mara', 'Elephant herds in Amboseli', 'Black Rhino in Tsavo']
    }
  },
  {
    name: 'Safari Adventures',
    description: 'Experience thrilling game drives through Kenya\'s most spectacular national parks and reserves. Witness the Great Migration, spot countless species, and immerse yourself in the wild heart of Africa.',
    imageFilter: 'safari',
    details: {
      locations: ['Masai Mara', 'Samburu', 'Lake Nakuru'],
      bestTime: 'Year-round, peak during migration',
      highlights: ['Wildebeest Migration', 'Sunrise game drives', 'Luxury safari lodges']
    }
  },
  {
    name: 'Bird Paradise',
    description: 'Kenya is a birdwatcher\'s paradise with over 1,100 recorded species. From the famous flamingos of Lake Nakuru to the rare species in Mount Kenya\'s forests, discover an incredible variety of avian life.',
    imageFilter: 'birds',
    details: {
      locations: ['Lake Nakuru', 'Lake Naivasha', 'Kakamega Forest'],
      bestTime: 'October to April',
      highlights: ['Flamingo flocks', 'Fish Eagles', 'Forest birds']
    }
  },
  {
    name: 'Marine Life',
    description: 'Explore Kenya\'s stunning coastal waters, home to diverse marine life including dolphins, sea turtles, and vibrant coral reefs. The warm waters of the Indian Ocean host an incredible underwater ecosystem.',
    imageFilter: 'marine',
    details: {
      locations: ['Watamu', 'Malindi', 'Diani Beach'],
      bestTime: 'December to March',
      highlights: ['Whale Sharks', 'Coral Gardens', 'Sea Turtles']
    }
  },
  {
    name: 'Conservation Success',
    description: 'Learn about Kenya\'s dedication to wildlife conservation, from anti-poaching efforts to community-based conservation initiatives. Discover how these programs are helping protect endangered species.',
    imageFilter: 'conservation',
    details: {
      locations: ['Lewa Conservancy', 'Ol Pejeta', 'David Sheldrick Wildlife Trust'],
      bestTime: 'Year-round',
      highlights: ['Rhino conservation', 'Elephant orphanage', 'Community projects']
    }
  }
];

const ExploreWildlife = ({ onFeatureClick, selectedFeature }) => {
  return (
    <div className="space-y-3">
      {wildlifeFeatures.map((feature) => (
        <motion.div
          key={feature.name}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
            selectedFeature?.name === feature.name
              ? 'bg-amber-800 text-white shadow-xl'
              : 'bg-white/80 shadow-md hover:shadow-lg backdrop-blur-sm'
          }`}
          onClick={() => onFeatureClick(feature)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PawPrint className={`w-5 h-5 ${selectedFeature?.name === feature.name ? 'text-amber-200' : 'text-amber-600'}`} />
              <h3 className="text-lg font-semibold">{feature.name}</h3>
            </div>
            <ChevronRight 
              className={`w-5 h-5 transition-transform duration-300 ${
                selectedFeature?.name === feature.name ? 'rotate-90' : ''
              }`}
            />
          </div>
          {selectedFeature?.name === feature.name && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-white/90"
            >
              <p className="text-sm mb-4">{feature.description}</p>
              <div className="bg-amber-900/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Key Information:</h4>
                <ul className="space-y-2 text-sm">
                  <li>🌍 Best locations: {feature.details.locations.join(', ')}</li>
                  <li>⏰ Best time to visit: {feature.details.bestTime}</li>
                  <li>✨ Highlights: {feature.details.highlights.join(', ')}</li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export { wildlifeFeatures };
export default ExploreWildlife;