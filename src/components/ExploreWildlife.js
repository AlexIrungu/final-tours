import React, { useState } from 'react';

const ExploreWildlife = () => {
  const [selectedFeature, setSelectedFeature] = useState('');

  const features = [
    {
      name: 'Safari Adventure',
      description: 'Embark on a virtual safari adventure through Kenya’s national parks, home to diverse wildlife, including lions, elephants, giraffes, and more.',
    },
    {
      name: 'Unique Habitats',
      description: 'Discover Kenya’s varied habitats, from the arid landscapes of Samburu to the lush forests of Aberdare, showcasing a stunning array of flora and fauna.',
    },
    {
      name: 'Bird Watching',
      description: 'Explore the rich birdlife of Kenya, known for its abundance of species. Visit Lake Nakuru, a haven for flamingos, and witness incredible bird migrations.',
    },
    {
      name: 'Conservation Efforts',
      description: 'Learn about Kenya’s dedicated conservation efforts, protecting endangered species and preserving the natural beauty of the country for future generations.',
    },
  ];

  const handleFeatureClick = (featureName) => {
    setSelectedFeature(featureName);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Explore Kenya's Wildlife</h2>
      <p className="text-lg mb-6">Choose a feature to dive into the wild world of Kenya:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className={`p-4 border rounded cursor-pointer hover:bg-gray-100 transition duration-300 ${
              selectedFeature === feature.name ? 'border-green-500' : 'border-gray-300'
            }`}
            onClick={() => handleFeatureClick(feature.name)}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {selectedFeature && (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedFeature}</h3>
            <p className="text-gray-700">
              {features.find((feature) => feature.name === selectedFeature).description}
            </p>
            {/* Add interactive elements like images, videos, or 3D models here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreWildlife;
