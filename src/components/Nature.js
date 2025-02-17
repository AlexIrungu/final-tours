import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { importAllMediaAsObject } from './utils/utils';

const Nature = ({ selectedRegion }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const images = importAllMediaAsObject(
    require.context('./nature', false, /\.(png|jpe?g|svg)$/)
  );

  const regionImages = {
    'Great Rift Valley': [images['riftvalley.jpg'], images['valley1.jpeg'], images['valley2.jpeg'], images['valley3.jpeg'], images['valey4.jpeg']],
    'Mount Kenya': [images['mtkenya.jpg'], images['kenya1.jpeg'], images['kenya2.jpeg'], images['kenya3.jpeg'], images['kenya4.jpeg']],
    'Maasai Mara': [images['mara.jpg'], images['mara2.jpg'], images['mara3.jpeg'], images['mara4.jpeg'], images['mara5.jpeg']],
    'Kenyan Coast': [images['diani.jpg'], images['coast.jpg'], images['coast1.jpeg'], images['coast2.jpeg'], images['coast3.jpeg'], images['coast4.jpeg']],
    'Mount Elgon': [images['kenyaaa.jpeg'], images['elgon1.jpeg'], images['elgon2.jpeg'], images['elgon3.jpeg'], images['elgon4.jpeg']],
    'Lake Turkana': [images['turkana.jpeg'], images['turkana1.jpeg'], images['tuk2.jpeg'], images['tuk3.jpeg'], images['tuk4.jpeg']],
    'Lewa Wildlife Conservancy': [images['lewa.jpeg'], images['lewa1.jpeg'], images['lewa2.jpeg'], images['lewa3.jpeg'], images['lewa4.jpeg']],
  };

  const updatedSelectedRegion = selectedRegion ? {
    ...selectedRegion,
    images: regionImages[selectedRegion.name],
  } : null;

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === (updatedSelectedRegion.images.length - 1) ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? updatedSelectedRegion.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Discover Kenya's Nature and Landscapes
      </h1>

      {updatedSelectedRegion && (
        <div className="space-y-6">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {updatedSelectedRegion.description}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {updatedSelectedRegion.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => {
                  setActiveImageIndex(index);
                  setShowLightbox(true);
                }}
              >
                <img
                  src={image}
                  alt={`${updatedSelectedRegion.name} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {showLightbox && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button
                onClick={() => setShowLightbox(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={previousImage}
                className="absolute left-4 text-white hover:text-gray-300"
              >
                <ChevronLeft size={36} />
              </button>

              <img
                src={updatedSelectedRegion.images[activeImageIndex]}
                alt={`${updatedSelectedRegion.name} - Image ${activeImageIndex + 1}`}
                className="max-h-screen max-w-screen-lg object-contain"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nature;