import React from "react";
import {
  FaDollarSign,
  FaUsers,
  FaCalendarAlt,
  FaChild,
  FaExclamation,
  FaCheck,
  FaTimes,
  FaPlaneArrival,
  FaCar,
  FaBinoculars,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import crescent from "./day2day/crescent.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  CalendarDays,
  DollarSign,
  Users,
  Baby,
  Map,
  Car,
  Binoculars,
  PlaneLanding,
  Check,
  X,
  Info,
  Coffee,
  Hotel,
  Sun,
  Moon,
  AlertCircle,
  Utensils
} from "lucide-react";

function BudgetTour() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="min-h-screen bg-gray-50">
     

    {/* Hero Section */}
    <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        <LazyLoadImage
          src={crescent}
          alt="Extensive Safari Tour"
          className="w-full h-[50vh] object-cover"
          effect="blur"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Kenyan Safari Adventure
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
          Amboseli, Lake Nakuru and Masai Mara National Parks
          </p>
        </div>
      </div>

       {/* Navigation */}
       <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8 p-4">
            {["overview", "day-to-day", "rates", "inclusion"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === section
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-gray-600 hover:bg-orange-100"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
      {activeSection === "overview" && (
  <div className="space-y-8">
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-600 leading-relaxed">
              Experience a thrilling safari in Kenya at Amboseli, Lake Nakuru
              and Masai Mara National Parks where you shall encounter majestic
              wildlife. Also included is a boat ride to Crescent Island in Lake
              Naivasha where you will be taken to a nature trail with a
              professional guide—all at a budget-friendly price!
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

              {/* section3 */}
              <div className="py-8">
                <div className="flex items-center mb-6">
                        <Hotel className="text-orange-500 w-6 h-6 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">Accommodation & Meals</h2>
                      </div>
                
                      <div className="flex items-center mb-6 bg-orange-50 p-4 rounded-lg">
                        <AlertCircle className="text-orange-500 w-5 h-5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">Additional accommodation before and after the tour can be arranged for an extra cost</p>
                      </div>
               <div className="space-y-6">
                       {[
                         {
                           days: "Day 1",
                           lodge: "Nyati Safari Camp",
                           type: "Budget tented camp just outside Amboseli NP",
                           images: [
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593609669_ny4r.jpeg" ,
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593661237_ny5r.jpeg" ,
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/0_16987593489318_ny2r.jpeg" 
                           ],
                           meals: "All meals included"
                         },
                         {
                           days: "Day 2",
                           lodge: "Masada Hotel",
                           type: "Mid-range hotel at Lake Naivasha",
                           images: [
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg", 
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" ,
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929854435_naivasha9.jpg"
                           ],
                           meals: "All meals included"
                         },
                         {
                           days: "Day 3",
                           lodge: "Ivory Park Hotel",
                           type: "Budget Hotel just outside Lake Nakuru NP",
                           images: [
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg",
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" ,
                            //  "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930895067_nakuru1.jpg"
                           ],
                           meals: "All meals included"
                         },
                         {
                           days: "Day 4-5",
                           lodge: "Fisi Camp",
                           type: "Budget tented camp just outside Masai Mara NR",
                           images: [
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954409_fisi3.jpg",
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563946172_fisi1.jpg" ,
                            "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/313_16117563954427_fisi2.jpg"
                           ],
                           meals: "All meals included"
                         }
                       ].map((accommodation, index) => (
                         <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-md">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                             <div className="md:col-span-1">
                               <div className="bg-gray-50 p-4 rounded-lg">
                                 <h3 className="font-semibold text-lg text-gray-800 mb-2">{accommodation.days}</h3>
                                 <div className="space-y-2">
                                   <h4 className="font-semibold text-gray-800">{accommodation.lodge}</h4>
                                   <p className="text-gray-600 text-sm">{accommodation.type}</p>
                                 </div>
                               </div>
                             </div>
                             
                             <div className="md:col-span-2">
                               <div className="grid grid-cols-3 gap-2">
                                 {accommodation.images.map((image, imgIndex) => (
                                   <div key={imgIndex} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                     <LazyLoadImage
                                       src={image}
                                       alt={`${accommodation.lodge} view ${imgIndex + 1}`}
                                       className="w-full h-full object-cover"
                                       effect="blur"
                                     />
                                   </div>
                                 ))}
                               </div>
                             </div>
                           </div>
                           
                           <div className="bg-gray-50 px-6 py-4 flex items-center">
                             <Utensils className="text-orange-500 w-5 h-5 mr-2" />
                             <div>
                               <span className="font-semibold text-gray-800">Meals:</span>
                               <span className="text-gray-600 ml-2">{accommodation.meals}</span>
                             </div>
                           </div>
                         </div>
                       ))}
               
                       {/* Final Day */}
                       <div className="border border-gray-100 rounded-lg overflow-hidden shadow-md">
                         <div className="p-6">
                           <h3 className="font-semibold text-lg text-gray-800 mb-2">Day 6</h3>
                           <p className="text-gray-600">Departure day - Breakfast included</p>
                         </div>
                       </div>
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
                         day: "Day 1",
                         title: "Amboseli home of African Elephants",
                         image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_062.jpg",
                         description: "Located at the foot of Mount Kilimanjaro, Amboseli offers breathtaking view of Africa's highest peak as a backdrop to its diverse wildlife. Join us as we traverse vast savannas, encountering herds of elephants, graceful giraffes, majestic lions, and an array of other iconic African species. Our expert guides will lead you on thrilling game drive, ensuring you capture the perfect photo and create lasting memories.",
                         lodge: "Nyati Safari Camp",
                         lodgeType: "Budget tented camp located outside Amboseli NP"
                       },
                       {
                         day: "Day 2",
                         title: "Touring Crescent Island in Lake Naivasha",
                         image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Crescent_Island_Game_Park_001.jpg",
                         description: "A tour of Crescent Island in Lake Naivasha promises an unforgettable adventure filled with natural wonders, wildlife encounters and serene landscapes, making it a must-visit destination for nature lovers and photographers alike. As you step onto the Island, you're greeted by an enchanting landscape characterized by sweeping grasslands, acacia forests, and serene lake views. You'll encounter a wide array of animals in their natural habitat. Expect to see grazing herbivores such as giraffes, zebras, wildebeests, and Waterbuck roaming freely.",
                         lodge: "Masada Hotel",
                         lodgeType: "Mid-range lodge located at Lake Naivasha"
                       },
                       {
                         day: "Day 3",
                         title: "Lake Nakuru National Park",
                         image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg",
                         description: "Due to its stunning scenery and abundant biodiversity, Lake Nakuru National Park promises an unforgettable safari experience. Watch a vast flock of pink Flamingos painting the shores of the alkaline lake with as well as over 400 other avian species. The park also hosts iconic African wildlife, including endangered black and white Rhinos, majestic Lions, and elusive Leopards",
                         lodge: "Ivory Park Hotel",
                         lodgeType: "Budget hotel located outside Lake Nakuru NP"
                       },
                       {
                         day: "Day 4-5",
                         title: "The famous Masai Mara National Reserve",
                         image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_031.jpg",
                         description: "As the safari comes close to an end, prepare to be mesmerized by the raw beauty and unparalleled diversity of Masai Mara, where every moment is an adventure waiting to unfold. Traverse the vast plains dotted with acacia trees, where the golden Savannah stretches as far as the eye can see. Encounter the iconic members of the African Savannah, from the powerful lions and graceful cheetahs to the imposing elephants and towering giraffes, as they roam freely in their natural habitat. Witness the breathtaking spectacle of the Great Migration, as millions of wildebeest and zebra thunder across the Mara River in a primal display of survival",
                         lodge: "Fisi Camp",
                         lodgeType: "Budget tented camp located just outside Masai Mara NR"
                       },
                       {
                         day: "Day 6",
                         title: "End of trip to Jomo Kenyatta International Airport",
                         image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Jomo_Kenyatta_International_Airport_001.jpg",
                         description: "This being the last day of the tour, our professional guide will drive you from Masai Mara to the Airport in Nairobi. On your way home, reflect on the beauty and serenity of Kenya's flora and fauna, knowing that the memories you've created will stay with you forever. Kwaheri - goodbye",
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
                        <li>A travel party of 1 or 2 people can join this group tour, but it requires a minimum of 6 people to run.</li>
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
                                dates: "Jan 2, 2024 - Jun 30, 2024",
                                prices: ["$1,626", "$982", "$768", "$662", "$597", "$554"]
                              },
                              {
                                dates: "Jun 1, 2024 - Dec 31, 2024",
                                prices: ["$1,626", "$982", "$768", "$662", "$597", "$554"]
                              },
                              // {
                              //   dates: "Nov 1, 2024 - Dec 20, 2024",
                              //   prices: ["$5,970", "$3,779", "$3,255", "$2,827", "$2,690", "$2,487"]
                              // },
                              // {
                              //   dates: "Dec 21, 2024 - Jan 2, 2025",
                              //   prices: ["$6,668", "$4,622", "$3,968", "$3,504", "$3,432", "$2,745"]
                              // }
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Check className="text-green-500 w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Included</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Park fees (For non-residents)",
                  "All activities (Unless labeled as optional)",
                  "All accommodation",
                  "Professional driver/guide",
                  "All transportation",
                  "All Taxes/VAT",
                  "Roundtrip airport transfer",
                  "Meals (As specified)",
                  "Drinking water"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <Check className="text-green-500 w-4 h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <X className="text-red-500 w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Not Included</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "International flights",
                  "Additional accommodation",
                  "Tips (US$10.00 pp per day)",
                  "Personal items",
                  "Visa fees",
                  "Travel insurance",
                  "Government imposed increase of taxes"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <X className="text-red-500 w-4 h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default BudgetTour;
