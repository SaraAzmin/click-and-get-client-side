import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fourProducts = products.slice(0, 4);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="px-10 lg:px-20 bg-slate-100 py-8 lg:py-10 flex flex-col">
      <h1 className="text-xl md:text-4xl font-semibold mb-3 md:mb-10 text-blue-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        {products.length > 4
          ? fourProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          : products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
      </div>
      <Link
        to="/allInstruments"
        type="button"
        className="mx-auto px-6 py-4 mt-7 bg-blue-800 text-white font-semibold text-lg rounded shadow-md hover:shadow-blue-800 hover:bg-slate-100 hover:text-blue-800 hover:border-sky-800"
      >
        View All Products
      </Link>
    </div>
  );
};

export default Products;
