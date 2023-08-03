import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { useEffect, useState } from "react";

import maasai from './assets/maasai.jpg';
import transport from './assets/transport.jpg';
import kulture from './assets/kulture.jpg'
import lake from './assets/lakee.jpg'
// import birds from './assets/birds.jpg'
import beauty from './assets/beauty.jpg'
import buffalo from './assets/buffalo.jpeg'
import cheetah from './assets/cheetah.jpg'
import d from './assets/d.jpeg'
import elephant from './assets/elephant.jpeg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const slideshowImages = [beauty, buffalo, cheetah, d, elephant];
const slideshowInterval = 3000; // Slideshow interval in milliseconds

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to update the current slide index
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  // Auto-advance the slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, slideshowInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-page "
      // style={{
      //   backgroundImage: `url(${kulture})`,
      //   backgroundSize: "100% 50%",
      // }}
    >
      <main className="home-section relative grid grid-cols-1 md:grid-cols-2 items-center p-8 md:px-20 bg-cover bg-center" 
      style={{ backgroundImage: `url(${slideshowImages[currentSlide]})`,
     width: "100%", // Set the width of the background image
     height: "500px", // Set the height of the background image 
    }}
      >
  {/* Animating Text */}
  <div className="home-content text-dark">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {/* Text Animation */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Typical
          loop={3}
          wrapper="span"
          steps={[
            "Welcome to Danil Scenic Tours",
            2000, // Adjust the duration for smoother transition
            "Explore Scenic Wonders With Us...",
            2000, // Adjust the duration for smoother transition
            "Experience Thrilling Adventures",
            2000, // Adjust the duration for smoother transition
            "Immerse Yourself in Rich Culture",
            2000, 
          ]}
        />
      </motion.div> */}
    </motion.h1>
    {/* <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-lg leading-relaxed text-dark"
    >
      Immerse yourself in the wonders of our diverse landscapes, rich culture, and thrilling adventures. Join us in exploring the hidden gems and iconic landmarks that make our country a dream destination for travelers from all corners of the world. Come, be enchanted by the wonders that await you. Your adventure starts here!
    </motion.p> */}
  </div>

  {/* Image on the Right */}
  {/* <div className="flex justify-center">
    <img
      src={birds}
      alt="Image"
      className="w-96 rounded-lg"
    />
  </div> */}
</main>



      <section className="details-section py-10">
        <div className="details-container container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWC5L8ciPyoaooGlHodVbZvg2Tli4nnwKUA&usqp=CAU"
              alt="Image 1"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-blue-600">Explore Nature</h2>
            <p className="text-gray-600">
              Discover breathtaking landscapes and stunning natural wonders.
            </p>
          </motion.div>
          <motion.div
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={maasai}
              alt="Image 2"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-blue-600">
              Experience Culture
            </h2>
            <p className="text-gray-600">
              Immerse yourself in the rich traditions and history of our
              destinations.
            </p>
          </motion.div>
          <motion.div
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={transport}
              alt="Image 3"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-blue-600">
              Adventure Awaits
            </h2>
            <p className="text-gray-600">
              Embark on thrilling adventures and create unforgettable
              memories.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="footer py-4 bg-brown-600 text-white">
        <div className="footer-container container mx-auto">
          <div className="follow-container text-center mb-6">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="social-icons mt-4">
              <a
                href="https://twitter.com/@DanilScenic"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/your_facebook_page"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/your_instagram_handle"
                target="_alexirungu"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/your_linkedin_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
