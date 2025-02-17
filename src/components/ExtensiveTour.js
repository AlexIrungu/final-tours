import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival, FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import extensive from './day2day/extensive.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ExtensiveTour() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        <LazyLoadImage
          src={extensive}
          alt="Extensive Safari Tour"
          className="w-full h-[50vh] object-cover"
          effect="blur"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Kenyan Safari Adventure
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Explore Kenya's magnificent National Parks in this thrilling 10-day safari
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-center items-center overflow-x-auto">
            {["overview", "day-to-day", "rates", "inclusion"].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`
                  mx-1 sm:mx-3 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap
                  ${activeSection === section 
                    ? "bg-amber-500 text-white shadow-md transform -translate-y-0.5" 
                    : "text-gray-700 hover:bg-amber-100"
                  }
                `}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                A thrilling adventure through Kenya's magnificent National parks - Tsavo East and West, 
                Amboseli, Samburu and Masai Mara where all your senses will be heightened as you witness 
                the timeless dance of predator and prey unfold before your eyes. Throughout your journey, 
                you shall experience the warm hospitality of Kenya's people and indulge in delicious local 
                cuisine, adding an authentic flavor to your safari adventure.
              </p>
            </div>

            {/* Tour Features */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Tour Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: FaDollarSign, title: "Mid-range Tour", desc: "This mid-range tour uses lodges and tented camps." },
                  { icon: FaUsers, title: "Private Tour", desc: "This tour will be organized exclusively for you and won't be shared with others." },
                  { icon: FaCalendarAlt, title: "Can be customized", desc: "You can request minor changes to the accommodations and destinations of this tour." },
                  { icon: FaUsers, title: "Suitable for solo travelers", desc: "Solo travelers can book this private tour." },
                  { icon: FaCalendarAlt, title: "Can start any day", desc: "If availability permits, this tour can start on any day." },
                  { icon: FaChild, title: "Suitable for all ages", desc: "This tour is suitable for children of all ages." }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg hover:bg-amber-50 transition-colors">
                    <feature.icon className="text-amber-500 text-2xl flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Transportation */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Activities & Transportation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center text-gray-800 mb-3">
                      <FaBinoculars className="text-amber-500 mr-3" />
                      Activities
                    </h3>
                    <p className="text-gray-700 ml-9">Game drives</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center text-gray-800 mb-3">
                      <FaBinoculars className="text-amber-500 mr-3" />
                      Game Drives
                    </h3>
                    <p className="text-gray-700 ml-9">Pop-up roof 4x4 vehicle</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center text-gray-800 mb-3">
                      <FaCar className="text-amber-500 mr-3" />
                      Getting around
                    </h3>
                    <p className="text-gray-700 ml-9">Pop-up roof 4x4 vehicle</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center text-gray-800 mb-3">
                      <FaMapMarkedAlt className="text-amber-500 mr-3" />
                      Transport
                    </h3>
                    <p className="text-gray-700 ml-9">A transfer from and back to the airport is included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation & Meals */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Accommodation & Meals</h2>
              <div className="flex items-center mb-4 bg-red-50 p-3 rounded-lg">
                <FaExclamation className="text-red-500 text-xl mr-3 flex-shrink-0" />
                <p className="text-red-700 text-sm">Additional accommodation before and at the end of the tour can be arranged for an extra cost</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Day</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Accommodation</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Meals</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        days: "Day 1-Day 3",
                        lodge: "Voi Safari Lodge",
                        type: "Mid-range lodge inside Tsavo East NP",
                        images: [
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/685_16116617743617_voi2.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/685_16116617741103_voi4.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/685_16116617744389_voi8.jpg"
                        ],
                        meals: "All Meals Included"
                      },
                      {
                        days: "Day 4-Day 5",
                        lodge: "Sentrim Amboseli Lodge",
                        type: "Mid-range tented camp just outside Amboseli NP",
                        images: [
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/585_16268702060805_amb1.jpeg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/585_16268701987122_amb8.jpeg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/585_16268702012835_amb7.jpeg"
                        ],
                        meals: "All Meals Included"
                      },
                      {
                        days: "Day 6-Day 7",
                        lodge: "Samburu Sopa Lodge",
                        type: "Mid-range lodge inside Samburu NR",
                        images: [
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/256_16114935117169_samburu7.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/256_16114935121397_samburu9.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/256_16114935101235_samburu1.jpg"
                        ],
                        meals: "All Meals Included"
                      },
                      {
                        days: "Day 8-Day 9",
                        lodge: "Jambo Mara Safari Lodge",
                        type: "Mid-range resort bordering Masai Mara NR without fences",
                        images: [
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/649_1545_16128419503598_img_20190918_102205.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/649_16120118429243_jambo4.jpg",
                          "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/649_1545_16128419468228_img_20190823_122629.jpg"
                        ],
                        meals: "All Meals Included"
                      },
                      {
                        days: "Day 10",
                        lodge: "End of Tour",
                        type: "",
                        images: [],
                        meals: "Breakfast Included"
                      }
                    ].map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4 whitespace-nowrap font-medium text-gray-700">{item.days}</td>
                        <td className="py-3 px-4">
                          {item.lodge !== "End of Tour" ? (
                            <div>
                              <p className="font-semibold text-gray-800">{item.lodge}</p>
                              <p className="text-sm text-gray-600 mt-1 mb-3">{item.type}</p>
                              <div className="flex space-x-2">
                                {item.images.map((img, i) => (
                                  <img 
                                    key={i} 
                                    src={img} 
                                    alt={item.lodge} 
                                    className="w-20 h-16 object-cover rounded"
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            <span className="text-gray-800 font-medium">{item.lodge}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-gray-700">{item.meals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Day to Day Section */}
        {activeSection === "day-to-day" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-6">
                <FaPlaneArrival className="text-amber-500 text-2xl mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Arrival</h2>
              </div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>You'll be collected from the airport.</li>
                <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  day: "Day 1-3",
                  title: "Tour to the vast Tsavo National Park",
                  image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Tsavo_East_National_Park_034.jpg",
                  description: "Tour to the Vast Tsavo East and West National Parks, where rugged terrain and dramatic landscapes create an unforgettable backdrop for encounters with the big five animals. The elusive Leopards, playful Baboons, and a myriad of bird species will enchant you to unforgettable moments.",
                  lodge: "Voi Safari Lodge",
                  lodgeType: "Mid-range lodge located inside Tsavo East NP"
                },
                {
                  day: "Day 4-5",
                  title: "Amboseli",
                  image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_037.jpg",
                  description: "Venture into the enchanting Amboseli National Park, nestled at the foot of Mount Kilimanjaro. Marvel at the awe-inspiring sight of Africa's highest peak towering over vast plains, while herds of elephants gracefully traverse the landscape against the backdrop of snow-capped peaks.",
                  lodge: "Sentrim Amboseli Lodge",
                  lodgeType: "Mid-range lodge located just outside Amboseli NP"
                },
                {
                  day: "Day 6-7",
                  title: "Samburu",
                  image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Samburu_National_Park_002.jpg",
                  description: "This tour entails a traverse the rugged terrain of Samburu National park where you will encounter a wealth of wildlife specially adapted to the harsh conditions, from the iconic Somali ostrich to the endangered Grevy's zebra and the rare reticulated giraffe and many more animals.",
                  lodge: "Samburu Sopa Lodge",
                  lodgeType: "Mid-range lodge located inside Samburu NR"
                },
                {
                  day: "Day 8-9",
                  title: "Masai Mara",
                  image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_075.jpg",
                  description: "The climax of your journey is a safari drive through the iconic Maasai Mara, where golden savannas stretch as far as the eye can see, dotted with acacia trees and teeming with wildlife. Keep your camera ready as you encounter majestic lions, graceful giraffes, and towering elephants roaming freely in their natural habitat. At an extra cost, arrangement can be made to view more animals from the sky (birds eye view), using a hot air balloon.",
                  lodge: "Jambo Mara Safari Lodge",
                  lodgeType: "Mid-range resort bordering Masai Mara NR without fences"
                },
                {
                  day: "Day 10",
                  title: "End of trip to Jomo Kenyatta International Airport",
                  image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Jomo_Kenyatta_International_Airport_002.jpg",
                  description: "As you prepare to travel back home, a visit to the Masai village to witness the culture and taste Masai cuisine (at an extra cost) may be arranged. Thereafter, our dedicated driver guide will transport you back to the airport. As you board your flight homeward bound, we hope that you shall carry with you the spirit of Africa and the memories of a lifetime spent amidst its untamed beauty. Until we meet again, safari njema – safe travels.",
                  lodge: "No Accommodation",
                  lodgeType: "",
                  meals: "Breakfast (Lunch & dinner not included)"
                }
              ].map((day, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                  <div className="relative">
                    <img 
                      src={day.image} 
                      alt={day.title} 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-amber-300 font-bold">{day.day}</p>
                      <h3 className="text-xl font-bold">{day.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Accommodation:</h4>
                      <p className="font-medium text-gray-700">{day.lodge}</p>
                      {day.lodgeType && <p className="text-sm text-gray-600">{day.lodgeType}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Meals & Drinks:</h4>
                      <p className="text-gray-700">{day.meals || "All meals included"}</p>
                      <p className="text-gray-700">Drinking water (Other drinks not included)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rates Section */}
        {activeSection === "rates" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Important to Know</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Rates are per person and exclude the international flight from/to your home country.</li>
                <li>This tour accepts children of all ages. Children under 3 are free.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Rates per person</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Start Dates</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Single</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">2 People</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">3 People</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">4 People</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">5 People</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">6 People</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">7+ People</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        dates: "Apr 1, 2024 - May 31, 2024",
                        prices: ["$5,643", "$3,515", "$3,039", "$2,660", "$2,507", "$2,341"]
                      },
                      {
                        dates: "Jun 1, 2024 - Oct 31, 2024",
                        prices: ["$6,668", "$4,622", "$3,968", "$3,504", "$3,432", "$2,745"]
                      },
                      {
                        dates: "Nov 1, 2024 - Dec 20, 2024",
                        prices: ["$5,970", "$3,779", "$3,255", "$2,827", "$2,690", "$2,487"]
                      },
                      {
                        dates: "Dec 21, 2024 - Jan 2, 2025",
                        prices: ["$6,668", "$4,622", "$3,968", "$3,504", "$3,432", "$2,745"]
                      }
                    ].map((period, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4 font-medium text-gray-700">{period.dates}</td>
                        {period.prices.map((price, i) => (
                          <td key={i} className="py-3 px-4 text-gray-700">{price}</td>
                        ))}
                        <td className="py-3 px-4">
                          <Link to="/quote-form" className="block text-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaCheck className="text-green-500 text-xl mr-3 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">Included</h2>
              </div>
              
              <ul className="space-y-3 ml-9">
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
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaTimes className="text-red-500 text-xl mr-3 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">Excluded</h2>
              </div>
              
              <ul className="space-y-3 ml-9">
                {[
                  "International flights (From/to home)",
                  "Additional accommodation before and at the end of the tour",
                  "Tips (Tipping guideline US$10.00 pp per day)",
                  "Personal items (Souvenirs, travel insurance, visa fees, etc.)",
                  "Government imposed increase of taxes and/or park fees"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-amber-500 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your African Adventure?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Book your unforgettable safari experience and create memories that will last a lifetime.
          </p>
          <Link
            to="/quote-form"
            className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExtensiveTour;