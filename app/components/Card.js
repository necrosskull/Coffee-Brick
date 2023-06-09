import React, {useState} from 'react';
import Image from "next/image";

const Card = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 4;

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const images = [
        '/mk2.jpg',
        '/mk1.jpg',
        '/mk3.webp',
        '/map.png',

    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (
        <div className="flex h-96 mb-4">
            <div className="w-2/3 mx-10">
                {selectedImage ? (
                    <img src={selectedImage} width={1000}
                         height={1000} alt="Selected" className={`w-full h-full object-cover rounded-lg`}/>
                ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        Select an image
                    </div>
                )}
            </div>
            <div className="w-1/4 ml-auto pr-8">
                <div className="flex flex-wrap h-full">
                    {currentImages.map((image) => (
                        <div
                            key={image}
                            className="h-1/4 w-full p-2"
                            onClick={() => handleImageSelect(image)}
                        >
                            <img
                                src={image}
                                alt="Thumbnail"
                                className={`w-full h-full object-cover rounded-lg ${
                                    selectedImage === image ? 'border-4 border-orange-400' : ''
                                }`}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
