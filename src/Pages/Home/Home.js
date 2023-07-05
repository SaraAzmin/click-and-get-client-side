import React from "react";
import Banner from "../Home/Banner/Banner";
import AboutApp from "../Home/AboutApp/AboutApp";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutApp></AboutApp>
      <Products></Products>
    </div>
  );
};

export default Home;
