import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival,  FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import lavish1 from './day2day/lavish 1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LavishSafari(){
    const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
    return(
        <div className="w-full">
      {/* Navigation */}
      <nav className="flex justify-center items-center bg-brown-500 p-2 rounded-md">
  <button
    onClick={() => handleSectionClick("overview")}
    className={`hover:bg-green-600 text-lg font-semibold px-3 py-2 focus:outline-none transition-colors ${
      activeSection === "overview" ? "text-blue-600" : "text-white"
    }`}
  >
    Overview
  </button>
  <button
    onClick={() => handleSectionClick("day-to-day")}
    className={`hover:bg-green-600 text-lg font-semibold px-3 py-2 focus:outline-none transition-colors ${
      activeSection === "day-to-day" ? "text-blue-600" : "text-white"
    }`}
  >
    Day to Day
  </button>
  <button
    onClick={() => handleSectionClick("rates")}
    className={`hover:bg-green-600 text-lg font-semibold px-3 py-2 focus:outline-none transition-colors ${
      activeSection === "rates" ? "text-blue-600" : "text-white"
    }`}
  >
    Rates
  </button>
  <button
    onClick={() => handleSectionClick("inclusion")}
    className={`hover:bg-green-600 text-lg font-semibold px-3 py-2 focus:outline-none transition-colors ${
      activeSection === "inclusion" ? "text-blue-600" : "text-white"
    }`}
  >
    Inclusion
  </button>
</nav>


      {/* Sections */}
      <div className="p-4">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div>
             
             <LazyLoadImage src={lavish1} alt="" className="" effct="blur" />
            
            <h2 className="text-2xl font-bold mb-4 border-b text-left">Overview</h2>
            <p className="bg-white rounded-lg shadow-md p-4">
            This is a lavish three-day safari into the heart of Amboseli National Park in Kenya, where untamed wilderness meets unparalleled luxury. Through out your journey, we guarantee you value for money spent, where every moment is infused with luxury and wonder. Your journey begins with a private transfer by a professional tour guide in a 4x4 pop-up roof jeep from Nairobi to Amboseli, where you'll be greeted by breathtaking views of Mount Kilimanjaro towering over the savanna.
                 </p>

                 {/* content */}
                 <div className="py-8">
                    <h2 className="text-2xl font-bold mb-4 border-b text-left">Tour Features</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-lg shadow-md ">
                   
      <div className="flex items-center">
        <FaDollarSign className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Mid-range Tour</h3>
          <p>This mid-range tour uses lodges and tented camps.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaUsers className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Private Tour</h3>
          <p>This tour will be organized exclusively for you and won't be shared with others.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaCalendarAlt className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Can be customized</h3>
          <p>You can request minor changes to the accommodations and destinations of this tour.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaUsers className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Suitable for solo travelers</h3>
          <p>Solo travelers can book this private tour.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaCalendarAlt className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Can start any day</h3>
          <p>If availability permits, this tour can start on any day.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaChild className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Suitable for all ages</h3>
          <p>This tour is suitable for children of all ages.</p>
        </div>
      </div>
    </div>

    {/* section2 */}
    <div className="py-8">
     <h2 className="text-2xl font-bold mb-4 border-b text-left">Activities & Transportation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md">
   
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <FaBinoculars className="text-orange-500 mr-2" />
            Activities:
          </h3>
          <p>Game drives</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <FaBinoculars className="text-orange-500 mr-2" />
            Game Drives:
          </h3>
          <p>Pop-up roof 4x4 vehicle</p>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <FaCar className="text-orange-500 mr-2" />
            Getting around:
          </h3>
          <p>Pop-up roof 4x4 vehicle</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <FaMapMarkedAlt className="text-orange-500 mr-2" />
            Transport:
          </h3>
          <p>A transfer from and back to the airport is included</p>
        </div>
      </div>
    </div>
    </div>

            {/* section3 */}
                    <div className="py-8">
                        <h2 className="text-2xl font-bold border-b text-left">Accomodation & Meals</h2>
                        <div className="flex items-center">
      <FaExclamation className="text-red-500 mr-2" />
      <p>Additional accommodation before and at the end of the tour can be arranged for an extra cost</p>
    </div>
                        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Day
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Accommodation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Meals
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 1-Day 2</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p className="text-left">Elewana Tortilis Camp Amboseli</p>
              <p className="text-left ml-4">Luxury tented camp inside Amboseli NP</p>
              <div className="flex">
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037567089_tortilis-main-1.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037562485_tortilis-3.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_1610703756111_habituated-elephant-herds.jpg" alt="" />
              </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p>Day 1: Lunch & Dinner Included</p>
              <p>Day 2: All Meals Included</p>
            </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 3</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">End of Tour</td>
            <td className="px-6 py-4 whitespace-nowrap">Breakfast Included</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
                    </div>

                </div>
                        
          </div>
        )}

        {/* Day to Day Section */}
        {activeSection === "day-to-day" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold mb-4">Day to Day</h2>

            <div className="bg-white rounded-lg shadow-md mb-8 p-6">
            <div className="flex items-center mb-4">
  <FaPlaneArrival className="mr-2" />
  <h2 className="text-2xl font-bold">Arrival</h2>
</div>


<ul className="list-disc pl-6 text-left mb-4">
  <li>You'll be collected from the airport.</li>
  <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
</ul>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
{/* day1-day3 */}
<div className="bg-white rounded-lg shadow-md p-6">
    <div className="relative flex items-center">
      <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_060.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
      <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
        <p className="text-sm font-bold">Day 1</p>
        <p className="text-lg font-semibold mb-2">Getting There & Exploring</p>
      </div>
    </div>
    <p className="mb-4">Upon arrival at Nairobi Airport, your private safari guide will greet you and drive you to your opulent accommodation in amboseli. After settling in and enjoying a fantastic welcome lunch, it's time to prepare for the start of your safari trip. In the afternoon, you will be taken to your first game drive in Amboseli's huge savannahs and acacia forests, where you will see a variety of species, including herds of majestic elephants, graceful giraffes, and elusive big cats. As the sun begins to set, arrangements can be made for an extra cost to have a drink of sundowner cocktails in the woods while taking in the splendor of the African scenery, marking the end of the day's activities.</p>
    <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Elewana Tortilis Camp Amboseli</h4>
                <h4 className="text-left mb-2">Luxury tented camp located inside Amboseli NP</h4>
                <div className="flex">
                 
                 <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037567089_tortilis-main-1.jpg" alt="" />
                 <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/690_16107037562485_tortilis-3.jpg" alt="" />
                </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
  </div>

                {/* day4-day5 */}
<div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_049.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 2</p>
    <p className="text-lg font-semibold">Full day game drive- Amboseli National Park</p>
  </div>
</div>
<p className="mb-4">After breakfast, your expert guide, a seasoned naturalist, takes you to venture into the heart of the park. As you traverse the park's diverse habitats, from marshy swamps to acacia woodlands, the real magic of Amboseli unfolds. Towering elephants, adorned with glistening tusks, roam freely amidst herds of graceful antelopes and plump hippos, wallowing in the shallows of crystal-clear watering holes. Your guide's keen eye spots elusive predators lurking in the shadows – a pride of lions basking in the mid-morning sun or a sleek cheetah on the prowl for its next meal. As the sun climbs higher in the sky, you pause for a leisurely midday parked lunch at the observation hill. Rejuvenated and ready for more adventure, you resume your journey through Amboseli's wilderness. As the day draws to a close, you find the perfect vantage point to witness Amboseli's legendary sunset, with Mt. Kilimanjaro as a majestic backdrop.
                </p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Elewana Tortilis Camp Amboseli</h4>
                <h4 className="text-left mb-2">Luxury tented camp located inside Amboseli NP</h4>
                <div className="flex">
          
                 
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

              

                {/* day10 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Jomo_Kenyatta_International_Airport_002.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold ">Day 3</p>
    <p className="text-lg font-semibold">Bidding farewell to Amboseli</p>
    
  </div>
  
</div>
<p className="mb-4">
On your final day in Amboseli, savor a leisurely breakfast before embarking on one last game drive through the park. Capture any missed photo opportunities and bid farewell to the wildlife that has captured your heart during your stay.
Before departing, an opportunity to visit the Masai Village and learn their culture as well as purchase some souvenirs to commemorate your time in Amboseli will be availed to you for an extra cost. Your luxury tour concludes with a scenic transfer back to the airport, where you'll board your onward flight with memories to last a lifetime.
                </p>
                <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Main Destination: Jomo Kenyatta International Airport (Nairobi)</h3>
        <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Accommodation: No Accommodation</h3>
        <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Meals & Drinks:</h3>
        <h4 className="text-left mb-2">Breakfast (Lunch & dinner not included)</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>
                 
                 </div>

               


            </div>

          </div>
        )}

        {/* Rates Section */}
        {activeSection === "rates" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Rates</h2>

            <div className="my-8">
  <h2 className="text-xl font-semibold mb-4">Important to Know</h2>
  <ol className="list-decimal pl-6">
    <li className="mb-2">
      Rates are per person and exclude the international flight from/to your home country.
    </li>
    <li className="mb-2">
    This tour accepts children of all ages. Children under 3 are free.
    </li>
    
  </ol>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Rates per person</h2>

                <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200">Start Dates</th>
              <th className="px-4 py-2 bg-gray-200">Single</th>
              <th className="px-4 py-2 bg-gray-200">2 People</th>
              <th className="px-4 py-2 bg-gray-200">3 People</th>
              <th className="px-4 py-2 bg-gray-200">4 People</th>
              <th className="px-4 py-2 bg-gray-200">5 People</th>
              <th className="px-4 py-2 bg-gray-200">6 People</th>
              <th className="px-4 py-2 bg-gray-200">7+ People</th>
            </tr>
          </thead>
          
          <tbody>
            {/* Add rows of data here */}
            <tr>
              <td className="border px-4 py-2">May 6, 2024 - May 31, 2024</td>
              <td className="border px-4 py-2">$2,707</td>
              <td className="border px-4 py-2">$1,301</td>
              <td className="border px-4 py-2">$1,279</td>
              <td className="border px-4 py-2">$1,008</td>
              <td className="border px-4 py-2">$950</td>
              <td className="border px-4 py-2">$833</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Jun 1, 2024 - Jun 30, 2024</td>
              <td className="border px-4 py-2">$3,225</td>
              <td className="border px-4 py-2">$1,474</td>
              <td className="border px-4 py-2">$1,569</td>
              <td className="border px-4 py-2">$1,250</td>
              <td className="border px-4 py-2">$1,124</td>
              <td className="border px-4 py-2">$1,007</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            {/* Add more rows as needed */}
            <tr>
              <td className="border px-4 py-2">Jul 1, 2024 - Oct 31, 2024</td>
              <td className="border px-4 py-2">$3,970</td>
              <td className="border px-4 py-2">$1,984</td>
              <td className="border px-4 py-2">$1,968</td>
              <td className="border px-4 py-2">$1,593</td>
              <td className="border px-4 py-2">$1,383</td>
              <td className="border px-4 py-2">$1,265</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Nov 1, 2024 - Dec 19, 2024</td>
              <td className="border px-4 py-2">$3,225</td>
              <td className="border px-4 py-2">$1,474</td>
              <td className="border px-4 py-2">$1,569</td>
              <td className="border px-4 py-2">$1,250</td>
              <td className="border px-4 py-2">$1,124</td>
              <td className="border px-4 py-2">$1,007</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dec 20, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$3,970</td>
              <td className="border px-4 py-2">$1,984</td>
              <td className="border px-4 py-2">$1,968</td>
              <td className="border px-4 py-2">$1,593</td>
              <td className="border px-4 py-2">$1,383</td>
              <td className="border px-4 py-2">$1,265</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="mt-4">
        <p>Additional information can be added here.</p>
      </div> */}
            </div>

          </div>
        )}

       {/* Inclusion Section */}
{activeSection === "inclusion" && (
  <div>
    <div className="flex justify-center">
      <div className="w-1/2 mr-4">
        <div className="flex items-center">
          <FaCheck className="text-orange-500 mr-2" />
          <h2 className="text-lg font-semibold mb-2">Included</h2>
        </div>
        
        <ul className="list-disc pl-4 text-left">
          <li>Park fees (For non-residents)</li>
          <li>All activities (Unless labeled as optional)</li>
          <li>All accommodation (Unless listed as upgrade)</li>
          <li>A professional driver/guide</li>
          <li>All transportation (Unless labeled as optional)</li>
          <li>All Taxes/VAT</li>
          <li>Roundtrip airport transfer</li>
          <li>Meals (As specified in the day-by-day section)</li>
          <li>Drinks (As specified in the day-by-day section)</li>
        </ul>
      </div>
      <div className="w-1/2">
        <div className="flex items-center">
          <FaTimes className="text-orange-500 mr-2" />
          <h2 className="text-lg font-semibold mb-2">Excluded</h2>
        </div>
        
        <ul className="list-disc pl-4 text-left">
          <li>International flights (From/to home)</li>
          <li>Additional accommodation before and at the end of the tour</li>
          <li>Tips (Tipping guideline US$10.00 pp per day)</li>
          <li>Personal items (Souvenirs, travel insurance, visa fees, etc.)</li>
          <li>Government imposed increase of taxes and/or park fees</li>
        </ul>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
    )
}
export default LavishSafari