import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import { ImSpinner2 } from "react-icons/im"; // Loading spinner icon
import { useNavigate } from "react-router-dom"; // For navigation

// Example services list with IDs
const services = [
  { id: 1, name: "German Specialties" },
  { id: 2, name: "Breakfast" },
  { id: 3, name: "Soups" },
  { id: 4, name: "Light Meals & Snacks" },
  { id: 5, name: "Chicken Dishes" },
  { id: 6, name: "Fish Dishes" },
  { id: 7, name: "Salads" },
  { id: 8, name: "Lamb & Pork" },
  { id: 9, name: "Vegetarian Dishes" },
  { id: 10, name: "Cocktails & Beverages" },
  { id: 11, name: "Indian Wraps" },
  { id: 12, name: "BBQ" },
  { id: 13, name: "Mutton Dishes" },
  { id: 14, name: "Rice/Pilau/Biryani" },
  { id: 15, name: "Naans" },
  { id: 16, name: "Vegetarian & Non-Vegetarian Dishes" },
  { id: 17, name: "Beef & Pork" },
  { id: 18, name: "Seafood, Chow Mein & Pasta" },
  { id: 19, name: "Offers" },
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track keyboard selection
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLoading(true);

    setTimeout(() => {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredServices(results);
      setShowSuggestions(true);
      setSelectedIndex(-1); // Reset selection index
      onSearch(value);
      setLoading(false);
    }, 500);
  };

  const handleSuggestionClick = (service) => {
    setQuery(service.name);
    setShowSuggestions(false);
    onSearch(service.name);
    navigateToService(service.id); // Navigate to the service's page
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredServices.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const selectedService = filteredServices[selectedIndex];
      handleSuggestionClick(selectedService); // Navigate to the selected service
    }
  };

  const navigateToService = (serviceId) => {
    // Navigate to the service's page using the service ID
    if (serviceId === 11) {
      navigate(`/offers`);
    } else {
      navigate(`/services/${serviceId}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full relative">
      <div className="relative w-68">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Handle keyboard navigation
          placeholder="search for services..."
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg pr-12 text-black"
        />
        
        {/* Search Button with Spinner */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-blue-500 text-white rounded-full p-3 transition duration-300 shadow-md"
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="text-white text-lg animate-spin" />
          ) : (
            <FaSearch className="text-white text-lg" />
          )}
        </button>
      </div>

      {/* Display search suggestions */}
      {query && showSuggestions && filteredServices.length > 0 && (
        <ul className="bg-white w-80 border border-gray-200 shadow-lg mt-2 rounded-lg overflow-hidden text-black absolute top-full z-50">
          {filteredServices.map((service, index) => (
            <li
              key={service.id}
              onClick={() => handleSuggestionClick(service)}
              className={`px-4 py-2 cursor-pointer transition duration-200 text-black ${
                selectedIndex === index ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
            >
              {service.name}
            </li>
          ))}
        </ul>
      )}

      {/* No results found message */}
      {query && showSuggestions && filteredServices.length === 0 && !loading && (
        <p className="text-red-500 mt-2 absolute top-full z-50">No matching services found🥲.</p>
      )}
    </div>
  );
};

export default SearchBar;