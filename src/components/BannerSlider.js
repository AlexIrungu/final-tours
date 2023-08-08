import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adv from './adv.jpg';
import ele from './ele.jpg';
import bal from './newbaloon.jpg';

const slides = [
  {
    background: `url(${adv})`,
    title: "Explore Scenic Wonders With Us",
    content: "",
    link: "/about",
    linkText: "Discover Now",
  },
  {
    background: `url(${bal})`,
    title: "Discover the Colorful World",
    content: "",
    link: "/service",
    linkText: "Discover Now",
  },
  {
    background: `url(${ele})`,
    title: "Life-long Memories Just a Click Away",
    content: "",
    link: "/gallery",
    linkText: "Discover Now",
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

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Auto transition every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="default-banner active-blog-slider">
      <div
        className="item-slider relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: slide.background,
          width: "100vw",
          height: "80vh",
          backgroundSize: "cover",
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
                {/* <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1> */}
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                  {slide.content}
                </p>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <Link
                    to={slide.link}
                    className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-600 text-white font-bold"
                  >
                    {slide.linkText}
                    <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
