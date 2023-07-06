import React from "react";
import bgImg from "../../../assets/bg_banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-screen bg-no-repeat"
        style={{
          background: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="font-mono mb-3 md:mb-5 text-xl md:text-2xl lg:text-3xl font-bold">
              Bringing <span className="text-blue-500">Freshness</span> to Your
              Doorstep!
            </h1>
            <p className="mb-5">
              <span className="text-blue-500">CLICKandGET</span>: Shop Smart,
              Save Time, and Enjoy Freshness Delivered to Your Doorstep.
              Experience the future of grocery shopping with{" "}
              <span className="text-blue-500">CLICKandGET</span> today!
            </p>
            <button className="btn px-5 lg:px-10 rounded-md bg-blue-800 text-white hover:bg-slate-100 hover:text-blue-800">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
