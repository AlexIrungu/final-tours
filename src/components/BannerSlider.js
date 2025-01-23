import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adv from './shiftedfrommain/adv.jpg';
import ele from './shiftedfrommain/ele.jpg';
import bal from './shiftedfrommain/newbaloon.jpg';
import './BannerSlider.css'


const slides = [
  {
    background: `url(${adv})`,
    title: "Explore Scenic Wonders With Us",
    content: "",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
  },
  {
    background: `url(${bal})`,
    title: "Discover the Colorful World",
    content: "",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
  },
  {
    background: `url(${ele})`,
    title: "Life-long Memories Just a Click Away",
    content: "",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
  },
 
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  

  const redirectToVideo = (videoLink) => {
    window.open(videoLink, '_blank');
  };

  useEffect(() => {
    // Preload images
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.background;
    });

    const interval = setInterval(goToNextSlide, 10000); // Auto transition every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="default-banner active-blog-slider relative" style={{position: 'relative', height: '80vh'}}> {/* Set relative position and height to parent */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`item-slider relative bg-cover bg-no-repeat bg-center slide-transition ${currentSlide === index ? 'slide-in' : 'slide-out'}`}
          style={{
            backgroundImage: slide.background,
            width: "100vw",
            height: "80vh",
            backgroundSize: "cover",
            position: 'absolute', // Keep absolute positioning
          }}
      >
        <div className="overlay" style={{ background: "rgba(0,0,0,.3)" }}></div>
        <div className="container">
          <div className="row h-full md:items-center">
            <div className="col-md-10 col-12 mx-auto">
              <div className="banner-content text-center py-20 md:py-0">
                <div className="mb-4 absolute top-0 left-0 right-0 p-8 text-center">
                  <h4 className="text-customWhite text-lg md:text-xl lg:text-2xl mb-4 font-semibold uppercase tracking-wider">
                    {slide.title}
                  </h4>
                </div>
               
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                  {slide.content}
                </p>
                 <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <button
          className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-600 text-white font-bold"
          onClick={() => redirectToVideo(slide.videoLink)}
        >
          {slide.linkText}
          <FontAwesomeIcon icon="arrow-right" className="ml-2" />
        </button>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      <div
          className="navigation-buttons absolute left-0 bottom-0 flex py-10"
          style={{ transform: "translateY(50%)" }}
        >
          <button className="bg-gray-800 text-white px-3 py-2 rounded mr-2" onClick={goToPreviousSlide}>
            <FontAwesomeIcon icon="arrow-left" />
          </button>
          <button className="bg-gray-800 text-white px-3 py-2 rounded" onClick={goToNextSlide}>
            <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
    </section>
  );
};

export default BannerSlider;
