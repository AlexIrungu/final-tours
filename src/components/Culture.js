import React, { useState } from 'react';
import { importAllMedia } from "./utils/utils";
import ExploreCulture from "./ExploreCulture";

function Culture() {
  const images = importAllMedia(
    require.context("./culture", false, /\.(png|jpe?g|svg)$/)
  );

  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (elementName) => {
    setSelectedElement(elementName);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Discover Kenya's Culture and Heritage</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <ExploreCulture onElementClick={handleElementClick} />
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-3 gap-3">
          {Object.values(images).map((value, index) => (
            <div
              key={index}
              className="gallery-item relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              style={{ height: "200px" }} // Set a fixed height for all images
              // onClick={() => handleElementClick(null)} // Clear selection on image click
            >
              <img
                src={value}
                alt="culture gallery"
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 hover:opacity-80"
                style={{ objectFit: "cover" }} // Maintain aspect ratio without distortion
              />
              {/* <div className="culture-overlay absolute inset-0 bg-black opacity-0 flex items-center justify-center rounded-t-lg">
                <div className="text-white text-center text-sm font-bold">
                  Click to Enlarge
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {selectedElement && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{selectedElement}</h2>
          {/* Add detailed description and additional interactive elements here */}
        </div>
      )}
    </div>
  );
}

export default Culture;
