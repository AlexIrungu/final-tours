import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Importing user icon from react-icons/fa
import Flag from 'react-flags-select'; // Importing flag component

const Reviews = () => {
  // Initial reviews data
  const initialReviews = [
    { name: "Charles Nickson", 
    country: "KE",
      header: "Simply the Best.",
      comment: "I booked a 3 days tour to Amboseli National Park last month with Danil Scenic Tours and to-date I still have nostalgia. It was my first tour experience I must say I enjoyed every moment. The itinerary was well planned and the pricing was pocket friendly. The accommodation was at Kibo Safari Camp and everything about the camp was perfect from meals, bed and staff. During the tour the guide was not only friendly but also very knowledgeable about birds, animals, culture of the Masai people. The best part about the whole tour was my birthday surprise by the team from Danil Scenic Tours (thanks to their keen eye for detail they noticed from my identification documents that I had a birthday on the last day of the tour). Let me tell it to you, they actually organized with the hotel for me to cut a piece of cake as they sang birthday songs walking round the dinning area and using cutlery as the musical instruments.... wow, this was so emotional I could not help it. This was best birthday that I have ever celebrated in my life. Thank you Danil Scenic Tours for that and the whole team good job. I plan to do another trip with them soon.😍", 
      rating: 5 },
    { name: "Guy", 
    country: "BE",
      header: "Best Guide in Kenia!",
      comment: "We had a great time in Kenia with our guide Dan. He knows the parks and the animals like no other. Dan is not only very professional, he's respectful, very friendly, attentive and always in a good humour. If we come back Dan will be for sure our guide again!", 
      rating: 5 },
    { name: "Mathew",
    country: "KE",
      header: "Thrilling Safari Experience",
      comment: "I recently had the pleasure of embarking on a safari adventure to the iconic Maasai mara national reserve with Danil scenic tours and it was nothing short of extra ordinary. From the time I booked my safari with them, they team demonstrated professionalism and expertise. They provided a detailed information about the itinerary, accommodation and what to expect during the safari. The game drives were incredible and had an opportunity of viewing the animals in their natural habitat. The overall experience exceeded my expectations, the combination of expert guidance, unforgettable wildlife encounters and seamless logistics made it a trip of a lifetime. I wouldn't hesitate recommending Danil scenic Tours to anyone seeking an authentic and unforgettable safari experience.", 
      rating: 5},
    { name: "Faridah",
    country: "KE",
    header: "They are just perfect.", 
      comment: "We had a safari with the company and everything went on as planned.we are more than willing to recommend the company to our friends.Dan was a great guide with great knowledge of his sorroundings i.e animals,plants,political background of his country and cultures too.Thumbs up Dan for making our Safari great", 
      rating: 5},
    { name: "Martin",
    country: "KE",
    header: "He is an excellent tour operator", 
      comment: "I and my mum had a 5 days safari with Danil Scenic tours on March and we are more than greatful for the experience.we had a very organized team starting from the booking,receival at the airport and the whole safari in general.our guide Danson was very patient with us and thus we had enough time to take as much photos as possible at Nakuru national park and the great Mara.we also had a boat ride with a close encounter of hippos in Naivasha. We shall be forever greatful for all the efforts made", 
      rating: 5},
    { name: "Charlotte",
    country: "BE",
    header: "Friendly",
      comment: "I recently had the opportunity to embark on a journey with Danil Scenic Tours through Kenya, and it was truly an unforgettable experience. From start to finish, the trip was incredibly well-organized, and I was impressed by the attention to detail and professionalism of the tour guides. Throughout the journey, I learned so much about the culture, history, and wildlife of Kenya. The accommodations provided by Danil Scenic Tours were top-notch, offering comfort and luxury in the heart of nature. Despite the many activities packed into each day, everything ran smoothly, and I never felt rushed or overwhelmed. Additionally, the warmth and hospitality of the local people left a lasting impression on me, making me feel truly welcomed and at home. Overall, my experience with Danil Scenic Tours exceeded all expectations. I highly recommend them to anyone looking for an enriching and immersive travel experience in Kenya.", 
      rating: 4}
  ];

  // State for reviews
  const [reviews, setReviews] = useState(initialReviews);

  // Effect to save reviews to local storage
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length || 0;

  // Function to generate star icons based on the rating
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>&#9733;</span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Customer Testimonials</h1>
      
      {/* Display initial reviews */}
      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
            <Flag
      selected={review.country} // Use the selected prop instead of country prop
      className="flag-icon mr-2" // Add any additional class name for styling
      title={review.country} // Optional: Add a title attribute for accessibility
    />
              <FaUser className="text-gray-600 mr-2" /> {/* User icon */}
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <div className="flex items-center">
                  {/* Display stars */}
                  {generateStars(review.rating)}
                  <span className="text-gray-600 ml-2">Rating: {review.rating}</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{review.header}</h3> {/* Review header */}
            <p className="text-gray-600 mb-4">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Display average rating */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Average Rating: {averageRating.toFixed(2)}</h2>
        {/* Display stars for average rating */}
        {generateStars(Math.round(averageRating))}
      </div>

      {/* Link to write a review form */}
      <div className="absolute top-0 right-0 mt-10 mr-10">
  <Link to="/review-form" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    Write a review
  </Link>
</div>

    </div>
  );
};

export default Reviews;
