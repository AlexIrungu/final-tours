import React from "react";
import { Link } from "react-router-dom";

import { LightSpeed } from "react-reveal"; // Import the Fade animation from react-reveal

import flam from './assets/flammm.jpg'

function LandingPage() {
  return (
    <div className="landing-page h-screen flex flex-col">
      <div className="hero-image-container relative flex-1">
        <img
          src={flam}
          alt="Beautiful Destination"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-customWhite text-center ">
          {/* Use the Fade animation for the text */}
          <LightSpeed cascade>
            <h1 className="text-4xl font-bold mb-4 ">
              <span className="text-customWhite font-bold">Welcome to Danil Scenic Tours</span>
            </h1>
            {/* <p className="text-l mb-6 font-bold">Explore the scenic beauty vibrant culture, &                  abundant wildlife of the    region.</p> */}
            <p className="text-l mb-6 font-bold">Click Here.</p>
            <Link
  to="/home"
  className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-600 text-white font-bold"
>
  Discover Now
</Link>
          </LightSpeed>
        </div>
        
      </div>

     
    </div>
  );
}

export default LandingPage;
