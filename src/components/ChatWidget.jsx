import { useState, useEffect, useRef } from 'react';
import { FaArrowUp, FaPhoneAlt } from 'react-icons/fa'; // Import icons

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false); // Typing indicator state
  const messagesEndRef = useRef(null); // Ref for auto-scrolling

  // Function to scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user's message to the chat
    setMessages([
      ...messages,
      { text: newMessage, sender: 'user', timestamp: new Date() },
    ]);
    setNewMessage('');

    // Simulate bot's response after a delay
    setIsBotTyping(true); // Show typing indicator
    setTimeout(() => {
      const serviceResponses = {
        'german specialties':
          'We offer authentic German specialties prepared with traditional recipes. Would you like to know more about our dishes?',
        'breakfast':
          'Start your day with our delicious breakfast options, including continental and hearty meals. Can we help you choose?',
        'soups':
          'Our soups are made fresh daily, offering a perfect start to your meal. Would you like to hear about today’s specials?',
        'light meals':
          'We have a variety of light meals and snacks, perfect for a quick bite. What are you in the mood for?',
        'chicken dishes':
          'Our chicken dishes are cooked to perfection with a variety of flavors. Would you like recommendations?',
        'fish dishes':
          'Enjoy our fresh and flavorful fish dishes, prepared with the finest ingredients. Can we suggest something for you?',
        'salads':
          'Our salads are fresh, healthy, and full of flavor. Would you like to know about our vegetarian options?',
        'lamb and pork':
          'We serve tender lamb and pork dishes that are sure to delight. Would you like to try one of our specialties?',
        'vegetarian dishes':
          'We offer a wide range of vegetarian dishes, crafted with fresh ingredients. Can we help you pick one?',
        'cocktails and beverages':
          'Our cocktails and beverages menu features refreshing drinks to complement your meal. What would you like to try?',
        'indian wraps':
          'Our Indian wraps are packed with bold flavors and fresh ingredients. Would you like to know more?',
        'bbq':
          'Our BBQ dishes are grilled to perfection, offering a smoky and savory experience. Can we recommend something?',
        'mutton dishes':
          'Our mutton dishes are rich in flavor and cooked with traditional spices. Would you like to explore our menu?',
        'rice and biryani':
          'We serve aromatic rice dishes, including pilau and biryani. Would you like to hear about our specials?',
        'naans':
          'Our naans are freshly baked and pair perfectly with our curries. Would you like to try one?',
        'seafood':
          'Our seafood dishes are fresh and flavorful, offering a taste of the ocean. Can we suggest something for you?',
        'offers':
          'We have exciting offers available! Would you like to know more about our current promotions?',
      };

      const greetings = ['hello', 'hi', 'hey', 'mambo', 'sasa', 'niaje', 'vipi', 'habari', 'how are you', 'good afternoon', 'good morning', 'good evening', 'uko aje', 'greetings'];
      const serviceKeywords = [
        'german',
        'specialties',
        'breakfast',
        'soups',
        'light meals',
        'snacks',
        'chicken',
        'fish',
        'salads',
        'lamb',
        'pork',
        'vegetarian',
        'dishes',
        'cocktails',
        'beverages',
        'indian',
        'wraps',
        'bbq',
        'mutton',
        'rice',
        'pilau',
        'biryani',
        'naans',
        'beef',
        'seafood',
        'chow mein',
        'pasta',
        'offers',
      ];

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

      const userRequest = newMessage.trim().toLowerCase();
      let botResponse = '';

      // Check for greetings
      const isGreeting = greetings.some((greeting) =>
        userRequest.includes(greeting)
      );
      if (isGreeting) {
        botResponse = 'sasa🙂 How can we assist you today?';
      }
      // Check for service-related keywords
      else {
        const matchedService = serviceKeywords.find((keyword) =>
          userRequest.includes(keyword)
        );
        if (matchedService) {
          botResponse = `We have a great selection of ${matchedService}. Here are some options:\n\n${services
            .map((service) => service.name)
            .join('\n')}\n\nCheck our website for more details!`;
        } else {
          botResponse =
          'I’m here to help! You can ask about our menu items like "German Specialties", "Breakfast", or "Cocktails & Beverages".';

        }
      }

      // Add bot's response to the chat
      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: 'bot', timestamp: new Date() },
      ]);
      setIsBotTyping(false); // Hide typing indicator
    }, 3000); // Simulate a 3-second delay for bot response
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-black transition duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Phone Call FAB */}
      <a
        href="tel:+254798363800"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Chat Widget */}
      <div
        className={`fixed bottom-24 right-6 w-72 sm:w-80 bg-white rounded-lg shadow-xl z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold">talk to us😊</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-72 sm:h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-100'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {/* Typing Indicator */}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-200"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
          {/* Ref for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="type a message..."
              className="flex-1 min-w-0 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}