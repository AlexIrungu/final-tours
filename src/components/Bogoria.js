import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival,  FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import bogoria from './day2day/bogoria.jpg'
import bogoria1 from './day2day/bogoria 1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Bogoria(){
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
     <LazyLoadImage src={bogoria1} alt="" className=" " effect="blur" />
            <h2 className="text-2xl font-bold mb-4 border-b text-left">Overview</h2>
            <p className="bg-white rounded-lg shadow-md p-4">An exclusive safari through Kenya's natural wonders to Lake Bogoria, Lake Nakuru, Lake Naivasha, and Masai Mara. Throughout the journey, our guides will ensure an immersive experience, sharing their extensive knowledge of the region's wildlife, culture, and conservation efforts. We guarantee comfortable full board accommodation and a journey of a lifetime where you shall witness Africa's big five: lions, leopards, buffaloes, rhinos and elephants, diverse bird populations, and many more animals.
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
            <td className="px-6 py-4 whitespace-nowrap">Day 1</td>
            <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <p className="text-left">Lake Bogoria Spa Resort</p>
            <p className="text-left ml-4">Mid-range hotel just outside Lake Bogoria NR</p>
            <div className="flex">
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_16119408949297_bogoria5.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_1528_16127956406714_3w1a6190_boking.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_1528_16127950242702_3w1a6701_booking.jpg" alt="Accommodation 1"  />
            </div>
          </div>
      </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 2</td>
            <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <p className="text-left">Lake Nakuru Sopa Lodge</p>
            <p className="text-left ml-4">Mid-range lodge inside Lake Nakuru NP</p>
            <div className="flex">
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930895067_nakuru1.jpg" alt="Accommodation 1"  />
            </div>
          </div>
      </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 3</td>
            <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <p className="text-left">Lake Naivasha Sopa Resort</p>
            <p className="text-left ml-4">Mid-range hotel at Lake Naivasha</p>
            <div className="flex">
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" alt="Accommodation 1"  />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929854435_naivasha9.jpg" alt="Accommodation 1"  />
            </div>
          </div>
      </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 4 - Day 5</td>
            <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <p className="text-left">Masai Mara Sopa Lodge</p>
            <p className="text-left ml-4">Mid-range hotel inside Masai Mara NR</p>
            <div className="flex">
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928325858_mara3.jpg"   />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928328067_mara1.jpg"   />
            <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928333584_mara2.jpg" />
            </div>
          </div>
      </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 6</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">End of Tour</td>
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
      <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Bogoria_National_Reserve_010.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
      <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
        <p className="text-sm font-bold">Day 1</p>
        <p className="text-lg font-semibold mb-2">Lake Bogoria</p>
      </div>
    </div>
    <p className="mb-4">Your adventure begins at Lake Bogoria, a hidden gem within the Lake Bogoria National reserve that is renowned for its flamingo-filled shores and bubbling hot springs. You shall not only witness the surreal spectacle of thousands of flamingos painting the lake pink but also marvel at the geothermal activity as steam rises from the earth's surface. Through our expert guide, you will get to enjoy a leisurely stroll along the boardwalks as you soak yourself in the serene beauty of the Lake's unique landscape.</p>
    <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Lake Bogoria Spa Resort</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Lake Bogoria NR</h4>
                <div className="flex">
                 
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_16119408949297_bogoria5.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_1528_16127956406714_3w1a6190_boking.jpg" alt="" />
                </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
  </div>

                {/* day4-day5 */}
<div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 2</p>
    <p className="text-lg font-semibold">Lake Nakuru National Park</p>
  </div>
</div>
<p className="mb-4">Next, we head to Lake Nakuru which is adjacent to Nakuru National Park. For bird lovers, this lake is home to one of Africa's most diverse bird populations. The guide will aid you in exploring the lake's shores in search of majestic pelicans, and marabou storks. Keep your camera ready for sightings of the endangered black and white rhinos roaming freely in the park, as well as the elusive Rothschild's giraffe.
                </p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Lake Nakuru Spa Lodge</h4>
                <h4 className="text-left mb-2">Mid-range lodge located inside Lake Nakuru NP</h4>
                <div className="flex">
          
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day6-day7 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Naivasha_022.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 3</p>
    <p className="text-lg font-semibold">Lake Naivasha</p>
    
  </div>
  
</div>
<p className="mb-4">Your safari continues to the tranquil shores of Lake Naivasha, where lush vegetation and abundant wildlife await. To break the monotony of a game drive, this day you shall take a boat safari along the lake's glassy waters, spotting hippos wallowing in the shallows and eagles soaring overhead. An option to explore Crescent Island on foot, encountering zebras, giraffes, and antelopes in their natural habitat, will be at your disposal, but at an extra cost.
                </p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Lake Naivasha Sopa Resort</h4>
                <h4 className="text-left mb-2">Mid-range lodge located at Lake Naivasha</h4>
                <div className="flex">
               
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg" alt="" />
                 <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day8-day9 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_075.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 4-5</p>
    <p className="text-lg font-semibold">Masai Mara</p>
    
  </div>
  
</div>
<p className="mb-4">Finally, as the journey comes close to ending, your last two days of the safari will be at Kenya's most iconic safari destination: the Masai Mara. As you gear up to set out on game drives across the vast Savannah plains, you are encouraged to keep your cameras rolling since you'll encounter Africa's Big Five: lions, elephants, buffaloes, leopards, and rhinos, along with countless other species. If the season is ripe, you will also witness the legendary Great Migration, as millions of wildebeests and zebras traverse the Mara River in search of greener pastures. For more thrill while game viewing, there is an option of a hot air balloon safari at an extra cost upon request.
                </p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Masai Mara Sopa Lodge</h4>
                <h4 className="text-left mb-2">Mid-range lodge located inside Masai Mara NR</h4>
                <div className="flex">
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928328067_mara1.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928325858_mara3.jpg" alt="" />
                 
                  </div>


                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>


                {/* day10 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Nairobi_Airport_002.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold ">Day 6</p>
    <p className="text-lg font-semibold">Nairobi Enroute Back Home</p>
    
  </div>
  
</div>
<p className="mb-4">This day, you pack up all your belongings and start your journey back to the airport in Nairobi. If time allows, an optional visit to the Masai Village at an extra cost is encouraged since you will get to not only learn about their culture but also purchase hand-made souvenirs for your loved ones back at home. As you board the flight back to your destination of origin, we hope that you will carry with you a treasure trove of memories and, most importantly, a deeper appreciation for the rich culture and natural wonders of this remarkable country: Kenya. Until we meet again, Kwaheri! (goodbye).
                </p>
                <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Main Destination: Jomo Kenyatta International Airport (Nairobi)</h3>
        <h3 className="text-left font-semibold text-lg mb-2 text-gray-700">Accommodation: No Accommodation</h3>
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
              <td className="border px-4 py-2">May 1, 2024 - May 31, 2024</td>
              <td className="border px-4 py-2">$3,548</td>
              <td className="border px-4 py-2">$2,295</td>
              <td className="border px-4 py-2">$1,902</td>
              <td className="border px-4 py-2">$1,771</td>
              <td className="border px-4 py-2">$1,573</td>
              <td className="border px-4 py-2">$1,484</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Jun 1, 2024 - June 30, 2024</td>
              <td className="border px-4 py-2">$3,824</td>
              <td className="border px-4 py-2">$2,295</td>
              <td className="border px-4 py-2">$2,091</td>
              <td className="border px-4 py-2">$1,814</td>
              <td className="border px-4 py-2">$1,730</td>
              <td className="border px-4 py-2">$1,612</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            {/* Add more rows as needed */}
            <tr>
              <td className="border px-4 py-2">Jul 1, 2024 - Oct 31, 2024</td>
              <td className="border px-4 py-2">$4,549</td>
              <td className="border px-4 py-2">$3,037</td>
              <td className="border px-4 py-2">$2,715</td>
              <td className="border px-4 py-2">$2,418</td>
              <td className="border px-4 py-2">$2,677</td>
              <td className="border px-4 py-2">$2,210</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Nov 1, 2024 - Dec 21, 2024</td>
              <td className="border px-4 py-2">$3,824</td>
              <td className="border px-4 py-2">$2,295</td>
              <td className="border px-4 py-2">$2,091</td>
              <td className="border px-4 py-2">$1,814</td>
              <td className="border px-4 py-2">$1,730</td>
              <td className="border px-4 py-2">$1,612</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dec 22, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$4,589</td>
              <td className="border px-4 py-2">$3,037</td>
              <td className="border px-4 py-2">$2,715</td>
              <td className="border px-4 py-2">$2,418</td>
              <td className="border px-4 py-2">$2,677</td>
              <td className="border px-4 py-2">$2,210</td>
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
export default Bogoria