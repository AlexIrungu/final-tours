import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import maasai from './maasai.jpg';
import transport from './transport.jpg';
import kulture from './kulture.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import beauty from './assets/linktoplaces.jpg'
import buffalo from './assets/bibhash-polygon-cafe-banerjee-A3jVgn01NEY-unsplash.jpg'
import cheetah from './assets/cheetah.jpg'
import d from './assets/hippos.jpg'
import elephant from './assets/elephants.jpg'
import BannerSlider from "./BannerSlider";
import { LightSpeed } from "react-reveal"; // Import the LightSpeed animation from react-reveal
import BookingComponent from './BookingComponent'
import logo from "./tourssss.jpg";
import './fonts/miandra-gd.ttf';
import Flow from "./Flow";
const slideshowImages = [beauty, buffalo, cheetah, d, elephant];
const slideshowInterval = 3000;

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideshowInterval);
    return () => clearInterval(interval);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="home-page bg-gray-100 ">
     <div className="flex justify-center items-center ">
      {/* <h1
        className={`text-4xl font-bold ${
          isLoaded ? 'transition-opacity duration-1000 opacity-100' : 'opacity-0'
        }`}
      >
        WELCOME TO DANIL SCENIC TOURS
      </h1> */}
    </div>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark text-center ">
          <LightSpeed cascade>
            <h1 className="text-4xl font-bold mb-4 ">
              <span className="text-dark font-bold ">Welcome to Danil Scenic Tours</span>
            </h1> */}
            {/* <p className="text-l mb-6 font-bold">Click Here <FontAwesomeIcon icon={faArrowDown} /></p>
            <Link
              to="/home"
              className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-600 text-white font-bold"
            >
              Discover Now
            </Link> */}
          {/* </LightSpeed>
        </div> */}
      <BannerSlider />
      <div className="page py-10">
      <main className="home-section text-center p-8 md:px-20 bg-cover bg-center">
        <div className="home-content text-dark">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-brown-600"
          >
            Welcome To Danil Scenic Tours!
          </motion.h1>
        <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Why go on safari with Danil Scenic Tours?
            </h2>
            <ul className="list-disc pl-8 text-left">
              <li className="mb-4">
                <strong>Local Expertise:</strong> We are a Kenyan-based company with an in-depth knowledge of the country and its unique attractions.
              </li>
              <li className="mb-4">
                <strong>Responsible Travel:</strong> We are committed to sustainable and responsible tourism, ensuring minimal impact on the environment and a positive contribution to local communities.
              </li>
             
              <li className="mb-4">
                <strong>24/7 Customer Support:</strong> We provide assistance round the clock to address your queries or concerns.
              </li>
              <li className="mb-4">
                <strong>Transparent Pricing:</strong> Our pricing is transparent with no hidden fees.
              </li>
              <li className="mb-4">
                <strong>Wide Selection:</strong> We offer a diverse fleet to cater to various needs and preferences.
              </li>
              <li className="mb-4">
                <strong>Convenience:</strong> We provide flexible pick-up and drop-off locations, including major airport and cities.
              </li>
              <li className="mb-4">
                <strong>Maintenance & Safety:</strong> Our vehicles are regularly serviced to ensure your safety and comfort.
              </li>
              <li className="mb-4">
                <strong>Experienced Guides:</strong> Our professional guides are passionate about Kenya's wildlife and cultures, enhancing your safari experience.
              </li>
            </ul>
            <p className="mb-4">
    We provide knowledgeable and professional driver/tour guides who know wildlife and animal behavior as well as the local fauna and flora. Our drivers speak English, French, and Spanish, with other foreign language-speaking guides/tour leaders available on request.
  </p>
  A supplementary cost might be involved.
  </div>
          
        </div>
        {/* Image section (if needed) */}
      </main>
    </div>

          {/* booking process */}
     {/* <div className="flex justify-center my-8">
  <div className="max-w-sm mx-4">
    <div className="bg-white rounded-lg shadow-md p-4">
      <BookingComponent />
      <Flow />
    </div>
  </div>
</div> */}

      <section className="details-section py-10">
        <div className="details-container container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/nature">
            <motion.div
              className="detail bg-green-600 rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWC5L8ciPyoaooGlHodVbZvg2Tli4nnwKUA&usqp=CAU"
                alt="Nature"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-blue-600">Explore Nature</h2>
              <p className="text-gray-600">
                Discover breathtaking landscapes and stunning natural wonders.
              </p>
            </motion.div>
          </Link>
          <Link to="/culture">
            <motion.div
              className="detail bg-green-600 rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={maasai}
                alt="Culture"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-blue-600">
                Experience Culture
              </h2>
              <p className="text-gray-600">
                Immerse yourself in the rich traditions and history of our destinations.
              </p>
            </motion.div>
          </Link>
          <Link to="/calendar">
            <motion.div
              className="detail bg-green-600 rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={transport}
                alt="Adventure"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-blue-600">
                Adventure Awaits
              </h2>
              <p className="text-gray-600">
                Embark on thrilling adventures and create unforgettable memories.
              </p>
            </motion.div>
          </Link>
        </div>
      </section>


  

      {/* footer section */}
      <footer className="footer py-4 bg-brown-600 text-white">
  <div className="footer-container container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="follow-container text-center mb-6">
      <div className="mb-4"> {/* Add margin to separate social icons */}
        <h2 className="text-2xl font-bold">Follow Us</h2>
      </div>
      <div className="social-icons mt-4">
        {/* Add your social media icons here */}
        <a
                href="https://twitter.com/@DanilScenic"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-customWhite text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550528048010"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-customWhite text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/danil.scenic/"
                target="_alexirungu"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-customWhite text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/danil-scenic-743945286/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-customWhite text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCutpUrWcoi58yHOJb0bTXQg"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-customWhite text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@danilscenic"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-customWhite text-2xl" />
              </a>
      </div>
      {/* <div className="company-logo text-center">
      <img src={logo} alt="Company Logo" className="object-cover w-30 h-20" />
    </div> */}
    </div>
    
    <div className="text-center font-bold text-left">
      <div className="text-customWhite mb-4">
        <Link to='/faq' className="menu-link hover:text-green-600">
          FAQs
        </Link>
      </div>
      <div className="text-customWhite mb-4">
        <Link to='/contact' className="menu-link hover:text-green-600">
          Contact Us
        </Link>
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
        <p>&copy; Developed and Maintained by Alex Irungu.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Home;
