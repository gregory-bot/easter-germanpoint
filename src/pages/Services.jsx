import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OffersSection from '../components/OffersSection'; // Imported OffersSection
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'German Specialties',
    description: 'Authentic German dishes crafted with traditional recipes.',
    image: 'https://i.postimg.cc/fR8NNvVL/rrr.jpg',
  },
  {
    id: 2,
    title: 'Breakfast',
    description: 'Start your day with our hearty breakfast options.',
    image: 'https://images.unsplash.com/photo-1588503823575-2744851a4b56?q=80&w=3203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Soups',
    description: 'Warm and comforting soups for every palate.',
    image: 'https://i.postimg.cc/vZVrR0q7/soup.jpg',
  },
  {
    id: 4,
    title: 'Light Meals & Snacks',
    description: 'Perfect for a quick bite or a light meal.',
    image: 'https://i.postimg.cc/Hx9G641d/uu.jpg',
  },
  {
    id: 5,
    title: 'Chicken Dishes',
    description: 'Delicious chicken dishes cooked to perfection.',
    image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Fish Dishes',
    description: 'Fresh and flavorful fish dishes for seafood lovers.',
    image: 'https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=Qoj0rPQNDGT8VdvMhGfXwW-dV0fYVjRCGvH027RyKyg=',
  },
  {
    id: 7,
    title: 'Salads',
    description: 'Fresh and healthy salads with a variety of toppings.',
    image: 'https://i.postimg.cc/6Qx1F203/brea.jpg',
  },
  {
    id: 8,
    title: 'Lamb & Pork',
    description: 'Tender lamb and pork dishes with rich flavors.',
    image: 'https://images.pexels.com/photos/8279981/pexels-photo-8279981.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    title: 'Vegetarian Dishes',
    description: 'Delicious vegetarian options for plant-based food lovers.',
    image: 'https://i.postimg.cc/8zV4t8wQ/rere.jpg',
  },
  {
    id: 10,
    title: 'Cocktails & Beverages',
    description: 'Refreshing cocktails and beverages to complement your meal.',
    image: 'https://i.postimg.cc/sDQm2sf7/cock.jpg',
  },
  {
    id: 11,
    title: 'Indian Wraps',
    description: 'Savor the rich and vibrant flavors of India with our delicious wraps.',
    image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 12,
    title: 'BBQ',
    description: 'Enjoy a variety of marinated and grilled BBQ dishes, including vegetarian options.',
    image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 13,
    title: 'Mutton Dishes',
    description: 'Savor the rich and hearty flavors of our expertly prepared mutton dishes.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 14,
    title: 'Rice/Pilau/Biryani',
    description: 'Delicious rice dishes including plain rice, pilau, and biryani options.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 15,
    title: 'Naans',
    description: 'Freshly baked naan bread with a variety of flavors.',
    image: 'https://images.pexels.com/photos/4109134/pexels-photo-4109134.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 16,
    title: 'Vegetarian & Non-Vegetarian Dishes',
    description: 'A variety of delicious vegetarian and non-vegetarian dishes.',
    image: 'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 17,
    title: 'Beef & Pork',
    description: 'A variety of delicious beef and pork dishes cooked with rich flavors and spices.',
    image: 'https://images.pexels.com/photos/8697520/pexels-photo-8697520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 18,
    title: 'Seafood, Chow Mein & Pasta',
    description: 'A variety of delicious seafood, chow mein, and pasta dishes.',
    image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const brands = [
  { id: 1, name: 'Java House', logo: 'https://th.bing.com/th/id/OIP.F2w28YaAMoUl_qd-kDFs7QHaHa?w=140&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 2, name: 'Kenya Breweries', logo: 'https://dishy.co.ke/wp-content/uploads/2022/03/IMG_20220309_104456.jpg' },
  { id: 3, name: 'Brookside Dairy', logo: 'https://th.bing.com/th/id/OIP.2JzTsUSdUt30g0PtEQB7iQAAAA?w=146&h=91&c=7&r=0&o=5&pid=1.7' },
  { id: 4, name: 'Coca-Cola', logo: 'data:image/jpeg;base64,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' },
  { id: 5, name: 'Del Monte', logo: 'https://logos-world.net/wp-content/uploads/2023/03/Del-Monte-Logo.png' },
  { id: 6, name: 'Kericho Gold', logo: 'https://th.bing.com/th/id/OIP.8TqFjie-dTCrqWyns5729gHaE1?rs=1&pid=ImgDetMain' },
  { id: 7, name: 'KFC Kenya', logo: 'https://logo-marque.com/wp-content/uploads/2020/04/KFC-Logo.png' },
  { id: 8, name: 'Tusker Lager', logo: 'https://th.bing.com/th/id/OIP.lRo7RpIPTYZW3lMl3kQYhgHaFi?rs=1&pid=ImgDetMain' },
  { id: 9, name: 'Bidco Africa', logo: 'https://th.bing.com/th/id/R.dc66c165818912ef7cab4bb77132ef34?rik=p9Z5xz7%2f1M67cw&riu=http%3a%2f%2fwww.bidcoafrica.com%2ffront%2fimages%2fbidco-logo.png&ehk=vF2yZ5s1k1M%2f9SK%2b4vqmpiwyOcP%2flOfAz8gCTPO3FhY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
  { id: 10, name: 'Glovo', logo: 'https://th.bing.com/th/id/R.29a22adc6a1cc6cbdc45fa8a3994abd1?rik=pol1KY236%2feReQ&pid=ImgRaw&r=0' },
  { id: 11, name: 'Kenya Tea Packers', logo: 'https://th.bing.com/th/id/OIP.9LtMMtMx3HAMGAwGfoQA1wAAAA?rs=1&pid=ImgDetMain' },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBrands, setVisibleBrands] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = Math.ceil(brands.length / visibleBrands);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleBrands(2);
      else if (window.innerWidth < 768) setVisibleBrands(3);
      else setVisibleBrands(4);
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? brands.length - visibleBrands : prev - visibleBrands
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev + visibleBrands >= brands.length ? 0 : prev + visibleBrands
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index * visibleBrands);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getVisibleBrands = () => {
    let endIndex = currentIndex + visibleBrands;
    if (endIndex > brands.length) {
      return [...brands.slice(currentIndex), ...brands.slice(0, endIndex % brands.length)];
    }
    return brands.slice(currentIndex, endIndex);
  };

  return (
    <section id="services-section" className="py-8 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offers Section */}
        <OffersSection />

        <h2 className="text-3xl font-bold text-center text-black mb-2">Our Menu</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-2">
        A Culinary Journey Through Germany's Finest Recipes
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-white rounded-lg shadow-md hover:scale-105 transition-transform overflow-hidden"
    >
      <div className="relative group">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{service.title}</p>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-46">
        <div>
          <h3 className="text-md font-semibold text-gray-900">{service.title}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-3">{service.description}</p>
        </div>
        <div className="mt-2 self-end">
          <Link
            to={`/services/${service.id}`}
            className="text-sm px-3 py-1 bg-red-600 text-white hover:bg-blue-700 rounded-md"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Top Brands Carousel */}
        <div
          className="mt-16 bg-cover bg-center bg-no-repeat py-8 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4736583/pexels-photo-4736583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-6">Collaborators</h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Arrows */}
            <button
              onClick={handlePrev}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-100 p-2 rounded-full z-10 shadow hover:bg-gray-100"
            >
              <FiChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-100 p-2 rounded-full z-10 shadow hover:bg-gray-100"
            >
              <FiChevronRight className="w-6 h-6 text-black" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-center">
              {getVisibleBrands().map((brand) => (
                <div key={brand.id} className="flex flex-col items-center transition hover:scale-110">
                  <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-4 bg-white rounded-lg shadow">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mt-2 text-sm sm:text-lg font-bold text-black">{brand.name}</p>
                </div>
              ))}
            </div>

            {/* Mobile Arrows */}
            <div className="sm:hidden flex justify-between items-center mt-4">
              <button onClick={handlePrev} className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button onClick={handleNext} className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex / visibleBrands === index ? 'bg-red-600 w-2' : 'bg-gray-300'
                  } transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
