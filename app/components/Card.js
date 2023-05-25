import React, {useState} from 'react';

const Card = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 4;

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const images = [
        'wood.png',
        'lego coffe.png',
        'map.png',
        'table.png',
        'table.png',
        'wood.png',
        'lego coffe.png',
        'map.png',
        'lego coffe.png',
        'map.png',
    ];

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (
        <div className="flex">
            <div className="w-2/3">
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" className="w-full h-auto"/>
                ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        Select an image
                    </div>
                )}
            </div>
            <div className="justify-end">
                <div className="w-1/3 flex flex-wrap">
                    {currentImages.map((image) => (
                        <div
                            key={image}
                            className="w-1/2 h-32 p-2"
                            onClick={() => handleImageSelect(image)}
                        >
                            <img
                                src={image}
                                alt="Thumbnail"
                                className={`w-full h-full object-cover cursor-pointer ${
                                    selectedImage === image ? 'border-2 border-blue-500' : ''
                                }`}
                            />
                        </div>
                    ))}
                </div>

                <div className="w-1/3 flex flex-wrap mt-4">
                    {Array.from({length: totalPages}, (_, index) => index + 1).map(
                        (page) => (
                            <button
                                key={page}
                                className={`mx-2 px-4 py-2 border ${
                                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'
                                }`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
