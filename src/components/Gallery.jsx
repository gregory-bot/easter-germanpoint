import { useEffect, useState } from 'react';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images] = useState([
    {
      id: 1,
      url: 'https://i.postimg.cc/bNwJ0wSS/1.jpg',
      title: 'Signature Dish',
      category: 'Food',
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/FRJmGQCX/er.jpg',
      title: 'Appetizers Platter',
      category: 'Food',
    },
    {
      id: 3,
      url: 'https://i.postimg.cc/xjxY2yqq/2.jpg',
      title: 'Main Course Variety',
      category: 'Food',
    },
    {
      id: 4,
      url: 'https://i.postimg.cc/xCpZW5g2/3.jpg',
      title: 'Dessert Selection',
      category: 'Food',
    },
    {
      id: 5,
      url: 'https://i.postimg.cc/sDQm2sf7/cock.jpg',
      title: 'Cocktails and Drinks',
      category: 'Drinks',
    },
    {
      id: 6,
      url: 'https://i.postimg.cc/N0mmhj4f/5.jpg',
      title: 'Chef in Action',
      category: 'Experience',
    },
    {
      id: 7,
      url: 'https://i.postimg.cc/mgwPfpzJ/7.jpg',
      title: 'Open Kitchen View',
      category: 'Experience',
    },
    {
      id: 8,
      url: 'https://i.postimg.cc/1504hRfJ/8.jpg',
      title: 'Dining Area',
      category: 'Ambiance',
    },
    {
      id: 9,
      url: 'https://i.postimg.cc/VsnknsBm/9.jpg',
      title: 'Outdoor Seating',
      category: 'Ambiance',
    },
    {
      id: 10,
      url: 'https://i.postimg.cc/bJbpxLn3/11.jpg',
      title: 'Private Dining Room',
      category: 'Ambiance',
    },
    {
      id: 11,
      url: 'https://i.postimg.cc/WzwVK3XZ/game.jpg',
      title: 'Romantic Table Setup',
      category: 'Ambiance',
    },
    {
      id: 12,
      url: 'https://i.postimg.cc/0ygng4m9/54.jpg',
      title: 'Family Dining Moments',
      category: 'Experience',
    },
    {
      id: 13,
      url: 'https://i.postimg.cc/kGmrcRtW/family.jpg',
      title: 'Buffet Spread',
      category: 'Food',
    },
    {
      id: 14,
      url: 'https://i.postimg.cc/PrvzmwVN/09.jpg',
      title: 'Seasonal Specials',
      category: 'Food',
    },
    {
      id: 15,
      url: 'https://i.postimg.cc/1tzD4nNm/cult.jpg',
      title: 'Cultural Cuisine',
      category: 'Food',
    },
    {
      id: 16,
      url: 'https://i.postimg.cc/LX00NZd5/89.jpg',
      title: 'Fresh Ingredients',
      category: 'Food',
    },
    {
      id: 17,
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/26/9a/e6/photo2jpg.jpg',
      title: 'Restaurant Exterior',
      category: 'Ambiance',
    },
    {
      id: 18,
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/26/9a/e4/photo0jpg.jpg',
      title: 'Happy Customers',
      category: 'Experience',
    },
    {
      id: 19,
      url: 'https://i.postimg.cc/VNvhMFTp/66.jpg',
      title: 'Live Music Night',
      category: 'Experience',
    },
    {
      id: 20,
      url: 'https://i.postimg.cc/g2Ts9bSt/55.jpg',
      title: 'Special Events',
      category: 'Experience',
    },
    {
      id: 21,
      url: 'https://i.postimg.cc/9FXYrQsN/43.jpg',
      title: 'Birthday Celebration',
      category: 'Experience',
    },
    {
      id: 22,
      url: 'https://i.postimg.cc/0N16Ktb2/52.jpg',
      title: 'Laughter after smiles',
      category: 'Experience',
    },
    {
      id: 23,
      url: 'https://i.postimg.cc/wMM3YZbF/42.jpg',
      title: 'Kids’ Menu Highlights',
      category: 'Food',
    },
    {
      id: 24,
      url: 'https://i.postimg.cc/6Qx1F203/brea.jpg',
      title: 'Healthy Options',
      category: 'Food',
    },
    {
      id: 25,
      url: 'https://i.postimg.cc/bNwJ0wSS/1.jpg',
      title: 'Seafood Specials',
      category: 'Food',
    },
    {
      id: 26,
      url: 'https://i.postimg.cc/PqKtfKD7/1235.jpg',
      title: 'Grilled Delights',
      category: 'Food',
    },
    {
      id: 27,
      url: 'https://i.postimg.cc/PxPNB07y/veges.jpg',
      title: 'Vegetarian Favorites',
      category: 'Food',
    },
    {
      id: 28,
      url: 'https://i.postimg.cc/MZfvt2VK/33.jpg',
      title: 'Bar Area',
      category: 'Ambiance',
    },
    {
      id: 29,
      url: 'https://images.pexels.com/photos/302905/pexels-photo-302905.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Coffee and Pastries',
      category: 'Food',
    },
    {
      id: 30,
      url: 'https://i.postimg.cc/dtmQSq1v/uuy.jpg',
      title: 'Takeaway Packaging',
      category: 'Experience',
    },
    {
      id: 31,
      url: 'https://th.bing.com/th/id/R.29a22adc6a1cc6cbdc45fa8a3994abd1?rik=pol1KY236%2feReQ&pid=ImgRaw&r=0',
      title: 'Delivery Service',
      category: 'Experience',
    },
    {
      id: 32,
      url: 'https://i.postimg.cc/DyKLXyHK/tail.jpg',
      title: 'Wine Collection',
      category: 'Drinks',
    },
    {
      id: 33,
      url: 'https://i.postimg.cc/yYNp2j6d/ere.jpg',
      title: 'Cocktail Bar Setup',
      category: 'Drinks',
    },
    {
      id: 34,
      url: 'https://media.istockphoto.com/id/938158500/photo/breakfast-table.jpg?b=1&s=612x612&w=0&k=20&c=NsGhEiw5lyT6OFqHl7l8LKt3l3Qf23Xw1w3ZIiRDktg=',
      title: 'Breakfast Spread',
      category: 'Food',
    },
    {
      id: 35,
      url: 'https://i.postimg.cc/sD2NGrLK/men.jpg',
      title: 'Lunch Specials',
      category: 'Food',
    },
    {
      id: 36,
      url: 'https://i.postimg.cc/1zDC15gR/jh.jpg',
      title: 'Dinner Highlights',
      category: 'Food',
    },
    {
      id: 37,
      url: 'https://i.postimg.cc/85XfcM91/bgh.jpg',
      title: 'Restaurant Staff Team',
      category: 'Experience',
    },
  ]);

  // Group images into pairs for horizontal display
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300); // Match this with the fade-out duration
  };

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 bg-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="flex items-center border border-blue-300 hover:border-blue-600 text-blue-600 hover:text-blue-800 px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FiArrowLeft className="mr-2" />
            Home
          </Link>
          <h2 className="text-3xl text-black">Gallery</h2>
          <div className="w-8"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative pb-[75%]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-md font-semibold text-gray-800 text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Viewer */}
      {(selectedImage || isModalOpen) && (
        <div 
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isModalOpen ? 'bg-opacity-75 opacity-100' : 'bg-opacity-0 opacity-0'}`}
          onClick={handleCloseModal}
        >
          <div 
            className={`relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col transition-all duration-300 transform ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-10 right-0 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition z-10"
              onClick={handleCloseModal}
              aria-label="Close Modal"
            >
              <FiX />
            </button>

            {/* Image Container */}
            <div className="relative flex-grow overflow-hidden">
              <img
                src={selectedImage?.url}
                alt={selectedImage?.title}
                className="w-full h-full object-contain max-h-[70vh] md:max-h-[60vh]"
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous Image"
              >
                <FiChevronLeft />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next Image"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Description */}
            <div className="p-4 bg-white border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">{selectedImage?.title}</h3>
              <p className="text-gray-600 mt-1">{selectedImage?.serviceType}</p>
              {selectedImage?.premium && (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-2">
                  Premium Service
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;