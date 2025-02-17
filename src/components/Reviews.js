import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, UserCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Modall from './Modall';

const Reviews = () => {
  const initialReviews = [
    {
      name: "Charles Nickson",
      country: "KE",
      header: "Simply the Best.",
      comment: "I booked a 3 days tour to Amboseli National Park last month with Danil Scenic Tours and to-date I still have nostalgia. It was my first tour experience I must say I enjoyed every moment. The itinerary was well planned and the pricing was pocket friendly. The accommodation was at Kibo Safari Camp and everything about the camp was perfect from meals, bed and staff. During the tour the guide was not only friendly but also very knowledgeable about birds, animals, culture of the Masai people. The best part about the whole tour was my birthday surprise by the team from Danil Scenic Tours (thanks to their keen eye for detail they noticed from my identification documents that I had a birthday on the last day of the tour). Let me tell it to you, they actually organized with the hotel for me to cut a piece of cake as they sang birthday songs walking round the dinning area and using cutlery as the musical instruments.... wow, this was so emotional I could not help it. This was best birthday that I have ever celebrated in my life. Thank you Danil Scenic Tours for that and the whole team good job. I plan to do another trip with them soon.😍",
      rating: 5
    },
    {
      name: "Guy",
      country: "BE",
      header: "Best Guide in Kenia!",
      comment: "We had a great time in Kenia with our guide Dan. He knows the parks and the animals like no other. Dan is not only very professional, he's respectful, very friendly, attentive and always in a good humour. If we come back Dan will be for sure our guide again!",
      rating: 5
    },
    {
      name: "Mathew",
      country: "KE",
      header: "Thrilling Safari Experience",
      comment: "I recently had the pleasure of embarking on a safari adventure to the iconic Maasai mara national reserve with Danil scenic tours and it was nothing short of extra ordinary. From the time I booked my safari with them, they team demonstrated professionalism and expertise. They provided a detailed information about the itinerary, accommodation and what to expect during the safari. The game drives were incredible and had an opportunity of viewing the animals in their natural habitat. The overall experience exceeded my expectations, the combination of expert guidance, unforgettable wildlife encounters and seamless logistics made it a trip of a lifetime. I wouldn't hesitate recommending Danil scenic Tours to anyone seeking an authentic and unforgettable safari experience.",
      rating: 5
    },
    {
      name: "Faridah Kuya",
      country: "KE",
      header: "Very interactive and they ensure that you have the best service.",
      comment: "I had fun at amboselli national park and playing with the elephants and seeing them made my experience very interactive i will definitely travel with them again",
      rating: 5
    },
    {
      name: "Martin",
      country: "KE",
      header: "He is an excellent tour operator",
      comment: "I and my mum had a 5 days safari with Danil Scenic tours on March and we are more than greatful for the experience.we had a very organized team starting from the booking,receival at the airport and the whole safari in general.our guide Danson was very patient with us and thus we had enough time to take as much photos as possible at Nakuru national park and the great Mara.we also had a boat ride with a close encounter of hippos in Naivasha. We shall be forever greatful for all the efforts made",
      rating: 5
    },
    {
      name: "Charlotte",
      country: "BE",
      header: "Friendly",
      comment: "I recently had the opportunity to embark on a journey with Danil Scenic Tours through Kenya, and it was truly an unforgettable experience. From start to finish, the trip was incredibly well-organized, and I was impressed by the attention to detail and professionalism of the tour guides. Throughout the journey, I learned so much about the culture, history, and wildlife of Kenya. The accommodations provided by Danil Scenic Tours were top-notch, offering comfort and luxury in the heart of nature. Despite the many activities packed into each day, everything ran smoothly, and I never felt rushed or overwhelmed. Additionally, the warmth and hospitality of the local people left a lasting impression on me, making me feel truly welcomed and at home. Overall, my experience with Danil Scenic Tours exceeded all expectations. I highly recommend them to anyone looking for an enriching and immersive travel experience in Kenya.",
      rating: 4
    },
    {
      name: "Rommie",
      country: "KE",
      header: "Loved him.",
      comment: "10/10 will highly recommend them. Excellent services",
      rating: 5
    },
    {
      name: "Daria",
      country: "DE",
      header: "Best experience, 10/10 value for money.",
      comment: "Danson was more than a driver He was an entertainmenter .He was very Patient & good with the kids",
      rating: 5
    },
    {
      name: "Lyeel",
      country: "KE",
      header: "Danil Scenic Tours gave me a tour for me and my kids I'll forever cherish.",
      comment: "I must admit it was my first time to go for a game drive together with my children. We booked a tour to Lake Nakuru National Park with Danil Scenic Tour and the package they offered was budget friendly. Dan the tour guide was amazing. He knew the park like the back of his hands and was able to locate lots of animals. He explained about their characteristics, what they eat, gestation period and lifespan. Looking forward to having more game drives with Danil in the near future.",
      rating: 5
    },
    {
      name: "Leroy",
      country: "KE",
      header: "It was so amazing and lively.",
      comment: "Dan was a professional and skilled tour guide..... honestly he had great communication skills, excellent service,and generally the tour was extravagant",
      rating: 5
    },
    {
      name: "Bea",
      country: "KE",
      header: "Great service.",
      comment: "Dan was very interactive, my guests enjoyed the drive",
      rating: 5
    },
    {
      name: "Grant Taharuki",
      country: "KE",
      header: "Great, friendly and definately a vibe.",
      comment: "I went to Tsavo with my friends and it was definetely worth it! Nice views and we had a very great and dedicated team. Really enjoyed the game drives and the stories and photos we took. Can't wait for next time✨️",
      rating: 5
    },
    {
      name: "Ian",
      country: "KE",
      header: "Friendly.",
      comment: "We went to Tsavo and the experience was amazing, from communication, transport and the experience",
      rating: 5
    },
    {
      name: "Tracey",
      country: "KE",
      header: "Unforgettable.",
      comment: "I went to see the lions and the team made my experience very enjoyable.I will definitely go with them again",
      rating: 5
    },
    {
      name: "Salem",
      country: "KE",
      header: "Very experienced and amazing hospitality.",
      comment: "Dan is very experienced and I enjoyed the national park Safari with him a lot",
      rating: 5
    },
    {
      name: "Kyle",
      country: "UK",
      header: "Dan's a very polite and friendly guide! He's professional about the tour.",
      comment: "I was having great fun traveling with Dan. He's friendly and polite, knows how to cheer guests up when there's long way to drive. He's happy to listen to guests request, so I took really good photos! Thank you Dan, I recommend him to take your for an amazing Kenya tour.",
      rating: 5
    },
    {
      name: "Asha",
      country: "BE",
      header: "Dan lifted our safari to the highest level - we had such a wonderful journey!",
      comment: "Arriving in an unknown continent, we felt immediately at ease with Dan. He is an experienced guide who knows the country, the interaction with people and the way things are done in Kenia. This gave us great peace of mind and allowed us to fully enjoy our trip. We didn’t have to worry about anything, if an issue arose, he would solve it without us needing to stay on top of things. Besides that, he has years of experience travelling the national parks so he knows where to find the animals and how to decipher the codes used by other guides telling each other where the animals are located over the car radio’s. On top of that he is respectful towards the animals, acknowledging the rules of the parks, always shutting down the car engine as soon as the car is at a standstill and allowing you as much time with an animal as you want. By consequence we saw the big 5 by day 2 of our trip and so many more beautiful animals that we are still over the moon just by thinking back on our trip. Dan will always make sure your trip is exactly what you like it to be, he wants you to be straight and clear about your expectations so that he can do his best to make them happen. For us European travellers (aged 35 and 72) that was a relief since we appreciate honesty and bluntness rather than excuses and attempts to smoothen issues. If any of my friends or family wanted to go for a safari in Kenia, I would advise Dan without second thought. He is a person with the heart in the right place and someone you can really trust in an unknown environment, which is what we appreciated the most.",
      rating: 5
    },
    {
      name: "Qing",
      country: "CN",
      header: "Wonderful safari in Kenya.",
      comment: "We got a unforgettable memory with Dan in our 5 days safari. Dan was quite considerate and responsible about every details in our trip. For example, on the last day back to Nairobi city, there was still several demonstrations in the center, so Dan actively confirmed the status in the city to make sure our safety. Beyond that, he sadly got fever during our safari, but he kept sticking with our original plan which really warmed us a lot, and even not lost any feelings of animals searching. The Contact staff was also amazing, she was so patient with our requirements and questions so we could have a wonderful safari in Kenya.",
      rating: 5
    },
    {
      name: "Gauri Kulkarni",
      country: "IN",
      header: "One of best tour experience for us, we will definitely come back.",
      comment: "I would like to extend my gratitude to Daniel scenic tours. Our trip to Masai Mara was memorable because of our tour guide Dan. We cherished every moment and would love to visit again",
      rating: 5
    },
    {
      name: "Faridah",
      country: "KE",
      header: "They are just perfect.",
      comment: "We had a safari with the company and everything went on as planned.we are more than willing to recommend the company to our friends.Dan was a great guide with great knowledge of his sorroundings i.e animals,plants,political background of his country and cultures too.Thumbs up Dan for making our Safari great",
      rating: 5
    },

    

  ];



  const [reviews] = React.useState(initialReviews);
  const [selectedReview, setSelectedReview] = useState(null);

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length || 0;

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-16">
        <h1 className="text-4xl font-bold text-center mb-4">Customer Testimonials</h1>
        <div className="flex items-center justify-center gap-4">
          <StarRating rating={Math.round(averageRating)} />
          <span className="text-lg font-medium">
            {averageRating.toFixed(1)} out of 5
          </span>
        </div>
        
        <Link
          to="/review-form"
          className="absolute right-4 top-0 inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-green-700 hover:to-green-800 transition-all"
        >
          Write a review
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <UserCircle className="w-12 h-12 text-gray-400" />
                    <img
                      src={`https://flagcdn.com/${review.country.toLowerCase()}.svg`}
                      alt={review.country}
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <CardTitle>
                      {review.name}
                    </CardTitle>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900">
                {review.header}
              </h3>
              <p className="text-gray-600 line-clamp-4">
                {review.comment}
              </p>
              <button 
                className="text-green-600 hover:text-green-700 font-medium"
                onClick={() => setSelectedReview(review)}
              >
                Read more
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modall
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview?.header || ''}
      >
        {selectedReview && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <UserCircle className="w-12 h-12 text-gray-400" />
                <img
                  src={`https://flagcdn.com/${selectedReview.country.toLowerCase()}.svg`}
                  alt={selectedReview.country}
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <h3 className="font-semibold">{selectedReview.name}</h3>
                <StarRating rating={selectedReview.rating} />
              </div>
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {selectedReview.comment}
            </p>
          </div>
        )}
      </Modall>
    </div>
  );
};

export default Reviews;