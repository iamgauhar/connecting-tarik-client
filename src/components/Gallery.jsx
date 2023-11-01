import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

function Gallery() {
    const [images, setImages] = useState([
        {
            url: 'https://images.pexels.com/photos/18650061/pexels-photo-18650061/free-photo-of-woman-sitting-and-working-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'first',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/15583987/pexels-photo-15583987/free-photo-of-roof-of-chinese-temple-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'second',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/18431185/pexels-photo-18431185/free-photo-of-ornamented-gate-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'third',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/13768940/pexels-photo-13768940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'fourth',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/13149424/pexels-photo-13149424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'fifth',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/18815907/pexels-photo-18815907/free-photo-of-glenorchy-lagoon-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'sixth',
            name: 'name',
        },
        {
            url: 'https://images.pexels.com/photos/11875718/pexels-photo-11875718.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            alt: 'seventh',
            name: 'name',
        },
    ]);
    const [selectedImage, setSelectedImage] = useState(null);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        450: 1,
    };

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="my-[4.4%] w-[90%] mx-auto">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onClick={() => handleImageClick(index)}
                    >
                        <div className="relative">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-auto cursor-pointer"
                            />
                            <div className="absolute left-5 bottom-5 w-full bg-opacity-50 text-white p-2 text-xl font-bold opacity-0 group-hover:opacity-100">
                                {image.name}
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>

            {selectedImage !== null && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75"
                    onClick={closeImageModal} // Close the modal when clicking outside
                >
                    <div className="bg-white p-4 rounded-lg h-[90%] relative">
                        <img
                            src={images[selectedImage].url}
                            alt={images[selectedImage].alt}
                            className="h-[100%] object-contain"
                        />

                        <div className="absolute left-5 bottom-5 w-full  text-white p-2 text-xl font-bold ">
                            {images[selectedImage].name}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
