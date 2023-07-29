import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal"; // Import the Fade animation from react-reveal

import flam from './assets/flamingoes.jpg'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-image-container relative">
        <img
          src={flam}
          alt="Beautiful Destination"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          {/* Use the Fade animation for the text */}
          <Fade cascade>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Welcome to Our Beautiful Destination</span>
            </h1>
            <p className="text-xl mb-6">Experience the beauty of nature, culture, and adventure.</p>
            <Link to="/home" className="btn btn-primary px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
              Discover Now
            </Link>
          </Fade>
        </div>
      </div>

      <footer className="footer py-8 bg-gray-800 text-white">
        <div className="footer-container container mx-auto">
          <div className="follow-container text-center mb-6">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="social-icons mt-4">
              <a
                href="https://twitter.com/your_twitter_handle"
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
            <p>&copy; {new Date().getFullYear()} Tourism Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
