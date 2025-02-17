import React, { useState } from "react";
import { importAllMedia } from "./utils/utils";
import ExploreCulture from "./ExploreCulture";
import { AnimatePresence, motion } from "framer-motion";

function Culture() {
  const images = importAllMedia(
    require.context("./culture", false, /\.(png|jpe?g|svg)$/)
  );

  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-amber-900 mb-4 relative"
          >
            <span className="relative z-10">Discover Kenya's Culture</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-3 bg-yellow-300 -z-0 opacity-40 rounded-full blur-sm"></span>
          </motion.h1>
          <p className="text-lg text-amber-700">
            Explore the rich cultural heritage and diverse traditions of Kenya
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side: Cultural Element Selection */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <ExploreCulture 
              onElementClick={handleElementClick} 
              selectedElement={selectedElement}
            />
          </motion.div>
          
          {/* Right side: Element Details or Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {selectedElement ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    {selectedElement.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedElement.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold text-amber-800 mb-4">
                    Visual Gallery
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.values(images).slice(0, 6).map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => handleImageClick(value)}
                      >
                        <img
                          src={value}
                          alt={`Kenya culture related to ${selectedElement.name}`}
                          className="w-full h-32 object-cover transition duration-300 group-hover:brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                          <span className="text-white text-xs font-medium transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                            View Fullscreen
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 bg-white rounded-xl shadow-xl p-12">
                <p className="text-xl">Select a cultural element to explore Kenya's rich heritage</p>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Full gallery section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-amber-800 mb-6 pb-3 border-b border-amber-200">
            Complete Visual Heritage Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Object.values(images).map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => handleImageClick(value)}
              >
                <img
                  src={value}
                  alt={`Kenya culture item ${index + 1}`}
                  className="w-full h-48 object-cover transition duration-300 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    View Fullscreen
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeImageModal}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-full object-contain rounded-md"
                />
                <button
                  onClick={closeImageModal}
                  className="absolute -top-12 right-0 text-white text-sm font-medium bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full transition duration-300"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Culture;