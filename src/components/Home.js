import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

import makiwa from "./makiwa-hd.png";
import maasai from "./assets/maasai.jpg";
import transport from "./assets/transport.jpg";
import beauty from "./assets/beauty.jpg";
import g from './assets/g.jpeg'
import guide from './assets/guides.jpeg'

function Home() {
  return (
    <div className="home-page">
      <main
        className="home-section relative flex items-center justify-center"
        style={{ backgroundImage: `url(${beauty})`, minHeight: "calc(100vh - 64px)" }}
      >
        <div className="home-content text-center max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "Welcome to Danil Scenic Tours",
                2000,
                "Explore the Beauty of Kenya",
                2000,
                "Experience Thrilling Adventures",
                2000,
                "Immerse Yourself in Rich Culture",
                2000,
              ]}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            Immerse yourself in the wonders of our diverse landscapes, rich
            culture, and thrilling adventures. From the pristine beaches of our
            coastal cities to the majestic mountains and lush forests of the
            interior, there are endless treasures to be discovered. Join us in
            exploring the hidden gems and iconic landmarks that make our
            country a dream destination for travelers from all corners of the
            world. Unravel the mysteries of history, soak in the serenity of
            nature, and create unforgettable memories that will last a
            lifetime. Come, be enchanted by the wonders that await you. Your
            adventure starts here!
          </motion.p>
        </div>
      </main>
      <section className="details-section py-10">
        <div className="details-container container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
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
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
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
            className="detail bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
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
    </div>
  );
}

export default Home;
