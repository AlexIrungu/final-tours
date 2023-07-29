import React from "react";
import { importAllImages } from "./utils/utils";

function Gallery() {
  const images = importAllImages(
    require.context("./assets", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="gallery-wrapper flex flex-wrap justify-center">
      {Object.values(images).map((value, index) => (
        <div
          key={index}
          className="gallery-item relative overflow-hidden rounded-lg shadow-md cursor-pointer m-2"
        >
          <img
            src={value}
            alt="tours gallery"
            className="w-full h-auto max-h-80 object-cover"
          />
          <div className="gallery-overlay absolute inset-0 bg-black opacity-0 flex items-center justify-center">
            <div className="text-white text-center text-sm font-bold">
              Click to Enlarge
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
