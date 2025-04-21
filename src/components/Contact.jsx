import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaArrowUp, FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaHome,
  FaTools,
  FaImages,
  FaInfoCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button if the user scrolls past 600px, hide otherwise
      if (window.scrollY > 5000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 3000; // Duration for smooth scrolling
    const start = window.pageYOffset; // Current scroll position
    const startTime = performance.now(); // Start time of the animation

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime; // Time elapsed since the animation started
      const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
      window.scrollTo(0, start * (1 - easeInOutQuad(progress))); // Scroll position based on easing
      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Continue animation if not complete
      }
    };

    // Easing function for smooth scrolling
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animateScroll); // Start the animation
  };

  return (
    <>
      <div id="contact" className="scroll-mt-24"></div>

      <footer
        className="bg-gray-800 text-white py-12"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Back to Top Button */}
        {showScrollButton && (
          <>
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={15} />
            </button>
          </>
        )}

        <div className="container mx-auto px-4">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-80 bg-red-600"></div>
              <h2 className="text-4xl font-bold text-black" style={{ fontFamily: 'Courier, monospace' }}>
                German Point
              </h2>
              <div className="h-px w-80 bg-red-600"></div>
            </div>
            <p className="text-white mt-2">Authentic German cuisine foods since 1999</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Information</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-medium">Phone:</span> 0798 363 800
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>  germanpoint28@gmail.com
                  </p>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-2 text-red-400" />
                    <div>
                      <p className="font-medium">Location:</p>
                      <p>Rosslyn Riviera Mall,</p>
                      <p>Limuru Road Nairobi, Kenya</p>
                      <a
                        href="https://maps.app.goo.gl/PEWYT72CroAx68Ft5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline inline-block mt-2"
                      >
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-6 rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.67976678517!2d36.799329!3d-1.215903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5edfa7d25b%3A0x1ac8bb30a1bd6d00!2sGerman%20Point!5e0!3m2!1sen!2ske!4v1745058762510!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="German Point Location"
                  ></iframe>
                </div>

                {/* Opening Hours */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Opening Hours</h4>
                  <ul className="space-y-2">
                    <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaHome className="mr-2" /> Home
                  </Link>
                  <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaTools className="mr-2" /> Our Menu
                  </Link>
                  <Link to="/gallery" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaImages className="mr-2" /> Gallery
                  </Link>
                  <Link to="/aboutus" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaInfoCircle className="mr-2" /> About Us
                  </Link>
                  <Link to="/faq" className="flex items-center text-gray-300 hover:text-white transition">
                    <FiHelpCircle className="mr-2" /> FAQ
                  </Link>
                  <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaEnvelope className="mr-2" /> Contact
                  </Link>
                  <Link to="/book-appointment" className="flex items-center text-gray-300 hover:text-white transition col-span-2">
                    <FaCalendarAlt className="mr-2" /> Order Now
                  </Link>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h4>
                  <div className="flex space-x-10">
                    <a
                      href="https://www.facebook.com/people/German-Point/100054201383454/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/germanpoint_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@germanpoint_?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <FaTiktok size={20} />
                    </a>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-8">
                    <a
                      href="https://wa.me/254798363800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition"
                    >
                      <FaWhatsapp className="mr-2" size={20} /> Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-blue-100 text-xl">
            <p>© {new Date().getFullYear()} German Point. All rights reserved.</p>
            <p className="mt-1">Map data ©2025 | Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;