import React, { useState } from "react";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onChange(value);
  };

  const getRatingLabel = () => {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Fair";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          className={`cursor-pointer ${
            index + 1 <= rating ? "text-yellow-500" : "text-gray-300"
          } text-2xl transition duration-300`}
        >
          &#9733;
        </span>
      ))}
      <span className="ml-2">{getRatingLabel()}</span>
    </div>
  );
};

export default StarRating;
