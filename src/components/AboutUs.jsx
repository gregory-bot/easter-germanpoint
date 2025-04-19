import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.postimg.cc/Zqn94Nsw/about1.jpg",
  "https://images.pexels.com/photos/2529468/pexels-photo-2529468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://i.postimg.cc/N0mmhj4f/5.jpg",
  "https://i.postimg.cc/1zDC15gR/jh.jpg",
  "https://i.postimg.cc/9FXYrQsN/43.jpg",
  "https://i.postimg.cc/MZnDyCg5/non.jpg",
];

const testimonials = [
  {
    image: "https://i.postimg.cc/0N16Ktb2/52.jpg",
    name: "Brian",
    feedback: "I really experienced the cuisine😅, and the service was excellent!",
  },
  {
    image: "https://i.postimg.cc/8cpbqPbr/666.jpg",
    name: "Mercy",
    feedback: "A wonderful dining experience with a cozy ambiance.",
  },
  {
    image: "https://i.postimg.cc/8Pnb0Gfj/890.jpg",
    name: "Michael Mwangi",
    feedback: "Great variety of dishes and exceptional customer service.",
  },
  {
    image: "https://i.postimg.cc/5015CNTk/344.jpg",
    name: "Paul",
    feedback: "Quick service and the best desserts I've ever had!",
  },
  {
    image: "https://i.postimg.cc/D0p1HQZt/aser.jpg",
    name: "Cherera",
    feedback: "Affordable prices and a fantastic atmosphere. Will visit again!",
  },
];

function AboutUs() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval);
  }, []);

  // Close the testimonial when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "testimonial-overlay") {
      setSelectedTestimonial(null);
    }
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Above the Image Carousel */}
        <h2 className="text-4xl font-bold text-black mb-6 text-center">
          About German Point
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Smooth Image Carousel */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            {images.map((img, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={img}
                alt="brenxx auto"
                className="absolute inset-0 w-full h-full object-fix rounded-lg"
                style={{ position: "absolute", top: 0, left: 0 }}
                initial={{ opacity: imgIndex === index ? 1 : 0 }}
                animate={{ opacity: imgIndex === index ? 1 : 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          </div>

          {/* About Us Content */}
          <div>
            <p className="text-xl text-black mb-6">
            German Point has been serving authentic German cuisine since 1999. Our passion for traditional recipes and high-quality ingredients has made us a favorite among locals and tourists alike.
            </p>
            <p className="text-xl text-black mb-6">
            Our chefs blend classic German flavors with modern culinary techniques to create dishes that are both familiar and exciting. From hearty sausages to delicate pastries, we offer a taste of Germany right here in the heart of the city.
            </p>
            <p className="text-xl text-black mb-6">
            Join us for a meal and experience the warmth of German hospitality and the rich flavors of our cuisine. Prost!
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10">
          <h3 className="text-2xl text-center text-black mb-8">
            What Our Clients Say
          </h3>
          <div className="flex justify-center items-center space-x-[-20px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer"
                style={{
                  zIndex: testimonials.length - index,
                }}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Selected Testimonial Text */}
          {selectedTestimonial && (
            <div
              id="testimonial-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={handleOutsideClick}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <p className="italic text-lg md:text-xl">
                  "{selectedTestimonial.feedback}"
                </p>
                <p className="font-bold mt-2 text-black">
                  - {selectedTestimonial.name}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;