import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What type of cuisine do you serve?",
    answer: "We specialize in a variety of cuisines, including German, AFrican, and Indian dishes, with options for vegetarians and non-vegetarians."
  },
  {
    question: "What are your operating hours?",
    answer: "We are open Monday to Sunday from 7:00 AM to 11:00 PM. Our kitchen closes at 10:30 PM."
  },
  {
    question: "Do you offer reservations?",
    answer: "Yes, we recommend making reservations, especially during weekends and holidays. You can book a table through our website or by calling us directly."
  },
  {
    question: "Do you provide takeaway or delivery services?",
    answer: "Yes, we offer both takeaway and delivery services. You can place your order through our website or partner food delivery apps."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely! We offer gluten-free, vegan, and allergy-friendly options. Please inform our staff about your dietary requirements when placing your order."
  },
  {
    question: "Do you host private events or parties?",
    answer: "Yes, we have private dining spaces available for events, parties, and corporate gatherings. Contact us for more details and reservations."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12 text-black">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-blue-200 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openItems.includes(index)
                    ? 'max-h-48 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;