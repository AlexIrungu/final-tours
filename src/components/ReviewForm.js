import React, { useState } from "react";
import StarRating from "./StarRating";

function ReviewForm() {
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:danilscenic@gmail.com?subject=${title}&body=Location: ${location}%0D%0ARating: ${rating}%0D%0ATitle: ${title}%0D%0AReview: ${reviewText}%0D%0AName: ${name}%0D%0ACountry: ${country}%0D%0AEmail: ${email}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6">Review Form</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-1">
              Where did you go?
            </label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

          <div>
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-1">
              Rating
            </label>
            <StarRating onChange={setRating} />
          </div>

          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">
              Review Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter review title"
              required
            />
          </div>

          <div>
            <label htmlFor="reviewText" className="block text-gray-700 font-semibold mb-1">
              Review
            </label>
            <textarea
              id="reviewText"
              name="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your review (minimum 50 characters)"
              minLength="50"
              required
              rows="4"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">
                Country of Residence
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your country"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg tracking-wide hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
