import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival,  FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import sevenday from './day2day/sevenday.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SevenDay(){
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
             <LazyLoadImage src={sevenday} alt="" className="" effect="blur"/>
            <h2 className="text-2xl font-bold mb-4 text-left border-b">Overview</h2>
            <p className="bg-white rounded-lg shadow-md p-4">
            A 7-day trip to Kenya's game parks and scenery: Amboseli, Lake Naivasha, Lake Bogoria, Lake Nakuru, and Masai Mara. Each destination promises a unique and breathtaking experience, from the majestic sight of elephants against the backdrop of Mount Kilimanjaro in Amboseli to the serene beauty of Lake Naivasha and its abundant birdlife. Explore the flamingo-filled lakes of Nakuru and Bogoria, and witness the drama of predator-prey interactions in Masai Mara, home to the renowned Great Migration.
                 </p>

                 {/* content */}
                 <div className="py-8">
                    <h2 className="text-2xl font-bold mb-4 border-b text-left">Tour Operations</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-lg shadow-md">
                   
      <div className="flex items-center">
        <FaDollarSign className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Budget Tour</h3>
          <p>This budget tour uses tented camps.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaUsers className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Shared Tour</h3>
          <p>On this shared tour, you will join a group of other travelers. Max 6 people per vehicle.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaCalendarAlt className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Cannot be customized</h3>
          <p>The contents of this tour cannot be changed.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaUsers className="text-orange-500 mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Suitable for single travelers</h3>
          <p>Single travelers can join this group tour, but it requires a minimum of 6 people to run.</p>
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
            Game Drives
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
            Transport
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
            <td className="px-6 py-4 whitespace-nowrap">Day 1</td>
            <td className="px-6 py-4 whitespace-nowrap">
           <div>
            <p className="text-left">Nyati Safari Camp</p>
            <p className="text-left">Budget tented camp just outside Amboseli NP</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593609669_ny4r.jpeg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593661237_ny5r.jpeg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593489318_ny2r.jpeg" alt="" />
            </div>
           </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 2</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
                <p className="text-left">Masada Hotel</p>
                <p className="text-left ml-4">Mid-range hotel at Lake Naivasha</p>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 3</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p className="text-left">Ivory Park Hotel</p>
              <p className="text-left ml-4">Budget hotel outside Lake Bogoria </p>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 4</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p className="text-left">Ivory Park Hotel</p>
              <p className="text-left ml-4">Budget hotel just outside Lake Nakuru </p>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 5-Day 6</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
              <p className="text-left">Miti Mingi Eco Camp</p>
              <p className="text-left ml-4">Budget tented camp just outside Masai Mara NR</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945579079_miti6.PNG" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_1611494557411_miti4.PNG" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945560247_miti1.PNG" alt="" />
            </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 7</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">Ending the trip</td>
            <td className="px-6 py-4 whitespace-nowrap">Breakfast Included</td>
          </tr>
        </tbody>
      </table>
    </div>
                    </div>

                </div>
                        
          </div>
        )}

        {/* Day to Day Section */}
        {activeSection === "day-to-day" && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Day to Day</h2>

            <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
  <FaPlaneArrival className="mr-2" />
  <h2 className="text-2xl font-bold">Arrival</h2>
</div>


<ul className="list-disc pl-6 text-left mb-4">
  <li>You'll be collected from the airport.</li>
  <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
</ul>
{/* day1 - day2 */}
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
<div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_037.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 1</p>
    <p className="text-lg font-semibold">Amboseli , home to African Elephants</p>
  </div>
</div>


                <p className="mb-4">A professional tour guide will pick you up and drive you to Amboseli, where you will arrive just in time for lunch. After lunch, you will be oriented to the camp's surroundings by the hotel staff and then taken to your room to freshen up in readiness for an afternoon game drive. During the game drive, you will use a 4x4 tour vehicle to transverse through the Savannah grasslands of Amboseli in search of wild animals. You are guaranteed to see herds of elephants, the snow-capped Mt. Kilimanjaro, and various species of birds. Other animals are lions, cheetahs, zebras, giraffes, blue wildebeests, antelopes, and gazelles.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Nyati Safari Camp</h4>
                <h4 className="text-left mb-2">Budget tented camp located just outside Amnboseli NP</h4>
                <div className="flex">
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593609669_ny4r.jpeg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593661237_ny5r.jpeg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593489318_ny2r.jpeg" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Naivasha_018.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 2</p>
    <p className="text-lg font-semibold">Lake Naivasha, Boat Trip</p>
  </div>
</div>


                <p className="mb-4">After breakfast, we set off from Amboseli to Lake Naivasha. You shall have a stopover to view the escarpments of the great Rift Valley. Thereafter, you shall be taken to the hotel to have a sumptuous lunch. After refreshing yourself, you will head to Lake Naivasha (a freshwater lake), which lies at the bottom of the Great Rift Valley, for a boat ride, where you will see plenty of various species of birds and hippopotamus. You will then be crossed over to Crescent Island for a safari walk, where you will see other wild animals like giraffes, zebras, water bucks, antelopes, and gazelles. Should you want to explore more, you can visit Hells Gate Park and the geothermal spa at an extra cost.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Masada Hotel</h4>
                <h4 className="text-left mb-2">Mid-range lodge located at Lake Naivasha</h4>
                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day4 */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 3</p>
    <p className="text-lg font-semibold">Lake Bogoria</p>
  </div>
</div>
                <p className="mb-4">This day, you set out to go to Lake Bogoria National Park (which is about a three-hour drive from Naivasha) early in the morning. You will stop over briefly to check-in at the Ivory Park Hotel in Nakuru and immediately continue with the trip. On arrival, you will be guided on a safari walk to the lake by a professional guide who will engage you throughout and explain to you all the animals found in the park. While at the lake, you will witness millions of flamingos painting the lake pink, as well as other species of birds and other animals. You will also see hot springs and geysers streaming out of the earth's surface. A packed lunch will be provided.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Ivory Park Hotel</h4>
                <h4 className="text-left mb-2">Budget hotel located outside Lake Bogoria NR</h4>
               

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_033.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 4</p>
    <p className="text-lg font-semibold">Nakuru</p>
  </div>
</div>
                <p className="mb-4">Early in the morning, you will depart Naivasha and head to Lake Nakuru National Park for a full-day game drive. The park is famous for being a rhino sanctuary and home to a large population of flamingos and pelicans. You are encouraged to keep your cameras ready to shoot any sightings of other animals like lions, leopards, giraffes, gazelles, and many more.
You will enjoy your packed lunch at the park while viewing the beautiful scenery of the lake. As the day closes and sunset sets in, you will be driven back to the hotel, where you will enjoy your dinner for the night and relax for the next day excursion.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Ivory Park Hotel</h4>
                <h4 className="text-left mb-2">Budget hotel located just outside Lake Nakuru NR</h4>
               

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day5  */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_129.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 5-6</p>
    <p className="text-lg font-semibold">Masai Mara</p>
  </div>
</div>


                <p className="mb-4">On the fifth day, you depart Lake Nakuru and drive to the iconic Masai Mara National Reserve. Upon arrival, you will check in at your camp and head for lunch. Afterwards, you will have a brief rest before embarking on your first game drive in the Masai Mara. The reserve is renowned for its abundant wildlife, including the Big Five, wildebeest migrations, and vast Savannah landscapes. In the evening, you return to your accommodation for dinner and unwind around a campfire, sharing stories of the day's adventures. The following day (day 6), immediately after breakfast, you head for a full game drive with a parked lunch. The professional driver guide will traverse the entire park in search of predators on the hunt as well as other animals. You will retire back to the camp late in the evening for dinner.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
                <h4 className="text-left font-semibold mb-2">Miti Mingi Eco Camp</h4>
                <h4 className="text-left mb-2">Budget tented camp located just outside Masai Mara NR</h4>
                <div className="flex">
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945579079_miti6.PNG" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_1611494557411_miti4.PNG" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/259_16114945560247_miti1.PNG" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                  

                {/* day7 */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Nairobi_Airport_001.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 7</p>
    <p className="text-lg font-semibold">Departure</p>
  </div>
</div>


                <p className="mb-4">After breakfast, there is an option to visit the Masai village for an extra cost to learn about the culture of the Masai people and purchase hand-made ornaments and other gifts for your loved ones back at home. Afterward, you will bid farewell to the Masai Mara and begin your journey back home or onward to your next destination, carrying memories of an incredible safari experience in Kenya. Safiri salama—safe journey!</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: No accomodation</h3>
                <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Meals & Drinks:</h3>
        <h4 className="text-left mb-2">Breakfast (Lunch & dinner not included)</h4>
                <h4 className="text-left mb-2">Drinks not included </h4>
                </div>

            </div>
            </div>

          </div>
        )}

        {/* Rates Section */}
        {activeSection === "rates" && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Rates</h2>

            <div className="my-8">
  <h2 className="text-xl font-semibold mb-4">Important to Know</h2>
  <ol className="list-decimal pl-6">
    <li className="text-left mb-2">
      Rates are per person and exclude the international flight from/to your home country.
    </li>
    <li className="text-left mb-2">
      A travel party of 1 or 2 people can join this group tour, but it requires a minimum of 6 people to run.
    </li>
    <li className="text-left mb-2">
      This tour accepts children of all ages.
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
              <td className="border px-4 py-2">Apr 1, 2024 - May 31, 2024</td>
              <td className="border px-4 py-2">$3,421</td>
              <td className="border px-4 py-2">$2,110</td>
              <td className="border px-4 py-2">$1,805</td>
              <td className="border px-4 py-2">$1,513</td>
              <td className="border px-4 py-2">$1,405</td>
              <td className="border px-4 py-2">$1,301</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Jun 1, 2024 - Oct 31, 2024</td>
              <td className="border px-4 py-2">$3,949</td>
              <td className="border px-4 py-2">$2,509</td>
              <td className="border px-4 py-2">$2,140</td>
              <td className="border px-4 py-2">$1,912</td>
              <td className="border px-4 py-2">$1,822</td>
              <td className="border px-4 py-2">$1,703</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Nov 1, 2024 - Dec 21, 2024</td>
              <td className="border px-4 py-2">$3,513</td>
              <td className="border px-4 py-2">$2,170</td>
              <td className="border px-4 py-2">$1,805</td>
              <td className="border px-4 py-2">$1,513</td>
              <td className="border px-4 py-2">$1,405</td>
              <td className="border px-4 py-2">$1,301</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Dec 22, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$3,949</td>
              <td className="border px-4 py-2">$2,509</td>
              <td className="border px-4 py-2">$2,140</td>
              <td className="border px-4 py-2">$1,912</td>
              <td className="border px-4 py-2">$1,822</td>
              <td className="border px-4 py-2">$1,703</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>


            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      {/* <div className="mt-4 hover:bg-brown-600">
    
                <Link to="/quote-form">
                Get Quote
                </Link>
      </div> */}
            </div>

          </div>
        )}

        {/* Inclusion Section */}
        {activeSection === "inclusion" && (
          <div>
            {/* <h2 className="text-2xl font-bold mb-4">Inclusion</h2> */}
            <div className="flex justify-center">
      <div className="w-1/2 mr-4">
        <div className="flex items-center">
        <FaCheck className="text-orange-500 mr-2" />
        <h2 className="text-lg font-semibold mb-2">  Included</h2>
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
        <h2 className="text-lg font-semibold mb-2"> Excluded</h2>
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
export default SevenDay