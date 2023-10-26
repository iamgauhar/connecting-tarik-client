import React from "react";

const CateCard = () => {
  return (
    <div className="w-[95%] mt-8 md:w-[280px] flex gap-6 justify-center border p-3 relative cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
      <div className="mr-6">
        <img src="https://images.unsplash.com/photo-1651074176861-41770b59b893?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[90px] h-[90px] md:w-[70px] md:h-[70px]" />
      </div>
      <div className="mb-6">
        <p className="text-[16px] font-bold text-gray-800 mb-3">Smart Phone</p>
        <ul className="text-gray-600 text-[14px] list-disc">
          <li>Samsung</li>
          <li>Moto</li>
          <li>Pixel</li>
          <li>POCO</li>
        </ul>
      </div>
      <button className="border-none outline-none bg-slate-900 text-white text-[15px] absolute right-0 bottom-0 px-2 py-1">View All</button>
    </div>
  );
};

export default CateCard;
