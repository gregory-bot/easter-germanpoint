import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the cart context

function OffersPage() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(true);
  const { cartItems, addToCart } = useCart(); // Use the cart context

  const offers = [
    {
      id: 'offer1',
      title: 'Weekend Brunch Special',
      description: 'Enjoy a delightful brunch with a variety of German delicacies and beverages.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer2',
      title: 'Beer & Sausage Combo',
      description: 'Pair your favorite German beer with our signature sausages at a discounted price.',
      image: 'https://i.postimg.cc/FRJmGQCX/er.jpg',
    },
    {
      id: 'offer3',
      title: 'Family Feast Package',
      description: 'A complete meal for the whole family, featuring authentic German dishes.',
      image: 'https://i.postimg.cc/kGmrcRtW/family.jpg',
    },
    {
      id: 'offer4',
      title: 'Dessert Delight',
      description: 'Indulge in our selection of German desserts, including Black Forest Cake and Apple Strudel.',
      image: 'https://i.postimg.cc/5y1GvcZ3/desert.jpg',
    },
    {
      id: 'offer5',
      title: 'Lunch Buffet Offer',
      description: 'Unlimited servings of German cuisine for lunch at an unbeatable price.',
      image: 'https://i.postimg.cc/4Nfqxgv4/123.jpg',
    },
    {
      id: 'offer6',
      title: 'Happy Hour Specials',
      description: 'Discounted drinks and appetizers every evening from 5 PM to 7 PM.',
      image: 'https://i.postimg.cc/rprYPFTj/tuu.jpg',
    },
    {
      id: 'offer7',
      title: 'Kids Eat Free',
      description: 'Kids under 10 eat free with every adult meal purchased on Sundays.',
      image: 'https://i.postimg.cc/m2gpGSRt/rt.jpg',
    },
    {
      id: 'offer8',
      title: 'Oktoberfest Special',
      description: 'Celebrate Oktoberfest with our exclusive beer and pretzel combo.',
      image: 'https://i.postimg.cc/XNQxxyF3/oct.jpg',
    },
    {
      id: 'offer9',
      title: 'Chef’s Tasting Menu',
      description: 'Experience a curated menu of our chef’s finest German dishes.',
      image: 'https://i.postimg.cc/L5XtGNfS/chef.jpg',
    },
    {
      id: 'offer10',
      title: 'Takeaway Meal Deals',
      description: 'Order your favorite German dishes to-go at discounted prices.',
      image: 'https://i.postimg.cc/QM3pjX50/takeaway.jpg',
    },
    {
      id: 'offer11',
      title: 'Breakfast Platter',
      description: 'Start your day with a hearty German breakfast platter.',
      image: 'https://images.pexels.com/photos/4736381/pexels-photo-4736381.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer12',
      title: 'Grilled Sausage Platter',
      description: 'A variety of grilled sausages served with mustard and sauerkraut.',
      image: 'https://images.pexels.com/photos/20150375/pexels-photo-20150375/free-photo-of-meat-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer13',
      title: 'Seasonal Specials',
      description: 'Enjoy seasonal German dishes made with fresh, local ingredients.',
      image: 'https://i.postimg.cc/FF8DkkLK/wewe.jpg',
    },
    {
      id: 'offer14',
      title: 'Vegetarian Feast',
      description: 'A selection of vegetarian German dishes for plant-based food lovers.',
      image: 'https://i.postimg.cc/8zV4t8wQ/rere.jpg',
    },
    {
      id: 'offer15',
      title: 'Soup & Salad Combo',
      description: 'A light and refreshing combo of German soups and salads.',
      image: 'https://images.pexels.com/photos/18805698/pexels-photo-18805698/free-photo-of-food-served-on-the-plates.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer16',
      title: 'Bavarian Pretzel Basket',
      description: 'Freshly baked Bavarian pretzels served with cheese dip.',
      image: 'https://images.pexels.com/photos/30146218/pexels-photo-30146218/free-photo-of-delicious-sausage-platter-with-pretzel-and-beer.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer17',
      title: 'German Beer Flight',
      description: 'Sample a variety of German beers with our beer flight.',
      image: 'https://i.postimg.cc/CxLBFmxn/ty.jpg',
    },
    {
      id: 'offer18',
      title: 'Schnitzel Special',
      description: 'Crispy and golden schnitzel served with your choice of sides.',
      image: 'https://media.istockphoto.com/id/1450360574/photo/portion-of-breaded-cutlet-milanesa-with-salad-served-on-table.jpg?b=1&s=612x612&w=0&k=20&c=i3b7YOHlUa4_0vdm40muas7zNRsnBoSkmE3Kt4nJHHQ=',
    },
    {
      id: 'offer19',
      title: 'German Chocolate Cake',
      description: 'Rich and decadent German chocolate cake for dessert lovers.',
      image: 'https://media.istockphoto.com/id/1326149453/photo/dark-chocolate-cake-slice.jpg?b=1&s=612x612&w=0&k=20&c=8uJnDHXZciSr9Hvq6qptHKqPakYzUk4fgWH_c2xDCMk=',
    },
    {
      id: 'offer20',
      title: 'Festive Feast',
      description: 'Celebrate special occasions with our festive German feast.',
      image: 'https://i.postimg.cc/0NS8xwDJ/fest.jpg',
    },
  ];

  const handleAddToCart = (offer) => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: 0, // You should add prices to your offers
      image: offer.image,
      quantity: 1
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gray-50 pt-20 pb-10 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Special Deals</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '70%' }}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleAddToCart(offer)}
                    className="bg-red-600 hover:bg-yellow-600 text-white px-3 py-2 rounded-md text-sm transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;