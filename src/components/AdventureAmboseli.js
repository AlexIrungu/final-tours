import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival,  FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import masimara1 from './day2day/masimara 1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AdventureAmboseli(){
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
            <LazyLoadImage src={masimara1} alt="" className="" effect="blur"/>
            <h2 className="text-2xl font-bold mb-4 text-left border-b">Overview</h2>
            <p className="bg-white rounded-lg shadow-md p-4">During the trip, you will be taken to various destinations namely: Amboseli National Park where you shall get a clear view photo of the snow capped Mt Kilimanjaro - the tallest in Africa, with herds of African elephants grazing in front of it ; a stop over to view the great Rift valley escarpment and a boat ride at Lake Naivasha ;Lake Nakuru National Park, where you shall see flamingos, white $ black Rhinos; and the famous Masai Mara where you shall get to see the big five animals and others.
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
            <td className="px-6 py-4 whitespace-nowrap">Day 1-Day 2</td>
            <td className="px-6 py-4 whitespace-nowrap">
           <div>
            <p className="text-left">Amboseli Sopa Lodge</p>
            <p className="text-left">Mid-range lodge just outside Amboseli NP</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_1611493772646_amboseli9.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937731932_amboseli4.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937704282_amboseli1.jpg" alt="" />
            </div>
           </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 3</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
                <p className="text-left">Lake Naivasha Sopa Resort</p>
                <p className="text-left ml-4">Mid-range hotel at Lake Naivasha</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929854435_naivasha9.jpg" alt="" />
            </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 4</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p className="text-left">Lake Nakuru Sopa Lodge</p>
              <p className="text-left ml-4">Mid-range lodge inside Lake Nakuru NP</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930895067_nakuru1.jpg" alt="" />
            </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 5-Day 6</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
              <p className="text-left">Sentrim Mara Camp</p>
              <p className="text-left ml-4">Mid-range tented camp just outside Masai Mara NR</p>
            <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590837109_sentrim1.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590839561_sentrim2.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590848588_sentrim6.jpg" alt="" />
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
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_033.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 1-2</p>
    <p className="text-lg font-semibold">Amboseli sopa lodge</p>
  </div>
</div>


                <p className="mb-4">A guided tour in a 4X4 pop up roof jeep to view the great Mt. Kilimanjaro (usually visible either early in the morning or late in the evening), herds of elephants foraging the marshy swamps, over 400 species of birds, blue wildebeest, zebras, Masai giraffes and a 3D view of the whole park from the observation hill. The optional activities are visit to the Masai village, nature trail and hot air balloon trip.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Amboseli Sopa Lodge</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Amnboseli NP</h4>
                <div className="flex">
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_1611493772646_amboseli9.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937731932_amboseli4.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937704282_amboseli1.jpg" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Naivasha_009.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 3</p>
    <p className="text-lg font-semibold">Naivasha Sopa Resort</p>
  </div>
</div>


                <p className="mb-4">While at Naivasha, you will be taken to a boat ride to visit the Crescent Island and a nature trail to witness various species of birds and other animals. Other activities which you might be interested in at an extra cost are swimming at the geothermal spa and a tour to the gorges on hells gate park.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Lake Nauvasha Sopa Lodge</h4>
                <h4 className="text-left mb-2">Mid-range lodge located at Lake Naivasha</h4>
                <div className="flex">
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929854435_naivasha9.jpg" alt="" />
               </div>
            

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day4 */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 4</p>
    <p className="text-lg font-semibold">Lake Nakuru Sopa Lodge</p>
  </div>
</div>


                <p className="mb-4">The trip will be guided by a professional driver in a 4x4 pop up jeep to Lake Nakuru National Park where you shall see the following animals; Flamingos & Pelican birds, both white and black Rhinos, Rothschild Giraffe, Lions, Leopards and many more species of animals and birds.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Lake Nakuru Sopa Lodge</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Lake Nakuru NP</h4>
                <div className="flex">
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930895067_nakuru1.jpg" alt="" />
               </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day5  */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_111.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 5</p>
    <p className="text-lg font-semibold">Masai Mara National Park</p>
  </div>
</div>


                <p className="mb-4">This is a intensive and extensive game drive to the famous Masai Mara the host of all types of animals and birds namely; the big five animals (Lion, Elephant, Leopard, Rhinos and Buffaloes), various types of Antelopes, Plain Zebra, Masai Giraffe, Wildebeest, Crocodiles and Hippos in the Mara river. An optional hot air balloon at an extra cost for more game viewing can be arranged.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
                <h4 className="text-left font-semibold mb-2">Sentrim Mara Camp</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Masai Mara NR</h4>
                <div className="flex">
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590837109_sentrim1.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590839561_sentrim2.jpg" alt="" />
                  <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590848588_sentrim6.jpg" alt="" />
                  </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                   {/*  day6 */}
                   <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_093.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 6</p>
    <p className="text-lg font-semibold">Mara triangle game drive</p>

  </div>
</div>


                <p className="mb-4">This is another day of vigorous game drive with packed lunch boxes to capture the big five and various other animals and birds. If you happen to visit in the month of July to October you will be lucky to experience the seventh wonder of the world - that is wildebeest migration together with zebras. The crocodiles in Mara river trapping wildebeest and Zebras for a kill and feast- a fantastic phenomenon! As you drive back to the camp you will see the beautiful Sunset.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
                <h4 className="text-left font-semibold mb-2">Sentrim Mara Camp</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Masai Mara NR</h4>
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
    <p className="text-lg font-semibold">Ending the trip</p>
  </div>
</div>


                <p className="mb-4">After breakfast, an optional visit to the Masai village to see the rich culture of Masai people at an extra cost is a good ending of the trip as you are driven back to Jomo Kenyatta International Airport to travel back home and hoping to see you again in the near future for more thrilling safari experiences.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
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
              {/* <th className="px-4 py-2 bg-gray-200">3 People</th>
              <th className="px-4 py-2 bg-gray-200">4 People</th>
              <th className="px-4 py-2 bg-gray-200">5 People</th>
              <th className="px-4 py-2 bg-gray-200">6 People</th>
              <th className="px-4 py-2 bg-gray-200">7+ People</th> */}
            </tr>
          </thead>
          
          <tbody>
            {/* Add rows of data here */}
            <tr>
              <td className="border px-4 py-2">Apr 1, 2024 - May 31, 2024</td>
              <td className="border px-4 py-2">$1,626</td>
              <td className="border px-4 py-2">$982</td>
              {/* <td className="border px-4 py-2">$768</td>
              <td className="border px-4 py-2">$662</td>
              <td className="border px-4 py-2">$597</td>
              <td className="border px-4 py-2">$554</td>
              <td className="border px-4 py-2">Available</td> */}
            </tr>

            <tr>
              <td className="border px-4 py-2">Jun 1, 2024 - Oct 31, 2024</td>
              <td className="border px-4 py-2">$1,626</td>
              <td className="border px-4 py-2">$982</td>
              {/* <td className="border px-4 py-2">$768</td>
              <td className="border px-4 py-2">$662</td>
              <td className="border px-4 py-2">$597</td>
              <td className="border px-4 py-2">$554</td>
              <td className="border px-4 py-2">Available</td> */}
            </tr>

            <tr>
              <td className="border px-4 py-2">Nov 1, 2024 - Dec 19, 2024</td>
              <td className="border px-4 py-2">$2,013</td>
              <td className="border px-4 py-2">$1,297</td>
              {/* <td className="border px-4 py-2">$1,090</td>
              <td className="border px-4 py-2">$965</td>
              <td className="border px-4 py-2">$908</td>
              <td className="border px-4 py-2">$853</td>
              <td className="border px-4 py-2">Available</td> */}
            </tr>

            <tr>
              <td className="border px-4 py-2">Dec 20, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$2,013</td>
              <td className="border px-4 py-2">$1,297</td>
              {/* <td className="border px-4 py-2">$1,090</td>
              <td className="border px-4 py-2">$965</td>
              <td className="border px-4 py-2">$908</td>
              <td className="border px-4 py-2">$853</td>
              <td className="border px-4 py-2">Available</td> */}
            </tr>


            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="mt-4 hover:bg-brown-600">
    
                <Link to="/quote-form">
                Get Quote
                </Link>
      </div>
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
export default AdventureAmboseli