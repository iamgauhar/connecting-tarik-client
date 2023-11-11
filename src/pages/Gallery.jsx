import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { getCustomers } from '../../config/apiUrl';
import { useYourContext } from '../../context/itemContext';

function Gallery() {
    const { images, setImages } = useYourContext();

    const allCustomer = async () => {

        const customersData = await fetch(getCustomers, {
            method: 'GET',
        });
        const response = await customersData.json();
        console.log(response)

        setImages(response.customers)
    };


    useEffect(() => {
        try {
            allCustomer();
        } catch (err) {
            console.log(err);
        }
    }, []);



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
        <div className="my-[4.4%]  pl-4 pr-2">
            <div className='w-full pt-10 mx-auto md:w-4/5'>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {images?.map((image) => (
                        <div
                            key={image._id}
                            className="relative group"
                            onClick={() => handleImageClick(index)}
                        >
                            <div className="relative p-[2px] bg-black">
                                <img
                                    src={image.image}
                                    alt={image.name}
                                    className="w-full h-auto cursor-pointer"
                                />
                                <div className="absolute left-5 bottom-5 w-5/6 bg-opacity-50 text-white p-2 text-xl font-bold opacity-0 group-hover:opacity-100">
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
        </div>
    );
}

export default Gallery;
