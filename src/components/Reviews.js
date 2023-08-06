import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Get values from form fields
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    const rating = event.target.rating.value;

    // Create a new review object
    const newReview = {
      name,
      comment,
      rating: parseInt(rating),
    };

    // Add the new review to the reviews state
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Clear form fields after submission
    event.target.reset();
  };

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length || 0;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      {/* Display reviews here */}
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 border p-4 rounded-lg">
          <p className="font-bold">{review.name}</p>
          <p className="text-gray-600">{review.comment}</p>
          <p className="text-gray-600">Rating: {review.rating}</p>
        </div>
      ))}

      <h2 className="text-xl font-bold mb-2">Average Rating: {averageRating.toFixed(2)}</h2>

      {/* Review form */}
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
            Your Review
          </label>
          <textarea
            name="comment"
            id="comment"
            placeholder="Your Review"
            rows="4"
            className="border rounded-lg px-4 py-2 w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <select
            name="rating"
            id="rating"
            className="border rounded-lg px-4 py-2 w-full"
            required
          >
            <option value="" disabled selected>
              Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
