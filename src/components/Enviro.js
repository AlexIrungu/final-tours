import React, { useState } from 'react';
import Nature from './Nature';
import ExploreNature from './ExploreNature';

function Enviro() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            Explore Kenya's Natural Wonders
          </h1>
          <p className="text-lg text-amber-700">
            Discover the breathtaking landscapes and wildlife across different regions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side: Region Selection */}
          <div className="lg:col-span-4">
            <ExploreNature 
              selectedRegion={selectedRegion} 
              setSelectedRegion={setSelectedRegion} 
              hideDetails={true}
            />
          </div>
          
          {/* Right side: Region Details and Images */}
          <div className="lg:col-span-8">
            {selectedRegion ? (
              <Nature selectedRegion={selectedRegion} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 bg-white rounded-xl shadow-xl p-12">
                <p className="text-xl">Select a region to explore its natural beauty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enviro;