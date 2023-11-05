
import ReactPlayer from "react-player";

const RelatedVideos = () => {
  return (
    <div className="my-8">
      <div className="text-3xl text-gray-800 font-semibold mb-10">
        Related YouTube Videos
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between">
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={240}
        />
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={240}

        />
        <ReactPlayer
          url="https://youtu.be/lqXWVzWkkyc?si=yoq3vsWwYl0Q5raI"
          controls
          width="100%"
          height={240}

        />
      </div>
    </div>
  );
};

export default RelatedVideos;
