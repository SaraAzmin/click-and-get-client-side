import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, description, price, minQuantity, availableQuantity } =
    product;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="lg:px-5 pt-5">
          <img
            src={img}
            alt="Grocery"
            className="rounded-xl h-[12rem]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800 font-semibold">{name}</h2>
          <p className="text-justify text-xs">{description}</p>
          <div className="md:flex justify-between my-2 py-1 lg:border-y-2">
            <h5 className="text-gray-600 text-sm font-medium">
              Available:{" "}
              <span className=" text-blue-800"> {availableQuantity}</span>
            </h5>
            <h5 className="text-gray-600 text-sm font-medium">
              Minimum Order:{" "}
              <span className=" text-blue-800">{minQuantity}</span>
            </h5>
          </div>
          <div className="flex justify-between items-center py-1">
            <h5 className="text-gray-600 text-lg font-medium">
              Price: <span className=" text-blue-800">€{price}</span>
            </h5>
            <button className="btn bg-blue-800 text-white hover:text-blue-800 hover:border-sky-800 hover:bg-slate-100">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
