import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="px-6 md:px-14 mt-10 mb-14">
      <div className="mb-8">
        <p className="pt-2 text-3xl text-gray-800 font-semibold">Products</p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
