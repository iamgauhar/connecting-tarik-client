import React from "react";
import CateCard from "./CateCard";

const FeaturedCate = () => {
  return (
    <div className="px-6 md:px-14 mt-10 mb-14">
      <div className="mb-8">
        <p className="pt-2 text-3xl text-gray-800 font-semibold">
          Featured Category
        </p>
        <p className="text-sm">
          Choose your neccessary products from this categories
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <CateCard/>
        <CateCard/>
        <CateCard/>
        <CateCard/>
      </div>
    </div>
  );
};

export default FeaturedCate;
