import React from "react";
import ImgSlider from "./ImgSlider";
import FeaturedCate from "./FeaturedCate";

const HeroSection = () => {
  return (
    <div className="w-[100%] px-6 md:px-14 mt-[100px] pb-[50px] flex flex-col md:flex-row justify-center gap-5 items-center mx-auto">
      <div className="w-[100%] md:max-w-[800px] md:max-h-[600px]">
        <ImgSlider />
      </div>

      <div className="w-[100%] md:w-[26%] flex flex-col gap-14">
        <div className="object-cover">
          <img
            src="https://images.unsplash.com/photo-1651074176861-41770b59b893?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className=" object-cover">
          <img
            src='https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover'
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
