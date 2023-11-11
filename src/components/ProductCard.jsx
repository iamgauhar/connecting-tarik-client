import React from "react";

const ProductCard = ({ item }) => {
  const { name, images, price, categoryId } = item
  return (
    <div className="w-full md:w-[420px] xl:w-[370px] max-h-[150px] bg-slate-50 cursor-pointer p-4 flex items-center gap-2 border hover:scale-105 transition-all duration-500">
      <div className="w-[160px] h-full">
        <img className="w-full h-full object-cover" src={images[0]} alt="" />
      </div>
      <div className="h-full w-full  flex flex-col justify-evenly">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-500">{categoryId.name}</p>
        <p className="font-semibold"><span>&#x20b9; </span>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
