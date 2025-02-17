import React, { useState } from "react";
import { 
  FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation,
  FaCheck, FaTimes, FaPlaneArrival, FaCar, FaBinoculars, FaMapMarkedAlt
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import your images
import mitimingi from './day2day/mitimingi.jpeg';
import mara2 from './day2day/2mara.png';

const MaasaiMara = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <LazyLoadImage
          src={mara2}
          alt="Maasai Mara landscape"
          className="w-full h-full object-cover"
          effect="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 md:p-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Maasai Mara Safari</h1>
            <p className="text-white/80 text-lg md:text-xl">3-Day Adventure in Kenya's Iconic National Reserve</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <nav className="flex justify-center items-center overflow-x-auto py-2 px-4">
          {["overview", "day-to-day", "rates", "inclusion"].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`
                flex-shrink-0 px-4 py-2 mx-1 rounded-full transition-all duration-200
                ${activeSection === section 
                  ? "bg-orange-500 text-white font-medium" 
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"}
              `}
            >
              {section.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This is a 3 day extensive tour to explore the world renowned Masai Mara in Kenya, Africa, that hosts the great migration of the wildebeest.
                It also hosts exceptional populations of lions, leopards, cheetahs and Africa bush elephant and more than four hundred and seventy species of birds many of which are migrants with almost sixty species being raptors.
                Birds that call Masai Mara home are vultures, marabou storks, secretary birds, horn bills, crowned cranes and ostriches.
              </p>
            </div>

            {/* Tour Operations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Tour Operations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <FaDollarSign />, title: "Budget Tour", desc: "This budget tour uses tented camps." },
                  { icon: <FaUsers />, title: "Shared Tour", desc: "On this shared tour, you will join a group of other travelers. Max 6 people per vehicle." },
                  { icon: <FaCalendarAlt />, title: "Cannot be customized", desc: "The contents of this tour cannot be changed." },
                  { icon: <FaUsers />, title: "Suitable for single travelers", desc: "Single travelers can join this group tour, but it requires a minimum of 6 people to run." },
                  { icon: <FaCalendarAlt />, title: "Can start any day", desc: "If availability permits, this tour can start on any day." },
                  { icon: <FaChild />, title: "Suitable for all ages", desc: "This tour is suitable for children of all ages." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                    <div className="text-orange-500 text-2xl mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Transportation */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Activities & Transportation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center text-gray-800">
                      <FaBinoculars className="text-orange-500 mr-2" />
                      Activities:
                    </h3>
                    <p className="text-gray-600 mt-1 ml-7">Game drives</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center text-gray-800">
                      <FaBinoculars className="text-orange-500 mr-2" />
                      Game Drives:
                    </h3>
                    <p className="text-gray-600 mt-1 ml-7">Pop-up roof 4x4 vehicle</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center text-gray-800">
                      <FaCar className="text-orange-500 mr-2" />
                      Getting around:
                    </h3>
                    <p className="text-gray-600 mt-1 ml-7">Pop-up roof 4x4 vehicle</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center text-gray-800">
                      <FaMapMarkedAlt className="text-orange-500 mr-2" />
                      Transport:
                    </h3>
                    <p className="text-gray-600 mt-1 ml-7">A transfer from and back to the airport is included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation & Meals */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">Accommodation & Meals</h2>
              <div className="flex items-center mb-4 p-3 bg-orange-50 rounded-lg">
                <FaExclamation className="text-orange-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Additional accommodation before and at the end of the tour can be arranged for an extra cost</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accommodation</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meals</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Day 1-Day 2</td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          <p className="font-medium">Miti Mingi Eco Camp</p>
                          <p className="text-gray-500">Budget tented camp just outside Masai Mara NR</p>
                          <div className="flex flex-wrap mt-2 gap-2">
                            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945579079_miti6.PNG" alt="Accommodation" className="h-16 w-24 object-cover rounded-md" />
                            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_1611494557411_miti4.PNG" alt="Accommodation" className="h-16 w-24 object-cover rounded-md" />
                            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945560247_miti1.PNG" alt="Accommodation" className="h-16 w-24 object-cover rounded-md" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">All Meals Included</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Day 3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">End of tour</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Breakfast Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Day to Day Section */}
        {activeSection === "day-to-day" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Day to Day Itinerary</h2>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaPlaneArrival className="text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Arrival</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>You'll be collected from the airport.</li>
                  <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Day 1-2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_014.jpg" 
                      alt="Masai Mara" 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 bg-orange-500 text-white p-3">
                      <p className="text-sm font-bold">Day 1-2</p>
                      <p className="text-lg font-semibold">Miti Mingi - Masai Mara</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      This Safari tour entails an intensive game drive to explore the flora and fauna of the famous Masai Mara National Park which is home to not only the big five animals namely Leopard, Elephant, Buffalo, Rhino and Lion but also other animals. If the season is ripe, you will get to witness at an up close level thousands of wildebeest migrating through the Mara river.
                    </p>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Accommodation:</h3>
                      <h4 className="font-medium text-gray-700 mb-1">Miti Mingi Eco Camp</h4>
                      <p className="text-gray-600 mb-3">Budget tented camp located just outside Masai Mara NR</p>
                      <div className="flex flex-wrap gap-2">
                        <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945560247_miti1.PNG" alt="Accommodation" className="h-16 w-20 object-cover rounded-md" />
                        <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_1611494557411_miti4.PNG" alt="Accommodation" className="h-16 w-20 object-cover rounded-md" />
                        <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945579079_miti6.PNG" alt="Accommodation" className="h-16 w-20 object-cover rounded-md" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Meals & Drinks:</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>All meals included</li>
                        <li>Drinking water (Other drinks not included)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Day 3</h3>
                    <h4 className="text-lg font-medium text-gray-700">Nairobi</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This day entails departure of guests to their Country of origin.
                    </p>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Main Destination:</h3>
                      <p className="text-gray-700">No major destination visited</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Accommodation:</h3>
                      <p className="text-gray-700">No Accommodation</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Meals & Drinks:</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>Breakfast (Lunch & dinner not included)</li>
                        <li>Drinks not included</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rates Section */}
        {activeSection === "rates" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Important to Know</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Rates are per person and exclude the international flight from/to your home country.</li>
                <li>A travel party of 1 or 2 people can join this group tour, but it requires a minimum of 6 people to run.</li>
                <li>This tour accepts children of all ages.</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Rates per person</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Dates</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Single</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2 People</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 People</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">4 People</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5 People</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 People</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">7+ People</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Apr 1, 2024 - Jun 30, 2024</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$1,626</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$982</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$768</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$662</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$597</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$554</td>
                      <td className="px-4 py-3 text-sm">
                        <Link to="/quote-form" className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors duration-200">
                          Get Quote
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Jul 1, 2024 - Dec 31, 2024</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$2,013</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$1,297</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$1,090</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$965</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$908</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">$853</td>
                      <td className="px-4 py-3 text-sm">
                        <Link to="/quote-form" className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors duration-200">
                          Get Quote
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Inclusion Section */}
        {activeSection === "inclusion" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                    <FaCheck />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">Included</h2>
                </div>
                <ul className="space-y-2 text-gray-700 pl-11">
                  {[
                    "Park fees (For non-residents)",
                    "All activities (Unless labeled as optional)",
                    "All accommodation (Unless listed as upgrade)",
                    "A professional driver/guide",
                    "All transportation (Unless labeled as optional)",
                    "All Taxes/VAT",
                    "Roundtrip airport transfer",
                    "Meals (As specified in the day-by-day section)",
                    "Drinks (As specified in the day-by-day section)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-baseline">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                    <FaTimes />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">Excluded</h2>
                </div>
                <ul className="space-y-2 text-gray-700 pl-11">
                  {[
                    "International flights (From/to home)",
                    "Additional accommodation before and at the end of the tour",
                    "Tips (Tipping guideline US$10.00 pp per day)",
                    "Personal items (Souvenirs, travel insurance, visa fees, etc.)",
                    "Government imposed increase of taxes and/or park fees"
                  ].map((item, index) => (
                    <li key={index} className="flex items-baseline">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaasaiMara;