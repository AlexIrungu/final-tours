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
     <nav className="flex justify-center items-center bg-orange-600 p-4 rounded-lg shadow-md space-x-4">
      {[
        { name: "Overview", key: "overview" },
        { name: "Day to Day", key: "day-to-day" },
        { name: "Rates", key: "rates" },
        { name: "Inclusion", key: "inclusion" }
      ].map((item) => (
        <button
          key={item.key}
          onClick={() => handleSectionClick(item.key)}
          className={`text-lg font-semibold px-4 py-2 rounded-md transition-all duration-300 focus:outline-none ${
            activeSection === item.key
              ? "bg-white text-orange-600 shadow-md"
              : "bg-orange-500 text-white hover:bg-orange-700"
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>



      {/* Sections */}
      <div className="p-4">
        {/* Overview Section */}
        {activeSection === "overview" && (
      <div className="p-6 bg-gray-100">
      <LazyLoadImage src={bogoria1} alt="" className="w-full h-64 object-cover rounded-lg shadow-md" effect="blur" />
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Overview</h2>
      <p className="bg-white rounded-lg shadow-md p-4">
        An exclusive safari through Kenya's natural wonders to Lake Bogoria, Lake Nakuru, Lake Naivasha, and Masai Mara...
      </p>

      {/* Tour Features */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Tour Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-lg shadow-md p-6">
          {[
            { icon: <FaDollarSign />, title: "Mid-range Tour", desc: "This mid-range tour uses lodges and tented camps." },
            { icon: <FaUsers />, title: "Private Tour", desc: "This tour will be organized exclusively for you and won't be shared with others." },
            { icon: <FaCalendarAlt />, title: "Can be customized", desc: "You can request minor changes to the accommodations and destinations of this tour." },
            { icon: <FaUsers />, title: "Suitable for solo travelers", desc: "Solo travelers can book this private tour." },
            { icon: <FaCalendarAlt />, title: "Can start any day", desc: "If availability permits, this tour can start on any day." },
            { icon: <FaChild />, title: "Suitable for all ages", desc: "This tour is suitable for children of all ages." },
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities & Transportation */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Activities & Transportation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
          {[
            { icon: <FaBinoculars />, title: "Activities", desc: "Game drives" },
            { icon: <FaBinoculars />, title: "Game Drives", desc: "Pop-up roof 4x4 vehicle" },
            { icon: <FaCar />, title: "Getting around", desc: "Pop-up roof 4x4 vehicle" },
            { icon: <FaMapMarkedAlt />, title: "Transport", desc: "A transfer from and back to the airport is included" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">{activity.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation & Meals */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Accommodation & Meals</h2>
        <div className="flex items-center space-x-3 text-red-500">
          <FaExclamation className="text-2xl" />
          <p>Additional accommodation before and at the end of the tour can be arranged for an extra cost.</p>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md mt-6">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 font-medium text-gray-500">Day</th>
                <th className="px-6 py-3 font-medium text-gray-500">Accommodation</th>
                <th className="px-6 py-3 font-medium text-gray-500">Meals</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { day: "Day 1", place: "Lake Bogoria Spa Resort", meals: "All Meals Included", image: "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_16119408949297_bogoria5.jpg" },
                { day: "Day 2", place: "Lake Nakuru Sopa Lodge", meals: "All Meals Included", image: "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg" },
                { day: "Day 3", place: "Lake Naivasha Sopa Resort", meals: "All Meals Included", image: "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg" },
                { day: "Day 4 - 5", place: "Masai Mara Sopa Lodge", meals: "All Meals Included", image: "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928325858_mara3.jpg" },
                { day: "Day 6", place: "End of Tour", meals: "Breakfast Included" },
              ].map((stay, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{stay.day}</td>
                  <td className="px-6 py-4">
                    <p>{stay.place}</p>
                    {stay.image && <img src={stay.image} alt={stay.place} className="mt-2 w-32 h-20 object-cover rounded-lg" />}
                  </td>
                  <td className="px-6 py-4">{stay.meals}</td>
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
         <div className="py-8 px-6 bg-gray-100">
         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Day to Day</h2>
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <div className="flex items-center mb-4">
             <FaPlaneArrival className="text-orange-500 text-2xl mr-2" />
             <h2 className="text-2xl font-bold">Arrival</h2>
           </div>
           <ul className="list-disc pl-6 text-left mb-4 text-gray-700">
             <li>You'll be collected from the airport.</li>
             <li>Accommodation before the tour starts can be arranged for an extra cost.</li>
           </ul>
         </div>
   
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
           {[ 
             {
               day: 'Day 1',
               title: 'Lake Bogoria',
               image: 'https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Bogoria_National_Reserve_010.jpg',
               description: 'Your adventure begins at Lake Bogoria...',
               accommodation: 'Lake Bogoria Spa Resort',
               accommodationDesc: 'Mid-range lodge located just outside Lake Bogoria NR',
               images: [
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_16119408949297_bogoria5.jpg',
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/560_1528_16127956406714_3w1a6190_boking.jpg'
               ]
             },
             {
               day: 'Day 2',
               title: 'Lake Nakuru National Park',
               image: 'https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg',
               description: 'Next, we head to Lake Nakuru...',
               accommodation: 'Lake Nakuru Spa Lodge',
               accommodationDesc: 'Mid-range lodge located inside Lake Nakuru NP',
               images: [
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg',
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg'
               ]
             },
             {
               day: 'Day 3',
               title: 'Lake Naivasha',
               image: 'https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Naivasha_022.jpg',
               description: 'Your safari continues to the tranquil shores of Lake Naivasha...',
               accommodation: 'Lake Naivasha Sopa Resort',
               accommodationDesc: 'Mid-range lodge located at Lake Naivasha',
               images: [
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg',
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg'
               ]
             },
             {
               day: 'Day 4-5',
               title: 'Masai Mara',
               image: 'https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_075.jpg',
               description: 'Finally, as the journey comes close to ending...',
               accommodation: 'Masai Mara Sopa Lodge',
               accommodationDesc: 'Mid-range lodge located inside Masai Mara NR',
               images: [
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928328067_mara1.jpg',
                 'https://cloudfront.safaribookings.com/accommodations/photos/thumbs/251_16114928325858_mara3.jpg'
               ]
             },
             {
               day: 'Day 6',
               title: 'Nairobi Enroute Back Home',
               image: 'https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Nairobi_Airport_002.jpg',
               description: 'This day, you pack up all your belongings...',
               accommodation: 'No Accommodation',
               accommodationDesc: 'Main Destination: Jomo Kenyatta International Airport (Nairobi)',
               images: []
             }
           ].map((day, index) => (
             <div key={index} className="bg-white rounded-lg shadow-md p-6">
               <div className="relative">
                 <img src={day.image} alt={day.title} className="w-full h-64 object-cover rounded-md" />
                 <div className="absolute bottom-0 left-0 bg-orange-500 p-2 text-white">
                   <p className="text-sm font-bold">{day.day}</p>
                   <p className="text-lg font-semibold">{day.title}</p>
                 </div>
               </div>
               <p className="mt-4 text-gray-700">{day.description}</p>
               <h3 className="font-semibold mt-4">Accommodation:</h3>
               <p className="text-gray-700">{day.accommodation}</p>
               <p className="text-gray-600 text-sm">{day.accommodationDesc}</p>
               <div className="flex space-x-2 mt-4">
                 {day.images.map((img, imgIndex) => (
                   <img key={imgIndex} src={img} alt={day.title} className="w-24 h-16 object-cover rounded-md" />
                 ))}
               </div>
             </div>
           ))}
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