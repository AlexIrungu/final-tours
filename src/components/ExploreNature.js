import React from 'react';
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

export const regions = [
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

const ExploreNature = ({ selectedRegion, setSelectedRegion }) => {
  

  return (
    <div className="container mx-auto p-8 bg-white rounded-md shadow-md">
    <h2 className="text-4xl font-bold mb-4">Explore Kenya's Natural Wonders</h2>
    <p className="text-lg mb-6">Choose a region for more information:</p>

    <div className="">
      {regions.map((region) => (
        <div
          key={region.name}
          className={`p-4 border rounded bg-white rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-300`}
          onClick={() => setSelectedRegion(region)}
        >
          <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ExploreNature;
