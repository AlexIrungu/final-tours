import React, { useState } from "react";
import StarRating from "./StarRating";

function ReviewForm() {
  // State variables to store form input values
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:danilscenic@gmail.com?subject=${title}&body=Location: ${location}%0D%0ARating: ${rating}%0D%0ATitle: ${title}%0D%0AReview: ${reviewText}%0D%0AName: ${name}%0D%0ACountry: ${country}%0D%0AEmail: ${email}`;

    

  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 my-5">Review Form</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
        <div className="mb-6">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Where did you go?</label>
          <div className="flex">
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select location</option>
              <option value="6-Day Budget Tour - Amboseli, Crescent, Nakuru and Mara">6-Day Budget Tour - Amboseli, Crescent, Nakuru and Mara</option>
              <option value="3-Day Lavish Safari - Amboseli National Park">3-Day Lavish Safari - Amboseli National Park</option>
              <option value="3-Day Exploring Masai Mara National Reserve">3-Day Exploring Masai Mara National Reserve</option>
              <option value="7-Day Budget -Amboseli, Naivasha, Bogoria, Nakuru, Mara">7-Day Budget -Amboseli, Naivasha, Bogoria, Nakuru, Mara</option>
              <option value="10-Day Extensive Tour in Kenya">10-Day Extensive Tour in Kenya</option>
              <option value="6-Day Mid Range Safari - Bogoria, Nakuru, Naivasha, Mara">6-Day Mid Range Safari - Bogoria, Nakuru, Naivasha, Mara</option>
              <option value="7-Day Adventure- Amboseli, Naivasha, Nakuru & Masai Mara">7-Day Adventure- Amboseli, Naivasha, Nakuru & Masai Mara</option>
              <option value="Custom Tour">Custom Tour</option>
              
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating</label>
          {/* Use a component for star rating */}
          {/* Implement star rating component */}
          <StarRating onChange={setRating} />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Review Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter review title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reviewText" className="block text-gray-700 font-bold mb-2">Review</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your review (minimum 50 characters)"
            minLength="50"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country of Residence</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your country"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
