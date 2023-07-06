import React, { useEffect, useState } from "react";
import bg from "../../../assets/bg_review.jpg";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div
      className="px-10 lg:px-20 py-8 lg:py-16"
      style={{ background: `url(${bg})` }}
    >
      <h3 className="text-xl md:text-4xl font-semibold mb-3 md:mb-10 text-blue-800">
      Don't just take our word for it... Read reviews from our customers
      </h3>
      <section className=" text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center px-5">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
