
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { youtubeLink } from "../../config/apiUrl";

const RelatedVideos = () => {

  const [urls, setUrls] = useState([])
  const allLinks = async () => {
    const linkList = await fetch(youtubeLink, {
      method: 'GET',
    });

    // console.log(await allProductList.json());
    const response = await linkList.json();
    setUrls(response.response);
    console.log(response);
  };

  useEffect(() => {
    try {
      allLinks();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="my-8">
      <div className="text-3xl text-gray-800 font-semibold mb-10">
        Related YouTube Videos
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between">
        {

          urls.map((item) => {
            return (
              <ReactPlayer
                url={item.link}
                controls
                width="100%"
                height={240}
                key={item._id}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default RelatedVideos;
