import React, { useState } from 'react';
import Nature from './Nature';
import ExploreNature from './ExploreNature';

function Enviro() {
    const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="">
      <ExploreNature setSelectedRegion={setSelectedRegion} />
      <Nature selectedRegion={selectedRegion} />
    </div>
  );
}

export default Enviro;