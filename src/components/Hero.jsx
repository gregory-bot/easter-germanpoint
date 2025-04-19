import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const backgroundVideos = [
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931844/1._lu7yst.mp4",
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931848/2._lhigdy.mp4",
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931840/3._enhdbm.mp4",
];

function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        (prevIndex + 1) % backgroundVideos.length
      );
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Videos */}
      {backgroundVideos.map((video, index) => (
        <video
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          src={video}
          autoPlay
          loop
          muted
        ></video>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        {/* Search Bar */}
        <div className="absolute top-24 w-full flex justify-center">
          <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
        </div>

        {/* Static Text */}
        <div className="text-center mb-12">
          <p
            className="text-4xl md:text-7xl font-semibold"
            style={{ fontFamily: "Courier, monospace" }}
          >
            Welcome to German Point
          </p>
          <p
            className="text-xl md:text-3xl mt-4"
          >
            Experience authentic German cuisine with a modern twist
          </p>
        </div>

        {/* CTA */}
        <div className="absolute bottom-14 flex justify-center w-full z-20">
          <button
            onClick={scrollToServices}
            className="bg-red-600 text-xl text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;