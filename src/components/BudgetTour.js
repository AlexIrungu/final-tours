import React from "react";
import { FaDollarSign, FaUsers, FaCalendarAlt, FaChild, FaExclamation, FaCheck, FaTimes, FaPlaneArrival,  FaCar, FaBinoculars, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'
import crescent from './day2day/crescent.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function BudgetTour(){
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
           <LazyLoadImage
  src={crescent}
  alt="Masai Mara National Reserve"
  className=""
  effect="blur"
/>

            <h2 className="text-2xl font-bold mb-4 text-left border-b">Overview</h2>
            <p className="bg-white rounded-lg shadow-md p-4">Experience a thrilling safari in Kenya at Amboseli, Lake Nakuru and Masai Mara National Parks where you shall encounter majestic wildlife. Also included is a boat ride to Crescent Island in Lake Naivasha where you will be taken to a nature trail with a professional guide—all at a budget-friendly price!
                 </p>

                 {/* content */}
                 <div className="py-8">
                    <h2 className="text-2xl font-bold mb-4 border-b text-left">Tour Features</h2>
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
              <p className="text-left">Nyati Safari Camp </p>
              <p className="text-left ml-4">Budget tented camp just outside Amboseli NP</p>
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
            <p className="text-left ml-4">Budget hotel just outside Lake Nakuru NP</p>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 4-Day 5</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <p className="text-left">Fisi Camp</p>
              <p className="text-left ml-4">Budget tented camp just outside Masai Mara NR</p>
              <div className="flex">
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954409_fisi3.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563946172_fisi1.jpg" alt="" />
              <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954427_fisi2.jpg" alt="" />
              </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">All Meals Included</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Day 6</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">End of tour</td>
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
<div className="relative">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_062.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 1</p>
    <p className="text-lg font-semibold">Amboseli home of African Elephants</p>
  </div>
</div>



                <p className="mb-4">Located at the foot of Mount Kilimanjaro, Amboseli offers breathtaking view of Africa's highest peak as a backdrop to its diverse wildlife. Join us as we traverse vast savannas, encountering herds of elephants, graceful giraffes, majestic lions, and an array of other iconic African species. Our expert guides will lead you on thrilling game drive, ensuring you capture the perfect photo and create lasting memories.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Nyati Safari Camp</h4>
                <h4 className="text-left mb-2">Budget tented camp located just outside Amboseli NP</h4>
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
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Crescent_Island_Game_Park_001.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 2</p>
    <p className="text-lg font-semibold">Touring Crescent Island in Lake Naivasha</p>
  </div>
</div>


                <p className="mb-4">A tour of Crescent Island in Lake Naivasha promises an unforgettable adventure filled with natural wonders, wildlife encounters and serene landscapes, making it a must-visit destination for nature lovers and photographers alike. As you step onto the Island, you're greeted by an enchanting landscape characterized by sweeping grasslands, acacia forests, and serene lake views. You'll encounter a wide array of animals in their natural habitat. Expect to see grazing herbivores such as giraffes, zebras, wildebeests, and Waterbuck roaming freely.
                </p>
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
    <p className="text-lg font-semibold">Lake Nakuru National Park</p>
  </div>
</div>


                <p className="mb-4">Due to its stunning scenery and abundant biodiversity, Lake Nakuru National Park promises an unforgettable safari experience. Watch a vast flock of pink Flamingos painting the shores of the alkaline lake with as well as over 400 other avian species. The park also hosts iconic African wildlife, including endangered black and white Rhinos, majestic Lions, and elusive Leopards.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation: </h3>
                <h4 className="text-left font-semibold mb-2">Ivory Park Hotel</h4>
                <h4 className="text-left mb-2">Budget hotel located just outside Lake Nakuru NP</h4>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                {/* day5  */}
                <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_031.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 4 - Day 5</p>
    <p className="text-lg font-semibold">The famous Masai Mara National Reserve</p>
  </div>
</div>


                <p className="mb-4">As the safari comes close to an end, prepare to be mesmerized by the raw beauty and unparalleled diversity of Masai Mara, where every moment is an adventure waiting to unfold. Traverse the vast plains dotted with acacia trees, where the golden Savannah stretches as far as the eye can see. Encounter the iconic members of the African Savannah, from the powerful lions and graceful cheetahs to the imposing elephants and towering giraffes, as they roam freely in their natural habitat. Witness the breathtaking spectacle of the Great Migration, as millions of wildebeest and zebra thunder across the Mara River in a primal display of survival.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
                <h4 className="text-left font-semibold mb-2">Fisi Camp</h4>
                <h4 className="text-left mb-2">Budget tented camp located just outside Masai Mara NR</h4>
                <div className="flex">
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954409_fisi3.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563946172_fisi1.jpg" alt="" />
                <img src="https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954427_fisi2.jpg" alt="" />
                </div>

                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
                </div>

                   {/*  day6 */}
                   <div className="bg-white rounded-lg shadow-md p-6">
<div className="relative flex items-center">
  <img src="https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Jomo_Kenyatta_International_Airport_001.jpg" alt="" className="w-auto h-64 rounded-md mr-4" />
  <div className="absolute bottom-0 left-0 bg-gray-800 p-2 bg-orange-500">
    <p className="text-sm font-bold">Day 6</p>
    <p className="text-lg font-semibold">Nairobi - Jomo Kenyatta International Airport</p>

  </div>
</div>


                <p className="mb-4">
This being the last day of the tour, our professional guide will drive you from Masai Mara to the Airport in Nairobi. On your way home, reflect on the beauty and serenity of Kenya's flora and fauna, knowing that the memories you've created will stay with you forever. Kwaheri - goodbye.</p>
                <h3 className="text-left font-semibold mb-2">Accommodation:</h3>
                <h4 className="text-left font-semibold mb-2">Sentrim Mara Camp</h4>
                <h4 className="text-left mb-2">Mid-range lodge located just outside Masai Mara NR</h4>
                <h3 className="text-left font-semibold mb-2">Meals & Drinks:</h3>
                <h4 className="text-left mb-2">All meals included</h4>
                <h4 className="text-left mb-2">Drinking water(Other drinks not included) </h4>
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
              <td className="border px-4 py-2">Jan 2, 2024 - Jun 30, 2024</td>
              <td className="border px-4 py-2">$1,626</td>
              <td className="border px-4 py-2">$982</td>
              <td className="border px-4 py-2">$768</td>
              <td className="border px-4 py-2">$662</td>
              <td className="border px-4 py-2">$597</td>
              <td className="border px-4 py-2">$554</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Jul 1, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$1,626</td>
              <td className="border px-4 py-2">$982</td>
              <td className="border px-4 py-2">$768</td>
              <td className="border px-4 py-2">$662</td>
              <td className="border px-4 py-2">$597</td>
              <td className="border px-4 py-2">$554</td>
              <td className="border px-4 py-2 hover:bg-brown-600 ">
                <Link to="/quote-form">
                Get Quote
                </Link></td>
            </tr>

            {/* <tr>
              <td className="border px-4 py-2">Nov 1, 2024 - Dec 19, 2024</td>
              <td className="border px-4 py-2">$2,013</td>
              <td className="border px-4 py-2">$1,297</td>
              <td className="border px-4 py-2">$1,090</td>
              <td className="border px-4 py-2">$965</td>
              <td className="border px-4 py-2">$908</td>
              <td className="border px-4 py-2">$853</td>
              <td className="border px-4 py-2">Available</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Dec 20, 2024 - Dec 31, 2024</td>
              <td className="border px-4 py-2">$2,013</td>
              <td className="border px-4 py-2">$1,297</td>
              <td className="border px-4 py-2">$1,090</td>
              <td className="border px-4 py-2">$965</td>
              <td className="border px-4 py-2">$908</td>
              <td className="border px-4 py-2">$853</td>
              <td className="border px-4 py-2">Available</td>
            </tr> */}


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
export default BudgetTour