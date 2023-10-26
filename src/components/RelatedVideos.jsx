import React from "react";
import ReactPlayer from "react-player";

const RelatedVideos = () => {
  return (
    <div className="px-6 md:px-14 my-8">
      <div className="text-3xl text-gray-800 font-semibold mb-10">
        Related YouTube Videos
      </div>
      <div className="w-[95%] flex flex-col md:flex-row gap-5 justify-center">
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={250}
        />
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={250}
          
        />
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={250}
         
        />
      </div>
    </div>
  );
};

export default RelatedVideos;
