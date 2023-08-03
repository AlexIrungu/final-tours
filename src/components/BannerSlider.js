import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adv from './adv.jpg'
import ele from './ele.jpg'
import zeb from './zeb.jpg'

const slides = [
  {
    background: `url(${adv})`,
    title: "Explore Scenic Wonders With Us",
    content:
      "",
    link: "/about",
    linkText: "Discover Now",
  },
  {
    background: `url(${ele})`,
    title: "Life-long Memories Just a Click Away",
    content:
      "",
    link: "/gallery",
    linkText: "Discover Now",
  },
  {
    background: `url(${zeb})`,
    title: "Discover the Colorful World",
    content:
      "",
    link: "/service",
    linkText: "Discover Now",
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section className="default-banner active-blog-slider">
      <div
        className="item-slider relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: slide.background,
          width: "100vw", 
          height: "80vh", // Set the width and height of the background image
          backgroundSize: "cover", // Set the background size to cover the container
        }}
      >
        <div className="overlay" style={{ background: "rgba(0,0,0,.3)" }}></div>
        <div className="container">
          <div className="row h-full md:items-center">
            <div className="col-md-10 col-12 mx-auto">
              <div className="banner-content text-center py-20 md:py-0">
                <div className="mb-4 absolute top-0 left-0 right-0 p-8 text-center ">
                <h4 className="text-white text-lg md:text-xl lg:text-2xl mb-4 font-semibold uppercase tracking-wider">
                  {slide.title}
                </h4>
                </div>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                  {slide.content}
                </p>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <Link
                  to={slide.link}
                  className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-600 text-white font-bold "
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
    </section>
  );
};

export default BannerSlider;
