import React from "react";
import { importAllImages } from "./utils/utils";

// Import more images as needed

function Culture() {
    const images = importAllImages(
        require.context("./culture", false, /\.(png|jpe?g|svg)$/)
      );

  return (
    <div className="culture-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {Object.values(images).map((value, index) => (
      <div
        key={index}
        className="culture-item relative overflow-hidden rounded-lg shadow-md cursor-pointer"
      >
        <img
          src={value}
          alt="tours gallery"
          className="w-full h-auto max-h-80 object-cover"
        />
        <div className="culture-overlay absolute inset-0 bg-black opacity-0 flex items-center justify-center">
          <div className="text-white text-center text-sm font-bold">
            Click to Enlarge
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Culture;