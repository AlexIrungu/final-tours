import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import maasai from './shiftedfrommain/maasai.jpg';
import transport from './shiftedfrommain/transport.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Partners from "./Partners";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import BannerSlider from "./BannerSlider";
import TeamData from "./TeamData";
import { FaTwitter } from 'react-icons/fa'; // Importing the updated Font Awesome Twitter icon


function Home() {

  return (
    <div className="home-page bg-gray-100 ">
     
     
      <BannerSlider />
      <div className="page ">
      <main className="home-section text-center p-8 md:px-20 bg-cover bg-center">
        <div className="home-content text-dark">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-brown-600 "
          >
            Welcome To Danil Scenic Tours!
          </motion.h1>
        <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Why go on safari with Danil Scenic Tours?
            </h2>
            <ul className="list-disc pl-8 text-left ">
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
                <strong>Experienced Guides:</strong> We provide knowledgeable and professional driver/tour guides who know wildlife and animal behavior as well as the local fauna and flora. Our drivers speak English, French, and Spanish, with other foreign language-speaking guides/tour leaders available on request.
                A supplementary cost might be involved.
              </li>
            </ul>
         
 
  </div>
          
        </div>
        {/* Image section (if needed) */}
      </main>
    </div>

  

         

      <div className="details-section py-10">
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
      </div>

    

    <div>
      <TeamData />
    </div>


  

      {/* footer section */}
      <footer className="footer py-8 bg-brown-600 text-white">
  <div className="footer-container container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
    <div className="follow-container text-center mb-6 md:mb-0">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-customWhite mb-4">Follow Us</h2>
      </div>
      <div className="social-icons mt-4 flex justify-center">
  {/* Add your social media icons here */}
  <a
  href="https://twitter.com/@DanilScenic"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Adjust margin and alignment
>
  <FaTwitter className="social-icon" /> {/* Using the updated Font Awesome Twitter icon */}
</a>
<a
  href="https://www.facebook.com/profile.php?id=61550528048010"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Apply the same margin and alignment
>
  <FontAwesomeIcon icon={faFacebook}  />
</a>
<a
  href="https://www.instagram.com/danil.scenic/"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Apply the same margin and alignment
>
  <FontAwesomeIcon icon={faInstagram} />
</a>
<a
  href="https://www.linkedin.com/in/danil-scenic-743945286/"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Apply the same margin and alignment
>
  <FontAwesomeIcon icon={faLinkedin}  />
</a>
<a
  href="https://www.youtube.com/channel/UCutpUrWcoi58yHOJb0bTXQg"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Apply the same margin and alignment
>
  <FontAwesomeIcon icon={faYoutube}  />
</a>
<a
  href="https://www.tiktok.com/@danilscenic"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 inline-block align-middle" // Apply the same margin and alignment
>
  <FontAwesomeIcon icon={faTiktok}  />
</a>
<div className="mt-8">
          <Link to="/reviews">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Customer Testimonials
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center mt-6 md:mt-0">
      <Partners /> 
    </div>
    
    <div className="text-center font-bold text-left mt-6 md:mt-0">
      <div className="text-customWhite ">
        <Link to='/faq' className="menu-link hover:text-green-600">
          FAQs
        </Link>
      </div>
      <div className="text-customWhite ">
        <Link to='/contact' className="menu-link hover:text-green-600">
          Contact Us
        </Link>
      </div>
      <div className="text-customWhite ">
        <Link to='/terms' className="menu-link hover:text-green-600">
          Terms & Conditions
        </Link>
      </div>
    
      <div className="text-center mt-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
        <p className="text-sm">&copy; Developed and Maintained by Alex Irungu.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Home;
