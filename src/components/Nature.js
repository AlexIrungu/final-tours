import React from 'react';
import { importAllMediaAsObject } from './utils/utils';

function Nature({ selectedRegion }) {
  const images = importAllMediaAsObject(
    require.context('./nature', false, /\.(png|jpe?g|svg)$/)
  );

  const regionImages = {
    'Great Rift Valley': [images['riftvalley.jpg'], images['valley1.jpeg'], images['valley2.jpeg'], images['valley3.jpeg'], images['valey4.jpeg']],
    'Mount Kenya': [images['mtkenya.jpg'], images['kenya1.jpeg'], images['kenya2.jpeg'], images['kenya3.jpeg'], images['kenya4.jpeg']],
    'Maasai Mara': [images['mara.jpg'],images['mara2.jpg'], images['mara3.jpeg'], images['mara4.jpeg'], images['mara5.jpeg']],
    'Kenyan Coast': [images['diani.jpg'], images['coast.jpg'], images['coast1.jpeg'], images['coast2.jpeg'], images['coast3.jpeg'], images['coast4.jpeg']],
    'Mount Elgon': [images['kenyaaa.jpeg'], images['elgon1.jpeg'], images['elgon2.jpeg'], images['elgon3.jpeg'], images['elgon4.jpeg']],
    'Lake Turkana': [images['turkana.jpeg'], images['turkana1.jpeg'], images['tuk2.jpeg'], images['tuk3.jpeg'], images['tuk4.jpeg']],
    'Lewa Wildlife Conservancy': [images['lewa.jpeg'], images['lewa1.jpeg'], images['lewa2.jpeg'], images['lewa3.jpeg'], images['lewa4.jpeg']],
  };

  // Update selectedRegion to include images from regionImages
  const updatedSelectedRegion = selectedRegion ? {
    ...selectedRegion,
    images: regionImages[selectedRegion.name],
  } : null;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Discover Kenya's Nature and Landscapes</h1>

      <div className="mb-8">
  {updatedSelectedRegion && (
    <div
      className="rounded"
      style={{ height: '200px', padding: '10px', backgroundColor: '#f8f8f8' }}
    >
      <p className="text-lg font-bold mt-4">{updatedSelectedRegion.description}</p>
      <div className="flex">
        {updatedSelectedRegion.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${updatedSelectedRegion.name} ${index}`}
            style={{ objectFit: 'contain', height: '150px' }} // Set a specific height here
            className="w-auto"
          />
        ))}
      </div>
    </div>
  )}
</div>
    </div>
  );
}

export default Nature;
