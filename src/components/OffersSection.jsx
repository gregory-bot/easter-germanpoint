import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function OffersSection() {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const offers = [
    {
      title: 'Where Every Bite Tells a Story – German Point',
      images: [
        'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.pexels.com/photos/9967258/pexels-photo-9967258.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  ];

  const handleSeeAllClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/offers');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    }, 300);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 mb-8 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h2
        className="text-2xl bg-blue-100 mb-4"
        style={{
          fontFamily: 'sans-serif',
          borderRadius: '12px',
          padding: '1rem',
        }}
      >
        Authentic German Cuisine – A Taste of Tradition
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {offers.map((offer, index) => (
          <div key={index} className="mb-4 relative">
            <h3 className="text-xl text-black font-semibold mb-2">{offer.title}</h3>
            <Carousel
              showThumbs={false}
              autoPlay
              interval={8000}
              infiniteLoop
              showStatus={false}
              className="h-32"
            >
              {offer.images.map((image, idx) => (
                <div key={idx} className="h-32 relative">
                  <img
                    src={image}
                    alt={`Offer ${index + 1} Image ${idx + 1}`}
                    className="h-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        {/* Logo on the left */}
        <img
          src="https://i.postimg.cc/HxfZNvVV/logo-2.jpg"
          alt="GermanPoint Logo"
          className="h-10 w-auto"
        />

        {/* Button on the right */}
        <button
          onClick={handleSeeAllClick}
          className="bg-red-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          see all
        </button>
      </div>
    </div>
  );
}

export default OffersSection;