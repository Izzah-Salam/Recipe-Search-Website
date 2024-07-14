import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

const Star = ({ filled }) => (
  <span style={{ color: filled ? "gold" : "gray" }}>★</span>
);

export default StarRating;
