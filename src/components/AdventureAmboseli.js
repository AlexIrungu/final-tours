import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
import masimara1 from './day2day/masimara 1.png'

const AdventureAmboseli = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <LazyLoadImage
          src={masimara1}
          alt="Masai Mara Landscape"
          className="w-full h-full object-cover"
          effect="blur"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Adventure Amboseli</h1>
            <p className="text-xl">Experience the magic of Kenya's wilderness</p>
          </div>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
      {activeSection === "overview" && (
  <div className="space-y-8">
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-600 leading-relaxed">
        Experience an unforgettable journey through Kenya's most iconic destinations.
        From the majestic Mount Kilimanjaro views in Amboseli to the vast savannas
        of Masai Mara, this tour offers an authentic African safari experience.
      </p>
    </div>

    {/* Tour Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <DollarSign className="text-orange-500 w-6 h-6 mr-2" />
          <h3 className="text-xl font-semibold">Value Tour</h3>
        </div>
        <p className="text-gray-600">Quality accommodations at competitive rates</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <Users className="text-orange-500 w-6 h-6 mr-2" />
          <h3 className="text-xl font-semibold">Small Groups</h3>
        </div>
        <p className="text-gray-600">Maximum 6 people per vehicle for personalized attention</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <Baby className="text-orange-500 w-6 h-6 mr-2" />
          <h3 className="text-xl font-semibold">Family Friendly</h3>
        </div>
        <p className="text-gray-600">Suitable for travelers of all ages</p>
      </div>
    </div>

    {/* Activities Section */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Activities & Transportation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <Binoculars className="text-orange-500 w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Game Drives</h3>
              <p className="text-gray-600">Daily guided safaris in 4x4 vehicles</p>
            </div>
          </div>
          <div className="flex items-center">
            <Car className="text-orange-500 w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Transportation</h3>
              <p className="text-gray-600">Comfortable 4x4 vehicles with pop-up roof</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <Map className="text-orange-500 w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Destinations</h3>
              <p className="text-gray-600">Visit 4 iconic Kenyan national parks</p>
            </div>
          </div>
          <div className="flex items-center">
            <PlaneLanding className="text-orange-500 w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Transfers</h3>
              <p className="text-gray-600">Airport pickup and drop-off included</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Accommodation & Meals Section */}
    <div className="bg-white rounded-xl shadow-lg p-6">
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
            days: "Day 1-2",
            lodge: "Amboseli Sopa Lodge",
            type: "Mid-range lodge just outside Amboseli NP",
            images: [
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_1611493772646_amboseli9.jpg",
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937731932_amboseli4.jpg",
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/264_16114937704282_amboseli1.jpg"
            ],
            meals: "All meals included"
          },
          {
            days: "Day 3",
            lodge: "Lake Naivasha Sopa Resort",
            type: "Mid-range hotel at Lake Naivasha",
            images: [
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929864951_naivasha7.jpg", 
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929843779_naivasha2.jpg" ,
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/271_16114929854435_naivasha9.jpg"
            ],
            meals: "All meals included"
          },
          {
            days: "Day 4",
            lodge: "Lake Nakuru Sopa Lodge",
            type: "Mid-range lodge inside Lake Nakuru NP",
            images: [
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930996435_nakuru.jpg",
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930912846_nakuru6.jpg" ,
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/272_16114930895067_nakuru1.jpg"
            ],
            meals: "All meals included"
          },
          {
            days: "Day 5-6",
            lodge: "Sentrim Mara Camp",
            type: "Mid-range tented camp just outside Masai Mara NR",
            images: [
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590837109_sentrim1.jpg" ,
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590839561_sentrim2.jpg" ,
              "https://cloudfront.safaribookings.com/accommodations/photos/thumbs/345_16116590848588_sentrim6.jpg" 
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
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Day 7</h3>
            <p className="text-gray-600">Departure day - Breakfast included</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

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

        {activeSection === "rates" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Info className="text-orange-500 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Important Information</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="text-orange-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Rates are per person and exclude international flights
                </li>
                <li className="flex items-center">
                  <Check className="text-orange-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Minimum 6 people required for tour departure
                </li>
                <li className="flex items-center">
                  <Check className="text-orange-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Children of all ages welcome
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">2024 Rates</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-gray-600">Season</th>
                      <th className="px-6 py-3 text-right text-gray-600">Single</th>
                      <th className="px-6 py-3 text-right text-gray-600">Per Person (2 People)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        season: "Apr 1 - May 31",
                        single: 1626,
                        double: 982
                      },
                      {
                        season: "Jun 1 - Oct 31",
                        single: 1626,
                        double: 982
                      },
                      {
                        season: "Nov 1 - Dec 19",
                        single: 2013,
                        double: 1297
                      },
                      {
                        season: "Dec 20 - Dec 31",
                        single: 2013,
                        double: 1297
                      }
                    ].map((rate, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">{rate.season}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold">${rate.single}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold">${rate.double}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Link
                  to="/quote-form"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Get Personalized Quote
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeSection === "day-to-day" && (
          <div className="space-y-8">
            {/* Arrival Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <PlaneLanding className="text-orange-500 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Arrival</h2>
              </div>
              <ul className="space-y-2 text-gray-600 ml-9">
                <li>Airport pickup included</li>
                <li>Pre-tour accommodation available (additional cost)</li>
              </ul>
            </div>

            {/* Day by Day Cards */}
            {[
              {
                days: "Day 1-2",
                title: "Amboseli National Park",
                image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Amboseli_National_Park_033.jpg",
                description: "Experience the majesty of Mount Kilimanjaro and witness huge herds of elephants in their natural habitat. Enjoy morning and afternoon game drives with opportunities to spot over 400 species of birds.",
                accommodation: "Amboseli Sopa Lodge",
                accommodationType: "Mid-range lodge outside Amboseli NP"
              },
              {
                days: "Day 3",
                title: "Lake Naivasha",
                image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Naivasha_009.jpg",
                description: "Take a scenic boat ride to Crescent Island and enjoy a nature walk among free-roaming wildlife. Optional activities include swimming in geothermal spas and visiting Hell's Gate National Park.",
                accommodation: "Lake Naivasha Sopa Resort",
                accommodationType: "Mid-range hotel at Lake Naivasha"
              },
              {
                days: "Day 4",
                title: "Lake Nakuru National Park",
                image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Lake_Nakuru_National_Park_013.jpg",
                description: "Discover the famous flamingo-lined shores and search for both black and white rhinos. Enjoy game drives in search of lions, leopards, and the rare Rothschild's giraffe.",
                accommodation: "Lake Nakuru Sopa Lodge",
                accommodationType: "Mid-range lodge inside Lake Nakuru NP"
              },
              {
                days: "Day 5-6",
                title: "Masai Mara Safari",
                image: "https://cloudfront.safaribookings.com/lib/kenya/destination/752x253/Masai_Mara_National_Reserve_111.jpg",
                description: "Experience the world-famous Masai Mara with its abundant wildlife and stunning landscapes. Search for the Big Five and witness the great wildebeest migration (July-October).",
                accommodation: "Sentrim Mara Camp",
                accommodationType: "Mid-range tented camp outside Masai Mara"
              }
            ].map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <LazyLoadImage
                    src={day.image}
                    alt={day.title}
                    className="w-full h-full object-cover"
                    effect="blur"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                    {day.days}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{day.title}</h3>
                  <p className="text-gray-600 mb-6">{day.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Hotel className="text-orange-500 w-5 h-5 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{day.accommodation}</h4>
                        <p className="text-gray-600">{day.accommodationType}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Coffee className="text-orange-500 w-5 h-5 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Meals</h4>
                        <p className="text-gray-600">All meals included</p>
                        <p className="text-gray-600">Drinking water provided</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Final Day Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Sun className="text-orange-500 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Day 7 - Departure</h2>
              </div>
              <p className="text-gray-600 mb-6">
                After breakfast, enjoy an optional visit to a Masai village before your transfer to Jomo Kenyatta International Airport for your departure flight.
              </p>
              <div className="flex items-start">
                <Coffee className="text-orange-500 w-5 h-5 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Meals</h4>
                  <p className="text-gray-600">Breakfast included</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdventureAmboseli;