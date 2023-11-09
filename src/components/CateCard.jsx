import React from "react";
// import smartphone from "../assets/images/smartwatch.png"

const CateCard = (item) => {
  const { name, image } = item.item

  return (
    <div className="max-w-[174px] max-h-[174px] border bg-white rounded-md p-4 flex justify-center items-center flex-col gap-4 cursor-pointer">
      <div className="max-h-[70%] max-w-[70%] p-1 hover:scale-105 transition-all duration-500 ">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div><h1 className="text-xl font-semibold text-center">{name}</h1></div>
    </div>
  );
};

export default CateCard;
