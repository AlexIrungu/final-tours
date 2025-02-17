import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival, FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NavButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-lg font-semibold transition-colors rounded-lg
      ${active ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-400 hover:text-white"}`}
  >
    {children}
  </button>
);

function LavishSafari() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="flex justify-center space-x-4 mb-8 bg-white p-4 rounded-xl shadow-md">
        {["overview", "day-to-day", "rates", "inclusion"].map((section) => (
          <NavButton
            key={section}
            active={activeSection === section}
            onClick={() => handleSectionClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
          </NavButton>
        ))}
      </nav>

      <div className="space-y-8">
      {activeSection === "overview" && (
      <div className="p-6 space-y-8 bg-gray-100 rounded-lg shadow-md">
        <LazyLoadImage 
          src="" 
          alt="Amboseli Safari" 
          className="w-full h-72 object-cover rounded-xl shadow-lg" 
          effect="blur" 
        />

        <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Overview</h2>
        <p className="bg-white p-6 rounded-xl shadow-lg text-gray-700">
          Experience a lavish three-day safari into the heart of Amboseli National Park in Kenya, where untamed wilderness meets unparalleled luxury. Your journey begins with a private transfer in a 4x4 pop-up roof jeep from Nairobi to Amboseli, offering breathtaking views of Mount Kilimanjaro.
        </p>

        {/* Tour Features */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Tour Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <FaDollarSign />, title: "Mid-range Tour", desc: "Uses lodges and tented camps." },
              { icon: <FaUsers />, title: "Private Tour", desc: "Exclusively for you, not shared." },
              { icon: <FaCalendarAlt />, title: "Customizable", desc: "Request minor changes to itinerary." },
              { icon: <FaUsers />, title: "Solo Traveler Friendly", desc: "Available for solo adventurers." },
              { icon: <FaCalendarAlt />, title: "Flexible Start", desc: "Tour can start on any available day." },
              { icon: <FaChild />, title: "Family-Friendly", desc: "Suitable for all ages." }
            ].map(({ icon, title, desc }, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-orange-500 text-2xl mr-4">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities & Transportation */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Activities & Transportation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2"><FaBinoculars className="text-orange-500 mr-2" /> Activities:</h3>
              <p className="text-gray-600">Game drives</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2"><FaCar className="text-orange-500 mr-2" /> Getting Around:</h3>
              <p className="text-gray-600">Pop-up roof 4x4 vehicle</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2"><FaMapMarkedAlt className="text-orange-500 mr-2" /> Transport:</h3>
              <p className="text-gray-600">Includes airport transfers</p>
            </div>
          </div>
        </div>

        {/* Accommodation & Meals */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Accommodation & Meals</h2>
          <div className="flex items-center bg-red-100 p-4 rounded-xl">
            <FaExclamation className="text-red-500 text-xl mr-3" />
            <p className="text-gray-700">Additional accommodation can be arranged at an extra cost.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">Day</th>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">Accommodation</th>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">Meals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="px-6 py-4">Day 1 - Day 2</td>
                  <td className="px-6 py-4">
                    <p className="text-gray-800 font-semibold">Elewana Tortilis Camp Amboseli</p>
                    <p className="text-gray-600">Luxury tented camp inside Amboseli NP</p>
                    <div className="flex space-x-2 mt-2">
                      <img className="w-20 h-16 rounded-md object-cover" src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037567089_tortilis-main-1.jpg" alt="" />
                      <img className="w-20 h-16 rounded-md object-cover" src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037562485_tortilis-3.jpg" alt="" />
                      <img className="w-20 h-16 rounded-md object-cover" src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_1610703756111_habituated-elephant-herds.jpg" alt="" />
                    </div>
                  </td>
                  <td className="px-6 py-4">Day 1: Lunch & Dinner Included <br /> Day 2: All Meals Included</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Day 3</td>
                  <td className="px-6 py-4">End of Tour</td>
                  <td className="px-6 py-4">Breakfast Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  
};

       {/* Day to Day Section */}
{activeSection === "day-to-day" && (
  <div className="py-16 bg-gray-100">
    <div className="container mx-auto px-6 lg:px-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Day to Day Itinerary</h2>

      {/* Arrival Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="flex items-center mb-6">
          <FaPlaneArrival className="text-3xl text-orange-500 mr-4" />
          <h2 className="text-2xl font-semibold text-gray-900">Arrival</h2>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>You'll be collected from the airport.</li>
          <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
        </ul>
      </div>

      {/* Day Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[{
          day: "Day 1",
          title: "Getting There & Exploring",
          image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_060.jpg",
          description: "Upon arrival at Nairobi Airport, your private safari guide will greet you and drive you to your luxurious accommodation in Amboseli. After settling in and enjoying a welcome lunch, embark on your first game drive through Amboseli's stunning landscapes, witnessing majestic elephants, giraffes, and big cats in their natural habitat. Optionally, enjoy sundowner cocktails in the wilderness for an extra cost.",
          accommodation: "Elewana Tortilis Camp Amboseli",
          meals: "All meals included",
          drinks: "Drinking water (Other drinks not included)"
        }, {
          day: "Day 2",
          title: "Full Day Game Drive - Amboseli National Park",
          image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_049.jpg",
          description: "After breakfast, embark on a full-day game drive through Amboseli National Park. Witness elephants with glistening tusks, graceful antelopes, and elusive predators like lions and cheetahs. Traverse the park’s diverse habitats, from marshy swamps to acacia woodlands, guided by an experienced naturalist.",
          accommodation: "Elewana Tortilis Camp Amboseli",
          meals: "All meals included",
          drinks: "Drinking water (Other drinks not included)"
        }, {
          day: "Day 3",
          title: "Bidding Farewell to Amboseli",
          image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Jomo_Kenyatta_International_Airport_002.jpg",
          description: "On your final day, enjoy a leisurely breakfast before one last game drive. Capture missed photo opportunities and bid farewell to Amboseli’s incredible wildlife. Optionally, visit a Masai Village for a cultural experience at an additional cost. Your tour concludes with a scenic transfer back to the airport.",
          accommodation: "No accommodation",
          meals: "Breakfast included (Lunch & dinner not included)",
          drinks: "Drinking water (Other drinks not included)"
        }].map((day, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={day.image}
                alt={day.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-tr-2xl">
                <p className="text-sm font-bold text-white">{day.day}</p>
                <p className="text-lg font-semibold text-white">{day.title}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{day.description}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accommodation:</h3>
              <p className="text-gray-700 mb-4">{day.accommodation}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meals & Drinks:</h3>
              <p className="text-gray-700 mb-2">{day.meals}</p>
              <p className="text-gray-700">{day.drinks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


      {activeSection === "rates" && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Rates</h2>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Important to Know</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mr-3">1</span>
              <span>Rates are per person and exclude the international flight from/to your home country.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mr-3">2</span>
              <span>This tour accepts children of all ages. Children under 3 are free.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Rates per person</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "Start Dates",
                    "Single",
                    "2 People",
                    "3 People",
                    "4 People",
                    "5 People",
                    "6 People",
                    "7+ People"
                  ].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    dates: "May 6, 2024 - May 31, 2024",
                    prices: [2707, 1301, 1279, 1008, 950, 833]
                  },
                  {
                    dates: "Jun 1, 2024 - Jun 30, 2024",
                    prices: [3225, 1474, 1569, 1250, 1124, 1007]
                  },
                  {
                    dates: "Jul 1, 2024 - Oct 31, 2024",
                    prices: [3970, 1984, 1968, 1593, 1383, 1265]
                  },
                  {
                    dates: "Nov 1, 2024 - Dec 19, 2024",
                    prices: [3225, 1474, 1569, 1250, 1124, 1007]
                  },
                  {
                    dates: "Dec 20, 2024 - Dec 31, 2024",
                    prices: [3970, 1984, 1968, 1593, 1383, 1265]
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.dates}
                    </td>
                    {row.prices.map((price, i) => (
                      <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${price.toLocaleString()}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link
                        to="/quote-form"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
  

        {/* Inclusion Section */}
        {activeSection === "inclusion" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                <FaCheck className="text-green-500 mr-2" />
                Included
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Park fees (For non-residents)
                </li>
                {/* Add more included items */}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                <FaTimes className="text-red-500 mr-2" />
                Excluded
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaTimes className="text-red-500 mr-2" />
                  International flights
                </li>
                {/* Add more excluded items */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LavishSafari;