import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImgSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className="md:w-[800px] md:h-[600px] overflow-hidden relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
         <div className="text-5xl font-bold absolute left-5 bottom-14 text-white">From river to sea<br></br>Palestine will be free</div>
      </div>
      <div className="md:w-[800px] md:h-[600px] overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1651132988416-6887d17c90e9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
          <div className="text-5xl font-bold absolute left-5 bottom-14 text-white">From river to sea<br></br>Palestine will be free</div>
      </div>
      <div className="md:w-[800px] md:h-[600px] overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1651074176861-41770b59b893?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
         <div className="text-5xl font-bold absolute left-5 bottom-14 text-white">From river to sea<br></br>Palestine will be free</div>
      </div>
    </Carousel>
  );
};

export default ImgSlider;
