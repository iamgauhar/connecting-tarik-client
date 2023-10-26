import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[95%] md:w-[280px] p-4 border flex flex-col gap-2 cursor-pointer">
      <div className="mb-5 text-center hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[12px] text-gray-500 mb-3">Canon</p>
      <div className="text-[15px] font-bold text-gray-900">
        Canon CN-E14-35mm
      </div>
      <div className="flex gap-5 mb-5">
        <p className="font-bold text-gray-800">$652</p>

        <p className="text-gray-500 line-through">$776</p>
      </div>
      <button className="border-none outline-none px-2 py-1 text-[14px] bg-gray-900 text-white text-center rounded-md hover:-translate-y-1 hover:scale-110 duration-300">
        View Details
      </button>
      <div className="text-[12px] text-gray-500 text-justify pt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
        libero.
      </div>
    </div>
  );
};

export default ProductCard;
