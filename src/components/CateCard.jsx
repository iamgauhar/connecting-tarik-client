import React from "react";
import { NavLink } from "react-router-dom";
import { useYourContext } from "../../context/itemContext";
// import smartphone from "../assets/images/smartwatch.png"

const CateCard = (item) => {
  const { name, image, _id } = item.item
  const { setSwId, setEbId } = useYourContext()
  if (name === "Smartwatch") {
    setSwId(_id)
  }
  if (name === "Earbuds") {
    setEbId(_id)
  }

  return (
    <div>
      <NavLink to={`/category/${_id}`}>
        <div className="max-w-[170px] max-h-[170px] sm:max-w-[180px] sm:max-h-[180px] md:max-w-[174px] border bg-white rounded-md p-4 flex justify-center items-center flex-col gap-4 cursor-pointer">
          <div className="max-h-[70%] max-w-[70%] p-1 hover:scale-105 transition-all duration-500 ">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <div><h1 className="text-xl font-semibold text-center">{name}</h1></div>
        </div>
      </NavLink>
    </div>
  );
};

export default CateCard;
