import React from "react";
import Banner from "../Home/Banner/Banner";
import AboutApp from "../Home/AboutApp/AboutApp";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutApp></AboutApp>
      <Products></Products>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
