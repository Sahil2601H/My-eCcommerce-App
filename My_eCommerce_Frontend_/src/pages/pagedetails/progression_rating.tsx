import React from "react";
import { Star } from "@mui/icons-material";

const RatingProgress = ({ rating, percentage }: { rating: number; percentage: number }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-6 text-sm font-medium">{rating}★</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-md overflow-hidden">
        <div className="h-full bg-yellow-500" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
  );
};

const RatingSummary = () => {
  const ratings = [
    { rating: 5, percentage: 60 },
    { rating: 4, percentage: 25 },
    { rating: 3, percentage: 10 },
    { rating: 2, percentage: 3 },
    { rating: 1, percentage: 2 },
  ];

  const averageRating = 4.2; // Example value, can be dynamic

  return (
    <div className="p-8 border rounded-lg shadow-md bg-white w-full max-w-xl min-h-[400px]">
      {/* Large Average Rating Display */}
      <div className="flex items-center gap-4 mb-6">
        <Star sx={{ color: "#FFD700", fontSize: 60 }} />
        <div>
          <h1 className="text-5xl font-bold">{averageRating.toFixed(1)}</h1>
          <p className="text-gray-500 text-base">Based on 1,250 reviews</p>
        </div>
      </div>

      {/* Rating Bars */}
      <div className="space-y-3">
        {ratings.map((item) => (
          <RatingProgress key={item.rating} rating={item.rating} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
